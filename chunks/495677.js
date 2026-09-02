l.r(t), l.d(t, { default: () => tt });
var n,
    i = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    o = l(536637),
    d = l.n(o),
    c = l(17928),
    u = l(314116),
    m = l(534890),
    p = l(646270),
    g = l(31300),
    h = l(794083),
    f = l(939249),
    x = l(834730),
    j = l(691540),
    v = l(857250),
    b = l(97483),
    y = l(866665),
    C = l(408278),
    N = l(92446),
    k = l(625903),
    A = l(297264),
    w = l(821609),
    E = l(364522),
    I = l(103557),
    S = l(691885),
    R = l(289873),
    P = l(152367),
    _ = l(661531),
    z = l(627363),
    V = l(625180),
    D = l(672929),
    M = l(976860),
    T = l(885386),
    L = l(696451),
    G = l(71393),
    B = l(576705),
    H = l(486020),
    F = l(50617),
    Y = l(375708),
    K = l(673724),
    X = l(948230),
    O = l(976713),
    U = l(692200),
    q = l(683180),
    W = l(208137),
    Z = l(805332),
    $ = l(18739),
    Q = l(972786);
function J(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var ee = l(58703);
let et = [
    {
        date: "2026-09-02",
        summary:
            "One Effort scale, from Speedrun to Big Brain, sets how much thinking goes into a run, instead of choosing models and thinking levels separately.",
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
    let t = Y.intl.string(F.default.x07mpp);
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
                        children: Y.intl.string(F.default.h5CwHI),
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
var ei = l(4645),
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
        : Y.intl.formatToPlainString(F.default.AzziHF, { size: (0, K.ZJ)((0, K.yr)(t)) });
}
async function em(e, t) {
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
function ep(e) {
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
    { value: "user", icon: eg.UserIcon, nameMessage: F.default.iqXIRN },
    { value: "guild", icon: eh.R, nameMessage: F.default.LdgKdI },
];
function ex(e) {
    let { importing: t, onImport: l } = e,
        n = a.useRef(null),
        s = ep(a.useCallback((e) => l(e, "user"), [l])),
        r = ep(a.useCallback((e) => l(e, "guild"), [l])),
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
                        "aria-label": Y.intl.string(F.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(er.rX, {
                            label: Y.intl.string(F.default.MLg0S8),
                            children: ef
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Y.intl.string(e.nameMessage),
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
                    return (0, i.jsx)(w.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: eo.H,
                        text: Y.intl.string(F.default["NHP2+t"]),
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
    ev = l(629584),
    eb = l(148853),
    ey = l(491920);
function eC(e) {
    let { modes: t, mode: l, onChange: n, className: s } = e,
        o = a.useMemo(() => t.map((e) => ({ value: e, name: (0, eb.kZ)(e), "aria-controls": (0, eb.z3)(e) })), [t]),
        d = a.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == l
        ? null
        : (0, i.jsx)(ev.I, {
              role: "tablist",
              look: "pill",
              className: r()(ey.b, s),
              optionClassName: ey.u,
              options: o,
              value: l,
              onChange: d,
          });
}
var eN = l(663417),
    ek = l(70688),
    eA = l(173936),
    ew = l(365199),
    eE = l(770818),
    eI = l(147036),
    eS = l(957565),
    eR = l(557875),
    eP = l(869369),
    e_ = l(123917);
let ez = new Set();
l(321073);
var eV = l(746080);
let eD = [];
function eM(e) {
    let {
            projectId: t,
            projectName: l,
            guildId: n,
            projectGuildId: s,
            isOwner: r,
            isShared: o,
            onExport: d,
            onImport: m,
            onRemix: p,
            onConnectTool: g,
            onVersionHistory: h,
            onRefresh: f,
            isRefreshing: x = !1,
            onClose: y,
            refreshApplicationId: N,
            previewProjectId: A,
        } = e,
        w = a.useRef(null),
        { pending: E, refresh: I } = (0, eE.A)(N ?? null),
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
                                    ? Y.intl.string(F.default.avu1u4)
                                    : Y.intl.string(F.default["5fwOcF"]);
                            (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                        }
                        null != a && ((n.current = a), l(a), s().catch(() => i(t.type)));
                    },
                    [e, i],
                ),
            };
        })(A ?? null),
        P = (0, c.bG)([$.Ay], () => (null == A ? eD : $.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: i } = e,
                a = [];
            for (let { connection: e, offer: s } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: Y.intl.string(F.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                a.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(F.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(F.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({
            canRefresh: null != N,
            refreshPending: E,
            offers: a.useMemo(() => (0, eR.Xl)(P), [P]),
            connectPending: S,
        }),
        z = a.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        V = null != p && (r || o),
        D = r && null != m,
        M = V || null != d || D || null != g || null != h,
        T = eS.p5 && null != n;
    return null != f || null != y || M || T || r
        ? (0, i.jsx)(ea.Y, {
              targetElementRef: w,
              position: "bottom",
              align: "right",
              animation: ea.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsxs)(es.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Y.intl.string(Y.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          null != f || null != y
                              ? (0, i.jsxs)(er.rX, {
                                    children: [
                                        null != f
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "refresh",
                                                  icon: eN.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eN.RefreshIcon },
                                                  label: Y.intl.string(F.default.xKexN1),
                                                  disabled: x,
                                                  action: f,
                                              })
                                            : null,
                                        null != y
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "close",
                                                  icon: ek.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: ek.DoorExitIcon },
                                                  label: Y.intl.string(F.default.Ea0Wrr),
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
                                                    if ("refresh" === e.kind) return void I();
                                                    let t = null == e.connectionType ? null : z.get(e.connectionType);
                                                    null != t && R(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          M
                              ? (0, i.jsxs)(er.rX, {
                                    children: [
                                        V
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "remix",
                                                  label: Y.intl.string(F.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "export",
                                                  label: Y.intl.string(F.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        D
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "import",
                                                  label: Y.intl.string(F.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "connect-tool",
                                                  label: Y.intl.string(F.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != h
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "version-history",
                                                  label: Y.intl.string(F.default.jAWwzi),
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
                                        label: Y.intl.string(Y.t.WqhZss),
                                        icon: eA.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: eA.LinkIcon },
                                        action: () =>
                                            (0, eS.C)((0, eI.n)(n, eV.VV.VIBEGRATIONS, t), () =>
                                                (0, j.P0)((0, v.o)(Y.intl.string(Y.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, i.jsxs)(er.rX, {
                                    children: [
                                        (0, i.jsx)(er.Dr, {
                                            id: "settings",
                                            label: Y.intl.string(F.default["xhcY+n"]),
                                            icon: k.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: k.SettingsIcon },
                                            action: () => (0, eP.A)(t, s ?? n),
                                        }),
                                        (0, i.jsx)(er.Dr, {
                                            id: "delete",
                                            label: Y.intl.string(Y.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: Y.intl.formatToPlainString(F.default.ZokHVz, { name: l }),
                                                    subtitle: Y.intl.string(F.default.NmF939),
                                                    confirmText: Y.intl.string(Y.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, X.xx)(t)).ok)
                                                            throw Error(Y.intl.string(F.default.tqKZCi));
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
                      buttonRef: w,
                      icon: ew.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": Y.intl.string(Y.t["UKOtz+"]),
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
var eB = l(321593),
    eH = l(580954),
    eF = l(192308),
    eY = l(189213),
    eK = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function eX(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = "permissions" === t;
    return (0, i.jsx)(eY.Modal, {
        transitionState: l,
        onClose: n,
        title: Y.intl.string(a ? F.default.Rtlv25 : F.default["+UouPe"]),
        subtitle: Y.intl.string(a ? F.default["nDQB/b"] : F.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Y.intl.string(a ? Y.t.BddRzS : F.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function eO(e) {
    (0, eF.openModal)((t) => (0, i.jsx)(eX, { ...t, reason: e }));
}
var eU = l(224640),
    eq = l(815021),
    eW = l(652215),
    eZ = l(931587),
    e$ = l(264997);
function eQ(e) {
    let { applicationId: t, guildId: l, projectName: n, transitionState: s, onClose: r } = e,
        o = Y.intl.string(F.default.yzxKsU),
        d = Y.intl.formatToPlainString(F.default.CC69wK, { projectName: n }),
        c = a.useCallback(() => {
            let e = (0, q.SH)(l, t);
            (0, M.pX)(null == e ? eW.BVt.CHANNEL(l) : eW.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, i.jsx)(eU.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": o,
        children: (0, i.jsxs)("div", {
            className: eZ.zr,
            children: [
                (0, i.jsx)("div", { className: eZ.b, children: (0, i.jsx)(eq.J, { onClick: r }) }),
                (0, i.jsxs)("div", {
                    className: eZ.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: eZ.bm,
                            children: (0, i.jsx)("img", { className: eZ.yW, src: e$, alt: "" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: eZ.R_,
                            children: [
                                (0, i.jsx)(A.D, { variant: "heading-xl/semibold", color: "text-strong", children: o }),
                                (0, i.jsx)(x.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: d,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: eZ.o1,
                    children: [
                        (0, i.jsx)(w.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: Y.intl.string(Y.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, i.jsx)(w.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: Y.intl.string(Y.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var eJ = l(584936),
    e0 = l(899154),
    e2 = l(675210),
    e1 = l(165610),
    e6 = l(352978);
function e8(e) {
    return (0, i.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function e9(e) {
    return (0, i.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function e3(e) {
    return (0, i.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function e7(e) {
    return (0, i.jsx)(h.b, { ...e, size: "custom", width: 20, height: 20 });
}
function e5(e) {
    let t,
        l,
        n,
        s,
        r,
        { project: o, guildId: c, onSelect: m, onRemix: p } = e,
        g =
            ((t = o.id),
            (l = o.name),
            (n = a.useRef(!1)),
            (s = a.useCallback(() => {
                n.current ||
                    ((n.current = !0),
                    (0, j.P0)((0, v.o)(Y.intl.formatToPlainString(F.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    em(t, l)
                        .catch((e) => {
                            let l;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, j.P0)(
                                    (0, v.o)(
                                        409 === (l = e instanceof $._v ? e.status : null)
                                            ? Y.intl.string(F.default.uB40Hz)
                                            : 404 === l
                                              ? Y.intl.string(F.default.wCq2jC)
                                              : Y.intl.string(F.default.G2GqyP),
                                        b.Ck.FAILURE,
                                    ),
                                );
                        })
                        .finally(() => {
                            n.current = !1;
                        }));
            }, [t, l])),
            {
                onExport: s,
                onImport: (r = ep(
                    a.useCallback(
                        (e) => {
                            let n = eu(e);
                            null != n
                                ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                                : (0, u.A)({
                                      title: Y.intl.formatToPlainString(F.default.XYZqZK, { name: l }),
                                      subtitle: Y.intl.string(F.default["6syXoH"]),
                                      confirmText: Y.intl.string(F.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, M.pX)(eW.BVt.CHANNEL(c, eV.VV.VIBEGRATIONS, t));
                                          try {
                                              await ec(t, e, Y.intl.string(F.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, v.o)(Y.intl.string(F.default["02GpNr"]), b.Ck.FAILURE));
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
                : Y.intl.formatToPlainString(F.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: e6.OY,
        children: [
            (0, i.jsx)(eB.Ay, { projectId: o.id }),
            (0, i.jsxs)(f.D, {
                className: e6.W6,
                onClick: m,
                children: [
                    (0, i.jsx)("img", {
                        alt: "",
                        src: H.Ay.getApplicationIconURL({ id: h, icon: y?.icon, size: 40 }),
                        className: e6.VJ,
                    }),
                    (0, i.jsxs)("div", {
                        className: e6.MM,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: e6.j1,
                                children: o.name,
                            }),
                            null == C
                                ? null
                                : (0, i.jsx)("div", {
                                      className: e6.h3,
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
                className: e6.M2,
                children: (0, i.jsxs)("div", {
                    className: e6.Pl,
                    children: [
                        (0, i.jsx)(eM, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: c,
                            projectGuildId: o.guild_id,
                            isOwner: (0, Q.PV)(o),
                            isShared: (0, K.tr)(o),
                            onRemix: p,
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
function e4(e) {
    let { project: t, projectsLoaded: n, onBack: s, guildId: r } = e,
        [o, d] = a.useState(!1),
        [m, p] = a.useState(!0),
        [g, h] = a.useState(!1),
        [f, E] = a.useState(!1),
        I = T.Q_.useSetting(),
        [S, R] = a.useState(null),
        [P, _] = a.useState(null),
        L = t?.id ?? null,
        G = a.useRef(L),
        B = a.useRef(!0),
        H = a.useRef(!1),
        O = a.useRef(null);
    (G.current = L),
        a.useEffect(
            () => (
                (B.current = !0),
                () => {
                    B.current = !1;
                }
            ),
            [],
        );
    let q = (0, c.bG)([Q.Ay], () => (null == L ? null : Q.Ay.getIntegrationStatus(L)), [L]),
        { data: W, isLoading: J } = (0, z.YY)(t?.preview_application_id ?? void 0),
        ee = null != L && P !== L,
        et = q?.preview_ready === !0,
        el = q?.has_activity === !0,
        {
            availability: en,
            activeMode: ea,
            setMode: es,
            widgetApplicationId: er,
        } = (0, e0.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: el,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: q?.owner_authorization_revoked === !0,
        }),
        eo = (0, e2.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: et,
            integrationInstalled: q?.integration_installed ?? null,
            botPermissionsChanged: q?.bot_permissions_changed === !0,
        }),
        ed = o || ee || J,
        em = Y.intl.string(F.default["5gU57O"]),
        eg = m && !f && !g,
        eh = Y.intl.string(eg ? F.default.YdgE0j : F.default.aWVf4j),
        ef = a.useCallback(() => {
            if (f || g) {
                E(!1), h(!1), p(!0);
                return;
            }
            p((e) => !e);
        }, [f, g]),
        ex = a.useCallback(() => p(!1), []),
        ej = a.useCallback(() => {
            E((e) => !e && (p(!0), h(!1), !0));
        }, []),
        ev = a.useCallback(() => E(!1), []),
        eb = a.useCallback(
            (e) => {
                if (null == t || H.current) return;
                let l = t.id;
                function n() {
                    return B.current && G.current === l;
                }
                (H.current = !0),
                    h(!1),
                    p(!0),
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
                                    (0, j.P0)((0, v.o)(Y.intl.string(F.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (H.current = !1);
                        });
            },
            [t],
        ),
        ey = (0, c.bG)([Z.A], () => Z.A.isBuilderPreviewMobile()),
        eN = Y.intl.string(ey ? F.default["3uCc8U"] : F.default["+nzCxZ"]),
        ek = a.useCallback(() => (0, X.GG)(!ey), [ey]),
        eA = (0, D.A)(t?.preview_application_id ?? null, e1.sd),
        ew = (0, e1.x1)(eA) && eA.data.proxyTicketRefreshing,
        eE = a.useCallback(() => {
            null == eA || ew || V.A.refreshProxyTicket(eA.id);
        }, [eA, ew]),
        eI = a.useCallback(() => {
            var e, l;
            null != t && ((e = t.id), (l = eA?.id), (0, $.Bn)(e), (0, eH.A)().leaveFrame(l)), s();
        }, [t, eA?.id, s]),
        eS = a.useCallback(() => {
            null != t && (p(!0), (0, $.dv)(t.id, Y.intl.string(F.default["2ejwtJ"])));
        }, [t]),
        eR = ep(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        n = eu(e);
                    null != n
                        ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: Y.intl.formatToPlainString(F.default.XYZqZK, { name: t.name }),
                              subtitle: Y.intl.string(F.default["6syXoH"]),
                              confirmText: Y.intl.string(F.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  p(!0);
                                  try {
                                      await ec(l, e, Y.intl.string(F.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, v.o)(Y.intl.string(F.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        e_ = a.useCallback(() => {
            null != t && (0, eJ.A)(t, r);
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
    let eD = q?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eT = a.useCallback(async () => {
            null == t ||
                (t.guild_id === eD && t.preview_guild_id === eD) ||
                (await (0, X.M7)(t.id, { guild_id: eD, preview_guild_id: eD }));
        }, [eD, t]),
        eL = a.useCallback(async () => {
            try {
                await eT();
            } catch {}
            await ez();
        }, [ez, eT]),
        eB = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                U.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: W ?? null,
                    guildId: eD,
                    onClose: () => {
                        eL();
                    },
                });
        }, [eL, eD, W, t]),
        eY = eo
            ? { type: "permissions", onReviewPermissions: eB, loading: J || ee }
            : ee && null == q
              ? { type: "checking" }
              : void 0;
    a.useEffect(() => {
        null == t && n && (0, M.pX)(eW.BVt.CHANNEL(r, eV.VV.VIBEGRATIONS));
    }, [r, t, n]);
    let eX = a.useCallback(async () => {
            if (null != t) {
                if (!et) return void eO(eK.NO_PREVIEW);
                if (eo) return void eO(eK.PERMISSIONS);
                d(!0);
                try {
                    var e;
                    let l = await (0, $.TV)(t.id);
                    if (!0 !== l.ok) throw Error(Y.intl.string(F.default.fNP6Cd));
                    (0, X.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, eF.openModal)((t) => (0, i.jsx)(eQ, { ...t, ...e }));
                } catch (e) {
                    (0, j.P0)((0, v.o)(e instanceof Error ? e.message : Y.intl.string(F.default.fNP6Cd), b.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [r, eo, et, t]),
        eU = (0, i.jsx)(eG, {
            title: t?.name ?? Y.intl.string(F.default.F2dRba),
            breadcrumb: { title: Y.intl.string(F.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: e6.FO,
                          children: [
                              en.showModeSwitch ? (0, i.jsx)(eC, { modes: en.modes, mode: ea, onChange: es }) : null,
                              (0, i.jsx)(y.m, {
                                  text: eN,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(C.K, {
                                      icon: ey ? e3 : e9,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eN,
                                      "aria-pressed": ey,
                                      onClick: ek,
                                  }),
                              }),
                              (0, i.jsx)("div", { className: e6.YJ }),
                              I
                                  ? (0, i.jsx)(y.m, {
                                        text: Y.intl.string(F.default["8MLfBT"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: N.BugIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": Y.intl.string(F.default["8MLfBT"]),
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
                                            icon: e8,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": eh,
                                            "aria-pressed": eg,
                                            onClick: ef,
                                        }),
                                    }),
                              (0, Q.PV)(t)
                                  ? (0, i.jsx)(y.m, {
                                        text: Y.intl.string(F.default["xhcY+n"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: k.SettingsIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": Y.intl.string(F.default["xhcY+n"]),
                                            onClick: () => (0, eP.A)(t.id, t.guild_id ?? r),
                                        }),
                                    })
                                  : null,
                              (0, Q.jf)(t)
                                  ? (0, i.jsx)(y.m, {
                                        text: em,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: e7,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": em,
                                            loading: o,
                                            disabled: ed,
                                            onClick: eX,
                                        }),
                                    })
                                  : null,
                              (0, i.jsx)(eM, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, Q.PV)(t),
                                  isShared: (0, K.tr)(t),
                                  onRefresh: (0, e1.x1)(eA) ? eE : void 0,
                                  isRefreshing: ew,
                                  onClose: eI,
                                  onExport: eS,
                                  onImport: eR.open,
                                  onRemix: e_,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eF.openModalLazy)(async () => {
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
                                                p(!0), E(!1), h(!0);
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
        className: e6.nj,
        children: [
            eR.input,
            (0, i.jsx)("main", {
                className: e6.JX,
                children:
                    null == t
                        ? (0, i.jsxs)("div", {
                              className: e6.j5,
                              children: [
                                  eU,
                                  (0, i.jsxs)("div", {
                                      className: e6.sD,
                                      children: [
                                          (0, i.jsx)(A.D, {
                                              variant: "heading-lg/semibold",
                                              children: Y.intl.string(F.default.F2dRba),
                                          }),
                                          (0, i.jsx)(x.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: Y.intl.string(F.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(w.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: Y.intl.string(F.default["42EdIV"]),
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
                                  surface: e1.sd,
                                  header: eU,
                                  chatOpen: m,
                                  onCloseChat: ex,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => h(!1),
                                  debugOpen: I && f,
                                  onCloseDebug: ev,
                                  onRestoreVersion: eb,
                                  restoreState: S,
                                  previewReady: et,
                                  previewGate: eY,
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
function te(e) {
    let {
            projects: t,
            sharedProjects: l,
            fetchState: n,
            idea: s,
            guildId: o,
            submitting: d,
            createError: c,
            createDisabled: u,
            installScope: m,
            onInstallScopeChange: p,
            installScopeError: g,
            modelSettings: h,
            onModelSettingsChange: j,
            onSelectProject: v,
            onIdeaChange: b,
            onCreate: y,
            onImportNewProject: C,
            importing: N,
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
    let V = a.useMemo(
            () =>
                t
                    .filter((e) => (0, q.X0)(e, o))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, o],
        ),
        D = Y.intl.string(F.default.TU9IGR),
        M = [
            Y.intl.string(F.default["E+Q26x"]),
            Y.intl.string(F.default["06/jqP"]),
            Y.intl.string(F.default["3gSfUa"]),
        ],
        T = [
            {
                id: "feature-showcase",
                name: Y.intl.string(F.default.BLDsiz),
                description: Y.intl.string(F.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: Y.intl.string(F.default["+abXa8"]),
                description: Y.intl.string(F.default.OZYPMR),
            },
        ],
        L = Y.intl.string(F.default.FYK2xQ),
        G = Y.intl.string(F.default["/SUK82"]),
        B = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || y());
            },
            [u, y],
        );
    return (0, i.jsxs)("div", {
        className: r()(e6.nj, e6.a0),
        children: [
            (0, i.jsx)(eG, { title: Y.intl.string(F.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: e6.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: e6.ps,
                        children: [
                            (0, i.jsx)(E.Ip, {
                                className: e6.Yy,
                                children: (0, i.jsx)("div", {
                                    className: e6.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(e6.Qs, e6.Ix),
                                        children: [
                                            (0, i.jsx)(A.D, {
                                                variant: "heading-xl/semibold",
                                                children: Y.intl.string(F.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: e6.WI,
                                                "aria-label": L,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e6.G9,
                                                        children: [
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: L,
                                                            }),
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: Y.intl.string(F.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: e6.Aw,
                                                        children: T.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: e6.EA,
                                                                    children: (0, i.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": Y.intl.formatToPlainString(
                                                                            F.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(e6.nx, e6.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return y(
                                                                                      ((t = e.name),
                                                                                      Y.intl.formatToPlainString(
                                                                                          F.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, i.jsx)(x.E, {
                                                                                className: e6.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, i.jsx)(x.E, {
                                                                                className: e6.BK,
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
                                                className: e6.WI,
                                                "aria-label": G,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e6.G9,
                                                        children: [
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: G,
                                                            }),
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: Y.intl.string(F.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: e6.Aw,
                                                        children: M.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: e6.EA,
                                                                    children: (0, i.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: e6.nx,
                                                                        onClick: d ? void 0 : () => y(e),
                                                                        children: (0, i.jsx)(x.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: e6.un,
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
                                className: e6.Yl,
                                children: (0, i.jsxs)("div", {
                                    className: r()(e6.Qs, e6.DA),
                                    children: [
                                        (0, i.jsx)(I.f, {
                                            label: D,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: D,
                                            error: c,
                                            onChange: b,
                                            onKeyDown: B,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: e6.VP,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: e6.gH,
                                                    ref: z,
                                                    children: (0, i.jsx)(S.l, {
                                                        selectionMode: "single",
                                                        label: Y.intl.string(F.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: Y.intl.string(F.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: Y.intl.string(F.default.MLg0S8),
                                                                options: ef.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: Y.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: m ?? void 0,
                                                        onSelectionChange: p,
                                                        errorMessage: g,
                                                    }),
                                                }),
                                                (0, i.jsx)(ej.A, {
                                                    settings: h ?? O.Cl,
                                                    choices: (0, W.e)()
                                                        ? {
                                                              main: [...K.S8.main, ...K.wF.main],
                                                              subagent: [...K.S8.subagent, ...K.wF.subagent],
                                                              thinking: K.S8.thinking,
                                                          }
                                                        : K.S8,
                                                    disabled: d,
                                                    onChange: j,
                                                }),
                                                (0, i.jsx)(w.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: Y.intl.string(Y.t.CumH4u),
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
                        className: e6.pA,
                        "aria-label": Y.intl.string(F.default.Bo5fE3),
                        children: [
                            (0, i.jsxs)("div", {
                                className: e6.IR,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: e6.RM,
                                        children: [
                                            (0, i.jsx)(x.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: Y.intl.string(F.default.Bo5fE3),
                                            }),
                                            (0, i.jsx)(x.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: Y.intl.string(F.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(ex, { importing: N, onImport: C }),
                                ],
                            }),
                            (0, i.jsxs)(E.Ip, {
                                className: e6.xe,
                                children: [
                                    (null == n || "loading" === n.type) && 0 === V.length
                                        ? (0, i.jsx)("div", { className: e6.E8, children: (0, i.jsx)(R.y, {}) })
                                        : n?.type === "error" && 0 === V.length
                                          ? (0, i.jsxs)("div", {
                                                className: e6.E8,
                                                children: [
                                                    (0, i.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: e6.JS,
                                                        children: Y.intl.string(F.default["IN/HRP"]),
                                                    }),
                                                    (0, i.jsx)(w.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: Y.intl.string(F.default["42EdIV"]),
                                                        onClick: () => (0, X.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === V.length
                                            ? (0, i.jsx)("div", {
                                                  className: e6.D1,
                                                  children: (0, i.jsxs)("div", {
                                                      className: e6.ST,
                                                      children: [
                                                          (0, i.jsx)(P.D, {
                                                              size: "lg",
                                                              color: _.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: e6.sI,
                                                              children: Y.intl.string(F.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsx)("div", {
                                                  className: e6.Dq,
                                                  children: V.map((e) =>
                                                      (0, i.jsx)(
                                                          e5,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => v(e.id),
                                                              onRemix: () => (0, eJ.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    k.length > 0
                                        ? (0, i.jsxs)("div", {
                                              className: e6.qx,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: e6.uc,
                                                      children: [
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: Y.intl.string(F.default.jrCnUc),
                                                          }),
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: Y.intl.string(F.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: e6.Dq,
                                                      children: k.map((e) =>
                                                          (0, i.jsx)(
                                                              e5,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => v(e.id),
                                                                  onRemix: () => (0, eJ.A)(e, o),
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
function tt(e) {
    let t,
        { guildId: l, projectId: n } = e,
        s = (0, c.yK)([Q.Ay], () => Q.Ay.getOwnedProjects()),
        r = (0, c.bG)([Q.Ay], () => Q.Ay.getProjectsFetchState()),
        o = (0, c.yK)([Q.Ay], () => Q.Ay.getSharedProjects(l), [l]),
        d = (0, c.yK)([L.Ay], () => L.Ay.getSelfMember(l)?.roles ?? [], [l]),
        u = (0, c.bG)([G.A, B.A], () => {
            let e = G.A.getGuild(l);
            return null != e && B.A.can(eW.xBc.MANAGE_GUILD, e);
        }, [l]),
        [m, p] = a.useState(""),
        g = n ?? null,
        [h, f] = a.useState(!1),
        [x, y] = a.useState(null),
        [C, N] = a.useState("guild"),
        [k, A] = a.useState(null),
        [w, E] = a.useState(null);
    a.useEffect(() => {
        (0, X.hF)(l);
    }, [l, d, u]),
        a.useEffect(() => {
            (0, X.dm)(l, g);
        }, [l, g]);
    let I = a.useCallback((e) => {
            N(e), A(null);
        }, []),
        S = a.useCallback(
            async (e) => {
                let t = (e ?? m).trim(),
                    n = J({ idea: t, installScope: C, submitting: h });
                if ("idea" !== n && "submitting" !== n) {
                    if (null == C) return void A(Y.intl.string(F.default.jQ3nQB));
                    null != e && p(e), f(!0), y(null);
                    try {
                        let e = await (0, X.gA)({ guild_id: l, install_scope: C });
                        (0, $.Hc)(e),
                            (0, $.r2)(e, w ?? O.Cl),
                            (0, $.dv)(e, t),
                            (0, M.pX)(eW.BVt.CHANNEL(l, eV.VV.VIBEGRATIONS, e)),
                            p(""),
                            E(null);
                    } catch (e) {
                        y(e instanceof Error ? e.message : Y.intl.string(F.default.KKkp5Y));
                    } finally {
                        f(!1);
                    }
                }
            },
            [C, l, m, w, h],
        ),
        [R, P] = a.useState(!1),
        _ = a.useCallback(
            async (e, t) => {
                let n = eu(e);
                if (null != n) return void (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                P(!0);
                let i = null;
                try {
                    (i = await (0, X.gA)({ guild_id: l, install_scope: t })),
                        (0, $.Hc)(i),
                        (0, $.r2)(i, w ?? O.Cl),
                        await ec(i, e, Y.intl.string(F.default.KjEtrZ)),
                        (0, M.pX)(eW.BVt.CHANNEL(l, eV.VV.VIBEGRATIONS, i)),
                        E(null);
                } catch {
                    null != i && (await (0, X.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, v.o)(Y.intl.string(F.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    P(!1);
                }
            },
            [l, w],
        ),
        z = a.useCallback(
            (e) => {
                (0, M.pX)(eW.BVt.CHANNEL(l, eV.VV.VIBEGRATIONS, e));
            },
            [l],
        ),
        V = a.useCallback(() => {
            (0, M.pX)(eW.BVt.CHANNEL(l, eV.VV.VIBEGRATIONS));
        }, [l]),
        D = a.useCallback((e) => {
            p(e), y(null);
        }, []),
        T = (0, c.bG)([Q.Ay], () => {
            if (null == g) return null;
            let e = Q.Ay.getProject(g);
            return null == e || (0, Q.PV)(e) || e.guild_id === l ? e : null;
        }, [g, l]),
        H = (0, c.bG)([Q.Ay], () => Q.Ay.hasFetchedGuildProjects(l), [l]);
    return null != g
        ? (0, i.jsx)(e4, { project: T, projectsLoaded: H, onBack: V, guildId: l }, g)
        : (0, i.jsx)(te, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: w,
              onModelSettingsChange: E,
              idea: m,
              guildId: l,
              submitting: h,
              createError: x,
              createDisabled: "idea" === (t = J({ idea: m, installScope: C, submitting: h })) || "submitting" === t,
              onSelectProject: z,
              onIdeaChange: D,
              onCreate: S,
              onImportNewProject: _,
              importing: R,
              installScope: C,
              onInstallScopeChange: I,
              installScopeError: k,
          });
}
