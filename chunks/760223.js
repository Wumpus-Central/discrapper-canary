n.r(t), n.d(t, { default: () => e7 });
var l,
    i = n(477900),
    a = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(536637),
    d = n.n(o),
    c = n(17928),
    u = n(314116),
    p = n(534890),
    m = n(646270),
    g = n(31300),
    h = n(794083),
    f = n(939249),
    x = n(834730),
    j = n(691540),
    b = n(857250),
    v = n(97483),
    y = n(866665),
    C = n(408278),
    w = n(92446),
    k = n(625903),
    N = n(297264),
    A = n(821609),
    I = n(364522),
    E = n(103557),
    S = n(691885),
    P = n(289873),
    R = n(152367),
    _ = n(661531),
    D = n(627363),
    z = n(625180),
    M = n(672929),
    V = n(976860),
    T = n(885386),
    L = n(696451),
    G = n(71393),
    F = n(576705),
    B = n(486020),
    Y = n(759967),
    H = n(375708),
    K = n(673724),
    X = n(948230),
    O = n(976713),
    U = n(692200),
    q = n(683180),
    Z = n(208137),
    W = n(805332),
    $ = n(18739),
    Q = n(972786);
function J(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var ee = n(58703);
let et = [
    { date: "2026-09-05", summary: "GPT-6 Astra joins the model picker and now powers the Big Brain effort stop." },
    {
        date: "2026-09-05",
        summary:
            "Your app now has its own web address: pages people can open in a browser, a second address showing the version you are still working on, and a Sign in with Discord button that never asks anyone for a password.",
    },
    {
        date: "2026-09-05",
        summary:
            "Claude Fable 5.1 replaces Claude Fable 5 in the model picker, sharper on long builds at the same price.",
    },
    {
        date: "2026-09-03",
        summary: "Remix an app and Conjure builds your copy first, so the ideas it suggests are ones you can try.",
    },
    {
        date: "2026-09-03",
        summary:
            "Your published app stays playable while Conjure drives the preview, instead of both freezing at once.",
    },
    {
        date: "2026-09-02",
        summary:
            "One Effort scale, from Speedrun to Big Brain, sets how much thinking goes into a run, instead of choosing models and thinking levels separately.",
    },
    {
        date: "2026-09-02",
        summary:
            "Apps now know who\u2019s using them the moment they open, without asking anyone to sign in or approve anything.",
    },
    {
        date: "2026-09-02",
        summary:
            "A project you import gets fixed up and running straight away, instead of asking you to approve a plan.",
    },
    {
        date: "2026-09-02",
        summary:
            "Small follow-ups like adding sign-in are built straight away, instead of coming back as another plan to approve.",
    },
    {
        date: "2026-09-02",
        summary:
            "When a plan is redrawn, the new sketch keeps the look of the one before it, so your app still looks like itself.",
    },
    {
        date: "2026-09-01",
        summary:
            "Publishing now offers patch notes: Conjure drafts what changed since your last release, you edit them, and they post to a channel you pick.",
    },
    {
        date: "2026-09-01",
        summary: "People you share a project with can see the Publish control, instead of it being owner-only.",
    },
    {
        date: "2026-09-01",
        summary:
            "Checklist items Conjure is still working on show a spinner, so running and done tell apart at a glance.",
    },
    {
        date: "2026-08-31",
        summary: "Plan proposals come with a wireframe sketch, so you can see the shape of the app before you say go.",
    },
    {
        date: "2026-08-31",
        summary:
            "With Discord\u2019s Developer Mode on, a debug pane beside the builder shows your app\u2019s live logs and what your project is spending.",
    },
    {
        date: "2026-08-31",
        summary:
            "Your project gets a real name as soon as Conjure lands on a plan, instead of sitting as Untitled App.",
    },
    {
        date: "2026-08-31",
        summary:
            "App icons are drawn to suit what the app actually does, and always come back solid rather than see-through.",
    },
    {
        date: "2026-08-28",
        summary: "Apps you install just for yourself can hold an ordinary back-and-forth conversation with you in DMs.",
    },
    {
        date: "2026-08-26",
        summary:
            "You can move back and forth through Conjure\u2019s questions instead of being held on the one in front of you.",
    },
    {
        date: "2026-08-26",
        summary: "Hand a project to a whole role in settings, rather than adding one person at a time.",
    },
    {
        date: "2026-08-25",
        summary: "Conjuring has its own doorway in the desktop title bar, so it is one click away from anywhere.",
    },
];
var en = n(413927);
function el() {
    let e = et.slice(0, 3);
    if (0 === e.length) return null;
    let t = H.intl.string(Y.default.x07mpp);
    return (0, i.jsxs)("section", {
        className: en.rN,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: en.bZ,
                children: [
                    (0, i.jsx)(x.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: H.intl.string(Y.default.h5CwHI),
                    }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: en.V,
                children: e.map((e) =>
                    (0, i.jsxs)(
                        "li",
                        {
                            className: en.S3,
                            children: [
                                (0, i.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: en.VO,
                                    children: (0, ee.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                }),
                                (0, i.jsx)(x.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: e.summary,
                                }),
                            ],
                        },
                        `${e.date}-${e.summary}`,
                    ),
                ),
            }),
        ],
    });
}
var ei = n(59345),
    ea = n(922016),
    es = n(980707),
    er = n(477782),
    eo = n(81369),
    ed = n(402879);
async function ec(e, t, n) {
    (0, $.Hc)(e);
    let l = await (0, $.vX)(e, t);
    (0, $.dv)(e, n, [l]);
}
function eu(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, K.x5)(e.size, t)
        ? null
        : H.intl.formatToPlainString(Y.default.AzziHF, { size: (0, K.ZJ)((0, K.yr)(t)) });
}
async function ep(e, t) {
    let n,
        l =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "vibegration" : n}.zip`),
        i = await (0, $.cS)(e, l);
    await (0, ed.F)(i, l);
}
function em(e) {
    let t = a.useRef(null),
        n = a.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                (t.target.value = ""), null != n && e(n);
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, i.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: n,
        }),
    };
}
var eg = n(950305),
    eh = n(664121);
let ef = [
    { value: "user", icon: eg.UserIcon, nameMessage: Y.default.iqXIRN },
    { value: "guild", icon: eh.R, nameMessage: Y.default.LdgKdI },
];
function ex(e) {
    let { importing: t, onImport: n } = e,
        l = a.useRef(null),
        s = em(a.useCallback((e) => n(e, "user"), [n])),
        r = em(a.useCallback((e) => n(e, "guild"), [n])),
        o = { user: s.open, guild: r.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ea.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: ea.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(es.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": H.intl.string(Y.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(er.rX, {
                            label: H.intl.string(Y.default.MLg0S8),
                            children: ef
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: H.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        er.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: a } = n;
                    return (0, i.jsx)(A.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: eo.H,
                        text: H.intl.string(Y.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": a,
                    });
                },
            }),
            s.input,
            r.input,
        ],
    });
}
var ej = n(113491),
    eb = n(629584),
    ev = n(148853),
    ey = n(491920);
function eC(e) {
    let { modes: t, mode: n, onChange: l, className: s } = e,
        o = a.useMemo(() => t.map((e) => ({ value: e, name: (0, ev.kZ)(e), "aria-controls": (0, ev.z3)(e) })), [t]),
        d = a.useCallback(
            (e) => {
                l(e.value);
            },
            [l],
        );
    return null == n
        ? null
        : (0, i.jsx)(eb.I, {
              role: "tablist",
              look: "pill",
              className: r()(ey.b, s),
              optionClassName: ey.u,
              options: o,
              value: n,
              onChange: d,
          });
}
var ew = n(663417),
    ek = n(70688),
    eN = n(173936),
    eA = n(365199),
    eI = n(770818),
    eE = n(147036),
    eS = n(957565),
    eP = n(557875),
    eR = n(869369),
    e_ = n(123917);
let eD = new Set();
n(321073);
var ez = n(746080);
let eM = [];
function eV(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: s,
            isOwner: r,
            isShared: o,
            onExport: d,
            onImport: p,
            onRemix: m,
            onConnectTool: g,
            onVersionHistory: h,
            onRefresh: f,
            isRefreshing: x = !1,
            onClose: y,
            refreshApplicationId: w,
            previewProjectId: N,
        } = e,
        A = a.useRef(null),
        { pending: I, refresh: E } = (0, eI.A)(w ?? null),
        { pending: S, connect: P } = (function (e) {
            let [t, n] = a.useState(eD),
                l = a.useRef(eD),
                i = a.useCallback((e) => {
                    (l.current = (0, eP.Q6)(l.current, e)), n(l.current);
                }, []);
            return {
                pending: t,
                connect: a.useCallback(
                    (t) => {
                        if (null == e) return;
                        let a = (0, eP.K9)(l.current, t.type);
                        async function s() {
                            let n = await (0, $.JI)(e, t.type);
                            if ((i(t.type), "url" === n.type)) return void (0, e_.h)({ href: n.url, trusted: !1 });
                            let l =
                                "setup" === (0, eP.rq)(n.error)
                                    ? H.intl.string(Y.default.avu1u4)
                                    : H.intl.string(Y.default["5fwOcF"]);
                            (0, j.P0)((0, b.o)(l, v.Ck.FAILURE));
                        }
                        null != a && ((l.current = a), n(a), s().catch(() => i(t.type)));
                    },
                    [e, i],
                ),
            };
        })(N ?? null),
        R = (0, c.bG)([$.Ay], () => (null == N ? eM : $.Ay.getDeclaredConnections(N))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: i } = e,
                a = [];
            for (let { connection: e, offer: s } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: H.intl.string(Y.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: H.intl.formatToPlainString(Y.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: H.intl.formatToPlainString(Y.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({
            canRefresh: null != w,
            refreshPending: I,
            offers: a.useMemo(() => (0, eP.Xl)(R), [R]),
            connectPending: S,
        }),
        D = a.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        z = null != m && (r || o),
        M = r && null != p,
        V = z || null != d || M || null != g || null != h,
        T = eS.p5 && null != l;
    return null != f || null != y || V || T || r
        ? (0, i.jsx)(ea.Y, {
              targetElementRef: A,
              position: "bottom",
              align: "right",
              animation: ea.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsxs)(es.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": H.intl.string(H.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          null != f || null != y
                              ? (0, i.jsxs)(er.rX, {
                                    children: [
                                        null != f
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "refresh",
                                                  icon: ew.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: ew.RefreshIcon },
                                                  label: H.intl.string(Y.default.xKexN1),
                                                  disabled: x,
                                                  action: f,
                                              })
                                            : null,
                                        null != y
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "close",
                                                  icon: ek.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: ek.DoorExitIcon },
                                                  label: H.intl.string(Y.default.Ea0Wrr),
                                                  action: y,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, i.jsx)(er.rX, {
                                    children: _.map((e) =>
                                        (0, i.jsx)(
                                            er.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void E();
                                                    let t = null == e.connectionType ? null : D.get(e.connectionType);
                                                    null != t && P(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          V
                              ? (0, i.jsxs)(er.rX, {
                                    children: [
                                        z
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "remix",
                                                  label: H.intl.string(Y.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "export",
                                                  label: H.intl.string(Y.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        M
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "import",
                                                  label: H.intl.string(Y.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "connect-tool",
                                                  label: H.intl.string(Y.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != h
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "version-history",
                                                  label: H.intl.string(Y.default.jAWwzi),
                                                  action: h,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          T
                              ? (0, i.jsx)(er.rX, {
                                    children: (0, i.jsx)(er.Dr, {
                                        id: "copy-link",
                                        label: H.intl.string(H.t.WqhZss),
                                        icon: eN.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: eN.LinkIcon },
                                        action: () =>
                                            (0, eS.C)((0, eE.n)(l, ez.VV.VIBEGRATIONS, t), () =>
                                                (0, j.P0)((0, b.o)(H.intl.string(H.t["L/PwZf"]), v.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, i.jsxs)(er.rX, {
                                    children: [
                                        (0, i.jsx)(er.Dr, {
                                            id: "settings",
                                            label: H.intl.string(Y.default["xhcY+n"]),
                                            icon: k.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: k.SettingsIcon },
                                            action: () => (0, eR.A)(t, s ?? l),
                                        }),
                                        (0, i.jsx)(er.Dr, {
                                            id: "delete",
                                            label: H.intl.string(H.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: H.intl.formatToPlainString(Y.default.ZokHVz, { name: n }),
                                                    subtitle: H.intl.string(Y.default.NmF939),
                                                    confirmText: H.intl.string(H.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, X.xx)(t)).ok)
                                                            throw Error(H.intl.string(Y.default.tqKZCi));
                                                    },
                                                });
                                            },
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  });
              },
              children: (e, t) => {
                  let { isShown: n } = t;
                  return (0, i.jsx)(C.K, {
                      ...e,
                      buttonRef: A,
                      icon: eA.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": H.intl.string(H.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": n,
                  });
              },
          })
        : null;
}
var eT = n(742589),
    eL = n(769979);
function eG(e) {
    let { title: t, actions: n, breadcrumb: l } = e;
    return (0, i.jsx)(eT.A, {
        hideSearch: !0,
        toolbar: n,
        className: eL.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: eL.QF,
            children: [
                (0, i.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.colors.TEXT_STRONG,
                    className: eL.Kk,
                }),
                null != l
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eT.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, i.jsx)(eT.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(eT.A.Title, { className: eL.Qw, wrapperClassName: eL.DD, children: t }),
            ],
        }),
    });
}
var eF = n(321593),
    eB = n(580954),
    eY = n(192308),
    eH = n(189213),
    eK = (((l = {}).NO_PREVIEW = "no-preview"), (l.PERMISSIONS = "permissions"), l);
function eX(e) {
    let { reason: t, transitionState: n, onClose: l } = e,
        a = "permissions" === t;
    return (0, i.jsx)(eH.Modal, {
        transitionState: n,
        onClose: l,
        title: H.intl.string(a ? Y.default.Rtlv25 : Y.default["+UouPe"]),
        subtitle: H.intl.string(a ? Y.default["nDQB/b"] : Y.default["E0QD++"]),
        size: "sm",
        actions: [{ text: H.intl.string(a ? H.t.BddRzS : Y.default["+Zh4FA"]), variant: "primary", onClick: l }],
    });
}
function eO(e) {
    (0, eY.openModal)((t) => (0, i.jsx)(eX, { ...t, reason: e }));
}
var eU = n(480007),
    eq = n(584936),
    eZ = n(899154),
    eW = n(652215),
    e$ = n(675210),
    eQ = n(165610),
    eJ = n(352978);
function e0(e) {
    return (0, i.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function e2(e) {
    return (0, i.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function e1(e) {
    return (0, i.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function e6(e) {
    return (0, i.jsx)(h.b, { ...e, size: "custom", width: 20, height: 20 });
}
function e8(e) {
    let t,
        n,
        l,
        s,
        r,
        { project: o, guildId: c, onSelect: p, onRemix: m } = e,
        g =
            ((t = o.id),
            (n = o.name),
            (l = a.useRef(!1)),
            (s = a.useCallback(() => {
                l.current ||
                    ((l.current = !0),
                    (0, j.P0)((0, b.o)(H.intl.formatToPlainString(Y.default.u9TapG, { name: n }), v.Ck.MESSAGE)),
                    ep(t, n)
                        .catch((e) => {
                            let n;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, j.P0)(
                                    (0, b.o)(
                                        409 === (n = e instanceof $._v ? e.status : null)
                                            ? H.intl.string(Y.default.uB40Hz)
                                            : 404 === n
                                              ? H.intl.string(Y.default.wCq2jC)
                                              : H.intl.string(Y.default.G2GqyP),
                                        v.Ck.FAILURE,
                                    ),
                                );
                        })
                        .finally(() => {
                            l.current = !1;
                        }));
            }, [t, n])),
            {
                onExport: s,
                onImport: (r = em(
                    a.useCallback(
                        (e) => {
                            let l = eu(e);
                            null != l
                                ? (0, j.P0)((0, b.o)(l, v.Ck.FAILURE))
                                : (0, u.A)({
                                      title: H.intl.formatToPlainString(Y.default.XYZqZK, { name: n }),
                                      subtitle: H.intl.string(Y.default["6syXoH"]),
                                      confirmText: H.intl.string(Y.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, V.pX)(eW.BVt.CHANNEL(c, ez.VV.VIBEGRATIONS, t));
                                          try {
                                              await ec(t, e, H.intl.string(Y.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), v.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, n, c],
                    ),
                )).open,
                importInput: r.input,
            }),
        h = o.preview_application_id ?? o.application_id,
        { data: y } = (0, D.YY)(h),
        C =
            null == o.updated_at
                ? null
                : H.intl.formatToPlainString(Y.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: eJ.OY,
        children: [
            (0, i.jsx)(eF.Ay, { projectId: o.id }),
            (0, i.jsxs)(f.D, {
                className: eJ.W6,
                onClick: p,
                children: [
                    (0, i.jsx)("img", {
                        alt: "",
                        src: B.Ay.getApplicationIconURL({ id: h, icon: y?.icon, size: 40 }),
                        className: eJ.VJ,
                    }),
                    (0, i.jsxs)("div", {
                        className: eJ.MM,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: eJ.j1,
                                children: o.name,
                            }),
                            null == C
                                ? null
                                : (0, i.jsx)("div", {
                                      className: eJ.h3,
                                      children: (0, i.jsx)(x.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: C,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: eJ.M2,
                children: (0, i.jsxs)("div", {
                    className: eJ.Pl,
                    children: [
                        (0, i.jsx)(eV, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: c,
                            projectGuildId: o.guild_id,
                            isOwner: (0, Q.PV)(o),
                            isShared: (0, K.tr)(o),
                            onRemix: m,
                            onExport: g.onExport,
                            onImport: g.onImport,
                        }),
                        g.importInput,
                    ],
                }),
            }),
        ],
    });
}
function e9(e) {
    let { project: t, projectsLoaded: l, onBack: s, guildId: r } = e,
        [o, d] = a.useState(!1),
        [p, m] = a.useState(!0),
        [g, h] = a.useState(!1),
        [f, I] = a.useState(!1),
        E = T.Q_.useSetting(),
        [S, P] = a.useState(null),
        [R, _] = a.useState(null),
        L = t?.id ?? null,
        G = a.useRef(L),
        F = a.useRef(!0),
        B = a.useRef(!1),
        O = a.useRef(null);
    (G.current = L),
        a.useEffect(
            () => (
                (F.current = !0),
                () => {
                    F.current = !1;
                }
            ),
            [],
        );
    let q = (0, c.bG)([Q.Ay], () => (null == L ? null : Q.Ay.getIntegrationStatus(L)), [L]),
        { data: Z, isLoading: J } = (0, D.YY)(t?.preview_application_id ?? void 0),
        ee = null != L && R !== L,
        et = q?.preview_ready === !0,
        en = q?.has_activity === !0,
        {
            availability: el,
            activeMode: ea,
            setMode: es,
            widgetApplicationId: er,
        } = (0, eZ.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: en,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: q?.owner_authorization_revoked === !0,
        }),
        eo = (0, e$.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: et,
            integrationInstalled: q?.integration_installed ?? null,
            botPermissionsChanged: q?.bot_permissions_changed === !0,
        }),
        ed = o || ee || J,
        ep = H.intl.string(Y.default["5gU57O"]),
        eg = p && !f && !g,
        eh = H.intl.string(eg ? Y.default.YdgE0j : Y.default.aWVf4j),
        ef = a.useCallback(() => {
            if (f || g) {
                I(!1), h(!1), m(!0);
                return;
            }
            m((e) => !e);
        }, [f, g]),
        ex = a.useCallback(() => m(!1), []),
        ej = a.useCallback(() => {
            I((e) => !e && (m(!0), h(!1), !0));
        }, []),
        eb = a.useCallback(() => I(!1), []),
        ev = a.useCallback(
            (e) => {
                if (null == t || B.current) return;
                let n = t.id;
                function l() {
                    return F.current && G.current === n;
                }
                (B.current = !0),
                    h(!1),
                    m(!0),
                    P({ entry: e, status: "restoring" }),
                    (0, $.oB)(n, e.sha)
                        .then(
                            () => {
                                l() && P({ entry: e, status: "restored" });
                            },
                            (t) => {
                                l() &&
                                    (P({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", n, t),
                                    (0, j.P0)((0, b.o)(H.intl.string(Y.default.q6iZ84), v.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            l() && (B.current = !1);
                        });
            },
            [t],
        ),
        ey = (0, c.bG)([W.A], () => W.A.isBuilderPreviewMobile()),
        ew = H.intl.string(ey ? Y.default["3uCc8U"] : Y.default["+nzCxZ"]),
        ek = a.useCallback(() => (0, X.GG)(!ey), [ey]),
        eN = (0, M.A)(t?.preview_application_id ?? null, eQ.sd),
        eA = (0, eQ.x1)(eN) && eN.data.proxyTicketRefreshing,
        eI = a.useCallback(() => {
            null == eN || eA || z.A.refreshProxyTicket(eN.id);
        }, [eN, eA]),
        eE = a.useCallback(() => {
            var e, n;
            null != t && ((e = t.id), (n = eN?.id), (0, $.Bn)(e), (0, eB.A)().leaveFrame(n)), s();
        }, [t, eN?.id, s]),
        eS = a.useCallback(() => {
            null != t && (m(!0), (0, $.dv)(t.id, H.intl.string(Y.default["2ejwtJ"])));
        }, [t]),
        eP = em(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let n = t.id,
                        l = eu(e);
                    null != l
                        ? (0, j.P0)((0, b.o)(l, v.Ck.FAILURE))
                        : (0, u.A)({
                              title: H.intl.formatToPlainString(Y.default.XYZqZK, { name: t.name }),
                              subtitle: H.intl.string(Y.default["6syXoH"]),
                              confirmText: H.intl.string(Y.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await ec(n, e, H.intl.string(Y.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        e_ = a.useCallback(() => {
            null != t && (0, eq.A)(t, r);
        }, [t, r]),
        eD = a.useCallback(async () => {
            if (null == L || G.current !== L) return;
            O.current?.abort();
            let e = new AbortController();
            (O.current = e), _(null);
            try {
                await (0, X.U1)(L, e.signal);
            } catch {
            } finally {
                e.signal.aborted || O.current !== e || G.current !== L || _(L);
            }
        }, [L]);
    a.useEffect(
        () => (
            eD(),
            () => {
                O.current?.abort(), (O.current = null);
            }
        ),
        [eD],
    );
    let eM = q?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eT = a.useCallback(async () => {
            null == t ||
                (t.guild_id === eM && t.preview_guild_id === eM) ||
                (await (0, X.M7)(t.id, { guild_id: eM, preview_guild_id: eM }));
        }, [eM, t]),
        eL = a.useCallback(async () => {
            try {
                await eT();
            } catch {}
            await eD();
        }, [eD, eT]),
        eF = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                U.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: Z ?? null,
                    guildId: eM,
                    onClose: () => {
                        eL();
                    },
                });
        }, [eL, eM, Z, t]),
        eH = eo
            ? { type: "permissions", onReviewPermissions: eF, loading: J || ee }
            : ee && null == q
              ? { type: "checking" }
              : void 0;
    a.useEffect(() => {
        null == t && l && (0, V.pX)(eW.BVt.CHANNEL(r, ez.VV.VIBEGRATIONS));
    }, [r, t, l]);
    let eX = a.useCallback((e) => {
            d(!0);
            let t = (0, $.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(H.intl.string(Y.default.fNP6Cd));
                (0, X.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, j.P0)(
                            (0, b.o)(e instanceof Error ? e.message : H.intl.string(Y.default.fNP6Cd), v.Ck.FAILURE),
                        );
                    })
                    .finally(() => d(!1)),
                t
            );
        }, []),
        e8 = a.useCallback(() => {
            if (null == t) return;
            if (!et) return void eO(eK.NO_PREVIEW);
            if (eo) return void eO(eK.PERMISSIONS);
            let e = (0, $.$C)(t.id);
            e.catch(() => {}),
                (0, eU.A)({
                    projectId: t.id,
                    guildId: r,
                    applicationId: t.application_id,
                    projectName: t.name,
                    publish: eX(t.id),
                    initialDraft: e,
                });
        }, [r, eo, et, t, eX]),
        e9 = (0, i.jsx)(eG, {
            title: t?.name ?? H.intl.string(Y.default.F2dRba),
            breadcrumb: { title: H.intl.string(Y.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: eJ.FO,
                          children: [
                              el.showModeSwitch ? (0, i.jsx)(eC, { modes: el.modes, mode: ea, onChange: es }) : null,
                              (0, i.jsx)(y.m, {
                                  text: ew,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(C.K, {
                                      icon: ey ? e1 : e2,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": ew,
                                      "aria-pressed": ey,
                                      onClick: ek,
                                  }),
                              }),
                              (0, i.jsx)("div", { className: eJ.YJ }),
                              E
                                  ? (0, i.jsx)(y.m, {
                                        text: H.intl.string(Y.default["8MLfBT"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: w.BugIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": H.intl.string(Y.default["8MLfBT"]),
                                            "aria-pressed": f,
                                            onClick: ej,
                                        }),
                                    })
                                  : null,
                              eg
                                  ? null
                                  : (0, i.jsx)(y.m, {
                                        text: eh,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: e0,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": eh,
                                            "aria-pressed": eg,
                                            onClick: ef,
                                        }),
                                    }),
                              (0, Q.PV)(t)
                                  ? (0, i.jsx)(y.m, {
                                        text: H.intl.string(Y.default["xhcY+n"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: k.SettingsIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": H.intl.string(Y.default["xhcY+n"]),
                                            onClick: () => (0, eR.A)(t.id, t.guild_id ?? r),
                                        }),
                                    })
                                  : null,
                              (0, Q.jf)(t)
                                  ? (0, i.jsx)(y.m, {
                                        text: ep,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: e6,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": ep,
                                            loading: o,
                                            disabled: ed,
                                            onClick: e8,
                                        }),
                                    })
                                  : null,
                              (0, i.jsx)(eV, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, Q.PV)(t),
                                  isShared: (0, K.tr)(t),
                                  onRefresh: (0, eQ.x1)(eN) ? eI : void 0,
                                  isRefreshing: eA,
                                  onClose: eE,
                                  onExport: eS,
                                  onImport: eP.open,
                                  onRemix: e_,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eY.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("461590"),
                                              ]).then(n.bind(n, 84469));
                                              return (n) => (0, i.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      S?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                m(!0), I(!1), h(!0);
                                            },
                                  refreshApplicationId:
                                      el.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== el.profileState
                                          ? er
                                          : null,
                                  previewProjectId: t.id,
                              }),
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: eJ.nj,
        children: [
            eP.input,
            (0, i.jsx)("main", {
                className: eJ.JX,
                children:
                    null == t
                        ? (0, i.jsxs)("div", {
                              className: eJ.j5,
                              children: [
                                  e9,
                                  (0, i.jsxs)("div", {
                                      className: eJ.sD,
                                      children: [
                                          (0, i.jsx)(N.D, {
                                              variant: "heading-lg/semibold",
                                              children: H.intl.string(Y.default.F2dRba),
                                          }),
                                          (0, i.jsx)(x.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: H.intl.string(Y.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(A.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: H.intl.string(Y.default["42EdIV"]),
                                              onClick: () => (0, X.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              ei.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: eQ.sd,
                                  header: e9,
                                  chatOpen: p,
                                  onCloseChat: ex,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => h(!1),
                                  debugOpen: E && f,
                                  onCloseDebug: eb,
                                  onRestoreVersion: ev,
                                  restoreState: S,
                                  previewReady: et,
                                  previewGate: eH,
                                  availability: el,
                                  activeMode: ea,
                                  widgetApplicationId: er,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function e3(e) {
    let {
            projects: t,
            sharedProjects: n,
            fetchState: l,
            idea: s,
            guildId: o,
            submitting: d,
            createError: c,
            createDisabled: u,
            installScope: p,
            onInstallScopeChange: m,
            installScopeError: g,
            modelSettings: h,
            onModelSettingsChange: j,
            onSelectProject: b,
            onIdeaChange: v,
            onCreate: y,
            onImportNewProject: C,
            importing: w,
        } = e,
        k = a.useMemo(
            () =>
                n
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [n],
        ),
        D = a.useRef(null);
    a.useEffect(() => {
        null != g && D.current?.querySelector("button")?.focus();
    }, [g]);
    let z = a.useMemo(
            () =>
                t
                    .filter((e) => (0, q.X0)(e, o))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, o],
        ),
        M = H.intl.string(Y.default.TU9IGR),
        V = [
            H.intl.string(Y.default["E+Q26x"]),
            H.intl.string(Y.default["06/jqP"]),
            H.intl.string(Y.default["3gSfUa"]),
        ],
        T = [
            {
                id: "feature-showcase",
                name: H.intl.string(Y.default.BLDsiz),
                description: H.intl.string(Y.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: H.intl.string(Y.default["+abXa8"]),
                description: H.intl.string(Y.default.OZYPMR),
            },
        ],
        L = H.intl.string(Y.default.FYK2xQ),
        G = H.intl.string(Y.default["/SUK82"]),
        F = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || y());
            },
            [u, y],
        );
    return (0, i.jsxs)("div", {
        className: r()(eJ.nj, eJ.a0),
        children: [
            (0, i.jsx)(eG, { title: H.intl.string(Y.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: eJ.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: eJ.ps,
                        children: [
                            (0, i.jsx)(I.Ip, {
                                className: eJ.Yy,
                                children: (0, i.jsx)("div", {
                                    className: eJ.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(eJ.Qs, eJ.Ix),
                                        children: [
                                            (0, i.jsx)(N.D, {
                                                variant: "heading-xl/semibold",
                                                children: H.intl.string(Y.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: eJ.WI,
                                                "aria-label": L,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: eJ.G9,
                                                        children: [
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: L,
                                                            }),
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(Y.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: eJ.Aw,
                                                        children: T.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: eJ.EA,
                                                                    children: (0, i.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": H.intl.formatToPlainString(
                                                                            Y.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(eJ.nx, eJ.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return y(
                                                                                      ((t = e.name),
                                                                                      H.intl.formatToPlainString(
                                                                                          Y.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, i.jsx)(x.E, {
                                                                                className: eJ.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, i.jsx)(x.E, {
                                                                                className: eJ.BK,
                                                                                variant: "text-sm/normal",
                                                                                color: "text-subtle",
                                                                                children: e.description,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                },
                                                                e.id,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: eJ.WI,
                                                "aria-label": G,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: eJ.G9,
                                                        children: [
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: G,
                                                            }),
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(Y.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: eJ.Aw,
                                                        children: V.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: eJ.EA,
                                                                    children: (0, i.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: eJ.nx,
                                                                        onClick: d ? void 0 : () => y(e),
                                                                        children: (0, i.jsx)(x.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: eJ.un,
                                                                            children: e,
                                                                        }),
                                                                    }),
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsx)(el, {}),
                                        ],
                                    }),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: eJ.Yl,
                                children: (0, i.jsxs)("div", {
                                    className: r()(eJ.Qs, eJ.DA),
                                    children: [
                                        (0, i.jsx)(E.f, {
                                            label: M,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: M,
                                            error: c,
                                            onChange: v,
                                            onKeyDown: F,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: eJ.VP,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: eJ.gH,
                                                    ref: D,
                                                    children: (0, i.jsx)(S.l, {
                                                        selectionMode: "single",
                                                        label: H.intl.string(Y.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: H.intl.string(Y.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: H.intl.string(Y.default.MLg0S8),
                                                                options: ef.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: H.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: g,
                                                    }),
                                                }),
                                                (0, i.jsx)(ej.A, {
                                                    settings: h ?? O.Cl,
                                                    choices: (0, Z.e)()
                                                        ? {
                                                              main: [...K.S8.main, ...K.wF.main],
                                                              subagent: [...K.S8.subagent, ...K.wF.subagent],
                                                              thinking: K.S8.thinking,
                                                          }
                                                        : K.S8,
                                                    disabled: d,
                                                    onChange: j,
                                                }),
                                                (0, i.jsx)(A.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: H.intl.string(H.t.CumH4u),
                                                    disabled: u,
                                                    loading: d,
                                                    onClick: () => y(),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("aside", {
                        className: eJ.pA,
                        "aria-label": H.intl.string(Y.default.Bo5fE3),
                        children: [
                            (0, i.jsxs)("div", {
                                className: eJ.IR,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: eJ.RM,
                                        children: [
                                            (0, i.jsx)(x.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: H.intl.string(Y.default.Bo5fE3),
                                            }),
                                            (0, i.jsx)(x.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: H.intl.string(Y.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(ex, { importing: w, onImport: C }),
                                ],
                            }),
                            (0, i.jsxs)(I.Ip, {
                                className: eJ.xe,
                                children: [
                                    (null == l || "loading" === l.type) && 0 === z.length
                                        ? (0, i.jsx)("div", { className: eJ.E8, children: (0, i.jsx)(P.y, {}) })
                                        : l?.type === "error" && 0 === z.length
                                          ? (0, i.jsxs)("div", {
                                                className: eJ.E8,
                                                children: [
                                                    (0, i.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: eJ.JS,
                                                        children: H.intl.string(Y.default["IN/HRP"]),
                                                    }),
                                                    (0, i.jsx)(A.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: H.intl.string(Y.default["42EdIV"]),
                                                        onClick: () => (0, X.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === z.length
                                            ? (0, i.jsx)("div", {
                                                  className: eJ.D1,
                                                  children: (0, i.jsxs)("div", {
                                                      className: eJ.ST,
                                                      children: [
                                                          (0, i.jsx)(R.D, {
                                                              size: "lg",
                                                              color: _.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: eJ.sI,
                                                              children: H.intl.string(Y.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsx)("div", {
                                                  className: eJ.Dq,
                                                  children: z.map((e) =>
                                                      (0, i.jsx)(
                                                          e8,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => b(e.id),
                                                              onRemix: () => (0, eq.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    k.length > 0
                                        ? (0, i.jsxs)("div", {
                                              className: eJ.qx,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: eJ.uc,
                                                      children: [
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: H.intl.string(Y.default.jrCnUc),
                                                          }),
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: H.intl.string(Y.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: eJ.Dq,
                                                      children: k.map((e) =>
                                                          (0, i.jsx)(
                                                              e8,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => b(e.id),
                                                                  onRemix: () => (0, eq.A)(e, o),
                                                              },
                                                              e.id,
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e7(e) {
    let t,
        { guildId: n, projectId: l } = e,
        s = (0, c.yK)([Q.Ay], () => Q.Ay.getOwnedProjects()),
        r = (0, c.bG)([Q.Ay], () => Q.Ay.getProjectsFetchState()),
        o = (0, c.yK)([Q.Ay], () => Q.Ay.getSharedProjects(n), [n]),
        d = (0, c.yK)([L.Ay], () => L.Ay.getSelfMember(n)?.roles ?? [], [n]),
        u = (0, c.bG)([G.A, F.A], () => {
            let e = G.A.getGuild(n);
            return null != e && F.A.can(eW.xBc.MANAGE_GUILD, e);
        }, [n]),
        [p, m] = a.useState(""),
        g = l ?? null,
        [h, f] = a.useState(!1),
        [x, y] = a.useState(null),
        [C, w] = a.useState("guild"),
        [k, N] = a.useState(null),
        [A, I] = a.useState(null);
    a.useEffect(() => {
        (0, X.hF)(n);
    }, [n, d, u]),
        a.useEffect(() => {
            (0, X.dm)(n, g);
        }, [n, g]);
    let E = a.useCallback((e) => {
            w(e), N(null);
        }, []),
        S = a.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    l = J({ idea: t, installScope: C, submitting: h });
                if ("idea" !== l && "submitting" !== l) {
                    if (null == C) return void N(H.intl.string(Y.default.jQ3nQB));
                    null != e && m(e), f(!0), y(null);
                    try {
                        let e = await (0, X.gA)({ guild_id: n, install_scope: C });
                        (0, $.Hc)(e),
                            (0, $.r2)(e, A ?? O.Cl),
                            (0, $.dv)(e, t),
                            (0, V.pX)(eW.BVt.CHANNEL(n, ez.VV.VIBEGRATIONS, e)),
                            m(""),
                            I(null);
                    } catch (e) {
                        y(e instanceof Error ? e.message : H.intl.string(Y.default.KKkp5Y));
                    } finally {
                        f(!1);
                    }
                }
            },
            [C, n, p, A, h],
        ),
        [P, R] = a.useState(!1),
        _ = a.useCallback(
            async (e, t) => {
                let l = eu(e);
                if (null != l) return void (0, j.P0)((0, b.o)(l, v.Ck.FAILURE));
                R(!0);
                let i = null;
                try {
                    (i = await (0, X.gA)({ guild_id: n, install_scope: t })),
                        (0, $.Hc)(i),
                        (0, $.r2)(i, A ?? O.Cl),
                        await ec(i, e, H.intl.string(Y.default.KjEtrZ)),
                        (0, V.pX)(eW.BVt.CHANNEL(n, ez.VV.VIBEGRATIONS, i)),
                        I(null);
                } catch {
                    null != i && (await (0, X.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), v.Ck.FAILURE));
                } finally {
                    R(!1);
                }
            },
            [n, A],
        ),
        D = a.useCallback(
            (e) => {
                (0, V.pX)(eW.BVt.CHANNEL(n, ez.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        z = a.useCallback(() => {
            (0, V.pX)(eW.BVt.CHANNEL(n, ez.VV.VIBEGRATIONS));
        }, [n]),
        M = a.useCallback((e) => {
            m(e), y(null);
        }, []),
        T = (0, c.bG)([Q.Ay], () => {
            if (null == g) return null;
            let e = Q.Ay.getProject(g);
            return null == e || (0, Q.PV)(e) || e.guild_id === n ? e : null;
        }, [g, n]),
        B = (0, c.bG)([Q.Ay], () => Q.Ay.hasFetchedGuildProjects(n), [n]);
    return null != g
        ? (0, i.jsx)(e9, { project: T, projectsLoaded: B, onBack: z, guildId: n }, g)
        : (0, i.jsx)(e3, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: A,
              onModelSettingsChange: I,
              idea: p,
              guildId: n,
              submitting: h,
              createError: x,
              createDisabled: "idea" === (t = J({ idea: p, installScope: C, submitting: h })) || "submitting" === t,
              onSelectProject: D,
              onIdeaChange: M,
              onCreate: S,
              onImportNewProject: _,
              importing: P,
              installScope: C,
              onInstallScopeChange: E,
              installScopeError: k,
          });
}
