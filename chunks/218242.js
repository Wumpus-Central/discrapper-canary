(n.r(t), n.d(t, { default: () => pG }));
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
var _ = n(319481),
    R = n(639519),
    P = n(371169);
let T = { main: [], subagent: [], thinking: ["low", "medium", "high", "xhigh", "max"] },
    L = { tier: "balanced" },
    $ = { simple: { thinking: "high" }, balanced: { thinking: "high" }, complex: { thinking: "high" } };
var D = n(652215),
    O = n(746080);
async function q(e) {
    let { guildId: t, installScope: n, prompt: l, modelSettings: r, start: a } = e,
        i = await (0, P.gA)(
            null != n ? { guild_id: t, install_scope: n } : { guild_id: t, auto_install_scope: !0, prompt: l ?? "" },
        );
    return (
        (0, _.ensureConnection)(i),
        (0, _.stageModelSettings)(i, r ?? L),
        await a(i),
        (0, u.pX)(D.BVt.CHANNEL(t, O.VV.CONJURE, i)),
        i
    );
}
var z = n(260498),
    F = n(941985),
    U = n(506774);
let G = "ConjureProjectsPanelOpen";
var B = n(636537),
    K = n(73153),
    H = n(195880);
function V(e, t) {
    K.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: e, draft: t });
}
var W = n(245179),
    X = n(435558),
    Z = n.n(X);
let J = "ConjureComposerDrafts";
function Y() {
    return U.w.get(J) ?? {};
}
let Q = new Map(),
    ee = Z().throttle(() => {
        if (0 === Q.size) return;
        let e = Y();
        for (let [t, n] of Q) "" === n ? delete e[t] : (e[t] = n);
        (Q.clear(), U.w.set(J, e));
    }, 1e3);
class et extends o.Ay.Store {
    getDraft(e) {
        let t = Q.get(e);
        return null != t ? t : (Y()[e] ?? "");
    }
}
let en = new et(K.h, {
    LOGOUT: function () {
        return (Q.clear(), ee.cancel(), U.w.remove(J), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (Q.set(t, n), ee(), "" === n && ee.flush(), !1);
    },
});
(n(323874), n(14289), n(35956));
var el = n(839214),
    er = n(666476),
    ea = n(989145);
let ei = [],
    es = 1,
    eo = (0, el.D)(() => ({ draftsByProject: {} }));
function eu(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? ei;
}
function ec(e, t) {
    return eu(eo.getState(), e, t);
}
function ed(e, t, n) {
    let { draftsByProject: l } = eo.getState();
    eo.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function em(e, t, n, l) {
    let r = ec(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (ed(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function ef(e, t) {
    (0, ea.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function eh(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && ef(e, t.ref.id));
}
function ep(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = eo.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? ei) n ? eh(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    eo.setState({ draftsByProject: i });
}
function eg(e) {
    return E.intl.formatToPlainString(S.default.JZ59Bo, { size: (0, er.sM)((0, er.Ju)(e)) });
}
function ex(e, t, n) {
    if (0 === n.length) return;
    let l = n.map((e) => {
        let { draft: t, upload: n } = e;
        return { draft: { ...t, localId: es++ }, upload: n };
    });
    for (let { draft: n, upload: r } of (ed(e, t, [
        ...ec(e, t),
        ...l.map((e) => {
            let { draft: t } = e;
            return t;
        }),
    ]),
    l))
        r?.().then(
            (l) => {
                if ("errorText" in l) return void em(e, t, n.localId, { status: "error", errorText: l.errorText });
                let { converted: r, ...a } = l;
                em(e, t, n.localId, { ...r, status: "ready", ref: a })
                    ? setTimeout(
                          () => em(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default.E7dS5n) }),
                          er.o2 - 3e5,
                      )
                    : ef(e, a.id);
            },
            (l) => {
                (console.error("[conjure] attachment upload failed", l),
                    em(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default["kUw/b1"]) }));
            },
        );
}
function ev(e, t) {
    let n = ec(e, t);
    if (0 !== n.length) {
        for (let t of n) eh(e, t);
        ed(e, t, ei);
    }
}
function ej(e, t) {
    let n = ec(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (ed(e, t, ei), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function eb(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = ec(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? ej(e, "chat") : [];
    (0, _.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(K.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(eo.getState().draftsByProject)) ep(e, { deleteFromWorker: !0 });
}),
    K.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        ep(t, { deleteFromWorker: !1 });
    }));
var ey = n(975189);
let ew = "ConjureHeldPrompts",
    ek = new Map(),
    eN = new Map();
function eC(e, t) {
    let n =
        ek.get(e) ??
        (async () => {
            try {
                await t();
            } catch (t) {
                throw (ek.delete(e), t);
            }
        })();
    return (ek.set(e, n), n);
}
function eA() {
    return U.w.get(ew) ?? {};
}
function eS(e) {
    let { [e]: t, ...n } = eA();
    U.w.set(ew, n);
}
function eE(e, t, n) {
    (eS(e),
        (0, _.withdrawUserMessage)(e, t.nonce),
        "" === en.getDraft(e) && V(e, t.message),
        0 === ec(e, "chat").length &&
            ex(
                e,
                "chat",
                t.attachments.map((e) => ({
                    draft: { name: e.name, contentType: e.content_type, status: "ready", ref: e },
                })),
            ),
        n());
}
function eI(e, t) {
    if (0 === e.length) return {};
    let n = e.find((e) => e.id === t);
    return {
        input: "server",
        note: E.intl.string(S.default.SU9K9U),
        ...(null != n ? { default_entities: [{ id: n.id, name: n.name, kind: "server" }] } : {}),
    };
}
function eM(e) {
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
async function e_(e, t, n) {
    let l = await B.Bo.put({
        url: `${D.Rsh.CONJURE_PROJECT(e)}/install-scope`,
        body: { install_scope: t, ...(null != n ? { guild_id: n } : {}) },
        rejectWithError: !0,
    });
    K.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: l.body });
}
var eR = n(89310),
    eP = n(821609),
    eT = n(775602),
    eL = n(486020),
    e$ = n(687966),
    eD = n(323384),
    eO = n(632015),
    eq = n(231483),
    ez = n(430392);
let eF = {
    games: e$.GameControllerIcon,
    apps: eD.k,
    profile_widget: eO.f,
    automod: eq.ShieldIcon,
    chat_bot: ez.RobotIcon,
};
var eU = n(621466);
let eG = "data-conjure-carousel-card";
var eB = n(19493);
let eK = i.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n } = e,
            l = eF[t.category];
        return (0, a.jsxs)("li", {
            className: eB.AS,
            [eG]: "",
            children: [
                (0, a.jsxs)("div", {
                    className: eB.rl,
                    children: [
                        (0, a.jsx)("img", {
                            className: eB.my,
                            src: (0, eL.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: eB.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eB.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eB.xn,
                            children: [
                                (0, a.jsx)("img", { className: eB.q_, src: t.image, alt: "" }),
                                (0, a.jsx)("div", {
                                    className: eB.o1,
                                    children: (0, a.jsx)(eP.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: E.intl.string(S.default["6CQjTy"]),
                                        onClick: () => n(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: eB.qr,
                            children: [
                                (0, a.jsx)("div", {
                                    className: eB.Yl,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)(l, { size: "md", color: k.A.colors.ICON_STRONG }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: eB.PJ,
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
    eH = i.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            r = (0, o.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
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
                        ((r = (l = Array.from(n.querySelectorAll(`[${eG}]`))).map(
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
                function w() {
                    ((f = !1), b());
                }
                function k() {
                    ((h = !0), b());
                }
                function N(t) {
                    ((h = (0, eU.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), b());
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
                className: r ? eB.vV : eB.Dk,
                "aria-label": E.intl.string(S.default.Qc4S39),
                children: (0, a.jsx)("ul", {
                    ref: u,
                    className: eB.u4,
                    children: n.map((e) => (0, a.jsx)(eK, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var eV = n(858899),
    eW = n(789645),
    eX = n(265872),
    eZ = n(980707),
    eJ = n(477782),
    eY = n(81369),
    eQ = n(77729),
    e0 = n(723702),
    e1 = n(264572).Buffer;
async function e2(e, t) {
    if (e0.isPlatformEmbedded) {
        let n = e1.from(await e.arrayBuffer());
        if ("function" == typeof eQ.A.fileManager.saveWithDialog2) await eQ.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await eQ.A.fileManager.saveWithDialog(n, t);
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
var e3 = n(688954);
class e4 extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function e5(e, t) {
    let n = await (0, e3.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new e4(n.status);
    return await n.blob();
}
async function e6(e, t, n) {
    (0, _.ensureConnection)(e);
    let l = await (0, ea.vX)(e, t);
    (0, _.sendUserMessage)(e, n, [l]);
}
function e7(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, er.Oq)(e.size, t)
        ? null
        : E.intl.formatToPlainString(S.default.ThxcOX, { size: (0, er.sM)((0, er.Ju)(t)) });
}
async function e8(e, t) {
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
        r = await e5(e, l);
    await e2(r, l);
}
function e9(e) {
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
var te = n(950305),
    tt = n(664121);
let tn = [
    { value: "user", icon: te.UserIcon, nameMessage: S.default.s1TsXl },
    { value: "guild", icon: tt.R, nameMessage: S.default.LlLIJw },
];
function tl(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = e9(i.useCallback((e) => n(e, "user"), [n])),
        s = e9(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eX.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: eX.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(eZ.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": E.intl.string(S.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(eJ.rX, {
                            label: E.intl.string(S.default.NyVn6T),
                            children: tn
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: E.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        eJ.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(eP.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: eY.H,
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
var tr = n(418811),
    ta = n(246338),
    ti = n(290076),
    ts = n(442433),
    to = n(314116),
    tu = n(782603),
    tc = n(780338),
    td = n(782134),
    tm = n(113494),
    tf = n(12470),
    th = n(811893),
    tp = n(663417),
    tg = n(70688),
    tx = n(92446),
    tv = n(173936),
    tj = n(473935),
    tb = n(625903),
    ty = n(408278),
    tw = n(365199),
    tk = n(7437),
    tN = n(147036),
    tC = n(957565),
    tA = n(785389),
    tS = n(123917),
    tE = n(860402);
let tI = new Set();
var tM = n(893067),
    t_ = n(442331),
    tR = n(616334);
n(321073);
var tP = n(189714),
    tT = n(733791),
    tL = n(189213),
    t$ = n(331322),
    tD = n(192308),
    tO = n(664619),
    tq = n(706935);
function tz(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === l,
        h = f ? (0, tT.fI)(n) : (0, tT.Kd)(n),
        p = f ? null : (0, tT.L4)(n),
        g = (0, tT.Mi)(n),
        x = f
            ? E.intl.formatToPlainString(S.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(S.default.x6FvsZ, { app: n.appName });
    async function j() {
        (c(!0), m(null));
        let e = f ? (0, P.xx)(t.id) : (0, tO.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(f ? S.default["0XDHob"] : S.default.PJ2Fkn))
            : (f || (0, eV.P0)({ text: (0, tT.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tL.a, {
        ...r,
        role: "alertdialog",
        title: f ? x : (0, tT.WX)((0, tq.tb)(S.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, tT.J)(n) : E.intl.string(S.default["8OKM1N"]),
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
        children: (0, a.jsxs)(t$.B, {
            gap: 12,
            children: [
                h.length > 0 || null != p
                    ? (0, a.jsx)(tq.Ay, {
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
function tF(e) {
    (0, tD.openModal)((t) => (0, a.jsx)(tz, { ...t, ...e }));
}
var tU = n(587895);
function tG(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, u] = i.useState(null),
        c = (0, o.bG)([tU.A], () => tU.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        d = E.intl.formatToPlainString(S.default.m8KWic, { app: c });
    async function m() {
        (r(!0), u(null));
        let e = await (0, tO.R_)(t.id);
        (r(!1), e)
            ? ((0, eV.P0)({ text: E.intl.formatToPlainString(S.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : u(E.intl.string(S.default["rE/0SD"]));
    }
    return (0, a.jsx)(tL.a, {
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
var tB = n(552821);
let tK = [];
function tH(e) {
    (0, eV.P0)({ text: e, variant: "critical" });
}
function tV(e) {
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
            onTogglePopout: b,
            poppedOut: y = !1,
            onToggleDebug: w,
            debugOpen: k = !1,
            onClose: N,
            refreshApplicationId: C,
            previewProjectId: A,
            onCloseMenu: I,
        } = e,
        M = (0, tP.iI)(t),
        _ = i.useContext(tM.bI),
        { pending: R, refresh: T } = (0, tk.A)(C ?? null),
        { pending: L, connect: $ } = (function (e, t) {
            let [n, l] = i.useState(tI),
                r = i.useRef(tI),
                a = i.useCallback((e) => {
                    ((r.current = (0, tA.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, tA.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, tE.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, tS.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, tA.rq)(l.error)
                                          ? E.intl.string(S.default["jCQ/1B"])
                                          : E.intl.string(S.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(A ?? null, tH),
        D = (0, o.bG)([t_.A], () => (null == A ? tK : t_.A.getDeclaredConnections(A))),
        q = i.useMemo(() => (0, tA.Xl)(D), [D]),
        F = (0, tT.Bs)(t),
        U = (0, tT.CU)(t) && s,
        G = (0, o.bG)(
            [z.Ay],
            () => {
                let e = z.Ay.getProject(t);
                return null != e && (0, z.jf)(e);
            },
            [t],
        ),
        B = (function (e) {
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
        })({ canRefresh: null != C, refreshPending: R, offers: q, connectPending: L }),
        K = i.useMemo(() => new Map(D.map((e) => [e.type, e])), [D]),
        H = null != m && u,
        V = s && null != d,
        W = H || null != c || V || null != f || null != h,
        X = tC.p5 && null != l,
        Z = tC.p5,
        J = M ? tu.BellIcon : tc.BellSlashIcon,
        Y = v ? td.PlayIcon : tm.PauseIcon,
        Q = y ? tf._ : th.t;
    return (0, a.jsxs)(eZ.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: I,
        onSelect: I,
        children: [
            null != p || null != x || null != b || null != N
                ? (0, a.jsxs)(eJ.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(eJ.Dr, {
                                    id: "refresh",
                                    icon: tp.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: tp.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: g,
                                    action: p,
                                })
                              : null,
                          null != x
                              ? (0, a.jsx)(eJ.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: Y,
                                    leadingAccessory: { type: "icon", icon: Y },
                                    label: E.intl.string(v ? S.default.ZKd2Cw : S.default.VHxerm),
                                    disabled: j,
                                    action: x,
                                })
                              : null,
                          null != b
                              ? (0, a.jsx)(eJ.Dr, {
                                    id: "toggle-popout",
                                    icon: Q,
                                    leadingAccessory: { type: "icon", icon: Q },
                                    label: E.intl.string(y ? E.t["NKV/MO"] : E.t["3Zypbv"]),
                                    action: b,
                                })
                              : null,
                          null != N
                              ? (0, a.jsx)(eJ.Dr, {
                                    id: "close",
                                    icon: tg.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: tg.DoorExitIcon },
                                    label: E.intl.string(S.default["/TlGcK"]),
                                    action: N,
                                })
                              : null,
                      ],
                  })
                : null,
            null != w
                ? (0, a.jsx)(eJ.rX, {
                      children: (0, a.jsx)(eJ.sL, {
                          id: "debug",
                          label: E.intl.string(S.default.Mt5k9d),
                          leftIcon: tx.BugIcon,
                          leadingAccessory: { type: "icon", icon: tx.BugIcon },
                          checked: k,
                          action: w,
                      }),
                  })
                : null,
            B.length > 0
                ? (0, a.jsx)(eJ.rX, {
                      children: B.map((e) =>
                          (0, a.jsx)(
                              eJ.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void T();
                                      let t = null == e.connectionType ? null : K.get(e.connectionType);
                                      null != t && $(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(eJ.rX, {
                children: (0, a.jsx)(eJ.Dr, {
                    id: "mute",
                    label: E.intl.string(M ? S.default.s9rCuH : S.default["a+i/As"]),
                    icon: J,
                    leadingAccessory: { type: "icon", icon: J },
                    action: () => (0, tP.$L)(t, !M),
                }),
            }),
            W
                ? (0, a.jsxs)(eJ.rX, {
                      children: [
                          H
                              ? (0, a.jsx)(eJ.Dr, { id: "remix", label: E.intl.string(S.default.XWgAfc), action: m })
                              : null,
                          null != c
                              ? (0, a.jsx)(eJ.Dr, { id: "export", label: E.intl.string(S.default.WsEEP7), action: c })
                              : null,
                          V
                              ? (0, a.jsx)(eJ.Dr, { id: "import", label: E.intl.string(S.default.rWGY3e), action: d })
                              : null,
                          null != f
                              ? (0, a.jsx)(eJ.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(S.default.yOIql5),
                                    action: f,
                                })
                              : null,
                          null != h
                              ? (0, a.jsx)(eJ.Dr, {
                                    id: "history",
                                    label: E.intl.string(S.default["3hIVou"]),
                                    action: h,
                                })
                              : null,
                      ],
                  })
                : null,
            Z
                ? (0, a.jsxs)(eJ.rX, {
                      children: [
                          X
                              ? (0, a.jsx)(eJ.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: tv.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: tv.LinkIcon },
                                    action: () =>
                                        (0, tC.C)((0, tN.n)(l, O.VV.CONJURE, t), () =>
                                            (0, eV.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eJ.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(S.default["nm/zuU"]),
                              icon: tj.L,
                              leadingAccessory: { type: "icon", icon: tj.L },
                              action: () =>
                                  (0, tC.C)(t, () =>
                                      (0, eV.P0)({ text: E.intl.string(S.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || G || F?.canRemoveBot === !0
                ? (0, a.jsxs)(eJ.rX, {
                      children: [
                          s || G
                              ? (0, a.jsx)(eJ.Dr, {
                                    id: "settings",
                                    label: E.intl.string(S.default.FzfmQ8),
                                    icon: tb.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: tb.SettingsIcon },
                                    action: () =>
                                        (0, tR.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: _,
                                        }),
                                })
                              : null,
                          F?.canRemoveBot === !0
                              ? (0, a.jsx)(eJ.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(S.default["3gKG2j"], { server: F.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = z.Ay.getProject(t);
                                        null != e && tF({ project: e, target: F, action: "remove" });
                                    },
                                })
                              : null,
                          U
                              ? (0, a.jsx)(eJ.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(S.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = z.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, tD.openModal)((t) => (0, a.jsx)(tG, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(eJ.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = z.Ay.getProject(t);
                                        if (null != e && null != F) tF({ project: e, target: F, action: "delete" });
                                        else
                                            (0, to.A)({
                                                title: E.intl.formatToPlainString(S.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(S.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, P.K)(t, () =>
                                                        (0, eV.P0)({
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
function tW(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(eX.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eX.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tV, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: tB.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, a.jsx)(ty.K, {
                                  icon: tw.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(y.A.Icon, {
                              icon: tw.MoreHorizontalIcon,
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
var tX = n(95264);
function tZ(e, t) {
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
                    (0, eV.P0)({ text: E.intl.formatToPlainString(S.default.aN2JdD, { name: l }) }),
                    e8(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[conjure] project export failed", n, e),
                                (0, eV.P0)({
                                    text:
                                        409 === (t = e instanceof e4 ? e.status : null)
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
                onImport: (s = e9(
                    i.useCallback(
                        (e) => {
                            let r = e7(e);
                            null != r
                                ? (0, eV.P0)({ text: r, variant: "critical" })
                                : (0, to.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: l }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, u.pX)(D.BVt.CHANNEL(t, O.VV.CONJURE, n));
                                          try {
                                              await e6(n, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, eV.P0)({
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
        isOwner: (0, z.PV)(e),
        canRemix: (0, z.H_)(e),
        onRemix: () => (0, tX.A)(e, t),
        onExport: o,
    };
}
function tJ(e) {
    let { project: t, guildId: n } = e,
        l = tZ(t, n);
    return (0, a.jsx)(tV, { ...l, onCloseMenu: ts.Z_ });
}
function tY(e) {
    let { project: t, guildId: n } = e,
        l = tZ(t, n);
    return (0, a.jsx)(tW, { ...l, trigger: "iconButton" });
}
var tQ = n(638693);
class t0 extends Error {}
function t1(e) {
    let { guildId: t, modelSettings: n, onClose: l } = e,
        r = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ta.Ot)(e, t)
                    ? (0, u.pX)(D.BVt.CHANNEL(t, O.VV.CONJURE, e.id))
                    : (0, tr.A)(e);
            },
            [t],
        ),
        s = i.useCallback((e) => (0, a.jsx)(tY, { project: e, guildId: t }), [t]),
        o = i.useCallback(
            (e, n) => {
                (0, ts.jA)(e, () => (0, a.jsx)(tJ, { project: n, guildId: t }));
            },
            [t],
        ),
        [c, d] = i.useState(!1),
        m = i.useCallback(
            async (e, l) => {
                let r = e7(e);
                if (null != r) return void (0, eV.P0)({ text: r, variant: "critical" });
                d(!0);
                try {
                    await q({
                        guildId: t,
                        installScope: l,
                        modelSettings: n,
                        start: async (t) => {
                            try {
                                await e6(t, e, E.intl.string(S.default["LUc7/5"]));
                            } catch {
                                throw (await (0, P.xx)(t).catch(() => void 0), new t0());
                            }
                        },
                    });
                } catch (e) {
                    (0, eV.P0)({
                        text: e instanceof t0 ? E.intl.string(S.default["Q+l4Hv"]) : (0, R.mG)(e),
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
        className: tQ.pz,
        "aria-label": f,
        children: [
            (0, a.jsxs)("div", {
                className: tQ.wx,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-strong", children: f }),
                    (0, a.jsxs)("div", {
                        className: tQ.$s,
                        children: [
                            (0, a.jsx)(tl, { importing: c, onImport: m }),
                            (0, a.jsx)(y.A.Icon, { icon: eW.P, tooltip: h, "aria-label": h, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(g.Ip, {
                className: tQ.XG,
                children: (0, a.jsx)(ti.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: s,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var t2 = n(559106),
    t3 = n(663341),
    t4 = n(783977),
    t5 = n(559647),
    t6 = n(531685),
    t7 = n(477262),
    t8 = n(432017);
let t9 = [
    {
        id: "add-images-videos",
        label: S.default["51+9lc"],
        icon: t7.s,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: S.default["10ljr2"],
        icon: t8.T,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: S.default.aotDee, icon: eY.H, accept: "" },
];
var ne = n(289873),
    nt = n(285796),
    nn = n(922329);
async function nl(e) {
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
var nr = n(153171);
let na = er.lN;
function ni(e, t, n, l) {
    let r = ec(e, t).length;
    ex(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= na)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: E.intl.formatToPlainString(S.default.Q0aCVZ, { count: na }),
                    },
                };
            if (!(0, er.Oq)(e.size, t))
                return "image/png" === t && e.size <= er.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await nl(e).catch(() => null);
                              return null != n && (0, er.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: eg(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: eg(t) } };
            let a = er.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function ns(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = eo.useState((e) => eu(e, t, n)),
        a = i.useCallback((e) => ni(t, n, e, l), [t, n, l]),
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
                null != (r = (l = ec(t, n)).find((t) => t.localId === e)) &&
                    (eh(t, r),
                    ed(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => ej(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function no(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(nn.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(ne.y, { type: ne.t.SPINNING_CIRCLE_SIMPLE, className: nr.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: nr.o1,
                onClick: () => n(t.localId),
                "aria-label": E.intl.string(S.default.Slam9g),
                children: (0, a.jsx)(nt.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var nu = n(900797),
    nc = n(320448),
    nd = n(344587),
    nm = n(534554),
    nf = n(392208),
    nh = n(822313),
    np = n(837984),
    ng = n(359589),
    nx = n(254575);
function nv(e) {
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
function nj(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = nv(d),
        p = nf.P.indexOf(t.tier),
        g = d ? nu.t : nc._,
        x = nf.P.map(nm.D0),
        j = (0, nm.Tc)(t.tier),
        { text: b, phase: y } = (0, nd.Q)(j);
    return (0, a.jsx)("div", {
        className: nx.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: h()(nx.t$, { [nx.Zr]: u && c, [nx.GF]: !u }),
            role: "dialog",
            "aria-label": E.intl.string(S.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: h()(nx.Nr, nx.uO, { [nx.Zr]: d && f.entered, [nx.GF]: !d }),
                          children: (0, a.jsx)(ng.b, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${nx.Nr} ${nx.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nx.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: nx.y6,
                                    "aria-expanded": d,
                                    "aria-label": E.intl.string((0, nm.FC)(l)),
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
                                            className: nx.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: h()(nx.Z, { [nx.xQ]: "exit" === y, [nx.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nx.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: nx.Nb,
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
                                (0, a.jsx)(np.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: E.intl.string(S.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = nf.P[e];
                                        null != n && n !== t.tier && s((0, nm.CM)((0, nm.j6)(t, n)));
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
function nb(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, nh.A)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = nv(f);
    return (0, a.jsx)(eX.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: eX.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(nj, {
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
                    className: o ?? nx.hZ,
                    "aria-label": E.intl.string(S.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(t4.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var ny = n(200160),
    nw = n(465410);
function nk(e) {
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
        className: ny.RC,
        children: [t[r].slice(0, s), l ? (0, a.jsx)("span", { className: ny.OW }) : null],
    });
}
function nN(e) {
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
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", className: ny.RC, children: t[l] });
}
function nC(e) {
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
        l = (0, o.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        r = (0, o.bG)([t6.A], () => t6.A.isFocused()),
        s = t || !r;
    return (0, a.jsx)("div", {
        className: ny.qf,
        "aria-hidden": !0,
        children: l
            ? (0, a.jsx)(nN, { prompts: n, paused: s })
            : (0, a.jsx)(nk, { prompts: n, paused: s, showCaret: !t }),
    });
}
function nA(e) {
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
        [f, p] = i.useState(!1),
        g = i.useRef(null),
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
        ),
        M = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || r());
            },
            [o, r],
        );
    return (0, a.jsxs)("div", {
        className: ny.kL,
        children: [
            (0, a.jsxs)("div", {
                ref: g,
                className: h()(ny.yk, { [ny.Sl]: null != u }),
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: ny.Ox,
                        children: [
                            (0, a.jsx)(t2.vN, {
                                ringTarget: g,
                                ringClassName: ny.Rg,
                                children: (0, a.jsx)("textarea", {
                                    ref: n,
                                    className: h()(ny.hF, nw.dv),
                                    rows: 3,
                                    value: t,
                                    "aria-label": E.intl.string(S.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? x : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: M,
                                    onPaste: (e) => N(e),
                                    onFocus: () => p(!0),
                                    onBlur: () => p(!1),
                                }),
                            }),
                            j ? null : (0, a.jsx)(nC, { boxFocused: f }),
                        ],
                    }),
                    m.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: ny.ZO,
                              children: m.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(no, { draft: t, onRemove: C }, t.localId);
                              }),
                          })
                        : null,
                    (0, a.jsxs)("div", {
                        className: ny.KE,
                        children: [
                            (0, a.jsx)("input", {
                                ref: y,
                                type: "file",
                                multiple: !0,
                                onChange: I,
                                className: ny.Fg,
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                            (0, a.jsx)(eX.Y, {
                                targetElementRef: w,
                                position: "top",
                                align: "left",
                                animation: eX.Y.Animation.NONE,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(eZ.W, {
                                        "data-menu-migrated": !0,
                                        navId: "conjure-home-attach",
                                        "aria-label": b,
                                        onClose: t,
                                        onSelect: t,
                                        children: (0, a.jsx)(eJ.rX, {
                                            children: t9.map((e) =>
                                                (0, a.jsx)(
                                                    eJ.Dr,
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
                                        className: ny.gb,
                                        disabled: s,
                                        "aria-label": b,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n,
                                        children: (0, a.jsx)(t3.PlusLargeIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                            className: ny.Xv,
                                        }),
                                    });
                                },
                            }),
                            (0, a.jsxs)("div", {
                                className: ny.Rc,
                                children: [
                                    (0, a.jsx)(nb, {
                                        settings: c ?? L,
                                        tiers: $,
                                        choices: T,
                                        disabled: s,
                                        onChange: d,
                                        className: ny.gb,
                                        icon: (0, a.jsx)(t4.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(eP.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: t5.SendMessageIcon,
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
var nS = n(628284),
    nE = n(369606),
    nI = n(926268),
    nM = n(406810),
    n_ = n(707554),
    nR = n(651346);
function nP(e) {
    let { className: t } = e;
    return (0, a.jsx)("span", { className: h()(nR.n8, t) });
}
let nT = [
        {
            id: "apps",
            title: S.default["bvcT/Q"],
            description: S.default.ArcJqa,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nR.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nR.My,
                            children: [
                                (0, a.jsx)("span", { className: nR._w }),
                                (0, a.jsx)("span", { className: nR._w }),
                                (0, a.jsx)("span", { className: nR._w }),
                            ],
                        }),
                        (0, a.jsx)(nP, { className: nR.Lm }),
                        (0, a.jsx)("div", {
                            className: nR.Oh,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nR.ZW,
                                        children: [
                                            (0, a.jsx)("span", { className: nR.NU }),
                                            0 === e
                                                ? (0, a.jsx)(nS.y, {
                                                      size: "xs",
                                                      color: k.A.colors.ICON_BRAND,
                                                      className: nR._6,
                                                  })
                                                : null,
                                            (0, a.jsx)(nP, { className: nR.Eg }),
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
                    className: h()(nR.x, nR.jG),
                    children: [
                        (0, a.jsx)("span", { className: h()(nR.gg, nR.K1) }),
                        (0, a.jsx)("span", { className: h()(nR.gg, nR.W2) }),
                        (0, a.jsx)("span", { className: h()(nR.Fs, nR.A$) }),
                        (0, a.jsx)("span", { className: h()(nR.Fs, nR.eP) }),
                        (0, a.jsx)("span", { className: h()(nR.Fs, nR.kc) }),
                        (0, a.jsx)("span", { className: h()(nR.Fs, nR.OE) }),
                        (0, a.jsx)("span", { className: nR.OC }),
                        (0, a.jsxs)("div", {
                            className: nR.si,
                            children: [
                                (0, a.jsx)(nE.TrophyIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: nR.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nR.KQ,
                            children: [
                                (0, a.jsx)(nI.HeartIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nI.HeartIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nI.HeartIcon, { size: "xxs", color: k.A.colors.ICON_OVERLAY_LIGHT }),
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
                    className: nR.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nR.$y,
                            children: [(0, a.jsx)("span", { className: nR.m$ }), (0, a.jsx)(nP, { className: nR.Md })],
                        }),
                        (0, a.jsxs)("div", {
                            className: nR.iU,
                            children: [
                                (0, a.jsx)("span", {
                                    className: h()(nR.my, nR.FY),
                                    children: (0, a.jsx)(ez.RobotIcon, {
                                        size: "xs",
                                        color: k.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: nR.OS,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: nR.f9,
                                            children: [
                                                (0, a.jsx)(nP, { className: nR.iE }),
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: nR.AO,
                                                    children: E.intl.string(S.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(nP, { className: nR.xs }),
                                        (0, a.jsx)(nP, { className: nR.Md }),
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
                    className: h()(nR.x, nR.ME),
                    children: [
                        (0, a.jsx)("span", { className: nR.CK }),
                        (0, a.jsxs)("div", {
                            className: nR.kI,
                            children: [
                                (0, a.jsx)("span", { className: h()(nR.my, nR.jU) }),
                                (0, a.jsx)(nP, { className: nR.iE }),
                                (0, a.jsxs)("div", {
                                    className: nR.Wy,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: nR.M1,
                                            children: [0, 1].map((e) =>
                                                (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        className: nR.dJ,
                                                        children: [
                                                            (0, a.jsx)(nP, { className: nR.cR }),
                                                            (0, a.jsx)(nP, { className: nR.Zh }),
                                                        ],
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: nR.bW,
                                            children: [0, 1, 2, 3, 4, 5].map((e) =>
                                                (0, a.jsx)("span", { className: nR.QR }, e),
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
                    className: nR.JH,
                    children: [
                        (0, a.jsx)("span", { className: nR.rx }),
                        (0, a.jsx)("span", { className: nR.ny }),
                        (0, a.jsx)("span", { className: nR.ZH }),
                        (0, a.jsx)("div", {
                            className: nR.$Y,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nR.fn,
                                        children: [
                                            (0, a.jsx)("span", { className: h()(nR._h, { [nR.zY]: 0 === e }) }),
                                            (0, a.jsx)(nP, { className: nR.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsxs)("div", {
                            className: nR.Y5,
                            children: [
                                (0, a.jsx)(nM.ClockIcon, { size: "xxs", color: k.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, a.jsx)(nP, { className: nR.jB }),
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
                    className: nR.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nR.iU,
                            children: [
                                (0, a.jsx)("span", { className: nR.my }),
                                (0, a.jsxs)("div", {
                                    className: nR.OS,
                                    children: [
                                        (0, a.jsx)(nP, { className: nR.iE }),
                                        (0, a.jsx)(nP, { className: h()(nR.xs, nR.pc) }),
                                        (0, a.jsx)(nP, { className: h()(nR.Md, nR.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nR.jC,
                            children: [
                                (0, a.jsx)(eq.ShieldIcon, { size: "sm", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsxs)("div", {
                                    className: nR.qQ,
                                    children: [
                                        (0, a.jsx)(nP, { className: h()(nR.Md, nR.k8) }),
                                        (0, a.jsx)(nP, { className: h()(nR.nq, nR.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    nL = i.memo(function () {
        let e = i.useId();
        return (0, a.jsx)("section", {
            className: nR.GG,
            "aria-labelledby": e,
            children: (0, a.jsx)(n_.F, {
                component: (0, a.jsx)(x.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: E.intl.string(S.default.IiQEVd),
                }),
                children: (0, a.jsx)("ul", {
                    className: nR.Vg,
                    children: nT.map((e) => {
                        let { id: t, title: n, description: l, Visual: r } = e;
                        return (0, a.jsxs)(
                            "li",
                            {
                                className: nR.Vs,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: nR.Tn,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(r, {}),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: nR.pG,
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
function n$(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let nD = 1;
function nO(e) {
    let t = n$(e),
        n = { localId: nD++, name: e.name, contentType: t };
    if (
        !(0, er.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= er.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...n, status: "error", errorText: eg(t) } };
    let l = er.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: l } };
}
function nq(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function nz(e, t) {
    if ((0, er.Oq)(t.size, n$(t))) return (0, ea.vX)(e, t);
    let n = await nl(t);
    if (null == n || !(0, er.Oq)(n.size, n.type)) throw Error("attachment over its size limit");
    return (0, ea.vX)(e, n);
}
var nF = n(698638),
    nU = n(606128),
    nG = n(260024);
class nB extends Error {}
function nK(e) {
    let t,
        { guildId: n } = e,
        [l, r] = i.useState(""),
        [s, o] = i.useState(!1),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, w] = i.useState(() => U.w.get(G) ?? null ?? !0),
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
        C = "user" === (0, b.o)().get(F.f_),
        A = (function () {
            let [e, t] = i.useState([]),
                n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => () => n.current.forEach(nq), []));
            let l = i.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(nO);
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
                    null != l && (nq(l), (n.current = n.current.filter((e) => e !== l)), t(n.current));
                }, []),
                s = i.useCallback(() => {
                    (n.current.forEach(nq), (n.current = []), t(n.current));
                }, []),
                o = i.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= er.lN) return e;
                            let t = E.intl.formatToPlainString(S.default.Q0aCVZ, { count: er.lN });
                            return e.map((e, n) =>
                                n < er.lN || "error" === e.draft.status
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
        { attachments: I, addFiles: T, clear: L } = A,
        $ =
            "idea" ===
                (t = (function (e) {
                    let { idea: t, installScope: n, submitting: l } = e;
                    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
                })({ idea: l, installScope: null, submitting: s })) ||
            "submitting" === t ||
            A.hasErrors,
        D = i.useCallback((e) => T(Array.from(e)), [T]);
    (0, eR.p)(k);
    let O = i.useCallback((e) => {
            (r(e), c(null));
        }, []),
        B = i.useCallback(
            (e) => {
                O(e);
                let t = k.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [O],
        ),
        K = i.useRef(!1),
        V = i.useCallback(async () => {
            let e = l.trim();
            if ("" !== e && !K.current) {
                ((K.current = !0), o(!0), c(null));
                try {
                    await q({
                        guildId: n,
                        installScope: C ? "user" : null,
                        prompt: e,
                        modelSettings: d,
                        start: async (t) => {
                            var n;
                            let l = [];
                            if (I.length > 0)
                                try {
                                    l = await Promise.all(
                                        I.map((e) => {
                                            let { file: n } = e;
                                            return nz(t, n);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, P.xx)(t).catch(() => void 0), new nB());
                                }
                            (z.Ay.getProject(t)?.install_scope_setup != null
                                ? ((n = l),
                                  U.w.set(ew, { ...eA(), [t]: { message: e, attachments: n, nonce: (0, H.m)() } }))
                                : (0, _.sendUserMessage)(t, e, l),
                                L());
                        },
                    });
                } catch (e) {
                    (c(e instanceof nB ? E.intl.string(S.default["903H7m"]) : (0, R.mG)(e)), (K.current = !1), o(!1));
                }
            }
        }, [l, C, d, n, I, L]),
        W = i.useCallback((e) => {
            (U.w.set(G, e), w(e));
        }, []),
        X = i.useCallback(() => W(!1), [W]),
        Z = E.intl.string(f ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: h()(nG.MY, nU.T),
        children: (0, a.jsxs)("div", {
            className: nG.Zp,
            children: [
                (0, a.jsxs)("main", {
                    className: nG.iW,
                    children: [
                        s
                            ? null
                            : (0, a.jsx)(j.A, {
                                  title: E.intl.string(S.default.gy7byi),
                                  description: E.intl.string(S.default["dkv/WO"]),
                                  icons: nF.ir,
                                  onDrop: D,
                              }),
                        (0, a.jsx)(M, {
                            title: E.intl.string(S.default.uk6jhJ),
                            transparent: !0,
                            actions: (0, a.jsx)(y.A.Icon, {
                                icon: p.Z,
                                color: "var(--icon-strong)",
                                className: nG.FW,
                                tooltip: Z,
                                "aria-label": Z,
                                selected: f,
                                onClick: () => W(!f),
                            }),
                        }),
                        (0, a.jsx)(g.Ip, {
                            className: nG.XG,
                            children: (0, a.jsxs)("div", {
                                className: nG.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nG.Lv,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: nG.ZK,
                                                children: [
                                                    (0, a.jsx)(x.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: nG.DD,
                                                        children: E.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: nG.VA,
                                                        children: E.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: nG.ZK,
                                                children: [
                                                    (0, a.jsx)(nA, {
                                                        idea: l,
                                                        inputRef: k,
                                                        onIdeaChange: O,
                                                        onSubmit: V,
                                                        submitting: s,
                                                        submitDisabled: $,
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
                                    (0, a.jsx)(eH, { inspirations: N, onCopyPrompt: B }),
                                    (0, a.jsx)(nL, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                f ? (0, a.jsx)(t1, { guildId: n, modelSettings: d, onClose: X }) : null,
            ],
        }),
    });
}
var nH = n(478016),
    nV = n(604525),
    nW = n(534890),
    nX = n(646270),
    nZ = n(31300),
    nJ = n(831453),
    nY = n(646973);
let nQ = Object.freeze({ x: 0.5, y: 0.5 });
function n0(e) {
    return "" !== e.trim();
}
function n1(e) {
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
function n2(e) {
    let { kind: t, name: n } = n1(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function n3(e) {
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
let n4 = "[conjure:selected] ",
    n5 = " \u2014 ";
function n6(e) {
    if (!e.startsWith(n4)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(n4.length),
        a = r.indexOf(n5),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let n7 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    n8 = new Map(),
    n9 = new Set();
function le(e) {
    return n8.get(e) ?? n7;
}
function lt(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? n8.set(e, t) : n8.delete(e), [...n9]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function ln(e) {
    let t = le(e);
    t.active || lt(e, { ...t, active: !0 });
}
function ll(e) {
    let t = le(e);
    t.active && lt(e, { ...t, active: !1 });
}
function lr(e) {
    n8.has(e) && lt(e, n7);
}
function la(e, t) {
    let n = le(e);
    n.active && lt(e, { ...n, context: t });
}
function li(e, t) {
    return null != t && e.authorId === t;
}
function ls(e) {
    return (
        n9.add(e),
        () => {
            n9.delete(e);
        }
    );
}
function lo(e) {
    let t = i.useCallback(() => (null == e ? n7 : le(e)), [e]);
    return i.useSyncExternalStore(ls, t, t);
}
(n(134528), n(947204));
let lu = { past: [], present: [], future: [] };
function lc(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function ld(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function lm(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => ld(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: ld(e.from, t, n), to: ld(e.to, t, n) };
        case "text":
            return { ...e, at: ld(e.at, t, n) };
    }
}
function lf(e) {
    return e.some((e) => "erase" !== e.kind);
}
function lh(e, t) {
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
function lp(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function lg(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function lx(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => lg(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = lg(e.from, t),
                l = lg(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = lg(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function lv(e) {
    return lf(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let lj = [3, 6, 12],
    lb = [10, 20, 40],
    ly = (0, el.D)(() => ({ byProject: {} })),
    lw = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: lu,
        sketchDismissedFor: null,
    };
function lk(e) {
    return ly.getState().byProject[e] ?? null;
}
function lN(e, t) {
    let n = lk(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = ly.getState();
    ly.setState({ byProject: { ...r, [e]: l } });
}
function lC(e) {
    if (null == lk(e)) return;
    let { [e]: t, ...n } = ly.getState().byProject;
    (ly.setState({ byProject: n }), lr(e));
}
function lA(e, t) {
    null != lk(e) &&
        (lN(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? ln(e) : ll(e));
}
function lS(e, t) {
    lN(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return lc(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return lc(
                        e,
                        e.present.map((e) => (e.id === t.id ? lm(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : lc(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : lc(e, []);
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
function lE(e) {
    return ly.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var lI = n(39416);
function lM(e) {
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
            className: lI.i5,
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
var l_ = n(91242),
    lR = n(457827),
    lP = n(802905),
    lT = n(573083);
function lL(e) {
    return W.A.isThinking(e) || (0, lT.wK)(e);
}
var l$ = n(35525),
    lD = n(881511);
let lO = new Set();
function lq(e, t) {
    if (!(lO.has(t) || (lL(e) && !lP.A.isPaused(e))))
        for (let e of l_.A.getAllFrames())
            e.applicationId === t &&
                (0, lD.D)(e) &&
                !(l$.A.isInHostWindow(e) || (l$.A.isActivityPopoutOpen() && l_.A.getMainFrame()?.id === e.id)) &&
                (0, lR.r)(e.id);
}
let lz = new Set(),
    lF = null;
function lU(e, t) {
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
                lz.add(t),
                () => {
                    lz.delete(t);
                }
            );
        }, [e]));
}
var lG = n(885386);
function lB() {
    return lG.Q_.useSetting() || !1;
}
var lK = n(128761),
    lH = n(12177),
    lV = n(967008),
    lW = n(513845),
    lX = n(951178);
let lZ = { width: 320, height: 240 };
function lJ(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : lZ;
}
var lY = n(855859),
    lQ = n(238490),
    l0 = n(991690),
    l1 = n(696645);
function l2(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function l3(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, l1.X)(e.surface)
                : E.intl.formatToPlainString(S.default["6xVl+N"], {
                      surface: (0, l1.X)(e.surface),
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
var l4 = n(939398),
    l5 = n(86147),
    l6 = n(729475),
    l7 = n(156548),
    l8 = n(869146),
    l9 = n(475815),
    re = n(165610);
function rt(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, l7.cR)(t?.id ?? null),
        r = (0, lT.Zv)(n),
        i = (0, o.bG)(
            [l8.A, l_.A],
            () => null != t && l8.A.getWindowOpen(D.MLl.ACTIVITY_POPOUT) && l_.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, re.x1)(t) || i || r) return null;
    let s = (0, l7.fl)(t.id);
    if (null == s || !(0, l9.Ub)(s)) return null;
    let u = E.intl.string(l ? E.t.Z7MyNB : E.t.OIDkcp);
    return (0, a.jsx)(y.A.Icon, {
        tooltip: u,
        icon: l ? l5.z : l6.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, l7.U8)(t.id),
    });
}
var rn = n(847374),
    rl = n(704745);
function rr(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = E.intl.string(S.default.I2ucou);
    return (0, a.jsx)(eX.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: eX.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eZ.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eJ.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = l2(e);
                        return (0, a.jsx)(
                            eJ.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: l3(e),
                                checked: t === l2(n),
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
            return (0, a.jsx)(t2.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: rl.h,
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
                            children: l3(n),
                        }),
                        (0, a.jsx)(rn.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var ra = n(324641),
    ri = n(627363),
    rs = n(153207),
    ro = n(803101),
    ru = n(226178),
    rc = n(625180),
    rd = n(672929),
    rm = n(111534),
    rf = n(754027),
    rh = n(722701),
    rp = n(962998),
    rg = n(373540),
    rx = n(144228);
function rv(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, o] = i.useState(t.selected_destination_id),
        u = E.intl.string(S.default.lJrOGW);
    return (0, a.jsx)(tL.a, {
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
        children: (0, a.jsx)(rx.z, {
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
let rj = {
    showPublishBlocked: rg.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, tD.openModal)(
                (t) =>
                    (0, a.jsx)(rv, {
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
    showError: (e) => (0, eV.P0)({ text: e, variant: "critical" }),
};
function rb(e) {
    return null != e && e.upToDate && "publish" === e.action && !e.awaitingApproval;
}
var ry = n(811587);
let rw = "conjure-publish";
function rk(e, t, l) {
    let r = i.useContext(tM.bI),
        s = l ?? r;
    return i.useCallback(
        (l) => {
            if (null == e || null == t || null == s || t.disabled) return;
            let r = t.status?.publishState;
            if (t.awaitingApproval || (null != r && (0, ry.lE)(r))) t.run(l);
            else {
                var i;
                let t, r;
                ((i = { projectId: e, publishOptions: s, entryPoint: l }),
                    (t = (0, tD.getInteractingModalContext)()),
                    (r = { current: !1 }),
                    (0, tD.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("880475"), n.e("801342"), n.e("744668")]).then(
                                n.bind(n, 815895),
                            );
                            return (t) => (0, a.jsx)(e, { ...t, ...i, savingRef: r });
                        },
                        {
                            modalKey: rw,
                            contextKey: t,
                            onCloseRequest: () => {
                                r.current || (0, tD.closeModal)(rw, t);
                            },
                        },
                    ));
            }
        },
        [e, t, s],
    );
}
var rN = n(58736),
    rC = n(333007),
    rA = n(775121),
    rS = n(826745),
    rE = n(470779);
function rI(e) {
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
            removeDraft: w,
            settled: k,
            takeRefs: C,
        } = ns({ projectId: t, surface: "design", onUploadFile: f }),
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
        z = Math.min(Math.max("point" === p ? n.y : n.y + 32 + 4, O), Math.max(O, l.top + l.height - $ - 8));
    return (0, a.jsxs)("div", {
        ref: P,
        className: h()(rE.M0, { [rE.ho]: _ && !m, [rE.ET]: m }),
        style: { left: q, top: z },
        "data-testid": "conjure-design-compose-bar",
        children: [
            g
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: rE.Fg,
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
                                  className: rE.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(eY.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: rE.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(rS.y, {
                autoFocus: !0,
                rows: 1,
                className: rE.hF,
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
                      className: rE.ZO,
                      children: j.map((e) => (0, a.jsx)(no, { draft: e, onRemove: w }, e.localId)),
                  })
                : null,
        ],
    });
}
function rM(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function r_(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rR(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? rM(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = rM(e());
                l((e) => (r_(e, t) ? e : t));
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
var rP = n(876798),
    rT = n(48507),
    rL = n(193885),
    r$ = n(744898),
    rD = n(803656),
    rO = n(241326),
    rq = n(972213);
function rz(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rF(e, t, n) {
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
let rU = rF("red", rz(k.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    rG = [
        rU,
        rF("yellow", rz(k.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        rF("green", rz(k.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        rF("blue", rz(k.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        rF("white", rz(k.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
    ];
function rB(e) {
    return rG.find((t) => t.id === e) ?? rU;
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
            d: "M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
    });
}
function rH(e) {
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
function rV(e) {
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
function rW(e) {
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
let rX = lj.map((e) => rW(Math.min(16, e + 3))),
    rZ = lb.map((e) => rW(Math.min(16, e / 2.5))),
    rJ = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
    rY = {
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
function rQ(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: lI.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(rP.k, {
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
function r0(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(ty.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function r1(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: lI.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: lI.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function r2(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rB(n.colorId),
        h = rY[u],
        p = E.intl.string(S.default.hUm825),
        g = E.intl.string(S.default.n5IA3a),
        x = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: lI.t$,
        children: [
            (0, a.jsx)("div", {
                className: lI.NT,
                children: (0, a.jsx)(rQ, {
                    icon: rH,
                    label: E.intl.string(S.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => lA(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: lI.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(S.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(rQ, {
                        icon: rK,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => lA(t, "move"),
                    }),
                    (0, a.jsx)(rQ, {
                        icon: rT.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => lA(t, "text"),
                    }),
                    (0, a.jsx)(r1, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rQ, {
                                icon: rL.V,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (lA(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rX.map((n, l) =>
                                (0, a.jsx)(
                                    rQ,
                                    {
                                        icon: n,
                                        label: E.intl.string(rJ[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (lN(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), ll(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r1, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(rQ, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (lA(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(rY).map((n) =>
                                (0, a.jsx)(
                                    rQ,
                                    {
                                        icon: rY[n].icon,
                                        label: rY[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (lA(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r1, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rQ, {
                                icon: rV,
                                label: g,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (lA(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rZ.map((n, l) =>
                                (0, a.jsx)(
                                    rQ,
                                    {
                                        icon: n,
                                        label: E.intl.string(rJ[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (lN(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), ll(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r1, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(r0, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rG.map((n) =>
                                (0, a.jsx)(
                                    rQ,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                lN(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: lI.Gz, role: "separator" }),
                    (0, a.jsx)(r0, {
                        icon: r$.e,
                        label: E.intl.string((0, e0.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(r0, {
                        icon: rD.U,
                        label: E.intl.string((0, e0.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(r0, {
                        icon: rO.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: lI.Gz, role: "separator" }),
                    (0, a.jsx)(r0, { icon: rq.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let r3 = k.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function r4(e, t, n) {
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
                    (e.strokeStyle = r3),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function r5(e) {
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
async function r6(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = r5(e),
            r = r5(e);
        if (null == l || null == r) return null;
        return (r4(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let r7 = new Map(),
    r8 = new Map(),
    r9 = (0, el.D)(() => ({ byMessageKey: {} }));
function ae(e, t) {
    let { [e]: n, ...l } = r9.getState().byMessageKey;
    r9.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function at(e, t) {
    null == t ? r7.delete(e) : r7.set(e, t);
}
function an(e) {
    return r7.get(e)?.() ?? Promise.resolve(null);
}
let al = { dx: 0, dy: 0 },
    ar = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    aa = 1;
function ai(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = lE(s),
        { active: u } = lo(s),
        c = (0, tD.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => lC(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && ln(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(as, { projectId: s, state: o, resolveIframe: r });
}
function as(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = rR(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, g] = i.useState(al),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        w = i.useRef(null),
        k = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = rB(n.colorId),
        M = "pick" !== C,
        _ = "marker" === n.tool ? lj[n.markerSize] : "eraser" === n.tool ? lb[n.eraserSize] : null,
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
        let t = await (0, ra.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, rC.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, ra.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (at(t, T), () => at(t, null)), [t, T]);
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
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? lm(e, p.dx, p.dy) : e)),
            o = j.current;
        r4(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
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
                id: `mark-${aa++}`,
                kind: "text",
                color: I.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (lh(n, r) && lS(t, { type: "commit", shape: n }), o(null));
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
                            l = null == R ? null : lx(R, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? R
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = lg(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => lg(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (lp(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = lg(e.from, n),
                                                                  r = lg(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => lp(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = lg(e.from, n),
                                                                  r = lg(e.to, n),
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
                                                              let t = lx(e, n);
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
                        if (!lf(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${aa++}`,
                                kind: "erase",
                                width: lb[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${aa++}`,
                                kind: "marker",
                                color: I.value,
                                width: lj[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${aa++}`,
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
                ((b.current = null), g(al), lS(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && lh(n, r) ? lS(t, { type: "commit", shape: n }) : $());
        }, [t, r, p, $]),
        G = i.useCallback(() => lC(t), [t]),
        B = i.useCallback(() => lS(t, { type: "undo" }), [t]),
        K = i.useCallback(() => lS(t, { type: "redo" }), [t]),
        H = i.useCallback(() => lS(t, { type: "clear" }), [t]),
        V = i.useRef({ tool: C, selected: R, exit: G, undo: B, redo: K });
    if (
        (i.useLayoutEffect(() => {
            V.current = { tool: C, selected: R, exit: G, undo: B, redo: K };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, eU.Cw)((0, eU.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), lS(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = ar[s];
                null != o && (e.preventDefault(), lA(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (M) return (rA.A.disable(), () => rA.A.enable());
        }, [M]),
        null == r)
    )
        return null;
    let W = Math.max(8, r.left - d - 8),
        X = null == R ? null : lx(null == b.current ? R : lm(R, p.dx, p.dy), r);
    return (0, rC.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: lI.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: lI.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: lI.Ji,
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
                                  className: lI.V$,
                                  "data-tool": C,
                                  "data-color": I.id,
                                  style: { width: _, height: _ },
                                  "aria-hidden": !0,
                              }),
                        null == X
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: lI.r1,
                                  style: { left: X.x, top: X.y, width: X.width, height: X.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: lI.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: lI.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: lI.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: lI.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(rI, {
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
                          onUploadFile: (e) => (0, ea.vX)(t, e),
                          onDismiss: q,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: lI.ej,
                    style: { left: W, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(r2, { projectId: t, state: n, onExit: G, onUndo: B, onRedo: K, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var ao = n(308081),
    au = n(689175),
    ac = n(683071),
    ad = n(218394),
    am = n(115982),
    af = n(886540);
function ah(e) {
    return !(0, af.BL)(e) && !0 !== e.stopRequested;
}
var ap = n(104317),
    ag = n(643278),
    ax = n(566424),
    av = n(683063),
    aj = n(140735),
    ab = n(138212);
function ay(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: h()(ab.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: h()(ab.wx, null != n && ab.o5, i),
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
function ak(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function aN(e) {
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
        j = f ? rn.a : nc._,
        b = null != n || l;
    return (0, a.jsxs)(ay, {
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
var aC = n(883646);
let aA = [];
function aS(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: h()(aC.xL, {
            [aC.Vb]: "in_progress" === t,
            [aC.cT]: "completed" === t,
            [aC.GZ]: "unfinished" === t,
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
            (0, a.jsx)(ne.y, {
                type: ne.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: aC.Qd,
                itemClassName: aC.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: aC.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: aC.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function aE(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : aA), [n, t]),
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
        className: aC.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    av.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: aC.MA,
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
                      className: aC.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function aI(e) {
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
            ((t = (r ?? aA).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? aA),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: aC.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: h()(aC.AS, { [aC.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(aS, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: aC.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: aC.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(aE, { agents: u.get(e.id) ?? aA, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: aC.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(aS, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: aC.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: aC.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function aM(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(aN, {
        title: E.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(ak, { children: c }),
        superseded: s,
        showLabel: E.intl.string(S.default.RKyN9q),
        hideLabel: E.intl.string(S.default.xydHoj),
        className: aC.Nr,
        bodyClassName: aC.rf,
        beforeBody: r && !s ? (0, a.jsx)(aj.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(aI, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var a_ = n(308665),
    aR = n(59678),
    aP = n(903847);
function aT(e) {
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
              className: aP.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(aP.vK, { [aP.ho]: g && c, [aP.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(aP.Rk, aR.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(ax.A, {
                                        glyph: (0, a.jsx)(a_.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(C.D, {
                                    className: aP.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: h()(aP.Rk, aR.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(ax.A, {
                                            glyph: (0, a.jsx)(a_.Ay, {}),
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
                                        className: aP.BO,
                                        onClick: P,
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
                  w && R
                      ? (0, a.jsx)("div", {
                            className: h()(aP.vB, { [aP.pg]: v && A, [aP.ui]: !v }),
                            children: (0, a.jsx)(aM, {
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
var aL = n(16619);
function a$(e) {
    let t = (0, aL.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var aD = n(736553),
    aO = n(642785);
async function aq(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, aO.dv)(e),
        i = new aD.u();
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
    aF = n(103557),
    aU = n(29073),
    aG = n(590077);
function aB(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = a$(e),
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
                                : eb(
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
                    (h(!0), g(!1));
                    let l =
                        ((t = z.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        k.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, H.m)() }), x.current.set(e.projectId, t)),
                                aq(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = k.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: C }))];
                        if (t.length === k.length || v.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), o(k.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), g(!0));
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
                    (0, a.jsx)(ty.K, {
                        icon: eW.P,
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
                    (0, a.jsx)(aF.f, {
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
                    children: (0, a.jsx)(eP.$, {
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
var aJ = n(734057),
    aY = n(287809);
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
    a1 = { channel: "#", role: "@", user: "@", project: "", server: "" },
    a2 = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
        server: [S.default.ZWXDeI, S.default.ZWXDeI],
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
var a8 = n(548118),
    a9 = n(300344),
    ie = n(614733),
    it = n(904363),
    il = n(950902),
    ir = n(384017);
function ia(e) {
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
                        let l = null == (n = aJ.A.getChannel(t)?.type) ? void 0 : a0[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = aY.default.getUser(t)?.username;
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
        className: ir.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(az.Z, {
                  ...g,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(az.Z, {
                  ...g,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function ii(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, a9.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(ia, { ...l, guildId: t, options: r, placeholder: a3("channel", !0 === l.question.multi_select) });
}
function is(e) {
    let { guildId: t, ...n } = e,
        l = (0, it.A)(t);
    return (0, a.jsx)(ia, { ...n, guildId: t, options: l, placeholder: a3("role", !0 === n.question.multi_select) });
}
function io(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, ie.A)(t);
    return (0, a.jsx)(ia, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: a3("user", !0 === n.question.multi_select),
    });
}
function iu(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = a$(t),
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
    return 0 === s.length ? n : (0, a.jsx)(ia, { ...l, options: s, placeholder: a3("project", !1) });
}
function ic(e) {
    let t = e.target;
    (0, eU.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function id(e) {
    let { fallback: t, ...n } = e,
        l = (0, aL.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(a8.Ay, { guild: e, size: a8.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: ic,
              onMouseUp: ic,
              children: (0, a.jsx)(ia, { ...n, options: r, placeholder: a3("server", !1) }),
          });
}
function im(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, il.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(iu, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(id, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(ii, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(is, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(io, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var ih = n(87221),
    ip = n(26430),
    ig = n(750943),
    ix = n(95477),
    iv = n(256905),
    ij = n(490707),
    ib = n(907702);
function iy(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, ij._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(ib.Gt, ib.b6),
              children: [
                  (0, a.jsx)(ih.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(ib.Gt, { [ib.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: ib.Sl,
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
function iw(e) {
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
        className: h()(ib.Vs, { [ib.Q9]: s, [ib.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: ib.Up,
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
                        className: ib.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(iy, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: ib.Gt }),
                            (0, a.jsx)("span", {
                                className: ib.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(aK.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(rx.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: ib.pG,
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
            null != g
                ? (0, a.jsx)("span", {
                      className: ib.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(ty.K, {
                              icon: rO.TrashIcon,
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
                        className: ib.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(ty.K, {
                                icon: ip._,
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
function ik(e) {
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
                    Promise.all(t.map((e) => (0, ea.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, iv.R)({
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
        className: ib.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: h()(ib.fF, "gallery" === f ? ib.nV : ib.nM, { [ib.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            iw,
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
                    null != w
                        ? (0, a.jsx)(
                              iw,
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
            (0, a.jsx)(iN, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function iN(e) {
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
        className: ib.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: ib.QJ,
                children: [
                    (0, a.jsx)(eP.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: ig.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(eP.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: tv.LinkIcon,
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
                        className: ib.Fg,
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
                                        (0, er.Oq)(a.size, r)
                                            ? (0, ea.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: eg(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: ib.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: ib.Hs,
                              children: (0, a.jsx)(ix.k, {
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
                              className: ib.gd,
                              children: [
                                  (0, a.jsx)(eP.$, {
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
function iC(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(ir.uK, { [ir.ue]: l, [ir.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: ir.dy, children: (0, a.jsx)(aK.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: ir.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: ir.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: ir.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: ir.ed,
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
                      className: ir.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function iA(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return a5(n)
        ? (0, a.jsx)(ik, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      iC,
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
let iS = [],
    iE = [];
function iI(e) {
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
        className: h()(ir.Ge, ir.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: ir.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(iA, {
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
                      className: ir.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: ir.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(aH.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(ir.Pu, ir.es), children: c }),
                      ],
                  }),
        ],
    });
}
function iM(e) {
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
        [f, p] = i.useState({}),
        [g, x] = i.useState({}),
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
        [B, K] = i.useState(null),
        H = i.useRef(null),
        V = i.useRef(0),
        W = null == r,
        X = l.questions.length,
        Z = Math.min(P, X - 1),
        J = l.questions[Z],
        [Y, Q] = i.useState({ id: J.id, expanded: !1 }),
        ee = Y.id === J.id && Y.expanded,
        [et, en] = i.useState(null),
        el = g[J.id] ?? "",
        er = !0 === J.multi_select,
        ei = a5(J),
        es = er ? (j[J.id] ?? iS) : ((t = f[J.id]), t?.kind === "option" ? [t.optionId] : a6),
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
                        if (o) return a7(h, m(i));
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
                                    null != l && (0, ea.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, ea.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                (0, ea.gm)(e, t).then(
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
        })(n, f, p),
        eu = eo.imageFor(J.id),
        ec = eo.selectedFor(J),
        { text: ed, phase: em } = (0, nd.Q)(J.question),
        ef = ed === J.question,
        eh = ef && et?.id === J.id && et.truncated;
    i.useLayoutEffect(() => {
        if (null == B || ee || !ef) return;
        function e() {
            if (null == B) return;
            let e = B.scrollHeight > B.clientHeight + 1;
            en((t) => (t?.id === J.id && t.truncated === e ? t : { id: J.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(B), () => t.disconnect());
    }, [ef, B, J.id, ee]);
    let ep = E.intl.string(ee ? E.t.iTcuma : E.t.dcl9MQ),
        eg = i.useCallback(
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
                                ? n.entities.map((e) => ({ target: e.id, build: I[t.id] }))
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
            [l, I, r, n],
        ),
        ex = i.useCallback(
            (e, t) => {
                V.current += 1;
                let n = V.current;
                ($({ direction: t, moves: n }),
                    O({ question: J, draft: el, selected: es, ownImage: eu, ownSelected: ec, direction: t, moves: n }),
                    U(!0),
                    T(e));
            },
            [el, eu, ec, J, es],
        ),
        ev = i.useCallback(() => {
            let e = G.current,
                t = H.current;
            null != e && null != t && z({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = G.current,
            t = H.current;
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
                let t = { ...f, [J.id]: e };
                p(t);
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
                null == n ? eg(t) : ex(n, n < Z ? "back" : "forward");
            },
            [f, l, W, Z, J.id, eg, ex],
        ),
        ey = i.useCallback(() => {
            W || 0 === Z || ex(Z - 1, "back");
        }, [W, Z, ex]),
        ew = 0 !== Z || W ? void 0 : u,
        ek = (Z > 0 && !W) || null != ew,
        eN = i.useCallback(
            (e) => {
                x((e) => ({ ...e, [J.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                ei ? W || p((e) => ({ ...e, [J.id]: t })) : eb(t);
            },
            [W, ei, J.id, eb],
        ),
        { multiPartFor: eC } = eo,
        eA = i.useMemo(() => {
            var e;
            let t, n;
            return er
                ? ((e = eC(J)),
                  (t = el.trim()),
                  (n = J.options.filter((e) => es.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: es,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [el, er, eC, J, es]),
        eS = y[J.id] ?? iE,
        eE = i.useMemo(() => {
            var e, t;
            let n;
            return null != J.input
                ? ((e = J.input),
                  (t = k[J.id]),
                  (n = el.trim()),
                  {
                      kind: "entities",
                      entities: eS,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eS.map((t) => (t.name.startsWith(a1[e]) ? t.name : `${a1[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [el, k, eS, J.id, J.input]),
        eI = i.useCallback(
            (e, t) => {
                (w((t) => ({ ...t, [J.id]: e })), A((e) => ({ ...e, [J.id]: t })));
            },
            [J.id],
        ),
        eM = i.useCallback(() => R(!0), []),
        e_ = i.useCallback(() => R(!1), []),
        eR = eo.controlsFor(J, W),
        eT = i.useCallback(() => {
            if (null != eE) {
                "" !== eE.text && eb(eE);
                return;
            }
            if (null != eA) {
                "" !== eA.text && eb(eA);
                return;
            }
            let e = el.trim();
            "" !== e && eb({ kind: "custom", text: e });
        }, [el, eA, eE, eb]),
        [eL, e$] = i.useState(!1),
        [eD, eO] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => e$(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eq = i.useCallback(() => {
            null != s && (eO(!0), setTimeout(s, 150));
        }, [s]),
        ez = i.useMemo(
            () =>
                null != eE
                    ? "" !== eE.text
                        ? eE
                        : null
                    : null != eA
                      ? "" !== eA.text
                          ? eA
                          : null
                      : "" !== el.trim()
                        ? { kind: "custom", text: el.trim() }
                        : (f[J.id] ?? null),
            [f, el, eA, eE, J.id],
        ),
        eF = null != ez && !W,
        eG = Z === X - 1,
        eB = i.useCallback(() => {
            null == ez || W || eb(ez);
        }, [W, ez, eb]),
        eK = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, eU.vq)(e.target, HTMLTextAreaElement) ||
                    (0, eU.vq)(e.target, HTMLInputElement) ||
                    ((!(0, eU.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ek
                            ? (e.preventDefault(), (ew ?? ey)())
                            : "ArrowRight" === e.key && eF && (e.preventDefault(), eB())));
            },
            [ew, ek, eF, ey, eB],
        ),
        eH = ei
            ? null
            : (0, a.jsxs)("div", {
                  className: ir.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: ir.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(aH.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(rS.y, {
                          value: el,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              x((e) => ({ ...e, [J.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eT());
                          },
                          placeholder: E.intl.string(aQ(J) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: J.question }),
                          disabled: W,
                          rows: 1,
                          className: ir.Pu,
                          "data-conjure-clarification-other": J.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(ir.$O, { [ir.fI]: eL && !eD, [ir.Oh]: eD }),
        role: "dialog",
        "aria-label": J.question,
        "data-conjure-clarification": l.id,
        "data-state": W ? "inert" : "open",
        "data-question-expanded": ee ? "true" : void 0,
        "data-picker-open": _ && !F ? "true" : void 0,
        "data-step": Z,
        tabIndex: -1,
        onKeyDown: eK,
        children: [
            (0, a.jsxs)("div", {
                className: ir.rf,
                style: null == q ? void 0 : { height: q.heading + q.rows },
                "data-moving": F ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: G,
                        className: ir.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: K,
                                tag: "span",
                                id: `${J.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: ee ? void 0 : m,
                                className: h()(aU.TK, ir.R_, { [ir.TB]: "exit" === em, [ir.JU]: "enter" === em }),
                                children: ed,
                            }),
                            eh || ee
                                ? (0, a.jsx)("div", {
                                      className: aU.Q7,
                                      children: (0, a.jsx)(N.m, {
                                          text: ep,
                                          children: (0, a.jsx)(ty.K, {
                                              icon: ee ? nu.t : rn.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => Q({ id: J.id, expanded: !ee }),
                                              "aria-label": ep,
                                              "aria-controls": `${J.id}-label`,
                                              "aria-expanded": ee,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(C.D, {
                                      className: h()(aU.gb, aU.Q7),
                                      onClick: eq,
                                      "aria-label": E.intl.string(S.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(eW.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: ir.Cg,
                        style: null == q ? void 0 : { insetBlockStart: q.heading },
                        children: (0, a.jsxs)("div", {
                            className: ir.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: H,
                                    className: ir.Ge,
                                    role: "group",
                                    "aria-labelledby": `${J.id}-label`,
                                    "data-direction": L?.direction,
                                    "data-parity": null == L ? void 0 : L.moves % 2,
                                    children: [
                                        er
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: ir.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(iA, {
                                            projectId: n,
                                            question: J,
                                            selected: es,
                                            disabled: W,
                                            onPick: (e) =>
                                                er
                                                    ? b((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [J.id]:
                                                                  ((n = t[J.id] ?? iS),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  J.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eN(e),
                                            own: eR,
                                        }),
                                        null != J.input
                                            ? (0, a.jsx)(im, {
                                                  projectId: n,
                                                  question: J,
                                                  value: eS,
                                                  disabled: W,
                                                  onChange: eI,
                                                  onFocus: eM,
                                                  onBlur: e_,
                                                  fallback: !1 === J.allow_custom ? eH : null,
                                              })
                                            : null,
                                        !0 === J.link && eS.length > 0 && null == I[J.id]
                                            ? (0, a.jsx)("div", {
                                                  className: ir.X_,
                                                  children: (0, a.jsx)(aV.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: E.intl.string(S.default.eCzCxC),
                                                      disabled: W,
                                                      onClick: () => M((e) => ({ ...e, [J.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === J.link && eS.length > 0 && null != I[J.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: ir.$y,
                                                  onFocus: eM,
                                                  onBlur: e_,
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
                                                          value: I[J.id] ?? "auto",
                                                          disabled: W,
                                                          onChange: (e) => M((t) => ({ ...t, [J.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != J.note
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: ir.aK,
                                                  children: J.note,
                                              })
                                            : null,
                                        !1 === J.allow_custom ? null : eH,
                                    ],
                                }),
                                null == D
                                    ? null
                                    : (0, a.jsx)(
                                          iI,
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
            X > 1 || er || ei || null != J.input || null != u || aQ(J)
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
                                  X > 1
                                      ? E.intl.formatToPlainString(S.default.yzYUjq, { index: Z + 1, total: X })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: aU.zt,
                              children: [
                                  ek
                                      ? (0, a.jsx)(aV.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: c ?? E.intl.string(S.default.Pk5lfA),
                                            onClick: ew ?? ey,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  d
                                      ? null
                                      : (0, a.jsx)(eP.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eG
                                                ? (o ?? E.intl.string(E.t.geKm7t))
                                                : E.intl.string(S.default.w1nRmT),
                                            disabled: !eF,
                                            onClick: eB,
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
var i_ = n(557744),
    iR = n(223347),
    iP = n(894443),
    iT = n(525530);
let iL = "scope-setup:q0",
    i$ = `${iL}:0`,
    iD = `${iL}:1`;
function iO(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([z.Ay], () => z.Ay.getProject(t), [t]),
        l = (0, aL.z9)("ConjureScopeSetupCard"),
        [r, s] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = n?.install_scope_setup,
        h = "server" === r || (null == r && "choose_server" === f),
        p = n?.guild_id,
        g = i.useMemo(
            () =>
                h
                    ? {
                          id: l.length > 0 ? "server-setup" : "server-setup-empty",
                          questions: [
                              {
                                  id: "server-setup:q0",
                                  question: E.intl.string(l.length > 0 ? S.default.ZWXDeI : S.default["u5+Qhu"]),
                                  recommendation_reason: "",
                                  allow_custom: !1,
                                  options: l.length > 0 ? [] : [{ id: i$, label: E.intl.string(S.default.qLYOpH) }],
                                  ...eI(l, p),
                              },
                          ],
                      }
                    : {
                          id: "scope-setup",
                          questions: [
                              {
                                  id: iL,
                                  question: E.intl.string(S.default.ickKBI),
                                  recommendation_reason: "",
                                  allow_custom: !1,
                                  options: [
                                      {
                                          id: i$,
                                          label: E.intl.string(S.default.qLYOpH),
                                          detail: E.intl.string(S.default.QSKvUE),
                                      },
                                      {
                                          id: iD,
                                          label: E.intl.string(S.default.QV5C7b),
                                          detail: E.intl.string(S.default["ZzHR4/"]),
                                      },
                                  ],
                              },
                          ],
                      },
            [h, l, p],
        );
    if (null == f) return null;
    if (null == n || !(0, z.PV)(n)) return (0, a.jsx)(iM, { projectId: t, clarification: eM(g), hideSubmit: !0 });
    async function x(e, n) {
        (c(!0), m(null));
        try {
            await eC(`settle:${t}`, async () => {
                try {
                    await e_(t, e, n);
                } catch (e) {
                    if (409 !== e.status) throw e;
                    await (0, P.U1)(t);
                }
            });
        } catch (e) {
            (c(!1), m(null != n && 403 === e.status ? "server" : "failed"));
        }
    }
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(
                iM,
                {
                    projectId: t,
                    clarification: g,
                    onSubmit: u
                        ? void 0
                        : function (e, t) {
                              let n = t?.answers[0];
                              if (null == n) return;
                              let l = n.entities?.[0]?.id;
                              n.option_ids.includes(iD) ? s("server") : null != l ? x("guild", l) : x("user", null);
                          },
                    submitText: E.intl.string(E.t["cY+Oob"]),
                    onBack: h && !u ? () => s("scope") : void 0,
                },
                g.id,
            ),
            null != d
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: E.intl.string("server" === d ? S.default["XXKd+7"] : S.default.jNVZ3e),
                  })
                : null,
        ],
    });
}
function iq(e) {
    let { projectId: t, clarification: n, offer: l, onKept: r } = e,
        { scope: s, feature: u } = l,
        c = (0, o.bG)([z.Ay], () => z.Ay.getProject(t), [t]),
        d = (0, aL.z9)("ConjureScopeSwitchCard"),
        [m, f] = i.useState(!1),
        [h, p] = i.useState(null),
        g = c?.guild_id,
        x = i.useMemo(() => {
            let [e] = n.questions,
                t = E.intl.formatToPlainString("guild" === s ? S.default["jh/iy+"] : S.default.d7jxeT, { feature: u });
            return {
                id: n.id,
                questions: [
                    "guild" === s
                        ? { ...e, question: t, allow_custom: !1, ...eI(d, g) }
                        : {
                              ...e,
                              question: t,
                              allow_custom: !1,
                              options: [{ id: `${e.id}:0`, label: E.intl.string(S.default.TVRkVh) }],
                          },
                ],
            };
        }, [n, u, d, g, s]);
    if (null == c || !(0, z.PV)(c))
        return (0, a.jsx)(iM, { projectId: t, clarification: eM(x), headingLines: 1, hideSubmit: !0 }, x.id);
    async function j(e) {
        (f(!0), p(null));
        try {
            var l;
            await ((l = n.id),
            eC(`switch:${t}:${l}`, async () => {
                await e_(t, s, e);
                let n = "guild" === s ? S.default["8+EcCu"] : S.default["U7+Yeh"];
                if (!(0, _.sendUserMessage)(t, E.intl.string(n))) throw Error("Not connected");
            }));
        } catch (e) {
            (f(!1), p(409 === e.status ? "locked" : "failed"));
        }
    }
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(
                iM,
                {
                    projectId: t,
                    clarification: x,
                    headingLines: 1,
                    onSubmit: m
                        ? void 0
                        : function (e, t) {
                              let n = t?.answers[0]?.entities?.[0];
                              "user" === s ? j(null) : null != n && j(n.id);
                          },
                    submitText: E.intl.string("guild" === s ? S.default.Ua7yKM : S.default.TVRkVh),
                    onBack: m
                        ? void 0
                        : function () {
                              (p(null), (0, ey.b4)(t, "keep install scope", (e) => e.sendKeepInstallScope()))
                                  ? r()
                                  : p("failed");
                          },
                    hideSubmit: "user" === s,
                    backText: E.intl.string("guild" === s ? S.default["4WnIqd"] : S.default["am+p7p"]),
                },
                x.id,
            ),
            null != h
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: E.intl.string("locked" === h ? S.default.irUT0N : S.default.jNVZ3e),
                  })
                : null,
        ],
    });
}
var iz = n(564963);
let iF = new Set(["select", "channel", "role", "user"]);
function iU(e, t) {
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
function iG(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let iB = new Set(),
    iK = new Set();
function iH(e) {
    return (
        iK.add(e),
        () => {
            iK.delete(e);
        }
    );
}
function iV() {
    return i.useSyncExternalStore(iH, () => iB);
}
function iW(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, af.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function iX(e, t, n) {
    if (!n || null == t) return !1;
    let l = iG(e, t);
    return l.length > 0 && !iU({ keys: l }, t);
}
var iZ = n(1665),
    iJ = n(11120),
    iY = n(411236);
function iQ(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: c,
            summary: d,
            markSaved: m,
        } = (function (e, t, n) {
            let l = iV(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!iB.has(n)) for (let e of ((iB = new Set([...iB, n])), iK)) e();
                    } else a(!0);
                }, [n]),
                c = (0, o.bG)([t_.A], () => iX(t, t_.A.getSettings(e), s), [e, t, s]);
            return {
                done: c,
                superseded: (0, o.bG)([W.A], () => null != n && iW(W.A.getMessages(e)).has(n), [e, n]),
                summary: (0, o.yK)(
                    [t_.A, aJ.A],
                    () => {
                        var n;
                        let l = t_.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => aJ.A.getChannel(e)?.name ?? null),
                              iG(t, l).flatMap((e) => {
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
                                                      case "role":
                                                      case "user":
                                                      case "game":
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
            className: iY.Mk,
            children: (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(S.default["+uXDk+"]),
            }),
        });
    if (f)
        return (0, a.jsxs)("article", {
            className: iY.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: iY.Ol,
                    children: [
                        (0, a.jsx)(nS.y, { size: "xs", color: k.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
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
    let p = null != n.note && "" !== n.note ? n.note : E.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(iJ.A, {
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
            let o = (0, a.jsx)(eP.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: E.intl.string(S.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: iY.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(S.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(iZ.A, { text: p, variant: "text-sm/normal", color: "text-default" }),
                          t,
                          (0, a.jsx)("div", { className: iY.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(aU.nd, aU.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: s,
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
                                      onClick: r,
                                      "aria-label": E.intl.string(S.default["iq+Pte"]),
                                      children: (0, a.jsx)(eW.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: iY.DQ,
                              children: [
                                  (0, a.jsx)(iZ.A, { text: p, variant: "text-sm/normal", color: "text-default" }),
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: aU.qr,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: iY.xE,
                                      children: E.intl.string(S.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: aU.zt,
                                      children: [
                                          (0, a.jsx)(eP.$, {
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
var i0 = n(935208),
    i1 = n(932111),
    i2 = n(404373);
function i3(e) {
    return "" !== en.getDraft(e).trim();
}
var i4 = n(29080);
function i5(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, am.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, am.Lf)(r) }),
    };
}
var i6 = n(62617);
let i7 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    i8 = {
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
    i9 = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, i6.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, i6.Z)(),
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
                        () => (0, i6.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, i6.Z)(),
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
                        () => (0, i6.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, i6.Z)(),
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
                        () => (0, i6.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, i6.Z)(),
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
                        () => (0, i6.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, i6.Z)(),
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
                        () => (0, i6.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, i6.Z)(),
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
                        () => (0, i6.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, i6.Z)(),
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
                        () => (0, i6.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, i6.Z)(),
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
                        () => (0, i6.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, i6.Z)(),
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
                        () => (0, i6.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, i6.Z)(),
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
                        () => (0, i6.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, i6.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function se(e) {
    return { ...i9[e], name: E.intl.string(i8[e]()) };
}
function st(e) {
    return i7.includes(e) ? se(e) : void 0;
}
function sn(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % i7.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, i7[(t + n) % i7.length]);
            }),
            l
        );
    })(e))
        t.set(n, se(l));
    return t;
}
var sl = n(615839);
function sr(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var sa = n(60160),
    si = n(16634);
function ss(e) {
    let t = (0, am.SY)(e.steps);
    return null != t ? (0, am.WQ)(t) : sr(e.task);
}
function so(e) {
    let t = sn(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? st(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: sr(e.task),
                      todoId: e.task.todoId,
                      line: ss(e),
                  },
              ];
    });
}
function su(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, am.SY)(n.steps),
        d = u
            ? ss(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(sr(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, sl.MB)(e.durationMs),
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
                                            si.A,
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
                                      children: (0, a.jsx)(sa.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(ax.A, {
        glyph: (0, a.jsx)(av.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: sr(o),
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
var sc = n(998445),
    sd = n(643210),
    sm = n(648127),
    sf = n(372795),
    sh = n(163897);
let sp = "conjure-browser-viewer";
function sg(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [sd.A],
            () =>
                n.flatMap((e) => {
                    let n = sd.A.getTab(t, e);
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
        className: sh.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(sx, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function sx(e) {
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
        u = (0, tD.useHasModalOpen)(sp),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        p = (0, sm.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(sh.Nr, f && sh.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tD.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: sp },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: p }),
        children: [
            (0, a.jsxs)("div", {
                className: sh.Gt,
                children: [
                    (0, a.jsx)(sf.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: sh.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: p }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: sh.qf,
                              children: (0, a.jsx)(sc.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: sh.HS,
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
                className: sh.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(sh.W9, f && sh.oM) }),
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
var sv = n(268409);
let sj = new WeakMap(),
    sb = new WeakMap();
function sy(e) {
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
            [W.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = sj.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = sb.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), sb.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (sj.set(e, n), n);
                })(W.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: sv.h, children: (0, a.jsx)(sg, { projectId: t, sessionIds: u }) });
}
var sw = n(469393);
function sk(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, lK.lG)(t.authored_at);
    return (0, a.jsx)(ay, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: sw.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sw.z,
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
                    ? (0, a.jsx)(eP.$, {
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
var sN = n(714917),
    sC = n(463660),
    sA = n(970211);
function sS(e) {
    let { projectId: t } = e,
        {
            src: n,
            blurred: l,
            handleError: r,
        } = (function (e, t) {
            let n = (0, o.bG)([sN.A], () => (null != e ? sN.A.getBackground(e) : null)),
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
                                r = await (0, sC.Mg)(e, l);
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
            return { src: null == e || null != n || c ? f : null, blurred: n?.blur === !0, handleError: h };
        })(t, "/assets/7cec34541705c795.webp");
    return null == n
        ? null
        : (0, a.jsx)("img", { className: h()(sA.L, { [sA.T]: l }), src: n, alt: "", "aria-hidden": !0, onError: r });
}
var sE = n(155718);
function sI(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let sM = ["command", "user_command", "message_command", "message"],
    s_ = new Set([sE.kc.CHAT, sE.kc.USER, sE.kc.MESSAGE]);
function sR(e) {
    return e.type ?? sE.kc.CHAT;
}
function sP(e) {
    return s_.has(sR(e));
}
function sT(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function sL(e, t) {
    let n = sM.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !sT(e)), ...n.filter(sT)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || sT(r) || l.push(r);
    }
    return sM.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function s$(e, t, n) {
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
    let s = e.commands.filter(sP).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (sR(e)) {
                    case sE.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case sE.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(sT),
        u = a.length > 0 ? sL([...a, ...o], !0) : sL("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var sD = n(377941),
    sO = n.n(sD);
function sq(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function sz(e) {
    return e.type === sE.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === sE.kc.USER || e.type === sE.kc.MESSAGE
          ? ""
          : "/";
}
let sF = {
        [lX.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [lX.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [lX.q7.ACTIVITY]: S.default["3/aHX6"],
        [lX.q7.OVERLAY]: S.default["rPpf5/"],
        [lX.q7.PROFILE_WIDGET]: null,
        [lX.q7.AUTOMOD]: null,
        [lX.q7.BOT]: null,
        [lX.q7.APPLICATION_COMMANDS]: null,
    },
    sU = [lX.q7.ACTIVITY, lX.q7.APP_CHANNEL, lX.q7.VOICE_CHANNEL, lX.q7.OVERLAY];
function sG(e) {
    return sU.find((t) => sI(e, t)) ?? null;
}
let sB = 1.8860510805500983;
function sK(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let sH = sK(24, 339.3333333333333),
    sV = sK(24, 640);
var sW = n(176999),
    sX = (((l = {}).IMAGE = "image"), l),
    sZ = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    sJ = n(598748),
    sY = n(773669);
let sQ = [],
    s0 = {},
    s1 = {};
function s2(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function s3(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: sX.IMAGE,
        visibility: sZ.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var s4 = n(127258),
    s5 = n(803306),
    s6 = n(320095),
    s7 = n(963852),
    s8 = n(95701),
    s9 = n(889227),
    oe = n(427262);
let ot = new s8.nA({ id: "1337", guild_id: "1337", type: D.rbe.GUILD_TEXT, name: "preview" });
function on(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([aY.default], () => aY.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, s5.nj)(new s9.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let ol = /^@\S+/;
var or = n(97808),
    oa = n(778712),
    oi = n(46054),
    os = n(200700);
let oo = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    ou = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    oc = ["blocked", "alert", "allowed"],
    od = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function om(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, os.getFriendlyDurationString)(n))
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
var of = n(984097),
    oh = n(13673);
let op = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function og(e) {
    let { example: t } = e,
        n = om(t);
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
let ox = ["glazedgamer", "sprinkles", "donutking"];
function ov(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = oo[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(of.nM, { [h()(of.HV, oh.DX)]: s }),
        children: [
            (0, a.jsx)(aj.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: of.my,
                children: (0, a.jsx)(or.eu, {
                    src: (0, eL.AE)(void 0, void 0),
                    size: oa._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: of.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), oi.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(og, { example: n }) : null,
                ],
            }),
        ],
    });
}
function oj(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = ou[t.section],
        s = new Set(t.examples.map(om)),
        o = 1 === s.size ? t.examples.map(om)[0] : null;
    return (0, a.jsxs)("div", {
        className: of.UO,
        children: [
            (0, a.jsxs)("div", {
                className: of.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: op[r.tone],
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
                                      className: of.IQ,
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
                className: of.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(ov, { example: e, username: ox[(n + t) % ox.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function ob(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            oc
                .map((e) => ({ section: e, examples: t.filter((t) => od[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: of.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: of.hk,
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
                    oj,
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
var oy = n(276293),
    ow = n(460905),
    ok = n(110384),
    oN = n(633018),
    oC = n(763754),
    oA = n(217424),
    oS = n(194085),
    oE = n(20851),
    oI = n(692508),
    oM = n(798819);
function o_(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(oM.item, oM.labelContainer, oM.colorDefault, {
            [oM.focused]: !0 === t.highlighted,
            [oM.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: oM.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: oM.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(oM.label, oI.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: oM.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: oM.icon }),
                  })
                : null,
        ],
    });
}
function oR(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, oI.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: ok.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(oM.menu, oI.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: oM.scroller,
            children: [
                (0, a.jsx)(o_, { item: s }),
                (0, a.jsx)("div", { className: oM.separator }),
                (0, a.jsx)(o_, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var oP = n(381941);
function oT() {}
function oL(e) {
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
        } = ((t = (0, o.bG)([aY.default], () => aY.default.getCurrentUser())),
        (n = (0, o.bG)([z.Ay], () => z.Ay.getProject(g))),
        (l = n?.application_id),
        (r = (0, o.bG)([tU.A], () => tU.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([aY.default], () => (null != l ? aY.default.getUser(l) : void 0), [l])),
        (d = on("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = on("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (p = on("31339", (0, oe.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, s6.rh)({
                                          ...(0, s7.Ay)({
                                              channelId: ot.id,
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
                                                        type: s4.G.APPLICATION_COMMAND,
                                                        user: (0, s7.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(ol, `<@${i.id}>`)), s),
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
    let w = ot.name;
    return (0, a.jsxs)("div", {
        className: oI.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: oI.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(oy.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: w }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(oI.TE, `group-spacing-${oP.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? oI.Rz : void 0,
                            children: [
                                (0, a.jsx)(oE.A, {
                                    message: n,
                                    channel: ot,
                                    author: (0, oC.FT)(n.author, ot),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(oA.A, { message: n, channel: ot }) : void 0,
                                    usernameClassName: r?.target === "user" ? oI.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: oI.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(oS.Ay, {
                                              children: [
                                                  (0, a.jsx)(oS.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: ow.n,
                                                      onClick: oT,
                                                  }),
                                                  (0, a.jsx)(oS.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: ok.W,
                                                      onClick: oT,
                                                  }),
                                                  (0, a.jsx)(oS.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: tw.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: oT,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? oI.ET : oI.je,
                                          inert: !0,
                                          children: (0, a.jsx)(oR, {
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
                className: oI.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(oN.k, { size: "sm", color: "currentColor" }),
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
var o$ = n(332173);
function oD(e) {
    let { name: t } = e;
    return (0, a.jsxs)(o$.A, { children: ["/", t] });
}
function oO(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(sO());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(oD, { name: e.name }, e.start) : e.text));
}
n(827669);
var oq = n(757789),
    oz = n(26137);
let oF = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var oU = n(573634);
let oG = {
    frame: e$.GameControllerIcon,
    overlay_widget: oq.V,
    user_widget: oz.r,
    bot: ez.RobotIcon,
    commands: ez.RobotIcon,
    automod: eq.ShieldIcon,
};
function oB(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(oU.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function oK(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: oU.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: oU.jw,
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
function oH(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: oU.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(oU.Vo, oU.G),
                children: (0, a.jsx)(eD.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: oU.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function oV(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: oU.wZ,
        children: t.map((e, t) => {
            let n = sz(e),
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
                                ? (0, a.jsx)(oD, { name: e.name })
                                : (0, a.jsx)(o$.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function oW(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: oU.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: oU.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(oO, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function oX(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? eD.k : oG[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : oF[t.kind]);
    return (0, a.jsxs)("section", {
        className: oU.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: oU.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: oU.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: oU.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(oO, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(oW, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: oU.PG, children: r }) : null,
        ],
    });
}
function oZ(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: oU.aN,
        children: [
            (0, a.jsxs)("div", {
                className: oU.Lv,
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
                                let n = t.map(sO()).join("|");
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
                            (0, a.jsx)("div", { className: oU.yF, role: "separator" }),
                            (0, a.jsx)(oX, {
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
                                                if (t.surfaces.includes(lX.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(lX.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(lX.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        oB,
                                                        {
                                                            className: oU.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: oU.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        oH,
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
                                                            oB,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(oK, { labels: r }),
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
                                                              oB,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(oV, { commands: e.commands }),
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
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(sq) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            oB,
                                                            { caption: n, children: (0, a.jsx)(oK, { labels: l }) },
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
var oJ = n(633075),
    oY = n(946356),
    oQ = n(58216),
    o0 = n(27399);
function o1(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([aY.default], () => aY.default.getCurrentUser()),
        r = i.useMemo(() => new oJ.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: o0.H,
              children: (0, a.jsx)(oY.A.Overlay, {
                  className: o0.w,
                  children: (0, a.jsx)(oQ.A, {
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
var o2 = n(443863);
function o3(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        o =
            ((t = Math.min(1, 592 / i.width, 291.3333333333333 / i.height)),
            { width: sK(i.width * t, 640), height: sK(i.height * t, 339.3333333333333) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sS, { projectId: n }),
            (0, a.jsx)("div", {
                className: o2.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": sH,
                    "--custom-conjure-plan-overlay-widget-end": sV,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: o2.M7, onError: s }),
            }),
        ],
    });
}
function o4(e) {
    let { projectId: t, design: n, alt: l, overlayWidgetSize: r } = e,
        { id: s } = n,
        { src: o, gone: u, handleError: c } = (0, ij._)(t, s),
        d = i.useCallback(() => {
            (0, ea.PK)(t, s).then(
                (e) => {
                    (0, iv.R)({
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
              className: h()(o2.xX, { [o2.nj]: null != r }),
              style: null != r ? { "--custom-conjure-plan-overlay-scene-aspect": String(sB) } : void 0,
              onClick: d,
              "aria-label": E.intl.string(S.default.TvAPIm),
              children:
                  null == o
                      ? null
                      : null != r
                        ? (0, a.jsx)(o3, { projectId: t, src: o, alt: l, size: r, onError: c })
                        : (0, a.jsx)("img", { src: o, alt: l, className: o2.sN, onError: c }),
          });
}
function o5(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = sI(c, lX.q7.APPLICATION_COMMANDS)),
            (l =
                sI(c, lX.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(sP)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : s$(c, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = s1 } = t,
                r = (0, o.bG)([sY.default], () => sY.default.locale),
                a = (0, o.bG)([z.Ay], () => {
                    let t = z.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(s0);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, ea.PK)(e, l.id).then(
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
                                                          ...s2(n),
                                                          ...(null != n.fallback ? { fallback: s2(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = sW.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[sJ.m.WIDGET_TOP] || null == i[sJ.m.WIDGET_BOTTOM]
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
                                                                    type: sW.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: sW.oG.NUMBER, value: a })
                                                                : (r[e] = { type: sW.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(s3),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: sQ,
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
                        .filter((e) => "/" === sz(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = sG(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(sP)
                    ? s$({ ...c, bot: void 0 }, "commands", {
                          message: E.intl.string(S.default.J7qggf),
                          reply: E.intl.string(S.default.nqYtiy),
                          event: E.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([z.Ay], () => z.Ay.getProject(u)?.name, [u]),
        w =
            p && null != d
                ? E.intl.formatToPlainString(S.default.YZ3qJs, { version: d.version })
                : E.intl.string(S.default["3b6e7o"]),
        k = p ? (0, a.jsx)(ak, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(aN, {
        title: w,
        meta: k,
        superseded: p,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: o2.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: o2.Qs,
                children: (0, a.jsx)(oZ, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(oO, { text: c.summary, commandNames: x }),
                            }),
                            "" !== g
                                ? (0, a.jsxs)("section", {
                                      className: o2.uW,
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
                                              children: (0, a.jsx)(oO, { text: g, commandNames: x }),
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
                                    ? (0, a.jsx)(o4, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: E.intl.string(null == (t = sG(c)) ? S.default["3/aHX6"] : sF[t]),
                                          overlayWidgetSize:
                                              c.design_image?.name === "overlay-design-v2.png"
                                                  ? lJ(c.overlay_widget ?? null)
                                                  : null,
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(o1, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(ob, { automod: c.automod })
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
                                        (r = l.some((e) => "command" === e.kind || sT(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(oL, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: x,
                }),
            }),
            null == m || p
                ? null
                : (0, a.jsxs)("div", {
                      className: o2.qr,
                      children: [
                          (0, a.jsx)(eP.$, {
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
var o6 = n(289565);
function o7(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: o6.m, children: n })
        : (0, a.jsxs)("div", {
              className: o6.Z,
              children: [
                  n,
                  (0, a.jsx)(N.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(ty.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: eW.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function o8(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function o9(e, t) {
    return null != e && o8(t, e.status);
}
let ue = new WeakMap();
var ut = n(175841),
    un = n(27232),
    ul = n(505930),
    ur = n(385081);
let ua = "conjurePublishRatings",
    ui = [1, 2, 3, 4, 5],
    us = { 1: S.default.GhbsGA, 2: S.default.cm0nwU, 3: S.default.kGvlh2, 4: S.default.dVBSUg, 5: S.default.DKlgF7 };
function uo(e) {
    return E.intl.string(us[e]);
}
let uu = new Set(),
    uc = 0;
function ud() {
    return U.w.get(ua) ?? {};
}
function um(e, t) {
    return ud()[e]?.[t] ?? null;
}
function uf(e) {
    return (uu.add(e), () => uu.delete(e));
}
function uh(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, ur.Fz)(e, n);
                },
            };
        })(t),
        u = E.intl.string(S.default.IqkF07);
    return (0, a.jsx)(tL.a, {
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
        children: (0, a.jsx)(aF.f, {
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
var up = n(54100);
function ug(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: up.mo,
        role: "status",
        children: [
            (0, a.jsx)(ut.SparklesIcon, { size: "xs", color: "currentColor", className: up.dQ, "aria-hidden": !0 }),
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
function ux(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: o } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(uf, () => uc),
                {
                    rating: um(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != um(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, ur.gw)(i);
                            let s = ud();
                            return (U.w.set(ua, { ...s, [t]: { ...s[t], [n]: l } }), uc++, uu.forEach((e) => e()), i);
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
        return (0, a.jsx)(ug, { rating: s });
    let b = null != s,
        y = b ? s : (d ?? u),
        w = b || (null == d && null != u);
    function k(e) {
        if (b) return;
        (c(e), m(null), p(!0));
        let t = o(e);
        null != t && (0, tD.openModal)((e) => (0, a.jsx)(uh, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: up.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: up.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: x,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: h()(up.Pf, { [up.KH]: null == y }),
                        children: E.intl.string(S.default.mTV326),
                    }),
                    ui.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: h()(up.Pf, { [up.KH]: y === e }),
                                children: uo(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": x,
                className: up.uf,
                children: ui.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? un.StarIcon : ul.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: up.uK,
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
                                        j.current ? c(e) : k(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((j.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), k(e)));
                                    },
                                    onKeyUp: () => {
                                        j.current = !1;
                                    },
                                    className: up.hF,
                                    "aria-label": E.intl.formatToPlainString(S.default.NU7Dex, {
                                        rating: e,
                                        label: uo(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: h()(up.d4, { [up.cO]: t, [up.Ng]: t && w }),
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
function uv(e) {
    let { projectId: t, publish: n } = e,
        l = rk(t, n);
    return (0, a.jsx)(eP.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function uj(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, tM.Ay)(t);
    return null != r && o9(r, l)
        ? (0, a.jsx)(o7, {
              children: (0, a.jsxs)(t$.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(uv, { projectId: t, publish: r }),
                      null != n ? (0, a.jsx)(ux, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var ub = n(303345),
    uy = n(44255),
    uw = n(416473),
    uk = n(289830);
function uN(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [z.Ay],
                    () => {
                        let t = z.Ay.getProject(e);
                        return null != t && (0, z.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, uw.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof ub.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, uy.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, uy.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(ay, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: uk.r,
            children: [
                (0, a.jsxs)("div", {
                    className: uk.z,
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
                    ? (0, a.jsx)(eP.$, {
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
var uC = n(989271);
function uA(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(uC.nM, { [uC.f1]: s, [uC.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: uC.jo,
                children: [
                    n
                        ? (0, a.jsx)(nH.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: uC.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: uC.G9,
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
function uS(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(ay, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                uA,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var uE = n(530557),
    uI = n(872162),
    uM = n(202723);
function u_(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tD.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: uE.R })), [r.fields]),
        d = (0, iz.bB)(l, s),
        m = h()(uM.Lo, { [uM.jY]: d });
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
                        (0, a.jsx)(uI.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: uM.Lo,
                      children: (0, a.jsx)(uI.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
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
                                className: uM.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: uM.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(nS.y, {
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
                    className: uM.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: E.intl.string(null != o ? S.default.O0QIqj : S.default.HCQvpO),
                        }),
                        (0, a.jsx)(iZ.A, {
                            text: null != r.note && "" !== r.note ? r.note : E.intl.string(S.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(uI.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: uM.sq,
                            children: (0, a.jsx)(eP.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: E.intl.string(S.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var uR = n(919790),
    uP = n(908492),
    uT = n(971824),
    uL = n(162052),
    u$ = n(165648);
function uD(e) {
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
        x = i.useMemo(() => (0, am.Jf)(n, l), [n, l]),
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
            className: aR.pj,
            "data-live": !1,
            children: (0, a.jsx)(ax.A, {
                glyph: (0, a.jsx)(i4.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, am.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let w = v.tasks,
        k = sn(w.map((e) => e.taskId)),
        N = !p && (l || w.some((e) => "running" === e.task.status)),
        C = so(w);
    return (0, a.jsxs)("ol", {
        className: aR.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(ap.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: w.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: p,
                durationMs: j,
                connectsDown: w.length > 0,
                tier: x.turn?.tier,
            }),
            w.map((e, n) => {
                let l = null != e.task.helperMark ? st(e.task.helperMark) : void 0,
                    r = l ?? k.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          su,
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
            (0, a.jsx)(sy, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: aR.YO,
                      children: (0, a.jsx)(aM, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function uO(e) {
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
            settingsAskId: g,
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
            () => i5({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: T, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = P,
        O = (C ? A : void 0) ?? P.attachmentsHost,
        q = $ && !C,
        z = null == u ? null : (0, a.jsx)(uR.A, { projectId: t, attachments: u }),
        F = null == z ? null : (0, a.jsx)("div", { className: aR.MT, children: z }),
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
        className: aR.ue,
        children: [
            T.length > 0 && !C
                ? (0, a.jsx)("ol", {
                      className: aR.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: aR.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: u$.PT,
                                          children: (0, uP.U)(e.content, !0, {
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
                ? (0, a.jsx)(o5, { projectId: t, proposal: r, version: s, onApprove: w })
                : q
                  ? (0, a.jsxs)("div", {
                        className: h()(aR.ky, uL.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(u$.PT, aR.cW),
                                children: (0, uP.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === O ? F : null,
                            U,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(aR.ky, uL.XR, { [uT.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(u_, {
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
                      className: h()(aR.ky, uL.XR),
                      children: (0, a.jsx)(iQ, { projectId: t, request: p, askId: g }),
                  })
                : null,
            "standalone" !== O && ("closing" !== O || q) ? null : z,
            null != x ? (0, a.jsx)(uj, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(uS, { ideas: o, pickedIdeaIds: y, onPick: b }) : null,
            null != I ? (0, a.jsx)(sk, { proposal: I, onRestore: M }) : null,
            null != _ ? (0, a.jsx)(uN, { projectId: t, proposal: _, current: R }) : null,
            q ? null : U,
        ],
    });
}
var uq = n(864970),
    uz = n(146806),
    uF = n(475358),
    uU = n(717400),
    uG = n(99677),
    uB = n(655098),
    uK = n(234320),
    uH = n(191023);
function uV(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(nn.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: lI.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(uH.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: lI.OY,
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
            className: nr.o1,
            onClick: () => {
                lN(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": E.intl.string(S.default.N852dj),
            children: (0, a.jsx)(nt.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function uW(e) {
    let { send: t } = e;
    return (0, a.jsxs)(nn.p, {
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
            "uploading" === t.status ? (0, a.jsx)(ne.y, { type: ne.t.SPINNING_CIRCLE_SIMPLE, className: nr.Rk }) : null,
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
var uX = n(901173),
    uZ = n(161431),
    uJ = n(280450),
    uY = n(503275),
    uQ = n(659280),
    u0 = n(351906),
    u1 = n(407653),
    u2 = n(322915);
function u3(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([u0.A], () => u0.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      uQ.Ay.User,
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
                      uQ.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(u1.A, { projectId: n, file: e.file, className: u2.Vk }),
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
    return (0, a.jsx)(uQ.Ay, {
        id: t,
        className: u2.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(u4, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                p.length > 0
                    ? (0, a.jsx)(u4, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: p })
                    : null,
            ],
        }),
    });
}
function u4(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: u2.Gf, children: n }),
            l,
        ],
    });
}
var u5 = n(719442),
    u6 = n(355622),
    u7 = n(408018),
    u8 = n(186306),
    u9 = n(323350),
    ce = n(35277),
    ct = n(820066),
    cn = n(683167),
    cl = n(267102),
    cr = n(259691);
let ca = (0, s8.createChannelRecord)({ id: "1", type: D.rbe.DM });
function ci(e) {
    let t = ct.VW.end(e, []);
    return { anchor: t, focus: t };
}
function cs(e) {
    return (0, u9.WO)(ct.VW.richValue(e), { mode: "raw" });
}
function co(e, t) {
    ((e.children = (0, u7.x7)(t)), (e.selection = ci(e)), e.onChange());
}
function cu(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(i1.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(cr.A, { attachmentId: r }), n] });
}
var cc = n(497437);
let cd = "text-md/normal",
    cm = null;
function cf(e) {
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
                frontFrom: 1e3 * (0, uz._R)(m),
                frontTo: 1e3 * (0, uz._R)(h),
                backFrom: 1e3 * (0, uz.T)(m),
                backTo: 1e3 * (0, uz.T)(h),
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
        M = (0, o.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        _ = t === E.intl.string(S.default.Zc7gML),
        R = r === t && _;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(cc.VT, { [cc.qk]: l }),
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
            children: (0, a.jsx)(uF.e, { shortcut: "tab", className: cc.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(uq.o, {
                text: t,
                variant: cd,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: h()(cc.xM, { [cc.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            P(cc.IS, n || (!M && "out" === w), u),
            (0, a.jsx)("span", {
                ref: c,
                className: cc.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: cd, tag: "span", children: t }),
            }),
            R
                ? (0, a.jsxs)("span", {
                      className: cc.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: cd, tag: "span", className: cc.xM, children: t }),
                          P(cc.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let ch = i.memo(function (e) {
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
                onSendToOtherProjects: p,
                suggestion: g,
                questionOpen: x = !1,
                hasPendingContext: v = !1,
                onDraftHasTextChange: j,
                modelSettings: b,
                onModelSettingsChange: y,
            } = e,
            w = n && !l,
            k = (function (e) {
                let t = i.useContext(cl.Ay),
                    [n] = i.useState(() => {
                        let n = (0, u5.ie)();
                        return (
                            (n.children = (0, u7.x7)(e)),
                            (n.selection = ci(n)),
                            (0, cn.a)({
                                editor: n,
                                chatInputType: u6.oU.GENERIC_RICH_TEXTAREA,
                                channel: ca,
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
                                    for (let [t, l] of ct.VW.nodes(e, { at: [], match: ct.l5.isText }))
                                        for (let e of t.text.matchAll(i1.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        u8.o.withMergedEntry(e, () =>
                                            ct.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    ce.b.textToVoid(
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
            })(en.getDraft(t)),
            [C, A] = i.useState(() => cs(k)),
            I = i.useRef(C),
            [M, R] = i.useState(null),
            P = i.useCallback(() => {
                let e = cs(k);
                (e !== I.current && ((I.current = e), V(t, e), A(e)),
                    R(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !ct.ZF.isCollapsed(t)) return null;
                            let [n] = ct.VW.node(e, t.anchor.path);
                            return ct.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(k),
                    ));
            }, [k, t]),
            T = i.useCallback((e) => co(k, e), [k]),
            L = "" !== C.trim();
        i.useEffect(() => j?.(L), [L, j]);
        let $ = i.useRef(t);
        i.useLayoutEffect(() => {
            $.current !== t && (($.current = t), co(k, en.getDraft(t)));
        }, [k, t]);
        let O = (0, o.bG)([eT.Ay], () => eT.Ay.isSubmitButtonEnabled),
            [q, F] = i.useState(!1);
        i.useEffect(() => {
            r || F(!1);
        }, [r]);
        let U = i.useRef(null),
            {
                drafts: G,
                addFiles: B,
                pasteFiles: K,
                removeDraft: H,
                settled: X,
                takeRefs: Z,
            } = ns({ projectId: t, surface: "chat", onUploadFile: d }),
            J = ly.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && lv(n);
            }),
            Y = "" !== C.trim() || G.length > 0 || v || J,
            Q = w && Y && X,
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
        let el = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: c } =
                        ((t = (0, o.bG)([z.Ay], () => z.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, o.yK)(
                            [W.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              W.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, uY.Y_)(l), r.forEach(uY.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([aY.default], () => (null == l ? null : aY.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [aY.default],
                            () => r.map((e) => aY.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([uJ.default], () => uJ.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            er = (0, uZ.rU)(t),
            [ei, es] = i.useState(null),
            [eo, eu] = i.useState(0),
            ec = i.useMemo(() => (null != M && w ? (0, uX.OG)(M, M.length) : null), [M, w]),
            ed = ec?.start ?? null;
        i.useEffect(() => {
            null == ed ? es(null) : (0, uZ.IP)(t);
        }, [ed, t]);
        let em = ed === ei ? null : ec,
            ef = i.useMemo(() => (null == em ? [] : (0, uX.l$)(el, er, em.text)), [em, el, er]),
            eh = em?.text;
        i.useEffect(() => eu(0), [eh]);
        let ep = ef.length > 0,
            eg = Math.min(eo, Math.max(0, ef.length - 1)),
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
                            (ce.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                ce.b.insertText(e, `${n} `));
                        })(k, em.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ef, em, k],
            ),
            ej = i.useCallback(() => {
                if (!Q) return;
                let e = Z(),
                    n = J
                        ? (function (e) {
                              let t = lk(e);
                              if (null == t || !lv(t)) return null;
                              let n = t.history.present,
                                  l = an(e);
                              return (
                                  lN(e, (e) => ({ ...e, history: lu, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, _.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (r8.set(i, s),
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
                                              capture: (t) => (0 === t ? l : an(e)),
                                              composite: (e) => r6(e, n),
                                              upload: (t) =>
                                                  (0, ea.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, ea.n6)(e, t.id),
                                              send: (n) => (0, _.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      ae(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (r8.delete(i),
                                                          window.setTimeout(() => {
                                                              (ae(i, null),
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
                    null == cm && (cm = document.createElement("canvas").getContext("2d"));
                    let i = cm;
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
                })(cg(eA.current), eO.current, (0, uX.Lj)(C));
                ("" !== l && et(l), T(""), es(null));
            }, [Q, J, t, C, u, Z, T]),
            eb = i.useCallback(
                (e) => {
                    (e.preventDefault(), ej());
                },
                [ej],
            ),
            ey = i.useCallback(() => {
                null == c || q || (F(!0), c());
            }, [c, q]),
            ew = null == g || "" !== C || !w || s || v ? null : g,
            ek = i.useCallback(
                (e) => {
                    if (ep && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ef.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eu((eg + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ev(eg));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), es(em?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && r && null != c && !q) {
                        (e.preventDefault(), e.stopPropagation(), ey());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ew) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), T(ew));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != m && (e.preventDefault(), m());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ej());
                },
                [ej, m, r, c, q, ey, ew, T, ep, ef.length, eg, ev, em],
            ),
            eN = i.useCallback(
                (e) => {
                    w && K(e);
                },
                [w, K],
            );
        (0, uK.Vo)({
            event: D.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eN(t);
            },
        });
        let eC = i.useCallback(
                (e) => {
                    (B(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [B],
            ),
            eA = i.useRef(null),
            eS = i.useRef(null),
            eE = i.useCallback(() => {
                let e = I.current;
                p?.((0, uX.Lj)(e), () => {
                    I.current === e && T("");
                });
            }, [p, T]),
            eI = i.useCallback((e) => {
                let t = U.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eM, e_] = i.useState(0),
            [eR, eP] = i.useState(!1);
        i.useEffect(() => {
            if (0 === C.length) return void eP(!1);
            let e = cg(eA.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && e_(t);
            }
            eP(!0);
            let t = setTimeout(() => eP(!1), cp);
            return () => clearTimeout(t);
        }, [C]);
        let eL = i.useMemo(() => ({ "--custom-glow-x": `${eM}px` }), [eM]),
            e$ = eR ? ` ${cc.EB}` : "",
            eD = s
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
            eO = i.useRef(0),
            eq = i.useRef(null),
            ez = i.useCallback((e) => {
                if ((eq.current?.disconnect(), null == e)) return;
                eO.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eO.current = e.clientWidth;
                });
                (t.observe(e), (eq.current = t));
            }, []),
            eF = i.useId(),
            eU = i.useId(),
            eG = null != ew,
            eB = ee ?? ew ?? eD,
            eK = "" === C && "" !== eB;
        return (0, a.jsxs)("form", {
            onSubmit: eb,
            className: cc.DA,
            children: [
                ep
                    ? (0, a.jsx)(u3, {
                          id: ex,
                          projectId: t,
                          suggestions: ef,
                          selectedIndex: eg,
                          onHover: eu,
                          onSelect: ev,
                      })
                    : null,
                G.length > 0 || J
                    ? (0, a.jsxs)("div", {
                          className: cc.lN,
                          children: [
                              G.map((e) => (0, a.jsx)(no, { draft: e, onRemove: H }, e.localId)),
                              J ? (0, a.jsx)(uV, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${cc.wg} ${cc.LP}${e$}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${cc.wg} ${cc.L3}${e$}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: cc.VA,
                    ref: eA,
                    children: [
                        (0, a.jsx)("input", {
                            ref: U,
                            type: "file",
                            multiple: !0,
                            onChange: eC,
                            className: cc.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(eX.Y, {
                            targetElementRef: eS,
                            position: "top",
                            align: "left",
                            animation: eX.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(eZ.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(eJ.rX, {
                                        children: [
                                            t9.map((e) =>
                                                (0, a.jsx)(
                                                    eJ.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => eI(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != f
                                                ? (0, a.jsx)(eJ.Dr, {
                                                      id: "import-project",
                                                      label: E.intl.string(S.default["p/k5i7"]),
                                                      iconLeft: uU.q,
                                                      leadingAccessory: { type: "icon", icon: uU.q },
                                                      action: f,
                                                  })
                                                : null,
                                            null != p
                                                ? (0, a.jsx)(eJ.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: uG.t,
                                                      leadingAccessory: { type: "icon", icon: uG.t },
                                                      action: eE,
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
                                    ref: eS,
                                    type: "button",
                                    className: `${cc.Y0} ${cc.nu}`,
                                    disabled: !w,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": n,
                                    children: (0, a.jsx)(t3.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: cc.Qu,
                                    }),
                                });
                            },
                        }),
                        eK
                            ? (0, a.jsx)("div", {
                                  ref: ez,
                                  className: cc.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(cf, { text: eB, offering: eG && null == ee, typed: null != ee }),
                              })
                            : null,
                        (0, a.jsx)(aj.A, { id: eU, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(i1.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(uB.A, {
                                editor: k,
                                containerClassName: h()(cc.sq, nw.dv),
                                className: cc.jp,
                                readOnly: !w,
                                canFocus: w,
                                onChange: P,
                                onBlur: () => R(null),
                                onKeyDown: ek,
                                onPaste: eN,
                                renderExtraElement: cu,
                                "aria-labelledby": eU,
                                "aria-describedby": eK ? eF : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ep,
                                "aria-controls": ep ? ex : void 0,
                                "aria-activedescendant": ep ? ((0, uQ.aI)(eg) ?? void 0) : void 0,
                            }),
                        }),
                        eK ? (0, a.jsx)(aj.A, { id: eF, children: eD }) : null,
                        (0, a.jsx)("div", {
                            className: cc.Sz,
                            children:
                                r && null != c
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${cc.Y0} ${cc.$E}`,
                                              disabled: q,
                                              onClick: ey,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(i4.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : b?.tierSettings != null && null != y
                                      ? (0, a.jsx)(nb, {
                                            settings: b.tierSettings,
                                            tiers: b.tiers,
                                            choices: b.choices,
                                            disabled: !w,
                                            onChange: y,
                                            className: `${cc.Y0} ${cc.$E}`,
                                            icon: (0, a.jsx)(t4.R, {
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
                                  className: cc.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: cc.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: cc.rt,
                                          disabled: !Q,
                                          "aria-label": E.intl.string(S.default.rxW2cl),
                                          children: (0, a.jsx)(t5.SendMessageIcon, {
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
    cp = 1500;
function cg(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var cx = n(709753),
    cv = n(540338),
    cj = n(986109);
let cb = i.createContext(null);
function cy(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(cb),
        [d, m] = i.useState(() => eT.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: h()(cj.xk, { [cj.g5]: d, [cj.Qo]: s, [cj.q3]: o }),
        children: n,
    });
}
let cw = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    ck = new Map();
function cN(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function cC(e, t) {
    return null != e && e > 0 && e < t;
}
let cA = "ideas",
    cS = "live_behind",
    cE = "conjureTipDismissals",
    cI = new Set(),
    cM = new Set(),
    c_ = 0;
function cR() {
    let e = U.w.get(cE);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function cP(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return cI.has(((n = e.id), `${t}:${n}`));
        case "app":
            return cR().app[t]?.includes(e.id) === !0;
        case "forever":
            return cR().forever.includes(e.id);
    }
}
function cT(e) {
    return (cM.add(e), () => cM.delete(e));
}
let cL = [12e4, 6e4];
var c$ = n(292771);
function cD(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
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
            className: c$.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(c$.qd, e.leaving ? c$.dv : c$.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var cO = n(443865),
    cq = n(247171);
function cz(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(cq.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(cq.gutter, cq[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: cq.content, children: i }),
        ],
    });
}
var cF = n(716502);
function cU(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cz, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: cF.Nr,
        children: (0, a.jsxs)("section", {
            className: cF.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: cF.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(ty.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eW.P,
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
function cG(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: cF.DD,
        children: t,
    });
}
function cB(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: cF.rf,
        children: t,
    });
}
function cK(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: cF.o1, children: t });
}
let cH = {
    ...cw,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(cU, {
            icon: cO.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(cG, { children: E.intl.string(S.default.OJlbhX) }),
                (0, a.jsx)(cB, { children: E.intl.string(S.default["3vJBni"]) }),
                (0, a.jsx)(cK, {
                    children: (0, a.jsx)(eP.$, {
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
var cV = n(830205);
function cW(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cz, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: cV.aK,
        children: (0, a.jsxs)("div", {
            className: cV.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: cV.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: cV.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(ty.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eW.P,
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
var cX = n(95635);
function cZ(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = rk(t, n);
    return (0, a.jsx)(cW, {
        icon: cX.UploadIcon,
        onDismiss: l,
        children: E.intl.format(S.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let cJ = [
    {
        id: cS,
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
                (null != t.publishCta && o9(n, t.publishCta)) ||
                cC(e.messagesSinceShown(cS), 10)
                ? null
                : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(cZ, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    cH,
    {
        id: cA,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(cw) ||
                0 === e.messagesSinceShown(cw.id) ||
                cC(e.messagesSinceShown(cA), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(cW, {
                icon: cO.LightbulbIcon,
                onDismiss: l,
                children: E.intl.format(S.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var cY = n(817921);
function cQ(e) {
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
                    ((s = (0, tM.Ay)(t)),
                    (u = (0, o.bG)([aY.default], () => aY.default.getCurrentUser()?.id)),
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
                        cL,
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
                                        if ((0, af.BL)(n)) return n;
                                        if (!(0, af.B0)(e, t)) break;
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
                        publishedSinceLastMessage: null != p && 0 === cN(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = ck.get(`${t}:${e}`);
                            return null != l ? cN(n, l, u) : null;
                        },
                        isDismissed: (e) => cP(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(cT, () => c_);
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
                })(e, g, (e) => cP(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== g.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                ck.set(`${e}:${t}`, n);
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
                                          if (!(null == e.dismissal || cP(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  cI.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = cR();
                                                  U.w.set(
                                                      cE,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (c_++, cM.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(cJ, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(cy, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: cY.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(cD, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var c0 = n(52133),
    c1 = n(732159),
    c2 = n(888366),
    c3 = n(862026),
    c4 = n(291192);
function c5(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, c3.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: c4.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: c4.Sp,
                children: [
                    (0, a.jsx)("span", { className: c4.q3 }),
                    (0, a.jsxs)("span", {
                        className: c4.g8,
                        children: [
                            (0, a.jsx)(c2.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: c4.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: c4.nM,
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
                                                        void (0, tD.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(c1.u, {
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
function c6(e) {
    return (0, o.bG)([z.Ay, tU.A], () => {
        let t = z.Ay.getProject(e);
        return null == t ? "" : (tU.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var c7 = n(951465),
    c8 = n(369455);
function c9(e) {
    let { projectId: t, notice: n } = e,
        l = c6(t),
        r = (0, o.bG)([z.Ay, d.A], () => {
            let e = z.Ay.getProject(t);
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
            n.update && null != n.published_revision ? (0, a.jsx)(de, { projectId: t, notice: n }) : null,
        ],
    });
}
function de(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tM.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [rh.A, z.Ay],
                    () => {
                        let r = rh.A.getPublishStatus(e),
                            a = z.Ay.getProject(e);
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
                                (0, z.jf)(a),
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
                                        className: c8.Z,
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
                                        r = z.Ay.getProject(e),
                                        a = null == r ? null : (0, tM.KL)(r, l);
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
                                null != e && (0, c7.A)(e);
                            },
                        }),
              ],
          });
}
var dt = n(940874),
    dn = n(505527),
    dl = n(930390),
    dr = n(521981),
    da = n(491182),
    di = n(438729),
    ds = n(622868),
    du = n(448368),
    dc = n(837528),
    dd = n(470964),
    dm = n(715628),
    df = n(752636),
    dh = n(9842),
    dp = n(589022),
    dg = n(994500),
    dx = n(967198);
let dv = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function dj(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function db(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function dy(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = db(e, t),
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
    if (dj(r) && dj(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && dj(db(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function dw(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
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
                      for (; a > 0 && dy(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && dv.has(e.charAt(l - 1));) l--;
                                    return dv.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && dy(t, o);) o++;
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
var dk = n(624479),
    dN = n(890377),
    dC = n(180227);
function dA(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(dC.QE, { [dC.Rn]: t }),
              children: (0, a.jsx)(oS.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          oS.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function dS(e) {
    return tC.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: dk.CopyIcon, onClick: () => (0, tC.C)(e) }]
        : [];
}
function dE(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: dN.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: eW.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(dA, { groupStart: n, actions: [...r, ...dS(t)] });
}
function dI(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: r$.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: tx.BugIcon, onClick: r }];
    return (0, a.jsx)(dA, { groupStart: n, actions: [...i, ...dS(t), ...s] });
}
let dM = (0, s8.createChannelRecord)({ id: "conjure-builder", type: D.rbe.DM }),
    d_ = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function dR(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(dC.Yq, { [dC.x1]: t }), children: e });
}
function dP(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let dT = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function dL(e, t, n) {
    let { content: l } = (0, dd.A)(e, dT),
        r = i.useMemo(() => ((0, i1.aW)(e.content) ? (0, dr.z2)(uP.U, e, dT).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: dM, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(di.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, dm.A)(s, r);
}
function d$(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, dc.m)(e, dM, t.usernameProfile, l),
        u = (0, dc.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([dx.A], () => dx.A.getGuildId()),
        d = (0, o.bG)([aY.default], () => aY.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = aY.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(dp.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function dD(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, i1.aW)(n.content)
                          ? (0, dr.z2)(uP.U, n, e).content
                          : (0, dr.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: dC.GV,
                              children: [
                                  (0, a.jsx)(nV.x, {
                                      className: dC.Rj,
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
            [dg.A],
            () => ({
                isReplyAuthorBlocked: dg.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: dg.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, oC.X4)(n),
        m = (0, oC.X4)(t),
        f = d$(n);
    return (0, a.jsx)(du.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: dM,
        referencedMessage: { state: dh.a.LOADED, message: n },
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
function dO(e) {
    let { message: t, author: n } = e,
        l = d$(t);
    return (0, a.jsx)(ds.Ay, {
        message: t,
        channel: dM,
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
function dq(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, uY.vm)(l),
        c = i.useMemo(() => (0, oC.FT)(u, null), [u]),
        d = i.useMemo(() => n6(t), [t]),
        m = d?.body ?? t,
        f = (0, uX.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, s7.Ay)({ channelId: dM.id, content: m, author: u });
            return (0, s6.rh)({ ...e, timestamp: dP(n, e.timestamp), state: D.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              dz,
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
function dz(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = dL(t, l);
    return (0, a.jsx)(da.A, {
        className: dC.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(dO, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: dC.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: dC.GV,
                              children: [
                                  (0, a.jsx)(nV.x, {
                                      className: dC.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: dC.WO, children: u }),
                      ],
                  }),
        childrenAccessories: dR(i, "" !== l),
        childrenButtons: (0, a.jsx)(dE, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function dF(e) {
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
        { text: m, revealing: f } = dw(t, { streaming: (0, o.bG)([t6.A], () => c && t6.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, oC.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, uY.vm)(g),
        v = i.useMemo(() => (null == r ? null : n6(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, s7.Ay)({ channelId: dM.id, content: v?.body ?? r.content, author: x });
            return (0, s6.rh)({ ...e, id: r.id, timestamp: dP(r.createdAt, e.timestamp), state: D.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: dM.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, s7.Ay)({ channelId: dM.id, content: "", author: d_ })),
        w = i.useMemo(
            () =>
                (0, s6.rh)({
                    ...y,
                    timestamp: dP(n, y.timestamp),
                    state: D.cmJ.SENT,
                    ...(null != b ? { type: D.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        k = i.useMemo(() => w.set("content", m), [w, m]),
        N = i.useMemo(
            () => (0, df.A)({ message: w, channel: dM, author: p, guildId: void 0, isGroupStart: u }),
            [w, p, u],
        ),
        C = dL(k, m, dC.OS);
    return (0, a.jsxs)("div", {
        className: dC.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(da.A, {
                className: dC.yE,
                author: p,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(dD, { baseMessage: w, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: dR(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u ? (0, a.jsx)("img", { className: dC.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var dU = n(981879);
function dG(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, s6.rh)(
                    { ...(0, s7.Ay)({ channelId: dM.id, content: "" }), id: `conjure:${t}`, state: D.cmJ.SENT },
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
                    channelId: dM.id,
                    messageId: l.id,
                    users: [d_],
                    emoji: e,
                    reactionType: dn.v.NORMAL,
                }),
                    K.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: dM.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: dn.v.NORMAL,
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
            className: dU.H,
            children: (0, a.jsx)(dl.A, {
                message: l,
                channel: dM,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var dB = n(616e3),
    dK = n(155899);
function dH(e) {
    let { onSelect: t, onClose: n = ts.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(eZ.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eJ.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eJ.Dr, {
                          id: "restore-version",
                          label: E.intl.string(S.default.H8Jfhu),
                          icon: r$.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eJ.Dr, { id: "view-trace", label: "View Trace", icon: tx.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function dV(e) {
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
        j = null != v && null != g ? () => dW(v, g) : void 0,
        b =
            ((t =
                lB() && "assistant" === x.role && (0, af.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [dB.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : dB.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((lF = { projectId: e, traceId: t }), [...lz])) n(e);
                      })(l, b)
                : void 0,
        w = x.in_reply_to,
        k = x.restoreProposal;
    return (0, a.jsx)(cy, {
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
                          void (0, ts.jA)(t, (e) => (0, a.jsx)(dH, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(dF, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(dI, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != i ? () => i(w) : void 0,
            accessories: (0, a.jsx)(uO, {
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
                turnId: (0, af.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: p,
                restoreProposal: k,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != k && null != g && f
                        ? () =>
                              dW(
                                  {
                                      sha: k.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: k.authored_at,
                                      subject: k.subject,
                                  },
                                  g,
                              )
                        : void 0,
            }),
        }),
    });
}
function dW(e, t) {
    (0, dK.F)({ onConfirm: () => t(e) });
}
var dX = n(288539);
function dZ(e, t, n) {
    return (0, a.jsx)(dX.A, { userId: e, content: `@${t}` }, n);
}
function dJ(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, uY.Y_)(l);
            }, [l]);
            let r = (0, o.bG)([aY.default], () => (null == l ? null : aY.default.getUser(l)), [l]),
                a = (0, oe.tx)(r),
                s = c6(e),
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
        })(n, l, dZ),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([t_.A], () => null != t && t.length > 0 && iU({ keys: t }, t_.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(iQ, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let dY = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    r9.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, i1.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(cy, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dq, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(uR.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(uW, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(dG, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, dt.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(cy, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dF, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(uR.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(cy, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uD, {
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
                    return (0, a.jsx)(cy, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dF, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(c9, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(cy, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dF, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(dJ, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(cy, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(c5, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(cy, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uD, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(cy, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uD, {
                            projectId: l,
                            steps: dQ,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(dV, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, c0.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, c0.A)(e.row, t.row, ["message"]) &&
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
                (0, c0.A)(e.replyTo, t.replyTo) &&
                (0, c0.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    dQ = [],
    d0 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    d1 = new WeakMap();
function d2(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function d3(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let d4 = i.memo(function (e) {
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
        w = i.useRef(null),
        [k, N] = i.useState(null),
        C = i.useCallback((e) => {
            ((w.current = e), N(e));
        }, []),
        [A, I] = i.useState(null),
        M = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(M.current), []);
    let R = i.useCallback((e) => {
            (I(e), window.clearTimeout(M.current), (M.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        P = (0, o.bG)([rh.A], () => rh.A.getPublishStatus(t)),
        T = (0, o.bG)([aY.default], () => aY.default.getCurrentUser()?.id),
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
                                        let t = (0, am.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = d1.get(r);
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
                        let a = !(0, af.BL)(e),
                            i = i5({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, am.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, am.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && d0.test(n.prose.content)) m = !0;
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
                                        turnActive: ah(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = d0.test(e.content ?? "");
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
                    (d1.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return o8(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = ue.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), ue.set(t, n)), n);
                      })),
                m,
            );
        }, [n, P, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, O] = i.useState(null),
        q = (function (e, t, n) {
            if (null == t) return d2(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : d3(e, t.endKey, t.end - 1) + 1,
                a = d3(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), d2(e, a, r));
        })($, D, x),
        z = i.useRef(q),
        F = i.useRef($),
        U = i.useRef(L),
        G = i.useRef(null),
        B = i.useRef(null),
        K = i.useRef(new Set()),
        H = i.useCallback(() => {
            let e = p.current?.getScrollerNode(),
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
        }, [p]),
        V = i.useCallback(() => {
            let e = p.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), d2(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), d2(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? d2(e, i, t.end) : null;
            })(F.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: g.current,
            });
            "older" === n ? (0, _.loadOlderHistory)(t) : null != n && O(n);
        }, [p, g, t]);
    i.useImperativeHandle(
        b,
        () => ({
            handleScroll() {
                (H(),
                    O((e) => {
                        let t = z.current;
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
                let r = w.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), O(z.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), R(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, _.loadOlderHistory)(t) && (W.current = e);
                    return;
                }
                (j(),
                    (B.current = () => {
                        (w.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            R(e));
                    }),
                    O(((n = F.current), d2(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [R, j, t],
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
                    null != l && l !== e && ((e = l), g.current ? p.current?.scrollToBottom() : H());
                });
            return (t.observe(k), () => t.disconnect());
        }, [k, H, p, g]));
    let Z = null == q.endKey;
    (i.useEffect(() => y?.(Z), [Z, y]),
        i.useLayoutEffect(() => {
            ((z.current = q), (F.current = $), (U.current = L));
        }),
        i.useLayoutEffect(() => {
            let e = p.current?.getScrollerNode(),
                t = w.current;
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
                ((B.current = null), l?.(), H(), V());
            }
            K.current = new Set($);
        }, [L, $, q.start, q.end, p, g, H, V]));
    let J = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, af.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, af.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([t_.A], () => t_.A.getSettings(t)?.secrets, [t]),
        er = (0, cx.WT)(t),
        ea = i.useMemo(() => (0, iz.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(cj.x7, cj.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: cj.Ub, children: (0, a.jsx)(ne.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: cj.x7,
            children: (0, a.jsx)(cy, { role: "assistant", children: (0, a.jsx)(dF, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(cb.Provider, {
        value: K,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: cj.x7,
            children: [
                L.slice(q.start, q.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            dY,
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
                        dY,
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
                            onApprovePlan: n.render_id === J ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                Z
                    ? er.map((e) =>
                          (0, a.jsx)(
                              cy,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(dF, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(cv.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && Z
                    ? (0, a.jsx)(cy, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(dF, {
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
                Z ? (0, a.jsx)(cQ, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var d5 = n(731084),
    d6 = n(823376),
    d7 = n(187447);
function d8(e) {
    let { activity: t, id: n } = e,
        l = (0, ad.j)(),
        { text: r, revealing: s } = dw(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: d7.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(au.Ch, {
                ref: o,
                className: d7.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(u$.PT, d7.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: oi.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var d9 = n(53659);
function me(e) {
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
        b = (0, d5.xu)({
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
        w = b === d5.kx["0"],
        [k, N] = i.useState(m ?? y),
        A = (0, ad.j)();
    (l || (0, d5.E4)(y, k) || (!A && !w)) && k !== y && N(y);
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
        ((R.current = w), !w && (0, d5.E8)(_.current) && N(I.current));
    }, [w]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                R.current
                    ? ((P.current = (0, d5.E8)(_.current) ? P.current + 1 : 0), N((0, d5.Ov)(P.current)))
                    : I.current !== _.current
                      ? N(I.current)
                      : M.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, d5.FZ)),
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
    return (0, a.jsx)(eX.Y, {
        targetElementRef: p,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: O,
        renderPopout: () => (0, a.jsx)(d8, { id: g, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: p,
                className: h()(d9.hF, T && d9.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : w
                            ? d5.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? g : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: d9.bl,
                        children: (0, a.jsx)(d6.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: d9.xu,
                        "aria-hidden": !!u || !!w || void 0,
                        children: A
                            ? (0, a.jsx)(uq.o, {
                                  ref: M,
                                  text: k,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: d5.vg,
                                  delay: null,
                                  className: d9.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: d9.yE,
                                  children: k,
                              }),
                    }),
                ],
            }),
    });
}
let mt = { second: 1e3, minute: 6e4 };
function mn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = mt[t];
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
var ml = n(719374);
function mr(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = mn(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: ml.$,
        "data-conjure-turn-timer": !0,
        children: (0, sl.C7)(l),
    });
}
function ma(e) {
    let { startedAt: t } = e,
        n = mn(t, "minute");
    return (0, a.jsx)(aj.A, { role: "timer", children: (0, sl.Us)(n) });
}
var mi = n(885574),
    ms = n(242779),
    mo = n(436804);
function mu(e) {
    return e.toLocaleString();
}
function mc(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: mo.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: mo.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [mu((0, ms.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    mu(n.input_tokens),
                    " in \xb7 ",
                    mu(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${mu(n.cache_creation_input_tokens)} cache write \xb7 ${mu(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function md(e) {
    let { project: t } = e,
        n = (0, ms.wU)(t.compaction),
        l = (0, ms.wU)(t.classifier),
        r = (0, ms.wV)(t.orchestrator, t.codegen),
        i = (0, ms.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: mo.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: mo.Q$,
                children: (0, a.jsxs)("div", {
                    className: mo.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [mu((0, ms.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(mc, { label: E.intl.string(S.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(mc, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(mc, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: mo.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ms.sj)(i) ? "\u2014" : `${Math.round(100 * (0, ms.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function mm(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eX.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(md, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: mo.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(mi.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var mf = n(997421);
function mh(e) {
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
        p = (0, lT.Zv)(t),
        g = (0, o.bG)([rh.A], () => rh.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, d5.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, d5.uc)(f),
        w = null != s,
        k = s ?? (n ? l : void 0),
        N = n || r || w || !0 === m;
    return (0, a.jsxs)("div", {
        className: mf.jf,
        children: [
            (0, a.jsxs)("div", {
                className: mf.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || p || g
                        ? (0, a.jsx)(me, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: w,
                              recalling: u,
                              controlling: p,
                              publishPending: g && N,
                              publishing: g,
                              spoken: x,
                              onSpokenChange: b,
                          })
                        : null,
                    null != k ? (0, a.jsx)(mr, { startedAt: k }) : null,
                ],
            }),
            null != k ? (0, a.jsx)(ma, { startedAt: k }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: mf.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(mm, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, d5.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: mf.XF,
                      children: (0, d5.Db)(h),
                  }),
        ],
    });
}
let mp = ["wheel", "touchstart", "pointerdown", "keydown"];
var mg = n(608711);
let mx = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function mv(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        c,
        { projectId: m, restoreState: f, onRestoreVersion: h, onImportProject: p } = e,
        g = (0, o.bG)([W.A], () => W.A.getMessages(m), [m]),
        x = (0, o.bG)([_.default], () => _.default.getConnState(m), [m]),
        b = (0, o.bG)([W.A], () => W.A.getProjectUsage(m), [m]),
        y = (0, o.bG)([W.A], () => W.A.getThinkingActivity(m), [m]),
        w = (0, o.bG)([W.A], () => W.A.isCompacting(m), [m]),
        k = (0, o.bG)([W.A], () => W.A.isSaving(m), [m]),
        C = (0, o.bG)([z.Ay], () => z.Ay.getProject(m)?.install_scope_setup != null, [m]),
        A = (0, o.bG)([i_.A], () => i_.A.getModelSettings(m), [m]),
        I = i.useRef(null),
        M = i.useRef(null),
        R = i.useRef(null),
        {
            stickToBottomRef: P,
            pinned: T,
            atBottom: L,
            unpin: $,
            releasePinHold: D,
            showsLatest: O,
            showsLatestRef: q,
            handleShowsLatestChange: F,
            updatePin: G,
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
                    for (let e of mp) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of mp) t.removeEventListener(e, u);
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
        })(M),
        B = i.useCallback(() => {
            function e() {
                let e = I.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (D(), q.current ? e() : R.current?.showLatest(e));
        }, [D, q]),
        K = i.useCallback(() => {
            (G(), R.current?.handleScroll());
        }, [G]);
    (i.useLayoutEffect(() => {
        let e = I.current;
        if (null == e) return;
        let t = M.current?.getScrollerNode(),
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
                r && (P.current ? M.current?.scrollToBottom() : R.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [P]),
        i.useEffect(() => {
            (0, _.ensureConnection)(m);
        }, [m]),
        (0, i2.E1)(m, (0, ad.j)()));
    let H = lo(m),
        V = (function (e) {
            let t = (0, tM.Ay)(e),
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
        })(m),
        X =
            ((l = (0, o.bG)([iP.A], () => iP.A.getFailure(m))),
            (r = i.useCallback(() => (0, iT.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: l }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: r },
                  }),
        Z = (0, o.bG)([iP.A], () => iP.A.getSetupStartedAt(m), [m]),
        J = i.useCallback(
            (e, t) => {
                (0, _.sendUserMessage)(m, e, t);
            },
            [m],
        ),
        Y = i.useCallback(
            (e, t, n) => {
                let l = n ?? J;
                0 === H.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => n0(e.comment)),
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
                                      a.push(`${t + 1}. ${n3(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: H.annotations, metaComment: e, context: H.context }),
                          t,
                      ),
                      lr(m));
            },
            [H, J, m],
        ),
        Q = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of r8)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, _.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = r8.get(e);
                            (r8.delete(e), ae(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                W.A.isThinking(m)) &&
                (0, _.interruptTurn)(m);
        }, [m]),
        ee = i.useCallback((e) => eb(m, e.implementation_prompt), [m]),
        [et, en] = (function (e) {
            let [t, n] = i.useState(() => i3(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? i3(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(m),
        el = i.useCallback(() => J(E.intl.string(S.default["t5CN3+"])), [J]),
        er = i.useCallback((e, t, n) => eb(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        ei = i.useCallback((e) => (0, iR.X)(m, e), [m]),
        es = i.useCallback((e) => (0, ea.vX)(m, e), [m]),
        eo = i.useCallback((e) => ni(m, "chat", Array.from(e), es), [m, es]),
        eu = i.useCallback(() => eb(m, E.intl.string(S.default.Zc7gML)), [m]),
        ec = f?.status === "restoring",
        ed = "open" === x && !ec,
        em = g[g.length - 1],
        ef = null != em && "assistant" === em.role && null != em.proposal,
        [eh, ep] = i.useState(null),
        eg = em?.clarification != null && em.clarification.id !== eh ? em.clarification : null,
        ex = i.useCallback(() => {
            null != eg && ep(eg.id);
        }, [eg]),
        [ev, ej] = i.useState(null),
        ey = (function (e) {
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
        })(m),
        ek = em?.appBuildRequest != null && (0, af.BL)(em) && em.appBuildRequest.id !== ev ? em.appBuildRequest : null,
        eC = ey.request ?? (null == eg ? ek : null),
        eI = null == ey.request ? eg : null,
        eM = null != eC && eC === ey.request,
        { close: e_, sent: eR } = ey,
        eT = ey.request?.id,
        eL = i.useCallback(() => {
            eM ? e_() : null != eC && ej(eC.id);
        }, [eC, eM, e_]),
        e$ = i.useCallback(
            (e) => {
                (null != eT && eR(eT),
                    (0, eV.P0)({
                        text: E.intl.formatToPlainString(S.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eT, eR],
        ),
        eD = (0, o.bG)([t_.A], () => t_.A.getSettings(m), [m]),
        [eO, eq] = i.useState(null),
        ez = iV(),
        eF =
            null != em &&
            ((t = em.id),
            (s = (0, iz.Mv)(g, eD?.secrets)),
            (u = iW(g)),
            g.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, af.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !iX(e.settingsRequest, eD, ez.has(e.id)))),
            )),
        eG =
            null != em &&
            "assistant" === em.role &&
            null != em.settingsRequest &&
            null == em.secretRequest &&
            (0, af.BL)(em) &&
            em.id !== eO &&
            ((n = em.settingsRequest),
            (c = n.keys ?? []),
            null != eD &&
                0 !== c.length &&
                c.every((e) => {
                    let t = eD.schema.find((t) => t.key === e);
                    return null != t && iF.has(t.type);
                })) &&
            iU(em.settingsRequest, eD) &&
            !eF
                ? em
                : null,
        eB = null == ey.request ? eG : null,
        eK = eB?.settingsRequest ?? null,
        eH = i.useCallback(() => {
            null != eG && eq(eG.id);
        }, [eG]),
        eX = null != eK,
        [eZ, eJ] = i.useState(null),
        eY = eI?.id ?? eC?.id ?? eB?.id ?? (C ? "scope-setup" : void 0),
        eQ = null != eg || null != eC || null != eG || C;
    i.useLayoutEffect(() => {
        let e = M.current?.getScrollerNode(),
            t = eZ?.firstElementChild;
        if (null == eZ || null == e || !(0, eU.vq)(t, HTMLElement) || null == eY) return;
        function n() {
            P.current && M.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eZ.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eZ, eY, M, P]);
    let e0 = (0, o.bG)([W.A], () => W.A.hasLoadedHistory(m), [m]),
        e1 = (0, o.bG)([z.Ay], () => null != z.Ay.getProject(m), [m]),
        [e2, e3] = i.useState(0);
    i.useLayoutEffect(() => {
        !(function (e, t) {
            let n = eA()[e],
                l = z.Ay.getProject(e);
            if (null == n || null == l || !W.A.hasLoadedHistory(e)) return;
            let r = W.A.getMessages(e),
                a = (0, _.optimisticMessageId)(n.nonce);
            if (!0 === n.sent) {
                let i = r.some((e) => "user" === e.role && !0 !== e.held && e.id !== a && e.content === n.message),
                    s = W.A.getHistoryLoads(e) > (eN.get(e) ?? 0);
                i
                    ? eS(e)
                    : !s ||
                      null != l.install_scope_setup ||
                      W.A.isHistoryUnavailable(e) ||
                      W.A.isThinking(e) ||
                      eE(e, n, t);
                return;
            }
            if (null != l.install_scope_setup) {
                r.some((e) => e.id === a) ||
                    (0, _.showUserMessage)(e, n.message, n.attachments, { held: !0, nonce: n.nonce });
                return;
            }
            "open" === _.default.getConnState(e) &&
                (U.w.set(ew, { ...eA(), [e]: { ...n, sent: !0 } }),
                eN.set(e, W.A.getHistoryLoads(e)),
                (0, _.sendUserMessage)(e, n.message, n.attachments, { nonce: n.nonce }) || eE(e, n, t));
        })(m, () => e3((e) => e + 1));
    }, [m, e1, e0, g, C, x]);
    let e4 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: e0,
            historyUnavailable: (0, o.bG)([W.A], () => W.A.isHistoryUnavailable(m), [m]),
            connState: x,
        }),
        e5 = "loading" === e4 && 0 === g.length,
        e6 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return mx[e % mx.length];
        }, [m]),
        e7 = ef ? E.intl.string(S.default.Zc7gML) : "greeting" === e4 && 0 === g.length ? e6 : null,
        e8 = i.useMemo(() => {
            for (let e = g.length - 1; e >= 0; e--) {
                let t = g[e];
                if ("assistant" === t.role && !(0, af.BL)(t)) return t;
            }
        }, [g]),
        e9 = null != e8,
        te =
            null != e8
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = i0.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(e8)
                : void 0,
        tt = ef && ed ? eu : void 0,
        tn = i.useCallback(() => eb(m, E.intl.string(S.default.EMgIuY)), [m]),
        [tl, tr] = i.useState(null),
        [ta, ti] = i.useState(e9);
    (ta !== e9 && (ti(e9), e9 || tr(null)),
        i.useEffect(() => {
            if (!e9) return;
            let e = M.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? tr(null)
                        : tr(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [e9, e8?.steps, O]));
    let ts = O ? tl : "bottom",
        to = i.useMemo(() => (null != e8 ? (0, ap.b9)(e8.steps) : ""), [e8]),
        tu = i.useMemo(() => (null != e8 ? ((0, am.lt)(e8.steps) ?? e8.todos) : void 0), [e8]),
        tc = e8?.provisionalTodo,
        td = null != e8 && ah(e8),
        tm = i.useMemo(() => {
            var e;
            return null != e8 ? ((e = e8.steps), so((0, am.Jf)(e, !0).tasks)) : void 0;
        }, [e8]);
    return (0, a.jsxs)("section", {
        ref: I,
        "data-conjure-chat": !0,
        className: mg.TE,
        children: [
            ed
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: nF.ir,
                      onDrop: eo,
                  })
                : null,
            (0, a.jsx)(aT, {
                onJumpToActivity: B,
                line: to,
                placement: e9 && "top" === ts ? "top" : null,
                todos: tu,
                todosLive: td,
                provisionalTodo: tc,
                agents: tm,
            }),
            (0, a.jsxs)("div", {
                className: mg.JX,
                children: [
                    (0, a.jsx)(au.Ch, {
                        ref: M,
                        onScroll: K,
                        scrollbarGutter: e5 ? "both-edges" : "stable",
                        className: [mg.N$, L ? null : mg.hB, eX ? mg.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(i1.Fu.Provider, {
                            value: m,
                            children: (0, a.jsx)(d4, {
                                projectId: m,
                                messages: g,
                                emptyState: e4,
                                floatingSettingsMessageId: eG?.id,
                                liveClarificationId: eI?.id,
                                onPickIdea: ed ? ee : void 0,
                                onAskForIdeas: ed ? el : void 0,
                                draftHasText: et,
                                onApprovePlan: ed ? tn : void 0,
                                onRestoreVersion: ec || e9 ? void 0 : h,
                                scrollerRef: M,
                                stickToBottomRef: P,
                                pinned: T,
                                onUnpin: $,
                                handleRef: R,
                                onShowsLatestChange: F,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: mg.NJ,
                        children: (0, a.jsx)(mh, {
                            projectId: m,
                            thinking: e9,
                            turnStartedAt: te,
                            restoring: ec,
                            remixStartedAt: Z,
                            recalling: e5,
                            thinkingActivity: y,
                            compacting: w,
                            saving: k,
                            projectUsage: b,
                            connState: x,
                        }),
                    }),
                    C
                        ? (0, a.jsx)("div", { ref: eJ, className: mg.B5, children: (0, a.jsx)(iO, { projectId: m }) })
                        : null,
                    null == eI
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eJ,
                              className: eX ? `${mg.B5} ${mg.J9}` : mg.B5,
                              children:
                                  null != eI.install_scope_switch
                                      ? (0, a.jsx)(
                                            iq,
                                            {
                                                projectId: m,
                                                clarification: eI,
                                                offer: eI.install_scope_switch,
                                                onKept: ex,
                                            },
                                            eI.id,
                                        )
                                      : (0, a.jsx)(
                                            iM,
                                            {
                                                projectId: m,
                                                clarification: eI,
                                                onSubmit: ed ? er : void 0,
                                                onDismiss: ex,
                                            },
                                            eI.id,
                                        ),
                          }),
                    null == eC
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eJ,
                              className: mg.B5,
                              children: (0, a.jsx)(
                                  aB,
                                  { projectId: m, request: eC, canSend: ed, onDismiss: eL, onSent: eM ? e$ : void 0 },
                                  eC.id,
                              ),
                          }),
                    null == eK
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eI && null == eC ? eJ : void 0,
                              className: mg.B5,
                              children: (0, a.jsx)(
                                  iQ,
                                  { askId: eB?.id, projectId: m, request: eK, onDismiss: eH },
                                  eB?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mg.Jx,
                children: [
                    (0, a.jsx)(aT, {
                        onJumpToActivity: B,
                        line: to,
                        placement: e9 && "bottom" === ts ? "bottom" : null,
                        todos: tu,
                        todosLive: td,
                        provisionalTodo: tc,
                        agents: tm,
                    }),
                    0 === H.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mg.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(S.default["7b49dS"], {
                                          count: H.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(S.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(eP.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(S.default["/zOv9+"]),
                                      onClick: () => lr(m),
                                  }),
                              ],
                          }),
                    null == X
                        ? null
                        : (0, a.jsx)("div", {
                              className: mg.qB,
                              children: (0, a.jsx)(ac.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: X.message,
                                  action: X.retry,
                              }),
                          }),
                    null == V
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mg.Db,
                              children: [
                                  (0, a.jsx)(ac.w, { type: "warning", role: "status", message: V.message }),
                                  (0, a.jsx)("div", {
                                      className: mg.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(ty.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: eW.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: V.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(
                        ch,
                        {
                            projectId: m,
                            canSend: ed,
                            running: e9,
                            restoring: ec,
                            onSend: Y,
                            hasPendingContext: H.annotations.length > 0,
                            onInterrupt: ed ? Q : void 0,
                            onUploadFile: es,
                            onImport: p,
                            onSendToOtherProjects: eQ ? void 0 : ey.open,
                            onApprove: tt,
                            suggestion: e7,
                            questionOpen: eQ,
                            modelSettings: A,
                            onModelSettingsChange: ei,
                            onDraftHasTextChange: en,
                            inputLocked: C,
                        },
                        e2,
                    ),
                ],
            }),
        ],
    });
}
var mj = n(761508),
    mb = n(933294),
    my = n(207438),
    mw = n(683438);
function mk(e, t) {
    return String(e).padStart(t, "0");
}
function mN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${mk(l.getHours(), 2)}:${mk(l.getMinutes(), 2)}:${mk(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${mk(l.getMilliseconds(), 3)}` : r;
}
var mC = n(667931);
let mA = {
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
    mS = { running: "Running", ok: "Done", error: "Failed" };
function mE(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function mI(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function mM(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function m_(e) {
    return mI(e.count > 1 ? e.totalMs : e.end - e.start);
}
let mR = ["Arguments", "Result", "Usage", "Details"];
function mP(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function mT(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function mL(e) {
    let t = (0, mC.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, mC.lp)(e) ? "interrupted" : "still running";
}
function m$(e) {
    return [mN(new Date(e.started_at).toISOString()) ?? "", mM(e.spans.length), (0, mC.Sj)((0, mC.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function mD(e) {
    let t = (0, mC.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, mC.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += mO(r, "in")),
                (l.output += mO(r, "out")),
                (l.cacheRead += mO(r, "cache_read")),
                (l.cacheWrite += mO(r, "cache_write")),
                (l.costUsd += mO(r, "cost_usd"))));
    }
    let r = mC.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function mO(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var mq = n(738188),
    mz = n(430993),
    mF = n(364840),
    mU = n(224640),
    mG = n(20742);
let mB = { collapsed: new Set(), revealed: new Set() };
var mK = n(872892);
let mH = {
    op: mK.Q,
    model: mK.i3,
    tool: mK.dH,
    setup: mK.kc,
    worktree: mK.Qx,
    sandbox: mK.QH,
    build: mK.F1,
    platform: mK.Op,
    other: mK.fv,
};
function mV(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      mM(t.calls, "model call"),
                      `${mE(t.input)} in`,
                      `${mE(t.output)} out`,
                      `${mE(t.cacheRead)} cache read`,
                      `${mE(t.cacheWrite)} cache write`,
                      mT(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: mK.M1,
        children: [
            (0, a.jsx)("div", {
                className: mK.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${mK.DJ} ${mH[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: mK.o1,
                children: mC.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${mI(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: mK.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${mK.nf} ${mH[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: mA[e] }),
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
function mW(e) {
    return `conjure-perf-trace-${e}`;
}
function mX(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: mK.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${mK.p0} ${s + o > 85 ? mK.EU : mK.jh}`,
                children: i,
            }),
        ],
    });
}
function mZ(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? nc._ : rn.a,
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
        id: mW(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${mK.$y} ${r ? mK.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: mK.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: mK.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: mK.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: mK.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${mK.nf} ${mH[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: mK.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: mK.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: mK.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(mq.WarningIcon, { size: "xs", color: "currentColor", className: mK.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(mX, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${mK.M0} ${mK.Nh}`
                    : t.running
                      ? `${mK.M0} ${mK.rF}`
                      : `${mK.M0} ${mH[t.category]}`,
                duration: m_(t),
            }),
        ],
    });
}
function mJ(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: mW(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${mK.$y} ${l ? mK.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: mK.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: mK.ai,
                        children: (0, a.jsx)(nc._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: mK.U9 }),
                    (0, a.jsx)("span", { className: `${mK.nf} ${mK.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: mK.MQ,
                        children: mM(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(mX, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${mK.M0} ${mK.ab} ${mK.dL}`,
                duration: mI(t.totalMs),
            }),
        ],
    });
}
function mY(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: mK._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: mK.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${mK.nf} ${mH[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [mP("Start", `+${mI(e.start)}`), mP("Duration", m_(e))];
                      e.count > 1
                          ? t.push(
                                mP("Calls", String(e.count)),
                                mP("Longest call", mI(e.maxMs)),
                                mP("Spread over", mI(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(mP("Self time", mI(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(mP("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(mP("Notes", l.join(", "))),
                          null != e.span.error && t.push(mP("Error", e.span.error)));
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
                              s = "cost_usd" === t ? mT(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), mP(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...mR.flatMap((e) => {
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
                                            className: mK.xd,
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
                                                            className: mK.vl,
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
function mQ(e) {
    let { trace: t } = e,
        n = i.useMemo(() => mD(t), [t]);
    return (0, a.jsx)(mV, { stats: n });
}
function m0(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, mC.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? mB : (0, mC.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, mC.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, mC.x7)(t)), l((n) => (0, mC._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, mC.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mC.IE)(t, e);
                        null != n && l((e) => (0, mC.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mC.IE)(t, e);
                        null != n && l((e) => (0, mC.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, mC.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, mC.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, mC.hB)(t));
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
        f = (0, mC.dj)(t),
        h = i.useMemo(() => (0, mC.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(mW(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(mz.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: mK.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: mL(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: m$(t),
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
                                      children: `${mM(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(mQ, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: mK.KE,
                        children: [
                            (0, a.jsx)(eP.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Time sinks",
                                onClick: n.reset,
                            }),
                            (0, a.jsx)(eP.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(eP.$, {
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
                        "aria-activedescendant": null == o ? void 0 : mW(o),
                        className: mK.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: g,
                        children: [
                            (0, a.jsxs)("div", {
                                className: mK.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: mK.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: mK.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${mK.io} ${(e / f) * 100 > 85 ? mK.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : mI(e),
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
                                          mZ,
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
                                    : (0, a.jsx)(mJ, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(mF.j, { children: (0, a.jsx)(mY, { node: s }) }),
        ],
    });
}
function m1(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([dB.A], () => dB.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(mU.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(mG.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(mz.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(m0, { trace: i }),
        ],
    });
}
let m2 = { running: mK.Vf, ok: mK.mo, error: mK.Sr };
function m3(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${mK.Om} ${m2[t]}`, role: "img", "aria-label": mS[t] });
}
function m4(e, t) {
    (0, tD.openModal)((n) => (0, a.jsx)(m1, { ...n, projectId: e, traceId: t }));
}
function m5(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => m4(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: mK.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: mK.sU,
                children: [
                    (0, a.jsx)(m3, { status: (0, mC.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: mK._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: mL(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: m$(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function m6(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            e2(
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
    return (0, a.jsx)(eX.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eX.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(eZ.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(eJ.rX, {
                    children: (0, a.jsx)(eJ.Dr, {
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
            return (0, a.jsx)(ty.K, {
                ...e,
                buttonRef: l,
                icon: tw.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function m7(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([dB.A], () => dB.A.getTimingTraces(t), [t]),
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
                    let t = e.map(mD);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: mC.BF.map((e) => ({
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
              className: mK.Ie,
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
              className: mK.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: mK.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: mK.fH,
                              children: (0, a.jsx)(mw.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(m6, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(au.Ch, {
                      className: mK.XG,
                      children: [
                          (0, a.jsx)(mV, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: mK.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(m5, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function m8(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function m9(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function fe(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function ft(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function fn(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function fl(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let fr = ["all", "preview", "stable", "web"];
function fa(e) {
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
function fi(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: m8(e.memory_p50_bytes ?? 0),
              p999: m8(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let fs = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var fo = n(911608),
    fu = n(177427);
function fc(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fu.KE,
        children: [
            (0, a.jsx)("div", {
                className: fu.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(ne.y, { type: ne.t.PULSING_ELLIPSIS })
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
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: ft(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(eP.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function fd(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: fu.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: fu.Gf, children: t }),
            n,
        ],
    });
}
function fm(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: fu.N8,
        children: [
            (0, a.jsxs)("div", {
                className: fu.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: fu.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: fu.kS,
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
function ff(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: fu.N8,
        children: [
            (0, a.jsxs)("div", {
                className: fu.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(fo.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? fu.dh : void 0,
            }),
        ],
    });
}
function fh(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(fm, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: fa(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(fm, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = fi(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fm, { label: E.intl.string(S.default["H/X+FI"]), value: m9(n.cpu_ms) }),
            null != l && (0, a.jsx)(fm, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function fp(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(fd, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: fa(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? fs[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(fd, {
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
                          fm,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: m9(t.cpu_ms) }),
                              hint: fi(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var fg = n(678708),
    fx = n(414499),
    fv = n(714800),
    fj = n(81466),
    fb = n(424383),
    fy = n(816943),
    fw = n(268791),
    fk = n(514042),
    fN = n(872351),
    fC = n(708988),
    fA = n(150934),
    fS = n(417270);
let fE = "Restart Agent",
    fI = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fM(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function f_(e, t) {
    return { label: e, value: null != t && "" !== t ? ft(t) : "Unknown", icon: "calendar" };
}
function fR(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fP(e, t, n, l) {
    let [r, a] = fI[n.status];
    return { label: e, value: `${fR(n.bytes)} of ${fR(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function fT(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = ft(e.at);
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
let fL = { main: "Main vs Remote", wip: "WIP vs Remote" };
function f$(e) {
    let t = `container ${fM(e.local)} \xb7 remote ${fM(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fL[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${fe(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${fe(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${fe(n)} Ahead, ${fe(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fD = ["main", "wip"];
var fO = n(400154);
let fq = {
        checkout: fg.FolderIcon,
        edit: aH.PencilIcon,
        remote: fx.h,
        commits: fv.e,
        calendar: fj.CalendarIcon,
        save: fb.L,
        objects: tt.R,
        download: fy.$,
        size: fw.$,
        file: fk.FileIcon,
    },
    fz = {
        ok: [nS.y, k.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [mq.WarningIcon, k.A.colors.ICON_FEEDBACK_WARNING],
        error: [nt.a, k.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [fN.z, k.A.colors.ICON_MUTED],
        behind: [fC.M, k.A.colors.ICON_MUTED],
    };
function fF(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([dB.A], () => dB.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, my.DK)(t), [t]),
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
                    `Updated ${ft(r)}`,
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
    return (0, a.jsxs)(fd, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fO.Lj,
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
                    if (!e.running || null != e.localError) return [fT(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fT(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : fe(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fD.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(f$))
                        : l.push(
                              { label: "Main", value: fM(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fM(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? fe(e.commits) : "Unknown", icon: "commits" },
                            f_("Oldest Commit", e.oldest),
                            f_("Newest Commit", e.newest),
                            fT(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${fe(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${fe(t.loose)} loose (${m8(t.looseBytes)}) \xb7 ${fe(t.packed)} packed in ${n} (${m8(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${fe(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${fe(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                fP(
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
                                  fP("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fq[r],
                        [o, u] = null != i ? fz[i] : [null, void 0];
                    return (0, a.jsx)(
                        fm,
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
function fU(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([dB.A], () => dB.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, my.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = dB.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, my.gX)(e);
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
            let u = i.useCallback(() => (0, my.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fE,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, to.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: fO.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fO.nM,
                children: [
                    (0, a.jsx)(fA.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(eP.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fS.RetryIcon,
                        text: fE,
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
                            return `Restarted \xb7 new instance since ${ft(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${ft(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fG(e, t) {
    return (0, a.jsx)(fm, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: fe((0, ms.aM)(t)) }),
        hint: `${fe(t.input_tokens)} in \xb7 ${fe(t.output_tokens)} out \xb7 ${fe(t.cache_read_input_tokens)} cache read`,
    });
}
function fB(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([dB.A], () => dB.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([dB.A], () => dB.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([dB.A], () => dB.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([dB.A], () => dB.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, my.Lj)(t), [t]),
        f = i.useCallback(() => (0, my.Lj)(t, !0), [t]),
        h = (0, o.bG)([dB.A], () => dB.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([W.A], () => W.A.isThinking(t), [t]),
        g = i.useCallback(() => (0, my.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: fO.Mf,
        children: [
            (0, a.jsx)(fc, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(fd, {
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
                                  (0, a.jsx)(fm, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: fe((0, ms.a7)(x.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: fe(x.turns) }),
                                  }),
                                  fG(E.intl.string(S.default.xtxP0e), x.orchestrator),
                                  fG(E.intl.string(S.default["9Sj3SX"]), x.codegen),
                                  fG(E.intl.string(S.default.ANCEo3), (0, ms.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(fm, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${fe(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(fd, {
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
                                  fG(E.intl.string(S.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(fm, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, ms.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(fd, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != u && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(ff, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: fe,
                                  }),
                                  (0, a.jsx)(fm, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${fe(u.tokensBefore)} \u{2192} ${fe(u.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: fe(u.retainedMessages),
                                          time: ft(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: fe(y) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(fm, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${fe(c.projected)} / ${fe(c.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: ft(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fO.Lj,
                        children: [
                            (0, a.jsx)(eP.$, {
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
                                    let t = ft(e.observedAt);
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
                                        (0, a.jsx)(eP.$, {
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
                        className: fO.Lj,
                        children: [
                            (0, a.jsx)(eP.$, {
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
                                    let t = ft(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fU, { projectId: t }),
                ],
            }),
            (0, a.jsx)(fF, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(fd, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(fm, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: ft(b.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(fm, { label: E.intl.string(S.default["8V8e1Z"]), value: fe(b.sockets) }),
                                    (0, a.jsx)(fm, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(fm, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: fe(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(fh, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(fd, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(fm, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: fe(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(fm, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: fe(j.context_window_tokens) }),
                        }),
                        (0, a.jsx)(fm, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: fe(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(fm, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: fe(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(fm, { label: E.intl.string(S.default.kIHga0), value: fe(j.max_build_attempts) }),
                        (0, a.jsx)(fm, { label: E.intl.string(S.default.Iw03yW), value: fe(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fK = n(237528),
    fH = n(629584),
    fV = n(531893);
function fW(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fV.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function fX(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fV.qf,
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
              className: fV.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fZ(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fV.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var fJ = n(109079);
let fY = i.memo(function (e) {
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
        className: fJ.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fJ.Mt,
                selectable: !0,
                children: mN(n.ts) ?? n.ts,
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
                className: fJ.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fJ.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fJ.Cq, children: (0, a.jsx)(fK.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fJ.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fK.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
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
                                      className: fJ.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(S.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(rn.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nc._, {
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
                                          className: fJ.dF,
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
function fQ(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([mb.A], () => mb.A.getLogs(t), [t]),
        l = (0, o.bG)([mb.A], () => mb.A.getHistoryState(t, "logs")),
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
                fr.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return fl(e);
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
        className: fJ.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fJ.y4,
                children: [
                    (0, a.jsx)(fH.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fJ.KT,
                        children: (0, a.jsx)(mw.I, {
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
            n.length > 0 && (0, a.jsx)(fW, { state: l }),
            (0, a.jsxs)(au.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: fJ.sx,
                children: [
                    (0, a.jsx)(fZ, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fX, {
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
                          : d.map((e) => (0, a.jsx)(fY, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function f0(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(fd, {
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
function f1(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(fm, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: fl(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(fm, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: fe(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${ft(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(fm, { label: E.intl.string(S.default.Iz5GnJ), value: fe(l.guild_count) }),
                  (0, a.jsx)(fm, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: fe(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: ft(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(fm, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: fe(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(fm, { label: fl(n), value: E.intl.string(S.default.lTHQss) });
}
function f2(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(fm, {
        label: fl(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: fe(n.requests),
            failures: fe(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: ft(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: ft(n.since) }),
    });
}
function f3(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fm, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: fl(t) }),
                value: fe(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    fm,
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
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: ft(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function f4(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(fm, {
        label: fl(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: fe(n.calls), errors: fe(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function f5(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(fd, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(fd, {
        title: t,
        children: [
            (0, a.jsx)(fm, {
                label: E.intl.string(S.default.xtD4Zp),
                value: fe(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: ft(n.since) }),
            }),
            (0, a.jsx)(fm, { label: E.intl.string(S.default.gfRhR3), value: fe(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(ff, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: m9,
                          }),
                          (0, a.jsx)(fm, {
                              label: E.intl.string(S.default.mSKImM),
                              value: m9(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: m9(n.cpu_ms_total),
                                  wall: m9(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(fm, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(fm, { label: E.intl.string(S.default.xvmL1D), value: m9(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(fm, { label: E.intl.string(S.default["4sQYwH"]), value: fe(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(fm, {
                label: E.intl.string(S.default.bQenOy),
                value: fe(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(fm, { label: E.intl.string(S.default.xgpn4Y), value: fn(n.build) }),
        ],
    });
}
function f6(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(fd, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(fm, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(fm, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: m8(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: fe(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(ff, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: m8,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function f7(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fO.Mf,
        children: [
            (0, a.jsx)(fc, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(f5, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(f5, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(f6, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(f0, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f1, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(f0, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f2, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(f0, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f3, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(f0, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f4, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(fp, { analytics: t.analytics }),
                        (0, a.jsxs)(fd, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(fm, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? fn(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(fm, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? fn(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var f8 = n(592465);
function f9(e) {
    let { projectId: t, onClose: n } = e,
        l = lB(),
        [r, s] = i.useState(() => (l && lF?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([dB.A], () => dB.A.getStatus(t), [t]),
        c = (0, o.bG)([dB.A], () => dB.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, my.R7)(t), (0, my.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, _.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == lF || lF.projectId !== e) return null;
            let { traceId: t } = lF;
            return ((lF = null), t);
        })(t);
        return null != e && (m4(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        lU(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, tC.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: dB.A.getStatus(t),
                        last_turn_usage: dB.A.getLastTurnUsage(t),
                        last_compaction: dB.A.getLastCompaction(t),
                        last_compaction_decline: dB.A.getLastCompactionDecline(t),
                        timing_traces: dB.A.getTimingTraces(t),
                        logs: mb.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, eV.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: f8.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(rN.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(rN.Ay.Icon, {
                            icon: dk.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(rN.Ay.Icon, { icon: eW.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(rN.Ay.ChannelIcon, { icon: tx.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(rN.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: f8.rf,
                children: [
                    (0, a.jsxs)(mj.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: f8.vR,
                        children: [
                            (0, a.jsx)(mj.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(mj.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(mj.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(mj.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(fQ, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(f7, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(m7, { projectId: t })
                            : (0, a.jsx)(fB, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var he = n(365912),
    ht = n(873715);
function hn(e) {
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
let hl = Object.freeze({ x: -1, y: -1 });
function hr(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = hn(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var ha = n(192888);
function hi(e, t) {
    return (0, ha.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(hr, () => ({ status: "failed" }));
}
var hs = n(108308);
let ho = { x: 25, y: 21 };
function hu(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function hc(e, t, n, l) {
    let r = hu(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function hd(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function hm(e) {
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
function hf(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = lo(u),
        m = (0, lT.Zv)(u),
        f = (0, tD.useHasAnyModalOpen)(),
        h = (0, o.bG)([aY.default], () => aY.default.getCurrentUser()),
        p = h?.id ?? null,
        [g, x] = i.useState(null),
        [j, b] = i.useState(!1),
        [y, w] = i.useState(!1),
        [k, N] = i.useState(null),
        [C, A] = i.useState(!1),
        I = i.useRef(null),
        M = i.useRef(null),
        R = i.useRef(null),
        [P, T] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, O] = i.useState(null),
        [q, z] = i.useState(null),
        F = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        H = c && !m && !f;
    null == D || (H && D.projectId === u) || O(null);
    let V = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != V) return () => ev(V, "design");
    }, [V]);
    let W = rR(r, H);
    i.useEffect(() => {
        if (!H || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (b(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, ht.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? hm(t.response) : null;
                    null == n ? w(!0) : (x(n), la(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (b(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [H, r, u]);
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!H || null == W || null == u) return;
        if (null == g) {
            X.current = W;
            return;
        }
        if (r_(X.current, W)) return;
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
                    (0, ht.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Q.current) return;
                        let l = hm(e.response);
                        null != l && (x(l), la(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = hn(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = le(u)).active &&
                                0 !== r.size &&
                                lt(u, {
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
    }, [H, W, g, d, u, r]),
        i.useEffect(() => {
            if (!H)
                return () => {
                    (N(null), O(null), K(null), x(null));
                };
        }, [H]));
    let Z = i.useRef(null),
        J = i.useRef(null),
        Y = i.useRef(!1),
        Q = i.useRef(!1);
    i.useEffect(() => {
        ((Q.current = H), H || ((Z.current = null), (J.current = null), (R.current = null), A(!1)));
    }, [H]);
    let ee = i.useCallback(
            function e() {
                if (Y.current) return;
                let t = Z.current;
                if (null == t) return;
                Z.current = null;
                let n = r();
                null != n &&
                    ((Y.current = !0),
                    hi(n, t).then((t) => {
                        if (((Y.current = !1), Q.current)) {
                            if ("picked" !== t.status || hj(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = n1(t.target);
                                (T((t) => (hv(t, e) ? t : e)),
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
            let e = setTimeout(() => z(null), hg);
            return () => clearTimeout(e);
        }, [q]));
    let en = null == g || null == W || g.viewport.width < 1 ? 1 : W.width / g.viewport.width,
        el = null != g || y,
        er = i.useMemo(() => g?.elements ?? [], [g]),
        ei = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ei.current = { rect: W, scale: en };
    }, [W, en]);
    let es = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (ev(u, "design"),
                    K(null),
                    (F.current = !1),
                    O({ projectId: u, target: e, anchor: t, draft: "", at: n, label: n1(e) }));
            },
            [u],
        ),
        eo = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / en, y: (e.clientY - t.top) / en }), [en]),
        eu = i.useCallback(() => {
            let e = R.current;
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
                if (((R.current = { x: e.clientX, y: e.clientY }), eu(), A(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > hx || Math.abs(e.clientY - D.at.y) > hx) && (F.current = !0);
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
                        n = null != e && hj(e, W, en) ? null : e;
                    if (null != n) {
                        let e = n1(n);
                        T((t) => (hv(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = J.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((J.current = n), (Z.current = n), ee());
            },
            [W, en, el, eo, L, er, D, B, eu, ee],
        ),
        ed = null == B ? null : d.find((e) => e.id === B.id),
        em = H && (C || D?.target.marker != null || ed?.target.marker != null);
    i.useEffect(() => {
        if (em)
            return () => {
                let e = r();
                null != e && hi(e, hl);
            };
    }, [em, r]);
    let ef = i.useCallback(() => {
        (A(!1), N(null), (J.current = null), (Z.current = null));
    }, []);
    i.useEffect(() => {
        if (!H || !C || !el || L || null != D || null != B) return;
        let e = R.current,
            { rect: t, scale: n } = ei.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((J.current = l), (Z.current = l), ee());
    }, [H, C, el, L, D, B, ee]);
    let eh = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (et(), K(null));
                    return;
                }
                if (null == k || null == W) return;
                let t = eo(e, W);
                es(
                    k,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? nQ
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(k, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [k, W, eo, D, B, es, et],
        ),
        ep = i.useCallback(() => {
            null != u && (N(null), null != lk(u) ? lC(u) : lr(u));
        }, [u]),
        eg = i.useCallback(() => {
            null != u &&
                (null != D
                    ? et()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : ep());
        }, [u, D, B, et, ep]),
        ex = i.useRef(eg),
        ej = i.useRef(u),
        eb = i.useRef(ep);
    i.useLayoutEffect(() => {
        ((ex.current = eg), (ej.current = u), (eb.current = ep));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (H)
            return (
                rA.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rA.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            !(0, eU.vq)(t) ||
                ey.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, he.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ej.current || null == lk(ej.current)) && eb.current());
        }
    }, [H, s]);
    let ew = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eg());
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
                    es(k, nQ, { x: (W?.left ?? 0) + k.rect.x * en, y: (W?.top ?? 0) + k.rect.y * en }));
            },
            [u, D, B, er, k, es, eg, W, en],
        ),
        ek = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((n0(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, _.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = n1(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${n4}${r}${n5}${n3(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        et(),
                        N(null)));
            },
            [u, D, et],
        ),
        eN = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, ea.vX)(u, e)), [u]),
        eC = i.useCallback(() => {
            if (null != u && null != B && null != p && n0(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = le(u)).annotations.find((t) => t.id === e)) &&
                        li(l, p) &&
                        lt(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = le(u)).annotations.find((t) => t.id === e)) &&
                        li(n, p) &&
                        lt(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, B, p]),
        eS = c
            ? j
                ? E.intl.string(S.default["Eb/YV9"])
                : y
                  ? E.intl.string(S.default.FD30bh)
                  : E.intl.formatToPlainString(S.default.dTSqLF, { count: d.length })
            : "",
        eE = H && null != W,
        eI = C && null == B,
        eM = D?.target ?? ed?.target ?? null,
        e_ = D ?? q,
        eR = D ?? (q?.instant === !0 ? null : q),
        eT =
            null != ed && null != W
                ? (function (e, t) {
                      let { left: n, top: l } = hd(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(hc(ed.target, ed.anchor, W, en), W)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (ed?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ed;
            hi(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ed, r]),
        (0, rC.createPortal)(
            (0, a.jsxs)("div", {
                ref: ey,
                className: hs.Li,
                children: [
                    (0, a.jsx)(aj.A, {
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
                                      className: hs.MT,
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
                                      ? (0, a.jsx)(hb, { box: hu(k, W, en) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: hs.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: hs.xz,
                                          "data-shown": null != k && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: hs.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, a.jsx)("span", { className: hs.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: hs.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: hs.Y,
                                      children: eI ? (0, a.jsx)("div", { className: hs.u }) : null,
                                  }),
                                  null == eR
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: hs.aZ,
                                            style: {
                                                transform: `translate3d(${eR.at.x + 20}px, ${eR.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: hs.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: hs.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: hs.Tl,
                                                            children: eR.label.kind,
                                                        }),
                                                        "" === eR.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: hs.kh,
                                                                  children: [" ", eR.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, a.jsx)("div", { className: hs.D0, style: hu(eM, W, en), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = hc(e.target, e.anchor, W, en),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: hs.xL,
                                              style: { ...hd(n, W), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: n2(e.target),
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
                                                  (e.stopPropagation(), et(), K(l));
                                              },
                                              children: (0, a.jsx)(hh, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == e_ || null == u
                                      ? null
                                      : (0, a.jsx)(rI, {
                                            projectId: u,
                                            at: { x: e_.at.x + 20, y: e_.at.y + 20 },
                                            bounds: W,
                                            kind: e_.label.kind,
                                            value: e_.draft,
                                            canSubmit: null != D && n0(e_.draft),
                                            onChange: (e) => {
                                                null != D && O({ ...D, draft: e });
                                            },
                                            onSubmit: ek,
                                            onDismiss: et,
                                            onUploadFile: eN,
                                            closing: null == D,
                                        }),
                                  null != ed && null != B && null != eT
                                      ? (0, a.jsxs)(hp, {
                                            point: eT,
                                            frame: W,
                                            authorId: ed.authorId,
                                            title: n2(ed.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(aF.f, {
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
                                                                  (e.preventDefault(), eC());
                                                          },
                                                      })
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: hs.aC,
                                                          children: ed.comment,
                                                      }),
                                                li(ed, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: hs.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: hs.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(eP.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(eP.$, {
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
                                                                        (0, a.jsx)(eP.$, {
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
                                                                            ? (0, a.jsx)(eP.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !n0(B.draft),
                                                                                  text: E.intl.string(S.default.iicRP9),
                                                                                  onClick: eC,
                                                                              })
                                                                            : (0, a.jsx)(eP.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: E.intl.string(
                                                                                      S.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
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
function hh(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([aY.default], () => aY.default.getUser(t), [t]);
    return (0, a.jsx)(or.eu, {
        src: null == n ? null : eL.Ay.getUserAvatarURL(n),
        size: oa._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function hp(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(ho);
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
        className: hs.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: hs.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: hs.ip, children: (0, a.jsx)(hh, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: hs.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: hs.zI, children: g }),
        ],
    });
}
let hg = 300,
    hx = 2;
function hv(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function hj(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function hb(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: hs.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var hy = n(659723),
    hw = n(697744),
    hk = n(130324);
function hN(e) {
    let t = (0, hw.c)(),
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
    let r = (0, ad.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function hC(e) {
    let { className: t } = e,
        { Component: n, events: l } = hN(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, hk.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: hk.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var hA = n(251363),
    hS = n(944142),
    hE = n(532247),
    hI = n(501628);
function hM(e) {
    let { progress: t } = e,
        { Component: n } = hN(1500),
        l = lG.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: hI.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: hI.PM,
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
function h_(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([hS.A], () => (s ? hS.A.getLiveReload(t) : null), [s, t]),
        c = (0, rd.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, hE.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, hE.QP)(e, s)));
            let m = (0, o.bG)(
                    [l_.A],
                    () => {
                        let e = l_.A.getFrame(n);
                        return (0, re.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, hA.ow)(null, n) && e();
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
        h = m ? null : (0, hE.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(aj.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: hI.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(hM, { progress: h }),
                  })
                : null,
        ],
    });
}
var hR = n(357858),
    hP = n(343030),
    hT = n(317608),
    hL = n(35367),
    h$ = n(771293);
let hD = { width: 1 / 0, height: 1 / 0 };
function hO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hD;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var hq = n(702083);
function hz(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([rm.A], () => ({
            mobile: rm.A.isBuilderPreviewMobile(),
            landscape: rm.A.isBuilderPreviewLandscape(),
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
        d = n ? hO(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(hq.dw, { [hq.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(hq.R9, { [hq.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var hF = n(347927);
function hU(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(hF.Bf, l && hF.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: hF.Ux,
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
var hG = n(957272);
function hB(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, hL.A)({ applicationId: t, surface: n, launch: l });
    if (((0, h$.A)(t, n), s === hL.n.Launched)) {
        let e = (0, a.jsx)(hT.A, { frameId: i.id, level: hP.A.WithinAppContent, className: hG.Z7, overlay: r });
        return (0, rf.Q5)(n) ? (0, a.jsx)(hz, { children: e }) : e;
    }
    return (0, a.jsx)(hK, { state: s });
}
function hK(e) {
    let { state: t } = e;
    switch (t) {
        case hL.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: hG.qs,
                children: (0, a.jsx)(hU, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case hL.n.NoApplication:
            return (0, a.jsx)(hC, { className: hG.qs });
        case hL.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: hG.qs,
                children: (0, a.jsx)(hU, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case hL.n.Error:
            return (0, a.jsxs)("div", {
                className: hG.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: hG.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case hL.n.AwaitingLaunch:
        case hL.n.Loading:
            return (0, a.jsx)("div", { className: hG.qs, children: (0, a.jsx)(ne.y, {}) });
    }
}
var hH = n(308528),
    hV = n(334738),
    hW = n(688438),
    hX = n(365971),
    hZ = n(703462);
function hJ(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: hZ.f,
        children: [
            (0, a.jsx)(eD.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function hY() {
    return (0, a.jsx)("div", { className: hZ.f, children: (0, a.jsx)(ne.y, {}) });
}
function hQ(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([aJ.A], () => (null != c ? aJ.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && hH.A.preload(D.ME, t);
        }, [t]),
        (n = (0, o.bG)([t6.A], () => t6.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, hX.Xg)();
            return (
                (0, hV.yl)(t, e),
                () => {
                    (0, hV.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, lW.CN)(l).then(
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
        ? (0, a.jsx)(hJ, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(hY, {})
          : (0, a.jsx)("div", {
                className: hZ.g,
                children: (0, a.jsx)(hW.A, { channel: d, guild: null, chatInputType: u6.oU.SIDEBAR }, d.id),
            });
}
var h0 = n(887909),
    h1 = n(570962),
    h2 = n(998475);
function h3(e) {
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
    } = (0, h0.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: h2.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: h2.rf,
                children: (0, a.jsx)(h1.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: h2.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: h2.z3,
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
                                className: h()(h2.Qs, c ? h2.cw : null, d ? h2.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: h2.o1,
                      children: s.map((e, t) => (0, a.jsx)(eP.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var h4 = n(765671),
    h5 = n(269094),
    h6 = n(582063);
let h7 = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function h8() {
    (0, eV.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function h9(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(S.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eX.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(pe, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: h6.m2,
                        children: (0, a.jsx)(N.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(ty.K, {
                                "aria-label": r,
                                icon: tb.SettingsIcon,
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
                accept: h7.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (h7.includes(n.type)
                                ? n.size > er.aI
                                    ? (0, eV.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, sC.M$)(t, n).catch(h8)
                                : (0, eV.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function pe(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([sN.A], () => sN.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eZ.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(S.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eJ.rX, {
                children: [
                    (0, a.jsx)(eJ.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(S.default.uQpDky),
                        icon: ig.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eJ.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(S.default.AiAz8J),
                        icon: fS.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, sC.Og)(t).catch(h8));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eJ.rX, {
                children: (0, a.jsx)(eJ.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(S.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, sC.Y1)(t, !i) || h8();
                    },
                }),
            }),
        ],
    });
}
function pt(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, hL.A)({ applicationId: t, surface: re.ZN });
    return (i.useEffect(() => {
        let e = (0, re.VA)(t, re.ZN);
        return () => (0, lR.r)(e);
    }, [t]),
    r.state !== hL.n.Launched)
        ? (0, a.jsx)(hK, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(hK, { state: hL.n.Loading })
          : (0, a.jsx)(pn, { lifecycle: r, projectId: n, size: l });
}
function pn(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, h4.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: h6.JH,
        children: [
            (0, a.jsx)(sS, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: h6.dw,
                children: (0, a.jsx)("div", {
                    className: h6.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(h5.A, { frame: t.frame, application: t.application, className: h6.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(h9, { projectId: n }) : null,
        ],
    });
}
var pl = n(409478),
    pr = n(652227);
function pa(e) {
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
            overlayWidgetSize: m = lZ,
            projectId: f,
            frameOverlay: h,
            paused: p = !1,
            onResume: g,
        } = e,
        x = (0, o.bG)([iP.A], () => null != f && null != iP.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: pr.qs, children: (0, a.jsx)(ne.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: pr.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(ne.y, {}) : (0, a.jsx)(h3, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: pr.RG,
                      children: [
                          (0, lQ.yf)(u, c)
                              ? p
                                  ? (0, a.jsx)(pi, { projectId: f, onResume: g })
                                  : (0, a.jsx)(hB, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: pr.qs,
                                        children: (0, a.jsx)(hU, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(pl.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(pt, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(hQ, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: pr.qs, children: (0, a.jsx)(ne.y, {}) })
              : (0, a.jsx)(hC, { className: pr.qs });
}
function pi(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, hR.Pu)(t),
        (0, a.jsx)("div", {
            className: pr.qs,
            children: (0, a.jsx)(hU, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(eP.$, {
                              size: "sm",
                              variant: "primary",
                              icon: td.PlayIcon,
                              text: E.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var ps = n(750506),
    po = n(867193),
    pu = n(539197),
    pc = n(977020);
function pd(e) {
    let { projectId: t } = e,
        n = (0, pu.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, pu.Ie)(e);
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
        className: pc.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [pu.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(pc.hN, pc.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(pc.hN, pc.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(pc.UE, { [pc.SP]: n.shown, [pc.Vq]: n.pressed, [pc.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var pm = n(417760);
function pf(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, o.bG)([W.A], () => null != e && W.A.isThinking(e)),
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
        u = (0, lT.CU)(n),
        c = "controlling" === t,
        d = E.intl.string(c ? (u ? S.default["VJW/5P"] : S.default["+hD2Iz"]) : S.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(eP.$, {
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
              className: h()(pm.M0, pm.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(d6.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(ut.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: pm.ID, children: d }),
                  c ? (0, a.jsx)(aj.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: pm.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: pm.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: pm.sp,
                      children: [
                          (0, a.jsx)(ut.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(d6.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: pm.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: pm.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: pm.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: pm.lC, children: m }) : null,
              ],
          });
}
function ph(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, lT.Zv)(null != n && n === l ? t : null),
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
        c = (0, tD.useHasAnyModalOpen)(),
        d = (0, l7.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, l7.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = rM(r());
            f((t) => (r_(t, e) ? t : e));
            let t = null == h ? null : rM(h);
            (x((e) => (r_(e, t) ? e : t)), null != h && (0, po.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, po.C)(0));
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
                  })(m, g),
        N = (function () {
            let [e] = i.useContext(ps.uY),
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
                      className: pm.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: pm.QF,
                          children: (0, a.jsx)(pf, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, rC.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(aj.A, {
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
                ? (0, rC.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: pm.ys,
                                  style: k,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: pm.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(pd, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var pp = n(399503),
    pg = n(853555),
    px = n(271982),
    pv = n(187645);
let pj = new Map(),
    pb = !1;
function py() {
    let e = new Map();
    for (let t of new Set([...W.A.getActivityOrderedProjectIds(), ...(0, lT.T7)()])) {
        if (!lL(t) || lP.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = z.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, rf.Rc)(t);
            return (0, re.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [t, n] of [...pj])
        e.get(t) !== n.frameId &&
            (function (e, t) {
                (pj.delete(e), t.unregisterLookup(), px.A.removeFrameTarget(t.frameId, t.element), t.element.remove());
                let n = l_.A.getFrame(t.frameId)?.applicationId;
                null != n && setTimeout(() => lq(e, n), 0);
            })(t, n);
    for (let [t, n] of e)
        pj.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = pv.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    pw(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (pj.set(e, l),
                    (l.unregisterLookup = (0, pg.Ng)(e, () => (0, hA.n5)(n, t))),
                    px.A.registerFrameTarget(t, n, hP.A.Backstage, void 0));
            })(t, n);
    for (let e of pj.values()) pw(e.element);
}
function pw(e) {
    let t = rm.A.isBuilderPreviewMobile();
    e.classList.toggle(pv.L, !t);
    let n = t ? hO(rm.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var pk = n(873727),
    pN = n(147248),
    pC = n(418842),
    pA = n(363195),
    pS = n(818023);
let pE = null;
var pI = n(517461),
    pM = n(761929),
    p_ = n(487336);
function pR(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, pI.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, X.clamp)(u, 360, n),
        m = (0, pM.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: pM.R.HORIZONTAL_LEFT,
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
        className: p_.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: p_.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: p_.kL, style: { width: d }, children: l }),
        ],
    });
}
var pP = n(541940);
function pT(e) {
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
        v = (0, rd.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([pA.A], () => (0, pk.x4)(pA.A.theme)),
            l = (0, o.bG)([pN.A], () => pN.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([eT.Ay], () => ({
                reducedMotion: eT.Ay.useReducedMotion,
                fontScale: (0, pk.U0)(),
                highContrast: eT.Ay.isHighContrastModeEnabled,
                forcedColors: eT.Ay.useForcedColors,
                underlineLinks: eT.Ay.alwaysShowLinkDecorations,
            })),
            d = lG.hH.useSetting(),
            m = (0, pC.C)(),
            f = (0, o.bG)(
                [l_.A, rm.A],
                () =>
                    rm.A.isBuilderPreviewMobile() &&
                    l_.A.getFrame(t)?.applicationId === rm.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            p = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, hA.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, pk.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, ha.W)(l, "set-env", i, {
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
                let n = (0, hA.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, hA.n5)(e, t) && ((x.current = null), b());
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
            if (null != t) return (0, pg.Ng)(t, () => (0, hA.n5)(g, j));
        }, [t, g, j]));
    let b = i.useCallback(() => (0, hA.ow)(g, j), [g, j]),
        y = i.useCallback(() => (f ? (0, hA.ow)(g, j) : g), [f, g, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(pP.Mh, c),
                children: [
                    u,
                    p
                        ? null
                        : (0, a.jsx)(ph, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: pP.fm, children: d }),
                ],
            }),
            m,
            p
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(hf, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(ai, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function pL(e) {
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
        availability: w,
        activeMode: k,
        widgetApplicationId: N,
        overlayWidgetSize: C,
        previewPaused: A = !1,
        onResumePreview: I,
    } = e;
    (0, pp.k)(t, N);
    let M = s.type === l0.U.MAIN || (0, rf.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([rm.A], () => ({
            mobile: rm.A.isBuilderPreviewMobile(),
            landscape: rm.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? pS.aX.LANDSCAPE : pS.aX.PORTRAIT), (pE = e));
                else {
                    if (pE !== e) return;
                    ((l = pS.aX.UNHANDLED), (pE = null));
                }
                K.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let R = i.useRef(null),
        [P, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, ao.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, ao.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, lW.HV)(l), () => (0, lW.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, _.ensureConnection)(t),
                pb ||
                    ((pb = !0),
                    W.A.addChangeListener(py),
                    z.Ay.addChangeListener(py),
                    l_.A.addChangeListener(py),
                    rm.A.addChangeListener(py),
                    lP.A.addChangeListener(py),
                    (0, lT.W3)(py),
                    py()));
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
        className: pP.LB,
        children: (0, a.jsx)(pT, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, lQ.yf)(w, k),
            paused: A,
            mainClassName: null == c ? void 0 : h()(pP.ez, { [pP.zt]: d }),
            content: (0, a.jsx)(pa, {
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
                frameOverlay: (0, a.jsx)(h_, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(pR, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: pP.cO,
                              children: x
                                  ? (0, a.jsx)(f9, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(hy.Ay, { projectId: t }),
                                            (0, a.jsx)(rN.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(rN.Ay.Icon, {
                                                                  icon: eW.P,
                                                                  tooltip: E.intl.string(S.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(rN.Ay.Title, {
                                                    children: E.intl.string(E.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: pP.cb,
                                                children: (0, a.jsx)(
                                                    mv,
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
var p$ = n(323140);
function pD(e) {
    var t;
    let l,
        r,
        { project: s, projectsLoaded: c, onBack: d, guildId: m } = e,
        [f, p] = i.useState(!0),
        [g, j] = i.useState(!1),
        b = lB(),
        w = i.useCallback(() => p(!0), []),
        k = i.useCallback(() => {
            (j(!1), p(!0));
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
                                (0, lH.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, eV.P0)({
                                                        text: E.intl.formatToPlainString(S.default.Z4n6LX, {
                                                            title: (0, lK.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, lV.c)(u, r);
                                                null != e && (0, eV.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, eV.P0)({
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
                    lO.add(t),
                    () => {
                        (lO.delete(t), lq(A, t));
                    }
                );
        }, [A, t]));
    let {
            integrationStatus: I,
            isPreviewApplicationLoading: R,
            checkingIntegration: T,
            previewReady: L,
            hasFrame: $,
            needsPermissionReview: q,
            installAuthorizeProps: F,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [z.Ay, rs.A],
                    () => (null == r ? null : (z.Ay.getIntegrationStatus(r) ?? rs.A.getIntegrationStatus(r))),
                    [r],
                ),
                { data: c, isLoading: d } = (0, ri.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                p = (0, lQ.Qg)({
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
            let x = (0, ro.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, ro.$)(e, x));
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
                              ...(0, ru.i)({ applicationId: t, application: c ?? null, guildId: x }),
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
        })(s, m),
        U =
            (0, o.bG)([rh.A], () => (null == A ? void 0 : rh.A.getPublishStatus(A)?.previewAppChannels), [A]) ??
            I?.preview_app_channels,
        {
            availability: G,
            activeMode: B,
            setMode: K,
            frameSurface: H,
            frameSurfaceOptions: V,
            setFrameSurface: X,
            appChannel: Z,
            setAppChannel: J,
            frameLaunchParams: Y,
            widgetApplicationId: Q,
        } = (0, l4.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: $,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: I?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(lX.q7.OVERLAY) === !0,
            previewAppChannels: U,
        }),
        ee = lJ(
            (0, o.bG)(
                [W.A],
                () =>
                    null == A
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(W.A.getMessages(A)),
                [A],
            ),
        );
    ((0, lY.x)(A, (e) => {
        G.modes.includes(e) && K(e);
    }),
        lU(A, () => {
            (p(!0), j(!0));
        }));
    let et = G.modes.includes("frame"),
        en = (0, o.bG)([lP.A], () => lP.A.isPaused(A), [A]),
        el = et && !en,
        {
            previewTargetOptions: er,
            handleSelectPreviewTarget: ea,
            mobilePreview: ei,
            mobilePreviewLabel: es,
            handleToggleMobilePreview: eo,
            landscapePreview: eu,
            rotatePreviewLabel: ec,
            handleRotatePreview: ed,
            previewSurface: em,
            previewFrame: ef,
            isRefreshing: eh,
            handleRefresh: ep,
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
                                          t === l0.U.APP_CHANNEL && n.length > 1
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
                f = (0, o.bG)([rm.A], () => rm.A.isBuilderPreviewMobile()),
                h = E.intl.string(f ? S.default.tKGF0Q : S.default.peqEOY),
                p = i.useCallback(() => (0, lW.GG)(!f), [f]),
                g = (0, o.bG)([rm.A], () => rm.A.isBuilderPreviewLandscape()),
                x = E.intl.string(g ? S.default.tunI2l : S.default.DoNdjA),
                v = i.useCallback(() => (0, lW.Lw)(!g), [g]),
                j = (0, rf.jS)(t),
                b = i.useMemo(() => (0, rf.Op)(j, l), [j, l]),
                y = (0, rd.A)(t?.preview_application_id ?? null, b),
                w = (0, re.x1)(y) && y.data.proxyTicketRefreshing,
                k = i.useCallback(() => {
                    null == y || w || rc.A.refreshProxyTicket(y.id);
                }, [y, w]);
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
                isRefreshing: w,
                handleRefresh: k,
            };
        })({
            project: s,
            modes: G.modes,
            frameSurface: H,
            frameSurfaceOptions: V,
            previewAppChannels: U,
            setMode: K,
            setFrameSurface: X,
            setAppChannel: J,
        }),
        eg = f && !g,
        ex = E.intl.string(eg ? S.default.JD6Oit : S.default.xjJAQm),
        ev = i.useCallback(() => {
            if (g) {
                (j(!1), p(!0));
                return;
            }
            p((e) => !e);
        }, [g]),
        ej = i.useCallback(() => p(!1), []),
        {
            designFeedbackActive: eb,
            designFeedbackToggleRef: ey,
            agentDrivingPreview: ew,
            designFeedbackLabel: ek,
            handleToggleDesignFeedback: eN,
        } = (function (e, t, n) {
            let { active: l } = lo(e);
            i.useEffect(() => {
                null != e && l && !t && lr(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, lT.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void lr(e);
                        (n(), ln(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(A, el, k),
        [eC] = i.useState(() => e0.isPlatformEmbedded && (0, ra.qM)()),
        eA = null != lE(A);
    i.useEffect(() => {
        null != A && eA && !el && lC(A);
    }, [A, eA, el]);
    let eS = i.useCallback(() => {
            null != A &&
                (k(),
                (function (e) {
                    if (null != lk(e)) return;
                    let { byProject: t } = ly.getState();
                    ly.setState({ byProject: { ...t, [e]: lw } });
                })(A));
        }, [A, k]),
        eE = i.useCallback(() => {
            null != A && lC(A);
        }, [A]),
        eI = eA ? E.intl.string(S.default.tuQ5f3) : ek,
        eM = i.useCallback(() => {
            j((e) => !e && (p(!0), !0));
        }, []),
        e_ = i.useCallback(() => j(!1), []),
        eR = i.useCallback(() => {
            null != A && (0, lW._j)(A);
        }, [A]),
        eT = i.useCallback(() => {
            null != A && (en ? (0, lW._j)(A) : (0, lW.di)(A, ef?.id));
        }, [A, en, ef?.id]),
        eL = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = ef?.id), (0, _.closeConnection)(e), (0, lR.r)(t)), d());
        }, [s, ef?.id, d]),
        e$ =
            ((l = i.useCallback(() => {
                null != s && (w(), (0, _.sendUserMessage)(s.id, E.intl.string(S.default.oU20rd)));
            }, [s, w])),
            {
                onExport: l,
                onImport: (r = e9(
                    i.useCallback(
                        (e) => {
                            if (null == s) return;
                            let t = s.id,
                                n = e7(e);
                            null != n
                                ? (0, eV.P0)({ text: n, variant: "critical" })
                                : (0, to.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: s.name }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          w();
                                          try {
                                              await e6(t, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, eV.P0)({
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
        eD = i.useCallback(() => {
            null != s && (0, tX.A)(s, m);
        }, [s, m]),
        eO = (0, lQ.JR)(B, q)
            ? { type: "permissions", authorizeProps: F }
            : T && null == I
              ? { type: "checking" }
              : void 0,
        eq = (0, o.bG)([z.Ay], () => null != A && z.Ay.isProjectDeleting(A), [A]);
    i.useEffect(() => {
        ((null == s && c) || eq) && (0, u.bG)(D.BVt.CHANNEL(m, O.VV.CONJURE));
    }, [m, s, c, eq]);
    let {
            publishOptions: ez,
            publish: eF,
            publishing: eU,
            confirmation: eG,
            variant: eB,
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
                        ...rj,
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
                c = (0, tM.Ay)(e, u),
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
                variant: rb(c) ? "secondary" : "primary",
                text:
                    null != m
                        ? m
                        : null == c
                          ? E.intl.string(S.default["120EFN"])
                          : rb(c) && !c.publishing
                            ? E.intl.string(S.default.kAfbEN)
                            : c.label,
            };
        })(A, m, T || R),
        eH = rk(A, eF, ez),
        eW = (0, nY.A)(ef),
        eX = "frame" === B && !en && (0, re.x1)(ef) && (eW.isPoppedOut || eW.canPopout),
        eZ =
            null == s
                ? null
                : (0, a.jsx)(tW, {
                      projectId: s.id,
                      projectName: s.name,
                      guildId: m,
                      projectGuildId: s.guild_id,
                      isOwner: (0, z.PV)(s),
                      canRemix: (0, z.H_)(s),
                      onRefresh: (0, re.x1)(ef) ? ep : void 0,
                      isRefreshing: eh,
                      onTogglePreviewPaused: "frame" === B ? eT : void 0,
                      previewPaused: en,
                      previewPauseDisabled: !en && ew,
                      onTogglePopout: eX ? (eW.isPoppedOut ? eW.popIn : eW.popOut) : void 0,
                      poppedOut: eW.isPoppedOut,
                      onToggleDebug: b ? eM : void 0,
                      debugOpen: g,
                      onClose: eL,
                      onExport: e$.onExport,
                      onImport: e$.onImport,
                      onRemix: eD,
                      onConnectTool: () => {
                          var e;
                          return (
                              (e = s.id),
                              void (0, tD.openModalLazy)(async () => {
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
                              void (0, tD.openModalLazy)(async () => {
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
                      previewProjectId: s.id,
                  }),
        eJ =
            null == eF || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: p$.As,
                      onMouseDown:
                          null == A || eF.disabled || eU
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, rp.dx)(A);
                                },
                      children: (0, a.jsx)(eP.$, {
                          size: "sm",
                          variant: eB,
                          icon: eU ? pO : null != eG ? nH.U : void 0,
                          text: eK,
                          onClick: () => eH("header"),
                      }),
                  }),
        eY = null == s ? void 0 : () => (0, tR.A)(s.id, { guildId: m, isPreview: !0, publishOptions: ez }),
        eQ = (0, a.jsx)(M, {
            title: s?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: d },
            project: s,
            onOpenProjectSettings: eY,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: p$.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: p$.QQ,
                                  children: [
                                      (0, a.jsx)(rr, {
                                          targets: er,
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
                                          })(B, H, Z),
                                          onChange: ea,
                                      }),
                                      et
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === B
                                                        ? (0, a.jsx)(y.A.Icon, {
                                                              icon: ei ? pF : pz,
                                                              tooltip: es,
                                                              "aria-label": es,
                                                              selected: ei,
                                                              onClick: eo,
                                                          })
                                                        : null,
                                                    ei && "frame" === B
                                                        ? (0, a.jsx)(y.A.Icon, {
                                                              icon: pU,
                                                              tooltip: ec,
                                                              "aria-label": ec,
                                                              selected: eu,
                                                              onClick: ed,
                                                          })
                                                        : null,
                                                    (0, a.jsx)(lM, {
                                                        enabled: eC && !eA && !ew && !en,
                                                        onLongPress: eS,
                                                        children: (0, a.jsx)(y.A.Icon, {
                                                            ref: ey,
                                                            icon: nV.x,
                                                            iconClassName: p$.D8,
                                                            tooltip: eI,
                                                            "aria-label": eI,
                                                            selected: eA || eb,
                                                            disabled: en || (ew && !eA),
                                                            onClick: eA ? eE : eN,
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== B || en
                                          ? null
                                          : (0, a.jsx)(rt, { frame: ef, controlProjectId: s.id }),
                                  ],
                              }),
                              (0, a.jsx)("div", { className: p$.YJ }),
                              (0, a.jsx)(y.A.Icon, {
                                  icon: tb.SettingsIcon,
                                  tooltip: E.intl.string(S.default.I2XSKe),
                                  "aria-label": E.intl.string(S.default.I2XSKe),
                                  onClick: eY,
                              }),
                              eZ,
                              eg
                                  ? null
                                  : (0, a.jsx)(y.A.Icon, { icon: pq, tooltip: ex, "aria-label": ex, onClick: ev }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(p$.nj, nU.T),
        children: [
            e$.importInput,
            (0, a.jsx)("main", {
                className: p$.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: p$.j5,
                              children: [
                                  eQ,
                                  (0, a.jsxs)("div", {
                                      className: p$.sD,
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
                                          (0, a.jsx)(eP.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: E.intl.string(S.default["WFJ/vb"]),
                                              onClick: () => (0, P.hF)(m),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tM.bI.Provider, {
                              value: ez,
                              children: (0, a.jsx)(
                                  pL,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: ey,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: em,
                                      frameLaunchParams: Y,
                                      header: eQ,
                                      chatOpen: f,
                                      onCloseChat: ej,
                                      chatHeaderAction: eJ,
                                      debugOpen: b && g,
                                      onCloseDebug: e_,
                                      onRestoreVersion: C,
                                      onImportProject: (0, z.PV)(s) ? e$.onImport : void 0,
                                      restoreState: N,
                                      previewReady: L,
                                      previewGate: eO,
                                      availability: G,
                                      activeMode: B,
                                      widgetApplicationId: Q,
                                      overlayWidgetSize: ee,
                                      previewPaused: en,
                                      onResumePreview: eR,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function pO() {
    return (0, a.jsx)(ne.y, { type: ne.t.SPINNING_CIRCLE_SIMPLE, className: p$.Hv, itemClassName: p$.C5 });
}
function pq(e) {
    return (0, a.jsx)(nW.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function pz(e) {
    return (0, a.jsx)(nX.u, { ...e, size: "custom", width: 20, height: 20 });
}
function pF(e) {
    return (0, a.jsx)(nZ.k, { ...e, size: "custom", width: 20, height: 20 });
}
function pU(e) {
    return (0, a.jsx)(nJ.H, { ...e, size: "custom", width: 20, height: 20 });
}
function pG(e) {
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
            (0, u.pX)(D.BVt.CHANNEL(t, O.VV.CONJURE));
        }, [t]),
        h = (0, o.bG)(
            [z.Ay],
            () => {
                if (null == s) return null;
                let e = z.Ay.getProject(s);
                return null == e || (0, z.PV)(e) || e.guild_id === t ? e : null;
            },
            [s, t],
        ),
        p = (0, o.bG)([z.Ay], () => z.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(pD, { project: h, projectsLoaded: p, onBack: f, guildId: t }, s)
        : (0, a.jsx)(nK, { guildId: t });
}
