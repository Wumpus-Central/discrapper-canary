(n.r(t), n.d(t, { default: () => hy }));
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
    x = n(663417),
    v = n(70688),
    j = n(297264),
    b = n(534890),
    y = n(646270),
    k = n(31300),
    w = n(831453),
    S = n(646973),
    N = n(742589),
    A = n(723702),
    C = n(839214);
n(321073);
let I = Object.freeze({ x: 0.5, y: 0.5 });
function E(e) {
    return "" !== e.trim();
}
function M(e) {
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
function _(e) {
    let { kind: t, name: n } = M(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function T(e) {
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
let P = "[conjure:selected] ",
    R = " \u2014 ";
function L(e) {
    if (!e.startsWith(P)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(P.length),
        a = r.indexOf(R),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let $ = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    q = new Map(),
    D = new Set();
function F(e) {
    return q.get(e) ?? $;
}
function O(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? q.set(e, t) : q.delete(e), [...D]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function z(e) {
    let t = F(e);
    t.active || O(e, { ...t, active: !0 });
}
function G(e) {
    let t = F(e);
    t.active && O(e, { ...t, active: !1 });
}
function U(e) {
    q.has(e) && O(e, $);
}
function B(e, t) {
    let n = F(e);
    n.active && O(e, { ...n, context: t });
}
function K(e, t) {
    return null != t && e.authorId === t;
}
function H(e) {
    return (
        D.add(e),
        () => {
            D.delete(e);
        }
    );
}
function V(e) {
    let t = i.useCallback(() => (null == e ? $ : F(e)), [e]);
    return i.useSyncExternalStore(H, t, t);
}
(n(134528), n(947204));
let W = { past: [], present: [], future: [] };
function X(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function Y(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function Z(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => Y(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: Y(e.from, t, n), to: Y(e.to, t, n) };
        case "text":
            return { ...e, at: Y(e.at, t, n) };
    }
}
function Q(e) {
    return e.some((e) => "erase" !== e.kind);
}
function J(e, t) {
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
function ee(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function et(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function en(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => et(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = et(e.from, t),
                l = et(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = et(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function el(e) {
    return Q(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let er = [3, 6, 12],
    ea = [10, 20, 40],
    ei = (0, C.D)(() => ({ byProject: {} })),
    es = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: W,
        sketchDismissedFor: null,
    };
function eu(e) {
    return ei.getState().byProject[e] ?? null;
}
function eo(e, t) {
    let n = eu(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = ei.getState();
    ei.setState({ byProject: { ...r, [e]: l } });
}
function ec(e) {
    if (null == eu(e)) return;
    let { [e]: t, ...n } = ei.getState().byProject;
    (ei.setState({ byProject: n }), U(e));
}
function ed(e, t) {
    null != eu(e) &&
        (eo(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? z(e) : G(e));
}
function ef(e, t) {
    eo(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return X(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return X(
                        e,
                        e.present.map((e) => (e.id === t.id ? Z(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : X(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : X(e, []);
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
    return ei.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var eh = n(39416);
function eg(e) {
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
            className: eh.i5,
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
var ep = n(314116),
    ex = n(858899),
    ev = n(949757),
    ej = n(800202),
    eb = n(809526),
    ey = n(105292),
    ek = n(766367);
let ew = new Set(),
    eS = null;
function eN(e, t) {
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
                ew.add(t),
                () => {
                    ew.delete(t);
                }
            );
        }, [e]));
}
var eA = n(253932);
function eC() {
    return eA.Q_.useSetting() || !1;
}
var eI = n(573083);
let eE = (0, n(945810).mj)({
    name: "2026-10-conjure-mcp-ui",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 } },
});
var eM = n(192308),
    e_ = n(128761),
    eT = n(12177),
    eP = n(967008);
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
                : ey.intl.formatToPlainString(eb.default["6xVl+N"], {
                      surface: (0, eH.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return ey.intl.string(eb.default.y5GiL1);
        case "overlay":
            return ey.intl.string(eb.default["2940LX"]);
        case "bot":
            return ey.intl.string(eb.default.tjpaGN);
    }
}
var eX = n(939398),
    eY = n(86147),
    eZ = n(729475),
    eQ = n(91242),
    eJ = n(156548),
    e0 = n(869146),
    e1 = n(475815),
    e2 = n(652215),
    e3 = n(165610);
function e4(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, eJ.cR)(t?.id ?? null),
        r = (0, eI.Zv)(n),
        i = (0, m.bG)(
            [e0.A, eQ.A],
            () => null != t && e0.A.getWindowOpen(e2.MLl.ACTIVITY_POPOUT) && eQ.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, e3.x1)(t) || i || r) return null;
    let s = (0, eJ.fl)(t.id);
    if (null == s || !(0, e1.Ub)(s)) return null;
    let u = ey.intl.string(l ? ey.t.Z7MyNB : ey.t.OIDkcp);
    return (0, a.jsx)(N.A.Icon, {
        tooltip: u,
        icon: l ? eY.z : eZ.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, eJ.U8)(t.id),
    });
}
var e7 = n(265872),
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
    let m = ey.intl.string(eb.default.I2ucou);
    return (0, a.jsx)(e7.Y, {
        targetElementRef: f,
        shouldShow: r,
        onRequestClose: c,
        position: "bottom",
        align: "right",
        animation: e7.Y.Animation.NONE,
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
                            children: ey.intl.string(eb.default["N+VA1J"]),
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
          ? ey.intl.string(eb.default["120EFN"])
          : tx(e) && !e.publishing
            ? ey.intl.string(eb.default.kAfbEN)
            : e.label;
}
var tj = n(373540),
    tb = n(189213),
    ty = n(144228);
function tk(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, u] = i.useState(t.selected_destination_id),
        o = ey.intl.string(eb.default.lJrOGW);
    return (0, a.jsx)(tb.a, {
        transitionState: l,
        onClose: r,
        title: o,
        size: "sm",
        actions: [
            { text: ey.intl.string(eb.default.y83r6D), variant: "secondary", onClick: r },
            {
                text: ey.intl.string(eb.default.zh1Izp),
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
            (0, eM.openModal)(
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
    showError: (e) => (0, ex.P0)({ text: e, variant: "critical" }),
};
var tS = n(811587);
let tN = "conjure-publish";
function tA(e) {
    let t = (0, eM.getInteractingModalContext)(),
        l = { current: !1 };
    (0, eM.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("880475"), n.e("801342"), n.e("924150")]).then(
                n.bind(n, 372501),
            );
            return (n) => (0, a.jsx)(t, { ...n, ...e, savingRef: l });
        },
        {
            modalKey: tN,
            contextKey: t,
            onCloseRequest: () => {
                l.current || (0, eM.closeModal)(tN, t);
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
                    : tA({ projectId: e, publishOptions: r, entryPoint: n });
            },
            [e, t, r, tA],
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
        } = (0, tO.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        N = i.useRef(null),
        A = (d || j.length > 0) && w && !m,
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
        q = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, L), Math.max(L, l.top + l.height - P - 8));
    return (0, a.jsxs)("div", {
        ref: M,
        className: f()(tz.M0, { [tz.ho]: I && !m, [tz.ET]: m }),
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
                              className: tz.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(tq.m, {
                              position: "bottom",
                              text: ey.intl.string(eb.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: tz.tY,
                                  onClick: () => N.current?.click(),
                                  "aria-label": ey.intl.string(eb.default.lgvqSB),
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
                placeholder: x ?? ("" === r ? ey.intl.string(eb.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? ey.intl.string(eb.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: m || !p ? void 0 : y,
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
    tX = n(193885),
    tY = n(744898),
    tZ = n(803656),
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
let t3 = t2("red", t1(t0.A.unsafe_rawColors.RED_400), () => ey.intl.string(eb.default.tvXfjt)),
    t4 = [
        t3,
        t2("yellow", t1(t0.A.unsafe_rawColors.YELLOW_300), () => ey.intl.string(eb.default.FYuaJ1)),
        t2("green", t1(t0.A.unsafe_rawColors.GREEN_360), () => ey.intl.string(eb.default["Vv+paS"])),
        t2("blue", t1(t0.A.unsafe_rawColors.BLUE_345), () => ey.intl.string(eb.default.k9b1QJ)),
        t2("white", t1(t0.A.unsafe_rawColors.WHITE), () => ey.intl.string(eb.default["1sOXwH"])),
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
function t6(e) {
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
let ne = er.map((e) => t9(Math.min(16, e + 3))),
    nt = ea.map((e) => t9(Math.min(16, e / 2.5))),
    nn = [eb.default.jZtZUr, eb.default.cTQdD0, eb.default.J3ucEg],
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
            label: () => ey.intl.string(eb.default.oIZQbm),
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
            label: () => ey.intl.string(eb.default.ARNVr7),
        },
    };
function nr(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(tq.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: eh.z6,
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
        className: eh.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: eh.mz,
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
        g = ey.intl.string(eb.default.hUm825),
        p = ey.intl.string(eb.default.n5IA3a),
        x = ey.intl.string(eb.default.r5dX6t),
        v = ey.intl.string(eb.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: eh.t$,
        children: [
            (0, a.jsx)("div", {
                className: eh.NT,
                children: (0, a.jsx)(nr, {
                    icon: t6,
                    label: ey.intl.string(eb.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => ed(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: eh.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": ey.intl.string(eb.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(nr, {
                        icon: t5,
                        label: ey.intl.string(eb.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => ed(t, "move"),
                    }),
                    (0, a.jsx)(nr, {
                        icon: tW.x,
                        label: ey.intl.string(eb.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => ed(t, "text"),
                    }),
                    (0, a.jsx)(ni, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(nr, {
                                icon: tX.V,
                                label: g,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (ed(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            ne.map((n, l) =>
                                (0, a.jsx)(
                                    nr,
                                    {
                                        icon: n,
                                        label: ey.intl.string(nn[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            (eo(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), G(t), e());
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
                                    (ed(t, o), e());
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
                                            (ed(t, n), e());
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
                                icon: t8,
                                label: p,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (ed(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            nt.map((n, l) =>
                                (0, a.jsx)(
                                    nr,
                                    {
                                        icon: n,
                                        label: ey.intl.string(nn[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            (eo(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), G(t), e());
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
                                                eo(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: eh.Gz, role: "separator" }),
                    (0, a.jsx)(na, {
                        icon: tY.e,
                        label: ey.intl.string((0, A.isMac)() ? eb.default["j/XmBQ"] : eb.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(na, {
                        icon: tZ.U,
                        label: ey.intl.string((0, A.isMac)() ? eb.default.C7jhpn : eb.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(na, {
                        icon: tQ.TrashIcon,
                        label: ey.intl.string(eb.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: eh.Gz, role: "separator" }),
                    (0, a.jsx)(na, { icon: tJ.XLargeIcon, label: ey.intl.string(eb.default.tuQ5f3), onClick: l }),
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
    nh = (0, C.D)(() => ({ byMessageKey: {} }));
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
        u = em(s),
        { active: o } = V(s),
        c = (0, eM.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => ec(s);
    }, [s]);
    let d = u?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !o && z(s);
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
        { tool: N, history: A } = n,
        C = t7(n.colorId),
        I = "pick" !== N,
        E = "marker" === n.tool ? er[n.markerSize] : "eraser" === n.tool ? ea[n.eraserSize] : null,
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
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? Z(e, g.dx, g.dy) : e)),
            u = j.current;
        no(a, null == u ? s : [...s, u], { width: r.width, height: r.height });
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
                id: `mark-${nb++}`,
                kind: "text",
                color: C.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (J(n, r) && ef(t, { type: "commit", shape: n }), u(null));
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
                            l = null == M ? null : en(M, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? M
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = et(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => et(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (ee(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = et(e.from, n),
                                                                  r = et(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => ee(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = et(e.from, n),
                                                                  r = et(e.to, n),
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
                                                              let t = en(e, n);
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
                        if (!Q(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nb++}`,
                                kind: "erase",
                                width: ea[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nb++}`,
                                kind: "marker",
                                color: C.value,
                                width: er[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nb++}`,
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
                ((b.current = null), p(nv), ef(t, { type: "move", id: e.id, dx: g.dx, dy: g.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && J(n, r) ? ef(t, { type: "commit", shape: n }) : R());
        }, [t, r, g, R]),
        z = i.useCallback(() => ec(t), [t]),
        G = i.useCallback(() => ef(t, { type: "undo" }), [t]),
        U = i.useCallback(() => ef(t, { type: "redo" }), [t]),
        B = i.useCallback(() => ef(t, { type: "clear" }), [t]),
        K = i.useRef({ tool: N, selected: M, exit: z, undo: G, redo: U });
    if (
        (i.useLayoutEffect(() => {
            K.current = { tool: N, selected: M, exit: z, undo: G, redo: U };
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
                    (e.preventDefault(), ef(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = nj[s];
                null != u && (e.preventDefault(), ed(t, u));
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
        V = null == M ? null : en(null == b.current ? M : Z(M, g.dx, g.dy), r);
    return (0, tP.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: eh.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: eh.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: eh.Ji,
                            "data-tool": N,
                            "data-interactive": I && !o ? "" : void 0,
                            "aria-label": ey.intl.string(eb.default["qlgN+X"]),
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
                                  className: eh.V$,
                                  "data-tool": N,
                                  "data-color": C.id,
                                  style: { width: E, height: E },
                                  "aria-hidden": !0,
                              }),
                        null == V
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: eh.r1,
                                  style: { left: V.x, top: V.y, width: V.width, height: V.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: eh.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: eh.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: eh.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: eh.p$, "data-corner": "se" }),
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
                          placeholder: ey.intl.string(eb.default["8gX1lw"]),
                          label: ey.intl.string(eb.default["5W7SSZ"]),
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
                    className: eh.ej,
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
    nN = n(683071),
    nA = n(65593),
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
        className: f()(nD.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: f()(nD.wx, null != n && nD.o5, i),
                children: [
                    (0, a.jsx)(u.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
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
    return (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nG(e) {
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
        j = h ? e9.a : nq._,
        b = null != n || l;
    return (0, a.jsxs)(nF, {
        ...d,
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
        children: [o, (0, a.jsx)("div", { id: m, className: f()(nO.rf, u), hidden: !h, children: c })],
    });
}
var nU = n(883646);
let nB = [];
function nK(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: f()(nU.xL, {
            [nU.Vb]: "in_progress" === t,
            [nU.cT]: "completed" === t,
            [nU.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ey.intl.string(eb.default.KvBdun);
                case "in_progress":
                    return ey.intl.string(eb.default["m5G9+S"]);
                case "unfinished":
                    return ey.intl.string(eb.default.lRpwhD);
                default:
                    return ey.intl.string(eb.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(o.y, {
                type: o.y.Type.SPINNING_CIRCLE_SIMPLE,
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
        className: nU.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
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
            x > 0
                ? (0, a.jsx)(u.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: nU.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function nV(e) {
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
                        className: f()(nU.AS, { [nU.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(nK, { status: n }),
                            (0, a.jsx)(u.E, {
                                variant: "experimental/body-sm/medium",
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
                          (0, a.jsx)(u.E, {
                              variant: "experimental/body-sm/medium",
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
    let c = ey.intl.formatToPlainString(eb.default["P/I+JW"], { completed: u, total: o }),
        d = ey.intl.formatToPlainString(eb.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(nG, {
        title: ey.intl.string(eb.default.RtzECX),
        meta: (0, a.jsx)(nz, { children: c }),
        superseded: s,
        showLabel: ey.intl.string(eb.default.RKyN9q),
        hideLabel: ey.intl.string(eb.default.xydHoj),
        className: nU.Nr,
        bodyClassName: nU.rf,
        beforeBody: r && !s ? (0, a.jsx)(n$.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(nV, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nX = n(308665),
    nY = n(59678),
    nZ = n(903847);
function nQ(e) {
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
    return h
        ? (0, a.jsxs)("div", {
              className: nZ.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: f()(nZ.vK, { [nZ.ho]: p && c, [nZ.ET]: !c }),
                      children: [
                          null == o
                              ? (0, a.jsx)("ol", {
                                    className: f()(nZ.Rk, nY.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(nR.A, {
                                        glyph: (0, a.jsx)(nX.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(nT.D, {
                                    className: nZ.pZ,
                                    onClick: o,
                                    "aria-label": ey.intl.string(eb.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: f()(nZ.Rk, nY.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(nR.A, {
                                            glyph: (0, a.jsx)(nX.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(tq.m, {
                                    text: ey.intl.string(eb.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(nT.D, {
                                        className: nZ.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": ey.intl.string(eb.default.RtzECX),
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
                            className: f()(nZ.vB, { [nZ.pg]: v && S, [nZ.ui]: !v }),
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
    n6 = n(103557),
    n8 = n(29073),
    n9 = n(590077);
function le(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
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
                N = d.trim(),
                A = n && !m && (w.length > 0 ? "" !== N : o.length > 0),
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
                                                          ey.intl.formatToPlainString(eb.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = ey.intl.formatToPlainString(eb.default.jZlNst, { targets: l });
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
                    if (!A) return;
                    if (0 === w.length) return void C(o);
                    (h(!0), p(!1));
                    let l =
                        ((t = ti.Ay.getProject(e)?.name ?? e),
                        (n = ey.intl.formatToPlainString(eb.default.ScoZLp, { name: t, projectId: e })),
                        `${N}

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
                            n = [...o, ...t.map((e) => ({ target: e, prompt: N }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && C(n);
                            return;
                        }
                        (c(n), u(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [A, C, o, e, w, N]),
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
                canSubmit: A,
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
        className: f()(n8.nd, n8.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: n8.wx,
                children: [
                    (0, a.jsx)(u.E, {
                        tag: "span",
                        id: d,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: n8.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tV.K, {
                        icon: tM.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": ey.intl.string(eb.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: n9.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ey.intl.string(eb.default.TbbzW5),
                          })
                        : (0, a.jsx)(n5.Z, {
                              label: ey.intl.string(eb.default["29gr8j"]),
                              placeholder: ey.intl.string(eb.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(n6.f, {
                        label: ey.intl.string(eb.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? ey.intl.string(eb.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: n8.qr,
                children: (0, a.jsx)("div", {
                    className: n8.zt,
                    children: (0, a.jsx)(h.$, {
                        variant: "primary",
                        size: "sm",
                        text: ey.intl.string(eb.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
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
let ls = {
    [e2.rbe.GUILD_TEXT]: "text",
    [e2.rbe.GUILD_VOICE]: "voice",
    [e2.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [e2.rbe.GUILD_STAGE_VOICE]: "stage",
    [e2.rbe.GUILD_FORUM]: "forum",
    [e2.rbe.GUILD_MEDIA]: "media",
};
function lu(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = ln.A.getChannel(t)?.type) ? void 0 : ls[n];
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
let lo = { channel: "#", role: "@", user: "@", project: "", server: "" },
    lc = {
        channel: [eb.default["9+dfPT"], eb.default.pGSJqE],
        role: [eb.default["2VkCoD"], eb.default.c8YlX8],
        user: [eb.default.GZIAxl, eb.default["4bptbQ"]],
        project: [eb.default.twlOb6, eb.default.twlOb6],
        server: [eb.default.ZWXDeI, eb.default.ZWXDeI],
    };
function ld(e, t) {
    return ey.intl.string(lc[e][+!!t]);
}
var lf = n(658675),
    lm = n(22231),
    lh = n(900797),
    lg = n(123292),
    lp = n(691885);
function lx(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: u } = e,
        o = i.useMemo(() => la.Hi.map((e) => ({ id: e, value: e, label: (0, la.hU)(e) })), []);
    return (0, a.jsx)(lp.l, {
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
var lv = n(344587),
    lj = n(155078);
function lb(e) {
    return e.options.some((e) => null != e.image);
}
let ly = [];
function lk(e, t) {
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
var lw = n(548118),
    lS = n(300344),
    lN = n(614733),
    lA = n(904363),
    lC = n(950902),
    lI = n(136722),
    lE = n(66834),
    lM = n(808728),
    l_ = n(696451),
    lT = n(71393),
    lP = n(488926),
    lR = n(426035),
    lL = n(246338);
let l$ = lI.kg(e2.xBc.VIEW_CHANNEL, e2.xBc.SEND_MESSAGES);
var lq = n(384017);
function lD(e) {
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
        return lu(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
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
        className: lq.YX,
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
function lF(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, lS.A)(n, r.question.channel_filter);
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
                        return null == e ? null : (0, lR.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || l_.Ay.isMember(r, n) || lE.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, m.bG)(
                    [lM.Ay, l_.Ay, lT.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lT.A.getGuild(r)?.safetyAlertsChannelId,
                            l = lM.Ay.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, lL.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && l_.Ay.isMember(r, n))
                            return lP.$3({ permission: l$, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? lI.BY;
                        return lI.X8(s, l$) ? null : i;
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
                            o(((e = []), lu("channel", [c.id], () => (0, lt.m1)(c, lr.default, ll.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== d.current ? (f.current = !0) : null == c && ((f.current = !0), o([], r));
            }
        }, [c, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(lD, { ...r, guildId: n, options: s, placeholder: ld("channel", !0 === r.question.multi_select) });
}
function lO(e) {
    let { guildId: t, ...n } = e,
        l = (0, lA.A)(t);
    return (0, a.jsx)(lD, { ...n, guildId: t, options: l, placeholder: ld("role", !0 === n.question.multi_select) });
}
function lz(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, lN.A)(t);
    return (0, a.jsx)(lD, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: ld("user", !0 === n.question.multi_select),
    });
}
function lG(e) {
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
    return 0 === s.length ? n : (0, a.jsx)(lD, { ...l, options: s, placeholder: ld("project", !1) });
}
function lU(e) {
    let t = e.target;
    (0, tR.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lB(e) {
    let { fallback: t, ...n } = e,
        l = (0, n1.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(lw.Ay, { guild: e, size: lw.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: lU,
              onMouseUp: lU,
              children: (0, a.jsx)(lD, { ...n, options: r, placeholder: ld("server", !1) }),
          });
}
function lK(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lC.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lG, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(lB, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lF, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lO, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lz, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lH = n(87221),
    lV = n(26430),
    lW = n(750943),
    lX = n(173936),
    lY = n(95477),
    lZ = n(256905),
    lQ = n(490707),
    lJ = n(907702);
function l0(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = (0, lQ._)(t, n),
        [d, m] = i.useState(null),
        h = null != s && d === s;
    return o
        ? (0, a.jsxs)("span", {
              className: f()(lJ.Gt, lJ.b6),
              children: [
                  (0, a.jsx)(lH.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(u.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: ey.intl.string(eb.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: f()(lJ.Gt, { [lJ.iP]: !h }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lJ.Sl,
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
function l1(e) {
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
        v = ey.intl.formatToPlainString(eb.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: f()(lJ.Vs, { [lJ.Q9]: s, [lJ.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(nT.D, {
                className: f()(lJ.Up, { [lJ.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: o ? (null != r.image ? () => h(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), g(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ey.intl.formatToPlainString(eb.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: lJ.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(l0, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: lJ.Gt }),
                            (0, a.jsx)("span", {
                                className: lJ.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(lf.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(ty.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lJ.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, lj.E)(t) : "")
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
                      className: lJ.B4,
                      children: (0, a.jsx)(tq.m, {
                          text: ey.intl.string(eb.default.HQEXJM),
                          children: (0, a.jsx)(tV.K, {
                              icon: tQ.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: o,
                              "aria-label": ey.intl.string(eb.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: lJ.B4,
                        children: (0, a.jsx)(tq.m, {
                            text: ey.intl.string(eb.default["4/eeDD"]),
                            children: (0, a.jsx)(tV.K, {
                                icon: lV._,
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
function l2(e) {
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
                      label: ey.intl.string(eb.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [o.image]),
        b = i.useCallback(
            (e) => {
                let n = (null == j ? d : [...d, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, t$.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, lZ.R)({
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
        className: lJ.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: h,
                className: f()(lJ.fF, "gallery" === m ? lJ.nV : lJ.nM, { [lJ.m3]: c }),
                role: c ? "group" : "radiogroup",
                "aria-labelledby": `${n.id}-label`,
                "data-layout": m,
                "data-count": d.length,
                children: [
                    d.map((e) =>
                        (0, a.jsx)(
                            l1,
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
                              l1,
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
            (0, a.jsx)(l3, {
                projectId: t,
                own: o,
                disabled: r,
                reachable: s,
                uploadText: ey.intl.string(/\bicons?\b/i.test(n.question) ? eb.default.qU4WN6 : eb.default.cbMDDB),
            }),
        ],
    });
}
function l3(e) {
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
        className: lJ.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lJ.QJ,
                children: [
                    (0, a.jsx)(h.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lW.X,
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
                              icon: lX.LinkIcon,
                              text: ey.intl.string(eb.default["1TgOO+"]),
                              disabled: l || "upload" === p,
                              onClick: () => d(!0),
                              tabIndex: g,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lJ.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, n0.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            c
                ? (0, a.jsxs)("div", {
                      className: lJ.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lJ.Hs,
                              children: (0, a.jsx)(lY.k, {
                                  label: ey.intl.string(eb.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ey.intl.string(eb.default.AVhvn8),
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
                              className: lJ.gd,
                              children: [
                                  (0, a.jsx)(h.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ey.intl.string(eb.default.FbRbeM),
                                      loading: "link" === p,
                                      disabled: l || "" === f.trim(),
                                      onClick: x,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lg.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: ey.intl.string(eb.default.eXZL4X),
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
function l4(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(nT.D, {
        className: f()(lq.uK, { [lq.ue]: l, [lq.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": ey.intl.formatToPlainString(d ? eb.default["2p6UFz"] : eb.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: lq.dy, children: (0, a.jsx)(lf.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: lq.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lq.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lq.l8,
                        children: (0, a.jsx)(u.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lq.ed,
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
                      className: lq.rM,
                      children: ey.intl.string(eb.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l7(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return lb(n)
        ? (0, a.jsx)(l2, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      l4,
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
let l5 = [],
    l6 = [];
function l8(e) {
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
        className: f()(lq.Ge, lq.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            m
                ? (0, a.jsx)(u.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: lq.aK,
                      children: ey.intl.string(eb.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(l7, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lk(o, c),
            }),
            lb(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: lq.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lq.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lm.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: f()(lq.Pu, lq.es), children: d }),
                      ],
                  }),
        ],
    });
}
function l9(e) {
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
        [X, Y] = i.useState({ id: W.id, expanded: !1 }),
        Z = X.id === W.id && X.expanded,
        [Q, J] = i.useState(null),
        ee = v[W.id] ?? "",
        et = !0 === W.multi_select,
        en = lb(W),
        el = et ? (b[W.id] ?? l5) : ((t = p[W.id]), t?.kind === "option" ? [t.optionId] : ly),
        er = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = ey.intl.string(eb.default.wTsP5l),
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
                        if (u) return lk(h, f(i));
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
                                                error: { source: "upload", text: ey.intl.string(eb.default["kUw/b1"]) },
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
                                                        : ey.intl.string(eb.default.l79PMc),
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
        { text: es, phase: eu } = (0, lv.Q)(W.question),
        eo = es === W.question,
        ec = eo && Q?.id === W.id && Q.truncated;
    i.useLayoutEffect(() => {
        if (null == z || Z || !eo) return;
        function e() {
            if (null == z) return;
            let e = z.scrollHeight > z.clientHeight + 1;
            J((t) => (t?.id === W.id && t.truncated === e ? t : { id: W.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(z), () => t.disconnect());
    }, [eo, z, W.id, Z]);
    let ed = ey.intl.string(Z ? ey.t.iTcuma : ey.t.dcl9MQ),
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
                                              return (0, la.Ol)(n, e, l);
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
        ej = (V > 0 && !K) || null != ev,
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
        eN = k[W.id] ?? l6,
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
                          ...eN.map((t) => (t.name.startsWith(lo[e]) ? t.name : `${lo[e]}${t.name}`)),
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
                })(eA, eS, ee),
            [ee, eS, eA],
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
        eD = e_ ?? (null == eA && null == eS ? (p[W.id] ?? null) : null),
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
                    (0, tR.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tR.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tR.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ej
                            ? (e.preventDefault(), (ev ?? ex)())
                            : "ArrowRight" === e.key && eF && (e.preventDefault(), ez())));
            },
            [ev, ej, eF, ex, ez],
        ),
        eU = en
            ? null
            : (0, a.jsxs)("div", {
                  className: lq.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: lq.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(lm.PencilIcon, {
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
                                  (e.preventDefault(), eT());
                          },
                          placeholder: ey.intl.string(li(W) ? eb.default.yLN1x6 : eb.default["tOC+tn"]),
                          "aria-label": ey.intl.formatToPlainString(eb.default["4JeYPB"], { question: W.question }),
                          disabled: K,
                          rows: 1,
                          className: lq.Pu,
                          "data-conjure-clarification-other": W.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: f()(lq.$O, { [lq.fI]: eP && !eL, [lq.Oh]: eL }),
        role: "dialog",
        "aria-label": W.question,
        "data-conjure-clarification": l.id,
        "data-state": K ? "inert" : "open",
        "data-question-expanded": Z ? "true" : void 0,
        "data-picker-open": I && !D ? "true" : void 0,
        "data-step": V,
        tabIndex: -1,
        onKeyDown: eG,
        children: [
            (0, a.jsxs)("div", {
                className: lq.rf,
                style: null == $ ? void 0 : { height: $.heading + $.rows },
                "data-moving": D ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: O,
                        className: lq.wx,
                        children: [
                            (0, a.jsx)(u.E, {
                                ref: G,
                                tag: "span",
                                id: `${W.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: Z ? void 0 : g,
                                className: f()(n8.TK, lq.R_, { [lq.TB]: "exit" === eu, [lq.JU]: "enter" === eu }),
                                children: es,
                            }),
                            ec || Z
                                ? (0, a.jsx)("div", {
                                      className: n8.Q7,
                                      children: (0, a.jsx)(tq.m, {
                                          text: ed,
                                          children: (0, a.jsx)(tV.K, {
                                              icon: Z ? lh.t : e9.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => Y({ id: W.id, expanded: !Z }),
                                              "aria-label": ed,
                                              "aria-controls": `${W.id}-label`,
                                              "aria-expanded": Z,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(nT.D, {
                                      className: f()(n8.gb, n8.Q7),
                                      onClick: eq,
                                      "aria-label": ey.intl.string(eb.default.qVXlk0),
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
                        className: lq.Cg,
                        style: null == $ ? void 0 : { insetBlockStart: $.heading },
                        children: (0, a.jsxs)("div", {
                            className: lq.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: U,
                                    className: lq.Ge,
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
                                                  className: lq.aK,
                                                  children: ey.intl.string(eb.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(l7, {
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
                                                                  ((n = t[W.id] ?? l5),
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
                                            ? (0, a.jsx)(lK, {
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
                                                  className: lq.X_,
                                                  children: (0, a.jsx)(lg.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: ey.intl.string(eb.default.eCzCxC),
                                                      disabled: K,
                                                      onClick: () => C((e) => ({ ...e, [W.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === W.link && eN.length > 0 && null != A[W.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: lq.$y,
                                                  onFocus: eI,
                                                  onBlur: eE,
                                                  children: [
                                                      (0, a.jsx)(u.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: ey.intl.string(eb.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(lx, {
                                                          label: ey.intl.string(eb.default.Odrcmq),
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
                                            ? (0, a.jsx)(u.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lq.aK,
                                                  children: W.note,
                                              })
                                            : null,
                                        !1 === W.allow_custom ? null : eU,
                                    ],
                                }),
                                null == R
                                    ? null
                                    : (0, a.jsx)(
                                          l8,
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
                      className: n8.qr,
                      children: [
                          (0, a.jsx)(u.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  H > 1
                                      ? ey.intl.formatToPlainString(eb.default.yzYUjq, { index: V + 1, total: H })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: n8.zt,
                              children: [
                                  ej
                                      ? (0, a.jsx)(lg.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: d ?? ey.intl.string(eb.default.Pk5lfA),
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
                                                ? (o ?? ey.intl.string(ey.t.geKm7t))
                                                : ey.intl.string(eb.default.w1nRmT),
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
var re = n(557744),
    rt = n(223347),
    rn = n(894443),
    rl = n(525530),
    rr = n(245179),
    ra = n(708679);
function ri(e) {
    return (0, m.bG)([ti.Ay], () => ti.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let rs = "scope-setup:q0",
    ru = `${rs}:0`,
    ro = `${rs}:1`;
var rc = n(715924);
let rd = [];
function rf() {}
function rm(e) {
    let { projectId: t, card: n } = e,
        l = i.useId(),
        [r] = n.clarification.questions,
        [s, o] = i.useState(r.default_entities ?? rd),
        { onPickServer: c, onBack: d } = n,
        m = s[0]?.id;
    return (0, a.jsxs)("section", {
        className: f()(n8.nd, n8.jx),
        "aria-labelledby": l,
        "data-conjure-scope-server-card": !0,
        children: [
            (0, a.jsxs)("div", {
                className: rc.wx,
                children: [
                    (0, a.jsx)(u.E, {
                        tag: "span",
                        id: l,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: ey.intl.string(eb.default.ickKBI),
                    }),
                    (0, a.jsx)(u.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: ey.intl.string(eb.default.OyM4SV),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: rc.Qs,
                children: [
                    (0, a.jsx)(lK, {
                        projectId: t,
                        question: r,
                        value: s,
                        disabled: null == c,
                        onChange: o,
                        onFocus: rf,
                        onBlur: rf,
                    }),
                    null != r.note
                        ? (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
            (0, a.jsxs)("div", {
                className: rc.qr,
                children: [
                    (0, a.jsx)(h.$, {
                        variant: "primary",
                        size: "sm",
                        text: ey.intl.string(eb.default.PTIP7V),
                        disabled: null == m || null == c,
                        onClick: () => {
                            null != m && c?.(m);
                        },
                    }),
                    null != d
                        ? (0, a.jsx)(lg.Q, {
                              variant: "secondary",
                              textVariant: "text-sm/medium",
                              text: ey.intl.string(ey.t["ETE/oC"]),
                              onClick: d,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function rh(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, m.bG)([ti.Ay], () => ti.Ay.getProject(e), [e]),
                n = (0, n1.z9)("ConjureScopeSetupCard"),
                [l, r] = i.useState(null),
                [a, s] = i.useState(!1),
                [u, o] = i.useState(null),
                c = t?.install_scope_setup,
                d = "server" === l || (null == l && "choose_server" === c),
                f = t?.guild_id,
                h = i.useMemo(() => {
                    var t;
                    return d
                        ? ((t = f ?? (0, ra.EP)(e)),
                          {
                              id: n.length > 0 ? "server-setup" : "server-setup-empty",
                              questions: [
                                  {
                                      id: "server-setup:q0",
                                      question: ey.intl.string(n.length > 0 ? eb.default.ZWXDeI : eb.default["u5+Qhu"]),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options:
                                          n.length > 0 ? [] : [{ id: ru, label: ey.intl.string(eb.default.qLYOpH) }],
                                      ...(0, ra.XU)(n, t),
                                  },
                              ],
                          })
                        : {
                              id: "scope-setup",
                              questions: [
                                  {
                                      id: rs,
                                      question: ey.intl.string(eb.default.ickKBI),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: [
                                          {
                                              id: ru,
                                              label: ey.intl.string(eb.default.qLYOpH),
                                              detail: ey.intl.string(eb.default.QSKvUE),
                                          },
                                          {
                                              id: ro,
                                              label: ey.intl.string(eb.default.QV5C7b),
                                              detail: ey.intl.string(eb.default["ZzHR4/"]),
                                          },
                                      ],
                                  },
                              ],
                          };
                }, [d, n, f, e]);
            if (null == c) return null;
            if (null == t || !(0, ti.PV)(t))
                return { clarification: (0, ra.YI)(h), readOnly: !0, hideSubmit: !0, failure: null };
            async function g(t, n) {
                (s(!0), o(null));
                try {
                    await (0, ra.JN)(e, t, n);
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
                          null != n && (n.option_ids.includes(ro) ? r("server") : g("user", null));
                      },
                submitText: ey.intl.string(ey.t["cY+Oob"]),
                onBack: d && !a ? () => r("scope") : void 0,
                hideSubmit: !1,
                serverStep: d && n.length > 0,
                onPickServer: a ? void 0 : (e) => g("guild", e),
                failure: null == u ? null : ey.intl.string("server" === u ? eb.default["XXKd+7"] : eb.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, a.jsx)(l9, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, a.jsxs)("div", {
                children: [
                    !0 === n.serverStep
                        ? (0, a.jsx)(rm, { projectId: t, card: n }, n.clarification.id)
                        : (0, a.jsx)(
                              l9,
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
function rg(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: a, feature: s } = l,
                u = (0, m.bG)([ti.Ay], () => ti.Ay.getProject(t), [t]),
                o = (0, n1.z9)("ConjureScopeSwitchCard"),
                [c, d] = i.useState(!1),
                [f, h] = i.useState(null),
                g = u?.guild_id,
                p = i.useMemo(() => {
                    let [e] = n.questions,
                        t = ey.intl.formatToPlainString("guild" === a ? eb.default["jh/iy+"] : eb.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === a
                                ? { ...e, question: t, allow_custom: !1, ...(0, ra.XU)(o, g) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: ey.intl.string(eb.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, o, g, a]);
            if (null == u || !(0, ti.PV)(u))
                return { clarification: (0, ra.YI)(p), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (d(!0), h(null));
                try {
                    await (0, ra.yN)(t, n.id, a, e);
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
                submitText: ey.intl.string("guild" === a ? eb.default.Ua7yKM : eb.default.TVRkVh),
                onBack: c
                    ? void 0
                    : function () {
                          (h(null), (0, ra.RW)(t) ? r() : h("failed"));
                      },
                backText: ey.intl.string("guild" === a ? eb.default["4WnIqd"] : eb.default["am+p7p"]),
                hideSubmit: "user" === a,
                failure: null == f ? null : ey.intl.string("locked" === f ? eb.default.irUT0N : eb.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, a.jsx)(
              l9,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(
                      l9,
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
var rp = n(442331),
    rx = n(564963);
let rv = new Set(["select", "channel", "role", "user"]);
function rj(e, t) {
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
function rb(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let ry = new Set(),
    rk = new Set();
function rw(e) {
    return (
        rk.add(e),
        () => {
            rk.delete(e);
        }
    );
}
function rS() {
    return i.useSyncExternalStore(rw, () => ry);
}
function rN(e) {
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
function rA(e, t, n) {
    if (!n || null == t) return !1;
    let l = rb(e, t);
    return l.length > 0 && !rj({ keys: l }, t);
}
var rC = n(628284),
    rI = n(782973),
    rE = n(1665),
    rM = n(11120),
    r_ = n(411236);
function rT(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: o,
            superseded: c,
            summary: d,
            markSaved: g,
        } = (function (e, t, n) {
            let l = rS(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!ry.has(n)) for (let e of ((ry = new Set([...ry, n])), rk)) e();
                    } else a(!0);
                }, [n]),
                o = (0, m.bG)([rp.A], () => rA(t, rp.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, m.bG)([rr.A], () => null != n && rN(rr.A.getMessages(e)).has(n), [e, n]),
                summary: (0, m.yK)(
                    [rp.A, ln.A],
                    () => {
                        var n;
                        let l = rp.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => ln.A.getChannel(e)?.name ?? null),
                              rb(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: ey.intl.formatToPlainString(eb.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return ey.intl.string(eb.default.CJq1rY);
                                                      case "checkbox":
                                                          return ey.intl.string(
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
                                                                      : ey.intl.string(eb.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? ey.intl.string(eb.default.nEv677)
                                                              : ey.intl.string(eb.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return ey.intl.string(eb.default.Fw9G9A);
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
            className: r_.Mk,
            children: (0, a.jsx)(u.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: ey.intl.string(eb.default["+uXDk+"]),
            }),
        });
    if (p)
        return (0, a.jsxs)("article", {
            className: r_.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: r_.Ol,
                    children: [
                        (0, a.jsx)(rC.y, { size: "xs", color: t0.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
                        (0, a.jsx)(u.E, {
                            variant: "text-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: ey.intl.string(eb.default.AxBLLy),
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
    let x = n.keys?.length === 1 && n.keys[0] === rI.B,
        v = null != n.note && "" !== n.note ? n.note : x ? null : ey.intl.string(eb.default.XuOf5s);
    return (0, a.jsx)(rM.A, {
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
                text: ey.intl.string(eb.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: r_.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ey.intl.string(eb.default["jZjP+I"]),
                          }),
                          null != v
                              ? (0, a.jsx)(rE.A, { text: v, variant: "text-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: r_.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: f()(n8.nd, n8.jx),
                      "aria-label": ey.intl.string(eb.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: n8.wx,
                              children: [
                                  (0, a.jsx)(u.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: n8.TK,
                                      children: ey.intl.string(eb.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(nT.D, {
                                      className: f()(n8.gb, n8.Q7),
                                      onClick: r,
                                      "aria-label": ey.intl.string(eb.default["iq+Pte"]),
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
                              className: r_.DQ,
                              children: [
                                  null != v
                                      ? (0, a.jsx)(rE.A, { text: v, variant: "text-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: n8.qr,
                              children: [
                                  (0, a.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: r_.xE,
                                      children: ey.intl.string(eb.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: n8.zt,
                                      children: [
                                          (0, a.jsx)(h.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: ey.intl.string(eb.default["9J3OG8"]),
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
var rP = n(975571),
    rR = n(427123);
let rL = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var r$ = n(874421),
    rq = n(932111),
    rD = n(940874),
    rF = n(404373),
    rO = n(89222);
function rz(e) {
    return "" !== rO.A.getDraft(e).trim();
}
var rG = n(29080);
function rU(e) {
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
var rB = n(62617),
    rK = n(780171);
let rH = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rV = {
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
    rW = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, rB.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rB.Z)(),
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
                        () => (0, rB.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rB.Z)(),
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
                        () => (0, rB.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rB.Z)(),
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
                        () => (0, rB.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rB.Z)(),
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
                        () => (0, rB.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rB.Z)(),
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
                        () => (0, rB.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rB.Z)(),
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
                        () => (0, rB.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rB.Z)(),
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
                        () => (0, rB.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rB.Z)(),
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
                        () => (0, rB.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rB.Z)(),
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
                        () => (0, rB.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rB.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rK.u, tint: "var(--illo-purple-40)" },
    };
function rX(e) {
    return { ...rW[e], name: ey.intl.string(rV[e]()) };
}
function rY(e) {
    return rH.includes(e) ? rX(e) : void 0;
}
function rZ(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rH.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rH[(t + n) % rH.length]);
            }),
            l
        );
    })(e))
        t.set(n, rX(l));
    return t;
}
var rQ = n(615839);
function rJ(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ey.intl.string(eb.default.KcFvbo);
}
var r0 = n(60160),
    r1 = n(16634);
function r2(e) {
    let t = (0, nI.SY)(e.steps);
    return null != t ? (0, nI.WQ)(t) : rJ(e.task);
}
function r3(e) {
    let t = rZ(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rY(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rJ(e.task),
                      todoId: e.task.todoId,
                      line: r2(e),
                  },
              ];
    });
}
function r4(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, nI.SY)(n.steps),
        d = o
            ? r2(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rJ(e));
                  switch (e.status) {
                      case "failed":
                          return ey.intl.formatToPlainString(eb.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ey.intl.formatToPlainString(eb.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ey.intl.formatToPlainString(eb.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rQ.MB)(e.durationMs),
                              });
                          return ey.intl.formatToPlainString(eb.default.nmI9Uh, { task: t });
                      default:
                          return ey.intl.formatToPlainString(eb.default.nmI9Uh, { task: t });
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
                                    className: nY.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            r1.A,
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
                                      className: nY.iq,
                                      children: (0, a.jsx)(r0.A, { text: e, variant: "text-sm/normal" }),
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
            body: rJ(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nY.nC,
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
var r7 = n(998445),
    r5 = n(643210),
    r6 = n(648127),
    r8 = n(372795),
    r9 = n(163897);
let ae = "conjure-browser-viewer";
function at(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, m.yK)(
            [r5.A],
            () =>
                n.flatMap((e) => {
                    let n = r5.A.getTab(t, e);
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
        className: r9.kR,
        "aria-label": ey.intl.string(eb.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(an, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function an(e) {
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
        c = (0, eM.useHasModalOpen)(ae),
        [d, m] = i.useState(!1),
        h = i.useCallback((e, t) => m(t), []),
        { ended: g } = l,
        p = (0, r6.i)(l.session);
    return (0, a.jsxs)(nT.D, {
        innerRef: s,
        className: f()(r9.Nr, g && r9.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, eM.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: ae },
                )
            );
        },
        "aria-label": ey.intl.formatToPlainString(eb.default.G3a822, { title: p }),
        children: [
            (0, a.jsxs)("div", {
                className: r9.Gt,
                children: [
                    (0, a.jsx)(r8.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || g,
                        className: r9.Ji,
                        "aria-label": ey.intl.formatToPlainString(eb.default.rnwqXb, { name: p }),
                        onStateChange: h,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: r9.qf,
                              children: (0, a.jsx)(r7.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    g
                        ? (0, a.jsx)("div", {
                              className: r9.HS,
                              children: (0, a.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: ey.intl.string(eb.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: r9.pG,
                children: [
                    (0, a.jsx)("span", { className: f()(r9.W9, g && r9.oM) }),
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
var al = n(268409);
let ar = new WeakMap(),
    aa = new WeakMap();
function ai(e) {
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
            [rr.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = ar.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = aa.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), aa.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (ar.set(e, n), n);
                })(rr.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: al.h, children: (0, a.jsx)(at, { projectId: t, sessionIds: u }) });
}
var as = n(469393);
function au(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, e_.lG)(t.authored_at);
    return (0, a.jsx)(nF, {
        title: ey.intl.string(eb.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: as.r,
            children: [
                (0, a.jsxs)("div", {
                    className: as.z,
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
                          text: ey.intl.string(eb.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var ao = n(714917),
    ac = n(463660),
    ad = n(970211);
function af(e) {
    let { projectId: t } = e,
        {
            src: n,
            blurred: l,
            handleError: r,
        } = (function (e, t) {
            let n = (0, m.bG)([ao.A], () => (null != e ? ao.A.getBackground(e) : null)),
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
                                r = await (0, ac.Mg)(e, l);
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
        : (0, a.jsx)("img", { className: f()(ad.L, { [ad.T]: l }), src: n, alt: "", "aria-hidden": !0, onError: r });
}
var am = n(155718);
function ah(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let ag = ["command", "user_command", "message_command", "message"],
    ap = new Set([am.kc.CHAT, am.kc.USER, am.kc.MESSAGE]);
function ax(e) {
    return e.type ?? am.kc.CHAT;
}
function av(e) {
    return ap.has(ax(e));
}
function aj(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function ab(e, t) {
    let n = ag.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !aj(e)), ...n.filter(aj)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || aj(r) || l.push(r);
    }
    return ag.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function ay(e, t, n) {
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
    let s = e.commands.filter(av).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (ax(e)) {
                    case am.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case am.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(aj),
        o = a.length > 0 ? ab([...a, ...u], !0) : ab("both" === t ? [...s, i] : s, !1);
    return o.length > 0 ? o : [r];
}
var ak = n(377941),
    aw = n.n(ak);
function aS(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function aN(e) {
    return e.type === am.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === am.kc.USER || e.type === am.kc.MESSAGE
          ? ""
          : "/";
}
let aA = {
        [eF.q7.APP_CHANNEL]: eb.default["3/aHX6"],
        [eF.q7.VOICE_CHANNEL]: eb.default["3/aHX6"],
        [eF.q7.ACTIVITY]: eb.default["3/aHX6"],
        [eF.q7.OVERLAY]: eb.default["rPpf5/"],
        [eF.q7.PROFILE_WIDGET]: null,
        [eF.q7.AUTOMOD]: null,
        [eF.q7.BOT]: null,
        [eF.q7.APPLICATION_COMMANDS]: null,
    },
    aC = [eF.q7.ACTIVITY, eF.q7.APP_CHANNEL, eF.q7.VOICE_CHANNEL, eF.q7.OVERLAY];
function aI(e) {
    return aC.find((t) => ah(e, t)) ?? null;
}
let aE = 1920 / 1018;
function aM(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let a_ = aM(24, 1018),
    aT = aM(24, 1920);
function aP(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var aR = n(176999),
    aL = (((l = {}).IMAGE = "image"), l),
    a$ = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aq = n(598748),
    aD = n(773669);
let aF = [],
    aO = {},
    az = {};
function aG(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aU(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aL.IMAGE,
        visibility: a$.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aB = n(127258),
    aK = n(803306),
    aH = n(587895),
    aV = n(320095),
    aW = n(963852),
    aX = n(95701),
    aY = n(889227),
    aZ = n(427262);
let aQ = new aX.nA({ id: "1337", guild_id: "1337", type: e2.rbe.GUILD_TEXT, name: "preview" });
function aJ(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, m.bG)([lr.default], () => lr.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, aK.nj)(new aY.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let a0 = /^@\S+/;
var a1 = n(775602);
let a2 = [eb.default["3eTjcV"], eb.default.l3j5nS];
var a3 = n(97808),
    a4 = n(778712),
    a7 = n(486020),
    a5 = n(46054),
    a6 = n(200700);
let a8 = {
        alert: { label: () => ey.intl.string(eb.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ey.intl.string(eb.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ey.intl.string(eb.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ey.intl.string(eb.default.RGzFNK), blockedStyle: !1 },
    },
    a9 = {
        blocked: { label: () => ey.intl.string(eb.default.YdnZ8q), tone: "red" },
        alert: { label: () => ey.intl.string(eb.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ey.intl.string(eb.default.RGzFNK), tone: "green" },
    },
    ie = ["blocked", "alert", "allowed"],
    it = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function il(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : ey.intl.formatToPlainString(ey.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, a6.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? ey.intl.formatToPlainString(ey.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? ey.intl.formatToPlainString(ey.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? ey.intl.formatToPlainString(ey.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? ey.intl.formatToPlainString(ey.t.opVZ9q, { mins: n / 60 })
                                      : ey.intl.formatToPlainString(ey.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var ir = n(984097),
    ia = n(13673);
let ii = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function is(e) {
    let { example: t } = e,
        n = il(t);
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
let iu = ["glazedgamer", "sprinkles", "donutking"];
function io(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = a8[n.outcome];
    return (0, a.jsxs)("li", {
        className: f()(ir.nM, { [f()(ir.HV, ia.DX)]: s }),
        children: [
            (0, a.jsx)(n$.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: ir.my,
                children: (0, a.jsx)(a3.eu, {
                    src: (0, a7.AE)(void 0, void 0),
                    size: a4._3.SIZE_24,
                    "aria-label": ey.intl.string(eb.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ir.fw,
                children: [
                    (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), a5.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(is, { example: n }) : null,
                ],
            }),
        ],
    });
}
function ic(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = a9[t.section],
        s = new Set(t.examples.map(il)),
        o = 1 === s.size ? t.examples.map(il)[0] : null;
    return (0, a.jsxs)("div", {
        className: ir.UO,
        children: [
            (0, a.jsxs)("div", {
                className: ir.RZ,
                children: [
                    (0, a.jsx)(u.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: ii[r.tone],
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
                                      className: ir.IQ,
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
                className: ir.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(io, { example: e, username: iu[(n + t) % iu.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function id(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            ie
                .map((e) => ({ section: e, examples: t.filter((t) => it[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: ir.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: ir.hk,
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
                    ic,
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
var im = n(276293),
    ih = n(460905),
    ig = n(110384),
    ip = n(365199),
    ix = n(633018),
    iv = n(763754),
    ij = n(217424),
    ib = n(194085),
    iy = n(20851),
    ik = n(692508),
    iw = n(798819);
function iS(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: f()(iw.item, iw.labelContainer, iw.colorDefault, {
            [iw.focused]: !0 === t.highlighted,
            [iw.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: iw.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: iw.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: f()(iw.label, ik.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: iw.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: iw.icon }),
                  })
                : null,
        ],
    });
}
function iN(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: f()(t, ik.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: ey.intl.string(ey.t["5IEsGx"]), icon: ig.W, muted: !0 }
                : { label: ey.intl.string(ey.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: f()(iw.menu, ik.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: iw.scroller,
            children: [
                (0, a.jsx)(iS, { item: s }),
                (0, a.jsx)("div", { className: iw.separator }),
                (0, a.jsx)(iS, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var iA = n(381941);
function iC() {}
function iI(e) {
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
        } = ((t = (0, m.bG)([lr.default], () => lr.default.getCurrentUser())),
        (n = (0, m.bG)([ti.Ay], () => ti.Ay.getProject(x))),
        (l = n?.application_id),
        (r = (0, m.bG)([aH.A], () => aH.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? ey.intl.string(eb.default.JEYq8M)),
        (o = (0, m.bG)([lr.default], () => (null != l ? lr.default.getUser(l) : void 0), [l])),
        (d = aJ("31337", s, { bot: !0, enabled: !(c = o?.bot === !0) })),
        (h = c ? o : d),
        (g = aJ("31338", ey.intl.string(eb.default["9iAOsw"]), { discriminator: "0003" })),
        (p = aJ("31339", (0, aZ.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, aV.rh)({
                                          ...(0, aW.Ay)({
                                              channelId: aQ.id,
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
                                                        type: aB.G.APPLICATION_COMMAND,
                                                        user: (0, aW.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(a0, `<@${i.id}>`)), s),
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
                                  targetMessage: ey.intl.string(eb.default["y+QYes"]),
                                  memberMessage: ey.intl.string(eb.default.BUTRDc),
                              },
                          ),
                [v, h, t, p, g],
            ),
            botIcon: r,
            appIconSrc: r ?? h?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = aQ.name;
    return (0, a.jsxs)("div", {
        className: ik.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: ik.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(im.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: f()(ik.TE, `group-spacing-${iA.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? ik.Rz : void 0,
                            children: [
                                (0, a.jsx)(iy.A, {
                                    message: n,
                                    channel: aQ,
                                    author: (0, iv.FT)(n.author, aQ),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(ij.A, { message: n, channel: aQ }) : void 0,
                                    usernameClassName: r?.target === "user" ? ik.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: ik.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(ib.Ay, {
                                              children: [
                                                  (0, a.jsx)(ib.qv, {
                                                      label: ey.intl.string(ey.t.lfIHs4),
                                                      icon: ih.n,
                                                      onClick: iC,
                                                  }),
                                                  (0, a.jsx)(ib.qv, {
                                                      label: ey.intl.string(ey.t["5IEsGx"]),
                                                      icon: ig.W,
                                                      onClick: iC,
                                                  }),
                                                  (0, a.jsx)(ib.qv, {
                                                      label: ey.intl.string(ey.t["UKOtz+"]),
                                                      icon: ip.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: iC,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? ik.ET : ik.je,
                                          inert: !0,
                                          children: (0, a.jsx)(iN, {
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
                className: ik.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ix.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: ey.intl.formatToPlainString(ey.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
var iE = n(332173);
function iM(e) {
    let { name: t } = e;
    return (0, a.jsxs)(iE.A, { children: ["/", t] });
}
function i_(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(aw());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(iM, { name: e.name }, e.start) : e.text));
}
n(827669);
var iT = n(687966),
    iP = n(757789),
    iR = n(26137),
    iL = n(430392),
    i$ = n(231483),
    iq = n(323384);
let iD = {
    frame: eb.default.Z2bt4u,
    overlay_widget: eb.default["0mGHfU"],
    user_widget: eb.default.Jipr29,
    bot: eb.default.EbvC13,
    commands: eb.default.EbvC13,
    automod: eb.default.tiMvei,
};
var iF = n(573634);
let iO = {
    frame: iT.GameControllerIcon,
    overlay_widget: iP.V,
    user_widget: iR.r,
    bot: iL.RobotIcon,
    commands: iL.RobotIcon,
    automod: i$.ShieldIcon,
};
function iz(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: f()(iF.e7, l),
        children: [(0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function iG(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: iF.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: iF.jw,
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
function iU(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iF.lj,
        children: [
            (0, a.jsx)("span", {
                className: f()(iF.Vo, iF.G),
                children: (0, a.jsx)(iq.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iF.aV,
                children: [
                    (0, a.jsx)(u.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function iB(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: iF.wZ,
        children: t.map((e, t) => {
            let n = aN(e),
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
                                ? (0, a.jsx)(iM, { name: e.name })
                                : (0, a.jsx)(iE.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function iK(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: iF.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: iF.Aw,
                    children: (0, a.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(i_, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function iH(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? iq.k : iO[t.kind],
        c = ey.intl.string(s ? eb.default.BM4Ymz : iD[t.kind]);
    return (0, a.jsxs)("section", {
        className: iF.s9,
        "aria-label": c,
        children: [
            (0, a.jsxs)("div", {
                className: iF.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: iF.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(u.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: c }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: iF.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(u.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(i_, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(iK, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: iF.PG, children: r }) : null,
        ],
    });
}
function iV(e) {
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
                                let n = t.map(aw()).join("|");
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
        className: iF.aN,
        children: [
            (0, a.jsxs)("div", {
                className: iF.Lv,
                children: [(0, a.jsx)(j.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            f.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: iF.yF, role: "separator" }),
                            (0, a.jsx)(iH, {
                                experience: t,
                                bullets: n,
                                preview: c(t),
                                blocks: (function (e, t, n) {
                                    let l = n
                                        ? [
                                              {
                                                  key: "permissions",
                                                  caption: eb.default["2UbW6r"],
                                                  names: e.bot_permissions,
                                              },
                                              {
                                                  key: "intents",
                                                  caption: eb.default["7TKfpj"],
                                                  names: e.privileged_intents,
                                              },
                                          ]
                                              .flatMap((e) => {
                                                  let { key: t, caption: n, names: l } = e;
                                                  return null != l && l.length > 0
                                                      ? [{ key: t, caption: ey.intl.string(n), labels: l.map(aS) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      iz,
                                                      { caption: n, children: (0, a.jsx)(iG, { labels: l }) },
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
                                                        let n = ey.intl.string(eb.default["6/3tGY"]),
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
                                                                iz,
                                                                {
                                                                    className: iF.Iw,
                                                                    caption: ey.intl.formatToPlainString(
                                                                        eb.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: iF.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                iU,
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
                                                            ? [ey.intl.string(eb.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [ey.intl.string(eb.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, a.jsx)(
                                                                    iz,
                                                                    {
                                                                        caption: ey.intl.string(eb.default.MY6UGJ),
                                                                        children: (0, a.jsx)(iG, { labels: r }),
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
                                                              iz,
                                                              {
                                                                  caption: ey.intl.string(ey.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(iB, { commands: e.commands }),
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
var iW = n(633075),
    iX = n(946356),
    iY = n(58216),
    iZ = n(27399);
function iQ(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, m.bG)([lr.default], () => lr.default.getCurrentUser()),
        r = i.useMemo(() => new iW.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iZ.H,
              children: (0, a.jsx)(iX.A.Overlay, {
                  className: iZ.w,
                  children: (0, a.jsx)(iY.A, {
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
var iJ = n(443863);
function i0(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: aM(i.width * t, 1920), height: aM(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(af, { projectId: n }),
            (0, a.jsx)("div", {
                className: iJ.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": a_,
                    "--custom-conjure-plan-overlay-widget-end": aT,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: iJ.M7, onError: s }),
            }),
        ],
    });
}
function i1(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, t$.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, lZ.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function i2(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: u } = (0, lQ._)(t, r);
    return s
        ? null
        : (0, a.jsx)(nT.D, {
              className: iJ.xX,
              onClick: () => i1(t, [{ id: r, alt: l }], 0),
              "aria-label": ey.intl.string(eb.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: iJ.sN, onError: u }),
          });
}
function i3(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: c } = (0, lQ._)(t, r),
        [d, h] = i.useState(!1),
        [g, p] = i.useState(!1),
        {
            slide: x,
            labels: v,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, m.bG)([a1.Ay], () => a1.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, u] = i.useState(!1),
                o = t && !l && !n && !s,
                c = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => a((e) => (e + 1) % a2.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let d = i.useCallback((e) => {
                    (u(!0), a(e));
                }, []),
                f = i.useCallback(() => d(c), [d, c]);
            return { slide: c, labels: a2.map((e) => ey.intl.string(e)), pick: d, hold: f };
        })({ ready: null != s, paused: d || g });
    if (o) return null;
    let b = ey.intl.string(eb.default.mjryK4),
        y = ey.intl.string(eb.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: iJ.RM,
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        onFocus: () => p(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || p(!1);
        },
        children: [
            (0, a.jsx)(nT.D, {
                className: f()(iJ.xX, iJ.nj, { [iJ.qQ]: 0 === x }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(aE) },
                onClick: () => i1(t, [{ id: r, alt: b }], 0),
                "aria-label": ey.intl.string(eb.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === x
                          ? (0, a.jsx)("img", { src: s, alt: b, className: iJ.Ac, onError: c })
                          : (0, a.jsx)(i0, { projectId: t, src: s, alt: y, size: l, onError: c }),
            }),
            (0, a.jsx)("div", {
                className: iJ._4,
                role: "group",
                "aria-label": ey.intl.string(eb.default.EH36X6),
                children: v.map((e, t) =>
                    (0, a.jsx)(
                        nT.D,
                        {
                            className: f()(iJ.c, { [iJ.Cw]: x === t }),
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
        { src: i, gone: s, handleError: u } = (0, lQ._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(nT.D, {
                  className: iJ.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: iJ.rA, onError: u }),
              }),
          });
}
function i7(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: ey.intl.formatToPlainString(eb.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: iJ.Op,
              children: (0, a.jsxs)("div", {
                  className: iJ.uW,
                  children: [
                      (0, a.jsx)(u.E, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: ey.intl.string(eb.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: iJ.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(i4, { projectId: t, id: r, alt: i, onOpen: () => i1(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function i5(e) {
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
            ((n = ah(v, eF.q7.APPLICATION_COMMANDS)),
            (l =
                ah(v, eF.q7.BOT) || n
                    ? null != v.bot
                        ? v.bot.interaction
                        : n && v.commands.some(av)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : ay(v, l, {
                              message: ey.intl.string(eb.default.J7qggf),
                              reply: ey.intl.string(eb.default.nqYtiy),
                              event: ey.intl.string(eb.default["05lU9W"]),
                          }),
                [v, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = az } = t,
                r = (0, m.bG)([aD.default], () => aD.default.locale),
                a = (0, m.bG)([ti.Ay], () => {
                    let t = ti.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(aO);
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
                                                          ...aG(n),
                                                          ...(null != n.fallback ? { fallback: aG(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = aR.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[aq.m.WIDGET_TOP] || null == i[aq.m.WIDGET_BOTTOM]
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
                                                                    type: aR.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: aR.oG.NUMBER, value: a })
                                                                : (r[e] = { type: aR.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aU),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aF,
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
                        .filter((e) => "/" === aN(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        A =
            ((o =
                null == (s = aI(v))
                    ? null
                    : (v.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (c = v.design_image) && c.id !== aP(v)?.id ? c : null),
            (f = aP(v)),
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
        C = i.useMemo(
            () =>
                v.commands.some(av)
                    ? ay({ ...v, bot: void 0 }, "commands", {
                          message: ey.intl.string(eb.default.J7qggf),
                          reply: ey.intl.string(eb.default.nqYtiy),
                          event: ey.intl.string(eb.default["05lU9W"]),
                      })
                    : [],
            [v],
        ),
        I = (0, m.bG)([ti.Ay], () => ti.Ay.getProject(x)?.name, [x]),
        E =
            w && null != j
                ? ey.intl.formatToPlainString(eb.default.YZ3qJs, { version: j.version })
                : ey.intl.string(eb.default["3b6e7o"]),
        M = w ? (0, a.jsx)(nz, { children: ey.intl.string(eb.default.hF2c41) }) : null;
    return (0, a.jsxs)(nG, {
        title: E,
        meta: M,
        superseded: w,
        showLabel: ey.intl.string(eb.default.yD8EJS),
        hideLabel: ey.intl.string(eb.default.nSPGNb),
        bodyClassName: iJ.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: iJ.Qs,
                children: (0, a.jsx)(iV, {
                    appName: I ?? v.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(i_, { text: v.summary, commandNames: N }),
                            }),
                            (0, a.jsx)(i7, { projectId: x, proposal: v }),
                            "" !== S
                                ? (0, a.jsxs)("section", {
                                      className: iJ.uW,
                                      children: [
                                          (0, a.jsx)(u.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: ey.intl.string(eb.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(u.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(i_, { text: S, commandNames: N }),
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
                                        e.id === A.ui?.experienceId
                                            ? (0, a.jsx)(i2, {
                                                  projectId: x,
                                                  design: A.ui.design,
                                                  alt: ey.intl.string(
                                                      null == (t = aI(v)) ? eb.default["3/aHX6"] : aA[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === A.overlay?.experienceId
                                            ? (0, a.jsx)(i3, {
                                                  projectId: x,
                                                  design: A.overlay.design,
                                                  size: A.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(iQ, { ...k }) : null;
                            case "automod":
                                return null != v.automod && v.automod.examples.length > 0
                                    ? (0, a.jsx)(id, { automod: v.automod })
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
                                        (r = l.some((e) => "command" === e.kind || aj(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, C);
                                return t.length > 0 ? (0, a.jsx)(iI, { projectId: x, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: N,
                }),
            }),
            null == b || w
                ? null
                : (0, a.jsxs)("div", {
                      className: iJ.qr,
                      children: [
                          (0, a.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: ey.intl.string(eb.default["6S+wRM"]),
                              onClick: b,
                          }),
                          (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: ey.intl.string(eb.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var i6 = n(331322),
    i8 = n(289565);
function i9(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: i8.m, children: n })
        : (0, a.jsxs)("div", {
              className: i8.Z,
              children: [
                  n,
                  (0, a.jsx)(tq.m, {
                      text: ey.intl.string(ey.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tV.K, {
                          "aria-label": ey.intl.string(ey.t.WAI6xu),
                          icon: tM.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function se(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function st(e, t) {
    return null != e && se(t, e.status);
}
let sn = new WeakMap();
var sl = n(175841),
    sr = n(27232),
    sa = n(505930),
    si = n(506774),
    ss = n(385081);
let su = "conjurePublishRatings",
    so = [1, 2, 3, 4, 5],
    sc = {
        1: eb.default.GhbsGA,
        2: eb.default.cm0nwU,
        3: eb.default.kGvlh2,
        4: eb.default.dVBSUg,
        5: eb.default.DKlgF7,
    };
function sd(e) {
    return ey.intl.string(sc[e]);
}
let sf = new Set(),
    sm = 0;
function sh() {
    return si.w.get(su) ?? {};
}
function sg(e, t) {
    return sh()[e]?.[t] ?? null;
}
function sp(e) {
    return (sf.add(e), () => sf.delete(e));
}
function sx(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, ss.Fz)(e, n);
                },
            };
        })(t),
        o = ey.intl.string(eb.default.IqkF07);
    return (0, a.jsx)(tb.a, {
        ...n,
        title: o,
        actions: [
            {
                variant: "primary",
                text: ey.intl.string(eb.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (u(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(n6.f, {
            label: o,
            hideLabel: !0,
            placeholder: ey.intl.string(eb.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var sv = n(54100);
function sj(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: sv.mo,
        role: "status",
        children: [
            (0, a.jsx)(sl.SparklesIcon, { size: "xs", color: "currentColor", className: sv.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? ey.intl.string(eb.default["nIc9/M"])
                        : 3 === t
                          ? ey.intl.string(eb.default.ausj8U)
                          : ey.intl.string(eb.default.HilSjw),
            }),
        ],
    });
}
function sb(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: o } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(sp, () => sm),
                {
                    rating: sg(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != sg(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, ss.gw)(i);
                            let s = sh();
                            return (si.w.set(su, { ...s, [t]: { ...s[t], [n]: l } }), sm++, sf.forEach((e) => e()), i);
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
        return (0, a.jsx)(sj, { rating: s });
    let b = null != s,
        y = b ? s : (m ?? c),
        k = b || (null == m && null != c);
    function w(e) {
        if (b) return;
        (d(e), h(null), p(!0));
        let t = o(e);
        null != t && (0, eM.openModal)((e) => (0, a.jsx)(sx, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: sv.nM,
        onMouseLeave: () => h(null),
        children: [
            (0, a.jsxs)("span", {
                className: sv.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(u.E, {
                        id: v,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: f()(sv.Pf, { [sv.KH]: null == y }),
                        children: ey.intl.string(eb.default.mTV326),
                    }),
                    so.map((e) =>
                        (0, a.jsx)(
                            u.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: f()(sv.Pf, { [sv.KH]: y === e }),
                                children: sd(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": v,
                className: sv.uf,
                children: so.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? sr.StarIcon : sa.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: sv.uK,
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
                                    className: sv.hF,
                                    "aria-label": ey.intl.formatToPlainString(eb.default.NU7Dex, {
                                        rating: e,
                                        label: sd(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: f()(sv.d4, { [sv.cO]: t, [sv.Ng]: t && k }),
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
function sy(e) {
    let { projectId: t, publish: n } = e,
        l = tC(t, n);
    return (0, a.jsx)(h.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function sk(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, tp.Ay)(t);
    return null != r && st(r, l)
        ? (0, a.jsx)(i9, {
              children: (0, a.jsxs)(i6.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(sy, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n ? (0, a.jsx)(sb, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var sw = n(303345),
    sS = n(44255),
    sN = n(416473),
    sA = n(289830);
function sC(e) {
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
                        (await (0, sN.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof sw.A ? e.message : ey.intl.string(eb.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [c] = i.useState(() => Date.now()),
                d =
                    t.next_run_at > c
                        ? ey.intl.formatToPlainString(eb.default.orZDqY, { time: (0, sS.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sS.lD)(t.trigger),
                firstPublish: d,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(nF, {
        title: ey.intl.string(eb.default.ZtfX9V),
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
                            children: ey.intl.string(eb.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(u.E, {
                                  variant: "text-sm/normal",
                                  role: "status",
                                  children: ey.intl.string(eb.default.k4IRsm),
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
                          text: ey.intl.string(eb.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var sI = n(989271);
function sE(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(nT.D, {
        className: f()(sI.nM, { [sI.f1]: s, [sI.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": ey.intl.formatToPlainString(eb.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: sI.jo,
                children: [
                    n
                        ? (0, a.jsx)(g.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sI.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(u.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: sI.G9,
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
function sM(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(nF, {
        title: ey.intl.string(eb.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                sE,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var s_ = n(530557),
    sT = n(872162),
    sP = n(202723);
function sR(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        c = i.useCallback(() => {
            (0, eM.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        d = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: s_.R })), [r.fields]),
        m = (0, rx.bB)(l, s),
        g = f()(sP.Lo, { [sP.jY]: m });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: g,
                  children: (0, a.jsx)(u.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: ey.intl.string(eb.default.CTxtdV),
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
                            children: ey.intl.string(eb.default.HCQvpO),
                        }),
                        (0, a.jsx)(sT.C, { label: ey.intl.string(eb.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: sP.Lo,
                      children: (0, a.jsx)(sT.C, { label: ey.intl.string(eb.default.HCQvpO), size: "xs", items: d }),
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
                                className: sP.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: sP.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(rC.y, {
                                            size: "xs",
                                            color: t0.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(u.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: ey.intl.string(eb.default.sfp7Up),
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
                                        ey.intl.formatToPlainString(eb.default["Z+FC3j"], {
                                            label: e,
                                            value: ey.intl.string(eb.default.CJq1rY),
                                        }),
                                    )
                                    .join(" \xb7 "),
                            }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: sP.Lo,
                    children: [
                        (0, a.jsx)(u.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: ey.intl.string(null != o ? eb.default.O0QIqj : eb.default.HCQvpO),
                        }),
                        (0, a.jsx)(rE.A, {
                            text: null != r.note && "" !== r.note ? r.note : ey.intl.string(eb.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(sT.C, { label: ey.intl.string(eb.default.HCQvpO), size: "xs", items: d }),
                        (0, a.jsx)("div", {
                            className: sP.sq,
                            children: (0, a.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: ey.intl.string(eb.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var sL = n(919790),
    s$ = n(908492),
    sq = n(971824),
    sD = n(162052),
    sF = n(165648);
function sO(e) {
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
            className: nY.pj,
            "data-live": !1,
            children: (0, a.jsx)(nR.A, {
                glyph: (0, a.jsx)(rG.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ey.intl.string(eb.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = m ? ((0, nI.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rZ(k.map((e) => e.taskId)),
        S = !g && (l || k.some((e) => "running" === e.task.status)),
        N = r3(k);
    return (0, a.jsxs)("ol", {
        className: nY.pj,
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
                let l = null != e.task.helperMark ? rY(e.task.helperMark) : void 0,
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
            (0, a.jsx)(ai, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: nY.YO,
                      children: (0, a.jsx)(nW, { todos: b, provisional: d, agents: N, live: r, superseded: s }),
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
            hoistedAttachmentsHost: A,
            restoreProposal: C,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: M = !1,
        } = e,
        _ = i.useMemo(
            () => rU({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: T, lastStreamedMessage: P, showsClosingMessage: R, closingContent: L } = _,
        $ = (N ? A : void 0) ?? _.attachmentsHost,
        q = R && !N,
        D = null == c ? null : (0, a.jsx)(sL.A, { projectId: t, attachments: c }),
        F = null == D ? null : (0, a.jsx)("div", { className: nY.MT, children: D }),
        O = w
            ? (0, a.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ey.intl.string(eb.default.Mv5OmK);
                          case "queued":
                              return ey.intl.string(eb.default["Po/2mi"]);
                          case "restarting":
                              return ey.intl.string(eb.default.Vj0woh);
                          default:
                              return ey.intl.string(eb.default.gY3L8p);
                      }
                  })(S),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: nY.ue,
        children: [
            T.length > 0 && !N
                ? (0, a.jsx)("ol", {
                      className: nY.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nY.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sF.PT,
                                          children: (0, s$.U)(e.content, !0, {
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
                ? (0, a.jsx)(i5, { projectId: t, proposal: r, version: s, onApprove: k })
                : q
                  ? (0, a.jsxs)("div", {
                        className: f()(nY.ky, sD.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: f()(sF.PT, nY.cW),
                                children: (0, s$.U)(L, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === $ ? F : null,
                            O,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: f()(nY.ky, sD.XR, { [sq.O]: null != h && "open" === g }),
                      children: (0, a.jsx)(sR, {
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
                      className: f()(nY.ky, sD.XR),
                      children: (0, a.jsx)(rT, { projectId: t, request: p, askId: x }),
                  })
                : null,
            "standalone" !== $ && ("closing" !== $ || q) ? null : D,
            null != v ? (0, a.jsx)(sk, { projectId: t, turnId: j ?? null, cta: v }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(sM, { ideas: o, pickedIdeaIds: y, onPick: b }) : null,
            null != C ? (0, a.jsx)(au, { proposal: C, onRestore: I }) : null,
            null != E ? (0, a.jsx)(sC, { projectId: t, proposal: E, current: M }) : null,
            q ? null : O,
        ],
    });
}
var sG = n(864970),
    sU = n(146806),
    sB = n(475358),
    sK = n(783977),
    sH = n(559647),
    sV = n(655098),
    sW = n(234320),
    sX = n(191023),
    sY = n(285796),
    sZ = n(922329),
    sQ = n(153171);
function sJ(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(sZ.p, {
        name: ey.intl.string(eb.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: eh.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sX.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: eh.OY,
                    children: (0, a.jsx)(lm.PencilIcon, {
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
            children: ey.intl.string(eb.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: sQ.o1,
            onClick: () => {
                eo(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": ey.intl.string(eb.default.N852dj),
            children: (0, a.jsx)(sY.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function s0(e) {
    let { send: t } = e;
    return (0, a.jsxs)(sZ.p, {
        compact: !0,
        name: ey.intl.string(eb.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(u.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: ey.intl.string(eb.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(o.y, { type: o.t.SPINNING_CIRCLE_SIMPLE, className: sQ.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(lg.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: ey.intl.string(eb.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var s1 = n(587157),
    s2 = n(347111),
    s3 = n(120234),
    s4 = n(901173),
    s7 = n(161431),
    s5 = n(280450),
    s6 = n(503275),
    s8 = n(957071),
    s9 = n(659280),
    ue = n(351906),
    ut = n(407653),
    un = n(322915);
function ul(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, m.bG)([ue.A], () => ue.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        c = `${t}-files`;
    if (0 === l.length) return null;
    let d = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      s9.Ay.User,
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
                      s9.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(ut.A, { projectId: n, file: e.file, className: un.Vk }),
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
    return (0, a.jsx)(s9.Ay, {
        id: t,
        className: un.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": ey.intl.string(eb.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(ur, { titleId: o, title: ey.intl.string(eb.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(ur, { titleId: c, title: ey.intl.string(eb.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function ur(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(u.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: un.Gf, children: n }),
            l,
        ],
    });
}
var ua = n(719442),
    ui = n(355622),
    us = n(408018),
    uu = n(186306),
    uo = n(323350),
    uc = n(35277),
    ud = n(820066),
    uf = n(683167),
    um = n(267102),
    uh = n(259691);
let ug = (0, aX.createChannelRecord)({ id: "1", type: e2.rbe.DM });
function up(e) {
    let t = ud.VW.end(e, []);
    return { anchor: t, focus: t };
}
function ux(e) {
    return (0, uo.WO)(ud.VW.richValue(e), { mode: "raw" });
}
function uv(e, t) {
    ((e.children = (0, us.x7)(t)), (e.selection = up(e)), e.onChange());
}
function uj(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rq.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(uh.A, { attachmentId: r }), n] });
}
var ub = n(497437),
    uy = n(465410);
let uk = "text-md/normal",
    uw = null;
function uS(e) {
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
                frontFrom: 1e3 * (0, sU._R)(f),
                frontTo: 1e3 * (0, sU._R)(m),
                backFrom: 1e3 * (0, sU.T)(f),
                backTo: 1e3 * (0, sU.T)(m),
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
        I = (0, m.bG)([a1.Ay], () => a1.Ay.useReducedMotion),
        E = t === ey.intl.string(eb.default.Zc7gML),
        M = r === t && E;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: f()(ub.VT, { [ub.qk]: l }),
            style: l
                ? {
                      insetInlineStart: h,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(sB.e, { shortcut: "tab", className: ub.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sG.o, {
                text: t,
                variant: uk,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: f()(ub.xM, { [ub.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            _(ub.IS, n || (!I && "out" === k), o),
            (0, a.jsx)("span", {
                ref: c,
                className: ub.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(u.E, { variant: uk, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: ub.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(u.E, { variant: uk, tag: "span", className: ub.xM, children: t }),
                          _(ub.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uN = i.memo(function (e) {
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
            N = (function (e) {
                let t = i.useContext(um.Ay),
                    [n] = i.useState(() => {
                        let n = (0, ua.ie)();
                        return (
                            (n.children = (0, us.x7)(e)),
                            (n.selection = up(n)),
                            (0, uf.a)({
                                editor: n,
                                chatInputType: ui.oU.GENERIC_RICH_TEXTAREA,
                                channel: ug,
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
                                    for (let [t, l] of ud.VW.nodes(e, { at: [], match: ud.l5.isText }))
                                        for (let e of t.text.matchAll(rq.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        uu.o.withMergedEntry(e, () =>
                                            ud.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    uc.b.textToVoid(
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
            })(rO.A.getDraft(t)),
            [A, C] = i.useState(() => ux(N));
        (0, s3.N$)(A);
        let I = i.useRef(A),
            [E, M] = i.useState(null),
            _ = i.useCallback(() => {
                let e = ux(N);
                (e !== I.current && ((I.current = e), (0, s2.I)(t, e), C(e)),
                    M(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !ud.ZF.isCollapsed(t)) return null;
                            let [n] = ud.VW.node(e, t.anchor.path);
                            return ud.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(N),
                    ));
            }, [N, t]),
            T = i.useCallback((e) => uv(N, e), [N]),
            P = "" !== A.trim();
        i.useEffect(() => y?.(P), [P, y]);
        let R = i.useRef(t);
        i.useLayoutEffect(() => {
            R.current !== t && ((R.current = t), uv(N, rO.A.getDraft(t)));
        }, [N, t]);
        let L = (0, m.bG)([a1.Ay], () => a1.Ay.isSubmitButtonEnabled),
            [$, q] = i.useState(!1);
        i.useEffect(() => {
            s || q(!1);
        }, [s]);
        let {
                drafts: D,
                addFiles: O,
                pasteFiles: z,
                removeDraft: G,
                settled: U,
                takeRefs: B,
            } = (0, tO.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            K = ei.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && el(n);
            }),
            H = "" !== A.trim() || D.length > 0 || b || K,
            V = S && H && U,
            [X, Y] = i.useState(null);
        i.useEffect(() => {
            if (null == X) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => Y(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [X]);
        let Z = (function (e) {
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
                            [rr.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              rr.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, s6.Y_)(l), r.forEach(s6.Y_));
                        }, [l, r]),
                        (a = (0, m.bG)([lr.default], () => (null == l ? null : lr.default.getUser(l)), [l])),
                        (s = (0, m.yK)(
                            [lr.default],
                            () => r.map((e) => lr.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    c = (0, m.bG)([s5.default], () => s5.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...o].filter((e) => e.id !== c && !e.bot),
                    [u, o, c],
                );
            })(t),
            Q = (0, s7.rU)(t),
            [J, ee] = i.useState(null),
            [et, en] = i.useState(0),
            er = i.useMemo(() => (null != E && S ? (0, s4.OG)(E, E.length) : null), [E, S]),
            ea = er?.start ?? null;
        i.useEffect(() => {
            null == ea ? ee(null) : (0, s7.IP)(t);
        }, [ea, t]);
        let es = ea === J ? null : er,
            ec = i.useMemo(() => (null == es ? [] : (0, s4.l$)(Z, Q, es.text)), [es, Z, Q]),
            ed = es?.text;
        i.useEffect(() => en(0), [ed]);
        let ef = ec.length > 0,
            em = Math.min(et, Math.max(0, ec.length - 1)),
            eh = i.useId(),
            eg = i.useCallback(
                (e) => {
                    let t = ec[e];
                    null != es &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (uc.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                uc.b.insertText(e, `${n} `));
                        })(N, es.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ec, es, N],
            ),
            ep = i.useCallback(() => {
                if (!V) return;
                let e = B(),
                    n = K
                        ? (function (e) {
                              let t = eu(e);
                              if (null == t || !el(t)) return null;
                              let n = t.history.present,
                                  l = nx(e);
                              return (
                                  eo(e, (e) => ({ ...e, history: W, sketchDismissedFor: null })),
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
                o(A, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == uw && (uw = document.createElement("canvas").getContext("2d"));
                    let i = uw;
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
                })(uC(eS.current), eP.current, (0, s4.Lj)(A));
                ("" !== l && Y(l), T(""), ee(null));
            }, [V, K, t, A, o, B, T]),
            ex = i.useCallback(
                (e) => {
                    (e.preventDefault(), ep());
                },
                [ep],
            ),
            ev = i.useCallback(() => {
                null == c || $ || (q(!0), c());
            }, [c, $]);
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
                            null == eu(n) &&
                            !F(n).active &&
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
        })({ active: s && null != c, projectId: t, scopeRef: d, onEscape: ev });
        let ej = null == v || "" !== A || !S || u || b ? null : v,
            ek = i.useCallback(
                (e) => {
                    if (ef && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ec.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), en((em + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), eg(em));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), ee(es?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && s && null != c) {
                        (e.preventDefault(), e.stopPropagation(), ev());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ej) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), T(ej));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ep());
                },
                [ep, g, s, c, ev, ej, T, ef, ec.length, em, eg, es],
            ),
            ew = i.useCallback(
                (e) => {
                    S && z(e);
                },
                [S, z],
            );
        (0, sW.Vo)({
            event: e2.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ew(t);
            },
        });
        let eS = i.useRef(null),
            eN = i.useCallback(() => {
                let e = I.current;
                x?.((0, s4.Lj)(e), () => {
                    I.current === e && T("");
                });
            }, [x, T]),
            [eA, eC] = i.useState(0),
            [eI, eE] = i.useState(!1);
        i.useEffect(() => {
            if (0 === A.length) return void eE(!1);
            let e = uC(eS.current);
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
            let t = setTimeout(() => eE(!1), uA);
            return () => clearTimeout(t);
        }, [A]);
        let eM = i.useMemo(() => ({ "--custom-glow-x": `${eA}px` }), [eA]),
            e_ = eI ? ` ${ub.EB}` : "",
            eT = u
                ? ey.intl.string(eb.default.qqlUiW)
                : r
                  ? ey.intl.string(eb.default.Z0hyNL)
                  : l
                    ? ey.intl.string(eb.default.GcFRaY)
                    : S
                      ? b
                          ? ey.intl.string(eb.default.knUjL3)
                          : j
                            ? ey.intl.string(eb.default.IevBEw)
                            : ey.intl.string(s ? eb.default["0BJa/0"] : eb.default.TEeU7z)
                      : ey.intl.string(eb.default.zZ9NgM),
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
            eD = null != ej,
            eF = X ?? ej ?? eT,
            eO = "" === A && "" !== eF;
        return (0, a.jsxs)("form", {
            onSubmit: ex,
            className: ub.DA,
            children: [
                ef
                    ? (0, a.jsx)(ul, {
                          id: eh,
                          projectId: t,
                          suggestions: ec,
                          selectedIndex: em,
                          onHover: en,
                          onSelect: eg,
                      })
                    : null,
                D.length > 0 || K
                    ? (0, a.jsxs)("div", {
                          className: ub.lN,
                          children: [
                              D.map((e) => (0, a.jsx)(tO.Nl, { draft: e, onRemove: G }, e.localId)),
                              K ? (0, a.jsx)(sJ, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${ub.wg} ${ub.LP}${e_}`, style: eM, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${ub.wg} ${ub.L3}${e_}`, style: eM, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: ub.VA,
                    ref: eS,
                    children: [
                        (0, a.jsx)(s8.A, {
                            navId: "conjure-composer-attach",
                            disabled: !S,
                            buttonClassName: `${ub.Y0} ${ub.nu}`,
                            iconClassName: ub.Qu,
                            onAddFiles: O,
                            onImport: p,
                            onSendToOtherProjects: null != x ? eN : void 0,
                        }),
                        eO
                            ? (0, a.jsx)("div", {
                                  ref: eL,
                                  className: ub.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(uS, { text: eF, offering: eD && null == X, typed: null != X }),
                              })
                            : null,
                        (0, a.jsx)(n$.A, { id: eq, children: ey.intl.string(eb.default.ldNl9x) }),
                        (0, a.jsx)(rq.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sV.A, {
                                editor: N,
                                containerClassName: f()(ub.sq, uy.dv),
                                className: ub.jp,
                                readOnly: !S,
                                canFocus: S,
                                onChange: _,
                                onBlur: () => M(null),
                                onKeyDown: ek,
                                onPaste: ew,
                                renderExtraElement: uj,
                                "aria-labelledby": eq,
                                "aria-describedby": eO ? e$ : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ef,
                                "aria-controls": ef ? eh : void 0,
                                "aria-activedescendant": ef ? ((0, s9.aI)(em) ?? void 0) : void 0,
                            }),
                        }),
                        eO ? (0, a.jsx)(n$.A, { id: e$, children: eT }) : null,
                        (0, a.jsx)("div", {
                            className: ub.Sz,
                            children:
                                s && null != c
                                    ? (0, a.jsx)(tq.m, {
                                          text: ey.intl.string(eb.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${ub.Y0} ${ub.$E}`,
                                              disabled: $,
                                              onClick: ev,
                                              "aria-label": ey.intl.string(eb.default.wiguT0),
                                              children: (0, a.jsx)(rG.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : k?.tierSettings != null && null != w
                                      ? (0, a.jsx)(s1.A, {
                                            settings: k.tierSettings,
                                            tiers: k.tiers,
                                            choices: k.choices,
                                            disabled: !S,
                                            onChange: w,
                                            className: `${ub.Y0} ${ub.$E}`,
                                            icon: (0, a.jsx)(sK.R, {
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
                                  className: ub.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: ub.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: ub.rt,
                                          disabled: !V,
                                          "aria-label": ey.intl.string(eb.default.rxW2cl),
                                          children: (0, a.jsx)(sH.SendMessageIcon, {
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
function uC(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uI = n(709753),
    uE = n(540338);
function uM(e) {
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
var u_ = n(986109);
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
        [d, m] = i.useState(() => a1.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
    let e = si.w.get(uq);
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
function uB(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, m.bG)([rp.A], () => null != n && n.length > 0 && rj({ keys: n }, rp.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: ey.intl.string(eb.default.F2yVHg) }
        : null;
}
function uK(e) {
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
let uH = [12e4];
var uV = n(292771);
function uW(e) {
    let { presentation: t, render: n } = e,
        l = (0, m.bG)([a1.Ay], () => a1.Ay.useReducedMotion),
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
            className: uV.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: f()(uV.qd, e.leaving ? uV.dv : uV.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function uX(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var uY = n(247171);
function uZ(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: f()(uY.row, r),
        children: [
            (0, a.jsx)(u.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: f()(uY.gutter, uY[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: uY.content, children: i }),
        ],
    });
}
var uQ = n(830205);
function uJ(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uZ, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: uQ.aK,
        children: (0, a.jsxs)("div", {
            className: uQ.n8,
            children: [
                (0, a.jsx)(u.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: uQ.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: uQ.X8,
                          children: (0, a.jsx)(tq.m, {
                              text: ey.intl.string(ey.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tV.K, {
                                  "aria-label": ey.intl.string(ey.t.WAI6xu),
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
function u0(e) {
    let { projectId: t } = e,
        n = i.useContext(tp.bI);
    return (0, a.jsx)(uJ, {
        icon: i$.ShieldIcon,
        children: ey.intl.format(eb.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tp.vL)(t, n.guildId));
            },
        }),
    });
}
var u1 = n(443865),
    u2 = n(716502);
function u3(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uZ, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: u2.Nr,
        children: (0, a.jsxs)("section", {
            className: u2.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: u2.X8,
                          children: (0, a.jsx)(tq.m, {
                              text: ey.intl.string(ey.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tV.K, {
                                  "aria-label": ey.intl.string(ey.t.WAI6xu),
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
function u4(e) {
    let { children: t } = e;
    return (0, a.jsx)(u.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: u2.DD,
        children: t,
    });
}
function u7(e) {
    let { children: t } = e;
    return (0, a.jsx)(u.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: u2.rf,
        children: t,
    });
}
function u5(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: u2.o1, children: t });
}
var u6 = n(95635);
function u8(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = tC(t, n);
    return (0, a.jsx)(uJ, {
        icon: u6.UploadIcon,
        onDismiss: l,
        children: ey.intl.format(eb.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let u9 = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && uX(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(u0, { projectId: n });
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
                (null != n.publishCta && st(l, n.publishCta))
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
            return null != l ? (0, a.jsx)(u8, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || uX(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(u3, {
                icon: u1.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(u4, { children: ey.intl.string(eb.default.OJlbhX) }),
                    (0, a.jsx)(u7, { children: ey.intl.string(eb.default["3vJBni"]) }),
                    (0, a.jsx)(u5, {
                        children: (0, a.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: ey.intl.string(eb.default["U/bLzU"]),
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
var oe = n(817921);
function ot(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, tp.Ay)(e),
                    u = (0, m.bG)([lr.default], () => lr.default.getCurrentUser()?.id),
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
                                if ((0, nE.BL)(n)) return n;
                                if (!(0, nE.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == f || uK(f) ? null : f,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === uL(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    j = uB(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, m.bG)([rp.A], () => b > 0 && null == rp.A.getSettings(e), [b, e]),
                    k = (0, uI.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, nE.Ji)(t)) || !!(0, nE.B0)(t, t.lastIndexOf(a))) &&
                        (null == f || !uK(f)) &&
                        null == uM(t) &&
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
                        let l = uR.get(`${e}:${n}`);
                        return null != l ? uL(t, l, u) : null;
                    },
                    isDismissed: (t) => uG(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, uH);
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
                                                  si.w.set(uq, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  si.w.set(uq, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  si.w.set(uq, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (uO++, uF.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(u9, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(uP, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: oe.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(uW, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var on = n(52133),
    ol = n(732159),
    or = n(888366),
    oa = n(862026),
    oi = n(291192);
function os(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, oa.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: oi.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: oi.Sp,
                children: [
                    (0, a.jsx)("span", { className: oi.q3 }),
                    (0, a.jsxs)("span", {
                        className: oi.g8,
                        children: [
                            (0, a.jsx)(or.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(u.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: oi.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: oi.nM,
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
                                          (0, a.jsx)(lg.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, eM.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(ol.u, {
                                                                    ...t,
                                                                    title: ey.intl.string(eb.default["i+xjZM"]),
                                                                    subtitle: ey.intl.string(eb.default.fMBZmD),
                                                                    confirmText: ey.intl.string(eb.default.i5f3Uo),
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
var ou = n(345942),
    oo = n(468689),
    oc = n(576705);
function od(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            ey.intl.format(n ? eb.default.esEGL5 : eb.default["XrN+Bg"], {
                onOpen: () => oo.A.open(t, e2.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
function of(e) {
    return (0, m.bG)([ti.Ay, aH.A], () => {
        let t = ti.Ay.getProject(e);
        return null == t ? "" : (aH.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var om = n(951465),
    oh = n(369455);
function og(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: o } = e,
        c = of(s),
        d =
            null ==
            (i = (0, m.bG)([ti.Ay, lT.A], () => {
                let e = ti.Ay.getProject(s);
                return null == e || "user" === e.install_scope || null == e.guild_id
                    ? null
                    : (lT.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        f = (0, m.cf)([ti.Ay, th.A, lT.A, oc.A], () => {
            let e = ti.Ay.getProject(s);
            if (null == e || "user" === e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eF.q7.AUTOMOD) === !0 ||
                    th.A.getPublishStatus(s)?.surface === "automod",
                n = lT.A.getGuild(e.guild_id),
                l = null != n && oc.A.can(e2.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(u.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            ey.intl.format(
                ((t = o),
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
                    name: c,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, ou.u)(d.guildId);
                    },
                },
            ),
            null != f.guildId
                ? (0, a.jsx)(od, { guildId: f.guildId, update: o.update })
                : !f.automod && o.update && null != o.published_revision
                  ? (0, a.jsx)(op, { projectId: s, notice: o })
                  : null,
        ],
    });
}
function op(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tp.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, m.cf)(
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
                      ? ey.intl.format(eb.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    nT.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: oh.Z,
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
                      : ey.intl.format(eb.default["6/zJpD"], {
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
                                null != e && (0, om.A)(e);
                            },
                        }),
              ],
          });
}
var ox = n(73153),
    ov = n(505527),
    oj = n(930390),
    ob = n(521981),
    oy = n(491182),
    ok = n(438729),
    ow = n(895597),
    oS = n(448368),
    oN = n(837528),
    oA = n(941308),
    oC = n(715628),
    oI = n(752636),
    oE = n(9842),
    oM = n(589022),
    o_ = n(967198),
    oT = n(531685),
    oP = n(417461);
let oR = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function oL(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function o$(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function oq(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = o$(e, t),
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
    if (oL(r) && oL(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && oL(o$(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function oD(e, t) {
    let { streaming: n } = t,
        l = (0, m.bG)([a1.Ay], () => a1.Ay.useReducedMotion),
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
                      for (; a > 0 && oq(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && oR.has(e.charAt(l - 1));) l--;
                                    return oR.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && oq(t, u);) u++;
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
var oF = n(624479),
    oO = n(890377),
    oz = n(92446),
    oG = n(957565),
    oU = n(180227);
function oB(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: f()(oU.QE, { [oU.Rn]: t }),
              children: (0, a.jsx)(ib.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          ib.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function oK(e) {
    return oG.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: ey.intl.string(ey.t.JrGD7E), icon: oF.CopyIcon, onClick: () => (0, oG.C)(e) }]
        : [];
}
function oH(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: ey.intl.string(eb.default.CXtLD2),
                          tooltip: ey.intl.string(eb.default.DOb1HM),
                          icon: oO.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: ey.intl.string(eb.default.urZwpN),
                          icon: tM.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(oB, { groupStart: n, actions: [...r, ...oK(t)] });
}
function oV(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: ey.intl.string(eb.default.H8Jfhu), icon: tY.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: oz.BugIcon, onClick: r }];
    return (0, a.jsx)(oB, { groupStart: n, actions: [...i, ...oK(t), ...s] });
}
let oW = (0, aX.createChannelRecord)({ id: "conjure-builder", type: e2.rbe.DM }),
    oX = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oY(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: f()(oU.Yq, { [oU.x1]: t }), children: e });
}
function oZ(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let oQ = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function oJ(e, t, n) {
    let { content: l } = (0, oA.A)(e, oQ),
        r = i.useMemo(() => ((0, rq.aW)(e.content) ? (0, ob.z2)(s$.U, e, oQ).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: oW, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(ok.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, oC.A)(s, r);
}
function o0(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oN.m)(e, oW, t.usernameProfile, l),
        u = (0, oN.Jo)(t.avatarProfile, l),
        o = (0, m.bG)([o_.A], () => o_.A.getGuildId()),
        c = (0, m.bG)([lr.default], () => lr.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let n = lr.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, a.jsx)(oM.A, { ...t, user: n, currentUser: c, guildId: o ?? void 0 });
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
function o1(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, rq.aW)(n.content)
                          ? (0, ob.z2)(s$.U, n, e).content
                          : (0, ob.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: oU.GV,
                              children: [
                                  (0, a.jsx)(p.x, {
                                      className: oU.Rj,
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
            [ll.A],
            () => ({
                isReplyAuthorBlocked: ll.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: ll.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, iv.X4)(n),
        d = (0, iv.X4)(t),
        f = o0(n);
    return (0, a.jsx)(oS.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: oW,
        referencedMessage: { state: oE.a.LOADED, message: n },
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
function o2(e) {
    let { message: t, author: n } = e,
        l = o0(t);
    return (0, a.jsx)(ow.Ay, {
        message: t,
        channel: oW,
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
function o3(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, s6.vm)(l),
        c = i.useMemo(() => (0, iv.FT)(o, null), [o]),
        d = i.useMemo(() => L(t), [t]),
        f = d?.body ?? t,
        m = (0, s4.Qu)(f),
        h = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, aW.Ay)({ channelId: oW.id, content: f, author: o });
            return (0, aV.rh)({ ...e, timestamp: oZ(n, e.timestamp), state: e2.cmJ.SENT });
        }, [f, o, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              o4,
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
function o4(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = oJ(t, l);
    return (0, a.jsx)(oy.A, {
        className: oU.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(o2, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? (0, oP.b)(l)
                    ? (0, a.jsx)("div", { className: oU.dg, children: o })
                    : o
                : (0, a.jsxs)("div", {
                      className: oU.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: oU.GV,
                              children: [
                                  (0, a.jsx)(p.x, {
                                      className: oU.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: oU.WO, children: o }),
                      ],
                  }),
        childrenAccessories: oY(i, "" !== l),
        childrenButtons: (0, a.jsx)(oH, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function o7(e) {
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
        { text: d, revealing: f } = oD(t, { streaming: (0, m.bG)([oT.A], () => o && oT.A.isFocused(), [o]) }),
        h = i.useMemo(() => (0, iv.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, s6.vm)(p),
        v = i.useMemo(() => (null == r ? null : L(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, aW.Ay)({ channelId: oW.id, content: v?.body ?? r.content, author: x });
            return (0, aV.rh)({ ...e, id: r.id, timestamp: oZ(r.createdAt, e.timestamp), state: e2.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: oW.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, aW.Ay)({ channelId: oW.id, content: "", author: oX })),
        k = i.useMemo(
            () =>
                (0, aV.rh)({
                    ...y,
                    timestamp: oZ(n, y.timestamp),
                    state: e2.cmJ.SENT,
                    ...(null != b ? { type: e2.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", d), [k, d]),
        S = i.useMemo(
            () => (0, oI.A)({ message: k, channel: oW, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        N = oJ(w, d, oU.OS);
    return (0, a.jsxs)("div", {
        className: oU.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(oy.A, {
                className: oU.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(o1, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: S,
                childrenMessageContent: N,
                childrenAccessories: oY(l, "" !== d),
                disableInteraction: !0,
            }),
            c,
            u ? (0, a.jsx)("img", { className: oU.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var o5 = n(981879);
function o6(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, aV.rh)(
                    { ...(0, aW.Ay)({ channelId: oW.id, content: "" }), id: `conjure:${t}`, state: e2.cmJ.SENT },
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
                (ox.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: oW.id,
                    messageId: l.id,
                    users: [oX],
                    emoji: e,
                    reactionType: ov.v.NORMAL,
                }),
                    ox.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: oW.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: ov.v.NORMAL,
                    }));
            }
            return (
                t(),
                ox.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    ox.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: o5.H,
            children: (0, a.jsx)(oj.A, {
                message: l,
                channel: oW,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var o8 = n(442433);
n(775443);
var o9 = n(616e3),
    ce = n(155899);
function ct(e) {
    let { onSelect: t, onClose: n = o8.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(e5.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": ey.intl.string(ey.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(e6.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(e6.Dr, {
                          id: "restore-version",
                          label: ey.intl.string(eb.default.H8Jfhu),
                          icon: tY.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(e6.Dr, { id: "view-trace", label: "View Trace", icon: oz.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cn(e) {
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
        j = null != v && null != p ? () => cl(v, p) : void 0,
        b =
            ((t =
                eC() && "assistant" === x.role && (0, nE.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, m.bG)(
                [o9.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : o9.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((eS = { projectId: e, traceId: t }), [...ew])) n(e);
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
                          void (0, o8.jA)(t, (e) => (0, a.jsx)(ct, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(o7, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(oV, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(sz, {
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
                turnId: (0, nE.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != w && null != p && f
                        ? () =>
                              cl(
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
function cl(e, t) {
    (0, ce.F)({ onConfirm: () => t(e) });
}
var cr = n(288539),
    ca = n(677683),
    ci = n(677690),
    cs = n(159711);
function cu(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, m.bG)([ca.A], () => ca.A.getOutcome(l))),
            (n = (0, m.bG)(
                [ln.A, lr.default, ll.A],
                () => {
                    let e = t?.status === "pinned" ? ln.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, lt.m1)(e, lr.default, ll.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = ey.intl.string(eb.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(nF, {
              title: s,
              children: (0, a.jsx)(u.E, {
                  className: cs.r,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? ey.intl.formatToPlainString(eb.default.gKe6Lw, { channelName: i ?? "" })
                          : ey.intl.string(eb.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(nF, { title: s, children: (0, a.jsx)(co, { projectId: l }) });
}
function co(e) {
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
                        [lM.Ay, oc.A],
                        () =>
                            null == t
                                ? []
                                : lM.Ay.getChannels(t)
                                      [lM.vM].map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === e2.rbe.GUILD_VOICE && oc.A.can(e2.xBc.MANAGE_CHANNELS, e),
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
                    let t = await (0, ci.pk)(d.id, f);
                    (u(!1), t ? (0, ci.tg)(e, { status: "pinned", channelId: d.id }) : c(!0));
                }, [f, e, d]),
                g = i.useCallback(() => (0, ci.tg)(e, { status: "skipped" }), [e]);
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
        g = (0, lS.A)(n, "voice"),
        p = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (g ?? []).filter((t) => e.has(t.value));
        }, [l, g]);
    return (0, a.jsx)("div", {
        className: cs.r,
        children: (0, a.jsxs)(i6.B, {
            gap: 12,
            children: [
                (0, a.jsx)(u.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: ey.intl.string(eb.default["1vVBAw"]),
                }),
                p.length > 0
                    ? (0, a.jsx)(n5.Z, {
                          selectionMode: "single",
                          label: ey.intl.string(eb.default.peOi1H),
                          placeholder: ey.intl.string(eb.default["9+dfPT"]),
                          options: p,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: c ? ey.intl.string(eb.default.d7EeAm) : void 0,
                          disabled: o,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ey.intl.string(eb.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: cs.o,
                    children: [
                        (0, a.jsx)(h.$, {
                            variant: "secondary",
                            size: "sm",
                            text: ey.intl.string(eb.default.Iw0l8o),
                            disabled: o,
                            onClick: f,
                        }),
                        p.length > 0
                            ? (0, a.jsx)(h.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: ey.intl.string(eb.default.FYI3qr),
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
function cc(e, t, n) {
    return (0, a.jsx)(cr.A, { userId: e, content: `@${t}` }, n);
}
function cd(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, s6.Y_)(l);
            }, [l]);
            let r = (0, m.bG)([lr.default], () => (null == l ? null : lr.default.getUser(l)), [l]),
                a = (0, aZ.tx)(r),
                s = of(e),
                u =
                    (0, m.bG)([lT.A], () => (null == t.guild_id ? null : lT.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? ey.intl.string(eb.default.R1tPlP),
                o = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? ey.intl.format(eb.default.Lwsrhg, { app: s, server: u })
                        : ey.intl.format(eb.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? ey.intl.format(eb.default.mT7EQG, { app: s, server: u })
                        : ey.intl.format(eb.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? ey.intl.format(eb.default["4LVIeo"], { app: s, server: u })
                        : ey.intl.format(eb.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? ey.intl.format(eb.default["4VQfid"], { channel: e, server: u })
                        : ey.intl.format(eb.default.RlMIJN, { channel: e, server: u, ...o });
                }
                case "remixed":
                    return ey.intl.format(eb.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return ey.intl.string(eb.default.UGAfl9);
            }
        })(t, n, cc),
        r = uB(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(cu, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(u.E, { variant: "text-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rT, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let cf = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    nh.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rq.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o3, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(sL.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, a.jsx)(s0, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, a.jsx)(o6, { messageId: u.id, reaction: u.agentReaction })
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
                                    return (n) => (0, rD.tp)(e, t.id, n);
                            })(l, u, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o7, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, a.jsx)(sL.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sO, {
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
                        children: (0, a.jsx)(o7, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(og, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o7, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(cd, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, a.jsx)(os, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sO, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sO, {
                            projectId: l,
                            steps: cm,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cn, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, on.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, on.A)(e.row, t.row, ["message"]) &&
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
                (0, on.A)(e.replyTo, t.replyTo) &&
                (0, on.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    cm = [],
    ch = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cg = new WeakMap();
function cp(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cx(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cv = ["wheel", "touchstart", "pointerdown", "keydown"];
function cj(e) {
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
        A = i.useCallback((e) => {
            ((w.current = e), N(e));
        }, []),
        [C, I] = i.useState(null),
        E = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(E.current), []);
    let M = i.useCallback((e) => {
            (I(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        _ = (0, m.bG)([th.A], () => th.A.getPublishStatus(t)),
        T = (0, m.bG)([lr.default], () => lr.default.getCurrentUser()?.id),
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
                        i = cg.get(r);
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
                            i = rU({
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
                            if (null != n.prose && ch.test(n.prose.content)) f = !0;
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
                        let m = ch.test(e.content ?? "");
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
                    (cg.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return se(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, _)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = sn.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), sn.set(t, n)), n);
                      })),
                g,
            );
        }, [n, _, g]),
        R = i.useMemo(() => P.map((e) => e.key), [P]),
        [L, $] = i.useState(null),
        q = (function (e, t, n) {
            if (null == t) return cp(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cx(e, t.endKey, t.end - 1) + 1,
                a = cx(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cp(e, a, r));
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
                t = K.current ? cj(w.current) : null;
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
        for (let n of cv) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cv) e.removeEventListener(n, t);
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
                    return ((n = Math.min(e.length, t.end + 30)), cp(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cp(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cp(e, i, t.end) : null;
            })(F.current, D.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: v.current,
            });
            "older" === n ? (0, tm.loadOlderHistory)(t) : null != n && $(n);
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
                    (0, tm.loadOlderHistory)(t) && (X.current = e);
                    return;
                }
                (b(),
                    (G.current = () => {
                        (w.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = F.current), cp(n, (l = Math.max(0, a - 30)), l + 60))));
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
    let Z = null == q.endKey;
    (i.useEffect(() => k?.(Z), [Z, k]),
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
                if (r && v.current && null != cj(l)) (b(), $(D.current), (K.current = !0), H());
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
    let Q = i.useMemo(() => uM(n), [n]),
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
        er = (0, m.bG)([rp.A], () => rp.A.getSettings(t)?.secrets, [t]),
        ea = (0, uI.WT)(t),
        ei = i.useMemo(() => (0, rx.Mv)(n, er), [n, er]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: f()(u_.x7, u_.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: u_.Ub, children: (0, a.jsx)(o.y, {}) }),
            });
        let e = "unavailable" === l ? eb.default.Td4Sf4 : eb.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: u_.x7,
            children: (0, a.jsx)(uP, { role: "assistant", children: (0, a.jsx)(o7, { content: ey.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uT.Provider, {
        value: U,
        children: (0, a.jsxs)("ol", {
            ref: A,
            className: u_.x7,
            children: [
                P.slice(q.start, q.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cf,
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
                        cf,
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
                            onApprovePlan: n.render_id === Q ? d : void 0,
                            onRestoreVersion: p,
                        },
                        e.key,
                    );
                }),
                Z
                    ? ea.map((e) =>
                          (0, a.jsx)(
                              uP,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(o7, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uE.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != el && Z
                    ? (0, a.jsx)(uP, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(o7, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ey.intl.string(eb.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                Z ? (0, a.jsx)(ot, { projectId: t, messages: n, draftHasText: !0 === c, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cy = n(731084),
    ck = n(823376),
    cw = n(187447);
function cS(e) {
    let { activity: t, id: n } = e,
        l = (0, nC.j)(),
        { text: r, revealing: s } = oD(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cw.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nS.Ch, {
                ref: u,
                className: cw.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: f()(sF.PT, cw.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: a5.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cN = n(53659);
function cA(e) {
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
        b = (0, cy.xu)({
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
        y = ey.intl.string(b),
        k = b === cy.kx["0"],
        [w, S] = i.useState(h ?? y),
        N = (0, nC.j)();
    (l || (0, cy.E4)(y, w) || (!N && !k)) && w !== y && S(y);
    let A = i.useRef(y);
    (i.useEffect(() => {
        A.current = y;
    }, [y]),
        i.useEffect(() => {
            g?.(w);
        }, [w, g]));
    let C = i.useRef(null),
        I = i.useRef(w);
    i.useEffect(() => {
        I.current = w;
    }, [w]);
    let E = i.useRef(k),
        M = i.useRef(0);
    (i.useEffect(() => {
        ((E.current = k), !k && (0, cy.E8)(I.current) && S(A.current));
    }, [k]),
        i.useEffect(() => {
            if (!N) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((M.current = (0, cy.E8)(I.current) ? M.current + 1 : 0), S((0, cy.Ov)(M.current)))
                    : A.current !== I.current
                      ? S(A.current)
                      : C.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, cy.FZ)),
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
    return (0, a.jsx)(e7.Y, {
        targetElementRef: p,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(cS, { id: x, activity: t }),
        children: () =>
            (0, a.jsxs)(nT.D, {
                innerRef: p,
                className: f()(cN.hF, _ && cN.Xd),
                "aria-label": ey.intl.string(
                    r
                        ? eb.default.qqlUiW
                        : b === eb.default.j8tmjK
                          ? eb.default.j8tmjK
                          : k
                            ? cy.kx["0"]
                            : eb.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? x : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ey.intl.string(b),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: cN.bl,
                        children: (0, a.jsx)(ck.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cN.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: N
                            ? (0, a.jsx)(sG.o, {
                                  ref: C,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: cy.vg,
                                  delay: null,
                                  className: cN.yE,
                              })
                            : (0, a.jsx)(u.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: cN.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cC = { second: 1e3, minute: 6e4 };
function cI(e) {
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
var cE = n(719374);
function cM(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = cI(t);
    return (0, a.jsx)(u.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cE.$,
        "data-conjure-turn-timer": !0,
        children: (0, rQ.C7)(l),
    });
}
function c_(e) {
    let { startedAt: t } = e,
        n = cI(t, "minute");
    return (0, a.jsx)(n$.A, { role: "timer", children: (0, rQ.Us)(n) });
}
var cT = n(885574),
    cP = n(242779),
    cR = n(436804);
function cL(e) {
    return e.toLocaleString();
}
function c$(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cR.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cR.mf,
                children: [
                    (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [cL((0, cP.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(u.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    cL(n.input_tokens),
                    " in \xb7 ",
                    cL(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cL(n.cache_creation_input_tokens)} cache write \xb7 ${cL(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cq(e) {
    let { project: t } = e,
        n = (0, cP.wU)(t.compaction),
        l = (0, cP.wU)(t.classifier),
        r = (0, cP.wU)(t.image),
        i = (0, cP.wV)(t.orchestrator, t.codegen),
        s = (0, cP.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: cR.si,
        role: "dialog",
        "aria-label": ey.intl.string(eb.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cR.Q$,
                children: (0, a.jsxs)("div", {
                    className: cR.mf,
                    children: [
                        (0, a.jsxs)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [cL((0, cP.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(c$, { label: ey.intl.string(eb.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(c$, { label: ey.intl.string(eb.default.ANCEo3), usage: n }),
            (0, a.jsx)(c$, { label: ey.intl.string(eb.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(c$, { label: ey.intl.string(eb.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cR.mf,
                children: [
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ey.intl.string(eb.default["8OUg09"]),
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cP.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cP.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cD(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(e7.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cq, { project: t }),
        children: (e) =>
            (0, a.jsx)(nT.D, {
                innerRef: n,
                className: cR.Y$,
                "aria-label": ey.intl.string(eb.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cT.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cF = n(990250);
function cO(e) {
    let { queued: t } = e,
        n = ey.intl.string(eb.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: cF.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: cF.wx,
                children: [
                    (0, a.jsx)(u.E, { variant: "text-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(nS.Ch, {
                className: cF.XG,
                children: (0, a.jsx)("ul", {
                    className: cF.p_,
                    children: t.map((e) => (0, a.jsx)(cz, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cz(e) {
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
              className: cF.AS,
              children: (0, a.jsx)(u.E, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: ey.intl.string(eb.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: cF.AS,
              children: [
                  (0, a.jsx)(u.E, {
                      ref: n,
                      variant: "text-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cF.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(lg.Q, {
                            variant: "secondary",
                            textVariant: "text-xs/medium",
                            text: ey.intl.string(l ? eb.default.nEMoeN : eb.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cG(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(e7.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cO, { queued: t }),
        children: (e) =>
            (0, a.jsx)(nT.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: ey.intl.formatToPlainString(eb.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cU = n(997421);
function cB(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: o = !1,
            thinkingActivity: c,
            compacting: d,
            saving: h,
            projectUsage: g,
            connState: p,
            queued: x,
        } = e,
        v = (0, eI.Zv)(t),
        j = (0, m.bG)([th.A], () => th.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, cy.E8)(e) || e === ey.intl.string(eb.default.mKK6wB) || e === ey.intl.string(eb.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == g ? null : (0, cy.uc)(g),
        S = null != s,
        N = s ?? (n ? l : void 0),
        A = n || r || S || !0 === h;
    return (0, a.jsxs)("div", {
        className: cU.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cU.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    A || o || v || j
                        ? (0, a.jsx)(cA, {
                              activity: c,
                              compacting: d,
                              saving: h,
                              restoring: r,
                              remixing: S,
                              recalling: o,
                              controlling: v,
                              publishPending: j && A,
                              publishing: j,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != N ? (0, a.jsx)(cM, { startedAt: N }) : null,
                ],
            }),
            null != N ? (0, a.jsx)(c_, { startedAt: N }) : null,
            0 === x.length ? null : (0, a.jsx)(cG, { queued: x, className: f()(cU.BP, cU.A1) }),
            null == g || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cU.BP,
                      children: [
                          (0, a.jsx)(u.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(cD, { project: g }),
                      ],
                  }),
            "open" === p
                ? null
                : (0, a.jsx)(u.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === p ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ey.intl.formatToPlainString(eb.default["tCo+ZM"], { status: (0, cy.Db)(p) }),
                      "data-conjure-conn": !0,
                      "data-state": p,
                      className: cU.XF,
                      children: (0, cy.Db)(p),
                  }),
        ],
    });
}
var cK = n(698638),
    cH = n(608711);
let cV = [ey.intl.string(eb.default["9w+Chc"]), ey.intl.string(eb.default.WAvmdq), ey.intl.string(eb.default.SKsrzl)];
function cW(e) {
    var t, n;
    let l,
        r,
        s,
        o,
        c,
        { projectId: d, restoreState: f, onRestoreVersion: g, onImportProject: p, escapeScopeRef: x } = e,
        v = (0, m.bG)([rr.A], () => rr.A.getMessages(d), [d]),
        j = (0, m.bG)([tm.default], () => tm.default.getConnState(d), [d]),
        b = (0, m.bG)([rr.A], () => rr.A.getProjectUsage(d), [d]),
        y = (0, m.bG)([rr.A], () => rr.A.getThinkingActivity(d), [d]),
        k = (0, m.bG)([rr.A], () => rr.A.isCompacting(d), [d]),
        w = (0, m.bG)([rr.A], () => rr.A.isSaving(d), [d]),
        S = ri(d),
        N = (0, m.bG)([re.A], () => re.A.getModelSettings(d), [d]),
        A = i.useRef(null),
        C = i.useRef(null),
        I = i.useRef(null),
        M = i.useRef(null),
        {
            stickToBottomRef: _,
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
                    for (let e of cv) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of cv) t.removeEventListener(e, o);
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
                let e = A.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            ($(), D.current ? e() : I.current?.showLatest(e));
        }, [$, D]),
        G = i.useCallback(() => {
            (O(), I.current?.handleScroll());
            let e = M.current;
            null != e && (e.position = _.current ? null : (I.current?.snapshot() ?? null));
        }, [O, _]),
        B = i.useContext(eR) === d;
    i.useLayoutEffect(() => {
        if (!B) return;
        let e = { position: e$.A.getProjectView(d).chatScroll };
        return ((M.current = e), () => (0, eL.g7)(d, { chatScroll: e.position }));
    }, [B, d]);
    let K = i.useRef(!B);
    (i.useLayoutEffect(() => {
        if (K.current || 0 === v.length) return;
        K.current = !0;
        let e = e$.A.getProjectView(d).chatScroll;
        null != e && I.current?.restore(e) !== !0 && null != M.current && (M.current.position = null);
    }, [v, d]),
        i.useLayoutEffect(() => {
            let e = A.current;
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
                    r && (_.current ? C.current?.scrollToBottom() : I.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [_]),
        i.useEffect(() => {
            (0, tm.ensureConnection)(d);
        }, [d]),
        (0, rF.E1)(d, (0, nC.j)()));
    let H = V(d),
        W = (function (e) {
            let t = (0, tp.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, m.bG)([lT.A], () => (null == n ? null : (lT.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: ey.intl.format("channel" === s ? eb.default["1cm4fj"] : eb.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(d),
        X = (function (e) {
            let t = (0, m.bG)([rR.A], () => rR.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rL.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rP.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? ey.intl.format(eb.default["bw/n4C"], { helpdeskURL: e })
                            : ey.intl.format(eb.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: ey.intl.formatToPlainString(eb.default.GHgG2B, { percent: l, limit: n }) };
        })(d),
        Y =
            ((l = (0, m.bG)([rn.A], () => rn.A.getFailure(d))),
            (r = i.useCallback(() => (0, rl.CM)(d), [d])),
            null == l
                ? null
                : {
                      message: ey.intl.format(eb.default.Up6Ssw, { reason: l }),
                      retry: { text: ey.intl.string(eb.default["ywA+ET"]), onClick: r },
                  }),
        Z = (0, m.bG)([rn.A], () => rn.A.getSetupStartedAt(d), [d]),
        Q = i.useCallback(
            (e, t) => {
                (0, tm.sendUserMessage)(d, e, t);
            },
            [d],
        ),
        J = i.useCallback(
            (e, t, n) => {
                let l = n ?? Q;
                0 === H.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => E(e.comment)),
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
                                      a.push(`${t + 1}. ${T(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: H.annotations, metaComment: e, context: H.context }),
                          t,
                      ),
                      U(d));
            },
            [H, Q, d],
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
            })(d) ||
                rr.A.isThinking(d)) &&
                (0, tm.interruptTurn)(d);
        }, [d]),
        et = i.useCallback((e) => (0, n0.RQ)(d, e.implementation_prompt), [d]),
        [en, el] = (function (e) {
            let [t, n] = i.useState(() => rz(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rz(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(d),
        er = i.useCallback(() => Q(ey.intl.string(eb.default["t5CN3+"])), [Q]),
        ea = i.useCallback((e, t, n) => (0, n0.RQ)(d, e, { clarificationAnswers: t, attachments: n }), [d]),
        ei = i.useCallback((e) => (0, rt.X)(d, e), [d]),
        es = i.useCallback((e) => (0, t$.vX)(d, e), [d]),
        eu = i.useCallback((e) => (0, tO.gn)(d, "chat", Array.from(e), es), [d, es]),
        eo = i.useCallback(() => (0, n0.RQ)(d, ey.intl.string(eb.default.Zc7gML)), [d]),
        ec = f?.status === "restoring",
        ed = "open" === j && !ec,
        ef = v[v.length - 1],
        em = null != ef && "assistant" === ef.role && null != ef.proposal,
        [eh, eg] = i.useState(null),
        ep = i.useMemo(
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
        ev = null != ep && ep.id !== eh ? ep : null,
        ej = i.useCallback(() => {
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
                                summary: ey.intl.string(eb.default["o2++BO"]),
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
        eN = ef?.appBuildRequest != null && (0, nE.BL)(ef) && ef.appBuildRequest.id !== ek ? ef.appBuildRequest : null,
        eA = eS.request ?? (null == ev ? eN : null),
        eC = null == eS.request ? ev : null,
        eI = null != eA && eA === eS.request,
        { close: eE, sent: eM } = eS,
        e_ = eS.request?.id,
        eT = i.useCallback(() => {
            eI ? eE() : null != eA && ew(eA.id);
        }, [eA, eI, eE]),
        eP = i.useCallback(
            (e) => {
                (null != e_ && eM(e_),
                    (0, ex.P0)({
                        text: ey.intl.formatToPlainString(eb.default.RZO35O, {
                            names: e.map((e) => e.name).join(", "),
                        }),
                        variant: "success",
                    }));
            },
            [e_, eM],
        ),
        eq = (0, m.bG)([rp.A], () => rp.A.getSettings(d), [d]),
        [eD, eF] = i.useState(null),
        eO = rS(),
        ez =
            null != ef &&
            ((t = ef.id),
            (s = (0, rx.Mv)(v, eq?.secrets)),
            (o = rN(v)),
            v.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, nE.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !o.has(e.id) && !rA(e.settingsRequest, eq, eO.has(e.id)))),
            )),
        eG =
            null != ef &&
            "assistant" === ef.role &&
            null != ef.settingsRequest &&
            null == ef.secretRequest &&
            (0, nE.BL)(ef) &&
            ef.id !== eD &&
            ((n = ef.settingsRequest),
            (c = n.keys ?? []),
            null != eq &&
                0 !== c.length &&
                c.every((e) => {
                    let t = eq.schema.find((t) => t.key === e);
                    return null != t && rv.has(t.type);
                })) &&
            rj(ef.settingsRequest, eq) &&
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
        eX = eC?.id ?? eA?.id ?? eU?.id ?? (S ? "scope-setup" : void 0),
        eY = null != ev || null != eA || null != eG || S;
    i.useLayoutEffect(() => {
        let e = C.current?.getScrollerNode(),
            t = eV?.firstElementChild;
        if (null == eV || null == e || !(0, tR.vq)(t, HTMLElement) || null == eX) return;
        function n() {
            _.current && C.current?.scrollToBottom();
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
    }, [eV, eX, C, _]);
    let eZ = (0, m.bG)([rr.A], () => rr.A.hasLoadedHistory(d), [d]),
        eQ = (function (e) {
            let t = ri(e),
                n = (0, m.bG)([ti.Ay], () => null != ti.Ay.getProject(e), [e]),
                l = (0, m.bG)([rr.A], () => rr.A.hasLoadedHistory(e), [e]),
                r = (0, m.bG)([rr.A], () => rr.A.getMessages(e), [e]),
                a = (0, m.bG)([tm.default], () => tm.default.getConnState(e), [e]),
                [s, u] = i.useState(0);
            return (
                i.useLayoutEffect(() => {
                    (0, ra.Iy)(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, a]),
                s
            );
        })(d),
        eJ = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: eZ,
            historyUnavailable: (0, m.bG)([rr.A], () => rr.A.isHistoryUnavailable(d), [d]),
            connState: j,
        }),
        e0 = "loading" === eJ && 0 === v.length,
        e1 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < d.length; t++) e = (31 * e + d.charCodeAt(t)) % 0x7fffffff;
            return cV[e % cV.length];
        }, [d]),
        e2 = em ? ey.intl.string(eb.default.Zc7gML) : "greeting" === eJ && 0 === v.length ? e1 : null,
        e3 = i.useMemo(() => {
            for (let e = v.length - 1; e >= 0; e--) {
                let t = v[e];
                if ("assistant" === t.role && !(0, nE.BL)(t)) return t;
            }
        }, [v]),
        e4 = null != e3,
        e7 = i.useMemo(() => v.filter((e) => "user" === e.role && "queued" === e.disposition), [v]),
        e5 = null != e3 ? (0, r$.S)(e3) : void 0,
        e6 = em && ed ? eo : void 0,
        e8 = i.useCallback(() => (0, n0.RQ)(d, ey.intl.string(eb.default.EMgIuY)), [d]),
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
            return null != e3 ? ((e = e3.steps), r3((0, nI.Jf)(e, !0).tasks)) : void 0;
        }, [e3]);
    return (0, a.jsxs)("section", {
        ref: A,
        "data-conjure-chat": !0,
        className: cH.TE,
        children: [
            ed
                ? (0, a.jsx)(nA.A, {
                      title: ey.intl.string(eb.default.gy7byi),
                      description: ey.intl.string(eb.default["dkv/WO"]),
                      icons: cK.ir,
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
                className: cH.JX,
                children: [
                    (0, a.jsx)(nS.Ch, {
                        ref: C,
                        onScroll: G,
                        scrollbarGutter: e0 ? "both-edges" : "stable",
                        className: [cH.N$, R ? null : cH.hB, eH ? cH.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rq.Fu.Provider, {
                            value: d,
                            children: (0, a.jsx)(cb, {
                                projectId: d,
                                messages: v,
                                emptyState: eJ,
                                floatingSettingsMessageId: eG?.id,
                                liveClarificationId: eC?.id,
                                onPickIdea: ed ? et : void 0,
                                onAskForIdeas: ed ? er : void 0,
                                draftHasText: en,
                                onApprovePlan: ed ? e8 : void 0,
                                onRestoreVersion: ec || e4 ? void 0 : g,
                                scrollerRef: C,
                                stickToBottomRef: _,
                                pinned: P,
                                onUnpin: L,
                                handleRef: I,
                                onShowsLatestChange: F,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: cH.NJ,
                        children: (0, a.jsx)(cB, {
                            projectId: d,
                            thinking: e4,
                            turnStartedAt: e5,
                            restoring: ec,
                            remixStartedAt: Z,
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
                        ? (0, a.jsx)("div", { ref: eW, className: cH.B5, children: (0, a.jsx)(rh, { projectId: d }) })
                        : null,
                    null == eC
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eW,
                              className: eH ? `${cH.B5} ${cH.J9}` : cH.B5,
                              children:
                                  null != eC.install_scope_switch
                                      ? (0, a.jsx)(
                                            rg,
                                            {
                                                projectId: d,
                                                clarification: eC,
                                                offer: eC.install_scope_switch,
                                                onKept: ej,
                                            },
                                            eC.id,
                                        )
                                      : (0, a.jsx)(
                                            l9,
                                            {
                                                projectId: d,
                                                clarification: eC,
                                                onSubmit: ed ? ea : void 0,
                                                onDismiss: ej,
                                            },
                                            eC.id,
                                        ),
                          }),
                    null == eA
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eW,
                              className: cH.B5,
                              children: (0, a.jsx)(
                                  le,
                                  { projectId: d, request: eA, canSend: ed, onDismiss: eT, onSent: eI ? eP : void 0 },
                                  eA.id,
                              ),
                          }),
                    null == eB
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eC && null == eA ? eW : void 0,
                              className: cH.B5,
                              children: (0, a.jsx)(
                                  rT,
                                  { askId: eU?.id, projectId: d, request: eB, onDismiss: eK },
                                  eU?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cH.Jx,
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
                    0 === H.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cH.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(u.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: ey.intl.formatToPlainString(eb.default["7b49dS"], {
                                          count: H.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ey.intl.string(eb.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(h.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ey.intl.string(eb.default["/zOv9+"]),
                                      onClick: () => U(d),
                                  }),
                              ],
                          }),
                    null == Y
                        ? null
                        : (0, a.jsx)("div", {
                              className: cH.qB,
                              children: (0, a.jsx)(nN.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: Y.message,
                                  action: Y.retry,
                              }),
                          }),
                    null == W
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cH.Db,
                              children: [
                                  (0, a.jsx)(nN.w, { type: "warning", role: "status", message: W.message }),
                                  (0, a.jsx)("div", {
                                      className: cH.jU,
                                      children: (0, a.jsx)(tq.m, {
                                          text: ey.intl.string(ey.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tV.K, {
                                              "aria-label": ey.intl.string(ey.t.WAI6xu),
                                              icon: tM.P,
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
                              className: cH.qB,
                              children: (0, a.jsx)(nN.w, {
                                  type: X.blocked ? "critical" : "warning",
                                  role: X.blocked ? "alert" : "status",
                                  message: X.message,
                              }),
                          }),
                    (0, a.jsx)(
                        uN,
                        {
                            projectId: d,
                            escapeScopeRef: x,
                            canSend: ed,
                            running: e4,
                            restoring: ec,
                            onSend: J,
                            hasPendingContext: H.annotations.length > 0,
                            onInterrupt: ed ? ee : void 0,
                            onUploadFile: es,
                            onImport: p,
                            onSendToOtherProjects: eY ? void 0 : eS.open,
                            onApprove: e6,
                            suggestion: e2,
                            questionOpen: eY,
                            modelSettings: N,
                            onModelSettingsChange: ei,
                            onDraftHasTextChange: el,
                            inputLocked: S,
                            aiPaused: X?.blocked === !0,
                        },
                        eQ,
                    ),
                ],
            }),
        ],
    });
}
var cX = n(761508),
    cY = n(933294),
    cZ = n(207438),
    cQ = n(683438),
    cJ = n(721507);
function c0(e, t) {
    return String(e).padStart(t, "0");
}
function c1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${c0(l.getHours(), 2)}:${c0(l.getMinutes(), 2)}:${c0(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${c0(l.getMilliseconds(), 3)}` : r;
}
var c2 = n(667931);
let c3 = {
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
    c4 = { running: "Running", ok: "Done", error: "Failed" };
function c7(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function c5(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function c6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function c8(e) {
    return c5(e.count > 1 ? e.totalMs : e.end - e.start);
}
let c9 = ["Arguments", "Result", "Usage", "Details"];
function de(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function dt(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function dn(e) {
    let t = (0, c2.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, c2.lp)(e) ? "interrupted" : "still running";
}
function dl(e) {
    return [c1(new Date(e.started_at).toISOString()) ?? "", c6(e.spans.length), (0, c2.Sj)((0, c2.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function dr(e) {
    let t = (0, c2.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, c2.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += da(r, "in")),
                (l.output += da(r, "out")),
                (l.cacheRead += da(r, "cache_read")),
                (l.cacheWrite += da(r, "cache_write")),
                (l.costUsd += da(r, "cost_usd"))));
    }
    let r = c2.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function da(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var di = n(738188),
    ds = n(430993),
    du = n(364840),
    dc = n(224640),
    dd = n(20742);
let df = { collapsed: new Set(), revealed: new Set() };
var dm = n(872892);
let dh = {
    op: dm.Q,
    model: dm.i3,
    tool: dm.dH,
    setup: dm.kc,
    worktree: dm.Qx,
    sandbox: dm.QH,
    build: dm.F1,
    platform: dm.Op,
    other: dm.fv,
};
function dg(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      c6(t.calls, "model call"),
                      `${c7(t.input)} in`,
                      `${c7(t.output)} out`,
                      `${c7(t.cacheRead)} cache read`,
                      `${c7(t.cacheWrite)} cache write`,
                      dt(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: dm.M1,
        children: [
            (0, a.jsx)("div", {
                className: dm.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${dm.DJ} ${dh[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: dm.o1,
                children: c2.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${c5(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: dm.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${dm.nf} ${dh[e]}` }),
                                (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: c3[e] }),
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
function dp(e) {
    return `conjure-perf-trace-${e}`;
}
function dx(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: dm.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(u.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dm.p0} ${s + o > 85 ? dm.EU : dm.jh}`,
                children: i,
            }),
        ],
    });
}
function dv(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: c } = e,
        d = t.children.length > 0,
        f = l ? nq._ : e9.a,
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
    return (0, a.jsxs)(nT.D, {
        tag: "div",
        role: "treeitem",
        id: dp(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": d ? !l : void 0,
        "aria-selected": r,
        className: `${dm.$y} ${r ? dm.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: dm.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    d
                        ? (0, a.jsx)(nT.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dm.ai,
                              onClick: h,
                              children: (0, a.jsx)(f, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: dm.YJ }),
                    (0, a.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dm.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${dm.nf} ${dh[t.category]}` }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: dm.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: dm.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: dm.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(di.WarningIcon, { size: "xs", color: "currentColor", className: dm.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dx, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dm.M0} ${dm.Nh}`
                    : t.running
                      ? `${dm.M0} ${dm.rF}`
                      : `${dm.M0} ${dh[t.category]}`,
                duration: c8(t),
            }),
        ],
    });
}
function dj(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(nT.D, {
        tag: "div",
        role: "treeitem",
        id: dp(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${dm.$y} ${l ? dm.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: dm.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: dm.ai,
                        children: (0, a.jsx)(nq._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: dm.U9 }),
                    (0, a.jsx)("span", { className: `${dm.nf} ${dm.dL}` }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: dm.MQ,
                        children: c6(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dx, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dm.M0} ${dm.ab} ${dm.dL}`,
                duration: c5(t.totalMs),
            }),
        ],
    });
}
function db(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(u.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: dm._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: dm.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${dm.nf} ${dh[t.category]}` }),
                          (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [de("Start", `+${c5(e.start)}`), de("Duration", c8(e))];
                      e.count > 1
                          ? t.push(
                                de("Calls", String(e.count)),
                                de("Longest call", c5(e.maxMs)),
                                de("Spread over", c5(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(de("Self time", c5(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(de("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(de("Notes", l.join(", "))),
                          null != e.span.error && t.push(de("Error", e.span.error)));
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
                              s = "cost_usd" === t ? dt(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), de(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...c9.flatMap((e) => {
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
                                            className: dm.xd,
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
                                                            className: dm.vl,
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
function dy(e) {
    let { trace: t } = e,
        n = i.useMemo(() => dr(t), [t]);
    return (0, a.jsx)(dg, { stats: n });
}
function dk(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, c2.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? df : (0, c2.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, c2.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, c2.x7)(t)), l((n) => (0, c2._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, c2.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c2.IE)(t, e);
                        null != n && l((e) => (0, c2.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c2.IE)(t, e);
                        null != n && l((e) => (0, c2.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, c2.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, c2.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, c2.hB)(t));
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
        g = (0, c2.dj)(t),
        p = i.useMemo(() => (0, c2.nF)(g), [g]),
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
                    null != t && (c(t.key), document.getElementById(dp(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, f, l, c, o, d],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(ds.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: dm.z,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: dn(t),
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: dl(t),
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
                                      children: `${c6(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dy, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: dm.KE,
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
                        "aria-activedescendant": null == o ? void 0 : dp(o),
                        className: dm.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(x) },
                        onKeyDown: v,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dm.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: dm.So,
                                        children: (0, a.jsx)(u.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: dm.c1,
                                        children: p.map((e) =>
                                            (0, a.jsx)(
                                                u.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dm.io} ${(e / g) * 100 > 85 ? dm.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / g) * 100),
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
                                          dv,
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
                                    : (0, a.jsx)(dj, { row: e, extent: g, selected: e.key === o, onReveal: f }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(du.j, { children: (0, a.jsx)(db, { node: s }) }),
        ],
    });
}
function dw(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, m.bG)([o9.A], () => o9.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(dc.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(dd.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(ds.c, {
                      children: (0, a.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dk, { trace: i }),
        ],
    });
}
let dS = { running: dm.Vf, ok: dm.mo, error: dm.Sr };
function dN(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${dm.Om} ${dS[t]}`, role: "img", "aria-label": c4[t] });
}
function dA(e, t) {
    (0, eM.openModal)((n) => (0, a.jsx)(dw, { ...n, projectId: e, traceId: t }));
}
function dC(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dA(t, n.id), [t, n.id]);
    return (0, a.jsxs)(nT.D, {
        className: dm.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: dm.sU,
                children: [
                    (0, a.jsx)(dN, { status: (0, c2.lQ)(n) }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: dm._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: dn(n),
                    }),
                ],
            }),
            (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: dl(n) }),
            null == l
                ? null
                : (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dI(e) {
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
            (0, cJ.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
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
            return (0, a.jsx)(tV.K, {
                ...e,
                buttonRef: l,
                icon: ip.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dE(e) {
    let { projectId: t } = e,
        n = (0, m.yK)([o9.A], () => o9.A.getTimingTraces(t), [t]),
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
                    let t = e.map(dr);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: c2.BF.map((e) => ({
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
              className: dm.Ie,
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
              className: dm.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: dm.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: dm.fH,
                              children: (0, a.jsx)(cQ.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dI, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nS.Ch, {
                      className: dm.XG,
                      children: [
                          (0, a.jsx)(dg, { stats: c }),
                          0 === o.length
                              ? (0, a.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: dm.p_,
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
function d_(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dT(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dP(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dR(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dL(e) {
    return ey.intl.string("preview" === e ? eb.default["2yLYlG"] : eb.default.eiAi57);
}
let d$ = ["all", "preview", "stable", "web"];
function dq(e) {
    switch (e.reason) {
        case "local":
            return ey.intl.string(eb.default.mUeKML);
        case "unconfigured":
            return ey.intl.string(eb.default.bGefb5);
        case "unauthorized":
            return ey.intl.string(eb.default.KLx6Bb);
        default:
            return null != e.detail
                ? ey.intl.formatToPlainString(eb.default.t09Q6q, { detail: e.detail })
                : ey.intl.string(eb.default["t+tG59"]);
    }
}
function dD(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ey.intl.formatToPlainString(eb.default["XO/bN4"], {
              p50: dM(e.memory_p50_bytes ?? 0),
              p999: dM(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dF = {
    db: () => eb.default["7l+DFG"],
    db_preview: () => eb.default.FAuffi,
    runtime: () => eb.default["Gkl+ab"],
    runtime_preview: () => eb.default.ynpJzv,
    bot: () => eb.default["5/i0cj"],
    bot_preview: () => eb.default.m2jsnw,
};
var dO = n(911608),
    dz = n(177427);
function dG(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dz.KE,
        children: [
            (0, a.jsx)("div", {
                className: dz.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(o.y, { type: o.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(u.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ey.intl.string(eb.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ey.intl.formatToPlainString(eb.default.INVO50, { time: dP(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(h.$, { variant: "secondary", size: "sm", text: ey.intl.string(eb.default.oKEgiu), onClick: l }),
        ],
    });
}
function dU(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dz.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(u.E, { variant: "text-xs/semibold", color: "text-muted", className: dz.Gf, children: t }),
            n,
        ],
    });
}
function dB(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dz.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dz.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dz.kS,
                        children: [i, (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dz.kS,
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
function dK(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dz.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dz.x7,
                children: [
                    (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dO.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dz.dh : void 0,
            }),
        ],
    });
}
function dH(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dB, {
            label: ey.intl.string(eb.default.SXP7pD),
            value: ey.intl.string(eb.default.E5hKVi),
            hint: dq(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dB, {
            label: ey.intl.string(eb.default.SXP7pD),
            value: "\u2014",
            hint: ey.intl.string(eb.default.AGvoMJ),
        });
    let l = dD(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dB, { label: ey.intl.string(eb.default["H/X+FI"]), value: d_(n.cpu_ms) }),
            null != l && (0, a.jsx)(dB, { label: ey.intl.string(eb.default.lmFmMO), value: l }),
        ],
    });
}
function dV(e) {
    let { analytics: t } = e,
        n = ey.intl.string(eb.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dU, {
            title: n,
            children: (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: dq(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dF[t] : null) ? ey.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dU, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(u.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: ey.intl.string(eb.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dB,
                          {
                              label: n,
                              value: ey.intl.formatToPlainString(eb.default["w/2voO"], { cpu: d_(t.cpu_ms) }),
                              hint: dD(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dW = n(678708),
    dX = n(414499),
    dY = n(714800),
    dZ = n(81466),
    dQ = n(424383),
    dJ = n(664121),
    d0 = n(816943),
    d1 = n(268791),
    d2 = n(514042),
    d3 = n(872351),
    d4 = n(708988),
    d7 = n(150934),
    d5 = n(417270);
let d6 = "Restart Agent",
    d8 = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function d9(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fe(e, t) {
    return { label: e, value: null != t && "" !== t ? dP(t) : "Unknown", icon: "calendar" };
}
function ft(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fn(e, t, n, l) {
    let [r, a] = d8[n.status];
    return { label: e, value: `${ft(n.bytes)} of ${ft(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function fl(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dP(e.at);
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
let fr = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fa(e) {
    let t = `container ${d9(e.local)} \xb7 remote ${d9(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fr[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dT(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dT(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dT(n)} Ahead, ${dT(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fi = ["main", "wip"];
var fs = n(400154);
let fu = {
        checkout: dW.FolderIcon,
        edit: lm.PencilIcon,
        remote: dX.h,
        commits: dY.e,
        calendar: dZ.CalendarIcon,
        save: dQ.L,
        objects: dJ.R,
        download: d0.$,
        size: d1.$,
        file: d2.FileIcon,
    },
    fo = {
        ok: [rC.y, t0.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [di.WarningIcon, t0.A.colors.ICON_FEEDBACK_WARNING],
        error: [sY.a, t0.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [d3.z, t0.A.colors.ICON_MUTED],
        behind: [d4.M, t0.A.colors.ICON_MUTED],
    };
function fc(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, m.bG)([o9.A], () => o9.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cZ.DK)(t), [t]),
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
                    `Updated ${dP(r)}`,
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
    return (0, a.jsxs)(dU, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fs.Lj,
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
                    if (!e.running || null != e.localError) return [fl(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fl(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dT(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fi.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fa))
                        : l.push(
                              { label: "Main", value: d9(e.heads.main), icon: "remote" },
                              { label: "WIP", value: d9(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dT(e.commits) : "Unknown", icon: "commits" },
                            fe("Oldest Commit", e.oldest),
                            fe("Newest Commit", e.newest),
                            fl(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dT(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dT(t.loose)} loose (${dM(t.looseBytes)}) \xb7 ${dT(t.packed)} packed in ${n} (${dM(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dT(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dT(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                fn(
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
                                  fn("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fu[r],
                        [u, o] = null != i ? fo[i] : [null, void 0];
                    return (0, a.jsx)(
                        dB,
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
function fd(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: c,
        } = (function (e) {
            let t = (0, m.bG)([o9.A], () => o9.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cZ.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = o9.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cZ.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                ox.h.dispatch({
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
            let u = i.useCallback(() => (0, cZ.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: d6,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, ep.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: c });
        }, [o, c]);
    return (0, a.jsxs)("div", {
        className: fs.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fs.nM,
                children: [
                    (0, a.jsx)(d7.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(h.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: d5.RetryIcon,
                        text: d6,
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
                            return `Restarted \xb7 new instance since ${dP(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dP(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function ff(e, t) {
    return (0, a.jsx)(dB, {
        label: e,
        value: ey.intl.formatToPlainString(eb.default.yHJxuP, { count: dT((0, cP.aM)(t)) }),
        hint: `${dT(t.input_tokens)} in \xb7 ${dT(t.output_tokens)} out \xb7 ${dT(t.cache_read_input_tokens)} cache read`,
    });
}
function fm(e) {
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
            handleForceCompaction: A,
            handleForceCompactionOverride: C,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: M,
            session: _,
            contextCeiling: T,
        } = ((t = (0, m.bG)([o9.A], () => o9.A.getLastTurnUsage(p), [p])),
        (n = (0, m.bG)([o9.A], () => o9.A.getLastCompaction(p), [p])),
        (l = (0, m.bG)([o9.A], () => o9.A.getLastCompactionDecline(p), [p])),
        (r = (0, m.bG)([o9.A], () => o9.A.getForceCompactionState(p), [p])),
        (s = (0, m.bG)([o9.A], () => o9.A.getSandboxRestartState(p), [p])),
        (o = (0, m.bG)([rr.A], () => rr.A.isThinking(p), [p])),
        (c = i.useCallback(() => (0, cZ.Lj)(p), [p])),
        (d = i.useCallback(() => (0, cZ.Lj)(p, !0), [p])),
        (f = i.useCallback(() => (0, cZ.bq)(p), [p])),
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
        className: fs.Mf,
        children: [
            (0, a.jsx)(dG, { generatedAt: x?.generated_at ?? null, fetchState: v, onRefresh: j }),
            (0, a.jsx)(dU, {
                title: ey.intl.string(eb.default.JghNal),
                children:
                    null == E
                        ? (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ey.intl.string(eb.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dB, {
                                      label: ey.intl.string(eb.default["9nqym2"]),
                                      value: dT((0, cP.a7)(E.cost_usd)),
                                      hint: ey.intl.formatToPlainString(eb.default.NCdUIh, { count: dT(E.turns) }),
                                  }),
                                  ff(ey.intl.string(eb.default.xtxP0e), E.orchestrator),
                                  ff(ey.intl.string(eb.default["9Sj3SX"]), E.codegen),
                                  ff(ey.intl.string(eb.default.ANCEo3), (0, cP.wU)(E.compaction)),
                                  x?.agent?.outcomes != null &&
                                      Object.keys(x.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dB, {
                                          label: ey.intl.string(eb.default.SQHm7C),
                                          value: Object.entries(x.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dT(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dU, {
                title: ey.intl.string(eb.default.dZHPE5),
                children:
                    null == b
                        ? (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ey.intl.string(eb.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  ff(ey.intl.string(eb.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dB, {
                                      label: ey.intl.string(eb.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, cP.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dU, {
                title: ey.intl.string(eb.default.NbRk9a),
                children: [
                    null != y && null != T
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dK, {
                                      label: ey.intl.string(eb.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: T,
                                      formatValue: dT,
                                  }),
                                  (0, a.jsx)(dB, {
                                      label: ey.intl.string(eb.default.mRbSns),
                                      value: `${dT(y.tokensBefore)} \u{2192} ${dT(y.tokensAfter)}`,
                                      hint: ey.intl.formatToPlainString(eb.default.Vq3skS, {
                                          count: dT(y.retainedMessages),
                                          time: dP(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != T
                                      ? ey.intl.formatToPlainString(eb.default.GMLCNv, { ceiling: dT(T) })
                                      : ey.intl.string(eb.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dB, {
                            label: ey.intl.string(eb.default["4BX5KK"]),
                            value: `${dT(k.projected)} / ${dT(k.threshold)}`,
                            critical: !0,
                            hint: ey.intl.formatToPlainString(eb.default["6ngCax"], { time: dP(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fs.Lj,
                        children: [
                            (0, a.jsx)(h.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ey.intl.string(eb.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: A,
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ey.intl.string(eb.default.wox6Ev);
                                    if ("pending" === e) return ey.intl.string(eb.default.OcPHQ1);
                                    let t = dP(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ey.intl.formatToPlainString(eb.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? eb.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? eb.default.YZb4hK
                                              : eb.default.ZoUSVK;
                                    return ey.intl.formatToPlainString(n, {
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
                                            text: ey.intl.string(eb.default.ZxG2AI),
                                            onClick: C,
                                        }),
                                        (0, a.jsx)(u.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ey.intl.string(eb.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: fs.Lj,
                        children: [
                            (0, a.jsx)(h.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ey.intl.string(eb.default["5qCjBu"]),
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
                                    if ("idle" === e) return ey.intl.string(eb.default.mlok8D);
                                    if ("pending" === e) return ey.intl.string(eb.default["1ugSyK"]);
                                    let t = dP(e.observedAt);
                                    return ey.intl.formatToPlainString(
                                        "restarted" === e.outcome ? eb.default["76mfqO"] : eb.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(S),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fd, { projectId: p }),
                ],
            }),
            (0, a.jsx)(fc, { projectId: p }),
            (null != _ || x?.analytics != null) &&
                (0, a.jsxs)(dU, {
                    title: ey.intl.string(eb.default.EsSzCS),
                    children: [
                        null != _ &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dB, {
                                        label: ey.intl.string(eb.default.CLXHAs),
                                        value: dP(_.instance_since),
                                        hint: ey.intl.string(eb.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dB, {
                                        label: ey.intl.string(eb.default["8V8e1Z"]),
                                        value: dT(_.sockets),
                                    }),
                                    (0, a.jsx)(dB, {
                                        label: ey.intl.string(eb.default["4pBzYW"]),
                                        value: _.turn_inflight
                                            ? ey.intl.string(eb.default.Wv025I)
                                            : ey.intl.string(eb.default["7/lsFY"]),
                                    }),
                                    _.queued_messages > 0 &&
                                        (0, a.jsx)(dB, {
                                            label: ey.intl.string(eb.default["3oUYnv"]),
                                            value: dT(_.queued_messages),
                                        }),
                                ],
                            }),
                        x?.analytics != null && (0, a.jsx)(dH, { analytics: x.analytics }),
                    ],
                }),
            null != M &&
                (0, a.jsxs)(dU, {
                    title: ey.intl.string(eb.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dB, {
                            label: ey.intl.string(eb.default.IlDBN3),
                            value: dT(M.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dB, {
                            label: ey.intl.string(eb.default["ZdzKR+"]),
                            value: ey.intl.formatToPlainString(eb.default.yHJxuP, {
                                count: dT(M.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(dB, {
                            label: ey.intl.string(eb.default.cIhN2W),
                            value: ey.intl.formatToPlainString(eb.default.yHJxuP, {
                                count: dT(M.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dB, {
                            label: ey.intl.string(eb.default["+fOn/q"]),
                            value: dT(M.max_user_message_chars),
                        }),
                        (0, a.jsx)(dB, { label: ey.intl.string(eb.default.kIHga0), value: dT(M.max_build_attempts) }),
                        (0, a.jsx)(dB, { label: ey.intl.string(eb.default.Iw03yW), value: dT(M.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fh = n(237528),
    fg = n(629584),
    fp = n(531893);
function fx(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fp.ut,
              children: (0, a.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ey.intl.string(eb.default.h1SE6R),
              }),
          });
}
function fv(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fp.qf,
              children: [
                  (0, a.jsx)(u.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: ey.intl.string(eb.default.h1SE6R),
                  }),
                  (0, a.jsx)(u.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ey.intl.string(eb.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: fp.qf,
              children: [
                  (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fj(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fp.ps,
              children: (0, a.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ey.intl.string(eb.default.V7Ri8H),
              }),
          })
        : null;
}
var fb = n(109079);
let fy = i.memo(function (e) {
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
        className: fb.vK,
        children: [
            (0, a.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fb.Mt,
                selectable: !0,
                children: c1(n.ts) ?? n.ts,
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
                className: fb.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fb.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fb.Cq, children: (0, a.jsx)(fh.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fb.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fh.v, {
                                text: ey.intl.string(eb.default.TrC9c8),
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
                                  (0, a.jsxs)(nT.D, {
                                      className: fb.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": ey.intl.string(eb.default["9CTzyV"]),
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
                                          (0, a.jsxs)(u.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  c.marker,
                                                  " ",
                                                  ey.intl.formatToPlainString(
                                                      "[\u2026]" === c.marker
                                                          ? eb.default.kUhyUv
                                                          : eb.default["N+fphl"],
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
                                          className: fb.dF,
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
function fk(e) {
    let { projectId: t } = e,
        n = (0, m.bG)([cY.A], () => cY.A.getLogs(t), [t]),
        l = (0, m.bG)([cY.A], () => cY.A.getHistoryState(t, "logs")),
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
                d$.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dL(e);
                            case "web":
                                return ey.intl.string(eb.default.IVzfVV);
                            default:
                                return ey.intl.string(eb.default["Um1/8L"]);
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
                    (0, a.jsx)(fg.I, {
                        look: "pill",
                        "aria-label": ey.intl.string(eb.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fb.KT,
                        children: (0, a.jsx)(cQ.I, {
                            query: o,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: ey.intl.string(eb.default["m2+37Y"]),
                            "aria-label": ey.intl.string(eb.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(fx, { state: l }),
            (0, a.jsxs)(nS.Ch, {
                ref: f,
                onScroll: g,
                overflow: "auto",
                className: fb.sx,
                children: [
                    (0, a.jsx)(fj, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fv, {
                              state: l,
                              emptyTitle: ey.intl.string(eb.default.S7qlPG),
                              emptyBody: ey.intl.string(eb.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(u.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ey.intl.string(eb.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(fy, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fw(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dU, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ey.intl.string(eb.default.umcjif),
                      }),
        })
    );
}
function fS(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dB, {
                      label: ey.intl.formatToPlainString(eb.default["01ZMS4"], { env: dL(n) }),
                      value: ((t = l.connected), ey.intl.string(t ? eb.default.Wv025I : eb.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dB, {
                      label: ey.intl.string(eb.default["z1dh+F"]),
                      value: dT(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dP(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dB, { label: ey.intl.string(eb.default.Iz5GnJ), value: dT(l.guild_count) }),
                  (0, a.jsx)(dB, {
                      label: ey.intl.string(eb.default["7UqtNv"]),
                      value: dT(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? ey.intl.formatToPlainString(eb.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dP(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dB, {
                          label: ey.intl.string(eb.default["x3+JXJ"]),
                          value: dT(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dB, { label: dL(n), value: ey.intl.string(eb.default.lTHQss) });
}
function fN(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dB, {
        label: dL(t),
        value: ey.intl.formatToPlainString(eb.default["Xq+wHT"], {
            requests: dT(n.requests),
            failures: dT(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? ey.intl.formatToPlainString(eb.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dP(n.last_failure.at),
                  })
                : ey.intl.formatToPlainString(eb.default["7KlGT6"], { time: dP(n.since) }),
    });
}
function fA(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dB, {
                label: ey.intl.formatToPlainString(eb.default["92gVTm"], { env: dL(t) }),
                value: dT(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dB,
                    {
                        label: ey.intl.formatToPlainString(eb.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ey.intl.formatToPlainString(eb.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ey.intl.formatToPlainString(eb.default.wxAWNv, { time: dP(e.next_run_at) })
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
    return (0, a.jsx)(dB, {
        label: dL(t),
        value: ey.intl.formatToPlainString(eb.default.suAOj9, { calls: dT(n.calls), errors: dT(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fI(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dU, {
            title: t,
            children: (0, a.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ey.intl.string(eb.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dU, {
        title: t,
        children: [
            (0, a.jsx)(dB, {
                label: ey.intl.string(eb.default.xtD4Zp),
                value: dT(n.requests),
                hint: ey.intl.formatToPlainString(eb.default["7KlGT6"], { time: dP(n.since) }),
            }),
            (0, a.jsx)(dB, { label: ey.intl.string(eb.default.gfRhR3), value: dT(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dK, {
                              label: ey.intl.string(eb.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: d_,
                          }),
                          (0, a.jsx)(dB, {
                              label: ey.intl.string(eb.default.mSKImM),
                              value: d_(r),
                              hint: ey.intl.formatToPlainString(eb.default.JqMU05, {
                                  total: d_(n.cpu_ms_total),
                                  wall: d_(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dB, {
                      label: ey.intl.string(eb.default.LEJ5r3),
                      value: ey.intl.string(eb.default["2Ekb2b"]),
                      hint: ey.intl.string(eb.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dB, { label: ey.intl.string(eb.default.xvmL1D), value: d_(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dB, {
                    label: ey.intl.string(eb.default["4sQYwH"]),
                    value: dT(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(dB, {
                label: ey.intl.string(eb.default.bQenOy),
                value: dT(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: ey.intl.formatToPlainString(eb.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dB, { label: ey.intl.string(eb.default.xgpn4Y), value: dR(n.build) }),
        ],
    });
}
function fE(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: ey.intl.string(eb.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: ey.intl.string(eb.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: ey.intl.string(eb.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dU, {
        title: ey.intl.string(eb.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dB, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dB, {
                                  label: ey.intl.formatToPlainString(eb.default.u7kJJ4, { env: n }),
                                  value: dM(l.r2_bytes),
                                  hint: ey.intl.formatToPlainString(
                                      l.r2_truncated ? eb.default.lH0oQw : eb.default.m9h02S,
                                      { count: dT(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dK, {
                                      label: ey.intl.formatToPlainString(eb.default.mnbPqt, { env: n }),
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
    return (0, a.jsxs)("div", {
        className: fs.Mf,
        children: [
            (0, a.jsx)(dG, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fI, {
                            title: ey.intl.string(eb.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fI, {
                            title: ey.intl.string(eb.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fE, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(fw, {
                                title: ey.intl.string(eb.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fS, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(fw, {
                                title: ey.intl.string(eb.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fN, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(fw, {
                                title: ey.intl.string(eb.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fA, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(fw, {
                                title: ey.intl.string(eb.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fC, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dV, { analytics: t.analytics }),
                        (0, a.jsxs)(dU, {
                            title: ey.intl.string(eb.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dB, {
                                    label: ey.intl.string(eb.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dR(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dB, {
                                    label: ey.intl.string(eb.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dR(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var f_ = n(592465);
function fT(e) {
    let { projectId: t, onClose: n } = e,
        l = eC(),
        [r, s] = i.useState(() => (l && eS?.projectId === t ? "trace" : "logs")),
        u = (0, m.bG)([o9.A], () => o9.A.getStatus(t), [t]),
        o = (0, m.bG)([o9.A], () => o9.A.getFetchState(t), [t]),
        c = i.useCallback(() => {
            ((0, cZ.R7)(t), (0, cZ.DK)(t));
        }, [t]);
    (i.useEffect(() => c(), [c]), i.useEffect(() => (0, tm.subscribeDebugBacklog)(t), [t]));
    let d = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == eS || eS.projectId !== e) return null;
            let { traceId: t } = eS;
            return ((eS = null), t);
        })(t);
        return null != e && (dA(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        d();
    }, [d]),
        eN(t, () => {
            d() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, oG.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: o9.A.getStatus(t),
                        last_turn_usage: o9.A.getLastTurnUsage(t),
                        last_compaction: o9.A.getLastCompaction(t),
                        last_compaction_decline: o9.A.getLastCompactionDecline(t),
                        timing_traces: o9.A.getTimingTraces(t),
                        logs: cY.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, ex.P0)({ text: ey.intl.string(eb.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = ey.intl.string(eb.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: f_.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(tT.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(tT.Ay.Icon, {
                            icon: oF.CopyIcon,
                            tooltip: ey.intl.string(eb.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(tT.Ay.Icon, { icon: tM.P, tooltip: ey.intl.string(ey.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(tT.Ay.ChannelIcon, { icon: oz.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(tT.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: f_.rf,
                children: [
                    (0, a.jsxs)(cX.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": ey.intl.string(eb.default.RvvWIh),
                        className: f_.vR,
                        children: [
                            (0, a.jsx)(cX.V.Item, { id: "logs", children: ey.intl.string(eb.default["+VRYCm"]) }),
                            (0, a.jsx)(cX.V.Item, { id: "worker", children: ey.intl.string(eb.default["50D0FZ"]) }),
                            (0, a.jsx)(cX.V.Item, { id: "agent", children: ey.intl.string(eb.default.UkbTK1) }),
                            l ? (0, a.jsx)(cX.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(fk, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fM, { status: u, fetchState: o, onRefresh: c })
                          : "trace" === r && l
                            ? (0, a.jsx)(dE, { projectId: t })
                            : (0, a.jsx)(fm, { projectId: t, status: u, fetchState: o, onRefresh: c }),
                ],
            }),
        ],
    });
}
var fP = n(365912),
    fR = n(873715);
function fL(e) {
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
let f$ = Object.freeze({ x: -1, y: -1 });
function fq(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fL(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fD = n(192888);
function fF(e, t) {
    return (0, fD.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fq, () => ({ status: "failed" }));
}
var fO = n(108308);
let fz = { x: 25, y: 21 };
function fG(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fU(e, t, n, l) {
    let r = fG(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fB(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fK(e) {
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
function fH(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: c, annotations: d } = V(o),
        f = (0, eI.Zv)(o),
        g = (0, eM.useHasAnyModalOpen)(),
        p = (0, m.bG)([lr.default], () => lr.default.getCurrentUser()),
        x = p?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [S, N] = i.useState(null),
        [A, C] = i.useState(!1),
        L = i.useRef(null),
        $ = i.useRef(null),
        q = i.useRef(null),
        [D, z] = i.useState(null),
        [G, H] = i.useState(!1),
        [W, X] = i.useState(null),
        [Y, Z] = i.useState(null),
        Q = i.useRef(!1),
        [J, ee] = i.useState(!1),
        [et, en] = i.useState(null),
        el = c && !f && !g;
    null == W || (el && W.projectId === o) || X(null);
    let er = W?.projectId ?? null;
    i.useEffect(() => {
        if (null != er) return () => (0, n0.xJ)(er, "design");
    }, [er]);
    let ea = tK(r, el);
    i.useEffect(() => {
        if (!el || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fR.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? fK(t.response) : null;
                    null == n ? w(!0) : (j(n), B(o, { url: n.url, title: n.title, viewport: n.viewport }));
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
        if (tB(ei.current, ea)) return;
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
                    (0, fR.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ef.current) return;
                        let l = fK(e.response);
                        null != l && (j(l), B(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fL(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = F(o)).active &&
                                0 !== r.size &&
                                O(o, {
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
    let es = i.useRef(null),
        eo = i.useRef(null),
        ed = i.useRef(!1),
        ef = i.useRef(!1);
    i.useEffect(() => {
        ((ef.current = el), el || ((es.current = null), (eo.current = null), (q.current = null), C(!1)));
    }, [el]);
    let em = i.useCallback(
            function e() {
                if (ed.current) return;
                let t = es.current;
                if (null == t) return;
                es.current = null;
                let n = r();
                null != n &&
                    ((ed.current = !0),
                    fF(n, t).then((t) => {
                        if (((ed.current = !1), ef.current)) {
                            if ("picked" !== t.status || fQ(t.target, ev.current.rect, ev.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && H(!0);
                            else {
                                let e = M(t.target);
                                (z((t) => (fZ(t, e) ? t : e)),
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
            let e = !Q.current;
            (Z({ at: W.at, label: W.label, draft: W.draft, instant: e }), ee(e), X(null));
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
            let e = setTimeout(() => Z(null), fX);
            return () => clearTimeout(e);
        }, [Y]));
    let eg = null == v || null == ea || v.viewport.width < 1 ? 1 : ea.width / v.viewport.width,
        ep = null != v || k,
        ex = i.useMemo(() => v?.elements ?? [], [v]),
        ev = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ev.current = { rect: ea, scale: eg };
    }, [ea, eg]);
    let ej = i.useCallback(
            (e, t, n) => {
                null != o &&
                    ((0, n0.xJ)(o, "design"),
                    en(null),
                    (Q.current = !1),
                    X({ projectId: o, target: e, anchor: t, draft: "", at: n, label: M(e) }));
            },
            [o],
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
                if (((q.current = { x: e.clientX, y: e.clientY }), ew(), C(!0), null != W)) {
                    (Math.abs(e.clientX - W.at.x) > fY || Math.abs(e.clientY - W.at.y) > fY) && (Q.current = !0);
                    return;
                }
                if (!ep) return void N(null);
                let t = ek(e, ea);
                if (G) {
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
                        n = null != e && fQ(e, ea, eg) ? null : e;
                    if (null != n) {
                        let e = M(n);
                        z((t) => (fZ(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = eo.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((eo.current = n), (es.current = n), em());
            },
            [ea, eg, ep, ek, G, ex, W, et, ew, em],
        ),
        eN = null == et ? null : d.find((e) => e.id === et.id),
        eA = el && (A || W?.target.marker != null || eN?.target.marker != null);
    i.useEffect(() => {
        if (eA)
            return () => {
                let e = r();
                null != e && fF(e, f$);
            };
    }, [eA, r]);
    let eC = i.useCallback(() => {
        (C(!1), N(null), (eo.current = null), (es.current = null));
    }, []);
    i.useEffect(() => {
        if (!el || !A || !ep || G || null != W || null != et) return;
        let e = q.current,
            { rect: t, scale: n } = ev.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((eo.current = l), (es.current = l), em());
    }, [el, A, ep, G, W, et, em]);
    let eE = i.useCallback(
            (e) => {
                if (null != W || null != et) {
                    (eh(), en(null));
                    return;
                }
                if (null == S || null == ea) return;
                let t = ek(e, ea);
                ej(
                    S,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? I
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(S, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [S, ea, ek, W, et, ej, eh],
        ),
        e_ = i.useCallback(() => {
            null != o && (N(null), null != eu(o) ? ec(o) : U(o));
        }, [o]),
        eT = i.useCallback(() => {
            null != o &&
                (null != W
                    ? eh()
                    : et?.confirmingRemove === !0
                      ? en({ ...et, confirmingRemove: !1 })
                      : null != et
                        ? en(null)
                        : e_());
        }, [o, W, et, eh, e_]),
        eP = i.useRef(eT),
        eR = i.useRef(o),
        eL = i.useRef(e_);
    i.useLayoutEffect(() => {
        ((eP.current = eT), (eR.current = o), (eL.current = e_));
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
                        return ((0, fP.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eR.current || null == eu(eR.current)) && eL.current());
        }
    }, [el, s]);
    let eq = i.useCallback(
            (e) => {
                if (null == o) return;
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
                    N(ex[(n + (t ? 1 : -1) + ex.length) % ex.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    ej(S, I, { x: (ea?.left ?? 0) + S.rect.x * eg, y: (ea?.top ?? 0) + S.rect.y * eg }));
            },
            [o, W, et, ex, S, ej, eT, ea, eg],
        ),
        eD = i.useCallback(
            (e) => {
                null == o ||
                    null == W ||
                    ((E(W.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, tm.sendUserMessage)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = M(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${P}${r}${R}${T(e)}
${t.trim()}`;
                            })(W.target, W.draft),
                            e,
                        ),
                        eh(),
                        N(null)));
            },
            [o, W, eh],
        ),
        eF = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, t$.vX)(o, e)), [o]),
        eO = i.useCallback(() => {
            if (null != o && null != et && null != x && E(et.draft)) {
                var e, t;
                let n, l;
                ((e = et.id),
                    (t = et.draft.trim()),
                    null != (l = (n = F(o)).annotations.find((t) => t.id === e)) &&
                        K(l, x) &&
                        O(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    en({ ...et, editing: !1 }));
            }
        }, [o, et, x]),
        ez = i.useCallback(() => {
            if (null != o && null != et && null != x) {
                var e;
                let t, n;
                ((e = et.id),
                    null != (n = (t = F(o)).annotations.find((t) => t.id === e)) &&
                        K(n, x) &&
                        O(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    en(null));
            }
        }, [o, et, x]),
        eG = c
            ? b
                ? ey.intl.string(eb.default["Eb/YV9"])
                : k
                  ? ey.intl.string(eb.default.FD30bh)
                  : ey.intl.formatToPlainString(eb.default.dTSqLF, { count: d.length })
            : "",
        eU = el && null != ea,
        eB = A && null == et,
        eK = W?.target ?? eN?.target ?? null,
        eH = W ?? Y,
        eV = W ?? (Y?.instant === !0 ? null : Y),
        eW =
            null != eN && null != ea
                ? (function (e, t) {
                      let { left: n, top: l } = fB(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fU(eN.target, eN.anchor, ea, eg), ea)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eN?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eN;
            fF(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eN, r]),
        (0, tP.createPortal)(
            (0, a.jsxs)("div", {
                ref: e$,
                className: fO.Li,
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
                                      className: fO.MT,
                                      style: { left: ea.left, top: ea.top, width: ea.width, height: ea.height },
                                      "data-plain-cursor": eB ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ey.intl.string(eb.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: eS,
                                      onMouseLeave: eC,
                                      onClick: eE,
                                      onKeyDown: eq,
                                  }),
                                  null != S && null == S.marker && null == W && null == et
                                      ? (0, a.jsx)(fJ, { box: fG(S, ea, eg) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: L,
                                      className: fO.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fO.xz,
                                          "data-shown": null != S && null == et && null == W ? "" : void 0,
                                          "data-instant": J ? "" : void 0,
                                          children: (0, a.jsxs)(u.E, {
                                              variant: "text-xs/medium",
                                              className: fO.Ux,
                                              children: [
                                                  null == D
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fO.Tl, children: D.kind }),
                                                  null == D || "" === D.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fO.kh,
                                                            children: [" ", D.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: $,
                                      className: fO.Y,
                                      children: eB ? (0, a.jsx)("div", { className: fO.u }) : null,
                                  }),
                                  null == eV
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fO.aZ,
                                            style: {
                                                transform: `translate3d(${eV.at.x + 20}px, ${eV.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fO.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == W ? "" : void 0,
                                                children: (0, a.jsxs)(u.E, {
                                                    variant: "text-xs/medium",
                                                    className: fO.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fO.Tl,
                                                            children: eV.label.kind,
                                                        }),
                                                        "" === eV.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fO.kh,
                                                                  children: [" ", eV.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eK && null == eK.marker
                                      ? (0, a.jsx)("div", {
                                            className: fO.D0,
                                            style: fG(eK, ea, eg),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fU(e.target, e.anchor, ea, eg),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fO.xL,
                                              style: { ...fB(n, ea), width: 24, height: 24 },
                                              "aria-label": ey.intl.formatToPlainString(eb.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: _(e.target),
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
                                              children: (0, a.jsx)(fV, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eH || null == o
                                      ? null
                                      : (0, a.jsx)(tG, {
                                            projectId: o,
                                            at: { x: eH.at.x + 20, y: eH.at.y + 20 },
                                            bounds: ea,
                                            kind: eH.label.kind,
                                            value: eH.draft,
                                            canSubmit: null != W && E(eH.draft),
                                            onChange: (e) => {
                                                null != W && X({ ...W, draft: e });
                                            },
                                            onSubmit: eD,
                                            onDismiss: eh,
                                            onUploadFile: eF,
                                            closing: null == W,
                                        }),
                                  null != eN && null != et && null != eW
                                      ? (0, a.jsxs)(fW, {
                                            point: eW,
                                            frame: ea,
                                            authorId: eN.authorId,
                                            title: _(eN.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                et.confirmingRemove ? en({ ...et, confirmingRemove: !1 }) : en(null);
                                            },
                                            onMouseLeave: () => {
                                                et.editing || et.confirmingRemove || en(null);
                                            },
                                            children: [
                                                et.editing
                                                    ? (0, a.jsx)(n6.f, {
                                                          autoFocus: !0,
                                                          label: ey.intl.string(eb.default.KCYqWL),
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
                                                    : (0, a.jsx)(u.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fO.aC,
                                                          children: eN.comment,
                                                      }),
                                                K(eN, x)
                                                    ? (0, a.jsx)("div", {
                                                          className: fO.eB,
                                                          children: et.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(u.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fO.nv,
                                                                            children: ey.intl.string(eb.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(h.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ey.intl.string(eb.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                en({ ...et, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(h.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ey.intl.string(eb.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: ez,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(h.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: ey.intl.string(eb.default.friIzR),
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
                                                                                  disabled: !E(et.draft),
                                                                                  text: ey.intl.string(
                                                                                      eb.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eO,
                                                                              })
                                                                            : (0, a.jsx)(h.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ey.intl.string(
                                                                                      eb.default["6eW9lg"],
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
        n = (0, m.bG)([lr.default], () => lr.default.getUser(t), [t]);
    return (0, a.jsx)(a3.eu, {
        src: null == n ? null : a7.Ay.getUserAvatarURL(n),
        size: a4._3.SIZE_16,
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
        { point: c, frame: d, authorId: f, title: m, testId: h, onDismiss: g, onMouseLeave: p, children: x } = e,
        v = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fz);
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
        A = { left: k, top: w, "--custom-conjure-card-origin-x": `${S}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: v,
        className: fO.Nr,
        style: A,
        "data-testid": h,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), g());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fO.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fO.ip, children: (0, a.jsx)(fV, { authorId: f }) }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fO.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fO.zI, children: x }),
        ],
    });
}
let fX = 300,
    fY = 2;
function fZ(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fQ(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fJ(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fO.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var f0 = n(659723),
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
function f4(e) {
    let { className: t } = e,
        { Component: n, events: l } = f3(3e4);
    return (0, a.jsxs)("div", {
        className: f()(t, f2.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: f2.ol,
                children: ey.intl.string(eb.default.AyiQEp),
            }),
        ],
    });
}
var f7 = n(251363),
    f5 = n(944142),
    f6 = n(532247),
    f8 = n(501628);
function f9(e) {
    let { progress: t } = e,
        { Component: n } = f3(1500),
        l = eA.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: f8.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: f8.PM,
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
function me(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, m.bG)([f5.A], () => (s ? f5.A.getLiveReload(t) : null), [s, t]),
        o = (0, tu.A)(n, r)?.id ?? null,
        c = u?.phase ?? null,
        d = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, f6.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [o, c] = i.useState(t);
            s !== l && (u(l), c(t), a(null != l || o ? null : (0, f6.QP)(e, s)));
            let d = (0, m.bG)(
                    [eQ.A],
                    () => {
                        let e = eQ.A.getFrame(n);
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
                        null != t.target && t.target === (0, f7.ow)(null, n) && e();
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
        h = d ? null : (0, f6.h_)(c, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n$.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: f8.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(f9, { progress: h }),
                  })
                : null,
        ],
    });
}
var mt = n(782134),
    mn = n(357858),
    ml = n(343030),
    mr = n(317608),
    ma = n(35367),
    mi = n(228946);
let ms = { width: 1 / 0, height: 1 / 0 };
function mu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ms;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mo = n(702083);
function mc(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, m.cf)([to.A], () => ({
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
    let o = null != s && s.width > 0 ? s : null,
        c = n ? mu(l, o ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: f()(mo.dw, { [mo.PQ]: null != c }),
        children: (0, a.jsx)("div", { className: f()(mo.R9, { [mo.Vg]: null != c }), style: c ?? void 0, children: t }),
    });
}
var md = n(347927);
function mf(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: f()(md.Bf, l && md.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: md.Ux,
                children: [
                    (0, a.jsx)(j.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var mm = n(957272);
function mh(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, ma.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mi.A)(t, n), s === ma.n.Launched)) {
        let e = (0, a.jsx)(mr.A, { frameId: i.id, level: ml.A.WithinAppContent, className: mm.Z7, overlay: r });
        return (0, tc.Q5)(n) ? (0, a.jsx)(mc, { children: e }) : e;
    }
    return (0, a.jsx)(mg, { state: s });
}
function mg(e) {
    let { state: t } = e;
    switch (t) {
        case ma.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: mm.qs,
                children: (0, a.jsx)(mf, {
                    title: ey.intl.string(eb.default["9kpdo7"]),
                    body: ey.intl.string(eb.default.iIA8Nj),
                }),
            });
        case ma.n.NoApplication:
            return (0, a.jsx)(f4, { className: mm.qs });
        case ma.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: mm.qs,
                children: (0, a.jsx)(mf, {
                    title: ey.intl.string(eb.default["7k4GyN"]),
                    body: ey.intl.string(eb.default.zdIy3R),
                }),
            });
        case ma.n.Error:
            return (0, a.jsxs)("div", {
                className: mm.qs,
                children: [
                    (0, a.jsx)(j.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ey.intl.string(eb.default.lTPbnG),
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: mm.tj,
                        children: ey.intl.string(eb.default.e6GiAZ),
                    }),
                ],
            });
        case ma.n.AwaitingLaunch:
        case ma.n.Loading:
            return (0, a.jsx)("div", { className: mm.qs, children: (0, a.jsx)(o.y, {}) });
    }
}
var mp = n(308528),
    mx = n(334738),
    mv = n(688606),
    mj = n(365971),
    mb = n(703462);
function my(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: mb.f,
        children: [
            (0, a.jsx)(iq.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mk() {
    return (0, a.jsx)("div", { className: mb.f, children: (0, a.jsx)(o.y, {}) });
}
function mw(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        c = (0, m.bG)([ln.A], () => (null != o ? ln.A.getChannel(o) : null), [o]);
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && mp.A.preload(e2.ME, t);
        }, [t]),
        (n = (0, m.bG)([oT.A], () => oT.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mj.Xg)();
            return (
                (0, mx.yl)(t, e),
                () => {
                    (0, mx.dm)(t, e);
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
        ? (0, a.jsx)(my, { message: ey.intl.string(eb.default["VP/O8s"]) })
        : null == c
          ? (0, a.jsx)(mk, {})
          : (0, a.jsx)("div", {
                className: mb.g,
                children: (0, a.jsx)(mv.A, { channel: c, guild: null, chatInputType: ui.oU.SIDEBAR }, c.id),
            });
}
var mS = n(765671),
    mN = n(625903),
    mA = n(666476),
    mC = n(582063);
let mI = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mE() {
    (0, ex.P0)({ text: ey.intl.string(eb.default.jj3abP), variant: "critical" });
}
function mM(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = ey.intl.string(eb.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(e7.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(m_, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: mC.m2,
                        children: (0, a.jsx)(tq.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tV.K, {
                                "aria-label": r,
                                icon: mN.SettingsIcon,
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
                accept: mI.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mI.includes(n.type)
                                ? n.size > mA.aI
                                    ? (0, ex.P0)({ text: ey.intl.string(eb.default.T8Spiu), variant: "critical" })
                                    : (0, ac.M$)(t, n).catch(mE)
                                : (0, ex.P0)({ text: ey.intl.string(eb.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function m_(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, m.bG)([ao.A], () => ao.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(e5.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": ey.intl.string(eb.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(e6.rX, {
                children: [
                    (0, a.jsx)(e6.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: ey.intl.string(eb.default.uQpDky),
                        icon: lW.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(e6.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: ey.intl.string(eb.default.AiAz8J),
                        icon: d5.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, ac.Og)(t).catch(mE));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(e6.rX, {
                children: (0, a.jsx)(e6.fP, {
                    id: "conjure-overlay-background-blur",
                    label: ey.intl.string(eb.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, ac.Y1)(t, !i) || mE();
                    },
                }),
            }),
        ],
    });
}
function mT(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: i, width: s, height: u } = (0, mS.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: s, height: u }, l);
    return (0, a.jsxs)("div", {
        className: mC.JH,
        children: [
            (0, a.jsx)(af, { projectId: n }),
            (0, a.jsx)("div", {
                ref: i,
                className: mC.dw,
                children: (0, a.jsx)("div", {
                    className: mC.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(mh, { applicationId: t, surface: e3.ZN, frameOverlay: r }),
                }),
            }),
            null != n ? (0, a.jsx)(mM, { projectId: n }) : null,
        ],
    });
}
function mP(e) {
    let { onApprove: t, loading: n = !1 } = e;
    return (0, a.jsx)(mf, {
        title: ey.intl.string(eb.default.FExK4w),
        body: ey.intl.string(eb.default.e8XOnl),
        children: (0, a.jsx)(h.$, {
            size: "sm",
            variant: "primary",
            text: ey.intl.string(eb.default.YVFKfP),
            onClick: t,
            loading: n,
        }),
    });
}
var mR = n(409478),
    mL = n(652227);
function m$(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: i,
            previewGate: s,
            availability: u,
            activeMode: c,
            widgetApplicationId: d,
            overlayWidgetSize: f = eO,
            projectId: h,
            renderFrameOverlay: g,
            paused: p = !1,
            onResume: x,
        } = e,
        v = (0, m.bG)([rn.A], () => null != h && null != rn.A.getSetupStartedAt(h), [h]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: mL.qs, children: (0, a.jsx)(o.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: mL.qs,
                children: (0, a.jsx)(mP, { onApprove: s.onApprove, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: mL.RG,
                      children: [
                          (0, eB.yf)(u, c)
                              ? p
                                  ? (0, a.jsx)(mq, { projectId: h, onResume: x })
                                  : (0, a.jsx)(mh, { applicationId: t, surface: l, launch: r, frameOverlay: g?.(l) })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: mL.qs,
                                        children: (0, a.jsx)(mf, {
                                            wide: !0,
                                            title: ey.intl.string(eb.default["08U+YO"]),
                                            body: ey.intl.string(eb.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(mR.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(mT, { applicationId: t, projectId: h, size: f, frameOverlay: g?.(e3.ZN) })
                              : null,
                          "bot" === c && null != n && null != h
                              ? (0, a.jsx)(mw, { projectId: h, previewApplicationId: n })
                              : null,
                      ],
                  })
            : v
              ? (0, a.jsx)("div", { className: mL.qs, children: (0, a.jsx)(o.y, {}) })
              : (0, a.jsx)(f4, { className: mL.qs });
}
function mq(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mn.Pu)(t),
        (0, a.jsx)("div", {
            className: mL.qs,
            children: (0, a.jsx)(mf, {
                wide: !0,
                title: ey.intl.string(eb.default.MMWEH2),
                body: ey.intl.string(eb.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(h.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mt.PlayIcon,
                              text: ey.intl.string(eb.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mD = n(750506),
    mF = n(867193),
    mO = n(539197),
    mz = n(977020);
function mG(e) {
    let { projectId: t } = e,
        n = (0, mO.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mO.Ie)(e);
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
        className: mz.$Q,
        style: { left: r, top: s, width: u, height: o, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [mO.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: f()(mz.hN, mz.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: f()(mz.hN, mz.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: f()(mz.UE, { [mz.SP]: n.shown, [mz.Vq]: n.pressed, [mz.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var mU = n(417760);
function mB(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, m.bG)([rr.A], () => null != e && rr.A.isThinking(e)),
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
        o = (0, eI.CU)(n),
        c = "controlling" === t,
        d = ey.intl.string(c ? (o ? eb.default["VJW/5P"] : eb.default["+hD2Iz"]) : eb.default["h+i1r9"]),
        g =
            null != r
                ? (0, a.jsx)(h.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ey.intl.string(eb.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: f()(mU.M0, mU.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(ck.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(sl.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "none", className: mU.ID, children: d }),
                  c ? (0, a.jsx)(n$.A, { children: ey.intl.string(eb.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: mU.lC, children: g }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: mU.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: mU.sp,
                      children: [
                          (0, a.jsx)(sl.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(ck.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: mU.f4,
                              children: [
                                  (0, a.jsx)(u.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: mU.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(u.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: mU.Rb,
                                            children: ey.intl.string(eb.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: mU.lC, children: g }) : null,
              ],
          });
}
function mK(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, eI.Zv)(null != n && n === l ? t : null),
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
        c = (0, eM.useHasAnyModalOpen)(),
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
            (x((e) => (tB(e, t) ? e : t)), null != h && (0, mF.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, mF.C)(0));
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
            let [e] = i.useContext(mD.uY),
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
                      className: mU.D,
                      "data-phase": o,
                      children: (0, a.jsx)("div", {
                          className: mU.QF,
                          children: (0, a.jsx)(mB, { phase: o, projectId: t, compact: y }),
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
                                ? ey.intl.string(eb.default.oWcemF)
                                : "handoff" === o
                                  ? ey.intl.string(eb.default["h+i1r9"])
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
                                  className: mU.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: mU.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(mG, { projectId: t }),
                          ],
                      }),
                      S,
                  )
                : null,
        ],
    });
}
var mH = n(399503),
    mV = n(853555),
    mW = n(271982),
    mX = n(327152),
    mY = n(187645);
let mZ = { width: 1280, height: 720 },
    mQ = new Map(),
    mJ = !1;
function m0() {
    let e = new Map();
    for (let t of new Set([...rr.A.getActivityOrderedProjectIds(), ...(0, eI.T7)()])) {
        if (!(rr.A.isThinking(t) || (0, eI.wK)(t)) || eD.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = ti.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, tc.Rc)(t), (0, tc.Th)(t)].find(e3.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...mQ]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            mQ.delete(t),
            n.unregisterLookup(),
            mW.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, mX.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        mQ.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = mY.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    m1(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (mQ.set(e, l),
                    (l.unregisterLookup = (0, mV.Ng)(e, () => (0, f7.n5)(n, t))),
                    mW.A.registerFrameTarget(t, n, ml.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of mQ) m1(t.element, e, t.frameId);
}
function m1(e, t, n) {
    if (eQ.A.getFrame(n)?.surface.type === eK.U.OVERLAY) {
        let l = eG(ti.Ay.getProject(t));
        (e.classList.remove(mY.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, mX.Pn)(n, l));
        return;
    }
    let l = to.A.isBuilderPreviewMobile();
    e.classList.toggle(mY.L, !l);
    let r = l ? mu(to.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, mX.Pn)(n, r ?? mZ));
}
var m2 = n(873727),
    m3 = n(147248),
    m4 = n(418842),
    m7 = n(363195);
let m5 = 0;
var m6 = n(818023);
let m8 = null;
var m9 = n(541940);
function he(e) {
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
        v = (0, tu.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, m.bG)([m7.A], () => (0, m2.x4)(m7.A.theme)),
            l = (0, m.bG)([m3.A], () => m3.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, m.cf)([a1.Ay], () => ({
                reducedMotion: a1.Ay.useReducedMotion,
                fontScale: (0, m2.U0)(),
                highContrast: a1.Ay.isHighContrastModeEnabled,
                forcedColors: a1.Ay.useForcedColors,
                underlineLinks: a1.Ay.alwaysShowLinkDecorations,
            })),
            c = eA.hH.useSetting(),
            d = (0, m4.C)(),
            f = (0, m.bG)(
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
                let l = (0, f7.n5)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++m5,
                    baseTheme: n,
                    customTheme: (0, m2.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: f,
                };
                (0, fD.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, f, t, s, c, e, r, d, o]),
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
                let n = (0, f7.n5)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, f7.n5)(e, t) && ((p.current = null), j());
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
            if (null != t) return (0, mV.Ng)(t, () => (0, f7.n5)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, f7.ow)(p, j), [p, j]),
        y = i.useCallback(() => (h ? (0, f7.ow)(p, j) : p), [h, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: f()(m9.Mh, o),
                children: [
                    u,
                    g
                        ? null
                        : (0, a.jsx)(mK, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: m9.fm, children: c }),
                ],
            }),
            d,
            g
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fH, {
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
function ht(e) {
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
        previewPaused: A = !1,
        onResumePreview: C,
    } = e;
    (0, mH.k)(t, S);
    let I = s.type === eK.U.MAIN || (0, tc.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, m.cf)([to.A], () => ({
            mobile: to.A.isBuilderPreviewMobile(),
            landscape: to.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? m6.aX.LANDSCAPE : m6.aX.PORTRAIT), (m8 = e));
                else {
                    if (m8 !== e) return;
                    ((l = m6.aX.UNHANDLED), (m8 = null));
                }
                ox.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(I ? l : null);
    let E = i.useRef(null),
        [M, _] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, nw.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, nw.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (I) return ((0, eq.HV)(l), () => (0, eq.HV)(null));
        }, [l, I]),
        i.useEffect(() => {
            null != t &&
                ((0, tm.ensureConnection)(t),
                mJ ||
                    ((mJ = !0),
                    rr.A.addChangeListener(m0),
                    ti.Ay.addChangeListener(m0),
                    eQ.A.addChangeListener(m0),
                    to.A.addChangeListener(m0),
                    eD.A.addChangeListener(m0),
                    (0, eI.W3)(m0),
                    m0()));
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
    let T = Math.max(450, M - 320),
        P = c || I;
    return (0, a.jsx)("div", {
        ref: E,
        className: m9.LB,
        children: (0, a.jsx)(he, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: o,
            showsFrame: (0, eB.yf)(k, w),
            paused: A,
            mainClassName: null == o ? void 0 : f()(m9.ez, { [m9.zt]: c }),
            content: (0, a.jsx)(m$, {
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
                paused: A,
                onResume: C,
                renderFrameOverlay: (e) =>
                    (0, a.jsx)(me, { projectId: t, applicationId: l, previewApplicationId: r, surface: e }),
            }),
            sidebar:
                null != t && P
                    ? (0, a.jsx)("div", {
                          className: c ? m9.v7 : m9.LL,
                          children: (0, a.jsx)(t_.A, {
                              sidebarType: t_.X.CallChatSidebar,
                              maxWidth: T,
                              capturePointer: !0,
                              children: (0, a.jsx)("div", {
                                  className: m9.cO,
                                  children: x
                                      ? (0, a.jsx)(fT, { projectId: t, onClose: v ?? (() => {}) }, t)
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(f0.Ay, { projectId: t }),
                                                (0, a.jsx)(tT.Ay, {
                                                    "aria-label": ey.intl.string(ey.t["/VQax8"]),
                                                    toolbar: (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                            h,
                                                            null == d
                                                                ? null
                                                                : (0, a.jsx)(tT.Ay.Icon, {
                                                                      icon: tM.P,
                                                                      tooltip: ey.intl.string(eb.default.JD6Oit),
                                                                      onClick: d,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: (0, a.jsx)(tT.Ay.Title, {
                                                        children: ey.intl.string(ey.t["/VQax8"]),
                                                    }),
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: m9.cb,
                                                    children: (0, a.jsx)(
                                                        cW,
                                                        {
                                                            projectId: t,
                                                            restoreState: j,
                                                            onRestoreVersion: g,
                                                            onImportProject: p,
                                                            escapeScopeRef: E,
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
var hn = n(705427),
    hl = n(606128),
    hr = n(323140);
function ha(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: o, onBack: c, guildId: d } = e,
        b = i.useContext(eR),
        [y] = i.useState(() => (null != b ? e$.A.getProjectView(b) : null)),
        [k, w] = i.useState(y?.chatOpen ?? !0),
        [C, I] = i.useState(y?.debugOpen ?? !1);
    i.useEffect(() => {
        null != b && (0, eL.g7)(b, { chatOpen: k, debugOpen: C });
    }, [b, k, C]);
    let E = i.useCallback(
            (e) => {
                null != b && (0, eL.g7)(b, { previewSelection: e });
            },
            [b],
        ),
        M = eC(),
        _ = eE.useConfig({ location: "ConjureSelectedProjectScreen" }).enabled,
        T = i.useCallback(() => w(!0), []),
        P = i.useCallback(() => {
            (I(!1), w(!0));
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
                                (0, eT.oB)(o, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, ex.P0)({
                                                        text: ey.intl.formatToPlainString(eb.default.Z4n6LX, {
                                                            title: (0, e_.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, eP.c)(o, r);
                                                null != e && (0, ex.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", o, e),
                                                (0, ex.P0)({
                                                    text: ey.intl.string(eb.default["PSdo+w"]),
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
            previewReady: O,
            hasFrame: G,
            needsPermissionReview: B,
            needsAppConsent: K,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, m.bG)(
                    [ti.Ay, ta.A],
                    () => (null == l ? null : (ti.Ay.getIntegrationStatus(l) ?? ta.A.getIntegrationStatus(l))),
                    [l],
                ),
                u = e?.preview_application_id ?? null,
                { data: o, isLoading: c } = (0, tl.YY)(u ?? void 0),
                d = null != l && t !== l,
                f = s?.preview_ready === !0,
                h = s?.has_activity === !0,
                g = s?.bot_permissions_changed === !0,
                p = (0, eB.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: s?.integration_installed ?? null,
                    botPermissionsChanged: g,
                }),
                x = (0, eB.jS)(o);
            i.useEffect(() => {
                p && !d && null != u && e(u);
                async function e(e) {
                    try {
                        await (0, tl.TA)(e);
                    } catch {}
                }
            }, [g, d, p, u]);
            let v = i.useCallback(async () => {
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
                        v(),
                        () => {
                            (a.current?.abort(), (a.current = null));
                        }
                    ),
                    [v],
                ),
                {
                    integrationStatus: s,
                    isPreviewApplicationLoading: c,
                    checkingIntegration: d,
                    previewReady: f,
                    hasFrame: h,
                    needsPermissionReview: p,
                    needsAppConsent: x,
                }
            );
        })(s),
        H =
            (0, m.bG)([th.A], () => (null == $ ? void 0 : th.A.getPublishStatus($)?.previewAppChannels), [$]) ??
            q?.preview_app_channels,
        {
            availability: W,
            activeMode: X,
            setMode: Y,
            frameSurface: Z,
            frameSurfaceOptions: Q,
            setFrameSurface: J,
            appChannel: ee,
            setAppChannel: et,
            frameLaunchParams: en,
            widgetApplicationId: el,
        } = (0, eX.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: G,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: q?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(eF.q7.OVERLAY) === !0,
            previewAppChannels: H,
            initialSelection: y?.previewSelection,
            onSelectionChange: E,
        }),
        er = eG(s);
    ((0, eU.x)($, (e) => {
        W.modes.includes(e) && Y(e);
    }),
        eN($, () => {
            (w(!0), I(!0));
        }));
    let ea = W.modes.includes("frame"),
        eo = (0, m.bG)([eD.A], () => eD.A.isPaused($), [$]),
        ed = ea && !eo,
        {
            previewTargetOptions: ef,
            handleSelectPreviewTarget: eh,
            mobilePreview: ew,
            mobilePreviewLabel: eS,
            handleToggleMobilePreview: eA,
            landscapePreview: eO,
            rotatePreviewLabel: ez,
            handleRotatePreview: eH,
            previewSurface: eV,
            previewFrame: eW,
            refreshFrame: eY,
            isRefreshing: eZ,
            handleRefresh: eQ,
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
                h = (0, m.bG)([to.A], () => to.A.isBuilderPreviewMobile()),
                g = ey.intl.string(h ? eb.default.tKGF0Q : eb.default.peqEOY),
                p = i.useCallback(() => (0, eq.GG)(!h), [h]),
                x = (0, m.bG)([to.A], () => to.A.isBuilderPreviewLandscape()),
                v = ey.intl.string(x ? eb.default.tunI2l : eb.default.DoNdjA),
                j = i.useCallback(() => (0, eq.Lw)(!x), [x]),
                b = (0, tc.jS)(t),
                y = i.useMemo(() => (0, tc.Op)(b, r), [b, r]),
                k = (0, tu.A)(t?.preview_application_id ?? null, y),
                w = (0, tu.A)(t?.preview_application_id ?? null, e3.ZN),
                S = "overlay" === l ? w : k,
                N = (0, e3.x1)(S) && S.data.proxyTicketRefreshing,
                A = i.useCallback(() => {
                    null == S || N || ts.A.refreshProxyTicket(S.id);
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
                handleRefresh: A,
            };
        })({
            project: s,
            modes: W.modes,
            activeMode: X,
            frameSurface: Z,
            frameSurfaceOptions: Q,
            previewAppChannels: H,
            setMode: Y,
            setFrameSurface: J,
            setAppChannel: et,
        }),
        eJ = k && !C,
        e0 = ey.intl.string(eJ ? eb.default.JD6Oit : eb.default.xjJAQm),
        e1 = i.useCallback(() => {
            if (C) {
                (I(!1), w(!0));
                return;
            }
            w((e) => !e);
        }, [C]),
        e2 = i.useCallback(() => w(!1), []),
        {
            designFeedbackActive: e7,
            designFeedbackToggleRef: e5,
            agentDrivingPreview: e6,
            designFeedbackLabel: e8,
            handleToggleDesignFeedback: e9,
        } = (function (e, t, n) {
            let { active: l } = V(e);
            i.useEffect(() => {
                null != e && l && !t && U(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, eI.Zv)(e),
                s = ey.intl.string(a ? eb.default.Sme0T0 : l ? eb.default.vn5Rzu : eb.default["cl/Jyl"]),
                u = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void U(e);
                        (n(), z(e));
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
        [te] = i.useState(() => A.isPlatformEmbedded && (0, tn.qM)()),
        tj = null != em($);
    i.useEffect(() => {
        null != $ && tj && !ed && ec($);
    }, [$, tj, ed]);
    let tb = i.useCallback(() => {
            null != $ &&
                (P(),
                (function (e) {
                    if (null != eu(e)) return;
                    let { byProject: t } = ei.getState();
                    ei.setState({ byProject: { ...t, [e]: es } });
                })($));
        }, [$, P]),
        ty = i.useCallback(() => {
            null != $ && ec($);
        }, [$]),
        tk = tj ? ey.intl.string(eb.default.tuQ5f3) : e8,
        tS = i.useCallback(() => {
            I((e) => !e && (w(!0), !0));
        }, []),
        tN = i.useCallback(() => I(!1), []),
        tA = i.useCallback(() => {
            null != $ && (0, eq._j)($);
        }, [$]),
        tM = i.useCallback(() => {
            null != $ && (eo ? (0, eq._j)($) : (0, eq.di)($, eW?.id));
        }, [$, eo, eW?.id]),
        t_ = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eW?.id), (0, tm.closeConnection)(e), (0, tf.r)(t)), c());
        }, [s, eW?.id, c]),
        tT =
            ((t = (0, ej.z)(s)),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, ev.vt)(e);
                    null != n
                        ? (0, ex.P0)({ text: n, variant: "critical" })
                        : (0, ep.A)({
                              title: ey.intl.formatToPlainString(eb.default["Gm+u1+"], { name: s.name }),
                              subtitle: ey.intl.string(eb.default.M7H3sJ),
                              confirmText: ey.intl.string(eb.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  T();
                                  try {
                                      await (0, ev.Hj)(t, e, ey.intl.string(eb.default.Owerd3));
                                  } catch {
                                      (0, ex.P0)({ text: ey.intl.string(eb.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, T],
            )),
            { onExport: t, onImport: (r = (0, ev.yN)(l)).open, importInput: r.input }),
        tP = i.useCallback(() => {
            null != s && (0, tI.A)(s, d);
        }, [s, d]),
        tR = i.useCallback(async () => {
            null != $ && (await (0, tp.vL)($, d));
        }, [d, $]),
        tL = (0, eB.JR)(X, B, q?.bot_permissions_changed === !0, K)
            ? { type: "permissions", onApprove: tR, loading: D }
            : F && null == q
              ? { type: "checking" }
              : void 0,
        t$ = (0, m.bG)([ti.Ay], () => null != $ && ti.Ay.isProjectDeleting($), [$]);
    i.useEffect(() => {
        ((null == s && o) || t$) && c();
    }, [s, o, t$, c]);
    let {
            publishOptions: tq,
            publish: tD,
            publishing: tF,
            confirmation: tO,
            variant: tz,
            text: tG,
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
        })($, d, F || D, tw),
        tU = tC($, tD, tq),
        tB = (0, S.A)(eW),
        tK = "frame" === X && !eo && (0, e3.x1)(eW) && (tB.isPoppedOut || tB.canPopout),
        tH = null == s ? void 0 : () => (0, tE.A)(s.id, { guildId: d, isPreview: !0, publishOptions: tq }),
        tV =
            null == s
                ? null
                : (0, a.jsx)(td.A, {
                      projectId: s.id,
                      projectName: s.name,
                      guildId: d,
                      projectGuildId: s.guild_id,
                      isOwner: (0, ti.PV)(s),
                      canRemix: (0, ti.H_)(s),
                      onOpenProjectSettings: tH,
                      onTogglePreviewPaused: "frame" === X ? tM : void 0,
                      previewPaused: eo,
                      previewPauseDisabled: !eo && e6,
                      onTogglePopout: tK ? (tB.isPoppedOut ? tB.popIn : tB.popOut) : void 0,
                      poppedOut: tB.isPoppedOut,
                      onToggleDebug: M ? tS : void 0,
                      debugOpen: C,
                      onExport: tT.onExport,
                      onImport: tT.onImport,
                      onRemix: tP,
                      onConnectTool: _
                          ? () => {
                                var e;
                                return (
                                    (e = s.id),
                                    void (0, eM.openModalLazy)(async () => {
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
                              void (0, eM.openModalLazy)(async () => {
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
                          W.modes.includes("widget") && "unavailable-authorization-revoked" !== W.profileState
                              ? el
                              : null,
                      previewProjectId: s.id,
                  }),
        tW =
            null == tD || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: hr.As,
                      onMouseDown:
                          null == $ || tD.disabled || tF
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tg.dx)($);
                                },
                      children: (0, a.jsx)(h.$, {
                          size: "sm",
                          variant: tz,
                          icon: tF ? hi : null != tO ? g.U : void 0,
                          text: tG,
                          onClick: () => tU("header"),
                      }),
                  }),
        tX = (0, a.jsx)(hn.A, {
            title: s?.name ?? ey.intl.string(eb.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tH,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: hr.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: hr.QQ,
                                  children: [
                                      (0, a.jsx)(tt, {
                                          targets: ef,
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
                                          })(X, Z, ee),
                                          onChange: eh,
                                      }),
                                      ea
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === X
                                                        ? (0, a.jsx)(N.A.Icon, {
                                                              icon: ew ? ho : hu,
                                                              tooltip: eS,
                                                              "aria-label": eS,
                                                              selected: ew,
                                                              onClick: eA,
                                                          })
                                                        : null,
                                                    ew && "frame" === X
                                                        ? (0, a.jsx)(N.A.Icon, {
                                                              icon: hc,
                                                              tooltip: ez,
                                                              "aria-label": ez,
                                                              selected: eO,
                                                              onClick: eH,
                                                          })
                                                        : null,
                                                    (0, a.jsx)(eg, {
                                                        enabled: te && !tj && !e6 && !eo,
                                                        onLongPress: tb,
                                                        children: (0, a.jsx)(N.A.Icon, {
                                                            ref: e5,
                                                            icon: p.x,
                                                            iconClassName: hr.D8,
                                                            tooltip: tk,
                                                            "aria-label": tk,
                                                            selected: tj || e7,
                                                            disabled: eo || (e6 && !tj),
                                                            onClick: tj ? ty : e9,
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== X || eo
                                          ? null
                                          : (0, a.jsx)(e4, { frame: eW, controlProjectId: s.id }),
                                      (0, e3.x1)(eY)
                                          ? (0, a.jsx)(N.A.Icon, {
                                                icon: x.RefreshIcon,
                                                tooltip: ey.intl.string(eb.default.FZIHQN),
                                                "aria-label": ey.intl.string(eb.default.FZIHQN),
                                                disabled: eZ,
                                                onClick: eQ,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, a.jsx)("div", { className: hr.YJ }),
                              (0, a.jsx)(ek.A, { frame: eW }),
                              (0, a.jsx)(N.A.Icon, {
                                  icon: v.DoorExitIcon,
                                  tooltip: ey.intl.string(eb.default["/TlGcK"]),
                                  "aria-label": ey.intl.string(eb.default["/TlGcK"]),
                                  onClick: t_,
                              }),
                              (0, a.jsx)(N.A.Icon, {
                                  icon: hs,
                                  tooltip: e0,
                                  "aria-label": e0,
                                  selected: eJ,
                                  onClick: e1,
                              }),
                              tV,
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: f()(hr.nj, hl.T),
        children: [
            tT.importInput,
            (0, a.jsx)("main", {
                className: hr.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: hr.j5,
                              children: [
                                  tX,
                                  (0, a.jsxs)("div", {
                                      className: hr.sD,
                                      children: [
                                          (0, a.jsx)(j.D, {
                                              variant: "heading-lg/semibold",
                                              children: ey.intl.string(eb.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(u.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ey.intl.string(eb.default.fINulo),
                                          }),
                                          (0, a.jsx)(h.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ey.intl.string(eb.default["WFJ/vb"]),
                                              onClick: () => (0, tr.listProjects)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tp.bI.Provider, {
                              value: tq,
                              children: (0, a.jsx)(
                                  ht,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: e5,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eV,
                                      frameLaunchParams: en,
                                      header: tX,
                                      chatOpen: k,
                                      onCloseChat: e2,
                                      chatHeaderAction: tW,
                                      debugOpen: M && C,
                                      onCloseDebug: tN,
                                      onRestoreVersion: L,
                                      onImportProject: (0, ti.PV)(s) ? tT.onImport : void 0,
                                      restoreState: R,
                                      previewReady: O,
                                      previewGate: tL,
                                      availability: W,
                                      activeMode: X,
                                      widgetApplicationId: el,
                                      overlayWidgetSize: er,
                                      previewPaused: eo,
                                      onResumePreview: tA,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function hi() {
    return (0, a.jsx)(o.y, { type: o.t.SPINNING_CIRCLE_SIMPLE, className: hr.Hv, itemClassName: hr.C5 });
}
function hs(e) {
    return (0, a.jsx)(b.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hu(e) {
    return (0, a.jsx)(y.u, { ...e, size: "custom", width: 20, height: 20 });
}
function ho(e) {
    return (0, a.jsx)(k.k, { ...e, size: "custom", width: 20, height: 20 });
}
function hc(e) {
    return (0, a.jsx)(w.H, { ...e, size: "custom", width: 20, height: 20 });
}
var hd = n(97005),
    hf = n(282858),
    hm = n(434279),
    hh = n(751841),
    hg = n(159308);
let hp = "ConjurePage";
function hx() {
    return (0, a.jsx)("div", {
        className: hg.l,
        children: (0, a.jsx)(u.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: ey.intl.string(eb.default.BGh3xB),
        }),
    });
}
function hv() {
    (0, c.bG)((0, hh.hU)(null));
}
function hj(e) {
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
        })(t);
    (0, rF.wB)(t);
    let s = (null != l ? (0, hm.wu)(l) : null) ?? n;
    return null != l || r
        ? null == s
            ? (0, a.jsx)(hx, {})
            : (0, a.jsx)(eR.Provider, {
                  value: t,
                  children: (0, a.jsx)(ha, { project: l, projectsLoaded: r, onBack: hv, guildId: s }),
              })
        : (0, a.jsx)("div", { className: hg.l, children: (0, a.jsx)(o.y, {}) });
}
function hb(e) {
    let { projectId: t } = e,
        n = (0, n1.rX)(hp);
    return (i.useEffect(() => {
        ti.Ay.hasFetchedOwnedProjects() || (0, tr.listProjects)();
    }, []),
    i.useEffect(() => {
        (0, eL.jQ)(t);
    }, [t]),
    i.useEffect(() => eL.mE, []),
    null == t)
        ? (0, a.jsx)("div", {
              className: hg.i,
              children: null == n ? (0, a.jsx)(hx, {}) : (0, a.jsx)(hf.A, { guildId: n, onConjurePage: !0 }),
          })
        : (0, a.jsx)(hj, { projectId: t, workspaceGuildId: n }, t);
}
function hy(e) {
    let { projectId: t } = e;
    return (0, hd.TW)(hp) ? (0, a.jsx)(hb, { projectId: t }) : null;
}
