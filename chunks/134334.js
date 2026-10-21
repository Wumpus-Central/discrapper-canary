(n.r(t), n.d(t, { default: () => pA }));
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
    p = n(97893),
    x = n(364522),
    g = n(297264),
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
    P = n(639519),
    R = n(371169);
let T = { main: [], subagent: [], thinking: ["low", "medium", "high", "xhigh", "max"] },
    L = { tier: "balanced" },
    $ = { simple: { thinking: "high" }, balanced: { thinking: "high" }, complex: { thinking: "high" } };
var D = n(652215),
    O = n(746080);
async function z(e) {
    let { guildId: t, installScope: n, modelSettings: l, start: r } = e,
        a = await (0, R.gA)({ guild_id: t, install_scope: n });
    return (
        (0, _.ensureConnection)(a),
        (0, _.stageModelSettings)(a, l ?? L),
        await r(a),
        (0, u.pX)(D.BVt.CHANNEL(t, O.VV.CONJURE, a)),
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
    V = n(821609),
    W = n(775602),
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
                                    children: (0, a.jsx)(V.$, {
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
            r = (0, o.bG)([W.Ay], () => W.Ay.useReducedMotion),
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
                    p = document.hasFocus(),
                    x = !0;
                function g() {
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
                    let e = t && !f && !h && p && x;
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
                    ((p = !0), b());
                }
                function A() {
                    ((p = !1), b());
                }
                (g(), v(), b());
                let S = new ResizeObserver(() => {
                    (g(), v());
                });
                (S.observe(e), S.observe(n));
                let E = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((x = t.isIntersecting), b());
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
var ep = n(77729),
    ex = n(723702),
    eg = n(264572).Buffer;
async function ev(e, t) {
    if (ex.isPlatformEmbedded) {
        let n = eg.from(await e.arrayBuffer());
        if ("function" == typeof ep.A.fileManager.saveWithDialog2) await ep.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await ep.A.fileManager.saveWithDialog(n, t);
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
                    return (0, a.jsx)(V.$, {
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
    eP = n(290076),
    eR = n(442433),
    eT = n(314116),
    eL = n(260498),
    e$ = n(782603),
    eD = n(780338),
    eO = n(782134),
    ez = n(113494),
    eF = n(663417),
    eq = n(70688),
    eU = n(173936),
    eG = n(473935),
    eB = n(625903),
    eK = n(408278),
    eH = n(365199),
    eV = n(7437),
    eW = n(147036),
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
        p = f ? null : (0, e4.L4)(n),
        x = (0, e4.Mi)(n),
        g = f
            ? E.intl.formatToPlainString(S.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(S.default.x6FvsZ, { app: n.appName });
    async function j() {
        (c(!0), m(null));
        let e = f ? (0, R.xx)(t.id) : (0, e8.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(f ? S.default["0XDHob"] : S.default.PJ2Fkn))
            : (f || (0, es.P0)({ text: (0, e4.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(e5.a, {
        ...r,
        role: "alertdialog",
        title: f ? g : (0, e4.WX)((0, e9.tb)(S.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, e4.J)(n) : E.intl.string(S.default["8OKM1N"]),
        "aria-label": g,
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
                h.length > 0 || null != p
                    ? (0, a.jsx)(e9.Ay, {
                          items: h,
                          optionalItem:
                              null == p
                                  ? void 0
                                  : { item: p, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != x ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: x }) : null,
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
            onRefresh: p,
            isRefreshing: x = !1,
            onTogglePreviewPaused: g,
            previewPaused: v = !1,
            previewPauseDisabled: j = !1,
            onClose: b,
            refreshApplicationId: y,
            previewProjectId: k,
            onCloseMenu: w,
        } = e,
        N = (0, e3.iI)(t),
        C = i.useContext(e0.bI),
        { pending: A, refresh: I } = (0, eV.A)(y ?? null),
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
        P = (0, o.bG)([e1.A], () => (null == k ? ta : e1.A.getDeclaredConnections(k))),
        T = i.useMemo(() => (0, eZ.Xl)(P), [P]),
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
        z = (function (e) {
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
        F = i.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        q = null != m && u,
        U = s && null != d,
        G = q || null != c || U || null != f || null != h,
        B = eX.p5 && null != l,
        K = eX.p5,
        H = N ? e$.BellIcon : eD.BellSlashIcon,
        V = v ? eO.PlayIcon : ez.PauseIcon;
    return (0, a.jsxs)(ec.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: w,
        onSelect: w,
        children: [
            null != p || null != g || null != b
                ? (0, a.jsxs)(ed.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "refresh",
                                    icon: eF.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: eF.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: x,
                                    action: p,
                                })
                              : null,
                          null != g
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: V,
                                    leadingAccessory: { type: "icon", icon: V },
                                    label: E.intl.string(v ? S.default.ZKd2Cw : S.default.VHxerm),
                                    disabled: j,
                                    action: g,
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
            z.length > 0
                ? (0, a.jsx)(ed.rX, {
                      children: z.map((e) =>
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
                                        (0, eX.C)((0, eW.n)(l, O.VV.CONJURE, t), () =>
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
                                                    (0, R.K)(t, () =>
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
                                          (0, u.pX)(D.BVt.CHANNEL(t, O.VV.CONJURE, n));
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
    return (0, a.jsx)(ts, { ...l, onCloseMenu: eR.Z_ });
}
function tm(e) {
    let { project: t, guildId: n } = e,
        l = tc(t, n);
    return (0, a.jsx)(to, { ...l, trigger: "iconButton" });
}
var tf = n(638693);
class th extends Error {}
function tp(e) {
    let { guildId: t, modelSettings: n, onClose: l } = e,
        r = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, e_.Ot)(e, t)
                    ? (0, u.pX)(D.BVt.CHANNEL(t, O.VV.CONJURE, e.id))
                    : (0, eM.A)(e);
            },
            [t],
        ),
        s = i.useCallback((e) => (0, a.jsx)(tm, { project: e, guildId: t }), [t]),
        o = i.useCallback(
            (e, n) => {
                (0, eR.jA)(e, () => (0, a.jsx)(td, { project: n, guildId: t }));
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
                    await z({
                        guildId: t,
                        installScope: l,
                        modelSettings: n,
                        start: async (t) => {
                            try {
                                await ek(t, e, E.intl.string(S.default["LUc7/5"]));
                            } catch {
                                throw (await (0, R.xx)(t).catch(() => void 0), new th());
                            }
                        },
                    });
                } catch (e) {
                    (0, es.P0)({
                        text: e instanceof th ? E.intl.string(S.default["Q+l4Hv"]) : (0, P.mG)(e),
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
                    (0, a.jsx)(g.D, { variant: "heading-md/semibold", color: "text-strong", children: f }),
                    (0, a.jsxs)("div", {
                        className: tf.$s,
                        children: [
                            (0, a.jsx)(eI, { importing: c, onImport: m }),
                            (0, a.jsx)(y.A.Icon, { icon: eo.P, tooltip: h, "aria-label": h, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(x.Ip, {
                className: tf.XG,
                children: (0, a.jsx)(eP.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: s,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var tx = n(559106),
    tg = n(663341),
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
function tP(e, t) {
    return t_(tM.getState(), e, t);
}
function tR(e, t, n) {
    let { draftsByProject: l } = tM.getState();
    tM.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function tT(e, t, n, l) {
    let r = tP(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (tR(
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
function tO(e) {
    return E.intl.formatToPlainString(S.default.JZ59Bo, { size: (0, ef.sM)((0, ef.Ju)(e)) });
}
function tz(e, t) {
    let n = tP(e, t);
    if (0 !== n.length) {
        for (let t of n) t$(e, t);
        tR(e, t, tE);
    }
}
function tF(e, t) {
    let n = tP(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (tR(e, t, tE), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function tq(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = tP(e, "chat"),
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
    let r = tP(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: tI++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (tR(e, t, [
            ...tP(e, t),
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
                                  : { errorText: tO(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: tO(t) } };
            let a = ef.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function tV(e) {
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
                null != (r = (l = tP(t, n)).find((t) => t.localId === e)) &&
                    (t$(t, r),
                    tR(
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
function tW(e) {
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
        p = tQ.P.indexOf(t.tier),
        x = d ? tX.t : tZ._,
        g = tQ.P.map(tJ.D0),
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
                                        (0, a.jsx)(x, {
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
                                    activeIndex: p,
                                    stops: g,
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
        { mounted: p, entered: x } = t4(f);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: p,
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
                entered: x,
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
        p = h?.name ?? f;
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
            return (0, a.jsx)(tx.vN, {
                children: (0, a.jsxs)("button", {
                    ...l,
                    ref: c,
                    type: "button",
                    className: s,
                    disabled: r,
                    "aria-label": E.intl.formatToPlainString(S.default.Lyx6pW, { name: p }),
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
                            children: p,
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
        l = (0, o.bG)([W.Ay], () => W.Ay.useReducedMotion),
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
            onModelSettingsChange: p,
            attachments: x,
        } = e,
        [g, j] = i.useState(!1),
        b = i.useRef(null),
        y = i.useId(),
        k = "" !== t,
        w = E.intl.string(E.t.d56gCa),
        N = i.useRef(null),
        C = i.useRef(null),
        { addFiles: A, pasteFiles: I, removeAttachment: M } = x,
        _ = i.useCallback((e) => {
            let t = N.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        P = i.useCallback(
            (e) => {
                (A(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [A],
        ),
        R = i.useCallback(
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
                            (0, a.jsx)(tx.vN, {
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
                                    onKeyDown: R,
                                    onPaste: (e) => I(e),
                                    onFocus: () => j(!0),
                                    onBlur: () => j(!1),
                                }),
                            }),
                            k ? null : (0, a.jsx)(nr, { boxFocused: g }),
                        ],
                    }),
                    x.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: ne.ZO,
                              children: x.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(tW, { draft: t, onRemove: M }, t.localId);
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
                                onChange: P,
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
                                        children: (0, a.jsx)(tg.PlusLargeIcon, {
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
                                        onChange: p,
                                        className: ne.gb,
                                        icon: (0, a.jsx)(tv.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(V.$, {
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
                component: (0, a.jsx)(g.D, {
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
                                            (0, a.jsx)(g.D, {
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
function np(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let nx = 1;
function ng(e) {
    let t = np(e),
        n = { localId: nx++, name: e.name, contentType: t };
    if (
        !(0, ef.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= ef.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...n, status: "error", errorText: tO(t) } };
    let l = ef.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: l } };
}
function nv(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function nj(e, t) {
    if ((0, ef.Oq)(t.size, np(t))) return (0, eh.vX)(e, t);
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
        O = i.useCallback((e) => e === q || N.some((t) => t.id === e), [N]),
        F = !A && O(n) ? n : q,
        V = null != $ && O($) ? $ : F,
        W = V === q ? "user" : "guild",
        X = V === q ? n : V,
        Z = (function () {
            let [e, t] = i.useState([]),
                n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => () => n.current.forEach(nv), []));
            let l = i.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(ng);
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
                })({ idea: l, installScope: W, submitting: s })) ||
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
                    await z({
                        guildId: X,
                        installScope: W,
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
                                    throw (await (0, R.xx)(t).catch(() => void 0), new nw());
                                }
                            ((0, _.sendUserMessage)(t, e, n), Q());
                        },
                    });
                } catch (e) {
                    (c(e instanceof nw ? E.intl.string(S.default["903H7m"]) : (0, P.mG)(e)), (er.current = !1), o(!1));
                }
            }
        }, [l, W, d, X, Y, Q]),
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
                                icon: p.Z,
                                color: "var(--icon-strong)",
                                className: nk.FW,
                                tooltip: eu,
                                "aria-label": eu,
                                selected: f,
                                onClick: () => es(!f),
                            }),
                        }),
                        (0, a.jsx)(x.Ip, {
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
                                                    (0, a.jsx)(g.D, {
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
                                                        target: V,
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
                f ? (0, a.jsx)(tp, { guildId: n, modelSettings: d, onClose: eo }) : null,
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
    nP = n(270593);
let nR = Object.freeze({ x: 0.5, y: 0.5 });
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
let nO = "[conjure:selected] ",
    nz = " \u2014 ";
function nF(e) {
    if (!e.startsWith(nO)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(nO.length),
        a = r.indexOf(nz),
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
function nV(e) {
    let t = nB(e);
    t.active && nK(e, { ...t, active: !1 });
}
function nW(e) {
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
    (lt.setState({ byProject: n }), nW(e));
}
function li(e, t) {
    null != ll(e) &&
        (lr(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? nH(e) : nV(e));
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
var lp = n(885386);
function lx() {
    return lp.Q_.useSetting() || !1;
}
var lg = n(573083),
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
    lP = n(86147),
    lR = n(729475),
    lT = n(91242),
    lL = n(156548),
    l$ = n(869146),
    lD = n(475815),
    lO = n(165610);
function lz(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, lL.cR)(t?.id ?? null),
        r = (0, lg.Zv)(n),
        i = (0, o.bG)(
            [l$.A, lT.A],
            () => null != t && l$.A.getWindowOpen(D.MLl.ACTIVITY_POPOUT) && lT.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, lO.x1)(t) || i || r) return null;
    let s = (0, lL.fl)(t.id);
    if (null == s || !(0, lD.Ub)(s)) return null;
    let u = E.intl.string(l ? E.t.Z7MyNB : E.t.OIDkcp);
    return (0, a.jsx)(y.A.Icon, {
        tooltip: u,
        icon: l ? lP.z : lR.T,
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
            return (0, a.jsx)(tx.vN, {
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
    lV = n(625180),
    lW = n(672929),
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
    rl = [
        [lw.q7.BOT, S.default.UnoAgo],
        [lw.q7.ACTIVITY, S.default["I88/iG"]],
        [lw.q7.PROFILE_WIDGET, S.default.gXY1x1],
        [lw.q7.AUTOMOD, S.default.Q9ruoM],
    ],
    rr = { screen_capture: S.default["8/7kE7"] },
    ra = { initial: S.default.NUZBwo, notPublished: S.default.Gdz7pg, published: S.default["6E9W4F"] },
    ri = new Set(),
    rs = new Set(),
    ro = "data-conjure-publish-trigger";
function ru(e) {
    return (
        rs.add(e),
        () => {
            rs.delete(e);
        }
    );
}
function rc(e, t) {
    if (ri.has(e) !== t) for (let n of (t ? ri.add(e) : ri.delete(e), rs)) n();
}
function rd(e) {
    rc(e, !ri.has(e));
}
var rm = n(566553);
let rf = { screen_capture: nM.k },
    rh = {
        [lw.q7.BOT]: ee.RobotIcon,
        [lw.q7.ACTIVITY]: l0.b,
        [lw.q7.PROFILE_WIDGET]: l1.b,
        [lw.q7.AUTOMOD]: Q.ShieldIcon,
    },
    rp = { initial: rm.LK, notPublished: rm.i$, published: rm.kg };
function rx(e) {
    let { project: t, publish: n, menu: l, children: r } = e,
        s = t.id,
        o = i.useRef(null),
        u = i.useSyncExternalStore(ru, () => ri.has(s));
    return (
        i.useEffect(
            () => () => {
                rc(s, !1);
            },
            [s],
        ),
        (0, a.jsx)(eu.Y, {
            targetElementRef: o,
            shouldShow: u,
            onRequestOpen: () => rd(s),
            onRequestClose: (e, t) => {
                let n = e?.target;
                ("system:click_outside" === t &&
                    (0, en.vq)(n, Element) &&
                    n.closest(`[${ro}]`)?.getAttribute(ro) === s) ||
                    rc(s, !1);
            },
            position: "bottom",
            align: "right",
            spacing: 8,
            animation: eu.Y.Animation.FADE,
            renderPopout: () => (0, a.jsx)(rg, { project: t, publish: n, menu: l }),
            children: (e) => (0, a.jsx)("div", { ref: o, className: rm.hZ, ...{ [ro]: s }, children: r(e) }),
        })
    );
}
function rg(e) {
    let { project: t, publish: n, menu: l } = e,
        r = (function (e, t) {
            var n, l, r, a;
            let s,
                u,
                c,
                m,
                f,
                h,
                {
                    liveName: p,
                    liveDescription: x,
                    channels: g,
                    guild: v,
                    memberCount: j,
                } = ((n = e.id),
                (l = t.guildId),
                (s = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(n) ?? null, [n])),
                (u = s?.application_id ?? null),
                (c = (0, o.bG)([tn.A], () => (null == u ? null : (tn.A.getApplication(u) ?? null)), [u])),
                (m = (0, o.bG)([d.A], () => (null == l ? null : (d.A.getGuild(l) ?? null)), [l])),
                (f = (0, o.bG)([rt.A], () => (null == l ? null : (rt.A.getMemberCount(l) ?? null)), [l])),
                (h = (0, o.yK)(
                    [re.Ay],
                    () =>
                        null == l || null == u
                            ? []
                            : re.Ay.getChannels(l)
                                  [re.I6].filter((e) => {
                                      let { channel: t } = e;
                                      return (0, e_.us)(t) === u;
                                  })
                                  .map((e) => {
                                      let { channel: t } = e;
                                      return t;
                                  }),
                    [l, u],
                )),
                {
                    project: s,
                    liveName: c?.name ?? s?.name ?? "",
                    liveDescription: c?.description?.trim() ?? "",
                    channels: h,
                    guild: m,
                    memberCount: f,
                }),
                b = (0, l8.A)(e.id),
                y = ((r = e.id), (0, o.bG)([lJ.A], () => lJ.A.getPublishStatus(r)?.previewDevicePermissions ?? rn)),
                [k, w] = i.useState(e.name),
                [N, C] = i.useState(!1),
                A =
                    null == (a = t.status) || "unpublished" === a.state
                        ? "initial"
                        : "up_to_date" === a.state
                          ? "published"
                          : "notPublished",
                I = "initial" === A,
                M = I && (0, eL.PV)(e),
                _ = (I ? e.preview_supported_surfaces : e.supported_surfaces) ?? [],
                P = k.trim(),
                T = M ? (0, l9.p)(P) : null,
                L = t.status?.previewAppChannels ?? [],
                $ = t.status?.publishedAt,
                D = null == $ ? null : (0, lv.lG)($).relative;
            async function O() {
                if (N || null != T) return !1;
                C(!0);
                try {
                    return (M && (P !== e.name || b.changed) && (await (0, R.CW)(e.id, { ...b.changes, name: P })), !0);
                } finally {
                    C(!1);
                }
            }
            return {
                mode: A,
                initial: I,
                editable: M,
                identity: b,
                name: k,
                setName: w,
                nameError: T,
                displayName: I ? e.name : p,
                description: I ? b.description : x,
                initialChannelNames:
                    0 === L.length && _.includes(lw.q7.APP_CHANNEL) ? [E.intl.string(S.default.xI4N6Q)] : L,
                channels: g,
                components: rl
                    .filter((e) => {
                        let [t] = e;
                        return _.includes(t);
                    })
                    .map((e) => {
                        let [t, n] = e;
                        return { surface: t, label: E.intl.string(n) };
                    }),
                devicePermissions: I ? y : [],
                sharing:
                    null != v
                        ? {
                              guild: v,
                              caption: null != j ? E.intl.formatToPlainString(S.default.ZpZxK9, { count: j }) : null,
                          }
                        : "user" === e.install_scope
                          ? { guild: null, caption: E.intl.string(S.default.RUhWLH) }
                          : null,
                statusText: E.intl.string(ra[A]),
                lastPublishedText: null == D ? null : E.intl.formatToPlainString(S.default["/6YRCf"], { time: D }),
                ctaText: I ? t.label : E.intl.string(S.default.KHg4Dk),
                ctaVariant: "published" === A ? "secondary" : "primary",
                saving: N,
                save: O,
            };
        })(t, n),
        { mode: s, initial: u, editable: c, identity: m, sharing: f } = r,
        h = i.useRef(null),
        p = [
            ...(u
                ? r.initialChannelNames.map((e) => (0, a.jsx)(rj, { icon: Y.k, label: e }, e))
                : r.channels.map((e) => (0, a.jsx)(rb, { channel: e }, e.id))),
            ...r.components.map((e) => {
                let { surface: t, label: n } = e;
                return (0, a.jsx)(rj, { icon: rh[t], label: n }, t);
            }),
        ];
    async function x() {
        try {
            if (!(await r.save())) return;
        } catch {
            (0, es.P0)({ text: E.intl.string(S.default.Fi7boI), variant: "critical" });
            return;
        }
        (n.run("header"), rc(t.id, !1));
    }
    return (0, a.jsxs)("div", {
        className: rm.nd,
        role: "dialog",
        "aria-label": u ? r.name : r.displayName,
        children: [
            (0, a.jsxs)("div", {
                className: rm.M0,
                children: [
                    (0, a.jsxs)("div", {
                        className: rm.wx,
                        children: [
                            c
                                ? null != m.iconURL
                                    ? (0, a.jsxs)(C.D, {
                                          className: rm.gb,
                                          "aria-label": E.intl.string(E.t["6yrpFR"]),
                                          onClick: () => h.current?.activateUploadDialogue(),
                                          children: [
                                              (0, a.jsx)("img", { className: rm.Dp, src: m.iconURL, alt: "" }),
                                              (0, a.jsx)("span", {
                                                  className: rm.E7,
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
                                              onClick: () => h.current?.activateUploadDialogue(),
                                          }),
                                      })
                                : (0, a.jsx)(A.A, { project: t, size: "card" }),
                            c
                                ? (0, a.jsx)(l6.Ay, {
                                      ref: h,
                                      className: rm.Fg,
                                      multiple: !1,
                                      filters: [{ name: E.intl.string(E.t["Sp2NF+"]), extensions: l7.En }],
                                      maxFileSizeBytes: l7.Q0,
                                      onChange: m.setIcon,
                                      onFileSizeError: () =>
                                          (0, es.P0)({ text: E.intl.string(S.default.ZTAAMc), variant: "critical" }),
                                      "aria-hidden": !0,
                                  })
                                : null,
                            l,
                        ],
                    }),
                    c
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: rm.ZZ,
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
                                              value: r.name,
                                              onChange: r.setName,
                                              error: r.nameError,
                                              maxLength: lw.eq,
                                              fullWidth: !0,
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: rm.ZZ,
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
                                              value: m.description,
                                              onChange: m.setDescription,
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
                                      children: r.displayName,
                                  }),
                                  "" !== r.description
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 2,
                                            children: r.description,
                                        })
                                      : null,
                              ],
                          }),
                    (0, a.jsx)(rv, { title: E.intl.string(S.default.BqNMms), rows: p }),
                    (0, a.jsx)(rv, {
                        title: E.intl.string(S.default.LnqeFd),
                        rows: r.devicePermissions.map((e) =>
                            (0, a.jsx)(rj, { icon: rf[e], label: E.intl.string(rr[e]) }, e),
                        ),
                    }),
                ],
            }),
            null != f
                ? (0, a.jsxs)("div", {
                      className: rm.KO,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: E.intl.string(S.default.yCgX8i),
                          }),
                          (0, a.jsxs)("div", {
                              className: rm.Kk,
                              children: [
                                  null != f.guild
                                      ? (0, a.jsx)(F.Ay, {
                                            guild: f.guild,
                                            size: F.Ay.Sizes.MEDIUM,
                                            active: !0,
                                            className: rm.$f,
                                            "aria-hidden": !0,
                                        })
                                      : (0, a.jsx)("span", {
                                            className: rm.qU,
                                            children: (0, a.jsx)(eA.UserIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                        }),
                                  (0, a.jsxs)("div", {
                                      className: rm.qg,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: f.guild?.name ?? E.intl.string(S.default["37xgkF"]),
                                          }),
                                          null != f.caption
                                              ? (0, a.jsx)(v.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-subtle",
                                                    children: f.caption,
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
                className: rm.qr,
                children: [
                    (0, a.jsx)("span", { className: rp[s], "aria-hidden": !0 }),
                    (0, a.jsxs)("div", {
                        className: rm.qg,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: r.statusText,
                            }),
                            null != r.lastPublishedText
                                ? (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      children: r.lastPublishedText,
                                  })
                                : null,
                        ],
                    }),
                    (0, a.jsx)(V.$, {
                        variant: r.ctaVariant,
                        size: "sm",
                        text: r.ctaText,
                        disabled: n.disabled || null != r.nameError,
                        loading: n.publishing || r.saving,
                        onClick: x,
                    }),
                ],
            }),
        ],
    });
}
function rv(e) {
    let { title: t, rows: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: rm.mK,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: t }),
                  (0, a.jsx)("div", { children: n }),
              ],
          });
}
function rj(e) {
    let { icon: t, label: n } = e;
    return (0, a.jsxs)("div", {
        className: rm.CT,
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor", className: rm.Pw, "aria-hidden": !0 }),
            (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: n }),
        ],
    });
}
function rb(e) {
    let { channel: t } = e;
    return (0, a.jsx)(rj, { icon: Y.k, label: (0, l5.Ay)(t) ?? "" });
}
var ry = n(373540),
    rk = n(144228);
function rw(e) {
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
        children: (0, a.jsx)(rk.z, {
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
let rN = {
    showPublishBlocked: ry.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, e7.openModal)(
                (t) =>
                    (0, a.jsx)(rw, {
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
var rC = n(58736),
    rA = n(333007),
    rS = n(775121),
    rE = n(826745),
    rI = n(470779);
function rM(e) {
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
            anchor: p = "chip",
            allowAttachments: x = !0,
            placeholder: g,
            label: v,
        } = e,
        {
            drafts: j,
            addFiles: b,
            pasteFiles: y,
            removeDraft: k,
            settled: w,
            takeRefs: C,
        } = tV({ projectId: t, surface: "design", onUploadFile: f }),
        A = i.useRef(null),
        I = (d || j.length > 0) && w && !m,
        M = i.useCallback(() => {
            if (!I) return;
            let e = C();
            u(e.length > 0 ? e : void 0);
        }, [I, C, u]),
        [_, P] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => P(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let R = i.useRef(null),
        [T, L] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = R.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => L({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let $ = T?.height ?? 44,
        D = l.left + 8,
        O = l.top + 8,
        z = Math.max(n.x, D),
        F = Math.min(Math.max("point" === p ? n.y : n.y + 32 + 4, O), Math.max(O, l.top + l.height - $ - 8));
    return (0, a.jsxs)("div", {
        ref: R,
        className: h()(rI.M0, { [rI.ho]: _ && !m, [rI.ET]: m }),
        style: { left: z, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            x
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: rI.Fg,
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
                                  className: rI.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(em.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: rI.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(rE.y, {
                autoFocus: !0,
                rows: 1,
                className: rI.hF,
                value: s,
                placeholder: g ?? ("" === r ? E.intl.string(S.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? E.intl.string(S.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m || !x ? void 0 : y,
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
                      className: rI.ZO,
                      children: j.map((e) => (0, a.jsx)(tW, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function r_(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function rP(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rR(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? r_(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = r_(e());
                l((e) => (rP(e, t) ? e : t));
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
var rT = n(876798),
    rL = n(48507),
    r$ = n(193885),
    rD = n(744898),
    rO = n(803656),
    rz = n(241326),
    rF = n(972213);
function rq(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rU(e, t, n) {
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
let rG = rU("red", rq(w.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    rB = [
        rG,
        rU("yellow", rq(w.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        rU("green", rq(w.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        rU("blue", rq(w.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        rU("white", rq(w.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
    ];
function rK(e) {
    return rB.find((t) => t.id === e) ?? rG;
}
function rH(e) {
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
function rV(e) {
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
function rW(e) {
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
function rX(e) {
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
let rZ = n9.map((e) => rX(Math.min(16, e + 3))),
    rY = le.map((e) => rX(Math.min(16, e / 2.5))),
    rJ = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
    rQ = {
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
function r0(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: lu.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(rT.k, {
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
function r1(e) {
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
function r2(e) {
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
function r3(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rK(n.colorId),
        h = rQ[u],
        p = E.intl.string(S.default.hUm825),
        x = E.intl.string(S.default.n5IA3a),
        g = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: lu.t$,
        children: [
            (0, a.jsx)("div", {
                className: lu.NT,
                children: (0, a.jsx)(r0, {
                    icon: rV,
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
                    (0, a.jsx)(r0, {
                        icon: rH,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => li(t, "move"),
                    }),
                    (0, a.jsx)(r0, {
                        icon: rL.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => li(t, "text"),
                    }),
                    (0, a.jsx)(r2, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(r0, {
                                icon: r$.V,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (li(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rZ.map((n, l) =>
                                (0, a.jsx)(
                                    r0,
                                    {
                                        icon: n,
                                        label: E.intl.string(rJ[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (lr(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), nV(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r2, {
                        label: g,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(r0, {
                                icon: h.icon,
                                label: g,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (li(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(rQ).map((n) =>
                                (0, a.jsx)(
                                    r0,
                                    {
                                        icon: rQ[n].icon,
                                        label: rQ[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (li(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r2, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(r0, {
                                icon: rW,
                                label: x,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (li(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rY.map((n, l) =>
                                (0, a.jsx)(
                                    r0,
                                    {
                                        icon: n,
                                        label: E.intl.string(rJ[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (lr(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), nV(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r2, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(r1, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rB.map((n) =>
                                (0, a.jsx)(
                                    r0,
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
                    (0, a.jsx)(r1, {
                        icon: rD.e,
                        label: E.intl.string((0, ex.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(r1, {
                        icon: rO.U,
                        label: E.intl.string((0, ex.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(r1, {
                        icon: rz.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: lu.Gz, role: "separator" }),
                    (0, a.jsx)(r1, { icon: rF.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let r4 = w.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function r5(e, t, n) {
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
                    (e.strokeStyle = r4),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function r6(e) {
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
async function r7(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = r6(e),
            r = r6(e);
        if (null == l || null == r) return null;
        return (r5(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let r8 = new Map(),
    r9 = new Map(),
    ae = (0, tS.D)(() => ({ byMessageKey: {} }));
function at(e, t) {
    let { [e]: n, ...l } = ae.getState().byMessageKey;
    ae.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function an(e, t) {
    null == t ? r8.delete(e) : r8.set(e, t);
}
function al(e) {
    return r8.get(e)?.() ?? Promise.resolve(null);
}
let ar = { dx: 0, dy: 0 },
    aa = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    ai = 1;
function as(e) {
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
        : (0, a.jsx)(ao, { projectId: s, state: o, resolveIframe: r });
}
function ao(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = rR(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, x] = i.useState(ar),
        g = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = rK(n.colorId),
        M = "pick" !== C,
        _ = "marker" === n.tool ? n9[n.markerSize] : "eraser" === n.tool ? le[n.eraserSize] : null,
        P = "move" === C ? (A.present.find((e) => e.id === f) ?? null) : null,
        R = null != r;
    (i.useLayoutEffect(() => {
        m(v.current?.offsetWidth ?? 0);
    }, [R]),
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
        (0, rA.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, lU.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (an(t, T), () => an(t, null)), [t, T]);
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
        let e = g.current;
        if (null == e || null == r) return;
        let t = window.devicePixelRatio,
            n = Math.round(r.width * t),
            l = Math.round(r.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let a = e.getContext("2d");
        if (null == a) return;
        (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, l), a.setTransform(t, 0, 0, t, 0, 0));
        let i = b.current,
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? n2(e, p.dx, p.dy) : e)),
            o = j.current;
        r5(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, A.present, p]);
    i.useLayoutEffect($, [$]);
    let D = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        O = i.useCallback(() => {
            let e = y.current;
            if (null == e || null == r) return;
            y.current = null;
            let n = {
                id: `mark-${ai++}`,
                kind: "text",
                color: I.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (n4(n, r) && ls(t, { type: "commit", shape: n }), o(null));
        }, [t, I, r]),
        z = i.useCallback(() => {
            ((y.current = null), o(null));
        }, []),
        F = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != y.current) return void O();
                let t = D(e);
                switch (C) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == P ? null : n7(P, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? P
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
                                id: `mark-${ai++}`,
                                kind: "erase",
                                width: le[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${ai++}`,
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
                                id: `mark-${ai++}`,
                                kind: C,
                                color: I.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                $();
            },
            [r, C, I, P, A.present, n.markerSize, n.eraserSize, D, O, $],
        ),
        q = i.useCallback(
            (e) => {
                L(e);
                let t = D(e),
                    n = b.current;
                if (null != n) return void x({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
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
            g.current?.removeAttribute("data-dragging");
            let e = b.current;
            if (null != e) {
                ((b.current = null), x(ar), ls(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && n4(n, r) ? ls(t, { type: "commit", shape: n }) : $());
        }, [t, r, p, $]),
        G = i.useCallback(() => la(t), [t]),
        B = i.useCallback(() => ls(t, { type: "undo" }), [t]),
        K = i.useCallback(() => ls(t, { type: "redo" }), [t]),
        H = i.useCallback(() => ls(t, { type: "clear" }), [t]),
        V = i.useRef({ tool: C, selected: P, exit: G, undo: B, redo: K });
    if (
        (i.useLayoutEffect(() => {
            V.current = { tool: C, selected: P, exit: G, undo: B, redo: K };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, en.Cw)((0, en.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != y.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = V.current,
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
                let o = aa[s];
                null != o && (e.preventDefault(), li(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (M) return (rS.A.disable(), () => rS.A.enable());
        }, [M]),
        null == r)
    )
        return null;
    let W = Math.max(8, r.left - d - 8),
        X = null == P ? null : n7(null == b.current ? P : n2(P, p.dx, p.dy), r);
    return (0, rA.createPortal)(
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
                            ref: g,
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
                    : (0, a.jsx)(rM, {
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
                          onSubmit: O,
                          onUploadFile: (e) => (0, eh.vX)(t, e),
                          onDismiss: z,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: lu.ej,
                    style: { left: W, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(r3, { projectId: t, state: n, onExit: G, onUndo: B, onRedo: K, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var au = n(308081),
    ac = n(689175),
    ad = n(683071),
    am = n(218394),
    af = n(115982),
    ah = n(886540);
function ap(e) {
    return !(0, ah.BL)(e) && !0 !== e.stopRequested;
}
var ax = n(104317),
    ag = n(643278),
    av = n(566424),
    aj = n(683063),
    ab = n(140735),
    ay = n(138212);
function ak(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: h()(ay.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: h()(ay.wx, null != n && ay.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var aw = n(148590);
function aN(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function aC(e) {
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
        [f, p] = i.useState(!l),
        [x, g] = i.useState(l);
    x !== l && (g(l), p(!l));
    let v = i.useCallback(() => p((e) => !e), []),
        j = f ? t7.a : tZ._,
        b = null != n || l;
    return (0, a.jsxs)(ak, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: aw.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(C.D, {
                                className: aw.L$,
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
        headerClassName: f ? void 0 : aw.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: h()(aw.rf, o), hidden: !f, children: c })],
    });
}
var aA = n(883646);
let aS = [];
function aE(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: h()(aA.xL, {
            [aA.Vb]: "in_progress" === t,
            [aA.cT]: "completed" === t,
            [aA.GZ]: "unfinished" === t,
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
                className: aA.Qd,
                itemClassName: aA.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: aA.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: aA.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function aI(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : aS), [n, t]),
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
    let p = o.slice(0, 3),
        x = o.length - p.length;
    return (0, a.jsxs)("span", {
        className: aA.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    aj.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: aA.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: aA.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function aM(e) {
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
            ((t = (r ?? aS).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? aS),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: aA.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: h()(aA.AS, { [aA.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(aE, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: aA.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: aA.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(aI, { agents: u.get(e.id) ?? aS, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: aA.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(aE, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: aA.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: aA.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function a_(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(aC, {
        title: E.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(aN, { children: c }),
        superseded: s,
        showLabel: E.intl.string(S.default.RKyN9q),
        hideLabel: E.intl.string(S.default.xydHoj),
        className: aA.Nr,
        bodyClassName: aA.rf,
        beforeBody: r && !s ? (0, a.jsx)(ab.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(aM, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var aP = n(308665),
    aR = n(59678),
    aT = n(903847);
function aL(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [f, p] = i.useState(c),
        [x, g] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(c);
    (b !== c && (y(c), null != n ? (m(n), p(!0)) : (g(!1), j(!1))),
        i.useEffect(() => {
            if (c || !f) return;
            let e = setTimeout(() => p(!1), 150);
            return () => clearTimeout(e);
        }, [c, f]),
        i.useEffect(() => {
            if (!f || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => g(!0));
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
    let P = null != l && l.length > 0,
        R = i.useCallback(() => j((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: aT.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(aT.vK, { [aT.ho]: x && c, [aT.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(aT.Rk, aR.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(av.A, {
                                        glyph: (0, a.jsx)(aP.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(C.D, {
                                    className: aT.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: h()(aT.Rk, aR.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(av.A, {
                                            glyph: (0, a.jsx)(aP.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          P
                              ? (0, a.jsx)(N.m, {
                                    text: E.intl.string(S.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(C.D, {
                                        className: aT.BO,
                                        onClick: R,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(ag.ClipboardListIcon, {
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
                  k && P
                      ? (0, a.jsx)("div", {
                            className: h()(aT.vB, { [aT.pg]: v && A, [aT.ui]: !v }),
                            children: (0, a.jsx)(a_, {
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
var a$ = n(195880);
function aD(e) {
    let t = (0, G.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var aO = n(736553),
    az = n(642785);
async function aF(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, az.dv)(e),
        i = new aO.u();
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
var aq = n(890497),
    aU = n(29073),
    aG = n(590077);
function aB(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = aD(e),
                [s, o] = i.useState(null),
                [u, c] = i.useState([]),
                [d, m] = i.useState(t.prompt),
                [f, h] = i.useState(!1),
                [p, x] = i.useState(!1),
                g = i.useRef(new Map()),
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
                    (h(!0), x(!1));
                    let l =
                        ((t = eL.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = g.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, a$.m)() }), g.current.set(e.projectId, t)),
                                aF(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: C }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), x(!0));
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
                failed: p,
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
        className: h()(aU.nd, aU.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: aU.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: aU.TK,
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
                className: aG.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(aq.Z, {
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
                className: aU.qr,
                children: (0, a.jsx)("div", {
                    className: aU.zt,
                    children: (0, a.jsx)(V.$, {
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
var aK = n(658675),
    aH = n(22231),
    aV = n(123292),
    aW = n(691885),
    aX = n(360047);
function aZ(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: o } = e,
        u = i.useMemo(() => aX.Hi.map((e) => ({ id: e, value: e, label: (0, aX.hU)(e) })), []);
    return (0, a.jsx)(aW.l, {
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
var aY = n(734057),
    aJ = n(287809);
function aQ(e) {
    return 0 === e.options.length && null == e.input;
}
let a0 = {
        [D.rbe.GUILD_TEXT]: "text",
        [D.rbe.GUILD_VOICE]: "voice",
        [D.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [D.rbe.GUILD_STAGE_VOICE]: "stage",
        [D.rbe.GUILD_FORUM]: "forum",
        [D.rbe.GUILD_MEDIA]: "media",
    },
    a1 = { channel: "#", role: "@", user: "@", project: "" },
    a2 = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
    };
function a3(e, t) {
    return E.intl.string(a2[e][+!!t]);
}
var a4 = n(155078);
function a5(e) {
    return e.options.some((e) => null != e.image);
}
let a6 = [];
function a7(e, t) {
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
var a8 = n(300344),
    a9 = n(614733),
    ie = n(904363),
    it = n(950902),
    il = n(384017);
function ir(e) {
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
    function p(e) {
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
                        let l = null == (n = aY.A.getChannel(t)?.type) ? void 0 : a0[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = aJ.default.getUser(t)?.username;
                        return { kind: e, ...(null == n ? {} : { username: n }) };
                    }
                    return { kind: e };
                })(t, e),
            }))
        );
    }
    let x = {
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
        className: il.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(aq.Z, {
                  ...x,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(aq.Z, {
                  ...x,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function ia(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, a8.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(ir, { ...l, guildId: t, options: r, placeholder: a3("channel", !0 === l.question.multi_select) });
}
function ii(e) {
    let { guildId: t, ...n } = e,
        l = (0, ie.A)(t);
    return (0, a.jsx)(ir, { ...n, guildId: t, options: l, placeholder: a3("role", !0 === n.question.multi_select) });
}
function is(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, a9.A)(t);
    return (0, a.jsx)(ir, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: a3("user", !0 === n.question.multi_select),
    });
}
function io(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = aD(t),
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
    return 0 === s.length ? n : (0, a.jsx)(ir, { ...l, options: s, placeholder: a3("project", !1) });
}
function iu(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, it.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(io, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(ia, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(ii, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(is, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var ic = n(87221),
    id = n(26430),
    im = n(256905),
    ih = n(490707),
    ip = n(907702);
function ix(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, ih._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(ip.Gt, ip.b6),
              children: [
                  (0, a.jsx)(ic.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(ip.Gt, { [ip.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: ip.Sl,
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
function ig(e) {
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
            onMeasured: p,
            onRemove: x,
        } = e,
        g = E.intl.formatToPlainString(S.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: h()(ip.Vs, { [ip.Q9]: s, [ip.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: ip.Up,
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
                        className: ip.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(ix, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: ip.Gt }),
                            (0, a.jsx)("span", {
                                className: ip.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(aK.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(rk.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: ip.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, a4.E)(t) : "")
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
                      className: ip.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(eK.K, {
                              icon: rz.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: o,
                              "aria-label": E.intl.string(S.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: ip.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(eK.K, {
                                icon: id._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": g,
                                tabIndex: u && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function iv(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: m } = l,
        f = m.length > 4 ? "gallery" : "row",
        p = i.useRef(null),
        x = i.useRef(new Map()),
        [g, v] = i.useState(null),
        j = null != g && m.some((e) => e.id === g) ? g : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, eh.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, im.R)({
                                items: e.map((e, n) => {
                                    let l,
                                        r = x.current.get(t[n].id);
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
                (v(l.id), p.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || s || u(l));
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
        className: ip.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: h()(ip.fF, "gallery" === f ? ip.nV : ip.nM, { [ip.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            ig,
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
                                onMeasured: (t) => x.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, a.jsx)(
                              ig,
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
            (0, a.jsx)(ij, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function ij(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(""),
        f = r ? 0 : -1,
        h = n.busy;
    function p() {
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
        className: ip.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: ip.QJ,
                children: [
                    (0, a.jsx)(V.$, {
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
                        : (0, a.jsx)(V.$, {
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
                        className: ip.Fg,
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
                                            : Promise.resolve({ errorText: tO(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: ip.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: ip.Hs,
                              children: (0, a.jsx)(l3.k, {
                                  label: E.intl.string(S.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: E.intl.string(S.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), p())
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
                              className: ip.gd,
                              children: [
                                  (0, a.jsx)(V.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(S.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(aV.Q, {
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
function ib(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(il.uK, { [il.ue]: l, [il.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: il.dy, children: (0, a.jsx)(aK.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: il.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: il.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: il.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: il.ed,
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
                      className: il.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function iy(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return a5(n)
        ? (0, a.jsx)(iv, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      ib,
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
let ik = [],
    iw = [];
function iN(e) {
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
        className: h()(il.Ge, il.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: il.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(iy, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: a7(o, u),
            }),
            a5(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: il.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: il.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(aH.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(il.Pu, il.es), children: c }),
                      ],
                  }),
        ],
    });
}
function iC(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, f] = i.useState({}),
        [p, x] = i.useState({}),
        [g, j] = i.useState({}),
        [b, y] = i.useState({}),
        [k, w] = i.useState(!1),
        [A, I] = i.useState(0),
        [M, _] = i.useState(null),
        [P, R] = i.useState(null),
        [T, L] = i.useState(null),
        [$, D] = i.useState(!1),
        O = i.useRef(null),
        [z, F] = i.useState(null),
        q = i.useRef(null),
        U = i.useRef(0),
        G = null == r,
        B = l.questions.length,
        K = Math.min(A, B - 1),
        H = l.questions[K],
        [W, X] = i.useState({ id: H.id, expanded: !1 }),
        Z = W.id === H.id && W.expanded,
        [Y, J] = i.useState(null),
        Q = c[H.id] ?? "",
        ee = !0 === H.multi_select,
        et = a5(H),
        el = ee ? (m[H.id] ?? ik) : ((t = o[H.id]), t?.kind === "option" ? [t.optionId] : a6),
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
                        if (o) return a7(h, m(i));
                        function p(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function x(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let g = t[d];
                        function v(t) {
                            (r((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, eh.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                p({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === g ? { ...e, [d]: x(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: x(h) })));
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
                                (p({ busy: "upload", error: null }),
                                    e.then(
                                        (e) => {
                                            "errorText" in e
                                                ? p({ busy: null, error: { source: "upload", text: e.errorText } })
                                                : v({ attachment: e });
                                        },
                                        () =>
                                            p({
                                                busy: null,
                                                error: { source: "upload", text: E.intl.string(S.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                p({ busy: "link", error: null }),
                                (0, eh.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        p({
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
        if (null == z || Z || !ec) return;
        function e() {
            if (null == z) return;
            let e = z.scrollHeight > z.clientHeight + 1;
            J((t) => (t?.id === H.id && t.truncated === e ? t : { id: H.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(z), () => t.disconnect());
    }, [ec, z, H.id, Z]);
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
                                      return (0, aX.Ol)(t, n, l);
                                  }),
                              ).then(t));
                }
            },
            [l, b, r, n],
        ),
        ep = i.useCallback(
            (e, t) => {
                U.current += 1;
                let n = U.current;
                (_({ direction: t, moves: n }),
                    R({ question: H, draft: Q, selected: el, ownImage: ea, ownSelected: ei, direction: t, moves: n }),
                    D(!0),
                    I(e));
            },
            [Q, ea, ei, H, el],
        ),
        ex = i.useCallback(() => {
            let e = O.current,
                t = q.current;
            null != e && null != t && L({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = O.current,
            t = q.current;
        if (null == e || null == t) return;
        ex();
        let n = new ResizeObserver(ex);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ex]);
    let eg = M?.moves;
    i.useEffect(() => {
        if (null == eg) return;
        let e = setTimeout(() => R(null), 400),
            t = setTimeout(() => D(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eg]);
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
                null == n ? ef(t) : ep(n, n < K ? "back" : "forward");
            },
            [o, l, G, K, H.id, ef, ep],
        ),
        ej = i.useCallback(() => {
            G || 0 === K || ep(K - 1, "back");
        }, [G, K, ep]),
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
        eN = p[H.id] ?? iw,
        eC = i.useMemo(() => {
            var e, t;
            let n;
            return null != H.input
                ? ((e = H.input),
                  (t = g[H.id]),
                  (n = Q.trim()),
                  {
                      kind: "entities",
                      entities: eN,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eN.map((t) => (t.name.startsWith(a1[e]) ? t.name : `${a1[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [Q, g, eN, H.id, H.input]),
        eA = i.useCallback(
            (e, t) => {
                (x((t) => ({ ...t, [H.id]: e })), j((e) => ({ ...e, [H.id]: t })));
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
        [e_, eP] = i.useState(!1),
        [eR, eT] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eP(!0));
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
        eO = K === B - 1,
        ez = i.useCallback(() => {
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
                            : "ArrowRight" === e.key && eD && (e.preventDefault(), ez())));
            },
            [eb, eD, ej, ez],
        ),
        eq = et
            ? null
            : (0, a.jsxs)("div", {
                  className: il.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: il.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(aH.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(rE.y, {
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
                          placeholder: E.intl.string(aQ(H) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: H.question }),
                          disabled: G,
                          rows: 1,
                          className: il.Pu,
                          "data-conjure-clarification-other": H.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(il.$O, { [il.fI]: e_ && !eR, [il.Oh]: eR }),
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
                className: il.rf,
                style: null == T ? void 0 : { height: T.heading + T.rows },
                "data-moving": $ ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: O,
                        className: il.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: F,
                                tag: "span",
                                id: `${H.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: Z ? void 0 : 5,
                                className: h()(aU.TK, il.R_, { [il.TB]: "exit" === eu, [il.JU]: "enter" === eu }),
                                children: es,
                            }),
                            ed || Z
                                ? (0, a.jsx)("div", {
                                      className: aU.Q7,
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
                                      className: h()(aU.gb, aU.Q7),
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
                        className: il.Cg,
                        style: null == T ? void 0 : { insetBlockStart: T.heading },
                        children: (0, a.jsxs)("div", {
                            className: il.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: q,
                                    className: il.Ge,
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
                                                  className: il.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(iy, {
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
                                                                  ((n = t[H.id] ?? ik),
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
                                            ? (0, a.jsx)(iu, {
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
                                                  className: il.X_,
                                                  children: (0, a.jsx)(aV.Q, {
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
                                                  className: il.$y,
                                                  onFocus: eS,
                                                  onBlur: eE,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: E.intl.string(S.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(aZ, {
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
                                null == P
                                    ? null
                                    : (0, a.jsx)(
                                          iN,
                                          {
                                              projectId: n,
                                              question: P.question,
                                              draft: P.draft,
                                              selected: P.selected,
                                              ownImage: P.ownImage,
                                              ownSelected: P.ownSelected,
                                              direction: P.direction,
                                              disabled: G,
                                          },
                                          P.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            B > 1 || ee || et || null != H.input || aQ(H)
                ? (0, a.jsxs)("div", {
                      className: aU.qr,
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
                              className: aU.zt,
                              children: [
                                  eb
                                      ? (0, a.jsx)(aV.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: E.intl.string(S.default.Pk5lfA),
                                            onClick: ej,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(V.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(eO ? E.t.geKm7t : S.default.w1nRmT),
                                      disabled: !eD,
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
var iA = n(557744),
    iS = n(223347),
    iE = n(894443),
    iI = n(525530);
function iM(e, t) {
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
var i_ = n(289970),
    iP = n(411236);
function iR(e) {
    let { projectId: t, request: n, onDismiss: l, notifyAgent: r = !0 } = e,
        i = null != n.note && "" !== n.note ? n.note : E.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(i_.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: r,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: r, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let u = (0, a.jsx)(V.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: r,
                disabled: !n,
                text: E.intl.string(S.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: iP.Mk,
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
                          (0, a.jsx)("div", { className: iP.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(aU.nd, aU.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: aU.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: aU.TK,
                                      children: E.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(C.D, {
                                      className: h()(aU.gb, aU.Q7),
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
                              className: iP.DQ,
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
                              className: aU.qr,
                              children: (0, a.jsx)("div", { className: aU.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var iT = n(935208),
    iL = n(932111),
    i$ = n(404373),
    iD = n(435558),
    iO = n.n(iD);
let iz = "ConjureComposerDrafts";
function iF() {
    return B.w.get(iz) ?? {};
}
let iq = new Map(),
    iU = iO().throttle(() => {
        if (0 === iq.size) return;
        let e = iF();
        for (let [t, n] of iq) "" === n ? delete e[t] : (e[t] = n);
        (iq.clear(), B.w.set(iz, e));
    }, 1e3);
class iG extends o.Ay.Store {
    getDraft(e) {
        let t = iq.get(e);
        return null != t ? t : (iF()[e] ?? "");
    }
}
let iB = new iG(tA.h, {
    LOGOUT: function () {
        return (iq.clear(), iU.cancel(), B.w.remove(iz), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (iq.set(t, n), iU(), "" === n && iU.flush(), !1);
    },
});
function iK(e) {
    return "" !== iB.getDraft(e).trim();
}
var iH = n(29080);
function iV(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, af.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, af.Lf)(r) }),
    };
}
var iW = n(62617);
let iX = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    iZ = {
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
    iY = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, iW.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, iW.Z)(),
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
                        () => (0, iW.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, iW.Z)(),
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
                        () => (0, iW.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, iW.Z)(),
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
                        () => (0, iW.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, iW.Z)(),
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
                        () => (0, iW.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, iW.Z)(),
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
                        () => (0, iW.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, iW.Z)(),
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
                        () => (0, iW.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, iW.Z)(),
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
                        () => (0, iW.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, iW.Z)(),
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
                        () => (0, iW.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, iW.Z)(),
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
                        () => (0, iW.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, iW.Z)(),
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
                        () => (0, iW.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, iW.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function iJ(e) {
    return { ...iY[e], name: E.intl.string(iZ[e]()) };
}
function iQ(e) {
    return iX.includes(e) ? iJ(e) : void 0;
}
function i0(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % iX.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, iX[(t + n) % iX.length]);
            }),
            l
        );
    })(e))
        t.set(n, iJ(l));
    return t;
}
var i1 = n(615839);
function i2(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var i3 = n(60160),
    i4 = n(16634);
function i5(e) {
    let t = (0, af.SY)(e.steps);
    return null != t ? (0, af.WQ)(t) : i2(e.task);
}
function i6(e) {
    let t = i0(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? iQ(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: i2(e.task),
                      todoId: e.task.todoId,
                      line: i5(e),
                  },
              ];
    });
}
function i7(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, af.SY)(n.steps),
        d = u
            ? i5(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(i2(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, i1.MB)(e.durationMs),
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
                                    className: aR.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            i4.A,
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
                                      className: aR.iq,
                                      children: (0, a.jsx)(i3.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(av.A, {
        glyph: (0, a.jsx)(aj.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: i2(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: aR.nC,
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
var i8 = n(998445),
    i9 = n(643210),
    se = n(648127),
    st = n(372795),
    sn = n(163897);
let sl = "conjure-browser-viewer";
function sr(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [i9.A],
            () =>
                n.flatMap((e) => {
                    let n = i9.A.getTab(t, e);
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
        className: sn.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(sa, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function sa(e) {
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
        u = (0, e7.useHasModalOpen)(sl),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        p = (0, se.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(sn.Nr, f && sn.Xj),
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
                    { modalKey: sl },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: p }),
        children: [
            (0, a.jsxs)("div", {
                className: sn.Gt,
                children: [
                    (0, a.jsx)(st.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: sn.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: p }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: sn.qf,
                              children: (0, a.jsx)(i8.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: sn.HS,
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
                className: sn.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(sn.W9, f && sn.oM) }),
                    (0, a.jsx)(v.E, {
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
var si = n(268409);
let ss = new WeakMap(),
    so = new WeakMap();
function su(e) {
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
                    let t = ss.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = so.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), so.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (ss.set(e, n), n);
                })(ld.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: si.h, children: (0, a.jsx)(sr, { projectId: t, sessionIds: u }) });
}
var sc = n(469393);
function sd(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, lv.lG)(t.authored_at);
    return (0, a.jsx)(ak, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: sc.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sc.z,
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
                    ? (0, a.jsx)(V.$, {
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
var sm = n(155718);
function sf(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let sh = ["command", "user_command", "message_command", "message"],
    sp = new Set([sm.kc.CHAT, sm.kc.USER, sm.kc.MESSAGE]);
function sx(e) {
    return e.type ?? sm.kc.CHAT;
}
function sg(e) {
    return sp.has(sx(e));
}
function sv(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function sj(e, t) {
    let n = sh.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !sv(e)), ...n.filter(sv)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || sv(r) || l.push(r);
    }
    return sh.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function sb(e, t, n) {
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
    let s = e.commands.filter(sg).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (sx(e)) {
                    case sm.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case sm.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(sv),
        u = a.length > 0 ? sj([...a, ...o], !0) : sj("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var sy = n(377941),
    sk = n.n(sy);
function sw(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function sN(e) {
    return e.type === sm.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === sm.kc.USER || e.type === sm.kc.MESSAGE
          ? ""
          : "/";
}
let sC = {
        [lw.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [lw.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [lw.q7.ACTIVITY]: S.default["3/aHX6"],
        [lw.q7.OVERLAY]: S.default["rPpf5/"],
        [lw.q7.PROFILE_WIDGET]: null,
        [lw.q7.AUTOMOD]: null,
        [lw.q7.BOT]: null,
        [lw.q7.APPLICATION_COMMANDS]: null,
    },
    sA = [lw.q7.ACTIVITY, lw.q7.APP_CHANNEL, lw.q7.VOICE_CHANNEL, lw.q7.OVERLAY];
function sS(e) {
    return sA.find((t) => sf(e, t)) ?? null;
}
var sE = n(176999),
    sI = (((l = {}).IMAGE = "image"), l),
    sM = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    s_ = n(598748),
    sP = n(773669);
let sR = [],
    sT = {},
    sL = {};
function s$(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function sD(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: sI.IMAGE,
        visibility: sM.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var sO = n(127258),
    sz = n(803306),
    sF = n(320095),
    sq = n(963852),
    sU = n(95701),
    sG = n(889227),
    sB = n(427262);
let sK = new sU.nA({ id: "1337", guild_id: "1337", type: D.rbe.GUILD_TEXT, name: "preview" });
function sH(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([aJ.default], () => aJ.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, sz.nj)(new sG.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let sV = /^@\S+/;
var sW = n(97808),
    sX = n(778712),
    sZ = n(46054),
    sY = n(200700);
let sJ = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    sQ = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    s0 = ["blocked", "alert", "allowed"],
    s1 = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function s2(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, sY.getFriendlyDurationString)(n))
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
var s3 = n(984097),
    s4 = n(13673);
let s5 = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function s6(e) {
    let { example: t } = e,
        n = s2(t);
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
let s7 = ["glazedgamer", "sprinkles", "donutking"];
function s8(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = sJ[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(s3.nM, { [h()(s3.HV, s4.DX)]: s }),
        children: [
            (0, a.jsx)(ab.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: s3.my,
                children: (0, a.jsx)(sW.eu, {
                    src: (0, X.AE)(void 0, void 0),
                    size: sX._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: s3.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), sZ.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(s6, { example: n }) : null,
                ],
            }),
        ],
    });
}
function s9(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = sQ[t.section],
        s = new Set(t.examples.map(s2)),
        o = 1 === s.size ? t.examples.map(s2)[0] : null;
    return (0, a.jsxs)("div", {
        className: s3.UO,
        children: [
            (0, a.jsxs)("div", {
                className: s3.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: s5[r.tone],
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
                                      className: s3.IQ,
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
                className: s3.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(s8, { example: e, username: s7[(n + t) % s7.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function oe(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            s0
                .map((e) => ({ section: e, examples: t.filter((t) => s1[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: s3.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: s3.hk,
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
                    s9,
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
var ot = n(276293),
    on = n(460905),
    ol = n(110384),
    or = n(633018),
    oa = n(763754),
    oi = n(217424),
    os = n(194085),
    oo = n(20851),
    ou = n(692508),
    oc = n(798819);
function od(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(oc.item, oc.labelContainer, oc.colorDefault, {
            [oc.focused]: !0 === t.highlighted,
            [oc.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: oc.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: oc.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(oc.label, ou.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: oc.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: oc.icon }),
                  })
                : null,
        ],
    });
}
function om(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, ou.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: ol.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(oc.menu, ou.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: oc.scroller,
            children: [
                (0, a.jsx)(od, { item: s }),
                (0, a.jsx)("div", { className: oc.separator }),
                (0, a.jsx)(od, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var of = n(381941);
function oh() {}
function op(e) {
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
        p,
        { projectId: x, exchanges: g } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, o.bG)([aJ.default], () => aJ.default.getCurrentUser())),
        (n = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(x))),
        (l = n?.application_id),
        (r = (0, o.bG)([tn.A], () => tn.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([aJ.default], () => (null != l ? aJ.default.getUser(l) : void 0), [l])),
        (d = sH("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = sH("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (p = sH("31339", (0, sB.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == p || null == m || null == f
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
                                      i = (0, sF.rh)({
                                          ...(0, sq.Ay)({
                                              channelId: sK.id,
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
                                                        type: sO.G.APPLICATION_COMMAND,
                                                        user: (0, sq.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(sV, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              g,
                              { bot: m, currentUser: t, viewer: p, member: f },
                              {
                                  targetMessage: E.intl.string(S.default["y+QYes"]),
                                  memberMessage: E.intl.string(S.default.BUTRDc),
                              },
                          ),
                [g, m, t, p, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = sK.name;
    return (0, a.jsxs)("div", {
        className: ou.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: ou.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ot.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(ou.TE, `group-spacing-${of.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? ou.Rz : void 0,
                            children: [
                                (0, a.jsx)(oo.A, {
                                    message: n,
                                    channel: sK,
                                    author: (0, oa.FT)(n.author, sK),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(oi.A, { message: n, channel: sK }) : void 0,
                                    usernameClassName: r?.target === "user" ? ou.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: ou.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(os.Ay, {
                                              children: [
                                                  (0, a.jsx)(os.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: on.n,
                                                      onClick: oh,
                                                  }),
                                                  (0, a.jsx)(os.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: ol.W,
                                                      onClick: oh,
                                                  }),
                                                  (0, a.jsx)(os.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: eH.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: oh,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? ou.ET : ou.je,
                                          inert: !0,
                                          children: (0, a.jsx)(om, {
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
                className: ou.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(or.k, { size: "sm", color: "currentColor" }),
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
var ox = n(332173);
function og(e) {
    let { name: t } = e;
    return (0, a.jsxs)(ox.A, { children: ["/", t] });
}
function ov(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(sk());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(og, { name: e.name }, e.start) : e.text));
}
n(827669);
var oj = n(757789),
    ob = n(26137);
let oy = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var ok = n(573634);
let ow = {
    frame: Z.GameControllerIcon,
    overlay_widget: oj.V,
    user_widget: ob.r,
    bot: ee.RobotIcon,
    commands: ee.RobotIcon,
    automod: Q.ShieldIcon,
};
function oN(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(ok.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function oC(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: ok.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: ok.jw,
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
function oA(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: ok.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(ok.Vo, ok.G),
                children: (0, a.jsx)(Y.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: ok.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function oS(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: ok.wZ,
        children: t.map((e, t) => {
            let n = sN(e),
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
                                ? (0, a.jsx)(og, { name: e.name })
                                : (0, a.jsx)(ox.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function oE(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: ok.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: ok.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(ov, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function oI(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? Y.k : ow[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : oy[t.kind]);
    return (0, a.jsxs)("section", {
        className: ok.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: ok.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: ok.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: ok.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(ov, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(oE, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: ok.PG, children: r }) : null,
        ],
    });
}
function oM(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: ok.aN,
        children: [
            (0, a.jsxs)("div", {
                className: ok.Lv,
                children: [(0, a.jsx)(g.D, { variant: "heading-lg/semibold", color: "text-strong", children: r }), s],
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
                                let n = t.map(sk()).join("|");
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
                            (0, a.jsx)("div", { className: ok.yF, role: "separator" }),
                            (0, a.jsx)(oI, {
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
                                                        oN,
                                                        {
                                                            className: ok.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: ok.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        oA,
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
                                                            oN,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(oC, { labels: r }),
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
                                                              oN,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(oS, { commands: e.commands }),
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
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(sw) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            oN,
                                                            { caption: n, children: (0, a.jsx)(oC, { labels: l }) },
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
var o_ = n(633075),
    oP = n(946356),
    oR = n(58216),
    oT = n(27399);
function oL(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([aJ.default], () => aJ.default.getCurrentUser()),
        r = i.useMemo(() => new o_.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: oT.H,
              children: (0, a.jsx)(oP.A.Overlay, {
                  className: oT.w,
                  children: (0, a.jsx)(oR.A, {
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
var o$ = n(443863);
function oD(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = (0, ih._)(t, r),
        c = i.useCallback(() => {
            (0, eh.PK)(t, r).then(
                (e) => {
                    (0, im.R)({
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
              className: o$.xX,
              onClick: c,
              "aria-label": E.intl.string(S.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: o$.sN, onError: u }) : null,
          });
}
function oO(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = sf(c, lw.q7.APPLICATION_COMMANDS)),
            (l =
                sf(c, lw.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(sg)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : sb(c, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = sL } = t,
                r = (0, o.bG)([sP.default], () => sP.default.locale),
                a = (0, o.bG)([eL.Ay], () => {
                    let t = eL.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(sT);
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
                                                          ...s$(n),
                                                          ...(null != n.fallback ? { fallback: s$(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = sE.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[s_.m.WIDGET_TOP] || null == i[s_.m.WIDGET_BOTTOM]
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
                                                                    type: sE.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: sE.oG.NUMBER, value: a })
                                                                : (r[e] = { type: sE.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(sD),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: sR,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(u, c),
        p = d?.superseded === !0,
        x = c.what_changed?.trim() ?? "",
        g =
            ((t = c.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === sN(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = sS(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(sg)
                    ? sb({ ...c, bot: void 0 }, "commands", {
                          message: E.intl.string(S.default.J7qggf),
                          reply: E.intl.string(S.default.nqYtiy),
                          event: E.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(u)?.name, [u]),
        k =
            p && null != d
                ? E.intl.formatToPlainString(S.default.YZ3qJs, { version: d.version })
                : E.intl.string(S.default["3b6e7o"]),
        w = p ? (0, a.jsx)(aN, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(aC, {
        title: k,
        meta: w,
        superseded: p,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: o$.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: o$.Qs,
                children: (0, a.jsx)(oM, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(ov, { text: c.summary, commandNames: g }),
                            }),
                            "" !== x
                                ? (0, a.jsxs)("section", {
                                      className: o$.uW,
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
                                              children: (0, a.jsx)(ov, { text: x, commandNames: g }),
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
                                    ? (0, a.jsx)(oD, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: E.intl.string(null == (t = sS(c)) ? S.default["3/aHX6"] : sC[t]),
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(oL, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(oe, { automod: c.automod })
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
                                        (r = l.some((e) => "command" === e.kind || sv(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(op, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: g,
                }),
            }),
            null == m || p
                ? null
                : (0, a.jsxs)("div", {
                      className: o$.qr,
                      children: [
                          (0, a.jsx)(V.$, {
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
var oz = n(289565);
function oF(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: oz.m, children: n })
        : (0, a.jsxs)("div", {
              className: oz.Z,
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
function oq(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "unpublished" === t.state);
}
function oU(e, t) {
    return null != e && oq(t, e.status);
}
let oG = new WeakMap();
var oB = n(175841),
    oK = n(27232),
    oH = n(505930),
    oV = n(385081);
let oW = "conjurePublishRatings",
    oX = [1, 2, 3, 4, 5],
    oZ = { 1: S.default.GhbsGA, 2: S.default.cm0nwU, 3: S.default.kGvlh2, 4: S.default.dVBSUg, 5: S.default.DKlgF7 };
function oY(e) {
    return E.intl.string(oZ[e]);
}
let oJ = new Set(),
    oQ = 0;
function o0() {
    return B.w.get(oW) ?? {};
}
function o1(e, t) {
    return o0()[e]?.[t] ?? null;
}
function o2(e) {
    return (oJ.add(e), () => oJ.delete(e));
}
function o3(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, oV.Fz)(e, n);
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
var o4 = n(54100);
function o5(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: o4.mo,
        role: "status",
        children: [
            (0, a.jsx)(oB.SparklesIcon, { size: "xs", color: "currentColor", className: o4.dQ, "aria-hidden": !0 }),
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
function o6(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: o } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(o2, () => oQ),
                {
                    rating: o1(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != o1(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, oV.gw)(i);
                            let s = o0();
                            return (B.w.set(oW, { ...s, [t]: { ...s[t], [n]: l } }), oQ++, oJ.forEach((e) => e()), i);
                        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
                        return null != a && e <= 2 ? a : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r }),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, p] = i.useState(!1),
        x = i.useId(),
        g = i.useId(),
        j = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => p(!1), 420);
            return () => clearTimeout(e);
        }, [f]),
        null != s && !f)
    )
        return (0, a.jsx)(o5, { rating: s });
    let b = null != s,
        y = b ? s : (d ?? u),
        k = b || (null == d && null != u);
    function w(e) {
        if (b) return;
        (c(e), m(null), p(!0));
        let t = o(e);
        null != t && (0, e7.openModal)((e) => (0, a.jsx)(o3, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: o4.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: o4.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: g,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: h()(o4.Pf, { [o4.KH]: null == y }),
                        children: E.intl.string(S.default.mTV326),
                    }),
                    oX.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: h()(o4.Pf, { [o4.KH]: y === e }),
                                children: oY(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": g,
                className: o4.uf,
                children: oX.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? oK.StarIcon : oH.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: o4.uK,
                            onMouseEnter: () => {
                                b || m(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: x,
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
                                    className: o4.hF,
                                    "aria-label": E.intl.formatToPlainString(S.default.NU7Dex, {
                                        rating: e,
                                        label: oY(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: h()(o4.d4, { [o4.cO]: t, [o4.Ng]: t && k }),
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
function o7(e) {
    let { projectId: t, publish: n } = e;
    return (0, a.jsx)("span", {
        ...{ [ro]: t },
        children: (0, a.jsx)(V.$, {
            variant: "primary",
            size: "sm",
            loading: n.publishing,
            text: n.label,
            onClick: () => rd(t),
        }),
    });
}
function o8(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, e0.Ay)(t);
    return null != r && oU(r, l)
        ? (0, a.jsx)(oF, {
              children: (0, a.jsxs)(e6.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(o7, { projectId: t, publish: r }),
                      null != n ? (0, a.jsx)(o6, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var o9 = n(303345),
    ue = n(44255),
    ut = n(416473),
    un = n(289830);
function ul(e) {
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
                        (await (0, ut.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof o9.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, ue.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, ue.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(ak, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: un.r,
            children: [
                (0, a.jsxs)("div", {
                    className: un.z,
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
                    ? (0, a.jsx)(V.$, {
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
var ur = n(989271);
function ua(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(ur.nM, { [ur.f1]: s, [ur.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: ur.jo,
                children: [
                    n
                        ? (0, a.jsx)(nC.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ur.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ur.G9,
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
function ui(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(ak, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                ua,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var us = n(530557),
    uo = n(872162),
    uu = n(564963),
    uc = n(202723);
function ud(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, e7.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: us.R })), [r.fields]),
        d = (0, uu.bB)(l, s),
        m = h()(uc.Lo, { [uc.jY]: d });
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
                        (0, a.jsx)(uo.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: uc.Lo,
                      children: (0, a.jsx)(uo.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
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
                                className: uc.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: uc.c9,
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
                            (0, a.jsx)(uo.C, { label: E.intl.string(S.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: uc.Lo,
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
                        (0, a.jsx)(uo.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: uc.sq,
                            children: (0, a.jsx)(V.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: E.intl.string(S.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var um = n(919790),
    uf = n(908492),
    uh = n(971824),
    up = n(162052),
    ux = n(165648);
function ug(e) {
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
            closed: p = !1,
            segmentDurationMs: x,
        } = e,
        g = i.useMemo(() => (0, af.Jf)(n, l), [n, l]),
        v = i.useMemo(
            () =>
                null == m
                    ? g
                    : {
                          ...g,
                          steps: g.steps.filter((e) => e.segment === m),
                          tasks: g.tasks.filter((e) => e.task.segment === m),
                      },
            [g, m],
        );
    if (u)
        return (0, a.jsx)("ol", {
            className: aR.pj,
            "data-live": !1,
            children: (0, a.jsx)(av.A, {
                glyph: (0, a.jsx)(iH.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (x ?? (h ? (g.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, af.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = i0(k.map((e) => e.taskId)),
        N = !p && (l || k.some((e) => "running" === e.task.status)),
        C = i6(k);
    return (0, a.jsxs)("ol", {
        className: aR.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(ax.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: p,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: g.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? iQ(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          i7,
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
            (0, a.jsx)(su, { projectId: t, steps: n, tree: g, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: aR.YO,
                      children: (0, a.jsx)(a_, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function uv(e) {
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
            settingsRequest: p,
            publishCta: x,
            turnId: g,
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
        P = i.useMemo(
            () => iV({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: R, lastStreamedMessage: T, showsClosingMessage: L, closingContent: $ } = P,
        D = (N ? C : void 0) ?? P.attachmentsHost,
        O = L && !N,
        z = null == u ? null : (0, a.jsx)(um.A, { projectId: t, attachments: u }),
        F = null == z ? null : (0, a.jsx)("div", { className: aR.MT, children: z }),
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
        className: aR.ue,
        children: [
            R.length > 0 && !N
                ? (0, a.jsx)("ol", {
                      className: aR.dO,
                      children: R.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: aR.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: ux.PT,
                                          children: (0, uf.U)(e.content, !0, {
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
                ? (0, a.jsx)(oO, { projectId: t, proposal: r, version: s, onApprove: y })
                : O
                  ? (0, a.jsxs)("div", {
                        className: h()(aR.ky, up.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(ux.PT, aR.cW),
                                children: (0, uf.U)($, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === D ? F : null,
                            q,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(aR.ky, up.XR, { [uh.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(ud, {
                          projectId: t,
                          cardId: d ?? "",
                          request: c,
                          status: f,
                          awaiting: "open" === f ? m : void 0,
                      }),
                  })
                : null,
            null != p
                ? (0, a.jsx)("div", {
                      className: h()(aR.ky, up.XR),
                      children: (0, a.jsx)(iR, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== D && ("closing" !== D || O) ? null : z,
            null != x ? (0, a.jsx)(o8, { projectId: t, turnId: g ?? null, cta: x }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(ui, { ideas: o, pickedIdeaIds: b, onPick: j }) : null,
            null != A ? (0, a.jsx)(sd, { proposal: A, onRestore: I }) : null,
            null != M ? (0, a.jsx)(ul, { projectId: t, proposal: M, current: _ }) : null,
            O ? null : q,
        ],
    });
}
var uj = n(864970),
    ub = n(146806),
    uy = n(475358),
    uk = n(717400),
    uw = n(99677),
    uN = n(655098),
    uC = n(234320),
    uA = n(191023);
function uS(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(tU.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: lu.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(uA.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: lu.OY,
                    children: (0, a.jsx)(aH.PencilIcon, {
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
function uE(e) {
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
                ? (0, a.jsx)(aV.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: E.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var uI = n(901173),
    uM = n(161431),
    u_ = n(280450),
    uP = n(503275),
    uR = n(659280),
    uT = n(351906),
    uL = n(407653),
    u$ = n(322915);
function uD(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([uT.A], () => uT.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      uR.Ay.User,
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
                      uR.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(uL.A, { projectId: n, file: e.file, className: u$.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        f = l.findIndex((e) => "file" === e.kind),
        h = -1 === f ? m : m.slice(0, f),
        p = -1 === f ? [] : m.slice(f);
    return (0, a.jsx)(uR.Ay, {
        id: t,
        className: u$.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(uO, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                p.length > 0
                    ? (0, a.jsx)(uO, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: p })
                    : null,
            ],
        }),
    });
}
function uO(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: u$.Gf, children: n }),
            l,
        ],
    });
}
var uz = n(719442),
    uF = n(355622),
    uq = n(408018),
    uU = n(186306),
    uG = n(323350),
    uB = n(35277),
    uK = n(820066),
    uH = n(683167),
    uV = n(267102),
    uW = n(259691);
let uX = (0, sU.createChannelRecord)({ id: "1", type: D.rbe.DM });
function uZ(e) {
    let t = uK.VW.end(e, []);
    return { anchor: t, focus: t };
}
function uY(e) {
    return (0, uG.WO)(uK.VW.richValue(e), { mode: "raw" });
}
function uJ(e, t) {
    ((e.children = (0, uq.x7)(t)), (e.selection = uZ(e)), e.onChange());
}
function uQ(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(iL.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(uW.A, { attachmentId: r }), n] });
}
var u0 = n(497437);
let u1 = "text-md/normal",
    u2 = null;
function u3(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, f] = i.useState(0),
        [p, x] = i.useState(0),
        [g, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            (x(i + a), f(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                m = 0 === d ? 1 : s / d,
                h = 0 === d ? 1 : o / d;
            j({
                frontFrom: 1e3 * (0, ub._R)(m),
                frontTo: 1e3 * (0, ub._R)(h),
                backFrom: 1e3 * (0, ub.T)(m),
                backTo: 1e3 * (0, ub.T)(h),
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
    let A = "in" === k ? g.backFrom : g.frontFrom,
        I = "out" === k ? g.frontTo : g.backTo,
        M = (0, o.bG)([W.Ay], () => W.Ay.useReducedMotion),
        _ = t === E.intl.string(S.default.Zc7gML),
        P = r === t && _;
    function R(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(u0.VT, { [u0.qk]: l }),
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
            children: (0, a.jsx)(uy.e, { shortcut: "tab", className: u0.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(uj.o, {
                text: t,
                variant: u1,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: h()(u0.xM, { [u0.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            R(u0.IS, n || (!M && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: u0.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: u1, tag: "span", children: t }),
            }),
            P
                ? (0, a.jsxs)("span", {
                      className: u0.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: u1, tag: "span", className: u0.xM, children: t }),
                          R(u0.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let u4 = i.memo(function (e) {
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
                suggestion: p,
                questionOpen: x = !1,
                hasPendingContext: g = !1,
                onDraftHasTextChange: v,
                modelSettings: j,
                onModelSettingsChange: b,
            } = e,
            y = (function (e) {
                let t = i.useContext(uV.Ay),
                    [n] = i.useState(() => {
                        let n = (0, uz.ie)();
                        return (
                            (n.children = (0, uq.x7)(e)),
                            (n.selection = uZ(n)),
                            (0, uH.a)({
                                editor: n,
                                chatInputType: uF.oU.GENERIC_RICH_TEXTAREA,
                                channel: uX,
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
                                    for (let [t, l] of uK.VW.nodes(e, { at: [], match: uK.l5.isText }))
                                        for (let e of t.text.matchAll(iL.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        uU.o.withMergedEntry(e, () =>
                                            uK.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    uB.b.textToVoid(
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
            })(iB.getDraft(t)),
            [k, w] = i.useState(() => uY(y)),
            C = i.useRef(k),
            [A, I] = i.useState(null),
            M = i.useCallback(() => {
                let e = uY(y);
                e !== C.current &&
                    ((C.current = e),
                    tA.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }),
                    w(e));
                I(
                    (function (e) {
                        let { selection: t } = e;
                        if (null == t || !uK.ZF.isCollapsed(t)) return null;
                        let [n] = uK.VW.node(e, t.anchor.path);
                        return uK.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                    })(y),
                );
            }, [y, t]),
            P = i.useCallback((e) => uJ(y, e), [y]),
            R = "" !== k.trim();
        i.useEffect(() => v?.(R), [R, v]);
        let T = i.useRef(t);
        i.useLayoutEffect(() => {
            T.current !== t && ((T.current = t), uJ(y, iB.getDraft(t)));
        }, [y, t]);
        let L = (0, o.bG)([W.Ay], () => W.Ay.isSubmitButtonEnabled),
            [$, O] = i.useState(!1);
        i.useEffect(() => {
            l || O(!1);
        }, [l]);
        let z = i.useRef(null),
            {
                drafts: F,
                addFiles: q,
                pasteFiles: U,
                removeDraft: G,
                settled: B,
                takeRefs: K,
            } = tV({ projectId: t, surface: "chat", onUploadFile: c }),
            H = lt.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && n8(n);
            }),
            V = "" !== k.trim() || F.length > 0 || g || H,
            X = n && V && B,
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
                            null != l && ((0, uP.Y_)(l), r.forEach(uP.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([aJ.default], () => (null == l ? null : aJ.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [aJ.default],
                            () => r.map((e) => aJ.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([u_.default], () => u_.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            Q = (0, uM.rU)(t),
            [ee, et] = i.useState(null),
            [en, el] = i.useState(0),
            er = i.useMemo(() => (null != A && n ? (0, uI.OG)(A, A.length) : null), [A, n]),
            ea = er?.start ?? null;
        i.useEffect(() => {
            null == ea ? et(null) : (0, uM.IP)(t);
        }, [ea, t]);
        let ei = ea === ee ? null : er,
            es = i.useMemo(() => (null == ei ? [] : (0, uI.l$)(J, Q, ei.text)), [ei, J, Q]),
            eo = ei?.text;
        i.useEffect(() => el(0), [eo]);
        let em = es.length > 0,
            ef = Math.min(en, Math.max(0, es.length - 1)),
            ep = i.useId(),
            ex = i.useCallback(
                (e) => {
                    let t = es[e];
                    null != ei &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (uB.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                uB.b.insertText(e, `${n} `));
                        })(y, ei.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [es, ei, y],
            ),
            eg = i.useCallback(() => {
                if (!X) return;
                let e = K(),
                    n = H
                        ? (function (e) {
                              let t = ll(e);
                              if (null == t || !n8(t)) return null;
                              let n = t.history.present,
                                  l = al(e);
                              return (
                                  lr(e, (e) => ({ ...e, history: nQ, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, _.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (r9.set(i, s),
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
                                              capture: (t) => (0 === t ? l : al(e)),
                                              composite: (e) => r7(e, n),
                                              upload: (t) =>
                                                  (0, eh.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, eh.n6)(e, t.id),
                                              send: (n) => (0, _.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      at(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (r9.delete(i),
                                                          window.setTimeout(() => {
                                                              (at(i, null),
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
                    null == u2 && (u2 = document.createElement("canvas").getContext("2d"));
                    let i = u2;
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
                })(u6(eN.current), e$.current, (0, uI.Lj)(k));
                ("" !== l && Y(l), P(""), et(null));
            }, [X, H, t, k, s, K, P]),
            ev = i.useCallback(
                (e) => {
                    (e.preventDefault(), eg());
                },
                [eg],
            ),
            ej = i.useCallback(() => {
                null == u || $ || (O(!0), u());
            }, [u, $]),
            eb = null == p || "" !== k || !n || r || g ? null : p,
            ey = i.useCallback(
                (e) => {
                    if (em && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = es.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), el((ef + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ex(ef));
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
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), P(eb));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eg());
                },
                [eg, d, l, u, $, ej, eb, P, em, es.length, ef, ex, ei],
            ),
            ek = i.useCallback(
                (e) => {
                    n && U(e);
                },
                [n, U],
            );
        (0, uC.Vo)({
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
                f?.((0, uI.Lj)(e), () => {
                    C.current === e && P("");
                });
            }, [f, P]),
            eS = i.useCallback((e) => {
                let t = z.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eE, eI] = i.useState(0),
            [eM, e_] = i.useState(!1);
        i.useEffect(() => {
            if (0 === k.length) return void e_(!1);
            let e = u6(eN.current);
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
            let t = setTimeout(() => e_(!1), u5);
            return () => clearTimeout(t);
        }, [k]);
        let eP = i.useMemo(() => ({ "--custom-glow-x": `${eE}px` }), [eE]),
            eR = eM ? ` ${u0.EB}` : "",
            eT = r
                ? E.intl.string(S.default.qqlUiW)
                : n
                  ? g
                      ? E.intl.string(S.default.knUjL3)
                      : x
                        ? E.intl.string(S.default.IevBEw)
                        : E.intl.string(l ? S.default["0BJa/0"] : S.default.TEeU7z)
                  : E.intl.string(S.default.zZ9NgM),
            e$ = i.useRef(0),
            eD = i.useRef(null),
            eO = i.useCallback((e) => {
                if ((eD.current?.disconnect(), null == e)) return;
                e$.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    e$.current = e.clientWidth;
                });
                (t.observe(e), (eD.current = t));
            }, []),
            ez = i.useId(),
            eF = i.useId(),
            eq = null != eb,
            eU = Z ?? eb ?? eT,
            eG = "" === k && "" !== eU;
        return (0, a.jsxs)("form", {
            onSubmit: ev,
            className: u0.DA,
            children: [
                em
                    ? (0, a.jsx)(uD, {
                          id: ep,
                          projectId: t,
                          suggestions: es,
                          selectedIndex: ef,
                          onHover: el,
                          onSelect: ex,
                      })
                    : null,
                F.length > 0 || H
                    ? (0, a.jsxs)("div", {
                          className: u0.lN,
                          children: [
                              F.map((e) => (0, a.jsx)(tW, { draft: e, onRemove: G }, e.localId)),
                              H ? (0, a.jsx)(uS, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${u0.wg} ${u0.LP}${eR}`, style: eP, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${u0.wg} ${u0.L3}${eR}`, style: eP, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: u0.VA,
                    ref: eN,
                    children: [
                        (0, a.jsx)("input", {
                            ref: z,
                            type: "file",
                            multiple: !0,
                            onChange: ew,
                            className: u0.nY,
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
                                                      iconLeft: uk.q,
                                                      leadingAccessory: { type: "icon", icon: uk.q },
                                                      action: m,
                                                  })
                                                : null,
                                            null != f
                                                ? (0, a.jsx)(ed.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: uw.t,
                                                      leadingAccessory: { type: "icon", icon: uw.t },
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
                                    className: `${u0.Y0} ${u0.nu}`,
                                    disabled: !n,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(tg.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: u0.Qu,
                                    }),
                                });
                            },
                        }),
                        eG
                            ? (0, a.jsx)("div", {
                                  ref: eO,
                                  className: u0.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(u3, { text: eU, offering: eq && null == Z, typed: null != Z }),
                              })
                            : null,
                        (0, a.jsx)(ab.A, { id: eF, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(iL.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(uN.A, {
                                editor: y,
                                containerClassName: h()(u0.sq, nt.dv),
                                className: u0.jp,
                                readOnly: !n,
                                canFocus: n,
                                onChange: M,
                                onBlur: () => I(null),
                                onKeyDown: ey,
                                onPaste: ek,
                                renderExtraElement: uQ,
                                "aria-labelledby": eF,
                                "aria-describedby": eG ? ez : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": em,
                                "aria-controls": em ? ep : void 0,
                                "aria-activedescendant": em ? ((0, uR.aI)(ef) ?? void 0) : void 0,
                            }),
                        }),
                        eG ? (0, a.jsx)(ab.A, { id: ez, children: eT }) : null,
                        (0, a.jsx)("div", {
                            className: u0.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${u0.Y0} ${u0.$E}`,
                                              disabled: $,
                                              onClick: ej,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(iH.w, {
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
                                            className: `${u0.Y0} ${u0.$E}`,
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
                                  className: u0.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: u0.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: u0.rt,
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
    u5 = 1500;
function u6(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var u7 = n(709753),
    u8 = n(540338),
    u9 = n(986109);
let ce = i.createContext(null);
function ct(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(ce),
        [d, m] = i.useState(() => W.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: h()(u9.xk, { [u9.g5]: d, [u9.Qo]: s, [u9.q3]: o }),
        children: n,
    });
}
let cn = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    cl = new Map();
function cr(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function ca(e, t) {
    return null != e && e > 0 && e < t;
}
let ci = "ideas",
    cs = "live_behind",
    co = "conjureTipDismissals",
    cu = new Set(),
    cc = new Set(),
    cd = 0;
function cm() {
    let e = B.w.get(co);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function cf(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return cu.has(((n = e.id), `${t}:${n}`));
        case "app":
            return cm().app[t]?.includes(e.id) === !0;
        case "forever":
            return cm().forever.includes(e.id);
    }
}
function ch(e) {
    return (cc.add(e), () => cc.delete(e));
}
let cp = [12e4, 6e4];
var cx = n(292771);
function cg(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([W.Ay], () => W.Ay.useReducedMotion),
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
        let p = f.current !== u;
        if (((f.current = u), !p || l || null == s || null == i || null == a || null == h)) return;
        let x = i.width / Math.max(1, h.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - h.left}px, ${i.top - h.top}px) scale(${x})`,
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
    let p = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!p) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [p, r]),
        (0, a.jsx)("div", {
            ref: c,
            className: cx.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(cx.qd, e.leaving ? cx.dv : cx.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var cv = n(443865),
    cj = n(247171);
function cb(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(cj.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(cj.gutter, cj[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: cj.content, children: i }),
        ],
    });
}
var cy = n(716502);
function ck(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cb, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: cy.Nr,
        children: (0, a.jsxs)("section", {
            className: cy.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: cy.X8,
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
function cw(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: cy.DD,
        children: t,
    });
}
function cN(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: cy.rf,
        children: t,
    });
}
function cC(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: cy.o1, children: t });
}
let cA = {
    ...cn,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(ck, {
            icon: cv.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(cw, { children: E.intl.string(S.default.OJlbhX) }),
                (0, a.jsx)(cN, { children: E.intl.string(S.default["3vJBni"]) }),
                (0, a.jsx)(cC, {
                    children: (0, a.jsx)(V.$, {
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
var cS = n(830205);
function cE(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cb, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: cS.aK,
        children: (0, a.jsxs)("div", {
            className: cS.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: cS.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: cS.X8,
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
var cI = n(95635);
let cM = [
    {
        id: cs,
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
                (null != t.publishCta && oU(n, t.publishCta)) ||
                ca(e.messagesSinceShown(cs), 10)
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
                ? (0, a.jsx)(cE, {
                      icon: cI.UploadIcon,
                      onDismiss: r,
                      children: (0, a.jsx)("span", {
                          ...{ [ro]: n },
                          children: E.intl.format(S.default.fWfeZ8, { onPublish: () => rd(n) }),
                      }),
                  })
                : null;
        },
    },
    cA,
    {
        id: ci,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(cn) ||
                0 === e.messagesSinceShown(cn.id) ||
                ca(e.messagesSinceShown(ci), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(cE, {
                icon: cv.LightbulbIcon,
                onDismiss: l,
                children: E.intl.format(S.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var c_ = n(817921);
function cP(e) {
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
                p,
                x =
                    ((s = (0, e0.Ay)(t)),
                    (u = (0, o.bG)([aJ.default], () => aJ.default.getCurrentUser()?.id)),
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
                        cp,
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
                                        if ((0, ah.BL)(n)) return n;
                                        if (!(0, ah.B0)(e, t)) break;
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
                            (p = (function (e) {
                                for (let t = e.length - 1; t >= 0; t--)
                                    if ("publish_notice" === e[t].kind) return e[t].created_at;
                                return null;
                            })(n)),
                        justRemixed: c?.projectEvent?.type === "remixed",
                        publishedSinceLastMessage: null != p && 0 === cr(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = cl.get(`${t}:${e}`);
                            return null != l ? cr(n, l, u) : null;
                        },
                        isDismissed: (e) => cf(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(ch, () => cd);
            let { callout: g, hint: v } = (function (e, t, n) {
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
                })(e, x, (e) => cf(e, t)),
                j = [g, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== x.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                cl.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                j.map((e) => ({
                    ...e,
                    options: {
                        context: x,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          if (!(null == e.dismissal || cf(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  cu.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = cm();
                                                  B.w.set(
                                                      co,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (cd++, cc.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(cM, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(ct, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: c_.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(cg, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var cR = n(52133),
    cT = n(732159),
    cL = n(888366),
    c$ = n(862026),
    cD = n(291192);
function cO(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, c$.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: cD.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: cD.Sp,
                children: [
                    (0, a.jsx)("span", { className: cD.q3 }),
                    (0, a.jsxs)("span", {
                        className: cD.g8,
                        children: [
                            (0, a.jsx)(cL.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: cD.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cD.nM,
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
                                          (0, a.jsx)(aV.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, e7.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(cT.u, {
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
function cz(e) {
    return (0, o.bG)([eL.Ay, tn.A], () => {
        let t = eL.Ay.getProject(e);
        return null == t ? "" : (tn.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var cF = n(951465),
    cq = n(369455);
function cU(e) {
    let { projectId: t, notice: n } = e,
        l = cz(t),
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
            n.update && null != n.published_revision ? (0, a.jsx)(cG, { projectId: t, notice: n }) : null,
        ],
    });
}
function cG(e) {
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
                                        className: cq.Z,
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
                                null != e && (0, cF.A)(e);
                            },
                        }),
              ],
          });
}
var cB = n(940874),
    cK = n(505527),
    cH = n(930390),
    cV = n(521981),
    cW = n(491182),
    cX = n(438729),
    cZ = n(622868),
    cY = n(448368),
    cJ = n(837528),
    cQ = n(470964),
    c0 = n(715628),
    c1 = n(752636),
    c2 = n(9842),
    c3 = n(589022),
    c4 = n(994500),
    c5 = n(967198);
let c6 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function c7(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function c8(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function c9(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = c8(e, t),
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
    if (c7(r) && c7(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && c7(c8(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function de(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([W.Ay], () => W.Ay.useReducedMotion),
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
                      for (; a > 0 && c9(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && c6.has(e.charAt(l - 1));) l--;
                                    return c6.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && c9(t, o);) o++;
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
var dt = n(624479),
    dn = n(890377),
    dl = n(180227);
function dr(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(dl.QE, { [dl.Rn]: t }),
              children: (0, a.jsx)(os.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          os.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function da(e) {
    return eX.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: dt.CopyIcon, onClick: () => (0, eX.C)(e) }]
        : [];
}
function di(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: dn.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: eo.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(dr, { groupStart: n, actions: [...r, ...da(t)] });
}
function ds(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: rD.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: nS.BugIcon, onClick: r }];
    return (0, a.jsx)(dr, { groupStart: n, actions: [...i, ...da(t), ...s] });
}
let du = (0, sU.createChannelRecord)({ id: "conjure-builder", type: D.rbe.DM }),
    dc = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function dd(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(dl.Yq, { [dl.x1]: t }), children: e });
}
function dm(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let df = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function dh(e, t, n) {
    let { content: l } = (0, cQ.A)(e, df),
        r = i.useMemo(() => ((0, iL.aW)(e.content) ? (0, cV.z2)(uf.U, e, df).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: du, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(cX.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, c0.A)(s, r);
}
function dp(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, cJ.m)(e, du, t.usernameProfile, l),
        u = (0, cJ.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([c5.A], () => c5.A.getGuildId()),
        d = (0, o.bG)([aJ.default], () => aJ.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = aJ.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(c3.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function dx(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, iL.aW)(n.content)
                          ? (0, cV.z2)(uf.U, n, e).content
                          : (0, cV.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: dl.GV,
                              children: [
                                  (0, a.jsx)(nA.x, {
                                      className: dl.Rj,
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
            [c4.A],
            () => ({
                isReplyAuthorBlocked: c4.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: c4.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, oa.X4)(n),
        m = (0, oa.X4)(t),
        f = dp(n);
    return (0, a.jsx)(cY.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: du,
        referencedMessage: { state: c2.a.LOADED, message: n },
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
function dg(e) {
    let { message: t, author: n } = e,
        l = dp(t);
    return (0, a.jsx)(cZ.Ay, {
        message: t,
        channel: du,
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
function dv(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, uP.vm)(l),
        c = i.useMemo(() => (0, oa.FT)(u, null), [u]),
        d = i.useMemo(() => nF(t), [t]),
        m = d?.body ?? t,
        f = (0, uI.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, sq.Ay)({ channelId: du.id, content: m, author: u });
            return (0, sF.rh)({ ...e, timestamp: dm(n, e.timestamp), state: D.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              dj,
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
function dj(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = dh(t, l);
    return (0, a.jsx)(cW.A, {
        className: dl.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(dg, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: dl.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: dl.GV,
                              children: [
                                  (0, a.jsx)(nA.x, {
                                      className: dl.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: dl.WO, children: u }),
                      ],
                  }),
        childrenAccessories: dd(i, "" !== l),
        childrenButtons: (0, a.jsx)(di, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function db(e) {
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
        { text: m, revealing: f } = de(t, { streaming: (0, o.bG)([tb.A], () => c && tb.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, oa.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        x = r?.userId,
        g = (0, uP.vm)(x),
        v = i.useMemo(() => (null == r ? null : nF(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == g) return null;
            let e = (0, sq.Ay)({ channelId: du.id, content: v?.body ?? r.content, author: g });
            return (0, sF.rh)({ ...e, id: r.id, timestamp: dm(r.createdAt, e.timestamp), state: D.cmJ.SENT });
        }, [r, v, g]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: du.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, sq.Ay)({ channelId: du.id, content: "", author: dc })),
        k = i.useMemo(
            () =>
                (0, sF.rh)({
                    ...y,
                    timestamp: dm(n, y.timestamp),
                    state: D.cmJ.SENT,
                    ...(null != b ? { type: D.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        N = i.useMemo(
            () => (0, c1.A)({ message: k, channel: du, author: p, guildId: void 0, isGroupStart: u }),
            [k, p, u],
        ),
        C = dh(w, m, dl.OS);
    return (0, a.jsxs)("div", {
        className: dl.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(cW.A, {
                className: dl.yE,
                author: p,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(dx, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: dd(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: dl.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(Y.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
var dy = n(981879);
function dk(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, sF.rh)(
                    { ...(0, sq.Ay)({ channelId: du.id, content: "" }), id: `conjure:${t}`, state: D.cmJ.SENT },
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
                    channelId: du.id,
                    messageId: l.id,
                    users: [dc],
                    emoji: e,
                    reactionType: cK.v.NORMAL,
                }),
                    tA.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: du.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: cK.v.NORMAL,
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
            className: dy.H,
            children: (0, a.jsx)(cH.A, {
                message: l,
                channel: du,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var dw = n(616e3),
    dN = n(155899);
function dC(e) {
    let { onSelect: t, onClose: n = eR.Z_, onRestoreVersion: l, onViewTrace: r } = e;
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
                          icon: rD.e,
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
function dA(e) {
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
            onApprovePlan: p,
            onRestoreVersion: x,
        } = e,
        g = n.message,
        v =
            null != x
                ? "assistant" !== g.role || null == g.sourceSha
                    ? null
                    : {
                          sha: g.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(g.created_at).toISOString(),
                          subject: g.content,
                      }
                : null,
        j = null != v && null != x ? () => dS(v, x) : void 0,
        b =
            ((t =
                lx() && "assistant" === g.role && (0, ah.BL)(g)
                    ? (g.turn_id ?? g.steps.find((e) => null != e.turn_id)?.turn_id ?? g.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [dw.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : dw.A.getTimingTraces(l).findLast((e) => {
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
        k = g.in_reply_to,
        w = g.restoreProposal;
    return (0, a.jsx)(ct, {
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
                          void (0, eR.jA)(t, (e) => (0, a.jsx)(dC, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(db, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(ds, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: g.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(uv, {
                projectId: l,
                steps: g.steps,
                content: "",
                proposal: g.proposal,
                planVersion: s,
                interrupted: !0 === g.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: g.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : g.ideas,
                pickedIdeaIds: null == g.ideas ? void 0 : u,
                attachments: g.attachments,
                secretRequest: n.active ? void 0 : g.secretRequest,
                secretRequestId: g.render_id,
                secretRequestAwaiting: c,
                secretRequestStatus: d,
                settingsRequest: n.active || m ? void 0 : g.settingsRequest,
                publishCta: n.active ? null : g.publishCta,
                turnId: (0, ah.lb)(g) ?? void 0,
                onPickIdea: h,
                onApprovePlan: p,
                restoreProposal: w,
                publishScheduleProposal: g.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != w && null != x && f
                        ? () =>
                              dS(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  x,
                              )
                        : void 0,
            }),
        }),
    });
}
function dS(e, t) {
    (0, dN.F)({ onConfirm: () => t(e) });
}
var dE = n(288539);
function dI(e, t, n) {
    return (0, a.jsx)(dE.A, { userId: e, content: `@${t}` }, n);
}
function dM(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => (0, uP.Y_)(l), [l]);
            let r = (0, o.bG)([aJ.default], () => (null == l ? null : aJ.default.getUser(l)), [l]),
                a = (0, sB.tx)(r),
                s = cz(e),
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
        })(n, l, dI),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([e1.A], () => null != t && t.length > 0 && iM({ keys: t }, e1.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(iR, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let d_ = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    ae.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, iL.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(ct, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dv, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(um.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(uE, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(dk, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, cB.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(ct, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(db, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(um.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(ct, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(ug, {
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
                    return (0, a.jsx)(ct, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(db, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(cU, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(ct, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(db, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(dM, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(ct, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(cO, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(ct, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(ug, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(ct, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(ug, {
                            projectId: l,
                            steps: dP,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(dA, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, cR.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, cR.A)(e.row, t.row, ["message"]) &&
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
                (0, cR.A)(e.replyTo, t.replyTo) &&
                (0, cR.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    dP = [],
    dR = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    dT = new WeakMap();
function dL(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function d$(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let dD = i.memo(function (e) {
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
            scrollerRef: p,
            stickToBottomRef: x,
            pinned: g,
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
    let P = i.useCallback((e) => {
            (I(e), window.clearTimeout(M.current), (M.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        R = (0, o.bG)([lJ.A], () => lJ.A.getPublishStatus(t)),
        T = (0, o.bG)([aJ.default], () => aJ.default.getCurrentUser()?.id),
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
                                        let t = (0, af.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = dT.get(r);
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
                        let a = !(0, ah.BL)(e),
                            i = iV({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, af.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, af.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && dR.test(n.prose.content)) m = !0;
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
                                        turnActive: ap(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = dR.test(e.content ?? "");
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
                    (dT.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return oq(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, R)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = oG.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), oG.set(t, n)), n);
                      })),
                m,
            );
        }, [n, R, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, O] = i.useState(null),
        z = (function (e, t, n) {
            if (null == t) return dL(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : d$(e, t.endKey, t.end - 1) + 1,
                a = d$(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), dL(e, a, r));
        })($, D, g),
        F = i.useRef(z),
        q = i.useRef($),
        U = i.useRef(L),
        G = i.useRef(null),
        B = i.useRef(null),
        K = i.useRef(new Set()),
        H = i.useCallback(() => {
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
            G.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [p]),
        V = i.useCallback(() => {
            let e = p.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), dL(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), dL(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? dL(e, i, t.end) : null;
            })(q.current, F.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: x.current,
            });
            "older" === n ? (0, _.loadOlderHistory)(t) : null != n && O(n);
        }, [p, x, t]);
    i.useImperativeHandle(
        b,
        () => ({
            handleScroll() {
                (H(),
                    O((e) => {
                        let t = F.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    V());
            },
            recordAnchor: H,
            showLatest(e) {
                ((B.current = e ?? null), O(null));
            },
        }),
        [H, V],
    );
    let W = i.useRef(null),
        X = i.useCallback(
            (e) => {
                var n;
                let l;
                W.current = null;
                let r = k.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), O(F.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), P(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, _.loadOlderHistory)(t) && (W.current = e);
                    return;
                }
                (j(),
                    (B.current = () => {
                        (k.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            P(e));
                    }),
                    O(((n = q.current), dL(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [P, j, t],
        );
    (i.useEffect(() => {
        let e = W.current;
        null != e && X(e);
    }, [L, X]),
        i.useLayoutEffect(() => {
            if (null == w) return;
            let e = w.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), x.current ? p.current?.scrollToBottom() : H());
                });
            return (t.observe(w), () => t.disconnect());
        }, [w, H, p, x]));
    let Z = null == z.endKey;
    (i.useEffect(() => y?.(Z), [Z, y]),
        i.useLayoutEffect(() => {
            ((F.current = z), (q.current = $), (U.current = L));
        }),
        i.useLayoutEffect(() => {
            let e = p.current?.getScrollerNode(),
                t = k.current;
            if (null != e && null != t) {
                let n = G.current;
                if (x.current) p.current?.scrollToBottom();
                else if (null != n) {
                    let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === n.key,
                        ),
                        r = null == l ? 0 : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let l = B.current;
                ((B.current = null), l?.(), H(), V());
            }
            K.current = new Set($);
        }, [L, $, z.start, z.end, p, x, H, V]));
    let Y = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, ah.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, ah.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([e1.A], () => e1.A.getSettings(t)?.secrets, [t]),
        er = (0, u7.WT)(t),
        ea = i.useMemo(() => (0, uu.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(u9.x7, u9.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: u9.Ub, children: (0, a.jsx)(tN.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: u9.x7,
            children: (0, a.jsx)(ct, { role: "assistant", children: (0, a.jsx)(db, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(ce.Provider, {
        value: K,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: u9.x7,
            children: [
                L.slice(z.start, z.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            d_,
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
                        d_,
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
                              ct,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(db, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(u8.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && Z
                    ? (0, a.jsx)(ct, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(db, {
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
                Z ? (0, a.jsx)(cP, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var dO = n(731084),
    dz = n(823376),
    dF = n(187447);
function dq(e) {
    let { activity: t, id: n } = e,
        l = (0, am.j)(),
        { text: r, revealing: s } = de(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: dF.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(ac.Ch, {
                ref: o,
                className: dF.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(ux.PT, dF.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: sZ.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var dU = n(53659);
function dG(e) {
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
        p = i.useRef(null),
        x = i.useId(),
        [g, j] = i.useState(null),
        b = (0, dO.xu)({
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
        k = b === dO.kx["0"],
        [w, N] = i.useState(m ?? y),
        A = (0, am.j)();
    (l || (0, dO.E4)(y, w) || (!A && !k)) && w !== y && N(y);
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
    let P = i.useRef(k),
        R = i.useRef(0);
    (i.useEffect(() => {
        ((P.current = k), !k && (0, dO.E8)(_.current) && N(I.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                P.current
                    ? ((R.current = (0, dO.E8)(_.current) ? R.current + 1 : 0), N((0, dO.Ov)(R.current)))
                    : I.current !== _.current
                      ? N(I.current)
                      : M.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, dO.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [A]));
    let T = null != t && "" !== t.text,
        L = t?.session ?? null,
        $ = T && null != L && g === L,
        D = i.useCallback(() => {
            T && null != L && j((e) => (e === L ? null : L));
        }, [T, L]),
        O = i.useCallback(() => j(null), []);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: p,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: O,
        renderPopout: () => (0, a.jsx)(dq, { id: x, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: p,
                className: h()(dU.hF, T && dU.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : k
                            ? dO.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? x : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: dU.bl,
                        children: (0, a.jsx)(dz.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: dU.xu,
                        "aria-hidden": !!u || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(uj.o, {
                                  ref: M,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: dO.vg,
                                  delay: null,
                                  className: dU.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: dU.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let dB = { second: 1e3, minute: 6e4 };
function dK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = dB[t];
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
var dH = n(719374);
function dV(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = dK(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: dH.$,
        "data-conjure-turn-timer": !0,
        children: (0, i1.C7)(l),
    });
}
function dW(e) {
    let { startedAt: t } = e,
        n = dK(t, "minute");
    return (0, a.jsx)(ab.A, { role: "timer", children: (0, i1.Us)(n) });
}
var dX = n(885574),
    dZ = n(242779),
    dY = n(436804);
function dJ(e) {
    return e.toLocaleString();
}
function dQ(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: dY.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: dY.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [dJ((0, dZ.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    dJ(n.input_tokens),
                    " in \xb7 ",
                    dJ(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${dJ(n.cache_creation_input_tokens)} cache write \xb7 ${dJ(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function d0(e) {
    let { project: t } = e,
        n = (0, dZ.wU)(t.compaction),
        l = (0, dZ.wU)(t.classifier),
        r = (0, dZ.wV)(t.orchestrator, t.codegen),
        i = (0, dZ.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: dY.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: dY.Q$,
                children: (0, a.jsxs)("div", {
                    className: dY.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [dJ((0, dZ.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(dQ, { label: E.intl.string(S.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(dQ, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(dQ, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: dY.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, dZ.sj)(i) ? "\u2014" : `${Math.round(100 * (0, dZ.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function d1(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(d0, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: dY.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(dX.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var d2 = n(997421);
function d3(e) {
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
        p = (0, lg.Zv)(t),
        x = (0, o.bG)([lJ.A], () => lJ.A.getPublishStatus(t)?.publishing === !0, [t]),
        [g, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, dO.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, dO.uc)(f),
        k = null != s,
        w = s ?? (n ? l : void 0),
        N = n || r || k || !0 === m;
    return (0, a.jsxs)("div", {
        className: d2.jf,
        children: [
            (0, a.jsxs)("div", {
                className: d2.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || p || x
                        ? (0, a.jsx)(dG, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: k,
                              recalling: u,
                              controlling: p,
                              publishPending: x && N,
                              publishing: x,
                              spoken: g,
                              onSpokenChange: b,
                          })
                        : null,
                    null != w ? (0, a.jsx)(dV, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(dW, { startedAt: w }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: d2.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(d1, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, dO.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: d2.XF,
                      children: (0, dO.Db)(h),
                  }),
        ],
    });
}
let d4 = ["wheel", "touchstart", "pointerdown", "keydown"];
var d5 = n(608711);
let d6 = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function d7(e) {
    let t,
        n,
        { projectId: l, restoreState: r, onRestoreVersion: s, onImportProject: u } = e,
        c = (0, o.bG)([ld.A], () => ld.A.getMessages(l), [l]),
        m = (0, o.bG)([_.default], () => _.default.getConnState(l), [l]),
        f = (0, o.bG)([ld.A], () => ld.A.getProjectUsage(l), [l]),
        h = (0, o.bG)([ld.A], () => ld.A.getThinkingActivity(l), [l]),
        p = (0, o.bG)([ld.A], () => ld.A.isCompacting(l), [l]),
        x = (0, o.bG)([ld.A], () => ld.A.isSaving(l), [l]),
        g = (0, o.bG)([iA.A], () => iA.A.getModelSettings(l), [l]),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        {
            stickToBottomRef: w,
            pinned: C,
            atBottom: A,
            unpin: I,
            releasePinHold: M,
            showsLatest: P,
            showsLatestRef: R,
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
                    for (let e of d4) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of d4) t.removeEventListener(e, u);
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
            (M(), R.current ? e() : k.current?.showLatest(e));
        }, [M, R]),
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
        (0, i$.E1)(l, (0, am.j)()));
    let O = nJ(l),
        z = (function (e) {
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
            ((t = (0, o.bG)([iE.A], () => iE.A.getFailure(l))),
            (n = i.useCallback(() => (0, iI.CM)(l), [l])),
            null == t
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: t }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: n },
                  }),
        q = (0, o.bG)([iE.A], () => iE.A.getSetupStartedAt(l), [l]),
        U = i.useCallback(
            (e, t) => {
                (0, _.sendUserMessage)(l, e, t);
            },
            [l],
        ),
        G = i.useCallback(
            (e, t, n) => {
                let r = n ?? U;
                0 === O.annotations.length
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
                          })({ annotations: O.annotations, metaComment: e, context: O.context }),
                          t,
                      ),
                      nW(l));
            },
            [O, U, l],
        ),
        B = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of r9)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, _.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = r9.get(e);
                            (r9.delete(e), at(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(l) ||
                ld.A.isThinking(l)) &&
                (0, _.interruptTurn)(l);
        }, [l]),
        K = i.useCallback((e) => tq(l, e.implementation_prompt), [l]),
        [H, W] = (function (e) {
            let [t, n] = i.useState(() => iK(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? iK(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(l),
        X = i.useCallback(() => U(E.intl.string(S.default["t5CN3+"])), [U]),
        Z = i.useCallback((e, t, n) => tq(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        Y = i.useCallback((e) => (0, iS.X)(l, e), [l]),
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
        ep = (function (e) {
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
        ex = er?.appBuildRequest != null && (0, ah.BL)(er) && er.appBuildRequest.id !== em ? er.appBuildRequest : null,
        eg = ep.request ?? (null == ec ? ex : null),
        ev = null == ep.request ? ec : null,
        ej = null != eg && eg === ep.request,
        { close: eb, sent: ey } = ep,
        ek = ep.request?.id,
        ew = i.useCallback(() => {
            ej ? eb() : null != eg && ef(eg.id);
        }, [eg, ej, eb]),
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
            (0, ah.BL)(er) &&
            er.id !== eA &&
            iM(er.settingsRequest, eC)
                ? er
                : null,
        eI = null == ep.request ? eE : null,
        eM = eI?.settingsRequest ?? null,
        e_ = i.useCallback(() => {
            null != eE && eS(eE.id);
        }, [eE]),
        eP = null != eM,
        [eR, eT] = i.useState(null),
        eL = ev?.id ?? eg?.id ?? eI?.id,
        e$ = null != ec || null != eg || null != eE;
    i.useLayoutEffect(() => {
        let e = y.current?.getScrollerNode(),
            t = eR?.firstElementChild;
        if (null == eR || null == e || !(0, en.vq)(t, HTMLElement) || null == eL) return;
        function n() {
            w.current && y.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eR.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eR, eL, y, w]);
    let eD = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, o.bG)([ld.A], () => ld.A.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, o.bG)([ld.A], () => ld.A.isHistoryUnavailable(l), [l]),
            connState: m,
        }),
        eO = "loading" === eD && 0 === c.length,
        ez = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return d6[e % d6.length];
        }, [l]),
        eF = ea ? E.intl.string(S.default.Zc7gML) : "greeting" === eD && 0 === c.length ? ez : null,
        eq = i.useMemo(() => {
            for (let e = c.length - 1; e >= 0; e--) {
                let t = c[e];
                if ("assistant" === t.role && !(0, ah.BL)(t)) return t;
            }
        }, [c]),
        eU = null != eq,
        eG =
            null != eq
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = iT.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eq)
                : void 0,
        eB = ea && el ? ee : void 0,
        eH = i.useCallback(() => tq(l, E.intl.string(S.default.EMgIuY)), [l]),
        [eV, eW] = i.useState(null),
        [eX, eZ] = i.useState(eU);
    (eX !== eU && (eZ(eU), eU || eW(null)),
        i.useEffect(() => {
            if (!eU) return;
            let e = y.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eW(null)
                        : eW(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eU, eq?.steps, P]));
    let eY = P ? eV : "bottom",
        eJ = i.useMemo(() => (null != eq ? (0, ax.b9)(eq.steps) : ""), [eq]),
        eQ = i.useMemo(() => (null != eq ? ((0, af.lt)(eq.steps) ?? eq.todos) : void 0), [eq]),
        e2 = eq?.provisionalTodo,
        e3 = null != eq && ap(eq),
        e4 = i.useMemo(() => {
            var e;
            return null != eq ? ((e = eq.steps), i6((0, af.Jf)(e, !0).tasks)) : void 0;
        }, [eq]);
    return (0, a.jsxs)("section", {
        ref: b,
        "data-conjure-chat": !0,
        className: d5.TE,
        children: [
            el
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: nb.ir,
                      onDrop: Q,
                  })
                : null,
            (0, a.jsx)(aL, {
                onJumpToActivity: $,
                line: eJ,
                placement: eU && "top" === eY ? "top" : null,
                todos: eQ,
                todosLive: e3,
                provisionalTodo: e2,
                agents: e4,
            }),
            (0, a.jsxs)("div", {
                className: d5.JX,
                children: [
                    (0, a.jsx)(ac.Ch, {
                        ref: y,
                        onScroll: D,
                        scrollbarGutter: eO ? "both-edges" : "stable",
                        className: [d5.N$, A ? null : d5.hB, eP ? d5.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(iL.Fu.Provider, {
                            value: l,
                            children: (0, a.jsx)(dD, {
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
                        className: d5.NJ,
                        children: (0, a.jsx)(d3, {
                            projectId: l,
                            thinking: eU,
                            turnStartedAt: eG,
                            restoring: et,
                            remixStartedAt: q,
                            recalling: eO,
                            thinkingActivity: h,
                            compacting: p,
                            saving: x,
                            projectUsage: f,
                            connState: m,
                        }),
                    }),
                    null == ev
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eT,
                              className: eP ? `${d5.B5} ${d5.J9}` : d5.B5,
                              children: (0, a.jsx)(
                                  iC,
                                  { projectId: l, clarification: ev, onSubmit: el ? Z : void 0, onDismiss: ed },
                                  ev.id,
                              ),
                          }),
                    null == eg
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eT,
                              className: d5.B5,
                              children: (0, a.jsx)(
                                  aB,
                                  { projectId: l, request: eg, canSend: el, onDismiss: ew, onSent: ej ? eN : void 0 },
                                  eg.id,
                              ),
                          }),
                    null == eM
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == ev && null == eg ? eT : void 0,
                              className: d5.B5,
                              children: (0, a.jsx)(iR, { projectId: l, request: eM, onDismiss: e_ }, eI?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: d5.Jx,
                children: [
                    (0, a.jsx)(aL, {
                        onJumpToActivity: $,
                        line: eJ,
                        placement: eU && "bottom" === eY ? "bottom" : null,
                        todos: eQ,
                        todosLive: e3,
                        provisionalTodo: e2,
                        agents: e4,
                    }),
                    0 === O.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: d5.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(S.default["7b49dS"], {
                                          count: O.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(S.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(V.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(S.default["/zOv9+"]),
                                      onClick: () => nW(l),
                                  }),
                              ],
                          }),
                    null == F
                        ? null
                        : (0, a.jsx)("div", {
                              className: d5.qB,
                              children: (0, a.jsx)(ad.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: F.message,
                                  action: F.retry,
                              }),
                          }),
                    null == z
                        ? null
                        : (0, a.jsxs)("div", {
                              className: d5.Db,
                              children: [
                                  (0, a.jsx)(ad.w, { type: "warning", role: "status", message: z.message }),
                                  (0, a.jsx)("div", {
                                      className: d5.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(eK.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: eo.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: z.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(u4, {
                        projectId: l,
                        canSend: el,
                        running: eU,
                        restoring: et,
                        onSend: G,
                        hasPendingContext: O.annotations.length > 0,
                        onInterrupt: el ? B : void 0,
                        onUploadFile: J,
                        onImport: u,
                        onSendToOtherProjects: e$ ? void 0 : ep.open,
                        onApprove: eB,
                        suggestion: eF,
                        questionOpen: e$,
                        modelSettings: g,
                        onModelSettingsChange: Y,
                        onDraftHasTextChange: W,
                    }),
                ],
            }),
        ],
    });
}
var d8 = n(761508),
    d9 = n(933294),
    me = n(207438),
    mt = n(683438);
function mn(e, t) {
    return String(e).padStart(t, "0");
}
function ml(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${mn(l.getHours(), 2)}:${mn(l.getMinutes(), 2)}:${mn(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${mn(l.getMilliseconds(), 3)}` : r;
}
var mr = n(667931);
let ma = {
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
    mi = { running: "Running", ok: "Done", error: "Failed" };
function ms(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function mo(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function mu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function mc(e) {
    return mo(e.count > 1 ? e.totalMs : e.end - e.start);
}
let md = ["Arguments", "Result", "Usage", "Details"];
function mm(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function mf(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function mh(e) {
    let t = (0, mr.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, mr.lp)(e) ? "interrupted" : "still running";
}
function mp(e) {
    return [ml(new Date(e.started_at).toISOString()) ?? "", mu(e.spans.length), (0, mr.Sj)((0, mr.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function mx(e) {
    let t = (0, mr.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, mr.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += mg(r, "in")),
                (l.output += mg(r, "out")),
                (l.cacheRead += mg(r, "cache_read")),
                (l.cacheWrite += mg(r, "cache_write")),
                (l.costUsd += mg(r, "cost_usd"))));
    }
    let r = mr.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function mg(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var mv = n(738188),
    mj = n(430993),
    mb = n(364840),
    my = n(224640),
    mk = n(20742);
let mw = { collapsed: new Set(), revealed: new Set() };
var mN = n(872892);
let mC = {
    op: mN.Q,
    model: mN.i3,
    tool: mN.dH,
    setup: mN.kc,
    worktree: mN.Qx,
    sandbox: mN.QH,
    build: mN.F1,
    platform: mN.Op,
    other: mN.fv,
};
function mA(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      mu(t.calls, "model call"),
                      `${ms(t.input)} in`,
                      `${ms(t.output)} out`,
                      `${ms(t.cacheRead)} cache read`,
                      `${ms(t.cacheWrite)} cache write`,
                      mf(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: mN.M1,
        children: [
            (0, a.jsx)("div", {
                className: mN.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${mN.DJ} ${mC[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: mN.o1,
                children: mr.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${mo(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: mN.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${mN.nf} ${mC[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: ma[e] }),
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
function mS(e) {
    return `conjure-perf-trace-${e}`;
}
function mE(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: mN.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${mN.p0} ${s + o > 85 ? mN.EU : mN.jh}`,
                children: i,
            }),
        ],
    });
}
function mI(e) {
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
        id: mS(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${mN.$y} ${r ? mN.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: mN.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: mN.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: mN.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: mN.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${mN.nf} ${mC[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: mN.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: mN.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: mN.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(mv.WarningIcon, { size: "xs", color: "currentColor", className: mN.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(mE, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${mN.M0} ${mN.Nh}`
                    : t.running
                      ? `${mN.M0} ${mN.rF}`
                      : `${mN.M0} ${mC[t.category]}`,
                duration: mc(t),
            }),
        ],
    });
}
function mM(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: mS(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${mN.$y} ${l ? mN.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: mN.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: mN.ai,
                        children: (0, a.jsx)(tZ._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: mN.U9 }),
                    (0, a.jsx)("span", { className: `${mN.nf} ${mN.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: mN.MQ,
                        children: mu(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(mE, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${mN.M0} ${mN.ab} ${mN.dL}`,
                duration: mo(t.totalMs),
            }),
        ],
    });
}
function m_(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: mN._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: mN.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${mN.nf} ${mC[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [mm("Start", `+${mo(e.start)}`), mm("Duration", mc(e))];
                      e.count > 1
                          ? t.push(
                                mm("Calls", String(e.count)),
                                mm("Longest call", mo(e.maxMs)),
                                mm("Spread over", mo(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(mm("Self time", mo(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(mm("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(mm("Notes", l.join(", "))),
                          null != e.span.error && t.push(mm("Error", e.span.error)));
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
                              s = "cost_usd" === t ? mf(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), mm(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...md.flatMap((e) => {
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
                                            className: mN.xd,
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
                                                            className: mN.vl,
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
function mP(e) {
    let { trace: t } = e,
        n = i.useMemo(() => mx(t), [t]);
    return (0, a.jsx)(mA, { stats: n });
}
function mR(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, mr.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? mw : (0, mr.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, mr.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, mr.x7)(t)), l((n) => (0, mr._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, mr.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mr.IE)(t, e);
                        null != n && l((e) => (0, mr.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mr.IE)(t, e);
                        null != n && l((e) => (0, mr.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, mr.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, mr.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, mr.hB)(t));
                }, [t]),
                p = o.find((e) => e.key === r);
            return {
                rows: o,
                collapsed: n.collapsed,
                selectedKey: r,
                selected: p?.kind === "node" ? p.node : null,
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
        f = (0, mr.dj)(t),
        h = i.useMemo(() => (0, mr.nF)(f), [f]),
        p = h.length > 1 ? ((h[1] - h[0]) / f) * 100 : 100,
        x = i.useCallback(
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
                    null != t && (u(t.key), document.getElementById(mS(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(mj.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: mN.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: mh(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: mp(t),
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
                                      children: `${mu(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(mP, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: mN.KE,
                        children: [
                            (0, a.jsx)(V.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(V.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(V.$, {
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
                        "aria-activedescendant": null == o ? void 0 : mS(o),
                        className: mN.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, a.jsxs)("div", {
                                className: mN.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: mN.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: mN.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${mN.io} ${(e / f) * 100 > 85 ? mN.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : mo(e),
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
                                          mI,
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
                                    : (0, a.jsx)(mM, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(mb.j, { children: (0, a.jsx)(m_, { node: s }) }),
        ],
    });
}
function mT(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([dw.A], () => dw.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(my.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(mk.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(mj.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(mR, { trace: i }),
        ],
    });
}
let mL = { running: mN.Vf, ok: mN.mo, error: mN.Sr };
function m$(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${mN.Om} ${mL[t]}`, role: "img", "aria-label": mi[t] });
}
function mD(e, t) {
    (0, e7.openModal)((n) => (0, a.jsx)(mT, { ...n, projectId: e, traceId: t }));
}
function mO(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => mD(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: mN.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: mN.sU,
                children: [
                    (0, a.jsx)(m$, { status: (0, mr.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: mN._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: mh(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: mp(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function mz(e) {
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
function mF(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([dw.A], () => dw.A.getTimingTraces(t), [t]),
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
                    let t = e.map(mx);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: mr.BF.map((e) => ({
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
              className: mN.Ie,
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
              className: mN.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: mN.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: mN.fH,
                              children: (0, a.jsx)(mt.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(mz, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(ac.Ch, {
                      className: mN.XG,
                      children: [
                          (0, a.jsx)(mA, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: mN.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(mO, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function mq(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function mU(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function mG(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function mB(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function mK(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function mH(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let mV = ["all", "preview", "stable", "web"];
function mW(e) {
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
function mX(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: mq(e.memory_p50_bytes ?? 0),
              p999: mq(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let mZ = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var mY = n(911608),
    mJ = n(177427);
function mQ(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mJ.KE,
        children: [
            (0, a.jsx)("div", {
                className: mJ.IQ,
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
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: mB(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(V.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function m0(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: mJ.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: mJ.Gf, children: t }),
            n,
        ],
    });
}
function m1(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: mJ.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mJ.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: mJ.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: mJ.kS,
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
function m2(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: mJ.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mJ.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(mY.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? mJ.dh : void 0,
            }),
        ],
    });
}
function m3(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(m1, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: mW(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(m1, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = mX(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(m1, { label: E.intl.string(S.default["H/X+FI"]), value: mU(n.cpu_ms) }),
            null != l && (0, a.jsx)(m1, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function m4(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(m0, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: mW(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? mZ[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(m0, {
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
                          m1,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: mU(t.cpu_ms) }),
                              hint: mX(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var m5 = n(678708),
    m6 = n(414499),
    m7 = n(714800),
    m8 = n(81466),
    m9 = n(424383),
    fe = n(816943),
    ft = n(268791),
    fn = n(514042),
    fl = n(872351),
    fr = n(708988),
    fa = n(150934),
    fi = n(417270);
let fs = "Restart Agent",
    fo = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fu(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fc(e, t) {
    return { label: e, value: null != t && "" !== t ? mB(t) : "Unknown", icon: "calendar" };
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
function fm(e, t, n, l) {
    let [r, a] = fo[n.status];
    return { label: e, value: `${fd(n.bytes)} of ${fd(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function ff(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = mB(e.at);
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
function fp(e) {
    let t = `container ${fu(e.local)} \xb7 remote ${fu(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fh[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${mG(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${mG(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${mG(n)} Ahead, ${mG(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fx = ["main", "wip"];
var fg = n(400154);
let fv = {
        checkout: m5.FolderIcon,
        edit: aH.PencilIcon,
        remote: m6.h,
        commits: m7.e,
        calendar: m8.CalendarIcon,
        save: m9.L,
        objects: eS.R,
        download: fe.$,
        size: ft.$,
        file: fn.FileIcon,
    },
    fj = {
        ok: [ni.y, w.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [mv.WarningIcon, w.A.colors.ICON_FEEDBACK_WARNING],
        error: [tC.a, w.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [fl.z, w.A.colors.ICON_MUTED],
        behind: [fr.M, w.A.colors.ICON_MUTED],
    };
function fb(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([dw.A], () => dw.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, me.DK)(t), [t]),
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
                    `Updated ${mB(r)}`,
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
    return (0, a.jsxs)(m0, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fg.Lj,
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
                    if (!e.running || null != e.localError) return [ff(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            ff(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : mG(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fx.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fp))
                        : l.push(
                              { label: "Main", value: fu(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fu(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? mG(e.commits) : "Unknown", icon: "commits" },
                            fc("Oldest Commit", e.oldest),
                            fc("Newest Commit", e.newest),
                            ff(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${mG(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${mG(t.loose)} loose (${mq(t.looseBytes)}) \xb7 ${mG(t.packed)} packed in ${n} (${mq(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${mG(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${mG(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                fm(
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
                                  fm("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fv[r],
                        [o, u] = null != i ? fj[i] : [null, void 0];
                    return (0, a.jsx)(
                        m1,
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
function fy(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([dw.A], () => dw.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, me.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = dw.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, me.gX)(e);
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
            let u = i.useCallback(() => (0, me.VW)(e, n), [e, n]);
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
        d = i.useCallback(() => {
            (0, eT.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: fg.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fg.nM,
                children: [
                    (0, a.jsx)(fa.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(V.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fi.RetryIcon,
                        text: fs,
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
                            return `Restarted \xb7 new instance since ${mB(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${mB(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fk(e, t) {
    return (0, a.jsx)(m1, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: mG((0, dZ.aM)(t)) }),
        hint: `${mG(t.input_tokens)} in \xb7 ${mG(t.output_tokens)} out \xb7 ${mG(t.cache_read_input_tokens)} cache read`,
    });
}
function fw(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([dw.A], () => dw.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([dw.A], () => dw.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([dw.A], () => dw.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([dw.A], () => dw.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, me.Lj)(t), [t]),
        f = i.useCallback(() => (0, me.Lj)(t, !0), [t]),
        h = (0, o.bG)([dw.A], () => dw.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([ld.A], () => ld.A.isThinking(t), [t]),
        x = i.useCallback(() => (0, me.bq)(t), [t]),
        g = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: fg.Mf,
        children: [
            (0, a.jsx)(mQ, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(m0, {
                title: E.intl.string(S.default.JghNal),
                children:
                    null == g
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(m1, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: mG((0, dZ.a7)(g.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: mG(g.turns) }),
                                  }),
                                  fk(E.intl.string(S.default.xtxP0e), g.orchestrator),
                                  fk(E.intl.string(S.default["9Sj3SX"]), g.codegen),
                                  fk(E.intl.string(S.default.ANCEo3), (0, dZ.wU)(g.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(m1, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${mG(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(m0, {
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
                                  fk(E.intl.string(S.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(m1, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, dZ.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(m0, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != u && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(m2, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: mG,
                                  }),
                                  (0, a.jsx)(m1, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${mG(u.tokensBefore)} \u{2192} ${mG(u.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: mG(u.retainedMessages),
                                          time: mB(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: mG(y) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(m1, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${mG(c.projected)} / ${mG(c.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: mB(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fg.Lj,
                        children: [
                            (0, a.jsx)(V.$, {
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
                                    let t = mB(e.observedAt);
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
                                        (0, a.jsx)(V.$, {
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
                        className: fg.Lj,
                        children: [
                            (0, a.jsx)(V.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || p,
                                onClick: x,
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
                                    let t = mB(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fy, { projectId: t }),
                ],
            }),
            (0, a.jsx)(fb, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(m0, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(m1, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: mB(b.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(m1, { label: E.intl.string(S.default["8V8e1Z"]), value: mG(b.sockets) }),
                                    (0, a.jsx)(m1, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(m1, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: mG(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(m3, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(m0, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(m1, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: mG(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(m1, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: mG(j.context_window_tokens) }),
                        }),
                        (0, a.jsx)(m1, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: mG(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(m1, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: mG(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(m1, { label: E.intl.string(S.default.kIHga0), value: mG(j.max_build_attempts) }),
                        (0, a.jsx)(m1, { label: E.intl.string(S.default.Iw03yW), value: mG(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fN = n(237528),
    fC = n(629584),
    fA = n(531893);
function fS(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fA.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function fE(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fA.qf,
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
              className: fA.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fI(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fA.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var fM = n(109079);
let f_ = i.memo(function (e) {
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
        className: fM.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fM.Mt,
                selectable: !0,
                children: ml(n.ts) ?? n.ts,
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
                className: fM.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fM.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fM.Cq, children: (0, a.jsx)(fN.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fM.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fN.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
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
                                      className: fM.Pq,
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
                                          className: fM.dF,
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
function fP(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([d9.A], () => d9.A.getLogs(t), [t]),
        l = (0, o.bG)([d9.A], () => d9.A.getHistoryState(t, "logs")),
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
        p = i.useMemo(
            () =>
                mV.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return mH(e);
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
        className: fM.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fM.y4,
                children: [
                    (0, a.jsx)(fC.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fM.KT,
                        children: (0, a.jsx)(mt.I, {
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
            n.length > 0 && (0, a.jsx)(fS, { state: l }),
            (0, a.jsxs)(ac.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: fM.sx,
                children: [
                    (0, a.jsx)(fI, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fE, {
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
                          : d.map((e) => (0, a.jsx)(f_, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fR(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(m0, {
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
function fT(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(m1, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: mH(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(m1, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: mG(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${mB(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(m1, { label: E.intl.string(S.default.Iz5GnJ), value: mG(l.guild_count) }),
                  (0, a.jsx)(m1, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: mG(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: mB(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(m1, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: mG(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(m1, { label: mH(n), value: E.intl.string(S.default.lTHQss) });
}
function fL(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(m1, {
        label: mH(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: mG(n.requests),
            failures: mG(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: mB(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: mB(n.since) }),
    });
}
function f$(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(m1, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: mH(t) }),
                value: mG(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    m1,
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
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: mB(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fD(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(m1, {
        label: mH(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: mG(n.calls), errors: mG(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fO(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(m0, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(m0, {
        title: t,
        children: [
            (0, a.jsx)(m1, {
                label: E.intl.string(S.default.xtD4Zp),
                value: mG(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: mB(n.since) }),
            }),
            (0, a.jsx)(m1, { label: E.intl.string(S.default.gfRhR3), value: mG(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(m2, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: mU,
                          }),
                          (0, a.jsx)(m1, {
                              label: E.intl.string(S.default.mSKImM),
                              value: mU(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: mU(n.cpu_ms_total),
                                  wall: mU(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(m1, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(m1, { label: E.intl.string(S.default.xvmL1D), value: mU(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(m1, { label: E.intl.string(S.default["4sQYwH"]), value: mG(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(m1, {
                label: E.intl.string(S.default.bQenOy),
                value: mG(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(m1, { label: E.intl.string(S.default.xgpn4Y), value: mK(n.build) }),
        ],
    });
}
function fz(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(m0, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(m1, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(m1, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: mq(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: mG(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(m2, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: mq,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fF(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fg.Mf,
        children: [
            (0, a.jsx)(mQ, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fO, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fO, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fz, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(fR, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fT, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(fR, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fL, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(fR, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f$, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(fR, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fD, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(m4, { analytics: t.analytics }),
                        (0, a.jsxs)(m0, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(m1, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? mK(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(m1, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? mK(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fq = n(592465);
function fU(e) {
    let { projectId: t, onClose: n } = e,
        l = lx(),
        [r, s] = i.useState(() => (l && lf?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([dw.A], () => dw.A.getStatus(t), [t]),
        c = (0, o.bG)([dw.A], () => dw.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, me.R7)(t), (0, me.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, _.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == lf || lf.projectId !== e) return null;
            let { traceId: t } = lf;
            return ((lf = null), t);
        })(t);
        return null != e && (mD(t, e), !0);
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
                        status: dw.A.getStatus(t),
                        last_turn_usage: dw.A.getLastTurnUsage(t),
                        last_compaction: dw.A.getLastCompaction(t),
                        last_compaction_decline: dw.A.getLastCompactionDecline(t),
                        timing_traces: dw.A.getTimingTraces(t),
                        logs: d9.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, es.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: fq.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(rC.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(rC.Ay.Icon, {
                            icon: dt.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(rC.Ay.Icon, { icon: eo.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(rC.Ay.ChannelIcon, { icon: nS.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(rC.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: fq.rf,
                children: [
                    (0, a.jsxs)(d8.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: fq.vR,
                        children: [
                            (0, a.jsx)(d8.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(d8.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(d8.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(d8.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(fP, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fF, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(mF, { projectId: t })
                            : (0, a.jsx)(fw, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fG = n(365912),
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
function fX(e, t) {
    return (0, fW.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fV, () => ({ status: "failed" }));
}
var fZ = n(108308);
let fY = { x: 25, y: 21 };
function fJ(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fQ(e, t, n, l) {
    let r = fJ(e, n, l);
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
        { active: c, annotations: d } = nJ(u),
        m = (0, lg.Zv)(u),
        f = (0, e7.useHasAnyModalOpen)(),
        h = (0, o.bG)([aJ.default], () => aJ.default.getCurrentUser()),
        p = h?.id ?? null,
        [x, g] = i.useState(null),
        [j, b] = i.useState(!1),
        [y, k] = i.useState(!1),
        [w, N] = i.useState(null),
        [C, A] = i.useState(!1),
        I = i.useRef(null),
        M = i.useRef(null),
        P = i.useRef(null),
        [R, T] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, O] = i.useState(null),
        [z, F] = i.useState(null),
        q = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        H = c && !m && !f;
    null == D || (H && D.projectId === u) || O(null);
    let W = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != W) return () => tz(W, "design");
    }, [W]);
    let X = rR(r, H);
    i.useEffect(() => {
        if (!H || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void k(!0);
        (b(!0), k(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fB.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? f1(t.response) : null;
                    null == n ? k(!0) : (g(n), nX(u, { url: n.url, title: n.title, viewport: n.viewport }));
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
        if (null == x) {
            Z.current = X;
            return;
        }
        if (rP(Z.current, X)) return;
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
                    (0, fB.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ee.current) return;
                        let l = f1(e.response);
                        null != l && (g(l), nX(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fK(e.element);
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
    }, [H, X, x, d, u, r]),
        i.useEffect(() => {
            if (!H)
                return () => {
                    (N(null), O(null), K(null), g(null));
                };
        }, [H]));
    let Y = i.useRef(null),
        J = i.useRef(null),
        Q = i.useRef(!1),
        ee = i.useRef(!1);
    i.useEffect(() => {
        ((ee.current = H), H || ((Y.current = null), (J.current = null), (P.current = null), A(!1)));
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
                    fX(n, t).then((t) => {
                        if (((Q.current = !1), ee.current)) {
                            if ("picked" !== t.status || f8(t.target, es.current.rect, es.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = nL(t.target);
                                (T((t) => (f7(t, e) ? t : e)),
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
            (F({ at: D.at, label: D.label, draft: D.draft, instant: e }), G(e), O(null));
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
            if (null == z) return;
            let e = setTimeout(() => F(null), f5);
            return () => clearTimeout(e);
        }, [z]));
    let er = null == x || null == X || x.viewport.width < 1 ? 1 : X.width / x.viewport.width,
        ea = null != x || y,
        ei = i.useMemo(() => x?.elements ?? [], [x]),
        es = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        es.current = { rect: X, scale: er };
    }, [X, er]);
    let eo = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (tz(u, "design"),
                    K(null),
                    (q.current = !1),
                    O({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nL(e) }));
            },
            [u],
        ),
        eu = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / er, y: (e.clientY - t.top) / er }), [er]),
        ec = i.useCallback(() => {
            let e = P.current;
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
                if (((P.current = { x: e.clientX, y: e.clientY }), ec(), A(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > f6 || Math.abs(e.clientY - D.at.y) > f6) && (q.current = !0);
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
                        n = null != e && f8(e, X, er) ? null : e;
                    if (null != n) {
                        let e = nL(n);
                        T((t) => (f7(t, e) ? t : e));
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
                null != e && fX(e, fH);
            };
    }, [ef, r]);
    let ep = i.useCallback(() => {
        (A(!1), N(null), (J.current = null), (Y.current = null));
    }, []);
    i.useEffect(() => {
        if (!H || !C || !ea || L || null != D || null != B) return;
        let e = P.current,
            { rect: t, scale: n } = es.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((J.current = l), (Y.current = l), et());
    }, [H, C, ea, L, D, B, et]);
    let ex = i.useCallback(
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
                            ? nR
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(w, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [w, X, eu, D, B, eo, el],
        ),
        eg = i.useCallback(() => {
            null != u && (N(null), null != ll(u) ? la(u) : nW(u));
        }, [u]),
        ev = i.useCallback(() => {
            null != u &&
                (null != D
                    ? el()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : eg());
        }, [u, D, B, el, eg]),
        ej = i.useRef(ev),
        eb = i.useRef(u),
        ey = i.useRef(eg);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = u), (ey.current = eg));
    });
    let ek = i.useRef(null);
    i.useEffect(() => {
        if (H)
            return (
                rS.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rS.A.enable());
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
                        return ((0, fG.J$)(e), !0);
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
                    eo(w, nR, { x: (X?.left ?? 0) + w.rect.x * er, y: (X?.top ?? 0) + w.rect.y * er }));
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
                                return `${nO}${r}${nz}${nD(e)}
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
            if (null != u && null != B && null != p && nT(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = nB(u)).annotations.find((t) => t.id === e)) &&
                        nZ(l, p) &&
                        nK(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eS = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = nB(u)).annotations.find((t) => t.id === e)) &&
                        nZ(n, p) &&
                        nK(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, B, p]),
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
        eP = D ?? z,
        eR = D ?? (z?.instant === !0 ? null : z),
        eT =
            null != em && null != X
                ? (function (e, t) {
                      let { left: n, top: l } = f0(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fQ(em.target, em.anchor, X, er), X)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = em;
            fX(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [em, r]),
        (0, rA.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: fZ.Li,
                children: [
                    (0, a.jsx)(ab.A, {
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
                                      className: fZ.MT,
                                      style: { left: X.left, top: X.top, width: X.width, height: X.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": E.intl.string(S.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ed,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: ew,
                                  }),
                                  null != w && null == w.marker && null == D && null == B
                                      ? (0, a.jsx)(f9, { box: fJ(w, X, er) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: fZ.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fZ.xz,
                                          "data-shown": null != w && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: fZ.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fZ.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fZ.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: fZ.Y,
                                      children: eM ? (0, a.jsx)("div", { className: fZ.u }) : null,
                                  }),
                                  null == eR
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fZ.aZ,
                                            style: {
                                                transform: `translate3d(${eR.at.x + 20}px, ${eR.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fZ.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: fZ.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fZ.Tl,
                                                            children: eR.label.kind,
                                                        }),
                                                        "" === eR.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fZ.kh,
                                                                  children: [" ", eR.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: fZ.D0, style: fJ(e_, X, er), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fQ(e.target, e.anchor, X, er),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fZ.xL,
                                              style: { ...f0(n, X), width: 24, height: 24 },
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
                                              children: (0, a.jsx)(f3, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eP || null == u
                                      ? null
                                      : (0, a.jsx)(rM, {
                                            projectId: u,
                                            at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                            bounds: X,
                                            kind: eP.label.kind,
                                            value: eP.draft,
                                            canSubmit: null != D && nT(eP.draft),
                                            onChange: (e) => {
                                                null != D && O({ ...D, draft: e });
                                            },
                                            onSubmit: eN,
                                            onDismiss: el,
                                            onUploadFile: eC,
                                            closing: null == D,
                                        }),
                                  null != em && null != B && null != eT
                                      ? (0, a.jsxs)(f4, {
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
                                                          className: fZ.aC,
                                                          children: em.comment,
                                                      }),
                                                nZ(em, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: fZ.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fZ.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(V.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(V.$, {
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
                                                                        (0, a.jsx)(V.$, {
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
                                                                            ? (0, a.jsx)(V.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nT(B.draft),
                                                                                  text: E.intl.string(S.default.iicRP9),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, a.jsx)(V.$, {
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
function f3(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([aJ.default], () => aJ.default.getUser(t), [t]);
    return (0, a.jsx)(sW.eu, {
        src: null == n ? null : X.Ay.getUserAvatarURL(n),
        size: sX._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function f4(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: x } = e,
        g = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fY);
    i.useLayoutEffect(() => {
        let e = g.current?.getBoundingClientRect(),
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
        ref: g,
        className: fZ.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fZ.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fZ.ip, children: (0, a.jsx)(f3, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fZ.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fZ.zI, children: x }),
        ],
    });
}
let f5 = 300,
    f6 = 2;
function f7(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function f8(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function f9(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fZ.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var he = n(659723),
    ht = n(697744),
    hn = n(130324);
function hl(e) {
    let t = (0, ht.c)(),
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
    let r = (0, am.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function hr(e) {
    let { className: t } = e,
        { Component: n, events: l } = hl(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, hn.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: hn.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var ha = n(251363),
    hi = n(944142),
    hs = n(532247),
    ho = n(501628);
function hu(e) {
    let { progress: t } = e,
        { Component: n } = hl(1500),
        l = lp.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: ho.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: ho.PM,
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
function hc(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([hi.A], () => (s ? hi.A.getLiveReload(t) : null), [s, t]),
        c = (0, lW.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, hs.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, hs.QP)(e, s)));
            let m = (0, o.bG)(
                    [lT.A],
                    () => {
                        let e = lT.A.getFrame(n);
                        return (0, lO.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, ha.ow)(null, n) && e();
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
        h = m ? null : (0, hs.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ab.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: ho.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(hu, { progress: h }),
                  })
                : null,
        ],
    });
}
var hd = n(357858),
    hm = n(343030),
    hf = n(317608),
    hh = n(35367),
    hp = n(228946);
let hx = { width: 1 / 0, height: 1 / 0 };
function hg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hx;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var hv = n(702083);
function hj(e) {
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
        d = n ? hg(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(hv.dw, { [hv.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(hv.R9, { [hv.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var hb = n(347927);
function hy(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(hb.Bf, l && hb.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: hb.Ux,
                children: [
                    (0, a.jsx)(g.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var hk = n(957272);
function hw(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, hh.A)({ applicationId: t, surface: n, launch: l });
    if (((0, hp.A)(t, n), s === hh.n.Launched)) {
        let e = (0, a.jsx)(hf.A, { frameId: i.id, level: hm.A.WithinAppContent, className: hk.Z7, overlay: r });
        return (0, lZ.Q5)(n) ? (0, a.jsx)(hj, { children: e }) : e;
    }
    return (0, a.jsx)(hN, { state: s });
}
function hN(e) {
    let { state: t } = e;
    switch (t) {
        case hh.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: hk.qs,
                children: (0, a.jsx)(hy, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case hh.n.NoApplication:
            return (0, a.jsx)(hr, { className: hk.qs });
        case hh.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: hk.qs,
                children: (0, a.jsx)(hy, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case hh.n.Error:
            return (0, a.jsxs)("div", {
                className: hk.qs,
                children: [
                    (0, a.jsx)(g.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: hk.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case hh.n.AwaitingLaunch:
        case hh.n.Loading:
            return (0, a.jsx)("div", { className: hk.qs, children: (0, a.jsx)(tN.y, {}) });
    }
}
var hC = n(308528),
    hA = n(334738),
    hS = n(688438),
    hE = n(365971),
    hI = n(703462);
function hM(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: hI.f,
        children: [
            (0, a.jsx)(Y.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function h_() {
    return (0, a.jsx)("div", { className: hI.f, children: (0, a.jsx)(tN.y, {}) });
}
function hP(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([aY.A], () => (null != c ? aY.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && hC.A.preload(D.ME, t);
        }, [t]),
        (n = (0, o.bG)([tb.A], () => tb.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, hE.Xg)();
            return (
                (0, hA.yl)(t, e),
                () => {
                    (0, hA.dm)(t, e);
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
        ? (0, a.jsx)(hM, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(h_, {})
          : (0, a.jsx)("div", {
                className: hI.g,
                children: (0, a.jsx)(hS.A, { channel: d, guild: null, chatInputType: uF.oU.SIDEBAR }, d.id),
            });
}
var hR = n(887909),
    hT = n(570962),
    hL = n(998475);
function h$(e) {
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
    } = (0, hR.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: hL.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: hL.rf,
                children: (0, a.jsx)(hT.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: hL.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: hL.z3,
                                      children: [
                                          (0, a.jsx)(g.D, {
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
                                className: h()(hL.Qs, c ? hL.cw : null, d ? hL.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: hL.o1,
                      children: s.map((e, t) => (0, a.jsx)(V.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var hD = n(765671),
    hO = n(269094),
    hz = n(714917),
    hF = n(463660),
    hq = n(582063);
let hU = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function hG() {
    (0, es.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function hB(e) {
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
                    return (0, a.jsx)(hK, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: hq.m2,
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
                accept: hU.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (hU.includes(n.type)
                                ? n.size > ef.aI
                                    ? (0, es.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, hF.M$)(t, n).catch(hG)
                                : (0, es.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function hK(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([hz.A], () => hz.A.getBackground(t)),
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
                        icon: fi.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, hF.Og)(t).catch(hG));
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
                        (0, hF.Y1)(t, !i) || hG();
                    },
                }),
            }),
        ],
    });
}
let hH = "/assets/7cec34541705c795.webp";
function hV(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, hh.A)({ applicationId: t, surface: lO.ZN });
    return (i.useEffect(() => {
        let e = (0, lO.VA)(t, lO.ZN);
        return () => (0, lY.r)(e);
    }, [t]),
    r.state !== hh.n.Launched)
        ? (0, a.jsx)(hN, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(hN, { state: hh.n.Loading })
          : (0, a.jsx)(hW, { lifecycle: r, projectId: n, size: l });
}
function hW(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, hD.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: hq.JH,
        children: [
            (0, a.jsx)(hX, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: hq.dw,
                children: (0, a.jsx)("div", {
                    className: hq.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(hO.A, { frame: t.frame, application: t.application, className: hq.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(hB, { projectId: n }) : null,
        ],
    });
}
function hX(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([hz.A], () => (null != t ? hz.A.getBackground(t) : null)),
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
                (0, hF.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(hH);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        p = null == l || (null != f && f === u) ? hH : f;
    return null != p && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: h()(hq.LO, { [hq.Ty]: n?.blur === !0 }),
              src: p,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  p === f && c(f);
              },
          })
        : null;
}
var hZ = n(409478),
    hY = n(652227);
function hJ(e) {
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
            paused: p = !1,
            onResume: x,
        } = e,
        g = (0, o.bG)([iE.A], () => null != f && null != iE.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: hY.qs, children: (0, a.jsx)(tN.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: hY.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(tN.y, {}) : (0, a.jsx)(h$, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: hY.RG,
                      children: [
                          (0, lA.yf)(u, c)
                              ? p
                                  ? (0, a.jsx)(hQ, { projectId: f, onResume: x })
                                  : (0, a.jsx)(hw, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: hY.qs,
                                        children: (0, a.jsx)(hy, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(hZ.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(hV, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(hP, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : g
              ? (0, a.jsx)("div", { className: hY.qs, children: (0, a.jsx)(tN.y, {}) })
              : (0, a.jsx)(hr, { className: hY.qs });
}
function hQ(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, hd.Pu)(t),
        (0, a.jsx)("div", {
            className: hY.qs,
            children: (0, a.jsx)(hy, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(V.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eO.PlayIcon,
                              text: E.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var h0 = n(750506),
    h1 = n(867193),
    h2 = n(539197),
    h3 = n(977020);
function h4(e) {
    let { projectId: t } = e,
        n = (0, h2.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, h2.Ie)(e);
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
        className: h3.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [h2.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(h3.hN, h3.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(h3.hN, h3.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(h3.UE, { [h3.SP]: n.shown, [h3.Vq]: n.pressed, [h3.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var h5 = n(417760);
function h6(e) {
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
        u = (0, lg.CU)(n),
        c = "controlling" === t,
        d = E.intl.string(c ? (u ? S.default["VJW/5P"] : S.default["+hD2Iz"]) : S.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(V.$, {
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
              className: h()(h5.M0, h5.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(dz.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(oB.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: h5.ID, children: d }),
                  c ? (0, a.jsx)(ab.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: h5.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: h5.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: h5.sp,
                      children: [
                          (0, a.jsx)(oB.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(dz.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: h5.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: h5.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: h5.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: h5.lC, children: m }) : null,
              ],
          });
}
function h7(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, lg.Zv)(null != n && n === l ? t : null),
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
        [h, p] = i.useState(null),
        [x, g] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = r_(r());
            f((t) => (rP(t, e) ? t : e));
            let t = null == h ? null : r_(h);
            (g((e) => (rP(e, t) ? e : t)), null != h && (0, h1.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, h1.C)(0));
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
                  })(m, x),
        N = (function () {
            let [e] = i.useContext(h0.uY),
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
                      ref: p,
                      className: h5.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: h5.QF,
                          children: (0, a.jsx)(h6, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, rA.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(ab.A, {
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
                ? (0, rA.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: h5.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: h5.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(h4, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var h8 = n(399503),
    h9 = n(853555),
    pe = n(271982),
    pt = n(187645);
let pn = new Map(),
    pl = !1;
function pr() {
    let e = new Map();
    for (let t of new Set([...ld.A.getActivityOrderedProjectIds(), ...(0, lg.T7)()])) {
        if (!(ld.A.isThinking(t) || (0, lg.wK)(t)) || lk.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eL.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, lZ.Rc)(t);
            return (0, lO.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...pn]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            pn.delete(t),
            n.unregisterLookup(),
            pe.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        pn.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = pt.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    pa(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (pn.set(e, l),
                    (l.unregisterLookup = (0, h9.Ng)(e, () => (0, ha.n5)(n, t))),
                    pe.A.registerFrameTarget(t, n, hm.A.Backstage, void 0));
            })(t, n);
    for (let e of pn.values()) pa(e.element);
}
function pa(e) {
    let t = lX.A.isBuilderPreviewMobile();
    e.classList.toggle(pt.L, !t);
    let n = t ? hg(lX.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var pi = n(873727),
    ps = n(147248),
    po = n(418842),
    pu = n(363195),
    pc = n(818023);
let pd = null;
var pm = n(517461),
    pf = n(761929),
    ph = n(487336);
function pp(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, pm.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, iD.clamp)(u, 360, n),
        m = (0, pf.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: pf.R.HORIZONTAL_LEFT,
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
        className: ph.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: ph.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: ph.kL, style: { width: d }, children: l }),
        ],
    });
}
var px = n(541940);
function pg(e) {
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
            paused: p,
        } = e,
        [x, g] = i.useState(null),
        v = (0, lW.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([pu.A], () => (0, pi.x4)(pu.A.theme)),
            l = (0, o.bG)([ps.A], () => ps.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([W.Ay], () => ({
                reducedMotion: W.Ay.useReducedMotion,
                fontScale: (0, pi.U0)(),
                highContrast: W.Ay.isHighContrastModeEnabled,
                forcedColors: W.Ay.useForcedColors,
                underlineLinks: W.Ay.alwaysShowLinkDecorations,
            })),
            d = lp.hH.useSetting(),
            m = (0, po.C)(),
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
            p = i.useRef(!1),
            x = i.useRef(0),
            g = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, ha.n5)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++x.current,
                    baseTheme: n,
                    customTheme: (0, pi.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, fW.W)(l, "set-env", i, {
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
                    ((h.current = !1), p.current || j.current());
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
                b();
            }, [l, b]),
            i.useLayoutEffect(() => {
                (v(), b());
            }, [b, v]),
            i.useLayoutEffect(() => {
                let n = (0, ha.n5)(e, t);
                null != n && n !== g.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, ha.n5)(e, t) && ((g.current = null), b());
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
    })(x, j),
        i.useEffect(() => {
            if (null != t) return (0, h9.Ng)(t, () => (0, ha.n5)(x, j));
        }, [t, x, j]));
    let b = i.useCallback(() => (0, ha.ow)(x, j), [x, j]),
        y = i.useCallback(() => (f ? (0, ha.ow)(x, j) : x), [f, x, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(px.Mh, c),
                children: [
                    u,
                    p
                        ? null
                        : (0, a.jsx)(h7, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: g, className: px.fm, children: d }),
                ],
            }),
            m,
            p
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
                          (0, a.jsx)(as, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function pv(e) {
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
        onRestoreVersion: p,
        onImportProject: x,
        debugOpen: g = !1,
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
    (0, h8.k)(t, N);
    let M = s.type === lS.U.MAIN || (0, lZ.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([lX.A], () => ({
            mobile: lX.A.isBuilderPreviewMobile(),
            landscape: lX.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? pc.aX.LANDSCAPE : pc.aX.PORTRAIT), (pd = e));
                else {
                    if (pd !== e) return;
                    ((l = pc.aX.UNHANDLED), (pd = null));
                }
                tA.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let P = i.useRef(null),
        [R, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, au.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, au.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, ly.HV)(l), () => (0, ly.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, _.ensureConnection)(t),
                pl ||
                    ((pl = !0),
                    ld.A.addChangeListener(pr),
                    eL.Ay.addChangeListener(pr),
                    lT.A.addChangeListener(pr),
                    lX.A.addChangeListener(pr),
                    lk.A.addChangeListener(pr),
                    (0, lg.W3)(pr),
                    pr()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = P.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(360, R - 320),
        $ = d || M;
    return (0, a.jsx)("div", {
        ref: P,
        className: px.LB,
        children: (0, a.jsx)(pg, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, lA.yf)(k, w),
            paused: A,
            mainClassName: null == c ? void 0 : h()(px.ez, { [px.zt]: d }),
            content: (0, a.jsx)(hJ, {
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
                frameOverlay: (0, a.jsx)(hc, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(pp, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: px.cO,
                              children: g
                                  ? (0, a.jsx)(fU, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(he.A, { projectId: t }),
                                            (0, a.jsx)(rC.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(rC.Ay.Icon, {
                                                                  icon: eo.P,
                                                                  tooltip: E.intl.string(S.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(rC.Ay.Title, {
                                                    children: E.intl.string(E.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: px.cb,
                                                children: (0, a.jsx)(
                                                    d7,
                                                    {
                                                        projectId: t,
                                                        restoreState: j,
                                                        onRestoreVersion: p,
                                                        onImportProject: x,
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
var pj = n(323140);
function pb(e) {
    var t;
    let l,
        r,
        s,
        { project: c, projectsLoaded: d, onBack: m, guildId: f } = e,
        [p, x] = i.useState(!0),
        [j, b] = i.useState(!1),
        k = lx(),
        w = i.useCallback(() => x(!0), []),
        N = i.useCallback(() => {
            (b(!1), x(!0));
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
            integrationStatus: P,
            isPreviewApplicationLoading: T,
            checkingIntegration: L,
            previewReady: $,
            hasFrame: z,
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
                p = (0, lA.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: u?.bot_permissions_changed === !0,
                }),
                x = i.useCallback(async () => {
                    if (null == r || a.current !== r) return;
                    s.current?.abort();
                    let e = new AbortController();
                    ((s.current = e), l(null));
                    try {
                        await ((0, R.CG)(r)?.catch(() => (0, R.U1)(r, e.signal)) ?? (0, R.U1)(r, e.signal));
                    } catch {
                    } finally {
                        e.signal.aborted || s.current !== e || a.current !== r || l(r);
                    }
                }, [r]);
            i.useEffect(
                () => (
                    x(),
                    () => {
                        (s.current?.abort(), (s.current = null));
                    }
                ),
                [x],
            );
            let g = (0, lK.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, lK.$)(e, g));
                }, [g, e]),
                j = i.useCallback(async () => {
                    try {
                        await v();
                    } catch {}
                    await x();
                }, [x, v]),
                b = i.useMemo(() => {
                    let t = e?.preview_application_id;
                    return null == t || d || m
                        ? null
                        : {
                              ...(0, lH.i)({ applicationId: t, application: c ?? null, guildId: g }),
                              onClose: () => {
                                  j();
                              },
                          };
                }, [m, j, g, d, c, e?.preview_application_id]);
            return {
                integrationStatus: u,
                isPreviewApplicationLoading: d,
                checkingIntegration: m,
                previewReady: f,
                hasFrame: h,
                needsPermissionReview: p,
                installAuthorizeProps: b,
            };
        })(c, f),
        U =
            (0, o.bG)([lJ.A], () => (null == I ? void 0 : lJ.A.getPublishStatus(I)?.previewAppChannels), [I]) ??
            P?.preview_app_channels,
        {
            availability: G,
            activeMode: B,
            setMode: K,
            frameSurface: H,
            frameSurfaceOptions: W,
            setFrameSurface: X,
            appChannel: Z,
            setAppChannel: Y,
            frameLaunchParams: J,
            widgetApplicationId: Q,
        } = (0, l_.p)({
            applicationId: c?.preview_application_id ?? null,
            previewApplicationId: c?.preview_application_id ?? null,
            declaredActivity: z,
            previewSupportedSurfaces: c?.preview_supported_surfaces,
            installScope: c?.install_scope ?? null,
            ownerAuthorizationRevoked: P?.owner_authorization_revoked === !0,
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
            (x(!0), b(!0));
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
            isRefreshing: ep,
            handleRefresh: eg,
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
                p = i.useCallback(() => (0, ly.GG)(!f), [f]),
                x = (0, o.bG)([lX.A], () => lX.A.isBuilderPreviewLandscape()),
                g = E.intl.string(x ? S.default.tunI2l : S.default.DoNdjA),
                v = i.useCallback(() => (0, ly.Lw)(!x), [x]),
                j = (0, lZ.jS)(t),
                b = i.useMemo(() => (0, lZ.Op)(j, l), [j, l]),
                y = (0, lW.A)(t?.preview_application_id ?? null, b),
                k = (0, lO.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || lV.A.refreshProxyTicket(y.id);
                }, [y, k]);
            return {
                previewTargetOptions: d,
                handleSelectPreviewTarget: m,
                mobilePreview: f,
                mobilePreviewLabel: h,
                handleToggleMobilePreview: p,
                landscapePreview: x,
                rotatePreviewLabel: g,
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
            frameSurfaceOptions: W,
            previewAppChannels: U,
            setMode: K,
            setFrameSurface: X,
            setAppChannel: Y,
        }),
        ev = p && !j,
        ej = E.intl.string(ev ? S.default.JD6Oit : S.default.xjJAQm),
        eb = i.useCallback(() => {
            if (j) {
                (b(!1), x(!0));
                return;
            }
            x((e) => !e);
        }, [j]),
        ey = i.useCallback(() => x(!1), []),
        {
            designFeedbackActive: eN,
            designFeedbackToggleRef: eA,
            agentDrivingPreview: eS,
            designFeedbackLabel: eE,
            handleToggleDesignFeedback: eI,
        } = (function (e, t, n) {
            let { active: l } = nJ(e);
            i.useEffect(() => {
                null != e && l && !t && nW(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, lg.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void nW(e);
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
        [eM] = i.useState(() => ex.isPlatformEmbedded && (0, lU.qM)()),
        e_ = null != lo(I);
    i.useEffect(() => {
        null != I && e_ && !el && la(I);
    }, [I, e_, el]);
    let eP = i.useCallback(() => {
            null != I &&
                (N(),
                (function (e) {
                    if (null != ll(e)) return;
                    let { byProject: t } = lt.getState();
                    lt.setState({ byProject: { ...t, [e]: ln } });
                })(I));
        }, [I, N]),
        eR = i.useCallback(() => {
            null != I && la(I);
        }, [I]),
        e$ = e_ ? E.intl.string(S.default.tuQ5f3) : eE,
        eD = i.useCallback(() => {
            b((e) => !e && (x(!0), !0));
        }, []),
        eO = i.useCallback(() => b(!1), []),
        ez = i.useCallback(() => {
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
            : L && null == P
              ? { type: "checking" }
              : void 0,
        eH = (0, o.bG)([eL.Ay], () => null != I && eL.Ay.isProjectDeleting(I), [I]);
    i.useEffect(() => {
        ((null == c && d) || eH) && (0, u.bG)(D.BVt.CHANNEL(f, O.VV.CONJURE));
    }, [f, c, d, eH]);
    let {
            publishOptions: eV,
            publish: eW,
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
                        ...rN,
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
                      onRefresh: (0, lO.x1)(eh) ? eg : void 0,
                      isRefreshing: ep,
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
            null == eW || null == c
                ? null
                : (0, a.jsx)("div", {
                      className: pj.As,
                      onMouseDown:
                          null == I || eW.disabled || eX
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, lQ.dx)(I);
                                },
                      children: (0, a.jsx)(rx, {
                          project: c,
                          publish: eW,
                          menu: eY,
                          children: (e) =>
                              (0, a.jsx)(V.$, {
                                  size: "sm",
                                  variant: eW.status?.state === "up_to_date" ? "secondary" : "primary",
                                  icon: eX ? py : null != eZ ? nC.U : void 0,
                                  text: eZ ?? eW.label,
                                  ...e,
                              }),
                      }),
                  }),
        eQ = null == c ? void 0 : () => (0, e2.A)(c.id, { guildId: f, isPreview: !0, publishOptions: eV }),
        e1 = (0, a.jsx)(M, {
            title: c?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: m },
            project: c,
            onOpenProjectSettings: eQ,
            actions:
                null == c
                    ? null
                    : (0, a.jsxs)("div", {
                          className: pj.FO,
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
                                                      icon: ei ? pN : pw,
                                                      tooltip: eo,
                                                      "aria-label": eo,
                                                      selected: ei,
                                                      onClick: eu,
                                                  })
                                                : null,
                                            ei && "frame" === B
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: pC,
                                                      tooltip: ed,
                                                      "aria-label": ed,
                                                      selected: ec,
                                                      onClick: em,
                                                  })
                                                : null,
                                            (0, a.jsx)(lc, {
                                                enabled: eM && !e_ && !eS && !en,
                                                onLongPress: eP,
                                                children: (0, a.jsx)(y.A.Icon, {
                                                    ref: eA,
                                                    icon: nA.x,
                                                    iconClassName: pj.D8,
                                                    tooltip: e$,
                                                    "aria-label": e$,
                                                    selected: e_ || eN,
                                                    disabled: en || (eS && !e_),
                                                    onClick: e_ ? eR : eI,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" !== B || en
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(nP.A, { frame: eh }),
                                            (0, a.jsx)(lz, { frame: eh, controlProjectId: c.id }),
                                        ],
                                    }),
                              (0, a.jsx)("div", { className: pj.YJ }),
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
                                  : (0, a.jsx)(y.A.Icon, { icon: pk, tooltip: ej, "aria-label": ej, onClick: eb }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(pj.nj, ny.T),
        children: [
            eU.importInput,
            (0, a.jsx)("main", {
                className: pj.JX,
                children:
                    null == c
                        ? (0, a.jsxs)("div", {
                              className: pj.j5,
                              children: [
                                  e1,
                                  (0, a.jsxs)("div", {
                                      className: pj.sD,
                                      children: [
                                          (0, a.jsx)(g.D, {
                                              variant: "heading-lg/semibold",
                                              children: E.intl.string(S.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: E.intl.string(S.default.fINulo),
                                          }),
                                          (0, a.jsx)(V.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: E.intl.string(S.default["WFJ/vb"]),
                                              onClick: () => (0, R.hF)(f),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(e0.bI.Provider, {
                              value: eV,
                              children: (0, a.jsx)(
                                  pv,
                                  {
                                      projectId: c.id,
                                      designFeedbackToggleRef: eA,
                                      applicationId: c.preview_application_id,
                                      previewApplicationId: c.preview_application_id,
                                      surface: ef,
                                      frameLaunchParams: J,
                                      header: e1,
                                      chatOpen: p,
                                      onCloseChat: ey,
                                      chatHeaderAction: eJ,
                                      debugOpen: k && j,
                                      onCloseDebug: eO,
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
                                      onResumePreview: ez,
                                  },
                                  c.id,
                              ),
                          }),
            }),
        ],
    });
}
function py() {
    return (0, a.jsx)(tN.y, { type: tN.t.SPINNING_CIRCLE_SIMPLE, className: pj.Hv, itemClassName: pj.C5 });
}
function pk(e) {
    return (0, a.jsx)(nE.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function pw(e) {
    return (0, a.jsx)(nI.u, { ...e, size: "custom", width: 20, height: 20 });
}
function pN(e) {
    return (0, a.jsx)(nM.k, { ...e, size: "custom", width: 20, height: 20 });
}
function pC(e) {
    return (0, a.jsx)(n_.H, { ...e, size: "custom", width: 20, height: 20 });
}
function pA(e) {
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
        (0, R.hF)(t);
    }, [t, l, r]),
        i.useEffect(() => {
            (0, R.dm)(t, s);
        }, [t, s]));
    let f = i.useCallback(() => {
            (0, u.pX)(D.BVt.CHANNEL(t, O.VV.CONJURE));
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
        p = (0, o.bG)([eL.Ay], () => eL.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(pb, { project: h, projectsLoaded: p, onBack: f, guildId: t }, s)
        : (0, a.jsx)(nN, { guildId: t });
}
