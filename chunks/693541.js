n.d(t, { A: () => ho });
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    u = n(834730),
    o = n(289873),
    c = n(976860),
    d = n(91242),
    f = n(457827),
    m = n(802905),
    h = n(17928),
    g = n(245179),
    p = n(573083);
function x(e) {
    return g.A.isThinking(e) || (0, p.wK)(e);
}
var v = n(35525),
    j = n(881511);
let b = new Set();
function y(e, t) {
    if (!(b.has(t) || (x(e) && !m.A.isPaused(e))))
        for (let e of d.A.getAllFrames())
            e.applicationId === t &&
                (0, j.D)(e) &&
                !(v.A.isInHostWindow(e) || (v.A.isActivityPopoutOpen() && d.A.getMainFrame()?.id === e.id)) &&
                (0, f.r)(e.id);
}
var k = n(503698),
    w = n.n(k),
    C = n(821609),
    N = n(478016),
    A = n(604525),
    S = n(625903),
    I = n(297264),
    E = n(534890),
    M = n(646270),
    _ = n(31300),
    T = n(831453),
    P = n(646973),
    R = n(742589),
    L = n(723702),
    $ = n(839214);
n(321073);
let q = Object.freeze({ x: 0.5, y: 0.5 });
function D(e) {
    return "" !== e.trim();
}
function F(e) {
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
function O(e) {
    let { kind: t, name: n } = F(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function z(e) {
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
let G = "[conjure:selected] ",
    U = " \u2014 ";
function B(e) {
    if (!e.startsWith(G)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(G.length),
        a = r.indexOf(U),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let K = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    H = new Map(),
    V = new Set();
function W(e) {
    return H.get(e) ?? K;
}
function X(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? H.set(e, t) : H.delete(e), [...V]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function Y(e) {
    let t = W(e);
    t.active || X(e, { ...t, active: !0 });
}
function Z(e) {
    let t = W(e);
    t.active && X(e, { ...t, active: !1 });
}
function Q(e) {
    H.has(e) && X(e, K);
}
function J(e, t) {
    let n = W(e);
    n.active && X(e, { ...n, context: t });
}
function ee(e, t) {
    return null != t && e.authorId === t;
}
function et(e) {
    return (
        V.add(e),
        () => {
            V.delete(e);
        }
    );
}
function en(e) {
    let t = i.useCallback(() => (null == e ? K : W(e)), [e]);
    return i.useSyncExternalStore(et, t, t);
}
(n(134528), n(947204));
let el = { past: [], present: [], future: [] };
function er(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function ea(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function ei(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => ea(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: ea(e.from, t, n), to: ea(e.to, t, n) };
        case "text":
            return { ...e, at: ea(e.at, t, n) };
    }
}
function es(e) {
    return e.some((e) => "erase" !== e.kind);
}
function eu(e, t) {
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
function eo(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function ec(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function ed(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => ec(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = ec(e.from, t),
                l = ec(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = ec(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function ef(e) {
    return es(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let em = [3, 6, 12],
    eh = [10, 20, 40],
    eg = (0, $.D)(() => ({ byProject: {} })),
    ep = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: el,
        sketchDismissedFor: null,
    };
function ex(e) {
    return eg.getState().byProject[e] ?? null;
}
function ev(e, t) {
    let n = ex(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = eg.getState();
    eg.setState({ byProject: { ...r, [e]: l } });
}
function ej(e) {
    if (null == ex(e)) return;
    let { [e]: t, ...n } = eg.getState().byProject;
    (eg.setState({ byProject: n }), Q(e));
}
function eb(e, t) {
    null != ex(e) &&
        (ev(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? Y(e) : Z(e));
}
function ey(e, t) {
    ev(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return er(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return er(
                        e,
                        e.present.map((e) => (e.id === t.id ? ei(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : er(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : er(e, []);
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
function ek(e) {
    return eg.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var ew = n(39416);
function eC(e) {
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
            className: ew.i5,
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
var eN = n(314116),
    eA = n(858899),
    eS = n(319481),
    eI = n(949757),
    eE = n(248675),
    eM = n(105292),
    e_ = n(766367);
let eT = new Set(),
    eP = null;
function eR(e, t) {
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
                eT.add(t),
                () => {
                    eT.delete(t);
                }
            );
        }, [e]));
}
var eL = n(253932);
function e$() {
    return eL.Q_.useSetting() || !1;
}
let eq = (0, n(945810).mj)({
    name: "2026-10-conjure-mcp-ui",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 } },
});
var eD = n(192308),
    eF = n(128761),
    eO = n(12177),
    ez = n(967008),
    eG = n(15564);
let eU = i.createContext(null);
var eB = n(398773),
    eK = n(735769),
    eH = n(513845),
    eV = n(951178);
let eW = { width: 320, height: 240 };
function eX(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : eW;
}
function eY(e) {
    return eX(e?.preview_overlay_widget ?? null);
}
var eZ = n(855859),
    eQ = n(238490),
    eJ = n(991690),
    e0 = n(696645);
function e1(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function e2(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, e0.X)(e.surface)
                : eM.intl.formatToPlainString(eE.default["6xVl+N"], {
                      surface: (0, e0.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return eM.intl.string(eE.default.y5GiL1);
        case "overlay":
            return eM.intl.string(eE.default["2940LX"]);
        case "bot":
            return eM.intl.string(eE.default.tjpaGN);
    }
}
var e3 = n(939398),
    e5 = n(86147),
    e4 = n(729475),
    e7 = n(156548),
    e6 = n(869146),
    e8 = n(475815),
    e9 = n(652215),
    te = n(165610);
function tt(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, e7.cR)(t?.id ?? null),
        r = (0, p.Zv)(n),
        i = (0, h.bG)(
            [e6.A, d.A],
            () => null != t && e6.A.getWindowOpen(e9.MLl.ACTIVITY_POPOUT) && d.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, te.x1)(t) || i || r) return null;
    let s = (0, e7.fl)(t.id);
    if (null == s || !(0, e8.Ub)(s)) return null;
    let u = eM.intl.string(l ? eM.t.Z7MyNB : eM.t.OIDkcp);
    return (0, a.jsx)(R.A.Icon, {
        tooltip: u,
        icon: l ? e5.z : e4.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, e7.U8)(t.id),
    });
}
var tn = n(265872),
    tl = n(980707),
    tr = n(477782),
    ta = n(559106),
    ti = n(847374),
    ts = n(704745);
function tu(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let c = i.useCallback(() => s(!1), []),
        d = i.useCallback(() => s((e) => !e), []),
        f = i.useRef(null);
    if (!o) return null;
    let m = eM.intl.string(eE.default.I2ucou);
    return (0, a.jsx)(tn.Y, {
        targetElementRef: f,
        shouldShow: r,
        onRequestClose: c,
        position: "bottom",
        align: "right",
        animation: tn.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(tl.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(tr.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = e1(e);
                        return (0, a.jsx)(
                            tr.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: e2(e),
                                checked: t === e1(n),
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
            return (0, a.jsx)(ta.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: f,
                    type: "button",
                    className: ts.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: d,
                    children: [
                        (0, a.jsx)(u.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eM.intl.string(eE.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(u.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: e2(n),
                        }),
                        (0, a.jsx)(ti.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var to = n(324641),
    tc = n(627363),
    td = n(371169),
    tf = n(153207),
    tm = n(260498),
    th = n(803101),
    tg = n(226178),
    tp = n(625180),
    tx = n(672929),
    tv = n(111534),
    tj = n(754027),
    tb = n(193072),
    ty = n(722701),
    tk = n(962998),
    tw = n(893067);
function tC(e) {
    return null != e && e.upToDate && "publish" === e.action && !e.awaitingApproval;
}
function tN(e, t) {
    return null != t
        ? t
        : null == e
          ? eM.intl.string(eE.default["120EFN"])
          : tC(e) && !e.publishing
            ? eM.intl.string(eE.default.kAfbEN)
            : e.label;
}
var tA = n(373540),
    tS = n(189213),
    tI = n(144228);
function tE(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, u] = i.useState(t.selected_destination_id),
        o = eM.intl.string(eE.default.lJrOGW);
    return (0, a.jsx)(tS.a, {
        transitionState: l,
        onClose: r,
        title: o,
        size: "sm",
        actions: [
            { text: eM.intl.string(eE.default.y83r6D), variant: "secondary", onClick: r },
            {
                text: eM.intl.string(eE.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (n(s), r());
                },
            },
        ],
        children: (0, a.jsx)(tI.z, {
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
let tM = {
    showPublishBlocked: tA.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, eD.openModal)(
                (t) =>
                    (0, a.jsx)(tE, {
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
    showError: (e) => (0, eA.P0)({ text: e, variant: "critical" }),
};
var t_ = n(811587);
let tT = "conjure-publish";
function tP(e) {
    let t = (0, eD.getInteractingModalContext)(),
        l = { current: !1 };
    (0, eD.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("880475"), n.e("801342"), n.e("924150")]).then(
                n.bind(n, 372501),
            );
            return (n) => (0, a.jsx)(t, { ...n, ...e, savingRef: l });
        },
        {
            modalKey: tT,
            contextKey: t,
            onCloseRequest: () => {
                l.current || (0, eD.closeModal)(tT, t);
            },
        },
    );
}
function tR(e, t, n) {
    let l, r;
    return (
        (l = i.useContext(tw.bI)),
        (r = n ?? l),
        i.useCallback(
            (n) => {
                if (null == e || null == t || null == r || t.disabled) return;
                let l = t.status?.publishState;
                t.awaitingApproval || (null != l && (0, t_.lE)(l))
                    ? t.run(n)
                    : tP({ projectId: e, publishOptions: r, entryPoint: n });
            },
            [e, t, r, tP],
        )
    );
}
var tL = n(95264),
    t$ = n(616334),
    tq = n(259730),
    tD = n(789645),
    tF = n(812771),
    tO = n(58736);
n(743898);
var tz = n(333007),
    tG = n(621466),
    tU = n(775121),
    tB = n(989145),
    tK = n(866665),
    tH = n(81369),
    tV = n(826745),
    tW = n(34595),
    tX = n(470779);
function tY(e) {
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
            placeholder: p,
            label: x,
        } = e,
        {
            drafts: v,
            addFiles: j,
            pasteFiles: b,
            removeDraft: y,
            settled: k,
            takeRefs: C,
        } = (0, tW.FM)({ projectId: t, surface: "design", onUploadFile: m }),
        N = i.useRef(null),
        A = (d || v.length > 0) && k && !f,
        S = i.useCallback(() => {
            if (!A) return;
            let e = C();
            o(e.length > 0 ? e : void 0);
        }, [A, C, o]),
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
        className: w()(tX.M0, { [tX.ho]: I && !f, [tX.ET]: f }),
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
                              className: tX.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (j(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(tK.m, {
                              position: "bottom",
                              text: eM.intl.string(eE.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: tX.tY,
                                  onClick: () => N.current?.click(),
                                  "aria-label": eM.intl.string(eE.default.lgvqSB),
                                  children: (0, a.jsx)(tH.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tX.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(tV.y, {
                autoFocus: !0,
                rows: 1,
                className: tX.hF,
                value: s,
                placeholder: p ?? ("" === r ? eM.intl.string(eE.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": x ?? eM.intl.string(eE.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: f || !g ? void 0 : b,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), S());
                },
            }),
            v.length > 0
                ? (0, a.jsx)("div", {
                      className: tX.ZO,
                      children: v.map((e) => (0, a.jsx)(tW.Nl, { draft: e, onRemove: y }, e.localId)),
                  })
                : null,
        ],
    });
}
function tZ(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tQ(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tJ(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? tZ(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = tZ(e());
                l((e) => (tQ(e, t) ? e : t));
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
var t0 = n(876798),
    t1 = n(408278),
    t2 = n(48507),
    t3 = n(193885),
    t5 = n(744898),
    t4 = n(803656),
    t7 = n(241326),
    t6 = n(972213),
    t8 = n(661531);
function t9(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function ne(e, t, n) {
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
let nt = ne("red", t9(t8.A.unsafe_rawColors.RED_400), () => eM.intl.string(eE.default.tvXfjt)),
    nn = [
        nt,
        ne("yellow", t9(t8.A.unsafe_rawColors.YELLOW_300), () => eM.intl.string(eE.default.FYuaJ1)),
        ne("green", t9(t8.A.unsafe_rawColors.GREEN_360), () => eM.intl.string(eE.default["Vv+paS"])),
        ne("blue", t9(t8.A.unsafe_rawColors.BLUE_345), () => eM.intl.string(eE.default.k9b1QJ)),
        ne("white", t9(t8.A.unsafe_rawColors.WHITE), () => eM.intl.string(eE.default["1sOXwH"])),
    ];
function nl(e) {
    return nn.find((t) => t.id === e) ?? nt;
}
function nr(e) {
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
function na(e) {
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
function ni(e) {
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
function ns(e) {
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
let nu = em.map((e) => ns(Math.min(16, e + 3))),
    no = eh.map((e) => ns(Math.min(16, e / 2.5))),
    nc = [eE.default.jZtZUr, eE.default.cTQdD0, eE.default.J3ucEg],
    nd = {
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
            label: () => eM.intl.string(eE.default.oIZQbm),
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
            label: () => eM.intl.string(eE.default.ARNVr7),
        },
    };
function nf(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(tK.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: ew.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(t0.k, {
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
function nm(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(tK.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(t1.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function nh(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, u] = i.useState(!1),
        o = i.useCallback(() => u(!1), []),
        c = i.useCallback(() => u((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: ew.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: ew.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(o),
                  })
                : null,
        ],
    });
}
function ng(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: f } = n,
        m = nl(n.colorId),
        h = nd[o],
        g = eM.intl.string(eE.default.hUm825),
        p = eM.intl.string(eE.default.n5IA3a),
        x = eM.intl.string(eE.default.r5dX6t),
        v = eM.intl.string(eE.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: ew.t$,
        children: [
            (0, a.jsx)("div", {
                className: ew.NT,
                children: (0, a.jsx)(nf, {
                    icon: na,
                    label: eM.intl.string(eE.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => eb(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ew.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": eM.intl.string(eE.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(nf, {
                        icon: nr,
                        label: eM.intl.string(eE.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => eb(t, "move"),
                    }),
                    (0, a.jsx)(nf, {
                        icon: t2.x,
                        label: eM.intl.string(eE.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => eb(t, "text"),
                    }),
                    (0, a.jsx)(nh, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(nf, {
                                icon: t3.V,
                                label: g,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (eb(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            nu.map((n, l) =>
                                (0, a.jsx)(
                                    nf,
                                    {
                                        icon: n,
                                        label: eM.intl.string(nc[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            (ev(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), Z(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(nh, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(nf, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (eb(t, o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(nd).map((n) =>
                                (0, a.jsx)(
                                    nf,
                                    {
                                        icon: nd[n].icon,
                                        label: nd[n].label(),
                                        pressed: u === n,
                                        onClick: () => {
                                            (eb(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(nh, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(nf, {
                                icon: ni,
                                label: p,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (eb(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            no.map((n, l) =>
                                (0, a.jsx)(
                                    nf,
                                    {
                                        icon: n,
                                        label: eM.intl.string(nc[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            (ev(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), Z(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(nh, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(nm, { icon: m.icon, label: v, onClick: e }),
                        children: (e) =>
                            nn.map((n) =>
                                (0, a.jsx)(
                                    nf,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === m.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                ev(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: ew.Gz, role: "separator" }),
                    (0, a.jsx)(nm, {
                        icon: t5.e,
                        label: eM.intl.string((0, L.isMac)() ? eE.default["j/XmBQ"] : eE.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(nm, {
                        icon: t4.U,
                        label: eM.intl.string((0, L.isMac)() ? eE.default.C7jhpn : eE.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(nm, {
                        icon: t7.TrashIcon,
                        label: eM.intl.string(eE.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: ew.Gz, role: "separator" }),
                    (0, a.jsx)(nm, { icon: t6.XLargeIcon, label: eM.intl.string(eE.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
(n(323874), n(14289), n(35956));
let np = t8.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
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
async function nj(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = nv(e),
            r = nv(e);
        if (null == l || null == r) return null;
        return (nx(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let nb = new Map(),
    ny = new Map(),
    nk = (0, $.D)(() => ({ byMessageKey: {} }));
function nw(e, t) {
    let { [e]: n, ...l } = nk.getState().byMessageKey;
    nk.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function nC(e, t) {
    null == t ? nb.delete(e) : nb.set(e, t);
}
function nN(e) {
    return nb.get(e)?.() ?? Promise.resolve(null);
}
let nA = { dx: 0, dy: 0 },
    nS = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    nI = 1;
function nE(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        u = ek(s),
        { active: o } = en(s),
        c = (0, eD.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => ej(s);
    }, [s]);
    let d = u?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !o && Y(s);
    }, [s, d, o]),
    null == s || null == u || c)
        ? null
        : (0, a.jsx)(nM, { projectId: s, state: u, resolveIframe: r });
}
function nM(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = tJ(l),
        [s, u] = i.useState(null),
        [o, c] = i.useState(!1),
        [d, f] = i.useState(0),
        [m, h] = i.useState(null),
        [g, p] = i.useState(nA),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        C = i.useRef(0),
        { tool: N, history: A } = n,
        S = nl(n.colorId),
        I = "pick" !== N,
        E = "marker" === n.tool ? em[n.markerSize] : "eraser" === n.tool ? eh[n.eraserSize] : null,
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
        let t = await (0, to.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, tz.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, to.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (nC(t, T), () => nC(t, null)), [t, T]);
    let P = i.useCallback(
        (e) => {
            ((w.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === C.current &&
                    (C.current = requestAnimationFrame(() => {
                        C.current = 0;
                        let e = k.current,
                            t = w.current;
                        null != e &&
                            (e.toggleAttribute("data-visible", null != t),
                            null != t && (e.style.transform = `translate(${t.x}px, ${t.y}px)`));
                    })));
        },
        [r],
    );
    i.useEffect(() => () => cancelAnimationFrame(C.current), []);
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
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? ei(e, g.dx, g.dy) : e)),
            u = j.current;
        nx(a, null == u ? s : [...s, u], { width: r.width, height: r.height });
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
                id: `mark-${nI++}`,
                kind: "text",
                color: S.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (eu(n, r) && ey(t, { type: "commit", shape: n }), u(null));
        }, [t, S, r]),
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
                            l = null == M ? null : ed(M, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? M
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = ec(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => ec(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (eo(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = ec(e.from, n),
                                                                  r = ec(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => eo(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = ec(e.from, n),
                                                                  r = ec(e.to, n),
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
                                                              let t = ed(e, n);
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
                        if (!es(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nI++}`,
                                kind: "erase",
                                width: eh[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nI++}`,
                                kind: "marker",
                                color: S.value,
                                width: em[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nI++}`,
                                kind: N,
                                color: S.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                R();
            },
            [r, N, S, M, A.present, n.markerSize, n.eraserSize, L, $, R],
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
                ((b.current = null), p(nA), ey(t, { type: "move", id: e.id, dx: g.dx, dy: g.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && eu(n, r) ? ey(t, { type: "commit", shape: n }) : R());
        }, [t, r, g, R]),
        z = i.useCallback(() => ej(t), [t]),
        G = i.useCallback(() => ey(t, { type: "undo" }), [t]),
        U = i.useCallback(() => ey(t, { type: "redo" }), [t]),
        B = i.useCallback(() => ey(t, { type: "clear" }), [t]),
        K = i.useRef({ tool: N, selected: M, exit: z, undo: G, redo: U });
    if (
        (i.useLayoutEffect(() => {
            K.current = { tool: N, selected: M, exit: z, undo: G, redo: U };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, tG.Cw)((0, tG.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), ey(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = nS[s];
                null != u && (e.preventDefault(), eb(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (I) return (tU.A.disable(), () => tU.A.enable());
        }, [I]),
        null == r)
    )
        return null;
    let H = Math.max(8, r.left - d - 8),
        V = null == M ? null : ed(null == b.current ? M : ei(M, g.dx, g.dy), r);
    return (0, tz.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: ew.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: ew.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: ew.Ji,
                            "data-tool": N,
                            "data-interactive": I && !o ? "" : void 0,
                            "aria-label": eM.intl.string(eE.default["qlgN+X"]),
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
                                  className: ew.V$,
                                  "data-tool": N,
                                  "data-color": S.id,
                                  style: { width: E, height: E },
                                  "aria-hidden": !0,
                              }),
                        null == V
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: ew.r1,
                                  style: { left: V.x, top: V.y, width: V.width, height: V.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: ew.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: ew.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: ew.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: ew.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(tY, {
                          projectId: t,
                          anchor: "point",
                          at: { x: r.left + s.at.x * r.width, y: r.top + s.at.y * r.height },
                          bounds: r,
                          kind: "",
                          placeholder: eM.intl.string(eE.default["8gX1lw"]),
                          label: eM.intl.string(eE.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: s.value,
                          onChange: (e) => u((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: $,
                          onUploadFile: (e) => (0, tB.vX)(t, e),
                          onDismiss: q,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: ew.ej,
                    style: { left: H, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(ng, { projectId: t, state: n, onExit: z, onUndo: G, onRedo: U, onClear: B }),
                }),
            ],
        }),
        document.body,
    );
}
var n_ = n(308081),
    nT = n(689175),
    nP = n(683071),
    nR = n(65593),
    nL = n(218394),
    n$ = n(115982),
    nq = n(886540);
function nD(e) {
    return !(0, nq.BL)(e) && !0 !== e.stopRequested;
}
var nF = n(104317),
    nO = n(939249),
    nz = n(643278),
    nG = n(566424),
    nU = n(683063),
    nB = n(140735),
    nK = n(320448),
    nH = n(138212);
function nV(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: w()(nH.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: w()(nH.wx, null != n && nH.o5, i),
                children: [
                    (0, a.jsx)(u.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nW = n(148590);
function nX(e) {
    let { children: t } = e;
    return (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nY(e) {
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
        [g, p] = i.useState(l);
    g !== l && (p(l), h(!l));
    let x = i.useCallback(() => h((e) => !e), []),
        v = m ? ti.a : nK._,
        j = null != n || l;
    return (0, a.jsxs)(nV, {
        ...d,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: nW.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(nO.D, {
                                className: nW.L$,
                                onClick: x,
                                "aria-expanded": m,
                                "aria-controls": f,
                                "aria-label": m ? s : r,
                                children: (0, a.jsx)(v, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: m ? void 0 : nW.RG,
        "data-superseded": l ? "true" : void 0,
        children: [o, (0, a.jsx)("div", { id: f, className: w()(nW.rf, u), hidden: !m, children: c })],
    });
}
var nZ = n(883646);
let nQ = [];
function nJ(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: w()(nZ.xL, {
            [nZ.Vb]: "in_progress" === t,
            [nZ.cT]: "completed" === t,
            [nZ.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return eM.intl.string(eE.default.KvBdun);
                case "in_progress":
                    return eM.intl.string(eE.default["m5G9+S"]);
                case "unfinished":
                    return eM.intl.string(eE.default.lRpwhD);
                default:
                    return eM.intl.string(eE.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(o.y, {
                type: o.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nZ.Qd,
                itemClassName: nZ.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: nZ.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: nZ.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function n0(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : nQ), [n, t]),
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
        className: nZ.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    nU.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: nZ.MA,
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
                      className: nZ.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function n1(e) {
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
            ((t = (r ?? nQ).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nQ),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: nZ.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: w()(nZ.AS, { [nZ.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(nJ, { status: n }),
                            (0, a.jsx)(u.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nZ.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: nZ.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(n0, { agents: c.get(e.id) ?? nQ, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: nZ.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(nJ, { status: "pending" }),
                          (0, a.jsx)(u.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nZ.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: nZ.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function n2(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = eM.intl.formatToPlainString(eE.default["P/I+JW"], { completed: u, total: o }),
        d = eM.intl.formatToPlainString(eE.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(nY, {
        title: eM.intl.string(eE.default.RtzECX),
        meta: (0, a.jsx)(nX, { children: c }),
        superseded: s,
        showLabel: eM.intl.string(eE.default.RKyN9q),
        hideLabel: eM.intl.string(eE.default.xydHoj),
        className: nZ.Nr,
        bodyClassName: nZ.rf,
        beforeBody: r && !s ? (0, a.jsx)(nB.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(n1, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var n3 = n(308665),
    n5 = n(59678),
    n4 = n(903847);
function n7(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: o } = e,
        c = null != n,
        [d, f] = i.useState(n ?? "top"),
        [m, h] = i.useState(c),
        [g, p] = i.useState(!1),
        [x, v] = i.useState(!1),
        [j, b] = i.useState(c);
    (j !== c && (b(c), null != n ? (f(n), h(!0)) : (p(!1), v(!1))),
        i.useEffect(() => {
            if (c || !m) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [c, m]),
        i.useEffect(() => {
            if (!m || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [m, c]));
    let [y, k] = i.useState(!1),
        [C, N] = i.useState(!1),
        [A, S] = i.useState(x);
    (A !== x && (S(x), x ? k(!0) : N(!1)),
        i.useEffect(() => {
            if (x || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [x, y]),
        i.useEffect(() => {
            if (!y || !x) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => N(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [y, x]));
    let I = null != l && l.length > 0,
        E = i.useCallback(() => v((e) => !e), []);
    return m
        ? (0, a.jsxs)("div", {
              className: n4.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: w()(n4.vK, { [n4.ho]: g && c, [n4.ET]: !c }),
                      children: [
                          null == o
                              ? (0, a.jsx)("ol", {
                                    className: w()(n4.Rk, n5.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(nG.A, {
                                        glyph: (0, a.jsx)(n3.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(nO.D, {
                                    className: n4.pZ,
                                    onClick: o,
                                    "aria-label": eM.intl.string(eE.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: w()(n4.Rk, n5.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(nG.A, {
                                            glyph: (0, a.jsx)(n3.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(tK.m, {
                                    text: eM.intl.string(eE.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(nO.D, {
                                        className: n4.BO,
                                        onClick: E,
                                        "aria-expanded": x,
                                        "aria-label": eM.intl.string(eE.default.RtzECX),
                                        children: (0, a.jsx)(nz.ClipboardListIcon, {
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
                  y && I
                      ? (0, a.jsx)("div", {
                            className: w()(n4.vB, { [n4.pg]: x && C, [n4.ui]: !x }),
                            children: (0, a.jsx)(n2, {
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
var n6 = n(195880),
    n8 = n(287111),
    n9 = n(16619);
function le(e) {
    let t = (0, n9.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var lt = n(736553),
    ln = n(642785);
async function ll(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, ln.dv)(e),
        i = new lt.u();
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
var lr = n(890497),
    la = n(103557),
    li = n(29073),
    ls = n(590077);
function lu(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = le(e),
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
                C = i.useCallback((e) => {
                    u(e.slice(0, 10));
                }, []),
                N = d.trim(),
                A = n && !m && (w.length > 0 ? "" !== N : o.length > 0),
                S = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, n8.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          eM.intl.formatToPlainString(eE.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = eM.intl.formatToPlainString(eE.default.jZlNst, { targets: l });
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
                    if (0 === w.length) return void S(o);
                    (h(!0), p(!1));
                    let l =
                        ((t = tm.Ay.getProject(e)?.name ?? e),
                        (n = eM.intl.formatToPlainString(eE.default.ScoZLp, { name: t, projectId: e })),
                        `${N}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, n6.m)() }), x.current.set(e.projectId, t)),
                                ll(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...o, ...t.map((e) => ({ target: e, prompt: N }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && S(n);
                            return;
                        }
                        (c(n), u(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [A, S, o, e, w, N]),
                E = i.useCallback(() => {
                    ((v.current = !0), o.length > 0 && !m && S(o), l());
                }, [S, o, l, m]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: C,
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
        className: w()(li.nd, li.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: li.wx,
                children: [
                    (0, a.jsx)(u.E, {
                        tag: "span",
                        id: d,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: li.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(t1.K, {
                        icon: tD.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": eM.intl.string(eE.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ls.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eM.intl.string(eE.default.TbbzW5),
                          })
                        : (0, a.jsx)(lr.Z, {
                              label: eM.intl.string(eE.default["29gr8j"]),
                              placeholder: eM.intl.string(eE.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(la.f, {
                        label: eM.intl.string(eE.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? eM.intl.string(eE.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: li.qr,
                children: (0, a.jsx)("div", {
                    className: li.zt,
                    children: (0, a.jsx)(C.$, {
                        variant: "primary",
                        size: "sm",
                        text: eM.intl.string(eE.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var lo = n(658675),
    lc = n(22231),
    ld = n(900797),
    lf = n(123292),
    lm = n(691885),
    lh = n(360047);
function lg(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: u } = e,
        o = i.useMemo(() => lh.Hi.map((e) => ({ id: e, value: e, label: (0, lh.hU)(e) })), []);
    return (0, a.jsx)(lm.l, {
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
var lp = n(344587),
    lx = n(47167),
    lv = n(734057),
    lj = n(994500),
    lb = n(287809);
function ly(e) {
    return 0 === e.options.length && null == e.input;
}
let lk = {
    [e9.rbe.GUILD_TEXT]: "text",
    [e9.rbe.GUILD_VOICE]: "voice",
    [e9.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [e9.rbe.GUILD_STAGE_VOICE]: "stage",
    [e9.rbe.GUILD_FORUM]: "forum",
    [e9.rbe.GUILD_MEDIA]: "media",
};
function lw(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = lv.A.getChannel(t)?.type) ? void 0 : lk[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = lb.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let lC = { channel: "#", role: "@", user: "@", project: "", server: "" },
    lN = {
        channel: [eE.default["9+dfPT"], eE.default.pGSJqE],
        role: [eE.default["2VkCoD"], eE.default.c8YlX8],
        user: [eE.default.GZIAxl, eE.default["4bptbQ"]],
        project: [eE.default.twlOb6, eE.default.twlOb6],
        server: [eE.default.ZWXDeI, eE.default.ZWXDeI],
    };
function lA(e, t) {
    return eM.intl.string(lN[e][+!!t]);
}
var lS = n(155078);
function lI(e) {
    return e.options.some((e) => null != e.image);
}
let lE = [];
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
var l_ = n(548118),
    lT = n(300344),
    lP = n(614733),
    lR = n(904363),
    lL = n(950902),
    l$ = n(136722),
    lq = n(66834),
    lD = n(808728),
    lF = n(696451),
    lO = n(71393),
    lz = n(488926),
    lG = n(426035),
    lU = n(246338);
let lB = l$.kg(e9.xBc.VIEW_CHANNEL, e9.xBc.SEND_MESSAGES);
var lK = n(384017);
function lH(e) {
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
        return lw(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
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
        className: lK.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, a.jsx)(lr.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(lr.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function lV(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, lT.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: u, onChange: o } = e,
            c =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, h.bG)(
                    [tm.Ay],
                    () => {
                        let e = t ? tm.Ay.getProject(l) : null;
                        return null == e ? null : (0, lG.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || lF.Ay.isMember(r, n) || lq.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, h.bG)(
                    [lD.Ay, lF.Ay, lO.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lO.A.getGuild(r)?.safetyAlertsChannelId,
                            l = lD.Ay.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, lU.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && lF.Ay.isMember(r, n))
                            return lz.$3({ permission: lB, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? l$.BY;
                        return l$.X8(s, lB) ? null : i;
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
                            o(((e = []), lw("channel", [c.id], () => (0, lx.m1)(c, lb.default, lj.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== d.current ? (f.current = !0) : null == c && ((f.current = !0), o([], r));
            }
        }, [c, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(lH, { ...r, guildId: n, options: s, placeholder: lA("channel", !0 === r.question.multi_select) });
}
function lW(e) {
    let { guildId: t, ...n } = e,
        l = (0, lR.A)(t);
    return (0, a.jsx)(lH, { ...n, guildId: t, options: l, placeholder: lA("role", !0 === n.question.multi_select) });
}
function lX(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, lP.A)(t);
    return (0, a.jsx)(lH, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lA("user", !0 === n.question.multi_select),
    });
}
function lY(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = le(t),
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
    return 0 === s.length ? n : (0, a.jsx)(lH, { ...l, options: s, placeholder: lA("project", !1) });
}
function lZ(e) {
    let t = e.target;
    (0, tG.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lQ(e) {
    let { fallback: t, ...n } = e,
        l = (0, n9.z9)("ConjureClarificationEntityPicker"),
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
              onFocus: lZ,
              onMouseUp: lZ,
              children: (0, a.jsx)(lH, { ...n, options: r, placeholder: lA("server", !1) }),
          });
}
function lJ(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lL.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lY, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(lQ, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lV, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lW, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lX, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var l0 = n(87221),
    l1 = n(26430),
    l2 = n(750943),
    l3 = n(173936),
    l5 = n(95477),
    l4 = n(256905),
    l7 = n(490707),
    l6 = n(907702);
function l8(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = (0, l7._)(t, n),
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return o
        ? (0, a.jsxs)("span", {
              className: w()(l6.Gt, l6.b6),
              children: [
                  (0, a.jsx)(l0.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(u.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: eM.intl.string(eE.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: w()(l6.Gt, { [l6.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: l6.Sl,
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
            multi: i,
            selected: s,
            disabled: o,
            reachable: c,
            tabbable: d,
            onPick: f,
            onView: m,
            onArrow: h,
            onMeasured: g,
            onRemove: p,
        } = e,
        x = eM.intl.formatToPlainString(eE.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: w()(l6.Vs, { [l6.Q9]: s, [l6.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(nO.D, {
                className: l6.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": eM.intl.formatToPlainString(eE.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: l6.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(l8, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: l6.Gt }),
                            (0, a.jsx)("span", {
                                className: l6.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(lo.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(tI.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: l6.pG,
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
            null != p
                ? (0, a.jsx)("span", {
                      className: l6.B4,
                      children: (0, a.jsx)(tK.m, {
                          text: eM.intl.string(eE.default.HQEXJM),
                          children: (0, a.jsx)(t1.K, {
                              icon: t7.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": eM.intl.string(eE.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: l6.B4,
                        children: (0, a.jsx)(tK.m, {
                            text: eM.intl.string(eE.default["4/eeDD"]),
                            children: (0, a.jsx)(t1.K, {
                                icon: l1._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": x,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function re(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: u = !0, onPick: o, own: c } = e,
        d = !0 === l.multi_select,
        { options: f } = l,
        m = f.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        g = i.useRef(new Map()),
        [p, x] = i.useState(null),
        v = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => r.includes(e.id)) ?? f[0])?.id,
        j = i.useCallback(
            (e) => {
                let t = f.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, tB.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, l4.R)({
                                items: e.map((e, n) => {
                                    let l,
                                        r = g.current.get(t[n].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: t[n].label,
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
            [f, n],
        ),
        b = i.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || s || o(l));
            },
            [s, d, o, f],
        ),
        y =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: eM.intl.string(eE.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: l6.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: h,
                className: w()(l6.fF, "gallery" === m ? l6.nV : l6.nM, { [l6.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": m,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, a.jsx)(
                            l9,
                            {
                                projectId: n,
                                option: e,
                                multi: d,
                                selected: r.includes(e.id),
                                disabled: s,
                                reachable: u,
                                tabbable: d || e.id === v,
                                onPick: (e) => {
                                    (x(e.id), o(e));
                                },
                                onView: j,
                                onArrow: b,
                                onMeasured: (t) => g.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != y
                        ? (0, a.jsx)(
                              l9,
                              {
                                  projectId: n,
                                  option: y,
                                  multi: d,
                                  selected: c.selected,
                                  disabled: s,
                                  reachable: u,
                                  tabbable: !0,
                                  onPick: c.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: c.onRemove,
                              },
                              y.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(rt, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: u,
                uploadText: eM.intl.string(/\bicons?\b/i.test(l.question) ? eE.default.qU4WN6 : eE.default.cbMDDB),
            }),
        ],
    });
}
function rt(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
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
        className: l6.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: l6.QJ,
                children: [
                    (0, a.jsx)(C.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: l2.X,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => o.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    c
                        ? null
                        : (0, a.jsx)(C.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: l3.LinkIcon,
                              text: eM.intl.string(eE.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => d(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: l6.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, n8.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            c
                ? (0, a.jsxs)("div", {
                      className: l6.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: l6.Hs,
                              children: (0, a.jsx)(l5.k, {
                                  label: eM.intl.string(eE.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: eM.intl.string(eE.default.AVhvn8),
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
                              className: l6.gd,
                              children: [
                                  (0, a.jsx)(C.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eM.intl.string(eE.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === f.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lf.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: eM.intl.string(eE.default.eXZL4X),
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
function rn(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(nO.D, {
        className: w()(lK.uK, { [lK.ue]: l, [lK.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": eM.intl.formatToPlainString(d ? eE.default["2p6UFz"] : eE.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: lK.dy, children: (0, a.jsx)(lo.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: lK.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lK.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lK.l8,
                        children: (0, a.jsx)(u.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lK.ed,
                            children: t.label,
                        }),
                    }),
                    f
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
                      className: lK.rM,
                      children: eM.intl.string(eE.default.zku6r1),
                  })
                : null,
        ],
    });
}
function rl(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return lI(n)
        ? (0, a.jsx)(re, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      rn,
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
let rr = [],
    ra = [];
function ri(e) {
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
        f = !0 === n.multi_select;
    return (0, a.jsxs)("div", {
        className: w()(lK.Ge, lK.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            f
                ? (0, a.jsx)(u.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: lK.aK,
                      children: eM.intl.string(eE.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(rl, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lM(o, c),
            }),
            lI(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: lK.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lK.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lc.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: w()(lK.Pu, lK.es), children: d }),
                      ],
                  }),
        ],
    });
}
function rs(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: o,
            onBack: c,
            backText: d,
            hideSubmit: f = !1,
            headingLines: m = 5,
        } = e,
        [h, g] = i.useState({}),
        [p, x] = i.useState({}),
        [v, j] = i.useState({}),
        [b, y] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [k, N] = i.useState({}),
        [A, S] = i.useState({}),
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
        ee = p[W.id] ?? "",
        et = !0 === W.multi_select,
        en = lI(W),
        el = et ? (v[W.id] ?? rr) : ((t = h[W.id]), t?.kind === "option" ? [t.optionId] : lE),
        er = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = eM.intl.string(eE.default.wTsP5l),
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
                        if (u) return lM(h, f(i));
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
                                    null != l && (0, tB.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, tB.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                                error: { source: "upload", text: eM.intl.string(eE.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, tB.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : eM.intl.string(eE.default.l79PMc),
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
        { text: es, phase: eu } = (0, lp.Q)(W.question),
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
    let ed = eM.intl.string(Z ? eM.t.iTcuma : eM.t.dcl9MQ),
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
                                              return (0, lh.Ol)(n, e, l);
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
                x((e) => ({ ...e, [W.id]: "" }));
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
        ew = b[W.id] ?? ra,
        eC = i.useMemo(() => {
            var e, t;
            let n;
            return null != W.input
                ? ((e = W.input),
                  (t = k[W.id]),
                  (n = ee.trim()),
                  {
                      kind: "entities",
                      entities: ew,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...ew.map((t) => (t.name.startsWith(lC[e]) ? t.name : `${lC[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [ee, k, ew, W.id, W.input]),
        eN = i.useCallback(
            (e, t) => {
                (y((t) => ({ ...t, [W.id]: e })), N((e) => ({ ...e, [W.id]: t })));
            },
            [W.id],
        ),
        eA = i.useCallback(() => E(!0), []),
        eS = i.useCallback(() => E(!1), []),
        eI = er.controlsFor(W, K),
        e_ = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eC, ek, ee),
            [ee, ek, eC],
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
        eD = e_ ?? (null == eC && null == ek ? (h[W.id] ?? null) : null),
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
                    (0, tG.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tG.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tG.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ej
                            ? (e.preventDefault(), (ev ?? ex)())
                            : "ArrowRight" === e.key && eF && (e.preventDefault(), ez())));
            },
            [ev, ej, eF, ex, ez],
        ),
        eU = en
            ? null
            : (0, a.jsxs)("div", {
                  className: lK.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: lK.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(lc.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(tV.y, {
                          value: ee,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              x((e) => ({ ...e, [W.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eT());
                          },
                          placeholder: eM.intl.string(ly(W) ? eE.default.yLN1x6 : eE.default["tOC+tn"]),
                          "aria-label": eM.intl.formatToPlainString(eE.default["4JeYPB"], { question: W.question }),
                          disabled: K,
                          rows: 1,
                          className: lK.Pu,
                          "data-conjure-clarification-other": W.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: w()(lK.$O, { [lK.fI]: eP && !eL, [lK.Oh]: eL }),
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
                className: lK.rf,
                style: null == $ ? void 0 : { height: $.heading + $.rows },
                "data-moving": D ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: O,
                        className: lK.wx,
                        children: [
                            (0, a.jsx)(u.E, {
                                ref: G,
                                tag: "span",
                                id: `${W.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: Z ? void 0 : m,
                                className: w()(li.TK, lK.R_, { [lK.TB]: "exit" === eu, [lK.JU]: "enter" === eu }),
                                children: es,
                            }),
                            ec || Z
                                ? (0, a.jsx)("div", {
                                      className: li.Q7,
                                      children: (0, a.jsx)(tK.m, {
                                          text: ed,
                                          children: (0, a.jsx)(t1.K, {
                                              icon: Z ? ld.t : ti.a,
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
                                : (0, a.jsx)(nO.D, {
                                      className: w()(li.gb, li.Q7),
                                      onClick: eq,
                                      "aria-label": eM.intl.string(eE.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(tD.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: lK.Cg,
                        style: null == $ ? void 0 : { insetBlockStart: $.heading },
                        children: (0, a.jsxs)("div", {
                            className: lK.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: U,
                                    className: lK.Ge,
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
                                                  className: lK.aK,
                                                  children: eM.intl.string(eE.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(rl, {
                                            projectId: n,
                                            question: W,
                                            selected: el,
                                            disabled: K,
                                            onPick: (e) =>
                                                et
                                                    ? j((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [W.id]:
                                                                  ((n = t[W.id] ?? rr),
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
                                            own: eI,
                                        }),
                                        null != W.input
                                            ? (0, a.jsx)(lJ, {
                                                  projectId: n,
                                                  question: W,
                                                  value: ew,
                                                  disabled: K,
                                                  onChange: eN,
                                                  onFocus: eA,
                                                  onBlur: eS,
                                                  fallback: !1 === W.allow_custom ? eU : null,
                                              })
                                            : null,
                                        !0 === W.link && ew.length > 0 && null == A[W.id]
                                            ? (0, a.jsx)("div", {
                                                  className: lK.X_,
                                                  children: (0, a.jsx)(lf.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: eM.intl.string(eE.default.eCzCxC),
                                                      disabled: K,
                                                      onClick: () => S((e) => ({ ...e, [W.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === W.link && ew.length > 0 && null != A[W.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: lK.$y,
                                                  onFocus: eA,
                                                  onBlur: eS,
                                                  children: [
                                                      (0, a.jsx)(u.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: eM.intl.string(eE.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(lg, {
                                                          label: eM.intl.string(eE.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: A[W.id] ?? "auto",
                                                          disabled: K,
                                                          onChange: (e) => S((t) => ({ ...t, [W.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != W.note
                                            ? (0, a.jsx)(u.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lK.aK,
                                                  children: W.note,
                                              })
                                            : null,
                                        !1 === W.allow_custom ? null : eU,
                                    ],
                                }),
                                null == R
                                    ? null
                                    : (0, a.jsx)(
                                          ri,
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
            H > 1 || et || en || null != W.input || null != c || ly(W)
                ? (0, a.jsxs)("div", {
                      className: li.qr,
                      children: [
                          (0, a.jsx)(u.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  H > 1
                                      ? eM.intl.formatToPlainString(eE.default.yzYUjq, { index: V + 1, total: H })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: li.zt,
                              children: [
                                  ej
                                      ? (0, a.jsx)(lf.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: d ?? eM.intl.string(eE.default.Pk5lfA),
                                            onClick: ev ?? ex,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  f
                                      ? null
                                      : (0, a.jsx)(C.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eO
                                                ? (o ?? eM.intl.string(eM.t.geKm7t))
                                                : eM.intl.string(eE.default.w1nRmT),
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
var ru = n(557744),
    ro = n(223347),
    rc = n(894443),
    rd = n(525530),
    rf = n(708679);
function rm(e) {
    return (0, h.bG)([tm.Ay], () => tm.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let rh = "scope-setup:q0",
    rg = `${rh}:0`,
    rp = `${rh}:1`;
function rx(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, h.bG)([tm.Ay], () => tm.Ay.getProject(e), [e]),
                n = (0, n9.z9)("ConjureScopeSetupCard"),
                [l, r] = i.useState(null),
                [a, s] = i.useState(!1),
                [u, o] = i.useState(null),
                c = t?.install_scope_setup,
                d = "server" === l || (null == l && "choose_server" === c),
                f = t?.guild_id,
                m = i.useMemo(
                    () =>
                        d
                            ? {
                                  id: n.length > 0 ? "server-setup" : "server-setup-empty",
                                  questions: [
                                      {
                                          id: "server-setup:q0",
                                          question: eM.intl.string(
                                              n.length > 0 ? eE.default.ZWXDeI : eE.default["u5+Qhu"],
                                          ),
                                          recommendation_reason: "",
                                          allow_custom: !1,
                                          options:
                                              n.length > 0
                                                  ? []
                                                  : [{ id: rg, label: eM.intl.string(eE.default.qLYOpH) }],
                                          ...(0, rf.XU)(n, f),
                                      },
                                  ],
                              }
                            : {
                                  id: "scope-setup",
                                  questions: [
                                      {
                                          id: rh,
                                          question: eM.intl.string(eE.default.ickKBI),
                                          recommendation_reason: "",
                                          allow_custom: !1,
                                          options: [
                                              {
                                                  id: rg,
                                                  label: eM.intl.string(eE.default.qLYOpH),
                                                  detail: eM.intl.string(eE.default.QSKvUE),
                                              },
                                              {
                                                  id: rp,
                                                  label: eM.intl.string(eE.default.QV5C7b),
                                                  detail: eM.intl.string(eE.default["ZzHR4/"]),
                                              },
                                          ],
                                      },
                                  ],
                              },
                    [d, n, f],
                );
            if (null == c) return null;
            if (null == t || !(0, tm.PV)(t))
                return { clarification: (0, rf.YI)(m), readOnly: !0, hideSubmit: !0, failure: null };
            async function g(t, n) {
                (s(!0), o(null));
                try {
                    await (0, rf.JN)(e, t, n);
                } catch (e) {
                    (s(!1), o(null != n && 403 === e.status ? "server" : "failed"));
                }
            }
            return {
                clarification: m,
                readOnly: !1,
                onSubmit: a
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0];
                          if (null == n) return;
                          let l = n.entities?.[0]?.id;
                          n.option_ids.includes(rp) ? r("server") : null != l ? g("guild", l) : g("user", null);
                      },
                submitText: eM.intl.string(eM.t["cY+Oob"]),
                onBack: d && !a ? () => r("scope") : void 0,
                hideSubmit: !1,
                failure: null == u ? null : eM.intl.string("server" === u ? eE.default["XXKd+7"] : eE.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, a.jsx)(rs, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(
                        rs,
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
function rv(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: a, feature: s } = l,
                u = (0, h.bG)([tm.Ay], () => tm.Ay.getProject(t), [t]),
                o = (0, n9.z9)("ConjureScopeSwitchCard"),
                [c, d] = i.useState(!1),
                [f, m] = i.useState(null),
                g = u?.guild_id,
                p = i.useMemo(() => {
                    let [e] = n.questions,
                        t = eM.intl.formatToPlainString("guild" === a ? eE.default["jh/iy+"] : eE.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === a
                                ? { ...e, question: t, allow_custom: !1, ...(0, rf.XU)(o, g) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: eM.intl.string(eE.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, o, g, a]);
            if (null == u || !(0, tm.PV)(u))
                return { clarification: (0, rf.YI)(p), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (d(!0), m(null));
                try {
                    await (0, rf.yN)(t, n.id, a, e);
                } catch (e) {
                    (d(!1), m(409 === e.status ? "locked" : "failed"));
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
                submitText: eM.intl.string("guild" === a ? eE.default.Ua7yKM : eE.default.TVRkVh),
                onBack: c
                    ? void 0
                    : function () {
                          (m(null), (0, rf.RW)(t) ? r() : m("failed"));
                      },
                backText: eM.intl.string("guild" === a ? eE.default["4WnIqd"] : eE.default["am+p7p"]),
                hideSubmit: "user" === a,
                failure: null == f ? null : eM.intl.string("locked" === f ? eE.default.irUT0N : eE.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, a.jsx)(
              rs,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(
                      rs,
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
let rC = new Set(),
    rN = new Set();
function rA(e) {
    return (
        rN.add(e),
        () => {
            rN.delete(e);
        }
    );
}
function rS() {
    return i.useSyncExternalStore(rA, () => rC);
}
function rI(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, nq.BL)(i)) continue;
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
            done: o,
            superseded: c,
            summary: d,
            markSaved: f,
        } = (function (e, t, n) {
            let l = rS(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!rC.has(n)) for (let e of ((rC = new Set([...rC, n])), rN)) e();
                    } else a(!0);
                }, [n]),
                o = (0, h.bG)([rj.A], () => rE(t, rj.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, h.bG)([g.A], () => null != n && rI(g.A.getMessages(e)).has(n), [e, n]),
                summary: (0, h.yK)(
                    [rj.A, lv.A],
                    () => {
                        var n;
                        let l = rj.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => lv.A.getChannel(e)?.name ?? null),
                              rw(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: eM.intl.formatToPlainString(eE.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return eM.intl.string(eE.default.CJq1rY);
                                                      case "checkbox":
                                                          return eM.intl.string(
                                                              !0 === t ? eE.default.nXtpn3 : eE.default["0vfaMW"],
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
                                                                      : eM.intl.string(eE.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? eM.intl.string(eE.default.nEv677)
                                                              : eM.intl.string(eE.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return eM.intl.string(eE.default.Fw9G9A);
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
        m = null == r && o;
    if (c && !m)
        return (0, a.jsx)("article", {
            className: rR.Mk,
            children: (0, a.jsx)(u.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: eM.intl.string(eE.default["+uXDk+"]),
            }),
        });
    if (m)
        return (0, a.jsxs)("article", {
            className: rR.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rR.Ol,
                    children: [
                        (0, a.jsx)(rM.y, { size: "xs", color: t8.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
                        (0, a.jsx)(u.E, {
                            variant: "text-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: eM.intl.string(eE.default.AxBLLy),
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
    let p = n.keys?.length === 1 && n.keys[0] === r_.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : eM.intl.string(eE.default.XuOf5s);
    return (0, a.jsx)(rP.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: s,
        onSaved: f,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: l, submit: i } = e;
            async function s(e) {
                (e.preventDefault(), await i());
            }
            let o = (0, a.jsx)(C.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: eM.intl.string(eE.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: rR.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: eM.intl.string(eE.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, a.jsx)(rT.A, { text: x, variant: "text-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rR.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: w()(li.nd, li.jx),
                      "aria-label": eM.intl.string(eE.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: li.wx,
                              children: [
                                  (0, a.jsx)(u.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: li.TK,
                                      children: eM.intl.string(eE.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(nO.D, {
                                      className: w()(li.gb, li.Q7),
                                      onClick: r,
                                      "aria-label": eM.intl.string(eE.default["iq+Pte"]),
                                      children: (0, a.jsx)(tD.P, {
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
                                  null != x
                                      ? (0, a.jsx)(rT.A, { text: x, variant: "text-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: li.qr,
                              children: [
                                  (0, a.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: rR.xE,
                                      children: eM.intl.string(eE.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: li.zt,
                                      children: [
                                          (0, a.jsx)(C.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: eM.intl.string(eE.default["9J3OG8"]),
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
var r$ = n(874421),
    rq = n(932111),
    rD = n(404373),
    rF = n(89222);
function rO(e) {
    return "" !== rF.A.getDraft(e).trim();
}
var rz = n(29080);
function rG(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, n$.B4)(r),
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
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, n$.Lf)(r) }),
    };
}
var rU = n(62617),
    rB = n(780171);
let rK = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rH = {
        snail: () => eE.default.ABeVsS,
        goat: () => eE.default.dhXay8,
        frog: () => eE.default.SHeweG,
        bunny: () => eE.default.FytFE1,
        cat: () => eE.default["5c+sHs"],
        caterpillar: () => eE.default["/FYcne"],
        butterfly: () => eE.default["Ib/AxK"],
        dog: () => eE.default.zDjBR1,
        spider: () => eE.default["6sxyrN"],
        bee: () => eE.default.cVtefg,
        bot: () => eE.default.MjCw0v,
    },
    rV = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, rU.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rU.Z)(),
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
                        () => (0, rU.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rU.Z)(),
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
                        () => (0, rU.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rU.Z)(),
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
                        () => (0, rU.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rU.Z)(),
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
                        () => (0, rU.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rU.Z)(),
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
                        () => (0, rU.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rU.Z)(),
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
                        () => (0, rU.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rU.Z)(),
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
                        () => (0, rU.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rU.Z)(),
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
                        () => (0, rU.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rU.Z)(),
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
                        () => (0, rU.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rU.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rB.u, tint: "var(--illo-purple-40)" },
    };
function rW(e) {
    return { ...rV[e], name: eM.intl.string(rH[e]()) };
}
function rX(e) {
    return rK.includes(e) ? rW(e) : void 0;
}
function rY(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rK.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rK[(t + n) % rK.length]);
            }),
            l
        );
    })(e))
        t.set(n, rW(l));
    return t;
}
var rZ = n(615839);
function rQ(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : eM.intl.string(eE.default.KcFvbo);
}
var rJ = n(60160),
    r0 = n(16634);
function r1(e) {
    let t = (0, n$.SY)(e.steps);
    return null != t ? (0, n$.WQ)(t) : rQ(e.task);
}
function r2(e) {
    let t = rY(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rX(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rQ(e.task),
                      todoId: e.task.todoId,
                      line: r1(e),
                  },
              ];
    });
}
function r3(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, n$.SY)(n.steps),
        d = o
            ? r1(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rQ(e));
                  switch (e.status) {
                      case "failed":
                          return eM.intl.formatToPlainString(eE.default.YrVgOf, { task: t });
                      case "cancelled":
                          return eM.intl.formatToPlainString(eE.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return eM.intl.formatToPlainString(eE.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rZ.MB)(e.durationMs),
                              });
                          return eM.intl.formatToPlainString(eE.default.nmI9Uh, { task: t });
                      default:
                          return eM.intl.formatToPlainString(eE.default.nmI9Uh, { task: t });
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
                                    className: n5.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            r0.A,
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
                                      className: n5.iq,
                                      children: (0, a.jsx)(rJ.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(nG.A, {
        glyph: (0, a.jsx)(nU.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rQ(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: n5.nC,
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
    r4 = n(643210),
    r7 = n(648127),
    r6 = n(372795),
    r8 = n(163897);
let r9 = "conjure-browser-viewer";
function ae(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, h.yK)(
            [r4.A],
            () =>
                n.flatMap((e) => {
                    let n = r4.A.getTab(t, e);
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
        className: r8.kR,
        "aria-label": eM.intl.string(eE.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(at, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function at(e) {
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
        c = (0, eD.useHasModalOpen)(r9),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, r7.i)(l.session);
    return (0, a.jsxs)(nO.D, {
        innerRef: s,
        className: w()(r8.Nr, h && r8.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, eD.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: r9 },
                )
            );
        },
        "aria-label": eM.intl.formatToPlainString(eE.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: r8.Gt,
                children: [
                    (0, a.jsx)(r6.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: r8.Ji,
                        "aria-label": eM.intl.formatToPlainString(eE.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: r8.qf,
                              children: (0, a.jsx)(r5.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: r8.HS,
                              children: (0, a.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: eM.intl.string(eE.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: r8.pG,
                children: [
                    (0, a.jsx)("span", { className: w()(r8.W9, h && r8.oM) }),
                    (0, a.jsx)(u.E, {
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
var an = n(268409);
let al = new WeakMap(),
    ar = new WeakMap();
function aa(e) {
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
        u = (0, h.yK)(
            [g.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = al.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = ar.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), ar.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (al.set(e, n), n);
                })(g.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: an.h, children: (0, a.jsx)(ae, { projectId: t, sessionIds: u }) });
}
var ai = n(469393);
function as(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, eF.lG)(t.authored_at);
    return (0, a.jsx)(nV, {
        title: eM.intl.string(eE.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: ai.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ai.z,
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
                    ? (0, a.jsx)(C.$, {
                          variant: "secondary",
                          size: "sm",
                          text: eM.intl.string(eE.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var au = n(237528),
    ao = n(714917),
    ac = n(463660),
    ad = n(970211);
function af(e) {
    let { projectId: t } = e,
        {
            src: n,
            blurred: l,
            handleError: r,
        } = (function (e, t) {
            let n = (0, h.bG)([ao.A], () => (null != e ? ao.A.getBackground(e) : null)),
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
                m = i.useCallback(() => {
                    f === d && u(d);
                }, [f, d]);
            return { src: null == e || null != n || o ? f : null, blurred: n?.blur !== !1, handleError: m };
        })(t, "/assets/7cec34541705c795.webp");
    return null == n
        ? null
        : (0, a.jsx)("img", { className: w()(ad.L, { [ad.T]: l }), src: n, alt: "", "aria-hidden": !0, onError: r });
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
function aC(e) {
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
        [eV.q7.APP_CHANNEL]: eE.default["3/aHX6"],
        [eV.q7.VOICE_CHANNEL]: eE.default["3/aHX6"],
        [eV.q7.ACTIVITY]: eE.default["3/aHX6"],
        [eV.q7.OVERLAY]: eE.default["rPpf5/"],
        [eV.q7.PROFILE_WIDGET]: null,
        [eV.q7.AUTOMOD]: null,
        [eV.q7.BOT]: null,
        [eV.q7.APPLICATION_COMMANDS]: null,
    },
    aS = [eV.q7.ACTIVITY, eV.q7.APP_CHANNEL, eV.q7.VOICE_CHANNEL, eV.q7.OVERLAY];
function aI(e) {
    return aS.find((t) => ah(e, t)) ?? null;
}
let aE = { mana: eE.default.d9bW4W, custom: eE.default.AV87WX },
    aM = 1920 / 1018;
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
    aZ = n(889227),
    aQ = n(427262);
let aJ = new aY.nA({ id: "1337", guild_id: "1337", type: e9.rbe.GUILD_TEXT, name: "preview" });
function a0(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, h.bG)([lb.default], () => lb.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, aH.nj)(new aZ.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let a1 = /^@\S+/;
var a2 = n(775602);
let a3 = [eE.default["3eTjcV"], eE.default.l3j5nS];
var a5 = n(97808),
    a4 = n(778712),
    a7 = n(486020),
    a6 = n(46054),
    a8 = n(200700);
let a9 = {
        alert: { label: () => eM.intl.string(eE.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => eM.intl.string(eE.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => eM.intl.string(eE.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => eM.intl.string(eE.default.RGzFNK), blockedStyle: !1 },
    },
    ie = {
        blocked: { label: () => eM.intl.string(eE.default.YdnZ8q), tone: "red" },
        alert: { label: () => eM.intl.string(eE.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => eM.intl.string(eE.default.RGzFNK), tone: "green" },
    },
    it = ["blocked", "alert", "allowed"],
    il = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function ir(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : eM.intl.formatToPlainString(eM.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, a8.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? eM.intl.formatToPlainString(eM.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? eM.intl.formatToPlainString(eM.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? eM.intl.formatToPlainString(eM.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? eM.intl.formatToPlainString(eM.t.opVZ9q, { mins: n / 60 })
                                      : eM.intl.formatToPlainString(eM.t["4zv/jq"], { secs: n })),
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
        className: w()(ia.nM, { [w()(ia.HV, ii.DX)]: s }),
        children: [
            (0, a.jsx)(nB.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: ia.my,
                children: (0, a.jsx)(a5.eu, {
                    src: (0, a7.AE)(void 0, void 0),
                    size: a4._3.SIZE_24,
                    "aria-label": eM.intl.string(eE.default["1yI0xV"]),
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
    iC = n(798819);
function iN(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: w()(iC.item, iC.labelContainer, iC.colorDefault, {
            [iC.focused]: !0 === t.highlighted,
            [iC.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: iC.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: iC.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: w()(iC.label, iw.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: iC.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: iC.icon }),
                  })
                : null,
        ],
    });
}
function iA(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: w()(t, iw.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: eM.intl.string(eM.t["5IEsGx"]), icon: ip.W, muted: !0 }
                : { label: eM.intl.string(eM.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: w()(iC.menu, iw.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: iC.scroller,
            children: [
                (0, a.jsx)(iN, { item: s }),
                (0, a.jsx)("div", { className: iC.separator }),
                (0, a.jsx)(iN, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var iS = n(381941);
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
        f,
        m,
        g,
        { projectId: p, exchanges: x } = e,
        {
            items: v,
            botIcon: j,
            appIconSrc: b,
        } = ((t = (0, h.bG)([lb.default], () => lb.default.getCurrentUser())),
        (n = (0, h.bG)([tm.Ay], () => tm.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, h.bG)([aV.A], () => aV.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? eM.intl.string(eE.default.JEYq8M)),
        (o = (0, h.bG)([lb.default], () => (null != l ? lb.default.getUser(l) : void 0), [l])),
        (d = a0("31337", s, { bot: !0, enabled: !(c = o?.bot === !0) })),
        (f = c ? o : d),
        (m = a0("31338", eM.intl.string(eE.default["9iAOsw"]), { discriminator: "0003" })),
        (g = a0("31339", (0, aQ.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == f || null == m
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
                                              type: l ?? e9.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: e9.cmJ.SENT,
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
                                              messageType: e9.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: e9.lAJ.CONTEXT_MENU_COMMAND,
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
                              x,
                              { bot: f, currentUser: t, viewer: g, member: m },
                              {
                                  targetMessage: eM.intl.string(eE.default["y+QYes"]),
                                  memberMessage: eM.intl.string(eE.default.BUTRDc),
                              },
                          ),
                [x, f, t, g, m],
            ),
            botIcon: r,
            appIconSrc: r ?? f?.getAvatarURL(void 0, 80),
        });
    if (0 === v.length) return null;
    let y = aJ.name;
    return (0, a.jsxs)("div", {
        className: iw.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: iw.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ih.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: y }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: w()(iw.TE, `group-spacing-${iS.ES}`),
                children: v.map((e) => {
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
                                    avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
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
                                                      label: eM.intl.string(eM.t.lfIHs4),
                                                      icon: ig.n,
                                                      onClick: iI,
                                                  }),
                                                  (0, a.jsx)(iy.qv, {
                                                      label: eM.intl.string(eM.t["5IEsGx"]),
                                                      icon: ip.W,
                                                      onClick: iI,
                                                  }),
                                                  (0, a.jsx)(iy.qv, {
                                                      label: eM.intl.string(eM.t["UKOtz+"]),
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
                                          children: (0, a.jsx)(iA, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: b,
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
                        children: eM.intl.formatToPlainString(eM.t["8lzR/R"], { channel: `#${y}` }),
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(aw());
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
    frame: eE.default.Z2bt4u,
    overlay_widget: eE.default["0mGHfU"],
    user_widget: eE.default.Jipr29,
    bot: eE.default.EbvC13,
    commands: eE.default.EbvC13,
    automod: eE.default.tiMvei,
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
        className: w()(iO.e7, l),
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
                className: w()(iO.Vo, iO.G),
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
        c = eM.intl.string(s ? eE.default.BM4Ymz : iF[t.kind]);
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
                children: [(0, a.jsx)(I.D, { variant: "heading-lg/semibold", color: "text-strong", children: r }), s],
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
                                let n = t.map(aw()).join("|");
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
                                                let n = eM.intl.string(eE.default["6/3tGY"]),
                                                    l = [];
                                                if (t.surfaces.includes(eV.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(eV.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(eV.q7.VOICE_CHANNEL),
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
                                                            caption: eM.intl.formatToPlainString(eE.default.w8F5sy, {
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
                                                ...(n.usableInVoice ? [eM.intl.string(eE.default["4oGg2h"])] : []),
                                                ...(n.launchableAnywhere ? [eM.intl.string(eE.default.BTGCfR)] : []),
                                            ];
                                            return (
                                                r.length > 0 &&
                                                    l.push(
                                                        (0, a.jsx)(
                                                            iG,
                                                            {
                                                                caption: eM.intl.string(eE.default.MY6UGJ),
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
                                                                  caption: eM.intl.string(eM.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(iK, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...[
                                                    {
                                                        key: "permissions",
                                                        caption: eE.default["2UbW6r"],
                                                        names: e.bot_permissions,
                                                    },
                                                    {
                                                        key: "intents",
                                                        caption: eE.default["7TKfpj"],
                                                        names: e.privileged_intents,
                                                    },
                                                ]
                                                    .flatMap((e) => {
                                                        let { key: t, caption: n, names: l } = e;
                                                        return null != l && l.length > 0
                                                            ? [
                                                                  {
                                                                      key: t,
                                                                      caption: eM.intl.string(n),
                                                                      labels: l.map(aC),
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
    iZ = n(58216),
    iQ = n(27399);
function iJ(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, h.bG)([lb.default], () => lb.default.getCurrentUser()),
        r = i.useMemo(() => new iX.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iQ.H,
              children: (0, a.jsx)(iY.A.Overlay, {
                  className: iQ.w,
                  children: (0, a.jsx)(iZ.A, {
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
            (0, a.jsx)(af, { projectId: n }),
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
            return (0, tB.PK)(e, n);
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
function i3(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: u } = (0, l7._)(t, r);
    return s
        ? null
        : (0, a.jsx)(nO.D, {
              className: i0.xX,
              onClick: () => i2(t, [{ id: r, alt: l }], 0),
              "aria-label": eM.intl.string(eE.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: i0.sN, onError: u }),
          });
}
function i5(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: c } = (0, l7._)(t, r),
        [d, f] = i.useState(!1),
        [m, g] = i.useState(!1),
        {
            slide: p,
            labels: x,
            pick: v,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, h.bG)([a2.Ay], () => a2.Ay.useReducedMotion),
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
            return { slide: c, labels: a3.map((e) => eM.intl.string(e)), pick: d, hold: f };
        })({ ready: null != s, paused: d || m });
    if (o) return null;
    let j = eM.intl.string(eE.default.mjryK4),
        b = eM.intl.string(eE.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: i0.RM,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(nO.D, {
                className: w()(i0.xX, i0.nj, { [i0.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(aM) },
                onClick: () => i2(t, [{ id: r, alt: j }], 0),
                "aria-label": eM.intl.string(eE.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, a.jsx)("img", { src: s, alt: j, className: i0.Ac, onError: c })
                          : (0, a.jsx)(i1, { projectId: t, src: s, alt: b, size: l, onError: c }),
            }),
            (0, a.jsx)("div", {
                className: i0._4,
                role: "group",
                "aria-label": eM.intl.string(eE.default.EH36X6),
                children: x.map((e, t) =>
                    (0, a.jsx)(
                        nO.D,
                        {
                            className: w()(i0.c, { [i0.Cw]: p === t }),
                            "aria-pressed": p === t,
                            onClick: () => v(t),
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
        { src: i, gone: s, handleError: u } = (0, l7._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(nO.D, {
                  className: i0.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: i0.rA, onError: u }),
              }),
          });
}
function i7(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: eM.intl.formatToPlainString(eE.default.xFgQ8L, { number: t + 1 }) };
        });
    return null == n.style && 0 === l.length
        ? null
        : (0, a.jsxs)("section", {
              className: i0.Op,
              children: [
                  null != n.style
                      ? (0, a.jsx)(au.v, {
                            text: eM.intl.string(aE[n.style]),
                            variant: "custom" === n.style ? "grayMedium" : "blurpleLight",
                        })
                      : null,
                  l.length > 0
                      ? (0, a.jsxs)("div", {
                            className: i0.uW,
                            children: [
                                (0, a.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    tag: "span",
                                    children: eM.intl.string(eE.default.ubBJcy),
                                }),
                                (0, a.jsx)("ul", {
                                    className: i0.Ft,
                                    children: l.map((e, n) => {
                                        let { id: r, alt: i } = e;
                                        return (0, a.jsx)(
                                            i4,
                                            { projectId: t, id: r, alt: i, onOpen: () => i2(t, l, n) },
                                            r,
                                        );
                                    }),
                                }),
                            ],
                        })
                      : null,
              ],
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
        m,
        g,
        { projectId: p, proposal: x, version: v, onApprove: j } = e,
        { botExchanges: b } =
            ((n = ah(x, eV.q7.APPLICATION_COMMANDS)),
            (l =
                ah(x, eV.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(av)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : ay(x, l, {
                              message: eM.intl.string(eE.default.J7qggf),
                              reply: eM.intl.string(eE.default.nqYtiy),
                              event: eM.intl.string(eE.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        y = (function (e, t) {
            let { widget_config: n, widget_preview: l = aG } = t,
                r = (0, h.bG)([aF.default], () => aF.default.locale),
                a = (0, h.bG)([tm.Ay], () => {
                    let t = tm.Ay.getProject(e);
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
                                        return (0, tB.PK)(e, l.id).then(
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
        })(p, x),
        k = v?.superseded === !0,
        w = x.what_changed?.trim() ?? "",
        N =
            ((t = x.commands),
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
                null == (s = aI(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (c = x.design_image) && c.id !== aR(x)?.id ? c : null),
            (f = aR(x)),
            (m =
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
                ui: null != d && null != m ? { experienceId: m, design: d } : null,
                overlay:
                    null != f && null != g ? { experienceId: g, design: f, size: eX(x.overlay_widget ?? null) } : null,
            }),
        S = i.useMemo(
            () =>
                x.commands.some(av)
                    ? ay({ ...x, bot: void 0 }, "commands", {
                          message: eM.intl.string(eE.default.J7qggf),
                          reply: eM.intl.string(eE.default.nqYtiy),
                          event: eM.intl.string(eE.default["05lU9W"]),
                      })
                    : [],
            [x],
        ),
        I = (0, h.bG)([tm.Ay], () => tm.Ay.getProject(p)?.name, [p]),
        E =
            k && null != v
                ? eM.intl.formatToPlainString(eE.default.YZ3qJs, { version: v.version })
                : eM.intl.string(eE.default["3b6e7o"]),
        M = k ? (0, a.jsx)(nX, { children: eM.intl.string(eE.default.hF2c41) }) : null;
    return (0, a.jsxs)(nY, {
        title: E,
        meta: M,
        superseded: k,
        showLabel: eM.intl.string(eE.default.yD8EJS),
        hideLabel: eM.intl.string(eE.default.nSPGNb),
        bodyClassName: i0.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: i0.Qs,
                children: (0, a.jsx)(iW, {
                    appName: I ?? x.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(iT, { text: x.summary, commandNames: N }),
                            }),
                            (0, a.jsx)(i7, { projectId: p, proposal: x }),
                            "" !== w
                                ? (0, a.jsxs)("section", {
                                      className: i0.uW,
                                      children: [
                                          (0, a.jsx)(u.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: eM.intl.string(eE.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(u.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(iT, { text: w, commandNames: N }),
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
                                        e.id === A.ui?.experienceId
                                            ? (0, a.jsx)(i3, {
                                                  projectId: p,
                                                  design: A.ui.design,
                                                  alt: eM.intl.string(
                                                      null == (t = aI(x)) ? eE.default["3/aHX6"] : aA[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === A.overlay?.experienceId
                                            ? (0, a.jsx)(i5, {
                                                  projectId: p,
                                                  design: A.overlay.design,
                                                  size: A.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != y ? (0, a.jsx)(iJ, { ...y }) : null;
                            case "automod":
                                return null != x.automod && x.automod.examples.length > 0
                                    ? (0, a.jsx)(im, { automod: x.automod })
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
                                })(e, b, S);
                                return t.length > 0 ? (0, a.jsx)(iE, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: N,
                }),
            }),
            null == j || k
                ? null
                : (0, a.jsxs)("div", {
                      className: i0.qr,
                      children: [
                          (0, a.jsx)(C.$, {
                              variant: "primary",
                              size: "sm",
                              text: eM.intl.string(eE.default["6S+wRM"]),
                              onClick: j,
                          }),
                          (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: eM.intl.string(eE.default.IZoqbR),
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
                  (0, a.jsx)(tK.m, {
                      text: eM.intl.string(eM.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(t1.K, {
                          "aria-label": eM.intl.string(eM.t.WAI6xu),
                          icon: tD.P,
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
        1: eE.default.GhbsGA,
        2: eE.default.cm0nwU,
        3: eE.default.kGvlh2,
        4: eE.default.dVBSUg,
        5: eE.default.DKlgF7,
    };
function sf(e) {
    return eM.intl.string(sd[e]);
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
        o = eM.intl.string(eE.default.IqkF07);
    return (0, a.jsx)(tS.a, {
        ...n,
        title: o,
        actions: [
            {
                variant: "primary",
                text: eM.intl.string(eE.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (u(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(la.f, {
            label: o,
            hideLabel: !0,
            placeholder: eM.intl.string(eE.default.HMGKAV),
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
                        ? eM.intl.string(eE.default["nIc9/M"])
                        : 3 === t
                          ? eM.intl.string(eE.default.ausj8U)
                          : eM.intl.string(eE.default.HilSjw),
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
        [f, m] = i.useState(null),
        [h, g] = i.useState(!1),
        p = i.useId(),
        x = i.useId(),
        v = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => g(!1), 420);
            return () => clearTimeout(e);
        }, [h]),
        null != s && !h)
    )
        return (0, a.jsx)(sb, { rating: s });
    let j = null != s,
        b = j ? s : (f ?? c),
        y = j || (null == f && null != c);
    function k(e) {
        if (j) return;
        (d(e), m(null), g(!0));
        let t = o(e);
        null != t && (0, eD.openModal)((e) => (0, a.jsx)(sv, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: sj.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: sj.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(u.E, {
                        id: x,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: w()(sj.Pf, { [sj.KH]: null == b }),
                        children: eM.intl.string(eE.default.mTV326),
                    }),
                    sc.map((e) =>
                        (0, a.jsx)(
                            u.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: w()(sj.Pf, { [sj.KH]: b === e }),
                                children: sf(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": x,
                className: sj.uf,
                children: sc.map((e) => {
                    let t = null != b && e <= b,
                        n = t ? sa.StarIcon : si.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: sj.uK,
                            onMouseEnter: () => {
                                j || m(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: p,
                                    value: e,
                                    checked: !1,
                                    onChange: () => {
                                        v.current ? d(e) : k(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((v.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), k(e)));
                                    },
                                    onKeyUp: () => {
                                        v.current = !1;
                                    },
                                    className: sj.hF,
                                    "aria-label": eM.intl.formatToPlainString(eE.default.NU7Dex, {
                                        rating: e,
                                        label: sf(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: w()(sj.d4, { [sj.cO]: t, [sj.Ng]: t && y }),
                                        children: (0, a.jsx)(n, {
                                            size: "xs",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    t && y ? `picked-${b}` : "idle",
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
        l = tR(t, n);
    return (0, a.jsx)(C.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function sw(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, tw.Ay)(t);
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
var sC = n(303345),
    sN = n(44255),
    sA = n(416473),
    sS = n(289830);
function sI(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, h.bG)(
                    [tm.Ay],
                    () => {
                        let t = tm.Ay.getProject(e);
                        return null != t && (0, tm.jf)(t);
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
                        (u(e instanceof sC.A ? e.message : eM.intl.string(eE.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [c] = i.useState(() => Date.now()),
                d =
                    t.next_run_at > c
                        ? eM.intl.formatToPlainString(eE.default.orZDqY, { time: (0, sN.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sN.lD)(t.trigger),
                firstPublish: d,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(nV, {
        title: eM.intl.string(eE.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: sS.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sS.z,
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
                            children: eM.intl.string(eE.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(u.E, {
                                  variant: "text-sm/normal",
                                  role: "status",
                                  children: eM.intl.string(eE.default.k4IRsm),
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
                    ? (0, a.jsx)(C.$, {
                          variant: "secondary",
                          size: "sm",
                          text: eM.intl.string(eE.default.EuhBSG),
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
    return (0, a.jsxs)(nO.D, {
        className: w()(sE.nM, { [sE.f1]: s, [sE.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": eM.intl.formatToPlainString(eE.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: sE.jo,
                children: [
                    n
                        ? (0, a.jsx)(N.U, {
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
    return (0, a.jsx)(nV, {
        title: eM.intl.string(eE.default["wx/o8Y"]),
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
            (0, eD.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        d = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: sT.R })), [r.fields]),
        f = (0, rb.bB)(l, s),
        m = w()(sR.Lo, { [sR.jY]: f });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(u.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: eM.intl.string(eE.default.CTxtdV),
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
                        (0, a.jsx)(u.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: eM.intl.string(eE.default.HCQvpO),
                        }),
                        (0, a.jsx)(sP.C, { label: eM.intl.string(eE.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: sR.Lo,
                      children: (0, a.jsx)(sP.C, { label: eM.intl.string(eE.default.HCQvpO), size: "xs", items: d }),
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
                                        children: (0, a.jsx)(rM.y, {
                                            size: "xs",
                                            color: t8.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(u.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: eM.intl.string(eE.default.sfp7Up),
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
                                        eM.intl.formatToPlainString(eE.default["Z+FC3j"], {
                                            label: e,
                                            value: eM.intl.string(eE.default.CJq1rY),
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
                            children: eM.intl.string(null != o ? eE.default.O0QIqj : eE.default.HCQvpO),
                        }),
                        (0, a.jsx)(rT.A, {
                            text: null != r.note && "" !== r.note ? r.note : eM.intl.string(eE.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(sP.C, { label: eM.intl.string(eE.default.HCQvpO), size: "xs", items: d }),
                        (0, a.jsx)("div", {
                            className: sR.sq,
                            children: (0, a.jsx)(C.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: eM.intl.string(eE.default.EK8tKY),
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
        x = i.useMemo(() => (0, n$.Jf)(n, l), [n, l]),
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
            className: n5.pj,
            "data-live": !1,
            children: (0, a.jsx)(nG.A, {
                glyph: (0, a.jsx)(rz.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: eM.intl.string(eE.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = m ? ((0, n$.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rY(k.map((e) => e.taskId)),
        C = !g && (l || k.some((e) => "running" === e.task.status)),
        N = r2(k);
    return (0, a.jsxs)("ol", {
        className: n5.pj,
        "data-live": C,
        children: [
            (0, a.jsx)(nF.Ay, {
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
                let l = null != e.task.helperMark ? rX(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          r3,
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
            (0, a.jsx)(aa, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: n5.YO,
                      children: (0, a.jsx)(n2, { todos: b, provisional: d, agents: N, live: r, superseded: s }),
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
            secretRequestId: f,
            secretRequestAwaiting: m,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            settingsAskId: p,
            publishCta: x,
            turnId: v,
            onPickIdea: j,
            pickedIdeaIds: b,
            onApprovePlan: y,
            sideReply: k = !1,
            sideReplyAcknowledges: C,
            hoistedProse: N = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: S,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: M = !1,
        } = e,
        _ = i.useMemo(
            () => rG({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: T, lastStreamedMessage: P, showsClosingMessage: R, closingContent: L } = _,
        $ = (N ? A : void 0) ?? _.attachmentsHost,
        q = R && !N,
        D = null == c ? null : (0, a.jsx)(s$.A, { projectId: t, attachments: c }),
        F = null == D ? null : (0, a.jsx)("div", { className: n5.MT, children: D }),
        O = k
            ? (0, a.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return eM.intl.string(eE.default.Mv5OmK);
                          case "queued":
                              return eM.intl.string(eE.default["Po/2mi"]);
                          case "restarting":
                              return eM.intl.string(eE.default.Vj0woh);
                          default:
                              return eM.intl.string(eE.default.gY3L8p);
                      }
                  })(C),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: n5.ue,
        children: [
            T.length > 0 && !N
                ? (0, a.jsx)("ol", {
                      className: n5.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: n5.DV,
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
                ? (0, a.jsx)(i6, { projectId: t, proposal: r, version: s, onApprove: y })
                : q
                  ? (0, a.jsxs)("div", {
                        className: w()(n5.ky, sF.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: w()(sO.PT, n5.cW),
                                children: (0, sq.U)(L, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === $ ? F : null,
                            O,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: w()(n5.ky, sF.XR, { [sD.O]: null != m && "open" === h }),
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
                      className: w()(n5.ky, sF.XR),
                      children: (0, a.jsx)(rL, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== $ && ("closing" !== $ || q) ? null : D,
            null != x ? (0, a.jsx)(sw, { projectId: t, turnId: v ?? null, cta: x }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(s_, { ideas: o, pickedIdeaIds: b, onPick: j }) : null,
            null != S ? (0, a.jsx)(as, { proposal: S, onRestore: I }) : null,
            null != E ? (0, a.jsx)(sI, { projectId: t, proposal: E, current: M }) : null,
            q ? null : O,
        ],
    });
}
var sU = n(864970),
    sB = n(146806),
    sK = n(475358),
    sH = n(717400),
    sV = n(99677),
    sW = n(663341),
    sX = n(783977),
    sY = n(559647),
    sZ = n(655098),
    sQ = n(234320),
    sJ = n(191023),
    s0 = n(285796),
    s1 = n(922329),
    s2 = n(153171);
function s3(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(s1.p, {
        name: eM.intl.string(eE.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: ew.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sJ.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: ew.OY,
                    children: (0, a.jsx)(lc.PencilIcon, {
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
            children: eM.intl.string(eE.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: s2.o1,
            onClick: () => {
                ev(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": eM.intl.string(eE.default.N852dj),
            children: (0, a.jsx)(s0.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function s5(e) {
    let { send: t } = e;
    return (0, a.jsxs)(s1.p, {
        compact: !0,
        name: eM.intl.string(eE.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(u.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: eM.intl.string(eE.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(o.y, { type: o.t.SPINNING_CIRCLE_SIMPLE, className: s2.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(lf.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: eM.intl.string(eE.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var s4 = n(587157),
    s7 = n(347111),
    s6 = n(120234),
    s8 = n(901173),
    s9 = n(161431),
    ue = n(280450),
    ut = n(503275),
    un = n(659280),
    ul = n(351906),
    ur = n(407653),
    ua = n(322915);
function ui(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, h.bG)([ul.A], () => ul.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        c = `${t}-files`;
    if (0 === l.length) return null;
    let d = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      un.Ay.User,
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
                      un.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(ur.A, { projectId: n, file: e.file, className: ua.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        f = l.findIndex((e) => "file" === e.kind),
        m = -1 === f ? d : d.slice(0, f),
        g = -1 === f ? [] : d.slice(f);
    return (0, a.jsx)(un.Ay, {
        id: t,
        className: ua.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": eM.intl.string(eE.default.Vb3sUg),
            children: [
                m.length > 0
                    ? (0, a.jsx)(us, { titleId: o, title: eM.intl.string(eE.default.Vb3sUg), children: m })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(us, { titleId: c, title: eM.intl.string(eE.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function us(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(u.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: ua.Gf, children: n }),
            l,
        ],
    });
}
var uu = n(46175),
    uo = n(719442),
    uc = n(355622),
    ud = n(408018),
    uf = n(186306),
    um = n(323350),
    uh = n(35277),
    ug = n(820066),
    up = n(683167),
    ux = n(267102),
    uv = n(259691);
let uj = (0, aY.createChannelRecord)({ id: "1", type: e9.rbe.DM });
function ub(e) {
    let t = ug.VW.end(e, []);
    return { anchor: t, focus: t };
}
function uy(e) {
    return (0, um.WO)(ug.VW.richValue(e), { mode: "raw" });
}
function uk(e, t) {
    ((e.children = (0, ud.x7)(t)), (e.selection = ub(e)), e.onChange());
}
function uw(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rq.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(uv.A, { attachmentId: r }), n] });
}
var uC = n(497437),
    uN = n(465410);
let uA = "text-md/normal",
    uS = null;
function uI(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        o = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [f, m] = i.useState(0),
        [g, p] = i.useState(0),
        [x, v] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            (p(i + a), m(s));
            let u = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                f = 0 === d ? 1 : s / d,
                h = 0 === d ? 1 : u / d;
            v({
                frontFrom: 1e3 * (0, sB._R)(f),
                frontTo: 1e3 * (0, sB._R)(h),
                backFrom: 1e3 * (0, sB.T)(f),
                backTo: 1e3 * (0, sB.T)(h),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, b] = i.useState(0),
        [y, k] = i.useState(null),
        C = i.useRef(!1),
        N = i.useCallback(() => {
            (k(C.current ? (n ? "through" : "out") : n ? "in" : null), b((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        C.current = n;
    }, [n, t]);
    let A = "in" === y ? x.backFrom : x.frontFrom,
        S = "out" === y ? x.frontTo : x.backTo,
        I = (0, h.bG)([a2.Ay], () => a2.Ay.useReducedMotion),
        E = t === eM.intl.string(eE.default.Zc7gML),
        M = r === t && E;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: w()(uC.VT, { [uC.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && j > 0 && null != y ? j % 2 : void 0,
            "data-wipe-kind": l ? (y ?? void 0) : void 0,
            children: (0, a.jsx)(sK.e, { shortcut: "tab", className: uC.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sU.o, {
                text: t,
                variant: uA,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: w()(uC.xM, { [uC.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            _(uC.IS, n || (!I && "out" === y), o),
            (0, a.jsx)("span", {
                ref: c,
                className: uC.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(u.E, { variant: uA, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: uC.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(u.E, { variant: uA, tag: "span", className: uC.xM, children: t }),
                          _(uC.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uE = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                running: r,
                restoring: s = !1,
                onSend: u,
                onInterrupt: o,
                onUploadFile: c,
                onApprove: d,
                onImport: f,
                onSendToOtherProjects: m,
                suggestion: p,
                questionOpen: x = !1,
                hasPendingContext: v = !1,
                onDraftHasTextChange: j,
                modelSettings: b,
                onModelSettingsChange: y,
            } = e,
            k = n && !l,
            C = (function (e) {
                let t = i.useContext(ux.Ay),
                    [n] = i.useState(() => {
                        let n = (0, uo.ie)();
                        return (
                            (n.children = (0, ud.x7)(e)),
                            (n.selection = ub(n)),
                            (0, up.a)({
                                editor: n,
                                chatInputType: uc.oU.GENERIC_RICH_TEXTAREA,
                                channel: uj,
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
                                    for (let [t, l] of ug.VW.nodes(e, { at: [], match: ug.l5.isText }))
                                        for (let e of t.text.matchAll(rq.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        uf.o.withMergedEntry(e, () =>
                                            ug.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    uh.b.textToVoid(
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
            })(rF.A.getDraft(t)),
            [N, A] = i.useState(() => uy(C));
        (0, s6.N$)(N);
        let S = i.useRef(N),
            [I, E] = i.useState(null),
            M = i.useCallback(() => {
                let e = uy(C);
                (e !== S.current && ((S.current = e), (0, s7.I)(t, e), A(e)),
                    E(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !ug.ZF.isCollapsed(t)) return null;
                            let [n] = ug.VW.node(e, t.anchor.path);
                            return ug.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(C),
                    ));
            }, [C, t]),
            _ = i.useCallback((e) => uk(C, e), [C]),
            T = "" !== N.trim();
        i.useEffect(() => j?.(T), [T, j]);
        let P = i.useRef(t);
        i.useLayoutEffect(() => {
            P.current !== t && ((P.current = t), uk(C, rF.A.getDraft(t)));
        }, [C, t]);
        let R = (0, h.bG)([a2.Ay], () => a2.Ay.isSubmitButtonEnabled),
            [L, $] = i.useState(!1);
        i.useEffect(() => {
            r || $(!1);
        }, [r]);
        let q = i.useRef(null),
            {
                drafts: D,
                addFiles: F,
                pasteFiles: O,
                removeDraft: z,
                settled: G,
                takeRefs: U,
            } = (0, tW.FM)({ projectId: t, surface: "chat", onUploadFile: c }),
            B = eg.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && ef(n);
            }),
            K = "" !== N.trim() || D.length > 0 || v || B,
            H = k && K && G,
            [V, W] = i.useState(null);
        i.useEffect(() => {
            if (null == V) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => W(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [V]);
        let X = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: o } =
                        ((t = (0, h.bG)([tm.Ay], () => tm.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, h.yK)(
                            [g.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              g.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, ut.Y_)(l), r.forEach(ut.Y_));
                        }, [l, r]),
                        (a = (0, h.bG)([lb.default], () => (null == l ? null : lb.default.getUser(l)), [l])),
                        (s = (0, h.yK)(
                            [lb.default],
                            () => r.map((e) => lb.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    c = (0, h.bG)([ue.default], () => ue.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...o].filter((e) => e.id !== c && !e.bot),
                    [u, o, c],
                );
            })(t),
            Y = (0, s9.rU)(t),
            [Z, Q] = i.useState(null),
            [J, ee] = i.useState(0),
            et = i.useMemo(() => (null != I && k ? (0, s8.OG)(I, I.length) : null), [I, k]),
            en = et?.start ?? null;
        i.useEffect(() => {
            null == en ? Q(null) : (0, s9.IP)(t);
        }, [en, t]);
        let er = en === Z ? null : et,
            ea = i.useMemo(() => (null == er ? [] : (0, s8.l$)(X, Y, er.text)), [er, X, Y]),
            ei = er?.text;
        i.useEffect(() => ee(0), [ei]);
        let es = ea.length > 0,
            eu = Math.min(J, Math.max(0, ea.length - 1)),
            eo = i.useId(),
            ec = i.useCallback(
                (e) => {
                    let t = ea[e];
                    null != er &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (uh.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                uh.b.insertText(e, `${n} `));
                        })(C, er.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ea, er, C],
            ),
            ed = i.useCallback(() => {
                if (!H) return;
                let e = U(),
                    n = B
                        ? (function (e) {
                              let t = ex(e);
                              if (null == t || !ef(t)) return null;
                              let n = t.history.present,
                                  l = nN(e);
                              return (
                                  ev(e, (e) => ({ ...e, history: el, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, eS.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (ny.set(i, s),
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
                                              capture: (t) => (0 === t ? l : nN(e)),
                                              composite: (e) => nj(e, n),
                                              upload: (t) =>
                                                  (0, tB.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, tB.n6)(e, t.id),
                                              send: (n) => (0, eS.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nw(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (ny.delete(i),
                                                          window.setTimeout(() => {
                                                              (nw(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                u(N, e.length > 0 ? e : void 0, n ?? void 0);
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
                })(u_(ek.current), e$.current, (0, s8.Lj)(N));
                ("" !== l && W(l), _(""), Q(null));
            }, [H, B, t, N, u, U, _]),
            em = i.useCallback(
                (e) => {
                    (e.preventDefault(), ed());
                },
                [ed],
            ),
            eh = i.useCallback(() => {
                null == o || L || ($(!0), o());
            }, [o, L]),
            ep = null == p || "" !== N || !k || s || v ? null : p,
            ej = i.useCallback(
                (e) => {
                    if (es && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ea.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), ee((eu + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ec(eu));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), Q(er?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && r && null != o && !L) {
                        (e.preventDefault(), e.stopPropagation(), eh());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ep) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), _(ep));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ed());
                },
                [ed, d, r, o, L, eh, ep, _, es, ea.length, eu, ec, er],
            ),
            eb = i.useCallback(
                (e) => {
                    k && O(e);
                },
                [k, O],
            );
        (0, sQ.Vo)({
            event: e9.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eb(t);
            },
        });
        let ey = i.useCallback(
                (e) => {
                    (F(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [F],
            ),
            ek = i.useRef(null),
            ew = i.useRef(null),
            eC = i.useCallback(() => {
                let e = S.current;
                m?.((0, s8.Lj)(e), () => {
                    S.current === e && _("");
                });
            }, [m, _]),
            eN = i.useCallback((e) => {
                let t = q.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eA, eI] = i.useState(0),
            [e_, eT] = i.useState(!1);
        i.useEffect(() => {
            if (0 === N.length) return void eT(!1);
            let e = u_(ek.current);
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
            eT(!0);
            let t = setTimeout(() => eT(!1), uM);
            return () => clearTimeout(t);
        }, [N]);
        let eP = i.useMemo(() => ({ "--custom-glow-x": `${eA}px` }), [eA]),
            eR = e_ ? ` ${uC.EB}` : "",
            eL = s
                ? eM.intl.string(eE.default.qqlUiW)
                : l
                  ? eM.intl.string(eE.default.GcFRaY)
                  : k
                    ? v
                        ? eM.intl.string(eE.default.knUjL3)
                        : x
                          ? eM.intl.string(eE.default.IevBEw)
                          : eM.intl.string(r ? eE.default["0BJa/0"] : eE.default.TEeU7z)
                    : eM.intl.string(eE.default.zZ9NgM),
            e$ = i.useRef(0),
            eq = i.useRef(null),
            eD = i.useCallback((e) => {
                if ((eq.current?.disconnect(), null == e)) return;
                e$.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    e$.current = e.clientWidth;
                });
                (t.observe(e), (eq.current = t));
            }, []),
            eF = i.useId(),
            eO = i.useId(),
            ez = null != ep,
            eG = V ?? ep ?? eL,
            eU = "" === N && "" !== eG;
        return (0, a.jsxs)("form", {
            onSubmit: em,
            className: uC.DA,
            children: [
                es
                    ? (0, a.jsx)(ui, {
                          id: eo,
                          projectId: t,
                          suggestions: ea,
                          selectedIndex: eu,
                          onHover: ee,
                          onSelect: ec,
                      })
                    : null,
                D.length > 0 || B
                    ? (0, a.jsxs)("div", {
                          className: uC.lN,
                          children: [
                              D.map((e) => (0, a.jsx)(tW.Nl, { draft: e, onRemove: z }, e.localId)),
                              B ? (0, a.jsx)(s3, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${uC.wg} ${uC.LP}${eR}`, style: eP, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${uC.wg} ${uC.L3}${eR}`, style: eP, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: uC.VA,
                    ref: ek,
                    children: [
                        (0, a.jsx)("input", {
                            ref: q,
                            type: "file",
                            multiple: !0,
                            onChange: ey,
                            className: uC.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(tn.Y, {
                            targetElementRef: ew,
                            position: "top",
                            align: "left",
                            animation: tn.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(tl.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": eM.intl.string(eM.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(tr.rX, {
                                        children: [
                                            uu._.map((e) =>
                                                (0, a.jsx)(
                                                    tr.Dr,
                                                    {
                                                        id: e.id,
                                                        label: eM.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => eN(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != f
                                                ? (0, a.jsx)(tr.Dr, {
                                                      id: "import-project",
                                                      label: eM.intl.string(eE.default["p/k5i7"]),
                                                      iconLeft: sH.q,
                                                      leadingAccessory: { type: "icon", icon: sH.q },
                                                      action: f,
                                                  })
                                                : null,
                                            null != m
                                                ? (0, a.jsx)(tr.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: eM.intl.string(eE.default["5HmLrK"]),
                                                      iconLeft: sV.t,
                                                      leadingAccessory: { type: "icon", icon: sV.t },
                                                      action: eC,
                                                  })
                                                : null,
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, a.jsx)("button", {
                                    ...e,
                                    ref: ew,
                                    type: "button",
                                    className: `${uC.Y0} ${uC.nu}`,
                                    disabled: !k,
                                    "aria-label": eM.intl.string(eM.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": n,
                                    children: (0, a.jsx)(sW.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: uC.Qu,
                                    }),
                                });
                            },
                        }),
                        eU
                            ? (0, a.jsx)("div", {
                                  ref: eD,
                                  className: uC.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(uI, { text: eG, offering: ez && null == V, typed: null != V }),
                              })
                            : null,
                        (0, a.jsx)(nB.A, { id: eO, children: eM.intl.string(eE.default.ldNl9x) }),
                        (0, a.jsx)(rq.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sZ.A, {
                                editor: C,
                                containerClassName: w()(uC.sq, uN.dv),
                                className: uC.jp,
                                readOnly: !k,
                                canFocus: k,
                                onChange: M,
                                onBlur: () => E(null),
                                onKeyDown: ej,
                                onPaste: eb,
                                renderExtraElement: uw,
                                "aria-labelledby": eO,
                                "aria-describedby": eU ? eF : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": es,
                                "aria-controls": es ? eo : void 0,
                                "aria-activedescendant": es ? ((0, un.aI)(eu) ?? void 0) : void 0,
                            }),
                        }),
                        eU ? (0, a.jsx)(nB.A, { id: eF, children: eL }) : null,
                        (0, a.jsx)("div", {
                            className: uC.Sz,
                            children:
                                r && null != o
                                    ? (0, a.jsx)(tK.m, {
                                          text: eM.intl.string(eE.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${uC.Y0} ${uC.$E}`,
                                              disabled: L,
                                              onClick: eh,
                                              "aria-label": eM.intl.string(eE.default.wiguT0),
                                              children: (0, a.jsx)(rz.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : b?.tierSettings != null && null != y
                                      ? (0, a.jsx)(s4.A, {
                                            settings: b.tierSettings,
                                            tiers: b.tiers,
                                            choices: b.choices,
                                            disabled: !k,
                                            onChange: y,
                                            className: `${uC.Y0} ${uC.$E}`,
                                            icon: (0, a.jsx)(sX.R, {
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
                                  className: uC.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: uC.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: uC.rt,
                                          disabled: !H,
                                          "aria-label": eM.intl.string(eE.default.rxW2cl),
                                          children: (0, a.jsx)(sY.SendMessageIcon, {
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
    uM = 1500;
function u_(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uT = n(709753),
    uP = n(540338),
    uR = n(986109);
let uL = i.createContext(null);
function u$(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: o,
        } = e,
        c = i.useContext(uL),
        [d, f] = i.useState(() => a2.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: w()(uR.xk, { [uR.g5]: d, [uR.Qo]: s, [uR.q3]: u }),
        children: n,
    });
}
let uq = new Map();
function uD(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let uF = "live_behind",
    uO = "conjureTipDismissals",
    uz = new Set(),
    uG = new Set(),
    uU = 0;
function uB() {
    let e = ss.w.get(uO);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function uK(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return uz.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && uB().anchor[t]?.[e.id] === n;
        case "app":
            return uB().app[t]?.includes(e.id) === !0;
        case "forever":
            return uB().forever.includes(e.id);
    }
}
function uH(e) {
    return (uG.add(e), () => uG.delete(e));
}
let uV = [12e4];
var uW = n(292771);
function uX(e) {
    let { presentation: t, render: n } = e,
        l = (0, h.bG)([a2.Ay], () => a2.Ay.useReducedMotion),
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
        f = i.useRef(u);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = o.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = c.current,
            s = d.current,
            m = r?.offsetHeight ?? 0,
            h =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((c.current = h), (d.current = m));
        let g = f.current !== u;
        if (((f.current = u), !g || l || null == s || null == i || null == a || null == h)) return;
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
            n.animate([{ height: `${s}px` }, { height: `${m}px` }], {
                duration: 260,
                easing: "cubic-bezier(0.2, 0, 0, 1)",
            }));
    });
    let m = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!m) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [m, r]),
        (0, a.jsx)("div", {
            ref: o,
            className: uW.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: w()(uW.qd, e.leaving ? uW.dv : uW.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function uY(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var uZ = n(247171);
function uQ(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: w()(uZ.row, r),
        children: [
            (0, a.jsx)(u.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: w()(uZ.gutter, uZ[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: uZ.content, children: i }),
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
                (0, a.jsx)(u.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: uJ.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: uJ.X8,
                          children: (0, a.jsx)(tK.m, {
                              text: eM.intl.string(eM.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(t1.K, {
                                  "aria-label": eM.intl.string(eM.t.WAI6xu),
                                  icon: tD.P,
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
        n = i.useContext(tw.bI);
    return (0, a.jsx)(u0, {
        icon: iq.ShieldIcon,
        children: eM.intl.format(eE.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tw.vL)(t, n.guildId));
            },
        }),
    });
}
var u2 = n(443865),
    u3 = n(716502);
function u5(e) {
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
                          children: (0, a.jsx)(tK.m, {
                              text: eM.intl.string(eM.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(t1.K, {
                                  "aria-label": eM.intl.string(eM.t.WAI6xu),
                                  icon: tD.P,
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
        className: u3.DD,
        children: t,
    });
}
function u7(e) {
    let { children: t } = e;
    return (0, a.jsx)(u.E, {
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
        r = tR(t, n);
    return (0, a.jsx)(u0, {
        icon: u8.UploadIcon,
        onDismiss: l,
        children: eM.intl.format(eE.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let oe = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && uY(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(u1, { projectId: n });
        },
    },
    {
        id: uF,
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
                : null != (t = e.messagesSinceShown(uF)) && t > 0 && t < 10
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
            let { turn: t, publish: n, justRemixed: l, noTurnsYet: r, ideasIntroAnchorId: a } = e;
            return null == a || uY(n) ? null : null != t || l || r ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(u5, {
                icon: u2.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(u4, { children: eM.intl.string(eE.default.OJlbhX) }),
                    (0, a.jsx)(u7, { children: eM.intl.string(eE.default["3vJBni"]) }),
                    (0, a.jsx)(u6, {
                        children: (0, a.jsx)(C.$, {
                            variant: "primary",
                            size: "sm",
                            text: eM.intl.string(eE.default["U/bLzU"]),
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
                var a;
                let s = (0, tw.Ay)(e),
                    u = (0, h.bG)([lb.default], () => lb.default.getCurrentUser()?.id),
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
                                if ((0, nq.BL)(n)) return n;
                                if (!(0, nq.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    m =
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
                    p = g?.publishNotice?.update === !1 && 0 === uD(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p;
                return {
                    projectId: e,
                    turn: m,
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
                        let l = uq.get(`${e}:${n}`);
                        return null != l ? uD(t, l, u) : null;
                    },
                    isDismissed: (t) => uK(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, uV);
            i.useSyncExternalStore(uH, () => uU);
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
                                uq.set(`${e}:${t}`, n);
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
                                          if (null == e.dismissal || uK(e, t, n)) return;
                                          let l = uB();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  uz.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  ss.w.set(uO, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  ss.w.set(uO, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  ss.w.set(uO, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (uU++, uG.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(oe, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(u$, {
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
                            (0, a.jsx)(u.E, {
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
                    (0, a.jsxs)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(lf.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, eD.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(or.u, {
                                                                    ...t,
                                                                    title: eM.intl.string(eE.default["i+xjZM"]),
                                                                    subtitle: eM.intl.string(eE.default.fMBZmD),
                                                                    confirmText: eM.intl.string(eE.default.i5f3Uo),
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
var oo = n(468689),
    oc = n(576705);
function od(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            eM.intl.format(n ? eE.default.esEGL5 : eE.default["XrN+Bg"], {
                onOpen: () => oo.A.open(t, e9.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
function of(e) {
    return (0, h.bG)([tm.Ay, aV.A], () => {
        let t = tm.Ay.getProject(e);
        return null == t ? "" : (aV.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var om = n(951465),
    oh = n(369455);
function og(e) {
    var t, n, l;
    let { projectId: r, notice: i } = e,
        s = of(r),
        o = (0, h.bG)([tm.Ay, lO.A], () => {
            let e = tm.Ay.getProject(r);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (lO.A.getGuild(e.guild_id)?.name ?? null);
        }),
        c = (0, h.cf)([tm.Ay, ty.A, lO.A, oc.A], () => {
            let e = tm.Ay.getProject(r);
            if (null == e || "user" === e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eV.q7.AUTOMOD) === !0 ||
                    ty.A.getPublishStatus(r)?.surface === "automod",
                n = lO.A.getGuild(e.guild_id),
                l = null != n && oc.A.can(e9.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(u.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            eM.intl.format(
                ((t = i),
                (n = o),
                (l = c.automod),
                !0 === t.commands_failed
                    ? eE.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? eE.default.ev23Cw
                      : t.update
                        ? eE.default.gQzuLC
                        : l
                          ? eE.default.KORRGl
                          : null == n
                            ? eE.default.MOrR29
                            : eE.default["/npn7F"]),
                { name: s, server: o ?? "" },
            ),
            null != c.guildId
                ? (0, a.jsx)(od, { guildId: c.guildId, update: i.update })
                : !c.automod && i.update && null != i.published_revision
                  ? (0, a.jsx)(op, { projectId: r, notice: i })
                  : null,
        ],
    });
}
function op(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tw.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, h.cf)(
                    [ty.A, tm.Ay],
                    () => {
                        let r = ty.A.getPublishStatus(e),
                            a = tm.Ay.getProject(e);
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
                                (0, tm.jf)(a),
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
                      ? eM.intl.format(eE.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    nO.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: oh.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, c.pX)(e9.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : eM.intl.format(eE.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = tm.Ay.getProject(e),
                                        a = null == r ? null : (0, tw.KL)(r, l);
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
var ox = n(940874),
    ov = n(73153),
    oj = n(505527),
    ob = n(930390),
    oy = n(521981),
    ok = n(491182),
    ow = n(438729),
    oC = n(622868),
    oN = n(448368),
    oA = n(837528),
    oS = n(470964),
    oI = n(715628),
    oE = n(752636),
    oM = n(9842),
    o_ = n(589022),
    oT = n(967198),
    oP = n(531685);
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
        l = (0, h.bG)([a2.Ay], () => a2.Ay.useReducedMotion),
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
    let m = Math.min(u.length, e.length);
    return { text: m >= e.length ? e : e.slice(0, m), revealing: r && m < e.length };
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
              className: w()(oU.QE, { [oU.Rn]: t }),
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
function oK(e) {
    return oG.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: eM.intl.string(eM.t.JrGD7E), icon: oF.CopyIcon, onClick: () => (0, oG.C)(e) }]
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
                          label: eM.intl.string(eE.default.CXtLD2),
                          tooltip: eM.intl.string(eE.default.DOb1HM),
                          icon: oO.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: eM.intl.string(eE.default.urZwpN),
                          icon: tD.P,
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
                : [{ id: "restore-version", label: eM.intl.string(eE.default.H8Jfhu), icon: t5.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: oz.BugIcon, onClick: r }];
    return (0, a.jsx)(oB, { groupStart: n, actions: [...i, ...oK(t), ...s] });
}
let oW = (0, aY.createChannelRecord)({ id: "conjure-builder", type: e9.rbe.DM }),
    oX = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oY(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: w()(oU.Yq, { [oU.x1]: t }), children: e });
}
function oZ(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let oQ = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function oJ(e, t, n) {
    let { content: l } = (0, oS.A)(e, oQ),
        r = i.useMemo(() => ((0, rq.aW)(e.content) ? (0, oy.z2)(sq.U, e, oQ).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: oW, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(ow.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, oI.A)(s, r);
}
function o0(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oA.m)(e, oW, t.usernameProfile, l),
        u = (0, oA.Jo)(t.avatarProfile, l),
        o = (0, h.bG)([oT.A], () => oT.A.getGuildId()),
        c = (0, h.bG)([lb.default], () => lb.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let n = lb.default.getUser(e.author.id) ?? e.author;
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
function o1(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, rq.aW)(n.content)
                          ? (0, oy.z2)(sq.U, n, e).content
                          : (0, oy.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: oU.GV,
                              children: [
                                  (0, a.jsx)(A.x, {
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, h.cf)(
            [lj.A],
            () => ({
                isReplyAuthorBlocked: lj.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: lj.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, ij.X4)(n),
        d = (0, ij.X4)(t),
        f = o0(n);
    return (0, a.jsx)(oN.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: oW,
        referencedMessage: { state: oM.a.LOADED, message: n },
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
    return (0, a.jsx)(oC.Ay, {
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
        o = (0, ut.vm)(l),
        c = i.useMemo(() => (0, ij.FT)(o, null), [o]),
        d = i.useMemo(() => B(t), [t]),
        f = d?.body ?? t,
        m = (0, s8.Qu)(f),
        h = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, aX.Ay)({ channelId: oW.id, content: f, author: o });
            return (0, aW.rh)({ ...e, timestamp: oZ(n, e.timestamp), state: e9.cmJ.SENT });
        }, [f, o, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              o5,
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
function o5(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = oJ(t, l);
    return (0, a.jsx)(ok.A, {
        className: oU.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(o2, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, a.jsxs)("div", {
                      className: oU.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: oU.GV,
                              children: [
                                  (0, a.jsx)(A.x, {
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
function o4(e) {
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
        { text: d, revealing: f } = oD(t, { streaming: (0, h.bG)([oP.A], () => o && oP.A.isFocused(), [o]) }),
        m = i.useMemo(() => (0, ij.FT)(null, null), []),
        g = i.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        p = r?.userId,
        x = (0, ut.vm)(p),
        v = i.useMemo(() => (null == r ? null : B(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, aX.Ay)({ channelId: oW.id, content: v?.body ?? r.content, author: x });
            return (0, aW.rh)({ ...e, id: r.id, timestamp: oZ(r.createdAt, e.timestamp), state: e9.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: oW.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, aX.Ay)({ channelId: oW.id, content: "", author: oX })),
        k = i.useMemo(
            () =>
                (0, aW.rh)({
                    ...y,
                    timestamp: oZ(n, y.timestamp),
                    state: e9.cmJ.SENT,
                    ...(null != b ? { type: e9.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", d), [k, d]),
        C = i.useMemo(
            () => (0, oE.A)({ message: k, channel: oW, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        N = oJ(w, d, oU.OS);
    return (0, a.jsxs)("div", {
        className: oU.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(ok.A, {
                className: oU.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(o1, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: C,
                childrenMessageContent: N,
                childrenAccessories: oY(l, "" !== d),
                disableInteraction: !0,
            }),
            c,
            u ? (0, a.jsx)("img", { className: oU.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var o7 = n(981879);
function o6(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, aW.rh)(
                    { ...(0, aX.Ay)({ channelId: oW.id, content: "" }), id: `conjure:${t}`, state: e9.cmJ.SENT },
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
                    channelId: oW.id,
                    messageId: l.id,
                    users: [oX],
                    emoji: e,
                    reactionType: oj.v.NORMAL,
                }),
                    ov.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: oW.id,
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
            className: o7.H,
            children: (0, a.jsx)(ob.A, {
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
    return (0, a.jsx)(tl.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": eM.intl.string(eM.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(tr.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(tr.Dr, {
                          id: "restore-version",
                          label: eM.intl.string(eE.default.H8Jfhu),
                          icon: t5.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(tr.Dr, { id: "view-trace", label: "View Trace", icon: oz.BugIcon, action: r })
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
            onPickIdea: m,
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
                e$() && "assistant" === x.role && (0, nq.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, h.bG)(
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
                          for (let n of ((eP = { projectId: e, traceId: t }), [...eT])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(u$, {
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
        children: (0, a.jsx)(o4, {
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
                turnId: (0, nq.lb)(x) ?? void 0,
                onPickIdea: m,
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
var cr = n(288539);
function ca(e, t, n) {
    return (0, a.jsx)(cr.A, { userId: e, content: `@${t}` }, n);
}
function ci(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, ut.Y_)(l);
            }, [l]);
            let r = (0, h.bG)([lb.default], () => (null == l ? null : lb.default.getUser(l)), [l]),
                a = (0, aQ.tx)(r),
                s = of(e),
                u =
                    (0, h.bG)([lO.A], () => (null == t.guild_id ? null : lO.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? eM.intl.string(eE.default.R1tPlP),
                o = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? eM.intl.format(eE.default.Lwsrhg, { app: s, server: u })
                        : eM.intl.format(eE.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? eM.intl.format(eE.default.mT7EQG, { app: s, server: u })
                        : eM.intl.format(eE.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? eM.intl.format(eE.default["4LVIeo"], { app: s, server: u })
                        : eM.intl.format(eE.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? eM.intl.format(eE.default["4VQfid"], { channel: e, server: u })
                        : eM.intl.format(eE.default.RlMIJN, { channel: e, server: u, ...o });
                }
                case "remixed":
                    return eM.intl.format(eE.default.mHCXtm, { source: t.source_name });
            }
        })(n, l, ca),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, h.bG)([rj.A], () => null != t && t.length > 0 && rk({ keys: t }, rj.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: eM.intl.string(eE.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(rL, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let cs = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    nk.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rq.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(u$, {
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
                                              null != t ? (0, a.jsx)(s$.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, a.jsx)(s5, { send: o }) : null,
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
                                    return (n) => (0, ox.tp)(e, t.id, n);
                            })(l, u, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(u$, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o4, {
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
                    return (0, a.jsx)(u$, {
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
                    return (0, a.jsx)(u$, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o4, {
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
                    return (0, a.jsx)(u$, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o4, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(ci, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(u$, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, a.jsx)(ou, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(u$, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sz, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(u$, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sz, {
                            projectId: l,
                            steps: cu,
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
    cu = [],
    co = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cc = new WeakMap();
function cd(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cf(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cm = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: c,
            onApprovePlan: d,
            floatingSettingsMessageId: f,
            liveClarificationId: m,
            onRestoreVersion: g,
            scrollerRef: p,
            stickToBottomRef: x,
            pinned: v,
            onUnpin: j,
            handleRef: b,
            onShowsLatestChange: y,
        } = e,
        k = i.useRef(null),
        [C, N] = i.useState(null),
        A = i.useCallback((e) => {
            ((k.current = e), N(e));
        }, []),
        [S, I] = i.useState(null),
        E = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(E.current), []);
    let M = i.useCallback((e) => {
            (I(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        _ = (0, h.bG)([ty.A], () => ty.A.getPublishStatus(t)),
        T = (0, h.bG)([lb.default], () => lb.default.getCurrentUser()?.id),
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
                                        let t = (0, n$.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = cc.get(r);
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
                        let a = !(0, nq.BL)(e),
                            i = rG({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            u = (0, n$.C6)(e.steps, { turnActive: a }),
                            { lastWork: o, open: c } = (0, n$.CT)(u, { turnActive: a }),
                            d = u.at(-1)?.index,
                            f = !1;
                        for (let n of u) {
                            if (null != n.prose && co.test(n.prose.content)) f = !0;
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
                                        turnActive: nD(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = co.test(e.content ?? "");
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
                    (cc.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                m,
            );
        }, [n, _, m]),
        R = i.useMemo(() => P.map((e) => e.key), [P]),
        [L, $] = i.useState(null),
        q = (function (e, t, n) {
            if (null == t) return cd(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cf(e, t.endKey, t.end - 1) + 1,
                a = cf(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cd(e, a, r));
        })(R, L, v),
        D = i.useRef(q),
        F = i.useRef(R),
        O = i.useRef(P),
        z = i.useRef(null),
        G = i.useRef(null),
        U = i.useRef(new Set()),
        B = i.useCallback(() => {
            let e = p.current?.getScrollerNode(),
                t = k.current;
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
        }, [p]),
        K = i.useCallback(() => {
            let e = p.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cd(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cd(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cd(e, i, t.end) : null;
            })(F.current, D.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: x.current,
            });
            "older" === n ? (0, eS.loadOlderHistory)(t) : null != n && $(n);
        }, [p, x, t]);
    i.useImperativeHandle(
        b,
        () => ({
            handleScroll() {
                (B(),
                    $((e) => {
                        let t = D.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    K());
            },
            recordAnchor: B,
            showLatest(e) {
                ((G.current = e ?? null), $(null));
            },
            snapshot() {
                let e = z.current;
                return null == e ? null : { window: D.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!F.current.includes(n.key)) return !1;
                (j(), (z.current = n));
                let l = D.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = p.current?.getScrollerNode(),
                        t = k.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else $(t);
                return !0;
            },
        }),
        [B, K, j, p],
    );
    let H = i.useRef(null),
        V = i.useCallback(
            (e) => {
                var n;
                let l;
                H.current = null;
                let r = k.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), $(D.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = O.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, eS.loadOlderHistory)(t) && (H.current = e);
                    return;
                }
                (j(),
                    (G.current = () => {
                        (k.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = F.current), cd(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, j, t],
        );
    (i.useEffect(() => {
        let e = H.current;
        null != e && V(e);
    }, [P, V]),
        i.useLayoutEffect(() => {
            if (null == C) return;
            let e = C.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), x.current ? p.current?.scrollToBottom() : B());
                });
            return (t.observe(C), () => t.disconnect());
        }, [C, B, p, x]));
    let W = null == q.endKey;
    (i.useEffect(() => y?.(W), [W, y]),
        i.useLayoutEffect(() => {
            ((D.current = q), (F.current = R), (O.current = P));
        }),
        i.useLayoutEffect(() => {
            let e = p.current?.getScrollerNode(),
                t = k.current;
            if (null != e && null != t) {
                let n = z.current;
                if (x.current) p.current?.scrollToBottom();
                else if (null != n) {
                    let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === n.key,
                        ),
                        r = null == l ? 0 : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let l = G.current;
                ((G.current = null), l?.(), B(), K());
            }
            U.current = new Set(R);
        }, [P, R, q.start, q.end, p, x, B, K]));
    let X = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, nq.BL)(n) || "plan_implemented" === n.kind) return null;
                            if (null != n.proposal) return n.render_id;
                        }
                    }
                    return null;
                })(n),
            [n],
        ),
        Y = i.useMemo(
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
        Z = i.useMemo(
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
        Q = i.useMemo(
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
        J = n.at(-1),
        ee =
            (J?.role !== "assistant" || null == J.awaitingUser || null == J.secretRequest
                ? null
                : (0, nq.BL)(J)
                  ? J.awaitingUser
                  : null) ?? void 0,
        et = (0, h.bG)([rj.A], () => rj.A.getSettings(t)?.secrets, [t]),
        en = (0, uT.WT)(t),
        el = i.useMemo(() => (0, rb.Mv)(n, et), [n, et]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: w()(uR.x7, uR.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uR.Ub, children: (0, a.jsx)(o.y, {}) }),
            });
        let e = "unavailable" === l ? eE.default.Td4Sf4 : eE.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uR.x7,
            children: (0, a.jsx)(u$, { role: "assistant", children: (0, a.jsx)(o4, { content: eM.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uL.Provider, {
        value: U,
        children: (0, a.jsxs)("ol", {
            ref: A,
            className: uR.x7,
            children: [
                P.slice(q.start, q.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cs,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && S === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === J;
                    return (0, a.jsx)(
                        cs,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? Q.get(n.in_reply_to) : void 0,
                            onJumpTo: V,
                            planVersion: Y.get(n.render_id),
                            pickedIdeaIds: Z.get(n.render_id),
                            secretRequestAwaiting: l ? ee : void 0,
                            secretRequestStatus: el.get(n.render_id),
                            settingsFloating: n.id === f,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === X ? d : void 0,
                            onRestoreVersion: g,
                        },
                        e.key,
                    );
                }),
                W
                    ? en.map((e) =>
                          (0, a.jsx)(
                              u$,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(o4, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uP.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ee && W
                    ? (0, a.jsx)(u$, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(o4, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eM.intl.string(eE.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                W ? (0, a.jsx)(on, { projectId: t, messages: n, draftHasText: !0 === c, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var ch = n(731084),
    cg = n(823376),
    cp = n(187447);
function cx(e) {
    let { activity: t, id: n } = e,
        l = (0, nL.j)(),
        { text: r, revealing: s } = oD(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cp.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nT.Ch, {
                ref: u,
                className: cp.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: w()(sO.PT, cp.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: a6.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cv = n(53659);
function cj(e) {
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
        p = i.useId(),
        [x, v] = i.useState(null),
        j = (0, ch.xu)({
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
        b = eM.intl.string(j),
        y = j === ch.kx["0"],
        [k, C] = i.useState(m ?? b),
        N = (0, nL.j)();
    (l || (0, ch.E4)(b, k) || (!N && !y)) && k !== b && C(b);
    let A = i.useRef(b);
    (i.useEffect(() => {
        A.current = b;
    }, [b]),
        i.useEffect(() => {
            h?.(k);
        }, [k, h]));
    let S = i.useRef(null),
        I = i.useRef(k);
    i.useEffect(() => {
        I.current = k;
    }, [k]);
    let E = i.useRef(y),
        M = i.useRef(0);
    (i.useEffect(() => {
        ((E.current = y), !y && (0, ch.E8)(I.current) && C(A.current));
    }, [y]),
        i.useEffect(() => {
            if (!N) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((M.current = (0, ch.E8)(I.current) ? M.current + 1 : 0), C((0, ch.Ov)(M.current)))
                    : A.current !== I.current
                      ? C(A.current)
                      : S.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, ch.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [N]));
    let _ = null != t && "" !== t.text,
        T = t?.session ?? null,
        P = _ && null != T && x === T,
        R = i.useCallback(() => {
            _ && null != T && v((e) => (e === T ? null : T));
        }, [_, T]),
        L = i.useCallback(() => v(null), []);
    return (0, a.jsx)(tn.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(cx, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(nO.D, {
                innerRef: g,
                className: w()(cv.hF, _ && cv.Xd),
                "aria-label": eM.intl.string(
                    r
                        ? eE.default.qqlUiW
                        : j === eE.default.j8tmjK
                          ? eE.default.j8tmjK
                          : y
                            ? ch.kx["0"]
                            : eE.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": eM.intl.string(j),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: cv.bl,
                        children: (0, a.jsx)(cg.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cv.xu,
                        "aria-hidden": !!c || !!y || void 0,
                        children: N
                            ? (0, a.jsx)(sU.o, {
                                  ref: S,
                                  text: k,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: ch.vg,
                                  delay: null,
                                  className: cv.yE,
                              })
                            : (0, a.jsx)(u.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: cv.yE,
                                  children: k,
                              }),
                    }),
                ],
            }),
    });
}
let cb = { second: 1e3, minute: 6e4 };
function cy(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cb[t];
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
var ck = n(719374);
function cw(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = cy(t);
    return (0, a.jsx)(u.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: ck.$,
        "data-conjure-turn-timer": !0,
        children: (0, rZ.C7)(l),
    });
}
function cC(e) {
    let { startedAt: t } = e,
        n = cy(t, "minute");
    return (0, a.jsx)(nB.A, { role: "timer", children: (0, rZ.Us)(n) });
}
var cN = n(885574),
    cA = n(242779),
    cS = n(436804);
function cI(e) {
    return e.toLocaleString();
}
function cE(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cS.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cS.mf,
                children: [
                    (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [cI((0, cA.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(u.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    cI(n.input_tokens),
                    " in \xb7 ",
                    cI(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cI(n.cache_creation_input_tokens)} cache write \xb7 ${cI(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cM(e) {
    let { project: t } = e,
        n = (0, cA.wU)(t.compaction),
        l = (0, cA.wU)(t.classifier),
        r = (0, cA.wU)(t.image),
        i = (0, cA.wV)(t.orchestrator, t.codegen),
        s = (0, cA.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: cS.si,
        role: "dialog",
        "aria-label": eM.intl.string(eE.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cS.Q$,
                children: (0, a.jsxs)("div", {
                    className: cS.mf,
                    children: [
                        (0, a.jsxs)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [cI((0, cA.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cE, { label: eM.intl.string(eE.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cE, { label: eM.intl.string(eE.default.ANCEo3), usage: n }),
            (0, a.jsx)(cE, { label: eM.intl.string(eE.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cE, { label: eM.intl.string(eE.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cS.mf,
                children: [
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eM.intl.string(eE.default["8OUg09"]),
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cA.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cA.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function c_(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tn.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cM, { project: t }),
        children: (e) =>
            (0, a.jsx)(nO.D, {
                innerRef: n,
                className: cS.Y$,
                "aria-label": eM.intl.string(eE.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cN.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cT = n(997421);
function cP(e) {
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
            projectUsage: m,
            connState: g,
        } = e,
        x = (0, p.Zv)(t),
        v = (0, h.bG)([ty.A], () => ty.A.getPublishStatus(t)?.publishing === !0, [t]),
        [j, b] = i.useState(null),
        y = i.useCallback(
            (e) =>
                b(
                    (0, ch.E8)(e) || e === eM.intl.string(eE.default.mKK6wB) || e === eM.intl.string(eE.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        k = null == m ? null : (0, ch.uc)(m),
        w = null != s,
        C = s ?? (n ? l : void 0),
        N = n || r || w || !0 === f;
    return (0, a.jsxs)("div", {
        className: cT.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cT.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || o || x || v
                        ? (0, a.jsx)(cj, {
                              activity: c,
                              compacting: d,
                              saving: f,
                              restoring: r,
                              remixing: w,
                              recalling: o,
                              controlling: x,
                              publishPending: v && N,
                              publishing: v,
                              spoken: j,
                              onSpokenChange: y,
                          })
                        : null,
                    null != C ? (0, a.jsx)(cw, { startedAt: C }) : null,
                ],
            }),
            null != C ? (0, a.jsx)(cC, { startedAt: C }) : null,
            null == m || null == k
                ? null
                : (0, a.jsxs)("span", {
                      className: cT.BP,
                      children: [
                          (0, a.jsx)(u.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": k.aria,
                              children: k.text,
                          }),
                          (0, a.jsx)(c_, { project: m }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(u.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": eM.intl.formatToPlainString(eE.default["tCo+ZM"], { status: (0, ch.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cT.XF,
                      children: (0, ch.Db)(g),
                  }),
        ],
    });
}
let cR = ["wheel", "touchstart", "pointerdown", "keydown"];
var cL = n(698638),
    c$ = n(608711);
let cq = [eM.intl.string(eE.default["9w+Chc"]), eM.intl.string(eE.default.WAvmdq), eM.intl.string(eE.default.SKsrzl)];
function cD(e) {
    var t, n;
    let l,
        r,
        s,
        o,
        c,
        { projectId: d, restoreState: f, onRestoreVersion: m, onImportProject: p } = e,
        x = (0, h.bG)([g.A], () => g.A.getMessages(d), [d]),
        v = (0, h.bG)([eS.default], () => eS.default.getConnState(d), [d]),
        j = (0, h.bG)([g.A], () => g.A.getProjectUsage(d), [d]),
        b = (0, h.bG)([g.A], () => g.A.getThinkingActivity(d), [d]),
        y = (0, h.bG)([g.A], () => g.A.isCompacting(d), [d]),
        k = (0, h.bG)([g.A], () => g.A.isSaving(d), [d]),
        w = rm(d),
        N = (0, h.bG)([ru.A], () => ru.A.getModelSettings(d), [d]),
        A = i.useRef(null),
        S = i.useRef(null),
        I = i.useRef(null),
        E = i.useRef(null),
        {
            stickToBottomRef: M,
            pinned: _,
            atBottom: T,
            unpin: P,
            releasePinHold: R,
            showsLatest: L,
            showsLatestRef: $,
            handleShowsLatestChange: q,
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
                    for (let e of cR) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of cR) t.removeEventListener(e, o);
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
        })(S),
        O = i.useCallback(() => {
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
            (R(), $.current ? e() : I.current?.showLatest(e));
        }, [R, $]),
        G = i.useCallback(() => {
            (F(), I.current?.handleScroll());
            let e = E.current;
            null != e && (e.position = M.current ? null : (I.current?.snapshot() ?? null));
        }, [F, M]),
        U = i.useContext(eU) === d;
    i.useLayoutEffect(() => {
        if (!U) return;
        let e = { position: eK.A.getProjectView(d).chatScroll };
        return ((E.current = e), () => (0, eB.g7)(d, { chatScroll: e.position }));
    }, [U, d]);
    let B = i.useRef(!U);
    (i.useLayoutEffect(() => {
        if (B.current || 0 === x.length) return;
        B.current = !0;
        let e = eK.A.getProjectView(d).chatScroll;
        null != e && I.current?.restore(e) !== !0 && null != E.current && (E.current.position = null);
    }, [x, d]),
        i.useLayoutEffect(() => {
            let e = A.current;
            if (null == e) return;
            let t = S.current?.getScrollerNode(),
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
                    r && (M.current ? S.current?.scrollToBottom() : I.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [M]),
        i.useEffect(() => {
            (0, eS.ensureConnection)(d);
        }, [d]),
        (0, rD.E1)(d, (0, nL.j)()));
    let K = en(d),
        H = (function (e) {
            let t = (0, tw.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, h.bG)([lO.A], () => (null == n ? null : (lO.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: eM.intl.format("channel" === s ? eE.default["1cm4fj"] : eE.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(d),
        V =
            ((l = (0, h.bG)([rc.A], () => rc.A.getFailure(d))),
            (r = i.useCallback(() => (0, rd.CM)(d), [d])),
            null == l
                ? null
                : {
                      message: eM.intl.format(eE.default.Up6Ssw, { reason: l }),
                      retry: { text: eM.intl.string(eE.default["ywA+ET"]), onClick: r },
                  }),
        W = (0, h.bG)([rc.A], () => rc.A.getSetupStartedAt(d), [d]),
        X = i.useCallback(
            (e, t) => {
                (0, eS.sendUserMessage)(d, e, t);
            },
            [d],
        ),
        Y = i.useCallback(
            (e, t, n) => {
                let l = n ?? X;
                0 === K.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => D(e.comment)),
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
                                      a.push(`${t + 1}. ${z(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: K.annotations, metaComment: e, context: K.context }),
                          t,
                      ),
                      Q(d));
            },
            [K, X, d],
        ),
        Z = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of ny)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, eS.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = ny.get(e);
                            (ny.delete(e), nw(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(d) ||
                g.A.isThinking(d)) &&
                (0, eS.interruptTurn)(d);
        }, [d]),
        J = i.useCallback((e) => (0, n8.RQ)(d, e.implementation_prompt), [d]),
        [ee, et] = (function (e) {
            let [t, n] = i.useState(() => rO(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rO(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(d),
        el = i.useCallback(() => X(eM.intl.string(eE.default["t5CN3+"])), [X]),
        er = i.useCallback((e, t, n) => (0, n8.RQ)(d, e, { clarificationAnswers: t, attachments: n }), [d]),
        ea = i.useCallback((e) => (0, ro.X)(d, e), [d]),
        ei = i.useCallback((e) => (0, tB.vX)(d, e), [d]),
        es = i.useCallback((e) => (0, tW.gn)(d, "chat", Array.from(e), ei), [d, ei]),
        eu = i.useCallback(() => (0, n8.RQ)(d, eM.intl.string(eE.default.Zc7gML)), [d]),
        eo = f?.status === "restoring",
        ec = "open" === v && !eo,
        ed = x[x.length - 1],
        ef = null != ed && "assistant" === ed.role && null != ed.proposal,
        [em, eh] = i.useState(null),
        eg = ed?.clarification != null && ed.clarification.id !== em ? ed.clarification : null,
        ep = i.useCallback(() => {
            null != eg && eh(eg.id);
        }, [eg]),
        [ex, ev] = i.useState(null),
        ej = (function (e) {
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
                                summary: eM.intl.string(eE.default["o2++BO"]),
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
        eb = ed?.appBuildRequest != null && (0, nq.BL)(ed) && ed.appBuildRequest.id !== ex ? ed.appBuildRequest : null,
        ey = ej.request ?? (null == eg ? eb : null),
        ek = null == ej.request ? eg : null,
        ew = null != ey && ey === ej.request,
        { close: eC, sent: eN } = ej,
        eI = ej.request?.id,
        e_ = i.useCallback(() => {
            ew ? eC() : null != ey && ev(ey.id);
        }, [ey, ew, eC]),
        eT = i.useCallback(
            (e) => {
                (null != eI && eN(eI),
                    (0, eA.P0)({
                        text: eM.intl.formatToPlainString(eE.default.RZO35O, {
                            names: e.map((e) => e.name).join(", "),
                        }),
                        variant: "success",
                    }));
            },
            [eI, eN],
        ),
        eP = (0, h.bG)([rj.A], () => rj.A.getSettings(d), [d]),
        [eR, eL] = i.useState(null),
        e$ = rS(),
        eq =
            null != ed &&
            ((t = ed.id),
            (s = (0, rb.Mv)(x, eP?.secrets)),
            (o = rI(x)),
            x.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, nq.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !o.has(e.id) && !rE(e.settingsRequest, eP, e$.has(e.id)))),
            )),
        eD =
            null != ed &&
            "assistant" === ed.role &&
            null != ed.settingsRequest &&
            null == ed.secretRequest &&
            (0, nq.BL)(ed) &&
            ed.id !== eR &&
            ((n = ed.settingsRequest),
            (c = n.keys ?? []),
            null != eP &&
                0 !== c.length &&
                c.every((e) => {
                    let t = eP.schema.find((t) => t.key === e);
                    return null != t && ry.has(t.type);
                })) &&
            rk(ed.settingsRequest, eP) &&
            !eq
                ? ed
                : null,
        eF = null == ej.request ? eD : null,
        eO = eF?.settingsRequest ?? null,
        ez = i.useCallback(() => {
            null != eD && eL(eD.id);
        }, [eD]),
        eG = null != eO,
        [eH, eV] = i.useState(null),
        eW = ek?.id ?? ey?.id ?? eF?.id ?? (w ? "scope-setup" : void 0),
        eX = null != eg || null != ey || null != eD || w;
    i.useLayoutEffect(() => {
        let e = S.current?.getScrollerNode(),
            t = eH?.firstElementChild;
        if (null == eH || null == e || !(0, tG.vq)(t, HTMLElement) || null == eW) return;
        function n() {
            M.current && S.current?.scrollToBottom();
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
    }, [eH, eW, S, M]);
    let eY = (0, h.bG)([g.A], () => g.A.hasLoadedHistory(d), [d]),
        eZ = (function (e) {
            let t = rm(e),
                n = (0, h.bG)([tm.Ay], () => null != tm.Ay.getProject(e), [e]),
                l = (0, h.bG)([g.A], () => g.A.hasLoadedHistory(e), [e]),
                r = (0, h.bG)([g.A], () => g.A.getMessages(e), [e]),
                a = (0, h.bG)([eS.default], () => eS.default.getConnState(e), [e]),
                [s, u] = i.useState(0);
            return (
                i.useLayoutEffect(() => {
                    (0, rf.Iy)(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, a]),
                s
            );
        })(d),
        eQ = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: eY,
            historyUnavailable: (0, h.bG)([g.A], () => g.A.isHistoryUnavailable(d), [d]),
            connState: v,
        }),
        eJ = "loading" === eQ && 0 === x.length,
        e0 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < d.length; t++) e = (31 * e + d.charCodeAt(t)) % 0x7fffffff;
            return cq[e % cq.length];
        }, [d]),
        e1 = ef ? eM.intl.string(eE.default.Zc7gML) : "greeting" === eQ && 0 === x.length ? e0 : null,
        e2 = i.useMemo(() => {
            for (let e = x.length - 1; e >= 0; e--) {
                let t = x[e];
                if ("assistant" === t.role && !(0, nq.BL)(t)) return t;
            }
        }, [x]),
        e3 = null != e2,
        e5 = null != e2 ? (0, r$.S)(e2) : void 0,
        e4 = ef && ec ? eu : void 0,
        e7 = i.useCallback(() => (0, n8.RQ)(d, eM.intl.string(eE.default.EMgIuY)), [d]),
        [e6, e8] = i.useState(null),
        [e9, te] = i.useState(e3);
    (e9 !== e3 && (te(e3), e3 || e8(null)),
        i.useEffect(() => {
            if (!e3) return;
            let e = S.current?.getScrollerNode(),
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
        }, [e3, e2?.steps, L]));
    let tt = L ? e6 : "bottom",
        tn = i.useMemo(() => (null != e2 ? (0, nF.b9)(e2.steps) : ""), [e2]),
        tl = i.useMemo(() => (null != e2 ? ((0, n$.lt)(e2.steps) ?? e2.todos) : void 0), [e2]),
        tr = e2?.provisionalTodo,
        ta = null != e2 && nD(e2),
        ti = i.useMemo(() => {
            var e;
            return null != e2 ? ((e = e2.steps), r2((0, n$.Jf)(e, !0).tasks)) : void 0;
        }, [e2]);
    return (0, a.jsxs)("section", {
        ref: A,
        "data-conjure-chat": !0,
        className: c$.TE,
        children: [
            ec
                ? (0, a.jsx)(nR.A, {
                      title: eM.intl.string(eE.default.gy7byi),
                      description: eM.intl.string(eE.default["dkv/WO"]),
                      icons: cL.ir,
                      onDrop: es,
                  })
                : null,
            (0, a.jsx)(n7, {
                onJumpToActivity: O,
                line: tn,
                placement: e3 && "top" === tt ? "top" : null,
                todos: tl,
                todosLive: ta,
                provisionalTodo: tr,
                agents: ti,
            }),
            (0, a.jsxs)("div", {
                className: c$.JX,
                children: [
                    (0, a.jsx)(nT.Ch, {
                        ref: S,
                        onScroll: G,
                        scrollbarGutter: eJ ? "both-edges" : "stable",
                        className: [c$.N$, T ? null : c$.hB, eG ? c$.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rq.Fu.Provider, {
                            value: d,
                            children: (0, a.jsx)(cm, {
                                projectId: d,
                                messages: x,
                                emptyState: eQ,
                                floatingSettingsMessageId: eD?.id,
                                liveClarificationId: ek?.id,
                                onPickIdea: ec ? J : void 0,
                                onAskForIdeas: ec ? el : void 0,
                                draftHasText: ee,
                                onApprovePlan: ec ? e7 : void 0,
                                onRestoreVersion: eo || e3 ? void 0 : m,
                                scrollerRef: S,
                                stickToBottomRef: M,
                                pinned: _,
                                onUnpin: P,
                                handleRef: I,
                                onShowsLatestChange: q,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: c$.NJ,
                        children: (0, a.jsx)(cP, {
                            projectId: d,
                            thinking: e3,
                            turnStartedAt: e5,
                            restoring: eo,
                            remixStartedAt: W,
                            recalling: eJ,
                            thinkingActivity: b,
                            compacting: y,
                            saving: k,
                            projectUsage: j,
                            connState: v,
                        }),
                    }),
                    w
                        ? (0, a.jsx)("div", { ref: eV, className: c$.B5, children: (0, a.jsx)(rx, { projectId: d }) })
                        : null,
                    null == ek
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eV,
                              className: eG ? `${c$.B5} ${c$.J9}` : c$.B5,
                              children:
                                  null != ek.install_scope_switch
                                      ? (0, a.jsx)(
                                            rv,
                                            {
                                                projectId: d,
                                                clarification: ek,
                                                offer: ek.install_scope_switch,
                                                onKept: ep,
                                            },
                                            ek.id,
                                        )
                                      : (0, a.jsx)(
                                            rs,
                                            {
                                                projectId: d,
                                                clarification: ek,
                                                onSubmit: ec ? er : void 0,
                                                onDismiss: ep,
                                            },
                                            ek.id,
                                        ),
                          }),
                    null == ey
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eV,
                              className: c$.B5,
                              children: (0, a.jsx)(
                                  lu,
                                  { projectId: d, request: ey, canSend: ec, onDismiss: e_, onSent: ew ? eT : void 0 },
                                  ey.id,
                              ),
                          }),
                    null == eO
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == ek && null == ey ? eV : void 0,
                              className: c$.B5,
                              children: (0, a.jsx)(
                                  rL,
                                  { askId: eF?.id, projectId: d, request: eO, onDismiss: ez },
                                  eF?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: c$.Jx,
                children: [
                    (0, a.jsx)(n7, {
                        onJumpToActivity: O,
                        line: tn,
                        placement: e3 && "bottom" === tt ? "bottom" : null,
                        todos: tl,
                        todosLive: ta,
                        provisionalTodo: tr,
                        agents: ti,
                    }),
                    0 === K.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: c$.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(u.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: eM.intl.formatToPlainString(eE.default["7b49dS"], {
                                          count: K.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eM.intl.string(eE.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(C.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: eM.intl.string(eE.default["/zOv9+"]),
                                      onClick: () => Q(d),
                                  }),
                              ],
                          }),
                    null == V
                        ? null
                        : (0, a.jsx)("div", {
                              className: c$.qB,
                              children: (0, a.jsx)(nP.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: V.message,
                                  action: V.retry,
                              }),
                          }),
                    null == H
                        ? null
                        : (0, a.jsxs)("div", {
                              className: c$.Db,
                              children: [
                                  (0, a.jsx)(nP.w, { type: "warning", role: "status", message: H.message }),
                                  (0, a.jsx)("div", {
                                      className: c$.jU,
                                      children: (0, a.jsx)(tK.m, {
                                          text: eM.intl.string(eM.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(t1.K, {
                                              "aria-label": eM.intl.string(eM.t.WAI6xu),
                                              icon: tD.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: H.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(
                        uE,
                        {
                            projectId: d,
                            canSend: ec,
                            running: e3,
                            restoring: eo,
                            onSend: Y,
                            hasPendingContext: K.annotations.length > 0,
                            onInterrupt: ec ? Z : void 0,
                            onUploadFile: ei,
                            onImport: p,
                            onSendToOtherProjects: eX ? void 0 : ej.open,
                            onApprove: e4,
                            suggestion: e1,
                            questionOpen: eX,
                            modelSettings: N,
                            onModelSettingsChange: ea,
                            onDraftHasTextChange: et,
                            inputLocked: w,
                        },
                        eZ,
                    ),
                ],
            }),
        ],
    });
}
var cF = n(761508),
    cO = n(933294),
    cz = n(207438),
    cG = n(683438),
    cU = n(721507);
function cB(e, t) {
    return String(e).padStart(t, "0");
}
function cK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cB(l.getHours(), 2)}:${cB(l.getMinutes(), 2)}:${cB(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cB(l.getMilliseconds(), 3)}` : r;
}
var cH = n(667931);
let cV = {
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
    cW = { running: "Running", ok: "Done", error: "Failed" };
function cX(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cY(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function cZ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cQ(e) {
    return cY(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cJ = ["Arguments", "Result", "Usage", "Details"];
function c0(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function c1(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function c2(e) {
    let t = (0, cH.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cH.lp)(e) ? "interrupted" : "still running";
}
function c3(e) {
    return [cK(new Date(e.started_at).toISOString()) ?? "", cZ(e.spans.length), (0, cH.Sj)((0, cH.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function c5(e) {
    let t = (0, cH.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cH.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += c4(r, "in")),
                (l.output += c4(r, "out")),
                (l.cacheRead += c4(r, "cache_read")),
                (l.cacheWrite += c4(r, "cache_write")),
                (l.costUsd += c4(r, "cost_usd"))));
    }
    let r = cH.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function c4(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var c7 = n(738188),
    c6 = n(430993),
    c8 = n(364840),
    c9 = n(224640),
    de = n(20742);
let dt = { collapsed: new Set(), revealed: new Set() };
var dn = n(872892);
let dl = {
    op: dn.Q,
    model: dn.i3,
    tool: dn.dH,
    setup: dn.kc,
    worktree: dn.Qx,
    sandbox: dn.QH,
    build: dn.F1,
    platform: dn.Op,
    other: dn.fv,
};
function dr(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cZ(t.calls, "model call"),
                      `${cX(t.input)} in`,
                      `${cX(t.output)} out`,
                      `${cX(t.cacheRead)} cache read`,
                      `${cX(t.cacheWrite)} cache write`,
                      c1(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: dn.M1,
        children: [
            (0, a.jsx)("div", {
                className: dn.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${dn.DJ} ${dl[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: dn.o1,
                children: cH.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cY(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: dn.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${dn.nf} ${dl[e]}` }),
                                (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: cV[e] }),
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
function da(e) {
    return `conjure-perf-trace-${e}`;
}
function di(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: dn.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(u.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dn.p0} ${s + o > 85 ? dn.EU : dn.jh}`,
                children: i,
            }),
        ],
    });
}
function ds(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: c } = e,
        d = t.children.length > 0,
        f = l ? nK._ : ti.a,
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
    return (0, a.jsxs)(nO.D, {
        tag: "div",
        role: "treeitem",
        id: da(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": d ? !l : void 0,
        "aria-selected": r,
        className: `${dn.$y} ${r ? dn.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: dn.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    d
                        ? (0, a.jsx)(nO.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dn.ai,
                              onClick: h,
                              children: (0, a.jsx)(f, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: dn.YJ }),
                    (0, a.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dn.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${dn.nf} ${dl[t.category]}` }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: dn.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: dn.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: dn.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(c7.WarningIcon, { size: "xs", color: "currentColor", className: dn.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(di, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dn.M0} ${dn.Nh}`
                    : t.running
                      ? `${dn.M0} ${dn.rF}`
                      : `${dn.M0} ${dl[t.category]}`,
                duration: cQ(t),
            }),
        ],
    });
}
function du(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(nO.D, {
        tag: "div",
        role: "treeitem",
        id: da(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${dn.$y} ${l ? dn.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: dn.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: dn.ai,
                        children: (0, a.jsx)(nK._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: dn.U9 }),
                    (0, a.jsx)("span", { className: `${dn.nf} ${dn.dL}` }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: dn.MQ,
                        children: cZ(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(di, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dn.M0} ${dn.ab} ${dn.dL}`,
                duration: cY(t.totalMs),
            }),
        ],
    });
}
function dc(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(u.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: dn._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: dn.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${dn.nf} ${dl[t.category]}` }),
                          (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [c0("Start", `+${cY(e.start)}`), c0("Duration", cQ(e))];
                      e.count > 1
                          ? t.push(
                                c0("Calls", String(e.count)),
                                c0("Longest call", cY(e.maxMs)),
                                c0("Spread over", cY(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(c0("Self time", cY(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(c0("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(c0("Notes", l.join(", "))),
                          null != e.span.error && t.push(c0("Error", e.span.error)));
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
                              s = "cost_usd" === t ? c1(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), c0(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cJ.flatMap((e) => {
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
                                            className: dn.xd,
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
                                                            className: dn.vl,
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
function dd(e) {
    let { trace: t } = e,
        n = i.useMemo(() => c5(t), [t]);
    return (0, a.jsx)(dr, { stats: n });
}
function df(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cH.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? dt : (0, cH.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cH.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cH.x7)(t)), l((n) => (0, cH._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, cH.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cH.IE)(t, e);
                        null != n && l((e) => (0, cH.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cH.IE)(t, e);
                        null != n && l((e) => (0, cH.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, cH.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, cH.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cH.hB)(t));
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
        h = (0, cH.dj)(t),
        g = i.useMemo(() => (0, cH.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        x = i.useCallback(
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
                    null != t && (c(t.key), document.getElementById(da(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, f, l, c, o, d],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(c6.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: dn.z,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: c2(t),
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: c3(t),
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
                                      children: `${cZ(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dd, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: dn.KE,
                        children: [
                            (0, a.jsx)(C.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(C.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(C.$, {
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
                        "aria-activedescendant": null == o ? void 0 : da(o),
                        className: dn.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dn.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: dn.So,
                                        children: (0, a.jsx)(u.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: dn.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                u.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dn.io} ${(e / h) * 100 > 85 ? dn.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cY(e),
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
                                          ds,
                                          {
                                              node: e.node,
                                              extent: h,
                                              collapsed: r.has(e.key),
                                              selected: e.key === o,
                                              onSelect: c,
                                              onToggle: d,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(du, { row: e, extent: h, selected: e.key === o, onReveal: f }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c8.j, { children: (0, a.jsx)(dc, { node: s }) }),
        ],
    });
}
function dm(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, h.bG)([o9.A], () => o9.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(c9.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(de.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(c6.c, {
                      children: (0, a.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(df, { trace: i }),
        ],
    });
}
let dh = { running: dn.Vf, ok: dn.mo, error: dn.Sr };
function dg(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${dn.Om} ${dh[t]}`, role: "img", "aria-label": cW[t] });
}
function dp(e, t) {
    (0, eD.openModal)((n) => (0, a.jsx)(dm, { ...n, projectId: e, traceId: t }));
}
function dx(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dp(t, n.id), [t, n.id]);
    return (0, a.jsxs)(nO.D, {
        className: dn.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: dn.sU,
                children: [
                    (0, a.jsx)(dg, { status: (0, cH.lQ)(n) }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: dn._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: c2(n),
                    }),
                ],
            }),
            (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: c3(n) }),
            null == l
                ? null
                : (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dv(e) {
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
            (0, cU.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(tn.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: tn.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(tl.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(tr.rX, {
                    children: (0, a.jsx)(tr.Dr, {
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
            return (0, a.jsx)(t1.K, {
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
function dj(e) {
    let { projectId: t } = e,
        n = (0, h.yK)([o9.A], () => o9.A.getTimingTraces(t), [t]),
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
                    let t = e.map(c5);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cH.BF.map((e) => ({
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
              className: dn.Ie,
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
              className: dn.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: dn.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: dn.fH,
                              children: (0, a.jsx)(cG.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dv, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nT.Ch, {
                      className: dn.XG,
                      children: [
                          (0, a.jsx)(dr, { stats: c }),
                          0 === o.length
                              ? (0, a.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: dn.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dx, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function db(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dy(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dk(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dw(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dC(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dN(e) {
    return eM.intl.string("preview" === e ? eE.default["2yLYlG"] : eE.default.eiAi57);
}
let dA = ["all", "preview", "stable", "web"];
function dS(e) {
    switch (e.reason) {
        case "local":
            return eM.intl.string(eE.default.mUeKML);
        case "unconfigured":
            return eM.intl.string(eE.default.bGefb5);
        case "unauthorized":
            return eM.intl.string(eE.default.KLx6Bb);
        default:
            return null != e.detail
                ? eM.intl.formatToPlainString(eE.default.t09Q6q, { detail: e.detail })
                : eM.intl.string(eE.default["t+tG59"]);
    }
}
function dI(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : eM.intl.formatToPlainString(eE.default["XO/bN4"], {
              p50: db(e.memory_p50_bytes ?? 0),
              p999: db(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dE = {
    db: () => eE.default["7l+DFG"],
    db_preview: () => eE.default.FAuffi,
    runtime: () => eE.default["Gkl+ab"],
    runtime_preview: () => eE.default.ynpJzv,
    bot: () => eE.default["5/i0cj"],
    bot_preview: () => eE.default.m2jsnw,
};
var dM = n(911608),
    d_ = n(177427);
function dT(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: d_.KE,
        children: [
            (0, a.jsx)("div", {
                className: d_.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(o.y, { type: o.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(u.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: eM.intl.string(eE.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eM.intl.formatToPlainString(eE.default.INVO50, { time: dw(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(C.$, { variant: "secondary", size: "sm", text: eM.intl.string(eE.default.oKEgiu), onClick: l }),
        ],
    });
}
function dP(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: d_.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(u.E, { variant: "text-xs/semibold", color: "text-muted", className: d_.Gf, children: t }),
            n,
        ],
    });
}
function dR(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: d_.N8,
        children: [
            (0, a.jsxs)("div", {
                className: d_.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: d_.kS,
                        children: [i, (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: d_.kS,
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
function dL(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: d_.N8,
        children: [
            (0, a.jsxs)("div", {
                className: d_.x7,
                children: [
                    (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dM.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? d_.dh : void 0,
            }),
        ],
    });
}
function d$(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dR, {
            label: eM.intl.string(eE.default.SXP7pD),
            value: eM.intl.string(eE.default.E5hKVi),
            hint: dS(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dR, {
            label: eM.intl.string(eE.default.SXP7pD),
            value: "\u2014",
            hint: eM.intl.string(eE.default.AGvoMJ),
        });
    let l = dI(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dR, { label: eM.intl.string(eE.default["H/X+FI"]), value: dy(n.cpu_ms) }),
            null != l && (0, a.jsx)(dR, { label: eM.intl.string(eE.default.lmFmMO), value: l }),
        ],
    });
}
function dq(e) {
    let { analytics: t } = e,
        n = eM.intl.string(eE.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dP, {
            title: n,
            children: (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: dS(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dE[t] : null) ? eM.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dP, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(u.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: eM.intl.string(eE.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dR,
                          {
                              label: n,
                              value: eM.intl.formatToPlainString(eE.default["w/2voO"], { cpu: dy(t.cpu_ms) }),
                              hint: dI(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dD = n(678708),
    dF = n(414499),
    dO = n(714800),
    dz = n(81466),
    dG = n(424383),
    dU = n(664121),
    dB = n(816943),
    dK = n(268791),
    dH = n(514042),
    dV = n(872351),
    dW = n(708988),
    dX = n(150934),
    dY = n(417270);
let dZ = "Restart Agent",
    dQ = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dJ(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function d0(e, t) {
    return { label: e, value: null != t && "" !== t ? dw(t) : "Unknown", icon: "calendar" };
}
function d1(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function d2(e, t, n, l) {
    let [r, a] = dQ[n.status];
    return { label: e, value: `${d1(n.bytes)} of ${d1(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function d3(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dw(e.at);
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
let d5 = { main: "Main vs Remote", wip: "WIP vs Remote" };
function d4(e) {
    let t = `container ${dJ(e.local)} \xb7 remote ${dJ(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: d5[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dk(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dk(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dk(n)} Ahead, ${dk(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let d7 = ["main", "wip"];
var d6 = n(400154);
let d8 = {
        checkout: dD.FolderIcon,
        edit: lc.PencilIcon,
        remote: dF.h,
        commits: dO.e,
        calendar: dz.CalendarIcon,
        save: dG.L,
        objects: dU.R,
        download: dB.$,
        size: dK.$,
        file: dH.FileIcon,
    },
    d9 = {
        ok: [rM.y, t8.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [c7.WarningIcon, t8.A.colors.ICON_FEEDBACK_WARNING],
        error: [s0.a, t8.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dV.z, t8.A.colors.ICON_MUTED],
        behind: [dW.M, t8.A.colors.ICON_MUTED],
    };
function fe(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, h.bG)([o9.A], () => o9.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cz.DK)(t), [t]),
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
                    `Updated ${dw(r)}`,
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
    return (0, a.jsxs)(dP, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: d6.Lj,
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
                    if (!e.running || null != e.localError) return [d3(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            d3(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dk(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = d7.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(d4))
                        : l.push(
                              { label: "Main", value: dJ(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dJ(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dk(e.commits) : "Unknown", icon: "commits" },
                            d0("Oldest Commit", e.oldest),
                            d0("Newest Commit", e.newest),
                            d3(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dk(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dk(t.loose)} loose (${db(t.looseBytes)}) \xb7 ${dk(t.packed)} packed in ${n} (${db(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dk(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dk(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                d2(
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
                                  d2("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = d8[r],
                        [u, o] = null != i ? d9[i] : [null, void 0];
                    return (0, a.jsx)(
                        dR,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: t8.A.colors.ICON_MUTED }),
                            state: null != u ? (0, a.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function ft(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: c,
        } = (function (e) {
            let t = (0, h.bG)([o9.A], () => o9.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cz.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = o9.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cz.gX)(e);
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
            let u = i.useCallback(() => (0, cz.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dZ,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eN.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: c });
        }, [o, c]);
    return (0, a.jsxs)("div", {
        className: d6.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: d6.nM,
                children: [
                    (0, a.jsx)(dX.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(C.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dY.RetryIcon,
                        text: dZ,
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
                            return `Restarted \xb7 new instance since ${dw(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dw(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fn(e, t) {
    return (0, a.jsx)(dR, {
        label: e,
        value: eM.intl.formatToPlainString(eE.default.yHJxuP, { count: dk((0, cA.aM)(t)) }),
        hint: `${dk(t.input_tokens)} in \xb7 ${dk(t.output_tokens)} out \xb7 ${dk(t.cache_read_input_tokens)} cache read`,
    });
}
function fl(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        c,
        d,
        f,
        m,
        { projectId: p, status: x, fetchState: v, onRefresh: j } = e,
        {
            lastTurn: b,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: N,
            turnRunning: A,
            handleForceCompaction: S,
            handleForceCompactionOverride: I,
            handleRestartWorkspace: E,
            lifetime: M,
            limits: _,
            session: T,
            contextCeiling: P,
        } = ((t = (0, h.bG)([o9.A], () => o9.A.getLastTurnUsage(p), [p])),
        (n = (0, h.bG)([o9.A], () => o9.A.getLastCompaction(p), [p])),
        (l = (0, h.bG)([o9.A], () => o9.A.getLastCompactionDecline(p), [p])),
        (r = (0, h.bG)([o9.A], () => o9.A.getForceCompactionState(p), [p])),
        (s = (0, h.bG)([o9.A], () => o9.A.getSandboxRestartState(p), [p])),
        (o = (0, h.bG)([g.A], () => g.A.isThinking(p), [p])),
        (c = i.useCallback(() => (0, cz.Lj)(p), [p])),
        (d = i.useCallback(() => (0, cz.Lj)(p, !0), [p])),
        (f = i.useCallback(() => (0, cz.bq)(p), [p])),
        (m = x?.agent?.limits ?? null),
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
            limits: m,
            session: x?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? m?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: d6.Mf,
        children: [
            (0, a.jsx)(dT, { generatedAt: x?.generated_at ?? null, fetchState: v, onRefresh: j }),
            (0, a.jsx)(dP, {
                title: eM.intl.string(eE.default.JghNal),
                children:
                    null == M
                        ? (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eM.intl.string(eE.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dR, {
                                      label: eM.intl.string(eE.default["9nqym2"]),
                                      value: dk((0, cA.a7)(M.cost_usd)),
                                      hint: eM.intl.formatToPlainString(eE.default.NCdUIh, { count: dk(M.turns) }),
                                  }),
                                  fn(eM.intl.string(eE.default.xtxP0e), M.orchestrator),
                                  fn(eM.intl.string(eE.default["9Sj3SX"]), M.codegen),
                                  fn(eM.intl.string(eE.default.ANCEo3), (0, cA.wU)(M.compaction)),
                                  x?.agent?.outcomes != null &&
                                      Object.keys(x.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dR, {
                                          label: eM.intl.string(eE.default.SQHm7C),
                                          value: Object.entries(x.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dk(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dP, {
                title: eM.intl.string(eE.default.dZHPE5),
                children:
                    null == b
                        ? (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eM.intl.string(eE.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  fn(eM.intl.string(eE.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dR, {
                                      label: eM.intl.string(eE.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, cA.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dP, {
                title: eM.intl.string(eE.default.NbRk9a),
                children: [
                    null != y && null != P
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dL, {
                                      label: eM.intl.string(eE.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: P,
                                      formatValue: dk,
                                  }),
                                  (0, a.jsx)(dR, {
                                      label: eM.intl.string(eE.default.mRbSns),
                                      value: `${dk(y.tokensBefore)} \u{2192} ${dk(y.tokensAfter)}`,
                                      hint: eM.intl.formatToPlainString(eE.default.Vq3skS, {
                                          count: dk(y.retainedMessages),
                                          time: dw(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != P
                                      ? eM.intl.formatToPlainString(eE.default.GMLCNv, { ceiling: dk(P) })
                                      : eM.intl.string(eE.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dR, {
                            label: eM.intl.string(eE.default["4BX5KK"]),
                            value: `${dk(k.projected)} / ${dk(k.threshold)}`,
                            critical: !0,
                            hint: eM.intl.formatToPlainString(eE.default["6ngCax"], { time: dw(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: d6.Lj,
                        children: [
                            (0, a.jsx)(C.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eM.intl.string(eE.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: S,
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eM.intl.string(eE.default.wox6Ev);
                                    if ("pending" === e) return eM.intl.string(eE.default.OcPHQ1);
                                    let t = dw(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return eM.intl.formatToPlainString(eE.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? eE.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? eE.default.YZb4hK
                                              : eE.default.ZoUSVK;
                                    return eM.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(C.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: eM.intl.string(eE.default.ZxG2AI),
                                            onClick: I,
                                        }),
                                        (0, a.jsx)(u.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: eM.intl.string(eE.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: d6.Lj,
                        children: [
                            (0, a.jsx)(C.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eM.intl.string(eE.default["5qCjBu"]),
                                loading: "pending" === N,
                                disabled: "pending" === N || A,
                                onClick: E,
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof N && "restarted" !== N.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eM.intl.string(eE.default.mlok8D);
                                    if ("pending" === e) return eM.intl.string(eE.default["1ugSyK"]);
                                    let t = dw(e.observedAt);
                                    return eM.intl.formatToPlainString(
                                        "restarted" === e.outcome ? eE.default["76mfqO"] : eE.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(N),
                            }),
                        ],
                    }),
                    (0, a.jsx)(ft, { projectId: p }),
                ],
            }),
            (0, a.jsx)(fe, { projectId: p }),
            (null != T || x?.analytics != null) &&
                (0, a.jsxs)(dP, {
                    title: eM.intl.string(eE.default.EsSzCS),
                    children: [
                        null != T &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dR, {
                                        label: eM.intl.string(eE.default.CLXHAs),
                                        value: dw(T.instance_since),
                                        hint: eM.intl.string(eE.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dR, {
                                        label: eM.intl.string(eE.default["8V8e1Z"]),
                                        value: dk(T.sockets),
                                    }),
                                    (0, a.jsx)(dR, {
                                        label: eM.intl.string(eE.default["4pBzYW"]),
                                        value: T.turn_inflight
                                            ? eM.intl.string(eE.default.Wv025I)
                                            : eM.intl.string(eE.default["7/lsFY"]),
                                    }),
                                    T.queued_messages > 0 &&
                                        (0, a.jsx)(dR, {
                                            label: eM.intl.string(eE.default["3oUYnv"]),
                                            value: dk(T.queued_messages),
                                        }),
                                ],
                            }),
                        x?.analytics != null && (0, a.jsx)(d$, { analytics: x.analytics }),
                    ],
                }),
            null != _ &&
                (0, a.jsxs)(dP, {
                    title: eM.intl.string(eE.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dR, {
                            label: eM.intl.string(eE.default.IlDBN3),
                            value: dk(_.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dR, {
                            label: eM.intl.string(eE.default["ZdzKR+"]),
                            value: eM.intl.formatToPlainString(eE.default.yHJxuP, {
                                count: dk(_.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(dR, {
                            label: eM.intl.string(eE.default.cIhN2W),
                            value: eM.intl.formatToPlainString(eE.default.yHJxuP, {
                                count: dk(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dR, {
                            label: eM.intl.string(eE.default["+fOn/q"]),
                            value: dk(_.max_user_message_chars),
                        }),
                        (0, a.jsx)(dR, { label: eM.intl.string(eE.default.kIHga0), value: dk(_.max_build_attempts) }),
                        (0, a.jsx)(dR, { label: eM.intl.string(eE.default.Iw03yW), value: dk(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fr = n(629584),
    fa = n(531893);
function fi(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fa.ut,
              children: (0, a.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: eM.intl.string(eE.default.h1SE6R),
              }),
          });
}
function fs(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fa.qf,
              children: [
                  (0, a.jsx)(u.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: eM.intl.string(eE.default.h1SE6R),
                  }),
                  (0, a.jsx)(u.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: eM.intl.string(eE.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: fa.qf,
              children: [
                  (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fu(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fa.ps,
              children: (0, a.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: eM.intl.string(eE.default.V7Ri8H),
              }),
          })
        : null;
}
var fo = n(109079);
let fc = i.memo(function (e) {
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
        className: fo.vK,
        children: [
            (0, a.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fo.Mt,
                selectable: !0,
                children: cK(n.ts) ?? n.ts,
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
                className: fo.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fo.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fo.Cq, children: (0, a.jsx)(au.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fo.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(au.v, {
                                text: eM.intl.string(eE.default.TrC9c8),
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
                                  (0, a.jsxs)(nO.D, {
                                      className: fo.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": eM.intl.string(eE.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(ti.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nK._, {
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
                                                  eM.intl.formatToPlainString(
                                                      "[\u2026]" === c.marker
                                                          ? eE.default.kUhyUv
                                                          : eE.default["N+fphl"],
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
                                          className: fo.dF,
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
function fd(e) {
    let { projectId: t } = e,
        n = (0, h.bG)([cO.A], () => cO.A.getLogs(t), [t]),
        l = (0, h.bG)([cO.A], () => cO.A.getHistoryState(t, "logs")),
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
        m = i.useRef(!0);
    i.useEffect(() => {
        m.current && f.current?.scrollToBottom();
    }, [d]);
    let g = i.useCallback(() => {
            let e = f.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        p = i.useMemo(
            () =>
                dA.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dN(e);
                            case "web":
                                return eM.intl.string(eE.default.IVzfVV);
                            default:
                                return eM.intl.string(eE.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: fo.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fo.y4,
                children: [
                    (0, a.jsx)(fr.I, {
                        look: "pill",
                        "aria-label": eM.intl.string(eE.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fo.KT,
                        children: (0, a.jsx)(cG.I, {
                            query: o,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: eM.intl.string(eE.default["m2+37Y"]),
                            "aria-label": eM.intl.string(eE.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(fi, { state: l }),
            (0, a.jsxs)(nT.Ch, {
                ref: f,
                onScroll: g,
                overflow: "auto",
                className: fo.sx,
                children: [
                    (0, a.jsx)(fu, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fs, {
                              state: l,
                              emptyTitle: eM.intl.string(eE.default.S7qlPG),
                              emptyBody: eM.intl.string(eE.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(u.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eM.intl.string(eE.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(fc, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function ff(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dP, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eM.intl.string(eE.default.umcjif),
                      }),
        })
    );
}
function fm(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dR, {
                      label: eM.intl.formatToPlainString(eE.default["01ZMS4"], { env: dN(n) }),
                      value: ((t = l.connected), eM.intl.string(t ? eE.default.Wv025I : eE.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dR, {
                      label: eM.intl.string(eE.default["z1dh+F"]),
                      value: dk(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dw(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dR, { label: eM.intl.string(eE.default.Iz5GnJ), value: dk(l.guild_count) }),
                  (0, a.jsx)(dR, {
                      label: eM.intl.string(eE.default["7UqtNv"]),
                      value: dk(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? eM.intl.formatToPlainString(eE.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dw(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dR, {
                          label: eM.intl.string(eE.default["x3+JXJ"]),
                          value: dk(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dR, { label: dN(n), value: eM.intl.string(eE.default.lTHQss) });
}
function fh(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dR, {
        label: dN(t),
        value: eM.intl.formatToPlainString(eE.default["Xq+wHT"], {
            requests: dk(n.requests),
            failures: dk(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? eM.intl.formatToPlainString(eE.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dw(n.last_failure.at),
                  })
                : eM.intl.formatToPlainString(eE.default["7KlGT6"], { time: dw(n.since) }),
    });
}
function fg(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dR, {
                label: eM.intl.formatToPlainString(eE.default["92gVTm"], { env: dN(t) }),
                value: dk(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dR,
                    {
                        label: eM.intl.formatToPlainString(eE.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? eM.intl.formatToPlainString(eE.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? eM.intl.formatToPlainString(eE.default.wxAWNv, { time: dw(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fp(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dR, {
        label: dN(t),
        value: eM.intl.formatToPlainString(eE.default.suAOj9, { calls: dk(n.calls), errors: dk(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fx(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dP, {
            title: t,
            children: (0, a.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eM.intl.string(eE.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dP, {
        title: t,
        children: [
            (0, a.jsx)(dR, {
                label: eM.intl.string(eE.default.xtD4Zp),
                value: dk(n.requests),
                hint: eM.intl.formatToPlainString(eE.default["7KlGT6"], { time: dw(n.since) }),
            }),
            (0, a.jsx)(dR, { label: eM.intl.string(eE.default.gfRhR3), value: dk(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dL, {
                              label: eM.intl.string(eE.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dy,
                          }),
                          (0, a.jsx)(dR, {
                              label: eM.intl.string(eE.default.mSKImM),
                              value: dy(r),
                              hint: eM.intl.formatToPlainString(eE.default.JqMU05, {
                                  total: dy(n.cpu_ms_total),
                                  wall: dy(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dR, {
                      label: eM.intl.string(eE.default.LEJ5r3),
                      value: eM.intl.string(eE.default["2Ekb2b"]),
                      hint: eM.intl.string(eE.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dR, { label: eM.intl.string(eE.default.xvmL1D), value: dy(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dR, {
                    label: eM.intl.string(eE.default["4sQYwH"]),
                    value: dk(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(dR, {
                label: eM.intl.string(eE.default.bQenOy),
                value: dk(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: eM.intl.formatToPlainString(eE.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dR, { label: eM.intl.string(eE.default.xgpn4Y), value: dC(n.build) }),
        ],
    });
}
function fv(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: eM.intl.string(eE.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: eM.intl.string(eE.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: eM.intl.string(eE.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dP, {
        title: eM.intl.string(eE.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dR, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dR, {
                                  label: eM.intl.formatToPlainString(eE.default.u7kJJ4, { env: n }),
                                  value: db(l.r2_bytes),
                                  hint: eM.intl.formatToPlainString(
                                      l.r2_truncated ? eE.default.lH0oQw : eE.default.m9h02S,
                                      { count: dk(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dL, {
                                      label: eM.intl.formatToPlainString(eE.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: db,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fj(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: d6.Mf,
        children: [
            (0, a.jsx)(dT, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fx, {
                            title: eM.intl.string(eE.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fx, {
                            title: eM.intl.string(eE.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fv, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(ff, {
                                title: eM.intl.string(eE.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fm, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(ff, {
                                title: eM.intl.string(eE.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fh, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(ff, {
                                title: eM.intl.string(eE.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fg, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(ff, {
                                title: eM.intl.string(eE.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fp, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dq, { analytics: t.analytics }),
                        (0, a.jsxs)(dP, {
                            title: eM.intl.string(eE.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dR, {
                                    label: eM.intl.string(eE.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dC(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dR, {
                                    label: eM.intl.string(eE.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dC(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fb = n(592465);
function fy(e) {
    let { projectId: t, onClose: n } = e,
        l = e$(),
        [r, s] = i.useState(() => (l && eP?.projectId === t ? "trace" : "logs")),
        u = (0, h.bG)([o9.A], () => o9.A.getStatus(t), [t]),
        o = (0, h.bG)([o9.A], () => o9.A.getFetchState(t), [t]),
        c = i.useCallback(() => {
            ((0, cz.R7)(t), (0, cz.DK)(t));
        }, [t]);
    (i.useEffect(() => c(), [c]), i.useEffect(() => (0, eS.subscribeDebugBacklog)(t), [t]));
    let d = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == eP || eP.projectId !== e) return null;
            let { traceId: t } = eP;
            return ((eP = null), t);
        })(t);
        return null != e && (dp(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        d();
    }, [d]),
        eR(t, () => {
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
                        logs: cO.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, eA.P0)({ text: eM.intl.string(eE.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        m = eM.intl.string(eE.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: fb.nd,
        "aria-label": m,
        children: [
            (0, a.jsxs)(tO.Ay, {
                "aria-label": m,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(tO.Ay.Icon, {
                            icon: oF.CopyIcon,
                            tooltip: eM.intl.string(eE.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(tO.Ay.Icon, { icon: tD.P, tooltip: eM.intl.string(eM.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(tO.Ay.ChannelIcon, { icon: oz.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(tO.Ay.Title, { children: m }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: fb.rf,
                children: [
                    (0, a.jsxs)(cF.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": eM.intl.string(eE.default.RvvWIh),
                        className: fb.vR,
                        children: [
                            (0, a.jsx)(cF.V.Item, { id: "logs", children: eM.intl.string(eE.default["+VRYCm"]) }),
                            (0, a.jsx)(cF.V.Item, { id: "worker", children: eM.intl.string(eE.default["50D0FZ"]) }),
                            (0, a.jsx)(cF.V.Item, { id: "agent", children: eM.intl.string(eE.default.UkbTK1) }),
                            l ? (0, a.jsx)(cF.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(fd, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fj, { status: u, fetchState: o, onRefresh: c })
                          : "trace" === r && l
                            ? (0, a.jsx)(dj, { projectId: t })
                            : (0, a.jsx)(fl, { projectId: t, status: u, fetchState: o, onRefresh: c }),
                ],
            }),
        ],
    });
}
var fk = n(365912),
    fw = n(873715);
function fC(e) {
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
let fN = Object.freeze({ x: -1, y: -1 });
function fA(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fC(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fS = n(192888);
function fI(e, t) {
    return (0, fS.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fA, () => ({ status: "failed" }));
}
var fE = n(108308);
let fM = { x: 25, y: 21 };
function f_(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fT(e, t, n, l) {
    let r = f_(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fP(e, t) {
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
function fL(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: c, annotations: d } = en(o),
        f = (0, p.Zv)(o),
        m = (0, eD.useHasAnyModalOpen)(),
        g = (0, h.bG)([lb.default], () => lb.default.getCurrentUser()),
        x = g?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [N, A] = i.useState(null),
        [S, I] = i.useState(!1),
        E = i.useRef(null),
        M = i.useRef(null),
        _ = i.useRef(null),
        [T, P] = i.useState(null),
        [R, L] = i.useState(!1),
        [$, B] = i.useState(null),
        [K, H] = i.useState(null),
        V = i.useRef(!1),
        [Y, Z] = i.useState(!1),
        [et, el] = i.useState(null),
        er = c && !f && !m;
    null == $ || (er && $.projectId === o) || B(null);
    let ea = $?.projectId ?? null;
    i.useEffect(() => {
        if (null != ea) return () => (0, n8.xJ)(ea, "design");
    }, [ea]);
    let ei = tJ(r, er);
    i.useEffect(() => {
        if (!er || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fw.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? fR(t.response) : null;
                    null == n ? w(!0) : (j(n), J(o, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [er, r, o]);
    let es = i.useRef(null);
    (i.useEffect(() => {
        if (!er || null == ei || null == o) return;
        if (null == v) {
            es.current = ei;
            return;
        }
        if (tQ(es.current, ei)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            es.current = ei;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fw.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ed.current) return;
                        let l = fR(e.response);
                        null != l && (j(l), J(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fC(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = W(o)).active &&
                                0 !== r.size &&
                                X(o, {
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
    }, [er, ei, v, d, o, r]),
        i.useEffect(() => {
            if (!er)
                return () => {
                    (A(null), B(null), el(null), j(null));
                };
        }, [er]));
    let eu = i.useRef(null),
        eo = i.useRef(null),
        ec = i.useRef(!1),
        ed = i.useRef(!1);
    i.useEffect(() => {
        ((ed.current = er), er || ((eu.current = null), (eo.current = null), (_.current = null), I(!1)));
    }, [er]);
    let ef = i.useCallback(
            function e() {
                if (ec.current) return;
                let t = eu.current;
                if (null == t) return;
                eu.current = null;
                let n = r();
                null != n &&
                    ((ec.current = !0),
                    fI(n, t).then((t) => {
                        if (((ec.current = !1), ed.current)) {
                            if ("picked" !== t.status || fz(t.target, ev.current.rect, ev.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? A(null)
                                    : "unsupported" === t.status && L(!0);
                            else {
                                let e = F(t.target);
                                (P((t) => (fO(t, e) ? t : e)),
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
        em = i.useCallback(() => {
            if (null == $) return;
            let e = !V.current;
            (H({ at: $.at, label: $.label, draft: $.draft, instant: e }), Z(e), B(null));
        }, [$]);
    (i.useEffect(() => {
        if (!Y) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => Z(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [Y]),
        i.useEffect(() => {
            if (null == K) return;
            let e = setTimeout(() => H(null), fD);
            return () => clearTimeout(e);
        }, [K]));
    let eh = null == v || null == ei || v.viewport.width < 1 ? 1 : ei.width / v.viewport.width,
        eg = null != v || k,
        ep = i.useMemo(() => v?.elements ?? [], [v]),
        ev = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ev.current = { rect: ei, scale: eh };
    }, [ei, eh]);
    let eb = i.useCallback(
            (e, t, n) => {
                null != o &&
                    ((0, n8.xJ)(o, "design"),
                    el(null),
                    (V.current = !1),
                    B({ projectId: o, target: e, anchor: t, draft: "", at: n, label: F(e) }));
            },
            [o],
        ),
        ey = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / eh, y: (e.clientY - t.top) / eh }), [eh]),
        ek = i.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = E.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = M.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ek);
    let ew = i.useCallback(
            (e) => {
                if (null == ei || null != et) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), ek(), I(!0), null != $)) {
                    (Math.abs(e.clientX - $.at.x) > fF || Math.abs(e.clientY - $.at.y) > fF) && (V.current = !0);
                    return;
                }
                if (!eg) return void A(null);
                let t = ey(e, ei);
                if (R) {
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
                        })(ep, t.x, t.y),
                        n = null != e && fz(e, ei, eh) ? null : e;
                    if (null != n) {
                        let e = F(n);
                        P((t) => (fO(t, e) ? t : e));
                    }
                    A((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = eo.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((eo.current = n), (eu.current = n), ef());
            },
            [ei, eh, eg, ey, R, ep, $, et, ek, ef],
        ),
        eC = null == et ? null : d.find((e) => e.id === et.id),
        eN = er && (S || $?.target.marker != null || eC?.target.marker != null);
    i.useEffect(() => {
        if (eN)
            return () => {
                let e = r();
                null != e && fI(e, fN);
            };
    }, [eN, r]);
    let eA = i.useCallback(() => {
        (I(!1), A(null), (eo.current = null), (eu.current = null));
    }, []);
    i.useEffect(() => {
        if (!er || !S || !eg || R || null != $ || null != et) return;
        let e = _.current,
            { rect: t, scale: n } = ev.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((eo.current = l), (eu.current = l), ef());
    }, [er, S, eg, R, $, et, ef]);
    let eI = i.useCallback(
            (e) => {
                if (null != $ || null != et) {
                    (em(), el(null));
                    return;
                }
                if (null == N || null == ei) return;
                let t = ey(e, ei);
                eb(
                    N,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? q
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(N, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [N, ei, ey, $, et, eb, em],
        ),
        e_ = i.useCallback(() => {
            null != o && (A(null), null != ex(o) ? ej(o) : Q(o));
        }, [o]),
        eT = i.useCallback(() => {
            null != o &&
                (null != $
                    ? em()
                    : et?.confirmingRemove === !0
                      ? el({ ...et, confirmingRemove: !1 })
                      : null != et
                        ? el(null)
                        : e_());
        }, [o, $, et, em, e_]),
        eP = i.useRef(eT),
        eR = i.useRef(o),
        eL = i.useRef(e_);
    i.useLayoutEffect(() => {
        ((eP.current = eT), (eR.current = o), (eL.current = e_));
    });
    let e$ = i.useRef(null);
    i.useEffect(() => {
        if (er)
            return (
                tU.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        tU.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eP.current());
        }
        function t(e) {
            let t = e.target;
            !(0, tG.vq)(t) ||
                e$.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fk.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eR.current || null == ex(eR.current)) && eL.current());
        }
    }, [er, s]);
    let eq = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eT());
                    return;
                }
                if (null != $ || null != et || 0 === ep.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == N ? -1 : ep.findIndex((e) => e.ref === N.ref);
                    A(ep[(n + (t ? 1 : -1) + ep.length) % ep.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != N &&
                    (e.preventDefault(),
                    eb(N, q, { x: (ei?.left ?? 0) + N.rect.x * eh, y: (ei?.top ?? 0) + N.rect.y * eh }));
            },
            [o, $, et, ep, N, eb, eT, ei, eh],
        ),
        eF = i.useCallback(
            (e) => {
                null == o ||
                    null == $ ||
                    ((D($.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, eS.sendUserMessage)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = F(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${G}${r}${U}${z(e)}
${t.trim()}`;
                            })($.target, $.draft),
                            e,
                        ),
                        em(),
                        A(null)));
            },
            [o, $, em],
        ),
        eO = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, tB.vX)(o, e)), [o]),
        ez = i.useCallback(() => {
            if (null != o && null != et && null != x && D(et.draft)) {
                var e, t;
                let n, l;
                ((e = et.id),
                    (t = et.draft.trim()),
                    null != (l = (n = W(o)).annotations.find((t) => t.id === e)) &&
                        ee(l, x) &&
                        X(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    el({ ...et, editing: !1 }));
            }
        }, [o, et, x]),
        eG = i.useCallback(() => {
            if (null != o && null != et && null != x) {
                var e;
                let t, n;
                ((e = et.id),
                    null != (n = (t = W(o)).annotations.find((t) => t.id === e)) &&
                        ee(n, x) &&
                        X(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    el(null));
            }
        }, [o, et, x]),
        eU = c
            ? b
                ? eM.intl.string(eE.default["Eb/YV9"])
                : k
                  ? eM.intl.string(eE.default.FD30bh)
                  : eM.intl.formatToPlainString(eE.default.dTSqLF, { count: d.length })
            : "",
        eB = er && null != ei,
        eK = S && null == et,
        eH = $?.target ?? eC?.target ?? null,
        eV = $ ?? K,
        eW = $ ?? (K?.instant === !0 ? null : K),
        eX =
            null != eC && null != ei
                ? (function (e, t) {
                      let { left: n, top: l } = fP(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fT(eC.target, eC.anchor, ei, eh), ei)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eC?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eC;
            fI(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eC, r]),
        (0, tz.createPortal)(
            (0, a.jsxs)("div", {
                ref: e$,
                className: fE.Li,
                children: [
                    (0, a.jsx)(nB.A, {
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
                                      className: fE.MT,
                                      style: { left: ei.left, top: ei.top, width: ei.width, height: ei.height },
                                      "data-plain-cursor": eK ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": eM.intl.string(eE.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ew,
                                      onMouseLeave: eA,
                                      onClick: eI,
                                      onKeyDown: eq,
                                  }),
                                  null != N && null == N.marker && null == $ && null == et
                                      ? (0, a.jsx)(fG, { box: f_(N, ei, eh) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: E,
                                      className: fE.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fE.xz,
                                          "data-shown": null != N && null == et && null == $ ? "" : void 0,
                                          "data-instant": Y ? "" : void 0,
                                          children: (0, a.jsxs)(u.E, {
                                              variant: "text-xs/medium",
                                              className: fE.Ux,
                                              children: [
                                                  null == T
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fE.Tl, children: T.kind }),
                                                  null == T || "" === T.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fE.kh,
                                                            children: [" ", T.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: fE.Y,
                                      children: eK ? (0, a.jsx)("div", { className: fE.u }) : null,
                                  }),
                                  null == eW
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fE.aZ,
                                            style: {
                                                transform: `translate3d(${eW.at.x + 20}px, ${eW.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fE.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == $ ? "" : void 0,
                                                children: (0, a.jsxs)(u.E, {
                                                    variant: "text-xs/medium",
                                                    className: fE.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fE.Tl,
                                                            children: eW.label.kind,
                                                        }),
                                                        "" === eW.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fE.kh,
                                                                  children: [" ", eW.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eH && null == eH.marker
                                      ? (0, a.jsx)("div", {
                                            className: fE.D0,
                                            style: f_(eH, ei, eh),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fT(e.target, e.anchor, ei, eh),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fE.xL,
                                              style: { ...fP(n, ei), width: 24, height: 24 },
                                              "aria-label": eM.intl.formatToPlainString(eE.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: O(e.target),
                                              }),
                                              "aria-expanded": et?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == $ && el(l);
                                              },
                                              onFocus: () => {
                                                  null == $ && el(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), em(), el(l));
                                              },
                                              children: (0, a.jsx)(f$, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eV || null == o
                                      ? null
                                      : (0, a.jsx)(tY, {
                                            projectId: o,
                                            at: { x: eV.at.x + 20, y: eV.at.y + 20 },
                                            bounds: ei,
                                            kind: eV.label.kind,
                                            value: eV.draft,
                                            canSubmit: null != $ && D(eV.draft),
                                            onChange: (e) => {
                                                null != $ && B({ ...$, draft: e });
                                            },
                                            onSubmit: eF,
                                            onDismiss: em,
                                            onUploadFile: eO,
                                            closing: null == $,
                                        }),
                                  null != eC && null != et && null != eX
                                      ? (0, a.jsxs)(fq, {
                                            point: eX,
                                            frame: ei,
                                            authorId: eC.authorId,
                                            title: O(eC.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                et.confirmingRemove ? el({ ...et, confirmingRemove: !1 }) : el(null);
                                            },
                                            onMouseLeave: () => {
                                                et.editing || et.confirmingRemove || el(null);
                                            },
                                            children: [
                                                et.editing
                                                    ? (0, a.jsx)(la.f, {
                                                          autoFocus: !0,
                                                          label: eM.intl.string(eE.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: et.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => el({ ...et, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), ez());
                                                          },
                                                      })
                                                    : (0, a.jsx)(u.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fE.aC,
                                                          children: eC.comment,
                                                      }),
                                                ee(eC, x)
                                                    ? (0, a.jsx)("div", {
                                                          className: fE.eB,
                                                          children: et.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(u.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fE.nv,
                                                                            children: eM.intl.string(eE.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(C.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: eM.intl.string(eE.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                el({ ...et, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(C.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: eM.intl.string(eE.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eG,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(C.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: eM.intl.string(eE.default.friIzR),
                                                                            onClick: () =>
                                                                                el({
                                                                                    ...et,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        et.editing
                                                                            ? (0, a.jsx)(C.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !D(et.draft),
                                                                                  text: eM.intl.string(
                                                                                      eE.default.iicRP9,
                                                                                  ),
                                                                                  onClick: ez,
                                                                              })
                                                                            : (0, a.jsx)(C.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: eM.intl.string(
                                                                                      eE.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      el({
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
function f$(e) {
    let { authorId: t } = e,
        n = (0, h.bG)([lb.default], () => lb.default.getUser(t), [t]);
    return (0, a.jsx)(a5.eu, {
        src: null == n ? null : a7.Ay.getUserAvatarURL(n),
        size: a4._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fq(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: c, frame: d, authorId: f, title: m, testId: h, onDismiss: g, onMouseLeave: p, children: x } = e,
        v = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fM);
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
            originX: C,
            originY: N,
        } = ((n = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (r = Math.max((l = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(c.x - b.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(c.y - b.y, l), r)), originX: c.x - s, originY: c.y - o }),
        A = { left: k, top: w, "--custom-conjure-card-origin-x": `${C}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: v,
        className: fE.Nr,
        style: A,
        "data-testid": h,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), g());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fE.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fE.ip, children: (0, a.jsx)(f$, { authorId: f }) }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fE.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fE.zI, children: x }),
        ],
    });
}
let fD = 300,
    fF = 2;
function fO(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fz(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fG(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fE.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fU = n(659723),
    fB = n(697744),
    fK = n(130324);
function fH(e) {
    let t = (0, fB.c)(),
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
    let r = (0, nL.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function fV(e) {
    let { className: t } = e,
        { Component: n, events: l } = fH(3e4);
    return (0, a.jsxs)("div", {
        className: w()(t, fK.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: fK.ol,
                children: eM.intl.string(eE.default.AyiQEp),
            }),
        ],
    });
}
var fW = n(251363),
    fX = n(944142),
    fY = n(532247),
    fZ = n(501628);
function fQ(e) {
    let { progress: t } = e,
        { Component: n } = fH(1500),
        l = eL.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: fZ.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
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
                ? (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function fJ(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, h.bG)([fX.A], () => (s ? fX.A.getLiveReload(t) : null), [s, t]),
        o = (0, tx.A)(n, r)?.id ?? null,
        c = u?.phase ?? null,
        f = u?.background === !0,
        m = (function (e, t, n) {
            let l = (0, fY.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [o, c] = i.useState(t);
            s !== l && (u(l), c(t), a(null != l || o ? null : (0, fY.QP)(e, s)));
            let f = (0, h.bG)(
                    [d.A],
                    () => {
                        let e = d.A.getFrame(n);
                        return (0, te.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                m = i.useRef(f),
                g = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((m.current = f), f && (g.current = !0));
                }, [f]),
                i.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return a(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, fW.ow)(null, n) && e();
                    }
                    ((g.current = m.current), document.addEventListener("load", t, !0));
                    let l = window.setTimeout(() => {
                            g.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", t, !0), window.clearTimeout(l), window.clearTimeout(i));
                    };
                }, [r, n]),
                r
            );
        })(c, f, o),
        g = f ? null : (0, fY.h_)(c, u?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(nB.A, { tag: "div", role: "status", "aria-live": "polite", children: g?.title ?? "" }),
            null != g
                ? (0, a.jsx)("div", {
                      className: fZ.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(fQ, { progress: g }),
                  })
                : null,
        ],
    });
}
var f0 = n(782134),
    f1 = n(357858),
    f2 = n(317608),
    f3 = n(35367),
    f5 = n(771293),
    f4 = n(716455);
let f7 = { width: 1 / 0, height: 1 / 0 };
function f6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f7;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var f8 = n(702083);
function f9(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, h.cf)([tv.A], () => ({
            mobile: tv.A.isBuilderPreviewMobile(),
            landscape: tv.A.isBuilderPreviewLandscape(),
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
        c = n ? f6(l, o ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: w()(f8.dw, { [f8.PQ]: null != c }),
        children: (0, a.jsx)("div", { className: w()(f8.R9, { [f8.Vg]: null != c }), style: c ?? void 0, children: t }),
    });
}
var me = n(347927);
function mt(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: w()(me.Bf, l && me.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: me.Ux,
                children: [
                    (0, a.jsx)(I.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var mn = n(957272);
function ml(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: s, state: u } = (0, f3.A)({ applicationId: t, surface: n, launch: l }),
        o = i.useContext(f4.A);
    if (((0, f5.A)(t, n), u === f3.n.Launched)) {
        let e = (0, a.jsx)(f2.A, { frameId: s.id, level: o, className: mn.Z7, overlay: r });
        return (0, tj.Q5)(n) ? (0, a.jsx)(f9, { children: e }) : e;
    }
    return (0, a.jsx)(mr, { state: u });
}
function mr(e) {
    let { state: t } = e;
    switch (t) {
        case f3.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: mn.qs,
                children: (0, a.jsx)(mt, {
                    title: eM.intl.string(eE.default["9kpdo7"]),
                    body: eM.intl.string(eE.default.iIA8Nj),
                }),
            });
        case f3.n.NoApplication:
            return (0, a.jsx)(fV, { className: mn.qs });
        case f3.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: mn.qs,
                children: (0, a.jsx)(mt, {
                    title: eM.intl.string(eE.default["7k4GyN"]),
                    body: eM.intl.string(eE.default.zdIy3R),
                }),
            });
        case f3.n.Error:
            return (0, a.jsxs)("div", {
                className: mn.qs,
                children: [
                    (0, a.jsx)(I.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: eM.intl.string(eE.default.lTPbnG),
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: mn.tj,
                        children: eM.intl.string(eE.default.e6GiAZ),
                    }),
                ],
            });
        case f3.n.AwaitingLaunch:
        case f3.n.Loading:
            return (0, a.jsx)("div", { className: mn.qs, children: (0, a.jsx)(o.y, {}) });
    }
}
var ma = n(308528),
    mi = n(334738),
    ms = n(688606),
    mu = n(365971),
    mo = n(703462);
function mc(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: mo.f,
        children: [
            (0, a.jsx)(iD.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function md() {
    return (0, a.jsx)("div", { className: mo.f, children: (0, a.jsx)(o.y, {}) });
}
function mf(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        c = (0, h.bG)([lv.A], () => (null != o ? lv.A.getChannel(o) : null), [o]);
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && ma.A.preload(e9.ME, t);
        }, [t]),
        (n = (0, h.bG)([oP.A], () => oP.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mu.Xg)();
            return (
                (0, mi.yl)(t, e),
                () => {
                    (0, mi.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, f] = i.useState(null),
        m = d === r;
    return (i.useEffect(() => {
        if (null != c || m) return;
        let e = !1;
        return (
            (0, eH.CN)(l).then(
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
    }, [l, r, c, m]),
    m)
        ? (0, a.jsx)(mc, { message: eM.intl.string(eE.default["VP/O8s"]) })
        : null == c
          ? (0, a.jsx)(md, {})
          : (0, a.jsx)("div", {
                className: mo.g,
                children: (0, a.jsx)(ms.A, { channel: c, guild: null, chatInputType: uc.oU.SIDEBAR }, c.id),
            });
}
var mm = n(887909),
    mh = n(570962),
    mg = n(998475);
function mp(e) {
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
        noPadding: f,
        obscured: m,
    } = (0, mm.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: mg.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: mg.rf,
                children: (0, a.jsx)(mh.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: mg.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: mg.z3,
                                      children: [
                                          (0, a.jsx)(I.D, {
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
                                className: w()(mg.Qs, d ? mg.cw : null, f ? mg.pN : null),
                                children: [i, null == o ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: mg.o1,
                      children: s.map((e, t) => (0, a.jsx)(C.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var mx = n(765671),
    mv = n(666476),
    mj = n(582063);
let mb = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function my() {
    (0, eA.P0)({ text: eM.intl.string(eE.default.jj3abP), variant: "critical" });
}
function mk(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = eM.intl.string(eE.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tn.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(mw, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: mj.m2,
                        children: (0, a.jsx)(tK.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(t1.K, {
                                "aria-label": r,
                                icon: S.SettingsIcon,
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
                accept: mb.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mb.includes(n.type)
                                ? n.size > mv.aI
                                    ? (0, eA.P0)({ text: eM.intl.string(eE.default.T8Spiu), variant: "critical" })
                                    : (0, ac.M$)(t, n).catch(my)
                                : (0, eA.P0)({ text: eM.intl.string(eE.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mw(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, h.bG)([ao.A], () => ao.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(tl.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": eM.intl.string(eE.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(tr.rX, {
                children: [
                    (0, a.jsx)(tr.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: eM.intl.string(eE.default.uQpDky),
                        icon: l2.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(tr.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: eM.intl.string(eE.default.AiAz8J),
                        icon: dY.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, ac.Og)(t).catch(my));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(tr.rX, {
                children: (0, a.jsx)(tr.fP, {
                    id: "conjure-overlay-background-blur",
                    label: eM.intl.string(eE.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, ac.Y1)(t, !i) || my();
                    },
                }),
            }),
        ],
    });
}
function mC(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: i, width: s, height: u } = (0, mx.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: s, height: u }, l);
    return (0, a.jsxs)("div", {
        className: mj.JH,
        children: [
            (0, a.jsx)(af, { projectId: n }),
            (0, a.jsx)("div", {
                ref: i,
                className: mj.dw,
                children: (0, a.jsx)("div", {
                    className: mj.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(ml, { applicationId: t, surface: te.ZN, frameOverlay: r }),
                }),
            }),
            null != n ? (0, a.jsx)(mk, { projectId: n }) : null,
        ],
    });
}
var mN = n(51909),
    mA = n(409478),
    mS = n(652227);
function mI(e) {
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
            overlayWidgetSize: m = eW,
            projectId: g,
            renderFrameOverlay: p,
            paused: x = !1,
            onResume: v,
        } = e,
        j = i.useContext(mN.A),
        b = (0, h.bG)([rc.A], () => null != g && null != rc.A.getSetupStartedAt(g), [g]);
    return u?.type === "checking"
        ? (0, a.jsx)("div", { className: mS.qs, children: (0, a.jsx)(o.y, {}) })
        : u?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: mS.qs,
                children: null == u.authorizeProps ? (0, a.jsx)(o.y, {}) : (0, a.jsx)(mp, { ...u.authorizeProps }),
            })
          : s
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: mS.RG,
                      children: [
                          (0, eQ.yf)(c, d)
                              ? x
                                  ? (0, a.jsx)(mE, { projectId: g, onResume: v })
                                  : j
                                    ? (0, a.jsx)("div", { className: mS.qs })
                                    : (0, a.jsx)(ml, { applicationId: t, surface: l, launch: r, frameOverlay: p?.(l) })
                              : null,
                          "widget" === d && null != f
                              ? "unavailable-authorization-revoked" === c.profileState
                                  ? (0, a.jsx)("div", {
                                        className: mS.qs,
                                        children: (0, a.jsx)(mt, {
                                            wide: !0,
                                            title: eM.intl.string(eE.default["08U+YO"]),
                                            body: eM.intl.string(eE.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(mA.A, { applicationId: f })
                              : null,
                          "overlay" === d && c.modes.includes("overlay")
                              ? (0, a.jsx)(mC, { applicationId: t, projectId: g, size: m, frameOverlay: p?.(te.ZN) })
                              : null,
                          "bot" === d && null != n && null != g
                              ? (0, a.jsx)(mf, { projectId: g, previewApplicationId: n })
                              : null,
                      ],
                  })
            : b
              ? (0, a.jsx)("div", { className: mS.qs, children: (0, a.jsx)(o.y, {}) })
              : (0, a.jsx)(fV, { className: mS.qs });
}
function mE(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, f1.Pu)(t),
        (0, a.jsx)("div", {
            className: mS.qs,
            children: (0, a.jsx)(mt, {
                wide: !0,
                title: eM.intl.string(eE.default.MMWEH2),
                body: eM.intl.string(eE.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(C.$, {
                              size: "sm",
                              variant: "primary",
                              icon: f0.PlayIcon,
                              text: eM.intl.string(eE.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mM = n(750506),
    m_ = n(867193),
    mT = n(539197),
    mP = n(977020);
function mR(e) {
    let { projectId: t } = e,
        n = (0, mT.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mT.Ie)(e);
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
        className: mP.$Q,
        style: { left: r, top: s, width: u, height: o, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [mT.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: w()(mP.hN, mP.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: w()(mP.hN, mP.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: w()(mP.UE, { [mP.SP]: n.shown, [mP.Vq]: n.pressed, [mP.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var mL = n(417760);
function m$(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, h.bG)([g.A], () => null != e && g.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, eS.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        o = (0, p.CU)(n),
        c = "controlling" === t,
        d = eM.intl.string(c ? (o ? eE.default["VJW/5P"] : eE.default["+hD2Iz"]) : eE.default["h+i1r9"]),
        f =
            null != r
                ? (0, a.jsx)(C.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: eM.intl.string(eE.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: w()(mL.M0, mL.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(cg.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(sr.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "none", className: mL.ID, children: d }),
                  c ? (0, a.jsx)(nB.A, { children: eM.intl.string(eE.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: mL.lC, children: f }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: mL.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: mL.sp,
                      children: [
                          (0, a.jsx)(sr.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(cg.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: mL.f4,
                              children: [
                                  (0, a.jsx)(u.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: mL.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(u.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: mL.Rb,
                                            children: eM.intl.string(eE.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: mL.lC, children: f }) : null,
              ],
          });
}
function mq(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, p.Zv)(null != n && n === l ? t : null),
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
        c = (0, eD.useHasAnyModalOpen)(),
        d = (0, e7.cR)(s);
    i.useEffect(() => {
        u && d && null != s && (0, e7.BL)(s);
    }, [u, d, s]);
    let [f, m] = i.useState(null),
        [h, g] = i.useState(null),
        [x, v] = i.useState(null),
        j = "idle" !== o;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = tZ(r());
            m((t) => (tQ(t, e) ? t : e));
            let t = null == h ? null : tZ(h);
            (v((e) => (tQ(e, t) ? e : t)), null != h && (0, m_.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, m_.C)(0));
            }
        );
    }, [j, r, h]);
    let b = "idle" !== o && null != f,
        y = b && "controlling" === o && !c,
        k = null != f && f.width < 420,
        w = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        C =
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
                  })(f, x),
        N = (function () {
            let [e] = i.useContext(mM.uY),
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
                      className: mL.D,
                      "data-phase": o,
                      children: (0, a.jsx)("div", {
                          className: mL.QF,
                          children: (0, a.jsx)(m$, { phase: o, projectId: t, compact: k }),
                      }),
                  })
                : null,
            (0, tz.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(nB.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === o
                                ? eM.intl.string(eE.default.oWcemF)
                                : "handoff" === o
                                  ? eM.intl.string(eE.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            y
                ? (0, tz.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: mL.ys,
                                  style: C,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: mL.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(mR, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var mD = n(399503),
    mF = n(853555),
    mO = n(343030),
    mz = n(667811),
    mG = n(187645);
let mU = new Map(),
    mB = !1;
function mK() {
    let e = new Map();
    for (let t of new Set([...g.A.getActivityOrderedProjectIds(), ...(0, p.T7)()])) {
        if (!x(t) || m.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = tm.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, tj.Rc)(t), (0, tj.Th)(t)].find(te.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [t, n] of [...mU])
        e.get(t) !== n.frameId &&
            (function (e, t) {
                (mU.delete(e), t.unregisterLookup(), mz.A.removeFrameTarget(t.frameId, t.element), t.element.remove());
                let n = d.A.getFrame(t.frameId)?.applicationId;
                null != n && setTimeout(() => y(e, n), 0);
            })(t, n);
    for (let [t, n] of e)
        mU.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = mG.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    mH(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (mU.set(e, l),
                    (l.unregisterLookup = (0, mF.Ng)(e, () => (0, fW.n5)(n, t))),
                    mz.A.registerFrameTarget(t, n, mO.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of mU) mH(t.element, e, t.frameId);
}
function mH(e, t, n) {
    if (d.A.getFrame(n)?.surface.type === eJ.U.OVERLAY) {
        let n = eY(tm.Ay.getProject(t));
        (e.classList.remove(mG.L), (e.style.width = `${n.width}px`), (e.style.height = `${n.height}px`));
        return;
    }
    let l = tv.A.isBuilderPreviewMobile();
    e.classList.toggle(mG.L, !l);
    let r = l ? f6(tv.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""), (e.style.height = null != r ? `${r.height}px` : ""));
}
var mV = n(873727),
    mW = n(147248),
    mX = n(418842),
    mY = n(363195),
    mZ = n(818023);
let mQ = null;
var mJ = n(541940);
function m0(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: o,
            content: c,
            sidebar: f,
            showsFrame: m,
            paused: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, tx.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, h.bG)([mY.A], () => (0, mV.x4)(mY.A.theme)),
            l = (0, h.bG)([mW.A], () => mW.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, h.cf)([a2.Ay], () => ({
                reducedMotion: a2.Ay.useReducedMotion,
                fontScale: (0, mV.U0)(),
                highContrast: a2.Ay.isHighContrastModeEnabled,
                forcedColors: a2.Ay.useForcedColors,
                underlineLinks: a2.Ay.alwaysShowLinkDecorations,
            })),
            c = eL.hH.useSetting(),
            f = (0, mX.C)(),
            m = (0, h.bG)(
                [d.A, tv.A],
                () =>
                    tv.A.isBuilderPreviewMobile() && d.A.getFrame(t)?.applicationId === tv.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = i.useRef(!1),
            p = i.useRef(!1),
            x = i.useRef(0),
            v = i.useRef(null),
            j = i.useCallback(() => {
                let l = (0, fW.n5)(e, t);
                if (null == l) return;
                v.current = l;
                let i = {
                    revision: ++x.current,
                    baseTheme: n,
                    customTheme: (0, mV.Lq)(),
                    uiDensity: f,
                    messageDisplayCompact: c,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: m,
                };
                (0, fS.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, m, t, s, c, e, r, f, o]),
            b = i.useRef(j);
        i.useLayoutEffect(() => {
            b.current = j;
        });
        let y = i.useCallback(() => {
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
                y();
            }, [l, y]),
            i.useLayoutEffect(() => {
                (j(), y());
            }, [y, j]),
            i.useLayoutEffect(() => {
                let n = (0, fW.n5)(e, t);
                null != n && n !== v.current && y();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, fW.n5)(e, t) && ((v.current = null), y());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, y]),
            i.useEffect(() => {
                let e = new MutationObserver(y);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [y]));
    })(p, j),
        i.useEffect(() => {
            if (null != t) return (0, mF.Ng)(t, () => (0, fW.n5)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, fW.ow)(p, j), [p, j]),
        y = i.useCallback(() => (m ? (0, fW.ow)(p, j) : p), [m, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: w()(mJ.Mh, o),
                children: [
                    u,
                    g
                        ? null
                        : (0, a.jsx)(mq, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: mJ.fm, children: c }),
                ],
            }),
            f,
            g
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fL, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(nE, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function m1(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: s,
        frameLaunchParams: u,
        header: o,
        chatOpen: c,
        onCloseChat: f,
        chatHeaderAction: x,
        onRestoreVersion: v,
        onImportProject: j,
        debugOpen: b = !1,
        onCloseDebug: y,
        restoreState: k,
        previewReady: C,
        previewGate: N,
        availability: A,
        activeMode: S,
        widgetApplicationId: I,
        overlayWidgetSize: E,
        previewPaused: M = !1,
        onResumePreview: _,
    } = e;
    (0, mD.k)(t, I);
    let T = s.type === eJ.U.MAIN || (0, tj.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, h.cf)([tv.A], () => ({
            mobile: tv.A.isBuilderPreviewMobile(),
            landscape: tv.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? mZ.aX.LANDSCAPE : mZ.aX.PORTRAIT), (mQ = e));
                else {
                    if (mQ !== e) return;
                    ((l = mZ.aX.UNHANDLED), (mQ = null));
                }
                ov.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(T ? l : null);
    let P = i.useRef(null),
        [R, L] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, n_.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, n_.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (T) return ((0, eH.HV)(l), () => (0, eH.HV)(null));
        }, [l, T]),
        i.useEffect(() => {
            null != t &&
                ((0, eS.ensureConnection)(t),
                mB ||
                    ((mB = !0),
                    g.A.addChangeListener(mK),
                    tm.Ay.addChangeListener(mK),
                    d.A.addChangeListener(mK),
                    tv.A.addChangeListener(mK),
                    m.A.addChangeListener(mK),
                    (0, p.W3)(mK),
                    mK()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = P.current;
            if (null == e) return;
            function t() {
                null != e && L(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let $ = Math.max(450, R - 320),
        q = c || T,
        D = i.useContext(eG.A),
        F = i.useRef(null),
        O = i.useRef(null),
        z = i.useCallback(() => {
            null != O.current && F.current?.style.setProperty("--custom-conjure-chat-width", `${O.current}px`);
        }, []),
        G = i.useCallback(
            (e) => {
                ((O.current = e), z());
            },
            [z],
        );
    return (
        i.useLayoutEffect(z),
        (0, a.jsx)("div", {
            ref: P,
            className: mJ.LB,
            children: (0, a.jsx)(m0, {
                projectId: t,
                designFeedbackToggleRef: n,
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                header: o,
                showsFrame: (0, eQ.yf)(A, S),
                paused: M,
                mainClassName: null == o ? void 0 : w()(mJ.ez, { [mJ.zt]: c && !D, [mJ.jX]: D }),
                content: (0, a.jsx)(mI, {
                    applicationId: l,
                    previewApplicationId: r,
                    surface: s,
                    frameLaunchParams: u,
                    previewReady: C,
                    previewGate: N,
                    availability: A,
                    activeMode: S,
                    widgetApplicationId: I,
                    overlayWidgetSize: E,
                    projectId: t,
                    paused: M,
                    onResume: _,
                    renderFrameOverlay: (e) =>
                        (0, a.jsx)(fJ, { projectId: t, applicationId: l, previewApplicationId: r, surface: e }),
                }),
                sidebar:
                    null != t && q
                        ? (0, a.jsx)("div", {
                              ref: F,
                              className: w()(c ? mJ.v7 : mJ.LL, { [mJ.ax]: D }),
                              children: (0, a.jsx)(tF.A, {
                                  sidebarType: tF.X.CallChatSidebar,
                                  maxWidth: $,
                                  onWidthChange: D ? G : void 0,
                                  capturePointer: !0,
                                  children: (0, a.jsx)("div", {
                                      className: mJ.cO,
                                      children: b
                                          ? (0, a.jsx)(fy, { projectId: t, onClose: y ?? (() => {}) }, t)
                                          : (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(fU.Ay, { projectId: t }),
                                                    (0, a.jsx)(tO.Ay, {
                                                        "aria-label": eM.intl.string(eM.t["/VQax8"]),
                                                        toolbar: (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                x,
                                                                null == f
                                                                    ? null
                                                                    : (0, a.jsx)(tO.Ay.Icon, {
                                                                          icon: D ? tq.E : tD.P,
                                                                          tooltip: eM.intl.string(
                                                                              D
                                                                                  ? eE.default["5LSwvg"]
                                                                                  : eE.default.JD6Oit,
                                                                          ),
                                                                          onClick: f,
                                                                      }),
                                                            ],
                                                        }),
                                                        children: (0, a.jsx)(tO.Ay.Title, {
                                                            children: eM.intl.string(eM.t["/VQax8"]),
                                                        }),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: mJ.cb,
                                                        children: (0, a.jsx)(
                                                            cD,
                                                            {
                                                                projectId: t,
                                                                restoreState: k,
                                                                onRestoreVersion: v,
                                                                onImportProject: j,
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
var m2 = n(705427),
    m3 = n(606128),
    m5 = n(323140);
function m4(e) {
    var t;
    let l,
        r,
        s,
        { project: o, projectsLoaded: c, onBack: d, guildId: g } = e,
        x = i.useContext(eU),
        v = i.useContext(eG.A),
        [j] = i.useState(() => (null != x ? eK.A.getProjectView(x) : null)),
        [k, E] = i.useState(j?.chatOpen ?? !0),
        [M, _] = i.useState(j?.debugOpen ?? !1);
    i.useEffect(() => {
        null != x && (0, eB.g7)(x, { chatOpen: k, debugOpen: M });
    }, [x, k, M]);
    let T = i.useCallback(
            (e) => {
                null != x && (0, eB.g7)(x, { previewSelection: e });
            },
            [x],
        ),
        $ = e$(),
        q = eq.useConfig({ location: "ConjureSelectedProjectScreen" }).enabled,
        D = i.useCallback(() => E(!0), []),
        F = i.useCallback(() => {
            (_(!1), E(!0));
        }, []),
        { restoreState: O, handleRestoreVersion: z } = (function (e, t) {
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
                                (0, eO.oB)(o, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, eA.P0)({
                                                        text: eM.intl.formatToPlainString(eE.default.Z4n6LX, {
                                                            title: (0, eF.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, ez.c)(o, r);
                                                null != e && (0, eA.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", o, e),
                                                (0, eA.P0)({
                                                    text: eM.intl.string(eE.default["PSdo+w"]),
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
        })(o, F),
        G = o?.id ?? null;
    ((t = o?.preview_application_id ?? null),
        i.useEffect(() => {
            if (null != G && null != t)
                return (
                    b.add(t),
                    () => {
                        (b.delete(t), y(G, t));
                    }
                );
        }, [G, t]));
    let {
            integrationStatus: U,
            isPreviewApplicationLoading: B,
            checkingIntegration: K,
            previewReady: H,
            hasFrame: V,
            needsPermissionReview: W,
            installAuthorizeProps: X,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, h.bG)(
                    [tm.Ay, tf.A],
                    () => (null == r ? null : (tm.Ay.getIntegrationStatus(r) ?? tf.A.getIntegrationStatus(r))),
                    [r],
                ),
                o = e?.preview_application_id ?? null,
                { data: c, isLoading: d } = (0, tc.YY)(o ?? void 0),
                f = null != r && n !== r,
                m = u?.preview_ready === !0,
                g = u?.has_activity === !0,
                p = u?.bot_permissions_changed === !0,
                x = (0, eQ.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: m,
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
                            await (0, tc.TA)(t);
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
                    await ((0, td.CG)(r)?.catch(() => (0, td.U1)(r, e.signal)) ?? (0, td.U1)(r, e.signal));
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
            let y = (0, th.a)(e ?? null, u ?? null, t),
                k = i.useCallback(async () => {
                    null != e && (await (0, th.$)(e, y));
                }, [y, e]),
                w = i.useCallback(async () => {
                    try {
                        await k();
                    } catch {}
                    await b();
                }, [b, k]),
                C = i.useMemo(
                    () =>
                        null == o || d || f || v !== o
                            ? null
                            : {
                                  ...(0, tg.i)({ applicationId: o, application: c ?? null, guildId: y }),
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
                previewReady: m,
                hasFrame: g,
                needsPermissionReview: x,
                installAuthorizeProps: C,
            };
        })(o, g),
        Z =
            (0, h.bG)([ty.A], () => (null == G ? void 0 : ty.A.getPublishStatus(G)?.previewAppChannels), [G]) ??
            U?.preview_app_channels,
        {
            availability: J,
            activeMode: ee,
            setMode: et,
            frameSurface: el,
            frameSurfaceOptions: er,
            setFrameSurface: ea,
            appChannel: ei,
            setAppChannel: es,
            frameLaunchParams: eu,
            widgetApplicationId: eo,
        } = (0, e3.p)({
            applicationId: o?.preview_application_id ?? null,
            previewApplicationId: o?.preview_application_id ?? null,
            declaredActivity: V,
            previewSupportedSurfaces: o?.preview_supported_surfaces,
            installScope: o?.install_scope ?? null,
            ownerAuthorizationRevoked: U?.owner_authorization_revoked === !0,
            supportsOverlay: o?.preview_supported_surfaces?.includes(eV.q7.OVERLAY) === !0,
            previewAppChannels: Z,
            initialSelection: j?.previewSelection,
            onSelectionChange: T,
        }),
        ec = eY(o);
    ((0, eZ.x)(G, (e) => {
        J.modes.includes(e) && et(e);
    }),
        eR(G, () => {
            (E(!0), _(!0));
        }));
    let ed = J.modes.includes("frame"),
        ef = (0, h.bG)([m.A], () => m.A.isPaused(G), [G]),
        em = ed && !ef,
        {
            previewTargetOptions: eh,
            handleSelectPreviewTarget: ev,
            mobilePreview: eb,
            mobilePreviewLabel: ey,
            handleToggleMobilePreview: ew,
            landscapePreview: eT,
            rotatePreviewLabel: eP,
            handleRotatePreview: eL,
            previewSurface: eW,
            previewFrame: eX,
            refreshFrame: e0,
            isRefreshing: e1,
            handleRefresh: e2,
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
                                          t === eJ.U.APP_CHANNEL && n.length > 1
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
                m = (0, h.bG)([tv.A], () => tv.A.isBuilderPreviewMobile()),
                g = eM.intl.string(m ? eE.default.tKGF0Q : eE.default.peqEOY),
                p = i.useCallback(() => (0, eH.GG)(!m), [m]),
                x = (0, h.bG)([tv.A], () => tv.A.isBuilderPreviewLandscape()),
                v = eM.intl.string(x ? eE.default.tunI2l : eE.default.DoNdjA),
                j = i.useCallback(() => (0, eH.Lw)(!x), [x]),
                b = (0, tj.jS)(t),
                y = i.useMemo(() => (0, tj.Op)(b, r), [b, r]),
                k = (0, tx.A)(t?.preview_application_id ?? null, y),
                w = (0, tx.A)(t?.preview_application_id ?? null, te.ZN),
                C = "overlay" === l ? w : k,
                N = (0, te.x1)(C) && C.data.proxyTicketRefreshing,
                A = i.useCallback(() => {
                    null == C || N || tp.A.refreshProxyTicket(C.id);
                }, [C, N]);
            return {
                previewTargetOptions: d,
                handleSelectPreviewTarget: f,
                mobilePreview: m,
                mobilePreviewLabel: g,
                handleToggleMobilePreview: p,
                landscapePreview: x,
                rotatePreviewLabel: v,
                handleRotatePreview: j,
                previewSurface: y,
                previewFrame: k,
                refreshFrame: C,
                isRefreshing: N,
                handleRefresh: A,
            };
        })({
            project: o,
            modes: J.modes,
            activeMode: ee,
            frameSurface: el,
            frameSurfaceOptions: er,
            previewAppChannels: Z,
            setMode: et,
            setFrameSurface: ea,
            setAppChannel: es,
        }),
        e5 = k && !M,
        e4 = eM.intl.string(e5 ? eE.default.JD6Oit : eE.default.xjJAQm),
        e7 = i.useCallback(() => {
            if (M) {
                (_(!1), E(!0));
                return;
            }
            E((e) => !e);
        }, [M]),
        e6 = i.useCallback(() => E(!1), []),
        {
            designFeedbackActive: e8,
            designFeedbackToggleRef: e9,
            agentDrivingPreview: tn,
            designFeedbackLabel: tl,
            handleToggleDesignFeedback: tr,
        } = (function (e, t, n) {
            let { active: l } = en(e);
            i.useEffect(() => {
                null != e && l && !t && Q(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, p.Zv)(e),
                s = eM.intl.string(a ? eE.default.Sme0T0 : l ? eE.default.vn5Rzu : eE.default["cl/Jyl"]),
                u = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void Q(e);
                        (n(), Y(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: u,
            };
        })(G, em, F),
        [ta] = i.useState(() => L.isPlatformEmbedded && (0, to.qM)()),
        ti = null != ek(G);
    i.useEffect(() => {
        null != G && ti && !em && ej(G);
    }, [G, ti, em]);
    let ts = i.useCallback(() => {
            null != G &&
                (F(),
                (function (e) {
                    if (null != ex(e)) return;
                    let { byProject: t } = eg.getState();
                    eg.setState({ byProject: { ...t, [e]: ep } });
                })(G));
        }, [G, F]),
        tA = i.useCallback(() => {
            null != G && ej(G);
        }, [G]),
        tS = ti ? eM.intl.string(eE.default.tuQ5f3) : tl,
        tI = i.useCallback(() => {
            _((e) => !e && (E(!0), !0));
        }, []),
        tE = i.useCallback(() => _(!1), []),
        t_ = i.useCallback(() => {
            null != G && (0, eH._j)(G);
        }, [G]),
        tT = i.useCallback(() => {
            null != G && (ef ? (0, eH._j)(G) : (0, eH.di)(G, eX?.id));
        }, [G, ef, eX?.id]),
        tP = i.useCallback(() => {
            var e, t;
            (null != o && ((e = o.id), (t = eX?.id), (0, eS.closeConnection)(e), (0, f.r)(t)), d());
        }, [o, eX?.id, d]),
        tq =
            ((l = i.useCallback(() => {
                null != o && (D(), (0, eS.sendUserMessage)(o.id, eM.intl.string(eE.default.oU20rd)));
            }, [o, D])),
            (r = i.useCallback(
                (e) => {
                    if (null == o) return;
                    let t = o.id,
                        n = (0, eI.vt)(e);
                    null != n
                        ? (0, eA.P0)({ text: n, variant: "critical" })
                        : (0, eN.A)({
                              title: eM.intl.formatToPlainString(eE.default["Gm+u1+"], { name: o.name }),
                              subtitle: eM.intl.string(eE.default.M7H3sJ),
                              confirmText: eM.intl.string(eE.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  D();
                                  try {
                                      await (0, eI.Hj)(t, e, eM.intl.string(eE.default.Owerd3));
                                  } catch {
                                      (0, eA.P0)({ text: eM.intl.string(eE.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [o, D],
            )),
            { onExport: l, onImport: (s = (0, eI.yN)(r)).open, importInput: s.input }),
        tD = i.useCallback(() => {
            null != o && (0, tL.A)(o, g);
        }, [o, g]),
        tF = (0, eQ.JR)(ee, W, U?.bot_permissions_changed === !0)
            ? { type: "permissions", authorizeProps: X }
            : K && null == U
              ? { type: "checking" }
              : void 0,
        tO = (0, h.bG)([tm.Ay], () => null != G && tm.Ay.isProjectDeleting(G), [G]);
    i.useEffect(() => {
        ((null == o && c) || tO) && d();
    }, [o, c, tO, d]);
    let {
            publishOptions: tz,
            publish: tG,
            publishing: tU,
            confirmation: tB,
            variant: tK,
            text: tH,
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
                d = (0, tw.Ay)(e, c),
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
                variant: tC(d) ? "secondary" : "primary",
                text: tN(d, m),
                label: tN(d, null),
                indicator: null == d ? null : d.publishing ? "publishing" : tC(d) ? null : "unpublished",
            };
        })(G, g, K || B, tM),
        tV = tR(G, tG, tz),
        tW = (0, P.A)(eX),
        tX = "frame" === ee && !ef && (0, te.x1)(eX) && (tW.isPoppedOut || tW.canPopout),
        tY =
            null == o
                ? null
                : (0, a.jsx)(tb.A, {
                      projectId: o.id,
                      projectName: o.name,
                      guildId: g,
                      projectGuildId: o.guild_id,
                      isOwner: (0, tm.PV)(o),
                      canRemix: (0, tm.H_)(o),
                      onRefresh: (0, te.x1)(e0) ? e2 : void 0,
                      isRefreshing: e1,
                      onTogglePreviewPaused: "frame" === ee ? tT : void 0,
                      previewPaused: ef,
                      previewPauseDisabled: !ef && tn,
                      onTogglePopout: tX ? (tW.isPoppedOut ? tW.popIn : tW.popOut) : void 0,
                      poppedOut: tW.isPoppedOut,
                      onToggleDebug: $ ? tI : void 0,
                      debugOpen: M,
                      onClose: tP,
                      onExport: tq.onExport,
                      onImport: tq.onImport,
                      onRemix: tD,
                      onConnectTool: q
                          ? () => {
                                var e;
                                return (
                                    (e = o.id),
                                    void (0, eD.openModalLazy)(async () => {
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
                                  projectId: o.id,
                                  installScope: o.install_scope,
                                  restoreDisabled: O?.status === "restoring",
                                  onRestoreVersion: (e, t) => z(e, t, !0),
                              }),
                              void (0, eD.openModalLazy)(async () => {
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
                          J.modes.includes("widget") && "unavailable-authorization-revoked" !== J.profileState
                              ? eo
                              : null,
                      previewProjectId: o.id,
                  }),
        tZ =
            null == tG || null == o
                ? null
                : (0, a.jsx)("div", {
                      className: m5.As,
                      onMouseDown:
                          null == G || tG.disabled || tU
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tk.dx)(G);
                                },
                      children: (0, a.jsx)(C.$, {
                          size: "sm",
                          variant: tK,
                          icon: tU ? m7 : null != tB ? N.U : void 0,
                          text: tH,
                          onClick: () => tV("header"),
                      }),
                  }),
        tQ = null == o ? void 0 : () => (0, t$.A)(o.id, { guildId: g, isPreview: !0, publishOptions: tz }),
        tJ = (0, a.jsx)(m2.A, {
            title: o?.name ?? eM.intl.string(eE.default.G1WwgK),
            project: o,
            onOpenProjectSettings: tQ,
            actions:
                null == o
                    ? null
                    : (0, a.jsxs)("div", {
                          className: m5.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: m5.QQ,
                                  children: [
                                      (0, a.jsx)(tu, {
                                          targets: eh,
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
                                          })(ee, el, ei),
                                          onChange: ev,
                                      }),
                                      ed
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === ee
                                                        ? (0, a.jsx)(R.A.Icon, {
                                                              icon: eb ? m9 : m8,
                                                              tooltip: ey,
                                                              "aria-label": ey,
                                                              selected: eb,
                                                              onClick: ew,
                                                          })
                                                        : null,
                                                    eb && "frame" === ee
                                                        ? (0, a.jsx)(R.A.Icon, {
                                                              icon: he,
                                                              tooltip: eP,
                                                              "aria-label": eP,
                                                              selected: eT,
                                                              onClick: eL,
                                                          })
                                                        : null,
                                                    (0, a.jsx)(eC, {
                                                        enabled: ta && !ti && !tn && !ef,
                                                        onLongPress: ts,
                                                        children: (0, a.jsx)(R.A.Icon, {
                                                            ref: e9,
                                                            icon: A.x,
                                                            iconClassName: m5.D8,
                                                            tooltip: tS,
                                                            "aria-label": tS,
                                                            selected: ti || e8,
                                                            disabled: ef || (tn && !ti),
                                                            onClick: ti ? tA : tr,
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== ee || ef
                                          ? null
                                          : (0, a.jsx)(tt, { frame: eX, controlProjectId: o.id }),
                                  ],
                              }),
                              (0, a.jsx)("div", { className: m5.YJ }),
                              (0, a.jsx)(e_.A, { frame: eX }),
                              (0, a.jsx)(R.A.Icon, {
                                  icon: S.SettingsIcon,
                                  tooltip: eM.intl.string(eE.default.I2XSKe),
                                  "aria-label": eM.intl.string(eE.default.I2XSKe),
                                  onClick: tQ,
                              }),
                              tY,
                              (0, a.jsx)(R.A.Icon, {
                                  icon: m6,
                                  tooltip: e4,
                                  "aria-label": e4,
                                  selected: e5,
                                  onClick: e7,
                              }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: w()(m5.nj, m3.T, { [m5.i3]: v }),
        children: [
            tq.importInput,
            (0, a.jsx)("main", {
                className: w()(m5.JX, { [m5.i3]: v && null != o }),
                children:
                    null == o
                        ? (0, a.jsxs)("div", {
                              className: m5.j5,
                              children: [
                                  tJ,
                                  (0, a.jsxs)("div", {
                                      className: m5.sD,
                                      children: [
                                          (0, a.jsx)(I.D, {
                                              variant: "heading-lg/semibold",
                                              children: eM.intl.string(eE.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(u.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: eM.intl.string(eE.default.fINulo),
                                          }),
                                          (0, a.jsx)(C.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: eM.intl.string(eE.default["WFJ/vb"]),
                                              onClick: () => (0, td.hF)(g),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tw.bI.Provider, {
                              value: tz,
                              children: (0, a.jsx)(
                                  m1,
                                  {
                                      projectId: o.id,
                                      designFeedbackToggleRef: e9,
                                      applicationId: o.preview_application_id,
                                      previewApplicationId: o.preview_application_id,
                                      surface: eW,
                                      frameLaunchParams: eu,
                                      header: tJ,
                                      chatOpen: k,
                                      onCloseChat: e6,
                                      chatHeaderAction: tZ,
                                      debugOpen: $ && M,
                                      onCloseDebug: tE,
                                      onRestoreVersion: z,
                                      onImportProject: (0, tm.PV)(o) ? tq.onImport : void 0,
                                      restoreState: O,
                                      previewReady: H,
                                      previewGate: tF,
                                      availability: J,
                                      activeMode: ee,
                                      widgetApplicationId: eo,
                                      overlayWidgetSize: ec,
                                      previewPaused: ef,
                                      onResumePreview: t_,
                                  },
                                  o.id,
                              ),
                          }),
            }),
        ],
    });
}
function m7() {
    return (0, a.jsx)(o.y, { type: o.t.SPINNING_CIRCLE_SIMPLE, className: m5.Hv, itemClassName: m5.C5 });
}
function m6(e) {
    return (0, a.jsx)(E.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function m8(e) {
    return (0, a.jsx)(M.u, { ...e, size: "custom", width: 20, height: 20 });
}
function m9(e) {
    return (0, a.jsx)(_.k, { ...e, size: "custom", width: 20, height: 20 });
}
function he(e) {
    return (0, a.jsx)(T.H, { ...e, size: "custom", width: 20, height: 20 });
}
var ht = n(810753),
    hn = n(434279),
    hl = n(972013),
    hr = n(751841),
    ha = n(159308);
function hi(e) {
    let { className: t = ha.lm } = e;
    return (0, a.jsx)("div", {
        className: t,
        children: (0, a.jsx)(u.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: eM.intl.string(eE.default.BGh3xB),
        }),
    });
}
function hs() {
    hl.A.isPinned() ? (0, c.bG)((0, hr.hU)(null)) : (0, eB.Sd)(null);
}
function hu(e) {
    let { projectId: t, workspaceGuildId: n } = e,
        { project: l, settled: r } = (function (e) {
            let { project: t, unavailable: n } = (0, h.cf)(
                    [tm.Ay],
                    () => ({ project: tm.Ay.getProject(e), unavailable: (0, td.su)(e) }),
                    [e],
                ),
                l = null == t;
            return (
                i.useEffect(() => {
                    l && (0, td.tF)([e]);
                }, [l, e]),
                { project: t, settled: null != t || n }
            );
        })(t),
        s = (null != l ? (0, hn.wu)(l) : null) ?? n,
        u = i.useContext(eG.A) ? ha.Gz : ha.lm;
    return null != l || r
        ? null == s
            ? (0, a.jsx)(hi, { className: u })
            : (0, a.jsx)(eU.Provider, {
                  value: t,
                  children: (0, a.jsx)(m4, { project: l, projectsLoaded: r, onBack: hs, guildId: s }),
              })
        : (0, a.jsx)("div", { className: u, children: (0, a.jsx)(o.y, {}) });
}
function ho(e) {
    let { projectId: t } = e,
        n = (0, n9.rX)("ConjurePage"),
        l = i.useContext(eG.A);
    return (i.useEffect(() => {
        tm.Ay.hasFetchedOwnedProjects() || (0, td.hF)();
    }, []),
    i.useEffect(() => {
        (0, eB.jQ)(t);
    }, [t]),
    i.useEffect(
        () => () => {
            ((0, eB.mE)(),
                requestAnimationFrame(() =>
                    requestAnimationFrame(() => {
                        eK.A.isOnPage() ||
                            (function () {
                                for (let e of d.A.getAllFrames()) (0, j.D)(e) && (0, f.r)(e.id);
                            })();
                    }),
                ));
        },
        [],
    ),
    null == t)
        ? (0, a.jsx)("div", {
              className: l ? ha.$ : ha.iR,
              children: null == n ? (0, a.jsx)(hi, {}) : (0, a.jsx)(ht.A, { guildId: n, onConjurePage: !0 }),
          })
        : (0, a.jsx)(hu, { projectId: t, workspaceGuildId: n }, t);
}
