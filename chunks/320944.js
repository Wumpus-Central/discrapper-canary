(n.r(t), n.d(t, { default: () => pi }));
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
    g = n(364522),
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
let H = "ConjureProjectsPanelOpen";
var K = n(89310),
    V = n(821609),
    W = n(775602),
    X = n(486020),
    J = n(687966),
    Z = n(323384),
    Y = n(632015),
    Q = n(231483),
    ee = n(430392);
let et = { games: J.GameControllerIcon, apps: Z.k, profile_widget: Y.f, automod: Q.ShieldIcon, chat_bot: ee.RobotIcon };
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
                    g = !0;
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
                    let e = t && !f && !h && p && g;
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
                (x(), v(), b());
                let S = new ResizeObserver(() => {
                    (x(), v());
                });
                (S.observe(e), S.observe(n));
                let E = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), b());
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
    eg = n(723702),
    ex = n(264572).Buffer;
async function ev(e, t) {
    if (eg.isPlatformEmbedded) {
        let n = ex.from(await e.arrayBuffer());
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
    eH = n(408278),
    eK = n(365199),
    eV = n(7437),
    eW = n(147036),
    eX = n(957565),
    eJ = n(785389),
    eZ = n(123917),
    eY = n(860402);
let eQ = new Set();
var e0 = n(329356),
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
        g = (0, e4.Mi)(n),
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
                h.length > 0 || null != p
                    ? (0, a.jsx)(e9.Ay, {
                          items: h,
                          optionalItem:
                              null == p
                                  ? void 0
                                  : { item: p, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != g ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: g }) : null,
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
            isRefreshing: g = !1,
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
        { pending: A, refresh: I } = (0, eV.A)(y ?? null),
        { pending: M, connect: _ } = (function (e, t) {
            let [n, l] = i.useState(eQ),
                r = i.useRef(eQ),
                a = i.useCallback((e) => {
                    ((r.current = (0, eJ.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, eJ.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, eY.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, eZ.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, eJ.rq)(l.error)
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
        T = i.useMemo(() => (0, eJ.Xl)(R), [R]),
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
        H = eX.p5,
        K = N ? e$.BellIcon : eD.BellSlashIcon,
        V = v ? ez.PlayIcon : eO.PauseIcon;
    return (0, a.jsxs)(ec.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: w,
        onSelect: w,
        children: [
            null != p || null != x || null != b
                ? (0, a.jsxs)(ed.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "refresh",
                                    icon: eF.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: eF.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: g,
                                    action: p,
                                })
                              : null,
                          null != x
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: V,
                                    leadingAccessory: { type: "icon", icon: V },
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
                    icon: K,
                    leadingAccessory: { type: "icon", icon: K },
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
            H
                ? (0, a.jsxs)(ed.rX, {
                      children: [
                          B
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: eU.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: eU.LinkIcon },
                                    action: () =>
                                        (0, eX.C)((0, eW.n)(l, z.VV.CONJURE, t), () =>
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
                              children: (0, a.jsx)(eH.K, {
                                  icon: eK.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(y.A.Icon, {
                              icon: eK.MoreHorizontalIcon,
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
function tp(e) {
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
            (0, a.jsx)(g.Ip, {
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
var tg = n(559106),
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
let tH = ef.lN;
function tK(e, t, n, l) {
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
            if (r++ >= tH)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: E.intl.formatToPlainString(S.default.Q0aCVZ, { count: tH }),
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
function tV(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = tM.useState((e) => t_(e, t, n)),
        a = i.useCallback((e) => tK(t, n, e, l), [t, n, l]),
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
    tJ = n(320448),
    tZ = n(344587),
    tY = n(534554),
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
        g = d ? tX.t : tJ._,
        x = tQ.P.map(tY.D0),
        j = (0, tY.Tc)(t.tier),
        { text: b, phase: y } = (0, tZ.Q)(j);
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
                                    "aria-label": E.intl.string((0, tY.FC)(l)),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: E.intl.string(S.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(g, {
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
                                    stops: x,
                                    ariaLabel: E.intl.string(S.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = tQ.P[e];
                                        null != n && n !== t.tier && s((0, tY.CM)((0, tY.j6)(t, n)));
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
        { mounted: p, entered: g } = t4(f);
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
                entered: g,
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
            return (0, a.jsx)(tg.vN, {
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
            attachments: g,
        } = e,
        [x, j] = i.useState(!1),
        b = i.useRef(null),
        y = i.useId(),
        k = "" !== t,
        w = E.intl.string(E.t.d56gCa),
        N = i.useRef(null),
        C = i.useRef(null),
        { addFiles: A, pasteFiles: I, removeAttachment: M } = g,
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
                            (0, a.jsx)(tg.vN, {
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
                    g.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: ne.ZO,
                              children: g.attachments.map((e) => {
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
function np(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let ng = 1;
function nx(e) {
    let t = np(e),
        n = { localId: ng++, name: e.name, contentType: t };
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
        [f, k] = i.useState(() => B.w.get(H) ?? null ?? !0),
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
        V = null != $ && z($) ? $ : F,
        W = V === q ? "user" : "guild",
        X = V === q ? n : V,
        J = (function () {
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
        { attachments: Z, addFiles: Y, clear: Q } = J,
        ee =
            "idea" ===
                (t = (function (e) {
                    let { idea: t, installScope: n, submitting: l } = e;
                    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
                })({ idea: l, installScope: W, submitting: s })) ||
            "submitting" === t ||
            J.hasErrors,
        et = i.useCallback((e) => Y(Array.from(e)), [Y]);
    (0, K.p)(w);
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
                        installScope: W,
                        modelSettings: d,
                        start: async (t) => {
                            let n = [];
                            if (Z.length > 0)
                                try {
                                    n = await Promise.all(
                                        Z.map((e) => {
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
        }, [l, W, d, X, Z, Q]),
        es = i.useCallback((e) => {
            (B.w.set(H, e), k(e));
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
                        (0, a.jsx)(g.Ip, {
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
                                                        target: V,
                                                        eligibleGuilds: N,
                                                        onTargetChange: D,
                                                        modelSettings: d,
                                                        onModelSettingsChange: m,
                                                        attachments: J,
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
function nH(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? nU.set(e, t) : nU.delete(e), [...nG]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function nK(e) {
    let t = nB(e);
    t.active || nH(e, { ...t, active: !0 });
}
function nV(e) {
    let t = nB(e);
    t.active && nH(e, { ...t, active: !1 });
}
function nW(e) {
    nU.has(e) && nH(e, nq);
}
function nX(e, t) {
    let n = nB(e);
    n.active && nH(e, { ...n, context: t });
}
function nJ(e, t) {
    return null != t && e.authorId === t;
}
function nZ(e) {
    return (
        nG.add(e),
        () => {
            nG.delete(e);
        }
    );
}
function nY(e) {
    let t = i.useCallback(() => (null == e ? nq : nB(e)), [e]);
    return i.useSyncExternalStore(nZ, t, t);
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
        "pick" === t ? nK(e) : nV(e));
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
function lg() {
    return lp.Q_.useSetting() || !1;
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
            return (0, a.jsx)(tg.vN, {
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
    lH = n(803101),
    lK = n(226178),
    lV = n(625180),
    lW = n(672929),
    lX = n(111534),
    lJ = n(754027),
    lZ = n(457827),
    lY = n(722701),
    lQ = n(949616),
    l0 = n(962998),
    l1 = n(535466),
    l2 = n(321032),
    l3 = n(277085);
let l4 = [];
var l5 = n(17813);
function l6(e) {
    let { permissions: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsxs)(e6.B, {
              gap: 8,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default["6U+4pJ"]),
                  }),
                  (0, a.jsx)(l5.A, { permissions: t }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default.X8wPIB),
                  }),
              ],
          });
}
function l7(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: u } = e,
        { iconURL: c } = (0, l1.Ay)(t),
        [d, m] = i.useState(n),
        [f, h] = i.useState(l),
        [p, g] = i.useState(null),
        [x, j] = i.useState(null),
        [b, y] = i.useState(!1),
        k = d.trim(),
        w = k === n ? null : (0, l3.p)(k),
        N = p ?? c,
        C = (0, o.bG)([lY.A], () => lY.A.getPublishStatus(t)?.previewDevicePermissions ?? l4);
    function A() {
        (r(), u());
    }
    async function I(e) {
        if ((e.preventDefault(), b || null != w)) return;
        (y(!0), j(null));
        let r = await (0, e0.$l)(t, { name: k, icon: p, description: f }, { name: n, description: l });
        (y(!1), r) ? A() : j(E.intl.string(S.default.Fi7boI));
    }
    return (0, a.jsx)("form", {
        onSubmit: I,
        children: (0, a.jsx)(e5.a, {
            transitionState: s,
            onClose: u,
            title: E.intl.string(S.default.OmOWDq),
            subtitle: E.intl.string(S.default.Gzmlyg),
            size: "sm",
            actions: [
                { text: E.intl.string(S.default["bz/M68"]), variant: "secondary", onClick: A, disabled: b },
                {
                    text: E.intl.string(S.default.dyIV6M),
                    variant: "primary",
                    type: "submit",
                    loading: b,
                    disabled: null != w,
                },
            ],
            children: (0, a.jsxs)(e6.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(l2.r, {
                        iconURL: N,
                        onIconChange: (e) => {
                            (g(e), j(null));
                        },
                        name: d,
                        nameError: w,
                        onNameChange: m,
                        description: f,
                        onDescriptionChange: h,
                        disabled: b,
                    }),
                    (0, a.jsx)(l6, { permissions: C }),
                    null != x
                        ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: x })
                        : null,
                ],
            }),
        }),
    });
}
var l8 = n(373540),
    l9 = n(144228);
function re(e) {
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
        children: (0, a.jsx)(l9.z, {
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
let rt = {
    showPublishBlocked: l8.A,
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, e7.openModal)(
                (t) =>
                    (0, a.jsx)(l7, {
                        ...t,
                        ...e,
                        onDone: () => {
                            n = !0;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        }),
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, e7.openModal)(
                (t) =>
                    (0, a.jsx)(re, {
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
var rn = n(58736),
    rl = n(333007),
    rr = n(775121),
    ra = n(826745),
    ri = n(470779);
function rs(e) {
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
            takeRefs: C,
        } = tV({ projectId: t, surface: "design", onUploadFile: f }),
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
        F = Math.min(Math.max("point" === p ? n.y : n.y + 32 + 4, z), Math.max(z, l.top + l.height - $ - 8));
    return (0, a.jsxs)("div", {
        ref: P,
        className: h()(ri.M0, { [ri.ho]: _ && !m, [ri.ET]: m }),
        style: { left: O, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            g
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: ri.Fg,
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
                                  className: ri.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(em.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: ri.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(ra.y, {
                autoFocus: !0,
                rows: 1,
                className: ri.hF,
                value: s,
                placeholder: x ?? ("" === r ? E.intl.string(S.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? E.intl.string(S.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m || !g ? void 0 : y,
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
                      className: ri.ZO,
                      children: j.map((e) => (0, a.jsx)(tW, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function ro(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function ru(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rc(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? ro(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = ro(e());
                l((e) => (ru(e, t) ? e : t));
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
var rd = n(876798),
    rm = n(48507),
    rf = n(193885),
    rh = n(744898),
    rp = n(803656),
    rg = n(241326),
    rx = n(972213);
function rv(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rj(e, t, n) {
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
let rb = rj("red", rv(w.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    ry = [
        rb,
        rj("yellow", rv(w.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        rj("green", rv(w.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        rj("blue", rv(w.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        rj("white", rv(w.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
    ];
function rk(e) {
    return ry.find((t) => t.id === e) ?? rb;
}
function rw(e) {
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
function rN(e) {
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
function rC(e) {
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
function rA(e) {
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
let rS = n9.map((e) => rA(Math.min(16, e + 3))),
    rE = le.map((e) => rA(Math.min(16, e / 2.5))),
    rI = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
    rM = {
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
function r_(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: lu.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(rd.k, {
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
function rR(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(eH.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function rP(e) {
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
function rT(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rk(n.colorId),
        h = rM[u],
        p = E.intl.string(S.default.hUm825),
        g = E.intl.string(S.default.n5IA3a),
        x = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: lu.t$,
        children: [
            (0, a.jsx)("div", {
                className: lu.NT,
                children: (0, a.jsx)(r_, {
                    icon: rN,
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
                    (0, a.jsx)(r_, {
                        icon: rw,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => li(t, "move"),
                    }),
                    (0, a.jsx)(r_, {
                        icon: rm.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => li(t, "text"),
                    }),
                    (0, a.jsx)(rP, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(r_, {
                                icon: rf.V,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (li(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rS.map((n, l) =>
                                (0, a.jsx)(
                                    r_,
                                    {
                                        icon: n,
                                        label: E.intl.string(rI[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (lr(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), nV(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rP, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(r_, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (li(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(rM).map((n) =>
                                (0, a.jsx)(
                                    r_,
                                    {
                                        icon: rM[n].icon,
                                        label: rM[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (li(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rP, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(r_, {
                                icon: rC,
                                label: g,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (li(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rE.map((n, l) =>
                                (0, a.jsx)(
                                    r_,
                                    {
                                        icon: n,
                                        label: E.intl.string(rI[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (lr(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), nV(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rP, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(rR, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            ry.map((n) =>
                                (0, a.jsx)(
                                    r_,
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
                    (0, a.jsx)(rR, {
                        icon: rh.e,
                        label: E.intl.string((0, eg.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(rR, {
                        icon: rp.U,
                        label: E.intl.string((0, eg.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(rR, {
                        icon: rg.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: lu.Gz, role: "separator" }),
                    (0, a.jsx)(rR, { icon: rx.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let rL = w.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function r$(e, t, n) {
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
                    (e.strokeStyle = rL),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function rD(e) {
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
async function rz(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = rD(e),
            r = rD(e);
        if (null == l || null == r) return null;
        return (r$(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let rO = new Map(),
    rF = new Map(),
    rq = (0, tS.D)(() => ({ byMessageKey: {} }));
function rU(e, t) {
    let { [e]: n, ...l } = rq.getState().byMessageKey;
    rq.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function rG(e, t) {
    null == t ? rO.delete(e) : rO.set(e, t);
}
function rB(e) {
    return rO.get(e)?.() ?? Promise.resolve(null);
}
let rH = { dx: 0, dy: 0 },
    rK = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    rV = 1;
function rW(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = lo(s),
        { active: u } = nY(s),
        c = (0, e7.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => la(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && nK(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(rX, { projectId: s, state: o, resolveIframe: r });
}
function rX(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = rc(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, g] = i.useState(rH),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = rk(n.colorId),
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
        (0, rl.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, lU.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (rG(t, T), () => rG(t, null)), [t, T]);
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
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? n2(e, p.dx, p.dy) : e)),
            o = j.current;
        r$(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, A.present, p]);
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
                id: `mark-${rV++}`,
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
                                id: `mark-${rV++}`,
                                kind: "erase",
                                width: le[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${rV++}`,
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
                                id: `mark-${rV++}`,
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
                if (null != n) return void g({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
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
                ((b.current = null), g(rH), ls(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && n4(n, r) ? ls(t, { type: "commit", shape: n }) : $());
        }, [t, r, p, $]),
        G = i.useCallback(() => la(t), [t]),
        B = i.useCallback(() => ls(t, { type: "undo" }), [t]),
        H = i.useCallback(() => ls(t, { type: "redo" }), [t]),
        K = i.useCallback(() => ls(t, { type: "clear" }), [t]),
        V = i.useRef({ tool: C, selected: R, exit: G, undo: B, redo: H });
    if (
        (i.useLayoutEffect(() => {
            V.current = { tool: C, selected: R, exit: G, undo: B, redo: H };
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
                let o = rK[s];
                null != o && (e.preventDefault(), li(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (M) return (rr.A.disable(), () => rr.A.enable());
        }, [M]),
        null == r)
    )
        return null;
    let W = Math.max(8, r.left - d - 8),
        X = null == R ? null : n7(null == b.current ? R : n2(R, p.dx, p.dy), r);
    return (0, rl.createPortal)(
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
                    : (0, a.jsx)(rs, {
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
                    style: { left: W, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(rT, { projectId: t, state: n, onExit: G, onUndo: B, onRedo: H, onClear: K }),
                }),
            ],
        }),
        document.body,
    );
}
var rJ = n(308081),
    rZ = n(689175),
    rY = n(683071),
    rQ = n(218394),
    r0 = n(115982),
    r1 = n(886540);
function r2(e) {
    return !(0, r1.BL)(e) && !0 !== e.stopRequested;
}
var r3 = n(104317),
    r4 = n(643278),
    r5 = n(566424),
    r6 = n(683063),
    r7 = n(140735),
    r8 = n(138212);
function r9(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: h()(r8.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: h()(r8.wx, null != n && r8.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var ae = n(148590);
function at(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function an(e) {
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
        [g, x] = i.useState(l);
    g !== l && (x(l), p(!l));
    let v = i.useCallback(() => p((e) => !e), []),
        j = f ? t7.a : tJ._,
        b = null != n || l;
    return (0, a.jsxs)(r9, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: ae.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(C.D, {
                                className: ae.L$,
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
        headerClassName: f ? void 0 : ae.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: h()(ae.rf, o), hidden: !f, children: c })],
    });
}
var al = n(883646);
let ar = [];
function aa(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: h()(al.xL, {
            [al.Vb]: "in_progress" === t,
            [al.cT]: "completed" === t,
            [al.GZ]: "unfinished" === t,
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
                className: al.Qd,
                itemClassName: al.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: al.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: al.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function ai(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : ar), [n, t]),
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
        g = o.length - p.length;
    return (0, a.jsxs)("span", {
        className: al.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    r6.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: al.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: al.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function as(e) {
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
            ((t = (r ?? ar).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? ar),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: al.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: h()(al.AS, { [al.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(aa, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: al.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: al.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(ai, { agents: u.get(e.id) ?? ar, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: al.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(aa, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: al.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: al.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ao(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(an, {
        title: E.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(at, { children: c }),
        superseded: s,
        showLabel: E.intl.string(S.default.RKyN9q),
        hideLabel: E.intl.string(S.default.xydHoj),
        className: al.Nr,
        bodyClassName: al.rf,
        beforeBody: r && !s ? (0, a.jsx)(r7.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(as, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var au = n(308665),
    ac = n(59678),
    ad = n(903847);
function am(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [f, p] = i.useState(c),
        [g, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(c);
    (b !== c && (y(c), null != n ? (m(n), p(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (c || !f) return;
            let e = setTimeout(() => p(!1), 150);
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
              className: ad.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(ad.vK, { [ad.ho]: g && c, [ad.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(ad.Rk, ac.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(r5.A, {
                                        glyph: (0, a.jsx)(au.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(C.D, {
                                    className: ad.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: h()(ad.Rk, ac.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(r5.A, {
                                            glyph: (0, a.jsx)(au.Ay, {}),
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
                                        className: ad.BO,
                                        onClick: P,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(r4.ClipboardListIcon, {
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
                            className: h()(ad.vB, { [ad.pg]: v && A, [ad.ui]: !v }),
                            children: (0, a.jsx)(ao, {
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
var af = n(195880);
function ah(e) {
    let t = (0, G.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var ap = n(736553),
    ag = n(642785);
async function ax(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, ag.dv)(e),
        i = new ap.u();
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
var av = n(890497),
    aj = n(103557),
    ab = n(29073),
    ay = n(590077);
function ak(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = ah(e),
                [s, o] = i.useState(null),
                [u, c] = i.useState([]),
                [d, m] = i.useState(t.prompt),
                [f, h] = i.useState(!1),
                [p, g] = i.useState(!1),
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
                    (h(!0), g(!1));
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
                                    ((t = { content: l, nonce: (0, af.m)() }), x.current.set(e.projectId, t)),
                                ax(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: C }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), g(!0));
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
        className: h()(ab.nd, ab.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: ab.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: ab.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(eH.K, {
                        icon: eo.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(S.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ay.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(av.Z, {
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
                    (0, a.jsx)(aj.f, {
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
                className: ab.qr,
                children: (0, a.jsx)("div", {
                    className: ab.zt,
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
var aw = n(658675),
    aN = n(22231),
    aC = n(123292),
    aA = n(691885),
    aS = n(360047);
function aE(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: o } = e,
        u = i.useMemo(() => aS.Hi.map((e) => ({ id: e, value: e, label: (0, aS.hU)(e) })), []);
    return (0, a.jsx)(aA.l, {
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
var aI = n(734057),
    aM = n(287809);
function a_(e) {
    return 0 === e.options.length && null == e.input;
}
let aR = {
        [D.rbe.GUILD_TEXT]: "text",
        [D.rbe.GUILD_VOICE]: "voice",
        [D.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [D.rbe.GUILD_STAGE_VOICE]: "stage",
        [D.rbe.GUILD_FORUM]: "forum",
        [D.rbe.GUILD_MEDIA]: "media",
    },
    aP = { channel: "#", role: "@", user: "@", project: "" },
    aT = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
    };
function aL(e, t) {
    return E.intl.string(aT[e][+!!t]);
}
var a$ = n(155078);
function aD(e) {
    return e.options.some((e) => null != e.image);
}
let az = [];
function aO(e, t) {
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
var aF = n(300344),
    aq = n(614733),
    aU = n(904363),
    aG = n(950902),
    aB = n(384017);
function aH(e) {
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
                        let l = null == (n = aI.A.getChannel(t)?.type) ? void 0 : aR[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = aM.default.getUser(t)?.username;
                        return { kind: e, ...(null == n ? {} : { username: n }) };
                    }
                    return { kind: e };
                })(t, e),
            }))
        );
    }
    let g = {
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
        className: aB.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(av.Z, {
                  ...g,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(av.Z, {
                  ...g,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function aK(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, aF.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(aH, { ...l, guildId: t, options: r, placeholder: aL("channel", !0 === l.question.multi_select) });
}
function aV(e) {
    let { guildId: t, ...n } = e,
        l = (0, aU.A)(t);
    return (0, a.jsx)(aH, { ...n, guildId: t, options: l, placeholder: aL("role", !0 === n.question.multi_select) });
}
function aW(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, aq.A)(t);
    return (0, a.jsx)(aH, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: aL("user", !0 === n.question.multi_select),
    });
}
function aX(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = ah(t),
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
    return 0 === s.length ? n : (0, a.jsx)(aH, { ...l, options: s, placeholder: aL("project", !1) });
}
function aJ(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, aG.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(aX, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(aK, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(aV, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(aW, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var aZ = n(87221),
    aY = n(26430),
    aQ = n(750943),
    a0 = n(95477),
    a1 = n(256905),
    a2 = n(490707),
    a3 = n(907702);
function a4(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, a2._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(a3.Gt, a3.b6),
              children: [
                  (0, a.jsx)(aZ.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(a3.Gt, { [a3.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: a3.Sl,
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
function a5(e) {
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
            onRemove: g,
        } = e,
        x = E.intl.formatToPlainString(S.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: h()(a3.Vs, { [a3.Q9]: s, [a3.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: a3.Up,
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
                        className: a3.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(a4, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: a3.Gt }),
                            (0, a.jsx)("span", {
                                className: a3.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(aw.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(l9.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: a3.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, a$.E)(t) : "")
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
            null != g
                ? (0, a.jsx)("span", {
                      className: a3.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(eH.K, {
                              icon: rg.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: g,
                              disabled: o,
                              "aria-label": E.intl.string(S.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: a3.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(eH.K, {
                                icon: aY._,
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
function a6(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: m } = l,
        f = m.length > 4 ? "gallery" : "row",
        p = i.useRef(null),
        g = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, eh.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, a1.R)({
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
        className: a3.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: h()(a3.fF, "gallery" === f ? a3.nV : a3.nM, { [a3.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            a5,
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
                                onMeasured: (t) => g.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, a.jsx)(
                              a5,
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
            (0, a.jsx)(a7, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function a7(e) {
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
        className: a3.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: a3.QJ,
                children: [
                    (0, a.jsx)(V.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: aQ.X,
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
                        className: a3.Fg,
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
                      className: a3.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: a3.Hs,
                              children: (0, a.jsx)(a0.k, {
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
                              className: a3.gd,
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
                                  (0, a.jsx)(aC.Q, {
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
function a8(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(aB.uK, { [aB.ue]: l, [aB.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: aB.dy, children: (0, a.jsx)(aw.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: aB.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: aB.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: aB.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: aB.ed,
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
                      className: aB.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function a9(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return aD(n)
        ? (0, a.jsx)(a6, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      a8,
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
let ie = [],
    it = [];
function il(e) {
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
        className: h()(aB.Ge, aB.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aB.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(a9, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: aO(o, u),
            }),
            aD(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: aB.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: aB.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(aN.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(aB.Pu, aB.es), children: c }),
                      ],
                  }),
        ],
    });
}
function ir(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, f] = i.useState({}),
        [p, g] = i.useState({}),
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
        H = Math.min(A, B - 1),
        K = l.questions[H],
        [W, X] = i.useState({ id: K.id, expanded: !1 }),
        J = W.id === K.id && W.expanded,
        [Z, Y] = i.useState(null),
        Q = c[K.id] ?? "",
        ee = !0 === K.multi_select,
        et = aD(K),
        el = ee ? (m[K.id] ?? ie) : ((t = o[K.id]), t?.kind === "option" ? [t.optionId] : az),
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
                        if (o) return aO(h, m(i));
                        function p(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function g(e) {
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
                                p({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: g(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: g(h) })));
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
        ea = er.imageFor(K.id),
        ei = er.selectedFor(K),
        { text: es, phase: eu } = (0, tZ.Q)(K.question),
        ec = es === K.question,
        ed = ec && Z?.id === K.id && Z.truncated;
    i.useLayoutEffect(() => {
        if (null == O || J || !ec) return;
        function e() {
            if (null == O) return;
            let e = O.scrollHeight > O.clientHeight + 1;
            Y((t) => (t?.id === K.id && t.truncated === e ? t : { id: K.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(O), () => t.disconnect());
    }, [ec, O, K.id, J]);
    let em = E.intl.string(J ? E.t.iTcuma : E.t.dcl9MQ),
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
                                      return (0, aS.Ol)(t, n, l);
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
                    P({ question: K, draft: Q, selected: el, ownImage: ea, ownSelected: ei, direction: t, moves: n }),
                    D(!0),
                    I(e));
            },
            [Q, ea, ei, K, el],
        ),
        eg = i.useCallback(() => {
            let e = z.current,
                t = q.current;
            null != e && null != t && L({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = z.current,
            t = q.current;
        if (null == e || null == t) return;
        eg();
        let n = new ResizeObserver(eg);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [eg]);
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
                let t = { ...o, [K.id]: e };
                u(t);
                let n =
                    H < l.questions.length - 1
                        ? H + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, H);
                null == n ? ef(t) : ep(n, n < H ? "back" : "forward");
            },
            [o, l, G, H, K.id, ef, ep],
        ),
        ej = i.useCallback(() => {
            G || 0 === H || ep(H - 1, "back");
        }, [G, H, ep]),
        eb = H > 0 && !G,
        ey = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [K.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                et ? G || u((e) => ({ ...e, [K.id]: t })) : ev(t);
            },
            [G, et, K.id, ev],
        ),
        { multiPartFor: ek } = er,
        ew = i.useMemo(() => {
            var e;
            let t, n;
            return ee
                ? ((e = ek(K)),
                  (t = Q.trim()),
                  (n = K.options.filter((e) => el.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: el,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [Q, ee, ek, K, el]),
        eN = p[K.id] ?? it,
        eC = i.useMemo(() => {
            var e, t;
            let n;
            return null != K.input
                ? ((e = K.input),
                  (t = x[K.id]),
                  (n = Q.trim()),
                  {
                      kind: "entities",
                      entities: eN,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eN.map((t) => (t.name.startsWith(aP[e]) ? t.name : `${aP[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [Q, x, eN, K.id, K.input]),
        eA = i.useCallback(
            (e, t) => {
                (g((t) => ({ ...t, [K.id]: e })), j((e) => ({ ...e, [K.id]: t })));
            },
            [K.id],
        ),
        eS = i.useCallback(() => w(!0), []),
        eE = i.useCallback(() => w(!1), []),
        eI = er.controlsFor(K, G),
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
                        : (o[K.id] ?? null),
            [o, Q, ew, eC, K.id],
        ),
        eD = null != e$ && !G,
        ez = H === B - 1,
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
                  className: aB.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: aB.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(aN.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(ra.y, {
                          value: Q,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [K.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eM());
                          },
                          placeholder: E.intl.string(a_(K) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: K.question }),
                          disabled: G,
                          rows: 1,
                          className: aB.Pu,
                          "data-conjure-clarification-other": K.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(aB.$O, { [aB.fI]: e_ && !eP, [aB.Oh]: eP }),
        role: "dialog",
        "aria-label": K.question,
        "data-conjure-clarification": l.id,
        "data-state": G ? "inert" : "open",
        "data-question-expanded": J ? "true" : void 0,
        "data-picker-open": k && !$ ? "true" : void 0,
        "data-step": H,
        tabIndex: -1,
        onKeyDown: eF,
        children: [
            (0, a.jsxs)("div", {
                className: aB.rf,
                style: null == T ? void 0 : { height: T.heading + T.rows },
                "data-moving": $ ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: z,
                        className: aB.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: F,
                                tag: "span",
                                id: `${K.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: J ? void 0 : 5,
                                className: h()(ab.TK, aB.R_, { [aB.TB]: "exit" === eu, [aB.JU]: "enter" === eu }),
                                children: es,
                            }),
                            ed || J
                                ? (0, a.jsx)("div", {
                                      className: ab.Q7,
                                      children: (0, a.jsx)(N.m, {
                                          text: em,
                                          children: (0, a.jsx)(eH.K, {
                                              icon: J ? tX.t : t7.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => X({ id: K.id, expanded: !J }),
                                              "aria-label": em,
                                              "aria-controls": `${K.id}-label`,
                                              "aria-expanded": J,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(C.D, {
                                      className: h()(ab.gb, ab.Q7),
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
                        className: aB.Cg,
                        style: null == T ? void 0 : { insetBlockStart: T.heading },
                        children: (0, a.jsxs)("div", {
                            className: aB.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: q,
                                    className: aB.Ge,
                                    role: "group",
                                    "aria-labelledby": `${K.id}-label`,
                                    "data-direction": M?.direction,
                                    "data-parity": null == M ? void 0 : M.moves % 2,
                                    children: [
                                        ee
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: aB.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(a9, {
                                            projectId: n,
                                            question: K,
                                            selected: el,
                                            disabled: G,
                                            onPick: (e) =>
                                                ee
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [K.id]:
                                                                  ((n = t[K.id] ?? ie),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  K.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ey(e),
                                            own: eI,
                                        }),
                                        null != K.input
                                            ? (0, a.jsx)(aJ, {
                                                  projectId: n,
                                                  question: K,
                                                  value: eN,
                                                  disabled: G,
                                                  onChange: eA,
                                                  onFocus: eS,
                                                  onBlur: eE,
                                                  fallback: !1 === K.allow_custom ? eq : null,
                                              })
                                            : null,
                                        !0 === K.link && eN.length > 0 && null == b[K.id]
                                            ? (0, a.jsx)("div", {
                                                  className: aB.X_,
                                                  children: (0, a.jsx)(aC.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: E.intl.string(S.default.eCzCxC),
                                                      disabled: G,
                                                      onClick: () => y((e) => ({ ...e, [K.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === K.link && eN.length > 0 && null != b[K.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: aB.$y,
                                                  onFocus: eS,
                                                  onBlur: eE,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: E.intl.string(S.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(aE, {
                                                          label: E.intl.string(S.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: b[K.id] ?? "auto",
                                                          disabled: G,
                                                          onChange: (e) => y((t) => ({ ...t, [K.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        !1 === K.allow_custom ? null : eq,
                                    ],
                                }),
                                null == R
                                    ? null
                                    : (0, a.jsx)(
                                          il,
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
            B > 1 || ee || et || null != K.input || a_(K)
                ? (0, a.jsxs)("div", {
                      className: ab.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  B > 1
                                      ? E.intl.formatToPlainString(S.default.yzYUjq, { index: H + 1, total: B })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: ab.zt,
                              children: [
                                  eb
                                      ? (0, a.jsx)(aC.Q, {
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
var ia = n(557744),
    ii = n(223347),
    is = n(894443),
    io = n(525530);
function iu(e, t) {
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
var ic = n(572253),
    id = n(411236);
function im(e) {
    let { projectId: t, request: n, onDismiss: l, notifyAgent: r = !0 } = e,
        i = null != n.note && "" !== n.note ? n.note : E.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(ic.A, {
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
                      className: id.Mk,
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
                          (0, a.jsx)("div", { className: id.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(ab.nd, ab.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: ab.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: ab.TK,
                                      children: E.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(C.D, {
                                      className: h()(ab.gb, ab.Q7),
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
                              className: id.DQ,
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
                              className: ab.qr,
                              children: (0, a.jsx)("div", { className: ab.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var ih = n(935208),
    ip = n(932111),
    ig = n(404373),
    ix = n(435558),
    iv = n.n(ix);
let ij = "ConjureComposerDrafts";
function ib() {
    return B.w.get(ij) ?? {};
}
let iy = new Map(),
    ik = iv().throttle(() => {
        if (0 === iy.size) return;
        let e = ib();
        for (let [t, n] of iy) "" === n ? delete e[t] : (e[t] = n);
        (iy.clear(), B.w.set(ij, e));
    }, 1e3);
class iw extends o.Ay.Store {
    getDraft(e) {
        let t = iy.get(e);
        return null != t ? t : (ib()[e] ?? "");
    }
}
let iN = new iw(tA.h, {
    LOGOUT: function () {
        return (iy.clear(), ik.cancel(), B.w.remove(ij), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (iy.set(t, n), ik(), "" === n && ik.flush(), !1);
    },
});
function iC(e) {
    return "" !== iN.getDraft(e).trim();
}
var iA = n(29080);
function iS(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, r0.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, r0.Lf)(r) }),
    };
}
var iE = n(62617);
let iI = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    iM = {
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
    i_ = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, iE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, iE.Z)(),
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
                        () => (0, iE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, iE.Z)(),
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
                        () => (0, iE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, iE.Z)(),
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
                        () => (0, iE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, iE.Z)(),
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
                        () => (0, iE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, iE.Z)(),
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
                        () => (0, iE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, iE.Z)(),
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
                        () => (0, iE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, iE.Z)(),
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
                        () => (0, iE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, iE.Z)(),
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
                        () => (0, iE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, iE.Z)(),
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
                        () => (0, iE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, iE.Z)(),
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
                        () => (0, iE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, iE.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function iR(e) {
    return { ...i_[e], name: E.intl.string(iM[e]()) };
}
function iP(e) {
    return iI.includes(e) ? iR(e) : void 0;
}
function iT(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % iI.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, iI[(t + n) % iI.length]);
            }),
            l
        );
    })(e))
        t.set(n, iR(l));
    return t;
}
var iL = n(615839);
function i$(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var iD = n(60160),
    iz = n(16634);
function iO(e) {
    let t = (0, r0.SY)(e.steps);
    return null != t ? (0, r0.WQ)(t) : i$(e.task);
}
function iF(e) {
    let t = iT(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? iP(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: i$(e.task),
                      todoId: e.task.todoId,
                      line: iO(e),
                  },
              ];
    });
}
function iq(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, r0.SY)(n.steps),
        d = u
            ? iO(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(i$(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, iL.MB)(e.durationMs),
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
                                    className: ac.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            iz.A,
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
                                      className: ac.iq,
                                      children: (0, a.jsx)(iD.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(r5.A, {
        glyph: (0, a.jsx)(r6.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: i$(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ac.nC,
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
var iU = n(998445),
    iG = n(643210),
    iB = n(648127),
    iH = n(372795),
    iK = n(163897);
let iV = "conjure-browser-viewer";
function iW(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [iG.A],
            () =>
                n.flatMap((e) => {
                    let n = iG.A.getTab(t, e);
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
        className: iK.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(iX, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function iX(e) {
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
        u = (0, e7.useHasModalOpen)(iV),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        p = (0, iB.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(iK.Nr, f && iK.Xj),
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
                    { modalKey: iV },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: p }),
        children: [
            (0, a.jsxs)("div", {
                className: iK.Gt,
                children: [
                    (0, a.jsx)(iH.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: iK.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: p }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: iK.qf,
                              children: (0, a.jsx)(iU.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: iK.HS,
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
                className: iK.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(iK.W9, f && iK.oM) }),
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
var iJ = n(268409);
let iZ = new WeakMap(),
    iY = new WeakMap();
function iQ(e) {
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
                    let t = iZ.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = iY.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), iY.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (iZ.set(e, n), n);
                })(ld.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: iJ.h, children: (0, a.jsx)(iW, { projectId: t, sessionIds: u }) });
}
var i0 = n(469393);
function i1(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, lv.lG)(t.authored_at);
    return (0, a.jsx)(r9, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: i0.r,
            children: [
                (0, a.jsxs)("div", {
                    className: i0.z,
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
var i2 = n(155718);
function i3(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let i4 = ["command", "user_command", "message_command", "message"],
    i5 = new Set([i2.kc.CHAT, i2.kc.USER, i2.kc.MESSAGE]);
function i6(e) {
    return e.type ?? i2.kc.CHAT;
}
function i7(e) {
    return i5.has(i6(e));
}
function i8(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function i9(e, t) {
    let n = i4.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !i8(e)), ...n.filter(i8)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || i8(r) || l.push(r);
    }
    return i4.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function se(e, t, n) {
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
    let s = e.commands.filter(i7).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (i6(e)) {
                    case i2.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case i2.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(i8),
        u = a.length > 0 ? i9([...a, ...o], !0) : i9("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var st = n(377941),
    sn = n.n(st);
function sl(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function sr(e) {
    return e.type === i2.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === i2.kc.USER || e.type === i2.kc.MESSAGE
          ? ""
          : "/";
}
let sa = {
        [lw.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [lw.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [lw.q7.ACTIVITY]: S.default["3/aHX6"],
        [lw.q7.OVERLAY]: S.default["rPpf5/"],
        [lw.q7.PROFILE_WIDGET]: null,
        [lw.q7.AUTOMOD]: null,
        [lw.q7.BOT]: null,
        [lw.q7.APPLICATION_COMMANDS]: null,
    },
    si = [lw.q7.ACTIVITY, lw.q7.APP_CHANNEL, lw.q7.VOICE_CHANNEL, lw.q7.OVERLAY];
function ss(e) {
    return si.find((t) => i3(e, t)) ?? null;
}
var so = n(176999),
    su = (((l = {}).IMAGE = "image"), l),
    sc = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    sd = n(598748),
    sm = n(773669);
let sf = [],
    sh = {},
    sp = {};
function sg(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function sx(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: su.IMAGE,
        visibility: sc.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var sv = n(127258),
    sj = n(803306),
    sb = n(320095),
    sy = n(963852),
    sk = n(95701),
    sw = n(889227),
    sN = n(427262);
let sC = new sk.nA({ id: "1337", guild_id: "1337", type: D.rbe.GUILD_TEXT, name: "preview" });
function sA(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([aM.default], () => aM.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, sj.nj)(new sw.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let sS = /^@\S+/;
var sE = n(97808),
    sI = n(778712),
    sM = n(46054),
    s_ = n(200700);
let sR = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    sP = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    sT = ["blocked", "alert", "allowed"],
    sL = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function s$(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, s_.getFriendlyDurationString)(n))
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
var sD = n(984097),
    sz = n(13673);
let sO = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function sF(e) {
    let { example: t } = e,
        n = s$(t);
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
let sq = ["glazedgamer", "sprinkles", "donutking"];
function sU(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = sR[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(sD.nM, { [h()(sD.HV, sz.DX)]: s }),
        children: [
            (0, a.jsx)(r7.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: sD.my,
                children: (0, a.jsx)(sE.eu, {
                    src: (0, X.AE)(void 0, void 0),
                    size: sI._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: sD.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), sM.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(sF, { example: n }) : null,
                ],
            }),
        ],
    });
}
function sG(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = sP[t.section],
        s = new Set(t.examples.map(s$)),
        o = 1 === s.size ? t.examples.map(s$)[0] : null;
    return (0, a.jsxs)("div", {
        className: sD.UO,
        children: [
            (0, a.jsxs)("div", {
                className: sD.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: sO[r.tone],
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
                                      className: sD.IQ,
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
                className: sD.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(sU, { example: e, username: sq[(n + t) % sq.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function sB(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            sT
                .map((e) => ({ section: e, examples: t.filter((t) => sL[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: sD.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: sD.hk,
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
                    sG,
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
var sH = n(276293),
    sK = n(460905),
    sV = n(110384),
    sW = n(633018),
    sX = n(763754),
    sJ = n(217424),
    sZ = n(194085),
    sY = n(20851),
    sQ = n(692508),
    s0 = n(798819);
function s1(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(s0.item, s0.labelContainer, s0.colorDefault, {
            [s0.focused]: !0 === t.highlighted,
            [s0.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: s0.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: s0.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(s0.label, sQ.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: s0.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: s0.icon }),
                  })
                : null,
        ],
    });
}
function s2(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, sQ.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: sV.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(s0.menu, sQ.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: s0.scroller,
            children: [
                (0, a.jsx)(s1, { item: s }),
                (0, a.jsx)("div", { className: s0.separator }),
                (0, a.jsx)(s1, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var s3 = n(381941);
function s4() {}
function s5(e) {
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
        { projectId: g, exchanges: x } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, o.bG)([aM.default], () => aM.default.getCurrentUser())),
        (n = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(g))),
        (l = n?.application_id),
        (r = (0, o.bG)([tn.A], () => tn.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([aM.default], () => (null != l ? aM.default.getUser(l) : void 0), [l])),
        (d = sA("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = sA("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (p = sA("31339", (0, sN.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, sb.rh)({
                                          ...(0, sy.Ay)({
                                              channelId: sC.id,
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
                                                        type: sv.G.APPLICATION_COMMAND,
                                                        user: (0, sy.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(sS, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: p, member: f },
                              {
                                  targetMessage: E.intl.string(S.default["y+QYes"]),
                                  memberMessage: E.intl.string(S.default.BUTRDc),
                              },
                          ),
                [x, m, t, p, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = sC.name;
    return (0, a.jsxs)("div", {
        className: sQ.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: sQ.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sH.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(sQ.TE, `group-spacing-${s3.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? sQ.Rz : void 0,
                            children: [
                                (0, a.jsx)(sY.A, {
                                    message: n,
                                    channel: sC,
                                    author: (0, sX.FT)(n.author, sC),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(sJ.A, { message: n, channel: sC }) : void 0,
                                    usernameClassName: r?.target === "user" ? sQ.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: sQ.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(sZ.Ay, {
                                              children: [
                                                  (0, a.jsx)(sZ.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: sK.n,
                                                      onClick: s4,
                                                  }),
                                                  (0, a.jsx)(sZ.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: sV.W,
                                                      onClick: s4,
                                                  }),
                                                  (0, a.jsx)(sZ.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: eK.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: s4,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? sQ.ET : sQ.je,
                                          inert: !0,
                                          children: (0, a.jsx)(s2, {
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
                className: sQ.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sW.k, { size: "sm", color: "currentColor" }),
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
var s6 = n(332173);
function s7(e) {
    let { name: t } = e;
    return (0, a.jsxs)(s6.A, { children: ["/", t] });
}
function s8(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(sn());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(s7, { name: e.name }, e.start) : e.text));
}
n(827669);
var s9 = n(757789),
    oe = n(26137);
let ot = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var on = n(573634);
let ol = {
    frame: J.GameControllerIcon,
    overlay_widget: s9.V,
    user_widget: oe.r,
    bot: ee.RobotIcon,
    commands: ee.RobotIcon,
    automod: Q.ShieldIcon,
};
function or(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(on.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function oa(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: on.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: on.jw,
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
function oi(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: on.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(on.Vo, on.G),
                children: (0, a.jsx)(Z.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: on.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function os(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: on.wZ,
        children: t.map((e, t) => {
            let n = sr(e),
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
                                ? (0, a.jsx)(s7, { name: e.name })
                                : (0, a.jsx)(s6.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function oo(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: on.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: on.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(s8, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function ou(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? Z.k : ol[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : ot[t.kind]);
    return (0, a.jsxs)("section", {
        className: on.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: on.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: on.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: on.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(s8, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(oo, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: on.PG, children: r }) : null,
        ],
    });
}
function oc(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: on.aN,
        children: [
            (0, a.jsxs)("div", {
                className: on.Lv,
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
                                let n = t.map(sn()).join("|");
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
                            (0, a.jsx)("div", { className: on.yF, role: "separator" }),
                            (0, a.jsx)(ou, {
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
                                                        or,
                                                        {
                                                            className: on.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: on.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        oi,
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
                                                            or,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(oa, { labels: r }),
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
                                                              or,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(os, { commands: e.commands }),
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
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(sl) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            or,
                                                            { caption: n, children: (0, a.jsx)(oa, { labels: l }) },
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
var od = n(633075),
    om = n(946356),
    of = n(58216),
    oh = n(27399);
function op(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([aM.default], () => aM.default.getCurrentUser()),
        r = i.useMemo(() => new od.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: oh.H,
              children: (0, a.jsx)(om.A.Overlay, {
                  className: oh.w,
                  children: (0, a.jsx)(of.A, {
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
var og = n(443863);
function ox(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = (0, a2._)(t, r),
        c = i.useCallback(() => {
            (0, eh.PK)(t, r).then(
                (e) => {
                    (0, a1.R)({
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
              className: og.xX,
              onClick: c,
              "aria-label": E.intl.string(S.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: og.sN, onError: u }) : null,
          });
}
function ov(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = i3(c, lw.q7.APPLICATION_COMMANDS)),
            (l =
                i3(c, lw.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(i7)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : se(c, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = sp } = t,
                r = (0, o.bG)([sm.default], () => sm.default.locale),
                a = (0, o.bG)([eL.Ay], () => {
                    let t = eL.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(sh);
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
                                                          ...sg(n),
                                                          ...(null != n.fallback ? { fallback: sg(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = so.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[sd.m.WIDGET_TOP] || null == i[sd.m.WIDGET_BOTTOM]
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
                                                                    type: so.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: so.oG.NUMBER, value: a })
                                                                : (r[e] = { type: so.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(sx),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: sf,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(u, c),
        p = d?.superseded === !0,
        g = c.what_changed?.trim() ?? "",
        x =
            ((t = c.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === sr(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = ss(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(i7)
                    ? se({ ...c, bot: void 0 }, "commands", {
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
        w = p ? (0, a.jsx)(at, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(an, {
        title: k,
        meta: w,
        superseded: p,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: og.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: og.Qs,
                children: (0, a.jsx)(oc, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(s8, { text: c.summary, commandNames: x }),
                            }),
                            "" !== g
                                ? (0, a.jsxs)("section", {
                                      className: og.uW,
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
                                              children: (0, a.jsx)(s8, { text: g, commandNames: x }),
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
                                    ? (0, a.jsx)(ox, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: E.intl.string(null == (t = ss(c)) ? S.default["3/aHX6"] : sa[t]),
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(op, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(sB, { automod: c.automod })
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
                                        (r = l.some((e) => "command" === e.kind || i8(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(s5, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: x,
                }),
            }),
            null == m || p
                ? null
                : (0, a.jsxs)("div", {
                      className: og.qr,
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
var oj = n(289565);
function ob(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: oj.m, children: n })
        : (0, a.jsxs)("div", {
              className: oj.Z,
              children: [
                  n,
                  (0, a.jsx)(N.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(eH.K, {
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
function oy(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "unpublished" === t.state);
}
function ok(e, t) {
    return null != e && oy(t, e.status);
}
let ow = new WeakMap();
var oN = n(175841),
    oC = n(27232),
    oA = n(505930),
    oS = n(385081);
let oE = "conjurePublishRatings",
    oI = [1, 2, 3, 4, 5],
    oM = { 1: S.default.GhbsGA, 2: S.default.cm0nwU, 3: S.default.kGvlh2, 4: S.default.dVBSUg, 5: S.default.DKlgF7 };
function o_(e) {
    return E.intl.string(oM[e]);
}
let oR = new Set(),
    oP = 0;
function oT() {
    return B.w.get(oE) ?? {};
}
function oL(e, t) {
    return oT()[e]?.[t] ?? null;
}
function o$(e) {
    return (oR.add(e), () => oR.delete(e));
}
function oD(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, oS.Fz)(e, n);
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
        children: (0, a.jsx)(aj.f, {
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
var oz = n(54100);
function oO(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: oz.mo,
        role: "status",
        children: [
            (0, a.jsx)(oN.SparklesIcon, { size: "xs", color: "currentColor", className: oz.dQ, "aria-hidden": !0 }),
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
function oF(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: o } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(o$, () => oP),
                {
                    rating: oL(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != oL(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, oS.gw)(i);
                            let s = oT();
                            return (B.w.set(oE, { ...s, [t]: { ...s[t], [n]: l } }), oP++, oR.forEach((e) => e()), i);
                        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
                        return null != a && e <= 2 ? a : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r }),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, p] = i.useState(!1),
        g = i.useId(),
        x = i.useId(),
        j = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => p(!1), 420);
            return () => clearTimeout(e);
        }, [f]),
        null != s && !f)
    )
        return (0, a.jsx)(oO, { rating: s });
    let b = null != s,
        y = b ? s : (d ?? u),
        k = b || (null == d && null != u);
    function w(e) {
        if (b) return;
        (c(e), m(null), p(!0));
        let t = o(e);
        null != t && (0, e7.openModal)((e) => (0, a.jsx)(oD, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: oz.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: oz.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: x,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: h()(oz.Pf, { [oz.KH]: null == y }),
                        children: E.intl.string(S.default.mTV326),
                    }),
                    oI.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: h()(oz.Pf, { [oz.KH]: y === e }),
                                children: o_(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": x,
                className: oz.uf,
                children: oI.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? oC.StarIcon : oA.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: oz.uK,
                            onMouseEnter: () => {
                                b || m(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: g,
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
                                    className: oz.hF,
                                    "aria-label": E.intl.formatToPlainString(S.default.NU7Dex, {
                                        rating: e,
                                        label: o_(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: h()(oz.d4, { [oz.cO]: t, [oz.Ng]: t && k }),
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
function oq(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, o.bG)([d.A], () => (null == n ? null : d.A.getGuild(n)));
    return (0, a.jsx)(e6.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(e6.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(V.$, {
                    variant: "primary",
                    size: "sm",
                    loading: t.publishing,
                    disabled: t.disabled,
                    onClick: () => t.run("card"),
                    text: t.label,
                }),
                null != l
                    ? (0, a.jsxs)(e6.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: E.intl.string(S.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(F.Ay, { guild: l, size: F.Ay.Sizes.SMOL }),
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  lineClamp: 1,
                                  children: (function (e) {
                                      let t = Array.from(e);
                                      if (t.length <= 24) return e;
                                      let n = t.slice(0, 23).join("");
                                      return `${n.trimEnd()}\u{2026}`;
                                  })(l.name),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function oU(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, e0.Ay)(t);
    return null != r && ok(r, l)
        ? (0, a.jsx)(ob, {
              children: (0, a.jsxs)(e6.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(oq, { publish: r }),
                      null != n ? (0, a.jsx)(oF, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var oG = n(303345),
    oB = n(44255),
    oH = n(416473),
    oK = n(289830);
function oV(e) {
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
                        (await (0, oH.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof oG.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, oB.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, oB.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(r9, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: oK.r,
            children: [
                (0, a.jsxs)("div", {
                    className: oK.z,
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
var oW = n(989271);
function oX(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(oW.nM, { [oW.f1]: s, [oW.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: oW.jo,
                children: [
                    n
                        ? (0, a.jsx)(nC.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: oW.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: oW.G9,
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
function oJ(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(r9, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                oX,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var oZ = n(530557),
    oY = n(872162),
    oQ = n(564963),
    o0 = n(202723);
function o1(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, e7.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: oZ.R })), [r.fields]),
        d = (0, oQ.bB)(l, s),
        m = h()(o0.Lo, { [o0.jY]: d });
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
                        (0, a.jsx)(oY.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: o0.Lo,
                      children: (0, a.jsx)(oY.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
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
                                className: o0.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: o0.c9,
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
                            (0, a.jsx)(oY.C, { label: E.intl.string(S.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: o0.Lo,
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
                        (0, a.jsx)(oY.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: o0.sq,
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
var o2 = n(919790),
    o3 = n(908492),
    o4 = n(971824),
    o5 = n(162052),
    o6 = n(165648);
function o7(e) {
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
            segmentDurationMs: g,
        } = e,
        x = i.useMemo(() => (0, r0.Jf)(n, l), [n, l]),
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
            className: ac.pj,
            "data-live": !1,
            children: (0, a.jsx)(r5.A, {
                glyph: (0, a.jsx)(iA.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, r0.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = iT(k.map((e) => e.taskId)),
        N = !p && (l || k.some((e) => "running" === e.task.status)),
        C = iF(k);
    return (0, a.jsxs)("ol", {
        className: ac.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(r3.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: p,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? iP(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          iq,
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
            (0, a.jsx)(iQ, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: ac.YO,
                      children: (0, a.jsx)(ao, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function o8(e) {
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
            publishCta: g,
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
            () => iS({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: P, lastStreamedMessage: T, showsClosingMessage: L, closingContent: $ } = R,
        D = (N ? C : void 0) ?? R.attachmentsHost,
        z = L && !N,
        O = null == u ? null : (0, a.jsx)(o2.A, { projectId: t, attachments: u }),
        F = null == O ? null : (0, a.jsx)("div", { className: ac.MT, children: O }),
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
        className: ac.ue,
        children: [
            P.length > 0 && !N
                ? (0, a.jsx)("ol", {
                      className: ac.dO,
                      children: P.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ac.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: o6.PT,
                                          children: (0, o3.U)(e.content, !0, {
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
                ? (0, a.jsx)(ov, { projectId: t, proposal: r, version: s, onApprove: y })
                : z
                  ? (0, a.jsxs)("div", {
                        className: h()(ac.ky, o5.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(o6.PT, ac.cW),
                                children: (0, o3.U)($, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === D ? F : null,
                            q,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(ac.ky, o5.XR, { [o4.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(o1, {
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
                      className: h()(ac.ky, o5.XR),
                      children: (0, a.jsx)(im, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== D && ("closing" !== D || z) ? null : O,
            null != g ? (0, a.jsx)(oU, { projectId: t, turnId: x ?? null, cta: g }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(oJ, { ideas: o, pickedIdeaIds: b, onPick: j }) : null,
            null != A ? (0, a.jsx)(i1, { proposal: A, onRestore: I }) : null,
            null != M ? (0, a.jsx)(oV, { projectId: t, proposal: M, current: _ }) : null,
            z ? null : q,
        ],
    });
}
var o9 = n(864970),
    ue = n(146806),
    ut = n(475358),
    un = n(717400),
    ul = n(99677),
    ur = n(655098),
    ua = n(234320),
    ui = n(191023);
function us(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(tU.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: lu.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(ui.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: lu.OY,
                    children: (0, a.jsx)(aN.PencilIcon, {
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
function uo(e) {
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
                ? (0, a.jsx)(aC.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: E.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var uu = n(901173),
    uc = n(161431),
    ud = n(280450),
    um = n(503275),
    uf = n(659280),
    uh = n(351906),
    up = n(407653),
    ug = n(322915);
function ux(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([uh.A], () => uh.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      uf.Ay.User,
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
                      uf.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(up.A, { projectId: n, file: e.file, className: ug.Vk }),
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
    return (0, a.jsx)(uf.Ay, {
        id: t,
        className: ug.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(uv, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                p.length > 0
                    ? (0, a.jsx)(uv, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: p })
                    : null,
            ],
        }),
    });
}
function uv(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: ug.Gf, children: n }),
            l,
        ],
    });
}
var uj = n(719442),
    ub = n(355622),
    uy = n(408018),
    uk = n(186306),
    uw = n(323350),
    uN = n(35277),
    uC = n(820066),
    uA = n(683167),
    uS = n(267102),
    uE = n(259691);
let uI = (0, sk.createChannelRecord)({ id: "1", type: D.rbe.DM });
function uM(e) {
    let t = uC.VW.end(e, []);
    return { anchor: t, focus: t };
}
function u_(e) {
    return (0, uw.WO)(uC.VW.richValue(e), { mode: "raw" });
}
function uR(e, t) {
    ((e.children = (0, uy.x7)(t)), (e.selection = uM(e)), e.onChange());
}
function uP(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(ip.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(uE.A, { attachmentId: r }), n] });
}
var uT = n(497437);
let uL = "text-md/normal",
    u$ = null;
function uD(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, f] = i.useState(0),
        [p, g] = i.useState(0),
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
            (g(i + a), f(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                m = 0 === d ? 1 : s / d,
                h = 0 === d ? 1 : o / d;
            j({
                frontFrom: 1e3 * (0, ue._R)(m),
                frontTo: 1e3 * (0, ue._R)(h),
                backFrom: 1e3 * (0, ue.T)(m),
                backTo: 1e3 * (0, ue.T)(h),
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
        M = (0, o.bG)([W.Ay], () => W.Ay.useReducedMotion),
        _ = t === E.intl.string(S.default.Zc7gML),
        R = r === t && _;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(uT.VT, { [uT.qk]: l }),
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
            children: (0, a.jsx)(ut.e, { shortcut: "tab", className: uT.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o9.o, {
                text: t,
                variant: uL,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: h()(uT.xM, { [uT.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            P(uT.IS, n || (!M && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: uT.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: uL, tag: "span", children: t }),
            }),
            R
                ? (0, a.jsxs)("span", {
                      className: uT.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: uL, tag: "span", className: uT.xM, children: t }),
                          P(uT.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uz = i.memo(function (e) {
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
                questionOpen: g = !1,
                hasPendingContext: x = !1,
                onDraftHasTextChange: v,
                modelSettings: j,
                onModelSettingsChange: b,
            } = e,
            y = (function (e) {
                let t = i.useContext(uS.Ay),
                    [n] = i.useState(() => {
                        let n = (0, uj.ie)();
                        return (
                            (n.children = (0, uy.x7)(e)),
                            (n.selection = uM(n)),
                            (0, uA.a)({
                                editor: n,
                                chatInputType: ub.oU.GENERIC_RICH_TEXTAREA,
                                channel: uI,
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
                                    for (let [t, l] of uC.VW.nodes(e, { at: [], match: uC.l5.isText }))
                                        for (let e of t.text.matchAll(ip.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        uk.o.withMergedEntry(e, () =>
                                            uC.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    uN.b.textToVoid(
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
            })(iN.getDraft(t)),
            [k, w] = i.useState(() => u_(y)),
            C = i.useRef(k),
            [A, I] = i.useState(null),
            M = i.useCallback(() => {
                let e = u_(y);
                e !== C.current &&
                    ((C.current = e),
                    tA.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }),
                    w(e));
                I(
                    (function (e) {
                        let { selection: t } = e;
                        if (null == t || !uC.ZF.isCollapsed(t)) return null;
                        let [n] = uC.VW.node(e, t.anchor.path);
                        return uC.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                    })(y),
                );
            }, [y, t]),
            R = i.useCallback((e) => uR(y, e), [y]),
            P = "" !== k.trim();
        i.useEffect(() => v?.(P), [P, v]);
        let T = i.useRef(t);
        i.useLayoutEffect(() => {
            T.current !== t && ((T.current = t), uR(y, iN.getDraft(t)));
        }, [y, t]);
        let L = (0, o.bG)([W.Ay], () => W.Ay.isSubmitButtonEnabled),
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
                takeRefs: H,
            } = tV({ projectId: t, surface: "chat", onUploadFile: c }),
            K = lt.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && n8(n);
            }),
            V = "" !== k.trim() || F.length > 0 || x || K,
            X = n && V && B,
            [J, Z] = i.useState(null);
        i.useEffect(() => {
            if (null == J) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => Z(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [J]);
        let Y = (function (e) {
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
                            null != l && ((0, um.Y_)(l), r.forEach(um.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([aM.default], () => (null == l ? null : aM.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [aM.default],
                            () => r.map((e) => aM.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([ud.default], () => ud.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            Q = (0, uc.rU)(t),
            [ee, et] = i.useState(null),
            [en, el] = i.useState(0),
            er = i.useMemo(() => (null != A && n ? (0, uu.OG)(A, A.length) : null), [A, n]),
            ea = er?.start ?? null;
        i.useEffect(() => {
            null == ea ? et(null) : (0, uc.IP)(t);
        }, [ea, t]);
        let ei = ea === ee ? null : er,
            es = i.useMemo(() => (null == ei ? [] : (0, uu.l$)(Y, Q, ei.text)), [ei, Y, Q]),
            eo = ei?.text;
        i.useEffect(() => el(0), [eo]);
        let em = es.length > 0,
            ef = Math.min(en, Math.max(0, es.length - 1)),
            ep = i.useId(),
            eg = i.useCallback(
                (e) => {
                    let t = es[e];
                    null != ei &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (uN.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                uN.b.insertText(e, `${n} `));
                        })(y, ei.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [es, ei, y],
            ),
            ex = i.useCallback(() => {
                if (!X) return;
                let e = H(),
                    n = K
                        ? (function (e) {
                              let t = ll(e);
                              if (null == t || !n8(t)) return null;
                              let n = t.history.present,
                                  l = rB(e);
                              return (
                                  lr(e, (e) => ({ ...e, history: nQ, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, _.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (rF.set(i, s),
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
                                              capture: (t) => (0 === t ? l : rB(e)),
                                              composite: (e) => rz(e, n),
                                              upload: (t) =>
                                                  (0, eh.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, eh.n6)(e, t.id),
                                              send: (n) => (0, _.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      rU(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (rF.delete(i),
                                                          window.setTimeout(() => {
                                                              (rU(i, null),
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
                    null == u$ && (u$ = document.createElement("canvas").getContext("2d"));
                    let i = u$;
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
                })(uF(eN.current), e$.current, (0, uu.Lj)(k));
                ("" !== l && Z(l), R(""), et(null));
            }, [X, K, t, k, s, H, R]),
            ev = i.useCallback(
                (e) => {
                    (e.preventDefault(), ex());
                },
                [ex],
            ),
            ej = i.useCallback(() => {
                null == u || $ || (z(!0), u());
            }, [u, $]),
            eb = null == p || "" !== k || !n || r || x ? null : p,
            ey = i.useCallback(
                (e) => {
                    if (em && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = es.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), el((ef + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), eg(ef));
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
                [ex, d, l, u, $, ej, eb, R, em, es.length, ef, eg, ei],
            ),
            ek = i.useCallback(
                (e) => {
                    n && U(e);
                },
                [n, U],
            );
        (0, ua.Vo)({
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
                f?.((0, uu.Lj)(e), () => {
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
            let e = uF(eN.current);
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
            let t = setTimeout(() => e_(!1), uO);
            return () => clearTimeout(t);
        }, [k]);
        let eR = i.useMemo(() => ({ "--custom-glow-x": `${eE}px` }), [eE]),
            eP = eM ? ` ${uT.EB}` : "",
            eT = r
                ? E.intl.string(S.default.qqlUiW)
                : n
                  ? x
                      ? E.intl.string(S.default.knUjL3)
                      : g
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
            eU = J ?? eb ?? eT,
            eG = "" === k && "" !== eU;
        return (0, a.jsxs)("form", {
            onSubmit: ev,
            className: uT.DA,
            children: [
                em
                    ? (0, a.jsx)(ux, {
                          id: ep,
                          projectId: t,
                          suggestions: es,
                          selectedIndex: ef,
                          onHover: el,
                          onSelect: eg,
                      })
                    : null,
                F.length > 0 || K
                    ? (0, a.jsxs)("div", {
                          className: uT.lN,
                          children: [
                              F.map((e) => (0, a.jsx)(tW, { draft: e, onRemove: G }, e.localId)),
                              K ? (0, a.jsx)(us, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${uT.wg} ${uT.LP}${eP}`, style: eR, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${uT.wg} ${uT.L3}${eP}`, style: eR, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: uT.VA,
                    ref: eN,
                    children: [
                        (0, a.jsx)("input", {
                            ref: O,
                            type: "file",
                            multiple: !0,
                            onChange: ew,
                            className: uT.nY,
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
                                                      iconLeft: un.q,
                                                      leadingAccessory: { type: "icon", icon: un.q },
                                                      action: m,
                                                  })
                                                : null,
                                            null != f
                                                ? (0, a.jsx)(ed.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: ul.t,
                                                      leadingAccessory: { type: "icon", icon: ul.t },
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
                                    className: `${uT.Y0} ${uT.nu}`,
                                    disabled: !n,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(tx.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: uT.Qu,
                                    }),
                                });
                            },
                        }),
                        eG
                            ? (0, a.jsx)("div", {
                                  ref: ez,
                                  className: uT.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(uD, { text: eU, offering: eq && null == J, typed: null != J }),
                              })
                            : null,
                        (0, a.jsx)(r7.A, { id: eF, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(ip.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(ur.A, {
                                editor: y,
                                containerClassName: h()(uT.sq, nt.dv),
                                className: uT.jp,
                                readOnly: !n,
                                canFocus: n,
                                onChange: M,
                                onBlur: () => I(null),
                                onKeyDown: ey,
                                onPaste: ek,
                                renderExtraElement: uP,
                                "aria-labelledby": eF,
                                "aria-describedby": eG ? eO : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": em,
                                "aria-controls": em ? ep : void 0,
                                "aria-activedescendant": em ? ((0, uf.aI)(ef) ?? void 0) : void 0,
                            }),
                        }),
                        eG ? (0, a.jsx)(r7.A, { id: eO, children: eT }) : null,
                        (0, a.jsx)("div", {
                            className: uT.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${uT.Y0} ${uT.$E}`,
                                              disabled: $,
                                              onClick: ej,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(iA.w, {
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
                                            className: `${uT.Y0} ${uT.$E}`,
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
                                  className: uT.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: uT.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: uT.rt,
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
    uO = 1500;
function uF(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uq = n(709753),
    uU = n(540338),
    uG = n(986109);
let uB = i.createContext(null);
function uH(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(uB),
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
        className: h()(uG.xk, { [uG.g5]: d, [uG.Qo]: s, [uG.q3]: o }),
        children: n,
    });
}
let uK = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    uV = new Map();
function uW(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function uX(e, t) {
    return null != e && e > 0 && e < t;
}
let uJ = "ideas",
    uZ = "live_behind",
    uY = "conjureTipDismissals",
    uQ = new Set(),
    u0 = new Set(),
    u1 = 0;
function u2() {
    let e = B.w.get(uY);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function u3(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return uQ.has(((n = e.id), `${t}:${n}`));
        case "app":
            return u2().app[t]?.includes(e.id) === !0;
        case "forever":
            return u2().forever.includes(e.id);
    }
}
function u4(e) {
    return (u0.add(e), () => u0.delete(e));
}
let u5 = [12e4, 6e4];
var u6 = n(292771);
function u7(e) {
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
        let g = i.width / Math.max(1, h.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - h.left}px, ${i.top - h.top}px) scale(${g})`,
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
            className: u6.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(u6.qd, e.leaving ? u6.dv : u6.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var u8 = n(443865),
    u9 = n(247171);
function ce(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(u9.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(u9.gutter, u9[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: u9.content, children: i }),
        ],
    });
}
var ct = n(716502);
function cn(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(ce, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: ct.Nr,
        children: (0, a.jsxs)("section", {
            className: ct.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: ct.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(eH.K, {
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
function cl(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: ct.DD,
        children: t,
    });
}
function cr(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: ct.rf,
        children: t,
    });
}
function ca(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: ct.o1, children: t });
}
let ci = {
    ...uK,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(cn, {
            icon: u8.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(cl, { children: E.intl.string(S.default.OJlbhX) }),
                (0, a.jsx)(cr, { children: E.intl.string(S.default["3vJBni"]) }),
                (0, a.jsx)(ca, {
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
var cs = n(830205);
function co(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(ce, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: cs.aK,
        children: (0, a.jsxs)("div", {
            className: cs.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: cs.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: cs.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(eH.K, {
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
var cu = n(95635);
let cc = [
    {
        id: uZ,
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
                (null != t.publishCta && ok(n, t.publishCta)) ||
                uX(e.messagesSinceShown(uZ), 10)
                ? null
                : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { publish: n },
                dismiss: l,
            } = t;
            return null != n
                ? (0, a.jsx)(co, {
                      icon: cu.UploadIcon,
                      onDismiss: l,
                      children: E.intl.format(S.default.fWfeZ8, { onPublish: () => n.run("outdated_notice") }),
                  })
                : null;
        },
    },
    ci,
    {
        id: uJ,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(uK) ||
                0 === e.messagesSinceShown(uK.id) ||
                uX(e.messagesSinceShown(uJ), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(co, {
                icon: u8.LightbulbIcon,
                onDismiss: l,
                children: E.intl.format(S.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var cd = n(817921);
function cm(e) {
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
                g =
                    ((s = (0, e0.Ay)(t)),
                    (u = (0, o.bG)([aM.default], () => aM.default.getCurrentUser()?.id)),
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
                        u5,
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
                                        if ((0, r1.BL)(n)) return n;
                                        if (!(0, r1.B0)(e, t)) break;
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
                        publishedSinceLastMessage: null != p && 0 === uW(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = uV.get(`${t}:${e}`);
                            return null != l ? uW(n, l, u) : null;
                        },
                        isDismissed: (e) => u3(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(u4, () => u1);
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
                })(e, g, (e) => u3(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== g.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                uV.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                j.map((e) => ({
                    ...e,
                    options: {
                        context: g,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          if (!(null == e.dismissal || u3(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  uQ.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = u2();
                                                  B.w.set(
                                                      uY,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (u1++, u0.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(cc, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(uH, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: cd.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(u7, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var cf = n(52133),
    ch = n(732159),
    cp = n(888366),
    cg = n(862026),
    cx = n(291192);
function cv(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, cg.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: cx.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: cx.Sp,
                children: [
                    (0, a.jsx)("span", { className: cx.q3 }),
                    (0, a.jsxs)("span", {
                        className: cx.g8,
                        children: [
                            (0, a.jsx)(cp.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: cx.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cx.nM,
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
                                          (0, a.jsx)(aC.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, e7.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(ch.u, {
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
function cj(e) {
    return (0, o.bG)([eL.Ay, tn.A], () => {
        let t = eL.Ay.getProject(e);
        return null == t ? "" : (tn.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var cb = n(951465),
    cy = n(369455);
function ck(e) {
    let { projectId: t, notice: n } = e,
        l = cj(t),
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
            n.update && null != n.published_revision ? (0, a.jsx)(cw, { projectId: t, notice: n }) : null,
        ],
    });
}
function cw(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(e0.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [lY.A, eL.Ay],
                    () => {
                        let r = lY.A.getPublishStatus(e),
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
                                        className: cy.Z,
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
                                null != e && (0, cb.A)(e);
                            },
                        }),
              ],
          });
}
var cN = n(940874),
    cC = n(505527),
    cA = n(930390),
    cS = n(521981),
    cE = n(491182),
    cI = n(438729),
    cM = n(622868),
    c_ = n(448368),
    cR = n(837528),
    cP = n(470964),
    cT = n(715628),
    cL = n(752636),
    c$ = n(9842),
    cD = n(589022),
    cz = n(994500),
    cO = n(967198);
let cF = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function cq(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function cU(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function cG(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = cU(e, t),
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
    if (cq(r) && cq(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && cq(cU(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function cB(e, t) {
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
                      for (; a > 0 && cG(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && cF.has(e.charAt(l - 1));) l--;
                                    return cF.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && cG(t, o);) o++;
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
var cH = n(624479),
    cK = n(890377),
    cV = n(180227);
function cW(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(cV.QE, { [cV.Rn]: t }),
              children: (0, a.jsx)(sZ.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          sZ.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function cX(e) {
    return eX.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: cH.CopyIcon, onClick: () => (0, eX.C)(e) }]
        : [];
}
function cJ(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: cK.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: eo.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(cW, { groupStart: n, actions: [...r, ...cX(t)] });
}
function cZ(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: rh.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: nS.BugIcon, onClick: r }];
    return (0, a.jsx)(cW, { groupStart: n, actions: [...i, ...cX(t), ...s] });
}
let cY = (0, sk.createChannelRecord)({ id: "conjure-builder", type: D.rbe.DM }),
    cQ = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function c0(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(cV.Yq, { [cV.x1]: t }), children: e });
}
function c1(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let c2 = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function c3(e, t, n) {
    let { content: l } = (0, cP.A)(e, c2),
        r = i.useMemo(() => ((0, ip.aW)(e.content) ? (0, cS.z2)(o3.U, e, c2).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: cY, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(cI.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, cT.A)(s, r);
}
function c4(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, cR.m)(e, cY, t.usernameProfile, l),
        u = (0, cR.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([cO.A], () => cO.A.getGuildId()),
        d = (0, o.bG)([aM.default], () => aM.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = aM.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(cD.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function c5(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, ip.aW)(n.content)
                          ? (0, cS.z2)(o3.U, n, e).content
                          : (0, cS.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: cV.GV,
                              children: [
                                  (0, a.jsx)(nA.x, {
                                      className: cV.Rj,
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
            [cz.A],
            () => ({
                isReplyAuthorBlocked: cz.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: cz.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, sX.X4)(n),
        m = (0, sX.X4)(t),
        f = c4(n);
    return (0, a.jsx)(c_.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: cY,
        referencedMessage: { state: c$.a.LOADED, message: n },
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
function c6(e) {
    let { message: t, author: n } = e,
        l = c4(t);
    return (0, a.jsx)(cM.Ay, {
        message: t,
        channel: cY,
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
function c7(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, um.vm)(l),
        c = i.useMemo(() => (0, sX.FT)(u, null), [u]),
        d = i.useMemo(() => nF(t), [t]),
        m = d?.body ?? t,
        f = (0, uu.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, sy.Ay)({ channelId: cY.id, content: m, author: u });
            return (0, sb.rh)({ ...e, timestamp: c1(n, e.timestamp), state: D.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              c8,
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
function c8(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = c3(t, l);
    return (0, a.jsx)(cE.A, {
        className: cV.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(c6, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: cV.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: cV.GV,
                              children: [
                                  (0, a.jsx)(nA.x, {
                                      className: cV.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: cV.WO, children: u }),
                      ],
                  }),
        childrenAccessories: c0(i, "" !== l),
        childrenButtons: (0, a.jsx)(cJ, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function c9(e) {
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
        { text: m, revealing: f } = cB(t, { streaming: (0, o.bG)([tb.A], () => c && tb.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, sX.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, um.vm)(g),
        v = i.useMemo(() => (null == r ? null : nF(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, sy.Ay)({ channelId: cY.id, content: v?.body ?? r.content, author: x });
            return (0, sb.rh)({ ...e, id: r.id, timestamp: c1(r.createdAt, e.timestamp), state: D.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: cY.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, sy.Ay)({ channelId: cY.id, content: "", author: cQ })),
        k = i.useMemo(
            () =>
                (0, sb.rh)({
                    ...y,
                    timestamp: c1(n, y.timestamp),
                    state: D.cmJ.SENT,
                    ...(null != b ? { type: D.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        N = i.useMemo(
            () => (0, cL.A)({ message: k, channel: cY, author: p, guildId: void 0, isGroupStart: u }),
            [k, p, u],
        ),
        C = c3(w, m, cV.OS);
    return (0, a.jsxs)("div", {
        className: cV.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(cE.A, {
                className: cV.yE,
                author: p,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(c5, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: c0(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: cV.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(Z.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
var de = n(981879);
function dt(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, sb.rh)(
                    { ...(0, sy.Ay)({ channelId: cY.id, content: "" }), id: `conjure:${t}`, state: D.cmJ.SENT },
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
                    channelId: cY.id,
                    messageId: l.id,
                    users: [cQ],
                    emoji: e,
                    reactionType: cC.v.NORMAL,
                }),
                    tA.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: cY.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: cC.v.NORMAL,
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
            className: de.H,
            children: (0, a.jsx)(cA.A, {
                message: l,
                channel: cY,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var dn = n(616e3),
    dl = n(155899);
function dr(e) {
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
                          icon: rh.e,
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
function da(e) {
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
            onRestoreVersion: g,
        } = e,
        x = n.message,
        v =
            null != g
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
        j = null != v && null != g ? () => di(v, g) : void 0,
        b =
            ((t =
                lg() && "assistant" === x.role && (0, r1.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [dn.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : dn.A.getTimingTraces(l).findLast((e) => {
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
    return (0, a.jsx)(uH, {
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
                          void (0, eP.jA)(t, (e) => (0, a.jsx)(dr, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(c9, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(cZ, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(o8, {
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
                turnId: (0, r1.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: p,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != w && null != g && f
                        ? () =>
                              di(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  g,
                              )
                        : void 0,
            }),
        }),
    });
}
function di(e, t) {
    (0, dl.F)({ onConfirm: () => t(e) });
}
var ds = n(288539);
function du(e, t, n) {
    return (0, a.jsx)(ds.A, { userId: e, content: `@${t}` }, n);
}
function dc(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => (0, um.Y_)(l), [l]);
            let r = (0, o.bG)([aM.default], () => (null == l ? null : aM.default.getUser(l)), [l]),
                a = (0, sN.tx)(r),
                s = cj(e),
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
        })(n, l, du),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([e1.A], () => null != t && t.length > 0 && iu({ keys: t }, e1.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(im, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let dd = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    rq.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, ip.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(c7, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(o2.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(uo, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(dt, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, cN.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(c9, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(o2.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(o7, {
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
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(c9, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(ck, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(c9, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(dc, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(cv, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(o7, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(o7, {
                            projectId: l,
                            steps: dm,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(da, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, cf.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, cf.A)(e.row, t.row, ["message"]) &&
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
                (0, cf.A)(e.replyTo, t.replyTo) &&
                (0, cf.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    dm = [],
    df = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    dh = new WeakMap();
function dp(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function dg(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let dx = i.memo(function (e) {
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
            stickToBottomRef: g,
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
        P = (0, o.bG)([lY.A], () => lY.A.getPublishStatus(t)),
        T = (0, o.bG)([aM.default], () => aM.default.getCurrentUser()?.id),
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
                                        let t = (0, r0.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = dh.get(r);
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
                        let a = !(0, r1.BL)(e),
                            i = iS({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, r0.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, r0.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && df.test(n.prose.content)) m = !0;
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
                                        turnActive: r2(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = df.test(e.content ?? "");
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
                    (dh.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return oy(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = ow.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), ow.set(t, n)), n);
                      })),
                m,
            );
        }, [n, P, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, z] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return dp(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : dg(e, t.endKey, t.end - 1) + 1,
                a = dg(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), dp(e, a, r));
        })($, D, x),
        F = i.useRef(O),
        q = i.useRef($),
        U = i.useRef(L),
        G = i.useRef(null),
        B = i.useRef(null),
        H = i.useRef(new Set()),
        K = i.useCallback(() => {
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
                    return ((n = Math.min(e.length, t.end + 30)), dp(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), dp(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? dp(e, i, t.end) : null;
            })(q.current, F.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: g.current,
            });
            "older" === n ? (0, _.loadOlderHistory)(t) : null != n && z(n);
        }, [p, g, t]);
    i.useImperativeHandle(
        b,
        () => ({
            handleScroll() {
                (K(),
                    z((e) => {
                        let t = F.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    V());
            },
            recordAnchor: K,
            showLatest(e) {
                ((B.current = e ?? null), z(null));
            },
        }),
        [K, V],
    );
    let W = i.useRef(null),
        X = i.useCallback(
            (e) => {
                var n;
                let l;
                W.current = null;
                let r = k.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), z(F.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), R(e));
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
                            R(e));
                    }),
                    z(((n = q.current), dp(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [R, j, t],
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
                    null != l && l !== e && ((e = l), g.current ? p.current?.scrollToBottom() : K());
                });
            return (t.observe(w), () => t.disconnect());
        }, [w, K, p, g]));
    let J = null == O.endKey;
    (i.useEffect(() => y?.(J), [J, y]),
        i.useLayoutEffect(() => {
            ((F.current = O), (q.current = $), (U.current = L));
        }),
        i.useLayoutEffect(() => {
            let e = p.current?.getScrollerNode(),
                t = k.current;
            if (null != e && null != t) {
                let n = G.current;
                if (g.current) p.current?.scrollToBottom();
                else if (null != n) {
                    let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === n.key,
                        ),
                        r = null == l ? 0 : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let l = B.current;
                ((B.current = null), l?.(), K(), V());
            }
            H.current = new Set($);
        }, [L, $, O.start, O.end, p, g, K, V]));
    let Z = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, r1.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, r1.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([e1.A], () => e1.A.getSettings(t)?.secrets, [t]),
        er = (0, uq.WT)(t),
        ea = i.useMemo(() => (0, oQ.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(uG.x7, uG.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uG.Ub, children: (0, a.jsx)(tN.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uG.x7,
            children: (0, a.jsx)(uH, { role: "assistant", children: (0, a.jsx)(c9, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uB.Provider, {
        value: H,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: uG.x7,
            children: [
                L.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            dd,
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
                        dd,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? ee.get(n.in_reply_to) : void 0,
                            onJumpTo: X,
                            planVersion: Y.get(n.render_id),
                            pickedIdeaIds: Q.get(n.render_id),
                            secretRequestAwaiting: l ? en : void 0,
                            secretRequestStatus: ea.get(n.render_id),
                            settingsFloating: n.id === d,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === Z ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                J
                    ? er.map((e) =>
                          (0, a.jsx)(
                              uH,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(c9, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uU.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && J
                    ? (0, a.jsx)(uH, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(c9, {
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
                J ? (0, a.jsx)(cm, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var dv = n(731084),
    dj = n(823376),
    db = n(187447);
function dy(e) {
    let { activity: t, id: n } = e,
        l = (0, rQ.j)(),
        { text: r, revealing: s } = cB(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: db.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(rZ.Ch, {
                ref: o,
                className: db.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(o6.PT, db.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: sM.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var dk = n(53659);
function dw(e) {
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
        g = i.useId(),
        [x, j] = i.useState(null),
        b = (0, dv.xu)({
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
        k = b === dv.kx["0"],
        [w, N] = i.useState(m ?? y),
        A = (0, rQ.j)();
    (l || (0, dv.E4)(y, w) || (!A && !k)) && w !== y && N(y);
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
        ((R.current = k), !k && (0, dv.E8)(_.current) && N(I.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                R.current
                    ? ((P.current = (0, dv.E8)(_.current) ? P.current + 1 : 0), N((0, dv.Ov)(P.current)))
                    : I.current !== _.current
                      ? N(I.current)
                      : M.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, dv.FZ)),
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
        targetElementRef: p,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: z,
        renderPopout: () => (0, a.jsx)(dy, { id: g, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: p,
                className: h()(dk.hF, T && dk.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : k
                            ? dv.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? g : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: dk.bl,
                        children: (0, a.jsx)(dj.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: dk.xu,
                        "aria-hidden": !!u || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(o9.o, {
                                  ref: M,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: dv.vg,
                                  delay: null,
                                  className: dk.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: dk.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let dN = { second: 1e3, minute: 6e4 };
function dC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = dN[t];
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
var dA = n(719374);
function dS(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = dC(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: dA.$,
        "data-conjure-turn-timer": !0,
        children: (0, iL.C7)(l),
    });
}
function dE(e) {
    let { startedAt: t } = e,
        n = dC(t, "minute");
    return (0, a.jsx)(r7.A, { role: "timer", children: (0, iL.Us)(n) });
}
var dI = n(885574),
    dM = n(242779),
    d_ = n(436804);
function dR(e) {
    return e.toLocaleString();
}
function dP(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: d_.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: d_.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [dR((0, dM.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    dR(n.input_tokens),
                    " in \xb7 ",
                    dR(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${dR(n.cache_creation_input_tokens)} cache write \xb7 ${dR(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function dT(e) {
    let { project: t } = e,
        n = (0, dM.wU)(t.compaction),
        l = (0, dM.wU)(t.classifier),
        r = (0, dM.wV)(t.orchestrator, t.codegen),
        i = (0, dM.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: d_.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: d_.Q$,
                children: (0, a.jsxs)("div", {
                    className: d_.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [dR((0, dM.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(dP, { label: E.intl.string(S.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(dP, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(dP, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: d_.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, dM.sj)(i) ? "\u2014" : `${Math.round(100 * (0, dM.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function dL(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(dT, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: d_.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(dI.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var d$ = n(997421);
function dD(e) {
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
        p = (0, lx.Zv)(t),
        g = (0, o.bG)([lY.A], () => lY.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, dv.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, dv.uc)(f),
        k = null != s,
        w = s ?? (n ? l : void 0),
        N = n || r || k || !0 === m;
    return (0, a.jsxs)("div", {
        className: d$.jf,
        children: [
            (0, a.jsxs)("div", {
                className: d$.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || p || g
                        ? (0, a.jsx)(dw, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: k,
                              recalling: u,
                              controlling: p,
                              publishPending: g && N,
                              publishing: g,
                              spoken: x,
                              onSpokenChange: b,
                          })
                        : null,
                    null != w ? (0, a.jsx)(dS, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(dE, { startedAt: w }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: d$.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(dL, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, dv.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: d$.XF,
                      children: (0, dv.Db)(h),
                  }),
        ],
    });
}
let dz = ["wheel", "touchstart", "pointerdown", "keydown"];
var dO = n(608711);
let dF = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function dq(e) {
    let t,
        n,
        { projectId: l, restoreState: r, onRestoreVersion: s, onImportProject: u } = e,
        c = (0, o.bG)([ld.A], () => ld.A.getMessages(l), [l]),
        m = (0, o.bG)([_.default], () => _.default.getConnState(l), [l]),
        f = (0, o.bG)([ld.A], () => ld.A.getProjectUsage(l), [l]),
        h = (0, o.bG)([ld.A], () => ld.A.getThinkingActivity(l), [l]),
        p = (0, o.bG)([ld.A], () => ld.A.isCompacting(l), [l]),
        g = (0, o.bG)([ld.A], () => ld.A.isSaving(l), [l]),
        x = (0, o.bG)([ia.A], () => ia.A.getModelSettings(l), [l]),
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
                    for (let e of dz) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of dz) t.removeEventListener(e, u);
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
        (0, ig.E1)(l, (0, rQ.j)()));
    let z = nY(l),
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
            ((t = (0, o.bG)([is.A], () => is.A.getFailure(l))),
            (n = i.useCallback(() => (0, io.CM)(l), [l])),
            null == t
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: t }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: n },
                  }),
        q = (0, o.bG)([is.A], () => is.A.getSetupStartedAt(l), [l]),
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
                      nW(l));
            },
            [z, U, l],
        ),
        B = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of rF)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, _.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = rF.get(e);
                            (rF.delete(e), rU(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(l) ||
                ld.A.isThinking(l)) &&
                (0, _.interruptTurn)(l);
        }, [l]),
        H = i.useCallback((e) => tq(l, e.implementation_prompt), [l]),
        [K, W] = (function (e) {
            let [t, n] = i.useState(() => iC(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? iC(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(l),
        X = i.useCallback(() => U(E.intl.string(S.default["t5CN3+"])), [U]),
        J = i.useCallback((e, t, n) => tq(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        Z = i.useCallback((e) => (0, ii.X)(l, e), [l]),
        Y = i.useCallback((e) => (0, eh.vX)(l, e), [l]),
        Q = i.useCallback((e) => tK(l, "chat", Array.from(e), Y), [l, Y]),
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
        eg = er?.appBuildRequest != null && (0, r1.BL)(er) && er.appBuildRequest.id !== em ? er.appBuildRequest : null,
        ex = ep.request ?? (null == ec ? eg : null),
        ev = null == ep.request ? ec : null,
        ej = null != ex && ex === ep.request,
        { close: eb, sent: ey } = ep,
        ek = ep.request?.id,
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
            (0, r1.BL)(er) &&
            er.id !== eA &&
            iu(er.settingsRequest, eC)
                ? er
                : null,
        eI = null == ep.request ? eE : null,
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
            return dF[e % dF.length];
        }, [l]),
        eF = ea ? E.intl.string(S.default.Zc7gML) : "greeting" === eD && 0 === c.length ? eO : null,
        eq = i.useMemo(() => {
            for (let e = c.length - 1; e >= 0; e--) {
                let t = c[e];
                if ("assistant" === t.role && !(0, r1.BL)(t)) return t;
            }
        }, [c]),
        eU = null != eq,
        eG =
            null != eq
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = ih.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eq)
                : void 0,
        eB = ea && el ? ee : void 0,
        eK = i.useCallback(() => tq(l, E.intl.string(S.default.EMgIuY)), [l]),
        [eV, eW] = i.useState(null),
        [eX, eJ] = i.useState(eU);
    (eX !== eU && (eJ(eU), eU || eW(null)),
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
        }, [eU, eq?.steps, R]));
    let eZ = R ? eV : "bottom",
        eY = i.useMemo(() => (null != eq ? (0, r3.b9)(eq.steps) : ""), [eq]),
        eQ = i.useMemo(() => (null != eq ? ((0, r0.lt)(eq.steps) ?? eq.todos) : void 0), [eq]),
        e2 = eq?.provisionalTodo,
        e3 = null != eq && r2(eq),
        e4 = i.useMemo(() => {
            var e;
            return null != eq ? ((e = eq.steps), iF((0, r0.Jf)(e, !0).tasks)) : void 0;
        }, [eq]);
    return (0, a.jsxs)("section", {
        ref: b,
        "data-conjure-chat": !0,
        className: dO.TE,
        children: [
            el
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: nb.ir,
                      onDrop: Q,
                  })
                : null,
            (0, a.jsx)(am, {
                onJumpToActivity: $,
                line: eY,
                placement: eU && "top" === eZ ? "top" : null,
                todos: eQ,
                todosLive: e3,
                provisionalTodo: e2,
                agents: e4,
            }),
            (0, a.jsxs)("div", {
                className: dO.JX,
                children: [
                    (0, a.jsx)(rZ.Ch, {
                        ref: y,
                        onScroll: D,
                        scrollbarGutter: ez ? "both-edges" : "stable",
                        className: [dO.N$, A ? null : dO.hB, eR ? dO.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(ip.Fu.Provider, {
                            value: l,
                            children: (0, a.jsx)(dx, {
                                projectId: l,
                                messages: c,
                                emptyState: eD,
                                floatingSettingsMessageId: eE?.id,
                                liveClarificationId: ev?.id,
                                onPickIdea: el ? H : void 0,
                                onAskForIdeas: el ? X : void 0,
                                draftHasText: K,
                                onApprovePlan: el ? eK : void 0,
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
                        className: dO.NJ,
                        children: (0, a.jsx)(dD, {
                            projectId: l,
                            thinking: eU,
                            turnStartedAt: eG,
                            restoring: et,
                            remixStartedAt: q,
                            recalling: ez,
                            thinkingActivity: h,
                            compacting: p,
                            saving: g,
                            projectUsage: f,
                            connState: m,
                        }),
                    }),
                    null == ev
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eT,
                              className: eR ? `${dO.B5} ${dO.J9}` : dO.B5,
                              children: (0, a.jsx)(
                                  ir,
                                  { projectId: l, clarification: ev, onSubmit: el ? J : void 0, onDismiss: ed },
                                  ev.id,
                              ),
                          }),
                    null == ex
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eT,
                              className: dO.B5,
                              children: (0, a.jsx)(
                                  ak,
                                  { projectId: l, request: ex, canSend: el, onDismiss: ew, onSent: ej ? eN : void 0 },
                                  ex.id,
                              ),
                          }),
                    null == eM
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == ev && null == ex ? eT : void 0,
                              className: dO.B5,
                              children: (0, a.jsx)(im, { projectId: l, request: eM, onDismiss: e_ }, eI?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: dO.Jx,
                children: [
                    (0, a.jsx)(am, {
                        onJumpToActivity: $,
                        line: eY,
                        placement: eU && "bottom" === eZ ? "bottom" : null,
                        todos: eQ,
                        todosLive: e3,
                        provisionalTodo: e2,
                        agents: e4,
                    }),
                    0 === z.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dO.g0,
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
                              className: dO.qB,
                              children: (0, a.jsx)(rY.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: F.message,
                                  action: F.retry,
                              }),
                          }),
                    null == O
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dO.Db,
                              children: [
                                  (0, a.jsx)(rY.w, { type: "warning", role: "status", message: O.message }),
                                  (0, a.jsx)("div", {
                                      className: dO.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(eH.K, {
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
                    (0, a.jsx)(uz, {
                        projectId: l,
                        canSend: el,
                        running: eU,
                        restoring: et,
                        onSend: G,
                        hasPendingContext: z.annotations.length > 0,
                        onInterrupt: el ? B : void 0,
                        onUploadFile: Y,
                        onImport: u,
                        onSendToOtherProjects: e$ ? void 0 : ep.open,
                        onApprove: eB,
                        suggestion: eF,
                        questionOpen: e$,
                        modelSettings: x,
                        onModelSettingsChange: Z,
                        onDraftHasTextChange: W,
                    }),
                ],
            }),
        ],
    });
}
var dU = n(761508),
    dG = n(933294),
    dB = n(207438),
    dH = n(683438);
function dK(e, t) {
    return String(e).padStart(t, "0");
}
function dV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${dK(l.getHours(), 2)}:${dK(l.getMinutes(), 2)}:${dK(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${dK(l.getMilliseconds(), 3)}` : r;
}
var dW = n(667931);
let dX = {
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
    dJ = { running: "Running", ok: "Done", error: "Failed" };
function dZ(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function dY(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function dQ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function d0(e) {
    return dY(e.count > 1 ? e.totalMs : e.end - e.start);
}
let d1 = ["Arguments", "Result", "Usage", "Details"];
function d2(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function d3(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function d4(e) {
    let t = (0, dW.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, dW.lp)(e) ? "interrupted" : "still running";
}
function d5(e) {
    return [dV(new Date(e.started_at).toISOString()) ?? "", dQ(e.spans.length), (0, dW.Sj)((0, dW.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function d6(e) {
    let t = (0, dW.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, dW.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += d7(r, "in")),
                (l.output += d7(r, "out")),
                (l.cacheRead += d7(r, "cache_read")),
                (l.cacheWrite += d7(r, "cache_write")),
                (l.costUsd += d7(r, "cost_usd"))));
    }
    let r = dW.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function d7(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var d8 = n(738188),
    d9 = n(430993),
    me = n(364840),
    mt = n(224640),
    mn = n(20742);
let ml = { collapsed: new Set(), revealed: new Set() };
var mr = n(872892);
let ma = {
    op: mr.Q,
    model: mr.i3,
    tool: mr.dH,
    setup: mr.kc,
    worktree: mr.Qx,
    sandbox: mr.QH,
    build: mr.F1,
    platform: mr.Op,
    other: mr.fv,
};
function mi(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      dQ(t.calls, "model call"),
                      `${dZ(t.input)} in`,
                      `${dZ(t.output)} out`,
                      `${dZ(t.cacheRead)} cache read`,
                      `${dZ(t.cacheWrite)} cache write`,
                      d3(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: mr.M1,
        children: [
            (0, a.jsx)("div", {
                className: mr.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${mr.DJ} ${ma[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: mr.o1,
                children: dW.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${dY(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: mr.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${mr.nf} ${ma[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: dX[e] }),
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
function ms(e) {
    return `conjure-perf-trace-${e}`;
}
function mo(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: mr.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${mr.p0} ${s + o > 85 ? mr.EU : mr.jh}`,
                children: i,
            }),
        ],
    });
}
function mu(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? tJ._ : t7.a,
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
        id: ms(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${mr.$y} ${r ? mr.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: mr.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: mr.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: mr.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: mr.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${mr.nf} ${ma[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: mr.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: mr.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: mr.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(d8.WarningIcon, { size: "xs", color: "currentColor", className: mr.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(mo, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${mr.M0} ${mr.Nh}`
                    : t.running
                      ? `${mr.M0} ${mr.rF}`
                      : `${mr.M0} ${ma[t.category]}`,
                duration: d0(t),
            }),
        ],
    });
}
function mc(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: ms(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${mr.$y} ${l ? mr.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: mr.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: mr.ai,
                        children: (0, a.jsx)(tJ._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: mr.U9 }),
                    (0, a.jsx)("span", { className: `${mr.nf} ${mr.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: mr.MQ,
                        children: dQ(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(mo, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${mr.M0} ${mr.ab} ${mr.dL}`,
                duration: dY(t.totalMs),
            }),
        ],
    });
}
function md(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: mr._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: mr.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${mr.nf} ${ma[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [d2("Start", `+${dY(e.start)}`), d2("Duration", d0(e))];
                      e.count > 1
                          ? t.push(
                                d2("Calls", String(e.count)),
                                d2("Longest call", dY(e.maxMs)),
                                d2("Spread over", dY(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(d2("Self time", dY(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(d2("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(d2("Notes", l.join(", "))),
                          null != e.span.error && t.push(d2("Error", e.span.error)));
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
                              s = "cost_usd" === t ? d3(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), d2(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...d1.flatMap((e) => {
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
                                            className: mr.xd,
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
                                                            className: mr.vl,
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
function mm(e) {
    let { trace: t } = e,
        n = i.useMemo(() => d6(t), [t]);
    return (0, a.jsx)(mi, { stats: n });
}
function mf(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, dW.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? ml : (0, dW.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, dW.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, dW.x7)(t)), l((n) => (0, dW._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, dW.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dW.IE)(t, e);
                        null != n && l((e) => (0, dW.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dW.IE)(t, e);
                        null != n && l((e) => (0, dW.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, dW.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, dW.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, dW.hB)(t));
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
        f = (0, dW.dj)(t),
        h = i.useMemo(() => (0, dW.nF)(f), [f]),
        p = h.length > 1 ? ((h[1] - h[0]) / f) * 100 : 100,
        g = i.useCallback(
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
                    null != t && (u(t.key), document.getElementById(ms(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(d9.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: mr.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: d4(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: d5(t),
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
                                      children: `${dQ(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(mm, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: mr.KE,
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
                        "aria-activedescendant": null == o ? void 0 : ms(o),
                        className: mr.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: g,
                        children: [
                            (0, a.jsxs)("div", {
                                className: mr.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: mr.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: mr.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${mr.io} ${(e / f) * 100 > 85 ? mr.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : dY(e),
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
                                          mu,
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
                                    : (0, a.jsx)(mc, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(me.j, { children: (0, a.jsx)(md, { node: s }) }),
        ],
    });
}
function mh(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([dn.A], () => dn.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(mt.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(mn.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(d9.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(mf, { trace: i }),
        ],
    });
}
let mp = { running: mr.Vf, ok: mr.mo, error: mr.Sr };
function mg(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${mr.Om} ${mp[t]}`, role: "img", "aria-label": dJ[t] });
}
function mx(e, t) {
    (0, e7.openModal)((n) => (0, a.jsx)(mh, { ...n, projectId: e, traceId: t }));
}
function mv(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => mx(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: mr.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: mr.sU,
                children: [
                    (0, a.jsx)(mg, { status: (0, dW.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: mr._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: d4(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: d5(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function mj(e) {
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
            return (0, a.jsx)(eH.K, {
                ...e,
                buttonRef: l,
                icon: eK.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function mb(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([dn.A], () => dn.A.getTimingTraces(t), [t]),
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
                    let t = e.map(d6);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: dW.BF.map((e) => ({
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
              className: mr.Ie,
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
              className: mr.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: mr.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: mr.fH,
                              children: (0, a.jsx)(dH.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(mj, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(rZ.Ch, {
                      className: mr.XG,
                      children: [
                          (0, a.jsx)(mi, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: mr.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(mv, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function my(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function mk(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function mw(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function mN(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function mC(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function mA(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let mS = ["all", "preview", "stable", "web"];
function mE(e) {
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
function mI(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: my(e.memory_p50_bytes ?? 0),
              p999: my(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let mM = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var m_ = n(911608),
    mR = n(177427);
function mP(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mR.KE,
        children: [
            (0, a.jsx)("div", {
                className: mR.IQ,
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
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: mN(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(V.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function mT(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: mR.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: mR.Gf, children: t }),
            n,
        ],
    });
}
function mL(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: mR.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mR.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: mR.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: mR.kS,
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
function m$(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: mR.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mR.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(m_.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? mR.dh : void 0,
            }),
        ],
    });
}
function mD(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(mL, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: mE(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(mL, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = mI(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(mL, { label: E.intl.string(S.default["H/X+FI"]), value: mk(n.cpu_ms) }),
            null != l && (0, a.jsx)(mL, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function mz(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(mT, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: mE(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? mM[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(mT, {
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
                          mL,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: mk(t.cpu_ms) }),
                              hint: mI(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var mO = n(678708),
    mF = n(414499),
    mq = n(714800),
    mU = n(81466),
    mG = n(424383),
    mB = n(816943),
    mH = n(268791),
    mK = n(514042),
    mV = n(872351),
    mW = n(708988),
    mX = n(150934),
    mJ = n(417270);
let mZ = "Restart Agent",
    mY = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function mQ(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function m0(e, t) {
    return { label: e, value: null != t && "" !== t ? mN(t) : "Unknown", icon: "calendar" };
}
function m1(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function m2(e, t, n, l) {
    let [r, a] = mY[n.status];
    return { label: e, value: `${m1(n.bytes)} of ${m1(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function m3(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = mN(e.at);
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
let m4 = { main: "Main vs Remote", wip: "WIP vs Remote" };
function m5(e) {
    let t = `container ${mQ(e.local)} \xb7 remote ${mQ(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: m4[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${mw(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${mw(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${mw(n)} Ahead, ${mw(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let m6 = ["main", "wip"];
var m7 = n(400154);
let m8 = {
        checkout: mO.FolderIcon,
        edit: aN.PencilIcon,
        remote: mF.h,
        commits: mq.e,
        calendar: mU.CalendarIcon,
        save: mG.L,
        objects: eS.R,
        download: mB.$,
        size: mH.$,
        file: mK.FileIcon,
    },
    m9 = {
        ok: [ni.y, w.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [d8.WarningIcon, w.A.colors.ICON_FEEDBACK_WARNING],
        error: [tC.a, w.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [mV.z, w.A.colors.ICON_MUTED],
        behind: [mW.M, w.A.colors.ICON_MUTED],
    };
function fe(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([dn.A], () => dn.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, dB.DK)(t), [t]),
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
                    `Updated ${mN(r)}`,
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
    return (0, a.jsxs)(mT, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: m7.Lj,
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
                    if (!e.running || null != e.localError) return [m3(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            m3(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : mw(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = m6.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(m5))
                        : l.push(
                              { label: "Main", value: mQ(e.heads.main), icon: "remote" },
                              { label: "WIP", value: mQ(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? mw(e.commits) : "Unknown", icon: "commits" },
                            m0("Oldest Commit", e.oldest),
                            m0("Newest Commit", e.newest),
                            m3(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${mw(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${mw(t.loose)} loose (${my(t.looseBytes)}) \xb7 ${mw(t.packed)} packed in ${n} (${my(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${mw(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${mw(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                m2(
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
                                  m2("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = m8[r],
                        [o, u] = null != i ? m9[i] : [null, void 0];
                    return (0, a.jsx)(
                        mL,
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
function ft(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([dn.A], () => dn.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, dB.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = dn.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, dB.gX)(e);
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
            let u = i.useCallback(() => (0, dB.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: mZ,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eT.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: m7.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: m7.nM,
                children: [
                    (0, a.jsx)(mX.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(V.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: mJ.RetryIcon,
                        text: mZ,
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
                            return `Restarted \xb7 new instance since ${mN(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${mN(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fn(e, t) {
    return (0, a.jsx)(mL, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: mw((0, dM.aM)(t)) }),
        hint: `${mw(t.input_tokens)} in \xb7 ${mw(t.output_tokens)} out \xb7 ${mw(t.cache_read_input_tokens)} cache read`,
    });
}
function fl(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([dn.A], () => dn.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([dn.A], () => dn.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([dn.A], () => dn.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([dn.A], () => dn.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, dB.Lj)(t), [t]),
        f = i.useCallback(() => (0, dB.Lj)(t, !0), [t]),
        h = (0, o.bG)([dn.A], () => dn.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([ld.A], () => ld.A.isThinking(t), [t]),
        g = i.useCallback(() => (0, dB.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: m7.Mf,
        children: [
            (0, a.jsx)(mP, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(mT, {
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
                                  (0, a.jsx)(mL, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: mw((0, dM.a7)(x.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: mw(x.turns) }),
                                  }),
                                  fn(E.intl.string(S.default.xtxP0e), x.orchestrator),
                                  fn(E.intl.string(S.default["9Sj3SX"]), x.codegen),
                                  fn(E.intl.string(S.default.ANCEo3), (0, dM.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(mL, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${mw(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(mT, {
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
                                  fn(E.intl.string(S.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(mL, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, dM.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(mT, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != u && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(m$, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: mw,
                                  }),
                                  (0, a.jsx)(mL, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${mw(u.tokensBefore)} \u{2192} ${mw(u.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: mw(u.retainedMessages),
                                          time: mN(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: mw(y) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(mL, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${mw(c.projected)} / ${mw(c.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: mN(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: m7.Lj,
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
                                    let t = mN(e.observedAt);
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
                        className: m7.Lj,
                        children: [
                            (0, a.jsx)(V.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || p,
                                onClick: g,
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
                                    let t = mN(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(ft, { projectId: t }),
                ],
            }),
            (0, a.jsx)(fe, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(mT, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(mL, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: mN(b.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(mL, { label: E.intl.string(S.default["8V8e1Z"]), value: mw(b.sockets) }),
                                    (0, a.jsx)(mL, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(mL, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: mw(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(mD, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(mT, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(mL, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: mw(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(mL, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: mw(j.context_window_tokens) }),
                        }),
                        (0, a.jsx)(mL, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: mw(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(mL, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: mw(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(mL, { label: E.intl.string(S.default.kIHga0), value: mw(j.max_build_attempts) }),
                        (0, a.jsx)(mL, { label: E.intl.string(S.default.Iw03yW), value: mw(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fr = n(237528),
    fa = n(629584),
    fi = n(531893);
function fs(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fi.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function fo(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fi.qf,
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
              className: fi.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fu(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fi.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var fc = n(109079);
let fd = i.memo(function (e) {
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
        className: fc.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fc.Mt,
                selectable: !0,
                children: dV(n.ts) ?? n.ts,
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
                className: fc.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fc.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fc.Cq, children: (0, a.jsx)(fr.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fc.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fr.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
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
                                      className: fc.Pq,
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
                                              : (0, a.jsx)(tJ._, {
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
                                          className: fc.dF,
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
function fm(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([dG.A], () => dG.A.getLogs(t), [t]),
        l = (0, o.bG)([dG.A], () => dG.A.getHistoryState(t, "logs")),
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
                mS.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return mA(e);
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
        className: fc.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fc.y4,
                children: [
                    (0, a.jsx)(fa.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fc.KT,
                        children: (0, a.jsx)(dH.I, {
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
            n.length > 0 && (0, a.jsx)(fs, { state: l }),
            (0, a.jsxs)(rZ.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: fc.sx,
                children: [
                    (0, a.jsx)(fu, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fo, {
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
                          : d.map((e) => (0, a.jsx)(fd, { entry: e.log, showSource: "all" === r }, e.key)),
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
        (0, a.jsx)(mT, {
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
function fh(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(mL, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: mA(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(mL, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: mw(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${mN(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(mL, { label: E.intl.string(S.default.Iz5GnJ), value: mw(l.guild_count) }),
                  (0, a.jsx)(mL, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: mw(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: mN(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(mL, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: mw(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(mL, { label: mA(n), value: E.intl.string(S.default.lTHQss) });
}
function fp(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(mL, {
        label: mA(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: mw(n.requests),
            failures: mw(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: mN(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: mN(n.since) }),
    });
}
function fg(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(mL, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: mA(t) }),
                value: mw(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    mL,
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
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: mN(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fx(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(mL, {
        label: mA(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: mw(n.calls), errors: mw(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fv(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(mT, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(mT, {
        title: t,
        children: [
            (0, a.jsx)(mL, {
                label: E.intl.string(S.default.xtD4Zp),
                value: mw(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: mN(n.since) }),
            }),
            (0, a.jsx)(mL, { label: E.intl.string(S.default.gfRhR3), value: mw(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(m$, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: mk,
                          }),
                          (0, a.jsx)(mL, {
                              label: E.intl.string(S.default.mSKImM),
                              value: mk(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: mk(n.cpu_ms_total),
                                  wall: mk(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(mL, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(mL, { label: E.intl.string(S.default.xvmL1D), value: mk(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(mL, { label: E.intl.string(S.default["4sQYwH"]), value: mw(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(mL, {
                label: E.intl.string(S.default.bQenOy),
                value: mw(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(mL, { label: E.intl.string(S.default.xgpn4Y), value: mC(n.build) }),
        ],
    });
}
function fj(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(mT, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(mL, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(mL, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: my(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: mw(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(m$, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: my,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fb(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: m7.Mf,
        children: [
            (0, a.jsx)(mP, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fv, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fv, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fj, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(ff, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fh, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(ff, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fp, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(ff, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fg, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(ff, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fx, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(mz, { analytics: t.analytics }),
                        (0, a.jsxs)(mT, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(mL, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? mC(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(mL, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? mC(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fy = n(592465);
function fk(e) {
    let { projectId: t, onClose: n } = e,
        l = lg(),
        [r, s] = i.useState(() => (l && lf?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([dn.A], () => dn.A.getStatus(t), [t]),
        c = (0, o.bG)([dn.A], () => dn.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, dB.R7)(t), (0, dB.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, _.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == lf || lf.projectId !== e) return null;
            let { traceId: t } = lf;
            return ((lf = null), t);
        })(t);
        return null != e && (mx(t, e), !0);
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
                        status: dn.A.getStatus(t),
                        last_turn_usage: dn.A.getLastTurnUsage(t),
                        last_compaction: dn.A.getLastCompaction(t),
                        last_compaction_decline: dn.A.getLastCompactionDecline(t),
                        timing_traces: dn.A.getTimingTraces(t),
                        logs: dG.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, es.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: fy.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(rn.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(rn.Ay.Icon, {
                            icon: cH.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(rn.Ay.Icon, { icon: eo.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(rn.Ay.ChannelIcon, { icon: nS.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(rn.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: fy.rf,
                children: [
                    (0, a.jsxs)(dU.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: fy.vR,
                        children: [
                            (0, a.jsx)(dU.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(dU.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(dU.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(dU.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(fm, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fb, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(mb, { projectId: t })
                            : (0, a.jsx)(fl, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fw = n(365912),
    fN = n(873715);
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
let fA = Object.freeze({ x: -1, y: -1 });
function fS(e) {
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
var fE = n(192888);
function fI(e, t) {
    return (0, fE.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fS, () => ({ status: "failed" }));
}
var fM = n(108308);
let f_ = { x: 25, y: 21 };
function fR(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fP(e, t, n, l) {
    let r = fR(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fT(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fL(e) {
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
function f$(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nY(u),
        m = (0, lx.Zv)(u),
        f = (0, e7.useHasAnyModalOpen)(),
        h = (0, o.bG)([aM.default], () => aM.default.getCurrentUser()),
        p = h?.id ?? null,
        [g, x] = i.useState(null),
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
        [B, H] = i.useState(null),
        K = c && !m && !f;
    null == D || (K && D.projectId === u) || z(null);
    let W = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != W) return () => tO(W, "design");
    }, [W]);
    let X = rc(r, K);
    i.useEffect(() => {
        if (!K || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void k(!0);
        (b(!0), k(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fN.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? fL(t.response) : null;
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
    }, [K, r, u]);
    let J = i.useRef(null);
    (i.useEffect(() => {
        if (!K || null == X || null == u) return;
        if (null == g) {
            J.current = X;
            return;
        }
        if (ru(J.current, X)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            J.current = X;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fN.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ee.current) return;
                        let l = fL(e.response);
                        null != l && (x(l), nX(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fC(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = nB(u)).active &&
                                0 !== r.size &&
                                nH(u, {
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
    }, [K, X, g, d, u, r]),
        i.useEffect(() => {
            if (!K)
                return () => {
                    (N(null), z(null), H(null), x(null));
                };
        }, [K]));
    let Z = i.useRef(null),
        Y = i.useRef(null),
        Q = i.useRef(!1),
        ee = i.useRef(!1);
    i.useEffect(() => {
        ((ee.current = K), K || ((Z.current = null), (Y.current = null), (R.current = null), A(!1)));
    }, [K]);
    let et = i.useCallback(
            function e() {
                if (Q.current) return;
                let t = Z.current;
                if (null == t) return;
                Z.current = null;
                let n = r();
                null != n &&
                    ((Q.current = !0),
                    fI(n, t).then((t) => {
                        if (((Q.current = !1), ee.current)) {
                            if ("picked" !== t.status || fU(t.target, es.current.rect, es.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = nL(t.target);
                                (T((t) => (fq(t, e) ? t : e)),
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
            let e = setTimeout(() => F(null), fO);
            return () => clearTimeout(e);
        }, [O]));
    let er = null == g || null == X || g.viewport.width < 1 ? 1 : X.width / g.viewport.width,
        ea = null != g || y,
        ei = i.useMemo(() => g?.elements ?? [], [g]),
        es = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        es.current = { rect: X, scale: er };
    }, [X, er]);
    let eo = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (tO(u, "design"),
                    H(null),
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
                    (Math.abs(e.clientX - D.at.x) > fF || Math.abs(e.clientY - D.at.y) > fF) && (q.current = !0);
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
                        n = null != e && fU(e, X, er) ? null : e;
                    if (null != n) {
                        let e = nL(n);
                        T((t) => (fq(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Y.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Y.current = n), (Z.current = n), et());
            },
            [X, er, ea, eu, L, ei, D, B, ec, et],
        ),
        em = null == B ? null : d.find((e) => e.id === B.id),
        ef = K && (C || D?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (ef)
            return () => {
                let e = r();
                null != e && fI(e, fA);
            };
    }, [ef, r]);
    let ep = i.useCallback(() => {
        (A(!1), N(null), (Y.current = null), (Z.current = null));
    }, []);
    i.useEffect(() => {
        if (!K || !C || !ea || L || null != D || null != B) return;
        let e = R.current,
            { rect: t, scale: n } = es.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Y.current = l), (Z.current = l), et());
    }, [K, C, ea, L, D, B, et]);
    let eg = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (el(), H(null));
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
            null != u && (N(null), null != ll(u) ? la(u) : nW(u));
        }, [u]),
        ev = i.useCallback(() => {
            null != u &&
                (null != D
                    ? el()
                    : B?.confirmingRemove === !0
                      ? H({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? H(null)
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
        if (K)
            return (
                rr.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rr.A.enable());
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
                        return ((0, fw.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eb.current || null == ll(eb.current)) && ey.current());
        }
    }, [K, s]);
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
            if (null != u && null != B && null != p && nT(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = nB(u)).annotations.find((t) => t.id === e)) &&
                        nJ(l, p) &&
                        nH(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    H({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eS = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = nB(u)).annotations.find((t) => t.id === e)) &&
                        nJ(n, p) &&
                        nH(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    H(null));
            }
        }, [u, B, p]),
        eE = c
            ? j
                ? E.intl.string(S.default["Eb/YV9"])
                : y
                  ? E.intl.string(S.default.FD30bh)
                  : E.intl.formatToPlainString(S.default.dTSqLF, { count: d.length })
            : "",
        eI = K && null != X,
        eM = C && null == B,
        e_ = D?.target ?? em?.target ?? null,
        eR = D ?? O,
        eP = D ?? (O?.instant === !0 ? null : O),
        eT =
            null != em && null != X
                ? (function (e, t) {
                      let { left: n, top: l } = fT(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fP(em.target, em.anchor, X, er), X)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = em;
            fI(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [em, r]),
        (0, rl.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: fM.Li,
                children: [
                    (0, a.jsx)(r7.A, {
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
                                      className: fM.MT,
                                      style: { left: X.left, top: X.top, width: X.width, height: X.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": E.intl.string(S.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ed,
                                      onMouseLeave: ep,
                                      onClick: eg,
                                      onKeyDown: ew,
                                  }),
                                  null != w && null == w.marker && null == D && null == B
                                      ? (0, a.jsx)(fG, { box: fR(w, X, er) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: fM.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fM.xz,
                                          "data-shown": null != w && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: fM.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fM.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fM.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: fM.Y,
                                      children: eM ? (0, a.jsx)("div", { className: fM.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fM.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fM.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: fM.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fM.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fM.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: fM.D0, style: fR(e_, X, er), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fP(e.target, e.anchor, X, er),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fM.xL,
                                              style: { ...fT(n, X), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: n$(e.target),
                                              }),
                                              "aria-expanded": B?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == D && H(l);
                                              },
                                              onFocus: () => {
                                                  null == D && H(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), el(), H(l));
                                              },
                                              children: (0, a.jsx)(fD, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eR || null == u
                                      ? null
                                      : (0, a.jsx)(rs, {
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
                                      ? (0, a.jsxs)(fz, {
                                            point: eT,
                                            frame: X,
                                            authorId: em.authorId,
                                            title: n$(em.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? H({ ...B, confirmingRemove: !1 }) : H(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || H(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(aj.f, {
                                                          autoFocus: !0,
                                                          label: E.intl.string(S.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: B.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => H({ ...B, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eA());
                                                          },
                                                      })
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fM.aC,
                                                          children: em.comment,
                                                      }),
                                                nJ(em, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: fM.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fM.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(V.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                H({ ...B, confirmingRemove: !1 }),
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
                                                                                H({
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
                                                                                      H({
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
function fD(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([aM.default], () => aM.default.getUser(t), [t]);
    return (0, a.jsx)(sE.eu, {
        src: null == n ? null : X.Ay.getUserAvatarURL(n),
        size: sI._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fz(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(f_);
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
        className: fM.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fM.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fM.ip, children: (0, a.jsx)(fD, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fM.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fM.zI, children: g }),
        ],
    });
}
let fO = 300,
    fF = 2;
function fq(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fU(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fG(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fM.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fB = n(659723),
    fH = n(697744),
    fK = n(130324);
function fV(e) {
    let t = (0, fH.c)(),
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
    let r = (0, rQ.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function fW(e) {
    let { className: t } = e,
        { Component: n, events: l } = fV(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, fK.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: fK.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var fX = n(251363),
    fJ = n(944142),
    fZ = n(532247),
    fY = n(501628);
function fQ(e) {
    let { progress: t } = e,
        { Component: n } = fV(1500),
        l = lp.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: fY.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: fY.PM,
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
function f0(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([fJ.A], () => (s ? fJ.A.getLiveReload(t) : null), [s, t]),
        c = (0, lW.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, fZ.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, fZ.QP)(e, s)));
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
                        null != t.target && t.target === (0, fX.ow)(null, n) && e();
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
        h = m ? null : (0, fZ.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r7.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: fY.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(fQ, { progress: h }),
                  })
                : null,
        ],
    });
}
var f1 = n(357858),
    f2 = n(343030),
    f3 = n(317608),
    f4 = n(35367),
    f5 = n(228946);
let f6 = { width: 1 / 0, height: 1 / 0 };
function f7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f6;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var f8 = n(702083);
function f9(e) {
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
        d = n ? f7(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(f8.dw, { [f8.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(f8.R9, { [f8.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var he = n(347927);
function ht(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(he.Bf, l && he.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: he.Ux,
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
var hn = n(957272);
function hl(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, f4.A)({ applicationId: t, surface: n, launch: l });
    if (((0, f5.A)(t, n), s === f4.n.Launched)) {
        let e = (0, a.jsx)(f3.A, { frameId: i.id, level: f2.A.WithinAppContent, className: hn.Z7, overlay: r });
        return (0, lJ.Q5)(n) ? (0, a.jsx)(f9, { children: e }) : e;
    }
    return (0, a.jsx)(hr, { state: s });
}
function hr(e) {
    let { state: t } = e;
    switch (t) {
        case f4.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: hn.qs,
                children: (0, a.jsx)(ht, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case f4.n.NoApplication:
            return (0, a.jsx)(fW, { className: hn.qs });
        case f4.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: hn.qs,
                children: (0, a.jsx)(ht, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case f4.n.Error:
            return (0, a.jsxs)("div", {
                className: hn.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: hn.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case f4.n.AwaitingLaunch:
        case f4.n.Loading:
            return (0, a.jsx)("div", { className: hn.qs, children: (0, a.jsx)(tN.y, {}) });
    }
}
var ha = n(308528),
    hi = n(334738),
    hs = n(688438),
    ho = n(365971),
    hu = n(703462);
function hc(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: hu.f,
        children: [
            (0, a.jsx)(Z.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function hd() {
    return (0, a.jsx)("div", { className: hu.f, children: (0, a.jsx)(tN.y, {}) });
}
function hm(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([aI.A], () => (null != c ? aI.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && ha.A.preload(D.ME, t);
        }, [t]),
        (n = (0, o.bG)([tb.A], () => tb.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, ho.Xg)();
            return (
                (0, hi.yl)(t, e),
                () => {
                    (0, hi.dm)(t, e);
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
        ? (0, a.jsx)(hc, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(hd, {})
          : (0, a.jsx)("div", {
                className: hu.g,
                children: (0, a.jsx)(hs.A, { channel: d, guild: null, chatInputType: ub.oU.SIDEBAR }, d.id),
            });
}
var hf = n(887909),
    hh = n(570962),
    hp = n(998475);
function hg(e) {
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
    } = (0, hf.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: hp.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: hp.rf,
                children: (0, a.jsx)(hh.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: hp.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: hp.z3,
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
                                className: h()(hp.Qs, c ? hp.cw : null, d ? hp.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: hp.o1,
                      children: s.map((e, t) => (0, a.jsx)(V.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var hx = n(765671),
    hv = n(269094),
    hj = n(714917),
    hb = n(463660),
    hy = n(582063);
let hk = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function hw() {
    (0, es.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function hN(e) {
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
                    return (0, a.jsx)(hC, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: hy.m2,
                        children: (0, a.jsx)(N.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(eH.K, {
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
                accept: hk.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (hk.includes(n.type)
                                ? n.size > ef.aI
                                    ? (0, es.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, hb.M$)(t, n).catch(hw)
                                : (0, es.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function hC(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([hj.A], () => hj.A.getBackground(t)),
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
                        icon: aQ.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(ed.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(S.default.AiAz8J),
                        icon: mJ.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, hb.Og)(t).catch(hw));
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
                        (0, hb.Y1)(t, !i) || hw();
                    },
                }),
            }),
        ],
    });
}
let hA = "/assets/7cec34541705c795.webp";
function hS(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, f4.A)({ applicationId: t, surface: lz.ZN });
    return (i.useEffect(() => {
        let e = (0, lz.VA)(t, lz.ZN);
        return () => (0, lZ.r)(e);
    }, [t]),
    r.state !== f4.n.Launched)
        ? (0, a.jsx)(hr, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(hr, { state: f4.n.Loading })
          : (0, a.jsx)(hE, { lifecycle: r, projectId: n, size: l });
}
function hE(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, hx.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: hy.JH,
        children: [
            (0, a.jsx)(hI, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: hy.dw,
                children: (0, a.jsx)("div", {
                    className: hy.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(hv.A, { frame: t.frame, application: t.application, className: hy.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(hN, { projectId: n }) : null,
        ],
    });
}
function hI(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([hj.A], () => (null != t ? hj.A.getBackground(t) : null)),
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
                (0, hb.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(hA);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        p = null == l || (null != f && f === u) ? hA : f;
    return null != p && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: h()(hy.LO, { [hy.Ty]: n?.blur === !0 }),
              src: p,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  p === f && c(f);
              },
          })
        : null;
}
var hM = n(409478),
    h_ = n(652227);
function hR(e) {
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
            onResume: g,
        } = e,
        x = (0, o.bG)([is.A], () => null != f && null != is.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: h_.qs, children: (0, a.jsx)(tN.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: h_.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(tN.y, {}) : (0, a.jsx)(hg, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: h_.RG,
                      children: [
                          (0, lA.yf)(u, c)
                              ? p
                                  ? (0, a.jsx)(hP, { projectId: f, onResume: g })
                                  : (0, a.jsx)(hl, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: h_.qs,
                                        children: (0, a.jsx)(ht, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(hM.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(hS, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(hm, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: h_.qs, children: (0, a.jsx)(tN.y, {}) })
              : (0, a.jsx)(fW, { className: h_.qs });
}
function hP(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, f1.Pu)(t),
        (0, a.jsx)("div", {
            className: h_.qs,
            children: (0, a.jsx)(ht, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(V.$, {
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
var hT = n(750506),
    hL = n(867193),
    h$ = n(539197),
    hD = n(977020);
function hz(e) {
    let { projectId: t } = e,
        n = (0, h$.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, h$.Ie)(e);
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
        className: hD.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [h$.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(hD.hN, hD.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(hD.hN, hD.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(hD.UE, { [hD.SP]: n.shown, [hD.Vq]: n.pressed, [hD.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var hO = n(417760);
function hF(e) {
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
              className: h()(hO.M0, hO.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(dj.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(oN.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: hO.ID, children: d }),
                  c ? (0, a.jsx)(r7.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: hO.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: hO.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: hO.sp,
                      children: [
                          (0, a.jsx)(oN.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(dj.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: hO.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: hO.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: hO.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: hO.lC, children: m }) : null,
              ],
          });
}
function hq(e) {
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
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = ro(r());
            f((t) => (ru(t, e) ? t : e));
            let t = null == h ? null : ro(h);
            (x((e) => (ru(e, t) ? e : t)), null != h && (0, hL.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, hL.C)(0));
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
                  })(m, g),
        N = (function () {
            let [e] = i.useContext(hT.uY),
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
                      className: hO.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: hO.QF,
                          children: (0, a.jsx)(hF, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, rl.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(r7.A, {
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
                ? (0, rl.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: hO.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: hO.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(hz, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var hU = n(399503),
    hG = n(853555),
    hB = n(271982),
    hH = n(187645);
let hK = new Map(),
    hV = !1;
function hW() {
    let e = new Map();
    for (let t of new Set([...ld.A.getActivityOrderedProjectIds(), ...(0, lx.T7)()])) {
        if (!(ld.A.isThinking(t) || (0, lx.wK)(t)) || lk.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eL.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, lJ.Rc)(t);
            return (0, lz.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...hK]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            hK.delete(t),
            n.unregisterLookup(),
            hB.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        hK.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = hH.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    hX(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (hK.set(e, l),
                    (l.unregisterLookup = (0, hG.Ng)(e, () => (0, fX.n5)(n, t))),
                    hB.A.registerFrameTarget(t, n, f2.A.Backstage, void 0));
            })(t, n);
    for (let e of hK.values()) hX(e.element);
}
function hX(e) {
    let t = lX.A.isBuilderPreviewMobile();
    e.classList.toggle(hH.L, !t);
    let n = t ? f7(lX.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var hJ = n(873727),
    hZ = n(147248),
    hY = n(418842),
    hQ = n(363195),
    h0 = n(818023);
let h1 = null;
var h2 = n(517461),
    h3 = n(761929),
    h4 = n(487336);
function h5(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, h2.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, ix.clamp)(u, 360, n),
        m = (0, h3.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: h3.R.HORIZONTAL_LEFT,
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
        className: h4.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: h4.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: h4.kL, style: { width: d }, children: l }),
        ],
    });
}
var h6 = n(541940);
function h7(e) {
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
        [g, x] = i.useState(null),
        v = (0, lW.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([hQ.A], () => (0, hJ.x4)(hQ.A.theme)),
            l = (0, o.bG)([hZ.A], () => hZ.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([W.Ay], () => ({
                reducedMotion: W.Ay.useReducedMotion,
                fontScale: (0, hJ.U0)(),
                highContrast: W.Ay.isHighContrastModeEnabled,
                forcedColors: W.Ay.useForcedColors,
                underlineLinks: W.Ay.alwaysShowLinkDecorations,
            })),
            d = lp.hH.useSetting(),
            m = (0, hY.C)(),
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
            g = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, fX.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, hJ.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, fE.W)(l, "set-env", i, {
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
                let n = (0, fX.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, fX.n5)(e, t) && ((x.current = null), b());
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
    })(g, j),
        i.useEffect(() => {
            if (null != t) return (0, hG.Ng)(t, () => (0, fX.n5)(g, j));
        }, [t, g, j]));
    let b = i.useCallback(() => (0, fX.ow)(g, j), [g, j]),
        y = i.useCallback(() => (f ? (0, fX.ow)(g, j) : g), [f, g, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(h6.Mh, c),
                children: [
                    u,
                    p
                        ? null
                        : (0, a.jsx)(hq, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: h6.fm, children: d }),
                ],
            }),
            m,
            p
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(f$, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(rW, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function h8(e) {
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
        onImportProject: g,
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
    (0, hU.k)(t, N);
    let M = s.type === lS.U.MAIN || (0, lJ.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([lX.A], () => ({
            mobile: lX.A.isBuilderPreviewMobile(),
            landscape: lX.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? h0.aX.LANDSCAPE : h0.aX.PORTRAIT), (h1 = e));
                else {
                    if (h1 !== e) return;
                    ((l = h0.aX.UNHANDLED), (h1 = null));
                }
                tA.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let R = i.useRef(null),
        [P, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, rJ.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, rJ.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, ly.HV)(l), () => (0, ly.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, _.ensureConnection)(t),
                hV ||
                    ((hV = !0),
                    ld.A.addChangeListener(hW),
                    eL.Ay.addChangeListener(hW),
                    lT.A.addChangeListener(hW),
                    lX.A.addChangeListener(hW),
                    lk.A.addChangeListener(hW),
                    (0, lx.W3)(hW),
                    hW()));
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
        className: h6.LB,
        children: (0, a.jsx)(h7, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, lA.yf)(k, w),
            paused: A,
            mainClassName: null == c ? void 0 : h()(h6.ez, { [h6.zt]: d }),
            content: (0, a.jsx)(hR, {
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
                frameOverlay: (0, a.jsx)(f0, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(h5, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: h6.cO,
                              children: x
                                  ? (0, a.jsx)(fk, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(fB.A, { projectId: t }),
                                            (0, a.jsx)(rn.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(rn.Ay.Icon, {
                                                                  icon: eo.P,
                                                                  tooltip: E.intl.string(S.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(rn.Ay.Title, {
                                                    children: E.intl.string(E.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: h6.cb,
                                                children: (0, a.jsx)(
                                                    dq,
                                                    {
                                                        projectId: t,
                                                        restoreState: j,
                                                        onRestoreVersion: p,
                                                        onImportProject: g,
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
var h9 = n(323140);
function pe(e) {
    var t;
    let l,
        r,
        s,
        { project: c, projectsLoaded: d, onBack: m, guildId: f } = e,
        [p, g] = i.useState(!0),
        [j, b] = i.useState(!1),
        k = lg(),
        w = i.useCallback(() => g(!0), []),
        C = i.useCallback(() => {
            (b(!1), g(!0));
        }, []),
        { restoreState: A, handleRestoreVersion: I } = (function (e, t) {
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
        })(c, C),
        R = c?.id ?? null,
        {
            integrationStatus: T,
            isPreviewApplicationLoading: L,
            checkingIntegration: $,
            previewReady: O,
            hasFrame: F,
            needsPermissionReview: q,
            installAuthorizeProps: U,
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
                g = i.useCallback(async () => {
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
                    g(),
                    () => {
                        (s.current?.abort(), (s.current = null));
                    }
                ),
                [g],
            );
            let x = (0, lH.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, lH.$)(e, x));
                }, [x, e]),
                j = i.useCallback(async () => {
                    try {
                        await v();
                    } catch {}
                    await g();
                }, [g, v]),
                b = i.useMemo(() => {
                    let t = e?.preview_application_id;
                    return null == t || d || m
                        ? null
                        : {
                              ...(0, lK.i)({ applicationId: t, application: c ?? null, guildId: x }),
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
                needsPermissionReview: p,
                installAuthorizeProps: b,
            };
        })(c, f),
        G =
            (0, o.bG)([lY.A], () => (null == R ? void 0 : lY.A.getPublishStatus(R)?.previewAppChannels), [R]) ??
            T?.preview_app_channels,
        {
            availability: B,
            activeMode: H,
            setMode: K,
            frameSurface: W,
            frameSurfaceOptions: X,
            setFrameSurface: J,
            appChannel: Z,
            setAppChannel: Y,
            frameLaunchParams: Q,
            widgetApplicationId: ee,
        } = (0, l_.p)({
            applicationId: c?.preview_application_id ?? null,
            previewApplicationId: c?.preview_application_id ?? null,
            declaredActivity: F,
            previewSupportedSurfaces: c?.preview_supported_surfaces,
            installScope: c?.install_scope ?? null,
            ownerAuthorizationRevoked: T?.owner_authorization_revoked === !0,
            supportsOverlay: c?.preview_supported_surfaces?.includes(lw.q7.OVERLAY) === !0,
            previewAppChannels: G,
        }),
        et =
            ((t = (0, o.bG)(
                [ld.A],
                () =>
                    null == R
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(ld.A.getMessages(R)),
                [R],
            )),
            null != (l = t?.default_size) &&
            Number.isFinite(l.width) &&
            Number.isFinite(l.height) &&
            l.width > 0 &&
            l.height > 0
                ? l
                : lN);
    ((0, lC.x)(R, (e) => {
        B.modes.includes(e) && K(e);
    }),
        lh(R, () => {
            (g(!0), b(!0));
        }));
    let en = B.modes.includes("frame"),
        el = (0, o.bG)([lk.A], () => lk.A.isPaused(R), [R]),
        er = en && !el,
        {
            previewTargetOptions: ea,
            handleSelectPreviewTarget: ei,
            mobilePreview: eo,
            mobilePreviewLabel: eu,
            handleToggleMobilePreview: ec,
            landscapePreview: ed,
            rotatePreviewLabel: em,
            handleRotatePreview: ef,
            previewSurface: eh,
            previewFrame: ep,
            isRefreshing: ex,
            handleRefresh: ev,
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
                g = (0, o.bG)([lX.A], () => lX.A.isBuilderPreviewLandscape()),
                x = E.intl.string(g ? S.default.tunI2l : S.default.DoNdjA),
                v = i.useCallback(() => (0, ly.Lw)(!g), [g]),
                j = (0, lJ.jS)(t),
                b = i.useMemo(() => (0, lJ.Op)(j, l), [j, l]),
                y = (0, lW.A)(t?.preview_application_id ?? null, b),
                k = (0, lz.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || lV.A.refreshProxyTicket(y.id);
                }, [y, k]);
            return {
                previewTargetOptions: d,
                handleSelectPreviewTarget: m,
                mobilePreview: f,
                mobilePreviewLabel: h,
                handleToggleMobilePreview: p,
                landscapePreview: g,
                rotatePreviewLabel: x,
                handleRotatePreview: v,
                previewSurface: b,
                previewFrame: y,
                isRefreshing: k,
                handleRefresh: w,
            };
        })({
            project: c,
            modes: B.modes,
            frameSurface: W,
            frameSurfaceOptions: X,
            previewAppChannels: G,
            setMode: K,
            setFrameSurface: J,
            setAppChannel: Y,
        }),
        ej = p && !j,
        eb = E.intl.string(ej ? S.default.JD6Oit : S.default.xjJAQm),
        ey = i.useCallback(() => {
            if (j) {
                (b(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [j]),
        eN = i.useCallback(() => g(!1), []),
        {
            designFeedbackActive: eA,
            designFeedbackToggleRef: eS,
            agentDrivingPreview: eE,
            designFeedbackLabel: eI,
            handleToggleDesignFeedback: eM,
        } = (function (e, t, n) {
            let { active: l } = nY(e);
            i.useEffect(() => {
                null != e && l && !t && nW(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, lx.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void nW(e);
                        (n(), nK(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(R, er, C),
        [e_] = i.useState(() => eg.isPlatformEmbedded && (0, lU.qM)()),
        eR = null != lo(R);
    i.useEffect(() => {
        null != R && eR && !er && la(R);
    }, [R, eR, er]);
    let eP = i.useCallback(() => {
            null != R &&
                (C(),
                (function (e) {
                    if (null != ll(e)) return;
                    let { byProject: t } = lt.getState();
                    lt.setState({ byProject: { ...t, [e]: ln } });
                })(R));
        }, [R, C]),
        e$ = i.useCallback(() => {
            null != R && la(R);
        }, [R]),
        eD = eR ? E.intl.string(S.default.tuQ5f3) : eI,
        ez = i.useCallback(() => {
            b((e) => !e && (g(!0), !0));
        }, []),
        eO = i.useCallback(() => b(!1), []),
        eF = i.useCallback(() => {
            null != R && (0, ly._j)(R);
        }, [R]),
        eq = i.useCallback(() => {
            null != R && (el ? (0, ly._j)(R) : (0, ly.di)(R, ep?.id));
        }, [R, el, ep?.id]),
        eU = i.useCallback(() => {
            var e, t;
            (null != c && ((e = c.id), (t = ep?.id), (0, _.closeConnection)(e), (0, lZ.r)(t)), m());
        }, [c, ep?.id, m]),
        eG =
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
        eH = i.useCallback(() => {
            null != c && (0, tu.A)(c, f);
        }, [c, f]),
        eK = (0, lA.JR)(H, q)
            ? { type: "permissions", authorizeProps: U }
            : $ && null == T
              ? { type: "checking" }
              : void 0,
        eV = (0, o.bG)([eL.Ay], () => null != R && eL.Ay.isProjectDeleting(R), [R]);
    i.useEffect(() => {
        ((null == c && d) || eV) && (0, u.bG)(D.BVt.CHANNEL(f, z.VV.CONJURE));
    }, [f, c, d, eV]);
    let {
            publishOptions: eW,
            publish: eX,
            publishing: eJ,
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
                        ...rt,
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
        })(R, f, $ || L),
        eY = (0, lQ.L)(eX?.status ?? null),
        eQ =
            null == eX
                ? null
                : (0, a.jsx)("div", {
                      className: h9.As,
                      onMouseDown:
                          null == R || eX.disabled || eJ
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, l0.dx)(R);
                                },
                      children: (0, a.jsx)(N.m, {
                          text: eY,
                          asContainer: !0,
                          children: (0, a.jsx)(V.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eJ ? pt : null != eZ ? nC.U : void 0,
                              disabled: eX.disabled,
                              onClick: () => eX.run("header"),
                              text: eZ ?? eX.label,
                          }),
                      }),
                  }),
        e1 = null == c ? void 0 : () => (0, e2.A)(c.id, { guildId: f, isPreview: !0, publishOptions: eW }),
        e3 = (0, a.jsx)(M, {
            title: c?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: m },
            project: c,
            onOpenProjectSettings: e1,
            actions:
                null == c
                    ? null
                    : (0, a.jsxs)("div", {
                          className: h9.FO,
                          children: [
                              (0, a.jsx)(lq, {
                                  targets: ea,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(H, W, Z),
                                  onChange: ei,
                              }),
                              en
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === H
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: eo ? pr : pl,
                                                      tooltip: eu,
                                                      "aria-label": eu,
                                                      selected: eo,
                                                      onClick: ec,
                                                  })
                                                : null,
                                            eo && "frame" === H
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: pa,
                                                      tooltip: em,
                                                      "aria-label": em,
                                                      selected: ed,
                                                      onClick: ef,
                                                  })
                                                : null,
                                            (0, a.jsx)(lc, {
                                                enabled: e_ && !eR && !eE && !el,
                                                onLongPress: eP,
                                                children: (0, a.jsx)(y.A.Icon, {
                                                    ref: eS,
                                                    icon: nA.x,
                                                    iconClassName: h9.D8,
                                                    tooltip: eD,
                                                    "aria-label": eD,
                                                    selected: eR || eA,
                                                    disabled: el || (eE && !eR),
                                                    onClick: eR ? e$ : eM,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" !== H || el
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(nR.A, { frame: ep }),
                                            (0, a.jsx)(lO, { frame: ep, controlProjectId: c.id }),
                                        ],
                                    }),
                              (0, a.jsx)("div", { className: h9.YJ }),
                              k
                                  ? (0, a.jsx)(y.A.Icon, {
                                        icon: nS.BugIcon,
                                        tooltip: E.intl.string(S.default.Mt5k9d),
                                        "aria-label": E.intl.string(S.default.Mt5k9d),
                                        selected: j,
                                        onClick: ez,
                                    })
                                  : null,
                              (0, a.jsx)(y.A.Icon, {
                                  icon: eB.SettingsIcon,
                                  tooltip: E.intl.string(S.default.I2XSKe),
                                  "aria-label": E.intl.string(S.default.I2XSKe),
                                  onClick: e1,
                              }),
                              (0, a.jsx)(to, {
                                  projectId: c.id,
                                  projectName: c.name,
                                  guildId: f,
                                  projectGuildId: c.guild_id,
                                  isOwner: (0, eL.PV)(c),
                                  canRemix: (0, eL.H_)(c),
                                  onRefresh: (0, lz.x1)(ep) ? ev : void 0,
                                  isRefreshing: ex,
                                  onTogglePreviewPaused: "frame" === H ? eq : void 0,
                                  previewPaused: el,
                                  previewPauseDisabled: !el && eE,
                                  onClose: eU,
                                  onExport: eG.onExport,
                                  onImport: eG.onImport,
                                  onRemix: eH,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = c.id),
                                          void (0, e7.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("834460"),
                                                  n.e("960521"),
                                              ]).then(n.bind(n, 699760));
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
                                              restoreDisabled: A?.status === "restoring",
                                              onRestoreVersion: (e, t) => I(e, t, !0),
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
                                      B.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== B.profileState
                                          ? ee
                                          : null,
                                  previewProjectId: c.id,
                              }),
                              ej
                                  ? null
                                  : (0, a.jsx)(y.A.Icon, { icon: pn, tooltip: eb, "aria-label": eb, onClick: ey }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(h9.nj, ny.T),
        children: [
            eG.importInput,
            (0, a.jsx)("main", {
                className: h9.JX,
                children:
                    null == c
                        ? (0, a.jsxs)("div", {
                              className: h9.j5,
                              children: [
                                  e3,
                                  (0, a.jsxs)("div", {
                                      className: h9.sD,
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
                                          (0, a.jsx)(V.$, {
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
                                  h8,
                                  {
                                      projectId: c.id,
                                      designFeedbackToggleRef: eS,
                                      applicationId: c.preview_application_id,
                                      previewApplicationId: c.preview_application_id,
                                      surface: eh,
                                      frameLaunchParams: Q,
                                      header: e3,
                                      chatOpen: p,
                                      onCloseChat: eN,
                                      chatHeaderAction: eQ,
                                      debugOpen: k && j,
                                      onCloseDebug: eO,
                                      onRestoreVersion: I,
                                      onImportProject: (0, eL.PV)(c) ? eG.onImport : void 0,
                                      restoreState: A,
                                      previewReady: O,
                                      previewGate: eK,
                                      availability: B,
                                      activeMode: H,
                                      widgetApplicationId: ee,
                                      overlayWidgetSize: et,
                                      previewPaused: el,
                                      onResumePreview: eF,
                                  },
                                  c.id,
                              ),
                          }),
            }),
        ],
    });
}
function pt() {
    return (0, a.jsx)(tN.y, { type: tN.t.SPINNING_CIRCLE_SIMPLE, className: h9.Hv, itemClassName: h9.C5 });
}
function pn(e) {
    return (0, a.jsx)(nE.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function pl(e) {
    return (0, a.jsx)(nI.u, { ...e, size: "custom", width: 20, height: 20 });
}
function pr(e) {
    return (0, a.jsx)(nM.k, { ...e, size: "custom", width: 20, height: 20 });
}
function pa(e) {
    return (0, a.jsx)(n_.H, { ...e, size: "custom", width: 20, height: 20 });
}
function pi(e) {
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
        p = (0, o.bG)([eL.Ay], () => eL.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(pe, { project: h, projectsLoaded: p, onBack: f, guildId: t }, s)
        : (0, a.jsx)(nN, { guildId: t });
}
