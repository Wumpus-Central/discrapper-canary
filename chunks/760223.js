l.r(t), l.d(t, { default: () => e7 });
var n,
    i = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    o = l(536637),
    d = l.n(o),
    c = l(17928),
    u = l(314116),
    p = l(534890),
    m = l(646270),
    g = l(31300),
    h = l(794083),
    f = l(939249),
    x = l(834730),
    j = l(691540),
    b = l(857250),
    v = l(97483),
    y = l(866665),
    C = l(408278),
    w = l(92446),
    k = l(625903),
    N = l(297264),
    A = l(821609),
    I = l(364522),
    E = l(103557),
    S = l(691885),
    R = l(289873),
    P = l(152367),
    _ = l(661531),
    z = l(627363),
    D = l(625180),
    M = l(672929),
    V = l(976860),
    T = l(885386),
    L = l(696451),
    G = l(71393),
    F = l(576705),
    B = l(486020),
    Y = l(50617),
    H = l(375708),
    K = l(673724),
    X = l(948230),
    O = l(976713),
    U = l(692200),
    q = l(683180),
    Z = l(208137),
    W = l(805332),
    $ = l(18739),
    Q = l(972786);
function J(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var ee = l(58703);
let et = [
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
var el = l(413927);
function en() {
    let e = et.slice(0, 3);
    if (0 === e.length) return null;
    let t = H.intl.string(Y.default.x07mpp);
    return (0, i.jsxs)("section", {
        className: el.rN,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: el.bZ,
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
                className: el.V,
                children: e.map((e) =>
                    (0, i.jsxs)(
                        "li",
                        {
                            className: el.S3,
                            children: [
                                (0, i.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: el.VO,
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
var ei = l(59345),
    ea = l(922016),
    es = l(980707),
    er = l(477782),
    eo = l(81369),
    ed = l(402879);
async function ec(e, t, l) {
    (0, $.Hc)(e);
    let n = await (0, $.vX)(e, t);
    (0, $.dv)(e, l, [n]);
}
function eu(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, K.x5)(e.size, t)
        ? null
        : H.intl.formatToPlainString(Y.default.AzziHF, { size: (0, K.ZJ)((0, K.yr)(t)) });
}
async function ep(e, t) {
    let l,
        n =
            ((l = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === l ? "vibegration" : l}.zip`),
        i = await (0, $.cS)(e, n);
    await (0, ed.F)(i, n);
}
function em(e) {
    let t = a.useRef(null),
        l = a.useCallback(
            (t) => {
                let l = t.target.files?.[0] ?? null;
                (t.target.value = ""), null != l && e(l);
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
            onChange: l,
        }),
    };
}
var eg = l(950305),
    eh = l(664121);
let ef = [
    { value: "user", icon: eg.UserIcon, nameMessage: Y.default.iqXIRN },
    { value: "guild", icon: eh.R, nameMessage: Y.default.LdgKdI },
];
function ex(e) {
    let { importing: t, onImport: l } = e,
        n = a.useRef(null),
        s = em(a.useCallback((e) => l(e, "user"), [l])),
        r = em(a.useCallback((e) => l(e, "guild"), [l])),
        o = { user: s.open, guild: r.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ea.Y, {
                targetElementRef: n,
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
                children: (e, l) => {
                    let { isShown: a } = l;
                    return (0, i.jsx)(A.$, {
                        ...e,
                        buttonRef: n,
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
var ej = l(113491),
    eb = l(629584),
    ev = l(148853),
    ey = l(491920);
function eC(e) {
    let { modes: t, mode: l, onChange: n, className: s } = e,
        o = a.useMemo(() => t.map((e) => ({ value: e, name: (0, ev.kZ)(e), "aria-controls": (0, ev.z3)(e) })), [t]),
        d = a.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == l
        ? null
        : (0, i.jsx)(eb.I, {
              role: "tablist",
              look: "pill",
              className: r()(ey.b, s),
              optionClassName: ey.u,
              options: o,
              value: l,
              onChange: d,
          });
}
var ew = l(663417),
    ek = l(70688),
    eN = l(173936),
    eA = l(365199),
    eI = l(770818),
    eE = l(147036),
    eS = l(957565),
    eR = l(557875),
    eP = l(869369),
    e_ = l(123917);
let ez = new Set();
l(321073);
var eD = l(746080);
let eM = [];
function eV(e) {
    let {
            projectId: t,
            projectName: l,
            guildId: n,
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
        { pending: S, connect: R } = (function (e) {
            let [t, l] = a.useState(ez),
                n = a.useRef(ez),
                i = a.useCallback((e) => {
                    (n.current = (0, eR.Q6)(n.current, e)), l(n.current);
                }, []);
            return {
                pending: t,
                connect: a.useCallback(
                    (t) => {
                        if (null == e) return;
                        let a = (0, eR.K9)(n.current, t.type);
                        async function s() {
                            let l = await (0, $.JI)(e, t.type);
                            if ((i(t.type), "url" === l.type)) return void (0, e_.h)({ href: l.url, trusted: !1 });
                            let n =
                                "setup" === (0, eR.rq)(l.error)
                                    ? H.intl.string(Y.default.avu1u4)
                                    : H.intl.string(Y.default["5fwOcF"]);
                            (0, j.P0)((0, b.o)(n, v.Ck.FAILURE));
                        }
                        null != a && ((n.current = a), l(a), s().catch(() => i(t.type)));
                    },
                    [e, i],
                ),
            };
        })(N ?? null),
        P = (0, c.bG)([$.Ay], () => (null == N ? eM : $.Ay.getDeclaredConnections(N))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: i } = e,
                a = [];
            for (let { connection: e, offer: s } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: H.intl.string(Y.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
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
            offers: a.useMemo(() => (0, eR.Xl)(P), [P]),
            connectPending: S,
        }),
        z = a.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        D = null != m && (r || o),
        M = r && null != p,
        V = D || null != d || M || null != g || null != h,
        T = eS.p5 && null != n;
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
                                                    let t = null == e.connectionType ? null : z.get(e.connectionType);
                                                    null != t && R(t);
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
                                        D
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
                                            (0, eS.C)((0, eE.n)(n, eD.VV.VIBEGRATIONS, t), () =>
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
                                            action: () => (0, eP.A)(t, s ?? n),
                                        }),
                                        (0, i.jsx)(er.Dr, {
                                            id: "delete",
                                            label: H.intl.string(H.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: H.intl.formatToPlainString(Y.default.ZokHVz, { name: l }),
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
                  let { isShown: l } = t;
                  return (0, i.jsx)(C.K, {
                      ...e,
                      buttonRef: A,
                      icon: eA.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": H.intl.string(H.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": l,
                  });
              },
          })
        : null;
}
var eT = l(742589),
    eL = l(769979);
function eG(e) {
    let { title: t, actions: l, breadcrumb: n } = e;
    return (0, i.jsx)(eT.A, {
        hideSearch: !0,
        toolbar: l,
        className: eL.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: eL.QF,
            children: [
                (0, i.jsx)(P.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.colors.TEXT_STRONG,
                    className: eL.Kk,
                }),
                null != n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eT.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, i.jsx)(eT.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(eT.A.Title, { className: eL.Qw, wrapperClassName: eL.DD, children: t }),
            ],
        }),
    });
}
var eF = l(321593),
    eB = l(580954),
    eY = l(192308),
    eH = l(189213),
    eK = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function eX(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = "permissions" === t;
    return (0, i.jsx)(eH.Modal, {
        transitionState: l,
        onClose: n,
        title: H.intl.string(a ? Y.default.Rtlv25 : Y.default["+UouPe"]),
        subtitle: H.intl.string(a ? Y.default["nDQB/b"] : Y.default["E0QD++"]),
        size: "sm",
        actions: [{ text: H.intl.string(a ? H.t.BddRzS : Y.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function eO(e) {
    (0, eY.openModal)((t) => (0, i.jsx)(eX, { ...t, reason: e }));
}
var eU = l(480007),
    eq = l(584936),
    eZ = l(899154),
    eW = l(652215),
    e$ = l(675210),
    eQ = l(165610),
    eJ = l(352978);
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
        l,
        n,
        s,
        r,
        { project: o, guildId: c, onSelect: p, onRemix: m } = e,
        g =
            ((t = o.id),
            (l = o.name),
            (n = a.useRef(!1)),
            (s = a.useCallback(() => {
                n.current ||
                    ((n.current = !0),
                    (0, j.P0)((0, b.o)(H.intl.formatToPlainString(Y.default.u9TapG, { name: l }), v.Ck.MESSAGE)),
                    ep(t, l)
                        .catch((e) => {
                            let l;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, j.P0)(
                                    (0, b.o)(
                                        409 === (l = e instanceof $._v ? e.status : null)
                                            ? H.intl.string(Y.default.uB40Hz)
                                            : 404 === l
                                              ? H.intl.string(Y.default.wCq2jC)
                                              : H.intl.string(Y.default.G2GqyP),
                                        v.Ck.FAILURE,
                                    ),
                                );
                        })
                        .finally(() => {
                            n.current = !1;
                        }));
            }, [t, l])),
            {
                onExport: s,
                onImport: (r = em(
                    a.useCallback(
                        (e) => {
                            let n = eu(e);
                            null != n
                                ? (0, j.P0)((0, b.o)(n, v.Ck.FAILURE))
                                : (0, u.A)({
                                      title: H.intl.formatToPlainString(Y.default.XYZqZK, { name: l }),
                                      subtitle: H.intl.string(Y.default["6syXoH"]),
                                      confirmText: H.intl.string(Y.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, V.pX)(eW.BVt.CHANNEL(c, eD.VV.VIBEGRATIONS, t));
                                          try {
                                              await ec(t, e, H.intl.string(Y.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), v.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, l, c],
                    ),
                )).open,
                importInput: r.input,
            }),
        h = o.preview_application_id ?? o.application_id,
        { data: y } = (0, z.YY)(h),
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
    let { project: t, projectsLoaded: n, onBack: s, guildId: r } = e,
        [o, d] = a.useState(!1),
        [p, m] = a.useState(!0),
        [g, h] = a.useState(!1),
        [f, I] = a.useState(!1),
        E = T.Q_.useSetting(),
        [S, R] = a.useState(null),
        [P, _] = a.useState(null),
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
        { data: Z, isLoading: J } = (0, z.YY)(t?.preview_application_id ?? void 0),
        ee = null != L && P !== L,
        et = q?.preview_ready === !0,
        el = q?.has_activity === !0,
        {
            availability: en,
            activeMode: ea,
            setMode: es,
            widgetApplicationId: er,
        } = (0, eZ.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: el,
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
                let l = t.id;
                function n() {
                    return F.current && G.current === l;
                }
                (B.current = !0),
                    h(!1),
                    m(!0),
                    R({ entry: e, status: "restoring" }),
                    (0, $.oB)(l, e.sha)
                        .then(
                            () => {
                                n() && R({ entry: e, status: "restored" });
                            },
                            (t) => {
                                n() &&
                                    (R({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, j.P0)((0, b.o)(H.intl.string(Y.default.q6iZ84), v.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (B.current = !1);
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
            null == eN || eA || D.A.refreshProxyTicket(eN.id);
        }, [eN, eA]),
        eE = a.useCallback(() => {
            var e, l;
            null != t && ((e = t.id), (l = eN?.id), (0, $.Bn)(e), (0, eB.A)().leaveFrame(l)), s();
        }, [t, eN?.id, s]),
        eS = a.useCallback(() => {
            null != t && (m(!0), (0, $.dv)(t.id, H.intl.string(Y.default["2ejwtJ"])));
        }, [t]),
        eR = em(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        n = eu(e);
                    null != n
                        ? (0, j.P0)((0, b.o)(n, v.Ck.FAILURE))
                        : (0, u.A)({
                              title: H.intl.formatToPlainString(Y.default.XYZqZK, { name: t.name }),
                              subtitle: H.intl.string(Y.default["6syXoH"]),
                              confirmText: H.intl.string(Y.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await ec(l, e, H.intl.string(Y.default.C7GU2r));
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
        ez = a.useCallback(async () => {
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
            ez(),
            () => {
                O.current?.abort(), (O.current = null);
            }
        ),
        [ez],
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
            await ez();
        }, [ez, eT]),
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
        null == t && n && (0, V.pX)(eW.BVt.CHANNEL(r, eD.VV.VIBEGRATIONS));
    }, [r, t, n]);
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
                              en.showModeSwitch ? (0, i.jsx)(eC, { modes: en.modes, mode: ea, onChange: es }) : null,
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
                                            onClick: () => (0, eP.A)(t.id, t.guild_id ?? r),
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
                                  onImport: eR.open,
                                  onRemix: e_,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eY.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("964476"),
                                                  l.e("461590"),
                                              ]).then(l.bind(l, 84469));
                                              return (l) => (0, i.jsx)(t, { ...l, projectId: e });
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
                                      en.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== en.profileState
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
            eR.input,
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
                                  availability: en,
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
            sharedProjects: l,
            fetchState: n,
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
                l
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [l],
        ),
        z = a.useRef(null);
    a.useEffect(() => {
        null != g && z.current?.querySelector("button")?.focus();
    }, [g]);
    let D = a.useMemo(
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
                                            (0, i.jsx)(en, {}),
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
                                                    ref: z,
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
                                    (null == n || "loading" === n.type) && 0 === D.length
                                        ? (0, i.jsx)("div", { className: eJ.E8, children: (0, i.jsx)(R.y, {}) })
                                        : n?.type === "error" && 0 === D.length
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
                                          : 0 === D.length
                                            ? (0, i.jsx)("div", {
                                                  className: eJ.D1,
                                                  children: (0, i.jsxs)("div", {
                                                      className: eJ.ST,
                                                      children: [
                                                          (0, i.jsx)(P.D, {
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
                                                  children: D.map((e) =>
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
        { guildId: l, projectId: n } = e,
        s = (0, c.yK)([Q.Ay], () => Q.Ay.getOwnedProjects()),
        r = (0, c.bG)([Q.Ay], () => Q.Ay.getProjectsFetchState()),
        o = (0, c.yK)([Q.Ay], () => Q.Ay.getSharedProjects(l), [l]),
        d = (0, c.yK)([L.Ay], () => L.Ay.getSelfMember(l)?.roles ?? [], [l]),
        u = (0, c.bG)([G.A, F.A], () => {
            let e = G.A.getGuild(l);
            return null != e && F.A.can(eW.xBc.MANAGE_GUILD, e);
        }, [l]),
        [p, m] = a.useState(""),
        g = n ?? null,
        [h, f] = a.useState(!1),
        [x, y] = a.useState(null),
        [C, w] = a.useState("guild"),
        [k, N] = a.useState(null),
        [A, I] = a.useState(null);
    a.useEffect(() => {
        (0, X.hF)(l);
    }, [l, d, u]),
        a.useEffect(() => {
            (0, X.dm)(l, g);
        }, [l, g]);
    let E = a.useCallback((e) => {
            w(e), N(null);
        }, []),
        S = a.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    n = J({ idea: t, installScope: C, submitting: h });
                if ("idea" !== n && "submitting" !== n) {
                    if (null == C) return void N(H.intl.string(Y.default.jQ3nQB));
                    null != e && m(e), f(!0), y(null);
                    try {
                        let e = await (0, X.gA)({ guild_id: l, install_scope: C });
                        (0, $.Hc)(e),
                            (0, $.r2)(e, A ?? O.Cl),
                            (0, $.dv)(e, t),
                            (0, V.pX)(eW.BVt.CHANNEL(l, eD.VV.VIBEGRATIONS, e)),
                            m(""),
                            I(null);
                    } catch (e) {
                        y(e instanceof Error ? e.message : H.intl.string(Y.default.KKkp5Y));
                    } finally {
                        f(!1);
                    }
                }
            },
            [C, l, p, A, h],
        ),
        [R, P] = a.useState(!1),
        _ = a.useCallback(
            async (e, t) => {
                let n = eu(e);
                if (null != n) return void (0, j.P0)((0, b.o)(n, v.Ck.FAILURE));
                P(!0);
                let i = null;
                try {
                    (i = await (0, X.gA)({ guild_id: l, install_scope: t })),
                        (0, $.Hc)(i),
                        (0, $.r2)(i, A ?? O.Cl),
                        await ec(i, e, H.intl.string(Y.default.KjEtrZ)),
                        (0, V.pX)(eW.BVt.CHANNEL(l, eD.VV.VIBEGRATIONS, i)),
                        I(null);
                } catch {
                    null != i && (await (0, X.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), v.Ck.FAILURE));
                } finally {
                    P(!1);
                }
            },
            [l, A],
        ),
        z = a.useCallback(
            (e) => {
                (0, V.pX)(eW.BVt.CHANNEL(l, eD.VV.VIBEGRATIONS, e));
            },
            [l],
        ),
        D = a.useCallback(() => {
            (0, V.pX)(eW.BVt.CHANNEL(l, eD.VV.VIBEGRATIONS));
        }, [l]),
        M = a.useCallback((e) => {
            m(e), y(null);
        }, []),
        T = (0, c.bG)([Q.Ay], () => {
            if (null == g) return null;
            let e = Q.Ay.getProject(g);
            return null == e || (0, Q.PV)(e) || e.guild_id === l ? e : null;
        }, [g, l]),
        B = (0, c.bG)([Q.Ay], () => Q.Ay.hasFetchedGuildProjects(l), [l]);
    return null != g
        ? (0, i.jsx)(e9, { project: T, projectsLoaded: B, onBack: D, guildId: l }, g)
        : (0, i.jsx)(e3, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: A,
              onModelSettingsChange: I,
              idea: p,
              guildId: l,
              submitting: h,
              createError: x,
              createDisabled: "idea" === (t = J({ idea: p, installScope: C, submitting: h })) || "submitting" === t,
              onSelectProject: z,
              onIdeaChange: M,
              onCreate: S,
              onImportNewProject: _,
              importing: R,
              installScope: C,
              onInstallScopeChange: E,
              installScopeError: k,
          });
}
