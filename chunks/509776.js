(n.r(t), n.d(t, { default: () => gH }));
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
    w = n(152367),
    k = n(661531),
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
                (0, a.jsx)(w.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: k.A.colors.ICON_STRONG,
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
var _ = n(120234),
    R = n(639519),
    P = n(319481),
    T = n(371169);
let L = { main: [], subagent: [], thinking: ["low", "medium", "high", "xhigh", "max"] },
    $ = { tier: "balanced" },
    D = { simple: { thinking: "high" }, balanced: { thinking: "high" }, complex: { thinking: "high" } };
async function O(e) {
    let { guildId: t, installScope: n, prompt: l, modelSettings: r, templateId: a } = e,
        i = await (0, T.gA)(
            null != n
                ? { guild_id: t, install_scope: n }
                : { guild_id: t, auto_install_scope: !0, prompt: (l ?? "").slice(0, 4e3) },
        );
    return ((0, P.ensureConnection)(i, { templateId: a }), (0, P.stageModelSettings)(i, r ?? $), i);
}
var q = n(652215),
    z = n(746080);
async function F(e) {
    let { start: t, ...n } = e,
        l = await O(n);
    return (await t(l), (0, u.pX)(q.BVt.CHANNEL(n.guildId, z.VV.CONJURE, l)), l);
}
var U = n(941985),
    G = n(506774);
let B = "ConjureProjectsPanelOpen";
var H = n(636537),
    K = n(73153),
    V = n(195880);
function W(e, t) {
    K.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: e, draft: t });
}
var X = n(245179),
    Z = n(435558),
    Y = n.n(Z);
let J = "ConjureComposerDrafts";
function Q() {
    return G.w.get(J) ?? {};
}
let ee = new Map(),
    et = Y().throttle(() => {
        if (0 === ee.size) return;
        let e = Q();
        for (let [t, n] of ee) "" === n ? delete e[t] : (e[t] = n);
        (ee.clear(), G.w.set(J, e));
    }, 1e3);
class en extends o.Ay.Store {
    getDraft(e) {
        let t = ee.get(e);
        return null != t ? t : (Q()[e] ?? "");
    }
}
let el = new en(K.h, {
    LOGOUT: function () {
        return (ee.clear(), et.cancel(), G.w.remove(J), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (ee.set(t, n), et(), "" === n && et.flush(), !1);
    },
});
(n(323874), n(14289), n(35956));
var er = n(839214),
    ea = n(666476),
    ei = n(989145);
let es = [],
    eo = 1,
    eu = (0, er.D)(() => ({ draftsByProject: {} }));
function ec(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? es;
}
function ed(e, t) {
    return ec(eu.getState(), e, t);
}
function em(e, t, n) {
    let { draftsByProject: l } = eu.getState();
    eu.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function ef(e, t, n, l) {
    let r = ed(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (em(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function eh(e, t) {
    (0, ei.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function eg(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && eh(e, t.ref.id));
}
function ep(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = eu.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? es) n ? eg(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    eu.setState({ draftsByProject: i });
}
function ex(e) {
    return E.intl.formatToPlainString(S.default.JZ59Bo, { size: (0, ea.sM)((0, ea.Ju)(e)) });
}
function ev(e, t, n) {
    if (0 === n.length) return;
    let l = n.map((e) => {
        let { draft: t, upload: n } = e;
        return { draft: { ...t, localId: eo++ }, upload: n };
    });
    for (let { draft: n, upload: r } of (em(e, t, [
        ...ed(e, t),
        ...l.map((e) => {
            let { draft: t } = e;
            return t;
        }),
    ]),
    l))
        r?.().then(
            (l) => {
                if ("errorText" in l) return void ef(e, t, n.localId, { status: "error", errorText: l.errorText });
                let { converted: r, ...a } = l;
                ef(e, t, n.localId, { ...r, status: "ready", ref: a })
                    ? setTimeout(
                          () => ef(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default.E7dS5n) }),
                          ea.o2 - 3e5,
                      )
                    : eh(e, a.id);
            },
            (l) => {
                (console.error("[conjure] attachment upload failed", l),
                    ef(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default["kUw/b1"]) }));
            },
        );
}
function ej(e, t) {
    let n = ed(e, t);
    if (0 !== n.length) {
        for (let t of n) eg(e, t);
        em(e, t, es);
    }
}
function eb(e, t) {
    let n = ed(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (em(e, t, es), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function ey(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = ed(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? eb(e, "chat") : [];
    (0, P.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(K.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(eu.getState().draftsByProject)) ep(e, { deleteFromWorker: !0 });
}),
    K.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        ep(t, { deleteFromWorker: !1 });
    }));
var ew = n(975189),
    ek = n(260498);
let eN = "ConjureHeldPrompts",
    eC = new Map(),
    eA = new Map();
function eS(e, t) {
    let n =
        eC.get(e) ??
        (async () => {
            try {
                await t();
            } catch (t) {
                throw (eC.delete(e), t);
            }
        })();
    return (eC.set(e, n), n);
}
function eE() {
    return G.w.get(eN) ?? {};
}
function eI(e) {
    let { [e]: t, ...n } = eE();
    G.w.set(eN, n);
}
function eM(e, t, n) {
    (eI(e),
        (0, P.withdrawUserMessage)(e, t.nonce),
        "" === el.getDraft(e) && W(e, t.message),
        0 === ed(e, "chat").length &&
            ev(
                e,
                "chat",
                t.attachments.map((e) => ({
                    draft: { name: e.name, contentType: e.content_type, status: "ready", ref: e },
                })),
            ),
        n());
}
function e_(e, t) {
    if (0 === e.length) return {};
    let n = e.find((e) => e.id === t);
    return {
        input: "server",
        note: E.intl.string(S.default.SU9K9U),
        ...(null != n ? { default_entities: [{ id: n.id, name: n.name, kind: "server" }] } : {}),
    };
}
function eR(e) {
    return {
        id: e.id,
        questions: e.questions.map((e) => ({
            id: e.id,
            question: e.question,
            recommendation_reason: "",
            options: [],
            allow_custom: !1,
            note: E.intl.string(S.default.ZKPaWY),
        })),
    };
}
async function eP(e, t, n) {
    let l = await H.Bo.put({
        url: `${q.Rsh.CONJURE_PROJECT(e)}/install-scope`,
        body: { install_scope: t, ...(null != n ? { guild_id: n } : {}) },
        rejectWithError: !0,
    });
    K.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: l.body });
}
var eT = n(89310),
    eL = n(821609),
    e$ = n(775602),
    eD = n(486020),
    eO = n(687966),
    eq = n(323384),
    ez = n(632015),
    eF = n(231483),
    eU = n(430392);
let eG = {
    games: eO.GameControllerIcon,
    apps: eq.k,
    profile_widget: ez.f,
    automod: eF.ShieldIcon,
    chat_bot: eU.RobotIcon,
};
var eB = n(621466);
let eH = "data-conjure-carousel-card";
var eK = n(19493);
let eV = i.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n } = e,
            l = eG[t.category];
        return (0, a.jsxs)("li", {
            className: eK.AS,
            [eH]: "",
            children: [
                (0, a.jsxs)("div", {
                    className: eK.rl,
                    children: [
                        (0, a.jsx)("img", {
                            className: eK.my,
                            src: (0, eD.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: eK.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eK.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eK.xn,
                            children: [
                                (0, a.jsx)("img", { className: eK.q_, src: t.image, alt: "" }),
                                (0, a.jsx)("div", {
                                    className: eK.o1,
                                    children: (0, a.jsx)(eL.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: E.intl.string(S.default["6CQjTy"]),
                                        onClick: () => n(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: eK.qr,
                            children: [
                                (0, a.jsx)("div", {
                                    className: eK.Yl,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)(l, { size: "md", color: k.A.colors.ICON_STRONG }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: eK.PJ,
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
    eW = i.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            r = (0, o.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
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
                        ((r = (l = Array.from(n.querySelectorAll(`[${eH}]`))).map(
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
                function w() {
                    ((f = !1), b());
                }
                function k() {
                    ((h = !0), b());
                }
                function N(t) {
                    ((h = (0, eB.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), b());
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
                    e.addEventListener("pointerleave", w),
                    e.addEventListener("focusin", k),
                    e.addEventListener("focusout", N),
                    window.addEventListener("focus", C),
                    window.addEventListener("blur", A),
                    () => {
                        (cancelAnimationFrame(d),
                            S.disconnect(),
                            E.disconnect(),
                            e.removeEventListener("scroll", v),
                            e.removeEventListener("pointerenter", y),
                            e.removeEventListener("pointerleave", w),
                            e.removeEventListener("focusin", k),
                            e.removeEventListener("focusout", N),
                            window.removeEventListener("focus", C),
                            window.removeEventListener("blur", A));
                    }
                );
            }, [s, u, t]),
            (0, a.jsx)("section", {
                ref: s,
                className: r ? eK.vV : eK.Dk,
                "aria-label": E.intl.string(S.default.Qc4S39),
                children: (0, a.jsx)("ul", {
                    ref: u,
                    className: eK.u4,
                    children: n.map((e) => (0, a.jsx)(eV, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var eX = n(858899),
    eZ = n(789645),
    eY = n(265872),
    eJ = n(980707),
    eQ = n(477782),
    e0 = n(81369),
    e1 = n(77729),
    e2 = n(723702),
    e3 = n(264572).Buffer;
async function e4(e, t) {
    if (e2.isPlatformEmbedded) {
        let n = e3.from(await e.arrayBuffer());
        if ("function" == typeof e1.A.fileManager.saveWithDialog2) await e1.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await e1.A.fileManager.saveWithDialog(n, t);
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
var e5 = n(688954);
class e6 extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function e7(e, t) {
    let n = await (0, e5.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new e6(n.status);
    return await n.blob();
}
async function e8(e, t, n) {
    (0, P.ensureConnection)(e);
    let l = await (0, ei.vX)(e, t);
    (0, P.sendUserMessage)(e, n, [l]);
}
function e9(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, ea.Oq)(e.size, t)
        ? null
        : E.intl.formatToPlainString(S.default.ThxcOX, { size: (0, ea.sM)((0, ea.Ju)(t)) });
}
async function te(e, t) {
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
        r = await e7(e, l);
    await e4(r, l);
}
function tt(e) {
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
var tn = n(950305),
    tl = n(664121);
let tr = [
    { value: "user", icon: tn.UserIcon, nameMessage: S.default.s1TsXl },
    { value: "guild", icon: tl.R, nameMessage: S.default.LlLIJw },
];
function ta(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = tt(i.useCallback((e) => n(e, "user"), [n])),
        s = tt(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eY.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: eY.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(eJ.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": E.intl.string(S.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(eQ.rX, {
                            label: E.intl.string(S.default.NyVn6T),
                            children: tr
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: E.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        eQ.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(eL.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: e0.H,
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
var ti = n(418811),
    ts = n(246338),
    to = n(290076),
    tu = n(442433),
    tc = n(314116),
    td = n(782603),
    tm = n(780338),
    tf = n(782134),
    th = n(113494),
    tg = n(12470),
    tp = n(811893),
    tx = n(663417),
    tv = n(70688),
    tj = n(92446),
    tb = n(173936),
    ty = n(473935),
    tw = n(625903),
    tk = n(408278),
    tN = n(365199),
    tC = n(7437),
    tA = n(147036),
    tS = n(957565),
    tE = n(785389),
    tI = n(123917),
    tM = n(860402);
let t_ = new Set();
var tR = n(893067),
    tP = n(442331),
    tT = n(616334);
n(321073);
var tL = n(189714),
    t$ = n(733791),
    tD = n(189213),
    tO = n(331322),
    tq = n(192308),
    tz = n(664619),
    tF = n(706935);
function tU(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === l,
        h = f ? (0, t$.fI)(n) : (0, t$.Kd)(n),
        g = f ? null : (0, t$.L4)(n),
        p = (0, t$.Mi)(n),
        x = f
            ? E.intl.formatToPlainString(S.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(S.default.x6FvsZ, { app: n.appName });
    async function j() {
        (c(!0), m(null));
        let e = f ? (0, T.xx)(t.id) : (0, tz.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(f ? S.default["0XDHob"] : S.default.PJ2Fkn))
            : (f || (0, eX.P0)({ text: (0, t$.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tD.a, {
        ...r,
        role: "alertdialog",
        title: f ? x : (0, t$.WX)((0, tF.tb)(S.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, t$.J)(n) : E.intl.string(S.default["8OKM1N"]),
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
        children: (0, a.jsxs)(tO.B, {
            gap: 12,
            children: [
                h.length > 0 || null != g
                    ? (0, a.jsx)(tF.Ay, {
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
function tG(e) {
    (0, tq.openModal)((t) => (0, a.jsx)(tU, { ...t, ...e }));
}
var tB = n(587895);
function tH(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, u] = i.useState(null),
        c = (0, o.bG)([tB.A], () => tB.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        d = E.intl.formatToPlainString(S.default.m8KWic, { app: c });
    async function m() {
        (r(!0), u(null));
        let e = await (0, tz.R_)(t.id);
        (r(!1), e)
            ? ((0, eX.P0)({ text: E.intl.formatToPlainString(S.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : u(E.intl.string(S.default["rE/0SD"]));
    }
    return (0, a.jsx)(tD.a, {
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
var tK = n(552821);
let tV = [];
function tW(e) {
    (0, eX.P0)({ text: e, variant: "critical" });
}
function tX(e) {
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
            onTogglePopout: b,
            poppedOut: y = !1,
            onToggleDebug: w,
            debugOpen: k = !1,
            onClose: N,
            refreshApplicationId: C,
            previewProjectId: A,
            onCloseMenu: I,
        } = e,
        M = (0, tL.iI)(t),
        _ = i.useContext(tR.bI),
        { pending: R, refresh: P } = (0, tC.A)(C ?? null),
        { pending: L, connect: $ } = (function (e, t) {
            let [n, l] = i.useState(t_),
                r = i.useRef(t_),
                a = i.useCallback((e) => {
                    ((r.current = (0, tE.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, tE.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, tM.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, tI.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, tE.rq)(l.error)
                                          ? E.intl.string(S.default["jCQ/1B"])
                                          : E.intl.string(S.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(A ?? null, tW),
        D = (0, o.bG)([tP.A], () => (null == A ? tV : tP.A.getDeclaredConnections(A))),
        O = i.useMemo(() => (0, tE.Xl)(D), [D]),
        q = (0, t$.Bs)(t),
        F = (0, t$.CU)(t) && s,
        U = (0, o.bG)(
            [ek.Ay],
            () => {
                let e = ek.Ay.getProject(t);
                return null != e && (0, ek.jf)(e);
            },
            [t],
        ),
        G = (function (e) {
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
        })({ canRefresh: null != C, refreshPending: R, offers: O, connectPending: L }),
        B = i.useMemo(() => new Map(D.map((e) => [e.type, e])), [D]),
        H = null != m && u,
        K = s && null != d,
        V = H || null != c || K || null != f || null != h,
        W = tS.p5 && null != l,
        X = tS.p5,
        Z = M ? td.BellIcon : tm.BellSlashIcon,
        Y = v ? tf.PlayIcon : th.PauseIcon,
        J = y ? tg._ : tp.t;
    return (0, a.jsxs)(eJ.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: I,
        onSelect: I,
        children: [
            null != g || null != x || null != b || null != N
                ? (0, a.jsxs)(eQ.rX, {
                      children: [
                          null != g
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "refresh",
                                    icon: tx.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: tx.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: p,
                                    action: g,
                                })
                              : null,
                          null != x
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: Y,
                                    leadingAccessory: { type: "icon", icon: Y },
                                    label: E.intl.string(v ? S.default.ZKd2Cw : S.default.VHxerm),
                                    disabled: j,
                                    action: x,
                                })
                              : null,
                          null != b
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "toggle-popout",
                                    icon: J,
                                    leadingAccessory: { type: "icon", icon: J },
                                    label: E.intl.string(y ? E.t["NKV/MO"] : E.t["3Zypbv"]),
                                    action: b,
                                })
                              : null,
                          null != N
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "close",
                                    icon: tv.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: tv.DoorExitIcon },
                                    label: E.intl.string(S.default["/TlGcK"]),
                                    action: N,
                                })
                              : null,
                      ],
                  })
                : null,
            null != w
                ? (0, a.jsx)(eQ.rX, {
                      children: (0, a.jsx)(eQ.sL, {
                          id: "debug",
                          label: E.intl.string(S.default.Mt5k9d),
                          leftIcon: tj.BugIcon,
                          leadingAccessory: { type: "icon", icon: tj.BugIcon },
                          checked: k,
                          action: w,
                      }),
                  })
                : null,
            G.length > 0
                ? (0, a.jsx)(eQ.rX, {
                      children: G.map((e) =>
                          (0, a.jsx)(
                              eQ.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void P();
                                      let t = null == e.connectionType ? null : B.get(e.connectionType);
                                      null != t && $(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(eQ.rX, {
                children: (0, a.jsx)(eQ.Dr, {
                    id: "mute",
                    label: E.intl.string(M ? S.default.s9rCuH : S.default["a+i/As"]),
                    icon: Z,
                    leadingAccessory: { type: "icon", icon: Z },
                    action: () => (0, tL.$L)(t, !M),
                }),
            }),
            V
                ? (0, a.jsxs)(eQ.rX, {
                      children: [
                          H
                              ? (0, a.jsx)(eQ.Dr, { id: "remix", label: E.intl.string(S.default.XWgAfc), action: m })
                              : null,
                          null != c
                              ? (0, a.jsx)(eQ.Dr, { id: "export", label: E.intl.string(S.default.WsEEP7), action: c })
                              : null,
                          K
                              ? (0, a.jsx)(eQ.Dr, { id: "import", label: E.intl.string(S.default.rWGY3e), action: d })
                              : null,
                          null != f
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(S.default.yOIql5),
                                    action: f,
                                })
                              : null,
                          null != h
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "history",
                                    label: E.intl.string(S.default["3hIVou"]),
                                    action: h,
                                })
                              : null,
                      ],
                  })
                : null,
            X
                ? (0, a.jsxs)(eQ.rX, {
                      children: [
                          W
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: tb.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: tb.LinkIcon },
                                    action: () =>
                                        (0, tS.C)((0, tA.n)(l, z.VV.CONJURE, t), () =>
                                            (0, eX.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eQ.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(S.default["nm/zuU"]),
                              icon: ty.L,
                              leadingAccessory: { type: "icon", icon: ty.L },
                              action: () =>
                                  (0, tS.C)(t, () =>
                                      (0, eX.P0)({ text: E.intl.string(S.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || U || q?.canRemoveBot === !0
                ? (0, a.jsxs)(eQ.rX, {
                      children: [
                          s || U
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "settings",
                                    label: E.intl.string(S.default.FzfmQ8),
                                    icon: tw.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: tw.SettingsIcon },
                                    action: () =>
                                        (0, tT.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: _,
                                        }),
                                })
                              : null,
                          q?.canRemoveBot === !0
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(S.default["3gKG2j"], { server: q.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = ek.Ay.getProject(t);
                                        null != e && tG({ project: e, target: q, action: "remove" });
                                    },
                                })
                              : null,
                          F
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(S.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = ek.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, tq.openModal)((t) => (0, a.jsx)(tH, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(eQ.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = ek.Ay.getProject(t);
                                        if (null != e && null != q) tG({ project: e, target: q, action: "delete" });
                                        else
                                            (0, tc.A)({
                                                title: E.intl.formatToPlainString(S.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(S.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, T.K)(t, () =>
                                                        (0, eX.P0)({
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
function tZ(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(eY.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eY.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tX, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: tK.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, a.jsx)(tk.K, {
                                  icon: tN.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(y.A.Icon, {
                              icon: tN.MoreHorizontalIcon,
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
var tY = n(95264);
function tJ(e, t) {
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
                    (0, eX.P0)({ text: E.intl.formatToPlainString(S.default.aN2JdD, { name: l }) }),
                    te(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[conjure] project export failed", n, e),
                                (0, eX.P0)({
                                    text:
                                        409 === (t = e instanceof e6 ? e.status : null)
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
                onImport: (s = tt(
                    i.useCallback(
                        (e) => {
                            let r = e9(e);
                            null != r
                                ? (0, eX.P0)({ text: r, variant: "critical" })
                                : (0, tc.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: l }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, u.pX)(q.BVt.CHANNEL(t, z.VV.CONJURE, n));
                                          try {
                                              await e8(n, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, eX.P0)({
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
        isOwner: (0, ek.PV)(e),
        canRemix: (0, ek.H_)(e),
        onRemix: () => (0, tY.A)(e, t),
        onExport: o,
    };
}
function tQ(e) {
    let { project: t, guildId: n } = e,
        l = tJ(t, n);
    return (0, a.jsx)(tX, { ...l, onCloseMenu: tu.Z_ });
}
function t0(e) {
    let { project: t, guildId: n } = e,
        l = tJ(t, n);
    return (0, a.jsx)(tZ, { ...l, trigger: "iconButton" });
}
var t1 = n(638693);
class t2 extends Error {}
function t3(e) {
    let { guildId: t, modelSettings: n, onClose: l } = e,
        r = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ts.Ot)(e, t)
                    ? (0, u.pX)(q.BVt.CHANNEL(t, z.VV.CONJURE, e.id))
                    : (0, ti.A)(e);
            },
            [t],
        ),
        s = i.useCallback((e) => (0, a.jsx)(t0, { project: e, guildId: t }), [t]),
        o = i.useCallback(
            (e, n) => {
                (0, tu.jA)(e, () => (0, a.jsx)(tQ, { project: n, guildId: t }));
            },
            [t],
        ),
        [c, d] = i.useState(!1),
        m = i.useCallback(
            async (e, l) => {
                let r = e9(e);
                if (null != r) return void (0, eX.P0)({ text: r, variant: "critical" });
                d(!0);
                try {
                    await F({
                        guildId: t,
                        installScope: l,
                        modelSettings: n,
                        start: async (t) => {
                            try {
                                await e8(t, e, E.intl.string(S.default["LUc7/5"]));
                            } catch {
                                throw (await (0, T.xx)(t).catch(() => void 0), new t2());
                            }
                        },
                    });
                } catch (e) {
                    (0, eX.P0)({
                        text: e instanceof t2 ? E.intl.string(S.default["Q+l4Hv"]) : (0, R.mG)(e),
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
        className: t1.pz,
        "aria-label": f,
        children: [
            (0, a.jsxs)("div", {
                className: t1.wx,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-strong", children: f }),
                    (0, a.jsxs)("div", {
                        className: t1.$s,
                        children: [
                            (0, a.jsx)(ta, { importing: c, onImport: m }),
                            (0, a.jsx)(y.A.Icon, { icon: eZ.P, tooltip: h, "aria-label": h, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(p.Ip, {
                className: t1.XG,
                children: (0, a.jsx)(to.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: s,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var t4 = n(559106),
    t5 = n(663341),
    t6 = n(783977),
    t7 = n(559647),
    t8 = n(531685),
    t9 = n(477262),
    ne = n(432017);
let nt = [
    {
        id: "add-images-videos",
        label: S.default["51+9lc"],
        icon: t9.s,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: S.default["10ljr2"],
        icon: ne.T,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: S.default.aotDee, icon: e0.H, accept: "" },
];
var nn = n(289873),
    nl = n(285796),
    nr = n(922329);
async function na(e) {
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
var ni = n(153171);
let ns = ea.lN;
function no(e, t, n, l) {
    let r = ed(e, t).length;
    ev(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= ns)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: E.intl.formatToPlainString(S.default.Q0aCVZ, { count: ns }),
                    },
                };
            if (!(0, ea.Oq)(e.size, t))
                return "image/png" === t && e.size <= ea.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await na(e).catch(() => null);
                              return null != n && (0, ea.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: ex(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: ex(t) } };
            let a = ea.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function nu(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = eu.useState((e) => ec(e, t, n)),
        a = i.useCallback((e) => no(t, n, e, l), [t, n, l]),
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
                null != (r = (l = ed(t, n)).find((t) => t.localId === e)) &&
                    (eg(t, r),
                    em(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => eb(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function nc(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(nr.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(nn.y, { type: nn.t.SPINNING_CIRCLE_SIMPLE, className: ni.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: ni.o1,
                onClick: () => n(t.localId),
                "aria-label": E.intl.string(S.default.Slam9g),
                children: (0, a.jsx)(nl.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var nd = n(900797),
    nm = n(320448),
    nf = n(344587),
    nh = n(534554),
    ng = n(392208),
    np = n(822313),
    nx = n(837984),
    nv = n(359589),
    nj = n(254575);
function nb(e) {
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
function ny(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = nb(d),
        g = ng.P.indexOf(t.tier),
        p = d ? nd.t : nm._,
        x = ng.P.map(nh.D0),
        j = (0, nh.Tc)(t.tier),
        { text: b, phase: y } = (0, nf.Q)(j);
    return (0, a.jsx)("div", {
        className: nj.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: h()(nj.t$, { [nj.Zr]: u && c, [nj.GF]: !u }),
            role: "dialog",
            "aria-label": E.intl.string(S.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: h()(nj.Nr, nj.uO, { [nj.Zr]: d && f.entered, [nj.GF]: !d }),
                          children: (0, a.jsx)(nv.b, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${nj.Nr} ${nj.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nj.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: nj.y6,
                                    "aria-expanded": d,
                                    "aria-label": E.intl.string((0, nh.FC)(l)),
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
                                            className: nj.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: h()(nj.Z, { [nj.xQ]: "exit" === y, [nj.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nj.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: nj.Nb,
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
                                (0, a.jsx)(nx.A, {
                                    activeIndex: g,
                                    stops: x,
                                    ariaLabel: E.intl.string(S.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = ng.P[e];
                                        null != n && n !== t.tier && s((0, nh.CM)((0, nh.j6)(t, n)));
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
function nw(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, np.A)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: p } = nb(f);
    return (0, a.jsx)(eY.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: eY.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(ny, {
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
                    className: o ?? nj.hZ,
                    "aria-label": E.intl.string(S.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(t6.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var nk = n(200160),
    nN = n(465410);
function nC(e) {
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
        className: nk.RC,
        children: [t[r].slice(0, s), l ? (0, a.jsx)("span", { className: nk.OW }) : null],
    });
}
function nA(e) {
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
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", className: nk.RC, children: t[l] });
}
function nS(e) {
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
        l = (0, o.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
        r = (0, o.bG)([t8.A], () => t8.A.isFocused()),
        s = t || !r;
    return (0, a.jsx)("div", {
        className: nk.qf,
        "aria-hidden": !0,
        children: l
            ? (0, a.jsx)(nA, { prompts: n, paused: s })
            : (0, a.jsx)(nC, { prompts: n, paused: s, showCaret: !t }),
    });
}
function nE(e) {
    let {
            idea: t,
            inputRef: n,
            onIdeaChange: l,
            onSubmit: r,
            submitting: s,
            submitDisabled: o,
            error: u,
            modelSettings: c,
            onModelSettingsChange: d,
            attachments: m,
        } = e,
        [f, g] = i.useState(!1),
        p = i.useRef(null),
        x = i.useId(),
        j = "" !== t,
        b = E.intl.string(E.t.d56gCa),
        y = i.useRef(null),
        w = i.useRef(null),
        { addFiles: k, pasteFiles: N, removeAttachment: C } = m,
        A = i.useCallback((e) => {
            let t = y.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        I = i.useCallback(
            (e) => {
                (k(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [k],
        );
    i.useLayoutEffect(() => {
        let e = n.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, n]);
    let M = i.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || r());
        },
        [o, r],
    );
    return (0, a.jsxs)("div", {
        className: nk.kL,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: h()(nk.yk, { [nk.Sl]: null != u }),
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: nk.Ox,
                        children: [
                            (0, a.jsx)(t4.vN, {
                                ringTarget: p,
                                ringClassName: nk.Rg,
                                children: (0, a.jsx)("textarea", {
                                    ref: n,
                                    className: h()(nk.hF, nN.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": E.intl.string(S.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? x : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: M,
                                    onPaste: (e) => N(e),
                                    onFocus: () => g(!0),
                                    onBlur: () => g(!1),
                                }),
                            }),
                            j ? null : (0, a.jsx)(nS, { boxFocused: f }),
                        ],
                    }),
                    m.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: nk.ZO,
                              children: m.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(nc, { draft: t, onRemove: C }, t.localId);
                              }),
                          })
                        : null,
                    (0, a.jsxs)("div", {
                        className: nk.KE,
                        children: [
                            (0, a.jsx)("input", {
                                ref: y,
                                type: "file",
                                multiple: !0,
                                onChange: I,
                                className: nk.Fg,
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                            (0, a.jsx)(eY.Y, {
                                targetElementRef: w,
                                position: "top",
                                align: "left",
                                animation: eY.Y.Animation.NONE,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(eJ.W, {
                                        "data-menu-migrated": !0,
                                        navId: "conjure-home-attach",
                                        "aria-label": b,
                                        onClose: t,
                                        onSelect: t,
                                        children: (0, a.jsx)(eQ.rX, {
                                            children: nt.map((e) =>
                                                (0, a.jsx)(
                                                    eQ.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => A(e.accept),
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
                                        ref: w,
                                        type: "button",
                                        className: nk.gb,
                                        disabled: s,
                                        "aria-label": b,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n,
                                        children: (0, a.jsx)(t5.PlusLargeIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                            className: nk.Xv,
                                        }),
                                    });
                                },
                            }),
                            (0, a.jsxs)("div", {
                                className: nk.Rc,
                                children: [
                                    (0, a.jsx)(nw, {
                                        settings: c ?? $,
                                        tiers: D,
                                        choices: L,
                                        disabled: s,
                                        onChange: d,
                                        className: nk.gb,
                                        icon: (0, a.jsx)(t6.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(eL.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: t7.SendMessageIcon,
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
                      id: x,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: u,
                  })
                : null,
        ],
    });
}
var nI = n(628284),
    nM = n(369606),
    n_ = n(926268),
    nR = n(406810),
    nP = n(707554),
    nT = n(651346);
function nL(e) {
    let { className: t } = e;
    return (0, a.jsx)("span", { className: h()(nT.n8, t) });
}
let n$ = [
        {
            id: "apps",
            title: S.default["bvcT/Q"],
            description: S.default.ArcJqa,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nT.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nT.My,
                            children: [
                                (0, a.jsx)("span", { className: nT._w }),
                                (0, a.jsx)("span", { className: nT._w }),
                                (0, a.jsx)("span", { className: nT._w }),
                            ],
                        }),
                        (0, a.jsx)(nL, { className: nT.Lm }),
                        (0, a.jsx)("div", {
                            className: nT.Oh,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nT.ZW,
                                        children: [
                                            (0, a.jsx)("span", { className: nT.NU }),
                                            0 === e
                                                ? (0, a.jsx)(nI.y, {
                                                      size: "xs",
                                                      color: k.A.colors.ICON_BRAND,
                                                      className: nT._6,
                                                  })
                                                : null,
                                            (0, a.jsx)(nL, { className: nT.Eg }),
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
                    className: h()(nT.x, nT.jG),
                    children: [
                        (0, a.jsx)("span", { className: h()(nT.gg, nT.K1) }),
                        (0, a.jsx)("span", { className: h()(nT.gg, nT.W2) }),
                        (0, a.jsx)("span", { className: h()(nT.Fs, nT.A$) }),
                        (0, a.jsx)("span", { className: h()(nT.Fs, nT.eP) }),
                        (0, a.jsx)("span", { className: h()(nT.Fs, nT.kc) }),
                        (0, a.jsx)("span", { className: h()(nT.Fs, nT.OE) }),
                        (0, a.jsx)("span", { className: nT.OC }),
                        (0, a.jsxs)("div", {
                            className: nT.si,
                            children: [
                                (0, a.jsx)(nM.TrophyIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: nT.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nT.KQ,
                            children: [
                                (0, a.jsx)(n_.HeartIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(n_.HeartIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(n_.HeartIcon, { size: "xxs", color: k.A.colors.ICON_OVERLAY_LIGHT }),
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
                    className: nT.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nT.$y,
                            children: [(0, a.jsx)("span", { className: nT.m$ }), (0, a.jsx)(nL, { className: nT.Md })],
                        }),
                        (0, a.jsxs)("div", {
                            className: nT.iU,
                            children: [
                                (0, a.jsx)("span", {
                                    className: h()(nT.my, nT.FY),
                                    children: (0, a.jsx)(eU.RobotIcon, {
                                        size: "xs",
                                        color: k.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: nT.OS,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: nT.f9,
                                            children: [
                                                (0, a.jsx)(nL, { className: nT.iE }),
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: nT.AO,
                                                    children: E.intl.string(S.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(nL, { className: nT.xs }),
                                        (0, a.jsx)(nL, { className: nT.Md }),
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
                    className: h()(nT.x, nT.ME),
                    children: [
                        (0, a.jsx)("span", { className: nT.CK }),
                        (0, a.jsxs)("div", {
                            className: nT.kI,
                            children: [
                                (0, a.jsx)("span", { className: h()(nT.my, nT.jU) }),
                                (0, a.jsx)(nL, { className: nT.iE }),
                                (0, a.jsxs)("div", {
                                    className: nT.Wy,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: nT.M1,
                                            children: [0, 1].map((e) =>
                                                (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        className: nT.dJ,
                                                        children: [
                                                            (0, a.jsx)(nL, { className: nT.cR }),
                                                            (0, a.jsx)(nL, { className: nT.Zh }),
                                                        ],
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: nT.bW,
                                            children: [0, 1, 2, 3, 4, 5].map((e) =>
                                                (0, a.jsx)("span", { className: nT.QR }, e),
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
                    className: nT.JH,
                    children: [
                        (0, a.jsx)("span", { className: nT.rx }),
                        (0, a.jsx)("span", { className: nT.ny }),
                        (0, a.jsx)("span", { className: nT.ZH }),
                        (0, a.jsx)("div", {
                            className: nT.$Y,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nT.fn,
                                        children: [
                                            (0, a.jsx)("span", { className: h()(nT._h, { [nT.zY]: 0 === e }) }),
                                            (0, a.jsx)(nL, { className: nT.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsxs)("div", {
                            className: nT.Y5,
                            children: [
                                (0, a.jsx)(nR.ClockIcon, { size: "xxs", color: k.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, a.jsx)(nL, { className: nT.jB }),
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
                    className: nT.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nT.iU,
                            children: [
                                (0, a.jsx)("span", { className: nT.my }),
                                (0, a.jsxs)("div", {
                                    className: nT.OS,
                                    children: [
                                        (0, a.jsx)(nL, { className: nT.iE }),
                                        (0, a.jsx)(nL, { className: h()(nT.xs, nT.pc) }),
                                        (0, a.jsx)(nL, { className: h()(nT.Md, nT.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nT.jC,
                            children: [
                                (0, a.jsx)(eF.ShieldIcon, { size: "sm", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsxs)("div", {
                                    className: nT.qQ,
                                    children: [
                                        (0, a.jsx)(nL, { className: h()(nT.Md, nT.k8) }),
                                        (0, a.jsx)(nL, { className: h()(nT.nq, nT.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    nD = i.memo(function () {
        let e = i.useId();
        return (0, a.jsx)("section", {
            className: nT.GG,
            "aria-labelledby": e,
            children: (0, a.jsx)(nP.F, {
                component: (0, a.jsx)(x.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: E.intl.string(S.default.IiQEVd),
                }),
                children: (0, a.jsx)("ul", {
                    className: nT.Vg,
                    children: n$.map((e) => {
                        let { id: t, title: n, description: l, Visual: r } = e;
                        return (0, a.jsxs)(
                            "li",
                            {
                                className: nT.Vs,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: nT.Tn,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(r, {}),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: nT.pG,
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
function nO(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let nq = 1;
function nz(e) {
    let t = nO(e),
        n = { localId: nq++, name: e.name, contentType: t };
    if (
        !(0, ea.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= ea.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...n, status: "error", errorText: ex(t) } };
    let l = ea.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: l } };
}
function nF(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function nU(e, t) {
    if ((0, ea.Oq)(t.size, nO(t))) return (0, ei.vX)(e, t);
    let n = await na(t);
    if (null == n || !(0, ea.Oq)(n.size, n.type)) throw Error("attachment over its size limit");
    return (0, ei.vX)(e, n);
}
var nG = n(698638),
    nB = n(606128),
    nH = n(260024);
class nK extends Error {}
function nV(e) {
    let t,
        { guildId: n } = e,
        [l, r] = i.useState("");
    (0, _.N$)(l);
    let [s, o] = i.useState(!1),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, w] = i.useState(() => G.w.get(B) ?? null ?? !0),
        k = i.useRef(null),
        N = i.useMemo(
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
        C = "user" === (0, b.o)().get(U.f_),
        A = (function () {
            let [e, t] = i.useState([]),
                n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => () => n.current.forEach(nF), []));
            let l = i.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(nz);
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
                    null != l && (nF(l), (n.current = n.current.filter((e) => e !== l)), t(n.current));
                }, []),
                s = i.useCallback(() => {
                    (n.current.forEach(nF), (n.current = []), t(n.current));
                }, []),
                o = i.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= ea.lN) return e;
                            let t = E.intl.formatToPlainString(S.default.Q0aCVZ, { count: ea.lN });
                            return e.map((e, n) =>
                                n < ea.lN || "error" === e.draft.status
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
        { attachments: I, addFiles: L, clear: $ } = A,
        D =
            "idea" ===
                (t = (function (e) {
                    let { idea: t, installScope: n, submitting: l } = e;
                    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
                })({ idea: l, installScope: null, submitting: s })) ||
            "submitting" === t ||
            A.hasErrors,
        O = i.useCallback((e) => L(Array.from(e)), [L]);
    (0, eT.p)(k);
    let q = i.useCallback((e) => {
            (r(e), c(null));
        }, []),
        z = i.useCallback(
            (e) => {
                q(e);
                let t = k.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [q],
        ),
        H = i.useRef(!1),
        K = i.useCallback(async () => {
            let e = l.trim();
            if ("" !== e && !H.current) {
                ((H.current = !0), o(!0), c(null));
                try {
                    await F({
                        guildId: n,
                        installScope: C ? "user" : null,
                        prompt: e,
                        modelSettings: d,
                        start: async (t) => {
                            let n = [];
                            if (I.length > 0)
                                try {
                                    n = await Promise.all(
                                        I.map((e) => {
                                            let { file: n } = e;
                                            return nU(t, n);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, T.xx)(t).catch(() => void 0), new nK());
                                }
                            (!(function (e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                                if (ek.Ay.getProject(e)?.install_scope_setup != null)
                                    G.w.set(eN, { ...eE(), [e]: { message: t, attachments: n, nonce: (0, V.m)() } });
                                else (0, P.sendUserMessage)(e, t, n);
                            })(t, e, n),
                                $());
                        },
                    });
                } catch (e) {
                    (c(e instanceof nK ? E.intl.string(S.default["903H7m"]) : (0, R.mG)(e)), (H.current = !1), o(!1));
                }
            }
        }, [l, C, d, n, I, $]),
        W = i.useCallback((e) => {
            (G.w.set(B, e), w(e));
        }, []),
        X = i.useCallback(() => W(!1), [W]),
        Z = E.intl.string(f ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: h()(nH.MY, nB.T),
        children: (0, a.jsxs)("div", {
            className: nH.Zp,
            children: [
                (0, a.jsxs)("main", {
                    className: nH.iW,
                    children: [
                        s
                            ? null
                            : (0, a.jsx)(j.A, {
                                  title: E.intl.string(S.default.gy7byi),
                                  description: E.intl.string(S.default["dkv/WO"]),
                                  icons: nG.ir,
                                  onDrop: O,
                              }),
                        (0, a.jsx)(M, {
                            title: E.intl.string(S.default.uk6jhJ),
                            transparent: !0,
                            actions: (0, a.jsx)(y.A.Icon, {
                                icon: g.Z,
                                color: "var(--icon-strong)",
                                className: nH.FW,
                                tooltip: Z,
                                "aria-label": Z,
                                selected: f,
                                onClick: () => W(!f),
                            }),
                        }),
                        (0, a.jsx)(p.Ip, {
                            className: nH.XG,
                            children: (0, a.jsxs)("div", {
                                className: nH.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nH.Lv,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: nH.ZK,
                                                children: [
                                                    (0, a.jsx)(x.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: nH.DD,
                                                        children: E.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: nH.VA,
                                                        children: E.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: nH.ZK,
                                                children: [
                                                    (0, a.jsx)(nE, {
                                                        idea: l,
                                                        inputRef: k,
                                                        onIdeaChange: q,
                                                        onSubmit: K,
                                                        submitting: s,
                                                        submitDisabled: D,
                                                        error: u,
                                                        modelSettings: d,
                                                        onModelSettingsChange: m,
                                                        attachments: A,
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
                                    (0, a.jsx)(eW, { inspirations: N, onCopyPrompt: z }),
                                    (0, a.jsx)(nD, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                f ? (0, a.jsx)(t3, { guildId: n, modelSettings: d, onClose: X }) : null,
            ],
        }),
    });
}
var nW = n(478016),
    nX = n(604525),
    nZ = n(534890),
    nY = n(646270),
    nJ = n(31300),
    nQ = n(831453),
    n0 = n(646973);
let n1 = Object.freeze({ x: 0.5, y: 0.5 });
function n2(e) {
    return "" !== e.trim();
}
function n3(e) {
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
function n4(e) {
    let { kind: t, name: n } = n3(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function n5(e) {
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
let n6 = "[conjure:selected] ",
    n7 = " \u2014 ";
function n8(e) {
    if (!e.startsWith(n6)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(n6.length),
        a = r.indexOf(n7),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let n9 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    le = new Map(),
    lt = new Set();
function ln(e) {
    return le.get(e) ?? n9;
}
function ll(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? le.set(e, t) : le.delete(e), [...lt]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function lr(e) {
    let t = ln(e);
    t.active || ll(e, { ...t, active: !0 });
}
function la(e) {
    let t = ln(e);
    t.active && ll(e, { ...t, active: !1 });
}
function li(e) {
    le.has(e) && ll(e, n9);
}
function ls(e, t) {
    let n = ln(e);
    n.active && ll(e, { ...n, context: t });
}
function lo(e, t) {
    return null != t && e.authorId === t;
}
function lu(e) {
    return (
        lt.add(e),
        () => {
            lt.delete(e);
        }
    );
}
function lc(e) {
    let t = i.useCallback(() => (null == e ? n9 : ln(e)), [e]);
    return i.useSyncExternalStore(lu, t, t);
}
(n(134528), n(947204));
let ld = { past: [], present: [], future: [] };
function lm(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function lf(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function lh(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => lf(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: lf(e.from, t, n), to: lf(e.to, t, n) };
        case "text":
            return { ...e, at: lf(e.at, t, n) };
    }
}
function lg(e) {
    return e.some((e) => "erase" !== e.kind);
}
function lp(e, t) {
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
function lx(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function lv(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function lj(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => lv(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = lv(e.from, t),
                l = lv(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = lv(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function lb(e) {
    return lg(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let ly = [3, 6, 12],
    lw = [10, 20, 40],
    lk = (0, er.D)(() => ({ byProject: {} })),
    lN = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: ld,
        sketchDismissedFor: null,
    };
function lC(e) {
    return lk.getState().byProject[e] ?? null;
}
function lA(e, t) {
    let n = lC(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = lk.getState();
    lk.setState({ byProject: { ...r, [e]: l } });
}
function lS(e) {
    if (null == lC(e)) return;
    let { [e]: t, ...n } = lk.getState().byProject;
    (lk.setState({ byProject: n }), li(e));
}
function lE(e, t) {
    null != lC(e) &&
        (lA(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? lr(e) : la(e));
}
function lI(e, t) {
    lA(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return lm(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return lm(
                        e,
                        e.present.map((e) => (e.id === t.id ? lh(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : lm(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : lm(e, []);
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
function lM(e) {
    return lk.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var l_ = n(39416);
function lR(e) {
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
            className: l_.i5,
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
var lP = n(91242),
    lT = n(457827),
    lL = n(802905),
    l$ = n(573083);
function lD(e) {
    return X.A.isThinking(e) || (0, l$.wK)(e);
}
var lO = n(35525),
    lq = n(881511);
let lz = new Set();
function lF(e, t) {
    if (!(lz.has(t) || (lD(e) && !lL.A.isPaused(e))))
        for (let e of lP.A.getAllFrames())
            e.applicationId === t &&
                (0, lq.D)(e) &&
                !(lO.A.isInHostWindow(e) || (lO.A.isActivityPopoutOpen() && lP.A.getMainFrame()?.id === e.id)) &&
                (0, lT.r)(e.id);
}
var lU = n(766367);
let lG = new Set(),
    lB = null;
function lH(e, t) {
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
                lG.add(t),
                () => {
                    lG.delete(t);
                }
            );
        }, [e]));
}
var lK = n(885386);
function lV() {
    return lK.Q_.useSetting() || !1;
}
var lW = n(128761),
    lX = n(12177),
    lZ = n(967008),
    lY = n(513845),
    lJ = n(951178);
let lQ = { width: 320, height: 240 };
function l0(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t].proposal?.overlay_widget;
        if (null != n) return n;
    }
    return null;
}
function l1(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : lQ;
}
var l2 = n(855859),
    l3 = n(238490),
    l4 = n(991690),
    l5 = n(696645);
function l6(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function l7(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, l5.X)(e.surface)
                : E.intl.formatToPlainString(S.default["6xVl+N"], {
                      surface: (0, l5.X)(e.surface),
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
var l8 = n(939398),
    l9 = n(86147),
    re = n(729475),
    rt = n(156548),
    rn = n(869146),
    rl = n(475815),
    rr = n(165610);
function ra(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, rt.cR)(t?.id ?? null),
        r = (0, l$.Zv)(n),
        i = (0, o.bG)(
            [rn.A, lP.A],
            () => null != t && rn.A.getWindowOpen(q.MLl.ACTIVITY_POPOUT) && lP.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, rr.x1)(t) || i || r) return null;
    let s = (0, rt.fl)(t.id);
    if (null == s || !(0, rl.Ub)(s)) return null;
    let u = E.intl.string(l ? E.t.Z7MyNB : E.t.OIDkcp);
    return (0, a.jsx)(y.A.Icon, {
        tooltip: u,
        icon: l ? l9.z : re.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, rt.U8)(t.id),
    });
}
var ri = n(847374),
    rs = n(704745);
function ro(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = E.intl.string(S.default.I2ucou);
    return (0, a.jsx)(eY.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: eY.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eJ.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eQ.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = l6(e);
                        return (0, a.jsx)(
                            eQ.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: l7(e),
                                checked: t === l6(n),
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
            return (0, a.jsx)(t4.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: rs.h,
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
                            children: l7(n),
                        }),
                        (0, a.jsx)(ri.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var ru = n(324641),
    rc = n(627363),
    rd = n(153207),
    rm = n(803101),
    rf = n(226178),
    rh = n(625180),
    rg = n(672929),
    rp = n(111534),
    rx = n(754027),
    rv = n(722701),
    rj = n(962998),
    rb = n(373540),
    ry = n(144228);
function rw(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, o] = i.useState(t.selected_destination_id),
        u = E.intl.string(S.default.lJrOGW);
    return (0, a.jsx)(tD.a, {
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
        children: (0, a.jsx)(ry.z, {
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
let rk = {
    showPublishBlocked: rb.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, tq.openModal)(
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
    showError: (e) => (0, eX.P0)({ text: e, variant: "critical" }),
};
function rN(e) {
    return null != e && e.upToDate && "publish" === e.action && !e.awaitingApproval;
}
var rC = n(811587);
let rA = "conjure-publish";
function rS(e, t, l) {
    let r = i.useContext(tR.bI),
        s = l ?? r;
    return i.useCallback(
        (l) => {
            if (null == e || null == t || null == s || t.disabled) return;
            let r = t.status?.publishState;
            if (t.awaitingApproval || (null != r && (0, rC.lE)(r))) t.run(l);
            else {
                var i;
                let t, r;
                ((i = { projectId: e, publishOptions: s, entryPoint: l }),
                    (t = (0, tq.getInteractingModalContext)()),
                    (r = { current: !1 }),
                    (0, tq.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("880475"), n.e("801342"), n.e("744668")]).then(
                                n.bind(n, 815895),
                            );
                            return (t) => (0, a.jsx)(e, { ...t, ...i, savingRef: r });
                        },
                        {
                            modalKey: rA,
                            contextKey: t,
                            onCloseRequest: () => {
                                r.current || (0, tq.closeModal)(rA, t);
                            },
                        },
                    ));
            }
        },
        [e, t, s],
    );
}
var rE = n(58736),
    rI = n(333007),
    rM = n(775121),
    r_ = n(826745),
    rR = n(470779);
function rP(e) {
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
            removeDraft: w,
            settled: k,
            takeRefs: C,
        } = nu({ projectId: t, surface: "design", onUploadFile: f }),
        A = i.useRef(null),
        I = (d || j.length > 0) && k && !m,
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
        O = l.top + 8,
        q = Math.max(n.x, D),
        z = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, O), Math.max(O, l.top + l.height - $ - 8));
    return (0, a.jsxs)("div", {
        ref: P,
        className: h()(rR.M0, { [rR.ho]: _ && !m, [rR.ET]: m }),
        style: { left: q, top: z },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: rR.Fg,
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
                                  className: rR.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(e0.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: rR.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(r_.y, {
                autoFocus: !0,
                rows: 1,
                className: rR.hF,
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
                      className: rR.ZO,
                      children: j.map((e) => (0, a.jsx)(nc, { draft: e, onRemove: w }, e.localId)),
                  })
                : null,
        ],
    });
}
function rT(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function rL(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function r$(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? rT(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = rT(e());
                l((e) => (rL(e, t) ? e : t));
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
var rD = n(876798),
    rO = n(48507),
    rq = n(193885),
    rz = n(744898),
    rF = n(803656),
    rU = n(241326),
    rG = n(972213);
function rB(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rH(e, t, n) {
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
let rK = rH("red", rB(k.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    rV = [
        rK,
        rH("yellow", rB(k.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        rH("green", rB(k.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        rH("blue", rB(k.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        rH("white", rB(k.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
    ];
function rW(e) {
    return rV.find((t) => t.id === e) ?? rK;
}
function rX(e) {
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
function rZ(e) {
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
function rY(e) {
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
function rJ(e) {
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
let rQ = ly.map((e) => rJ(Math.min(16, e + 3))),
    r0 = lw.map((e) => rJ(Math.min(16, e / 2.5))),
    r1 = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
    r2 = {
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
function r3(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: l_.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(rD.k, {
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
function r4(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tk.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function r5(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: l_.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: l_.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function r6(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rW(n.colorId),
        h = r2[u],
        g = E.intl.string(S.default.hUm825),
        p = E.intl.string(S.default.n5IA3a),
        x = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: l_.t$,
        children: [
            (0, a.jsx)("div", {
                className: l_.NT,
                children: (0, a.jsx)(r3, {
                    icon: rZ,
                    label: E.intl.string(S.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => lE(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: l_.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(S.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(r3, {
                        icon: rX,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => lE(t, "move"),
                    }),
                    (0, a.jsx)(r3, {
                        icon: rO.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => lE(t, "text"),
                    }),
                    (0, a.jsx)(r5, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(r3, {
                                icon: rq.V,
                                label: g,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (lE(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rQ.map((n, l) =>
                                (0, a.jsx)(
                                    r3,
                                    {
                                        icon: n,
                                        label: E.intl.string(r1[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (lA(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), la(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r5, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(r3, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (lE(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(r2).map((n) =>
                                (0, a.jsx)(
                                    r3,
                                    {
                                        icon: r2[n].icon,
                                        label: r2[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (lE(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r5, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(r3, {
                                icon: rY,
                                label: p,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (lE(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            r0.map((n, l) =>
                                (0, a.jsx)(
                                    r3,
                                    {
                                        icon: n,
                                        label: E.intl.string(r1[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (lA(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), la(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r5, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(r4, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rV.map((n) =>
                                (0, a.jsx)(
                                    r3,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                lA(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: l_.Gz, role: "separator" }),
                    (0, a.jsx)(r4, {
                        icon: rz.e,
                        label: E.intl.string((0, e2.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(r4, {
                        icon: rF.U,
                        label: E.intl.string((0, e2.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(r4, {
                        icon: rU.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: l_.Gz, role: "separator" }),
                    (0, a.jsx)(r4, { icon: rG.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let r7 = k.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function r8(e, t, n) {
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
                    (e.strokeStyle = r7),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function r9(e) {
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
async function ae(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = r9(e),
            r = r9(e);
        if (null == l || null == r) return null;
        return (r8(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let at = new Map(),
    an = new Map(),
    al = (0, er.D)(() => ({ byMessageKey: {} }));
function ar(e, t) {
    let { [e]: n, ...l } = al.getState().byMessageKey;
    al.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function aa(e, t) {
    null == t ? at.delete(e) : at.set(e, t);
}
function ai(e) {
    return at.get(e)?.() ?? Promise.resolve(null);
}
let as = { dx: 0, dy: 0 },
    ao = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    au = 1;
function ac(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = lM(s),
        { active: u } = lc(s),
        c = (0, tq.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => lS(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && lr(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(ad, { projectId: s, state: o, resolveIframe: r });
}
function ad(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = r$(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [g, p] = i.useState(as),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        w = i.useRef(null),
        k = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = rW(n.colorId),
        M = "pick" !== C,
        _ = "marker" === n.tool ? ly[n.markerSize] : "eraser" === n.tool ? lw[n.eraserSize] : null,
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
        let t = await (0, ru.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, rI.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, ru.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (aa(t, T), () => aa(t, null)), [t, T]);
    let L = i.useCallback(
        (e) => {
            ((k.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === N.current &&
                    (N.current = requestAnimationFrame(() => {
                        N.current = 0;
                        let e = w.current,
                            t = k.current;
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
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? lh(e, g.dx, g.dy) : e)),
            o = j.current;
        r8(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, A.present, g]);
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
                id: `mark-${au++}`,
                kind: "text",
                color: I.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (lp(n, r) && lI(t, { type: "commit", shape: n }), o(null));
        }, [t, I, r]),
        q = i.useCallback(() => {
            ((y.current = null), o(null));
        }, []),
        z = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != y.current) return void O();
                let t = D(e);
                switch (C) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == R ? null : lj(R, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? R
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = lv(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => lv(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (lx(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = lv(e.from, n),
                                                                  r = lv(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => lx(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = lv(e.from, n),
                                                                  r = lv(e.to, n),
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
                                                              let t = lj(e, n);
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
                        if (!lg(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${au++}`,
                                kind: "erase",
                                width: lw[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${au++}`,
                                kind: "marker",
                                color: I.value,
                                width: ly[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${au++}`,
                                kind: C,
                                color: I.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                $();
            },
            [r, C, I, R, A.present, n.markerSize, n.eraserSize, D, O, $],
        ),
        F = i.useCallback(
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
                ((b.current = null), p(as), lI(t, { type: "move", id: e.id, dx: g.dx, dy: g.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && lp(n, r) ? lI(t, { type: "commit", shape: n }) : $());
        }, [t, r, g, $]),
        G = i.useCallback(() => lS(t), [t]),
        B = i.useCallback(() => lI(t, { type: "undo" }), [t]),
        H = i.useCallback(() => lI(t, { type: "redo" }), [t]),
        K = i.useCallback(() => lI(t, { type: "clear" }), [t]),
        V = i.useRef({ tool: C, selected: R, exit: G, undo: B, redo: H });
    if (
        (i.useLayoutEffect(() => {
            V.current = { tool: C, selected: R, exit: G, undo: B, redo: H };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, eB.Cw)((0, eB.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), lI(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = ao[s];
                null != o && (e.preventDefault(), lE(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (M) return (rM.A.disable(), () => rM.A.enable());
        }, [M]),
        null == r)
    )
        return null;
    let W = Math.max(8, r.left - d - 8),
        X = null == R ? null : lj(null == b.current ? R : lh(R, g.dx, g.dy), r);
    return (0, rI.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: l_.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: l_.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: l_.Ji,
                            "data-tool": C,
                            "data-interactive": M && !u ? "" : void 0,
                            "aria-label": E.intl.string(S.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: z,
                            onPointerEnter: L,
                            onPointerLeave: () => L(null),
                            onPointerMove: F,
                            onPointerUp: U,
                            onPointerCancel: U,
                        }),
                        null == _ || u
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: w,
                                  className: l_.V$,
                                  "data-tool": C,
                                  "data-color": I.id,
                                  style: { width: _, height: _ },
                                  "aria-hidden": !0,
                              }),
                        null == X
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: l_.r1,
                                  style: { left: X.x, top: X.y, width: X.width, height: X.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: l_.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: l_.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: l_.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: l_.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(rP, {
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
                          onUploadFile: (e) => (0, ei.vX)(t, e),
                          onDismiss: q,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: l_.ej,
                    style: { left: W, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(r6, { projectId: t, state: n, onExit: G, onUndo: B, onRedo: H, onClear: K }),
                }),
            ],
        }),
        document.body,
    );
}
var am = n(308081),
    af = n(689175),
    ah = n(683071),
    ag = n(218394),
    ap = n(115982),
    ax = n(886540);
function av(e) {
    return !(0, ax.BL)(e) && !0 !== e.stopRequested;
}
var aj = n(104317),
    ab = n(643278),
    ay = n(566424),
    aw = n(683063),
    ak = n(140735),
    aN = n(138212);
function aC(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: h()(aN.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: h()(aN.wx, null != n && aN.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var aA = n(148590);
function aS(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function aE(e) {
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
        j = f ? ri.a : nm._,
        b = null != n || l;
    return (0, a.jsxs)(aC, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: aA.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(C.D, {
                                className: aA.L$,
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
        headerClassName: f ? void 0 : aA.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: h()(aA.rf, o), hidden: !f, children: c })],
    });
}
var aI = n(883646);
let aM = [];
function a_(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: h()(aI.xL, {
            [aI.Vb]: "in_progress" === t,
            [aI.cT]: "completed" === t,
            [aI.GZ]: "unfinished" === t,
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
            (0, a.jsx)(nn.y, {
                type: nn.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: aI.Qd,
                itemClassName: aI.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: aI.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: aI.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function aR(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : aM), [n, t]),
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
        className: aI.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    aw.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: aI.MA,
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
                      className: aI.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function aP(e) {
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
            ((t = (r ?? aM).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? aM),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: aI.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: h()(aI.AS, { [aI.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(a_, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: aI.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: aI.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(aR, { agents: u.get(e.id) ?? aM, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: aI.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(a_, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: aI.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: aI.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function aT(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(aE, {
        title: E.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(aS, { children: c }),
        superseded: s,
        showLabel: E.intl.string(S.default.RKyN9q),
        hideLabel: E.intl.string(S.default.xydHoj),
        className: aI.Nr,
        bodyClassName: aI.rf,
        beforeBody: r && !s ? (0, a.jsx)(ak.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(aP, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var aL = n(308665),
    a$ = n(59678),
    aD = n(903847);
function aO(e) {
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
    let [w, k] = i.useState(!1),
        [A, I] = i.useState(!1),
        [M, _] = i.useState(v);
    (M !== v && (_(v), v ? k(!0) : I(!1)),
        i.useEffect(() => {
            if (v || !w) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [v, w]),
        i.useEffect(() => {
            if (!w || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => I(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [w, v]));
    let R = null != l && l.length > 0,
        P = i.useCallback(() => j((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: aD.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(aD.vK, { [aD.ho]: p && c, [aD.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(aD.Rk, a$.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(ay.A, {
                                        glyph: (0, a.jsx)(aL.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(C.D, {
                                    className: aD.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: h()(aD.Rk, a$.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(ay.A, {
                                            glyph: (0, a.jsx)(aL.A, {}),
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
                                        className: aD.BO,
                                        onClick: P,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(ab.ClipboardListIcon, {
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
                  w && R
                      ? (0, a.jsx)("div", {
                            className: h()(aD.vB, { [aD.pg]: v && A, [aD.ui]: !v }),
                            children: (0, a.jsx)(aT, {
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
var aq = n(16619);
function az(e) {
    let t = (0, aq.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var aF = n(736553),
    aU = n(642785);
async function aG(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, aU.dv)(e),
        i = new aF.u();
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
var aB = n(890497),
    aH = n(103557),
    aK = n(29073),
    aV = n(590077);
function aW(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = az(e),
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
                w = i.useMemo(() => {
                    let e = s ?? y;
                    return b.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, b]),
                k = i.useMemo(() => b.filter((e) => w.includes(e.projectId)), [b, w]),
                N = i.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                C = d.trim(),
                A = n && !f && (k.length > 0 ? "" !== C : u.length > 0),
                I = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : ey(
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
                    if (0 === k.length) return void I(u);
                    (h(!0), p(!1));
                    let l =
                        ((t = ek.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        k.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, V.m)() }), x.current.set(e.projectId, t)),
                                aG(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = k.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: C }))];
                        if (t.length === k.length || v.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), o(k.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [A, I, u, e, k, C]),
                _ = i.useCallback(() => {
                    ((v.current = !0), u.length > 0 && !f && I(u), l());
                }, [I, u, l, f]);
            return {
                projects: b,
                targetIds: w,
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
        className: h()(aK.nd, aK.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: aK.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: aK.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tk.K, {
                        icon: eZ.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(S.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: aV.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(aB.Z, {
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
                    (0, a.jsx)(aH.f, {
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
                className: aK.qr,
                children: (0, a.jsx)("div", {
                    className: aK.zt,
                    children: (0, a.jsx)(eL.$, {
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
var aX = n(658675),
    aZ = n(22231),
    aY = n(123292),
    aJ = n(691885),
    aQ = n(360047);
function a0(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: o } = e,
        u = i.useMemo(() => aQ.Hi.map((e) => ({ id: e, value: e, label: (0, aQ.hU)(e) })), []);
    return (0, a.jsx)(aJ.l, {
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
var a1 = n(734057),
    a2 = n(287809);
function a3(e) {
    return 0 === e.options.length && null == e.input;
}
let a4 = {
        [q.rbe.GUILD_TEXT]: "text",
        [q.rbe.GUILD_VOICE]: "voice",
        [q.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [q.rbe.GUILD_STAGE_VOICE]: "stage",
        [q.rbe.GUILD_FORUM]: "forum",
        [q.rbe.GUILD_MEDIA]: "media",
    },
    a5 = { channel: "#", role: "@", user: "@", project: "", server: "" },
    a6 = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
        server: [S.default.ZWXDeI, S.default.ZWXDeI],
    };
function a7(e, t) {
    return E.intl.string(a6[e][+!!t]);
}
var a8 = n(155078);
function a9(e) {
    return e.options.some((e) => null != e.image);
}
let ie = [];
function it(e, t) {
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
var il = n(548118),
    ir = n(300344),
    ia = n(614733),
    ii = n(904363),
    is = n(950902),
    io = n(384017);
function iu(e) {
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
                        let l = null == (n = a1.A.getChannel(t)?.type) ? void 0 : a4[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = a2.default.getUser(t)?.username;
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
        className: io.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(aB.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(aB.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function ic(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, ir.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(iu, { ...l, guildId: t, options: r, placeholder: a7("channel", !0 === l.question.multi_select) });
}
function id(e) {
    let { guildId: t, ...n } = e,
        l = (0, ii.A)(t);
    return (0, a.jsx)(iu, { ...n, guildId: t, options: l, placeholder: a7("role", !0 === n.question.multi_select) });
}
function im(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, ia.A)(t);
    return (0, a.jsx)(iu, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: a7("user", !0 === n.question.multi_select),
    });
}
function ih(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = az(t),
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
    return 0 === s.length ? n : (0, a.jsx)(iu, { ...l, options: s, placeholder: a7("project", !1) });
}
function ig(e) {
    let t = e.target;
    (0, eB.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function ip(e) {
    let { fallback: t, ...n } = e,
        l = (0, aq.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(il.Ay, { guild: e, size: il.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: ig,
              onMouseUp: ig,
              children: (0, a.jsx)(iu, { ...n, options: r, placeholder: a7("server", !1) }),
          });
}
function ix(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, is.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(ih, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(ip, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(ic, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(id, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(im, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var iv = n(87221),
    ij = n(26430),
    ib = n(750943),
    iy = n(95477),
    iw = n(256905),
    ik = n(490707),
    iN = n(907702);
function iC(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, ik._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(iN.Gt, iN.b6),
              children: [
                  (0, a.jsx)(iv.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(iN.Gt, { [iN.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: iN.Sl,
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
function iA(e) {
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
        className: h()(iN.Vs, { [iN.Q9]: s, [iN.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: iN.Up,
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
                        className: iN.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(iC, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: iN.Gt }),
                            (0, a.jsx)("span", {
                                className: iN.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(aX.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(ry.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: iN.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, a8.E)(t) : "")
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
                      className: iN.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(tk.K, {
                              icon: rU.TrashIcon,
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
                        className: iN.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(tk.K, {
                                icon: ij._,
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
function iS(e) {
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
                    Promise.all(t.map((e) => (0, ei.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, iw.R)({
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
        w =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: E.intl.string(S.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: iN.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: g,
                className: h()(iN.fF, "gallery" === f ? iN.nV : iN.nM, { [iN.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            iA,
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
                    null != w
                        ? (0, a.jsx)(
                              iA,
                              {
                                  projectId: n,
                                  option: w,
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
                              w.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(iE, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function iE(e) {
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
        className: iN.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: iN.QJ,
                children: [
                    (0, a.jsx)(eL.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: ib.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(eL.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: tb.LinkIcon,
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
                        className: iN.Fg,
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
                                        (0, ea.Oq)(a.size, r)
                                            ? (0, ei.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: ex(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: iN.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: iN.Hs,
                              children: (0, a.jsx)(iy.k, {
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
                              className: iN.gd,
                              children: [
                                  (0, a.jsx)(eL.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(S.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(aY.Q, {
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
function iI(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(io.uK, { [io.ue]: l, [io.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: io.dy, children: (0, a.jsx)(aX.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: io.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: io.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: io.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: io.ed,
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
                      className: io.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function iM(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return a9(n)
        ? (0, a.jsx)(iS, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      iI,
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
let i_ = [],
    iR = [];
function iP(e) {
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
        className: h()(io.Ge, io.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: io.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(iM, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: it(o, u),
            }),
            a9(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: io.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: io.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(aZ.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(io.Pu, io.es), children: c }),
                      ],
                  }),
        ],
    });
}
function iT(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: o,
            onBack: u,
            backText: c,
            hideSubmit: d = !1,
            headingLines: m = 5,
        } = e,
        [f, g] = i.useState({}),
        [p, x] = i.useState({}),
        [j, b] = i.useState({}),
        [y, w] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [k, A] = i.useState({}),
        [I, M] = i.useState({}),
        [_, R] = i.useState(!1),
        [P, T] = i.useState(0),
        [L, $] = i.useState(null),
        [D, O] = i.useState(null),
        [q, z] = i.useState(null),
        [F, U] = i.useState(!1),
        G = i.useRef(null),
        [B, H] = i.useState(null),
        K = i.useRef(null),
        V = i.useRef(0),
        W = null == r,
        X = l.questions.length,
        Z = Math.min(P, X - 1),
        Y = l.questions[Z],
        [J, Q] = i.useState({ id: Y.id, expanded: !1 }),
        ee = J.id === Y.id && J.expanded,
        [et, en] = i.useState(null),
        el = p[Y.id] ?? "",
        er = !0 === Y.multi_select,
        ea = a9(Y),
        es = er ? (j[Y.id] ?? i_) : ((t = f[Y.id]), t?.kind === "option" ? [t.optionId] : ie),
        eo = (function (e, t, n) {
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
                        if (o) return it(h, m(i));
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
                                    null != l && (0, ei.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, ei.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                (0, ei.gm)(e, t).then(
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
        })(n, f, g),
        eu = eo.imageFor(Y.id),
        ec = eo.selectedFor(Y),
        { text: ed, phase: em } = (0, nf.Q)(Y.question),
        ef = ed === Y.question,
        eh = ef && et?.id === Y.id && et.truncated;
    i.useLayoutEffect(() => {
        if (null == B || ee || !ef) return;
        function e() {
            if (null == B) return;
            let e = B.scrollHeight > B.clientHeight + 1;
            en((t) => (t?.id === Y.id && t.truncated === e ? t : { id: Y.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(B), () => t.disconnect());
    }, [ef, B, Y.id, ee]);
    let eg = E.intl.string(ee ? E.t.iTcuma : E.t.dcl9MQ),
        ep = i.useCallback(
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
                                              return (0, aQ.Ol)(n, e, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, I, r);
            },
            [l, I, r, n],
        ),
        ex = i.useCallback(
            (e, t) => {
                V.current += 1;
                let n = V.current;
                ($({ direction: t, moves: n }),
                    O({ question: Y, draft: el, selected: es, ownImage: eu, ownSelected: ec, direction: t, moves: n }),
                    U(!0),
                    T(e));
            },
            [el, eu, ec, Y, es],
        ),
        ev = i.useCallback(() => {
            let e = G.current,
                t = K.current;
            null != e && null != t && z({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = G.current,
            t = K.current;
        if (null == e || null == t) return;
        ev();
        let n = new ResizeObserver(ev);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ev]);
    let ej = L?.moves;
    i.useEffect(() => {
        if (null == ej) return;
        let e = setTimeout(() => O(null), 400),
            t = setTimeout(() => U(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ej]);
    let eb = i.useCallback(
            (e) => {
                if (W) return;
                let t = { ...f, [Y.id]: e };
                g(t);
                let n =
                    Z < l.questions.length - 1
                        ? Z + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, Z);
                null == n ? ep(t) : ex(n, n < Z ? "back" : "forward");
            },
            [f, l, W, Z, Y.id, ep, ex],
        ),
        ey = i.useCallback(() => {
            W || 0 === Z || ex(Z - 1, "back");
        }, [W, Z, ex]),
        ew = 0 !== Z || W ? void 0 : u,
        ek = (Z > 0 && !W) || null != ew,
        eN = i.useCallback(
            (e) => {
                x((e) => ({ ...e, [Y.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                ea ? W || g((e) => ({ ...e, [Y.id]: t })) : eb(t);
            },
            [W, ea, Y.id, eb],
        ),
        { multiPartFor: eC } = eo,
        eA = i.useMemo(() => {
            var e;
            let t, n;
            return er
                ? ((e = eC(Y)),
                  (t = el.trim()),
                  (n = Y.options.filter((e) => es.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: es,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [el, er, eC, Y, es]),
        eS = y[Y.id] ?? iR,
        eE = i.useMemo(() => {
            var e, t;
            let n;
            return null != Y.input
                ? ((e = Y.input),
                  (t = k[Y.id]),
                  (n = el.trim()),
                  {
                      kind: "entities",
                      entities: eS,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eS.map((t) => (t.name.startsWith(a5[e]) ? t.name : `${a5[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [el, k, eS, Y.id, Y.input]),
        eI = i.useCallback(
            (e, t) => {
                (w((t) => ({ ...t, [Y.id]: e })), A((e) => ({ ...e, [Y.id]: t })));
            },
            [Y.id],
        ),
        eM = i.useCallback(() => R(!0), []),
        e_ = i.useCallback(() => R(!1), []),
        eR = eo.controlsFor(Y, W),
        eP = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eE, eA, el),
            [el, eA, eE],
        ),
        eT = i.useCallback(() => {
            null != eP && eb(eP);
        }, [eP, eb]),
        [e$, eD] = i.useState(!1),
        [eO, eq] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eD(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ez = i.useCallback(() => {
            null != s && (eq(!0), setTimeout(s, 150));
        }, [s]),
        eF = eP ?? (null == eE && null == eA ? (f[Y.id] ?? null) : null),
        eU = null != eF && !W,
        eG = Z === X - 1,
        eH = i.useCallback(() => {
            null == eF || W || eb(eF);
        }, [W, eF, eb]),
        eK = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, eB.vq)(e.target, HTMLTextAreaElement) ||
                    (0, eB.vq)(e.target, HTMLInputElement) ||
                    ((!(0, eB.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ek
                            ? (e.preventDefault(), (ew ?? ey)())
                            : "ArrowRight" === e.key && eU && (e.preventDefault(), eH())));
            },
            [ew, ek, eU, ey, eH],
        ),
        eV = ea
            ? null
            : (0, a.jsxs)("div", {
                  className: io.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: io.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(aZ.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(r_.y, {
                          value: el,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              x((e) => ({ ...e, [Y.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eT());
                          },
                          placeholder: E.intl.string(a3(Y) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: Y.question }),
                          disabled: W,
                          rows: 1,
                          className: io.Pu,
                          "data-conjure-clarification-other": Y.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(io.$O, { [io.fI]: e$ && !eO, [io.Oh]: eO }),
        role: "dialog",
        "aria-label": Y.question,
        "data-conjure-clarification": l.id,
        "data-state": W ? "inert" : "open",
        "data-question-expanded": ee ? "true" : void 0,
        "data-picker-open": _ && !F ? "true" : void 0,
        "data-step": Z,
        tabIndex: -1,
        onKeyDown: eK,
        children: [
            (0, a.jsxs)("div", {
                className: io.rf,
                style: null == q ? void 0 : { height: q.heading + q.rows },
                "data-moving": F ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: G,
                        className: io.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: H,
                                tag: "span",
                                id: `${Y.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: ee ? void 0 : m,
                                className: h()(aK.TK, io.R_, { [io.TB]: "exit" === em, [io.JU]: "enter" === em }),
                                children: ed,
                            }),
                            eh || ee
                                ? (0, a.jsx)("div", {
                                      className: aK.Q7,
                                      children: (0, a.jsx)(N.m, {
                                          text: eg,
                                          children: (0, a.jsx)(tk.K, {
                                              icon: ee ? nd.t : ri.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => Q({ id: Y.id, expanded: !ee }),
                                              "aria-label": eg,
                                              "aria-controls": `${Y.id}-label`,
                                              "aria-expanded": ee,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(C.D, {
                                      className: h()(aK.gb, aK.Q7),
                                      onClick: ez,
                                      "aria-label": E.intl.string(S.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(eZ.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: io.Cg,
                        style: null == q ? void 0 : { insetBlockStart: q.heading },
                        children: (0, a.jsxs)("div", {
                            className: io.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: K,
                                    className: io.Ge,
                                    role: "group",
                                    "aria-labelledby": `${Y.id}-label`,
                                    "data-direction": L?.direction,
                                    "data-parity": null == L ? void 0 : L.moves % 2,
                                    children: [
                                        er
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: io.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(iM, {
                                            projectId: n,
                                            question: Y,
                                            selected: es,
                                            disabled: W,
                                            onPick: (e) =>
                                                er
                                                    ? b((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [Y.id]:
                                                                  ((n = t[Y.id] ?? i_),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  Y.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eN(e),
                                            own: eR,
                                        }),
                                        null != Y.input
                                            ? (0, a.jsx)(ix, {
                                                  projectId: n,
                                                  question: Y,
                                                  value: eS,
                                                  disabled: W,
                                                  onChange: eI,
                                                  onFocus: eM,
                                                  onBlur: e_,
                                                  fallback: !1 === Y.allow_custom ? eV : null,
                                              })
                                            : null,
                                        !0 === Y.link && eS.length > 0 && null == I[Y.id]
                                            ? (0, a.jsx)("div", {
                                                  className: io.X_,
                                                  children: (0, a.jsx)(aY.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: E.intl.string(S.default.eCzCxC),
                                                      disabled: W,
                                                      onClick: () => M((e) => ({ ...e, [Y.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === Y.link && eS.length > 0 && null != I[Y.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: io.$y,
                                                  onFocus: eM,
                                                  onBlur: e_,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: E.intl.string(S.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(a0, {
                                                          label: E.intl.string(S.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: I[Y.id] ?? "auto",
                                                          disabled: W,
                                                          onChange: (e) => M((t) => ({ ...t, [Y.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != Y.note
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: io.aK,
                                                  children: Y.note,
                                              })
                                            : null,
                                        !1 === Y.allow_custom ? null : eV,
                                    ],
                                }),
                                null == D
                                    ? null
                                    : (0, a.jsx)(
                                          iP,
                                          {
                                              projectId: n,
                                              question: D.question,
                                              draft: D.draft,
                                              selected: D.selected,
                                              ownImage: D.ownImage,
                                              ownSelected: D.ownSelected,
                                              direction: D.direction,
                                              disabled: W,
                                          },
                                          D.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            X > 1 || er || ea || null != Y.input || null != u || a3(Y)
                ? (0, a.jsxs)("div", {
                      className: aK.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  X > 1
                                      ? E.intl.formatToPlainString(S.default.yzYUjq, { index: Z + 1, total: X })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: aK.zt,
                              children: [
                                  ek
                                      ? (0, a.jsx)(aY.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: c ?? E.intl.string(S.default.Pk5lfA),
                                            onClick: ew ?? ey,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  d
                                      ? null
                                      : (0, a.jsx)(eL.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eG
                                                ? (o ?? E.intl.string(E.t.geKm7t))
                                                : E.intl.string(S.default.w1nRmT),
                                            disabled: !eU,
                                            onClick: eH,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eG ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var iL = n(557744),
    i$ = n(223347),
    iD = n(894443),
    iO = n(525530);
function iq(e) {
    return (0, o.bG)([ek.Ay], () => ek.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let iz = "scope-setup:q0",
    iF = `${iz}:0`,
    iU = `${iz}:1`;
function iG(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, o.bG)([ek.Ay], () => ek.Ay.getProject(e), [e]),
                n = (0, aq.z9)("ConjureScopeSetupCard"),
                [l, r] = i.useState(null),
                [a, s] = i.useState(!1),
                [u, c] = i.useState(null),
                d = t?.install_scope_setup,
                m = "server" === l || (null == l && "choose_server" === d),
                f = t?.guild_id,
                h = i.useMemo(
                    () =>
                        m
                            ? {
                                  id: n.length > 0 ? "server-setup" : "server-setup-empty",
                                  questions: [
                                      {
                                          id: "server-setup:q0",
                                          question: E.intl.string(
                                              n.length > 0 ? S.default.ZWXDeI : S.default["u5+Qhu"],
                                          ),
                                          recommendation_reason: "",
                                          allow_custom: !1,
                                          options:
                                              n.length > 0 ? [] : [{ id: iF, label: E.intl.string(S.default.qLYOpH) }],
                                          ...e_(n, f),
                                      },
                                  ],
                              }
                            : {
                                  id: "scope-setup",
                                  questions: [
                                      {
                                          id: iz,
                                          question: E.intl.string(S.default.ickKBI),
                                          recommendation_reason: "",
                                          allow_custom: !1,
                                          options: [
                                              {
                                                  id: iF,
                                                  label: E.intl.string(S.default.qLYOpH),
                                                  detail: E.intl.string(S.default.QSKvUE),
                                              },
                                              {
                                                  id: iU,
                                                  label: E.intl.string(S.default.QV5C7b),
                                                  detail: E.intl.string(S.default["ZzHR4/"]),
                                              },
                                          ],
                                      },
                                  ],
                              },
                    [m, n, f],
                );
            if (null == d) return null;
            if (null == t || !(0, ek.PV)(t))
                return { clarification: eR(h), readOnly: !0, hideSubmit: !0, failure: null };
            async function g(t, n) {
                (s(!0), c(null));
                try {
                    await eS(`settle:${e}`, async () => {
                        try {
                            await eP(e, t, n);
                        } catch (t) {
                            if (409 !== t.status) throw t;
                            await (0, T.U1)(e);
                        }
                    });
                } catch (e) {
                    (s(!1), c(null != n && 403 === e.status ? "server" : "failed"));
                }
            }
            return {
                clarification: h,
                readOnly: !1,
                onSubmit: a
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0];
                          if (null == n) return;
                          let l = n.entities?.[0]?.id;
                          n.option_ids.includes(iU) ? r("server") : null != l ? g("guild", l) : g("user", null);
                      },
                submitText: E.intl.string(E.t["cY+Oob"]),
                onBack: m && !a ? () => r("scope") : void 0,
                hideSubmit: !1,
                failure: null == u ? null : E.intl.string("server" === u ? S.default["XXKd+7"] : S.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, a.jsx)(iT, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(
                        iT,
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
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: n.failure,
                          })
                        : null,
                ],
            });
}
function iB(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: a, feature: s } = l,
                u = (0, o.bG)([ek.Ay], () => ek.Ay.getProject(t), [t]),
                c = (0, aq.z9)("ConjureScopeSwitchCard"),
                [d, m] = i.useState(!1),
                [f, h] = i.useState(null),
                g = u?.guild_id,
                p = i.useMemo(() => {
                    let [e] = n.questions,
                        t = E.intl.formatToPlainString("guild" === a ? S.default["jh/iy+"] : S.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === a
                                ? { ...e, question: t, allow_custom: !1, ...e_(c, g) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: E.intl.string(S.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, c, g, a]);
            if (null == u || !(0, ek.PV)(u))
                return { clarification: eR(p), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (m(!0), h(null));
                try {
                    var l;
                    await ((l = n.id),
                    eS(`switch:${t}:${l}`, async () => {
                        await eP(t, a, e);
                        let n = "guild" === a ? S.default["8+EcCu"] : S.default["U7+Yeh"];
                        if (!(0, P.sendUserMessage)(t, E.intl.string(n))) throw Error("Not connected");
                    }));
                } catch (e) {
                    (m(!1), h(409 === e.status ? "locked" : "failed"));
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
                submitText: E.intl.string("guild" === a ? S.default.Ua7yKM : S.default.TVRkVh),
                onBack: d
                    ? void 0
                    : function () {
                          (h(null), (0, ew.b4)(t, "keep install scope", (e) => e.sendKeepInstallScope()))
                              ? r()
                              : h("failed");
                      },
                backText: E.intl.string("guild" === a ? S.default["4WnIqd"] : S.default["am+p7p"]),
                hideSubmit: "user" === a,
                failure: null == f ? null : E.intl.string("locked" === f ? S.default.irUT0N : S.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, a.jsx)(
              iT,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(
                      iT,
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
                      ? (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: n.failure,
                        })
                      : null,
              ],
          });
}
var iH = n(564963);
let iK = new Set(["select", "channel", "role", "user"]);
function iV(e, t) {
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
function iW(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let iX = new Set(),
    iZ = new Set();
function iY(e) {
    return (
        iZ.add(e),
        () => {
            iZ.delete(e);
        }
    );
}
function iJ() {
    return i.useSyncExternalStore(iY, () => iX);
}
function iQ(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, ax.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function i0(e, t, n) {
    if (!n || null == t) return !1;
    let l = iW(e, t);
    return l.length > 0 && !iV({ keys: l }, t);
}
var i1 = n(782973),
    i2 = n(1665),
    i3 = n(11120),
    i4 = n(411236);
function i5(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: c,
            summary: d,
            markSaved: m,
        } = (function (e, t, n) {
            let l = iJ(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!iX.has(n)) for (let e of ((iX = new Set([...iX, n])), iZ)) e();
                    } else a(!0);
                }, [n]),
                c = (0, o.bG)([tP.A], () => i0(t, tP.A.getSettings(e), s), [e, t, s]);
            return {
                done: c,
                superseded: (0, o.bG)([X.A], () => null != n && iQ(X.A.getMessages(e)).has(n), [e, n]),
                summary: (0, o.yK)(
                    [tP.A, a1.A],
                    () => {
                        var n;
                        let l = tP.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => a1.A.getChannel(e)?.name ?? null),
                              iW(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: E.intl.formatToPlainString(S.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return E.intl.string(S.default.CJq1rY);
                                                      case "checkbox":
                                                          return E.intl.string(
                                                              !0 === t ? S.default.nXtpn3 : S.default["0vfaMW"],
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
                                                                      : E.intl.string(S.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? E.intl.string(S.default.nEv677)
                                                              : E.intl.string(S.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return E.intl.string(S.default.Fw9G9A);
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
        f = null == r && u;
    if (c && !f)
        return (0, a.jsx)("article", {
            className: i4.Mk,
            children: (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(S.default["+uXDk+"]),
            }),
        });
    if (f)
        return (0, a.jsxs)("article", {
            className: i4.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: i4.Ol,
                    children: [
                        (0, a.jsx)(nI.y, { size: "xs", color: k.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: E.intl.string(S.default.AxBLLy),
                        }),
                    ],
                }),
                d.length > 0
                    ? (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: d.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let g = n.keys?.length === 1 && n.keys[0] === i1.B,
        p = null != n.note && "" !== n.note ? n.note : g ? null : E.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(i3.A, {
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
            let o = (0, a.jsx)(eL.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: E.intl.string(S.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: i4.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(S.default["jZjP+I"]),
                          }),
                          null != p
                              ? (0, a.jsx)(i2.A, { text: p, variant: "text-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: i4.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(aK.nd, aK.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: aK.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: aK.TK,
                                      children: E.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(C.D, {
                                      className: h()(aK.gb, aK.Q7),
                                      onClick: r,
                                      "aria-label": E.intl.string(S.default["iq+Pte"]),
                                      children: (0, a.jsx)(eZ.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: i4.DQ,
                              children: [
                                  null != p
                                      ? (0, a.jsx)(i2.A, { text: p, variant: "text-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: aK.qr,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: i4.xE,
                                      children: E.intl.string(S.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: aK.zt,
                                      children: [
                                          (0, a.jsx)(eL.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: E.intl.string(S.default["9J3OG8"]),
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
var i6 = n(935208),
    i7 = n(932111),
    i8 = n(404373);
function i9(e) {
    return "" !== el.getDraft(e).trim();
}
var se = n(29080);
function st(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, ap.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, ap.Lf)(r) }),
    };
}
var sn = n(62617);
let sl = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    sr = {
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
    sa = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, sn.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, sn.Z)(),
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
                        () => (0, sn.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, sn.Z)(),
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
                        () => (0, sn.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, sn.Z)(),
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
                        () => (0, sn.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, sn.Z)(),
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
                        () => (0, sn.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, sn.Z)(),
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
                        () => (0, sn.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, sn.Z)(),
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
                        () => (0, sn.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, sn.Z)(),
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
                        () => (0, sn.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, sn.Z)(),
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
                        () => (0, sn.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, sn.Z)(),
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
                        () => (0, sn.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, sn.Z)(),
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
                        () => (0, sn.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, sn.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function si(e) {
    return { ...sa[e], name: E.intl.string(sr[e]()) };
}
function ss(e) {
    return sl.includes(e) ? si(e) : void 0;
}
function so(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % sl.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, sl[(t + n) % sl.length]);
            }),
            l
        );
    })(e))
        t.set(n, si(l));
    return t;
}
var su = n(615839);
function sc(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var sd = n(60160),
    sm = n(16634);
function sf(e) {
    let t = (0, ap.SY)(e.steps);
    return null != t ? (0, ap.WQ)(t) : sc(e.task);
}
function sh(e) {
    let t = so(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? ss(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: sc(e.task),
                      todoId: e.task.todoId,
                      line: sf(e),
                  },
              ];
    });
}
function sg(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, ap.SY)(n.steps),
        d = u
            ? sf(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(sc(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, su.MB)(e.durationMs),
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
                                    className: a$.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            sm.A,
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
                                      className: a$.iq,
                                      children: (0, a.jsx)(sd.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(ay.A, {
        glyph: (0, a.jsx)(aw.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: sc(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: a$.nC,
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
var sp = n(998445),
    sx = n(643210),
    sv = n(648127),
    sj = n(372795),
    sb = n(163897);
let sy = "conjure-browser-viewer";
function sw(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [sx.A],
            () =>
                n.flatMap((e) => {
                    let n = sx.A.getTab(t, e);
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
        className: sb.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(sk, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function sk(e) {
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
        u = (0, tq.useHasModalOpen)(sy),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        g = (0, sv.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(sb.Nr, f && sb.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tq.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: sy },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: sb.Gt,
                children: [
                    (0, a.jsx)(sj.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: sb.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: sb.qf,
                              children: (0, a.jsx)(sp.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: sb.HS,
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
                className: sb.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(sb.W9, f && sb.oM) }),
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
var sN = n(268409);
let sC = new WeakMap(),
    sA = new WeakMap();
function sS(e) {
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
            [X.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = sC.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = sA.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), sA.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (sC.set(e, n), n);
                })(X.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: sN.h, children: (0, a.jsx)(sw, { projectId: t, sessionIds: u }) });
}
var sE = n(469393);
function sI(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, lW.lG)(t.authored_at);
    return (0, a.jsx)(aC, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: sE.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sE.z,
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
                    ? (0, a.jsx)(eL.$, {
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
var sM = n(714917),
    s_ = n(463660),
    sR = n(970211);
function sP(e) {
    let { projectId: t } = e,
        {
            src: n,
            blurred: l,
            handleError: r,
        } = (function (e, t) {
            let n = (0, o.bG)([sM.A], () => (null != e ? sM.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, a] = i.useState(null),
                [s, u] = i.useState(null),
                [c, d] = i.useState(!1);
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
                                r = await (0, s_.Mg)(e, l);
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
            let m = null != l ? r : null,
                f = null == l || (null != m && m === s) ? t : m,
                h = i.useCallback(() => {
                    f === m && u(m);
                }, [f, m]);
            return { src: null == e || null != n || c ? f : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp");
    return null == n
        ? null
        : (0, a.jsx)("img", { className: h()(sR.L, { [sR.T]: l }), src: n, alt: "", "aria-hidden": !0, onError: r });
}
var sT = n(155718);
function sL(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let s$ = ["command", "user_command", "message_command", "message"],
    sD = new Set([sT.kc.CHAT, sT.kc.USER, sT.kc.MESSAGE]);
function sO(e) {
    return e.type ?? sT.kc.CHAT;
}
function sq(e) {
    return sD.has(sO(e));
}
function sz(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function sF(e, t) {
    let n = s$.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !sz(e)), ...n.filter(sz)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || sz(r) || l.push(r);
    }
    return s$.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function sU(e, t, n) {
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
    let s = e.commands.filter(sq).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (sO(e)) {
                    case sT.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case sT.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(sz),
        u = a.length > 0 ? sF([...a, ...o], !0) : sF("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var sG = n(377941),
    sB = n.n(sG);
function sH(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function sK(e) {
    return e.type === sT.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === sT.kc.USER || e.type === sT.kc.MESSAGE
          ? ""
          : "/";
}
let sV = {
        [lJ.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [lJ.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [lJ.q7.ACTIVITY]: S.default["3/aHX6"],
        [lJ.q7.OVERLAY]: S.default["rPpf5/"],
        [lJ.q7.PROFILE_WIDGET]: null,
        [lJ.q7.AUTOMOD]: null,
        [lJ.q7.BOT]: null,
        [lJ.q7.APPLICATION_COMMANDS]: null,
    },
    sW = [lJ.q7.ACTIVITY, lJ.q7.APP_CHANNEL, lJ.q7.VOICE_CHANNEL, lJ.q7.OVERLAY];
function sX(e) {
    return sW.find((t) => sL(e, t)) ?? null;
}
let sZ = 1920 / 1018;
function sY(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let sJ = sY(24, 1018),
    sQ = sY(24, 1920);
var s0 = n(176999),
    s1 = (((l = {}).IMAGE = "image"), l),
    s2 = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    s3 = n(598748),
    s4 = n(773669);
let s5 = [],
    s6 = {},
    s7 = {};
function s8(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function s9(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: s1.IMAGE,
        visibility: s2.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var oe = n(127258),
    ot = n(803306),
    on = n(320095),
    ol = n(963852),
    or = n(95701),
    oa = n(889227),
    oi = n(427262);
let os = new or.nA({ id: "1337", guild_id: "1337", type: q.rbe.GUILD_TEXT, name: "preview" });
function oo(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([a2.default], () => a2.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, ot.nj)(new oa.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let ou = /^@\S+/;
var oc = n(97808),
    od = n(778712),
    om = n(46054),
    of = n(200700);
let oh = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    og = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    op = ["blocked", "alert", "allowed"],
    ox = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function ov(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, of.getFriendlyDurationString)(n))
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
var oj = n(984097),
    ob = n(13673);
let oy = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function ow(e) {
    let { example: t } = e,
        n = ov(t);
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
let ok = ["glazedgamer", "sprinkles", "donutking"];
function oN(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = oh[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(oj.nM, { [h()(oj.HV, ob.DX)]: s }),
        children: [
            (0, a.jsx)(ak.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: oj.my,
                children: (0, a.jsx)(oc.eu, {
                    src: (0, eD.AE)(void 0, void 0),
                    size: od._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: oj.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), om.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(ow, { example: n }) : null,
                ],
            }),
        ],
    });
}
function oC(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = og[t.section],
        s = new Set(t.examples.map(ov)),
        o = 1 === s.size ? t.examples.map(ov)[0] : null;
    return (0, a.jsxs)("div", {
        className: oj.UO,
        children: [
            (0, a.jsxs)("div", {
                className: oj.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: oy[r.tone],
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
                                      className: oj.IQ,
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
                className: oj.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(oN, { example: e, username: ok[(n + t) % ok.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function oA(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            op
                .map((e) => ({ section: e, examples: t.filter((t) => ox[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: oj.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: oj.hk,
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
                    oC,
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
var oS = n(276293),
    oE = n(460905),
    oI = n(110384),
    oM = n(633018),
    o_ = n(763754),
    oR = n(217424),
    oP = n(194085),
    oT = n(20851),
    oL = n(692508),
    o$ = n(798819);
function oD(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(o$.item, o$.labelContainer, o$.colorDefault, {
            [o$.focused]: !0 === t.highlighted,
            [o$.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: o$.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: o$.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(o$.label, oL.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: o$.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: o$.icon }),
                  })
                : null,
        ],
    });
}
function oO(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, oL.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: oI.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(o$.menu, oL.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: o$.scroller,
            children: [
                (0, a.jsx)(oD, { item: s }),
                (0, a.jsx)("div", { className: o$.separator }),
                (0, a.jsx)(oD, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var oq = n(381941);
function oz() {}
function oF(e) {
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
        } = ((t = (0, o.bG)([a2.default], () => a2.default.getCurrentUser())),
        (n = (0, o.bG)([ek.Ay], () => ek.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, o.bG)([tB.A], () => tB.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([a2.default], () => (null != l ? a2.default.getUser(l) : void 0), [l])),
        (d = oo("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = oo("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (g = oo("31339", (0, oi.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, on.rh)({
                                          ...(0, ol.Ay)({
                                              channelId: os.id,
                                              content: e,
                                              author: t,
                                              type: l ?? q.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: q.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: oe.G.APPLICATION_COMMAND,
                                                        user: (0, ol.Vi)(s),
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
                                              messageType: q.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: q.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(ou, `<@${i.id}>`)), s),
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
    let w = os.name;
    return (0, a.jsxs)("div", {
        className: oL.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: oL.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(oS.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: w }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(oL.TE, `group-spacing-${oq.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? oL.Rz : void 0,
                            children: [
                                (0, a.jsx)(oT.A, {
                                    message: n,
                                    channel: os,
                                    author: (0, o_.FT)(n.author, os),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(oR.A, { message: n, channel: os }) : void 0,
                                    usernameClassName: r?.target === "user" ? oL.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: oL.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(oP.Ay, {
                                              children: [
                                                  (0, a.jsx)(oP.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: oE.n,
                                                      onClick: oz,
                                                  }),
                                                  (0, a.jsx)(oP.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: oI.W,
                                                      onClick: oz,
                                                  }),
                                                  (0, a.jsx)(oP.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: tN.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: oz,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? oL.ET : oL.je,
                                          inert: !0,
                                          children: (0, a.jsx)(oO, {
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
                className: oL.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(oM.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: E.intl.formatToPlainString(E.t["8lzR/R"], { channel: `#${w}` }),
                    }),
                ],
            }),
        ],
    });
}
var oU = n(332173);
function oG(e) {
    let { name: t } = e;
    return (0, a.jsxs)(oU.A, { children: ["/", t] });
}
function oB(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(sB());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(oG, { name: e.name }, e.start) : e.text));
}
n(827669);
var oH = n(757789),
    oK = n(26137);
let oV = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var oW = n(573634);
let oX = {
    frame: eO.GameControllerIcon,
    overlay_widget: oH.V,
    user_widget: oK.r,
    bot: eU.RobotIcon,
    commands: eU.RobotIcon,
    automod: eF.ShieldIcon,
};
function oZ(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(oW.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function oY(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: oW.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: oW.jw,
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
function oJ(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: oW.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(oW.Vo, oW.G),
                children: (0, a.jsx)(eq.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: oW.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function oQ(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: oW.wZ,
        children: t.map((e, t) => {
            let n = sK(e),
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
                                ? (0, a.jsx)(oG, { name: e.name })
                                : (0, a.jsx)(oU.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function o0(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: oW.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: oW.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(oB, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function o1(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? eq.k : oX[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : oV[t.kind]);
    return (0, a.jsxs)("section", {
        className: oW.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: oW.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: oW.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: oW.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(oB, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(o0, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: oW.PG, children: r }) : null,
        ],
    });
}
function o2(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: oW.aN,
        children: [
            (0, a.jsxs)("div", {
                className: oW.Lv,
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
                                let n = t.map(sB()).join("|");
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
                            (0, a.jsx)("div", { className: oW.yF, role: "separator" }),
                            (0, a.jsx)(o1, {
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
                                                if (t.surfaces.includes(lJ.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(lJ.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(lJ.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        oZ,
                                                        {
                                                            className: oW.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: oW.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        oJ,
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
                                                            oZ,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(oY, { labels: r }),
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
                                                              oZ,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(oQ, { commands: e.commands }),
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
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(sH) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            oZ,
                                                            { caption: n, children: (0, a.jsx)(oY, { labels: l }) },
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
var o3 = n(633075),
    o4 = n(946356),
    o5 = n(58216),
    o6 = n(27399);
function o7(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([a2.default], () => a2.default.getCurrentUser()),
        r = i.useMemo(() => new o3.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: o6.H,
              children: (0, a.jsx)(o4.A.Overlay, {
                  className: o6.w,
                  children: (0, a.jsx)(o5.A, {
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
var o8 = n(443863);
function o9(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        o =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: sY(i.width * t, 1920), height: sY(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sP, { projectId: n }),
            (0, a.jsx)("div", {
                className: o8.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": sJ,
                    "--custom-conjure-plan-overlay-widget-end": sQ,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: o8.M7, onError: s }),
            }),
        ],
    });
}
function ue(e) {
    let { projectId: t, design: n, alt: l, overlayWidgetSize: r } = e,
        { id: s } = n,
        { src: o, gone: u, handleError: c } = (0, ik._)(t, s),
        d = i.useCallback(() => {
            (0, ei.PK)(t, s).then(
                (e) => {
                    (0, iw.R)({
                        items: [{ type: "IMAGE", url: e, alt: l }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "ConjureChat",
                    });
                },
                () => {},
            );
        }, [t, s, l]);
    return u
        ? null
        : (0, a.jsx)(C.D, {
              className: h()(o8.xX, { [o8.nj]: null != r }),
              style: null != r ? { "--custom-conjure-plan-overlay-scene-aspect": String(sZ) } : void 0,
              onClick: d,
              "aria-label": E.intl.string(S.default.TvAPIm),
              children:
                  null == o
                      ? null
                      : null != r
                        ? (0, a.jsx)(o9, { projectId: t, src: o, alt: l, size: r, onError: c })
                        : (0, a.jsx)("img", { src: o, alt: l, className: o8.sN, onError: c }),
          });
}
function ut(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = sL(c, lJ.q7.APPLICATION_COMMANDS)),
            (l =
                sL(c, lJ.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(sq)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : sU(c, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = s7 } = t,
                r = (0, o.bG)([s4.default], () => s4.default.locale),
                a = (0, o.bG)([ek.Ay], () => {
                    let t = ek.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(s6);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, ei.PK)(e, l.id).then(
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
                                                          ...s8(n),
                                                          ...(null != n.fallback ? { fallback: s8(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = s0.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[s3.m.WIDGET_TOP] || null == i[s3.m.WIDGET_BOTTOM]
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
                                                                    type: s0.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: s0.oG.NUMBER, value: a })
                                                                : (r[e] = { type: s0.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(s9),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: s5,
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
                        .filter((e) => "/" === sK(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = sX(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(sq)
                    ? sU({ ...c, bot: void 0 }, "commands", {
                          message: E.intl.string(S.default.J7qggf),
                          reply: E.intl.string(S.default.nqYtiy),
                          event: E.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([ek.Ay], () => ek.Ay.getProject(u)?.name, [u]),
        w =
            g && null != d
                ? E.intl.formatToPlainString(S.default.YZ3qJs, { version: d.version })
                : E.intl.string(S.default["3b6e7o"]),
        k = g ? (0, a.jsx)(aS, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(aE, {
        title: w,
        meta: k,
        superseded: g,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: o8.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: o8.Qs,
                children: (0, a.jsx)(o2, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(oB, { text: c.summary, commandNames: x }),
                            }),
                            "" !== p
                                ? (0, a.jsxs)("section", {
                                      className: o8.uW,
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
                                              children: (0, a.jsx)(oB, { text: p, commandNames: x }),
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
                                    ? (0, a.jsx)(ue, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: E.intl.string(null == (t = sX(c)) ? S.default["3/aHX6"] : sV[t]),
                                          overlayWidgetSize:
                                              c.design_image?.name === "overlay-design-v2.png"
                                                  ? l1(c.overlay_widget ?? null)
                                                  : null,
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(o7, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(oA, { automod: c.automod })
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
                                        (r = l.some((e) => "command" === e.kind || sz(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(oF, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: x,
                }),
            }),
            null == m || g
                ? null
                : (0, a.jsxs)("div", {
                      className: o8.qr,
                      children: [
                          (0, a.jsx)(eL.$, {
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
var un = n(289565);
function ul(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: un.m, children: n })
        : (0, a.jsxs)("div", {
              className: un.Z,
              children: [
                  n,
                  (0, a.jsx)(N.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tk.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: eZ.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function ur(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function ua(e, t) {
    return null != e && ur(t, e.status);
}
let ui = new WeakMap();
var us = n(175841),
    uo = n(27232),
    uu = n(505930),
    uc = n(385081);
let ud = "conjurePublishRatings",
    um = [1, 2, 3, 4, 5],
    uf = { 1: S.default.GhbsGA, 2: S.default.cm0nwU, 3: S.default.kGvlh2, 4: S.default.dVBSUg, 5: S.default.DKlgF7 };
function uh(e) {
    return E.intl.string(uf[e]);
}
let ug = new Set(),
    up = 0;
function ux() {
    return G.w.get(ud) ?? {};
}
function uv(e, t) {
    return ux()[e]?.[t] ?? null;
}
function uj(e) {
    return (ug.add(e), () => ug.delete(e));
}
function ub(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, uc.Fz)(e, n);
                },
            };
        })(t),
        u = E.intl.string(S.default.IqkF07);
    return (0, a.jsx)(tD.a, {
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
        children: (0, a.jsx)(aH.f, {
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
var uy = n(54100);
function uw(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: uy.mo,
        role: "status",
        children: [
            (0, a.jsx)(us.SparklesIcon, { size: "xs", color: "currentColor", className: uy.dQ, "aria-hidden": !0 }),
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
function uk(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: o } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(uj, () => up),
                {
                    rating: uv(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != uv(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, uc.gw)(i);
                            let s = ux();
                            return (G.w.set(ud, { ...s, [t]: { ...s[t], [n]: l } }), up++, ug.forEach((e) => e()), i);
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
        return (0, a.jsx)(uw, { rating: s });
    let b = null != s,
        y = b ? s : (d ?? u),
        w = b || (null == d && null != u);
    function k(e) {
        if (b) return;
        (c(e), m(null), g(!0));
        let t = o(e);
        null != t && (0, tq.openModal)((e) => (0, a.jsx)(ub, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: uy.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: uy.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: x,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: h()(uy.Pf, { [uy.KH]: null == y }),
                        children: E.intl.string(S.default.mTV326),
                    }),
                    um.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: h()(uy.Pf, { [uy.KH]: y === e }),
                                children: uh(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": x,
                className: uy.uf,
                children: um.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? uo.StarIcon : uu.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: uy.uK,
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
                                        j.current ? c(e) : k(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((j.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), k(e)));
                                    },
                                    onKeyUp: () => {
                                        j.current = !1;
                                    },
                                    className: uy.hF,
                                    "aria-label": E.intl.formatToPlainString(S.default.NU7Dex, {
                                        rating: e,
                                        label: uh(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: h()(uy.d4, { [uy.cO]: t, [uy.Ng]: t && w }),
                                        children: (0, a.jsx)(n, {
                                            size: "xs",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    t && w ? `picked-${y}` : "idle",
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
function uN(e) {
    let { projectId: t, publish: n } = e,
        l = rS(t, n);
    return (0, a.jsx)(eL.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function uC(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, tR.Ay)(t);
    return null != r && ua(r, l)
        ? (0, a.jsx)(ul, {
              children: (0, a.jsxs)(tO.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(uN, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n ? (0, a.jsx)(uk, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var uA = n(303345),
    uS = n(44255),
    uE = n(416473),
    uI = n(289830);
function uM(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [ek.Ay],
                    () => {
                        let t = ek.Ay.getProject(e);
                        return null != t && (0, ek.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, uE.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof uA.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, uS.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, uS.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(aC, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: uI.r,
            children: [
                (0, a.jsxs)("div", {
                    className: uI.z,
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
                    ? (0, a.jsx)(eL.$, {
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
var u_ = n(989271);
function uR(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(u_.nM, { [u_.f1]: s, [u_.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: u_.jo,
                children: [
                    n
                        ? (0, a.jsx)(nW.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: u_.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: u_.G9,
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
function uP(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(aC, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                uR,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var uT = n(530557),
    uL = n(872162),
    u$ = n(202723);
function uD(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tq.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: uT.R })), [r.fields]),
        d = (0, iH.bB)(l, s),
        m = h()(u$.Lo, { [u$.jY]: d });
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
                        (0, a.jsx)(uL.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: u$.Lo,
                      children: (0, a.jsx)(uL.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
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
                                className: u$.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: u$.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(nI.y, {
                                            size: "xs",
                                            color: k.A.colors.ICON_FEEDBACK_POSITIVE,
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
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                selectable: !0,
                                children: r.fields
                                    .map((e) => e.label)
                                    .map((e) =>
                                        E.intl.formatToPlainString(S.default["Z+FC3j"], {
                                            label: e,
                                            value: E.intl.string(S.default.CJq1rY),
                                        }),
                                    )
                                    .join(" \xb7 "),
                            }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: u$.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: E.intl.string(null != o ? S.default.O0QIqj : S.default.HCQvpO),
                        }),
                        (0, a.jsx)(i2.A, {
                            text: null != r.note && "" !== r.note ? r.note : E.intl.string(S.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(uL.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: u$.sq,
                            children: (0, a.jsx)(eL.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: E.intl.string(S.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var uO = n(919790),
    uq = n(908492),
    uz = n(971824),
    uF = n(162052),
    uU = n(165648);
function uG(e) {
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
        x = i.useMemo(() => (0, ap.Jf)(n, l), [n, l]),
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
            className: a$.pj,
            "data-live": !1,
            children: (0, a.jsx)(ay.A, {
                glyph: (0, a.jsx)(se.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, ap.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let w = v.tasks,
        k = so(w.map((e) => e.taskId)),
        N = !g && (l || w.some((e) => "running" === e.task.status)),
        C = sh(w);
    return (0, a.jsxs)("ol", {
        className: a$.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(aj.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: w.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: j,
                connectsDown: w.length > 0,
                tier: x.turn?.tier,
            }),
            w.map((e, n) => {
                let l = null != e.task.helperMark ? ss(e.task.helperMark) : void 0,
                    r = l ?? k.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          sg,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: r.Illocon,
                              tint: r.tint,
                              name: null != l && null != e.task.helperName ? e.task.helperName : r.name,
                              connectsDown: n < w.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, a.jsx)(sS, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: a$.YO,
                      children: (0, a.jsx)(aT, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function uB(e) {
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
            settingsAskId: p,
            publishCta: x,
            turnId: j,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: w,
            sideReply: k = !1,
            sideReplyAcknowledges: N,
            hoistedProse: C = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: I,
            onRestoreProposal: M,
            publishScheduleProposal: _,
            publishScheduleProposalCurrent: R = !1,
        } = e,
        P = i.useMemo(
            () => st({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: T, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = P,
        O = (C ? A : void 0) ?? P.attachmentsHost,
        q = $ && !C,
        z = null == u ? null : (0, a.jsx)(uO.A, { projectId: t, attachments: u }),
        F = null == z ? null : (0, a.jsx)("div", { className: a$.MT, children: z }),
        U = k
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
                  })(N),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: a$.ue,
        children: [
            T.length > 0 && !C
                ? (0, a.jsx)("ol", {
                      className: a$.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: a$.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: uU.PT,
                                          children: (0, uq.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === O && e === L ? F : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(ut, { projectId: t, proposal: r, version: s, onApprove: w })
                : q
                  ? (0, a.jsxs)("div", {
                        className: h()(a$.ky, uF.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(uU.PT, a$.cW),
                                children: (0, uq.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === O ? F : null,
                            U,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(a$.ky, uF.XR, { [uz.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(uD, {
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
                      className: h()(a$.ky, uF.XR),
                      children: (0, a.jsx)(i5, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== O && ("closing" !== O || q) ? null : z,
            null != x ? (0, a.jsx)(uC, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(uP, { ideas: o, pickedIdeaIds: y, onPick: b }) : null,
            null != I ? (0, a.jsx)(sI, { proposal: I, onRestore: M }) : null,
            null != _ ? (0, a.jsx)(uM, { projectId: t, proposal: _, current: R }) : null,
            q ? null : U,
        ],
    });
}
var uH = n(864970),
    uK = n(146806),
    uV = n(475358),
    uW = n(717400),
    uX = n(99677),
    uZ = n(655098),
    uY = n(234320),
    uJ = n(191023);
function uQ(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(nr.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: l_.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(uJ.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: l_.OY,
                    children: (0, a.jsx)(aZ.PencilIcon, {
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
            className: ni.o1,
            onClick: () => {
                lA(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": E.intl.string(S.default.N852dj),
            children: (0, a.jsx)(nl.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function u0(e) {
    let { send: t } = e;
    return (0, a.jsxs)(nr.p, {
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
            "uploading" === t.status ? (0, a.jsx)(nn.y, { type: nn.t.SPINNING_CIRCLE_SIMPLE, className: ni.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(aY.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: E.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var u1 = n(901173),
    u2 = n(161431),
    u3 = n(280450),
    u4 = n(503275),
    u5 = n(659280),
    u6 = n(351906),
    u7 = n(407653),
    u8 = n(322915);
function u9(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([u6.A], () => u6.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      u5.Ay.User,
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
                      u5.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(u7.A, { projectId: n, file: e.file, className: u8.Vk }),
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
    return (0, a.jsx)(u5.Ay, {
        id: t,
        className: u8.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(ce, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(ce, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function ce(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: u8.Gf, children: n }),
            l,
        ],
    });
}
var ct = n(719442),
    cn = n(355622),
    cl = n(408018),
    cr = n(186306),
    ca = n(323350),
    ci = n(35277),
    cs = n(820066),
    co = n(683167),
    cu = n(267102),
    cc = n(259691);
let cd = (0, or.createChannelRecord)({ id: "1", type: q.rbe.DM });
function cm(e) {
    let t = cs.VW.end(e, []);
    return { anchor: t, focus: t };
}
function cf(e) {
    return (0, ca.WO)(cs.VW.richValue(e), { mode: "raw" });
}
function ch(e, t) {
    ((e.children = (0, cl.x7)(t)), (e.selection = cm(e)), e.onChange());
}
function cg(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(i7.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(cc.A, { attachmentId: r }), n] });
}
var cp = n(497437);
let cx = "text-md/normal",
    cv = null;
function cj(e) {
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
                frontFrom: 1e3 * (0, uK._R)(m),
                frontTo: 1e3 * (0, uK._R)(h),
                backFrom: 1e3 * (0, uK.T)(m),
                backTo: 1e3 * (0, uK.T)(h),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [w, k] = i.useState(null),
        N = i.useRef(!1),
        C = i.useCallback(() => {
            (k(N.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        N.current = n;
    }, [n, t]);
    let A = "in" === w ? x.backFrom : x.frontFrom,
        I = "out" === w ? x.frontTo : x.backTo,
        M = (0, o.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
        _ = t === E.intl.string(S.default.Zc7gML),
        R = r === t && _;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(cp.VT, { [cp.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, I - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != w ? b % 2 : void 0,
            "data-wipe-kind": l ? (w ?? void 0) : void 0,
            children: (0, a.jsx)(uV.e, { shortcut: "tab", className: cp.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(uH.o, {
                text: t,
                variant: cx,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: h()(cp.xM, { [cp.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            P(cp.IS, n || (!M && "out" === w), u),
            (0, a.jsx)("span", {
                ref: c,
                className: cp.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: cx, tag: "span", children: t }),
            }),
            R
                ? (0, a.jsxs)("span", {
                      className: cp.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: cx, tag: "span", className: cp.xM, children: t }),
                          P(cp.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let cb = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                running: r,
                restoring: s = !1,
                onSend: u,
                onInterrupt: c,
                onUploadFile: d,
                onApprove: m,
                onImport: f,
                onSendToOtherProjects: g,
                suggestion: p,
                questionOpen: x = !1,
                hasPendingContext: v = !1,
                onDraftHasTextChange: j,
                modelSettings: b,
                onModelSettingsChange: y,
            } = e,
            w = n && !l,
            k = (function (e) {
                let t = i.useContext(cu.Ay),
                    [n] = i.useState(() => {
                        let n = (0, ct.ie)();
                        return (
                            (n.children = (0, cl.x7)(e)),
                            (n.selection = cm(n)),
                            (0, co.a)({
                                editor: n,
                                chatInputType: cn.oU.GENERIC_RICH_TEXTAREA,
                                channel: cd,
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
                                    for (let [t, l] of cs.VW.nodes(e, { at: [], match: cs.l5.isText }))
                                        for (let e of t.text.matchAll(i7.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        cr.o.withMergedEntry(e, () =>
                                            cs.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    ci.b.textToVoid(
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
            })(el.getDraft(t)),
            [C, A] = i.useState(() => cf(k));
        (0, _.N$)(C);
        let I = i.useRef(C),
            [M, R] = i.useState(null),
            T = i.useCallback(() => {
                let e = cf(k);
                (e !== I.current && ((I.current = e), W(t, e), A(e)),
                    R(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !cs.ZF.isCollapsed(t)) return null;
                            let [n] = cs.VW.node(e, t.anchor.path);
                            return cs.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(k),
                    ));
            }, [k, t]),
            L = i.useCallback((e) => ch(k, e), [k]),
            $ = "" !== C.trim();
        i.useEffect(() => j?.($), [$, j]);
        let D = i.useRef(t);
        i.useLayoutEffect(() => {
            D.current !== t && ((D.current = t), ch(k, el.getDraft(t)));
        }, [k, t]);
        let O = (0, o.bG)([e$.Ay], () => e$.Ay.isSubmitButtonEnabled),
            [z, F] = i.useState(!1);
        i.useEffect(() => {
            r || F(!1);
        }, [r]);
        let U = i.useRef(null),
            {
                drafts: G,
                addFiles: B,
                pasteFiles: H,
                removeDraft: K,
                settled: V,
                takeRefs: Z,
            } = nu({ projectId: t, surface: "chat", onUploadFile: d }),
            Y = lk.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && lb(n);
            }),
            J = "" !== C.trim() || G.length > 0 || v || Y,
            Q = w && J && V,
            [ee, et] = i.useState(null);
        i.useEffect(() => {
            if (null == ee) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => et(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [ee]);
        let en = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: c } =
                        ((t = (0, o.bG)([ek.Ay], () => ek.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, o.yK)(
                            [X.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              X.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, u4.Y_)(l), r.forEach(u4.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([a2.default], () => (null == l ? null : a2.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [a2.default],
                            () => r.map((e) => a2.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([u3.default], () => u3.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            er = (0, u2.rU)(t),
            [ea, es] = i.useState(null),
            [eo, eu] = i.useState(0),
            ec = i.useMemo(() => (null != M && w ? (0, u1.OG)(M, M.length) : null), [M, w]),
            ed = ec?.start ?? null;
        i.useEffect(() => {
            null == ed ? es(null) : (0, u2.IP)(t);
        }, [ed, t]);
        let em = ed === ea ? null : ec,
            ef = i.useMemo(() => (null == em ? [] : (0, u1.l$)(en, er, em.text)), [em, en, er]),
            eh = em?.text;
        i.useEffect(() => eu(0), [eh]);
        let eg = ef.length > 0,
            ep = Math.min(eo, Math.max(0, ef.length - 1)),
            ex = i.useId(),
            ev = i.useCallback(
                (e) => {
                    let t = ef[e];
                    null != em &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (ci.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                ci.b.insertText(e, `${n} `));
                        })(k, em.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ef, em, k],
            ),
            ej = i.useCallback(() => {
                if (!Q) return;
                let e = Z(),
                    n = Y
                        ? (function (e) {
                              let t = lC(e);
                              if (null == t || !lb(t)) return null;
                              let n = t.history.present,
                                  l = ai(e);
                              return (
                                  lA(e, (e) => ({ ...e, history: ld, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, P.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (an.set(i, s),
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
                                              capture: (t) => (0 === t ? l : ai(e)),
                                              composite: (e) => ae(e, n),
                                              upload: (t) =>
                                                  (0, ei.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, ei.n6)(e, t.id),
                                              send: (n) => (0, P.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      ar(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (an.delete(i),
                                                          window.setTimeout(() => {
                                                              (ar(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                u(C, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == cv && (cv = document.createElement("canvas").getContext("2d"));
                    let i = cv;
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
                })(cw(eS.current), eq.current, (0, u1.Lj)(C));
                ("" !== l && et(l), L(""), es(null));
            }, [Q, Y, t, C, u, Z, L]),
            eb = i.useCallback(
                (e) => {
                    (e.preventDefault(), ej());
                },
                [ej],
            ),
            ey = i.useCallback(() => {
                null == c || z || (F(!0), c());
            }, [c, z]),
            ew = null == p || "" !== C || !w || s || v ? null : p,
            eN = i.useCallback(
                (e) => {
                    if (eg && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ef.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eu((ep + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ev(ep));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), es(em?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && r && null != c && !z) {
                        (e.preventDefault(), e.stopPropagation(), ey());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ew) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), L(ew));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != m && (e.preventDefault(), m());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ej());
                },
                [ej, m, r, c, z, ey, ew, L, eg, ef.length, ep, ev, em],
            ),
            eC = i.useCallback(
                (e) => {
                    w && H(e);
                },
                [w, H],
            );
        (0, uY.Vo)({
            event: q.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eC(t);
            },
        });
        let eA = i.useCallback(
                (e) => {
                    (B(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [B],
            ),
            eS = i.useRef(null),
            eE = i.useRef(null),
            eI = i.useCallback(() => {
                let e = I.current;
                g?.((0, u1.Lj)(e), () => {
                    I.current === e && L("");
                });
            }, [g, L]),
            eM = i.useCallback((e) => {
                let t = U.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [e_, eR] = i.useState(0),
            [eP, eT] = i.useState(!1);
        i.useEffect(() => {
            if (0 === C.length) return void eT(!1);
            let e = cw(eS.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eR(t);
            }
            eT(!0);
            let t = setTimeout(() => eT(!1), cy);
            return () => clearTimeout(t);
        }, [C]);
        let eL = i.useMemo(() => ({ "--custom-glow-x": `${e_}px` }), [e_]),
            eD = eP ? ` ${cp.EB}` : "",
            eO = s
                ? E.intl.string(S.default.qqlUiW)
                : l
                  ? E.intl.string(S.default.GcFRaY)
                  : w
                    ? v
                        ? E.intl.string(S.default.knUjL3)
                        : x
                          ? E.intl.string(S.default.IevBEw)
                          : E.intl.string(r ? S.default["0BJa/0"] : S.default.TEeU7z)
                    : E.intl.string(S.default.zZ9NgM),
            eq = i.useRef(0),
            ez = i.useRef(null),
            eF = i.useCallback((e) => {
                if ((ez.current?.disconnect(), null == e)) return;
                eq.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eq.current = e.clientWidth;
                });
                (t.observe(e), (ez.current = t));
            }, []),
            eU = i.useId(),
            eG = i.useId(),
            eB = null != ew,
            eH = ee ?? ew ?? eO,
            eK = "" === C && "" !== eH;
        return (0, a.jsxs)("form", {
            onSubmit: eb,
            className: cp.DA,
            children: [
                eg
                    ? (0, a.jsx)(u9, {
                          id: ex,
                          projectId: t,
                          suggestions: ef,
                          selectedIndex: ep,
                          onHover: eu,
                          onSelect: ev,
                      })
                    : null,
                G.length > 0 || Y
                    ? (0, a.jsxs)("div", {
                          className: cp.lN,
                          children: [
                              G.map((e) => (0, a.jsx)(nc, { draft: e, onRemove: K }, e.localId)),
                              Y ? (0, a.jsx)(uQ, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${cp.wg} ${cp.LP}${eD}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${cp.wg} ${cp.L3}${eD}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: cp.VA,
                    ref: eS,
                    children: [
                        (0, a.jsx)("input", {
                            ref: U,
                            type: "file",
                            multiple: !0,
                            onChange: eA,
                            className: cp.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(eY.Y, {
                            targetElementRef: eE,
                            position: "top",
                            align: "left",
                            animation: eY.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(eJ.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(eQ.rX, {
                                        children: [
                                            nt.map((e) =>
                                                (0, a.jsx)(
                                                    eQ.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => eM(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != f
                                                ? (0, a.jsx)(eQ.Dr, {
                                                      id: "import-project",
                                                      label: E.intl.string(S.default["p/k5i7"]),
                                                      iconLeft: uW.q,
                                                      leadingAccessory: { type: "icon", icon: uW.q },
                                                      action: f,
                                                  })
                                                : null,
                                            null != g
                                                ? (0, a.jsx)(eQ.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: uX.t,
                                                      leadingAccessory: { type: "icon", icon: uX.t },
                                                      action: eI,
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
                                    ref: eE,
                                    type: "button",
                                    className: `${cp.Y0} ${cp.nu}`,
                                    disabled: !w,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": n,
                                    children: (0, a.jsx)(t5.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: cp.Qu,
                                    }),
                                });
                            },
                        }),
                        eK
                            ? (0, a.jsx)("div", {
                                  ref: eF,
                                  className: cp.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(cj, { text: eH, offering: eB && null == ee, typed: null != ee }),
                              })
                            : null,
                        (0, a.jsx)(ak.A, { id: eG, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(i7.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(uZ.A, {
                                editor: k,
                                containerClassName: h()(cp.sq, nN.dv),
                                className: cp.jp,
                                readOnly: !w,
                                canFocus: w,
                                onChange: T,
                                onBlur: () => R(null),
                                onKeyDown: eN,
                                onPaste: eC,
                                renderExtraElement: cg,
                                "aria-labelledby": eG,
                                "aria-describedby": eK ? eU : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eg,
                                "aria-controls": eg ? ex : void 0,
                                "aria-activedescendant": eg ? ((0, u5.aI)(ep) ?? void 0) : void 0,
                            }),
                        }),
                        eK ? (0, a.jsx)(ak.A, { id: eU, children: eO }) : null,
                        (0, a.jsx)("div", {
                            className: cp.Sz,
                            children:
                                r && null != c
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${cp.Y0} ${cp.$E}`,
                                              disabled: z,
                                              onClick: ey,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(se.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : b?.tierSettings != null && null != y
                                      ? (0, a.jsx)(nw, {
                                            settings: b.tierSettings,
                                            tiers: b.tiers,
                                            choices: b.choices,
                                            disabled: !w,
                                            onChange: y,
                                            className: `${cp.Y0} ${cp.$E}`,
                                            icon: (0, a.jsx)(t6.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        O
                            ? (0, a.jsxs)("div", {
                                  className: cp.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: cp.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: cp.rt,
                                          disabled: !Q,
                                          "aria-label": E.intl.string(S.default.rxW2cl),
                                          children: (0, a.jsx)(t7.SendMessageIcon, {
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
    cy = 1500;
function cw(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var ck = n(709753),
    cN = n(540338),
    cC = n(986109);
let cA = i.createContext(null);
function cS(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(cA),
        [d, m] = i.useState(() => e$.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: h()(cC.xk, { [cC.g5]: d, [cC.Qo]: s, [cC.q3]: o }),
        children: n,
    });
}
let cE = new Map();
function cI(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let cM = "live_behind",
    c_ = "conjureTipDismissals",
    cR = new Set(),
    cP = new Set(),
    cT = 0;
function cL() {
    let e = G.w.get(c_);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function c$(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return cR.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && cL().anchor[t]?.[e.id] === n;
        case "app":
            return cL().app[t]?.includes(e.id) === !0;
        case "forever":
            return cL().forever.includes(e.id);
    }
}
function cD(e) {
    return (cP.add(e), () => cP.delete(e));
}
let cO = [12e4];
var cq = n(292771);
function cz(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
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
            className: cq.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(cq.qd, e.leaving ? cq.dv : cq.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function cF(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var cU = n(247171);
function cG(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(cU.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(cU.gutter, cU[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: cU.content, children: i }),
        ],
    });
}
var cB = n(830205);
function cH(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cG, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: cB.aK,
        children: (0, a.jsxs)("div", {
            className: cB.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: cB.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: cB.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tk.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eZ.P,
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
function cK(e) {
    let { projectId: t } = e,
        n = i.useContext(tR.bI);
    return (0, a.jsx)(cH, {
        icon: eF.ShieldIcon,
        children: E.intl.format(S.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tR.vL)(t, n.guildId));
            },
        }),
    });
}
var cV = n(443865),
    cW = n(716502);
function cX(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cG, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: cW.Nr,
        children: (0, a.jsxs)("section", {
            className: cW.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: cW.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tk.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eZ.P,
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
function cZ(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: cW.DD,
        children: t,
    });
}
function cY(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: cW.rf,
        children: t,
    });
}
function cJ(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: cW.o1, children: t });
}
var cQ = n(95635);
function c0(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = rS(t, n);
    return (0, a.jsx)(cH, {
        icon: cQ.UploadIcon,
        onDismiss: l,
        children: E.intl.format(S.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let c1 = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && cF(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(cK, { projectId: n });
        },
    },
    {
        id: cM,
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
                (null != n.publishCta && ua(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(cM)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(c0, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, publish: n, justRemixed: l, noTurnsYet: r, ideasIntroAnchorId: a } = e;
            return null == a || cF(n) ? null : null != t || l || r ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(cX, {
                icon: cV.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(cZ, { children: E.intl.string(S.default.OJlbhX) }),
                    (0, a.jsx)(cY, { children: E.intl.string(S.default["3vJBni"]) }),
                    (0, a.jsx)(cJ, {
                        children: (0, a.jsx)(eL.$, {
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
    },
];
var c2 = n(817921);
function c3(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                var a;
                let s = (0, tR.Ay)(e),
                    u = (0, o.bG)([a2.default], () => a2.default.getCurrentUser()?.id),
                    c = t.at(-1),
                    d = null != c ? Math.max(c.created_at, c.finished_at ?? 0, c.settled_at ?? 0) : null,
                    m = (function (e, t) {
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
                    f = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (
                                "publish_notice" !== n.kind &&
                                "project_event" !== n.kind &&
                                "context_boundary" !== n.kind
                            ) {
                                if ("user" === n.role) return null;
                                if ((0, ax.BL)(n)) return n;
                                if (!(0, ax.B0)(e, t)) break;
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
                    p = g?.publishNotice?.update === !1 && 0 === cI(t, g.created_at, u) ? g.id : null,
                    x = c?.projectEvent?.type === "remixed" ? c.projectEvent : null,
                    v = x?.id ?? p;
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    idleMs: null != d ? Math.max(0, m - d) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = cE.get(`${e}:${n}`);
                        return null != l ? cI(t, l, u) : null;
                    },
                    isDismissed: (t) => c$(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, cO);
            i.useSyncExternalStore(cD, () => cT);
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
                c = [s, u].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of c)
                        0 !== a.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                cE.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                c.map((e) => ({
                    ...e,
                    options: {
                        context: a,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                          if (null == e.dismissal || c$(e, t, n)) return;
                                          let l = cL();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  cR.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  G.w.set(c_, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  G.w.set(c_, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  G.w.set(c_, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (cT++, cP.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(c1, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(cS, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: c2.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(cz, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var c4 = n(52133),
    c5 = n(732159),
    c6 = n(888366),
    c7 = n(862026),
    c8 = n(291192);
function c9(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, c7.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: c8.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: c8.Sp,
                children: [
                    (0, a.jsx)("span", { className: c8.q3 }),
                    (0, a.jsxs)("span", {
                        className: c8.g8,
                        children: [
                            (0, a.jsx)(c6.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: c8.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: c8.nM,
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
                                          (0, a.jsx)(aY.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tq.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(c5.u, {
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
function de(e) {
    return (0, o.bG)([ek.Ay, tB.A], () => {
        let t = ek.Ay.getProject(e);
        return null == t ? "" : (tB.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var dt = n(951465),
    dn = n(369455);
function dl(e) {
    let { projectId: t, notice: n } = e,
        l = de(t),
        r = (0, o.bG)([ek.Ay, d.A], () => {
            let e = ek.Ay.getProject(t);
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
            n.update && null != n.published_revision ? (0, a.jsx)(dr, { projectId: t, notice: n }) : null,
        ],
    });
}
function dr(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tR.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [rv.A, ek.Ay],
                    () => {
                        let r = rv.A.getPublishStatus(e),
                            a = ek.Ay.getProject(e);
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
                                (0, ek.jf)(a),
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
                                        className: dn.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, u.pX)(q.BVt.CHANNEL(t, n, l));
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
                                        r = ek.Ay.getProject(e),
                                        a = null == r ? null : (0, tR.KL)(r, l);
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
                                null != e && (0, dt.A)(e);
                            },
                        }),
              ],
          });
}
var da = n(940874),
    di = n(505527),
    ds = n(930390),
    du = n(521981),
    dc = n(491182),
    dd = n(438729),
    dm = n(622868),
    df = n(448368),
    dh = n(837528),
    dg = n(470964),
    dp = n(715628),
    dx = n(752636),
    dv = n(9842),
    dj = n(589022),
    db = n(994500),
    dy = n(967198);
let dw = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function dk(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function dN(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function dC(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = dN(e, t),
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
    if (dk(r) && dk(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && dk(dN(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function dA(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
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
                      for (; a > 0 && dC(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && dw.has(e.charAt(l - 1));) l--;
                                    return dw.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && dC(t, o);) o++;
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
var dS = n(624479),
    dE = n(890377),
    dI = n(180227);
function dM(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(dI.QE, { [dI.Rn]: t }),
              children: (0, a.jsx)(oP.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          oP.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function d_(e) {
    return tS.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: dS.CopyIcon, onClick: () => (0, tS.C)(e) }]
        : [];
}
function dR(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: dE.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: eZ.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(dM, { groupStart: n, actions: [...r, ...d_(t)] });
}
function dP(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: rz.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: tj.BugIcon, onClick: r }];
    return (0, a.jsx)(dM, { groupStart: n, actions: [...i, ...d_(t), ...s] });
}
let dT = (0, or.createChannelRecord)({ id: "conjure-builder", type: q.rbe.DM }),
    dL = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function d$(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(dI.Yq, { [dI.x1]: t }), children: e });
}
function dD(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let dO = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function dq(e, t, n) {
    let { content: l } = (0, dg.A)(e, dO),
        r = i.useMemo(() => ((0, i7.aW)(e.content) ? (0, du.z2)(uq.U, e, dO).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: dT, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(dd.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, dp.A)(s, r);
}
function dz(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, dh.m)(e, dT, t.usernameProfile, l),
        u = (0, dh.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([dy.A], () => dy.A.getGuildId()),
        d = (0, o.bG)([a2.default], () => a2.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = a2.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(dj.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function dF(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, i7.aW)(n.content)
                          ? (0, du.z2)(uq.U, n, e).content
                          : (0, du.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: dI.GV,
                              children: [
                                  (0, a.jsx)(nX.x, {
                                      className: dI.Rj,
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
            [db.A],
            () => ({
                isReplyAuthorBlocked: db.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: db.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, o_.X4)(n),
        m = (0, o_.X4)(t),
        f = dz(n);
    return (0, a.jsx)(df.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: dT,
        referencedMessage: { state: dv.a.LOADED, message: n },
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
function dU(e) {
    let { message: t, author: n } = e,
        l = dz(t);
    return (0, a.jsx)(dm.Ay, {
        message: t,
        channel: dT,
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
function dG(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, u4.vm)(l),
        c = i.useMemo(() => (0, o_.FT)(u, null), [u]),
        d = i.useMemo(() => n8(t), [t]),
        m = d?.body ?? t,
        f = (0, u1.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, ol.Ay)({ channelId: dT.id, content: m, author: u });
            return (0, on.rh)({ ...e, timestamp: dD(n, e.timestamp), state: q.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              dB,
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
function dB(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = dq(t, l);
    return (0, a.jsx)(dc.A, {
        className: dI.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(dU, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: dI.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: dI.GV,
                              children: [
                                  (0, a.jsx)(nX.x, {
                                      className: dI.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: dI.WO, children: u }),
                      ],
                  }),
        childrenAccessories: d$(i, "" !== l),
        childrenButtons: (0, a.jsx)(dR, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function dH(e) {
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
        { text: m, revealing: f } = dA(t, { streaming: (0, o.bG)([t8.A], () => c && t8.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, o_.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, u4.vm)(p),
        v = i.useMemo(() => (null == r ? null : n8(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, ol.Ay)({ channelId: dT.id, content: v?.body ?? r.content, author: x });
            return (0, on.rh)({ ...e, id: r.id, timestamp: dD(r.createdAt, e.timestamp), state: q.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: dT.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, ol.Ay)({ channelId: dT.id, content: "", author: dL })),
        w = i.useMemo(
            () =>
                (0, on.rh)({
                    ...y,
                    timestamp: dD(n, y.timestamp),
                    state: q.cmJ.SENT,
                    ...(null != b ? { type: q.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        k = i.useMemo(() => w.set("content", m), [w, m]),
        N = i.useMemo(
            () => (0, dx.A)({ message: w, channel: dT, author: g, guildId: void 0, isGroupStart: u }),
            [w, g, u],
        ),
        C = dq(k, m, dI.OS);
    return (0, a.jsxs)("div", {
        className: dI.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(dc.A, {
                className: dI.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(dF, { baseMessage: w, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: d$(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u ? (0, a.jsx)("img", { className: dI.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var dK = n(981879);
function dV(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, on.rh)(
                    { ...(0, ol.Ay)({ channelId: dT.id, content: "" }), id: `conjure:${t}`, state: q.cmJ.SENT },
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
                (K.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: dT.id,
                    messageId: l.id,
                    users: [dL],
                    emoji: e,
                    reactionType: di.v.NORMAL,
                }),
                    K.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: dT.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: di.v.NORMAL,
                    }));
            }
            return (
                t(),
                K.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    K.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: dK.H,
            children: (0, a.jsx)(ds.A, {
                message: l,
                channel: dT,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var dW = n(616e3),
    dX = n(155899);
function dZ(e) {
    let { onSelect: t, onClose: n = tu.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(eJ.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eQ.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eQ.Dr, {
                          id: "restore-version",
                          label: E.intl.string(S.default.H8Jfhu),
                          icon: rz.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eQ.Dr, { id: "view-trace", label: "View Trace", icon: tj.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function dY(e) {
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
        j = null != v && null != p ? () => dJ(v, p) : void 0,
        b =
            ((t =
                lV() && "assistant" === x.role && (0, ax.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [dW.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : dW.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((lB = { projectId: e, traceId: t }), [...lG])) n(e);
                      })(l, b)
                : void 0,
        w = x.in_reply_to,
        k = x.restoreProposal;
    return (0, a.jsx)(cS, {
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
                          void (0, tu.jA)(t, (e) => (0, a.jsx)(dZ, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(dH, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(dP, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != i ? () => i(w) : void 0,
            accessories: (0, a.jsx)(uB, {
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
                settingsAskId: x.id,
                publishCta: n.active ? null : x.publishCta,
                turnId: (0, ax.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: k,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != k && null != p && f
                        ? () =>
                              dJ(
                                  {
                                      sha: k.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: k.authored_at,
                                      subject: k.subject,
                                  },
                                  p,
                              )
                        : void 0,
            }),
        }),
    });
}
function dJ(e, t) {
    (0, dX.F)({ onConfirm: () => t(e) });
}
var dQ = n(288539);
function d0(e, t, n) {
    return (0, a.jsx)(dQ.A, { userId: e, content: `@${t}` }, n);
}
function d1(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, u4.Y_)(l);
            }, [l]);
            let r = (0, o.bG)([a2.default], () => (null == l ? null : a2.default.getUser(l)), [l]),
                a = (0, oi.tx)(r),
                s = de(e),
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
        })(n, l, d0),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([tP.A], () => null != t && t.length > 0 && iV({ keys: t }, tP.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(i5, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let d2 = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    al.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, i7.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(cS, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dG, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(uO.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(u0, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(dV, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, da.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(cS, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dH, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(uO.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(cS, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uG, {
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
                    return (0, a.jsx)(cS, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dH, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(dl, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(cS, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dH, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(d1, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(cS, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(c9, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(cS, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uG, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(cS, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uG, {
                            projectId: l,
                            steps: d3,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(dY, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, c4.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, c4.A)(e.row, t.row, ["message"]) &&
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
                (0, c4.A)(e.replyTo, t.replyTo) &&
                (0, c4.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    d3 = [],
    d4 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    d5 = new WeakMap();
function d6(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function d7(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let d8 = i.memo(function (e) {
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
        w = i.useRef(null),
        [k, N] = i.useState(null),
        C = i.useCallback((e) => {
            ((w.current = e), N(e));
        }, []),
        [A, I] = i.useState(null),
        M = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(M.current), []);
    let _ = i.useCallback((e) => {
            (I(e), window.clearTimeout(M.current), (M.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        R = (0, o.bG)([rv.A], () => rv.A.getPublishStatus(t)),
        T = (0, o.bG)([a2.default], () => a2.default.getCurrentUser()?.id),
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
                                        let t = (0, ap.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = d5.get(r);
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
                        let a = !(0, ax.BL)(e),
                            i = st({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, ap.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, ap.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && d4.test(n.prose.content)) m = !0;
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
                                        turnActive: av(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = d4.test(e.content ?? "");
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
                    (d5.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return ur(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, R)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = ui.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), ui.set(t, n)), n);
                      })),
                m,
            );
        }, [n, R, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, O] = i.useState(null),
        q = (function (e, t, n) {
            if (null == t) return d6(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : d7(e, t.endKey, t.end - 1) + 1,
                a = d7(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), d6(e, a, r));
        })($, D, x),
        z = i.useRef(q),
        F = i.useRef($),
        U = i.useRef(L),
        G = i.useRef(null),
        B = i.useRef(null),
        H = i.useRef(new Set()),
        K = i.useCallback(() => {
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
            G.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [g]),
        V = i.useCallback(() => {
            let e = g.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), d6(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), d6(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? d6(e, i, t.end) : null;
            })(F.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: p.current,
            });
            "older" === n ? (0, P.loadOlderHistory)(t) : null != n && O(n);
        }, [g, p, t]);
    i.useImperativeHandle(
        b,
        () => ({
            handleScroll() {
                (K(),
                    O((e) => {
                        let t = z.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    V());
            },
            recordAnchor: K,
            showLatest(e) {
                ((B.current = e ?? null), O(null));
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
                let r = w.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), O(z.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), _(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, P.loadOlderHistory)(t) && (W.current = e);
                    return;
                }
                (j(),
                    (B.current = () => {
                        (w.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            _(e));
                    }),
                    O(((n = F.current), d6(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [_, j, t],
        );
    (i.useEffect(() => {
        let e = W.current;
        null != e && X(e);
    }, [L, X]),
        i.useLayoutEffect(() => {
            if (null == k) return;
            let e = k.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), p.current ? g.current?.scrollToBottom() : K());
                });
            return (t.observe(k), () => t.disconnect());
        }, [k, K, g, p]));
    let Z = null == q.endKey;
    (i.useEffect(() => y?.(Z), [Z, y]),
        i.useLayoutEffect(() => {
            ((z.current = q), (F.current = $), (U.current = L));
        }),
        i.useLayoutEffect(() => {
            let e = g.current?.getScrollerNode(),
                t = w.current;
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
                ((B.current = null), l?.(), K(), V());
            }
            H.current = new Set($);
        }, [L, $, q.start, q.end, g, p, K, V]));
    let Y = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, ax.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, ax.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([tP.A], () => tP.A.getSettings(t)?.secrets, [t]),
        er = (0, ck.WT)(t),
        ea = i.useMemo(() => (0, iH.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(cC.x7, cC.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: cC.Ub, children: (0, a.jsx)(nn.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: cC.x7,
            children: (0, a.jsx)(cS, { role: "assistant", children: (0, a.jsx)(dH, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(cA.Provider, {
        value: H,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: cC.x7,
            children: [
                L.slice(q.start, q.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            d2,
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
                        d2,
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
                              cS,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(dH, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(cN.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && Z
                    ? (0, a.jsx)(cS, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(dH, {
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
                Z ? (0, a.jsx)(c3, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var d9 = n(731084),
    me = n(823376),
    mt = n(187447);
function mn(e) {
    let { activity: t, id: n } = e,
        l = (0, ag.j)(),
        { text: r, revealing: s } = dA(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: mt.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(af.Ch, {
                ref: o,
                className: mt.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(uU.PT, mt.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: om.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var ml = n(53659);
function mr(e) {
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
        b = (0, d9.xu)({
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
        w = b === d9.kx["0"],
        [k, N] = i.useState(m ?? y),
        A = (0, ag.j)();
    (l || (0, d9.E4)(y, k) || (!A && !w)) && k !== y && N(y);
    let I = i.useRef(y);
    (i.useEffect(() => {
        I.current = y;
    }, [y]),
        i.useEffect(() => {
            f?.(k);
        }, [k, f]));
    let M = i.useRef(null),
        _ = i.useRef(k);
    i.useEffect(() => {
        _.current = k;
    }, [k]);
    let R = i.useRef(w),
        P = i.useRef(0);
    (i.useEffect(() => {
        ((R.current = w), !w && (0, d9.E8)(_.current) && N(I.current));
    }, [w]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                R.current
                    ? ((P.current = (0, d9.E8)(_.current) ? P.current + 1 : 0), N((0, d9.Ov)(P.current)))
                    : I.current !== _.current
                      ? N(I.current)
                      : M.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, d9.FZ)),
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
        O = i.useCallback(() => j(null), []);
    return (0, a.jsx)(eY.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: O,
        renderPopout: () => (0, a.jsx)(mn, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: g,
                className: h()(ml.hF, T && ml.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : w
                            ? d9.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: ml.bl,
                        children: (0, a.jsx)(me.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: ml.xu,
                        "aria-hidden": !!u || !!w || void 0,
                        children: A
                            ? (0, a.jsx)(uH.o, {
                                  ref: M,
                                  text: k,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: d9.vg,
                                  delay: null,
                                  className: ml.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: ml.yE,
                                  children: k,
                              }),
                    }),
                ],
            }),
    });
}
let ma = { second: 1e3, minute: 6e4 };
function mi(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = ma[t];
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
var ms = n(719374);
function mo(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = mi(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: ms.$,
        "data-conjure-turn-timer": !0,
        children: (0, su.C7)(l),
    });
}
function mu(e) {
    let { startedAt: t } = e,
        n = mi(t, "minute");
    return (0, a.jsx)(ak.A, { role: "timer", children: (0, su.Us)(n) });
}
var mc = n(885574),
    md = n(242779),
    mm = n(436804);
function mf(e) {
    return e.toLocaleString();
}
function mh(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: mm.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: mm.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [mf((0, md.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    mf(n.input_tokens),
                    " in \xb7 ",
                    mf(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${mf(n.cache_creation_input_tokens)} cache write \xb7 ${mf(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function mg(e) {
    let { project: t } = e,
        n = (0, md.wU)(t.compaction),
        l = (0, md.wU)(t.classifier),
        r = (0, md.wV)(t.orchestrator, t.codegen),
        i = (0, md.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: mm.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: mm.Q$,
                children: (0, a.jsxs)("div", {
                    className: mm.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [mf((0, md.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(mh, { label: E.intl.string(S.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(mh, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(mh, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: mm.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, md.sj)(i) ? "\u2014" : `${Math.round(100 * (0, md.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function mp(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eY.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(mg, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: mm.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(mc.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var mx = n(997421);
function mv(e) {
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
        g = (0, l$.Zv)(t),
        p = (0, o.bG)([rv.A], () => rv.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, d9.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, d9.uc)(f),
        w = null != s,
        k = s ?? (n ? l : void 0),
        N = n || r || w || !0 === m;
    return (0, a.jsxs)("div", {
        className: mx.jf,
        children: [
            (0, a.jsxs)("div", {
                className: mx.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || g || p
                        ? (0, a.jsx)(mr, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: w,
                              recalling: u,
                              controlling: g,
                              publishPending: p && N,
                              publishing: p,
                              spoken: x,
                              onSpokenChange: b,
                          })
                        : null,
                    null != k ? (0, a.jsx)(mo, { startedAt: k }) : null,
                ],
            }),
            null != k ? (0, a.jsx)(mu, { startedAt: k }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: mx.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(mp, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, d9.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: mx.XF,
                      children: (0, d9.Db)(h),
                  }),
        ],
    });
}
let mj = ["wheel", "touchstart", "pointerdown", "keydown"];
var mb = n(608711);
let my = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function mw(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        c,
        m,
        { projectId: f, restoreState: h, onRestoreVersion: g, onImportProject: p } = e,
        x = (0, o.bG)([X.A], () => X.A.getMessages(f), [f]),
        b = (0, o.bG)([P.default], () => P.default.getConnState(f), [f]),
        y = (0, o.bG)([X.A], () => X.A.getProjectUsage(f), [f]),
        w = (0, o.bG)([X.A], () => X.A.getThinkingActivity(f), [f]),
        k = (0, o.bG)([X.A], () => X.A.isCompacting(f), [f]),
        C = (0, o.bG)([X.A], () => X.A.isSaving(f), [f]),
        A = iq(f),
        I = (0, o.bG)([iL.A], () => iL.A.getModelSettings(f), [f]),
        M = i.useRef(null),
        _ = i.useRef(null),
        R = i.useRef(null),
        {
            stickToBottomRef: T,
            pinned: L,
            atBottom: $,
            unpin: D,
            releasePinHold: O,
            showsLatest: q,
            showsLatestRef: z,
            handleShowsLatestChange: F,
            updatePin: U,
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
                    for (let e of mj) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of mj) t.removeEventListener(e, u);
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
        })(_),
        B = i.useCallback(() => {
            function e() {
                let e = M.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (O(), z.current ? e() : R.current?.showLatest(e));
        }, [O, z]),
        H = i.useCallback(() => {
            (U(), R.current?.handleScroll());
        }, [U]);
    (i.useLayoutEffect(() => {
        let e = M.current;
        if (null == e) return;
        let t = _.current?.getScrollerNode(),
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
                r && (T.current ? _.current?.scrollToBottom() : R.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [T]),
        i.useEffect(() => {
            (0, P.ensureConnection)(f);
        }, [f]),
        (0, i8.E1)(f, (0, ag.j)()));
    let K = lc(f),
        V = (function (e) {
            let t = (0, tR.Ay)(e),
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
        })(f),
        W =
            ((l = (0, o.bG)([iD.A], () => iD.A.getFailure(f))),
            (r = i.useCallback(() => (0, iO.CM)(f), [f])),
            null == l
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: l }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: r },
                  }),
        Z = (0, o.bG)([iD.A], () => iD.A.getSetupStartedAt(f), [f]),
        Y = i.useCallback(
            (e, t) => {
                (0, P.sendUserMessage)(f, e, t);
            },
            [f],
        ),
        J = i.useCallback(
            (e, t, n) => {
                let l = n ?? Y;
                0 === K.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => n2(e.comment)),
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
                                      a.push(`${t + 1}. ${n5(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: K.annotations, metaComment: e, context: K.context }),
                          t,
                      ),
                      li(f));
            },
            [K, Y, f],
        ),
        Q = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of an)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, P.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = an.get(e);
                            (an.delete(e), ar(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(f) ||
                X.A.isThinking(f)) &&
                (0, P.interruptTurn)(f);
        }, [f]),
        ee = i.useCallback((e) => ey(f, e.implementation_prompt), [f]),
        [et, en] = (function (e) {
            let [t, n] = i.useState(() => i9(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? i9(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(f),
        el = i.useCallback(() => Y(E.intl.string(S.default["t5CN3+"])), [Y]),
        er = i.useCallback((e, t, n) => ey(f, e, { clarificationAnswers: t, attachments: n }), [f]),
        ea = i.useCallback((e) => (0, i$.X)(f, e), [f]),
        es = i.useCallback((e) => (0, ei.vX)(f, e), [f]),
        eo = i.useCallback((e) => no(f, "chat", Array.from(e), es), [f, es]),
        eu = i.useCallback(() => ey(f, E.intl.string(S.default.Zc7gML)), [f]),
        ec = h?.status === "restoring",
        ed = "open" === b && !ec,
        em = x[x.length - 1],
        ef = null != em && "assistant" === em.role && null != em.proposal,
        [eh, eg] = i.useState(null),
        ep = em?.clarification != null && em.clarification.id !== eh ? em.clarification : null,
        ex = i.useCallback(() => {
            null != ep && eg(ep.id);
        }, [ep]),
        [ev, ej] = i.useState(null),
        eb = (function (e) {
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
        })(f),
        ew = em?.appBuildRequest != null && (0, ax.BL)(em) && em.appBuildRequest.id !== ev ? em.appBuildRequest : null,
        eC = eb.request ?? (null == ep ? ew : null),
        eS = null == eb.request ? ep : null,
        e_ = null != eC && eC === eb.request,
        { close: eR, sent: eP } = eb,
        eT = eb.request?.id,
        e$ = i.useCallback(() => {
            e_ ? eR() : null != eC && ej(eC.id);
        }, [eC, e_, eR]),
        eD = i.useCallback(
            (e) => {
                (null != eT && eP(eT),
                    (0, eX.P0)({
                        text: E.intl.formatToPlainString(S.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eT, eP],
        ),
        eO = (0, o.bG)([tP.A], () => tP.A.getSettings(f), [f]),
        [eq, ez] = i.useState(null),
        eF = iJ(),
        eU =
            null != em &&
            ((t = em.id),
            (s = (0, iH.Mv)(x, eO?.secrets)),
            (u = iQ(x)),
            x.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, ax.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !i0(e.settingsRequest, eO, eF.has(e.id)))),
            )),
        eG =
            null != em &&
            "assistant" === em.role &&
            null != em.settingsRequest &&
            null == em.secretRequest &&
            (0, ax.BL)(em) &&
            em.id !== eq &&
            ((n = em.settingsRequest),
            (c = n.keys ?? []),
            null != eO &&
                0 !== c.length &&
                c.every((e) => {
                    let t = eO.schema.find((t) => t.key === e);
                    return null != t && iK.has(t.type);
                })) &&
            iV(em.settingsRequest, eO) &&
            !eU
                ? em
                : null,
        eH = null == eb.request ? eG : null,
        eK = eH?.settingsRequest ?? null,
        eV = i.useCallback(() => {
            null != eG && ez(eG.id);
        }, [eG]),
        eW = null != eK,
        [eY, eJ] = i.useState(null),
        eQ = eS?.id ?? eC?.id ?? eH?.id ?? (A ? "scope-setup" : void 0),
        e0 = null != ep || null != eC || null != eG || A;
    i.useLayoutEffect(() => {
        let e = _.current?.getScrollerNode(),
            t = eY?.firstElementChild;
        if (null == eY || null == e || !(0, eB.vq)(t, HTMLElement) || null == eQ) return;
        function n() {
            T.current && _.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eY.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eY, eQ, _, T]);
    let e1 = (0, o.bG)([X.A], () => X.A.hasLoadedHistory(f), [f]),
        e2 = (function (e) {
            let t = iq(e),
                n = (0, o.bG)([ek.Ay], () => null != ek.Ay.getProject(e), [e]),
                l = (0, o.bG)([X.A], () => X.A.hasLoadedHistory(e), [e]),
                r = (0, o.bG)([X.A], () => X.A.getMessages(e), [e]),
                a = (0, o.bG)([P.default], () => P.default.getConnState(e), [e]),
                [s, u] = i.useState(0);
            return (
                i.useLayoutEffect(() => {
                    !(function (e, t) {
                        let n = eE()[e],
                            l = ek.Ay.getProject(e);
                        if (null == n || null == l || !X.A.hasLoadedHistory(e)) return;
                        let r = X.A.getMessages(e),
                            a = (0, P.optimisticMessageId)(n.nonce);
                        if (!0 === n.sent) {
                            let i = r.some(
                                    (e) => "user" === e.role && !0 !== e.held && e.id !== a && e.content === n.message,
                                ),
                                s = X.A.getHistoryLoads(e) > (eA.get(e) ?? 0);
                            i
                                ? eI(e)
                                : !s ||
                                  null != l.install_scope_setup ||
                                  X.A.isHistoryUnavailable(e) ||
                                  X.A.isThinking(e) ||
                                  eM(e, n, t);
                            return;
                        }
                        if (null != l.install_scope_setup) {
                            r.some((e) => e.id === a) ||
                                (0, P.showUserMessage)(e, n.message, n.attachments, { held: !0, nonce: n.nonce });
                            return;
                        }
                        "open" === P.default.getConnState(e) &&
                            (G.w.set(eN, { ...eE(), [e]: { ...n, sent: !0 } }),
                            eA.set(e, X.A.getHistoryLoads(e)),
                            (0, P.sendUserMessage)(e, n.message, n.attachments, { nonce: n.nonce }) || eM(e, n, t));
                    })(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, a]),
                s
            );
        })(f),
        e3 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: e1,
            historyUnavailable: (0, o.bG)([X.A], () => X.A.isHistoryUnavailable(f), [f]),
            connState: b,
        }),
        e4 = "loading" === e3 && 0 === x.length,
        e5 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < f.length; t++) e = (31 * e + f.charCodeAt(t)) % 0x7fffffff;
            return my[e % my.length];
        }, [f]),
        e6 = ef ? E.intl.string(S.default.Zc7gML) : "greeting" === e3 && 0 === x.length ? e5 : null,
        e7 = i.useMemo(() => {
            for (let e = x.length - 1; e >= 0; e--) {
                let t = x[e];
                if ("assistant" === t.role && !(0, ax.BL)(t)) return t;
            }
        }, [x]),
        e8 = null != e7,
        e9 =
            null != e7
                ? null != (m = e7.turn_id ?? e7.steps.find((e) => null != e.turn_id)?.turn_id) &&
                  i6.default.isProbablyAValidSnowflake(m)
                    ? i6.default.extractTimestamp(m)
                    : e7.created_at
                : void 0,
        te = ef && ed ? eu : void 0,
        tt = i.useCallback(() => ey(f, E.intl.string(S.default.EMgIuY)), [f]),
        [tn, tl] = i.useState(null),
        [tr, ta] = i.useState(e8);
    (tr !== e8 && (ta(e8), e8 || tl(null)),
        i.useEffect(() => {
            if (!e8) return;
            let e = _.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? tl(null)
                        : tl(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [e8, e7?.steps, q]));
    let ti = q ? tn : "bottom",
        ts = i.useMemo(() => (null != e7 ? (0, aj.b9)(e7.steps) : ""), [e7]),
        to = i.useMemo(() => (null != e7 ? ((0, ap.lt)(e7.steps) ?? e7.todos) : void 0), [e7]),
        tu = e7?.provisionalTodo,
        tc = null != e7 && av(e7),
        td = i.useMemo(() => {
            var e;
            return null != e7 ? ((e = e7.steps), sh((0, ap.Jf)(e, !0).tasks)) : void 0;
        }, [e7]);
    return (0, a.jsxs)("section", {
        ref: M,
        "data-conjure-chat": !0,
        className: mb.TE,
        children: [
            ed
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: nG.ir,
                      onDrop: eo,
                  })
                : null,
            (0, a.jsx)(aO, {
                onJumpToActivity: B,
                line: ts,
                placement: e8 && "top" === ti ? "top" : null,
                todos: to,
                todosLive: tc,
                provisionalTodo: tu,
                agents: td,
            }),
            (0, a.jsxs)("div", {
                className: mb.JX,
                children: [
                    (0, a.jsx)(af.Ch, {
                        ref: _,
                        onScroll: H,
                        scrollbarGutter: e4 ? "both-edges" : "stable",
                        className: [mb.N$, $ ? null : mb.hB, eW ? mb.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(i7.Fu.Provider, {
                            value: f,
                            children: (0, a.jsx)(d8, {
                                projectId: f,
                                messages: x,
                                emptyState: e3,
                                floatingSettingsMessageId: eG?.id,
                                liveClarificationId: eS?.id,
                                onPickIdea: ed ? ee : void 0,
                                onAskForIdeas: ed ? el : void 0,
                                draftHasText: et,
                                onApprovePlan: ed ? tt : void 0,
                                onRestoreVersion: ec || e8 ? void 0 : g,
                                scrollerRef: _,
                                stickToBottomRef: T,
                                pinned: L,
                                onUnpin: D,
                                handleRef: R,
                                onShowsLatestChange: F,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: mb.NJ,
                        children: (0, a.jsx)(mv, {
                            projectId: f,
                            thinking: e8,
                            turnStartedAt: e9,
                            restoring: ec,
                            remixStartedAt: Z,
                            recalling: e4,
                            thinkingActivity: w,
                            compacting: k,
                            saving: C,
                            projectUsage: y,
                            connState: b,
                        }),
                    }),
                    A
                        ? (0, a.jsx)("div", { ref: eJ, className: mb.B5, children: (0, a.jsx)(iG, { projectId: f }) })
                        : null,
                    null == eS
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eJ,
                              className: eW ? `${mb.B5} ${mb.J9}` : mb.B5,
                              children:
                                  null != eS.install_scope_switch
                                      ? (0, a.jsx)(
                                            iB,
                                            {
                                                projectId: f,
                                                clarification: eS,
                                                offer: eS.install_scope_switch,
                                                onKept: ex,
                                            },
                                            eS.id,
                                        )
                                      : (0, a.jsx)(
                                            iT,
                                            {
                                                projectId: f,
                                                clarification: eS,
                                                onSubmit: ed ? er : void 0,
                                                onDismiss: ex,
                                            },
                                            eS.id,
                                        ),
                          }),
                    null == eC
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eJ,
                              className: mb.B5,
                              children: (0, a.jsx)(
                                  aW,
                                  { projectId: f, request: eC, canSend: ed, onDismiss: e$, onSent: e_ ? eD : void 0 },
                                  eC.id,
                              ),
                          }),
                    null == eK
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eS && null == eC ? eJ : void 0,
                              className: mb.B5,
                              children: (0, a.jsx)(
                                  i5,
                                  { askId: eH?.id, projectId: f, request: eK, onDismiss: eV },
                                  eH?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mb.Jx,
                children: [
                    (0, a.jsx)(aO, {
                        onJumpToActivity: B,
                        line: ts,
                        placement: e8 && "bottom" === ti ? "bottom" : null,
                        todos: to,
                        todosLive: tc,
                        provisionalTodo: tu,
                        agents: td,
                    }),
                    0 === K.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mb.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(S.default["7b49dS"], {
                                          count: K.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(S.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(eL.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(S.default["/zOv9+"]),
                                      onClick: () => li(f),
                                  }),
                              ],
                          }),
                    null == W
                        ? null
                        : (0, a.jsx)("div", {
                              className: mb.qB,
                              children: (0, a.jsx)(ah.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: W.message,
                                  action: W.retry,
                              }),
                          }),
                    null == V
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mb.Db,
                              children: [
                                  (0, a.jsx)(ah.w, { type: "warning", role: "status", message: V.message }),
                                  (0, a.jsx)("div", {
                                      className: mb.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tk.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: eZ.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: V.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(
                        cb,
                        {
                            projectId: f,
                            canSend: ed,
                            running: e8,
                            restoring: ec,
                            onSend: J,
                            hasPendingContext: K.annotations.length > 0,
                            onInterrupt: ed ? Q : void 0,
                            onUploadFile: es,
                            onImport: p,
                            onSendToOtherProjects: e0 ? void 0 : eb.open,
                            onApprove: te,
                            suggestion: e6,
                            questionOpen: e0,
                            modelSettings: I,
                            onModelSettingsChange: ea,
                            onDraftHasTextChange: en,
                            inputLocked: A,
                        },
                        e2,
                    ),
                ],
            }),
        ],
    });
}
var mk = n(761508),
    mN = n(933294),
    mC = n(207438),
    mA = n(683438);
function mS(e, t) {
    return String(e).padStart(t, "0");
}
function mE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${mS(l.getHours(), 2)}:${mS(l.getMinutes(), 2)}:${mS(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${mS(l.getMilliseconds(), 3)}` : r;
}
var mI = n(667931);
let mM = {
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
    m_ = { running: "Running", ok: "Done", error: "Failed" };
function mR(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function mP(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function mT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function mL(e) {
    return mP(e.count > 1 ? e.totalMs : e.end - e.start);
}
let m$ = ["Arguments", "Result", "Usage", "Details"];
function mD(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function mO(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function mq(e) {
    let t = (0, mI.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, mI.lp)(e) ? "interrupted" : "still running";
}
function mz(e) {
    return [mE(new Date(e.started_at).toISOString()) ?? "", mT(e.spans.length), (0, mI.Sj)((0, mI.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function mF(e) {
    let t = (0, mI.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, mI.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += mU(r, "in")),
                (l.output += mU(r, "out")),
                (l.cacheRead += mU(r, "cache_read")),
                (l.cacheWrite += mU(r, "cache_write")),
                (l.costUsd += mU(r, "cost_usd"))));
    }
    let r = mI.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function mU(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var mG = n(738188),
    mB = n(430993),
    mH = n(364840),
    mK = n(224640),
    mV = n(20742);
let mW = { collapsed: new Set(), revealed: new Set() };
var mX = n(872892);
let mZ = {
    op: mX.Q,
    model: mX.i3,
    tool: mX.dH,
    setup: mX.kc,
    worktree: mX.Qx,
    sandbox: mX.QH,
    build: mX.F1,
    platform: mX.Op,
    other: mX.fv,
};
function mY(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      mT(t.calls, "model call"),
                      `${mR(t.input)} in`,
                      `${mR(t.output)} out`,
                      `${mR(t.cacheRead)} cache read`,
                      `${mR(t.cacheWrite)} cache write`,
                      mO(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: mX.M1,
        children: [
            (0, a.jsx)("div", {
                className: mX.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${mX.DJ} ${mZ[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: mX.o1,
                children: mI.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${mP(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: mX.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${mX.nf} ${mZ[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: mM[e] }),
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
function mJ(e) {
    return `conjure-perf-trace-${e}`;
}
function mQ(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: mX.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${mX.p0} ${s + o > 85 ? mX.EU : mX.jh}`,
                children: i,
            }),
        ],
    });
}
function m0(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? nm._ : ri.a,
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
        id: mJ(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${mX.$y} ${r ? mX.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: mX.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: mX.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: mX.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: mX.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${mX.nf} ${mZ[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: mX.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: mX.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: mX.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(mG.WarningIcon, { size: "xs", color: "currentColor", className: mX.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(mQ, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${mX.M0} ${mX.Nh}`
                    : t.running
                      ? `${mX.M0} ${mX.rF}`
                      : `${mX.M0} ${mZ[t.category]}`,
                duration: mL(t),
            }),
        ],
    });
}
function m1(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: mJ(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${mX.$y} ${l ? mX.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: mX.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: mX.ai,
                        children: (0, a.jsx)(nm._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: mX.U9 }),
                    (0, a.jsx)("span", { className: `${mX.nf} ${mX.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: mX.MQ,
                        children: mT(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(mQ, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${mX.M0} ${mX.ab} ${mX.dL}`,
                duration: mP(t.totalMs),
            }),
        ],
    });
}
function m2(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: mX._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: mX.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${mX.nf} ${mZ[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [mD("Start", `+${mP(e.start)}`), mD("Duration", mL(e))];
                      e.count > 1
                          ? t.push(
                                mD("Calls", String(e.count)),
                                mD("Longest call", mP(e.maxMs)),
                                mD("Spread over", mP(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(mD("Self time", mP(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(mD("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(mD("Notes", l.join(", "))),
                          null != e.span.error && t.push(mD("Error", e.span.error)));
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
                              s = "cost_usd" === t ? mO(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), mD(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...m$.flatMap((e) => {
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
                                            className: mX.xd,
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
                                                            className: mX.vl,
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
function m3(e) {
    let { trace: t } = e,
        n = i.useMemo(() => mF(t), [t]);
    return (0, a.jsx)(mY, { stats: n });
}
function m4(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, mI.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? mW : (0, mI.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, mI.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, mI.x7)(t)), l((n) => (0, mI._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, mI.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mI.IE)(t, e);
                        null != n && l((e) => (0, mI.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mI.IE)(t, e);
                        null != n && l((e) => (0, mI.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, mI.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, mI.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, mI.hB)(t));
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
        f = (0, mI.dj)(t),
        h = i.useMemo(() => (0, mI.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(mJ(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(mB.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: mX.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: mq(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: mz(t),
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
                                      children: `${mT(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(m3, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: mX.KE,
                        children: [
                            (0, a.jsx)(eL.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Time sinks",
                                onClick: n.reset,
                            }),
                            (0, a.jsx)(eL.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(eL.$, {
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
                        "aria-activedescendant": null == o ? void 0 : mJ(o),
                        className: mX.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: mX.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: mX.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: mX.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${mX.io} ${(e / f) * 100 > 85 ? mX.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : mP(e),
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
                                          m0,
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
                                    : (0, a.jsx)(m1, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(mH.j, { children: (0, a.jsx)(m2, { node: s }) }),
        ],
    });
}
function m5(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([dW.A], () => dW.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(mK.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(mV.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(mB.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(m4, { trace: i }),
        ],
    });
}
let m6 = { running: mX.Vf, ok: mX.mo, error: mX.Sr };
function m7(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${mX.Om} ${m6[t]}`, role: "img", "aria-label": m_[t] });
}
function m8(e, t) {
    (0, tq.openModal)((n) => (0, a.jsx)(m5, { ...n, projectId: e, traceId: t }));
}
function m9(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => m8(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: mX.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: mX.sU,
                children: [
                    (0, a.jsx)(m7, { status: (0, mI.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: mX._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: mq(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: mz(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function fe(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            e4(
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
    return (0, a.jsx)(eY.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eY.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(eJ.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(eQ.rX, {
                    children: (0, a.jsx)(eQ.Dr, {
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
            return (0, a.jsx)(tk.K, {
                ...e,
                buttonRef: l,
                icon: tN.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function ft(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([dW.A], () => dW.A.getTimingTraces(t), [t]),
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
                    let t = e.map(mF);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: mI.BF.map((e) => ({
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
              className: mX.Ie,
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
              className: mX.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: mX.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: mX.fH,
                              children: (0, a.jsx)(mA.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(fe, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(af.Ch, {
                      className: mX.XG,
                      children: [
                          (0, a.jsx)(mY, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: mX.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(m9, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function fn(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function fl(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function fr(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function fa(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function fi(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function fs(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let fo = ["all", "preview", "stable", "web"];
function fu(e) {
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
function fc(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: fn(e.memory_p50_bytes ?? 0),
              p999: fn(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let fd = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var fm = n(911608),
    ff = n(177427);
function fh(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: ff.KE,
        children: [
            (0, a.jsx)("div", {
                className: ff.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(nn.y, { type: nn.t.PULSING_ELLIPSIS })
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
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: fa(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(eL.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function fg(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: ff.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: ff.Gf, children: t }),
            n,
        ],
    });
}
function fp(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: ff.N8,
        children: [
            (0, a.jsxs)("div", {
                className: ff.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: ff.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: ff.kS,
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
function fx(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: ff.N8,
        children: [
            (0, a.jsxs)("div", {
                className: ff.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(fm.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? ff.dh : void 0,
            }),
        ],
    });
}
function fv(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(fp, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: fu(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(fp, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = fc(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fp, { label: E.intl.string(S.default["H/X+FI"]), value: fl(n.cpu_ms) }),
            null != l && (0, a.jsx)(fp, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function fj(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(fg, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: fu(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? fd[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(fg, {
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
                          fp,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: fl(t.cpu_ms) }),
                              hint: fc(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var fb = n(678708),
    fy = n(414499),
    fw = n(714800),
    fk = n(81466),
    fN = n(424383),
    fC = n(816943),
    fA = n(268791),
    fS = n(514042),
    fE = n(872351),
    fI = n(708988),
    fM = n(150934),
    f_ = n(417270);
let fR = "Restart Agent",
    fP = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fT(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fL(e, t) {
    return { label: e, value: null != t && "" !== t ? fa(t) : "Unknown", icon: "calendar" };
}
function f$(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fD(e, t, n, l) {
    let [r, a] = fP[n.status];
    return { label: e, value: `${f$(n.bytes)} of ${f$(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function fO(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = fa(e.at);
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
let fq = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fz(e) {
    let t = `container ${fT(e.local)} \xb7 remote ${fT(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fq[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${fr(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${fr(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${fr(n)} Ahead, ${fr(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fF = ["main", "wip"];
var fU = n(400154);
let fG = {
        checkout: fb.FolderIcon,
        edit: aZ.PencilIcon,
        remote: fy.h,
        commits: fw.e,
        calendar: fk.CalendarIcon,
        save: fN.L,
        objects: tl.R,
        download: fC.$,
        size: fA.$,
        file: fS.FileIcon,
    },
    fB = {
        ok: [nI.y, k.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [mG.WarningIcon, k.A.colors.ICON_FEEDBACK_WARNING],
        error: [nl.a, k.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [fE.z, k.A.colors.ICON_MUTED],
        behind: [fI.M, k.A.colors.ICON_MUTED],
    };
function fH(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([dW.A], () => dW.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, mC.DK)(t), [t]),
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
                    `Updated ${fa(r)}`,
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
    return (0, a.jsxs)(fg, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fU.Lj,
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
                    if (!e.running || null != e.localError) return [fO(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fO(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : fr(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fF.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fz))
                        : l.push(
                              { label: "Main", value: fT(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fT(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? fr(e.commits) : "Unknown", icon: "commits" },
                            fL("Oldest Commit", e.oldest),
                            fL("Newest Commit", e.newest),
                            fO(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${fr(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${fr(t.loose)} loose (${fn(t.looseBytes)}) \xb7 ${fr(t.packed)} packed in ${n} (${fn(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${fr(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${fr(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                fD(
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
                                  fD("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fG[r],
                        [o, u] = null != i ? fB[i] : [null, void 0];
                    return (0, a.jsx)(
                        fp,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: k.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function fK(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([dW.A], () => dW.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, mC.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = dW.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, mC.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                K.h.dispatch({
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
            let u = i.useCallback(() => (0, mC.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fR,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, tc.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: fU.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fU.nM,
                children: [
                    (0, a.jsx)(fM.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(eL.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: f_.RetryIcon,
                        text: fR,
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
                            return `Restarted \xb7 new instance since ${fa(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${fa(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fV(e, t) {
    return (0, a.jsx)(fp, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: fr((0, md.aM)(t)) }),
        hint: `${fr(t.input_tokens)} in \xb7 ${fr(t.output_tokens)} out \xb7 ${fr(t.cache_read_input_tokens)} cache read`,
    });
}
function fW(e) {
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
        { projectId: h, status: g, fetchState: p, onRefresh: x } = e,
        {
            lastTurn: j,
            lastCompaction: b,
            lastDecline: y,
            forceState: w,
            restartState: k,
            turnRunning: N,
            handleForceCompaction: C,
            handleForceCompactionOverride: A,
            handleRestartWorkspace: I,
            lifetime: M,
            limits: _,
            session: R,
            contextCeiling: P,
        } = ((t = (0, o.bG)([dW.A], () => dW.A.getLastTurnUsage(h), [h])),
        (n = (0, o.bG)([dW.A], () => dW.A.getLastCompaction(h), [h])),
        (l = (0, o.bG)([dW.A], () => dW.A.getLastCompactionDecline(h), [h])),
        (r = (0, o.bG)([dW.A], () => dW.A.getForceCompactionState(h), [h])),
        (s = (0, o.bG)([dW.A], () => dW.A.getSandboxRestartState(h), [h])),
        (u = (0, o.bG)([X.A], () => X.A.isThinking(h), [h])),
        (c = i.useCallback(() => (0, mC.Lj)(h), [h])),
        (d = i.useCallback(() => (0, mC.Lj)(h, !0), [h])),
        (m = i.useCallback(() => (0, mC.bq)(h), [h])),
        (f = g?.agent?.limits ?? null),
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
            lifetime: g?.agent?.lifetime ?? null,
            limits: f,
            session: g?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? f?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: fU.Mf,
        children: [
            (0, a.jsx)(fh, { generatedAt: g?.generated_at ?? null, fetchState: p, onRefresh: x }),
            (0, a.jsx)(fg, {
                title: E.intl.string(S.default.JghNal),
                children:
                    null == M
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(fp, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: fr((0, md.a7)(M.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: fr(M.turns) }),
                                  }),
                                  fV(E.intl.string(S.default.xtxP0e), M.orchestrator),
                                  fV(E.intl.string(S.default["9Sj3SX"]), M.codegen),
                                  fV(E.intl.string(S.default.ANCEo3), (0, md.wU)(M.compaction)),
                                  g?.agent?.outcomes != null &&
                                      Object.keys(g.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(fp, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(g.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${fr(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(fg, {
                title: E.intl.string(S.default.dZHPE5),
                children:
                    null == j
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  fV(E.intl.string(S.default["7X3i9d"]), j.total),
                                  (0, a.jsx)(fp, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((j.cache_hit_rate ?? (0, md.CA)(j.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(fg, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != b && null != P
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(fx, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: b.tokensAfter,
                                      max: P,
                                      formatValue: fr,
                                  }),
                                  (0, a.jsx)(fp, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${fr(b.tokensBefore)} \u{2192} ${fr(b.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: fr(b.retainedMessages),
                                          time: fa(b.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != P
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: fr(P) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != y &&
                        (0, a.jsx)(fp, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${fr(y.projected)} / ${fr(y.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: fa(y.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fU.Lj,
                        children: [
                            (0, a.jsx)(eL.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: C,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(S.default.wox6Ev);
                                    if ("pending" === e) return E.intl.string(S.default.OcPHQ1);
                                    let t = fa(e.observedAt);
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
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(eL.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: E.intl.string(S.default.ZxG2AI),
                                            onClick: A,
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
                        className: fU.Lj,
                        children: [
                            (0, a.jsx)(eL.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["5qCjBu"]),
                                loading: "pending" === k,
                                disabled: "pending" === k || N,
                                onClick: I,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof k && "restarted" !== k.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(S.default.mlok8D);
                                    if ("pending" === e) return E.intl.string(S.default["1ugSyK"]);
                                    let t = fa(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(k),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fK, { projectId: h }),
                ],
            }),
            (0, a.jsx)(fH, { projectId: h }),
            (null != R || g?.analytics != null) &&
                (0, a.jsxs)(fg, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != R &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(fp, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: fa(R.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(fp, { label: E.intl.string(S.default["8V8e1Z"]), value: fr(R.sockets) }),
                                    (0, a.jsx)(fp, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: R.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    R.queued_messages > 0 &&
                                        (0, a.jsx)(fp, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: fr(R.queued_messages),
                                        }),
                                ],
                            }),
                        g?.analytics != null && (0, a.jsx)(fv, { analytics: g.analytics }),
                    ],
                }),
            null != _ &&
                (0, a.jsxs)(fg, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(fp, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: fr(_.max_subagent_iterations),
                        }),
                        (0, a.jsx)(fp, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: fr(_.context_window_tokens) }),
                        }),
                        (0, a.jsx)(fp, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: fr(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(fp, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: fr(_.max_user_message_chars),
                        }),
                        (0, a.jsx)(fp, { label: E.intl.string(S.default.kIHga0), value: fr(_.max_build_attempts) }),
                        (0, a.jsx)(fp, { label: E.intl.string(S.default.Iw03yW), value: fr(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fX = n(237528),
    fZ = n(629584),
    fY = n(531893);
function fJ(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fY.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function fQ(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fY.qf,
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
              className: fY.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function f0(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fY.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var f1 = n(109079);
let f2 = i.memo(function (e) {
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
        className: f1.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: f1.Mt,
                selectable: !0,
                children: mE(n.ts) ?? n.ts,
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
                className: f1.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: f1.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: f1.Cq, children: (0, a.jsx)(fX.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: f1.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fX.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
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
                                      className: f1.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(S.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(ri.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nm._, {
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
                                          className: f1.dF,
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
function f3(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([mN.A], () => mN.A.getLogs(t), [t]),
        l = (0, o.bG)([mN.A], () => mN.A.getHistoryState(t, "logs")),
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
                fo.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return fs(e);
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
        className: f1.$F,
        children: [
            (0, a.jsxs)("div", {
                className: f1.y4,
                children: [
                    (0, a.jsx)(fZ.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: f1.KT,
                        children: (0, a.jsx)(mA.I, {
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
            n.length > 0 && (0, a.jsx)(fJ, { state: l }),
            (0, a.jsxs)(af.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: f1.sx,
                children: [
                    (0, a.jsx)(f0, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fQ, {
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
                          : d.map((e) => (0, a.jsx)(f2, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function f4(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(fg, {
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
function f5(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(fp, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: fs(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(fp, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: fr(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${fa(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(fp, { label: E.intl.string(S.default.Iz5GnJ), value: fr(l.guild_count) }),
                  (0, a.jsx)(fp, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: fr(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: fa(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(fp, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: fr(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(fp, { label: fs(n), value: E.intl.string(S.default.lTHQss) });
}
function f6(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(fp, {
        label: fs(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: fr(n.requests),
            failures: fr(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: fa(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: fa(n.since) }),
    });
}
function f7(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fp, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: fs(t) }),
                value: fr(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    fp,
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
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: fa(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function f8(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(fp, {
        label: fs(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: fr(n.calls), errors: fr(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function f9(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(fg, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(fg, {
        title: t,
        children: [
            (0, a.jsx)(fp, {
                label: E.intl.string(S.default.xtD4Zp),
                value: fr(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: fa(n.since) }),
            }),
            (0, a.jsx)(fp, { label: E.intl.string(S.default.gfRhR3), value: fr(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fx, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: fl,
                          }),
                          (0, a.jsx)(fp, {
                              label: E.intl.string(S.default.mSKImM),
                              value: fl(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: fl(n.cpu_ms_total),
                                  wall: fl(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(fp, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(fp, { label: E.intl.string(S.default.xvmL1D), value: fl(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(fp, { label: E.intl.string(S.default["4sQYwH"]), value: fr(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(fp, {
                label: E.intl.string(S.default.bQenOy),
                value: fr(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(fp, { label: E.intl.string(S.default.xgpn4Y), value: fi(n.build) }),
        ],
    });
}
function he(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(fg, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(fp, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(fp, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: fn(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: fr(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(fx, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: fn,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function ht(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fU.Mf,
        children: [
            (0, a.jsx)(fh, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(f9, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(f9, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(he, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(f4, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f5, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(f4, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f6, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(f4, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f7, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(f4, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f8, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(fj, { analytics: t.analytics }),
                        (0, a.jsxs)(fg, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(fp, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? fi(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(fp, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? fi(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var hn = n(592465);
function hl(e) {
    let { projectId: t, onClose: n } = e,
        l = lV(),
        [r, s] = i.useState(() => (l && lB?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([dW.A], () => dW.A.getStatus(t), [t]),
        c = (0, o.bG)([dW.A], () => dW.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, mC.R7)(t), (0, mC.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, P.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == lB || lB.projectId !== e) return null;
            let { traceId: t } = lB;
            return ((lB = null), t);
        })(t);
        return null != e && (m8(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        lH(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, tS.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: dW.A.getStatus(t),
                        last_turn_usage: dW.A.getLastTurnUsage(t),
                        last_compaction: dW.A.getLastCompaction(t),
                        last_compaction_decline: dW.A.getLastCompactionDecline(t),
                        timing_traces: dW.A.getTimingTraces(t),
                        logs: mN.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, eX.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: hn.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(rE.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(rE.Ay.Icon, {
                            icon: dS.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(rE.Ay.Icon, { icon: eZ.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(rE.Ay.ChannelIcon, { icon: tj.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(rE.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: hn.rf,
                children: [
                    (0, a.jsxs)(mk.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: hn.vR,
                        children: [
                            (0, a.jsx)(mk.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(mk.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(mk.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(mk.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(f3, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(ht, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(ft, { projectId: t })
                            : (0, a.jsx)(fW, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var hr = n(365912),
    ha = n(873715);
function hi(e) {
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
let hs = Object.freeze({ x: -1, y: -1 });
function ho(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = hi(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var hu = n(192888);
function hc(e, t) {
    return (0, hu.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(ho, () => ({ status: "failed" }));
}
var hd = n(108308);
let hm = { x: 25, y: 21 };
function hf(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function hh(e, t, n, l) {
    let r = hf(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function hg(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function hp(e) {
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
function hx(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = lc(u),
        m = (0, l$.Zv)(u),
        f = (0, tq.useHasAnyModalOpen)(),
        h = (0, o.bG)([a2.default], () => a2.default.getCurrentUser()),
        g = h?.id ?? null,
        [p, x] = i.useState(null),
        [j, b] = i.useState(!1),
        [y, w] = i.useState(!1),
        [k, N] = i.useState(null),
        [C, A] = i.useState(!1),
        I = i.useRef(null),
        M = i.useRef(null),
        _ = i.useRef(null),
        [R, T] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, O] = i.useState(null),
        [q, z] = i.useState(null),
        F = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, H] = i.useState(null),
        K = c && !m && !f;
    null == D || (K && D.projectId === u) || O(null);
    let V = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != V) return () => ej(V, "design");
    }, [V]);
    let W = r$(r, K);
    i.useEffect(() => {
        if (!K || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (b(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, ha.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? hp(t.response) : null;
                    null == n ? w(!0) : (x(n), ls(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (b(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [K, r, u]);
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!K || null == W || null == u) return;
        if (null == p) {
            X.current = W;
            return;
        }
        if (rL(X.current, W)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            X.current = W;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, ha.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Q.current) return;
                        let l = hp(e.response);
                        null != l && (x(l), ls(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = hi(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = ln(u)).active &&
                                0 !== r.size &&
                                ll(u, {
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
    }, [K, W, p, d, u, r]),
        i.useEffect(() => {
            if (!K)
                return () => {
                    (N(null), O(null), H(null), x(null));
                };
        }, [K]));
    let Z = i.useRef(null),
        Y = i.useRef(null),
        J = i.useRef(!1),
        Q = i.useRef(!1);
    i.useEffect(() => {
        ((Q.current = K), K || ((Z.current = null), (Y.current = null), (_.current = null), A(!1)));
    }, [K]);
    let ee = i.useCallback(
            function e() {
                if (J.current) return;
                let t = Z.current;
                if (null == t) return;
                Z.current = null;
                let n = r();
                null != n &&
                    ((J.current = !0),
                    hc(n, t).then((t) => {
                        if (((J.current = !1), Q.current)) {
                            if ("picked" !== t.status || hk(t.target, ea.current.rect, ea.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = n3(t.target);
                                (T((t) => (hw(t, e) ? t : e)),
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
        et = i.useCallback(() => {
            if (null == D) return;
            let e = !F.current;
            (z({ at: D.at, label: D.label, draft: D.draft, instant: e }), G(e), O(null));
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
            if (null == q) return;
            let e = setTimeout(() => z(null), hb);
            return () => clearTimeout(e);
        }, [q]));
    let en = null == p || null == W || p.viewport.width < 1 ? 1 : W.width / p.viewport.width,
        el = null != p || y,
        er = i.useMemo(() => p?.elements ?? [], [p]),
        ea = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ea.current = { rect: W, scale: en };
    }, [W, en]);
    let es = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (ej(u, "design"),
                    H(null),
                    (F.current = !1),
                    O({ projectId: u, target: e, anchor: t, draft: "", at: n, label: n3(e) }));
            },
            [u],
        ),
        eo = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / en, y: (e.clientY - t.top) / en }), [en]),
        eu = i.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = I.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = M.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(eu);
    let ec = i.useCallback(
            (e) => {
                if (null == W || null != B) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), eu(), A(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > hy || Math.abs(e.clientY - D.at.y) > hy) && (F.current = !0);
                    return;
                }
                if (!el) return void N(null);
                let t = eo(e, W);
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
                        })(er, t.x, t.y),
                        n = null != e && hk(e, W, en) ? null : e;
                    if (null != n) {
                        let e = n3(n);
                        T((t) => (hw(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Y.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Y.current = n), (Z.current = n), ee());
            },
            [W, en, el, eo, L, er, D, B, eu, ee],
        ),
        ed = null == B ? null : d.find((e) => e.id === B.id),
        em = K && (C || D?.target.marker != null || ed?.target.marker != null);
    i.useEffect(() => {
        if (em)
            return () => {
                let e = r();
                null != e && hc(e, hs);
            };
    }, [em, r]);
    let ef = i.useCallback(() => {
        (A(!1), N(null), (Y.current = null), (Z.current = null));
    }, []);
    i.useEffect(() => {
        if (!K || !C || !el || L || null != D || null != B) return;
        let e = _.current,
            { rect: t, scale: n } = ea.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Y.current = l), (Z.current = l), ee());
    }, [K, C, el, L, D, B, ee]);
    let eh = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (et(), H(null));
                    return;
                }
                if (null == k || null == W) return;
                let t = eo(e, W);
                es(
                    k,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? n1
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(k, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [k, W, eo, D, B, es, et],
        ),
        eg = i.useCallback(() => {
            null != u && (N(null), null != lC(u) ? lS(u) : li(u));
        }, [u]),
        ep = i.useCallback(() => {
            null != u &&
                (null != D
                    ? et()
                    : B?.confirmingRemove === !0
                      ? H({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? H(null)
                        : eg());
        }, [u, D, B, et, eg]),
        ex = i.useRef(ep),
        ev = i.useRef(u),
        eb = i.useRef(eg);
    i.useLayoutEffect(() => {
        ((ex.current = ep), (ev.current = u), (eb.current = eg));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (K)
            return (
                rM.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rM.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            !(0, eB.vq)(t) ||
                ey.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, hr.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ev.current || null == lC(ev.current)) && eb.current());
        }
    }, [K, s]);
    let ew = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ep());
                    return;
                }
                if (null != D || null != B || 0 === er.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == k ? -1 : er.findIndex((e) => e.ref === k.ref);
                    N(er[(n + (t ? 1 : -1) + er.length) % er.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != k &&
                    (e.preventDefault(),
                    es(k, n1, { x: (W?.left ?? 0) + k.rect.x * en, y: (W?.top ?? 0) + k.rect.y * en }));
            },
            [u, D, B, er, k, es, ep, W, en],
        ),
        ek = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((n2(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, P.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = n3(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${n6}${r}${n7}${n5(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        et(),
                        N(null)));
            },
            [u, D, et],
        ),
        eN = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, ei.vX)(u, e)), [u]),
        eC = i.useCallback(() => {
            if (null != u && null != B && null != g && n2(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = ln(u)).annotations.find((t) => t.id === e)) &&
                        lo(l, g) &&
                        ll(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    H({ ...B, editing: !1 }));
            }
        }, [u, B, g]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != g) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = ln(u)).annotations.find((t) => t.id === e)) &&
                        lo(n, g) &&
                        ll(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    H(null));
            }
        }, [u, B, g]),
        eS = c
            ? j
                ? E.intl.string(S.default["Eb/YV9"])
                : y
                  ? E.intl.string(S.default.FD30bh)
                  : E.intl.formatToPlainString(S.default.dTSqLF, { count: d.length })
            : "",
        eE = K && null != W,
        eI = C && null == B,
        eM = D?.target ?? ed?.target ?? null,
        e_ = D ?? q,
        eR = D ?? (q?.instant === !0 ? null : q),
        eP =
            null != ed && null != W
                ? (function (e, t) {
                      let { left: n, top: l } = hg(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(hh(ed.target, ed.anchor, W, en), W)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (ed?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ed;
            hc(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ed, r]),
        (0, rI.createPortal)(
            (0, a.jsxs)("div", {
                ref: ey,
                className: hd.Li,
                children: [
                    (0, a.jsx)(ak.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eS,
                    }),
                    eE
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: hd.MT,
                                      style: { left: W.left, top: W.top, width: W.width, height: W.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": E.intl.string(S.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ec,
                                      onMouseLeave: ef,
                                      onClick: eh,
                                      onKeyDown: ew,
                                  }),
                                  null != k && null == k.marker && null == D && null == B
                                      ? (0, a.jsx)(hN, { box: hf(k, W, en) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: hd.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: hd.xz,
                                          "data-shown": null != k && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: hd.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: hd.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: hd.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: hd.Y,
                                      children: eI ? (0, a.jsx)("div", { className: hd.u }) : null,
                                  }),
                                  null == eR
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: hd.aZ,
                                            style: {
                                                transform: `translate3d(${eR.at.x + 20}px, ${eR.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: hd.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: hd.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: hd.Tl,
                                                            children: eR.label.kind,
                                                        }),
                                                        "" === eR.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: hd.kh,
                                                                  children: [" ", eR.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, a.jsx)("div", { className: hd.D0, style: hf(eM, W, en), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = hh(e.target, e.anchor, W, en),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: hd.xL,
                                              style: { ...hg(n, W), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: n4(e.target),
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
                                                  (e.stopPropagation(), et(), H(l));
                                              },
                                              children: (0, a.jsx)(hv, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == e_ || null == u
                                      ? null
                                      : (0, a.jsx)(rP, {
                                            projectId: u,
                                            at: { x: e_.at.x + 20, y: e_.at.y + 20 },
                                            bounds: W,
                                            kind: e_.label.kind,
                                            value: e_.draft,
                                            canSubmit: null != D && n2(e_.draft),
                                            onChange: (e) => {
                                                null != D && O({ ...D, draft: e });
                                            },
                                            onSubmit: ek,
                                            onDismiss: et,
                                            onUploadFile: eN,
                                            closing: null == D,
                                        }),
                                  null != ed && null != B && null != eP
                                      ? (0, a.jsxs)(hj, {
                                            point: eP,
                                            frame: W,
                                            authorId: ed.authorId,
                                            title: n4(ed.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? H({ ...B, confirmingRemove: !1 }) : H(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || H(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(aH.f, {
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
                                                                  (e.preventDefault(), eC());
                                                          },
                                                      })
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: hd.aC,
                                                          children: ed.comment,
                                                      }),
                                                lo(ed, g)
                                                    ? (0, a.jsx)("div", {
                                                          className: hd.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: hd.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(eL.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                H({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(eL.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eA,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(eL.$, {
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
                                                                            ? (0, a.jsx)(eL.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !n2(B.draft),
                                                                                  text: E.intl.string(S.default.iicRP9),
                                                                                  onClick: eC,
                                                                              })
                                                                            : (0, a.jsx)(eL.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: E.intl.string(
                                                                                      S.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      H({
                                                                                          ...B,
                                                                                          editing: !0,
                                                                                          draft: ed.comment,
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
function hv(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([a2.default], () => a2.default.getUser(t), [t]);
    return (0, a.jsx)(oc.eu, {
        src: null == n ? null : eD.Ay.getUserAvatarURL(n),
        size: od._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function hj(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(hm);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = j.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: w,
            top: k,
            originX: N,
            originY: C,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - b.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - b.y, l), r)), originX: u.x - s, originY: u.y - o }),
        A = { left: w, top: k, "--custom-conjure-card-origin-x": `${N}px`, "--custom-conjure-card-origin-y": `${C}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: hd.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: hd.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: hd.ip, children: (0, a.jsx)(hv, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: hd.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: hd.zI, children: p }),
        ],
    });
}
let hb = 300,
    hy = 2;
function hw(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function hk(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function hN(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: hd.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var hC = n(659723),
    hA = n(697744),
    hS = n(130324);
function hE(e) {
    let t = (0, hA.c)(),
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
    let r = (0, ag.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function hI(e) {
    let { className: t } = e,
        { Component: n, events: l } = hE(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, hS.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: hS.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var hM = n(251363),
    h_ = n(944142),
    hR = n(532247),
    hP = n(501628);
function hT(e) {
    let { progress: t } = e,
        { Component: n } = hE(1500),
        l = lK.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: hP.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: hP.PM,
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
function hL(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([h_.A], () => (s ? h_.A.getLiveReload(t) : null), [s, t]),
        c = (0, rg.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, hR.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, hR.QP)(e, s)));
            let m = (0, o.bG)(
                    [lP.A],
                    () => {
                        let e = lP.A.getFrame(n);
                        return (0, rr.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, hM.ow)(null, n) && e();
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
        h = m ? null : (0, hR.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ak.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: hP.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(hT, { progress: h }),
                  })
                : null,
        ],
    });
}
var h$ = n(357858),
    hD = n(343030),
    hO = n(317608),
    hq = n(35367),
    hz = n(771293);
let hF = { width: 1 / 0, height: 1 / 0 };
function hU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hF;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var hG = n(702083);
function hB(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([rp.A], () => ({
            mobile: rp.A.isBuilderPreviewMobile(),
            landscape: rp.A.isBuilderPreviewLandscape(),
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
        d = n ? hU(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(hG.dw, { [hG.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(hG.R9, { [hG.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var hH = n(347927);
function hK(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(hH.Bf, l && hH.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: hH.Ux,
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
var hV = n(957272);
function hW(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, hq.A)({ applicationId: t, surface: n, launch: l });
    if (((0, hz.A)(t, n), s === hq.n.Launched)) {
        let e = (0, a.jsx)(hO.A, { frameId: i.id, level: hD.A.WithinAppContent, className: hV.Z7, overlay: r });
        return (0, rx.Q5)(n) ? (0, a.jsx)(hB, { children: e }) : e;
    }
    return (0, a.jsx)(hX, { state: s });
}
function hX(e) {
    let { state: t } = e;
    switch (t) {
        case hq.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: hV.qs,
                children: (0, a.jsx)(hK, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case hq.n.NoApplication:
            return (0, a.jsx)(hI, { className: hV.qs });
        case hq.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: hV.qs,
                children: (0, a.jsx)(hK, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case hq.n.Error:
            return (0, a.jsxs)("div", {
                className: hV.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: hV.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case hq.n.AwaitingLaunch:
        case hq.n.Loading:
            return (0, a.jsx)("div", { className: hV.qs, children: (0, a.jsx)(nn.y, {}) });
    }
}
var hZ = n(308528),
    hY = n(334738),
    hJ = n(688438),
    hQ = n(365971),
    h0 = n(703462);
function h1(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: h0.f,
        children: [
            (0, a.jsx)(eq.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function h2() {
    return (0, a.jsx)("div", { className: h0.f, children: (0, a.jsx)(nn.y, {}) });
}
function h3(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([a1.A], () => (null != c ? a1.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && hZ.A.preload(q.ME, t);
        }, [t]),
        (n = (0, o.bG)([t8.A], () => t8.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, hQ.Xg)();
            return (
                (0, hY.yl)(t, e),
                () => {
                    (0, hY.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, lY.CN)(l).then(
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
        ? (0, a.jsx)(h1, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(h2, {})
          : (0, a.jsx)("div", {
                className: h0.g,
                children: (0, a.jsx)(hJ.A, { channel: d, guild: null, chatInputType: cn.oU.SIDEBAR }, d.id),
            });
}
var h4 = n(887909),
    h5 = n(570962),
    h6 = n(998475);
function h7(e) {
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
    } = (0, h4.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: h6.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: h6.rf,
                children: (0, a.jsx)(h5.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: h6.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: h6.z3,
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
                                className: h()(h6.Qs, c ? h6.cw : null, d ? h6.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: h6.o1,
                      children: s.map((e, t) => (0, a.jsx)(eL.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var h8 = n(765671),
    h9 = n(582063);
let ge = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function gt() {
    (0, eX.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function gn(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(S.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eY.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(gl, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: h9.m2,
                        children: (0, a.jsx)(N.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tk.K, {
                                "aria-label": r,
                                icon: tw.SettingsIcon,
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
                accept: ge.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (ge.includes(n.type)
                                ? n.size > ea.aI
                                    ? (0, eX.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, s_.M$)(t, n).catch(gt)
                                : (0, eX.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function gl(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([sM.A], () => sM.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eJ.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(S.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eQ.rX, {
                children: [
                    (0, a.jsx)(eQ.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(S.default.uQpDky),
                        icon: ib.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eQ.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(S.default.AiAz8J),
                        icon: f_.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, s_.Og)(t).catch(gt));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eQ.rX, {
                children: (0, a.jsx)(eQ.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(S.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, s_.Y1)(t, !i) || gt();
                    },
                }),
            }),
        ],
    });
}
function gr(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: i, width: s, height: o } = (0, h8.Ay)(),
        u = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: s, height: o }, l);
    return (0, a.jsxs)("div", {
        className: h9.JH,
        children: [
            (0, a.jsx)(sP, { projectId: n }),
            (0, a.jsx)("div", {
                ref: i,
                className: h9.dw,
                children: (0, a.jsx)("div", {
                    className: h9.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(u),
                    },
                    children: (0, a.jsx)(hW, { applicationId: t, surface: rr.ZN, frameOverlay: r }),
                }),
            }),
            null != n ? (0, a.jsx)(gn, { projectId: n }) : null,
        ],
    });
}
var ga = n(409478),
    gi = n(652227);
function gs(e) {
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
            overlayWidgetSize: m = lQ,
            projectId: f,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, o.bG)([iD.A], () => null != f && null != iD.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: gi.qs, children: (0, a.jsx)(nn.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: gi.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(nn.y, {}) : (0, a.jsx)(h7, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: gi.RG,
                      children: [
                          (0, l3.yf)(u, c)
                              ? g
                                  ? (0, a.jsx)(go, { projectId: f, onResume: p })
                                  : (0, a.jsx)(hW, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: gi.qs,
                                        children: (0, a.jsx)(hK, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(ga.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(gr, { applicationId: t, projectId: f, size: m, frameOverlay: h?.(rr.ZN) })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(h3, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: gi.qs, children: (0, a.jsx)(nn.y, {}) })
              : (0, a.jsx)(hI, { className: gi.qs });
}
function go(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, h$.Pu)(t),
        (0, a.jsx)("div", {
            className: gi.qs,
            children: (0, a.jsx)(hK, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(eL.$, {
                              size: "sm",
                              variant: "primary",
                              icon: tf.PlayIcon,
                              text: E.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var gu = n(750506),
    gc = n(867193),
    gd = n(539197),
    gm = n(977020);
function gf(e) {
    let { projectId: t } = e,
        n = (0, gd.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, gd.Ie)(e);
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
        className: gm.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [gd.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(gm.hN, gm.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(gm.hN, gm.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(gm.UE, { [gm.SP]: n.shown, [gm.Vq]: n.pressed, [gm.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var gh = n(417760);
function gg(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, o.bG)([X.A], () => null != e && X.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, P.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, l$.CU)(n),
        c = "controlling" === t,
        d = E.intl.string(c ? (u ? S.default["VJW/5P"] : S.default["+hD2Iz"]) : S.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(eL.$, {
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
              className: h()(gh.M0, gh.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(me.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(us.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: gh.ID, children: d }),
                  c ? (0, a.jsx)(ak.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: gh.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: gh.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: gh.sp,
                      children: [
                          (0, a.jsx)(us.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(me.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: gh.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: gh.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: gh.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: gh.lC, children: m }) : null,
              ],
          });
}
function gp(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, l$.Zv)(null != n && n === l ? t : null),
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
        c = (0, tq.useHasAnyModalOpen)(),
        d = (0, rt.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, rt.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = rT(r());
            f((t) => (rL(t, e) ? t : e));
            let t = null == h ? null : rT(h);
            (x((e) => (rL(e, t) ? e : t)), null != h && (0, gc.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, gc.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== u && null != m,
        b = j && "controlling" === u && !c,
        y = null != m && m.width < 420,
        w = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        k =
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
            let [e] = i.useContext(gu.uY),
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
                      className: gh.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: gh.QF,
                          children: (0, a.jsx)(gg, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, rI.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(ak.A, {
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
                ? (0, rI.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: gh.ys,
                                  style: k,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: gh.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(gf, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var gx = n(399503),
    gv = n(853555),
    gj = n(271982),
    gb = n(187645);
let gy = new Map(),
    gw = !1;
function gk() {
    let e = new Map();
    for (let t of new Set([...X.A.getActivityOrderedProjectIds(), ...(0, l$.T7)()])) {
        if (!lD(t) || lL.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = ek.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, rx.Rc)(t), (0, rx.Th)(t)].find(rr.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [t, n] of [...gy])
        e.get(t) !== n.frameId &&
            (function (e, t) {
                (gy.delete(e), t.unregisterLookup(), gj.A.removeFrameTarget(t.frameId, t.element), t.element.remove());
                let n = lP.A.getFrame(t.frameId)?.applicationId;
                null != n && setTimeout(() => lF(e, n), 0);
            })(t, n);
    for (let [t, n] of e)
        gy.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = gb.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    gN(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (gy.set(e, l),
                    (l.unregisterLookup = (0, gv.Ng)(e, () => (0, hM.n5)(n, t))),
                    gj.A.registerFrameTarget(t, n, hD.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of gy) gN(t.element, e, t.frameId);
}
function gN(e, t, n) {
    if (lP.A.getFrame(n)?.surface.type === l4.U.OVERLAY) {
        let n = l1(l0(X.A.getMessages(t)));
        (e.classList.remove(gb.L), (e.style.width = `${n.width}px`), (e.style.height = `${n.height}px`));
        return;
    }
    let l = rp.A.isBuilderPreviewMobile();
    e.classList.toggle(gb.L, !l);
    let r = l ? hU(rp.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""), (e.style.height = null != r ? `${r.height}px` : ""));
}
var gC = n(873727),
    gA = n(147248),
    gS = n(418842),
    gE = n(363195),
    gI = n(818023);
let gM = null;
var g_ = n(517461),
    gR = n(761929),
    gP = n(487336);
function gT(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, g_.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, Z.clamp)(u, 360, n),
        m = (0, gR.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: gR.R.HORIZONTAL_LEFT,
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
        className: gP.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: gP.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: gP.kL, style: { width: d }, children: l }),
        ],
    });
}
var gL = n(541940);
function g$(e) {
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
        v = (0, rg.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([gE.A], () => (0, gC.x4)(gE.A.theme)),
            l = (0, o.bG)([gA.A], () => gA.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([e$.Ay], () => ({
                reducedMotion: e$.Ay.useReducedMotion,
                fontScale: (0, gC.U0)(),
                highContrast: e$.Ay.isHighContrastModeEnabled,
                forcedColors: e$.Ay.useForcedColors,
                underlineLinks: e$.Ay.alwaysShowLinkDecorations,
            })),
            d = lK.hH.useSetting(),
            m = (0, gS.C)(),
            f = (0, o.bG)(
                [lP.A, rp.A],
                () =>
                    rp.A.isBuilderPreviewMobile() &&
                    lP.A.getFrame(t)?.applicationId === rp.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            g = i.useRef(!1),
            p = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, hM.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, gC.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, hu.W)(l, "set-env", i, {
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
                let n = (0, hM.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, hM.n5)(e, t) && ((x.current = null), b());
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
            if (null != t) return (0, gv.Ng)(t, () => (0, hM.n5)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, hM.ow)(p, j), [p, j]),
        y = i.useCallback(() => (f ? (0, hM.ow)(p, j) : p), [f, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(gL.Mh, c),
                children: [
                    u,
                    g
                        ? null
                        : (0, a.jsx)(gp, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: gL.fm, children: d }),
                ],
            }),
            m,
            g
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(hx, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(ac, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function gD(e) {
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
        availability: w,
        activeMode: k,
        widgetApplicationId: N,
        overlayWidgetSize: C,
        previewPaused: A = !1,
        onResumePreview: I,
    } = e;
    (0, gx.k)(t, N);
    let M = s.type === l4.U.MAIN || (0, rx.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([rp.A], () => ({
            mobile: rp.A.isBuilderPreviewMobile(),
            landscape: rp.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? gI.aX.LANDSCAPE : gI.aX.PORTRAIT), (gM = e));
                else {
                    if (gM !== e) return;
                    ((l = gI.aX.UNHANDLED), (gM = null));
                }
                K.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let _ = i.useRef(null),
        [R, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, am.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, am.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, lY.HV)(l), () => (0, lY.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, P.ensureConnection)(t),
                gw ||
                    ((gw = !0),
                    X.A.addChangeListener(gk),
                    ek.Ay.addChangeListener(gk),
                    lP.A.addChangeListener(gk),
                    rp.A.addChangeListener(gk),
                    lL.A.addChangeListener(gk),
                    (0, l$.W3)(gk),
                    gk()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = _.current;
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
        ref: _,
        className: gL.LB,
        children: (0, a.jsx)(g$, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, l3.yf)(w, k),
            paused: A,
            mainClassName: null == c ? void 0 : h()(gL.ez, { [gL.zt]: d }),
            content: (0, a.jsx)(gs, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: w,
                activeMode: k,
                widgetApplicationId: N,
                overlayWidgetSize: C,
                projectId: t,
                paused: A,
                onResume: I,
                renderFrameOverlay: (e) =>
                    (0, a.jsx)(hL, { projectId: t, applicationId: l, previewApplicationId: r, surface: e }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(gT, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: gL.cO,
                              children: x
                                  ? (0, a.jsx)(hl, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(hC.Ay, { projectId: t }),
                                            (0, a.jsx)(rE.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(rE.Ay.Icon, {
                                                                  icon: eZ.P,
                                                                  tooltip: E.intl.string(S.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(rE.Ay.Title, {
                                                    children: E.intl.string(E.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: gL.cb,
                                                children: (0, a.jsx)(
                                                    mw,
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
var gO = n(323140);
function gq(e) {
    var t;
    let l,
        r,
        { project: s, projectsLoaded: c, onBack: d, guildId: m } = e,
        [f, g] = i.useState(!0),
        [p, j] = i.useState(!1),
        b = lV(),
        w = i.useCallback(() => g(!0), []),
        k = i.useCallback(() => {
            (j(!1), g(!0));
        }, []),
        { restoreState: N, handleRestoreVersion: C } = (function (e, t) {
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
                                (0, lX.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, eX.P0)({
                                                        text: E.intl.formatToPlainString(S.default.Z4n6LX, {
                                                            title: (0, lW.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, lZ.c)(u, r);
                                                null != e && (0, eX.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, eX.P0)({
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
        })(s, k),
        A = s?.id ?? null;
    ((t = s?.preview_application_id ?? null),
        i.useEffect(() => {
            if (null != A && null != t)
                return (
                    lz.add(t),
                    () => {
                        (lz.delete(t), lF(A, t));
                    }
                );
        }, [A, t]));
    let {
            integrationStatus: I,
            isPreviewApplicationLoading: _,
            checkingIntegration: R,
            previewReady: L,
            hasFrame: $,
            needsPermissionReview: D,
            installAuthorizeProps: O,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [ek.Ay, rd.A],
                    () => (null == r ? null : (ek.Ay.getIntegrationStatus(r) ?? rd.A.getIntegrationStatus(r))),
                    [r],
                ),
                c = e?.preview_application_id ?? null,
                { data: d, isLoading: m } = (0, rc.YY)(c ?? void 0),
                f = null != r && n !== r,
                h = u?.preview_ready === !0,
                g = u?.has_activity === !0,
                p = u?.bot_permissions_changed === !0,
                x = (0, l3.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: h,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: p,
                }),
                [v, j] = i.useState(null);
            i.useEffect(() => {
                if ((j(null), !x || f || null == c)) return;
                let e = !1;
                return (
                    (async function (t) {
                        try {
                            await (0, rc.TA)(t);
                        } catch {}
                        e || j(t);
                    })(c),
                    () => {
                        e = !0;
                    }
                );
            }, [p, f, x, c]);
            let b = i.useCallback(async () => {
                if (null == r || a.current !== r) return;
                s.current?.abort();
                let e = new AbortController();
                ((s.current = e), l(null));
                try {
                    await ((0, T.CG)(r)?.catch(() => (0, T.U1)(r, e.signal)) ?? (0, T.U1)(r, e.signal));
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
            let y = (0, rm.a)(e ?? null, u ?? null, t),
                w = i.useCallback(async () => {
                    null != e && (await (0, rm.$)(e, y));
                }, [y, e]),
                k = i.useCallback(async () => {
                    try {
                        await w();
                    } catch {}
                    await b();
                }, [b, w]),
                N = i.useMemo(
                    () =>
                        null == c || m || f || v !== c
                            ? null
                            : {
                                  ...(0, rf.i)({ applicationId: c, application: d ?? null, guildId: y }),
                                  onClose: () => {
                                      k();
                                  },
                              },
                    [f, v, k, y, m, d, c],
                );
            return {
                integrationStatus: u,
                isPreviewApplicationLoading: m,
                checkingIntegration: f,
                previewReady: h,
                hasFrame: g,
                needsPermissionReview: x,
                installAuthorizeProps: N,
            };
        })(s, m),
        F =
            (0, o.bG)([rv.A], () => (null == A ? void 0 : rv.A.getPublishStatus(A)?.previewAppChannels), [A]) ??
            I?.preview_app_channels,
        {
            availability: U,
            activeMode: G,
            setMode: B,
            frameSurface: H,
            frameSurfaceOptions: K,
            setFrameSurface: V,
            appChannel: W,
            setAppChannel: Z,
            frameLaunchParams: Y,
            widgetApplicationId: J,
        } = (0, l8.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: $,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: I?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(lJ.q7.OVERLAY) === !0,
            previewAppChannels: F,
        }),
        Q = l1((0, o.bG)([X.A], () => (null == A ? null : l0(X.A.getMessages(A))), [A]));
    ((0, l2.x)(A, (e) => {
        U.modes.includes(e) && B(e);
    }),
        lH(A, () => {
            (g(!0), j(!0));
        }));
    let ee = U.modes.includes("frame"),
        et = (0, o.bG)([lL.A], () => lL.A.isPaused(A), [A]),
        en = ee && !et,
        {
            previewTargetOptions: el,
            handleSelectPreviewTarget: er,
            mobilePreview: ea,
            mobilePreviewLabel: ei,
            handleToggleMobilePreview: es,
            landscapePreview: eo,
            rotatePreviewLabel: eu,
            handleRotatePreview: ec,
            previewSurface: ed,
            previewFrame: em,
            refreshFrame: ef,
            isRefreshing: eh,
            handleRefresh: eg,
        } = (function (e) {
            let {
                    project: t,
                    modes: n,
                    activeMode: l,
                    frameSurface: r,
                    frameSurfaceOptions: a,
                    previewAppChannels: s,
                    setMode: u,
                    setFrameSurface: c,
                    setAppChannel: d,
                } = e,
                m = i.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === l4.U.APP_CHANNEL && n.length > 1
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
                        ("frame" === e.mode && (c(e.surface), null != e.appChannel && d?.(e.appChannel)), u(e.mode));
                    },
                    [d, c, u],
                ),
                h = (0, o.bG)([rp.A], () => rp.A.isBuilderPreviewMobile()),
                g = E.intl.string(h ? S.default.tKGF0Q : S.default.peqEOY),
                p = i.useCallback(() => (0, lY.GG)(!h), [h]),
                x = (0, o.bG)([rp.A], () => rp.A.isBuilderPreviewLandscape()),
                v = E.intl.string(x ? S.default.tunI2l : S.default.DoNdjA),
                j = i.useCallback(() => (0, lY.Lw)(!x), [x]),
                b = (0, rx.jS)(t),
                y = i.useMemo(() => (0, rx.Op)(b, r), [b, r]),
                w = (0, rg.A)(t?.preview_application_id ?? null, y),
                k = (0, rg.A)(t?.preview_application_id ?? null, rr.ZN),
                N = "overlay" === l ? k : w,
                C = (0, rr.x1)(N) && N.data.proxyTicketRefreshing,
                A = i.useCallback(() => {
                    null == N || C || rh.A.refreshProxyTicket(N.id);
                }, [N, C]);
            return {
                previewTargetOptions: m,
                handleSelectPreviewTarget: f,
                mobilePreview: h,
                mobilePreviewLabel: g,
                handleToggleMobilePreview: p,
                landscapePreview: x,
                rotatePreviewLabel: v,
                handleRotatePreview: j,
                previewSurface: y,
                previewFrame: w,
                refreshFrame: N,
                isRefreshing: C,
                handleRefresh: A,
            };
        })({
            project: s,
            modes: U.modes,
            activeMode: G,
            frameSurface: H,
            frameSurfaceOptions: K,
            previewAppChannels: F,
            setMode: B,
            setFrameSurface: V,
            setAppChannel: Z,
        }),
        ep = f && !p,
        ex = E.intl.string(ep ? S.default.JD6Oit : S.default.xjJAQm),
        ev = i.useCallback(() => {
            if (p) {
                (j(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [p]),
        ej = i.useCallback(() => g(!1), []),
        {
            designFeedbackActive: eb,
            designFeedbackToggleRef: ey,
            agentDrivingPreview: ew,
            designFeedbackLabel: eN,
            handleToggleDesignFeedback: eC,
        } = (function (e, t, n) {
            let { active: l } = lc(e);
            i.useEffect(() => {
                null != e && l && !t && li(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, l$.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void li(e);
                        (n(), lr(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(A, en, k),
        [eA] = i.useState(() => e2.isPlatformEmbedded && (0, ru.qM)()),
        eS = null != lM(A);
    i.useEffect(() => {
        null != A && eS && !en && lS(A);
    }, [A, eS, en]);
    let eE = i.useCallback(() => {
            null != A &&
                (k(),
                (function (e) {
                    if (null != lC(e)) return;
                    let { byProject: t } = lk.getState();
                    lk.setState({ byProject: { ...t, [e]: lN } });
                })(A));
        }, [A, k]),
        eI = i.useCallback(() => {
            null != A && lS(A);
        }, [A]),
        eM = eS ? E.intl.string(S.default.tuQ5f3) : eN,
        e_ = i.useCallback(() => {
            j((e) => !e && (g(!0), !0));
        }, []),
        eR = i.useCallback(() => j(!1), []),
        eP = i.useCallback(() => {
            null != A && (0, lY._j)(A);
        }, [A]),
        eT = i.useCallback(() => {
            null != A && (et ? (0, lY._j)(A) : (0, lY.di)(A, em?.id));
        }, [A, et, em?.id]),
        e$ = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = em?.id), (0, P.closeConnection)(e), (0, lT.r)(t)), d());
        }, [s, em?.id, d]),
        eD =
            ((l = i.useCallback(() => {
                null != s && (w(), (0, P.sendUserMessage)(s.id, E.intl.string(S.default.oU20rd)));
            }, [s, w])),
            {
                onExport: l,
                onImport: (r = tt(
                    i.useCallback(
                        (e) => {
                            if (null == s) return;
                            let t = s.id,
                                n = e9(e);
                            null != n
                                ? (0, eX.P0)({ text: n, variant: "critical" })
                                : (0, tc.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: s.name }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          w();
                                          try {
                                              await e8(t, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, eX.P0)({
                                                  text: E.intl.string(S.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [s, w],
                    ),
                )).open,
                importInput: r.input,
            }),
        eO = i.useCallback(() => {
            null != s && (0, tY.A)(s, m);
        }, [s, m]),
        eq = (0, l3.JR)(G, D, I?.bot_permissions_changed === !0)
            ? { type: "permissions", authorizeProps: O }
            : R && null == I
              ? { type: "checking" }
              : void 0,
        ez = (0, o.bG)([ek.Ay], () => null != A && ek.Ay.isProjectDeleting(A), [A]);
    i.useEffect(() => {
        ((null == s && c) || ez) && (0, u.bG)(q.BVt.CHANNEL(m, z.VV.CONJURE));
    }, [m, s, c, ez]);
    let {
            publishOptions: eF,
            publish: eU,
            publishing: eG,
            confirmation: eB,
            variant: eH,
            text: eK,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...rk,
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
                c = (0, tR.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let m = d ? null : l;
            return {
                publishOptions: u,
                publish: c,
                publishing: d,
                confirmation: m,
                variant: rN(c) ? "secondary" : "primary",
                text:
                    null != m
                        ? m
                        : null == c
                          ? E.intl.string(S.default["120EFN"])
                          : rN(c) && !c.publishing
                            ? E.intl.string(S.default.kAfbEN)
                            : c.label,
            };
        })(A, m, R || _),
        eV = rS(A, eU, eF),
        eW = (0, n0.A)(em),
        eZ = "frame" === G && !et && (0, rr.x1)(em) && (eW.isPoppedOut || eW.canPopout),
        eY =
            null == s
                ? null
                : (0, a.jsx)(tZ, {
                      projectId: s.id,
                      projectName: s.name,
                      guildId: m,
                      projectGuildId: s.guild_id,
                      isOwner: (0, ek.PV)(s),
                      canRemix: (0, ek.H_)(s),
                      onRefresh: (0, rr.x1)(ef) ? eg : void 0,
                      isRefreshing: eh,
                      onTogglePreviewPaused: "frame" === G ? eT : void 0,
                      previewPaused: et,
                      previewPauseDisabled: !et && ew,
                      onTogglePopout: eZ ? (eW.isPoppedOut ? eW.popIn : eW.popOut) : void 0,
                      poppedOut: eW.isPoppedOut,
                      onToggleDebug: b ? e_ : void 0,
                      debugOpen: p,
                      onClose: e$,
                      onExport: eD.onExport,
                      onImport: eD.onImport,
                      onRemix: eO,
                      onConnectTool: () => {
                          var e;
                          return (
                              (e = s.id),
                              void (0, tq.openModalLazy)(async () => {
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
                                  projectId: s.id,
                                  installScope: s.install_scope,
                                  restoreDisabled: N?.status === "restoring",
                                  onRestoreVersion: (e, t) => C(e, t, !0),
                              }),
                              void (0, tq.openModalLazy)(async () => {
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
                          U.modes.includes("widget") && "unavailable-authorization-revoked" !== U.profileState
                              ? J
                              : null,
                      previewProjectId: s.id,
                  }),
        eJ =
            null == eU || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: gO.As,
                      onMouseDown:
                          null == A || eU.disabled || eG
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, rj.dx)(A);
                                },
                      children: (0, a.jsx)(eL.$, {
                          size: "sm",
                          variant: eH,
                          icon: eG ? gz : null != eB ? nW.U : void 0,
                          text: eK,
                          onClick: () => eV("header"),
                      }),
                  }),
        eQ = null == s ? void 0 : () => (0, tT.A)(s.id, { guildId: m, isPreview: !0, publishOptions: eF }),
        e0 = (0, a.jsx)(M, {
            title: s?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: d },
            project: s,
            onOpenProjectSettings: eQ,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: gO.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: gO.QQ,
                                  children: [
                                      (0, a.jsx)(ro, {
                                          targets: el,
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
                                          })(G, H, W),
                                          onChange: er,
                                      }),
                                      ee
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === G
                                                        ? (0, a.jsx)(y.A.Icon, {
                                                              icon: ea ? gG : gU,
                                                              tooltip: ei,
                                                              "aria-label": ei,
                                                              selected: ea,
                                                              onClick: es,
                                                          })
                                                        : null,
                                                    ea && "frame" === G
                                                        ? (0, a.jsx)(y.A.Icon, {
                                                              icon: gB,
                                                              tooltip: eu,
                                                              "aria-label": eu,
                                                              selected: eo,
                                                              onClick: ec,
                                                          })
                                                        : null,
                                                    (0, a.jsx)(lR, {
                                                        enabled: eA && !eS && !ew && !et,
                                                        onLongPress: eE,
                                                        children: (0, a.jsx)(y.A.Icon, {
                                                            ref: ey,
                                                            icon: nX.x,
                                                            iconClassName: gO.D8,
                                                            tooltip: eM,
                                                            "aria-label": eM,
                                                            selected: eS || eb,
                                                            disabled: et || (ew && !eS),
                                                            onClick: eS ? eI : eC,
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== G || et
                                          ? null
                                          : (0, a.jsx)(ra, { frame: em, controlProjectId: s.id }),
                                  ],
                              }),
                              (0, a.jsx)("div", { className: gO.YJ }),
                              (0, a.jsx)(lU.A, { frame: em }),
                              (0, a.jsx)(y.A.Icon, {
                                  icon: tw.SettingsIcon,
                                  tooltip: E.intl.string(S.default.I2XSKe),
                                  "aria-label": E.intl.string(S.default.I2XSKe),
                                  onClick: eQ,
                              }),
                              eY,
                              ep
                                  ? null
                                  : (0, a.jsx)(y.A.Icon, { icon: gF, tooltip: ex, "aria-label": ex, onClick: ev }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(gO.nj, nB.T),
        children: [
            eD.importInput,
            (0, a.jsx)("main", {
                className: gO.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: gO.j5,
                              children: [
                                  e0,
                                  (0, a.jsxs)("div", {
                                      className: gO.sD,
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
                                          (0, a.jsx)(eL.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: E.intl.string(S.default["WFJ/vb"]),
                                              onClick: () => (0, T.hF)(m),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tR.bI.Provider, {
                              value: eF,
                              children: (0, a.jsx)(
                                  gD,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: ey,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: ed,
                                      frameLaunchParams: Y,
                                      header: e0,
                                      chatOpen: f,
                                      onCloseChat: ej,
                                      chatHeaderAction: eJ,
                                      debugOpen: b && p,
                                      onCloseDebug: eR,
                                      onRestoreVersion: C,
                                      onImportProject: (0, ek.PV)(s) ? eD.onImport : void 0,
                                      restoreState: N,
                                      previewReady: L,
                                      previewGate: eq,
                                      availability: U,
                                      activeMode: G,
                                      widgetApplicationId: J,
                                      overlayWidgetSize: Q,
                                      previewPaused: et,
                                      onResumePreview: eP,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function gz() {
    return (0, a.jsx)(nn.y, { type: nn.t.SPINNING_CIRCLE_SIMPLE, className: gO.Hv, itemClassName: gO.C5 });
}
function gF(e) {
    return (0, a.jsx)(nZ.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function gU(e) {
    return (0, a.jsx)(nY.u, { ...e, size: "custom", width: 20, height: 20 });
}
function gG(e) {
    return (0, a.jsx)(nJ.k, { ...e, size: "custom", width: 20, height: 20 });
}
function gB(e) {
    return (0, a.jsx)(nQ.H, { ...e, size: "custom", width: 20, height: 20 });
}
function gH(e) {
    let { guildId: t, projectId: n } = e,
        l = (0, o.yK)([c.Ay], () => c.Ay.getSelfMember(t)?.roles ?? [], [t]),
        r = (0, o.bG)(
            [d.A, m.A],
            () => {
                let e = d.A.getGuild(t);
                return null != e && m.A.can(q.xBc.MANAGE_GUILD, e);
            },
            [t],
        ),
        s = n ?? null;
    (i.useEffect(() => {
        (0, T.hF)(t);
    }, [t, l, r]),
        i.useEffect(() => {
            (0, T.dm)(t, s);
        }, [t, s]));
    let f = i.useCallback(() => {
            (0, u.pX)(q.BVt.CHANNEL(t, z.VV.CONJURE));
        }, [t]),
        h = (0, o.bG)(
            [ek.Ay],
            () => {
                if (null == s) return null;
                let e = ek.Ay.getProject(s);
                return null == e || (0, ek.PV)(e) || e.guild_id === t ? e : null;
            },
            [s, t],
        ),
        g = (0, o.bG)([ek.Ay], () => ek.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(gq, { project: h, projectsLoaded: g, onBack: f, guildId: t }, s)
        : (0, a.jsx)(nV, { guildId: t });
}
