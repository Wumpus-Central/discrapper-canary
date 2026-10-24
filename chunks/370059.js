(n.r(t), n.d(t, { default: () => pK }));
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
var _ = n(639519),
    R = n(319481),
    P = n(371169);
let T = { main: [], subagent: [], thinking: ["low", "medium", "high", "xhigh", "max"] },
    L = { tier: "balanced" },
    $ = { simple: { thinking: "high" }, balanced: { thinking: "high" }, complex: { thinking: "high" } };
async function D(e) {
    let { guildId: t, installScope: n, prompt: l, modelSettings: r, templateId: a } = e,
        i = await (0, P.gA)(
            null != n ? { guild_id: t, install_scope: n } : { guild_id: t, auto_install_scope: !0, prompt: l ?? "" },
        );
    return ((0, R.ensureConnection)(i, { templateId: a }), (0, R.stageModelSettings)(i, r ?? L), i);
}
var O = n(652215),
    q = n(746080);
async function z(e) {
    let { start: t, ...n } = e,
        l = await D(n);
    return (await t(l), (0, u.pX)(O.BVt.CHANNEL(n.guildId, q.VV.CONJURE, l)), l);
}
var F = n(941985),
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
    (0, R.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(K.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(eo.getState().draftsByProject)) ep(e, { deleteFromWorker: !0 });
}),
    K.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        ep(t, { deleteFromWorker: !1 });
    }));
var ey = n(975189),
    ew = n(260498);
let ek = "ConjureHeldPrompts",
    eN = new Map(),
    eC = new Map();
function eA(e, t) {
    let n =
        eN.get(e) ??
        (async () => {
            try {
                await t();
            } catch (t) {
                throw (eN.delete(e), t);
            }
        })();
    return (eN.set(e, n), n);
}
function eS() {
    return U.w.get(ek) ?? {};
}
function eE(e) {
    let { [e]: t, ...n } = eS();
    U.w.set(ek, n);
}
function eI(e, t, n) {
    (eE(e),
        (0, R.withdrawUserMessage)(e, t.nonce),
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
function eM(e, t) {
    if (0 === e.length) return {};
    let n = e.find((e) => e.id === t);
    return {
        input: "server",
        note: E.intl.string(S.default.SU9K9U),
        ...(null != n ? { default_entities: [{ id: n.id, name: n.name, kind: "server" }] } : {}),
    };
}
function e_(e) {
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
async function eR(e, t, n) {
    let l = await B.Bo.put({
        url: `${O.Rsh.CONJURE_PROJECT(e)}/install-scope`,
        body: { install_scope: t, ...(null != n ? { guild_id: n } : {}) },
        rejectWithError: !0,
    });
    K.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: l.body });
}
var eP = n(89310),
    eT = n(821609),
    eL = n(775602),
    e$ = n(486020),
    eD = n(687966),
    eO = n(323384),
    eq = n(632015),
    ez = n(231483),
    eF = n(430392);
let eU = {
    games: eD.GameControllerIcon,
    apps: eO.k,
    profile_widget: eq.f,
    automod: ez.ShieldIcon,
    chat_bot: eF.RobotIcon,
};
var eG = n(621466);
let eB = "data-conjure-carousel-card";
var eK = n(19493);
let eH = i.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n } = e,
            l = eU[t.category];
        return (0, a.jsxs)("li", {
            className: eK.AS,
            [eB]: "",
            children: [
                (0, a.jsxs)("div", {
                    className: eK.rl,
                    children: [
                        (0, a.jsx)("img", {
                            className: eK.my,
                            src: (0, e$.AE)(void 0, t.authorAvatarSeed),
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
                                    children: (0, a.jsx)(eT.$, {
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
    eV = i.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            r = (0, o.bG)([eL.Ay], () => eL.Ay.useReducedMotion),
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
                        ((r = (l = Array.from(n.querySelectorAll(`[${eB}]`))).map(
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
                    ((h = (0, eG.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), b());
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
                className: r ? eK.vV : eK.Dk,
                "aria-label": E.intl.string(S.default.Qc4S39),
                children: (0, a.jsx)("ul", {
                    ref: u,
                    className: eK.u4,
                    children: n.map((e) => (0, a.jsx)(eH, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var eW = n(858899),
    eX = n(789645),
    eZ = n(265872),
    eJ = n(980707),
    eY = n(477782),
    eQ = n(81369),
    e0 = n(77729),
    e1 = n(723702),
    e2 = n(264572).Buffer;
async function e3(e, t) {
    if (e1.isPlatformEmbedded) {
        let n = e2.from(await e.arrayBuffer());
        if ("function" == typeof e0.A.fileManager.saveWithDialog2) await e0.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await e0.A.fileManager.saveWithDialog(n, t);
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
var e4 = n(688954);
class e5 extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function e6(e, t) {
    let n = await (0, e4.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new e5(n.status);
    return await n.blob();
}
async function e7(e, t, n) {
    (0, R.ensureConnection)(e);
    let l = await (0, ea.vX)(e, t);
    (0, R.sendUserMessage)(e, n, [l]);
}
function e8(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, er.Oq)(e.size, t)
        ? null
        : E.intl.formatToPlainString(S.default.ThxcOX, { size: (0, er.sM)((0, er.Ju)(t)) });
}
async function e9(e, t) {
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
        r = await e6(e, l);
    await e3(r, l);
}
function te(e) {
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
var tt = n(950305),
    tn = n(664121);
let tl = [
    { value: "user", icon: tt.UserIcon, nameMessage: S.default.s1TsXl },
    { value: "guild", icon: tn.R, nameMessage: S.default.LlLIJw },
];
function tr(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = te(i.useCallback((e) => n(e, "user"), [n])),
        s = te(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eZ.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: eZ.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(eJ.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": E.intl.string(S.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(eY.rX, {
                            label: E.intl.string(S.default.NyVn6T),
                            children: tl
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: E.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        eY.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(eT.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: eQ.H,
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
var ta = n(418811),
    ti = n(246338),
    ts = n(290076),
    to = n(442433),
    tu = n(314116),
    tc = n(782603),
    td = n(780338),
    tm = n(782134),
    tf = n(113494),
    th = n(12470),
    tp = n(811893),
    tg = n(663417),
    tx = n(70688),
    tv = n(92446),
    tj = n(173936),
    tb = n(473935),
    ty = n(625903),
    tw = n(408278),
    tk = n(365199),
    tN = n(7437),
    tC = n(147036),
    tA = n(957565),
    tS = n(785389),
    tE = n(123917),
    tI = n(860402);
let tM = new Set();
var t_ = n(893067),
    tR = n(442331),
    tP = n(616334);
n(321073);
var tT = n(189714),
    tL = n(733791),
    t$ = n(189213),
    tD = n(331322),
    tO = n(192308),
    tq = n(664619),
    tz = n(706935);
function tF(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === l,
        h = f ? (0, tL.fI)(n) : (0, tL.Kd)(n),
        p = f ? null : (0, tL.L4)(n),
        g = (0, tL.Mi)(n),
        x = f
            ? E.intl.formatToPlainString(S.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(S.default.x6FvsZ, { app: n.appName });
    async function j() {
        (c(!0), m(null));
        let e = f ? (0, P.xx)(t.id) : (0, tq.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(f ? S.default["0XDHob"] : S.default.PJ2Fkn))
            : (f || (0, eW.P0)({ text: (0, tL.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(t$.a, {
        ...r,
        role: "alertdialog",
        title: f ? x : (0, tL.WX)((0, tz.tb)(S.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, tL.J)(n) : E.intl.string(S.default["8OKM1N"]),
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
        children: (0, a.jsxs)(tD.B, {
            gap: 12,
            children: [
                h.length > 0 || null != p
                    ? (0, a.jsx)(tz.Ay, {
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
function tU(e) {
    (0, tO.openModal)((t) => (0, a.jsx)(tF, { ...t, ...e }));
}
var tG = n(587895);
function tB(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, u] = i.useState(null),
        c = (0, o.bG)([tG.A], () => tG.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        d = E.intl.formatToPlainString(S.default.m8KWic, { app: c });
    async function m() {
        (r(!0), u(null));
        let e = await (0, tq.R_)(t.id);
        (r(!1), e)
            ? ((0, eW.P0)({ text: E.intl.formatToPlainString(S.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : u(E.intl.string(S.default["rE/0SD"]));
    }
    return (0, a.jsx)(t$.a, {
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
let tH = [];
function tV(e) {
    (0, eW.P0)({ text: e, variant: "critical" });
}
function tW(e) {
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
        M = (0, tT.iI)(t),
        _ = i.useContext(t_.bI),
        { pending: R, refresh: T } = (0, tN.A)(C ?? null),
        { pending: L, connect: $ } = (function (e, t) {
            let [n, l] = i.useState(tM),
                r = i.useRef(tM),
                a = i.useCallback((e) => {
                    ((r.current = (0, tS.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, tS.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, tI.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, tE.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, tS.rq)(l.error)
                                          ? E.intl.string(S.default["jCQ/1B"])
                                          : E.intl.string(S.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(A ?? null, tV),
        D = (0, o.bG)([tR.A], () => (null == A ? tH : tR.A.getDeclaredConnections(A))),
        O = i.useMemo(() => (0, tS.Xl)(D), [D]),
        z = (0, tL.Bs)(t),
        F = (0, tL.CU)(t) && s,
        U = (0, o.bG)(
            [ew.Ay],
            () => {
                let e = ew.Ay.getProject(t);
                return null != e && (0, ew.jf)(e);
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
        K = null != m && u,
        H = s && null != d,
        V = K || null != c || H || null != f || null != h,
        W = tA.p5 && null != l,
        X = tA.p5,
        Z = M ? tc.BellIcon : td.BellSlashIcon,
        J = v ? tm.PlayIcon : tf.PauseIcon,
        Y = y ? th._ : tp.t;
    return (0, a.jsxs)(eJ.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: I,
        onSelect: I,
        children: [
            null != p || null != x || null != b || null != N
                ? (0, a.jsxs)(eY.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "refresh",
                                    icon: tg.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: tg.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: g,
                                    action: p,
                                })
                              : null,
                          null != x
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: J,
                                    leadingAccessory: { type: "icon", icon: J },
                                    label: E.intl.string(v ? S.default.ZKd2Cw : S.default.VHxerm),
                                    disabled: j,
                                    action: x,
                                })
                              : null,
                          null != b
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "toggle-popout",
                                    icon: Y,
                                    leadingAccessory: { type: "icon", icon: Y },
                                    label: E.intl.string(y ? E.t["NKV/MO"] : E.t["3Zypbv"]),
                                    action: b,
                                })
                              : null,
                          null != N
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "close",
                                    icon: tx.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: tx.DoorExitIcon },
                                    label: E.intl.string(S.default["/TlGcK"]),
                                    action: N,
                                })
                              : null,
                      ],
                  })
                : null,
            null != w
                ? (0, a.jsx)(eY.rX, {
                      children: (0, a.jsx)(eY.sL, {
                          id: "debug",
                          label: E.intl.string(S.default.Mt5k9d),
                          leftIcon: tv.BugIcon,
                          leadingAccessory: { type: "icon", icon: tv.BugIcon },
                          checked: k,
                          action: w,
                      }),
                  })
                : null,
            G.length > 0
                ? (0, a.jsx)(eY.rX, {
                      children: G.map((e) =>
                          (0, a.jsx)(
                              eY.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void T();
                                      let t = null == e.connectionType ? null : B.get(e.connectionType);
                                      null != t && $(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(eY.rX, {
                children: (0, a.jsx)(eY.Dr, {
                    id: "mute",
                    label: E.intl.string(M ? S.default.s9rCuH : S.default["a+i/As"]),
                    icon: Z,
                    leadingAccessory: { type: "icon", icon: Z },
                    action: () => (0, tT.$L)(t, !M),
                }),
            }),
            V
                ? (0, a.jsxs)(eY.rX, {
                      children: [
                          K
                              ? (0, a.jsx)(eY.Dr, { id: "remix", label: E.intl.string(S.default.XWgAfc), action: m })
                              : null,
                          null != c
                              ? (0, a.jsx)(eY.Dr, { id: "export", label: E.intl.string(S.default.WsEEP7), action: c })
                              : null,
                          H
                              ? (0, a.jsx)(eY.Dr, { id: "import", label: E.intl.string(S.default.rWGY3e), action: d })
                              : null,
                          null != f
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(S.default.yOIql5),
                                    action: f,
                                })
                              : null,
                          null != h
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "history",
                                    label: E.intl.string(S.default["3hIVou"]),
                                    action: h,
                                })
                              : null,
                      ],
                  })
                : null,
            X
                ? (0, a.jsxs)(eY.rX, {
                      children: [
                          W
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: tj.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: tj.LinkIcon },
                                    action: () =>
                                        (0, tA.C)((0, tC.n)(l, q.VV.CONJURE, t), () =>
                                            (0, eW.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eY.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(S.default["nm/zuU"]),
                              icon: tb.L,
                              leadingAccessory: { type: "icon", icon: tb.L },
                              action: () =>
                                  (0, tA.C)(t, () =>
                                      (0, eW.P0)({ text: E.intl.string(S.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || U || z?.canRemoveBot === !0
                ? (0, a.jsxs)(eY.rX, {
                      children: [
                          s || U
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "settings",
                                    label: E.intl.string(S.default.FzfmQ8),
                                    icon: ty.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: ty.SettingsIcon },
                                    action: () =>
                                        (0, tP.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: _,
                                        }),
                                })
                              : null,
                          z?.canRemoveBot === !0
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(S.default["3gKG2j"], { server: z.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = ew.Ay.getProject(t);
                                        null != e && tU({ project: e, target: z, action: "remove" });
                                    },
                                })
                              : null,
                          F
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(S.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = ew.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, tO.openModal)((t) => (0, a.jsx)(tB, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = ew.Ay.getProject(t);
                                        if (null != e && null != z) tU({ project: e, target: z, action: "delete" });
                                        else
                                            (0, tu.A)({
                                                title: E.intl.formatToPlainString(S.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(S.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, P.K)(t, () =>
                                                        (0, eW.P0)({
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
function tX(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eZ.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tW, { ...n, onCloseMenu: t });
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
                              children: (0, a.jsx)(tw.K, {
                                  icon: tk.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(y.A.Icon, {
                              icon: tk.MoreHorizontalIcon,
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
var tZ = n(95264);
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
                    (0, eW.P0)({ text: E.intl.formatToPlainString(S.default.aN2JdD, { name: l }) }),
                    e9(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[conjure] project export failed", n, e),
                                (0, eW.P0)({
                                    text:
                                        409 === (t = e instanceof e5 ? e.status : null)
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
                onImport: (s = te(
                    i.useCallback(
                        (e) => {
                            let r = e8(e);
                            null != r
                                ? (0, eW.P0)({ text: r, variant: "critical" })
                                : (0, tu.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: l }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, u.pX)(O.BVt.CHANNEL(t, q.VV.CONJURE, n));
                                          try {
                                              await e7(n, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, eW.P0)({
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
        isOwner: (0, ew.PV)(e),
        canRemix: (0, ew.H_)(e),
        onRemix: () => (0, tZ.A)(e, t),
        onExport: o,
    };
}
function tY(e) {
    let { project: t, guildId: n } = e,
        l = tJ(t, n);
    return (0, a.jsx)(tW, { ...l, onCloseMenu: to.Z_ });
}
function tQ(e) {
    let { project: t, guildId: n } = e,
        l = tJ(t, n);
    return (0, a.jsx)(tX, { ...l, trigger: "iconButton" });
}
var t0 = n(638693);
class t1 extends Error {}
function t2(e) {
    let { guildId: t, modelSettings: n, onClose: l } = e,
        r = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ti.Ot)(e, t)
                    ? (0, u.pX)(O.BVt.CHANNEL(t, q.VV.CONJURE, e.id))
                    : (0, ta.A)(e);
            },
            [t],
        ),
        s = i.useCallback((e) => (0, a.jsx)(tQ, { project: e, guildId: t }), [t]),
        o = i.useCallback(
            (e, n) => {
                (0, to.jA)(e, () => (0, a.jsx)(tY, { project: n, guildId: t }));
            },
            [t],
        ),
        [c, d] = i.useState(!1),
        m = i.useCallback(
            async (e, l) => {
                let r = e8(e);
                if (null != r) return void (0, eW.P0)({ text: r, variant: "critical" });
                d(!0);
                try {
                    await z({
                        guildId: t,
                        installScope: l,
                        modelSettings: n,
                        start: async (t) => {
                            try {
                                await e7(t, e, E.intl.string(S.default["LUc7/5"]));
                            } catch {
                                throw (await (0, P.xx)(t).catch(() => void 0), new t1());
                            }
                        },
                    });
                } catch (e) {
                    (0, eW.P0)({
                        text: e instanceof t1 ? E.intl.string(S.default["Q+l4Hv"]) : (0, _.mG)(e),
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
        className: t0.pz,
        "aria-label": f,
        children: [
            (0, a.jsxs)("div", {
                className: t0.wx,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-strong", children: f }),
                    (0, a.jsxs)("div", {
                        className: t0.$s,
                        children: [
                            (0, a.jsx)(tr, { importing: c, onImport: m }),
                            (0, a.jsx)(y.A.Icon, { icon: eX.P, tooltip: h, "aria-label": h, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(g.Ip, {
                className: t0.XG,
                children: (0, a.jsx)(ts.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: s,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var t3 = n(559106),
    t4 = n(663341),
    t5 = n(783977),
    t6 = n(559647),
    t7 = n(531685),
    t8 = n(477262),
    t9 = n(432017);
let ne = [
    {
        id: "add-images-videos",
        label: S.default["51+9lc"],
        icon: t8.s,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: S.default["10ljr2"],
        icon: t9.T,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: S.default.aotDee, icon: eQ.H, accept: "" },
];
var nt = n(289873),
    nn = n(285796),
    nl = n(922329);
async function nr(e) {
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
var na = n(153171);
let ni = er.lN;
function ns(e, t, n, l) {
    let r = ec(e, t).length;
    ex(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= ni)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: E.intl.formatToPlainString(S.default.Q0aCVZ, { count: ni }),
                    },
                };
            if (!(0, er.Oq)(e.size, t))
                return "image/png" === t && e.size <= er.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await nr(e).catch(() => null);
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
function no(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = eo.useState((e) => eu(e, t, n)),
        a = i.useCallback((e) => ns(t, n, e, l), [t, n, l]),
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
function nu(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(nl.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(nt.y, { type: nt.t.SPINNING_CIRCLE_SIMPLE, className: na.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: na.o1,
                onClick: () => n(t.localId),
                "aria-label": E.intl.string(S.default.Slam9g),
                children: (0, a.jsx)(nn.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var nc = n(900797),
    nd = n(320448),
    nm = n(344587),
    nf = n(534554),
    nh = n(392208),
    np = n(822313),
    ng = n(837984),
    nx = n(359589),
    nv = n(254575);
function nj(e) {
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
function nb(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = nj(d),
        p = nh.P.indexOf(t.tier),
        g = d ? nc.t : nd._,
        x = nh.P.map(nf.D0),
        j = (0, nf.Tc)(t.tier),
        { text: b, phase: y } = (0, nm.Q)(j);
    return (0, a.jsx)("div", {
        className: nv.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: h()(nv.t$, { [nv.Zr]: u && c, [nv.GF]: !u }),
            role: "dialog",
            "aria-label": E.intl.string(S.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: h()(nv.Nr, nv.uO, { [nv.Zr]: d && f.entered, [nv.GF]: !d }),
                          children: (0, a.jsx)(nx.b, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${nv.Nr} ${nv.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nv.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: nv.y6,
                                    "aria-expanded": d,
                                    "aria-label": E.intl.string((0, nf.FC)(l)),
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
                                            className: nv.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: h()(nv.Z, { [nv.xQ]: "exit" === y, [nv.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nv.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: nv.Nb,
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
                                (0, a.jsx)(ng.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: E.intl.string(S.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = nh.P[e];
                                        null != n && n !== t.tier && s((0, nf.CM)((0, nf.j6)(t, n)));
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
function ny(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, np.A)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = nj(f);
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: eZ.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(nb, {
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
                    className: o ?? nv.hZ,
                    "aria-label": E.intl.string(S.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(t5.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var nw = n(200160),
    nk = n(465410);
function nN(e) {
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
        className: nw.RC,
        children: [t[r].slice(0, s), l ? (0, a.jsx)("span", { className: nw.OW }) : null],
    });
}
function nC(e) {
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
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", className: nw.RC, children: t[l] });
}
function nA(e) {
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
        l = (0, o.bG)([eL.Ay], () => eL.Ay.useReducedMotion),
        r = (0, o.bG)([t7.A], () => t7.A.isFocused()),
        s = t || !r;
    return (0, a.jsx)("div", {
        className: nw.qf,
        "aria-hidden": !0,
        children: l
            ? (0, a.jsx)(nC, { prompts: n, paused: s })
            : (0, a.jsx)(nN, { prompts: n, paused: s, showCaret: !t }),
    });
}
function nS(e) {
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
        className: nw.kL,
        children: [
            (0, a.jsxs)("div", {
                ref: g,
                className: h()(nw.yk, { [nw.Sl]: null != u }),
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: nw.Ox,
                        children: [
                            (0, a.jsx)(t3.vN, {
                                ringTarget: g,
                                ringClassName: nw.Rg,
                                children: (0, a.jsx)("textarea", {
                                    ref: n,
                                    className: h()(nw.hF, nk.dv),
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
                            j ? null : (0, a.jsx)(nA, { boxFocused: f }),
                        ],
                    }),
                    m.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: nw.ZO,
                              children: m.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(nu, { draft: t, onRemove: C }, t.localId);
                              }),
                          })
                        : null,
                    (0, a.jsxs)("div", {
                        className: nw.KE,
                        children: [
                            (0, a.jsx)("input", {
                                ref: y,
                                type: "file",
                                multiple: !0,
                                onChange: I,
                                className: nw.Fg,
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                            (0, a.jsx)(eZ.Y, {
                                targetElementRef: w,
                                position: "top",
                                align: "left",
                                animation: eZ.Y.Animation.NONE,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(eJ.W, {
                                        "data-menu-migrated": !0,
                                        navId: "conjure-home-attach",
                                        "aria-label": b,
                                        onClose: t,
                                        onSelect: t,
                                        children: (0, a.jsx)(eY.rX, {
                                            children: ne.map((e) =>
                                                (0, a.jsx)(
                                                    eY.Dr,
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
                                        className: nw.gb,
                                        disabled: s,
                                        "aria-label": b,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n,
                                        children: (0, a.jsx)(t4.PlusLargeIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                            className: nw.Xv,
                                        }),
                                    });
                                },
                            }),
                            (0, a.jsxs)("div", {
                                className: nw.Rc,
                                children: [
                                    (0, a.jsx)(ny, {
                                        settings: c ?? L,
                                        tiers: $,
                                        choices: T,
                                        disabled: s,
                                        onChange: d,
                                        className: nw.gb,
                                        icon: (0, a.jsx)(t5.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(eT.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: t6.SendMessageIcon,
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
var nE = n(628284),
    nI = n(369606),
    nM = n(926268),
    n_ = n(406810),
    nR = n(707554),
    nP = n(651346);
function nT(e) {
    let { className: t } = e;
    return (0, a.jsx)("span", { className: h()(nP.n8, t) });
}
let nL = [
        {
            id: "apps",
            title: S.default["bvcT/Q"],
            description: S.default.ArcJqa,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nP.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nP.My,
                            children: [
                                (0, a.jsx)("span", { className: nP._w }),
                                (0, a.jsx)("span", { className: nP._w }),
                                (0, a.jsx)("span", { className: nP._w }),
                            ],
                        }),
                        (0, a.jsx)(nT, { className: nP.Lm }),
                        (0, a.jsx)("div", {
                            className: nP.Oh,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nP.ZW,
                                        children: [
                                            (0, a.jsx)("span", { className: nP.NU }),
                                            0 === e
                                                ? (0, a.jsx)(nE.y, {
                                                      size: "xs",
                                                      color: k.A.colors.ICON_BRAND,
                                                      className: nP._6,
                                                  })
                                                : null,
                                            (0, a.jsx)(nT, { className: nP.Eg }),
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
                    className: h()(nP.x, nP.jG),
                    children: [
                        (0, a.jsx)("span", { className: h()(nP.gg, nP.K1) }),
                        (0, a.jsx)("span", { className: h()(nP.gg, nP.W2) }),
                        (0, a.jsx)("span", { className: h()(nP.Fs, nP.A$) }),
                        (0, a.jsx)("span", { className: h()(nP.Fs, nP.eP) }),
                        (0, a.jsx)("span", { className: h()(nP.Fs, nP.kc) }),
                        (0, a.jsx)("span", { className: h()(nP.Fs, nP.OE) }),
                        (0, a.jsx)("span", { className: nP.OC }),
                        (0, a.jsxs)("div", {
                            className: nP.si,
                            children: [
                                (0, a.jsx)(nI.TrophyIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: nP.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nP.KQ,
                            children: [
                                (0, a.jsx)(nM.HeartIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nM.HeartIcon, { size: "xxs", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nM.HeartIcon, { size: "xxs", color: k.A.colors.ICON_OVERLAY_LIGHT }),
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
                    className: nP.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nP.$y,
                            children: [(0, a.jsx)("span", { className: nP.m$ }), (0, a.jsx)(nT, { className: nP.Md })],
                        }),
                        (0, a.jsxs)("div", {
                            className: nP.iU,
                            children: [
                                (0, a.jsx)("span", {
                                    className: h()(nP.my, nP.FY),
                                    children: (0, a.jsx)(eF.RobotIcon, {
                                        size: "xs",
                                        color: k.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: nP.OS,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: nP.f9,
                                            children: [
                                                (0, a.jsx)(nT, { className: nP.iE }),
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: nP.AO,
                                                    children: E.intl.string(S.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(nT, { className: nP.xs }),
                                        (0, a.jsx)(nT, { className: nP.Md }),
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
                    className: h()(nP.x, nP.ME),
                    children: [
                        (0, a.jsx)("span", { className: nP.CK }),
                        (0, a.jsxs)("div", {
                            className: nP.kI,
                            children: [
                                (0, a.jsx)("span", { className: h()(nP.my, nP.jU) }),
                                (0, a.jsx)(nT, { className: nP.iE }),
                                (0, a.jsxs)("div", {
                                    className: nP.Wy,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: nP.M1,
                                            children: [0, 1].map((e) =>
                                                (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        className: nP.dJ,
                                                        children: [
                                                            (0, a.jsx)(nT, { className: nP.cR }),
                                                            (0, a.jsx)(nT, { className: nP.Zh }),
                                                        ],
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: nP.bW,
                                            children: [0, 1, 2, 3, 4, 5].map((e) =>
                                                (0, a.jsx)("span", { className: nP.QR }, e),
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
                    className: nP.JH,
                    children: [
                        (0, a.jsx)("span", { className: nP.rx }),
                        (0, a.jsx)("span", { className: nP.ny }),
                        (0, a.jsx)("span", { className: nP.ZH }),
                        (0, a.jsx)("div", {
                            className: nP.$Y,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nP.fn,
                                        children: [
                                            (0, a.jsx)("span", { className: h()(nP._h, { [nP.zY]: 0 === e }) }),
                                            (0, a.jsx)(nT, { className: nP.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsxs)("div", {
                            className: nP.Y5,
                            children: [
                                (0, a.jsx)(n_.ClockIcon, { size: "xxs", color: k.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, a.jsx)(nT, { className: nP.jB }),
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
                    className: nP.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nP.iU,
                            children: [
                                (0, a.jsx)("span", { className: nP.my }),
                                (0, a.jsxs)("div", {
                                    className: nP.OS,
                                    children: [
                                        (0, a.jsx)(nT, { className: nP.iE }),
                                        (0, a.jsx)(nT, { className: h()(nP.xs, nP.pc) }),
                                        (0, a.jsx)(nT, { className: h()(nP.Md, nP.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nP.jC,
                            children: [
                                (0, a.jsx)(ez.ShieldIcon, { size: "sm", color: k.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsxs)("div", {
                                    className: nP.qQ,
                                    children: [
                                        (0, a.jsx)(nT, { className: h()(nP.Md, nP.k8) }),
                                        (0, a.jsx)(nT, { className: h()(nP.nq, nP.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    n$ = i.memo(function () {
        let e = i.useId();
        return (0, a.jsx)("section", {
            className: nP.GG,
            "aria-labelledby": e,
            children: (0, a.jsx)(nR.F, {
                component: (0, a.jsx)(x.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: E.intl.string(S.default.IiQEVd),
                }),
                children: (0, a.jsx)("ul", {
                    className: nP.Vg,
                    children: nL.map((e) => {
                        let { id: t, title: n, description: l, Visual: r } = e;
                        return (0, a.jsxs)(
                            "li",
                            {
                                className: nP.Vs,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: nP.Tn,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(r, {}),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: nP.pG,
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
function nD(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let nO = 1;
function nq(e) {
    let t = nD(e),
        n = { localId: nO++, name: e.name, contentType: t };
    if (
        !(0, er.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= er.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...n, status: "error", errorText: eg(t) } };
    let l = er.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: l } };
}
function nz(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function nF(e, t) {
    if ((0, er.Oq)(t.size, nD(t))) return (0, ea.vX)(e, t);
    let n = await nr(t);
    if (null == n || !(0, er.Oq)(n.size, n.type)) throw Error("attachment over its size limit");
    return (0, ea.vX)(e, n);
}
var nU = n(698638),
    nG = n(606128),
    nB = n(260024);
class nK extends Error {}
function nH(e) {
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
                i.useEffect(() => () => n.current.forEach(nz), []));
            let l = i.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(nq);
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
                    null != l && (nz(l), (n.current = n.current.filter((e) => e !== l)), t(n.current));
                }, []),
                s = i.useCallback(() => {
                    (n.current.forEach(nz), (n.current = []), t(n.current));
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
    (0, eP.p)(k);
    let O = i.useCallback((e) => {
            (r(e), c(null));
        }, []),
        q = i.useCallback(
            (e) => {
                O(e);
                let t = k.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [O],
        ),
        B = i.useRef(!1),
        K = i.useCallback(async () => {
            let e = l.trim();
            if ("" !== e && !B.current) {
                ((B.current = !0), o(!0), c(null));
                try {
                    await z({
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
                                            return nF(t, n);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, P.xx)(t).catch(() => void 0), new nK());
                                }
                            (!(function (e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                                if (ew.Ay.getProject(e)?.install_scope_setup != null)
                                    U.w.set(ek, { ...eS(), [e]: { message: t, attachments: n, nonce: (0, H.m)() } });
                                else (0, R.sendUserMessage)(e, t, n);
                            })(t, e, n),
                                L());
                        },
                    });
                } catch (e) {
                    (c(e instanceof nK ? E.intl.string(S.default["903H7m"]) : (0, _.mG)(e)), (B.current = !1), o(!1));
                }
            }
        }, [l, C, d, n, I, L]),
        V = i.useCallback((e) => {
            (U.w.set(G, e), w(e));
        }, []),
        W = i.useCallback(() => V(!1), [V]),
        X = E.intl.string(f ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: h()(nB.MY, nG.T),
        children: (0, a.jsxs)("div", {
            className: nB.Zp,
            children: [
                (0, a.jsxs)("main", {
                    className: nB.iW,
                    children: [
                        s
                            ? null
                            : (0, a.jsx)(j.A, {
                                  title: E.intl.string(S.default.gy7byi),
                                  description: E.intl.string(S.default["dkv/WO"]),
                                  icons: nU.ir,
                                  onDrop: D,
                              }),
                        (0, a.jsx)(M, {
                            title: E.intl.string(S.default.uk6jhJ),
                            transparent: !0,
                            actions: (0, a.jsx)(y.A.Icon, {
                                icon: p.Z,
                                color: "var(--icon-strong)",
                                className: nB.FW,
                                tooltip: X,
                                "aria-label": X,
                                selected: f,
                                onClick: () => V(!f),
                            }),
                        }),
                        (0, a.jsx)(g.Ip, {
                            className: nB.XG,
                            children: (0, a.jsxs)("div", {
                                className: nB.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nB.Lv,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: nB.ZK,
                                                children: [
                                                    (0, a.jsx)(x.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: nB.DD,
                                                        children: E.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: nB.VA,
                                                        children: E.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: nB.ZK,
                                                children: [
                                                    (0, a.jsx)(nS, {
                                                        idea: l,
                                                        inputRef: k,
                                                        onIdeaChange: O,
                                                        onSubmit: K,
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
                                    (0, a.jsx)(eV, { inspirations: N, onCopyPrompt: q }),
                                    (0, a.jsx)(n$, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                f ? (0, a.jsx)(t2, { guildId: n, modelSettings: d, onClose: W }) : null,
            ],
        }),
    });
}
var nV = n(478016),
    nW = n(604525),
    nX = n(534890),
    nZ = n(646270),
    nJ = n(31300),
    nY = n(831453),
    nQ = n(646973);
let n0 = Object.freeze({ x: 0.5, y: 0.5 });
function n1(e) {
    return "" !== e.trim();
}
function n2(e) {
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
function n3(e) {
    let { kind: t, name: n } = n2(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function n4(e) {
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
let n5 = "[conjure:selected] ",
    n6 = " \u2014 ";
function n7(e) {
    if (!e.startsWith(n5)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(n5.length),
        a = r.indexOf(n6),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let n8 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    n9 = new Map(),
    le = new Set();
function lt(e) {
    return n9.get(e) ?? n8;
}
function ln(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? n9.set(e, t) : n9.delete(e), [...le]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function ll(e) {
    let t = lt(e);
    t.active || ln(e, { ...t, active: !0 });
}
function lr(e) {
    let t = lt(e);
    t.active && ln(e, { ...t, active: !1 });
}
function la(e) {
    n9.has(e) && ln(e, n8);
}
function li(e, t) {
    let n = lt(e);
    n.active && ln(e, { ...n, context: t });
}
function ls(e, t) {
    return null != t && e.authorId === t;
}
function lo(e) {
    return (
        le.add(e),
        () => {
            le.delete(e);
        }
    );
}
function lu(e) {
    let t = i.useCallback(() => (null == e ? n8 : lt(e)), [e]);
    return i.useSyncExternalStore(lo, t, t);
}
(n(134528), n(947204));
let lc = { past: [], present: [], future: [] };
function ld(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function lm(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function lf(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => lm(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: lm(e.from, t, n), to: lm(e.to, t, n) };
        case "text":
            return { ...e, at: lm(e.at, t, n) };
    }
}
function lh(e) {
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
function lg(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function lx(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function lv(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => lx(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = lx(e.from, t),
                l = lx(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = lx(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function lj(e) {
    return lh(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let lb = [3, 6, 12],
    ly = [10, 20, 40],
    lw = (0, el.D)(() => ({ byProject: {} })),
    lk = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: lc,
        sketchDismissedFor: null,
    };
function lN(e) {
    return lw.getState().byProject[e] ?? null;
}
function lC(e, t) {
    let n = lN(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = lw.getState();
    lw.setState({ byProject: { ...r, [e]: l } });
}
function lA(e) {
    if (null == lN(e)) return;
    let { [e]: t, ...n } = lw.getState().byProject;
    (lw.setState({ byProject: n }), la(e));
}
function lS(e, t) {
    null != lN(e) &&
        (lC(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? ll(e) : lr(e));
}
function lE(e, t) {
    lC(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return ld(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return ld(
                        e,
                        e.present.map((e) => (e.id === t.id ? lf(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : ld(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : ld(e, []);
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
function lI(e) {
    return lw.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var lM = n(39416);
function l_(e) {
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
            className: lM.i5,
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
var lR = n(91242),
    lP = n(457827),
    lT = n(802905),
    lL = n(573083);
function l$(e) {
    return W.A.isThinking(e) || (0, lL.wK)(e);
}
var lD = n(35525),
    lO = n(881511);
let lq = new Set();
function lz(e, t) {
    if (!(lq.has(t) || (l$(e) && !lT.A.isPaused(e))))
        for (let e of lR.A.getAllFrames())
            e.applicationId === t &&
                (0, lO.D)(e) &&
                !(lD.A.isInHostWindow(e) || (lD.A.isActivityPopoutOpen() && lR.A.getMainFrame()?.id === e.id)) &&
                (0, lP.r)(e.id);
}
let lF = new Set(),
    lU = null;
function lG(e, t) {
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
                lF.add(t),
                () => {
                    lF.delete(t);
                }
            );
        }, [e]));
}
var lB = n(885386);
function lK() {
    return lB.Q_.useSetting() || !1;
}
var lH = n(128761),
    lV = n(12177),
    lW = n(967008),
    lX = n(513845),
    lZ = n(951178);
let lJ = { width: 320, height: 240 };
function lY(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : lJ;
}
var lQ = n(855859),
    l0 = n(238490),
    l1 = n(991690),
    l2 = n(696645);
function l3(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function l4(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, l2.X)(e.surface)
                : E.intl.formatToPlainString(S.default["6xVl+N"], {
                      surface: (0, l2.X)(e.surface),
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
var l5 = n(939398),
    l6 = n(86147),
    l7 = n(729475),
    l8 = n(156548),
    l9 = n(869146),
    re = n(475815),
    rt = n(165610);
function rn(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, l8.cR)(t?.id ?? null),
        r = (0, lL.Zv)(n),
        i = (0, o.bG)(
            [l9.A, lR.A],
            () => null != t && l9.A.getWindowOpen(O.MLl.ACTIVITY_POPOUT) && lR.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, rt.x1)(t) || i || r) return null;
    let s = (0, l8.fl)(t.id);
    if (null == s || !(0, re.Ub)(s)) return null;
    let u = E.intl.string(l ? E.t.Z7MyNB : E.t.OIDkcp);
    return (0, a.jsx)(y.A.Icon, {
        tooltip: u,
        icon: l ? l6.z : l7.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, l8.U8)(t.id),
    });
}
var rl = n(847374),
    rr = n(704745);
function ra(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = E.intl.string(S.default.I2ucou);
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: eZ.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eJ.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eY.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = l3(e);
                        return (0, a.jsx)(
                            eY.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: l4(e),
                                checked: t === l3(n),
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
            return (0, a.jsx)(t3.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: rr.h,
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
                            children: l4(n),
                        }),
                        (0, a.jsx)(rl.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var ri = n(324641),
    rs = n(627363),
    ro = n(153207),
    ru = n(803101),
    rc = n(226178),
    rd = n(625180),
    rm = n(672929),
    rf = n(111534),
    rh = n(754027),
    rp = n(722701),
    rg = n(962998),
    rx = n(373540),
    rv = n(144228);
function rj(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, o] = i.useState(t.selected_destination_id),
        u = E.intl.string(S.default.lJrOGW);
    return (0, a.jsx)(t$.a, {
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
        children: (0, a.jsx)(rv.z, {
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
let rb = {
    showPublishBlocked: rx.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, tO.openModal)(
                (t) =>
                    (0, a.jsx)(rj, {
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
    showError: (e) => (0, eW.P0)({ text: e, variant: "critical" }),
};
function ry(e) {
    return null != e && e.upToDate && "publish" === e.action && !e.awaitingApproval;
}
var rw = n(811587);
let rk = "conjure-publish";
function rN(e, t, l) {
    let r = i.useContext(t_.bI),
        s = l ?? r;
    return i.useCallback(
        (l) => {
            if (null == e || null == t || null == s || t.disabled) return;
            let r = t.status?.publishState;
            if (t.awaitingApproval || (null != r && (0, rw.lE)(r))) t.run(l);
            else {
                var i;
                let t, r;
                ((i = { projectId: e, publishOptions: s, entryPoint: l }),
                    (t = (0, tO.getInteractingModalContext)()),
                    (r = { current: !1 }),
                    (0, tO.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("880475"), n.e("801342"), n.e("744668")]).then(
                                n.bind(n, 815895),
                            );
                            return (t) => (0, a.jsx)(e, { ...t, ...i, savingRef: r });
                        },
                        {
                            modalKey: rk,
                            contextKey: t,
                            onCloseRequest: () => {
                                r.current || (0, tO.closeModal)(rk, t);
                            },
                        },
                    ));
            }
        },
        [e, t, s],
    );
}
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
        } = no({ projectId: t, surface: "design", onUploadFile: f }),
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
        className: h()(rI.M0, { [rI.ho]: _ && !m, [rI.ET]: m }),
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
                                  children: (0, a.jsx)(eQ.H, {
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
                      className: rI.ZO,
                      children: j.map((e) => (0, a.jsx)(nu, { draft: e, onRemove: w }, e.localId)),
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
function rR(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rP(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? r_(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = r_(e());
                l((e) => (rR(e, t) ? e : t));
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
    rq = n(241326),
    rz = n(972213);
function rF(e) {
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
let rG = rU("red", rF(k.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    rB = [
        rG,
        rU("yellow", rF(k.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        rU("green", rF(k.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        rU("blue", rF(k.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        rU("white", rF(k.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
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
let rZ = lb.map((e) => rX(Math.min(16, e + 3))),
    rJ = ly.map((e) => rX(Math.min(16, e / 2.5))),
    rY = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
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
            className: lM.z6,
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
        children: (0, a.jsx)(tw.K, {
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
        className: lM.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: lM.mz,
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
        g = E.intl.string(S.default.n5IA3a),
        x = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: lM.t$,
        children: [
            (0, a.jsx)("div", {
                className: lM.NT,
                children: (0, a.jsx)(r0, {
                    icon: rV,
                    label: E.intl.string(S.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => lS(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: lM.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(S.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(r0, {
                        icon: rH,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => lS(t, "move"),
                    }),
                    (0, a.jsx)(r0, {
                        icon: rL.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => lS(t, "text"),
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
                                    (lS(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rZ.map((n, l) =>
                                (0, a.jsx)(
                                    r0,
                                    {
                                        icon: n,
                                        label: E.intl.string(rY[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (lC(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), lr(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r2, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(r0, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (lS(t, u), e());
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
                                            (lS(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r2, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(r0, {
                                icon: rW,
                                label: g,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (lS(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rJ.map((n, l) =>
                                (0, a.jsx)(
                                    r0,
                                    {
                                        icon: n,
                                        label: E.intl.string(rY[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (lC(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), lr(t), e());
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
                                                lC(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: lM.Gz, role: "separator" }),
                    (0, a.jsx)(r1, {
                        icon: rD.e,
                        label: E.intl.string((0, e1.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(r1, {
                        icon: rO.U,
                        label: E.intl.string((0, e1.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(r1, {
                        icon: rq.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: lM.Gz, role: "separator" }),
                    (0, a.jsx)(r1, { icon: rz.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let r4 = k.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
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
    ae = (0, el.D)(() => ({ byMessageKey: {} }));
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
        o = lI(s),
        { active: u } = lu(s),
        c = (0, tO.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => lA(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && ll(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(ao, { projectId: s, state: o, resolveIframe: r });
}
function ao(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = rP(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, g] = i.useState(ar),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        w = i.useRef(null),
        k = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = rK(n.colorId),
        M = "pick" !== C,
        _ = "marker" === n.tool ? lb[n.markerSize] : "eraser" === n.tool ? ly[n.eraserSize] : null,
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
        let t = await (0, ri.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, rA.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, ri.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (an(t, T), () => an(t, null)), [t, T]);
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
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? lf(e, p.dx, p.dy) : e)),
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
            (lp(n, r) && lE(t, { type: "commit", shape: n }), o(null));
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
                            l = null == R ? null : lv(R, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? R
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = lx(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => lx(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (lg(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = lx(e.from, n),
                                                                  r = lx(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => lg(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = lx(e.from, n),
                                                                  r = lx(e.to, n),
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
                                                              let t = lv(e, n);
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
                        if (!lh(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${ai++}`,
                                kind: "erase",
                                width: ly[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${ai++}`,
                                kind: "marker",
                                color: I.value,
                                width: lb[n.markerSize] / r.width,
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
                ((b.current = null), g(ar), lE(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && lp(n, r) ? lE(t, { type: "commit", shape: n }) : $());
        }, [t, r, p, $]),
        G = i.useCallback(() => lA(t), [t]),
        B = i.useCallback(() => lE(t, { type: "undo" }), [t]),
        K = i.useCallback(() => lE(t, { type: "redo" }), [t]),
        H = i.useCallback(() => lE(t, { type: "clear" }), [t]),
        V = i.useRef({ tool: C, selected: R, exit: G, undo: B, redo: K });
    if (
        (i.useLayoutEffect(() => {
            V.current = { tool: C, selected: R, exit: G, undo: B, redo: K };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, eG.Cw)((0, eG.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), lE(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = aa[s];
                null != o && (e.preventDefault(), lS(t, o));
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
        X = null == R ? null : lv(null == b.current ? R : lf(R, p.dx, p.dy), r);
    return (0, rA.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: lM.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: lM.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: lM.Ji,
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
                                  className: lM.V$,
                                  "data-tool": C,
                                  "data-color": I.id,
                                  style: { width: _, height: _ },
                                  "aria-hidden": !0,
                              }),
                        null == X
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: lM.r1,
                                  style: { left: X.x, top: X.y, width: X.width, height: X.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: lM.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: lM.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: lM.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: lM.p$, "data-corner": "se" }),
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
                          onUploadFile: (e) => (0, ea.vX)(t, e),
                          onDismiss: q,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: lM.ej,
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
var ag = n(104317),
    ax = n(643278),
    av = n(566424),
    aj = n(683063),
    ab = n(140735),
    ay = n(138212);
function aw(e) {
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
var ak = n(148590);
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
        [g, x] = i.useState(l);
    g !== l && (x(l), p(!l));
    let v = i.useCallback(() => p((e) => !e), []),
        j = f ? rl.a : nd._,
        b = null != n || l;
    return (0, a.jsxs)(aw, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: ak.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(C.D, {
                                className: ak.L$,
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
        headerClassName: f ? void 0 : ak.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: h()(ak.rf, o), hidden: !f, children: c })],
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
            (0, a.jsx)(nt.y, {
                type: nt.y.Type.SPINNING_CIRCLE_SIMPLE,
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
        g = o.length - p.length;
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
            g > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: aA.qA,
                      children: `+${g}`,
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
var aR = n(308665),
    aP = n(59678),
    aT = n(903847);
function aL(e) {
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
              className: aT.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(aT.vK, { [aT.ho]: g && c, [aT.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(aT.Rk, aP.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(av.A, {
                                        glyph: (0, a.jsx)(aR.A, {}),
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
                                        className: h()(aT.Rk, aP.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(av.A, {
                                            glyph: (0, a.jsx)(aR.A, {}),
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
                                        className: aT.BO,
                                        onClick: P,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(ax.ClipboardListIcon, {
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
var a$ = n(16619);
function aD(e) {
    let t = (0, a$.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var aO = n(736553),
    aq = n(642785);
async function az(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, aq.dv)(e),
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
var aF = n(890497),
    aU = n(103557),
    aG = n(29073),
    aB = n(590077);
function aK(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = aD(e),
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
                        ((t = ew.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        k.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, H.m)() }), x.current.set(e.projectId, t)),
                                az(e.projectId, l, t.nonce)
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
        className: h()(aG.nd, aG.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: aG.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: aG.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tw.K, {
                        icon: eX.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(S.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: aB.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(aF.Z, {
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
                    (0, a.jsx)(aU.f, {
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
                className: aG.qr,
                children: (0, a.jsx)("div", {
                    className: aG.zt,
                    children: (0, a.jsx)(eT.$, {
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
var aH = n(658675),
    aV = n(22231),
    aW = n(123292),
    aX = n(691885),
    aZ = n(360047);
function aJ(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: o } = e,
        u = i.useMemo(() => aZ.Hi.map((e) => ({ id: e, value: e, label: (0, aZ.hU)(e) })), []);
    return (0, a.jsx)(aX.l, {
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
    aQ = n(287809);
function a0(e) {
    return 0 === e.options.length && null == e.input;
}
let a1 = {
        [O.rbe.GUILD_TEXT]: "text",
        [O.rbe.GUILD_VOICE]: "voice",
        [O.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [O.rbe.GUILD_STAGE_VOICE]: "stage",
        [O.rbe.GUILD_FORUM]: "forum",
        [O.rbe.GUILD_MEDIA]: "media",
    },
    a2 = { channel: "#", role: "@", user: "@", project: "", server: "" },
    a3 = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
        server: [S.default.ZWXDeI, S.default.ZWXDeI],
    };
function a4(e, t) {
    return E.intl.string(a3[e][+!!t]);
}
var a5 = n(155078);
function a6(e) {
    return e.options.some((e) => null != e.image);
}
let a7 = [];
function a8(e, t) {
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
var a9 = n(548118),
    ie = n(300344),
    it = n(614733),
    il = n(904363),
    ir = n(950902),
    ia = n(384017);
function ii(e) {
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
                        let l = null == (n = aY.A.getChannel(t)?.type) ? void 0 : a1[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = aQ.default.getUser(t)?.username;
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
        className: ia.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(aF.Z, {
                  ...g,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(aF.Z, {
                  ...g,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function is(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, ie.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(ii, { ...l, guildId: t, options: r, placeholder: a4("channel", !0 === l.question.multi_select) });
}
function io(e) {
    let { guildId: t, ...n } = e,
        l = (0, il.A)(t);
    return (0, a.jsx)(ii, { ...n, guildId: t, options: l, placeholder: a4("role", !0 === n.question.multi_select) });
}
function iu(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, it.A)(t);
    return (0, a.jsx)(ii, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: a4("user", !0 === n.question.multi_select),
    });
}
function ic(e) {
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
    return 0 === s.length ? n : (0, a.jsx)(ii, { ...l, options: s, placeholder: a4("project", !1) });
}
function id(e) {
    let t = e.target;
    (0, eG.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function im(e) {
    let { fallback: t, ...n } = e,
        l = (0, a$.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(a9.Ay, { guild: e, size: a9.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: id,
              onMouseUp: id,
              children: (0, a.jsx)(ii, { ...n, options: r, placeholder: a4("server", !1) }),
          });
}
function ih(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, ir.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(ic, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(im, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(is, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(io, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(iu, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var ip = n(87221),
    ig = n(26430),
    ix = n(750943),
    iv = n(95477),
    ij = n(256905),
    ib = n(490707),
    iy = n(907702);
function iw(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, ib._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(iy.Gt, iy.b6),
              children: [
                  (0, a.jsx)(ip.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(iy.Gt, { [iy.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: iy.Sl,
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
function ik(e) {
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
        className: h()(iy.Vs, { [iy.Q9]: s, [iy.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: iy.Up,
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
                        className: iy.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(iw, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: iy.Gt }),
                            (0, a.jsx)("span", {
                                className: iy.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(aH.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(rv.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: iy.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, a5.E)(t) : "")
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
                      className: iy.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(tw.K, {
                              icon: rq.TrashIcon,
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
                        className: iy.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(tw.K, {
                                icon: ig._,
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
function iN(e) {
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
                            (0, ij.R)({
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
        className: iy.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: h()(iy.fF, "gallery" === f ? iy.nV : iy.nM, { [iy.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            ik,
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
                              ik,
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
            (0, a.jsx)(iC, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function iC(e) {
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
        className: iy.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: iy.QJ,
                children: [
                    (0, a.jsx)(eT.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: ix.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(eT.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: tj.LinkIcon,
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
                        className: iy.Fg,
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
                      className: iy.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: iy.Hs,
                              children: (0, a.jsx)(iv.k, {
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
                              className: iy.gd,
                              children: [
                                  (0, a.jsx)(eT.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(S.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(aW.Q, {
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
function iA(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(ia.uK, { [ia.ue]: l, [ia.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: ia.dy, children: (0, a.jsx)(aH.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: ia.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: ia.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: ia.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: ia.ed,
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
                      className: ia.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function iS(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return a6(n)
        ? (0, a.jsx)(iN, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      iA,
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
let iE = [],
    iI = [];
function iM(e) {
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
        className: h()(ia.Ge, ia.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: ia.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(iS, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: a8(o, u),
            }),
            a6(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: ia.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: ia.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(aV.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(ia.Pu, ia.es), children: c }),
                      ],
                  }),
        ],
    });
}
function i_(e) {
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
        ei = a6(J),
        es = er ? (j[J.id] ?? iE) : ((t = f[J.id]), t?.kind === "option" ? [t.optionId] : a7),
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
                        if (o) return a8(h, m(i));
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
        { text: ed, phase: em } = (0, nm.Q)(J.question),
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
                                      return (0, aZ.Ol)(t, n, l);
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
        eS = y[J.id] ?? iI,
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
                          ...eS.map((t) => (t.name.startsWith(a2[e]) ? t.name : `${a2[e]}${t.name}`)),
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
        eP = i.useCallback(() => {
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
        eU = Z === X - 1,
        eB = i.useCallback(() => {
            null == ez || W || eb(ez);
        }, [W, ez, eb]),
        eK = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, eG.vq)(e.target, HTMLTextAreaElement) ||
                    (0, eG.vq)(e.target, HTMLInputElement) ||
                    ((!(0, eG.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ek
                            ? (e.preventDefault(), (ew ?? ey)())
                            : "ArrowRight" === e.key && eF && (e.preventDefault(), eB())));
            },
            [ew, ek, eF, ey, eB],
        ),
        eH = ei
            ? null
            : (0, a.jsxs)("div", {
                  className: ia.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: ia.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(aV.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(rE.y, {
                          value: el,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              x((e) => ({ ...e, [J.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eP());
                          },
                          placeholder: E.intl.string(a0(J) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: J.question }),
                          disabled: W,
                          rows: 1,
                          className: ia.Pu,
                          "data-conjure-clarification-other": J.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(ia.$O, { [ia.fI]: eL && !eD, [ia.Oh]: eD }),
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
                className: ia.rf,
                style: null == q ? void 0 : { height: q.heading + q.rows },
                "data-moving": F ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: G,
                        className: ia.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: K,
                                tag: "span",
                                id: `${J.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: ee ? void 0 : m,
                                className: h()(aG.TK, ia.R_, { [ia.TB]: "exit" === em, [ia.JU]: "enter" === em }),
                                children: ed,
                            }),
                            eh || ee
                                ? (0, a.jsx)("div", {
                                      className: aG.Q7,
                                      children: (0, a.jsx)(N.m, {
                                          text: ep,
                                          children: (0, a.jsx)(tw.K, {
                                              icon: ee ? nc.t : rl.a,
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
                                      className: h()(aG.gb, aG.Q7),
                                      onClick: eq,
                                      "aria-label": E.intl.string(S.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(eX.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: ia.Cg,
                        style: null == q ? void 0 : { insetBlockStart: q.heading },
                        children: (0, a.jsxs)("div", {
                            className: ia.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: H,
                                    className: ia.Ge,
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
                                                  className: ia.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(iS, {
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
                                                                  ((n = t[J.id] ?? iE),
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
                                            ? (0, a.jsx)(ih, {
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
                                                  className: ia.X_,
                                                  children: (0, a.jsx)(aW.Q, {
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
                                                  className: ia.$y,
                                                  onFocus: eM,
                                                  onBlur: e_,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: E.intl.string(S.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(aJ, {
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
                                                  className: ia.aK,
                                                  children: J.note,
                                              })
                                            : null,
                                        !1 === J.allow_custom ? null : eH,
                                    ],
                                }),
                                null == D
                                    ? null
                                    : (0, a.jsx)(
                                          iM,
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
            X > 1 || er || ei || null != J.input || null != u || a0(J)
                ? (0, a.jsxs)("div", {
                      className: aG.qr,
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
                              className: aG.zt,
                              children: [
                                  ek
                                      ? (0, a.jsx)(aW.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: c ?? E.intl.string(S.default.Pk5lfA),
                                            onClick: ew ?? ey,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  d
                                      ? null
                                      : (0, a.jsx)(eT.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eU
                                                ? (o ?? E.intl.string(E.t.geKm7t))
                                                : E.intl.string(S.default.w1nRmT),
                                            disabled: !eF,
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
var iR = n(557744),
    iP = n(223347),
    iT = n(894443),
    iL = n(525530);
function i$(e) {
    return (0, o.bG)([ew.Ay], () => ew.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let iD = "scope-setup:q0",
    iO = `${iD}:0`,
    iq = `${iD}:1`;
function iz(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, o.bG)([ew.Ay], () => ew.Ay.getProject(e), [e]),
                n = (0, a$.z9)("ConjureScopeSetupCard"),
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
                                              n.length > 0 ? [] : [{ id: iO, label: E.intl.string(S.default.qLYOpH) }],
                                          ...eM(n, f),
                                      },
                                  ],
                              }
                            : {
                                  id: "scope-setup",
                                  questions: [
                                      {
                                          id: iD,
                                          question: E.intl.string(S.default.ickKBI),
                                          recommendation_reason: "",
                                          allow_custom: !1,
                                          options: [
                                              {
                                                  id: iO,
                                                  label: E.intl.string(S.default.qLYOpH),
                                                  detail: E.intl.string(S.default.QSKvUE),
                                              },
                                              {
                                                  id: iq,
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
            if (null == t || !(0, ew.PV)(t))
                return { clarification: e_(h), readOnly: !0, hideSubmit: !0, failure: null };
            async function p(t, n) {
                (s(!0), c(null));
                try {
                    await eA(`settle:${e}`, async () => {
                        try {
                            await eR(e, t, n);
                        } catch (t) {
                            if (409 !== t.status) throw t;
                            await (0, P.U1)(e);
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
                          n.option_ids.includes(iq) ? r("server") : null != l ? p("guild", l) : p("user", null);
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
          ? (0, a.jsx)(i_, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(
                        i_,
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
function iF(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: a, feature: s } = l,
                u = (0, o.bG)([ew.Ay], () => ew.Ay.getProject(t), [t]),
                c = (0, a$.z9)("ConjureScopeSwitchCard"),
                [d, m] = i.useState(!1),
                [f, h] = i.useState(null),
                p = u?.guild_id,
                g = i.useMemo(() => {
                    let [e] = n.questions,
                        t = E.intl.formatToPlainString("guild" === a ? S.default["jh/iy+"] : S.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === a
                                ? { ...e, question: t, allow_custom: !1, ...eM(c, p) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: E.intl.string(S.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, c, p, a]);
            if (null == u || !(0, ew.PV)(u))
                return { clarification: e_(g), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (m(!0), h(null));
                try {
                    var l;
                    await ((l = n.id),
                    eA(`switch:${t}:${l}`, async () => {
                        await eR(t, a, e);
                        let n = "guild" === a ? S.default["8+EcCu"] : S.default["U7+Yeh"];
                        if (!(0, R.sendUserMessage)(t, E.intl.string(n))) throw Error("Not connected");
                    }));
                } catch (e) {
                    (m(!1), h(409 === e.status ? "locked" : "failed"));
                }
            }
            return {
                clarification: g,
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
                          (h(null), (0, ey.b4)(t, "keep install scope", (e) => e.sendKeepInstallScope()))
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
              i_,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(
                      i_,
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
var iU = n(564963);
let iG = new Set(["select", "channel", "role", "user"]);
function iB(e, t) {
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
function iK(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let iH = new Set(),
    iV = new Set();
function iW(e) {
    return (
        iV.add(e),
        () => {
            iV.delete(e);
        }
    );
}
function iX() {
    return i.useSyncExternalStore(iW, () => iH);
}
function iZ(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, ah.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function iJ(e, t, n) {
    if (!n || null == t) return !1;
    let l = iK(e, t);
    return l.length > 0 && !iB({ keys: l }, t);
}
var iY = n(1665),
    iQ = n(11120),
    i0 = n(411236);
function i1(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: c,
            summary: d,
            markSaved: m,
        } = (function (e, t, n) {
            let l = iX(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!iH.has(n)) for (let e of ((iH = new Set([...iH, n])), iV)) e();
                    } else a(!0);
                }, [n]),
                c = (0, o.bG)([tR.A], () => iJ(t, tR.A.getSettings(e), s), [e, t, s]);
            return {
                done: c,
                superseded: (0, o.bG)([W.A], () => null != n && iZ(W.A.getMessages(e)).has(n), [e, n]),
                summary: (0, o.yK)(
                    [tR.A, aY.A],
                    () => {
                        var n;
                        let l = tR.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => aY.A.getChannel(e)?.name ?? null),
                              iK(t, l).flatMap((e) => {
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
            className: i0.Mk,
            children: (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(S.default["+uXDk+"]),
            }),
        });
    if (f)
        return (0, a.jsxs)("article", {
            className: i0.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: i0.Ol,
                    children: [
                        (0, a.jsx)(nE.y, { size: "xs", color: k.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
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
    return (0, a.jsx)(iQ.A, {
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
            let o = (0, a.jsx)(eT.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: E.intl.string(S.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: i0.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(S.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(iY.A, { text: p, variant: "text-sm/normal", color: "text-default" }),
                          t,
                          (0, a.jsx)("div", { className: i0.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(aG.nd, aG.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: aG.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: aG.TK,
                                      children: E.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(C.D, {
                                      className: h()(aG.gb, aG.Q7),
                                      onClick: r,
                                      "aria-label": E.intl.string(S.default["iq+Pte"]),
                                      children: (0, a.jsx)(eX.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: i0.DQ,
                              children: [
                                  (0, a.jsx)(iY.A, { text: p, variant: "text-sm/normal", color: "text-default" }),
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: aG.qr,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: i0.xE,
                                      children: E.intl.string(S.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: aG.zt,
                                      children: [
                                          (0, a.jsx)(eT.$, {
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
var i2 = n(935208),
    i3 = n(932111),
    i4 = n(404373);
function i5(e) {
    return "" !== en.getDraft(e).trim();
}
var i6 = n(29080);
function i7(e) {
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
var i8 = n(62617);
let i9 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    se = {
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
    st = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, i8.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, i8.Z)(),
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
                        () => (0, i8.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, i8.Z)(),
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
                        () => (0, i8.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, i8.Z)(),
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
                        () => (0, i8.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, i8.Z)(),
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
                        () => (0, i8.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, i8.Z)(),
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
                        () => (0, i8.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, i8.Z)(),
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
                        () => (0, i8.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, i8.Z)(),
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
                        () => (0, i8.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, i8.Z)(),
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
                        () => (0, i8.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, i8.Z)(),
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
                        () => (0, i8.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, i8.Z)(),
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
                        () => (0, i8.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, i8.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function sn(e) {
    return { ...st[e], name: E.intl.string(se[e]()) };
}
function sl(e) {
    return i9.includes(e) ? sn(e) : void 0;
}
function sr(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % i9.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, i9[(t + n) % i9.length]);
            }),
            l
        );
    })(e))
        t.set(n, sn(l));
    return t;
}
var sa = n(615839);
function si(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var ss = n(60160),
    so = n(16634);
function su(e) {
    let t = (0, af.SY)(e.steps);
    return null != t ? (0, af.WQ)(t) : si(e.task);
}
function sc(e) {
    let t = sr(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? sl(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: si(e.task),
                      todoId: e.task.todoId,
                      line: su(e),
                  },
              ];
    });
}
function sd(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, af.SY)(n.steps),
        d = u
            ? su(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(si(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, sa.MB)(e.durationMs),
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
                                    className: aP.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            so.A,
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
                                      className: aP.iq,
                                      children: (0, a.jsx)(ss.A, { text: e, variant: "text-sm/normal" }),
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
            body: si(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: aP.nC,
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
var sm = n(998445),
    sf = n(643210),
    sh = n(648127),
    sp = n(372795),
    sg = n(163897);
let sx = "conjure-browser-viewer";
function sv(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [sf.A],
            () =>
                n.flatMap((e) => {
                    let n = sf.A.getTab(t, e);
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
        className: sg.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(sj, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function sj(e) {
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
        u = (0, tO.useHasModalOpen)(sx),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        p = (0, sh.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(sg.Nr, f && sg.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tO.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: sx },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: p }),
        children: [
            (0, a.jsxs)("div", {
                className: sg.Gt,
                children: [
                    (0, a.jsx)(sp.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: sg.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: p }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: sg.qf,
                              children: (0, a.jsx)(sm.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: sg.HS,
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
                className: sg.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(sg.W9, f && sg.oM) }),
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
var sb = n(268409);
let sy = new WeakMap(),
    sw = new WeakMap();
function sk(e) {
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
                    let t = sy.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = sw.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), sw.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (sy.set(e, n), n);
                })(W.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: sb.h, children: (0, a.jsx)(sv, { projectId: t, sessionIds: u }) });
}
var sN = n(469393);
function sC(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, lH.lG)(t.authored_at);
    return (0, a.jsx)(aw, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: sN.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sN.z,
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
                    ? (0, a.jsx)(eT.$, {
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
var sA = n(714917),
    sS = n(463660),
    sE = n(970211);
function sI(e) {
    let { projectId: t } = e,
        {
            src: n,
            blurred: l,
            handleError: r,
        } = (function (e, t) {
            let n = (0, o.bG)([sA.A], () => (null != e ? sA.A.getBackground(e) : null)),
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
                                r = await (0, sS.Mg)(e, l);
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
        : (0, a.jsx)("img", { className: h()(sE.L, { [sE.T]: l }), src: n, alt: "", "aria-hidden": !0, onError: r });
}
var sM = n(155718);
function s_(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let sR = ["command", "user_command", "message_command", "message"],
    sP = new Set([sM.kc.CHAT, sM.kc.USER, sM.kc.MESSAGE]);
function sT(e) {
    return e.type ?? sM.kc.CHAT;
}
function sL(e) {
    return sP.has(sT(e));
}
function s$(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function sD(e, t) {
    let n = sR.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !s$(e)), ...n.filter(s$)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || s$(r) || l.push(r);
    }
    return sR.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function sO(e, t, n) {
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
    let s = e.commands.filter(sL).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (sT(e)) {
                    case sM.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case sM.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(s$),
        u = a.length > 0 ? sD([...a, ...o], !0) : sD("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var sq = n(377941),
    sz = n.n(sq);
function sF(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function sU(e) {
    return e.type === sM.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === sM.kc.USER || e.type === sM.kc.MESSAGE
          ? ""
          : "/";
}
let sG = {
        [lZ.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [lZ.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [lZ.q7.ACTIVITY]: S.default["3/aHX6"],
        [lZ.q7.OVERLAY]: S.default["rPpf5/"],
        [lZ.q7.PROFILE_WIDGET]: null,
        [lZ.q7.AUTOMOD]: null,
        [lZ.q7.BOT]: null,
        [lZ.q7.APPLICATION_COMMANDS]: null,
    },
    sB = [lZ.q7.ACTIVITY, lZ.q7.APP_CHANNEL, lZ.q7.VOICE_CHANNEL, lZ.q7.OVERLAY];
function sK(e) {
    return sB.find((t) => s_(e, t)) ?? null;
}
let sH = 1.8860510805500983;
function sV(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let sW = sV(24, 339.3333333333333),
    sX = sV(24, 640);
var sZ = n(176999),
    sJ = (((l = {}).IMAGE = "image"), l),
    sY = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    sQ = n(598748),
    s0 = n(773669);
let s1 = [],
    s2 = {},
    s3 = {};
function s4(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function s5(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: sJ.IMAGE,
        visibility: sY.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var s6 = n(127258),
    s7 = n(803306),
    s8 = n(320095),
    s9 = n(963852),
    oe = n(95701),
    ot = n(889227),
    on = n(427262);
let ol = new oe.nA({ id: "1337", guild_id: "1337", type: O.rbe.GUILD_TEXT, name: "preview" });
function or(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([aQ.default], () => aQ.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, s7.nj)(new ot.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let oa = /^@\S+/;
var oi = n(97808),
    os = n(778712),
    oo = n(46054),
    ou = n(200700);
let oc = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    od = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    om = ["blocked", "alert", "allowed"],
    of = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function oh(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, ou.getFriendlyDurationString)(n))
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
var op = n(984097),
    og = n(13673);
let ox = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function ov(e) {
    let { example: t } = e,
        n = oh(t);
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
let oj = ["glazedgamer", "sprinkles", "donutking"];
function ob(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = oc[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(op.nM, { [h()(op.HV, og.DX)]: s }),
        children: [
            (0, a.jsx)(ab.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: op.my,
                children: (0, a.jsx)(oi.eu, {
                    src: (0, e$.AE)(void 0, void 0),
                    size: os._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: op.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), oo.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(ov, { example: n }) : null,
                ],
            }),
        ],
    });
}
function oy(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = od[t.section],
        s = new Set(t.examples.map(oh)),
        o = 1 === s.size ? t.examples.map(oh)[0] : null;
    return (0, a.jsxs)("div", {
        className: op.UO,
        children: [
            (0, a.jsxs)("div", {
                className: op.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: ox[r.tone],
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
                                      className: op.IQ,
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
                className: op.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(ob, { example: e, username: oj[(n + t) % oj.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function ow(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            om
                .map((e) => ({ section: e, examples: t.filter((t) => of[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: op.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: op.hk,
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
                    oy,
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
var ok = n(276293),
    oN = n(460905),
    oC = n(110384),
    oA = n(633018),
    oS = n(763754),
    oE = n(217424),
    oI = n(194085),
    oM = n(20851),
    o_ = n(692508),
    oR = n(798819);
function oP(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(oR.item, oR.labelContainer, oR.colorDefault, {
            [oR.focused]: !0 === t.highlighted,
            [oR.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: oR.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: oR.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(oR.label, o_.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: oR.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: oR.icon }),
                  })
                : null,
        ],
    });
}
function oT(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, o_.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: oC.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(oR.menu, o_.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: oR.scroller,
            children: [
                (0, a.jsx)(oP, { item: s }),
                (0, a.jsx)("div", { className: oR.separator }),
                (0, a.jsx)(oP, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var oL = n(381941);
function o$() {}
function oD(e) {
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
        } = ((t = (0, o.bG)([aQ.default], () => aQ.default.getCurrentUser())),
        (n = (0, o.bG)([ew.Ay], () => ew.Ay.getProject(g))),
        (l = n?.application_id),
        (r = (0, o.bG)([tG.A], () => tG.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([aQ.default], () => (null != l ? aQ.default.getUser(l) : void 0), [l])),
        (d = or("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = or("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (p = or("31339", (0, on.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, s8.rh)({
                                          ...(0, s9.Ay)({
                                              channelId: ol.id,
                                              content: e,
                                              author: t,
                                              type: l ?? O.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: O.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: s6.G.APPLICATION_COMMAND,
                                                        user: (0, s9.Vi)(s),
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
                                              messageType: O.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: O.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(oa, `<@${i.id}>`)), s),
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
    let w = ol.name;
    return (0, a.jsxs)("div", {
        className: o_.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: o_.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ok.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: w }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(o_.TE, `group-spacing-${oL.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? o_.Rz : void 0,
                            children: [
                                (0, a.jsx)(oM.A, {
                                    message: n,
                                    channel: ol,
                                    author: (0, oS.FT)(n.author, ol),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(oE.A, { message: n, channel: ol }) : void 0,
                                    usernameClassName: r?.target === "user" ? o_.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: o_.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(oI.Ay, {
                                              children: [
                                                  (0, a.jsx)(oI.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: oN.n,
                                                      onClick: o$,
                                                  }),
                                                  (0, a.jsx)(oI.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: oC.W,
                                                      onClick: o$,
                                                  }),
                                                  (0, a.jsx)(oI.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: tk.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: o$,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? o_.ET : o_.je,
                                          inert: !0,
                                          children: (0, a.jsx)(oT, {
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
                className: o_.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(oA.k, { size: "sm", color: "currentColor" }),
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
var oO = n(332173);
function oq(e) {
    let { name: t } = e;
    return (0, a.jsxs)(oO.A, { children: ["/", t] });
}
function oz(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(sz());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(oq, { name: e.name }, e.start) : e.text));
}
n(827669);
var oF = n(757789),
    oU = n(26137);
let oG = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var oB = n(573634);
let oK = {
    frame: eD.GameControllerIcon,
    overlay_widget: oF.V,
    user_widget: oU.r,
    bot: eF.RobotIcon,
    commands: eF.RobotIcon,
    automod: ez.ShieldIcon,
};
function oH(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(oB.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function oV(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: oB.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: oB.jw,
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
function oW(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: oB.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(oB.Vo, oB.G),
                children: (0, a.jsx)(eO.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: oB.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function oX(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: oB.wZ,
        children: t.map((e, t) => {
            let n = sU(e),
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
                                ? (0, a.jsx)(oq, { name: e.name })
                                : (0, a.jsx)(oO.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function oZ(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: oB.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: oB.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(oz, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function oJ(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? eO.k : oK[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : oG[t.kind]);
    return (0, a.jsxs)("section", {
        className: oB.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: oB.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: oB.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: oB.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(oz, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(oZ, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: oB.PG, children: r }) : null,
        ],
    });
}
function oY(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: oB.aN,
        children: [
            (0, a.jsxs)("div", {
                className: oB.Lv,
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
                                let n = t.map(sz()).join("|");
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
                            (0, a.jsx)("div", { className: oB.yF, role: "separator" }),
                            (0, a.jsx)(oJ, {
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
                                                if (t.surfaces.includes(lZ.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(lZ.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(lZ.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        oH,
                                                        {
                                                            className: oB.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: oB.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        oW,
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
                                                            oH,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(oV, { labels: r }),
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
                                                              oH,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(oX, { commands: e.commands }),
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
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(sF) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            oH,
                                                            { caption: n, children: (0, a.jsx)(oV, { labels: l }) },
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
var oQ = n(633075),
    o0 = n(946356),
    o1 = n(58216),
    o2 = n(27399);
function o3(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([aQ.default], () => aQ.default.getCurrentUser()),
        r = i.useMemo(() => new oQ.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: o2.H,
              children: (0, a.jsx)(o0.A.Overlay, {
                  className: o2.w,
                  children: (0, a.jsx)(o1.A, {
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
var o4 = n(443863);
function o5(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        o =
            ((t = Math.min(1, 592 / i.width, 291.3333333333333 / i.height)),
            { width: sV(i.width * t, 640), height: sV(i.height * t, 339.3333333333333) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sI, { projectId: n }),
            (0, a.jsx)("div", {
                className: o4.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": sW,
                    "--custom-conjure-plan-overlay-widget-end": sX,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: o4.M7, onError: s }),
            }),
        ],
    });
}
function o6(e) {
    let { projectId: t, design: n, alt: l, overlayWidgetSize: r } = e,
        { id: s } = n,
        { src: o, gone: u, handleError: c } = (0, ib._)(t, s),
        d = i.useCallback(() => {
            (0, ea.PK)(t, s).then(
                (e) => {
                    (0, ij.R)({
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
              className: h()(o4.xX, { [o4.nj]: null != r }),
              style: null != r ? { "--custom-conjure-plan-overlay-scene-aspect": String(sH) } : void 0,
              onClick: d,
              "aria-label": E.intl.string(S.default.TvAPIm),
              children:
                  null == o
                      ? null
                      : null != r
                        ? (0, a.jsx)(o5, { projectId: t, src: o, alt: l, size: r, onError: c })
                        : (0, a.jsx)("img", { src: o, alt: l, className: o4.sN, onError: c }),
          });
}
function o7(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = s_(c, lZ.q7.APPLICATION_COMMANDS)),
            (l =
                s_(c, lZ.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(sL)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : sO(c, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = s3 } = t,
                r = (0, o.bG)([s0.default], () => s0.default.locale),
                a = (0, o.bG)([ew.Ay], () => {
                    let t = ew.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(s2);
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
                                                          ...s4(n),
                                                          ...(null != n.fallback ? { fallback: s4(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = sZ.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[sQ.m.WIDGET_TOP] || null == i[sQ.m.WIDGET_BOTTOM]
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
                                                                    type: sZ.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: sZ.oG.NUMBER, value: a })
                                                                : (r[e] = { type: sZ.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(s5),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: s1,
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
                        .filter((e) => "/" === sU(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = sK(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(sL)
                    ? sO({ ...c, bot: void 0 }, "commands", {
                          message: E.intl.string(S.default.J7qggf),
                          reply: E.intl.string(S.default.nqYtiy),
                          event: E.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([ew.Ay], () => ew.Ay.getProject(u)?.name, [u]),
        w =
            p && null != d
                ? E.intl.formatToPlainString(S.default.YZ3qJs, { version: d.version })
                : E.intl.string(S.default["3b6e7o"]),
        k = p ? (0, a.jsx)(aN, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(aC, {
        title: w,
        meta: k,
        superseded: p,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: o4.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: o4.Qs,
                children: (0, a.jsx)(oY, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(oz, { text: c.summary, commandNames: x }),
                            }),
                            "" !== g
                                ? (0, a.jsxs)("section", {
                                      className: o4.uW,
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
                                              children: (0, a.jsx)(oz, { text: g, commandNames: x }),
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
                                    ? (0, a.jsx)(o6, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: E.intl.string(null == (t = sK(c)) ? S.default["3/aHX6"] : sG[t]),
                                          overlayWidgetSize:
                                              c.design_image?.name === "overlay-design-v2.png"
                                                  ? lY(c.overlay_widget ?? null)
                                                  : null,
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(o3, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(ow, { automod: c.automod })
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
                                        (r = l.some((e) => "command" === e.kind || s$(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(oD, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: x,
                }),
            }),
            null == m || p
                ? null
                : (0, a.jsxs)("div", {
                      className: o4.qr,
                      children: [
                          (0, a.jsx)(eT.$, {
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
var o8 = n(289565);
function o9(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: o8.m, children: n })
        : (0, a.jsxs)("div", {
              className: o8.Z,
              children: [
                  n,
                  (0, a.jsx)(N.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tw.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: eX.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function ue(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function ut(e, t) {
    return null != e && ue(t, e.status);
}
let un = new WeakMap();
var ul = n(175841),
    ur = n(27232),
    ua = n(505930),
    ui = n(385081);
let us = "conjurePublishRatings",
    uo = [1, 2, 3, 4, 5],
    uu = { 1: S.default.GhbsGA, 2: S.default.cm0nwU, 3: S.default.kGvlh2, 4: S.default.dVBSUg, 5: S.default.DKlgF7 };
function uc(e) {
    return E.intl.string(uu[e]);
}
let ud = new Set(),
    um = 0;
function uf() {
    return U.w.get(us) ?? {};
}
function uh(e, t) {
    return uf()[e]?.[t] ?? null;
}
function up(e) {
    return (ud.add(e), () => ud.delete(e));
}
function ug(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, ui.Fz)(e, n);
                },
            };
        })(t),
        u = E.intl.string(S.default.IqkF07);
    return (0, a.jsx)(t$.a, {
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
        children: (0, a.jsx)(aU.f, {
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
var ux = n(54100);
function uv(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: ux.mo,
        role: "status",
        children: [
            (0, a.jsx)(ul.SparklesIcon, { size: "xs", color: "currentColor", className: ux.dQ, "aria-hidden": !0 }),
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
function uj(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: o } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(up, () => um),
                {
                    rating: uh(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != uh(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, ui.gw)(i);
                            let s = uf();
                            return (U.w.set(us, { ...s, [t]: { ...s[t], [n]: l } }), um++, ud.forEach((e) => e()), i);
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
        return (0, a.jsx)(uv, { rating: s });
    let b = null != s,
        y = b ? s : (d ?? u),
        w = b || (null == d && null != u);
    function k(e) {
        if (b) return;
        (c(e), m(null), p(!0));
        let t = o(e);
        null != t && (0, tO.openModal)((e) => (0, a.jsx)(ug, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: ux.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: ux.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: x,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: h()(ux.Pf, { [ux.KH]: null == y }),
                        children: E.intl.string(S.default.mTV326),
                    }),
                    uo.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: h()(ux.Pf, { [ux.KH]: y === e }),
                                children: uc(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": x,
                className: ux.uf,
                children: uo.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? ur.StarIcon : ua.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: ux.uK,
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
                                    className: ux.hF,
                                    "aria-label": E.intl.formatToPlainString(S.default.NU7Dex, {
                                        rating: e,
                                        label: uc(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: h()(ux.d4, { [ux.cO]: t, [ux.Ng]: t && w }),
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
function ub(e) {
    let { projectId: t, publish: n } = e,
        l = rN(t, n);
    return (0, a.jsx)(eT.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function uy(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, t_.Ay)(t);
    return null != r && ut(r, l)
        ? (0, a.jsx)(o9, {
              children: (0, a.jsxs)(tD.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(ub, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n ? (0, a.jsx)(uj, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var uw = n(303345),
    uk = n(44255),
    uN = n(416473),
    uC = n(289830);
function uA(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [ew.Ay],
                    () => {
                        let t = ew.Ay.getProject(e);
                        return null != t && (0, ew.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, uN.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof uw.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, uk.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, uk.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(aw, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: uC.r,
            children: [
                (0, a.jsxs)("div", {
                    className: uC.z,
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
                    ? (0, a.jsx)(eT.$, {
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
var uS = n(989271);
function uE(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(uS.nM, { [uS.f1]: s, [uS.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: uS.jo,
                children: [
                    n
                        ? (0, a.jsx)(nV.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: uS.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: uS.G9,
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
function uI(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(aw, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                uE,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var uM = n(530557),
    u_ = n(872162),
    uR = n(202723);
function uP(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tO.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: uM.R })), [r.fields]),
        d = (0, iU.bB)(l, s),
        m = h()(uR.Lo, { [uR.jY]: d });
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
                        (0, a.jsx)(u_.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: uR.Lo,
                      children: (0, a.jsx)(u_.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
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
                                className: uR.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: uR.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(nE.y, {
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
                    className: uR.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: E.intl.string(null != o ? S.default.O0QIqj : S.default.HCQvpO),
                        }),
                        (0, a.jsx)(iY.A, {
                            text: null != r.note && "" !== r.note ? r.note : E.intl.string(S.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(u_.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: uR.sq,
                            children: (0, a.jsx)(eT.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: E.intl.string(S.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var uT = n(919790),
    uL = n(908492),
    u$ = n(971824),
    uD = n(162052),
    uO = n(165648);
function uq(e) {
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
        x = i.useMemo(() => (0, af.Jf)(n, l), [n, l]),
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
            className: aP.pj,
            "data-live": !1,
            children: (0, a.jsx)(av.A, {
                glyph: (0, a.jsx)(i6.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, af.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let w = v.tasks,
        k = sr(w.map((e) => e.taskId)),
        N = !p && (l || w.some((e) => "running" === e.task.status)),
        C = sc(w);
    return (0, a.jsxs)("ol", {
        className: aP.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(ag.Ay, {
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
                let l = null != e.task.helperMark ? sl(e.task.helperMark) : void 0,
                    r = l ?? k.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          sd,
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
            (0, a.jsx)(sk, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: aP.YO,
                      children: (0, a.jsx)(a_, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function uz(e) {
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
            () => i7({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: T, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = P,
        O = (C ? A : void 0) ?? P.attachmentsHost,
        q = $ && !C,
        z = null == u ? null : (0, a.jsx)(uT.A, { projectId: t, attachments: u }),
        F = null == z ? null : (0, a.jsx)("div", { className: aP.MT, children: z }),
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
        className: aP.ue,
        children: [
            T.length > 0 && !C
                ? (0, a.jsx)("ol", {
                      className: aP.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: aP.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: uO.PT,
                                          children: (0, uL.U)(e.content, !0, {
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
                ? (0, a.jsx)(o7, { projectId: t, proposal: r, version: s, onApprove: w })
                : q
                  ? (0, a.jsxs)("div", {
                        className: h()(aP.ky, uD.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(uO.PT, aP.cW),
                                children: (0, uL.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === O ? F : null,
                            U,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(aP.ky, uD.XR, { [u$.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(uP, {
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
                      className: h()(aP.ky, uD.XR),
                      children: (0, a.jsx)(i1, { projectId: t, request: p, askId: g }),
                  })
                : null,
            "standalone" !== O && ("closing" !== O || q) ? null : z,
            null != x ? (0, a.jsx)(uy, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(uI, { ideas: o, pickedIdeaIds: y, onPick: b }) : null,
            null != I ? (0, a.jsx)(sC, { proposal: I, onRestore: M }) : null,
            null != _ ? (0, a.jsx)(uA, { projectId: t, proposal: _, current: R }) : null,
            q ? null : U,
        ],
    });
}
var uF = n(864970),
    uU = n(146806),
    uG = n(475358),
    uB = n(717400),
    uK = n(99677),
    uH = n(655098),
    uV = n(234320),
    uW = n(191023);
function uX(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(nl.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: lM.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(uW.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: lM.OY,
                    children: (0, a.jsx)(aV.PencilIcon, {
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
            className: na.o1,
            onClick: () => {
                lC(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": E.intl.string(S.default.N852dj),
            children: (0, a.jsx)(nn.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function uZ(e) {
    let { send: t } = e;
    return (0, a.jsxs)(nl.p, {
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
            "uploading" === t.status ? (0, a.jsx)(nt.y, { type: nt.t.SPINNING_CIRCLE_SIMPLE, className: na.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(aW.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: E.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var uJ = n(901173),
    uY = n(161431),
    uQ = n(280450),
    u0 = n(503275),
    u1 = n(659280),
    u2 = n(351906),
    u3 = n(407653),
    u4 = n(322915);
function u5(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([u2.A], () => u2.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      u1.Ay.User,
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
                      u1.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(u3.A, { projectId: n, file: e.file, className: u4.Vk }),
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
    return (0, a.jsx)(u1.Ay, {
        id: t,
        className: u4.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(u6, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                p.length > 0
                    ? (0, a.jsx)(u6, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: p })
                    : null,
            ],
        }),
    });
}
function u6(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: u4.Gf, children: n }),
            l,
        ],
    });
}
var u7 = n(719442),
    u8 = n(355622),
    u9 = n(408018),
    ce = n(186306),
    ct = n(323350),
    cn = n(35277),
    cl = n(820066),
    cr = n(683167),
    ca = n(267102),
    ci = n(259691);
let cs = (0, oe.createChannelRecord)({ id: "1", type: O.rbe.DM });
function co(e) {
    let t = cl.VW.end(e, []);
    return { anchor: t, focus: t };
}
function cu(e) {
    return (0, ct.WO)(cl.VW.richValue(e), { mode: "raw" });
}
function cc(e, t) {
    ((e.children = (0, u9.x7)(t)), (e.selection = co(e)), e.onChange());
}
function cd(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(i3.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(ci.A, { attachmentId: r }), n] });
}
var cm = n(497437);
let cf = "text-md/normal",
    ch = null;
function cp(e) {
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
                frontFrom: 1e3 * (0, uU._R)(m),
                frontTo: 1e3 * (0, uU._R)(h),
                backFrom: 1e3 * (0, uU.T)(m),
                backTo: 1e3 * (0, uU.T)(h),
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
        M = (0, o.bG)([eL.Ay], () => eL.Ay.useReducedMotion),
        _ = t === E.intl.string(S.default.Zc7gML),
        R = r === t && _;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(cm.VT, { [cm.qk]: l }),
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
            children: (0, a.jsx)(uG.e, { shortcut: "tab", className: cm.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(uF.o, {
                text: t,
                variant: cf,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: h()(cm.xM, { [cm.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            P(cm.IS, n || (!M && "out" === w), u),
            (0, a.jsx)("span", {
                ref: c,
                className: cm.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: cf, tag: "span", children: t }),
            }),
            R
                ? (0, a.jsxs)("span", {
                      className: cm.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: cf, tag: "span", className: cm.xM, children: t }),
                          P(cm.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let cg = i.memo(function (e) {
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
                let t = i.useContext(ca.Ay),
                    [n] = i.useState(() => {
                        let n = (0, u7.ie)();
                        return (
                            (n.children = (0, u9.x7)(e)),
                            (n.selection = co(n)),
                            (0, cr.a)({
                                editor: n,
                                chatInputType: u8.oU.GENERIC_RICH_TEXTAREA,
                                channel: cs,
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
                                    for (let [t, l] of cl.VW.nodes(e, { at: [], match: cl.l5.isText }))
                                        for (let e of t.text.matchAll(i3.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        ce.o.withMergedEntry(e, () =>
                                            cl.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    cn.b.textToVoid(
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
            [C, A] = i.useState(() => cu(k)),
            I = i.useRef(C),
            [M, _] = i.useState(null),
            P = i.useCallback(() => {
                let e = cu(k);
                (e !== I.current && ((I.current = e), V(t, e), A(e)),
                    _(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !cl.ZF.isCollapsed(t)) return null;
                            let [n] = cl.VW.node(e, t.anchor.path);
                            return cl.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(k),
                    ));
            }, [k, t]),
            T = i.useCallback((e) => cc(k, e), [k]),
            L = "" !== C.trim();
        i.useEffect(() => j?.(L), [L, j]);
        let $ = i.useRef(t);
        i.useLayoutEffect(() => {
            $.current !== t && (($.current = t), cc(k, en.getDraft(t)));
        }, [k, t]);
        let D = (0, o.bG)([eL.Ay], () => eL.Ay.isSubmitButtonEnabled),
            [q, z] = i.useState(!1);
        i.useEffect(() => {
            r || z(!1);
        }, [r]);
        let F = i.useRef(null),
            {
                drafts: U,
                addFiles: G,
                pasteFiles: B,
                removeDraft: K,
                settled: H,
                takeRefs: X,
            } = no({ projectId: t, surface: "chat", onUploadFile: d }),
            Z = lw.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && lj(n);
            }),
            J = "" !== C.trim() || U.length > 0 || v || Z,
            Y = w && J && H,
            [Q, ee] = i.useState(null);
        i.useEffect(() => {
            if (null == Q) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => ee(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [Q]);
        let et = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: c } =
                        ((t = (0, o.bG)([ew.Ay], () => ew.Ay.getProject(e), [e])),
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
                            null != l && ((0, u0.Y_)(l), r.forEach(u0.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([aQ.default], () => (null == l ? null : aQ.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [aQ.default],
                            () => r.map((e) => aQ.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([uQ.default], () => uQ.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            el = (0, uY.rU)(t),
            [er, ei] = i.useState(null),
            [es, eo] = i.useState(0),
            eu = i.useMemo(() => (null != M && w ? (0, uJ.OG)(M, M.length) : null), [M, w]),
            ec = eu?.start ?? null;
        i.useEffect(() => {
            null == ec ? ei(null) : (0, uY.IP)(t);
        }, [ec, t]);
        let ed = ec === er ? null : eu,
            em = i.useMemo(() => (null == ed ? [] : (0, uJ.l$)(et, el, ed.text)), [ed, et, el]),
            ef = ed?.text;
        i.useEffect(() => eo(0), [ef]);
        let eh = em.length > 0,
            ep = Math.min(es, Math.max(0, em.length - 1)),
            eg = i.useId(),
            ex = i.useCallback(
                (e) => {
                    let t = em[e];
                    null != ed &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (cn.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                cn.b.insertText(e, `${n} `));
                        })(k, ed.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [em, ed, k],
            ),
            ev = i.useCallback(() => {
                if (!Y) return;
                let e = X(),
                    n = Z
                        ? (function (e) {
                              let t = lN(e);
                              if (null == t || !lj(t)) return null;
                              let n = t.history.present,
                                  l = al(e);
                              return (
                                  lC(e, (e) => ({ ...e, history: lc, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, R.showUserMessage)(e, t, r),
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
                                                  (0, ea.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, ea.n6)(e, t.id),
                                              send: (n) => (0, R.sendUserMessage)(e, t, [...r, n], { nonce: a }),
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
                u(C, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == ch && (ch = document.createElement("canvas").getContext("2d"));
                    let i = ch;
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
                })(cv(eA.current), eO.current, (0, uJ.Lj)(C));
                ("" !== l && ee(l), T(""), ei(null));
            }, [Y, Z, t, C, u, X, T]),
            ej = i.useCallback(
                (e) => {
                    (e.preventDefault(), ev());
                },
                [ev],
            ),
            eb = i.useCallback(() => {
                null == c || q || (z(!0), c());
            }, [c, q]),
            ey = null == g || "" !== C || !w || s || v ? null : g,
            ek = i.useCallback(
                (e) => {
                    if (eh && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = em.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eo((ep + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ex(ep));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), ei(ed?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && r && null != c && !q) {
                        (e.preventDefault(), e.stopPropagation(), eb());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ey) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), T(ey));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != m && (e.preventDefault(), m());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ev());
                },
                [ev, m, r, c, q, eb, ey, T, eh, em.length, ep, ex, ed],
            ),
            eN = i.useCallback(
                (e) => {
                    w && B(e);
                },
                [w, B],
            );
        (0, uV.Vo)({
            event: O.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eN(t);
            },
        });
        let eC = i.useCallback(
                (e) => {
                    (G(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [G],
            ),
            eA = i.useRef(null),
            eS = i.useRef(null),
            eE = i.useCallback(() => {
                let e = I.current;
                p?.((0, uJ.Lj)(e), () => {
                    I.current === e && T("");
                });
            }, [p, T]),
            eI = i.useCallback((e) => {
                let t = F.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eM, e_] = i.useState(0),
            [eR, eP] = i.useState(!1);
        i.useEffect(() => {
            if (0 === C.length) return void eP(!1);
            let e = cv(eA.current);
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
            let t = setTimeout(() => eP(!1), cx);
            return () => clearTimeout(t);
        }, [C]);
        let eT = i.useMemo(() => ({ "--custom-glow-x": `${eM}px` }), [eM]),
            e$ = eR ? ` ${cm.EB}` : "",
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
            eG = null != ey,
            eB = Q ?? ey ?? eD,
            eK = "" === C && "" !== eB;
        return (0, a.jsxs)("form", {
            onSubmit: ej,
            className: cm.DA,
            children: [
                eh
                    ? (0, a.jsx)(u5, {
                          id: eg,
                          projectId: t,
                          suggestions: em,
                          selectedIndex: ep,
                          onHover: eo,
                          onSelect: ex,
                      })
                    : null,
                U.length > 0 || Z
                    ? (0, a.jsxs)("div", {
                          className: cm.lN,
                          children: [
                              U.map((e) => (0, a.jsx)(nu, { draft: e, onRemove: K }, e.localId)),
                              Z ? (0, a.jsx)(uX, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${cm.wg} ${cm.LP}${e$}`, style: eT, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${cm.wg} ${cm.L3}${e$}`, style: eT, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: cm.VA,
                    ref: eA,
                    children: [
                        (0, a.jsx)("input", {
                            ref: F,
                            type: "file",
                            multiple: !0,
                            onChange: eC,
                            className: cm.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(eZ.Y, {
                            targetElementRef: eS,
                            position: "top",
                            align: "left",
                            animation: eZ.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(eJ.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(eY.rX, {
                                        children: [
                                            ne.map((e) =>
                                                (0, a.jsx)(
                                                    eY.Dr,
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
                                                ? (0, a.jsx)(eY.Dr, {
                                                      id: "import-project",
                                                      label: E.intl.string(S.default["p/k5i7"]),
                                                      iconLeft: uB.q,
                                                      leadingAccessory: { type: "icon", icon: uB.q },
                                                      action: f,
                                                  })
                                                : null,
                                            null != p
                                                ? (0, a.jsx)(eY.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: uK.t,
                                                      leadingAccessory: { type: "icon", icon: uK.t },
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
                                    className: `${cm.Y0} ${cm.nu}`,
                                    disabled: !w,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": n,
                                    children: (0, a.jsx)(t4.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: cm.Qu,
                                    }),
                                });
                            },
                        }),
                        eK
                            ? (0, a.jsx)("div", {
                                  ref: ez,
                                  className: cm.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(cp, { text: eB, offering: eG && null == Q, typed: null != Q }),
                              })
                            : null,
                        (0, a.jsx)(ab.A, { id: eU, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(i3.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(uH.A, {
                                editor: k,
                                containerClassName: h()(cm.sq, nk.dv),
                                className: cm.jp,
                                readOnly: !w,
                                canFocus: w,
                                onChange: P,
                                onBlur: () => _(null),
                                onKeyDown: ek,
                                onPaste: eN,
                                renderExtraElement: cd,
                                "aria-labelledby": eU,
                                "aria-describedby": eK ? eF : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eh,
                                "aria-controls": eh ? eg : void 0,
                                "aria-activedescendant": eh ? ((0, u1.aI)(ep) ?? void 0) : void 0,
                            }),
                        }),
                        eK ? (0, a.jsx)(ab.A, { id: eF, children: eD }) : null,
                        (0, a.jsx)("div", {
                            className: cm.Sz,
                            children:
                                r && null != c
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${cm.Y0} ${cm.$E}`,
                                              disabled: q,
                                              onClick: eb,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(i6.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : b?.tierSettings != null && null != y
                                      ? (0, a.jsx)(ny, {
                                            settings: b.tierSettings,
                                            tiers: b.tiers,
                                            choices: b.choices,
                                            disabled: !w,
                                            onChange: y,
                                            className: `${cm.Y0} ${cm.$E}`,
                                            icon: (0, a.jsx)(t5.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        D
                            ? (0, a.jsxs)("div", {
                                  className: cm.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: cm.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: cm.rt,
                                          disabled: !Y,
                                          "aria-label": E.intl.string(S.default.rxW2cl),
                                          children: (0, a.jsx)(t6.SendMessageIcon, {
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
    cx = 1500;
function cv(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var cj = n(709753),
    cb = n(540338),
    cy = n(986109);
let cw = i.createContext(null);
function ck(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(cw),
        [d, m] = i.useState(() => eL.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: h()(cy.xk, { [cy.g5]: d, [cy.Qo]: s, [cy.q3]: o }),
        children: n,
    });
}
let cN = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    cC = new Map();
function cA(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function cS(e, t) {
    return null != e && e > 0 && e < t;
}
let cE = "ideas",
    cI = "live_behind",
    cM = "conjureTipDismissals",
    c_ = new Set(),
    cR = new Set(),
    cP = 0;
function cT() {
    let e = U.w.get(cM);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function cL(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return c_.has(((n = e.id), `${t}:${n}`));
        case "app":
            return cT().app[t]?.includes(e.id) === !0;
        case "forever":
            return cT().forever.includes(e.id);
    }
}
function c$(e) {
    return (cR.add(e), () => cR.delete(e));
}
let cD = [12e4, 6e4];
var cO = n(292771);
function cq(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([eL.Ay], () => eL.Ay.useReducedMotion),
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
            className: cO.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(cO.qd, e.leaving ? cO.dv : cO.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var cz = n(443865),
    cF = n(247171);
function cU(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(cF.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(cF.gutter, cF[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: cF.content, children: i }),
        ],
    });
}
var cG = n(716502);
function cB(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cU, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: cG.Nr,
        children: (0, a.jsxs)("section", {
            className: cG.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: cG.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tw.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eX.P,
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
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: cG.DD,
        children: t,
    });
}
function cH(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: cG.rf,
        children: t,
    });
}
function cV(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: cG.o1, children: t });
}
let cW = {
    ...cN,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(cB, {
            icon: cz.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(cK, { children: E.intl.string(S.default.OJlbhX) }),
                (0, a.jsx)(cH, { children: E.intl.string(S.default["3vJBni"]) }),
                (0, a.jsx)(cV, {
                    children: (0, a.jsx)(eT.$, {
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
var cX = n(830205);
function cZ(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cU, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: cX.aK,
        children: (0, a.jsxs)("div", {
            className: cX.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: cX.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: cX.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tw.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eX.P,
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
var cJ = n(95635);
function cY(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = rN(t, n);
    return (0, a.jsx)(cZ, {
        icon: cJ.UploadIcon,
        onDismiss: l,
        children: E.intl.format(S.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let cQ = [
    {
        id: cI,
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
                (null != t.publishCta && ut(n, t.publishCta)) ||
                cS(e.messagesSinceShown(cI), 10)
                ? null
                : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(cY, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    cW,
    {
        id: cE,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(cN) ||
                0 === e.messagesSinceShown(cN.id) ||
                cS(e.messagesSinceShown(cE), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(cZ, {
                icon: cz.LightbulbIcon,
                onDismiss: l,
                children: E.intl.format(S.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var c0 = n(817921);
function c1(e) {
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
                    ((s = (0, t_.Ay)(t)),
                    (u = (0, o.bG)([aQ.default], () => aQ.default.getCurrentUser()?.id)),
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
                        cD,
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
                        publishedSinceLastMessage: null != p && 0 === cA(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = cC.get(`${t}:${e}`);
                            return null != l ? cA(n, l, u) : null;
                        },
                        isDismissed: (e) => cL(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(c$, () => cP);
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
                })(e, g, (e) => cL(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== g.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                cC.set(`${e}:${t}`, n);
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
                                          if (!(null == e.dismissal || cL(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  c_.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = cT();
                                                  U.w.set(
                                                      cM,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (cP++, cR.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(cQ, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(ck, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: c0.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(cq, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var c2 = n(52133),
    c3 = n(732159),
    c4 = n(888366),
    c5 = n(862026),
    c6 = n(291192);
function c7(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, c5.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: c6.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: c6.Sp,
                children: [
                    (0, a.jsx)("span", { className: c6.q3 }),
                    (0, a.jsxs)("span", {
                        className: c6.g8,
                        children: [
                            (0, a.jsx)(c4.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: c6.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: c6.nM,
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
                                          (0, a.jsx)(aW.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tO.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(c3.u, {
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
function c8(e) {
    return (0, o.bG)([ew.Ay, tG.A], () => {
        let t = ew.Ay.getProject(e);
        return null == t ? "" : (tG.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var c9 = n(951465),
    de = n(369455);
function dt(e) {
    let { projectId: t, notice: n } = e,
        l = c8(t),
        r = (0, o.bG)([ew.Ay, d.A], () => {
            let e = ew.Ay.getProject(t);
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
            n.update && null != n.published_revision ? (0, a.jsx)(dn, { projectId: t, notice: n }) : null,
        ],
    });
}
function dn(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(t_.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [rp.A, ew.Ay],
                    () => {
                        let r = rp.A.getPublishStatus(e),
                            a = ew.Ay.getProject(e);
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
                                (0, ew.jf)(a),
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
                                        className: de.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, u.pX)(O.BVt.CHANNEL(t, n, l));
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
                                        r = ew.Ay.getProject(e),
                                        a = null == r ? null : (0, t_.KL)(r, l);
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
                                null != e && (0, c9.A)(e);
                            },
                        }),
              ],
          });
}
var dl = n(940874),
    dr = n(505527),
    da = n(930390),
    di = n(521981),
    ds = n(491182),
    du = n(438729),
    dc = n(622868),
    dd = n(448368),
    dm = n(837528),
    df = n(470964),
    dh = n(715628),
    dp = n(752636),
    dg = n(9842),
    dx = n(589022),
    dv = n(994500),
    dj = n(967198);
let db = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function dy(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function dw(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function dk(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = dw(e, t),
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
    if (dy(r) && dy(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && dy(dw(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function dN(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([eL.Ay], () => eL.Ay.useReducedMotion),
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
                      for (; a > 0 && dk(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && db.has(e.charAt(l - 1));) l--;
                                    return db.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && dk(t, o);) o++;
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
var dC = n(624479),
    dA = n(890377),
    dS = n(180227);
function dE(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(dS.QE, { [dS.Rn]: t }),
              children: (0, a.jsx)(oI.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          oI.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function dI(e) {
    return tA.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: dC.CopyIcon, onClick: () => (0, tA.C)(e) }]
        : [];
}
function dM(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: dA.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: eX.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(dE, { groupStart: n, actions: [...r, ...dI(t)] });
}
function d_(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: rD.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: tv.BugIcon, onClick: r }];
    return (0, a.jsx)(dE, { groupStart: n, actions: [...i, ...dI(t), ...s] });
}
let dR = (0, oe.createChannelRecord)({ id: "conjure-builder", type: O.rbe.DM }),
    dP = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function dT(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(dS.Yq, { [dS.x1]: t }), children: e });
}
function dL(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let d$ = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function dD(e, t, n) {
    let { content: l } = (0, df.A)(e, d$),
        r = i.useMemo(() => ((0, i3.aW)(e.content) ? (0, di.z2)(uL.U, e, d$).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: dR, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(du.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, dh.A)(s, r);
}
function dO(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, dm.m)(e, dR, t.usernameProfile, l),
        u = (0, dm.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([dj.A], () => dj.A.getGuildId()),
        d = (0, o.bG)([aQ.default], () => aQ.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = aQ.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(dx.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function dq(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, i3.aW)(n.content)
                          ? (0, di.z2)(uL.U, n, e).content
                          : (0, di.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: dS.GV,
                              children: [
                                  (0, a.jsx)(nW.x, {
                                      className: dS.Rj,
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
            [dv.A],
            () => ({
                isReplyAuthorBlocked: dv.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: dv.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, oS.X4)(n),
        m = (0, oS.X4)(t),
        f = dO(n);
    return (0, a.jsx)(dd.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: dR,
        referencedMessage: { state: dg.a.LOADED, message: n },
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
function dz(e) {
    let { message: t, author: n } = e,
        l = dO(t);
    return (0, a.jsx)(dc.Ay, {
        message: t,
        channel: dR,
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
function dF(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, u0.vm)(l),
        c = i.useMemo(() => (0, oS.FT)(u, null), [u]),
        d = i.useMemo(() => n7(t), [t]),
        m = d?.body ?? t,
        f = (0, uJ.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, s9.Ay)({ channelId: dR.id, content: m, author: u });
            return (0, s8.rh)({ ...e, timestamp: dL(n, e.timestamp), state: O.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              dU,
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
function dU(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = dD(t, l);
    return (0, a.jsx)(ds.A, {
        className: dS.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(dz, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: dS.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: dS.GV,
                              children: [
                                  (0, a.jsx)(nW.x, {
                                      className: dS.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: dS.WO, children: u }),
                      ],
                  }),
        childrenAccessories: dT(i, "" !== l),
        childrenButtons: (0, a.jsx)(dM, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function dG(e) {
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
        { text: m, revealing: f } = dN(t, { streaming: (0, o.bG)([t7.A], () => c && t7.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, oS.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, u0.vm)(g),
        v = i.useMemo(() => (null == r ? null : n7(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, s9.Ay)({ channelId: dR.id, content: v?.body ?? r.content, author: x });
            return (0, s8.rh)({ ...e, id: r.id, timestamp: dL(r.createdAt, e.timestamp), state: O.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: dR.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, s9.Ay)({ channelId: dR.id, content: "", author: dP })),
        w = i.useMemo(
            () =>
                (0, s8.rh)({
                    ...y,
                    timestamp: dL(n, y.timestamp),
                    state: O.cmJ.SENT,
                    ...(null != b ? { type: O.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        k = i.useMemo(() => w.set("content", m), [w, m]),
        N = i.useMemo(
            () => (0, dp.A)({ message: w, channel: dR, author: p, guildId: void 0, isGroupStart: u }),
            [w, p, u],
        ),
        C = dD(k, m, dS.OS);
    return (0, a.jsxs)("div", {
        className: dS.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(ds.A, {
                className: dS.yE,
                author: p,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(dq, { baseMessage: w, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: dT(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u ? (0, a.jsx)("img", { className: dS.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var dB = n(981879);
function dK(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, s8.rh)(
                    { ...(0, s9.Ay)({ channelId: dR.id, content: "" }), id: `conjure:${t}`, state: O.cmJ.SENT },
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
                    channelId: dR.id,
                    messageId: l.id,
                    users: [dP],
                    emoji: e,
                    reactionType: dr.v.NORMAL,
                }),
                    K.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: dR.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: dr.v.NORMAL,
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
            className: dB.H,
            children: (0, a.jsx)(da.A, {
                message: l,
                channel: dR,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var dH = n(616e3),
    dV = n(155899);
function dW(e) {
    let { onSelect: t, onClose: n = to.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(eJ.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eY.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eY.Dr, {
                          id: "restore-version",
                          label: E.intl.string(S.default.H8Jfhu),
                          icon: rD.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eY.Dr, { id: "view-trace", label: "View Trace", icon: tv.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function dX(e) {
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
        j = null != v && null != g ? () => dZ(v, g) : void 0,
        b =
            ((t =
                lK() && "assistant" === x.role && (0, ah.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [dH.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : dH.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((lU = { projectId: e, traceId: t }), [...lF])) n(e);
                      })(l, b)
                : void 0,
        w = x.in_reply_to,
        k = x.restoreProposal;
    return (0, a.jsx)(ck, {
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
                          void (0, to.jA)(t, (e) => (0, a.jsx)(dW, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(dG, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(d_, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != i ? () => i(w) : void 0,
            accessories: (0, a.jsx)(uz, {
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
                turnId: (0, ah.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: p,
                restoreProposal: k,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != k && null != g && f
                        ? () =>
                              dZ(
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
function dZ(e, t) {
    (0, dV.F)({ onConfirm: () => t(e) });
}
var dJ = n(288539);
function dY(e, t, n) {
    return (0, a.jsx)(dJ.A, { userId: e, content: `@${t}` }, n);
}
function dQ(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, u0.Y_)(l);
            }, [l]);
            let r = (0, o.bG)([aQ.default], () => (null == l ? null : aQ.default.getUser(l)), [l]),
                a = (0, on.tx)(r),
                s = c8(e),
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
        })(n, l, dY),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([tR.A], () => null != t && t.length > 0 && iB({ keys: t }, tR.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(i1, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let d0 = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    ae.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, i3.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(ck, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dF, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(uT.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(uZ, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(dK, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, dl.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(ck, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dG, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(uT.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(ck, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uq, {
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
                    return (0, a.jsx)(ck, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dG, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(dt, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(ck, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dG, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(dQ, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(ck, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(c7, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(ck, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uq, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(ck, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uq, {
                            projectId: l,
                            steps: d1,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(dX, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, c2.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, c2.A)(e.row, t.row, ["message"]) &&
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
                (0, c2.A)(e.replyTo, t.replyTo) &&
                (0, c2.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    d1 = [],
    d2 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    d3 = new WeakMap();
function d4(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function d5(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let d6 = i.memo(function (e) {
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
    let _ = i.useCallback((e) => {
            (I(e), window.clearTimeout(M.current), (M.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        P = (0, o.bG)([rp.A], () => rp.A.getPublishStatus(t)),
        T = (0, o.bG)([aQ.default], () => aQ.default.getCurrentUser()?.id),
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
                        i = d3.get(r);
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
                            i = i7({
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
                            if (null != n.prose && d2.test(n.prose.content)) m = !0;
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
                        let f = d2.test(e.content ?? "");
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
                    (d3.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return ue(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = un.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), un.set(t, n)), n);
                      })),
                m,
            );
        }, [n, P, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, O] = i.useState(null),
        q = (function (e, t, n) {
            if (null == t) return d4(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : d5(e, t.endKey, t.end - 1) + 1,
                a = d5(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), d4(e, a, r));
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
                    return ((n = Math.min(e.length, t.end + 30)), d4(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), d4(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? d4(e, i, t.end) : null;
            })(F.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: g.current,
            });
            "older" === n ? (0, R.loadOlderHistory)(t) : null != n && O(n);
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
                    (j(), O(z.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), _(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, R.loadOlderHistory)(t) && (W.current = e);
                    return;
                }
                (j(),
                    (B.current = () => {
                        (w.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            _(e));
                    }),
                    O(((n = F.current), d4(n, (l = Math.max(0, a - 30)), l + 60))));
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
                            if (!(0, ah.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, ah.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([tR.A], () => tR.A.getSettings(t)?.secrets, [t]),
        er = (0, cj.WT)(t),
        ea = i.useMemo(() => (0, iU.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(cy.x7, cy.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: cy.Ub, children: (0, a.jsx)(nt.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: cy.x7,
            children: (0, a.jsx)(ck, { role: "assistant", children: (0, a.jsx)(dG, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(cw.Provider, {
        value: K,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: cy.x7,
            children: [
                L.slice(q.start, q.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            d0,
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
                        d0,
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
                              ck,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(dG, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(cb.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && Z
                    ? (0, a.jsx)(ck, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(dG, {
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
                Z ? (0, a.jsx)(c1, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var d7 = n(731084),
    d8 = n(823376),
    d9 = n(187447);
function me(e) {
    let { activity: t, id: n } = e,
        l = (0, am.j)(),
        { text: r, revealing: s } = dN(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: d9.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(ac.Ch, {
                ref: o,
                className: d9.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(uO.PT, d9.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: oo.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var mt = n(53659);
function mn(e) {
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
        b = (0, d7.xu)({
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
        w = b === d7.kx["0"],
        [k, N] = i.useState(m ?? y),
        A = (0, am.j)();
    (l || (0, d7.E4)(y, k) || (!A && !w)) && k !== y && N(y);
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
        ((R.current = w), !w && (0, d7.E8)(_.current) && N(I.current));
    }, [w]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                R.current
                    ? ((P.current = (0, d7.E8)(_.current) ? P.current + 1 : 0), N((0, d7.Ov)(P.current)))
                    : I.current !== _.current
                      ? N(I.current)
                      : M.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, d7.FZ)),
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
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: p,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: O,
        renderPopout: () => (0, a.jsx)(me, { id: g, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: p,
                className: h()(mt.hF, T && mt.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : w
                            ? d7.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? g : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: mt.bl,
                        children: (0, a.jsx)(d8.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: mt.xu,
                        "aria-hidden": !!u || !!w || void 0,
                        children: A
                            ? (0, a.jsx)(uF.o, {
                                  ref: M,
                                  text: k,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: d7.vg,
                                  delay: null,
                                  className: mt.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: mt.yE,
                                  children: k,
                              }),
                    }),
                ],
            }),
    });
}
let ml = { second: 1e3, minute: 6e4 };
function mr(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = ml[t];
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
var ma = n(719374);
function mi(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = mr(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: ma.$,
        "data-conjure-turn-timer": !0,
        children: (0, sa.C7)(l),
    });
}
function ms(e) {
    let { startedAt: t } = e,
        n = mr(t, "minute");
    return (0, a.jsx)(ab.A, { role: "timer", children: (0, sa.Us)(n) });
}
var mo = n(885574),
    mu = n(242779),
    mc = n(436804);
function md(e) {
    return e.toLocaleString();
}
function mm(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: mc.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: mc.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [md((0, mu.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    md(n.input_tokens),
                    " in \xb7 ",
                    md(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${md(n.cache_creation_input_tokens)} cache write \xb7 ${md(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function mf(e) {
    let { project: t } = e,
        n = (0, mu.wU)(t.compaction),
        l = (0, mu.wU)(t.classifier),
        r = (0, mu.wV)(t.orchestrator, t.codegen),
        i = (0, mu.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: mc.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: mc.Q$,
                children: (0, a.jsxs)("div", {
                    className: mc.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [md((0, mu.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(mm, { label: E.intl.string(S.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(mm, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(mm, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: mc.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, mu.sj)(i) ? "\u2014" : `${Math.round(100 * (0, mu.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function mh(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(mf, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: mc.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(mo.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var mp = n(997421);
function mg(e) {
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
        p = (0, lL.Zv)(t),
        g = (0, o.bG)([rp.A], () => rp.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, d7.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, d7.uc)(f),
        w = null != s,
        k = s ?? (n ? l : void 0),
        N = n || r || w || !0 === m;
    return (0, a.jsxs)("div", {
        className: mp.jf,
        children: [
            (0, a.jsxs)("div", {
                className: mp.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || p || g
                        ? (0, a.jsx)(mn, {
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
                    null != k ? (0, a.jsx)(mi, { startedAt: k }) : null,
                ],
            }),
            null != k ? (0, a.jsx)(ms, { startedAt: k }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: mp.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(mh, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, d7.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: mp.XF,
                      children: (0, d7.Db)(h),
                  }),
        ],
    });
}
let mx = ["wheel", "touchstart", "pointerdown", "keydown"];
var mv = n(608711);
let mj = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function mb(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        c,
        { projectId: m, restoreState: f, onRestoreVersion: h, onImportProject: p } = e,
        g = (0, o.bG)([W.A], () => W.A.getMessages(m), [m]),
        x = (0, o.bG)([R.default], () => R.default.getConnState(m), [m]),
        b = (0, o.bG)([W.A], () => W.A.getProjectUsage(m), [m]),
        y = (0, o.bG)([W.A], () => W.A.getThinkingActivity(m), [m]),
        w = (0, o.bG)([W.A], () => W.A.isCompacting(m), [m]),
        k = (0, o.bG)([W.A], () => W.A.isSaving(m), [m]),
        C = i$(m),
        A = (0, o.bG)([iR.A], () => iR.A.getModelSettings(m), [m]),
        I = i.useRef(null),
        M = i.useRef(null),
        _ = i.useRef(null),
        {
            stickToBottomRef: P,
            pinned: T,
            atBottom: L,
            unpin: $,
            releasePinHold: D,
            showsLatest: O,
            showsLatestRef: q,
            handleShowsLatestChange: z,
            updatePin: F,
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
                    for (let e of mx) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of mx) t.removeEventListener(e, u);
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
        G = i.useCallback(() => {
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
            (D(), q.current ? e() : _.current?.showLatest(e));
        }, [D, q]),
        B = i.useCallback(() => {
            (F(), _.current?.handleScroll());
        }, [F]);
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
                r && (P.current ? M.current?.scrollToBottom() : _.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [P]),
        i.useEffect(() => {
            (0, R.ensureConnection)(m);
        }, [m]),
        (0, i4.E1)(m, (0, am.j)()));
    let K = lu(m),
        H = (function (e) {
            let t = (0, t_.Ay)(e),
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
        V =
            ((l = (0, o.bG)([iT.A], () => iT.A.getFailure(m))),
            (r = i.useCallback(() => (0, iL.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: l }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: r },
                  }),
        X = (0, o.bG)([iT.A], () => iT.A.getSetupStartedAt(m), [m]),
        Z = i.useCallback(
            (e, t) => {
                (0, R.sendUserMessage)(m, e, t);
            },
            [m],
        ),
        J = i.useCallback(
            (e, t, n) => {
                let l = n ?? Z;
                0 === K.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => n1(e.comment)),
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
                                      a.push(`${t + 1}. ${n4(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: K.annotations, metaComment: e, context: K.context }),
                          t,
                      ),
                      la(m));
            },
            [K, Z, m],
        ),
        Y = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of r9)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, R.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = r9.get(e);
                            (r9.delete(e), at(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                W.A.isThinking(m)) &&
                (0, R.interruptTurn)(m);
        }, [m]),
        Q = i.useCallback((e) => eb(m, e.implementation_prompt), [m]),
        [ee, et] = (function (e) {
            let [t, n] = i.useState(() => i5(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? i5(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(m),
        en = i.useCallback(() => Z(E.intl.string(S.default["t5CN3+"])), [Z]),
        el = i.useCallback((e, t, n) => eb(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        er = i.useCallback((e) => (0, iP.X)(m, e), [m]),
        ei = i.useCallback((e) => (0, ea.vX)(m, e), [m]),
        es = i.useCallback((e) => ns(m, "chat", Array.from(e), ei), [m, ei]),
        eo = i.useCallback(() => eb(m, E.intl.string(S.default.Zc7gML)), [m]),
        eu = f?.status === "restoring",
        ec = "open" === x && !eu,
        ed = g[g.length - 1],
        em = null != ed && "assistant" === ed.role && null != ed.proposal,
        [ef, eh] = i.useState(null),
        ep = ed?.clarification != null && ed.clarification.id !== ef ? ed.clarification : null,
        eg = i.useCallback(() => {
            null != ep && eh(ep.id);
        }, [ep]),
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
        ey = ed?.appBuildRequest != null && (0, ah.BL)(ed) && ed.appBuildRequest.id !== ex ? ed.appBuildRequest : null,
        eN = ej.request ?? (null == ep ? ey : null),
        eA = null == ej.request ? ep : null,
        eM = null != eN && eN === ej.request,
        { close: e_, sent: eR } = ej,
        eP = ej.request?.id,
        eL = i.useCallback(() => {
            eM ? e_() : null != eN && ev(eN.id);
        }, [eN, eM, e_]),
        e$ = i.useCallback(
            (e) => {
                (null != eP && eR(eP),
                    (0, eW.P0)({
                        text: E.intl.formatToPlainString(S.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eP, eR],
        ),
        eD = (0, o.bG)([tR.A], () => tR.A.getSettings(m), [m]),
        [eO, eq] = i.useState(null),
        ez = iX(),
        eF =
            null != ed &&
            ((t = ed.id),
            (s = (0, iU.Mv)(g, eD?.secrets)),
            (u = iZ(g)),
            g.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, ah.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !iJ(e.settingsRequest, eD, ez.has(e.id)))),
            )),
        eU =
            null != ed &&
            "assistant" === ed.role &&
            null != ed.settingsRequest &&
            null == ed.secretRequest &&
            (0, ah.BL)(ed) &&
            ed.id !== eO &&
            ((n = ed.settingsRequest),
            (c = n.keys ?? []),
            null != eD &&
                0 !== c.length &&
                c.every((e) => {
                    let t = eD.schema.find((t) => t.key === e);
                    return null != t && iG.has(t.type);
                })) &&
            iB(ed.settingsRequest, eD) &&
            !eF
                ? ed
                : null,
        eB = null == ej.request ? eU : null,
        eK = eB?.settingsRequest ?? null,
        eH = i.useCallback(() => {
            null != eU && eq(eU.id);
        }, [eU]),
        eV = null != eK,
        [eZ, eJ] = i.useState(null),
        eY = eA?.id ?? eN?.id ?? eB?.id ?? (C ? "scope-setup" : void 0),
        eQ = null != ep || null != eN || null != eU || C;
    i.useLayoutEffect(() => {
        let e = M.current?.getScrollerNode(),
            t = eZ?.firstElementChild;
        if (null == eZ || null == e || !(0, eG.vq)(t, HTMLElement) || null == eY) return;
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
        e1 = (function (e) {
            let t = i$(e),
                n = (0, o.bG)([ew.Ay], () => null != ew.Ay.getProject(e), [e]),
                l = (0, o.bG)([W.A], () => W.A.hasLoadedHistory(e), [e]),
                r = (0, o.bG)([W.A], () => W.A.getMessages(e), [e]),
                a = (0, o.bG)([R.default], () => R.default.getConnState(e), [e]),
                [s, u] = i.useState(0);
            return (
                i.useLayoutEffect(() => {
                    !(function (e, t) {
                        let n = eS()[e],
                            l = ew.Ay.getProject(e);
                        if (null == n || null == l || !W.A.hasLoadedHistory(e)) return;
                        let r = W.A.getMessages(e),
                            a = (0, R.optimisticMessageId)(n.nonce);
                        if (!0 === n.sent) {
                            let i = r.some(
                                    (e) => "user" === e.role && !0 !== e.held && e.id !== a && e.content === n.message,
                                ),
                                s = W.A.getHistoryLoads(e) > (eC.get(e) ?? 0);
                            i
                                ? eE(e)
                                : !s ||
                                  null != l.install_scope_setup ||
                                  W.A.isHistoryUnavailable(e) ||
                                  W.A.isThinking(e) ||
                                  eI(e, n, t);
                            return;
                        }
                        if (null != l.install_scope_setup) {
                            r.some((e) => e.id === a) ||
                                (0, R.showUserMessage)(e, n.message, n.attachments, { held: !0, nonce: n.nonce });
                            return;
                        }
                        "open" === R.default.getConnState(e) &&
                            (U.w.set(ek, { ...eS(), [e]: { ...n, sent: !0 } }),
                            eC.set(e, W.A.getHistoryLoads(e)),
                            (0, R.sendUserMessage)(e, n.message, n.attachments, { nonce: n.nonce }) || eI(e, n, t));
                    })(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, a]),
                s
            );
        })(m),
        e2 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: e0,
            historyUnavailable: (0, o.bG)([W.A], () => W.A.isHistoryUnavailable(m), [m]),
            connState: x,
        }),
        e3 = "loading" === e2 && 0 === g.length,
        e4 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return mj[e % mj.length];
        }, [m]),
        e5 = em ? E.intl.string(S.default.Zc7gML) : "greeting" === e2 && 0 === g.length ? e4 : null,
        e6 = i.useMemo(() => {
            for (let e = g.length - 1; e >= 0; e--) {
                let t = g[e];
                if ("assistant" === t.role && !(0, ah.BL)(t)) return t;
            }
        }, [g]),
        e7 = null != e6,
        e8 =
            null != e6
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = i2.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(e6)
                : void 0,
        e9 = em && ec ? eo : void 0,
        te = i.useCallback(() => eb(m, E.intl.string(S.default.EMgIuY)), [m]),
        [tt, tn] = i.useState(null),
        [tl, tr] = i.useState(e7);
    (tl !== e7 && (tr(e7), e7 || tn(null)),
        i.useEffect(() => {
            if (!e7) return;
            let e = M.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? tn(null)
                        : tn(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [e7, e6?.steps, O]));
    let ta = O ? tt : "bottom",
        ti = i.useMemo(() => (null != e6 ? (0, ag.b9)(e6.steps) : ""), [e6]),
        ts = i.useMemo(() => (null != e6 ? ((0, af.lt)(e6.steps) ?? e6.todos) : void 0), [e6]),
        to = e6?.provisionalTodo,
        tu = null != e6 && ap(e6),
        tc = i.useMemo(() => {
            var e;
            return null != e6 ? ((e = e6.steps), sc((0, af.Jf)(e, !0).tasks)) : void 0;
        }, [e6]);
    return (0, a.jsxs)("section", {
        ref: I,
        "data-conjure-chat": !0,
        className: mv.TE,
        children: [
            ec
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: nU.ir,
                      onDrop: es,
                  })
                : null,
            (0, a.jsx)(aL, {
                onJumpToActivity: G,
                line: ti,
                placement: e7 && "top" === ta ? "top" : null,
                todos: ts,
                todosLive: tu,
                provisionalTodo: to,
                agents: tc,
            }),
            (0, a.jsxs)("div", {
                className: mv.JX,
                children: [
                    (0, a.jsx)(ac.Ch, {
                        ref: M,
                        onScroll: B,
                        scrollbarGutter: e3 ? "both-edges" : "stable",
                        className: [mv.N$, L ? null : mv.hB, eV ? mv.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(i3.Fu.Provider, {
                            value: m,
                            children: (0, a.jsx)(d6, {
                                projectId: m,
                                messages: g,
                                emptyState: e2,
                                floatingSettingsMessageId: eU?.id,
                                liveClarificationId: eA?.id,
                                onPickIdea: ec ? Q : void 0,
                                onAskForIdeas: ec ? en : void 0,
                                draftHasText: ee,
                                onApprovePlan: ec ? te : void 0,
                                onRestoreVersion: eu || e7 ? void 0 : h,
                                scrollerRef: M,
                                stickToBottomRef: P,
                                pinned: T,
                                onUnpin: $,
                                handleRef: _,
                                onShowsLatestChange: z,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: mv.NJ,
                        children: (0, a.jsx)(mg, {
                            projectId: m,
                            thinking: e7,
                            turnStartedAt: e8,
                            restoring: eu,
                            remixStartedAt: X,
                            recalling: e3,
                            thinkingActivity: y,
                            compacting: w,
                            saving: k,
                            projectUsage: b,
                            connState: x,
                        }),
                    }),
                    C
                        ? (0, a.jsx)("div", { ref: eJ, className: mv.B5, children: (0, a.jsx)(iz, { projectId: m }) })
                        : null,
                    null == eA
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eJ,
                              className: eV ? `${mv.B5} ${mv.J9}` : mv.B5,
                              children:
                                  null != eA.install_scope_switch
                                      ? (0, a.jsx)(
                                            iF,
                                            {
                                                projectId: m,
                                                clarification: eA,
                                                offer: eA.install_scope_switch,
                                                onKept: eg,
                                            },
                                            eA.id,
                                        )
                                      : (0, a.jsx)(
                                            i_,
                                            {
                                                projectId: m,
                                                clarification: eA,
                                                onSubmit: ec ? el : void 0,
                                                onDismiss: eg,
                                            },
                                            eA.id,
                                        ),
                          }),
                    null == eN
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eJ,
                              className: mv.B5,
                              children: (0, a.jsx)(
                                  aK,
                                  { projectId: m, request: eN, canSend: ec, onDismiss: eL, onSent: eM ? e$ : void 0 },
                                  eN.id,
                              ),
                          }),
                    null == eK
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eA && null == eN ? eJ : void 0,
                              className: mv.B5,
                              children: (0, a.jsx)(
                                  i1,
                                  { askId: eB?.id, projectId: m, request: eK, onDismiss: eH },
                                  eB?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mv.Jx,
                children: [
                    (0, a.jsx)(aL, {
                        onJumpToActivity: G,
                        line: ti,
                        placement: e7 && "bottom" === ta ? "bottom" : null,
                        todos: ts,
                        todosLive: tu,
                        provisionalTodo: to,
                        agents: tc,
                    }),
                    0 === K.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mv.g0,
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
                                  (0, a.jsx)(eT.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(S.default["/zOv9+"]),
                                      onClick: () => la(m),
                                  }),
                              ],
                          }),
                    null == V
                        ? null
                        : (0, a.jsx)("div", {
                              className: mv.qB,
                              children: (0, a.jsx)(ad.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: V.message,
                                  action: V.retry,
                              }),
                          }),
                    null == H
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mv.Db,
                              children: [
                                  (0, a.jsx)(ad.w, { type: "warning", role: "status", message: H.message }),
                                  (0, a.jsx)("div", {
                                      className: mv.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tw.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: eX.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: H.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(
                        cg,
                        {
                            projectId: m,
                            canSend: ec,
                            running: e7,
                            restoring: eu,
                            onSend: J,
                            hasPendingContext: K.annotations.length > 0,
                            onInterrupt: ec ? Y : void 0,
                            onUploadFile: ei,
                            onImport: p,
                            onSendToOtherProjects: eQ ? void 0 : ej.open,
                            onApprove: e9,
                            suggestion: e5,
                            questionOpen: eQ,
                            modelSettings: A,
                            onModelSettingsChange: er,
                            onDraftHasTextChange: et,
                            inputLocked: C,
                        },
                        e1,
                    ),
                ],
            }),
        ],
    });
}
var my = n(761508),
    mw = n(933294),
    mk = n(207438),
    mN = n(683438);
function mC(e, t) {
    return String(e).padStart(t, "0");
}
function mA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${mC(l.getHours(), 2)}:${mC(l.getMinutes(), 2)}:${mC(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${mC(l.getMilliseconds(), 3)}` : r;
}
var mS = n(667931);
let mE = {
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
    mI = { running: "Running", ok: "Done", error: "Failed" };
function mM(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function m_(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function mR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function mP(e) {
    return m_(e.count > 1 ? e.totalMs : e.end - e.start);
}
let mT = ["Arguments", "Result", "Usage", "Details"];
function mL(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function m$(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function mD(e) {
    let t = (0, mS.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, mS.lp)(e) ? "interrupted" : "still running";
}
function mO(e) {
    return [mA(new Date(e.started_at).toISOString()) ?? "", mR(e.spans.length), (0, mS.Sj)((0, mS.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function mq(e) {
    let t = (0, mS.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, mS.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += mz(r, "in")),
                (l.output += mz(r, "out")),
                (l.cacheRead += mz(r, "cache_read")),
                (l.cacheWrite += mz(r, "cache_write")),
                (l.costUsd += mz(r, "cost_usd"))));
    }
    let r = mS.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function mz(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var mF = n(738188),
    mU = n(430993),
    mG = n(364840),
    mB = n(224640),
    mK = n(20742);
let mH = { collapsed: new Set(), revealed: new Set() };
var mV = n(872892);
let mW = {
    op: mV.Q,
    model: mV.i3,
    tool: mV.dH,
    setup: mV.kc,
    worktree: mV.Qx,
    sandbox: mV.QH,
    build: mV.F1,
    platform: mV.Op,
    other: mV.fv,
};
function mX(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      mR(t.calls, "model call"),
                      `${mM(t.input)} in`,
                      `${mM(t.output)} out`,
                      `${mM(t.cacheRead)} cache read`,
                      `${mM(t.cacheWrite)} cache write`,
                      m$(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: mV.M1,
        children: [
            (0, a.jsx)("div", {
                className: mV.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${mV.DJ} ${mW[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: mV.o1,
                children: mS.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${m_(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: mV.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${mV.nf} ${mW[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: mE[e] }),
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
function mZ(e) {
    return `conjure-perf-trace-${e}`;
}
function mJ(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: mV.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${mV.p0} ${s + o > 85 ? mV.EU : mV.jh}`,
                children: i,
            }),
        ],
    });
}
function mY(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? nd._ : rl.a,
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
        id: mZ(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${mV.$y} ${r ? mV.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: mV.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: mV.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: mV.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: mV.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${mV.nf} ${mW[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: mV.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: mV.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: mV.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(mF.WarningIcon, { size: "xs", color: "currentColor", className: mV.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(mJ, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${mV.M0} ${mV.Nh}`
                    : t.running
                      ? `${mV.M0} ${mV.rF}`
                      : `${mV.M0} ${mW[t.category]}`,
                duration: mP(t),
            }),
        ],
    });
}
function mQ(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: mZ(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${mV.$y} ${l ? mV.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: mV.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: mV.ai,
                        children: (0, a.jsx)(nd._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: mV.U9 }),
                    (0, a.jsx)("span", { className: `${mV.nf} ${mV.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: mV.MQ,
                        children: mR(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(mJ, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${mV.M0} ${mV.ab} ${mV.dL}`,
                duration: m_(t.totalMs),
            }),
        ],
    });
}
function m0(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: mV._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: mV.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${mV.nf} ${mW[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [mL("Start", `+${m_(e.start)}`), mL("Duration", mP(e))];
                      e.count > 1
                          ? t.push(
                                mL("Calls", String(e.count)),
                                mL("Longest call", m_(e.maxMs)),
                                mL("Spread over", m_(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(mL("Self time", m_(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(mL("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(mL("Notes", l.join(", "))),
                          null != e.span.error && t.push(mL("Error", e.span.error)));
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
                              s = "cost_usd" === t ? m$(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), mL(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...mT.flatMap((e) => {
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
                                            className: mV.xd,
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
                                                            className: mV.vl,
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
function m1(e) {
    let { trace: t } = e,
        n = i.useMemo(() => mq(t), [t]);
    return (0, a.jsx)(mX, { stats: n });
}
function m2(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, mS.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? mH : (0, mS.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, mS.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, mS.x7)(t)), l((n) => (0, mS._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, mS.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mS.IE)(t, e);
                        null != n && l((e) => (0, mS.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mS.IE)(t, e);
                        null != n && l((e) => (0, mS.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, mS.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, mS.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, mS.hB)(t));
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
        f = (0, mS.dj)(t),
        h = i.useMemo(() => (0, mS.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(mZ(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(mU.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: mV.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: mD(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: mO(t),
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
                                      children: `${mR(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(m1, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: mV.KE,
                        children: [
                            (0, a.jsx)(eT.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Time sinks",
                                onClick: n.reset,
                            }),
                            (0, a.jsx)(eT.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(eT.$, {
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
                        "aria-activedescendant": null == o ? void 0 : mZ(o),
                        className: mV.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: g,
                        children: [
                            (0, a.jsxs)("div", {
                                className: mV.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: mV.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: mV.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${mV.io} ${(e / f) * 100 > 85 ? mV.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : m_(e),
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
                                          mY,
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
                                    : (0, a.jsx)(mQ, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(mG.j, { children: (0, a.jsx)(m0, { node: s }) }),
        ],
    });
}
function m3(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([dH.A], () => dH.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(mB.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(mK.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(mU.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(m2, { trace: i }),
        ],
    });
}
let m4 = { running: mV.Vf, ok: mV.mo, error: mV.Sr };
function m5(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${mV.Om} ${m4[t]}`, role: "img", "aria-label": mI[t] });
}
function m6(e, t) {
    (0, tO.openModal)((n) => (0, a.jsx)(m3, { ...n, projectId: e, traceId: t }));
}
function m7(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => m6(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: mV.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: mV.sU,
                children: [
                    (0, a.jsx)(m5, { status: (0, mS.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: mV._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: mD(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: mO(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function m8(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            e3(
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
    return (0, a.jsx)(eZ.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eZ.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(eJ.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(eY.rX, {
                    children: (0, a.jsx)(eY.Dr, {
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
            return (0, a.jsx)(tw.K, {
                ...e,
                buttonRef: l,
                icon: tk.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function m9(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([dH.A], () => dH.A.getTimingTraces(t), [t]),
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
                    let t = e.map(mq);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: mS.BF.map((e) => ({
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
              className: mV.Ie,
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
              className: mV.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: mV.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: mV.fH,
                              children: (0, a.jsx)(mN.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(m8, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(ac.Ch, {
                      className: mV.XG,
                      children: [
                          (0, a.jsx)(mX, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: mV.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(m7, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function fe(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function ft(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function fn(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function fl(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function fr(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function fa(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let fi = ["all", "preview", "stable", "web"];
function fs(e) {
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
function fo(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: fe(e.memory_p50_bytes ?? 0),
              p999: fe(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let fu = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var fc = n(911608),
    fd = n(177427);
function fm(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fd.KE,
        children: [
            (0, a.jsx)("div", {
                className: fd.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(nt.y, { type: nt.t.PULSING_ELLIPSIS })
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
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: fl(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(eT.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function ff(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: fd.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: fd.Gf, children: t }),
            n,
        ],
    });
}
function fh(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: fd.N8,
        children: [
            (0, a.jsxs)("div", {
                className: fd.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: fd.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: fd.kS,
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
function fp(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: fd.N8,
        children: [
            (0, a.jsxs)("div", {
                className: fd.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(fc.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? fd.dh : void 0,
            }),
        ],
    });
}
function fg(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(fh, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: fs(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(fh, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = fo(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fh, { label: E.intl.string(S.default["H/X+FI"]), value: ft(n.cpu_ms) }),
            null != l && (0, a.jsx)(fh, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function fx(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(ff, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: fs(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? fu[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(ff, {
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
                          fh,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: ft(t.cpu_ms) }),
                              hint: fo(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var fv = n(678708),
    fj = n(414499),
    fb = n(714800),
    fy = n(81466),
    fw = n(424383),
    fk = n(816943),
    fN = n(268791),
    fC = n(514042),
    fA = n(872351),
    fS = n(708988),
    fE = n(150934),
    fI = n(417270);
let fM = "Restart Agent",
    f_ = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fR(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fP(e, t) {
    return { label: e, value: null != t && "" !== t ? fl(t) : "Unknown", icon: "calendar" };
}
function fT(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fL(e, t, n, l) {
    let [r, a] = f_[n.status];
    return { label: e, value: `${fT(n.bytes)} of ${fT(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function f$(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = fl(e.at);
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
let fD = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fO(e) {
    let t = `container ${fR(e.local)} \xb7 remote ${fR(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fD[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${fn(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${fn(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${fn(n)} Ahead, ${fn(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fq = ["main", "wip"];
var fz = n(400154);
let fF = {
        checkout: fv.FolderIcon,
        edit: aV.PencilIcon,
        remote: fj.h,
        commits: fb.e,
        calendar: fy.CalendarIcon,
        save: fw.L,
        objects: tn.R,
        download: fk.$,
        size: fN.$,
        file: fC.FileIcon,
    },
    fU = {
        ok: [nE.y, k.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [mF.WarningIcon, k.A.colors.ICON_FEEDBACK_WARNING],
        error: [nn.a, k.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [fA.z, k.A.colors.ICON_MUTED],
        behind: [fS.M, k.A.colors.ICON_MUTED],
    };
function fG(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([dH.A], () => dH.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, mk.DK)(t), [t]),
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
                    `Updated ${fl(r)}`,
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
    return (0, a.jsxs)(ff, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fz.Lj,
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
                    if (!e.running || null != e.localError) return [f$(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            f$(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : fn(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fq.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fO))
                        : l.push(
                              { label: "Main", value: fR(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fR(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? fn(e.commits) : "Unknown", icon: "commits" },
                            fP("Oldest Commit", e.oldest),
                            fP("Newest Commit", e.newest),
                            f$(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${fn(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${fn(t.loose)} loose (${fe(t.looseBytes)}) \xb7 ${fn(t.packed)} packed in ${n} (${fe(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${fn(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${fn(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                fL(
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
                                  fL("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fF[r],
                        [o, u] = null != i ? fU[i] : [null, void 0];
                    return (0, a.jsx)(
                        fh,
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
function fB(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([dH.A], () => dH.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, mk.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = dH.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, mk.gX)(e);
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
            let u = i.useCallback(() => (0, mk.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fM,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, tu.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: fz.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fz.nM,
                children: [
                    (0, a.jsx)(fE.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(eT.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fI.RetryIcon,
                        text: fM,
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
                            return `Restarted \xb7 new instance since ${fl(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${fl(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fK(e, t) {
    return (0, a.jsx)(fh, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: fn((0, mu.aM)(t)) }),
        hint: `${fn(t.input_tokens)} in \xb7 ${fn(t.output_tokens)} out \xb7 ${fn(t.cache_read_input_tokens)} cache read`,
    });
}
function fH(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([dH.A], () => dH.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([dH.A], () => dH.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([dH.A], () => dH.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([dH.A], () => dH.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, mk.Lj)(t), [t]),
        f = i.useCallback(() => (0, mk.Lj)(t, !0), [t]),
        h = (0, o.bG)([dH.A], () => dH.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([W.A], () => W.A.isThinking(t), [t]),
        g = i.useCallback(() => (0, mk.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: fz.Mf,
        children: [
            (0, a.jsx)(fm, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(ff, {
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
                                  (0, a.jsx)(fh, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: fn((0, mu.a7)(x.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: fn(x.turns) }),
                                  }),
                                  fK(E.intl.string(S.default.xtxP0e), x.orchestrator),
                                  fK(E.intl.string(S.default["9Sj3SX"]), x.codegen),
                                  fK(E.intl.string(S.default.ANCEo3), (0, mu.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(fh, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${fn(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(ff, {
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
                                  fK(E.intl.string(S.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(fh, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, mu.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(ff, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != u && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(fp, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: fn,
                                  }),
                                  (0, a.jsx)(fh, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${fn(u.tokensBefore)} \u{2192} ${fn(u.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: fn(u.retainedMessages),
                                          time: fl(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: fn(y) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(fh, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${fn(c.projected)} / ${fn(c.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: fl(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fz.Lj,
                        children: [
                            (0, a.jsx)(eT.$, {
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
                                    let t = fl(e.observedAt);
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
                                        (0, a.jsx)(eT.$, {
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
                        className: fz.Lj,
                        children: [
                            (0, a.jsx)(eT.$, {
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
                                    let t = fl(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fB, { projectId: t }),
                ],
            }),
            (0, a.jsx)(fG, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(ff, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(fh, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: fl(b.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(fh, { label: E.intl.string(S.default["8V8e1Z"]), value: fn(b.sockets) }),
                                    (0, a.jsx)(fh, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(fh, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: fn(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(fg, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(ff, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(fh, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: fn(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(fh, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: fn(j.context_window_tokens) }),
                        }),
                        (0, a.jsx)(fh, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: fn(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(fh, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: fn(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(fh, { label: E.intl.string(S.default.kIHga0), value: fn(j.max_build_attempts) }),
                        (0, a.jsx)(fh, { label: E.intl.string(S.default.Iw03yW), value: fn(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fV = n(237528),
    fW = n(629584),
    fX = n(531893);
function fZ(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fX.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function fJ(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fX.qf,
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
              className: fX.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fY(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fX.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var fQ = n(109079);
let f0 = i.memo(function (e) {
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
        className: fQ.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fQ.Mt,
                selectable: !0,
                children: mA(n.ts) ?? n.ts,
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
                className: fQ.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fQ.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fQ.Cq, children: (0, a.jsx)(fV.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fQ.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fV.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
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
                                      className: fQ.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(S.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(rl.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nd._, {
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
                                          className: fQ.dF,
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
function f1(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([mw.A], () => mw.A.getLogs(t), [t]),
        l = (0, o.bG)([mw.A], () => mw.A.getHistoryState(t, "logs")),
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
                fi.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return fa(e);
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
        className: fQ.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fQ.y4,
                children: [
                    (0, a.jsx)(fW.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fQ.KT,
                        children: (0, a.jsx)(mN.I, {
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
            n.length > 0 && (0, a.jsx)(fZ, { state: l }),
            (0, a.jsxs)(ac.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: fQ.sx,
                children: [
                    (0, a.jsx)(fY, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fJ, {
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
                          : d.map((e) => (0, a.jsx)(f0, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function f2(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(ff, {
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
function f3(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(fh, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: fa(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(fh, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: fn(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${fl(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(fh, { label: E.intl.string(S.default.Iz5GnJ), value: fn(l.guild_count) }),
                  (0, a.jsx)(fh, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: fn(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: fl(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(fh, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: fn(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(fh, { label: fa(n), value: E.intl.string(S.default.lTHQss) });
}
function f4(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(fh, {
        label: fa(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: fn(n.requests),
            failures: fn(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: fl(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: fl(n.since) }),
    });
}
function f5(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fh, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: fa(t) }),
                value: fn(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    fh,
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
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: fl(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function f6(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(fh, {
        label: fa(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: fn(n.calls), errors: fn(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function f7(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(ff, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(ff, {
        title: t,
        children: [
            (0, a.jsx)(fh, {
                label: E.intl.string(S.default.xtD4Zp),
                value: fn(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: fl(n.since) }),
            }),
            (0, a.jsx)(fh, { label: E.intl.string(S.default.gfRhR3), value: fn(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fp, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: ft,
                          }),
                          (0, a.jsx)(fh, {
                              label: E.intl.string(S.default.mSKImM),
                              value: ft(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: ft(n.cpu_ms_total),
                                  wall: ft(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(fh, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(fh, { label: E.intl.string(S.default.xvmL1D), value: ft(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(fh, { label: E.intl.string(S.default["4sQYwH"]), value: fn(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(fh, {
                label: E.intl.string(S.default.bQenOy),
                value: fn(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(fh, { label: E.intl.string(S.default.xgpn4Y), value: fr(n.build) }),
        ],
    });
}
function f8(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(ff, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(fh, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(fh, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: fe(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: fn(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(fp, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: fe,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function f9(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fz.Mf,
        children: [
            (0, a.jsx)(fm, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(f7, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(f7, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(f8, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(f2, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f3, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(f2, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f4, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(f2, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f5, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(f2, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f6, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(fx, { analytics: t.analytics }),
                        (0, a.jsxs)(ff, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(fh, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? fr(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(fh, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? fr(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var he = n(592465);
function ht(e) {
    let { projectId: t, onClose: n } = e,
        l = lK(),
        [r, s] = i.useState(() => (l && lU?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([dH.A], () => dH.A.getStatus(t), [t]),
        c = (0, o.bG)([dH.A], () => dH.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, mk.R7)(t), (0, mk.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, R.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == lU || lU.projectId !== e) return null;
            let { traceId: t } = lU;
            return ((lU = null), t);
        })(t);
        return null != e && (m6(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        lG(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, tA.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: dH.A.getStatus(t),
                        last_turn_usage: dH.A.getLastTurnUsage(t),
                        last_compaction: dH.A.getLastCompaction(t),
                        last_compaction_decline: dH.A.getLastCompactionDecline(t),
                        timing_traces: dH.A.getTimingTraces(t),
                        logs: mw.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, eW.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: he.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(rC.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(rC.Ay.Icon, {
                            icon: dC.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(rC.Ay.Icon, { icon: eX.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(rC.Ay.ChannelIcon, { icon: tv.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(rC.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: he.rf,
                children: [
                    (0, a.jsxs)(my.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: he.vR,
                        children: [
                            (0, a.jsx)(my.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(my.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(my.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(my.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(f1, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(f9, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(m9, { projectId: t })
                            : (0, a.jsx)(fH, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var hn = n(365912),
    hl = n(873715);
function hr(e) {
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
let ha = Object.freeze({ x: -1, y: -1 });
function hi(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = hr(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var hs = n(192888);
function ho(e, t) {
    return (0, hs.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(hi, () => ({ status: "failed" }));
}
var hu = n(108308);
let hc = { x: 25, y: 21 };
function hd(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function hm(e, t, n, l) {
    let r = hd(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function hf(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function hh(e) {
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
function hp(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = lu(u),
        m = (0, lL.Zv)(u),
        f = (0, tO.useHasAnyModalOpen)(),
        h = (0, o.bG)([aQ.default], () => aQ.default.getCurrentUser()),
        p = h?.id ?? null,
        [g, x] = i.useState(null),
        [j, b] = i.useState(!1),
        [y, w] = i.useState(!1),
        [k, N] = i.useState(null),
        [C, A] = i.useState(!1),
        I = i.useRef(null),
        M = i.useRef(null),
        _ = i.useRef(null),
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
    let W = rP(r, H);
    i.useEffect(() => {
        if (!H || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (b(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, hl.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? hh(t.response) : null;
                    null == n ? w(!0) : (x(n), li(u, { url: n.url, title: n.title, viewport: n.viewport }));
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
        if (rR(X.current, W)) return;
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
                    (0, hl.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Q.current) return;
                        let l = hh(e.response);
                        null != l && (x(l), li(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = hr(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = lt(u)).active &&
                                0 !== r.size &&
                                ln(u, {
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
        ((Q.current = H), H || ((Z.current = null), (J.current = null), (_.current = null), A(!1)));
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
                    ho(n, t).then((t) => {
                        if (((Y.current = !1), Q.current)) {
                            if ("picked" !== t.status || hy(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = n2(t.target);
                                (T((t) => (hb(t, e) ? t : e)),
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
            let e = setTimeout(() => z(null), hv);
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
                    O({ projectId: u, target: e, anchor: t, draft: "", at: n, label: n2(e) }));
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
                    (Math.abs(e.clientX - D.at.x) > hj || Math.abs(e.clientY - D.at.y) > hj) && (F.current = !0);
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
                        n = null != e && hy(e, W, en) ? null : e;
                    if (null != n) {
                        let e = n2(n);
                        T((t) => (hb(t, e) ? t : e));
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
                null != e && ho(e, ha);
            };
    }, [em, r]);
    let ef = i.useCallback(() => {
        (A(!1), N(null), (J.current = null), (Z.current = null));
    }, []);
    i.useEffect(() => {
        if (!H || !C || !el || L || null != D || null != B) return;
        let e = _.current,
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
                            ? n0
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(k, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [k, W, eo, D, B, es, et],
        ),
        ep = i.useCallback(() => {
            null != u && (N(null), null != lN(u) ? lA(u) : la(u));
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
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            !(0, eG.vq)(t) ||
                ey.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, hn.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ej.current || null == lN(ej.current)) && eb.current());
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
                    es(k, n0, { x: (W?.left ?? 0) + k.rect.x * en, y: (W?.top ?? 0) + k.rect.y * en }));
            },
            [u, D, B, er, k, es, eg, W, en],
        ),
        ek = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((n1(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, R.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = n2(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${n5}${r}${n6}${n4(e)}
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
            if (null != u && null != B && null != p && n1(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = lt(u)).annotations.find((t) => t.id === e)) &&
                        ls(l, p) &&
                        ln(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = lt(u)).annotations.find((t) => t.id === e)) &&
                        ls(n, p) &&
                        ln(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
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
        eP =
            null != ed && null != W
                ? (function (e, t) {
                      let { left: n, top: l } = hf(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(hm(ed.target, ed.anchor, W, en), W)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (ed?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ed;
            ho(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ed, r]),
        (0, rA.createPortal)(
            (0, a.jsxs)("div", {
                ref: ey,
                className: hu.Li,
                children: [
                    (0, a.jsx)(ab.A, {
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
                                      className: hu.MT,
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
                                      ? (0, a.jsx)(hw, { box: hd(k, W, en) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: hu.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: hu.xz,
                                          "data-shown": null != k && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: hu.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, a.jsx)("span", { className: hu.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: hu.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: hu.Y,
                                      children: eI ? (0, a.jsx)("div", { className: hu.u }) : null,
                                  }),
                                  null == eR
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: hu.aZ,
                                            style: {
                                                transform: `translate3d(${eR.at.x + 20}px, ${eR.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: hu.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: hu.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: hu.Tl,
                                                            children: eR.label.kind,
                                                        }),
                                                        "" === eR.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: hu.kh,
                                                                  children: [" ", eR.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, a.jsx)("div", { className: hu.D0, style: hd(eM, W, en), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = hm(e.target, e.anchor, W, en),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: hu.xL,
                                              style: { ...hf(n, W), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: n3(e.target),
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
                                              children: (0, a.jsx)(hg, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == e_ || null == u
                                      ? null
                                      : (0, a.jsx)(rM, {
                                            projectId: u,
                                            at: { x: e_.at.x + 20, y: e_.at.y + 20 },
                                            bounds: W,
                                            kind: e_.label.kind,
                                            value: e_.draft,
                                            canSubmit: null != D && n1(e_.draft),
                                            onChange: (e) => {
                                                null != D && O({ ...D, draft: e });
                                            },
                                            onSubmit: ek,
                                            onDismiss: et,
                                            onUploadFile: eN,
                                            closing: null == D,
                                        }),
                                  null != ed && null != B && null != eP
                                      ? (0, a.jsxs)(hx, {
                                            point: eP,
                                            frame: W,
                                            authorId: ed.authorId,
                                            title: n3(ed.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(aU.f, {
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
                                                          className: hu.aC,
                                                          children: ed.comment,
                                                      }),
                                                ls(ed, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: hu.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: hu.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(eT.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(eT.$, {
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
                                                                        (0, a.jsx)(eT.$, {
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
                                                                            ? (0, a.jsx)(eT.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !n1(B.draft),
                                                                                  text: E.intl.string(S.default.iicRP9),
                                                                                  onClick: eC,
                                                                              })
                                                                            : (0, a.jsx)(eT.$, {
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
function hg(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([aQ.default], () => aQ.default.getUser(t), [t]);
    return (0, a.jsx)(oi.eu, {
        src: null == n ? null : e$.Ay.getUserAvatarURL(n),
        size: os._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function hx(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(hc);
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
        className: hu.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: hu.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: hu.ip, children: (0, a.jsx)(hg, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: hu.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: hu.zI, children: g }),
        ],
    });
}
let hv = 300,
    hj = 2;
function hb(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function hy(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function hw(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: hu.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var hk = n(659723),
    hN = n(697744),
    hC = n(130324);
function hA(e) {
    let t = (0, hN.c)(),
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
function hS(e) {
    let { className: t } = e,
        { Component: n, events: l } = hA(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, hC.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: hC.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var hE = n(251363),
    hI = n(944142),
    hM = n(532247),
    h_ = n(501628);
function hR(e) {
    let { progress: t } = e,
        { Component: n } = hA(1500),
        l = lB.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: h_.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: h_.PM,
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
function hP(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([hI.A], () => (s ? hI.A.getLiveReload(t) : null), [s, t]),
        c = (0, rm.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, hM.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, hM.QP)(e, s)));
            let m = (0, o.bG)(
                    [lR.A],
                    () => {
                        let e = lR.A.getFrame(n);
                        return (0, rt.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, hE.ow)(null, n) && e();
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
        h = m ? null : (0, hM.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ab.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: h_.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(hR, { progress: h }),
                  })
                : null,
        ],
    });
}
var hT = n(357858),
    hL = n(343030),
    h$ = n(317608),
    hD = n(35367),
    hO = n(771293);
let hq = { width: 1 / 0, height: 1 / 0 };
function hz(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hq;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var hF = n(702083);
function hU(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([rf.A], () => ({
            mobile: rf.A.isBuilderPreviewMobile(),
            landscape: rf.A.isBuilderPreviewLandscape(),
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
        d = n ? hz(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(hF.dw, { [hF.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(hF.R9, { [hF.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var hG = n(347927);
function hB(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(hG.Bf, l && hG.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: hG.Ux,
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
var hK = n(957272);
function hH(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, hD.A)({ applicationId: t, surface: n, launch: l });
    if (((0, hO.A)(t, n), s === hD.n.Launched)) {
        let e = (0, a.jsx)(h$.A, { frameId: i.id, level: hL.A.WithinAppContent, className: hK.Z7, overlay: r });
        return (0, rh.Q5)(n) ? (0, a.jsx)(hU, { children: e }) : e;
    }
    return (0, a.jsx)(hV, { state: s });
}
function hV(e) {
    let { state: t } = e;
    switch (t) {
        case hD.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: hK.qs,
                children: (0, a.jsx)(hB, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case hD.n.NoApplication:
            return (0, a.jsx)(hS, { className: hK.qs });
        case hD.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: hK.qs,
                children: (0, a.jsx)(hB, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case hD.n.Error:
            return (0, a.jsxs)("div", {
                className: hK.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: hK.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case hD.n.AwaitingLaunch:
        case hD.n.Loading:
            return (0, a.jsx)("div", { className: hK.qs, children: (0, a.jsx)(nt.y, {}) });
    }
}
var hW = n(308528),
    hX = n(334738),
    hZ = n(688438),
    hJ = n(365971),
    hY = n(703462);
function hQ(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: hY.f,
        children: [
            (0, a.jsx)(eO.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function h0() {
    return (0, a.jsx)("div", { className: hY.f, children: (0, a.jsx)(nt.y, {}) });
}
function h1(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([aY.A], () => (null != c ? aY.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && hW.A.preload(O.ME, t);
        }, [t]),
        (n = (0, o.bG)([t7.A], () => t7.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, hJ.Xg)();
            return (
                (0, hX.yl)(t, e),
                () => {
                    (0, hX.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, lX.CN)(l).then(
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
        ? (0, a.jsx)(hQ, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(h0, {})
          : (0, a.jsx)("div", {
                className: hY.g,
                children: (0, a.jsx)(hZ.A, { channel: d, guild: null, chatInputType: u8.oU.SIDEBAR }, d.id),
            });
}
var h2 = n(887909),
    h3 = n(570962),
    h4 = n(998475);
function h5(e) {
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
    } = (0, h2.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: h4.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: h4.rf,
                children: (0, a.jsx)(h3.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: h4.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: h4.z3,
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
                                className: h()(h4.Qs, c ? h4.cw : null, d ? h4.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: h4.o1,
                      children: s.map((e, t) => (0, a.jsx)(eT.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var h6 = n(765671),
    h7 = n(269094),
    h8 = n(582063);
let h9 = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function pe() {
    (0, eW.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function pt(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(S.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eZ.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(pn, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: h8.m2,
                        children: (0, a.jsx)(N.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tw.K, {
                                "aria-label": r,
                                icon: ty.SettingsIcon,
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
                accept: h9.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (h9.includes(n.type)
                                ? n.size > er.aI
                                    ? (0, eW.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, sS.M$)(t, n).catch(pe)
                                : (0, eW.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function pn(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([sA.A], () => sA.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eJ.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(S.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eY.rX, {
                children: [
                    (0, a.jsx)(eY.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(S.default.uQpDky),
                        icon: ix.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eY.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(S.default.AiAz8J),
                        icon: fI.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, sS.Og)(t).catch(pe));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eY.rX, {
                children: (0, a.jsx)(eY.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(S.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, sS.Y1)(t, !i) || pe();
                    },
                }),
            }),
        ],
    });
}
function pl(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, hD.A)({ applicationId: t, surface: rt.ZN });
    return (i.useEffect(() => {
        let e = (0, rt.VA)(t, rt.ZN);
        return () => (0, lP.r)(e);
    }, [t]),
    r.state !== hD.n.Launched)
        ? (0, a.jsx)(hV, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(hV, { state: hD.n.Loading })
          : (0, a.jsx)(pr, { lifecycle: r, projectId: n, size: l });
}
function pr(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, h6.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: h8.JH,
        children: [
            (0, a.jsx)(sI, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: h8.dw,
                children: (0, a.jsx)("div", {
                    className: h8.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(h7.A, { frame: t.frame, application: t.application, className: h8.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(pt, { projectId: n }) : null,
        ],
    });
}
var pa = n(409478),
    pi = n(652227);
function ps(e) {
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
            overlayWidgetSize: m = lJ,
            projectId: f,
            frameOverlay: h,
            paused: p = !1,
            onResume: g,
        } = e,
        x = (0, o.bG)([iT.A], () => null != f && null != iT.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: pi.qs, children: (0, a.jsx)(nt.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: pi.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(nt.y, {}) : (0, a.jsx)(h5, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: pi.RG,
                      children: [
                          (0, l0.yf)(u, c)
                              ? p
                                  ? (0, a.jsx)(po, { projectId: f, onResume: g })
                                  : (0, a.jsx)(hH, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: pi.qs,
                                        children: (0, a.jsx)(hB, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(pa.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(pl, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(h1, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: pi.qs, children: (0, a.jsx)(nt.y, {}) })
              : (0, a.jsx)(hS, { className: pi.qs });
}
function po(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, hT.Pu)(t),
        (0, a.jsx)("div", {
            className: pi.qs,
            children: (0, a.jsx)(hB, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(eT.$, {
                              size: "sm",
                              variant: "primary",
                              icon: tm.PlayIcon,
                              text: E.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var pu = n(750506),
    pc = n(867193),
    pd = n(539197),
    pm = n(977020);
function pf(e) {
    let { projectId: t } = e,
        n = (0, pd.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, pd.Ie)(e);
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
        className: pm.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [pd.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(pm.hN, pm.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(pm.hN, pm.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(pm.UE, { [pm.SP]: n.shown, [pm.Vq]: n.pressed, [pm.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var ph = n(417760);
function pp(e) {
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
                null != e && (l(!0), (0, R.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, lL.CU)(n),
        c = "controlling" === t,
        d = E.intl.string(c ? (u ? S.default["VJW/5P"] : S.default["+hD2Iz"]) : S.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(eT.$, {
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
              className: h()(ph.M0, ph.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(d8.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(ul.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: ph.ID, children: d }),
                  c ? (0, a.jsx)(ab.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: ph.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: ph.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: ph.sp,
                      children: [
                          (0, a.jsx)(ul.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(d8.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: ph.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: ph.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: ph.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: ph.lC, children: m }) : null,
              ],
          });
}
function pg(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, lL.Zv)(null != n && n === l ? t : null),
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
        c = (0, tO.useHasAnyModalOpen)(),
        d = (0, l8.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, l8.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = r_(r());
            f((t) => (rR(t, e) ? t : e));
            let t = null == h ? null : r_(h);
            (x((e) => (rR(e, t) ? e : t)), null != h && (0, pc.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, pc.C)(0));
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
            let [e] = i.useContext(pu.uY),
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
                      className: ph.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: ph.QF,
                          children: (0, a.jsx)(pp, { phase: u, projectId: t, compact: y }),
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
                                  className: ph.ys,
                                  style: k,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: ph.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(pf, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var px = n(399503),
    pv = n(853555),
    pj = n(271982),
    pb = n(187645);
let py = new Map(),
    pw = !1;
function pk() {
    let e = new Map();
    for (let t of new Set([...W.A.getActivityOrderedProjectIds(), ...(0, lL.T7)()])) {
        if (!l$(t) || lT.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = ew.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, rh.Rc)(t);
            return (0, rt.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [t, n] of [...py])
        e.get(t) !== n.frameId &&
            (function (e, t) {
                (py.delete(e), t.unregisterLookup(), pj.A.removeFrameTarget(t.frameId, t.element), t.element.remove());
                let n = lR.A.getFrame(t.frameId)?.applicationId;
                null != n && setTimeout(() => lz(e, n), 0);
            })(t, n);
    for (let [t, n] of e)
        py.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = pb.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    pN(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (py.set(e, l),
                    (l.unregisterLookup = (0, pv.Ng)(e, () => (0, hE.n5)(n, t))),
                    pj.A.registerFrameTarget(t, n, hL.A.Backstage, void 0));
            })(t, n);
    for (let e of py.values()) pN(e.element);
}
function pN(e) {
    let t = rf.A.isBuilderPreviewMobile();
    e.classList.toggle(pb.L, !t);
    let n = t ? hz(rf.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var pC = n(873727),
    pA = n(147248),
    pS = n(418842),
    pE = n(363195),
    pI = n(818023);
let pM = null;
var p_ = n(517461),
    pR = n(761929),
    pP = n(487336);
function pT(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, p_.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, X.clamp)(u, 360, n),
        m = (0, pR.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: pR.R.HORIZONTAL_LEFT,
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
        className: pP.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: pP.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: pP.kL, style: { width: d }, children: l }),
        ],
    });
}
var pL = n(541940);
function p$(e) {
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
        v = (0, rm.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([pE.A], () => (0, pC.x4)(pE.A.theme)),
            l = (0, o.bG)([pA.A], () => pA.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([eL.Ay], () => ({
                reducedMotion: eL.Ay.useReducedMotion,
                fontScale: (0, pC.U0)(),
                highContrast: eL.Ay.isHighContrastModeEnabled,
                forcedColors: eL.Ay.useForcedColors,
                underlineLinks: eL.Ay.alwaysShowLinkDecorations,
            })),
            d = lB.hH.useSetting(),
            m = (0, pS.C)(),
            f = (0, o.bG)(
                [lR.A, rf.A],
                () =>
                    rf.A.isBuilderPreviewMobile() &&
                    lR.A.getFrame(t)?.applicationId === rf.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            p = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, hE.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, pC.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, hs.W)(l, "set-env", i, {
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
                let n = (0, hE.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, hE.n5)(e, t) && ((x.current = null), b());
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
            if (null != t) return (0, pv.Ng)(t, () => (0, hE.n5)(g, j));
        }, [t, g, j]));
    let b = i.useCallback(() => (0, hE.ow)(g, j), [g, j]),
        y = i.useCallback(() => (f ? (0, hE.ow)(g, j) : g), [f, g, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(pL.Mh, c),
                children: [
                    u,
                    p
                        ? null
                        : (0, a.jsx)(pg, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: pL.fm, children: d }),
                ],
            }),
            m,
            p
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(hp, {
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
function pD(e) {
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
    (0, px.k)(t, N);
    let M = s.type === l1.U.MAIN || (0, rh.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([rf.A], () => ({
            mobile: rf.A.isBuilderPreviewMobile(),
            landscape: rf.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? pI.aX.LANDSCAPE : pI.aX.PORTRAIT), (pM = e));
                else {
                    if (pM !== e) return;
                    ((l = pI.aX.UNHANDLED), (pM = null));
                }
                K.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let _ = i.useRef(null),
        [P, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, au.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, au.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, lX.HV)(l), () => (0, lX.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, R.ensureConnection)(t),
                pw ||
                    ((pw = !0),
                    W.A.addChangeListener(pk),
                    ew.Ay.addChangeListener(pk),
                    lR.A.addChangeListener(pk),
                    rf.A.addChangeListener(pk),
                    lT.A.addChangeListener(pk),
                    (0, lL.W3)(pk),
                    pk()));
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
    let L = Math.max(360, P - 320),
        $ = d || M;
    return (0, a.jsx)("div", {
        ref: _,
        className: pL.LB,
        children: (0, a.jsx)(p$, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, l0.yf)(w, k),
            paused: A,
            mainClassName: null == c ? void 0 : h()(pL.ez, { [pL.zt]: d }),
            content: (0, a.jsx)(ps, {
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
                frameOverlay: (0, a.jsx)(hP, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(pT, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: pL.cO,
                              children: x
                                  ? (0, a.jsx)(ht, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(hk.Ay, { projectId: t }),
                                            (0, a.jsx)(rC.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(rC.Ay.Icon, {
                                                                  icon: eX.P,
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
                                                className: pL.cb,
                                                children: (0, a.jsx)(
                                                    mb,
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
var pO = n(323140);
function pq(e) {
    var t;
    let l,
        r,
        { project: s, projectsLoaded: c, onBack: d, guildId: m } = e,
        [f, p] = i.useState(!0),
        [g, j] = i.useState(!1),
        b = lK(),
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
                                (0, lV.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, eW.P0)({
                                                        text: E.intl.formatToPlainString(S.default.Z4n6LX, {
                                                            title: (0, lH.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, lW.c)(u, r);
                                                null != e && (0, eW.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, eW.P0)({
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
                    lq.add(t),
                    () => {
                        (lq.delete(t), lz(A, t));
                    }
                );
        }, [A, t]));
    let {
            integrationStatus: I,
            isPreviewApplicationLoading: _,
            checkingIntegration: T,
            previewReady: L,
            hasFrame: $,
            needsPermissionReview: D,
            installAuthorizeProps: z,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [ew.Ay, ro.A],
                    () => (null == r ? null : (ew.Ay.getIntegrationStatus(r) ?? ro.A.getIntegrationStatus(r))),
                    [r],
                ),
                { data: c, isLoading: d } = (0, rs.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                p = (0, l0.Qg)({
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
            let x = (0, ru.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, ru.$)(e, x));
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
                              ...(0, rc.i)({ applicationId: t, application: c ?? null, guildId: x }),
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
        F =
            (0, o.bG)([rp.A], () => (null == A ? void 0 : rp.A.getPublishStatus(A)?.previewAppChannels), [A]) ??
            I?.preview_app_channels,
        {
            availability: U,
            activeMode: G,
            setMode: B,
            frameSurface: K,
            frameSurfaceOptions: H,
            setFrameSurface: V,
            appChannel: X,
            setAppChannel: Z,
            frameLaunchParams: J,
            widgetApplicationId: Y,
        } = (0, l5.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: $,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: I?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(lZ.q7.OVERLAY) === !0,
            previewAppChannels: F,
        }),
        Q = lY(
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
    ((0, lQ.x)(A, (e) => {
        U.modes.includes(e) && B(e);
    }),
        lG(A, () => {
            (p(!0), j(!0));
        }));
    let ee = U.modes.includes("frame"),
        et = (0, o.bG)([lT.A], () => lT.A.isPaused(A), [A]),
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
            isRefreshing: ef,
            handleRefresh: eh,
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
                                          t === l1.U.APP_CHANNEL && n.length > 1
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
                f = (0, o.bG)([rf.A], () => rf.A.isBuilderPreviewMobile()),
                h = E.intl.string(f ? S.default.tKGF0Q : S.default.peqEOY),
                p = i.useCallback(() => (0, lX.GG)(!f), [f]),
                g = (0, o.bG)([rf.A], () => rf.A.isBuilderPreviewLandscape()),
                x = E.intl.string(g ? S.default.tunI2l : S.default.DoNdjA),
                v = i.useCallback(() => (0, lX.Lw)(!g), [g]),
                j = (0, rh.jS)(t),
                b = i.useMemo(() => (0, rh.Op)(j, l), [j, l]),
                y = (0, rm.A)(t?.preview_application_id ?? null, b),
                w = (0, rt.x1)(y) && y.data.proxyTicketRefreshing,
                k = i.useCallback(() => {
                    null == y || w || rd.A.refreshProxyTicket(y.id);
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
            modes: U.modes,
            frameSurface: K,
            frameSurfaceOptions: H,
            previewAppChannels: F,
            setMode: B,
            setFrameSurface: V,
            setAppChannel: Z,
        }),
        ep = f && !g,
        eg = E.intl.string(ep ? S.default.JD6Oit : S.default.xjJAQm),
        ex = i.useCallback(() => {
            if (g) {
                (j(!1), p(!0));
                return;
            }
            p((e) => !e);
        }, [g]),
        ev = i.useCallback(() => p(!1), []),
        {
            designFeedbackActive: ej,
            designFeedbackToggleRef: eb,
            agentDrivingPreview: ey,
            designFeedbackLabel: ek,
            handleToggleDesignFeedback: eN,
        } = (function (e, t, n) {
            let { active: l } = lu(e);
            i.useEffect(() => {
                null != e && l && !t && la(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, lL.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void la(e);
                        (n(), ll(e));
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
        [eC] = i.useState(() => e1.isPlatformEmbedded && (0, ri.qM)()),
        eA = null != lI(A);
    i.useEffect(() => {
        null != A && eA && !en && lA(A);
    }, [A, eA, en]);
    let eS = i.useCallback(() => {
            null != A &&
                (k(),
                (function (e) {
                    if (null != lN(e)) return;
                    let { byProject: t } = lw.getState();
                    lw.setState({ byProject: { ...t, [e]: lk } });
                })(A));
        }, [A, k]),
        eE = i.useCallback(() => {
            null != A && lA(A);
        }, [A]),
        eI = eA ? E.intl.string(S.default.tuQ5f3) : ek,
        eM = i.useCallback(() => {
            j((e) => !e && (p(!0), !0));
        }, []),
        e_ = i.useCallback(() => j(!1), []),
        eR = i.useCallback(() => {
            null != A && (0, lX._j)(A);
        }, [A]),
        eP = i.useCallback(() => {
            null != A && (et ? (0, lX._j)(A) : (0, lX.di)(A, em?.id));
        }, [A, et, em?.id]),
        eL = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = em?.id), (0, R.closeConnection)(e), (0, lP.r)(t)), d());
        }, [s, em?.id, d]),
        e$ =
            ((l = i.useCallback(() => {
                null != s && (w(), (0, R.sendUserMessage)(s.id, E.intl.string(S.default.oU20rd)));
            }, [s, w])),
            {
                onExport: l,
                onImport: (r = te(
                    i.useCallback(
                        (e) => {
                            if (null == s) return;
                            let t = s.id,
                                n = e8(e);
                            null != n
                                ? (0, eW.P0)({ text: n, variant: "critical" })
                                : (0, tu.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: s.name }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          w();
                                          try {
                                              await e7(t, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, eW.P0)({
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
            null != s && (0, tZ.A)(s, m);
        }, [s, m]),
        eO = (0, l0.JR)(G, D)
            ? { type: "permissions", authorizeProps: z }
            : T && null == I
              ? { type: "checking" }
              : void 0,
        eq = (0, o.bG)([ew.Ay], () => null != A && ew.Ay.isProjectDeleting(A), [A]);
    i.useEffect(() => {
        ((null == s && c) || eq) && (0, u.bG)(O.BVt.CHANNEL(m, q.VV.CONJURE));
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
                        ...rb,
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
                c = (0, t_.Ay)(e, u),
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
                variant: ry(c) ? "secondary" : "primary",
                text:
                    null != m
                        ? m
                        : null == c
                          ? E.intl.string(S.default["120EFN"])
                          : ry(c) && !c.publishing
                            ? E.intl.string(S.default.kAfbEN)
                            : c.label,
            };
        })(A, m, T || _),
        eH = rN(A, eF, ez),
        eV = (0, nQ.A)(em),
        eX = "frame" === G && !et && (0, rt.x1)(em) && (eV.isPoppedOut || eV.canPopout),
        eZ =
            null == s
                ? null
                : (0, a.jsx)(tX, {
                      projectId: s.id,
                      projectName: s.name,
                      guildId: m,
                      projectGuildId: s.guild_id,
                      isOwner: (0, ew.PV)(s),
                      canRemix: (0, ew.H_)(s),
                      onRefresh: (0, rt.x1)(em) ? eh : void 0,
                      isRefreshing: ef,
                      onTogglePreviewPaused: "frame" === G ? eP : void 0,
                      previewPaused: et,
                      previewPauseDisabled: !et && ey,
                      onTogglePopout: eX ? (eV.isPoppedOut ? eV.popIn : eV.popOut) : void 0,
                      poppedOut: eV.isPoppedOut,
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
                              void (0, tO.openModalLazy)(async () => {
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
                              void (0, tO.openModalLazy)(async () => {
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
                              ? Y
                              : null,
                      previewProjectId: s.id,
                  }),
        eJ =
            null == eF || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: pO.As,
                      onMouseDown:
                          null == A || eF.disabled || eU
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, rg.dx)(A);
                                },
                      children: (0, a.jsx)(eT.$, {
                          size: "sm",
                          variant: eB,
                          icon: eU ? pz : null != eG ? nV.U : void 0,
                          text: eK,
                          onClick: () => eH("header"),
                      }),
                  }),
        eY = null == s ? void 0 : () => (0, tP.A)(s.id, { guildId: m, isPreview: !0, publishOptions: ez }),
        eQ = (0, a.jsx)(M, {
            title: s?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: d },
            project: s,
            onOpenProjectSettings: eY,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: pO.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: pO.QQ,
                                  children: [
                                      (0, a.jsx)(ra, {
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
                                          })(G, K, X),
                                          onChange: er,
                                      }),
                                      ee
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === G
                                                        ? (0, a.jsx)(y.A.Icon, {
                                                              icon: ea ? pG : pU,
                                                              tooltip: ei,
                                                              "aria-label": ei,
                                                              selected: ea,
                                                              onClick: es,
                                                          })
                                                        : null,
                                                    ea && "frame" === G
                                                        ? (0, a.jsx)(y.A.Icon, {
                                                              icon: pB,
                                                              tooltip: eu,
                                                              "aria-label": eu,
                                                              selected: eo,
                                                              onClick: ec,
                                                          })
                                                        : null,
                                                    (0, a.jsx)(l_, {
                                                        enabled: eC && !eA && !ey && !et,
                                                        onLongPress: eS,
                                                        children: (0, a.jsx)(y.A.Icon, {
                                                            ref: eb,
                                                            icon: nW.x,
                                                            iconClassName: pO.D8,
                                                            tooltip: eI,
                                                            "aria-label": eI,
                                                            selected: eA || ej,
                                                            disabled: et || (ey && !eA),
                                                            onClick: eA ? eE : eN,
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== G || et
                                          ? null
                                          : (0, a.jsx)(rn, { frame: em, controlProjectId: s.id }),
                                  ],
                              }),
                              (0, a.jsx)("div", { className: pO.YJ }),
                              (0, a.jsx)(y.A.Icon, {
                                  icon: ty.SettingsIcon,
                                  tooltip: E.intl.string(S.default.I2XSKe),
                                  "aria-label": E.intl.string(S.default.I2XSKe),
                                  onClick: eY,
                              }),
                              eZ,
                              ep
                                  ? null
                                  : (0, a.jsx)(y.A.Icon, { icon: pF, tooltip: eg, "aria-label": eg, onClick: ex }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(pO.nj, nG.T),
        children: [
            e$.importInput,
            (0, a.jsx)("main", {
                className: pO.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: pO.j5,
                              children: [
                                  eQ,
                                  (0, a.jsxs)("div", {
                                      className: pO.sD,
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
                                          (0, a.jsx)(eT.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: E.intl.string(S.default["WFJ/vb"]),
                                              onClick: () => (0, P.hF)(m),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(t_.bI.Provider, {
                              value: ez,
                              children: (0, a.jsx)(
                                  pD,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: eb,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: ed,
                                      frameLaunchParams: J,
                                      header: eQ,
                                      chatOpen: f,
                                      onCloseChat: ev,
                                      chatHeaderAction: eJ,
                                      debugOpen: b && g,
                                      onCloseDebug: e_,
                                      onRestoreVersion: C,
                                      onImportProject: (0, ew.PV)(s) ? e$.onImport : void 0,
                                      restoreState: N,
                                      previewReady: L,
                                      previewGate: eO,
                                      availability: U,
                                      activeMode: G,
                                      widgetApplicationId: Y,
                                      overlayWidgetSize: Q,
                                      previewPaused: et,
                                      onResumePreview: eR,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function pz() {
    return (0, a.jsx)(nt.y, { type: nt.t.SPINNING_CIRCLE_SIMPLE, className: pO.Hv, itemClassName: pO.C5 });
}
function pF(e) {
    return (0, a.jsx)(nX.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function pU(e) {
    return (0, a.jsx)(nZ.u, { ...e, size: "custom", width: 20, height: 20 });
}
function pG(e) {
    return (0, a.jsx)(nJ.k, { ...e, size: "custom", width: 20, height: 20 });
}
function pB(e) {
    return (0, a.jsx)(nY.H, { ...e, size: "custom", width: 20, height: 20 });
}
function pK(e) {
    let { guildId: t, projectId: n } = e,
        l = (0, o.yK)([c.Ay], () => c.Ay.getSelfMember(t)?.roles ?? [], [t]),
        r = (0, o.bG)(
            [d.A, m.A],
            () => {
                let e = d.A.getGuild(t);
                return null != e && m.A.can(O.xBc.MANAGE_GUILD, e);
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
            (0, u.pX)(O.BVt.CHANNEL(t, q.VV.CONJURE));
        }, [t]),
        h = (0, o.bG)(
            [ew.Ay],
            () => {
                if (null == s) return null;
                let e = ew.Ay.getProject(s);
                return null == e || (0, ew.PV)(e) || e.guild_id === t ? e : null;
            },
            [s, t],
        ),
        p = (0, o.bG)([ew.Ay], () => ew.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(pq, { project: h, projectsLoaded: p, onBack: f, guildId: t }, s)
        : (0, a.jsx)(nH, { guildId: t });
}
