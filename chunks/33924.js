(n.r(t), n.d(t, { default: () => gw }));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    o = n(17928),
    u = n(976860),
    c = n(696451),
    d = n(71393),
    m = n(576705),
    f = n(503698),
    h = n.n(f),
    g = n(97893),
    p = n(364522),
    x = n(297264),
    v = n(834730),
    j = n(65593),
    b = n(458518),
    y = n(742589),
    k = n(152367),
    w = n(661531),
    N = n(866665),
    C = n(939249),
    A = n(497183),
    S = n(248675),
    E = n(105292),
    I = n(631417);
function M(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i, transparent: s = !1 } = e,
        o = E.intl.string(S.default.FzfmQ8);
    return (0, a.jsx)(y.A, {
        hideSearch: !0,
        transparent: s,
        toolbar: n,
        className: I.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: I.QF,
            children: [
                (0, a.jsx)(k.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: w.A.colors.ICON_STRONG,
                    className: I.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(y.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(y.A.Caret, {}),
                          ],
                      })
                    : null,
                null != r && null != i
                    ? (0, a.jsx)(N.m, {
                          asContainer: !0,
                          text: o,
                          position: "bottom",
                          children: (0, a.jsx)(C.D, {
                              className: I.FF,
                              onClick: i,
                              "aria-label": o,
                              children: (0, a.jsx)(A.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(y.A.Title, { className: I.Qw, wrapperClassName: I.DD, children: t }),
            ],
        }),
    });
}
var _ = n(319481),
    R = n(639519),
    P = n(371169);
let T = { main: [], subagent: [], thinking: ["low", "medium", "high", "xhigh", "max"] },
    L = { tier: "balanced" },
    $ = { simple: { thinking: "high" }, balanced: { thinking: "high" }, complex: { thinking: "high" } };
var D = n(652215),
    z = n(746080);
async function O(e) {
    let { guildId: t, installScope: n, modelSettings: l, start: r } = e,
        a = await (0, P.gA)({ guild_id: t, install_scope: n });
    return (
        (0, _.ensureConnection)(a),
        (0, _.stageModelSettings)(a, l ?? L),
        await r(a),
        (0, u.pX)(D.BVt.CHANNEL(t, z.VV.CONJURE, a)),
        a
    );
}
var F = n(548118);
let q = "user";
var U = n(941985),
    G = n(16619),
    B = n(506774);
let K = "ConjureProjectsPanelOpen";
var H = n(89310),
    W = n(821609),
    V = n(775602),
    X = n(486020),
    Z = n(687966),
    Y = n(323384),
    J = n(632015),
    Q = n(231483),
    ee = n(430392);
let et = { games: Z.GameControllerIcon, apps: Y.k, profile_widget: J.f, automod: Q.ShieldIcon, chat_bot: ee.RobotIcon };
var en = n(621466);
let el = "data-conjure-carousel-card";
var er = n(19493);
let ea = i.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n } = e,
            l = et[t.category];
        return (0, a.jsxs)("li", {
            className: er.AS,
            [el]: "",
            children: [
                (0, a.jsxs)("div", {
                    className: er.rl,
                    children: [
                        (0, a.jsx)("img", {
                            className: er.my,
                            src: (0, X.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: er.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: er.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: er.xn,
                            children: [
                                (0, a.jsx)("img", { className: er.q_, src: t.image, alt: "" }),
                                (0, a.jsx)("div", {
                                    className: er.o1,
                                    children: (0, a.jsx)(W.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: E.intl.string(S.default["6CQjTy"]),
                                        onClick: () => n(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: er.qr,
                            children: [
                                (0, a.jsx)("div", {
                                    className: er.Yl,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)(l, { size: "md", color: w.A.colors.ICON_STRONG }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: er.PJ,
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: (function (e) {
                                                switch (e) {
                                                    case "games":
                                                        return E.intl.string(S.default["JU01/4"]);
                                                    case "apps":
                                                        return E.intl.string(S.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return E.intl.string(S.default.GUb2zA);
                                                    case "automod":
                                                        return E.intl.string(S.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return E.intl.string(S.default.KBHZfO);
                                                }
                                            })(t.category),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    ei = i.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            r = (0, o.bG)([V.Ay], () => V.Ay.useReducedMotion),
            s = i.useRef(null),
            u = i.useRef(null);
        return (
            (t = !r),
            i.useEffect(() => {
                let e = s.current,
                    n = u.current;
                if (null == e || null == n) return;
                let l = [],
                    r = [],
                    a = 1,
                    i = 0,
                    o = 1,
                    c = 0,
                    d = 0,
                    m = null,
                    f = !1,
                    h = !1,
                    g = document.hasFocus(),
                    p = !0;
                function x() {
                    null != e &&
                        null != n &&
                        ((r = (l = Array.from(n.querySelectorAll(`[${el}]`))).map(
                            (e) => e.offsetLeft + e.offsetWidth / 2,
                        )),
                        (a = l.length > 1 ? Math.abs(l[1].offsetLeft - l[0].offsetLeft) : 1),
                        (i = t ? a * l.length : 0),
                        (o = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function v() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    l.forEach((e, n) => {
                        var l;
                        let s,
                            u,
                            d = r[n] - t;
                        i > 0 && (d = ((((d - c * o + i / 2) % i) + i) % i) - i / 2);
                        let { angleDeg: m, dropPx: f } =
                            ((l = d / a),
                            (u =
                                (a / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((s = Math.max(-12, Math.min(12, 4 * l))) * Math.PI) / 180))),
                            { angleDeg: s, dropPx: u });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + d - r[n]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${m}deg`),
                            e.style.setProperty("--custom-conjure-home-carousel-drop", `${f}px`));
                    });
                }
                function j(e) {
                    (null != m && i > 0 && (c = (c + (30 * (e - m)) / 1e3) % i),
                        (m = e),
                        v(),
                        (d = requestAnimationFrame(j)));
                }
                function b() {
                    let e = t && !f && !h && g && p;
                    e && 0 === d
                        ? ((m = null), (d = requestAnimationFrame(j)))
                        : e || 0 === d || (cancelAnimationFrame(d), (d = 0));
                }
                function y() {
                    ((f = !0), b());
                }
                function k() {
                    ((f = !1), b());
                }
                function w() {
                    ((h = !0), b());
                }
                function N(t) {
                    ((h = (0, en.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), b());
                }
                function C() {
                    ((g = !0), b());
                }
                function A() {
                    ((g = !1), b());
                }
                (x(), v(), b());
                let S = new ResizeObserver(() => {
                    (x(), v());
                });
                (S.observe(e), S.observe(n));
                let E = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((p = t.isIntersecting), b());
                });
                return (
                    E.observe(e),
                    e.addEventListener("scroll", v, { passive: !0 }),
                    e.addEventListener("pointerenter", y),
                    e.addEventListener("pointerleave", k),
                    e.addEventListener("focusin", w),
                    e.addEventListener("focusout", N),
                    window.addEventListener("focus", C),
                    window.addEventListener("blur", A),
                    () => {
                        (cancelAnimationFrame(d),
                            S.disconnect(),
                            E.disconnect(),
                            e.removeEventListener("scroll", v),
                            e.removeEventListener("pointerenter", y),
                            e.removeEventListener("pointerleave", k),
                            e.removeEventListener("focusin", w),
                            e.removeEventListener("focusout", N),
                            window.removeEventListener("focus", C),
                            window.removeEventListener("blur", A));
                    }
                );
            }, [s, u, t]),
            (0, a.jsx)("section", {
                ref: s,
                className: r ? er.vV : er.Dk,
                "aria-label": E.intl.string(S.default.Qc4S39),
                children: (0, a.jsx)("ul", {
                    ref: u,
                    className: er.u4,
                    children: n.map((e) => (0, a.jsx)(ea, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var es = n(858899),
    eo = n(789645),
    eu = n(265872),
    ec = n(980707),
    ed = n(477782),
    em = n(81369),
    ef = n(666476),
    eh = n(989145);
(n(323874), n(14289), n(35956));
var eg = n(77729),
    ep = n(723702),
    ex = n(264572).Buffer;
async function ev(e, t) {
    if (ep.isPlatformEmbedded) {
        let n = ex.from(await e.arrayBuffer());
        if ("function" == typeof eg.A.fileManager.saveWithDialog2) await eg.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await eg.A.fileManager.saveWithDialog(n, t);
            } catch {}
        return;
    }
    let n = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        ((e.href = n), (e.download = t), (e.rel = "noopener"), e.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(n), 0);
    }
}
var ej = n(688954);
class eb extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function ey(e, t) {
    let n = await (0, ej.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new eb(n.status);
    return await n.blob();
}
async function ek(e, t, n) {
    (0, _.ensureConnection)(e);
    let l = await (0, eh.vX)(e, t);
    (0, _.sendUserMessage)(e, n, [l]);
}
function ew(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, ef.Oq)(e.size, t)
        ? null
        : E.intl.formatToPlainString(S.default.ThxcOX, { size: (0, ef.sM)((0, ef.Ju)(t)) });
}
async function eN(e, t) {
    let n,
        l =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "conjure" : n}.zip`),
        r = await ey(e, l);
    await ev(r, l);
}
function eC(e) {
    let t = i.useRef(null),
        n = i.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, a.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: n,
        }),
    };
}
var eA = n(950305),
    eS = n(664121);
let eE = [
    { value: "user", icon: eA.UserIcon, nameMessage: S.default.s1TsXl },
    { value: "guild", icon: eS.R, nameMessage: S.default.LlLIJw },
];
function eI(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = eC(i.useCallback((e) => n(e, "user"), [n])),
        s = eC(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eu.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: eu.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(ec.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": E.intl.string(S.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(ed.rX, {
                            label: E.intl.string(S.default.NyVn6T),
                            children: eE
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: E.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        ed.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(W.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: em.H,
                        text: E.intl.string(S.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": r,
                    });
                },
            }),
            r.input,
            s.input,
        ],
    });
}
var eM = n(418811),
    e_ = n(246338),
    eR = n(290076),
    eP = n(442433),
    eT = n(314116),
    eL = n(260498),
    e$ = n(782603),
    eD = n(780338),
    ez = n(782134),
    eO = n(113494),
    eF = n(663417),
    eq = n(70688),
    eU = n(173936),
    eG = n(473935),
    eB = n(625903),
    eK = n(408278),
    eH = n(365199),
    eW = n(7437),
    eV = n(147036),
    eX = n(957565),
    eZ = n(785389),
    eY = n(123917),
    eJ = n(860402);
let eQ = new Set();
var e0 = n(534223),
    e1 = n(442331),
    e2 = n(616334);
n(321073);
var e3 = n(189714),
    e4 = n(733791),
    e5 = n(189213),
    e6 = n(331322),
    e7 = n(192308),
    e8 = n(664619),
    e9 = n(706935);
function te(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === l,
        h = f ? (0, e4.fI)(n) : (0, e4.Kd)(n),
        g = f ? null : (0, e4.L4)(n),
        p = (0, e4.Mi)(n),
        x = f
            ? E.intl.formatToPlainString(S.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(S.default.x6FvsZ, { app: n.appName });
    async function j() {
        (c(!0), m(null));
        let e = f ? (0, P.xx)(t.id) : (0, e8.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(f ? S.default["0XDHob"] : S.default.PJ2Fkn))
            : (f || (0, es.P0)({ text: (0, e4.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(e5.a, {
        ...r,
        role: "alertdialog",
        title: f ? x : (0, e4.WX)((0, e9.tb)(S.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, e4.J)(n) : E.intl.string(S.default["8OKM1N"]),
        "aria-label": x,
        notice: null == d ? void 0 : { message: d, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: E.intl.string(f ? S.default.aC42bN : S.default.BGF8VT),
                variant: "critical-primary",
                loading: u,
                disabled: u,
                onClick: () => {
                    j().catch(() => {});
                },
            },
        ],
        children: (0, a.jsxs)(e6.B, {
            gap: 12,
            children: [
                h.length > 0 || null != g
                    ? (0, a.jsx)(e9.Ay, {
                          items: h,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != p ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: p }) : null,
            ],
        }),
    });
}
function tt(e) {
    (0, e7.openModal)((t) => (0, a.jsx)(te, { ...t, ...e }));
}
var tn = n(587895);
function tl(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, u] = i.useState(null),
        c = (0, o.bG)([tn.A], () => tn.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        d = E.intl.formatToPlainString(S.default.m8KWic, { app: c });
    async function m() {
        (r(!0), u(null));
        let e = await (0, e8.R_)(t.id);
        (r(!1), e)
            ? ((0, es.P0)({ text: E.intl.formatToPlainString(S.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : u(E.intl.string(S.default["rE/0SD"]));
    }
    return (0, a.jsx)(e5.a, {
        ...n,
        role: "alertdialog",
        title: d,
        subtitle: E.intl.string(S.default.wve4kB),
        "aria-label": d,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: E.intl.string(S.default.GqcQyH),
                variant: "critical-primary",
                loading: l,
                disabled: l,
                onClick: () => {
                    m().catch(() => {});
                },
            },
        ],
    });
}
var tr = n(552821);
let ta = [];
function ti(e) {
    (0, es.P0)({ text: e, variant: "critical" });
}
function ts(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: s,
            canRemix: u,
            onExport: c,
            onImport: d,
            onRemix: m,
            onConnectTool: f,
            onHistory: h,
            onRefresh: g,
            isRefreshing: p = !1,
            onTogglePreviewPaused: x,
            previewPaused: v = !1,
            previewPauseDisabled: j = !1,
            onClose: b,
            refreshApplicationId: y,
            previewProjectId: k,
            onCloseMenu: w,
        } = e,
        N = (0, e3.iI)(t),
        C = i.useContext(e0.bI),
        { pending: A, refresh: I } = (0, eW.A)(y ?? null),
        { pending: M, connect: _ } = (function (e, t) {
            let [n, l] = i.useState(eQ),
                r = i.useRef(eQ),
                a = i.useCallback((e) => {
                    ((r.current = (0, eZ.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, eZ.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, eJ.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, eY.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, eZ.rq)(l.error)
                                          ? E.intl.string(S.default["jCQ/1B"])
                                          : E.intl.string(S.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(k ?? null, ti),
        R = (0, o.bG)([e1.A], () => (null == k ? ta : e1.A.getDeclaredConnections(k))),
        T = i.useMemo(() => (0, eZ.Xl)(R), [R]),
        L = (0, e4.Bs)(t),
        $ = (0, e4.CU)(t) && s,
        D = (0, o.bG)(
            [eL.Ay],
            () => {
                let e = eL.Ay.getProject(t);
                return null != e && (0, eL.jf)(e);
            },
            [t],
        ),
        O = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: E.intl.string(S.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: E.intl.formatToPlainString(S.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: E.intl.formatToPlainString(S.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != y, refreshPending: A, offers: T, connectPending: M }),
        F = i.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        q = null != m && u,
        U = s && null != d,
        G = q || null != c || U || null != f || null != h,
        B = eX.p5 && null != l,
        K = eX.p5,
        H = N ? e$.BellIcon : eD.BellSlashIcon,
        W = v ? ez.PlayIcon : eO.PauseIcon;
    return (0, a.jsxs)(ec.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: w,
        onSelect: w,
        children: [
            null != g || null != x || null != b
                ? (0, a.jsxs)(ed.rX, {
                      children: [
                          null != g
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "refresh",
                                    icon: eF.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: eF.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: p,
                                    action: g,
                                })
                              : null,
                          null != x
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: W,
                                    leadingAccessory: { type: "icon", icon: W },
                                    label: E.intl.string(v ? S.default.ZKd2Cw : S.default.VHxerm),
                                    disabled: j,
                                    action: x,
                                })
                              : null,
                          null != b
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "close",
                                    icon: eq.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: eq.DoorExitIcon },
                                    label: E.intl.string(S.default["/TlGcK"]),
                                    action: b,
                                })
                              : null,
                      ],
                  })
                : null,
            O.length > 0
                ? (0, a.jsx)(ed.rX, {
                      children: O.map((e) =>
                          (0, a.jsx)(
                              ed.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void I();
                                      let t = null == e.connectionType ? null : F.get(e.connectionType);
                                      null != t && _(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(ed.rX, {
                children: (0, a.jsx)(ed.Dr, {
                    id: "mute",
                    label: E.intl.string(N ? S.default.s9rCuH : S.default["a+i/As"]),
                    icon: H,
                    leadingAccessory: { type: "icon", icon: H },
                    action: () => (0, e3.$L)(t, !N),
                }),
            }),
            G
                ? (0, a.jsxs)(ed.rX, {
                      children: [
                          q
                              ? (0, a.jsx)(ed.Dr, { id: "remix", label: E.intl.string(S.default.XWgAfc), action: m })
                              : null,
                          null != c
                              ? (0, a.jsx)(ed.Dr, { id: "export", label: E.intl.string(S.default.WsEEP7), action: c })
                              : null,
                          U
                              ? (0, a.jsx)(ed.Dr, { id: "import", label: E.intl.string(S.default.rWGY3e), action: d })
                              : null,
                          null != f
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(S.default.yOIql5),
                                    action: f,
                                })
                              : null,
                          null != h
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "history",
                                    label: E.intl.string(S.default["3hIVou"]),
                                    action: h,
                                })
                              : null,
                      ],
                  })
                : null,
            K
                ? (0, a.jsxs)(ed.rX, {
                      children: [
                          B
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: eU.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: eU.LinkIcon },
                                    action: () =>
                                        (0, eX.C)((0, eV.n)(l, z.VV.CONJURE, t), () =>
                                            (0, es.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(ed.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(S.default["nm/zuU"]),
                              icon: eG.L,
                              leadingAccessory: { type: "icon", icon: eG.L },
                              action: () =>
                                  (0, eX.C)(t, () =>
                                      (0, es.P0)({ text: E.intl.string(S.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || D || L?.canRemoveBot === !0
                ? (0, a.jsxs)(ed.rX, {
                      children: [
                          s || D
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "settings",
                                    label: E.intl.string(S.default.FzfmQ8),
                                    icon: eB.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: eB.SettingsIcon },
                                    action: () =>
                                        (0, e2.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: C,
                                        }),
                                })
                              : null,
                          L?.canRemoveBot === !0
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(S.default["3gKG2j"], { server: L.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = eL.Ay.getProject(t);
                                        null != e && tt({ project: e, target: L, action: "remove" });
                                    },
                                })
                              : null,
                          $
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(S.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = eL.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, e7.openModal)((t) => (0, a.jsx)(tl, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = eL.Ay.getProject(t);
                                        if (null != e && null != L) tt({ project: e, target: L, action: "delete" });
                                        else
                                            (0, eT.A)({
                                                title: E.intl.formatToPlainString(S.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(S.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, P.K)(t, () =>
                                                        (0, es.P0)({
                                                            text: E.intl.string(S.default["0XDHob"]),
                                                            variant: "critical",
                                                        }),
                                                    );
                                                },
                                            });
                                    },
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
function to(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eu.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(ts, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: tr.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, a.jsx)(eK.K, {
                                  icon: eH.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(y.A.Icon, {
                              icon: eH.MoreHorizontalIcon,
                              tooltip: E.intl.string(E.t["UKOtz+"]),
                              "aria-label": E.intl.string(E.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: r,
                          }),
            });
        },
    });
}
var tu = n(95264);
function tc(e, t) {
    let n,
        l,
        r,
        a,
        s,
        { onExport: o } =
            ((n = e.id),
            (l = e.name),
            (r = i.useRef(!1)),
            (a = i.useCallback(() => {
                r.current ||
                    ((r.current = !0),
                    (0, es.P0)({ text: E.intl.formatToPlainString(S.default.aN2JdD, { name: l }) }),
                    eN(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[conjure] project export failed", n, e),
                                (0, es.P0)({
                                    text:
                                        409 === (t = e instanceof eb ? e.status : null)
                                            ? E.intl.string(S.default["9oqbEw"])
                                            : 404 === t
                                              ? E.intl.string(S.default["0W8uLq"])
                                              : E.intl.string(S.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: a,
                onImport: (s = eC(
                    i.useCallback(
                        (e) => {
                            let r = ew(e);
                            null != r
                                ? (0, es.P0)({ text: r, variant: "critical" })
                                : (0, eT.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: l }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, u.pX)(D.BVt.CHANNEL(t, z.VV.CONJURE, n));
                                          try {
                                              await ek(n, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, es.P0)({
                                                  text: E.intl.string(S.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [n, l, t],
                    ),
                )).open,
                importInput: s.input,
            });
    return {
        projectId: e.id,
        projectName: e.name,
        guildId: t,
        projectGuildId: e.guild_id,
        isOwner: (0, eL.PV)(e),
        canRemix: (0, eL.H_)(e),
        onRemix: () => (0, tu.A)(e, t),
        onExport: o,
    };
}
function td(e) {
    let { project: t, guildId: n } = e,
        l = tc(t, n);
    return (0, a.jsx)(ts, { ...l, onCloseMenu: eP.Z_ });
}
function tm(e) {
    let { project: t, guildId: n } = e,
        l = tc(t, n);
    return (0, a.jsx)(to, { ...l, trigger: "iconButton" });
}
var tf = n(638693);
class th extends Error {}
function tg(e) {
    let { guildId: t, modelSettings: n, onClose: l } = e,
        r = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, e_.Ot)(e, t)
                    ? (0, u.pX)(D.BVt.CHANNEL(t, z.VV.CONJURE, e.id))
                    : (0, eM.A)(e);
            },
            [t],
        ),
        s = i.useCallback((e) => (0, a.jsx)(tm, { project: e, guildId: t }), [t]),
        o = i.useCallback(
            (e, n) => {
                (0, eP.jA)(e, () => (0, a.jsx)(td, { project: n, guildId: t }));
            },
            [t],
        ),
        [c, d] = i.useState(!1),
        m = i.useCallback(
            async (e, l) => {
                let r = ew(e);
                if (null != r) return void (0, es.P0)({ text: r, variant: "critical" });
                d(!0);
                try {
                    await O({
                        guildId: t,
                        installScope: l,
                        modelSettings: n,
                        start: async (t) => {
                            try {
                                await ek(t, e, E.intl.string(S.default["LUc7/5"]));
                            } catch {
                                throw (await (0, P.xx)(t).catch(() => void 0), new th());
                            }
                        },
                    });
                } catch (e) {
                    (0, es.P0)({
                        text: e instanceof th ? E.intl.string(S.default["Q+l4Hv"]) : (0, R.mG)(e),
                        variant: "critical",
                    });
                } finally {
                    d(!1);
                }
            },
            [t, n],
        ),
        f = E.intl.string(S.default.dWgSAa),
        h = E.intl.string(S.default.kar7jh);
    return (0, a.jsxs)("aside", {
        className: tf.pz,
        "aria-label": f,
        children: [
            (0, a.jsxs)("div", {
                className: tf.wx,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-strong", children: f }),
                    (0, a.jsxs)("div", {
                        className: tf.$s,
                        children: [
                            (0, a.jsx)(eI, { importing: c, onImport: m }),
                            (0, a.jsx)(y.A.Icon, { icon: eo.P, tooltip: h, "aria-label": h, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(p.Ip, {
                className: tf.XG,
                children: (0, a.jsx)(eR.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: s,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var tp = n(559106),
    tx = n(663341),
    tv = n(783977),
    tj = n(559647),
    tb = n(531685),
    ty = n(477262),
    tk = n(432017);
let tw = [
    {
        id: "add-images-videos",
        label: S.default["51+9lc"],
        icon: ty.s,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: S.default["10ljr2"],
        icon: tk.T,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: S.default.aotDee, icon: em.H, accept: "" },
];
var tN = n(289873),
    tC = n(285796),
    tA = n(73153),
    tS = n(839214);
let tE = [],
    tI = 1,
    tM = (0, tS.D)(() => ({ draftsByProject: {} }));
function t_(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? tE;
}
function tR(e, t) {
    return t_(tM.getState(), e, t);
}
function tP(e, t, n) {
    let { draftsByProject: l } = tM.getState();
    tM.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function tT(e, t, n, l) {
    let r = tR(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (tP(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function tL(e, t) {
    (0, eh.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function t$(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && tL(e, t.ref.id));
}
function tD(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = tM.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? tE) n ? t$(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    tM.setState({ draftsByProject: i });
}
function tz(e) {
    return E.intl.formatToPlainString(S.default.JZ59Bo, { size: (0, ef.sM)((0, ef.Ju)(e)) });
}
function tO(e, t) {
    let n = tR(e, t);
    if (0 !== n.length) {
        for (let t of n) t$(e, t);
        tP(e, t, tE);
    }
}
function tF(e, t) {
    let n = tR(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (tP(e, t, tE), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function tq(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = tR(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? tF(e, "chat") : [];
    (0, _.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(tA.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(tM.getState().draftsByProject)) tD(e, { deleteFromWorker: !0 });
}),
    tA.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        tD(t, { deleteFromWorker: !1 });
    }));
var tU = n(922329);
async function tG(e) {
    let t = new Worker(new URL("/assets/" + n.u("638664"), n.b));
    try {
        let n = await new Promise((n) => {
            (t.addEventListener("message", (e) => {
                let { data: t } = e;
                return n(t);
            }),
                t.addEventListener("error", () => n(null)),
                t.addEventListener("messageerror", () => n(null)),
                t.postMessage(e));
        });
        if (null == n) return null;
        return new File([n], `${e.name.replace(/\.png$/i, "")}.webp`, {
            type: "image/webp",
            lastModified: e.lastModified,
        });
    } finally {
        t.terminate();
    }
}
var tB = n(153171);
let tK = ef.lN;
function tH(e, t, n, l) {
    let r = tR(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: tI++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (tP(e, t, [
            ...tR(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void tT(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    tT(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  tT(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default.E7dS5n) }),
                              ef.o2 - 3e5,
                          )
                        : tL(e, a.id);
                },
                (l) => {
                    (console.error("[conjure] attachment upload failed", l),
                        tT(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= tK)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: E.intl.formatToPlainString(S.default.Q0aCVZ, { count: tK }),
                    },
                };
            if (!(0, ef.Oq)(e.size, t))
                return "image/png" === t && e.size <= ef.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await tG(e).catch(() => null);
                              return null != n && (0, ef.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: tz(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: tz(t) } };
            let a = ef.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function tW(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = tM.useState((e) => t_(e, t, n)),
        a = i.useCallback((e) => tH(t, n, e, l), [t, n, l]),
        s = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), a(t));
            },
            [a],
        ),
        o = i.useCallback(
            (e) => {
                let l, r;
                null != (r = (l = tR(t, n)).find((t) => t.localId === e)) &&
                    (t$(t, r),
                    tP(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => tF(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function tV(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(tU.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(tN.y, { type: tN.t.SPINNING_CIRCLE_SIMPLE, className: tB.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tB.o1,
                onClick: () => n(t.localId),
                "aria-label": E.intl.string(S.default.Slam9g),
                children: (0, a.jsx)(tC.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tX = n(900797),
    tZ = n(320448),
    tY = n(344587),
    tJ = n(534554),
    tQ = n(392208),
    t0 = n(822313),
    t1 = n(837984),
    t2 = n(359589),
    t3 = n(254575);
function t4(e) {
    let [t, n] = i.useState(e),
        [l, r] = i.useState(!1),
        [a, s] = i.useState(e);
    return (
        a !== e && (s(e), e ? n(!0) : r(!1)),
        i.useEffect(() => {
            if (e || !t) return;
            let l = setTimeout(() => n(!1), 150);
            return () => clearTimeout(l);
        }, [e, t]),
        i.useEffect(() => {
            if (!t || !e) return;
            let n = 0,
                l = requestAnimationFrame(() => {
                    n = requestAnimationFrame(() => r(!0));
                });
            return () => {
                (cancelAnimationFrame(l), cancelAnimationFrame(n));
            };
        }, [t, e]),
        { mounted: t, entered: l }
    );
}
function t5(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = t4(d),
        g = tQ.P.indexOf(t.tier),
        p = d ? tX.t : tZ._,
        x = tQ.P.map(tJ.D0),
        j = (0, tJ.Tc)(t.tier),
        { text: b, phase: y } = (0, tY.Q)(j);
    return (0, a.jsx)("div", {
        className: t3.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: h()(t3.t$, { [t3.Zr]: u && c, [t3.GF]: !u }),
            role: "dialog",
            "aria-label": E.intl.string(S.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: h()(t3.Nr, t3.uO, { [t3.Zr]: d && f.entered, [t3.GF]: !d }),
                          children: (0, a.jsx)(t2.b, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${t3.Nr} ${t3.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: t3.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: t3.y6,
                                    "aria-expanded": d,
                                    "aria-label": E.intl.string((0, tJ.FC)(l)),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: E.intl.string(S.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(p, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: t3.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: h()(t3.Z, { [t3.xQ]: "exit" === y, [t3.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: t3.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: t3.Nb,
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: E.intl.string(S.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: E.intl.string(S.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(t1.A, {
                                    activeIndex: g,
                                    stops: x,
                                    ariaLabel: E.intl.string(S.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = tQ.P[e];
                                        null != n && n !== t.tier && s((0, tJ.CM)((0, tJ.j6)(t, n)));
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function t6(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, t0.A)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: p } = t4(f);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: eu.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(t5, {
                settings: d,
                tiers: n ?? null,
                choices: l,
                disabled: r,
                onChange: m,
                placement: t,
                open: f,
                entered: p,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(N.m, {
                text: E.intl.string(S.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(C.D, {
                    innerRef: c,
                    className: o ?? t3.hZ,
                    "aria-label": E.intl.string(S.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(tv.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var t7 = n(847374),
    t8 = n(122485);
function t9(e) {
    let { target: t, guilds: n, onChange: l, disabled: r, className: s } = e,
        [o, u] = i.useState(!1),
        c = i.useRef(null),
        d = i.useCallback(() => u(!1), []);
    o && r && u(!1);
    let m = E.intl.string(S.default.NyVn6T),
        f = E.intl.string(S.default.UPLaGM),
        h = t === q ? null : (n.find((e) => e.id === t) ?? null),
        g = h?.name ?? f;
    return (0, a.jsx)(eu.Y, {
        targetElementRef: c,
        shouldShow: o,
        onRequestClose: d,
        position: "top",
        align: "left",
        animation: eu.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(ec.W, {
                navId: "conjure-home-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsxs)(ed.rX, {
                    label: m,
                    children: [
                        (0, a.jsx)(ed.iD, {
                            id: "conjure-home-target-user",
                            group: "conjure-home-target",
                            label: f,
                            checked: t === q,
                            action: () => {
                                (l(q), d());
                            },
                        }),
                        n.map((e) =>
                            (0, a.jsx)(
                                ed.iD,
                                {
                                    id: `conjure-home-target-${e.id}`,
                                    group: "conjure-home-target",
                                    label: e.name,
                                    checked: t === e.id,
                                    action: () => {
                                        (l(e.id), d());
                                    },
                                },
                                e.id,
                            ),
                        ),
                    ],
                }),
            });
        },
        children: (e, t) => {
            let { onClick: n, ...l } = e,
                { isShown: i } = t;
            return (0, a.jsx)(tp.vN, {
                children: (0, a.jsxs)("button", {
                    ...l,
                    ref: c,
                    type: "button",
                    className: s,
                    disabled: r,
                    "aria-label": E.intl.formatToPlainString(S.default.Lyx6pW, { name: g }),
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: () => u((e) => !e),
                    children: [
                        (0, a.jsx)("span", {
                            className: t8.R,
                            "aria-hidden": !0,
                            children:
                                null != h
                                    ? (0, a.jsx)(F.Ay, { guild: h, size: F.Ay.Sizes.MINI, active: !0 })
                                    : (0, a.jsx)(eA.UserIcon, { size: "refresh_sm", color: "currentColor" }),
                        }),
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            lineClamp: 1,
                            className: t8.P,
                            children: g,
                        }),
                        (0, a.jsx)(t7.a, { size: "refresh_sm", color: "currentColor", "aria-hidden": !0 }),
                    ],
                }),
            });
        },
    });
}
var ne = n(200160),
    nt = n(465410);
function nn(e) {
    let { prompts: t, paused: n, showCaret: l } = e,
        { index: r, length: s } = (function (e, t) {
            let [n, l] = i.useState({ index: 0, length: 0, phase: "typing" }),
                r = i.useRef(n.length);
            i.useLayoutEffect(() => {
                r.current = n.length;
            });
            let { index: a, phase: s } = n;
            return (
                i.useEffect(() => {
                    if (t) return;
                    let n = e[a].length;
                    if ("holding" === s) {
                        let e = window.setTimeout(() => l((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let i = "typing" === s,
                        o = r.current,
                        u = performance.now(),
                        c = o,
                        d = 0,
                        m = 0;
                    return (
                        (d = requestAnimationFrame(function t(r) {
                            let s = Math.floor((r - u) / (i ? 14 : 4)),
                                f = i ? Math.min(n, o + s) : Math.max(0, o - s);
                            (f !== c && ((c = f), l((e) => ({ ...e, length: f }))),
                                i && f === n
                                    ? l((e) => ({ ...e, length: f, phase: "holding" }))
                                    : i || 0 !== f
                                      ? (d = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => l({ index: (a + 1) % e.length, length: 0, phase: "typing" }),
                                            250,
                                        )));
                        })),
                        () => {
                            (cancelAnimationFrame(d), window.clearTimeout(m));
                        }
                    );
                }, [e, t, a, s]),
                n
            );
        })(t, n);
    return (0, a.jsxs)(v.E, {
        variant: "text-md/normal",
        color: "text-muted",
        className: ne.RC,
        children: [t[r].slice(0, s), l ? (0, a.jsx)("span", { className: ne.OW }) : null],
    });
}
function nl(e) {
    let { prompts: t, paused: n } = e,
        l = (function (e, t) {
            let [n, l] = i.useState(0);
            return (
                i.useEffect(() => {
                    if (t || e < 2) return;
                    let n = window.setInterval(() => l((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(n);
                }, [e, 2e3, t]),
                n
            );
        })(t.length, n);
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", className: ne.RC, children: t[l] });
}
function nr(e) {
    let { boxFocused: t } = e,
        n = i.useMemo(
            () => [
                E.intl.string(S.default.J2o8Ae),
                E.intl.string(S.default["wn+Bzd"]),
                E.intl.string(S.default["6DCVy3"]),
                E.intl.string(S.default.iRbnRD),
                E.intl.string(S.default["p/zqml"]),
            ],
            [],
        ),
        l = (0, o.bG)([V.Ay], () => V.Ay.useReducedMotion),
        r = (0, o.bG)([tb.A], () => tb.A.isFocused()),
        s = t || !r;
    return (0, a.jsx)("div", {
        className: ne.qf,
        "aria-hidden": !0,
        children: l
            ? (0, a.jsx)(nl, { prompts: n, paused: s })
            : (0, a.jsx)(nn, { prompts: n, paused: s, showCaret: !t }),
    });
}
function na(e) {
    let {
            idea: t,
            inputRef: n,
            onIdeaChange: l,
            onSubmit: r,
            submitting: s,
            submitDisabled: o,
            error: u,
            target: c,
            eligibleGuilds: d,
            onTargetChange: m,
            modelSettings: f,
            onModelSettingsChange: g,
            attachments: p,
        } = e,
        [x, j] = i.useState(!1),
        b = i.useRef(null),
        y = i.useId(),
        k = "" !== t,
        w = E.intl.string(E.t.d56gCa),
        N = i.useRef(null),
        C = i.useRef(null),
        { addFiles: A, pasteFiles: I, removeAttachment: M } = p,
        _ = i.useCallback((e) => {
            let t = N.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        R = i.useCallback(
            (e) => {
                (A(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [A],
        ),
        P = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || r());
            },
            [o, r],
        );
    return (0, a.jsxs)("div", {
        className: ne.kL,
        children: [
            (0, a.jsxs)("div", {
                ref: b,
                className: h()(ne.yk, { [ne.Sl]: null != u }),
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: ne.Ox,
                        children: [
                            (0, a.jsx)(tp.vN, {
                                ringTarget: b,
                                ringClassName: ne.Rg,
                                children: (0, a.jsx)("textarea", {
                                    ref: n,
                                    className: h()(ne.hF, nt.dv),
                                    rows: 3,
                                    value: t,
                                    "aria-label": E.intl.string(S.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? y : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: P,
                                    onPaste: (e) => I(e),
                                    onFocus: () => j(!0),
                                    onBlur: () => j(!1),
                                }),
                            }),
                            k ? null : (0, a.jsx)(nr, { boxFocused: x }),
                        ],
                    }),
                    p.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: ne.ZO,
                              children: p.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(tV, { draft: t, onRemove: M }, t.localId);
                              }),
                          })
                        : null,
                    (0, a.jsxs)("div", {
                        className: ne.KE,
                        children: [
                            (0, a.jsx)("input", {
                                ref: N,
                                type: "file",
                                multiple: !0,
                                onChange: R,
                                className: ne.Fg,
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                            (0, a.jsx)(eu.Y, {
                                targetElementRef: C,
                                position: "top",
                                align: "left",
                                animation: eu.Y.Animation.NONE,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(ec.W, {
                                        "data-menu-migrated": !0,
                                        navId: "conjure-home-attach",
                                        "aria-label": w,
                                        onClose: t,
                                        onSelect: t,
                                        children: (0, a.jsx)(ed.rX, {
                                            children: tw.map((e) =>
                                                (0, a.jsx)(
                                                    ed.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => _(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    });
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t;
                                    return (0, a.jsx)("button", {
                                        ...e,
                                        ref: C,
                                        type: "button",
                                        className: ne.gb,
                                        disabled: s,
                                        "aria-label": w,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n,
                                        children: (0, a.jsx)(tx.PlusLargeIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                            className: ne.Xv,
                                        }),
                                    });
                                },
                            }),
                            (0, a.jsx)(t9, {
                                target: c,
                                guilds: d,
                                onChange: m,
                                disabled: s,
                                className: h()(ne.gb, ne.qU),
                            }),
                            (0, a.jsxs)("div", {
                                className: ne.Rc,
                                children: [
                                    (0, a.jsx)(t6, {
                                        settings: f ?? L,
                                        tiers: $,
                                        choices: T,
                                        disabled: s,
                                        onChange: g,
                                        className: ne.gb,
                                        icon: (0, a.jsx)(tv.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(W.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: tj.SendMessageIcon,
                                        text: E.intl.string(S.default.bNtzxp),
                                        disabled: o,
                                        loading: s,
                                        onClick: r,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != u
                ? (0, a.jsx)(v.E, {
                      id: y,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: u,
                  })
                : null,
        ],
    });
}
var ni = n(628284),
    ns = n(369606),
    no = n(926268),
    nu = n(406810),
    nc = n(707554),
    nd = n(651346);
function nm(e) {
    let { className: t } = e;
    return (0, a.jsx)("span", { className: h()(nd.n8, t) });
}
let nf = [
        {
            id: "apps",
            title: S.default["bvcT/Q"],
            description: S.default.ArcJqa,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nd.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nd.My,
                            children: [
                                (0, a.jsx)("span", { className: nd._w }),
                                (0, a.jsx)("span", { className: nd._w }),
                                (0, a.jsx)("span", { className: nd._w }),
                            ],
                        }),
                        (0, a.jsx)(nm, { className: nd.Lm }),
                        (0, a.jsx)("div", {
                            className: nd.Oh,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nd.ZW,
                                        children: [
                                            (0, a.jsx)("span", { className: nd.NU }),
                                            0 === e
                                                ? (0, a.jsx)(ni.y, {
                                                      size: "xs",
                                                      color: w.A.colors.ICON_BRAND,
                                                      className: nd._6,
                                                  })
                                                : null,
                                            (0, a.jsx)(nm, { className: nd.Eg }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                });
            },
        },
        {
            id: "games",
            title: S.default["JU01/4"],
            description: S.default.FXwLsv,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: h()(nd.x, nd.jG),
                    children: [
                        (0, a.jsx)("span", { className: h()(nd.gg, nd.K1) }),
                        (0, a.jsx)("span", { className: h()(nd.gg, nd.W2) }),
                        (0, a.jsx)("span", { className: h()(nd.Fs, nd.A$) }),
                        (0, a.jsx)("span", { className: h()(nd.Fs, nd.eP) }),
                        (0, a.jsx)("span", { className: h()(nd.Fs, nd.kc) }),
                        (0, a.jsx)("span", { className: h()(nd.Fs, nd.OE) }),
                        (0, a.jsx)("span", { className: nd.OC }),
                        (0, a.jsxs)("div", {
                            className: nd.si,
                            children: [
                                (0, a.jsx)(ns.TrophyIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: nd.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nd.KQ,
                            children: [
                                (0, a.jsx)(no.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(no.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(no.HeartIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "bots",
            title: S.default.KBHZfO,
            description: S.default.qNmKhG,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nd.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nd.$y,
                            children: [(0, a.jsx)("span", { className: nd.m$ }), (0, a.jsx)(nm, { className: nd.Md })],
                        }),
                        (0, a.jsxs)("div", {
                            className: nd.iU,
                            children: [
                                (0, a.jsx)("span", {
                                    className: h()(nd.my, nd.FY),
                                    children: (0, a.jsx)(ee.RobotIcon, {
                                        size: "xs",
                                        color: w.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: nd.OS,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: nd.f9,
                                            children: [
                                                (0, a.jsx)(nm, { className: nd.iE }),
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: nd.AO,
                                                    children: E.intl.string(S.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(nm, { className: nd.xs }),
                                        (0, a.jsx)(nm, { className: nd.Md }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "profile-widgets",
            title: S.default.GUb2zA,
            description: S.default["v+F6qW"],
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: h()(nd.x, nd.ME),
                    children: [
                        (0, a.jsx)("span", { className: nd.CK }),
                        (0, a.jsxs)("div", {
                            className: nd.kI,
                            children: [
                                (0, a.jsx)("span", { className: h()(nd.my, nd.jU) }),
                                (0, a.jsx)(nm, { className: nd.iE }),
                                (0, a.jsxs)("div", {
                                    className: nd.Wy,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: nd.M1,
                                            children: [0, 1].map((e) =>
                                                (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        className: nd.dJ,
                                                        children: [
                                                            (0, a.jsx)(nm, { className: nd.cR }),
                                                            (0, a.jsx)(nm, { className: nd.Zh }),
                                                        ],
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: nd.bW,
                                            children: [0, 1, 2, 3, 4, 5].map((e) =>
                                                (0, a.jsx)("span", { className: nd.QR }, e),
                                            ),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "overlay-widgets",
            title: S.default.uVOH1p,
            description: S.default.zm7y9u,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nd.JH,
                    children: [
                        (0, a.jsx)("span", { className: nd.rx }),
                        (0, a.jsx)("span", { className: nd.ny }),
                        (0, a.jsx)("span", { className: nd.ZH }),
                        (0, a.jsx)("div", {
                            className: nd.$Y,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nd.fn,
                                        children: [
                                            (0, a.jsx)("span", { className: h()(nd._h, { [nd.zY]: 0 === e }) }),
                                            (0, a.jsx)(nm, { className: nd.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsxs)("div", {
                            className: nd.Y5,
                            children: [
                                (0, a.jsx)(nu.ClockIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, a.jsx)(nm, { className: nd.jB }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "automod",
            title: S.default["+EKk4D"],
            description: S.default.fpXK3z,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nd.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nd.iU,
                            children: [
                                (0, a.jsx)("span", { className: nd.my }),
                                (0, a.jsxs)("div", {
                                    className: nd.OS,
                                    children: [
                                        (0, a.jsx)(nm, { className: nd.iE }),
                                        (0, a.jsx)(nm, { className: h()(nd.xs, nd.pc) }),
                                        (0, a.jsx)(nm, { className: h()(nd.Md, nd.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nd.jC,
                            children: [
                                (0, a.jsx)(Q.ShieldIcon, { size: "sm", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsxs)("div", {
                                    className: nd.qQ,
                                    children: [
                                        (0, a.jsx)(nm, { className: h()(nd.Md, nd.k8) }),
                                        (0, a.jsx)(nm, { className: h()(nd.nq, nd.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    nh = i.memo(function () {
        let e = i.useId();
        return (0, a.jsx)("section", {
            className: nd.GG,
            "aria-labelledby": e,
            children: (0, a.jsx)(nc.F, {
                component: (0, a.jsx)(x.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: E.intl.string(S.default.IiQEVd),
                }),
                children: (0, a.jsx)("ul", {
                    className: nd.Vg,
                    children: nf.map((e) => {
                        let { id: t, title: n, description: l, Visual: r } = e;
                        return (0, a.jsxs)(
                            "li",
                            {
                                className: nd.Vs,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: nd.Tn,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(r, {}),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: nd.pG,
                                        children: [
                                            (0, a.jsx)(x.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: E.intl.string(n),
                                            }),
                                            (0, a.jsx)(v.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: E.intl.string(l),
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                }),
            }),
        });
    });
function ng(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let np = 1;
function nx(e) {
    let t = ng(e),
        n = { localId: np++, name: e.name, contentType: t };
    if (
        !(0, ef.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= ef.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...n, status: "error", errorText: tz(t) } };
    let l = ef.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: l } };
}
function nv(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function nj(e, t) {
    if ((0, ef.Oq)(t.size, ng(t))) return (0, eh.vX)(e, t);
    let n = await tG(t);
    if (null == n || !(0, ef.Oq)(n.size, n.type)) throw Error("attachment over its size limit");
    return (0, eh.vX)(e, n);
}
var nb = n(698638),
    ny = n(606128),
    nk = n(260024);
class nw extends Error {}
function nN(e) {
    let t,
        { guildId: n } = e,
        [l, r] = i.useState(""),
        [s, o] = i.useState(!1),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, k] = i.useState(() => B.w.get(K) ?? null ?? !0),
        w = i.useRef(null),
        N = (0, G.z9)("ConjureHomePage"),
        C = i.useMemo(
            () => [
                {
                    id: "flappy",
                    category: "games",
                    shortPrompt: E.intl.string(S.default.gtX7tS),
                    fullPrompt: E.intl.string(S.default["Sfa50+"]),
                    name: E.intl.string(S.default.Tbag5k),
                    image: "/assets/b43659b526f2e936.svg",
                    authorAvatarSeed: "1",
                },
                {
                    id: "raid-calendar",
                    category: "apps",
                    shortPrompt: E.intl.string(S.default.GNGB59),
                    fullPrompt: E.intl.string(S.default.lxwxNm),
                    name: E.intl.string(S.default["rzB/bE"]),
                    image: "/assets/1d701ea289cc99e6.svg",
                    authorAvatarSeed: "2",
                },
                {
                    id: "aram-widget",
                    category: "profile_widget",
                    shortPrompt: E.intl.string(S.default.RzNoHJ),
                    fullPrompt: E.intl.string(S.default.VfUFEt),
                    name: E.intl.string(S.default.RYGHMF),
                    image: "/assets/05c0d07952b2d93f.svg",
                    authorAvatarSeed: "3",
                },
                {
                    id: "trivia",
                    category: "games",
                    shortPrompt: E.intl.string(S.default.TGN39X),
                    fullPrompt: E.intl.string(S.default.gilNLG),
                    name: E.intl.string(S.default.vvwBlz),
                    image: "/assets/5813258afff68797.svg",
                    authorAvatarSeed: "4",
                },
                {
                    id: "spoilers-automod",
                    category: "automod",
                    shortPrompt: E.intl.string(S.default.Gw756q),
                    fullPrompt: E.intl.string(S.default["d/WMHR"]),
                    name: E.intl.string(S.default["v9+fAY"]),
                    image: "/assets/54b5cda688395473.svg",
                    authorAvatarSeed: "5",
                },
                {
                    id: "movie-night",
                    category: "apps",
                    shortPrompt: E.intl.string(S.default.u4UWGH),
                    fullPrompt: E.intl.string(S.default.ofBNNy),
                    name: E.intl.string(S.default.DQQdZL),
                    image: "/assets/fcb9220c49b6460a.svg",
                    authorAvatarSeed: "6",
                },
                {
                    id: "welcome-bot",
                    category: "chat_bot",
                    shortPrompt: E.intl.string(S.default["T3+H3J"]),
                    fullPrompt: E.intl.string(S.default.ryeSuC),
                    name: E.intl.string(S.default["3deXbx"]),
                    image: "/assets/56e489e9c5907add.svg",
                    authorAvatarSeed: "7",
                },
            ],
            [],
        ),
        A = (0, b.o)().get(U.f_) === q,
        I = `${n}:${A}`,
        [T, L] = i.useState(null),
        $ = T?.context === I ? T.target : null,
        D = i.useCallback((e) => L({ context: I, target: e }), [I]),
        z = i.useCallback((e) => e === q || N.some((t) => t.id === e), [N]),
        F = !A && z(n) ? n : q,
        W = null != $ && z($) ? $ : F,
        V = W === q ? "user" : "guild",
        X = W === q ? n : W,
        Z = (function () {
            let [e, t] = i.useState([]),
                n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => () => n.current.forEach(nv), []));
            let l = i.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(nx);
                    ((n.current = [...n.current, ...l]), t(n.current));
                }, []),
                r = i.useCallback(
                    (e) => {
                        if (e.defaultPrevented) return;
                        let t = Array.from(e.clipboardData?.files ?? []);
                        0 !== t.length && (e.preventDefault(), l(t));
                    },
                    [l],
                ),
                a = i.useCallback((e) => {
                    let l = n.current.find((t) => t.draft.localId === e);
                    null != l && (nv(l), (n.current = n.current.filter((e) => e !== l)), t(n.current));
                }, []),
                s = i.useCallback(() => {
                    (n.current.forEach(nv), (n.current = []), t(n.current));
                }, []),
                o = i.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= ef.lN) return e;
                            let t = E.intl.formatToPlainString(S.default.Q0aCVZ, { count: ef.lN });
                            return e.map((e, n) =>
                                n < ef.lN || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(e),
                    [e],
                );
            return {
                attachments: o,
                addFiles: l,
                pasteFiles: r,
                removeAttachment: a,
                clear: s,
                hasErrors: o.some((e) => "error" === e.draft.status),
            };
        })(),
        { attachments: Y, addFiles: J, clear: Q } = Z,
        ee =
            "idea" ===
                (t = (function (e) {
                    let { idea: t, installScope: n, submitting: l } = e;
                    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
                })({ idea: l, installScope: V, submitting: s })) ||
            "submitting" === t ||
            Z.hasErrors,
        et = i.useCallback((e) => J(Array.from(e)), [J]);
    (0, H.p)(w);
    let en = i.useCallback((e) => {
            (r(e), c(null));
        }, []),
        el = i.useCallback(
            (e) => {
                en(e);
                let t = w.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [en],
        ),
        er = i.useRef(!1),
        ea = i.useCallback(async () => {
            let e = l.trim();
            if ("" !== e && !er.current) {
                ((er.current = !0), o(!0), c(null));
                try {
                    await O({
                        guildId: X,
                        installScope: V,
                        modelSettings: d,
                        start: async (t) => {
                            let n = [];
                            if (Y.length > 0)
                                try {
                                    n = await Promise.all(
                                        Y.map((e) => {
                                            let { file: n } = e;
                                            return nj(t, n);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, P.xx)(t).catch(() => void 0), new nw());
                                }
                            ((0, _.sendUserMessage)(t, e, n), Q());
                        },
                    });
                } catch (e) {
                    (c(e instanceof nw ? E.intl.string(S.default["903H7m"]) : (0, R.mG)(e)), (er.current = !1), o(!1));
                }
            }
        }, [l, V, d, X, Y, Q]),
        es = i.useCallback((e) => {
            (B.w.set(K, e), k(e));
        }, []),
        eo = i.useCallback(() => es(!1), [es]),
        eu = E.intl.string(f ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: h()(nk.MY, ny.T),
        children: (0, a.jsxs)("div", {
            className: nk.Zp,
            children: [
                (0, a.jsxs)("main", {
                    className: nk.iW,
                    children: [
                        s
                            ? null
                            : (0, a.jsx)(j.A, {
                                  title: E.intl.string(S.default.gy7byi),
                                  description: E.intl.string(S.default["dkv/WO"]),
                                  icons: nb.ir,
                                  onDrop: et,
                              }),
                        (0, a.jsx)(M, {
                            title: E.intl.string(S.default.uk6jhJ),
                            transparent: !0,
                            actions: (0, a.jsx)(y.A.Icon, {
                                icon: g.Z,
                                color: "var(--icon-strong)",
                                className: nk.FW,
                                tooltip: eu,
                                "aria-label": eu,
                                selected: f,
                                onClick: () => es(!f),
                            }),
                        }),
                        (0, a.jsx)(p.Ip, {
                            className: nk.XG,
                            children: (0, a.jsxs)("div", {
                                className: nk.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nk.Lv,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: nk.ZK,
                                                children: [
                                                    (0, a.jsx)(x.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: nk.DD,
                                                        children: E.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: nk.VA,
                                                        children: E.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: nk.ZK,
                                                children: [
                                                    (0, a.jsx)(na, {
                                                        idea: l,
                                                        inputRef: w,
                                                        onIdeaChange: en,
                                                        onSubmit: ea,
                                                        submitting: s,
                                                        submitDisabled: ee,
                                                        error: u,
                                                        target: W,
                                                        eligibleGuilds: N,
                                                        onTargetChange: D,
                                                        modelSettings: d,
                                                        onModelSettingsChange: m,
                                                        attachments: Z,
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: E.intl.string(S.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(ei, { inspirations: C, onCopyPrompt: el }),
                                    (0, a.jsx)(nh, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                f ? (0, a.jsx)(tg, { guildId: n, modelSettings: d, onClose: eo }) : null,
            ],
        }),
    });
}
var nC = n(478016),
    nA = n(604525),
    nS = n(92446),
    nE = n(534890),
    nI = n(646270),
    nM = n(31300),
    n_ = n(831453),
    nR = n(270593);
let nP = Object.freeze({ x: 0.5, y: 0.5 });
function nT(e) {
    return "" !== e.trim();
}
function nL(e) {
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
function n$(e) {
    let { kind: t, name: n } = nL(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function nD(e) {
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
let nz = "[conjure:selected] ",
    nO = " \u2014 ";
function nF(e) {
    if (!e.startsWith(nz)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(nz.length),
        a = r.indexOf(nO),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let nq = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    nU = new Map(),
    nG = new Set();
function nB(e) {
    return nU.get(e) ?? nq;
}
function nK(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? nU.set(e, t) : nU.delete(e), [...nG]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function nH(e) {
    let t = nB(e);
    t.active || nK(e, { ...t, active: !0 });
}
function nW(e) {
    let t = nB(e);
    t.active && nK(e, { ...t, active: !1 });
}
function nV(e) {
    nU.has(e) && nK(e, nq);
}
function nX(e, t) {
    let n = nB(e);
    n.active && nK(e, { ...n, context: t });
}
function nZ(e, t) {
    return null != t && e.authorId === t;
}
function nY(e) {
    return (
        nG.add(e),
        () => {
            nG.delete(e);
        }
    );
}
function nJ(e) {
    let t = i.useCallback(() => (null == e ? nq : nB(e)), [e]);
    return i.useSyncExternalStore(nY, t, t);
}
(n(134528), n(947204));
let nQ = { past: [], present: [], future: [] };
function n0(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function n1(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function n2(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => n1(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: n1(e.from, t, n), to: n1(e.to, t, n) };
        case "text":
            return { ...e, at: n1(e.at, t, n) };
    }
}
function n3(e) {
    return e.some((e) => "erase" !== e.kind);
}
function n4(e, t) {
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
function n5(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function n6(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function n7(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => n6(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = n6(e.from, t),
                l = n6(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = n6(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function n8(e) {
    return n3(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let n9 = [3, 6, 12],
    le = [10, 20, 40],
    lt = (0, tS.D)(() => ({ byProject: {} })),
    ln = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: nQ,
        sketchDismissedFor: null,
    };
function ll(e) {
    return lt.getState().byProject[e] ?? null;
}
function lr(e, t) {
    let n = ll(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = lt.getState();
    lt.setState({ byProject: { ...r, [e]: l } });
}
function la(e) {
    if (null == ll(e)) return;
    let { [e]: t, ...n } = lt.getState().byProject;
    (lt.setState({ byProject: n }), nV(e));
}
function li(e, t) {
    null != ll(e) &&
        (lr(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? nH(e) : nW(e));
}
function ls(e, t) {
    lr(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return n0(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return n0(
                        e,
                        e.present.map((e) => (e.id === t.id ? n2(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : n0(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : n0(e, []);
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
function lo(e) {
    return lt.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var lu = n(39416);
function lc(e) {
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
            className: lu.i5,
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
var ld = n(245179);
let lm = new Set(),
    lf = null;
function lh(e, t) {
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
                lm.add(t),
                () => {
                    lm.delete(t);
                }
            );
        }, [e]));
}
var lg = n(885386);
function lp() {
    return lg.Q_.useSetting() || !1;
}
var lx = n(573083),
    lv = n(128761),
    lj = n(12177),
    lb = n(967008),
    ly = n(513845),
    lk = n(802905),
    lw = n(951178);
let lN = { width: 320, height: 240 };
var lC = n(855859),
    lA = n(238490),
    lS = n(991690),
    lE = n(696645);
function lI(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function lM(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, lE.X)(e.surface)
                : E.intl.formatToPlainString(S.default["6xVl+N"], {
                      surface: (0, lE.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return E.intl.string(S.default.y5GiL1);
        case "overlay":
            return E.intl.string(S.default["2940LX"]);
        case "bot":
            return E.intl.string(S.default.tjpaGN);
    }
}
var l_ = n(939398),
    lR = n(86147),
    lP = n(729475),
    lT = n(91242),
    lL = n(156548),
    l$ = n(869146),
    lD = n(475815),
    lz = n(165610);
function lO(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, lL.cR)(t?.id ?? null),
        r = (0, lx.Zv)(n),
        i = (0, o.bG)(
            [l$.A, lT.A],
            () => null != t && l$.A.getWindowOpen(D.MLl.ACTIVITY_POPOUT) && lT.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, lz.x1)(t) || i || r) return null;
    let s = (0, lL.fl)(t.id);
    if (null == s || !(0, lD.Ub)(s)) return null;
    let u = E.intl.string(l ? E.t.Z7MyNB : E.t.OIDkcp);
    return (0, a.jsx)(y.A.Icon, {
        tooltip: u,
        icon: l ? lR.z : lP.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, lL.U8)(t.id),
    });
}
var lF = n(704745);
function lq(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = E.intl.string(S.default.I2ucou);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: eu.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(ec.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(ed.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = lI(e);
                        return (0, a.jsx)(
                            ed.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: lM(e),
                                checked: t === lI(n),
                                action: () => {
                                    (l(e), u());
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
            return (0, a.jsx)(tp.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: lF.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: E.intl.string(S.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: lM(n),
                        }),
                        (0, a.jsx)(t7.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var lU = n(324641),
    lG = n(627363),
    lB = n(153207),
    lK = n(803101),
    lH = n(226178),
    lW = n(625180),
    lV = n(672929),
    lX = n(111534),
    lZ = n(754027),
    lY = n(457827),
    lJ = n(722701),
    lQ = n(962998),
    l0 = n(794083),
    l1 = n(715641),
    l2 = n(750943),
    l3 = n(95477),
    l4 = n(103557),
    l5 = n(47167),
    l6 = n(946274),
    l7 = n(535466),
    l8 = n(961553),
    l9 = n(277085),
    re = n(808728),
    rt = n(498642);
let rn = [],
    rl = new Set(),
    rr = new Set(),
    ra = "data-conjure-publish-trigger";
function ri(e) {
    return (
        rr.add(e),
        () => {
            rr.delete(e);
        }
    );
}
function rs(e, t) {
    if (rl.has(e) !== t) for (let n of (t ? rl.add(e) : rl.delete(e), rr)) n();
}
function ro(e) {
    rs(e, !rl.has(e));
}
var ru = n(566553);
let rc = { screen_capture: { icon: nM.k, label: S.default["8/7kE7"] } },
    rd = [
        [lw.q7.BOT, ee.RobotIcon, S.default.UnoAgo],
        [lw.q7.ACTIVITY, l0.b, S.default["I88/iG"]],
        [lw.q7.PROFILE_WIDGET, l1.b, S.default.gXY1x1],
        [lw.q7.AUTOMOD, Q.ShieldIcon, S.default.Q9ruoM],
    ],
    rm = {
        initial: { className: ru.LK, message: S.default.NUZBwo },
        notPublished: { className: ru.i$, message: S.default.Gdz7pg },
        published: { className: ru.kg, message: S.default["6E9W4F"] },
    };
function rf(e) {
    let { project: t, publish: n, menu: l, children: r } = e,
        s = t.id,
        o = i.useRef(null),
        u = i.useSyncExternalStore(ri, () => rl.has(s));
    return (
        i.useEffect(
            () => () => {
                rs(s, !1);
            },
            [s],
        ),
        (0, a.jsx)(eu.Y, {
            targetElementRef: o,
            shouldShow: u,
            onRequestOpen: () => ro(s),
            onRequestClose: (e, t) => {
                let n = e?.target;
                ("system:click_outside" === t &&
                    (0, en.vq)(n, Element) &&
                    n.closest(`[${ra}]`)?.getAttribute(ra) === s) ||
                    rs(s, !1);
            },
            position: "bottom",
            align: "right",
            spacing: 8,
            animation: eu.Y.Animation.FADE,
            renderPopout: () => (0, a.jsx)(rh, { project: t, publish: n, menu: l }),
            children: (e) => (0, a.jsx)("div", { ref: o, className: ru.hZ, ...{ [ra]: s }, children: r(e) }),
        })
    );
}
function rh(e) {
    var t, n, l, r;
    let s,
        u,
        c,
        m,
        f,
        h,
        { project: g, publish: p, menu: x } = e,
        {
            liveName: j,
            liveDescription: b,
            channels: y,
            guild: k,
            memberCount: w,
        } = ((t = g.id),
        (n = p.guildId),
        (s = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(t) ?? null, [t])),
        (u = s?.application_id ?? null),
        (c = (0, o.bG)([tn.A], () => (null == u ? null : (tn.A.getApplication(u) ?? null)), [u])),
        (m = (0, o.bG)([d.A], () => (null == n ? null : (d.A.getGuild(n) ?? null)), [n])),
        (f = (0, o.bG)([rt.A], () => (null == n ? null : (rt.A.getMemberCount(n) ?? null)), [n])),
        (h = (0, o.yK)(
            [re.Ay],
            () =>
                null == n || null == u
                    ? []
                    : re.Ay.getChannels(n)
                          [re.I6].filter((e) => {
                              let { channel: t } = e;
                              return (0, e_.us)(t) === u;
                          })
                          .map((e) => {
                              let { channel: t } = e;
                              return t;
                          }),
            [n, u],
        )),
        {
            project: s,
            liveName: c?.name ?? s?.name ?? "",
            liveDescription: c?.description?.trim() ?? "",
            channels: h,
            guild: m,
            memberCount: f,
        }),
        I = (0, l8.A)(g.id),
        M = ((l = g.id), (0, o.bG)([lJ.A], () => lJ.A.getPublishStatus(l)?.previewDevicePermissions ?? rn)),
        [_, R] = i.useState(g.name),
        [T, L] = i.useState(!1),
        $ = i.useRef(null),
        D =
            null == (r = p.status) || "unpublished" === r.state
                ? "initial"
                : "up_to_date" === r.state
                  ? "published"
                  : "notPublished",
        z = "initial" === D,
        O = z && (0, eL.PV)(g),
        q = (z ? g.preview_supported_surfaces : g.supported_surfaces) ?? [],
        U = z ? I.description : b,
        G = _.trim(),
        B = O ? (0, l9.p)(G) : null,
        K = p.status?.previewAppChannels ?? [],
        H = 0 === K.length && q.includes(lw.q7.APP_CHANNEL) ? [E.intl.string(S.default.xI4N6Q)] : K,
        V =
            null == k
                ? E.intl.string(S.default.RUhWLH)
                : null != w
                  ? E.intl.formatToPlainString(S.default.ZpZxK9, { count: w })
                  : null,
        X = p.status?.publishedAt == null ? null : (0, lv.lG)(p.status.publishedAt).relative,
        Z = [
            ...(z
                ? H.map((e) => (0, a.jsx)(rp, { icon: Y.k, label: e }, e))
                : y.map((e) => (0, a.jsx)(rx, { channel: e }, e.id))),
            ...rd
                .filter((e) => {
                    let [t] = e;
                    return q.includes(t);
                })
                .map((e) => {
                    let [t, n, l] = e;
                    return (0, a.jsx)(rp, { icon: n, label: E.intl.string(l) }, t);
                }),
        ];
    async function J() {
        if (!T && null == B) {
            L(!0);
            try {
                var e;
                (O && (G !== g.name || I.changed) && (await (0, P.CW)(g.id, { ...I.changes, name: G })),
                    p.run("header"),
                    (e = g.id),
                    rs(e, !1));
            } catch {
                (0, es.P0)({ text: E.intl.string(S.default.Fi7boI), variant: "critical" });
            } finally {
                L(!1);
            }
        }
    }
    return (0, a.jsxs)("div", {
        className: ru.nd,
        role: "dialog",
        "aria-label": z ? _ : j,
        children: [
            (0, a.jsxs)("div", {
                className: ru.M0,
                children: [
                    (0, a.jsxs)("div", {
                        className: ru.wx,
                        children: [
                            O
                                ? null != I.iconURL
                                    ? (0, a.jsxs)(C.D, {
                                          className: ru.gb,
                                          "aria-label": E.intl.string(E.t["6yrpFR"]),
                                          onClick: () => $.current?.activateUploadDialogue(),
                                          children: [
                                              (0, a.jsx)("img", { className: ru.Dp, src: I.iconURL, alt: "" }),
                                              (0, a.jsx)("span", {
                                                  className: ru.E7,
                                                  "aria-hidden": !0,
                                                  children: (0, a.jsx)(l2.X, { size: "xs", color: "currentColor" }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t["MsUY/S"]),
                                          children: (0, a.jsx)(eK.K, {
                                              icon: l2.X,
                                              size: "md",
                                              variant: "secondary",
                                              "aria-label": E.intl.string(E.t["MsUY/S"]),
                                              onClick: () => $.current?.activateUploadDialogue(),
                                          }),
                                      })
                                : (0, a.jsx)(A.A, { project: g, size: "card" }),
                            O
                                ? (0, a.jsx)(l6.Ay, {
                                      ref: $,
                                      className: ru.Fg,
                                      multiple: !1,
                                      filters: [{ name: E.intl.string(E.t["Sp2NF+"]), extensions: l7.En }],
                                      maxFileSizeBytes: l7.Q0,
                                      onChange: I.setIcon,
                                      onFileSizeError: () =>
                                          (0, es.P0)({ text: E.intl.string(S.default.ZTAAMc), variant: "critical" }),
                                      "aria-hidden": !0,
                                  })
                                : null,
                            x,
                        ],
                    }),
                    O
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: ru.ZZ,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              "aria-hidden": !0,
                                              children: E.intl.string(S.default.knevPu),
                                          }),
                                          (0, a.jsx)(l3.k, {
                                              label: E.intl.string(S.default.knevPu),
                                              hideLabel: !0,
                                              value: _,
                                              onChange: R,
                                              error: B,
                                              maxLength: lw.eq,
                                              fullWidth: !0,
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: ru.ZZ,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              "aria-hidden": !0,
                                              children: E.intl.string(S.default.ynaGa1),
                                          }),
                                          (0, a.jsx)(l4.f, {
                                              label: E.intl.string(S.default.ynaGa1),
                                              hideLabel: !0,
                                              placeholder: E.intl.string(S.default["I+3UTL"]),
                                              value: I.description,
                                              onChange: I.setDescription,
                                              maxLength: lw.HR,
                                              rows: 3,
                                              maxRows: 6,
                                              autosize: !0,
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: z ? g.name : j,
                                  }),
                                  "" !== U
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 2,
                                            children: U,
                                        })
                                      : null,
                              ],
                          }),
                    (0, a.jsx)(rg, { title: E.intl.string(S.default.BqNMms), rows: Z }),
                    z
                        ? (0, a.jsx)(rg, {
                              title: E.intl.string(S.default.LnqeFd),
                              rows: M.map((e) =>
                                  (0, a.jsx)(rp, { icon: rc[e].icon, label: E.intl.string(rc[e].label) }, e),
                              ),
                          })
                        : null,
                ],
            }),
            "user" === g.install_scope || null != k
                ? (0, a.jsxs)("div", {
                      className: ru.KO,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: E.intl.string(S.default.yCgX8i),
                          }),
                          (0, a.jsxs)("div", {
                              className: ru.Kk,
                              children: [
                                  null != k
                                      ? (0, a.jsx)(F.Ay, {
                                            guild: k,
                                            size: F.Ay.Sizes.MEDIUM,
                                            active: !0,
                                            className: ru.$f,
                                            "aria-hidden": !0,
                                        })
                                      : (0, a.jsx)("span", {
                                            className: ru.qU,
                                            children: (0, a.jsx)(eA.UserIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                        }),
                                  (0, a.jsxs)("div", {
                                      className: ru.qg,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: k?.name ?? E.intl.string(S.default["37xgkF"]),
                                          }),
                                          null != V
                                              ? (0, a.jsx)(v.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-subtle",
                                                    children: V,
                                                })
                                              : null,
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("div", {
                className: ru.qr,
                children: [
                    (0, a.jsx)("span", { className: rm[D].className, "aria-hidden": !0 }),
                    (0, a.jsxs)("div", {
                        className: ru.qg,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: E.intl.string(rm[D].message),
                            }),
                            null != X
                                ? (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      children: E.intl.formatToPlainString(S.default["/6YRCf"], { time: X }),
                                  })
                                : null,
                        ],
                    }),
                    (0, a.jsx)(W.$, {
                        variant: "published" === D ? "secondary" : "primary",
                        size: "sm",
                        text: z ? p.label : E.intl.string(S.default.KHg4Dk),
                        disabled: p.disabled || null != B,
                        loading: p.publishing || T,
                        onClick: J,
                    }),
                ],
            }),
        ],
    });
}
function rg(e) {
    let { title: t, rows: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: ru.mK,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: t }),
                  (0, a.jsx)("div", { children: n }),
              ],
          });
}
function rp(e) {
    let { icon: t, label: n } = e;
    return (0, a.jsxs)("div", {
        className: ru.CT,
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor", className: ru.Pw, "aria-hidden": !0 }),
            (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: n }),
        ],
    });
}
function rx(e) {
    let { channel: t } = e;
    return (0, a.jsx)(rp, { icon: Y.k, label: (0, l5.Ay)(t) ?? "" });
}
var rv = n(373540),
    rj = n(144228);
function rb(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, o] = i.useState(t.selected_destination_id),
        u = E.intl.string(S.default.lJrOGW);
    return (0, a.jsx)(e5.a, {
        transitionState: l,
        onClose: r,
        title: u,
        size: "sm",
        actions: [
            { text: E.intl.string(S.default.y83r6D), variant: "secondary", onClick: r },
            {
                text: E.intl.string(S.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (n(s), r());
                },
            },
        ],
        children: (0, a.jsx)(rj.z, {
            label: u,
            options: t.destinations.map((e) => {
                let { id: t, label: n } = e;
                return { name: n, value: t };
            }),
            value: s,
            onChange: o,
        }),
    });
}
let ry = {
    showPublishBlocked: rv.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, e7.openModal)(
                (t) =>
                    (0, a.jsx)(rb, {
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
    showError: (e) => (0, es.P0)({ text: e, variant: "critical" }),
};
var rk = n(58736),
    rw = n(333007),
    rN = n(775121),
    rC = n(826745),
    rA = n(470779);
function rS(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: o,
            onSubmit: u,
            onDismiss: c,
            canSubmit: d,
            closing: m,
            onUploadFile: f,
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
        } = tW({ projectId: t, surface: "design", onUploadFile: f }),
        A = i.useRef(null),
        I = (d || j.length > 0) && w && !m,
        M = i.useCallback(() => {
            if (!I) return;
            let e = C();
            u(e.length > 0 ? e : void 0);
        }, [I, C, u]),
        [_, R] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => R(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let P = i.useRef(null),
        [T, L] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = P.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => L({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let $ = T?.height ?? 44,
        D = l.left + 8,
        z = l.top + 8,
        O = Math.max(n.x, D),
        F = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, z), Math.max(z, l.top + l.height - $ - 8));
    return (0, a.jsxs)("div", {
        ref: P,
        className: h()(rA.M0, { [rA.ho]: _ && !m, [rA.ET]: m }),
        style: { left: O, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: rA.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(N.m, {
                              position: "bottom",
                              text: E.intl.string(S.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: rA.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(em.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: rA.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(rC.y, {
                autoFocus: !0,
                rows: 1,
                className: rA.hF,
                value: s,
                placeholder: x ?? ("" === r ? E.intl.string(S.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? E.intl.string(S.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m || !p ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), M());
                },
            }),
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: rA.ZO,
                      children: j.map((e) => (0, a.jsx)(tV, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function rE(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function rI(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rM(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? rE(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = rE(e());
                l((e) => (rI(e, t) ? e : t));
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
var r_ = n(876798),
    rR = n(48507),
    rP = n(193885),
    rT = n(744898),
    rL = n(803656),
    r$ = n(241326),
    rD = n(972213);
function rz(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rO(e, t, n) {
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
let rF = rO("red", rz(w.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    rq = [
        rF,
        rO("yellow", rz(w.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        rO("green", rz(w.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        rO("blue", rz(w.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        rO("white", rz(w.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
    ];
function rU(e) {
    return rq.find((t) => t.id === e) ?? rF;
}
function rG(e) {
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
function rB(e) {
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
function rK(e) {
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
function rH(e) {
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
let rW = n9.map((e) => rH(Math.min(16, e + 3))),
    rV = le.map((e) => rH(Math.min(16, e / 2.5))),
    rX = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
    rZ = {
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
            label: () => E.intl.string(S.default.oIZQbm),
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
            label: () => E.intl.string(S.default.ARNVr7),
        },
    };
function rY(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: lu.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(r_.k, {
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
function rJ(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(eK.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function rQ(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: lu.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: lu.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function r0(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rU(n.colorId),
        h = rZ[u],
        g = E.intl.string(S.default.hUm825),
        p = E.intl.string(S.default.n5IA3a),
        x = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: lu.t$,
        children: [
            (0, a.jsx)("div", {
                className: lu.NT,
                children: (0, a.jsx)(rY, {
                    icon: rB,
                    label: E.intl.string(S.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => li(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: lu.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(S.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(rY, {
                        icon: rG,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => li(t, "move"),
                    }),
                    (0, a.jsx)(rY, {
                        icon: rR.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => li(t, "text"),
                    }),
                    (0, a.jsx)(rQ, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rY, {
                                icon: rP.V,
                                label: g,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (li(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rW.map((n, l) =>
                                (0, a.jsx)(
                                    rY,
                                    {
                                        icon: n,
                                        label: E.intl.string(rX[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (lr(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), nW(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rQ, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(rY, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (li(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(rZ).map((n) =>
                                (0, a.jsx)(
                                    rY,
                                    {
                                        icon: rZ[n].icon,
                                        label: rZ[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (li(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rQ, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rY, {
                                icon: rK,
                                label: p,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (li(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rV.map((n, l) =>
                                (0, a.jsx)(
                                    rY,
                                    {
                                        icon: n,
                                        label: E.intl.string(rX[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (lr(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), nW(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rQ, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(rJ, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rq.map((n) =>
                                (0, a.jsx)(
                                    rY,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                lr(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: lu.Gz, role: "separator" }),
                    (0, a.jsx)(rJ, {
                        icon: rT.e,
                        label: E.intl.string((0, ep.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(rJ, {
                        icon: rL.U,
                        label: E.intl.string((0, ep.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(rJ, {
                        icon: r$.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: lu.Gz, role: "separator" }),
                    (0, a.jsx)(rJ, { icon: rD.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let r1 = w.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function r2(e, t, n) {
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
                    (e.strokeStyle = r1),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function r3(e) {
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
async function r4(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = r3(e),
            r = r3(e);
        if (null == l || null == r) return null;
        return (r2(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let r5 = new Map(),
    r6 = new Map(),
    r7 = (0, tS.D)(() => ({ byMessageKey: {} }));
function r8(e, t) {
    let { [e]: n, ...l } = r7.getState().byMessageKey;
    r7.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function r9(e, t) {
    null == t ? r5.delete(e) : r5.set(e, t);
}
function ae(e) {
    return r5.get(e)?.() ?? Promise.resolve(null);
}
let at = { dx: 0, dy: 0 },
    an = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    al = 1;
function ar(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = lo(s),
        { active: u } = nJ(s),
        c = (0, e7.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => la(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && nH(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(aa, { projectId: s, state: o, resolveIframe: r });
}
function aa(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = rM(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [g, p] = i.useState(at),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = rU(n.colorId),
        M = "pick" !== C,
        _ = "marker" === n.tool ? n9[n.markerSize] : "eraser" === n.tool ? le[n.eraserSize] : null,
        R = "move" === C ? (A.present.find((e) => e.id === f) ?? null) : null,
        P = null != r;
    (i.useLayoutEffect(() => {
        m(v.current?.offsetWidth ?? 0);
    }, [P]),
        i.useLayoutEffect(() => {
            y.current = s;
        }, [s]));
    let T = i.useCallback(async () => {
        let e = l();
        if (null == e) return null;
        let t = await (0, lU.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, rw.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, lU.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (r9(t, T), () => r9(t, null)), [t, T]);
    let L = i.useCallback(
        (e) => {
            ((w.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === N.current &&
                    (N.current = requestAnimationFrame(() => {
                        N.current = 0;
                        let e = k.current,
                            t = w.current;
                        null != e &&
                            (e.toggleAttribute("data-visible", null != t),
                            null != t && (e.style.transform = `translate(${t.x}px, ${t.y}px)`));
                    })));
        },
        [r],
    );
    i.useEffect(() => () => cancelAnimationFrame(N.current), []);
    let $ = i.useCallback(() => {
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
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? n2(e, g.dx, g.dy) : e)),
            o = j.current;
        r2(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, A.present, g]);
    i.useLayoutEffect($, [$]);
    let D = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        z = i.useCallback(() => {
            let e = y.current;
            if (null == e || null == r) return;
            y.current = null;
            let n = {
                id: `mark-${al++}`,
                kind: "text",
                color: I.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (n4(n, r) && ls(t, { type: "commit", shape: n }), o(null));
        }, [t, I, r]),
        O = i.useCallback(() => {
            ((y.current = null), o(null));
        }, []),
        F = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != y.current) return void z();
                let t = D(e);
                switch (C) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == R ? null : n7(R, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? R
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = n6(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => n6(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (n5(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = n6(e.from, n),
                                                                  r = n6(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => n5(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = n6(e.from, n),
                                                                  r = n6(e.to, n),
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
                                                              let t = n7(e, n);
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
                        o({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!n3(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${al++}`,
                                kind: "erase",
                                width: le[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${al++}`,
                                kind: "marker",
                                color: I.value,
                                width: n9[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${al++}`,
                                kind: C,
                                color: I.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                $();
            },
            [r, C, I, R, A.present, n.markerSize, n.eraserSize, D, z, $],
        ),
        q = i.useCallback(
            (e) => {
                L(e);
                let t = D(e),
                    n = b.current;
                if (null != n) return void p({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = j.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (j.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (j.current = { ...l, to: t }),
                    $());
            },
            [D, L, $],
        ),
        U = i.useCallback(() => {
            x.current?.removeAttribute("data-dragging");
            let e = b.current;
            if (null != e) {
                ((b.current = null), p(at), ls(t, { type: "move", id: e.id, dx: g.dx, dy: g.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && n4(n, r) ? ls(t, { type: "commit", shape: n }) : $());
        }, [t, r, g, $]),
        G = i.useCallback(() => la(t), [t]),
        B = i.useCallback(() => ls(t, { type: "undo" }), [t]),
        K = i.useCallback(() => ls(t, { type: "redo" }), [t]),
        H = i.useCallback(() => ls(t, { type: "clear" }), [t]),
        W = i.useRef({ tool: C, selected: R, exit: G, undo: B, redo: K });
    if (
        (i.useLayoutEffect(() => {
            W.current = { tool: C, selected: R, exit: G, undo: B, redo: K };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, en.Cw)((0, en.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != y.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = W.current,
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
                    (e.preventDefault(), ls(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = an[s];
                null != o && (e.preventDefault(), li(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (M) return (rN.A.disable(), () => rN.A.enable());
        }, [M]),
        null == r)
    )
        return null;
    let V = Math.max(8, r.left - d - 8),
        X = null == R ? null : n7(null == b.current ? R : n2(R, g.dx, g.dy), r);
    return (0, rw.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: lu.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: lu.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: lu.Ji,
                            "data-tool": C,
                            "data-interactive": M && !u ? "" : void 0,
                            "aria-label": E.intl.string(S.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: F,
                            onPointerEnter: L,
                            onPointerLeave: () => L(null),
                            onPointerMove: q,
                            onPointerUp: U,
                            onPointerCancel: U,
                        }),
                        null == _ || u
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: k,
                                  className: lu.V$,
                                  "data-tool": C,
                                  "data-color": I.id,
                                  style: { width: _, height: _ },
                                  "aria-hidden": !0,
                              }),
                        null == X
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: lu.r1,
                                  style: { left: X.x, top: X.y, width: X.width, height: X.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: lu.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: lu.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: lu.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: lu.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(rS, {
                          projectId: t,
                          anchor: "point",
                          at: { x: r.left + s.at.x * r.width, y: r.top + s.at.y * r.height },
                          bounds: r,
                          kind: "",
                          placeholder: E.intl.string(S.default["8gX1lw"]),
                          label: E.intl.string(S.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: s.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: z,
                          onUploadFile: (e) => (0, eh.vX)(t, e),
                          onDismiss: O,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: lu.ej,
                    style: { left: V, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(r0, { projectId: t, state: n, onExit: G, onUndo: B, onRedo: K, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var ai = n(308081),
    as = n(689175),
    ao = n(683071),
    au = n(218394),
    ac = n(115982),
    ad = n(886540);
function am(e) {
    return !(0, ad.BL)(e) && !0 !== e.stopRequested;
}
var af = n(104317),
    ah = n(643278),
    ag = n(566424),
    ap = n(683063),
    ax = n(140735),
    av = n(138212);
function aj(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: h()(av.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: h()(av.wx, null != n && av.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var ab = n(148590);
function ay(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function ak(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: o,
            beforeBody: u,
            children: c,
            ...d
        } = e,
        m = i.useId(),
        [f, g] = i.useState(!l),
        [p, x] = i.useState(l);
    p !== l && (x(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        j = f ? t7.a : tZ._,
        b = null != n || l;
    return (0, a.jsxs)(aj, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: ab.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(C.D, {
                                className: ab.L$,
                                onClick: v,
                                "aria-expanded": f,
                                "aria-controls": m,
                                "aria-label": f ? s : r,
                                children: (0, a.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: f ? void 0 : ab.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: h()(ab.rf, o), hidden: !f, children: c })],
    });
}
var aw = n(883646);
let aN = [];
function aC(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: h()(aw.xL, {
            [aw.Vb]: "in_progress" === t,
            [aw.cT]: "completed" === t,
            [aw.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return E.intl.string(S.default.KvBdun);
                case "in_progress":
                    return E.intl.string(S.default["m5G9+S"]);
                case "unfinished":
                    return E.intl.string(S.default.lRpwhD);
                default:
                    return E.intl.string(S.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(tN.y, {
                type: tN.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: aw.Qd,
                itemClassName: aw.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: aw.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: aw.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function aA(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : aN), [n, t]),
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
        className: aw.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    ap.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: aw.MA,
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
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: aw.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function aS(e) {
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
        u =
            ((t = (r ?? aN).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? aN),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: aw.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: h()(aw.AS, { [aw.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(aC, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: aw.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: aw.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(aA, { agents: u.get(e.id) ?? aN, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: aw.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(aC, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: aw.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: aw.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function aE(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(ak, {
        title: E.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(ay, { children: c }),
        superseded: s,
        showLabel: E.intl.string(S.default.RKyN9q),
        hideLabel: E.intl.string(S.default.xydHoj),
        className: aw.Nr,
        bodyClassName: aw.rf,
        beforeBody: r && !s ? (0, a.jsx)(ax.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(aS, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var aI = n(308665),
    aM = n(59678),
    a_ = n(903847);
function aR(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [f, g] = i.useState(c),
        [p, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(c);
    (b !== c && (y(c), null != n ? (m(n), g(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (c || !f) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [c, f]),
        i.useEffect(() => {
            if (!f || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [f, c]));
    let [k, w] = i.useState(!1),
        [A, I] = i.useState(!1),
        [M, _] = i.useState(v);
    (M !== v && (_(v), v ? w(!0) : I(!1)),
        i.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        i.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => I(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let R = null != l && l.length > 0,
        P = i.useCallback(() => j((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: a_.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(a_.vK, { [a_.ho]: p && c, [a_.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(a_.Rk, aM.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(ag.A, {
                                        glyph: (0, a.jsx)(aI.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(C.D, {
                                    className: a_.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: h()(a_.Rk, aM.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(ag.A, {
                                            glyph: (0, a.jsx)(aI.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          R
                              ? (0, a.jsx)(N.m, {
                                    text: E.intl.string(S.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(C.D, {
                                        className: a_.BO,
                                        onClick: P,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(ah.ClipboardListIcon, {
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
                  k && R
                      ? (0, a.jsx)("div", {
                            className: h()(a_.vB, { [a_.pg]: v && A, [a_.ui]: !v }),
                            children: (0, a.jsx)(aE, {
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
var aP = n(195880);
function aT(e) {
    let t = (0, G.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var aL = n(736553),
    a$ = n(642785);
async function aD(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, a$.dv)(e),
        i = new aL.u();
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
var az = n(890497),
    aO = n(29073),
    aF = n(590077);
function aq(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = aT(e),
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
                N = i.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                C = d.trim(),
                A = n && !f && (w.length > 0 ? "" !== C : u.length > 0),
                I = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : tq(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          E.intl.formatToPlainString(S.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = E.intl.formatToPlainString(S.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                M = i.useCallback(() => {
                    let t, n;
                    if (!A) return;
                    if (0 === w.length) return void I(u);
                    (h(!0), p(!1));
                    let l =
                        ((t = eL.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, aP.m)() }), x.current.set(e.projectId, t)),
                                aD(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: C }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [A, I, u, e, w, C]),
                _ = i.useCallback(() => {
                    ((v.current = !0), u.length > 0 && !f && I(u), l());
                }, [I, u, l, f]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: N,
                prompt: d,
                setPrompt: m,
                sending: f,
                failed: g,
                canSubmit: A,
                submit: M,
                dismiss: _,
            };
        })(t, n, l, r, s),
        u = i.useMemo(
            () =>
                o.projects.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [o.projects],
        ),
        c = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: h()(aO.nd, aO.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: aO.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: aO.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(eK.K, {
                        icon: eo.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(S.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: aF.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(az.Z, {
                              label: E.intl.string(S.default["29gr8j"]),
                              placeholder: E.intl.string(S.default.twlOb6),
                              options: u,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(l4.f, {
                        label: E.intl.string(S.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? E.intl.string(S.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: aO.qr,
                children: (0, a.jsx)("div", {
                    className: aO.zt,
                    children: (0, a.jsx)(W.$, {
                        variant: "primary",
                        size: "sm",
                        text: E.intl.string(S.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var aU = n(658675),
    aG = n(22231),
    aB = n(123292),
    aK = n(691885),
    aH = n(360047);
function aW(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: o } = e,
        u = i.useMemo(() => aH.Hi.map((e) => ({ id: e, value: e, label: (0, aH.hU)(e) })), []);
    return (0, a.jsx)(aK.l, {
        label: t,
        hideLabel: n,
        autoFocus: l,
        options: u,
        value: r,
        selectionMode: "single",
        fullWidth: !0,
        disabled: s,
        onSelectionChange: o,
    });
}
var aV = n(734057),
    aX = n(287809);
function aZ(e) {
    return 0 === e.options.length && null == e.input;
}
let aY = {
        [D.rbe.GUILD_TEXT]: "text",
        [D.rbe.GUILD_VOICE]: "voice",
        [D.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [D.rbe.GUILD_STAGE_VOICE]: "stage",
        [D.rbe.GUILD_FORUM]: "forum",
        [D.rbe.GUILD_MEDIA]: "media",
    },
    aJ = { channel: "#", role: "@", user: "@", project: "" },
    aQ = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
    };
function a0(e, t) {
    return E.intl.string(aQ[e][+!!t]);
}
var a1 = n(155078);
function a2(e) {
    return e.options.some((e) => null != e.image);
}
let a3 = [];
function a4(e, t) {
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
var a5 = n(300344),
    a6 = n(614733),
    a7 = n(904363),
    a8 = n(950902),
    a9 = n(384017);
function ie(e) {
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
        var t, r;
        return (
            (t = n.input ?? "channel"),
            (r = (e) => u.find((t) => t.value === e)?.label),
            e.slice(0, 10).map((e) => ({
                id: e,
                name: r(e) ?? l.find((t) => t.id === e)?.name ?? e,
                ...(function (e, t) {
                    if ("channel" === e) {
                        var n;
                        let l = null == (n = aV.A.getChannel(t)?.type) ? void 0 : aY[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = aX.default.getUser(t)?.username;
                        return { kind: e, ...(null == n ? {} : { username: n }) };
                    }
                    return { kind: e };
                })(t, e),
            }))
        );
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
        className: a9.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(az.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(az.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function it(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, a5.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(ie, { ...l, guildId: t, options: r, placeholder: a0("channel", !0 === l.question.multi_select) });
}
function il(e) {
    let { guildId: t, ...n } = e,
        l = (0, a7.A)(t);
    return (0, a.jsx)(ie, { ...n, guildId: t, options: l, placeholder: a0("role", !0 === n.question.multi_select) });
}
function ir(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, a6.A)(t);
    return (0, a.jsx)(ie, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: a0("user", !0 === n.question.multi_select),
    });
}
function ia(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = aT(t),
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
    return 0 === s.length ? n : (0, a.jsx)(ie, { ...l, options: s, placeholder: a0("project", !1) });
}
function ii(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, a8.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(ia, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(it, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(il, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(ir, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var is = n(87221),
    io = n(26430),
    iu = n(256905),
    ic = n(490707),
    id = n(907702);
function im(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, ic._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(id.Gt, id.b6),
              children: [
                  (0, a.jsx)(is.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(id.Gt, { [id.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: id.Sl,
                            onLoad: (e) => {
                                d(s);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && r({ width: t, height: n });
                            },
                            onError: u,
                            draggable: !1,
                        })
                      : null,
          });
}
function ih(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: i,
            selected: s,
            disabled: o,
            reachable: u,
            tabbable: c,
            onPick: d,
            onView: m,
            onArrow: f,
            onMeasured: g,
            onRemove: p,
        } = e,
        x = E.intl.formatToPlainString(S.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: h()(id.Vs, { [id.Q9]: s, [id.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: id.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => d(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), f(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": E.intl.formatToPlainString(S.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: u && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: id.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(im, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: id.Gt }),
                            (0, a.jsx)("span", {
                                className: id.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(aU.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(rj.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: id.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, a1.E)(t) : "")
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
                      className: id.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(eK.K, {
                              icon: r$.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": E.intl.string(S.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: id.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(eK.K, {
                                icon: io._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": x,
                                tabIndex: u && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function ig(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: m } = l,
        f = m.length > 4 ? "gallery" : "row",
        g = i.useRef(null),
        p = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, eh.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, iu.R)({
                                items: e.map((e, n) => {
                                    let l,
                                        r = p.current.get(t[n].id);
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
            [m, n],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (m.findIndex((t) => t.id === e.id) + t + m.length) % m.length,
                    l = m[n];
                (v(l.id), g.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || s || u(l));
            },
            [s, d, u, m],
        ),
        k =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: E.intl.string(S.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: id.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: g,
                className: h()(id.fF, "gallery" === f ? id.nV : id.nM, { [id.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            ih,
                            {
                                projectId: n,
                                option: e,
                                multi: d,
                                selected: r.includes(e.id),
                                disabled: s,
                                reachable: o,
                                tabbable: d || e.id === j,
                                onPick: (e) => {
                                    (v(e.id), u(e));
                                },
                                onView: b,
                                onArrow: y,
                                onMeasured: (t) => p.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, a.jsx)(
                              ih,
                              {
                                  projectId: n,
                                  option: k,
                                  multi: d,
                                  selected: c.selected,
                                  disabled: s,
                                  reachable: o,
                                  tabbable: !0,
                                  onPick: c.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: c.onRemove,
                              },
                              k.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(ip, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function ip(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(""),
        f = r ? 0 : -1,
        h = n.busy;
    function g() {
        "" !== d.trim() &&
            null == h &&
            n.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: id.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: id.QJ,
                children: [
                    (0, a.jsx)(W.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: l2.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(W.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: eU.LinkIcon,
                              text: E.intl.string(S.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: id.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            var l, r;
                            let a = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""),
                                null != a &&
                                    n.onUpload(
                                        ((l = a.name),
                                        (r = a.type),
                                        (0, ef.Oq)(a.size, r)
                                            ? (0, eh.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: tz(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: id.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: id.Hs,
                              children: (0, a.jsx)(l3.k, {
                                  label: E.intl.string(S.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: E.intl.string(S.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), g())
                                          : "Escape" === e.key && (e.stopPropagation(), c(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == h && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: id.gd,
                              children: [
                                  (0, a.jsx)(W.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(S.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(aB.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: E.intl.string(S.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(v.E, {
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
function ix(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(a9.uK, { [a9.ue]: l, [a9.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": E.intl.formatToPlainString(c ? S.default["2p6UFz"] : S.default.AQbxhf, { answer: t.label }),
        "aria-describedby": d ? u : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: a9.dy, children: (0, a.jsx)(aU.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: a9.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: a9.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: a9.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: a9.ed,
                            children: t.label,
                        }),
                    }),
                    d
                        ? (0, a.jsx)(v.E, {
                              tag: "span",
                              id: u,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            c
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: a9.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function iv(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return a2(n)
        ? (0, a.jsx)(ig, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      ix,
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
let ij = [],
    ib = [];
function iy(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: i,
            disabled: s,
            ownImage: o,
            ownSelected: u,
        } = e,
        c = "" === l.trim() ? null : l,
        d = !0 === n.multi_select;
    return (0, a.jsxs)("div", {
        className: h()(a9.Ge, a9.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: a9.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(iv, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: a4(o, u),
            }),
            a2(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: a9.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: a9.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(aG.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(a9.Pu, a9.es), children: c }),
                      ],
                  }),
        ],
    });
}
function ik(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, f] = i.useState({}),
        [g, p] = i.useState({}),
        [x, j] = i.useState({}),
        [b, y] = i.useState({}),
        [k, w] = i.useState(!1),
        [A, I] = i.useState(0),
        [M, _] = i.useState(null),
        [R, P] = i.useState(null),
        [T, L] = i.useState(null),
        [$, D] = i.useState(!1),
        z = i.useRef(null),
        [O, F] = i.useState(null),
        q = i.useRef(null),
        U = i.useRef(0),
        G = null == r,
        B = l.questions.length,
        K = Math.min(A, B - 1),
        H = l.questions[K],
        [V, X] = i.useState({ id: H.id, expanded: !1 }),
        Z = V.id === H.id && V.expanded,
        [Y, J] = i.useState(null),
        Q = c[H.id] ?? "",
        ee = !0 === H.multi_select,
        et = a2(H),
        el = ee ? (m[H.id] ?? ij) : ((t = o[H.id]), t?.kind === "option" ? [t.optionId] : a3),
        er = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = E.intl.string(S.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
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
                        if (o) return a4(h, m(i));
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
                                    null != l && (0, eh.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, eh.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
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
                                                error: { source: "upload", text: E.intl.string(S.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, eh.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : E.intl.string(S.default.l79PMc),
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
        })(n, o, u),
        ea = er.imageFor(H.id),
        ei = er.selectedFor(H),
        { text: es, phase: eu } = (0, tY.Q)(H.question),
        ec = es === H.question,
        ed = ec && Y?.id === H.id && Y.truncated;
    i.useLayoutEffect(() => {
        if (null == O || Z || !ec) return;
        function e() {
            if (null == O) return;
            let e = O.scrollHeight > O.clientHeight + 1;
            J((t) => (t?.id === H.id && t.truncated === e ? t : { id: H.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(O), () => t.disconnect());
    }, [ec, O, H.id, Z]);
    let em = E.intl.string(Z ? E.t.iTcuma : E.t.dcl9MQ),
        ef = i.useCallback(
            (e) => {
                var t;
                if (null == r) return;
                let a = l.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                if ("" !== a) {
                    let i;
                    ((t = () => {
                        let t;
                        return r(
                            a,
                            (t = l.questions.flatMap((t) => {
                                let n = e[t.id];
                                if (null == n || "" === n.text.trim()) return [];
                                let l = "option" === n.kind ? [n.optionId] : "multi" === n.kind ? n.optionIds : [],
                                    r =
                                        "custom" === n.kind
                                            ? n.text.trim()
                                            : "multi" === n.kind || "entities" === n.kind
                                              ? n.custom
                                              : void 0,
                                    a = "entities" === n.kind ? n.entities : [],
                                    i = "entities" === n.kind && a.length > 0 ? n.guildId : void 0,
                                    s = "image" === n.kind || "multi" === n.kind ? n.attachment : void 0;
                                return [
                                    {
                                        question_id: t.id,
                                        option_ids: l,
                                        ...(null != r && "" !== r ? { custom: r } : {}),
                                        ...(null != s ? { attachment_id: s.id } : {}),
                                        ...(a.length > 0 ? { entities: a } : {}),
                                        ...(null != i ? { guild_id: i } : {}),
                                    },
                                ];
                            })).length > 0
                                ? { clarification_id: l.id, answers: t }
                                : null,
                            l.questions.flatMap((t) => {
                                let n = e[t.id];
                                return null == n || "" === n.text.trim()
                                    ? []
                                    : "image" === n.kind || ("multi" === n.kind && null != n.attachment)
                                      ? [n.attachment]
                                      : [];
                            }),
                        );
                    }),
                        0 ===
                        (i = l.questions.flatMap((t) => {
                            let n = e[t.id];
                            return !0 === t.link && n?.kind === "entities"
                                ? n.entities.map((e) => ({ target: e.id, build: b[t.id] }))
                                : [];
                        })).length
                            ? t()
                            : Promise.allSettled(
                                  i.map((e) => {
                                      let { target: t, build: l } = e;
                                      return (0, aH.Ol)(t, n, l);
                                  }),
                              ).then(t));
                }
            },
            [l, b, r, n],
        ),
        eg = i.useCallback(
            (e, t) => {
                U.current += 1;
                let n = U.current;
                (_({ direction: t, moves: n }),
                    P({ question: H, draft: Q, selected: el, ownImage: ea, ownSelected: ei, direction: t, moves: n }),
                    D(!0),
                    I(e));
            },
            [Q, ea, ei, H, el],
        ),
        ep = i.useCallback(() => {
            let e = z.current,
                t = q.current;
            null != e && null != t && L({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = z.current,
            t = q.current;
        if (null == e || null == t) return;
        ep();
        let n = new ResizeObserver(ep);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ep]);
    let ex = M?.moves;
    i.useEffect(() => {
        if (null == ex) return;
        let e = setTimeout(() => P(null), 400),
            t = setTimeout(() => D(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ex]);
    let ev = i.useCallback(
            (e) => {
                if (G) return;
                let t = { ...o, [H.id]: e };
                u(t);
                let n =
                    K < l.questions.length - 1
                        ? K + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, K);
                null == n ? ef(t) : eg(n, n < K ? "back" : "forward");
            },
            [o, l, G, K, H.id, ef, eg],
        ),
        ej = i.useCallback(() => {
            G || 0 === K || eg(K - 1, "back");
        }, [G, K, eg]),
        eb = K > 0 && !G,
        ey = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [H.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                et ? G || u((e) => ({ ...e, [H.id]: t })) : ev(t);
            },
            [G, et, H.id, ev],
        ),
        { multiPartFor: ek } = er,
        ew = i.useMemo(() => {
            var e;
            let t, n;
            return ee
                ? ((e = ek(H)),
                  (t = Q.trim()),
                  (n = H.options.filter((e) => el.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: el,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [Q, ee, ek, H, el]),
        eN = g[H.id] ?? ib,
        eC = i.useMemo(() => {
            var e, t;
            let n;
            return null != H.input
                ? ((e = H.input),
                  (t = x[H.id]),
                  (n = Q.trim()),
                  {
                      kind: "entities",
                      entities: eN,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eN.map((t) => (t.name.startsWith(aJ[e]) ? t.name : `${aJ[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [Q, x, eN, H.id, H.input]),
        eA = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [H.id]: e })), j((e) => ({ ...e, [H.id]: t })));
            },
            [H.id],
        ),
        eS = i.useCallback(() => w(!0), []),
        eE = i.useCallback(() => w(!1), []),
        eI = er.controlsFor(H, G),
        eM = i.useCallback(() => {
            if (null != eC) {
                "" !== eC.text && ev(eC);
                return;
            }
            if (null != ew) {
                "" !== ew.text && ev(ew);
                return;
            }
            let e = Q.trim();
            "" !== e && ev({ kind: "custom", text: e });
        }, [Q, ew, eC, ev]),
        [e_, eR] = i.useState(!1),
        [eP, eT] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eR(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eL = i.useCallback(() => {
            null != s && (eT(!0), setTimeout(s, 150));
        }, [s]),
        e$ = i.useMemo(
            () =>
                null != eC
                    ? "" !== eC.text
                        ? eC
                        : null
                    : null != ew
                      ? "" !== ew.text
                          ? ew
                          : null
                      : "" !== Q.trim()
                        ? { kind: "custom", text: Q.trim() }
                        : (o[H.id] ?? null),
            [o, Q, ew, eC, H.id],
        ),
        eD = null != e$ && !G,
        ez = K === B - 1,
        eO = i.useCallback(() => {
            null == e$ || G || ev(e$);
        }, [G, e$, ev]),
        eF = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, en.vq)(e.target, HTMLTextAreaElement) ||
                    (0, en.vq)(e.target, HTMLInputElement) ||
                    ((!(0, en.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eb
                            ? (e.preventDefault(), ej())
                            : "ArrowRight" === e.key && eD && (e.preventDefault(), eO())));
            },
            [eb, eD, ej, eO],
        ),
        eq = et
            ? null
            : (0, a.jsxs)("div", {
                  className: a9.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: a9.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(aG.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(rC.y, {
                          value: Q,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [H.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eM());
                          },
                          placeholder: E.intl.string(aZ(H) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: H.question }),
                          disabled: G,
                          rows: 1,
                          className: a9.Pu,
                          "data-conjure-clarification-other": H.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(a9.$O, { [a9.fI]: e_ && !eP, [a9.Oh]: eP }),
        role: "dialog",
        "aria-label": H.question,
        "data-conjure-clarification": l.id,
        "data-state": G ? "inert" : "open",
        "data-question-expanded": Z ? "true" : void 0,
        "data-picker-open": k && !$ ? "true" : void 0,
        "data-step": K,
        tabIndex: -1,
        onKeyDown: eF,
        children: [
            (0, a.jsxs)("div", {
                className: a9.rf,
                style: null == T ? void 0 : { height: T.heading + T.rows },
                "data-moving": $ ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: z,
                        className: a9.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: F,
                                tag: "span",
                                id: `${H.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: Z ? void 0 : 5,
                                className: h()(aO.TK, a9.R_, { [a9.TB]: "exit" === eu, [a9.JU]: "enter" === eu }),
                                children: es,
                            }),
                            ed || Z
                                ? (0, a.jsx)("div", {
                                      className: aO.Q7,
                                      children: (0, a.jsx)(N.m, {
                                          text: em,
                                          children: (0, a.jsx)(eK.K, {
                                              icon: Z ? tX.t : t7.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => X({ id: H.id, expanded: !Z }),
                                              "aria-label": em,
                                              "aria-controls": `${H.id}-label`,
                                              "aria-expanded": Z,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(C.D, {
                                      className: h()(aO.gb, aO.Q7),
                                      onClick: eL,
                                      "aria-label": E.intl.string(S.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(eo.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: a9.Cg,
                        style: null == T ? void 0 : { insetBlockStart: T.heading },
                        children: (0, a.jsxs)("div", {
                            className: a9.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: q,
                                    className: a9.Ge,
                                    role: "group",
                                    "aria-labelledby": `${H.id}-label`,
                                    "data-direction": M?.direction,
                                    "data-parity": null == M ? void 0 : M.moves % 2,
                                    children: [
                                        ee
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: a9.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(iv, {
                                            projectId: n,
                                            question: H,
                                            selected: el,
                                            disabled: G,
                                            onPick: (e) =>
                                                ee
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [H.id]:
                                                                  ((n = t[H.id] ?? ij),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  H.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ey(e),
                                            own: eI,
                                        }),
                                        null != H.input
                                            ? (0, a.jsx)(ii, {
                                                  projectId: n,
                                                  question: H,
                                                  value: eN,
                                                  disabled: G,
                                                  onChange: eA,
                                                  onFocus: eS,
                                                  onBlur: eE,
                                                  fallback: !1 === H.allow_custom ? eq : null,
                                              })
                                            : null,
                                        !0 === H.link && eN.length > 0 && null == b[H.id]
                                            ? (0, a.jsx)("div", {
                                                  className: a9.X_,
                                                  children: (0, a.jsx)(aB.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: E.intl.string(S.default.eCzCxC),
                                                      disabled: G,
                                                      onClick: () => y((e) => ({ ...e, [H.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === H.link && eN.length > 0 && null != b[H.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: a9.$y,
                                                  onFocus: eS,
                                                  onBlur: eE,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: E.intl.string(S.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(aW, {
                                                          label: E.intl.string(S.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: b[H.id] ?? "auto",
                                                          disabled: G,
                                                          onChange: (e) => y((t) => ({ ...t, [H.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        !1 === H.allow_custom ? null : eq,
                                    ],
                                }),
                                null == R
                                    ? null
                                    : (0, a.jsx)(
                                          iy,
                                          {
                                              projectId: n,
                                              question: R.question,
                                              draft: R.draft,
                                              selected: R.selected,
                                              ownImage: R.ownImage,
                                              ownSelected: R.ownSelected,
                                              direction: R.direction,
                                              disabled: G,
                                          },
                                          R.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            B > 1 || ee || et || null != H.input || aZ(H)
                ? (0, a.jsxs)("div", {
                      className: aO.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  B > 1
                                      ? E.intl.formatToPlainString(S.default.yzYUjq, { index: K + 1, total: B })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: aO.zt,
                              children: [
                                  eb
                                      ? (0, a.jsx)(aB.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: E.intl.string(S.default.Pk5lfA),
                                            onClick: ej,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(W.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(ez ? E.t.geKm7t : S.default.w1nRmT),
                                      disabled: !eD,
                                      onClick: eO,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": ez ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var iw = n(557744),
    iN = n(223347),
    iC = n(894443),
    iA = n(525530);
function iS(e, t) {
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
var iE = n(289970),
    iI = n(411236);
function iM(e) {
    let { projectId: t, request: n, onDismiss: l, notifyAgent: r = !0 } = e,
        i = null != n.note && "" !== n.note ? n.note : E.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(iE.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: r,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: r, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let u = (0, a.jsx)(W.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: r,
                disabled: !n,
                text: E.intl.string(S.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: iI.Mk,
                      onSubmit: o,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(S.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: i,
                          }),
                          t,
                          (0, a.jsx)("div", { className: iI.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(aO.nd, aO.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: aO.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: aO.TK,
                                      children: E.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(C.D, {
                                      className: h()(aO.gb, aO.Q7),
                                      onClick: l,
                                      "aria-label": E.intl.string(S.default["iq+Pte"]),
                                      children: (0, a.jsx)(eo.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: iI.DQ,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: i,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: aO.qr,
                              children: (0, a.jsx)("div", { className: aO.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var i_ = n(935208),
    iR = n(932111),
    iP = n(404373),
    iT = n(435558),
    iL = n.n(iT);
let i$ = "ConjureComposerDrafts";
function iD() {
    return B.w.get(i$) ?? {};
}
let iz = new Map(),
    iO = iL().throttle(() => {
        if (0 === iz.size) return;
        let e = iD();
        for (let [t, n] of iz) "" === n ? delete e[t] : (e[t] = n);
        (iz.clear(), B.w.set(i$, e));
    }, 1e3);
class iF extends o.Ay.Store {
    getDraft(e) {
        let t = iz.get(e);
        return null != t ? t : (iD()[e] ?? "");
    }
}
let iq = new iF(tA.h, {
    LOGOUT: function () {
        return (iz.clear(), iO.cancel(), B.w.remove(i$), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (iz.set(t, n), iO(), "" === n && iO.flush(), !1);
    },
});
function iU(e) {
    return "" !== iq.getDraft(e).trim();
}
var iG = n(29080);
function iB(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, ac.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, ac.Lf)(r) }),
    };
}
var iK = n(62617);
let iH = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    iW = {
        snail: () => S.default.ABeVsS,
        goat: () => S.default.dhXay8,
        frog: () => S.default.SHeweG,
        bunny: () => S.default.FytFE1,
        cat: () => S.default["5c+sHs"],
        caterpillar: () => S.default["/FYcne"],
        butterfly: () => S.default["Ib/AxK"],
        dog: () => S.default.zDjBR1,
        spider: () => S.default["6sxyrN"],
        bee: () => S.default.cVtefg,
        bot: () => S.default.MjCw0v,
    },
    iV = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, iK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, iK.Z)(),
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
                        () => (0, iK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, iK.Z)(),
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
                        () => (0, iK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, iK.Z)(),
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
                        () => (0, iK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, iK.Z)(),
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
                        () => (0, iK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, iK.Z)(),
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
                        () => (0, iK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, iK.Z)(),
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
                        () => (0, iK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, iK.Z)(),
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
                        () => (0, iK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, iK.Z)(),
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
                        () => (0, iK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, iK.Z)(),
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
                        () => (0, iK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, iK.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, iK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, iK.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function iX(e) {
    return { ...iV[e], name: E.intl.string(iW[e]()) };
}
function iZ(e) {
    return iH.includes(e) ? iX(e) : void 0;
}
function iY(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % iH.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, iH[(t + n) % iH.length]);
            }),
            l
        );
    })(e))
        t.set(n, iX(l));
    return t;
}
var iJ = n(615839);
function iQ(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var i0 = n(60160),
    i1 = n(16634);
function i2(e) {
    let t = (0, ac.SY)(e.steps);
    return null != t ? (0, ac.WQ)(t) : iQ(e.task);
}
function i3(e) {
    let t = iY(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? iZ(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: iQ(e.task),
                      todoId: e.task.todoId,
                      line: i2(e),
                  },
              ];
    });
}
function i4(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, ac.SY)(n.steps),
        d = u
            ? i2(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(iQ(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, iJ.MB)(e.durationMs),
                              });
                          return E.intl.formatToPlainString(S.default.nmI9Uh, { task: t });
                      default:
                          return E.intl.formatToPlainString(S.default.nmI9Uh, { task: t });
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
                                    className: aM.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            i1.A,
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
                                      className: aM.iq,
                                      children: (0, a.jsx)(i0.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(ag.A, {
        glyph: (0, a.jsx)(ap.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: iQ(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: aM.nC,
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
var i5 = n(998445),
    i6 = n(643210),
    i7 = n(648127),
    i8 = n(372795),
    i9 = n(163897);
let se = "conjure-browser-viewer";
function st(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [i6.A],
            () =>
                n.flatMap((e) => {
                    let n = i6.A.getTab(t, e);
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
        className: i9.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(sn, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function sn(e) {
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
        u = (0, e7.useHasModalOpen)(se),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        g = (0, i7.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(i9.Nr, f && i9.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, e7.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: se },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: i9.Gt,
                children: [
                    (0, a.jsx)(i8.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: i9.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: i9.qf,
                              children: (0, a.jsx)(i5.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: i9.HS,
                              children: (0, a.jsx)(v.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: E.intl.string(S.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: i9.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(i9.W9, f && i9.oM) }),
                    (0, a.jsx)(v.E, {
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
var sl = n(268409);
let sr = new WeakMap(),
    sa = new WeakMap();
function si(e) {
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
        u = (0, o.yK)(
            [ld.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = sr.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = sa.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), sa.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (sr.set(e, n), n);
                })(ld.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: sl.h, children: (0, a.jsx)(st, { projectId: t, sessionIds: u }) });
}
var ss = n(469393);
function so(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, lv.lG)(t.authored_at);
    return (0, a.jsx)(aj, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: ss.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ss.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(W.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(S.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var su = n(155718);
function sc(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let sd = ["command", "user_command", "message_command", "message"],
    sm = new Set([su.kc.CHAT, su.kc.USER, su.kc.MESSAGE]);
function sf(e) {
    return e.type ?? su.kc.CHAT;
}
function sh(e) {
    return sm.has(sf(e));
}
function sg(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function sp(e, t) {
    let n = sd.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !sg(e)), ...n.filter(sg)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || sg(r) || l.push(r);
    }
    return sd.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function sx(e, t, n) {
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
    let s = e.commands.filter(sh).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (sf(e)) {
                    case su.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case su.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(sg),
        u = a.length > 0 ? sp([...a, ...o], !0) : sp("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var sv = n(377941),
    sj = n.n(sv);
function sb(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function sy(e) {
    return e.type === su.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === su.kc.USER || e.type === su.kc.MESSAGE
          ? ""
          : "/";
}
let sk = {
        [lw.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [lw.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [lw.q7.ACTIVITY]: S.default["3/aHX6"],
        [lw.q7.OVERLAY]: S.default["rPpf5/"],
        [lw.q7.PROFILE_WIDGET]: null,
        [lw.q7.AUTOMOD]: null,
        [lw.q7.BOT]: null,
        [lw.q7.APPLICATION_COMMANDS]: null,
    },
    sw = [lw.q7.ACTIVITY, lw.q7.APP_CHANNEL, lw.q7.VOICE_CHANNEL, lw.q7.OVERLAY];
function sN(e) {
    return sw.find((t) => sc(e, t)) ?? null;
}
var sC = n(176999),
    sA = (((l = {}).IMAGE = "image"), l),
    sS = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    sE = n(598748),
    sI = n(773669);
let sM = [],
    s_ = {},
    sR = {};
function sP(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function sT(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: sA.IMAGE,
        visibility: sS.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var sL = n(127258),
    s$ = n(803306),
    sD = n(320095),
    sz = n(963852),
    sO = n(95701),
    sF = n(889227),
    sq = n(427262);
let sU = new sO.nA({ id: "1337", guild_id: "1337", type: D.rbe.GUILD_TEXT, name: "preview" });
function sG(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([aX.default], () => aX.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, s$.nj)(new sF.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let sB = /^@\S+/;
var sK = n(97808),
    sH = n(778712),
    sW = n(46054),
    sV = n(200700);
let sX = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    sZ = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    sY = ["blocked", "alert", "allowed"],
    sJ = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function sQ(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, sV.getFriendlyDurationString)(n))
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
var s0 = n(984097),
    s1 = n(13673);
let s2 = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function s3(e) {
    let { example: t } = e,
        n = sQ(t);
    return null == n
        ? null
        : (0, a.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let s4 = ["glazedgamer", "sprinkles", "donutking"];
function s5(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = sX[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(s0.nM, { [h()(s0.HV, s1.DX)]: s }),
        children: [
            (0, a.jsx)(ax.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: s0.my,
                children: (0, a.jsx)(sK.eu, {
                    src: (0, X.AE)(void 0, void 0),
                    size: sH._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: s0.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), sW.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(s3, { example: n }) : null,
                ],
            }),
        ],
    });
}
function s6(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = sZ[t.section],
        s = new Set(t.examples.map(sQ)),
        o = 1 === s.size ? t.examples.map(sQ)[0] : null;
    return (0, a.jsxs)("div", {
        className: s0.UO,
        children: [
            (0, a.jsxs)("div", {
                className: s0.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: s2[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: s0.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(v.E, {
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
                className: s0.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(s5, { example: e, username: s4[(n + t) % s4.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function s7(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            sY
                .map((e) => ({ section: e, examples: t.filter((t) => sJ[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: s0.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: s0.hk,
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    s6,
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
var s8 = n(276293),
    s9 = n(460905),
    oe = n(110384),
    ot = n(633018),
    on = n(763754),
    ol = n(217424),
    or = n(194085),
    oa = n(20851),
    oi = n(692508),
    os = n(798819);
function oo(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(os.item, os.labelContainer, os.colorDefault, {
            [os.focused]: !0 === t.highlighted,
            [os.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: os.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: os.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(os.label, oi.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: os.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: os.icon }),
                  })
                : null,
        ],
    });
}
function ou(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, oi.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: oe.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(os.menu, oi.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: os.scroller,
            children: [
                (0, a.jsx)(oo, { item: s }),
                (0, a.jsx)("div", { className: os.separator }),
                (0, a.jsx)(oo, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var oc = n(381941);
function od() {}
function om(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        c,
        d,
        m,
        f,
        g,
        { projectId: p, exchanges: x } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, o.bG)([aX.default], () => aX.default.getCurrentUser())),
        (n = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, o.bG)([tn.A], () => tn.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([aX.default], () => (null != l ? aX.default.getUser(l) : void 0), [l])),
        (d = sG("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = sG("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (g = sG("31339", (0, sq.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == m || null == f
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
                                      i = (0, sD.rh)({
                                          ...(0, sz.Ay)({
                                              channelId: sU.id,
                                              content: e,
                                              author: t,
                                              type: l ?? D.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: D.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: sL.G.APPLICATION_COMMAND,
                                                        user: (0, sz.Vi)(s),
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
                                              messageType: D.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: D.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(sB, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: g, member: f },
                              {
                                  targetMessage: E.intl.string(S.default["y+QYes"]),
                                  memberMessage: E.intl.string(S.default.BUTRDc),
                              },
                          ),
                [x, m, t, g, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = sU.name;
    return (0, a.jsxs)("div", {
        className: oi.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: oi.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(s8.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(oi.TE, `group-spacing-${oc.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? oi.Rz : void 0,
                            children: [
                                (0, a.jsx)(oa.A, {
                                    message: n,
                                    channel: sU,
                                    author: (0, on.FT)(n.author, sU),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(ol.A, { message: n, channel: sU }) : void 0,
                                    usernameClassName: r?.target === "user" ? oi.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: oi.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(or.Ay, {
                                              children: [
                                                  (0, a.jsx)(or.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: s9.n,
                                                      onClick: od,
                                                  }),
                                                  (0, a.jsx)(or.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: oe.W,
                                                      onClick: od,
                                                  }),
                                                  (0, a.jsx)(or.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: eH.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: od,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? oi.ET : oi.je,
                                          inert: !0,
                                          children: (0, a.jsx)(ou, {
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
                className: oi.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ot.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
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
var of = n(332173);
function oh(e) {
    let { name: t } = e;
    return (0, a.jsxs)(of.A, { children: ["/", t] });
}
function og(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(sj());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(oh, { name: e.name }, e.start) : e.text));
}
n(827669);
var op = n(757789),
    ox = n(26137);
let ov = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var oj = n(573634);
let ob = {
    frame: Z.GameControllerIcon,
    overlay_widget: op.V,
    user_widget: ox.r,
    bot: ee.RobotIcon,
    commands: ee.RobotIcon,
    automod: Q.ShieldIcon,
};
function oy(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(oj.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function ok(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: oj.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: oj.jw,
                    children: (0, a.jsx)(v.E, {
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
function ow(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: oj.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(oj.Vo, oj.G),
                children: (0, a.jsx)(Y.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: oj.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function oN(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: oj.wZ,
        children: t.map((e, t) => {
            let n = sy(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(oh, { name: e.name })
                                : (0, a.jsx)(of.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function oC(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: oj.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: oj.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(og, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function oA(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? Y.k : ob[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : ov[t.kind]);
    return (0, a.jsxs)("section", {
        className: oj.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: oj.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: oj.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: oj.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(og, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(oC, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: oj.PG, children: r }) : null,
        ],
    });
}
function oS(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: oj.aN,
        children: [
            (0, a.jsxs)("div", {
                className: oj.Lv,
                children: [(0, a.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: r }), s],
            }),
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
                                let n = t.map(sj()).join("|");
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
                            (0, a.jsx)("div", { className: oj.yF, role: "separator" }),
                            (0, a.jsx)(oA, {
                                experience: t,
                                bullets: n,
                                preview: u(t),
                                blocks: (function (e, t) {
                                    switch (t.kind) {
                                        case "frame":
                                            let n = (function (e, t) {
                                                if ("frame" !== t.kind) return null;
                                                let n = E.intl.string(S.default["6/3tGY"]),
                                                    l = [];
                                                if (t.surfaces.includes(lw.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(lw.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(lw.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        oy,
                                                        {
                                                            className: oj.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: oj.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        ow,
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
                                                ...(n.usableInVoice ? [E.intl.string(S.default["4oGg2h"])] : []),
                                                ...(n.launchableAnywhere ? [E.intl.string(S.default.BTGCfR)] : []),
                                            ];
                                            return (
                                                r.length > 0 &&
                                                    l.push(
                                                        (0, a.jsx)(
                                                            oy,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(ok, { labels: r }),
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
                                                              oy,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(oN, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...[
                                                    {
                                                        key: "permissions",
                                                        caption: S.default["2UbW6r"],
                                                        names: e.bot_permissions,
                                                    },
                                                    {
                                                        key: "intents",
                                                        caption: S.default["7TKfpj"],
                                                        names: e.privileged_intents,
                                                    },
                                                ]
                                                    .flatMap((e) => {
                                                        let { key: t, caption: n, names: l } = e;
                                                        return null != l && l.length > 0
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(sb) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            oy,
                                                            { caption: n, children: (0, a.jsx)(ok, { labels: l }) },
                                                            t,
                                                        );
                                                    }),
                                            ];
                                        default:
                                            return [];
                                    }
                                })(o, t),
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
var oE = n(633075),
    oI = n(946356),
    oM = n(58216),
    o_ = n(27399);
function oR(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([aX.default], () => aX.default.getCurrentUser()),
        r = i.useMemo(() => new oE.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: o_.H,
              children: (0, a.jsx)(oI.A.Overlay, {
                  className: o_.w,
                  children: (0, a.jsx)(oM.A, {
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
var oP = n(443863);
function oT(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = (0, ic._)(t, r),
        c = i.useCallback(() => {
            (0, eh.PK)(t, r).then(
                (e) => {
                    (0, iu.R)({
                        items: [{ type: "IMAGE", url: e, alt: l }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "ConjureChat",
                    });
                },
                () => {},
            );
        }, [t, r, l]);
    return o
        ? null
        : (0, a.jsx)(C.D, {
              className: oP.xX,
              onClick: c,
              "aria-label": E.intl.string(S.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: oP.sN, onError: u }) : null,
          });
}
function oL(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = sc(c, lw.q7.APPLICATION_COMMANDS)),
            (l =
                sc(c, lw.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(sh)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : sx(c, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = sR } = t,
                r = (0, o.bG)([sI.default], () => sI.default.locale),
                a = (0, o.bG)([eL.Ay], () => {
                    let t = eL.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(s_);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, eh.PK)(e, l.id).then(
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
                                                          ...sP(n),
                                                          ...(null != n.fallback ? { fallback: sP(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = sC.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[sE.m.WIDGET_TOP] || null == i[sE.m.WIDGET_BOTTOM]
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
                                                                    type: sC.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: sC.oG.NUMBER, value: a })
                                                                : (r[e] = { type: sC.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(sT),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: sM,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(u, c),
        g = d?.superseded === !0,
        p = c.what_changed?.trim() ?? "",
        x =
            ((t = c.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === sy(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = sN(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(sh)
                    ? sx({ ...c, bot: void 0 }, "commands", {
                          message: E.intl.string(S.default.J7qggf),
                          reply: E.intl.string(S.default.nqYtiy),
                          event: E.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(u)?.name, [u]),
        k =
            g && null != d
                ? E.intl.formatToPlainString(S.default.YZ3qJs, { version: d.version })
                : E.intl.string(S.default["3b6e7o"]),
        w = g ? (0, a.jsx)(ay, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(ak, {
        title: k,
        meta: w,
        superseded: g,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: oP.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: oP.Qs,
                children: (0, a.jsx)(oS, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(og, { text: c.summary, commandNames: x }),
                            }),
                            "" !== p
                                ? (0, a.jsxs)("section", {
                                      className: oP.uW,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: E.intl.string(S.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(og, { text: p, commandNames: x }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    proposal: c,
                    renderPreview: function (e) {
                        switch (e.kind) {
                            case "frame":
                            case "overlay_widget":
                                let t;
                                return e.id === j && null != c.design_image
                                    ? (0, a.jsx)(oT, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: E.intl.string(null == (t = sN(c)) ? S.default["3/aHX6"] : sk[t]),
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(oR, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(s7, { automod: c.automod })
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
                                        (r = l.some((e) => "command" === e.kind || sg(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(om, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: x,
                }),
            }),
            null == m || g
                ? null
                : (0, a.jsxs)("div", {
                      className: oP.qr,
                      children: [
                          (0, a.jsx)(W.$, {
                              variant: "primary",
                              size: "sm",
                              text: E.intl.string(S.default["6S+wRM"]),
                              onClick: m,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: E.intl.string(S.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var o$ = n(289565);
function oD(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: o$.m, children: n })
        : (0, a.jsxs)("div", {
              className: o$.Z,
              children: [
                  n,
                  (0, a.jsx)(N.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(eK.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: eo.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function oz(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "unpublished" === t.state);
}
function oO(e, t) {
    return null != e && oz(t, e.status);
}
let oF = new WeakMap();
var oq = n(175841),
    oU = n(27232),
    oG = n(505930),
    oB = n(385081);
let oK = "conjurePublishRatings",
    oH = [1, 2, 3, 4, 5],
    oW = { 1: S.default.GhbsGA, 2: S.default.cm0nwU, 3: S.default.kGvlh2, 4: S.default.dVBSUg, 5: S.default.DKlgF7 };
function oV(e) {
    return E.intl.string(oW[e]);
}
let oX = new Set(),
    oZ = 0;
function oY() {
    return B.w.get(oK) ?? {};
}
function oJ(e, t) {
    return oY()[e]?.[t] ?? null;
}
function oQ(e) {
    return (oX.add(e), () => oX.delete(e));
}
function o0(e) {
    let { rating: t, ...n } = e,
        {
            text: l,
            setText: r,
            canSend: s,
            send: o,
        } = (function (e) {
            let [t, n] = i.useState("");
            return {
                text: t,
                setText: n,
                canSend: "" !== t.trim(),
                send: () => {
                    let n;
                    "" !== (n = t.trim().slice(0, 256)) && (0, oB.Fz)(e, n);
                },
            };
        })(t),
        u = E.intl.string(S.default.IqkF07);
    return (0, a.jsx)(e5.a, {
        ...n,
        title: u,
        actions: [
            {
                variant: "primary",
                text: E.intl.string(S.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (o(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(l4.f, {
            label: u,
            hideLabel: !0,
            placeholder: E.intl.string(S.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var o1 = n(54100);
function o2(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: o1.mo,
        role: "status",
        children: [
            (0, a.jsx)(oq.SparklesIcon, { size: "xs", color: "currentColor", className: o1.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? E.intl.string(S.default["nIc9/M"])
                        : 3 === t
                          ? E.intl.string(S.default.ausj8U)
                          : E.intl.string(S.default.HilSjw),
            }),
        ],
    });
}
function o3(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: o } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(oQ, () => oZ),
                {
                    rating: oJ(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != oJ(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, oB.gw)(i);
                            let s = oY();
                            return (B.w.set(oK, { ...s, [t]: { ...s[t], [n]: l } }), oZ++, oX.forEach((e) => e()), i);
                        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
                        return null != a && e <= 2 ? a : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r }),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, g] = i.useState(!1),
        p = i.useId(),
        x = i.useId(),
        j = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => g(!1), 420);
            return () => clearTimeout(e);
        }, [f]),
        null != s && !f)
    )
        return (0, a.jsx)(o2, { rating: s });
    let b = null != s,
        y = b ? s : (d ?? u),
        k = b || (null == d && null != u);
    function w(e) {
        if (b) return;
        (c(e), m(null), g(!0));
        let t = o(e);
        null != t && (0, e7.openModal)((e) => (0, a.jsx)(o0, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: o1.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: o1.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: x,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: h()(o1.Pf, { [o1.KH]: null == y }),
                        children: E.intl.string(S.default.mTV326),
                    }),
                    oH.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: h()(o1.Pf, { [o1.KH]: y === e }),
                                children: oV(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": x,
                className: o1.uf,
                children: oH.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? oU.StarIcon : oG.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: o1.uK,
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
                                        j.current ? c(e) : w(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((j.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), w(e)));
                                    },
                                    onKeyUp: () => {
                                        j.current = !1;
                                    },
                                    className: o1.hF,
                                    "aria-label": E.intl.formatToPlainString(S.default.NU7Dex, {
                                        rating: e,
                                        label: oV(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: h()(o1.d4, { [o1.cO]: t, [o1.Ng]: t && k }),
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
function o4(e) {
    let { projectId: t, publish: n } = e;
    return (0, a.jsx)("span", {
        ...{ [ra]: t },
        children: (0, a.jsx)(W.$, {
            variant: "primary",
            size: "sm",
            loading: n.publishing,
            text: n.label,
            onClick: () => ro(t),
        }),
    });
}
function o5(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, e0.Ay)(t);
    return null != r && oO(r, l)
        ? (0, a.jsx)(oD, {
              children: (0, a.jsxs)(e6.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(o4, { projectId: t, publish: r }),
                      null != n ? (0, a.jsx)(o3, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var o6 = n(303345),
    o7 = n(44255),
    o8 = n(416473),
    o9 = n(289830);
function ue(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [eL.Ay],
                    () => {
                        let t = eL.Ay.getProject(e);
                        return null != t && (0, eL.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, o8.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof o6.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, o7.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, o7.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(aj, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: o9.r,
            children: [
                (0, a.jsxs)("div", {
                    className: o9.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "text-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: E.intl.string(S.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  role: "status",
                                  children: E.intl.string(S.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(W.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(S.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var ut = n(989271);
function un(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(ut.nM, { [ut.f1]: s, [ut.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: ut.jo,
                children: [
                    n
                        ? (0, a.jsx)(nC.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ut.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ut.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function ul(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(aj, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                un,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var ur = n(530557),
    ua = n(872162),
    ui = n(564963),
    us = n(202723);
function uo(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, e7.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: ur.R })), [r.fields]),
        d = (0, ui.bB)(l, s),
        m = h()(us.Lo, { [us.jY]: d });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: E.intl.string(S.default.CTxtdV),
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
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: E.intl.string(S.default.HCQvpO),
                        }),
                        (0, a.jsx)(ua.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: us.Lo,
                      children: (0, a.jsx)(ua.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
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
                                className: us.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: us.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(ni.y, {
                                            size: "xs",
                                            color: w.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(v.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: E.intl.string(S.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(ua.C, { label: E.intl.string(S.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: us.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: E.intl.string(null != o ? S.default.O0QIqj : S.default.HCQvpO),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : E.intl.string(S.default.MPGSHL),
                        }),
                        (0, a.jsx)(ua.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: us.sq,
                            children: (0, a.jsx)(W.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: E.intl.string(S.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var uu = n(919790),
    uc = n(908492),
    ud = n(971824),
    um = n(162052),
    uf = n(165648);
function uh(e) {
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
        x = i.useMemo(() => (0, ac.Jf)(n, l), [n, l]),
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
            className: aM.pj,
            "data-live": !1,
            children: (0, a.jsx)(ag.A, {
                glyph: (0, a.jsx)(iG.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, ac.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = iY(k.map((e) => e.taskId)),
        N = !g && (l || k.some((e) => "running" === e.task.status)),
        C = i3(k);
    return (0, a.jsxs)("ol", {
        className: aM.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(af.Ay, {
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
                let l = null != e.task.helperMark ? iZ(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          i4,
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
            (0, a.jsx)(si, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: aM.YO,
                      children: (0, a.jsx)(aE, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function ug(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: o,
            attachments: u,
            secretRequest: c,
            secretRequestId: d,
            secretRequestAwaiting: m,
            secretRequestStatus: f = "open",
            settingsRequest: g,
            publishCta: p,
            turnId: x,
            onPickIdea: j,
            pickedIdeaIds: b,
            onApprovePlan: y,
            sideReply: k = !1,
            sideReplyAcknowledges: w,
            hoistedProse: N = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: A,
            onRestoreProposal: I,
            publishScheduleProposal: M,
            publishScheduleProposalCurrent: _ = !1,
        } = e,
        R = i.useMemo(
            () => iB({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: P, lastStreamedMessage: T, showsClosingMessage: L, closingContent: $ } = R,
        D = (N ? C : void 0) ?? R.attachmentsHost,
        z = L && !N,
        O = null == u ? null : (0, a.jsx)(uu.A, { projectId: t, attachments: u }),
        F = null == O ? null : (0, a.jsx)("div", { className: aM.MT, children: O }),
        q = k
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return E.intl.string(S.default.Mv5OmK);
                          case "queued":
                              return E.intl.string(S.default["Po/2mi"]);
                          case "restarting":
                              return E.intl.string(S.default.Vj0woh);
                          default:
                              return E.intl.string(S.default.gY3L8p);
                      }
                  })(w),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: aM.ue,
        children: [
            P.length > 0 && !N
                ? (0, a.jsx)("ol", {
                      className: aM.dO,
                      children: P.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: aM.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: uf.PT,
                                          children: (0, uc.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === D && e === T ? F : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(oL, { projectId: t, proposal: r, version: s, onApprove: y })
                : z
                  ? (0, a.jsxs)("div", {
                        className: h()(aM.ky, um.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(uf.PT, aM.cW),
                                children: (0, uc.U)($, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === D ? F : null,
                            q,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(aM.ky, um.XR, { [ud.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(uo, {
                          projectId: t,
                          cardId: d ?? "",
                          request: c,
                          status: f,
                          awaiting: "open" === f ? m : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, a.jsx)("div", {
                      className: h()(aM.ky, um.XR),
                      children: (0, a.jsx)(iM, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== D && ("closing" !== D || z) ? null : O,
            null != p ? (0, a.jsx)(o5, { projectId: t, turnId: x ?? null, cta: p }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(ul, { ideas: o, pickedIdeaIds: b, onPick: j }) : null,
            null != A ? (0, a.jsx)(so, { proposal: A, onRestore: I }) : null,
            null != M ? (0, a.jsx)(ue, { projectId: t, proposal: M, current: _ }) : null,
            z ? null : q,
        ],
    });
}
var up = n(864970),
    ux = n(146806),
    uv = n(475358),
    uj = n(717400),
    ub = n(99677),
    uy = n(655098),
    uk = n(234320),
    uw = n(191023);
function uN(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(tU.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: lu.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(uw.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: lu.OY,
                    children: (0, a.jsx)(aG.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(v.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: E.intl.string(S.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: tB.o1,
            onClick: () => {
                lr(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": E.intl.string(S.default.N852dj),
            children: (0, a.jsx)(tC.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function uC(e) {
    let { send: t } = e;
    return (0, a.jsxs)(tU.p, {
        compact: !0,
        name: E.intl.string(S.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: E.intl.string(S.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(tN.y, { type: tN.t.SPINNING_CIRCLE_SIMPLE, className: tB.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(aB.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: E.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var uA = n(901173),
    uS = n(161431),
    uE = n(280450),
    uI = n(503275),
    uM = n(659280),
    u_ = n(351906),
    uR = n(407653),
    uP = n(322915);
function uT(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([u_.A], () => u_.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      uM.Ay.User,
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
                      uM.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(uR.A, { projectId: n, file: e.file, className: uP.Vk }),
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
    return (0, a.jsx)(uM.Ay, {
        id: t,
        className: uP.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(uL, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(uL, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function uL(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: uP.Gf, children: n }),
            l,
        ],
    });
}
var u$ = n(719442),
    uD = n(355622),
    uz = n(408018),
    uO = n(186306),
    uF = n(323350),
    uq = n(35277),
    uU = n(820066),
    uG = n(683167),
    uB = n(267102),
    uK = n(259691);
let uH = (0, sO.createChannelRecord)({ id: "1", type: D.rbe.DM });
function uW(e) {
    let t = uU.VW.end(e, []);
    return { anchor: t, focus: t };
}
function uV(e) {
    return (0, uF.WO)(uU.VW.richValue(e), { mode: "raw" });
}
function uX(e, t) {
    ((e.children = (0, uz.x7)(t)), (e.selection = uW(e)), e.onChange());
}
function uZ(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(iR.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(uK.A, { attachmentId: r }), n] });
}
var uY = n(497437);
let uJ = "text-md/normal",
    uQ = null;
function u0(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, f] = i.useState(0),
        [g, p] = i.useState(0),
        [x, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            (p(i + a), f(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                m = 0 === d ? 1 : s / d,
                h = 0 === d ? 1 : o / d;
            j({
                frontFrom: 1e3 * (0, ux._R)(m),
                frontTo: 1e3 * (0, ux._R)(h),
                backFrom: 1e3 * (0, ux.T)(m),
                backTo: 1e3 * (0, ux.T)(h),
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
        N = i.useRef(!1),
        C = i.useCallback(() => {
            (w(N.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        N.current = n;
    }, [n, t]);
    let A = "in" === k ? x.backFrom : x.frontFrom,
        I = "out" === k ? x.frontTo : x.backTo,
        M = (0, o.bG)([V.Ay], () => V.Ay.useReducedMotion),
        _ = t === E.intl.string(S.default.Zc7gML),
        R = r === t && _;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(uY.VT, { [uY.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, I - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(uv.e, { shortcut: "tab", className: uY.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(up.o, {
                text: t,
                variant: uJ,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: h()(uY.xM, { [uY.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            P(uY.IS, n || (!M && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: uY.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: uJ, tag: "span", children: t }),
            }),
            R
                ? (0, a.jsxs)("span", {
                      className: uY.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: uJ, tag: "span", className: uY.xM, children: t }),
                          P(uY.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let u1 = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                running: l,
                restoring: r = !1,
                onSend: s,
                onInterrupt: u,
                onUploadFile: c,
                onApprove: d,
                onImport: m,
                onSendToOtherProjects: f,
                suggestion: g,
                questionOpen: p = !1,
                hasPendingContext: x = !1,
                onDraftHasTextChange: v,
                modelSettings: j,
                onModelSettingsChange: b,
            } = e,
            y = (function (e) {
                let t = i.useContext(uB.Ay),
                    [n] = i.useState(() => {
                        let n = (0, u$.ie)();
                        return (
                            (n.children = (0, uz.x7)(e)),
                            (n.selection = uW(n)),
                            (0, uG.a)({
                                editor: n,
                                chatInputType: uD.oU.GENERIC_RICH_TEXTAREA,
                                channel: uH,
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
                                    for (let [t, l] of uU.VW.nodes(e, { at: [], match: uU.l5.isText }))
                                        for (let e of t.text.matchAll(iR.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        uO.o.withMergedEntry(e, () =>
                                            uU.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    uq.b.textToVoid(
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
            })(iq.getDraft(t)),
            [k, w] = i.useState(() => uV(y)),
            C = i.useRef(k),
            [A, I] = i.useState(null),
            M = i.useCallback(() => {
                let e = uV(y);
                e !== C.current &&
                    ((C.current = e),
                    tA.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }),
                    w(e));
                I(
                    (function (e) {
                        let { selection: t } = e;
                        if (null == t || !uU.ZF.isCollapsed(t)) return null;
                        let [n] = uU.VW.node(e, t.anchor.path);
                        return uU.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                    })(y),
                );
            }, [y, t]),
            R = i.useCallback((e) => uX(y, e), [y]),
            P = "" !== k.trim();
        i.useEffect(() => v?.(P), [P, v]);
        let T = i.useRef(t);
        i.useLayoutEffect(() => {
            T.current !== t && ((T.current = t), uX(y, iq.getDraft(t)));
        }, [y, t]);
        let L = (0, o.bG)([V.Ay], () => V.Ay.isSubmitButtonEnabled),
            [$, z] = i.useState(!1);
        i.useEffect(() => {
            l || z(!1);
        }, [l]);
        let O = i.useRef(null),
            {
                drafts: F,
                addFiles: q,
                pasteFiles: U,
                removeDraft: G,
                settled: B,
                takeRefs: K,
            } = tW({ projectId: t, surface: "chat", onUploadFile: c }),
            H = lt.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && n8(n);
            }),
            W = "" !== k.trim() || F.length > 0 || x || H,
            X = n && W && B,
            [Z, Y] = i.useState(null);
        i.useEffect(() => {
            if (null == Z) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => Y(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [Z]);
        let J = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: c } =
                        ((t = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, o.yK)(
                            [ld.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              ld.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, uI.Y_)(l), r.forEach(uI.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([aX.default], () => (null == l ? null : aX.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [aX.default],
                            () => r.map((e) => aX.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([uE.default], () => uE.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            Q = (0, uS.rU)(t),
            [ee, et] = i.useState(null),
            [en, el] = i.useState(0),
            er = i.useMemo(() => (null != A && n ? (0, uA.OG)(A, A.length) : null), [A, n]),
            ea = er?.start ?? null;
        i.useEffect(() => {
            null == ea ? et(null) : (0, uS.IP)(t);
        }, [ea, t]);
        let ei = ea === ee ? null : er,
            es = i.useMemo(() => (null == ei ? [] : (0, uA.l$)(J, Q, ei.text)), [ei, J, Q]),
            eo = ei?.text;
        i.useEffect(() => el(0), [eo]);
        let em = es.length > 0,
            ef = Math.min(en, Math.max(0, es.length - 1)),
            eg = i.useId(),
            ep = i.useCallback(
                (e) => {
                    let t = es[e];
                    null != ei &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (uq.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                uq.b.insertText(e, `${n} `));
                        })(y, ei.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [es, ei, y],
            ),
            ex = i.useCallback(() => {
                if (!X) return;
                let e = K(),
                    n = H
                        ? (function (e) {
                              let t = ll(e);
                              if (null == t || !n8(t)) return null;
                              let n = t.history.present,
                                  l = ae(e);
                              return (
                                  lr(e, (e) => ({ ...e, history: nQ, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, _.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (r6.set(i, s),
                                          (s.job = (function (e) {
                                              let t = 0,
                                                  n = null,
                                                  l = null,
                                                  r = null,
                                                  a = !1,
                                                  i = !1,
                                                  s = !1;
                                              async function o() {
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
                                              function u() {
                                                  o().catch(() => {});
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
                                              capture: (t) => (0 === t ? l : ae(e)),
                                              composite: (e) => r4(e, n),
                                              upload: (t) =>
                                                  (0, eh.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, eh.n6)(e, t.id),
                                              send: (n) => (0, _.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      r8(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (r6.delete(i),
                                                          window.setTimeout(() => {
                                                              (r8(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                s(k, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == uQ && (uQ = document.createElement("canvas").getContext("2d"));
                    let i = uQ;
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
                })(u3(eN.current), e$.current, (0, uA.Lj)(k));
                ("" !== l && Y(l), R(""), et(null));
            }, [X, H, t, k, s, K, R]),
            ev = i.useCallback(
                (e) => {
                    (e.preventDefault(), ex());
                },
                [ex],
            ),
            ej = i.useCallback(() => {
                null == u || $ || (z(!0), u());
            }, [u, $]),
            eb = null == g || "" !== k || !n || r || x ? null : g,
            ey = i.useCallback(
                (e) => {
                    if (em && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = es.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), el((ef + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ep(ef));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), et(ei?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && l && null != u && !$) {
                        (e.preventDefault(), e.stopPropagation(), ej());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eb) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), R(eb));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ex());
                },
                [ex, d, l, u, $, ej, eb, R, em, es.length, ef, ep, ei],
            ),
            ek = i.useCallback(
                (e) => {
                    n && U(e);
                },
                [n, U],
            );
        (0, uk.Vo)({
            event: D.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ek(t);
            },
        });
        let ew = i.useCallback(
                (e) => {
                    (q(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [q],
            ),
            eN = i.useRef(null),
            eC = i.useRef(null),
            eA = i.useCallback(() => {
                let e = C.current;
                f?.((0, uA.Lj)(e), () => {
                    C.current === e && R("");
                });
            }, [f, R]),
            eS = i.useCallback((e) => {
                let t = O.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eE, eI] = i.useState(0),
            [eM, e_] = i.useState(!1);
        i.useEffect(() => {
            if (0 === k.length) return void e_(!1);
            let e = u3(eN.current);
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
            e_(!0);
            let t = setTimeout(() => e_(!1), u2);
            return () => clearTimeout(t);
        }, [k]);
        let eR = i.useMemo(() => ({ "--custom-glow-x": `${eE}px` }), [eE]),
            eP = eM ? ` ${uY.EB}` : "",
            eT = r
                ? E.intl.string(S.default.qqlUiW)
                : n
                  ? x
                      ? E.intl.string(S.default.knUjL3)
                      : p
                        ? E.intl.string(S.default.IevBEw)
                        : E.intl.string(l ? S.default["0BJa/0"] : S.default.TEeU7z)
                  : E.intl.string(S.default.zZ9NgM),
            e$ = i.useRef(0),
            eD = i.useRef(null),
            ez = i.useCallback((e) => {
                if ((eD.current?.disconnect(), null == e)) return;
                e$.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    e$.current = e.clientWidth;
                });
                (t.observe(e), (eD.current = t));
            }, []),
            eO = i.useId(),
            eF = i.useId(),
            eq = null != eb,
            eU = Z ?? eb ?? eT,
            eG = "" === k && "" !== eU;
        return (0, a.jsxs)("form", {
            onSubmit: ev,
            className: uY.DA,
            children: [
                em
                    ? (0, a.jsx)(uT, {
                          id: eg,
                          projectId: t,
                          suggestions: es,
                          selectedIndex: ef,
                          onHover: el,
                          onSelect: ep,
                      })
                    : null,
                F.length > 0 || H
                    ? (0, a.jsxs)("div", {
                          className: uY.lN,
                          children: [
                              F.map((e) => (0, a.jsx)(tV, { draft: e, onRemove: G }, e.localId)),
                              H ? (0, a.jsx)(uN, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${uY.wg} ${uY.LP}${eP}`, style: eR, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${uY.wg} ${uY.L3}${eP}`, style: eR, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: uY.VA,
                    ref: eN,
                    children: [
                        (0, a.jsx)("input", {
                            ref: O,
                            type: "file",
                            multiple: !0,
                            onChange: ew,
                            className: uY.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(eu.Y, {
                            targetElementRef: eC,
                            position: "top",
                            align: "left",
                            animation: eu.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(ec.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(ed.rX, {
                                        children: [
                                            tw.map((e) =>
                                                (0, a.jsx)(
                                                    ed.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => eS(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(ed.Dr, {
                                                      id: "import-project",
                                                      label: E.intl.string(S.default["p/k5i7"]),
                                                      iconLeft: uj.q,
                                                      leadingAccessory: { type: "icon", icon: uj.q },
                                                      action: m,
                                                  })
                                                : null,
                                            null != f
                                                ? (0, a.jsx)(ed.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: ub.t,
                                                      leadingAccessory: { type: "icon", icon: ub.t },
                                                      action: eA,
                                                  })
                                                : null,
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) => {
                                let { isShown: l } = t;
                                return (0, a.jsx)("button", {
                                    ...e,
                                    ref: eC,
                                    type: "button",
                                    className: `${uY.Y0} ${uY.nu}`,
                                    disabled: !n,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(tx.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: uY.Qu,
                                    }),
                                });
                            },
                        }),
                        eG
                            ? (0, a.jsx)("div", {
                                  ref: ez,
                                  className: uY.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(u0, { text: eU, offering: eq && null == Z, typed: null != Z }),
                              })
                            : null,
                        (0, a.jsx)(ax.A, { id: eF, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(iR.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(uy.A, {
                                editor: y,
                                containerClassName: h()(uY.sq, nt.dv),
                                className: uY.jp,
                                readOnly: !n,
                                canFocus: n,
                                onChange: M,
                                onBlur: () => I(null),
                                onKeyDown: ey,
                                onPaste: ek,
                                renderExtraElement: uZ,
                                "aria-labelledby": eF,
                                "aria-describedby": eG ? eO : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": em,
                                "aria-controls": em ? eg : void 0,
                                "aria-activedescendant": em ? ((0, uM.aI)(ef) ?? void 0) : void 0,
                            }),
                        }),
                        eG ? (0, a.jsx)(ax.A, { id: eO, children: eT }) : null,
                        (0, a.jsx)("div", {
                            className: uY.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${uY.Y0} ${uY.$E}`,
                                              disabled: $,
                                              onClick: ej,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(iG.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : j?.tierSettings != null && null != b
                                      ? (0, a.jsx)(t6, {
                                            settings: j.tierSettings,
                                            tiers: j.tiers,
                                            choices: j.choices,
                                            disabled: !n,
                                            onChange: b,
                                            className: `${uY.Y0} ${uY.$E}`,
                                            icon: (0, a.jsx)(tv.R, {
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
                                  className: uY.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: uY.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: uY.rt,
                                          disabled: !X,
                                          "aria-label": E.intl.string(S.default.rxW2cl),
                                          children: (0, a.jsx)(tj.SendMessageIcon, {
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
    u2 = 1500;
function u3(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var u4 = n(709753),
    u5 = n(540338),
    u6 = n(986109);
let u7 = i.createContext(null);
function u8(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(u7),
        [d, m] = i.useState(() => V.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
        f = i.useCallback((e) => {
            e.target === e.currentTarget && m(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: u,
        onAnimationEnd: d ? void 0 : f,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: h()(u6.xk, { [u6.g5]: d, [u6.Qo]: s, [u6.q3]: o }),
        children: n,
    });
}
let u9 = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    ce = new Map();
function ct(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function cn(e, t) {
    return null != e && e > 0 && e < t;
}
let cl = "ideas",
    cr = "live_behind",
    ca = "conjureTipDismissals",
    ci = new Set(),
    cs = new Set(),
    co = 0;
function cu() {
    let e = B.w.get(ca);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function cc(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return ci.has(((n = e.id), `${t}:${n}`));
        case "app":
            return cu().app[t]?.includes(e.id) === !0;
        case "forever":
            return cu().forever.includes(e.id);
    }
}
function cd(e) {
    return (cs.add(e), () => cs.delete(e));
}
let cm = [12e4, 6e4];
var cf = n(292771);
function ch(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([V.Ay], () => V.Ay.useReducedMotion),
        [r, s] = i.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let c = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(null),
        f = i.useRef(u);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = c.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = d.current,
            s = m.current,
            o = r?.offsetHeight ?? 0,
            h =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((d.current = h), (m.current = o));
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
            ref: c,
            className: cf.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(cf.qd, e.leaving ? cf.dv : cf.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var cg = n(443865),
    cp = n(247171);
function cx(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(cp.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(cp.gutter, cp[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: cp.content, children: i }),
        ],
    });
}
var cv = n(716502);
function cj(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cx, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: cv.Nr,
        children: (0, a.jsxs)("section", {
            className: cv.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: cv.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(eK.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eo.P,
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
function cb(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: cv.DD,
        children: t,
    });
}
function cy(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: cv.rf,
        children: t,
    });
}
function ck(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: cv.o1, children: t });
}
let cw = {
    ...u9,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(cj, {
            icon: cg.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(cb, { children: E.intl.string(S.default.OJlbhX) }),
                (0, a.jsx)(cy, { children: E.intl.string(S.default["3vJBni"]) }),
                (0, a.jsx)(ck, {
                    children: (0, a.jsx)(W.$, {
                        variant: "primary",
                        size: "sm",
                        text: E.intl.string(S.default["U/bLzU"]),
                        disabled: null == n,
                        onClick: () => {
                            (l?.(), n?.());
                        },
                    }),
                }),
            ],
        });
    },
};
var cN = n(830205);
function cC(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cx, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: cN.aK,
        children: (0, a.jsxs)("div", {
            className: cN.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: cN.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: cN.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(eK.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eo.P,
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
var cA = n(95635);
let cS = [
    {
        id: cr,
        priority: 2,
        resolve: function (e) {
            let { turn: t, publish: n, draftHasText: l, idleMs: r } = e;
            return null == t ||
                l ||
                null == n ||
                n.publishing ||
                !n.isUpdate ||
                null != n.disabledReason ||
                r < 12e4 ||
                (null != t.publishCta && oO(n, t.publishCta)) ||
                cn(e.messagesSinceShown(cr), 10)
                ? null
                : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l
                ? (0, a.jsx)(cC, {
                      icon: cA.UploadIcon,
                      onDismiss: r,
                      children: (0, a.jsx)("span", {
                          ...{ [ra]: n },
                          children: E.intl.format(S.default.fWfeZ8, { onPublish: () => ro(n) }),
                      }),
                  })
                : null;
        },
    },
    cw,
    {
        id: cl,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(u9) ||
                0 === e.messagesSinceShown(u9.id) ||
                cn(e.messagesSinceShown(cl), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(cC, {
                icon: cg.LightbulbIcon,
                onDismiss: l,
                children: E.intl.format(S.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var cE = n(817921);
function cI(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            var a;
            let s,
                u,
                c,
                d,
                m,
                f,
                h,
                g,
                p =
                    ((s = (0, e0.Ay)(t)),
                    (u = (0, o.bG)([aX.default], () => aX.default.getCurrentUser()?.id)),
                    (m = (function (e, t) {
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
                    })(
                        (d =
                            null != (c = n.at(-1))
                                ? Math.max(c.created_at, c.finished_at ?? 0, c.settled_at ?? 0)
                                : null),
                        cm,
                    )),
                    (h =
                        null ==
                            (f = (function (e) {
                                for (let t = e.length - 1; t >= 0; t--) {
                                    let n = e[t];
                                    if (
                                        "publish_notice" !== n.kind &&
                                        "project_event" !== n.kind &&
                                        "context_boundary" !== n.kind
                                    ) {
                                        if ("user" === n.role) return null;
                                        if ((0, ad.BL)(n)) return n;
                                        if (!(0, ad.B0)(e, t)) break;
                                    }
                                }
                                return null;
                            })(n)) ||
                        null != (a = f).awaitingUser ||
                        null != a.secretRequest ||
                        null != a.settingsRequest ||
                        (a.intake?.questions.length ?? 0) > 0
                            ? null
                            : f),
                    {
                        projectId: t,
                        turn: h,
                        publish: s,
                        draftHasText: l,
                        idleMs: null != d ? Math.max(0, m - d) : 0,
                        hasPublished:
                            null !=
                            (g = (function (e) {
                                for (let t = e.length - 1; t >= 0; t--)
                                    if ("publish_notice" === e[t].kind) return e[t].created_at;
                                return null;
                            })(n)),
                        justRemixed: c?.projectEvent?.type === "remixed",
                        publishedSinceLastMessage: null != g && 0 === ct(n, g, u),
                        messagesSinceShown: (e) => {
                            let l = ce.get(`${t}:${e}`);
                            return null != l ? ct(n, l, u) : null;
                        },
                        isDismissed: (e) => cc(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(cd, () => co);
            let { callout: x, hint: v } = (function (e, t, n) {
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
                })(e, p, (e) => cc(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== p.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                ce.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                j.map((e) => ({
                    ...e,
                    options: {
                        context: p,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          if (!(null == e.dismissal || cc(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  ci.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = cu();
                                                  B.w.set(
                                                      ca,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (co++, cs.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(cS, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(u8, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: cE.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(ch, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var cM = n(52133),
    c_ = n(732159),
    cR = n(888366),
    cP = n(862026),
    cT = n(291192);
function cL(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, cP.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: cT.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: cT.Sp,
                children: [
                    (0, a.jsx)("span", { className: cT.q3 }),
                    (0, a.jsxs)("span", {
                        className: cT.g8,
                        children: [
                            (0, a.jsx)(cR.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: cT.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cT.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(aB.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, e7.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(c_.u, {
                                                                    ...t,
                                                                    title: E.intl.string(S.default["i+xjZM"]),
                                                                    subtitle: E.intl.string(S.default.fMBZmD),
                                                                    confirmText: E.intl.string(S.default.i5f3Uo),
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
                        ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
function c$(e) {
    return (0, o.bG)([eL.Ay, tn.A], () => {
        let t = eL.Ay.getProject(e);
        return null == t ? "" : (tn.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var cD = n(951465),
    cz = n(369455);
function cO(e) {
    let { projectId: t, notice: n } = e,
        l = c$(t),
        r = (0, o.bG)([eL.Ay, d.A], () => {
            let e = eL.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (d.A.getGuild(e.guild_id)?.name ?? null);
        });
    return (0, a.jsxs)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            E.intl.format(
                !0 === n.commands_failed
                    ? S.default["PrQg+B"]
                    : !0 === n.channel_skipped
                      ? S.default.ev23Cw
                      : n.update
                        ? S.default.gQzuLC
                        : null == r
                          ? S.default.MOrR29
                          : S.default["/npn7F"],
                { name: l, server: r ?? "" },
            ),
            n.update && null != n.published_revision ? (0, a.jsx)(cF, { projectId: t, notice: n }) : null,
        ],
    });
}
function cF(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(e0.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [lJ.A, eL.Ay],
                    () => {
                        let r = lJ.A.getPublishStatus(e),
                            a = eL.Ay.getProject(e);
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
                                (0, eL.jf)(a),
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
                      ? E.intl.format(S.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    C.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: cz.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, u.pX)(D.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : E.intl.format(S.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = eL.Ay.getProject(e),
                                        a = null == r ? null : (0, e0.KL)(r, l);
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
                                null != e && (0, cD.A)(e);
                            },
                        }),
              ],
          });
}
var cq = n(940874),
    cU = n(505527),
    cG = n(930390),
    cB = n(521981),
    cK = n(491182),
    cH = n(438729),
    cW = n(622868),
    cV = n(448368),
    cX = n(837528),
    cZ = n(470964),
    cY = n(715628),
    cJ = n(752636),
    cQ = n(9842),
    c0 = n(589022),
    c1 = n(994500),
    c2 = n(967198);
let c3 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function c4(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function c5(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function c6(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = c5(e, t),
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
    if (c4(r) && c4(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && c4(c5(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function c7(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([V.Ay], () => V.Ay.useReducedMotion),
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
                      for (; a > 0 && c6(t, a);) a--;
                      return a;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== a && s(u));
    let c = r && u.length < e.length,
        d = i.useRef(u);
    i.useLayoutEffect(() => {
        d.current = u;
    });
    let m = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
        if (c)
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
                                    for (; l > t + 1 && n - l < 12 && c3.has(e.charAt(l - 1));) l--;
                                    return c3.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && c6(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    m.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(m.current)
            );
    }, [c]),
        i.useEffect(() => {
            if (c)
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
        }, [c]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var c8 = n(624479),
    c9 = n(890377),
    de = n(180227);
function dt(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(de.QE, { [de.Rn]: t }),
              children: (0, a.jsx)(or.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          or.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function dn(e) {
    return eX.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: c8.CopyIcon, onClick: () => (0, eX.C)(e) }]
        : [];
}
function dl(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: c9.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: eo.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(dt, { groupStart: n, actions: [...r, ...dn(t)] });
}
function dr(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: rT.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: nS.BugIcon, onClick: r }];
    return (0, a.jsx)(dt, { groupStart: n, actions: [...i, ...dn(t), ...s] });
}
let da = (0, sO.createChannelRecord)({ id: "conjure-builder", type: D.rbe.DM }),
    di = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function ds(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(de.Yq, { [de.x1]: t }), children: e });
}
function du(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let dc = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function dd(e, t, n) {
    let { content: l } = (0, cZ.A)(e, dc),
        r = i.useMemo(() => ((0, iR.aW)(e.content) ? (0, cB.z2)(uc.U, e, dc).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: da, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(cH.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, cY.A)(s, r);
}
function dm(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, cX.m)(e, da, t.usernameProfile, l),
        u = (0, cX.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([c2.A], () => c2.A.getGuildId()),
        d = (0, o.bG)([aX.default], () => aX.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = aX.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(c0.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
            },
            [d, c, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: m,
        guildId: c ?? void 0,
    };
}
function df(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, iR.aW)(n.content)
                          ? (0, cB.z2)(uc.U, n, e).content
                          : (0, cB.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: de.GV,
                              children: [
                                  (0, a.jsx)(nA.x, {
                                      className: de.Rj,
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: c } = (0, o.cf)(
            [c1.A],
            () => ({
                isReplyAuthorBlocked: c1.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: c1.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, on.X4)(n),
        m = (0, on.X4)(t),
        f = dm(n);
    return (0, a.jsx)(cV.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: da,
        referencedMessage: { state: cQ.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: c,
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
function dh(e) {
    let { message: t, author: n } = e,
        l = dm(t);
    return (0, a.jsx)(cW.Ay, {
        message: t,
        channel: da,
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
function dg(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, uI.vm)(l),
        c = i.useMemo(() => (0, on.FT)(u, null), [u]),
        d = i.useMemo(() => nF(t), [t]),
        m = d?.body ?? t,
        f = (0, uA.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, sz.Ay)({ channelId: da.id, content: m, author: u });
            return (0, sD.rh)({ ...e, timestamp: du(n, e.timestamp), state: D.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              dp,
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
function dp(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = dd(t, l);
    return (0, a.jsx)(cK.A, {
        className: de.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(dh, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: de.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: de.GV,
                              children: [
                                  (0, a.jsx)(nA.x, {
                                      className: de.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: de.WO, children: u }),
                      ],
                  }),
        childrenAccessories: ds(i, "" !== l),
        childrenButtons: (0, a.jsx)(dl, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function dx(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: c = !1,
            buttons: d,
        } = e,
        { text: m, revealing: f } = c7(t, { streaming: (0, o.bG)([tb.A], () => c && tb.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, on.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, uI.vm)(p),
        v = i.useMemo(() => (null == r ? null : nF(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, sz.Ay)({ channelId: da.id, content: v?.body ?? r.content, author: x });
            return (0, sD.rh)({ ...e, id: r.id, timestamp: du(r.createdAt, e.timestamp), state: D.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: da.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, sz.Ay)({ channelId: da.id, content: "", author: di })),
        k = i.useMemo(
            () =>
                (0, sD.rh)({
                    ...y,
                    timestamp: du(n, y.timestamp),
                    state: D.cmJ.SENT,
                    ...(null != b ? { type: D.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        N = i.useMemo(
            () => (0, cJ.A)({ message: k, channel: da, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        C = dd(w, m, de.OS);
    return (0, a.jsxs)("div", {
        className: de.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(cK.A, {
                className: de.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(df, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: ds(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: de.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(Y.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
var dv = n(981879);
function dj(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, sD.rh)(
                    { ...(0, sz.Ay)({ channelId: da.id, content: "" }), id: `conjure:${t}`, state: D.cmJ.SENT },
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
                (tA.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: da.id,
                    messageId: l.id,
                    users: [di],
                    emoji: e,
                    reactionType: cU.v.NORMAL,
                }),
                    tA.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: da.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: cU.v.NORMAL,
                    }));
            }
            return (
                t(),
                tA.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    tA.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: dv.H,
            children: (0, a.jsx)(cG.A, {
                message: l,
                channel: da,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var db = n(616e3),
    dy = n(155899);
function dk(e) {
    let { onSelect: t, onClose: n = eP.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(ec.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(ed.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(ed.Dr, {
                          id: "restore-version",
                          label: E.intl.string(S.default.H8Jfhu),
                          icon: rT.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(ed.Dr, { id: "view-trace", label: "View Trace", icon: nS.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function dw(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: i,
            planVersion: s,
            pickedIdeaIds: u,
            secretRequestAwaiting: c,
            secretRequestStatus: d,
            settingsFloating: m = !1,
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
        j = null != v && null != p ? () => dN(v, p) : void 0,
        b =
            ((t =
                lp() && "assistant" === x.role && (0, ad.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [db.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : db.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((lf = { projectId: e, traceId: t }), [...lm])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(u8, {
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
                          void (0, eP.jA)(t, (e) => (0, a.jsx)(dk, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(dx, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(dr, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(ug, {
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
                secretRequestAwaiting: c,
                secretRequestStatus: d,
                settingsRequest: n.active || m ? void 0 : x.settingsRequest,
                publishCta: n.active ? null : x.publishCta,
                turnId: (0, ad.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != w && null != p && f
                        ? () =>
                              dN(
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
function dN(e, t) {
    (0, dy.F)({ onConfirm: () => t(e) });
}
var dC = n(288539);
function dA(e, t, n) {
    return (0, a.jsx)(dC.A, { userId: e, content: `@${t}` }, n);
}
function dS(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => (0, uI.Y_)(l), [l]);
            let r = (0, o.bG)([aX.default], () => (null == l ? null : aX.default.getUser(l)), [l]),
                a = (0, sq.tx)(r),
                s = c$(e),
                u =
                    (0, o.bG)([d.A], () => (null == t.guild_id ? null : d.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? E.intl.string(S.default.R1tPlP),
                c = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == c
                        ? E.intl.format(S.default.Lwsrhg, { app: s, server: u })
                        : E.intl.format(S.default.qqePfT, { app: s, server: u, ...c });
                case "bot_removed":
                    return null == c
                        ? E.intl.format(S.default.mT7EQG, { app: s, server: u })
                        : E.intl.format(S.default["lA/crI"], { app: s, server: u, ...c });
                case "preview_bot_removed":
                    return null == c
                        ? E.intl.format(S.default["4LVIeo"], { app: s, server: u })
                        : E.intl.format(S.default.YJOV6D, { app: s, server: u, ...c });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == c
                        ? E.intl.format(S.default["4VQfid"], { channel: e, server: u })
                        : E.intl.format(S.default.RlMIJN, { channel: e, server: u, ...c });
                }
                case "remixed":
                    return E.intl.format(S.default.mHCXtm, { source: t.source_name });
            }
        })(n, l, dA),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([e1.A], () => null != t && t.length > 0 && iS({ keys: t }, e1.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(iM, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let dE = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    r7.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, iR.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(u8, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dg, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(uu.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(uC, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(dj, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, cq.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(u8, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dx, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(uu.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(u8, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uh, {
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
                    return (0, a.jsx)(u8, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dx, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(cO, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(u8, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dx, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(dS, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(u8, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(cL, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(u8, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uh, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(u8, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uh, {
                            projectId: l,
                            steps: dI,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(dw, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, cM.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, cM.A)(e.row, t.row, ["message"]) &&
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
                (0, cM.A)(e.replyTo, t.replyTo) &&
                (0, cM.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    dI = [],
    dM = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    d_ = new WeakMap();
function dR(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function dP(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let dT = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: c,
            floatingSettingsMessageId: d,
            liveClarificationId: m,
            onRestoreVersion: f,
            scrollerRef: g,
            stickToBottomRef: p,
            pinned: x,
            onUnpin: j,
            handleRef: b,
            onShowsLatestChange: y,
        } = e,
        k = i.useRef(null),
        [w, N] = i.useState(null),
        C = i.useCallback((e) => {
            ((k.current = e), N(e));
        }, []),
        [A, I] = i.useState(null),
        M = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(M.current), []);
    let R = i.useCallback((e) => {
            (I(e), window.clearTimeout(M.current), (M.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        P = (0, o.bG)([lJ.A], () => lJ.A.getPublishStatus(t)),
        T = (0, o.bG)([aX.default], () => aX.default.getCurrentUser()?.id),
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
                                        let t = (0, ac.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = d_.get(r);
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
                        let a = !(0, ad.BL)(e),
                            i = iB({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, ac.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, ac.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && dM.test(n.prose.content)) m = !0;
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
                                        turnActive: am(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = dM.test(e.content ?? "");
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
                    (d_.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return oz(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = oF.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), oF.set(t, n)), n);
                      })),
                m,
            );
        }, [n, P, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, z] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return dR(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : dP(e, t.endKey, t.end - 1) + 1,
                a = dP(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), dR(e, a, r));
        })($, D, x),
        F = i.useRef(O),
        q = i.useRef($),
        U = i.useRef(L),
        G = i.useRef(null),
        B = i.useRef(null),
        K = i.useRef(new Set()),
        H = i.useCallback(() => {
            let e = g.current?.getScrollerNode(),
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
            G.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [g]),
        W = i.useCallback(() => {
            let e = g.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), dR(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), dR(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? dR(e, i, t.end) : null;
            })(q.current, F.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: p.current,
            });
            "older" === n ? (0, _.loadOlderHistory)(t) : null != n && z(n);
        }, [g, p, t]);
    i.useImperativeHandle(
        b,
        () => ({
            handleScroll() {
                (H(),
                    z((e) => {
                        let t = F.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    W());
            },
            recordAnchor: H,
            showLatest(e) {
                ((B.current = e ?? null), z(null));
            },
        }),
        [H, W],
    );
    let V = i.useRef(null),
        X = i.useCallback(
            (e) => {
                var n;
                let l;
                V.current = null;
                let r = k.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), z(F.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), R(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, _.loadOlderHistory)(t) && (V.current = e);
                    return;
                }
                (j(),
                    (B.current = () => {
                        (k.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            R(e));
                    }),
                    z(((n = q.current), dR(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [R, j, t],
        );
    (i.useEffect(() => {
        let e = V.current;
        null != e && X(e);
    }, [L, X]),
        i.useLayoutEffect(() => {
            if (null == w) return;
            let e = w.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), p.current ? g.current?.scrollToBottom() : H());
                });
            return (t.observe(w), () => t.disconnect());
        }, [w, H, g, p]));
    let Z = null == O.endKey;
    (i.useEffect(() => y?.(Z), [Z, y]),
        i.useLayoutEffect(() => {
            ((F.current = O), (q.current = $), (U.current = L));
        }),
        i.useLayoutEffect(() => {
            let e = g.current?.getScrollerNode(),
                t = k.current;
            if (null != e && null != t) {
                let n = G.current;
                if (p.current) g.current?.scrollToBottom();
                else if (null != n) {
                    let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === n.key,
                        ),
                        r = null == l ? 0 : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let l = B.current;
                ((B.current = null), l?.(), H(), W());
            }
            K.current = new Set($);
        }, [L, $, O.start, O.end, g, p, H, W]));
    let Y = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, ad.BL)(n) || "plan_implemented" === n.kind) return null;
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
        Q = i.useMemo(
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
        ee = i.useMemo(
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
        et = n.at(-1),
        en =
            (et?.role !== "assistant" || null == et.awaitingUser || null == et.secretRequest
                ? null
                : (0, ad.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([e1.A], () => e1.A.getSettings(t)?.secrets, [t]),
        er = (0, u4.WT)(t),
        ea = i.useMemo(() => (0, ui.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(u6.x7, u6.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: u6.Ub, children: (0, a.jsx)(tN.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: u6.x7,
            children: (0, a.jsx)(u8, { role: "assistant", children: (0, a.jsx)(dx, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(u7.Provider, {
        value: K,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: u6.x7,
            children: [
                L.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            dE,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && A === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === et;
                    return (0, a.jsx)(
                        dE,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? ee.get(n.in_reply_to) : void 0,
                            onJumpTo: X,
                            planVersion: J.get(n.render_id),
                            pickedIdeaIds: Q.get(n.render_id),
                            secretRequestAwaiting: l ? en : void 0,
                            secretRequestStatus: ea.get(n.render_id),
                            settingsFloating: n.id === d,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === Y ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                Z
                    ? er.map((e) =>
                          (0, a.jsx)(
                              u8,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(dx, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(u5.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && Z
                    ? (0, a.jsx)(u8, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(dx, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.string(S.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                Z ? (0, a.jsx)(cI, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var dL = n(731084),
    d$ = n(823376),
    dD = n(187447);
function dz(e) {
    let { activity: t, id: n } = e,
        l = (0, au.j)(),
        { text: r, revealing: s } = c7(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: dD.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(as.Ch, {
                ref: o,
                className: dD.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(uf.PT, dD.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: sW.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var dO = n(53659);
function dF(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: o = !1,
            controlling: u = !1,
            publishPending: c = !1,
            publishing: d = !1,
            spoken: m,
            onSpokenChange: f,
        } = e,
        g = i.useRef(null),
        p = i.useId(),
        [x, j] = i.useState(null),
        b = (0, dL.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: o,
            controlling: u,
            publishPending: c,
            publishing: d,
        }),
        y = E.intl.string(b),
        k = b === dL.kx["0"],
        [w, N] = i.useState(m ?? y),
        A = (0, au.j)();
    (l || (0, dL.E4)(y, w) || (!A && !k)) && w !== y && N(y);
    let I = i.useRef(y);
    (i.useEffect(() => {
        I.current = y;
    }, [y]),
        i.useEffect(() => {
            f?.(w);
        }, [w, f]));
    let M = i.useRef(null),
        _ = i.useRef(w);
    i.useEffect(() => {
        _.current = w;
    }, [w]);
    let R = i.useRef(k),
        P = i.useRef(0);
    (i.useEffect(() => {
        ((R.current = k), !k && (0, dL.E8)(_.current) && N(I.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                R.current
                    ? ((P.current = (0, dL.E8)(_.current) ? P.current + 1 : 0), N((0, dL.Ov)(P.current)))
                    : I.current !== _.current
                      ? N(I.current)
                      : M.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, dL.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [A]));
    let T = null != t && "" !== t.text,
        L = t?.session ?? null,
        $ = T && null != L && x === L,
        D = i.useCallback(() => {
            T && null != L && j((e) => (e === L ? null : L));
        }, [T, L]),
        z = i.useCallback(() => j(null), []);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: z,
        renderPopout: () => (0, a.jsx)(dz, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: g,
                className: h()(dO.hF, T && dO.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : k
                            ? dL.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: dO.bl,
                        children: (0, a.jsx)(d$.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: dO.xu,
                        "aria-hidden": !!u || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(up.o, {
                                  ref: M,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: dL.vg,
                                  delay: null,
                                  className: dO.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: dO.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let dq = { second: 1e3, minute: 6e4 };
function dU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = dq[t];
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
var dG = n(719374);
function dB(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = dU(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: dG.$,
        "data-conjure-turn-timer": !0,
        children: (0, iJ.C7)(l),
    });
}
function dK(e) {
    let { startedAt: t } = e,
        n = dU(t, "minute");
    return (0, a.jsx)(ax.A, { role: "timer", children: (0, iJ.Us)(n) });
}
var dH = n(885574),
    dW = n(242779),
    dV = n(436804);
function dX(e) {
    return e.toLocaleString();
}
function dZ(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: dV.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: dV.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [dX((0, dW.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    dX(n.input_tokens),
                    " in \xb7 ",
                    dX(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${dX(n.cache_creation_input_tokens)} cache write \xb7 ${dX(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function dY(e) {
    let { project: t } = e,
        n = (0, dW.wU)(t.compaction),
        l = (0, dW.wU)(t.classifier),
        r = (0, dW.wV)(t.orchestrator, t.codegen),
        i = (0, dW.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: dV.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: dV.Q$,
                children: (0, a.jsxs)("div", {
                    className: dV.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [dX((0, dW.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(dZ, { label: E.intl.string(S.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(dZ, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(dZ, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: dV.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, dW.sj)(i) ? "\u2014" : `${Math.round(100 * (0, dW.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function dJ(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(dY, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: dV.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(dH.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var dQ = n(997421);
function d0(e) {
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
            projectUsage: f,
            connState: h,
        } = e,
        g = (0, lx.Zv)(t),
        p = (0, o.bG)([lJ.A], () => lJ.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, dL.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, dL.uc)(f),
        k = null != s,
        w = s ?? (n ? l : void 0),
        N = n || r || k || !0 === m;
    return (0, a.jsxs)("div", {
        className: dQ.jf,
        children: [
            (0, a.jsxs)("div", {
                className: dQ.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || g || p
                        ? (0, a.jsx)(dF, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: k,
                              recalling: u,
                              controlling: g,
                              publishPending: p && N,
                              publishing: p,
                              spoken: x,
                              onSpokenChange: b,
                          })
                        : null,
                    null != w ? (0, a.jsx)(dB, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(dK, { startedAt: w }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: dQ.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(dJ, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, dL.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: dQ.XF,
                      children: (0, dL.Db)(h),
                  }),
        ],
    });
}
let d1 = ["wheel", "touchstart", "pointerdown", "keydown"];
var d2 = n(608711);
let d3 = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function d4(e) {
    let t,
        n,
        { projectId: l, restoreState: r, onRestoreVersion: s, onImportProject: u } = e,
        c = (0, o.bG)([ld.A], () => ld.A.getMessages(l), [l]),
        m = (0, o.bG)([_.default], () => _.default.getConnState(l), [l]),
        f = (0, o.bG)([ld.A], () => ld.A.getProjectUsage(l), [l]),
        h = (0, o.bG)([ld.A], () => ld.A.getThinkingActivity(l), [l]),
        g = (0, o.bG)([ld.A], () => ld.A.isCompacting(l), [l]),
        p = (0, o.bG)([ld.A], () => ld.A.isSaving(l), [l]),
        x = (0, o.bG)([iw.A], () => iw.A.getModelSettings(l), [l]),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        {
            stickToBottomRef: w,
            pinned: C,
            atBottom: A,
            unpin: I,
            releasePinHold: M,
            showsLatest: R,
            showsLatestRef: P,
            handleShowsLatestChange: T,
            updatePin: L,
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
                    for (let e of d1) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of d1) t.removeEventListener(e, u);
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
        })(y),
        $ = i.useCallback(() => {
            function e() {
                let e = b.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (M(), P.current ? e() : k.current?.showLatest(e));
        }, [M, P]),
        D = i.useCallback(() => {
            (L(), k.current?.handleScroll());
        }, [L]);
    (i.useLayoutEffect(() => {
        let e = b.current;
        if (null == e) return;
        let t = y.current?.getScrollerNode(),
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
                r && (w.current ? y.current?.scrollToBottom() : k.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [w]),
        i.useEffect(() => {
            (0, _.ensureConnection)(l);
        }, [l]),
        (0, iP.E1)(l, (0, au.j)()));
    let z = nJ(l),
        O = (function (e) {
            let t = (0, e0.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, o.bG)([d.A], () => (null == n ? null : (d.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: E.intl.format("channel" === s ? S.default["1cm4fj"] : S.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(l),
        F =
            ((t = (0, o.bG)([iC.A], () => iC.A.getFailure(l))),
            (n = i.useCallback(() => (0, iA.CM)(l), [l])),
            null == t
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: t }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: n },
                  }),
        q = (0, o.bG)([iC.A], () => iC.A.getSetupStartedAt(l), [l]),
        U = i.useCallback(
            (e, t) => {
                (0, _.sendUserMessage)(l, e, t);
            },
            [l],
        ),
        G = i.useCallback(
            (e, t, n) => {
                let r = n ?? U;
                0 === z.annotations.length
                    ? r(e, t)
                    : (r(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => nT(e.comment)),
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
                                      a.push(`${t + 1}. ${nD(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: z.annotations, metaComment: e, context: z.context }),
                          t,
                      ),
                      nV(l));
            },
            [z, U, l],
        ),
        B = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of r6)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, _.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = r6.get(e);
                            (r6.delete(e), r8(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(l) ||
                ld.A.isThinking(l)) &&
                (0, _.interruptTurn)(l);
        }, [l]),
        K = i.useCallback((e) => tq(l, e.implementation_prompt), [l]),
        [H, V] = (function (e) {
            let [t, n] = i.useState(() => iU(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? iU(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(l),
        X = i.useCallback(() => U(E.intl.string(S.default["t5CN3+"])), [U]),
        Z = i.useCallback((e, t, n) => tq(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        Y = i.useCallback((e) => (0, iN.X)(l, e), [l]),
        J = i.useCallback((e) => (0, eh.vX)(l, e), [l]),
        Q = i.useCallback((e) => tH(l, "chat", Array.from(e), J), [l, J]),
        ee = i.useCallback(() => tq(l, E.intl.string(S.default.Zc7gML)), [l]),
        et = r?.status === "restoring",
        el = "open" === m && !et,
        er = c[c.length - 1],
        ea = null != er && "assistant" === er.role && null != er.proposal,
        [ei, eu] = i.useState(null),
        ec = er?.clarification != null && er.clarification.id !== ei ? er.clarification : null,
        ed = i.useCallback(() => {
            null != ec && eu(ec.id);
        }, [ec]),
        [em, ef] = i.useState(null),
        eg = (function (e) {
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
                                summary: E.intl.string(S.default["o2++BO"]),
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
        })(l),
        ep = er?.appBuildRequest != null && (0, ad.BL)(er) && er.appBuildRequest.id !== em ? er.appBuildRequest : null,
        ex = eg.request ?? (null == ec ? ep : null),
        ev = null == eg.request ? ec : null,
        ej = null != ex && ex === eg.request,
        { close: eb, sent: ey } = eg,
        ek = eg.request?.id,
        ew = i.useCallback(() => {
            ej ? eb() : null != ex && ef(ex.id);
        }, [ex, ej, eb]),
        eN = i.useCallback(
            (e) => {
                (null != ek && ey(ek),
                    (0, es.P0)({
                        text: E.intl.formatToPlainString(S.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [ek, ey],
        ),
        eC = (0, o.bG)([e1.A], () => e1.A.getSettings(l), [l]),
        [eA, eS] = i.useState(null),
        eE =
            null != er &&
            "assistant" === er.role &&
            null != er.settingsRequest &&
            (0, ad.BL)(er) &&
            er.id !== eA &&
            iS(er.settingsRequest, eC)
                ? er
                : null,
        eI = null == eg.request ? eE : null,
        eM = eI?.settingsRequest ?? null,
        e_ = i.useCallback(() => {
            null != eE && eS(eE.id);
        }, [eE]),
        eR = null != eM,
        [eP, eT] = i.useState(null),
        eL = ev?.id ?? ex?.id ?? eI?.id,
        e$ = null != ec || null != ex || null != eE;
    i.useLayoutEffect(() => {
        let e = y.current?.getScrollerNode(),
            t = eP?.firstElementChild;
        if (null == eP || null == e || !(0, en.vq)(t, HTMLElement) || null == eL) return;
        function n() {
            w.current && y.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eP.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eP, eL, y, w]);
    let eD = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, o.bG)([ld.A], () => ld.A.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, o.bG)([ld.A], () => ld.A.isHistoryUnavailable(l), [l]),
            connState: m,
        }),
        ez = "loading" === eD && 0 === c.length,
        eO = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return d3[e % d3.length];
        }, [l]),
        eF = ea ? E.intl.string(S.default.Zc7gML) : "greeting" === eD && 0 === c.length ? eO : null,
        eq = i.useMemo(() => {
            for (let e = c.length - 1; e >= 0; e--) {
                let t = c[e];
                if ("assistant" === t.role && !(0, ad.BL)(t)) return t;
            }
        }, [c]),
        eU = null != eq,
        eG =
            null != eq
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = i_.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eq)
                : void 0,
        eB = ea && el ? ee : void 0,
        eH = i.useCallback(() => tq(l, E.intl.string(S.default.EMgIuY)), [l]),
        [eW, eV] = i.useState(null),
        [eX, eZ] = i.useState(eU);
    (eX !== eU && (eZ(eU), eU || eV(null)),
        i.useEffect(() => {
            if (!eU) return;
            let e = y.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eV(null)
                        : eV(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eU, eq?.steps, R]));
    let eY = R ? eW : "bottom",
        eJ = i.useMemo(() => (null != eq ? (0, af.b9)(eq.steps) : ""), [eq]),
        eQ = i.useMemo(() => (null != eq ? ((0, ac.lt)(eq.steps) ?? eq.todos) : void 0), [eq]),
        e2 = eq?.provisionalTodo,
        e3 = null != eq && am(eq),
        e4 = i.useMemo(() => {
            var e;
            return null != eq ? ((e = eq.steps), i3((0, ac.Jf)(e, !0).tasks)) : void 0;
        }, [eq]);
    return (0, a.jsxs)("section", {
        ref: b,
        "data-conjure-chat": !0,
        className: d2.TE,
        children: [
            el
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: nb.ir,
                      onDrop: Q,
                  })
                : null,
            (0, a.jsx)(aR, {
                onJumpToActivity: $,
                line: eJ,
                placement: eU && "top" === eY ? "top" : null,
                todos: eQ,
                todosLive: e3,
                provisionalTodo: e2,
                agents: e4,
            }),
            (0, a.jsxs)("div", {
                className: d2.JX,
                children: [
                    (0, a.jsx)(as.Ch, {
                        ref: y,
                        onScroll: D,
                        scrollbarGutter: ez ? "both-edges" : "stable",
                        className: [d2.N$, A ? null : d2.hB, eR ? d2.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(iR.Fu.Provider, {
                            value: l,
                            children: (0, a.jsx)(dT, {
                                projectId: l,
                                messages: c,
                                emptyState: eD,
                                floatingSettingsMessageId: eE?.id,
                                liveClarificationId: ev?.id,
                                onPickIdea: el ? K : void 0,
                                onAskForIdeas: el ? X : void 0,
                                draftHasText: H,
                                onApprovePlan: el ? eH : void 0,
                                onRestoreVersion: et || eU ? void 0 : s,
                                scrollerRef: y,
                                stickToBottomRef: w,
                                pinned: C,
                                onUnpin: I,
                                handleRef: k,
                                onShowsLatestChange: T,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: d2.NJ,
                        children: (0, a.jsx)(d0, {
                            projectId: l,
                            thinking: eU,
                            turnStartedAt: eG,
                            restoring: et,
                            remixStartedAt: q,
                            recalling: ez,
                            thinkingActivity: h,
                            compacting: g,
                            saving: p,
                            projectUsage: f,
                            connState: m,
                        }),
                    }),
                    null == ev
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eT,
                              className: eR ? `${d2.B5} ${d2.J9}` : d2.B5,
                              children: (0, a.jsx)(
                                  ik,
                                  { projectId: l, clarification: ev, onSubmit: el ? Z : void 0, onDismiss: ed },
                                  ev.id,
                              ),
                          }),
                    null == ex
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eT,
                              className: d2.B5,
                              children: (0, a.jsx)(
                                  aq,
                                  { projectId: l, request: ex, canSend: el, onDismiss: ew, onSent: ej ? eN : void 0 },
                                  ex.id,
                              ),
                          }),
                    null == eM
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == ev && null == ex ? eT : void 0,
                              className: d2.B5,
                              children: (0, a.jsx)(iM, { projectId: l, request: eM, onDismiss: e_ }, eI?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: d2.Jx,
                children: [
                    (0, a.jsx)(aR, {
                        onJumpToActivity: $,
                        line: eJ,
                        placement: eU && "bottom" === eY ? "bottom" : null,
                        todos: eQ,
                        todosLive: e3,
                        provisionalTodo: e2,
                        agents: e4,
                    }),
                    0 === z.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: d2.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(S.default["7b49dS"], {
                                          count: z.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(S.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(W.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(S.default["/zOv9+"]),
                                      onClick: () => nV(l),
                                  }),
                              ],
                          }),
                    null == F
                        ? null
                        : (0, a.jsx)("div", {
                              className: d2.qB,
                              children: (0, a.jsx)(ao.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: F.message,
                                  action: F.retry,
                              }),
                          }),
                    null == O
                        ? null
                        : (0, a.jsxs)("div", {
                              className: d2.Db,
                              children: [
                                  (0, a.jsx)(ao.w, { type: "warning", role: "status", message: O.message }),
                                  (0, a.jsx)("div", {
                                      className: d2.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(eK.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: eo.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: O.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(u1, {
                        projectId: l,
                        canSend: el,
                        running: eU,
                        restoring: et,
                        onSend: G,
                        hasPendingContext: z.annotations.length > 0,
                        onInterrupt: el ? B : void 0,
                        onUploadFile: J,
                        onImport: u,
                        onSendToOtherProjects: e$ ? void 0 : eg.open,
                        onApprove: eB,
                        suggestion: eF,
                        questionOpen: e$,
                        modelSettings: x,
                        onModelSettingsChange: Y,
                        onDraftHasTextChange: V,
                    }),
                ],
            }),
        ],
    });
}
var d5 = n(761508),
    d6 = n(933294),
    d7 = n(207438),
    d8 = n(683438);
function d9(e, t) {
    return String(e).padStart(t, "0");
}
function me(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${d9(l.getHours(), 2)}:${d9(l.getMinutes(), 2)}:${d9(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${d9(l.getMilliseconds(), 3)}` : r;
}
var mt = n(667931);
let mn = {
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
    ml = { running: "Running", ok: "Done", error: "Failed" };
function mr(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function ma(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function mi(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function ms(e) {
    return ma(e.count > 1 ? e.totalMs : e.end - e.start);
}
let mo = ["Arguments", "Result", "Usage", "Details"];
function mu(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function mc(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function md(e) {
    let t = (0, mt.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, mt.lp)(e) ? "interrupted" : "still running";
}
function mm(e) {
    return [me(new Date(e.started_at).toISOString()) ?? "", mi(e.spans.length), (0, mt.Sj)((0, mt.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function mf(e) {
    let t = (0, mt.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, mt.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += mh(r, "in")),
                (l.output += mh(r, "out")),
                (l.cacheRead += mh(r, "cache_read")),
                (l.cacheWrite += mh(r, "cache_write")),
                (l.costUsd += mh(r, "cost_usd"))));
    }
    let r = mt.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function mh(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var mg = n(738188),
    mp = n(430993),
    mx = n(364840),
    mv = n(224640),
    mj = n(20742);
let mb = { collapsed: new Set(), revealed: new Set() };
var my = n(872892);
let mk = {
    op: my.Q,
    model: my.i3,
    tool: my.dH,
    setup: my.kc,
    worktree: my.Qx,
    sandbox: my.QH,
    build: my.F1,
    platform: my.Op,
    other: my.fv,
};
function mw(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      mi(t.calls, "model call"),
                      `${mr(t.input)} in`,
                      `${mr(t.output)} out`,
                      `${mr(t.cacheRead)} cache read`,
                      `${mr(t.cacheWrite)} cache write`,
                      mc(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: my.M1,
        children: [
            (0, a.jsx)("div", {
                className: my.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${my.DJ} ${mk[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: my.o1,
                children: mt.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${ma(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: my.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${my.nf} ${mk[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: mn[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(v.E, {
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
                : (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function mN(e) {
    return `conjure-perf-trace-${e}`;
}
function mC(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: my.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${my.p0} ${s + o > 85 ? my.EU : my.jh}`,
                children: i,
            }),
        ],
    });
}
function mA(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? tZ._ : t7.a,
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
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: mN(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${my.$y} ${r ? my.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: my.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: my.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: my.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: my.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${my.nf} ${mk[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: my.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: my.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: my.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(mg.WarningIcon, { size: "xs", color: "currentColor", className: my.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(mC, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${my.M0} ${my.Nh}`
                    : t.running
                      ? `${my.M0} ${my.rF}`
                      : `${my.M0} ${mk[t.category]}`,
                duration: ms(t),
            }),
        ],
    });
}
function mS(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: mN(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${my.$y} ${l ? my.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: my.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: my.ai,
                        children: (0, a.jsx)(tZ._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: my.U9 }),
                    (0, a.jsx)("span", { className: `${my.nf} ${my.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: my.MQ,
                        children: mi(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(mC, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${my.M0} ${my.ab} ${my.dL}`,
                duration: ma(t.totalMs),
            }),
        ],
    });
}
function mE(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: my._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: my.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${my.nf} ${mk[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [mu("Start", `+${ma(e.start)}`), mu("Duration", ms(e))];
                      e.count > 1
                          ? t.push(
                                mu("Calls", String(e.count)),
                                mu("Longest call", ma(e.maxMs)),
                                mu("Spread over", ma(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(mu("Self time", ma(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(mu("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(mu("Notes", l.join(", "))),
                          null != e.span.error && t.push(mu("Error", e.span.error)));
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
                              s = "cost_usd" === t ? mc(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), mu(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...mo.flatMap((e) => {
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
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: my.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(v.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: my.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(v.E, {
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
function mI(e) {
    let { trace: t } = e,
        n = i.useMemo(() => mf(t), [t]);
    return (0, a.jsx)(mw, { stats: n });
}
function mM(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, mt.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? mb : (0, mt.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, mt.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, mt.x7)(t)), l((n) => (0, mt._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, mt.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mt.IE)(t, e);
                        null != n && l((e) => (0, mt.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mt.IE)(t, e);
                        null != n && l((e) => (0, mt.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, mt.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, mt.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, mt.hB)(t));
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
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: m } = n,
        f = (0, mt.dj)(t),
        h = i.useMemo(() => (0, mt.nF)(f), [f]),
        g = h.length > 1 ? ((h[1] - h[0]) / f) * 100 : 100,
        p = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === o),
                    a = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == a) return;
                else if ("smaller" === a.kind && ("ArrowRight" === e.key || "Enter" === e.key)) d(a.parentKey);
                else if ("node" === a.kind && "ArrowRight" === e.key && e.shiftKey) m(a.key);
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) c(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    c(a.key);
                }
                (e.preventDefault(),
                    null != t && (u(t.key), document.getElementById(mN(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(mp.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: my.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: md(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: mm(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${mi(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(mI, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: my.KE,
                        children: [
                            (0, a.jsx)(W.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(W.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(W.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(v.E, {
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
                        "aria-activedescendant": null == o ? void 0 : mN(o),
                        className: my.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: my.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: my.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: my.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${my.io} ${(e / f) * 100 > 85 ? my.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : ma(e),
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
                                          mA,
                                          {
                                              node: e.node,
                                              extent: f,
                                              collapsed: r.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(mS, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(mx.j, { children: (0, a.jsx)(mE, { node: s }) }),
        ],
    });
}
function m_(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([db.A], () => db.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(mv.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(mj.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(mp.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(mM, { trace: i }),
        ],
    });
}
let mR = { running: my.Vf, ok: my.mo, error: my.Sr };
function mP(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${my.Om} ${mR[t]}`, role: "img", "aria-label": ml[t] });
}
function mT(e, t) {
    (0, e7.openModal)((n) => (0, a.jsx)(m_, { ...n, projectId: e, traceId: t }));
}
function mL(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => mT(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: my.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: my.sU,
                children: [
                    (0, a.jsx)(mP, { status: (0, mt.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: my._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: md(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: mm(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function m$(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            ev(
                new Blob(
                    [
                        JSON.stringify({
                            kind: "conjure.timing_traces",
                            version: 1,
                            project_id: t,
                            exported_at: new Date().toISOString(),
                            traces: n,
                        }),
                    ],
                    { type: "application/json" },
                ),
                `conjure-traces-${t}.json`,
            ).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eu.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(ec.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(ed.rX, {
                    children: (0, a.jsx)(ed.Dr, {
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
            return (0, a.jsx)(eK.K, {
                ...e,
                buttonRef: l,
                icon: eH.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function mD(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([db.A], () => db.A.getTimingTraces(t), [t]),
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
                    let t = e.map(mf);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: mt.BF.map((e) => ({
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
              className: my.Ie,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: my.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: my.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: my.fH,
                              children: (0, a.jsx)(d8.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(m$, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(as.Ch, {
                      className: my.XG,
                      children: [
                          (0, a.jsx)(mw, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: my.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(mL, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function mz(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function mO(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function mF(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function mq(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function mU(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function mG(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let mB = ["all", "preview", "stable", "web"];
function mK(e) {
    switch (e.reason) {
        case "local":
            return E.intl.string(S.default.mUeKML);
        case "unconfigured":
            return E.intl.string(S.default.bGefb5);
        case "unauthorized":
            return E.intl.string(S.default.KLx6Bb);
        default:
            return null != e.detail
                ? E.intl.formatToPlainString(S.default.t09Q6q, { detail: e.detail })
                : E.intl.string(S.default["t+tG59"]);
    }
}
function mH(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: mz(e.memory_p50_bytes ?? 0),
              p999: mz(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let mW = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var mV = n(911608),
    mX = n(177427);
function mZ(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mX.KE,
        children: [
            (0, a.jsx)("div", {
                className: mX.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(tN.y, { type: tN.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: E.intl.string(S.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: mq(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(W.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function mY(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: mX.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: mX.Gf, children: t }),
            n,
        ],
    });
}
function mJ(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: mX.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mX.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: mX.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: mX.kS,
                        children: [
                            s,
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function mQ(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: mX.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mX.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(mV.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? mX.dh : void 0,
            }),
        ],
    });
}
function m0(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(mJ, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: mK(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(mJ, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = mH(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(mJ, { label: E.intl.string(S.default["H/X+FI"]), value: mO(n.cpu_ms) }),
            null != l && (0, a.jsx)(mJ, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function m1(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(mY, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: mK(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? mW[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(mY, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          mJ,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: mO(t.cpu_ms) }),
                              hint: mH(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var m2 = n(678708),
    m3 = n(414499),
    m4 = n(714800),
    m5 = n(81466),
    m6 = n(424383),
    m7 = n(816943),
    m8 = n(268791),
    m9 = n(514042),
    fe = n(872351),
    ft = n(708988),
    fn = n(150934),
    fl = n(417270);
let fr = "Restart Agent",
    fa = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fi(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fs(e, t) {
    return { label: e, value: null != t && "" !== t ? mq(t) : "Unknown", icon: "calendar" };
}
function fo(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fu(e, t, n, l) {
    let [r, a] = fa[n.status];
    return { label: e, value: `${fo(n.bytes)} of ${fo(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function fc(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = mq(e.at);
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
let fd = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fm(e) {
    let t = `container ${fi(e.local)} \xb7 remote ${fi(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fd[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${mF(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${mF(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${mF(n)} Ahead, ${mF(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let ff = ["main", "wip"];
var fh = n(400154);
let fg = {
        checkout: m2.FolderIcon,
        edit: aG.PencilIcon,
        remote: m3.h,
        commits: m4.e,
        calendar: m5.CalendarIcon,
        save: m6.L,
        objects: eS.R,
        download: m7.$,
        size: m8.$,
        file: m9.FileIcon,
    },
    fp = {
        ok: [ni.y, w.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [mg.WarningIcon, w.A.colors.ICON_FEEDBACK_WARNING],
        error: [tC.a, w.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [fe.z, w.A.colors.ICON_MUTED],
        behind: [ft.M, w.A.colors.ICON_MUTED],
    };
function fx(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([db.A], () => db.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, d7.DK)(t), [t]),
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
                    `Updated ${mq(r)}`,
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
    return (0, a.jsxs)(mY, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fh.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(v.E, {
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
                    if (!e.running || null != e.localError) return [fc(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fc(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : mF(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = ff.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fm))
                        : l.push(
                              { label: "Main", value: fi(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fi(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? mF(e.commits) : "Unknown", icon: "commits" },
                            fs("Oldest Commit", e.oldest),
                            fs("Newest Commit", e.newest),
                            fc(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${mF(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${mF(t.loose)} loose (${mz(t.looseBytes)}) \xb7 ${mF(t.packed)} packed in ${n} (${mz(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${mF(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${mF(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                fu(
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
                                  fu("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fg[r],
                        [o, u] = null != i ? fp[i] : [null, void 0];
                    return (0, a.jsx)(
                        mJ,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: w.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function fv(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([db.A], () => db.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, d7.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = db.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, d7.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                tA.h.dispatch({
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
            let u = i.useCallback(() => (0, d7.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fr,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eT.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: fh.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fh.nM,
                children: [
                    (0, a.jsx)(fn.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(W.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fl.RetryIcon,
                        text: fr,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(v.E, {
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
                            return `Restarted \xb7 new instance since ${mq(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${mq(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fj(e, t) {
    return (0, a.jsx)(mJ, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: mF((0, dW.aM)(t)) }),
        hint: `${mF(t.input_tokens)} in \xb7 ${mF(t.output_tokens)} out \xb7 ${mF(t.cache_read_input_tokens)} cache read`,
    });
}
function fb(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([db.A], () => db.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([db.A], () => db.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([db.A], () => db.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([db.A], () => db.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, d7.Lj)(t), [t]),
        f = i.useCallback(() => (0, d7.Lj)(t, !0), [t]),
        h = (0, o.bG)([db.A], () => db.A.getSandboxRestartState(t), [t]),
        g = (0, o.bG)([ld.A], () => ld.A.isThinking(t), [t]),
        p = i.useCallback(() => (0, d7.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: fh.Mf,
        children: [
            (0, a.jsx)(mZ, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(mY, {
                title: E.intl.string(S.default.JghNal),
                children:
                    null == x
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(mJ, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: mF((0, dW.a7)(x.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: mF(x.turns) }),
                                  }),
                                  fj(E.intl.string(S.default.xtxP0e), x.orchestrator),
                                  fj(E.intl.string(S.default["9Sj3SX"]), x.codegen),
                                  fj(E.intl.string(S.default.ANCEo3), (0, dW.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(mJ, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${mF(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(mY, {
                title: E.intl.string(S.default.dZHPE5),
                children:
                    null == s
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  fj(E.intl.string(S.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(mJ, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, dW.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(mY, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != u && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(mQ, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: mF,
                                  }),
                                  (0, a.jsx)(mJ, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${mF(u.tokensBefore)} \u{2192} ${mF(u.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: mF(u.retainedMessages),
                                          time: mq(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: mF(y) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(mJ, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${mF(c.projected)} / ${mF(c.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: mq(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fh.Lj,
                        children: [
                            (0, a.jsx)(W.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: m,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof d && "compacted" !== d.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(S.default.wox6Ev);
                                    if ("pending" === e) return E.intl.string(S.default.OcPHQ1);
                                    let t = mq(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return E.intl.formatToPlainString(S.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? S.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? S.default.YZb4hK
                                              : S.default.ZoUSVK;
                                    return E.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(d),
                            }),
                            "object" == typeof d &&
                                !0 === d.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(W.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: E.intl.string(S.default.ZxG2AI),
                                            onClick: f,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: E.intl.string(S.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: fh.Lj,
                        children: [
                            (0, a.jsx)(W.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || g,
                                onClick: p,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof h && "restarted" !== h.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(S.default.mlok8D);
                                    if ("pending" === e) return E.intl.string(S.default["1ugSyK"]);
                                    let t = mq(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fv, { projectId: t }),
                ],
            }),
            (0, a.jsx)(fx, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(mY, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(mJ, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: mq(b.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(mJ, { label: E.intl.string(S.default["8V8e1Z"]), value: mF(b.sockets) }),
                                    (0, a.jsx)(mJ, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(mJ, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: mF(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(m0, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(mY, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(mJ, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: mF(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(mJ, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: mF(j.context_window_tokens) }),
                        }),
                        (0, a.jsx)(mJ, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: mF(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(mJ, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: mF(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(mJ, { label: E.intl.string(S.default.kIHga0), value: mF(j.max_build_attempts) }),
                        (0, a.jsx)(mJ, { label: E.intl.string(S.default.Iw03yW), value: mF(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fy = n(237528),
    fk = n(629584),
    fw = n(531893);
function fN(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fw.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function fC(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fw.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: E.intl.string(S.default.h1SE6R),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: fw.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fA(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fw.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var fS = n(109079);
let fE = i.memo(function (e) {
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
        className: fS.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fS.Mt,
                selectable: !0,
                children: me(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fS.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fS.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fS.Cq, children: (0, a.jsx)(fy.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fS.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fy.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(C.D, {
                                      className: fS.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(S.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(t7.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(tZ._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  E.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? S.default.kUhyUv : S.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(v.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: fS.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
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
function fI(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([d6.A], () => d6.A.getLogs(t), [t]),
        l = (0, o.bG)([d6.A], () => d6.A.getHistoryState(t, "logs")),
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
                mB.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return mG(e);
                            case "web":
                                return E.intl.string(S.default.IVzfVV);
                            default:
                                return E.intl.string(S.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: fS.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fS.y4,
                children: [
                    (0, a.jsx)(fk.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fS.KT,
                        children: (0, a.jsx)(d8.I, {
                            query: u,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: E.intl.string(S.default["m2+37Y"]),
                            "aria-label": E.intl.string(S.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(fN, { state: l }),
            (0, a.jsxs)(as.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: fS.sx,
                children: [
                    (0, a.jsx)(fA, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fC, {
                              state: l,
                              emptyTitle: E.intl.string(S.default.S7qlPG),
                              emptyBody: E.intl.string(S.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: E.intl.string(S.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(fE, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fM(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(mY, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: E.intl.string(S.default.umcjif),
                      }),
        })
    );
}
function f_(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(mJ, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: mG(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(mJ, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: mF(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${mq(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(mJ, { label: E.intl.string(S.default.Iz5GnJ), value: mF(l.guild_count) }),
                  (0, a.jsx)(mJ, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: mF(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: mq(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(mJ, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: mF(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(mJ, { label: mG(n), value: E.intl.string(S.default.lTHQss) });
}
function fR(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(mJ, {
        label: mG(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: mF(n.requests),
            failures: mF(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: mq(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: mq(n.since) }),
    });
}
function fP(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(mJ, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: mG(t) }),
                value: mF(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    mJ,
                    {
                        label: E.intl.formatToPlainString(S.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? E.intl.formatToPlainString(S.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: mq(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fT(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(mJ, {
        label: mG(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: mF(n.calls), errors: mF(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fL(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(mY, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(mY, {
        title: t,
        children: [
            (0, a.jsx)(mJ, {
                label: E.intl.string(S.default.xtD4Zp),
                value: mF(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: mq(n.since) }),
            }),
            (0, a.jsx)(mJ, { label: E.intl.string(S.default.gfRhR3), value: mF(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mQ, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: mO,
                          }),
                          (0, a.jsx)(mJ, {
                              label: E.intl.string(S.default.mSKImM),
                              value: mO(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: mO(n.cpu_ms_total),
                                  wall: mO(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(mJ, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(mJ, { label: E.intl.string(S.default.xvmL1D), value: mO(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(mJ, { label: E.intl.string(S.default["4sQYwH"]), value: mF(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(mJ, {
                label: E.intl.string(S.default.bQenOy),
                value: mF(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(mJ, { label: E.intl.string(S.default.xgpn4Y), value: mU(n.build) }),
        ],
    });
}
function f$(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(mY, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(mJ, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(mJ, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: mz(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: mF(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(mQ, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: mz,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fD(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fh.Mf,
        children: [
            (0, a.jsx)(mZ, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fL, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fL, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(f$, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(fM, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f_, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(fM, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fR, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(fM, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fP, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(fM, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fT, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(m1, { analytics: t.analytics }),
                        (0, a.jsxs)(mY, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(mJ, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? mU(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(mJ, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? mU(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fz = n(592465);
function fO(e) {
    let { projectId: t, onClose: n } = e,
        l = lp(),
        [r, s] = i.useState(() => (l && lf?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([db.A], () => db.A.getStatus(t), [t]),
        c = (0, o.bG)([db.A], () => db.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, d7.R7)(t), (0, d7.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, _.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == lf || lf.projectId !== e) return null;
            let { traceId: t } = lf;
            return ((lf = null), t);
        })(t);
        return null != e && (mT(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        lh(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, eX.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: db.A.getStatus(t),
                        last_turn_usage: db.A.getLastTurnUsage(t),
                        last_compaction: db.A.getLastCompaction(t),
                        last_compaction_decline: db.A.getLastCompactionDecline(t),
                        timing_traces: db.A.getTimingTraces(t),
                        logs: d6.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, es.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: fz.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(rk.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(rk.Ay.Icon, {
                            icon: c8.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(rk.Ay.Icon, { icon: eo.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(rk.Ay.ChannelIcon, { icon: nS.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(rk.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: fz.rf,
                children: [
                    (0, a.jsxs)(d5.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: fz.vR,
                        children: [
                            (0, a.jsx)(d5.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(d5.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(d5.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(d5.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(fI, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fD, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(mD, { projectId: t })
                            : (0, a.jsx)(fb, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fF = n(365912),
    fq = n(873715);
function fU(e) {
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
function fB(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fU(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fK = n(192888);
function fH(e, t) {
    return (0, fK.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fB, () => ({ status: "failed" }));
}
var fW = n(108308);
let fV = { x: 25, y: 21 };
function fX(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fZ(e, t, n, l) {
    let r = fX(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fY(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fJ(e) {
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
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nJ(u),
        m = (0, lx.Zv)(u),
        f = (0, e7.useHasAnyModalOpen)(),
        h = (0, o.bG)([aX.default], () => aX.default.getCurrentUser()),
        g = h?.id ?? null,
        [p, x] = i.useState(null),
        [j, b] = i.useState(!1),
        [y, k] = i.useState(!1),
        [w, N] = i.useState(null),
        [C, A] = i.useState(!1),
        I = i.useRef(null),
        M = i.useRef(null),
        R = i.useRef(null),
        [P, T] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, z] = i.useState(null),
        [O, F] = i.useState(null),
        q = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        H = c && !m && !f;
    null == D || (H && D.projectId === u) || z(null);
    let V = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != V) return () => tO(V, "design");
    }, [V]);
    let X = rM(r, H);
    i.useEffect(() => {
        if (!H || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void k(!0);
        (b(!0), k(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fq.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? fJ(t.response) : null;
                    null == n ? k(!0) : (x(n), nX(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (b(!1), k(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [H, r, u]);
    let Z = i.useRef(null);
    (i.useEffect(() => {
        if (!H || null == X || null == u) return;
        if (null == p) {
            Z.current = X;
            return;
        }
        if (rI(Z.current, X)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            Z.current = X;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fq.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ee.current) return;
                        let l = fJ(e.response);
                        null != l && (x(l), nX(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fU(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = nB(u)).active &&
                                0 !== r.size &&
                                nK(u, {
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
    }, [H, X, p, d, u, r]),
        i.useEffect(() => {
            if (!H)
                return () => {
                    (N(null), z(null), K(null), x(null));
                };
        }, [H]));
    let Y = i.useRef(null),
        J = i.useRef(null),
        Q = i.useRef(!1),
        ee = i.useRef(!1);
    i.useEffect(() => {
        ((ee.current = H), H || ((Y.current = null), (J.current = null), (R.current = null), A(!1)));
    }, [H]);
    let et = i.useCallback(
            function e() {
                if (Q.current) return;
                let t = Y.current;
                if (null == t) return;
                Y.current = null;
                let n = r();
                null != n &&
                    ((Q.current = !0),
                    fH(n, t).then((t) => {
                        if (((Q.current = !1), ee.current)) {
                            if ("picked" !== t.status || f5(t.target, es.current.rect, es.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = nL(t.target);
                                (T((t) => (f4(t, e) ? t : e)),
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
        el = i.useCallback(() => {
            if (null == D) return;
            let e = !q.current;
            (F({ at: D.at, label: D.label, draft: D.draft, instant: e }), G(e), z(null));
        }, [D]);
    (i.useEffect(() => {
        if (!U) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [U]),
        i.useEffect(() => {
            if (null == O) return;
            let e = setTimeout(() => F(null), f2);
            return () => clearTimeout(e);
        }, [O]));
    let er = null == p || null == X || p.viewport.width < 1 ? 1 : X.width / p.viewport.width,
        ea = null != p || y,
        ei = i.useMemo(() => p?.elements ?? [], [p]),
        es = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        es.current = { rect: X, scale: er };
    }, [X, er]);
    let eo = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (tO(u, "design"),
                    K(null),
                    (q.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nL(e) }));
            },
            [u],
        ),
        eu = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / er, y: (e.clientY - t.top) / er }), [er]),
        ec = i.useCallback(() => {
            let e = R.current;
            if (null == e) return;
            let t = I.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = M.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ec);
    let ed = i.useCallback(
            (e) => {
                if (null == X || null != B) return;
                if (((R.current = { x: e.clientX, y: e.clientY }), ec(), A(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > f3 || Math.abs(e.clientY - D.at.y) > f3) && (q.current = !0);
                    return;
                }
                if (!ea) return void N(null);
                let t = eu(e, X);
                if (L) {
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
                        })(ei, t.x, t.y),
                        n = null != e && f5(e, X, er) ? null : e;
                    if (null != n) {
                        let e = nL(n);
                        T((t) => (f4(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = J.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((J.current = n), (Y.current = n), et());
            },
            [X, er, ea, eu, L, ei, D, B, ec, et],
        ),
        em = null == B ? null : d.find((e) => e.id === B.id),
        ef = H && (C || D?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (ef)
            return () => {
                let e = r();
                null != e && fH(e, fG);
            };
    }, [ef, r]);
    let eg = i.useCallback(() => {
        (A(!1), N(null), (J.current = null), (Y.current = null));
    }, []);
    i.useEffect(() => {
        if (!H || !C || !ea || L || null != D || null != B) return;
        let e = R.current,
            { rect: t, scale: n } = es.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((J.current = l), (Y.current = l), et());
    }, [H, C, ea, L, D, B, et]);
    let ep = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (el(), K(null));
                    return;
                }
                if (null == w || null == X) return;
                let t = eu(e, X);
                eo(
                    w,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? nP
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(w, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [w, X, eu, D, B, eo, el],
        ),
        ex = i.useCallback(() => {
            null != u && (N(null), null != ll(u) ? la(u) : nV(u));
        }, [u]),
        ev = i.useCallback(() => {
            null != u &&
                (null != D
                    ? el()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : ex());
        }, [u, D, B, el, ex]),
        ej = i.useRef(ev),
        eb = i.useRef(u),
        ey = i.useRef(ex);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = u), (ey.current = ex));
    });
    let ek = i.useRef(null);
    i.useEffect(() => {
        if (H)
            return (
                rN.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rN.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            !(0, en.vq)(t) ||
                ek.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fF.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eb.current || null == ll(eb.current)) && ey.current());
        }
    }, [H, s]);
    let ew = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != D || null != B || 0 === ei.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == w ? -1 : ei.findIndex((e) => e.ref === w.ref);
                    N(ei[(n + (t ? 1 : -1) + ei.length) % ei.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != w &&
                    (e.preventDefault(),
                    eo(w, nP, { x: (X?.left ?? 0) + w.rect.x * er, y: (X?.top ?? 0) + w.rect.y * er }));
            },
            [u, D, B, ei, w, eo, ev, X, er],
        ),
        eN = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((nT(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, _.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nL(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${nz}${r}${nO}${nD(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        el(),
                        N(null)));
            },
            [u, D, el],
        ),
        eC = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, eh.vX)(u, e)), [u]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != g && nT(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = nB(u)).annotations.find((t) => t.id === e)) &&
                        nZ(l, g) &&
                        nK(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, g]),
        eS = i.useCallback(() => {
            if (null != u && null != B && null != g) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = nB(u)).annotations.find((t) => t.id === e)) &&
                        nZ(n, g) &&
                        nK(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, B, g]),
        eE = c
            ? j
                ? E.intl.string(S.default["Eb/YV9"])
                : y
                  ? E.intl.string(S.default.FD30bh)
                  : E.intl.formatToPlainString(S.default.dTSqLF, { count: d.length })
            : "",
        eI = H && null != X,
        eM = C && null == B,
        e_ = D?.target ?? em?.target ?? null,
        eR = D ?? O,
        eP = D ?? (O?.instant === !0 ? null : O),
        eT =
            null != em && null != X
                ? (function (e, t) {
                      let { left: n, top: l } = fY(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fZ(em.target, em.anchor, X, er), X)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = em;
            fH(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [em, r]),
        (0, rw.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: fW.Li,
                children: [
                    (0, a.jsx)(ax.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    eI
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: fW.MT,
                                      style: { left: X.left, top: X.top, width: X.width, height: X.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": E.intl.string(S.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ed,
                                      onMouseLeave: eg,
                                      onClick: ep,
                                      onKeyDown: ew,
                                  }),
                                  null != w && null == w.marker && null == D && null == B
                                      ? (0, a.jsx)(f6, { box: fX(w, X, er) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: fW.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fW.xz,
                                          "data-shown": null != w && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: fW.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fW.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fW.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: fW.Y,
                                      children: eM ? (0, a.jsx)("div", { className: fW.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fW.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fW.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: fW.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fW.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fW.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: fW.D0, style: fX(e_, X, er), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fZ(e.target, e.anchor, X, er),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fW.xL,
                                              style: { ...fY(n, X), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: n$(e.target),
                                              }),
                                              "aria-expanded": B?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == D && K(l);
                                              },
                                              onFocus: () => {
                                                  null == D && K(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), el(), K(l));
                                              },
                                              children: (0, a.jsx)(f0, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eR || null == u
                                      ? null
                                      : (0, a.jsx)(rS, {
                                            projectId: u,
                                            at: { x: eR.at.x + 20, y: eR.at.y + 20 },
                                            bounds: X,
                                            kind: eR.label.kind,
                                            value: eR.draft,
                                            canSubmit: null != D && nT(eR.draft),
                                            onChange: (e) => {
                                                null != D && z({ ...D, draft: e });
                                            },
                                            onSubmit: eN,
                                            onDismiss: el,
                                            onUploadFile: eC,
                                            closing: null == D,
                                        }),
                                  null != em && null != B && null != eT
                                      ? (0, a.jsxs)(f1, {
                                            point: eT,
                                            frame: X,
                                            authorId: em.authorId,
                                            title: n$(em.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(l4.f, {
                                                          autoFocus: !0,
                                                          label: E.intl.string(S.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: B.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => K({ ...B, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eA());
                                                          },
                                                      })
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fW.aC,
                                                          children: em.comment,
                                                      }),
                                                nZ(em, g)
                                                    ? (0, a.jsx)("div", {
                                                          className: fW.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fW.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(W.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(W.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(W.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...B,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        B.editing
                                                                            ? (0, a.jsx)(W.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nT(B.draft),
                                                                                  text: E.intl.string(S.default.iicRP9),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, a.jsx)(W.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: E.intl.string(
                                                                                      S.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
                                                                                          ...B,
                                                                                          editing: !0,
                                                                                          draft: em.comment,
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
function f0(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([aX.default], () => aX.default.getUser(t), [t]);
    return (0, a.jsx)(sK.eu, {
        src: null == n ? null : X.Ay.getUserAvatarURL(n),
        size: sH._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function f1(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fV);
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
            originX: N,
            originY: C,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - b.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - b.y, l), r)), originX: u.x - s, originY: u.y - o }),
        A = { left: k, top: w, "--custom-conjure-card-origin-x": `${N}px`, "--custom-conjure-card-origin-y": `${C}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: fW.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fW.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fW.ip, children: (0, a.jsx)(f0, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fW.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fW.zI, children: p }),
        ],
    });
}
let f2 = 300,
    f3 = 2;
function f4(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function f5(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function f6(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fW.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var f7 = n(659723),
    f8 = n(697744),
    f9 = n(130324);
function he(e) {
    let t = (0, f8.c)(),
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
    let r = (0, au.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function ht(e) {
    let { className: t } = e,
        { Component: n, events: l } = he(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, f9.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: f9.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var hn = n(251363),
    hl = n(944142),
    hr = n(532247),
    ha = n(501628);
function hi(e) {
    let { progress: t } = e,
        { Component: n } = he(1500),
        l = lg.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: ha.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: ha.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function hs(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([hl.A], () => (s ? hl.A.getLiveReload(t) : null), [s, t]),
        c = (0, lV.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, hr.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, hr.QP)(e, s)));
            let m = (0, o.bG)(
                    [lT.A],
                    () => {
                        let e = lT.A.getFrame(n);
                        return (0, lz.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, hn.ow)(null, n) && e();
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
        })(d, m, c),
        h = m ? null : (0, hr.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ax.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: ha.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(hi, { progress: h }),
                  })
                : null,
        ],
    });
}
var ho = n(357858),
    hu = n(343030),
    hc = n(317608),
    hd = n(35367),
    hm = n(228946);
let hf = { width: 1 / 0, height: 1 / 0 };
function hh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hf;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var hg = n(702083);
function hp(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([lX.A], () => ({
            mobile: lX.A.isBuilderPreviewMobile(),
            landscape: lX.A.isBuilderPreviewLandscape(),
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
    let c = null != s && s.width > 0 ? s : null,
        d = n ? hh(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(hg.dw, { [hg.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(hg.R9, { [hg.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var hx = n(347927);
function hv(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(hx.Bf, l && hx.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: hx.Ux,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var hj = n(957272);
function hb(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, hd.A)({ applicationId: t, surface: n, launch: l });
    if (((0, hm.A)(t, n), s === hd.n.Launched)) {
        let e = (0, a.jsx)(hc.A, { frameId: i.id, level: hu.A.WithinAppContent, className: hj.Z7, overlay: r });
        return (0, lZ.Q5)(n) ? (0, a.jsx)(hp, { children: e }) : e;
    }
    return (0, a.jsx)(hy, { state: s });
}
function hy(e) {
    let { state: t } = e;
    switch (t) {
        case hd.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: hj.qs,
                children: (0, a.jsx)(hv, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case hd.n.NoApplication:
            return (0, a.jsx)(ht, { className: hj.qs });
        case hd.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: hj.qs,
                children: (0, a.jsx)(hv, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case hd.n.Error:
            return (0, a.jsxs)("div", {
                className: hj.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: hj.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case hd.n.AwaitingLaunch:
        case hd.n.Loading:
            return (0, a.jsx)("div", { className: hj.qs, children: (0, a.jsx)(tN.y, {}) });
    }
}
var hk = n(308528),
    hw = n(334738),
    hN = n(688438),
    hC = n(365971),
    hA = n(703462);
function hS(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: hA.f,
        children: [
            (0, a.jsx)(Y.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function hE() {
    return (0, a.jsx)("div", { className: hA.f, children: (0, a.jsx)(tN.y, {}) });
}
function hI(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([aV.A], () => (null != c ? aV.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && hk.A.preload(D.ME, t);
        }, [t]),
        (n = (0, o.bG)([tb.A], () => tb.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, hC.Xg)();
            return (
                (0, hw.yl)(t, e),
                () => {
                    (0, hw.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, ly.CN)(l).then(
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
    }, [l, r, d, h]),
    h)
        ? (0, a.jsx)(hS, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(hE, {})
          : (0, a.jsx)("div", {
                className: hA.g,
                children: (0, a.jsx)(hN.A, { channel: d, guild: null, chatInputType: uD.oU.SIDEBAR }, d.id),
            });
}
var hM = n(887909),
    h_ = n(570962),
    hR = n(998475);
function hP(e) {
    let {
        label: t,
        title: n,
        subtitle: l,
        header: r,
        body: i,
        actions: s,
        nextStep: o,
        appDetails: u,
        hasContentBackground: c,
        noPadding: d,
        obscured: m,
    } = (0, hM.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: hR.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: hR.rf,
                children: (0, a.jsx)(h_.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: hR.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: hR.z3,
                                      children: [
                                          (0, a.jsx)(x.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(v.E, {
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
                                className: h()(hR.Qs, c ? hR.cw : null, d ? hR.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: hR.o1,
                      children: s.map((e, t) => (0, a.jsx)(W.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var hT = n(765671),
    hL = n(269094),
    h$ = n(714917),
    hD = n(463660),
    hz = n(582063);
let hO = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function hF() {
    (0, es.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function hq(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(S.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eu.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(hU, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: hz.m2,
                        children: (0, a.jsx)(N.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(eK.K, {
                                "aria-label": r,
                                icon: eB.SettingsIcon,
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
                accept: hO.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (hO.includes(n.type)
                                ? n.size > ef.aI
                                    ? (0, es.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, hD.M$)(t, n).catch(hF)
                                : (0, es.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function hU(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([h$.A], () => h$.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(ec.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(S.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(ed.rX, {
                children: [
                    (0, a.jsx)(ed.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(S.default.uQpDky),
                        icon: l2.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(ed.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(S.default.AiAz8J),
                        icon: fl.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, hD.Og)(t).catch(hF));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(ed.rX, {
                children: (0, a.jsx)(ed.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(S.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, hD.Y1)(t, !i) || hF();
                    },
                }),
            }),
        ],
    });
}
let hG = "/assets/7cec34541705c795.webp";
function hB(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, hd.A)({ applicationId: t, surface: lz.ZN });
    return (i.useEffect(() => {
        let e = (0, lz.VA)(t, lz.ZN);
        return () => (0, lY.r)(e);
    }, [t]),
    r.state !== hd.n.Launched)
        ? (0, a.jsx)(hy, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(hy, { state: hd.n.Loading })
          : (0, a.jsx)(hK, { lifecycle: r, projectId: n, size: l });
}
function hK(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, hT.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: hz.JH,
        children: [
            (0, a.jsx)(hH, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: hz.dw,
                children: (0, a.jsx)("div", {
                    className: hz.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(hL.A, { frame: t.frame, application: t.application, className: hz.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(hq, { projectId: n }) : null,
        ],
    });
}
function hH(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([h$.A], () => (null != t ? h$.A.getBackground(t) : null)),
        l = n?.imageEtag ?? null,
        [r, s] = i.useState(null),
        [u, c] = i.useState(null),
        [d, m] = i.useState(!1);
    (i.useEffect(() => {
        if (null != n) return;
        let e = setTimeout(() => m(!0), 2e3);
        return () => clearTimeout(e);
    }, [n]),
        i.useEffect(() => {
            if (null == t || null == l) return;
            let e = !1;
            return (
                (0, hD.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(hG);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        g = null == l || (null != f && f === u) ? hG : f;
    return null != g && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: h()(hz.LO, { [hz.Ty]: n?.blur === !0 }),
              src: g,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  g === f && c(f);
              },
          })
        : null;
}
var hW = n(409478),
    hV = n(652227);
function hX(e) {
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
            overlayWidgetSize: m = lN,
            projectId: f,
            frameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, o.bG)([iC.A], () => null != f && null != iC.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: hV.qs, children: (0, a.jsx)(tN.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: hV.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(tN.y, {}) : (0, a.jsx)(hP, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: hV.RG,
                      children: [
                          (0, lA.yf)(u, c)
                              ? g
                                  ? (0, a.jsx)(hZ, { projectId: f, onResume: p })
                                  : (0, a.jsx)(hb, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: hV.qs,
                                        children: (0, a.jsx)(hv, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(hW.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(hB, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(hI, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: hV.qs, children: (0, a.jsx)(tN.y, {}) })
              : (0, a.jsx)(ht, { className: hV.qs });
}
function hZ(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, ho.Pu)(t),
        (0, a.jsx)("div", {
            className: hV.qs,
            children: (0, a.jsx)(hv, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(W.$, {
                              size: "sm",
                              variant: "primary",
                              icon: ez.PlayIcon,
                              text: E.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var hY = n(750506),
    hJ = n(867193),
    hQ = n(539197),
    h0 = n(977020);
function h1(e) {
    let { projectId: t } = e,
        n = (0, hQ.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, hQ.Ie)(e);
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
    let { left: r, top: s, width: o, height: u, scale: c } = l;
    function d(e, t) {
        return { "--custom-conjure-cursor-x": `${e * c}px`, "--custom-conjure-cursor-y": `${t * c}px` };
    }
    return (0, a.jsxs)("div", {
        className: h0.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [hQ.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(h0.hN, h0.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(h0.hN, h0.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(h0.UE, { [h0.SP]: n.shown, [h0.Vq]: n.pressed, [h0.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var h2 = n(417760);
function h3(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, o.bG)([ld.A], () => null != e && ld.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, _.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, lx.CU)(n),
        c = "controlling" === t,
        d = E.intl.string(c ? (u ? S.default["VJW/5P"] : S.default["+hD2Iz"]) : S.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(W.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: E.intl.string(S.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: h()(h2.M0, h2.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(d$.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(oq.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: h2.ID, children: d }),
                  c ? (0, a.jsx)(ax.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: h2.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: h2.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: h2.sp,
                      children: [
                          (0, a.jsx)(oq.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(d$.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: h2.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: h2.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: h2.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: h2.lC, children: m }) : null,
              ],
          });
}
function h4(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, lx.Zv)(null != n && n === l ? t : null),
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
        c = (0, e7.useHasAnyModalOpen)(),
        d = (0, lL.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, lL.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = rE(r());
            f((t) => (rI(t, e) ? t : e));
            let t = null == h ? null : rE(h);
            (x((e) => (rI(e, t) ? e : t)), null != h && (0, hJ.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, hJ.C)(0));
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
        N = (function () {
            let [e] = i.useContext(hY.uY),
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
                      className: h2.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: h2.QF,
                          children: (0, a.jsx)(h3, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, rw.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(ax.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? E.intl.string(S.default.oWcemF)
                                : "handoff" === u
                                  ? E.intl.string(S.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, rw.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: h2.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: h2.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(h1, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var h5 = n(399503),
    h6 = n(853555),
    h7 = n(271982),
    h8 = n(187645);
let h9 = new Map(),
    ge = !1;
function gt() {
    let e = new Map();
    for (let t of new Set([...ld.A.getActivityOrderedProjectIds(), ...(0, lx.T7)()])) {
        if (!(ld.A.isThinking(t) || (0, lx.wK)(t)) || lk.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eL.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, lZ.Rc)(t);
            return (0, lz.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...h9]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            h9.delete(t),
            n.unregisterLookup(),
            h7.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        h9.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = h8.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    gn(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (h9.set(e, l),
                    (l.unregisterLookup = (0, h6.Ng)(e, () => (0, hn.n5)(n, t))),
                    h7.A.registerFrameTarget(t, n, hu.A.Backstage, void 0));
            })(t, n);
    for (let e of h9.values()) gn(e.element);
}
function gn(e) {
    let t = lX.A.isBuilderPreviewMobile();
    e.classList.toggle(h8.L, !t);
    let n = t ? hh(lX.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var gl = n(873727),
    gr = n(147248),
    ga = n(418842),
    gi = n(363195),
    gs = n(818023);
let go = null;
var gu = n(517461),
    gc = n(761929),
    gd = n(487336);
function gm(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, gu.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, iT.clamp)(u, 360, n),
        m = (0, gc.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: gc.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        f = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), m(e));
            },
            [m],
        );
    return (0, a.jsxs)("div", {
        className: gd.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: gd.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: gd.kL, style: { width: d }, children: l }),
        ],
    });
}
var gf = n(541940);
function gh(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: c,
            content: d,
            sidebar: m,
            showsFrame: f,
            paused: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, lV.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([gi.A], () => (0, gl.x4)(gi.A.theme)),
            l = (0, o.bG)([gr.A], () => gr.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([V.Ay], () => ({
                reducedMotion: V.Ay.useReducedMotion,
                fontScale: (0, gl.U0)(),
                highContrast: V.Ay.isHighContrastModeEnabled,
                forcedColors: V.Ay.useForcedColors,
                underlineLinks: V.Ay.alwaysShowLinkDecorations,
            })),
            d = lg.hH.useSetting(),
            m = (0, ga.C)(),
            f = (0, o.bG)(
                [lT.A, lX.A],
                () =>
                    lX.A.isBuilderPreviewMobile() &&
                    lT.A.getFrame(t)?.applicationId === lX.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            g = i.useRef(!1),
            p = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, hn.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, gl.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, fK.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, f, t, s, d, e, r, m, c]),
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
                let n = (0, hn.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, hn.n5)(e, t) && ((x.current = null), b());
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
            if (null != t) return (0, h6.Ng)(t, () => (0, hn.n5)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, hn.ow)(p, j), [p, j]),
        y = i.useCallback(() => (f ? (0, hn.ow)(p, j) : p), [f, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(gf.Mh, c),
                children: [
                    u,
                    g
                        ? null
                        : (0, a.jsx)(h4, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: gf.fm, children: d }),
                ],
            }),
            m,
            g
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fQ, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(ar, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function gg(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: s,
        frameLaunchParams: u,
        header: c,
        chatOpen: d,
        onCloseChat: m,
        chatHeaderAction: f,
        onRestoreVersion: g,
        onImportProject: p,
        debugOpen: x = !1,
        onCloseDebug: v,
        restoreState: j,
        previewReady: b,
        previewGate: y,
        availability: k,
        activeMode: w,
        widgetApplicationId: N,
        overlayWidgetSize: C,
        previewPaused: A = !1,
        onResumePreview: I,
    } = e;
    (0, h5.k)(t, N);
    let M = s.type === lS.U.MAIN || (0, lZ.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([lX.A], () => ({
            mobile: lX.A.isBuilderPreviewMobile(),
            landscape: lX.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? gs.aX.LANDSCAPE : gs.aX.PORTRAIT), (go = e));
                else {
                    if (go !== e) return;
                    ((l = gs.aX.UNHANDLED), (go = null));
                }
                tA.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let R = i.useRef(null),
        [P, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, ai.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, ai.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, ly.HV)(l), () => (0, ly.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, _.ensureConnection)(t),
                ge ||
                    ((ge = !0),
                    ld.A.addChangeListener(gt),
                    eL.Ay.addChangeListener(gt),
                    lT.A.addChangeListener(gt),
                    lX.A.addChangeListener(gt),
                    lk.A.addChangeListener(gt),
                    (0, lx.W3)(gt),
                    gt()));
        }, [t]),
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
    let L = Math.max(360, P - 320),
        $ = d || M;
    return (0, a.jsx)("div", {
        ref: R,
        className: gf.LB,
        children: (0, a.jsx)(gh, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, lA.yf)(k, w),
            paused: A,
            mainClassName: null == c ? void 0 : h()(gf.ez, { [gf.zt]: d }),
            content: (0, a.jsx)(hX, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: k,
                activeMode: w,
                widgetApplicationId: N,
                overlayWidgetSize: C,
                projectId: t,
                paused: A,
                onResume: I,
                frameOverlay: (0, a.jsx)(hs, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(gm, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: gf.cO,
                              children: x
                                  ? (0, a.jsx)(fO, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(f7.A, { projectId: t }),
                                            (0, a.jsx)(rk.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(rk.Ay.Icon, {
                                                                  icon: eo.P,
                                                                  tooltip: E.intl.string(S.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(rk.Ay.Title, {
                                                    children: E.intl.string(E.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: gf.cb,
                                                children: (0, a.jsx)(
                                                    d4,
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
                      })
                    : null,
        }),
    });
}
var gp = n(323140);
function gx(e) {
    var t;
    let l,
        r,
        s,
        { project: c, projectsLoaded: d, onBack: m, guildId: f } = e,
        [g, p] = i.useState(!0),
        [j, b] = i.useState(!1),
        k = lp(),
        w = i.useCallback(() => p(!0), []),
        N = i.useCallback(() => {
            (b(!1), p(!0));
        }, []),
        { restoreState: C, handleRestoreVersion: A } = (function (e, t) {
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
                                (0, lj.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, es.P0)({
                                                        text: E.intl.formatToPlainString(S.default.Z4n6LX, {
                                                            title: (0, lv.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, lb.c)(u, r);
                                                null != e && (0, es.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, es.P0)({
                                                    text: E.intl.string(S.default["PSdo+w"]),
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
        })(c, N),
        I = c?.id ?? null,
        {
            integrationStatus: R,
            isPreviewApplicationLoading: T,
            checkingIntegration: L,
            previewReady: $,
            hasFrame: O,
            needsPermissionReview: F,
            installAuthorizeProps: q,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [eL.Ay, lB.A],
                    () => (null == r ? null : (eL.Ay.getIntegrationStatus(r) ?? lB.A.getIntegrationStatus(r))),
                    [r],
                ),
                { data: c, isLoading: d } = (0, lG.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                g = (0, lA.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: u?.bot_permissions_changed === !0,
                }),
                p = i.useCallback(async () => {
                    if (null == r || a.current !== r) return;
                    s.current?.abort();
                    let e = new AbortController();
                    ((s.current = e), l(null));
                    try {
                        await ((0, P.CG)(r)?.catch(() => (0, P.U1)(r, e.signal)) ?? (0, P.U1)(r, e.signal));
                    } catch {
                    } finally {
                        e.signal.aborted || s.current !== e || a.current !== r || l(r);
                    }
                }, [r]);
            i.useEffect(
                () => (
                    p(),
                    () => {
                        (s.current?.abort(), (s.current = null));
                    }
                ),
                [p],
            );
            let x = (0, lK.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, lK.$)(e, x));
                }, [x, e]),
                j = i.useCallback(async () => {
                    try {
                        await v();
                    } catch {}
                    await p();
                }, [p, v]),
                b = i.useMemo(() => {
                    let t = e?.preview_application_id;
                    return null == t || d || m
                        ? null
                        : {
                              ...(0, lH.i)({ applicationId: t, application: c ?? null, guildId: x }),
                              onClose: () => {
                                  j();
                              },
                          };
                }, [m, j, x, d, c, e?.preview_application_id]);
            return {
                integrationStatus: u,
                isPreviewApplicationLoading: d,
                checkingIntegration: m,
                previewReady: f,
                hasFrame: h,
                needsPermissionReview: g,
                installAuthorizeProps: b,
            };
        })(c, f),
        U =
            (0, o.bG)([lJ.A], () => (null == I ? void 0 : lJ.A.getPublishStatus(I)?.previewAppChannels), [I]) ??
            R?.preview_app_channels,
        {
            availability: G,
            activeMode: B,
            setMode: K,
            frameSurface: H,
            frameSurfaceOptions: V,
            setFrameSurface: X,
            appChannel: Z,
            setAppChannel: Y,
            frameLaunchParams: J,
            widgetApplicationId: Q,
        } = (0, l_.p)({
            applicationId: c?.preview_application_id ?? null,
            previewApplicationId: c?.preview_application_id ?? null,
            declaredActivity: O,
            previewSupportedSurfaces: c?.preview_supported_surfaces,
            installScope: c?.install_scope ?? null,
            ownerAuthorizationRevoked: R?.owner_authorization_revoked === !0,
            supportsOverlay: c?.preview_supported_surfaces?.includes(lw.q7.OVERLAY) === !0,
            previewAppChannels: U,
        }),
        ee =
            ((t = (0, o.bG)(
                [ld.A],
                () =>
                    null == I
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(ld.A.getMessages(I)),
                [I],
            )),
            null != (l = t?.default_size) &&
            Number.isFinite(l.width) &&
            Number.isFinite(l.height) &&
            l.width > 0 &&
            l.height > 0
                ? l
                : lN);
    ((0, lC.x)(I, (e) => {
        G.modes.includes(e) && K(e);
    }),
        lh(I, () => {
            (p(!0), b(!0));
        }));
    let et = G.modes.includes("frame"),
        en = (0, o.bG)([lk.A], () => lk.A.isPaused(I), [I]),
        el = et && !en,
        {
            previewTargetOptions: er,
            handleSelectPreviewTarget: ea,
            mobilePreview: ei,
            mobilePreviewLabel: eo,
            handleToggleMobilePreview: eu,
            landscapePreview: ec,
            rotatePreviewLabel: ed,
            handleRotatePreview: em,
            previewSurface: ef,
            previewFrame: eh,
            isRefreshing: eg,
            handleRefresh: ex,
        } = (function (e) {
            let {
                    project: t,
                    modes: n,
                    frameSurface: l,
                    frameSurfaceOptions: r,
                    previewAppChannels: a,
                    setMode: s,
                    setFrameSurface: u,
                    setAppChannel: c,
                } = e,
                d = i.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === lS.U.APP_CHANNEL && n.length > 1
                                              ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                              : [{ mode: e, surface: t }],
                                      )
                                    : [{ mode: e }],
                            );
                        })(n, r, a),
                    [n, r, a],
                ),
                m = i.useCallback(
                    (e) => {
                        ("frame" === e.mode && (u(e.surface), null != e.appChannel && c?.(e.appChannel)), s(e.mode));
                    },
                    [c, u, s],
                ),
                f = (0, o.bG)([lX.A], () => lX.A.isBuilderPreviewMobile()),
                h = E.intl.string(f ? S.default.tKGF0Q : S.default.peqEOY),
                g = i.useCallback(() => (0, ly.GG)(!f), [f]),
                p = (0, o.bG)([lX.A], () => lX.A.isBuilderPreviewLandscape()),
                x = E.intl.string(p ? S.default.tunI2l : S.default.DoNdjA),
                v = i.useCallback(() => (0, ly.Lw)(!p), [p]),
                j = (0, lZ.jS)(t),
                b = i.useMemo(() => (0, lZ.Op)(j, l), [j, l]),
                y = (0, lV.A)(t?.preview_application_id ?? null, b),
                k = (0, lz.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || lW.A.refreshProxyTicket(y.id);
                }, [y, k]);
            return {
                previewTargetOptions: d,
                handleSelectPreviewTarget: m,
                mobilePreview: f,
                mobilePreviewLabel: h,
                handleToggleMobilePreview: g,
                landscapePreview: p,
                rotatePreviewLabel: x,
                handleRotatePreview: v,
                previewSurface: b,
                previewFrame: y,
                isRefreshing: k,
                handleRefresh: w,
            };
        })({
            project: c,
            modes: G.modes,
            frameSurface: H,
            frameSurfaceOptions: V,
            previewAppChannels: U,
            setMode: K,
            setFrameSurface: X,
            setAppChannel: Y,
        }),
        ev = g && !j,
        ej = E.intl.string(ev ? S.default.JD6Oit : S.default.xjJAQm),
        eb = i.useCallback(() => {
            if (j) {
                (b(!1), p(!0));
                return;
            }
            p((e) => !e);
        }, [j]),
        ey = i.useCallback(() => p(!1), []),
        {
            designFeedbackActive: eN,
            designFeedbackToggleRef: eA,
            agentDrivingPreview: eS,
            designFeedbackLabel: eE,
            handleToggleDesignFeedback: eI,
        } = (function (e, t, n) {
            let { active: l } = nJ(e);
            i.useEffect(() => {
                null != e && l && !t && nV(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, lx.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void nV(e);
                        (n(), nH(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(I, el, N),
        [eM] = i.useState(() => ep.isPlatformEmbedded && (0, lU.qM)()),
        e_ = null != lo(I);
    i.useEffect(() => {
        null != I && e_ && !el && la(I);
    }, [I, e_, el]);
    let eR = i.useCallback(() => {
            null != I &&
                (N(),
                (function (e) {
                    if (null != ll(e)) return;
                    let { byProject: t } = lt.getState();
                    lt.setState({ byProject: { ...t, [e]: ln } });
                })(I));
        }, [I, N]),
        eP = i.useCallback(() => {
            null != I && la(I);
        }, [I]),
        e$ = e_ ? E.intl.string(S.default.tuQ5f3) : eE,
        eD = i.useCallback(() => {
            b((e) => !e && (p(!0), !0));
        }, []),
        ez = i.useCallback(() => b(!1), []),
        eO = i.useCallback(() => {
            null != I && (0, ly._j)(I);
        }, [I]),
        eF = i.useCallback(() => {
            null != I && (en ? (0, ly._j)(I) : (0, ly.di)(I, eh?.id));
        }, [I, en, eh?.id]),
        eq = i.useCallback(() => {
            var e, t;
            (null != c && ((e = c.id), (t = eh?.id), (0, _.closeConnection)(e), (0, lY.r)(t)), m());
        }, [c, eh?.id, m]),
        eU =
            ((r = i.useCallback(() => {
                null != c && (w(), (0, _.sendUserMessage)(c.id, E.intl.string(S.default.oU20rd)));
            }, [c, w])),
            {
                onExport: r,
                onImport: (s = eC(
                    i.useCallback(
                        (e) => {
                            if (null == c) return;
                            let t = c.id,
                                n = ew(e);
                            null != n
                                ? (0, es.P0)({ text: n, variant: "critical" })
                                : (0, eT.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: c.name }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          w();
                                          try {
                                              await ek(t, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, es.P0)({
                                                  text: E.intl.string(S.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [c, w],
                    ),
                )).open,
                importInput: s.input,
            }),
        eG = i.useCallback(() => {
            null != c && (0, tu.A)(c, f);
        }, [c, f]),
        eK = (0, lA.JR)(B, F)
            ? { type: "permissions", authorizeProps: q }
            : L && null == R
              ? { type: "checking" }
              : void 0,
        eH = (0, o.bG)([eL.Ay], () => null != I && eL.Ay.isProjectDeleting(I), [I]);
    i.useEffect(() => {
        ((null == c && d) || eH) && (0, u.bG)(D.BVt.CHANNEL(f, z.VV.CONJURE));
    }, [f, c, d, eH]);
    let {
            publishOptions: eW,
            publish: eV,
            publishing: eX,
            confirmation: eZ,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...ry,
                        showConfirmation: (e) => {
                            (s(),
                                r(e),
                                (a.current = window.setTimeout(() => {
                                    ((a.current = null), r(null));
                                }, 1500)));
                        },
                    }),
                    [s],
                ),
                u = i.useMemo(() => ({ guildId: t, platform: o, busy: n }), [t, o, n]),
                c = (0, e0.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let m = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: m };
        })(I, f, L || T),
        eY =
            null == c
                ? null
                : (0, a.jsx)(to, {
                      projectId: c.id,
                      projectName: c.name,
                      guildId: f,
                      projectGuildId: c.guild_id,
                      isOwner: (0, eL.PV)(c),
                      canRemix: (0, eL.H_)(c),
                      onRefresh: (0, lz.x1)(eh) ? ex : void 0,
                      isRefreshing: eg,
                      onTogglePreviewPaused: "frame" === B ? eF : void 0,
                      previewPaused: en,
                      previewPauseDisabled: !en && eS,
                      onClose: eq,
                      onExport: eU.onExport,
                      onImport: eU.onImport,
                      onRemix: eG,
                      onConnectTool: () => {
                          var e;
                          return (
                              (e = c.id),
                              void (0, e7.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([n.e("834460"), n.e("960521")]).then(
                                      n.bind(n, 699760),
                                  );
                                  return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                              })
                          );
                      },
                      onHistory: () => {
                          var e;
                          return (
                              (e = {
                                  projectId: c.id,
                                  installScope: c.install_scope,
                                  restoreDisabled: C?.status === "restoring",
                                  onRestoreVersion: (e, t) => A(e, t, !0),
                              }),
                              void (0, e7.openModalLazy)(async () => {
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
                          G.modes.includes("widget") && "unavailable-authorization-revoked" !== G.profileState
                              ? Q
                              : null,
                      previewProjectId: c.id,
                  }),
        eJ =
            null == eV || null == c
                ? null
                : (0, a.jsx)("div", {
                      className: gp.As,
                      onMouseDown:
                          null == I || eV.disabled || eX
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, lQ.dx)(I);
                                },
                      children: (0, a.jsx)(rf, {
                          project: c,
                          publish: eV,
                          menu: eY,
                          children: (e) =>
                              (0, a.jsx)(W.$, {
                                  size: "sm",
                                  variant: eV.status?.state === "up_to_date" ? "secondary" : "primary",
                                  icon: eX ? gv : null != eZ ? nC.U : void 0,
                                  text: eZ ?? eV.label,
                                  ...e,
                              }),
                      }),
                  }),
        eQ = null == c ? void 0 : () => (0, e2.A)(c.id, { guildId: f, isPreview: !0, publishOptions: eW }),
        e1 = (0, a.jsx)(M, {
            title: c?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: m },
            project: c,
            onOpenProjectSettings: eQ,
            actions:
                null == c
                    ? null
                    : (0, a.jsxs)("div", {
                          className: gp.FO,
                          children: [
                              (0, a.jsx)(lq, {
                                  targets: er,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(B, H, Z),
                                  onChange: ea,
                              }),
                              et
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === B
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: ei ? gy : gb,
                                                      tooltip: eo,
                                                      "aria-label": eo,
                                                      selected: ei,
                                                      onClick: eu,
                                                  })
                                                : null,
                                            ei && "frame" === B
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: gk,
                                                      tooltip: ed,
                                                      "aria-label": ed,
                                                      selected: ec,
                                                      onClick: em,
                                                  })
                                                : null,
                                            (0, a.jsx)(lc, {
                                                enabled: eM && !e_ && !eS && !en,
                                                onLongPress: eR,
                                                children: (0, a.jsx)(y.A.Icon, {
                                                    ref: eA,
                                                    icon: nA.x,
                                                    iconClassName: gp.D8,
                                                    tooltip: e$,
                                                    "aria-label": e$,
                                                    selected: e_ || eN,
                                                    disabled: en || (eS && !e_),
                                                    onClick: e_ ? eP : eI,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" !== B || en
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(nR.A, { frame: eh }),
                                            (0, a.jsx)(lO, { frame: eh, controlProjectId: c.id }),
                                        ],
                                    }),
                              (0, a.jsx)("div", { className: gp.YJ }),
                              k
                                  ? (0, a.jsx)(y.A.Icon, {
                                        icon: nS.BugIcon,
                                        tooltip: E.intl.string(S.default.Mt5k9d),
                                        "aria-label": E.intl.string(S.default.Mt5k9d),
                                        selected: j,
                                        onClick: eD,
                                    })
                                  : null,
                              (0, a.jsx)(y.A.Icon, {
                                  icon: eB.SettingsIcon,
                                  tooltip: E.intl.string(S.default.I2XSKe),
                                  "aria-label": E.intl.string(S.default.I2XSKe),
                                  onClick: eQ,
                              }),
                              eY,
                              ev
                                  ? null
                                  : (0, a.jsx)(y.A.Icon, { icon: gj, tooltip: ej, "aria-label": ej, onClick: eb }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(gp.nj, ny.T),
        children: [
            eU.importInput,
            (0, a.jsx)("main", {
                className: gp.JX,
                children:
                    null == c
                        ? (0, a.jsxs)("div", {
                              className: gp.j5,
                              children: [
                                  e1,
                                  (0, a.jsxs)("div", {
                                      className: gp.sD,
                                      children: [
                                          (0, a.jsx)(x.D, {
                                              variant: "heading-lg/semibold",
                                              children: E.intl.string(S.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: E.intl.string(S.default.fINulo),
                                          }),
                                          (0, a.jsx)(W.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: E.intl.string(S.default["WFJ/vb"]),
                                              onClick: () => (0, P.hF)(f),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(e0.bI.Provider, {
                              value: eW,
                              children: (0, a.jsx)(
                                  gg,
                                  {
                                      projectId: c.id,
                                      designFeedbackToggleRef: eA,
                                      applicationId: c.preview_application_id,
                                      previewApplicationId: c.preview_application_id,
                                      surface: ef,
                                      frameLaunchParams: J,
                                      header: e1,
                                      chatOpen: g,
                                      onCloseChat: ey,
                                      chatHeaderAction: eJ,
                                      debugOpen: k && j,
                                      onCloseDebug: ez,
                                      onRestoreVersion: A,
                                      onImportProject: (0, eL.PV)(c) ? eU.onImport : void 0,
                                      restoreState: C,
                                      previewReady: $,
                                      previewGate: eK,
                                      availability: G,
                                      activeMode: B,
                                      widgetApplicationId: Q,
                                      overlayWidgetSize: ee,
                                      previewPaused: en,
                                      onResumePreview: eO,
                                  },
                                  c.id,
                              ),
                          }),
            }),
        ],
    });
}
function gv() {
    return (0, a.jsx)(tN.y, { type: tN.t.SPINNING_CIRCLE_SIMPLE, className: gp.Hv, itemClassName: gp.C5 });
}
function gj(e) {
    return (0, a.jsx)(nE.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function gb(e) {
    return (0, a.jsx)(nI.u, { ...e, size: "custom", width: 20, height: 20 });
}
function gy(e) {
    return (0, a.jsx)(nM.k, { ...e, size: "custom", width: 20, height: 20 });
}
function gk(e) {
    return (0, a.jsx)(n_.H, { ...e, size: "custom", width: 20, height: 20 });
}
function gw(e) {
    let { guildId: t, projectId: n } = e,
        l = (0, o.yK)([c.Ay], () => c.Ay.getSelfMember(t)?.roles ?? [], [t]),
        r = (0, o.bG)(
            [d.A, m.A],
            () => {
                let e = d.A.getGuild(t);
                return null != e && m.A.can(D.xBc.MANAGE_GUILD, e);
            },
            [t],
        ),
        s = n ?? null;
    (i.useEffect(() => {
        (0, P.hF)(t);
    }, [t, l, r]),
        i.useEffect(() => {
            (0, P.dm)(t, s);
        }, [t, s]));
    let f = i.useCallback(() => {
            (0, u.pX)(D.BVt.CHANNEL(t, z.VV.CONJURE));
        }, [t]),
        h = (0, o.bG)(
            [eL.Ay],
            () => {
                if (null == s) return null;
                let e = eL.Ay.getProject(s);
                return null == e || (0, eL.PV)(e) || e.guild_id === t ? e : null;
            },
            [s, t],
        ),
        g = (0, o.bG)([eL.Ay], () => eL.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(gx, { project: h, projectsLoaded: g, onBack: f, guildId: t }, s)
        : (0, a.jsx)(nN, { guildId: t });
}
