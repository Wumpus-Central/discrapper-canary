l.r(t), l.d(t, { default: () => te });
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
    x = l(939249),
    f = l(834730),
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
    F = l(576705),
    H = l(486020),
    B = l(50617),
    Y = l(375708),
    K = l(673724),
    X = l(948230),
    O = l(105810),
    U = l(683180),
    q = l(208137),
    W = l(805332),
    Z = l(18739),
    $ = l(972786);
function Q(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var J = l(58703);
let ee = [
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
var et = l(413927);
function el() {
    let e = ee.slice(0, 3);
    if (0 === e.length) return null;
    let t = Y.intl.string(B.default.x07mpp);
    return (0, i.jsxs)("section", {
        className: et.rN,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: et.bZ,
                children: [
                    (0, i.jsx)(f.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: Y.intl.string(B.default.h5CwHI),
                    }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: et.V,
                children: e.map((e) =>
                    (0, i.jsxs)(
                        "li",
                        {
                            className: et.S3,
                            children: [
                                (0, i.jsx)(f.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: et.VO,
                                    children: (0, J.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                }),
                                (0, i.jsx)(f.E, {
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
var en = l(4645),
    ei = l(922016),
    ea = l(980707),
    es = l(477782),
    er = l(81369),
    eo = l(402879);
async function ed(e, t, l) {
    (0, Z.Hc)(e);
    let n = await (0, Z.vX)(e, t);
    (0, Z.dv)(e, l, [n]);
}
function ec(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, K.x5)(e.size, t)
        ? null
        : Y.intl.formatToPlainString(B.default.AzziHF, { size: (0, K.ZJ)((0, K.yr)(t)) });
}
async function eu(e, t) {
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
        i = await (0, Z.cS)(e, n);
    await (0, eo.F)(i, n);
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
var ep = l(950305),
    eg = l(664121);
let eh = [
    { value: "user", icon: ep.UserIcon, nameMessage: B.default.iqXIRN },
    { value: "guild", icon: eg.R, nameMessage: B.default.LdgKdI },
];
function ex(e) {
    let { importing: t, onImport: l } = e,
        n = a.useRef(null),
        s = em(a.useCallback((e) => l(e, "user"), [l])),
        r = em(a.useCallback((e) => l(e, "guild"), [l])),
        o = { user: s.open, guild: r.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ei.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: ei.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(ea.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Y.intl.string(B.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(es.rX, {
                            label: Y.intl.string(B.default.MLg0S8),
                            children: eh
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Y.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        es.Dr,
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
                        icon: er.H,
                        text: Y.intl.string(B.default["NHP2+t"]),
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
var ef = l(311656),
    ej = l(629584),
    ev = l(148853),
    eb = l(491920);
function ey(e) {
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
        : (0, i.jsx)(ej.I, {
              role: "tablist",
              look: "pill",
              className: r()(eb.b, s),
              optionClassName: eb.u,
              options: o,
              value: l,
              onChange: d,
          });
}
var eC = l(663417),
    eN = l(70688),
    ek = l(173936),
    eA = l(365199),
    ew = l(770818),
    eE = l(147036),
    eI = l(957565),
    eS = l(557875),
    eR = l(869369),
    eP = l(123917);
let e_ = new Set();
l(321073);
var ez = l(746080);
let eV = [];
function eD(e) {
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
            onRefresh: x,
            isRefreshing: f = !1,
            onClose: y,
            refreshApplicationId: N,
            previewProjectId: A,
        } = e,
        w = a.useRef(null),
        { pending: E, refresh: I } = (0, ew.A)(N ?? null),
        { pending: S, connect: R } = (function (e) {
            let [t, l] = a.useState(e_),
                n = a.useRef(e_),
                i = a.useCallback((e) => {
                    (n.current = (0, eS.Q6)(n.current, e)), l(n.current);
                }, []);
            return {
                pending: t,
                connect: a.useCallback(
                    (t) => {
                        if (null == e) return;
                        let a = (0, eS.K9)(n.current, t.type);
                        async function s() {
                            let l = await (0, Z.JI)(e, t.type);
                            if ((i(t.type), "url" === l.type)) return void (0, eP.h)({ href: l.url, trusted: !1 });
                            let n =
                                "setup" === (0, eS.rq)(l.error)
                                    ? Y.intl.string(B.default.avu1u4)
                                    : Y.intl.string(B.default["5fwOcF"]);
                            (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                        }
                        null != a && ((n.current = a), l(a), s().catch(() => i(t.type)));
                    },
                    [e, i],
                ),
            };
        })(A ?? null),
        P = (0, c.bG)([Z.Ay], () => (null == A ? eV : Z.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: i } = e,
                a = [];
            for (let { connection: e, offer: s } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: Y.intl.string(B.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                a.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(B.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(B.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({
            canRefresh: null != N,
            refreshPending: E,
            offers: a.useMemo(() => (0, eS.Xl)(P), [P]),
            connectPending: S,
        }),
        z = a.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        V = null != p && (r || o),
        D = r && null != m,
        M = V || null != d || D || null != g || null != h,
        T = eI.p5 && null != n;
    return null != x || null != y || M || T || r
        ? (0, i.jsx)(ei.Y, {
              targetElementRef: w,
              position: "bottom",
              align: "right",
              animation: ei.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsxs)(ea.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Y.intl.string(Y.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          null != x || null != y
                              ? (0, i.jsxs)(es.rX, {
                                    children: [
                                        null != x
                                            ? (0, i.jsx)(es.Dr, {
                                                  id: "refresh",
                                                  icon: eC.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eC.RefreshIcon },
                                                  label: Y.intl.string(B.default.xKexN1),
                                                  disabled: f,
                                                  action: x,
                                              })
                                            : null,
                                        null != y
                                            ? (0, i.jsx)(es.Dr, {
                                                  id: "close",
                                                  icon: eN.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eN.DoorExitIcon },
                                                  label: Y.intl.string(B.default.Ea0Wrr),
                                                  action: y,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, i.jsx)(es.rX, {
                                    children: _.map((e) =>
                                        (0, i.jsx)(
                                            es.Dr,
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
                              ? (0, i.jsxs)(es.rX, {
                                    children: [
                                        V
                                            ? (0, i.jsx)(es.Dr, {
                                                  id: "remix",
                                                  label: Y.intl.string(B.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(es.Dr, {
                                                  id: "export",
                                                  label: Y.intl.string(B.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        D
                                            ? (0, i.jsx)(es.Dr, {
                                                  id: "import",
                                                  label: Y.intl.string(B.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(es.Dr, {
                                                  id: "connect-tool",
                                                  label: Y.intl.string(B.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != h
                                            ? (0, i.jsx)(es.Dr, {
                                                  id: "version-history",
                                                  label: Y.intl.string(B.default.jAWwzi),
                                                  action: h,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          T
                              ? (0, i.jsx)(es.rX, {
                                    children: (0, i.jsx)(es.Dr, {
                                        id: "copy-link",
                                        label: Y.intl.string(Y.t.WqhZss),
                                        icon: ek.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: ek.LinkIcon },
                                        action: () =>
                                            (0, eI.C)((0, eE.n)(n, ez.VV.VIBEGRATIONS, t), () =>
                                                (0, j.P0)((0, v.o)(Y.intl.string(Y.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, i.jsxs)(es.rX, {
                                    children: [
                                        (0, i.jsx)(es.Dr, {
                                            id: "settings",
                                            label: Y.intl.string(B.default["xhcY+n"]),
                                            icon: k.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: k.SettingsIcon },
                                            action: () => (0, eR.A)(t, s ?? n),
                                        }),
                                        (0, i.jsx)(es.Dr, {
                                            id: "delete",
                                            label: Y.intl.string(Y.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: Y.intl.formatToPlainString(B.default.ZokHVz, { name: l }),
                                                    subtitle: Y.intl.string(B.default.NmF939),
                                                    confirmText: Y.intl.string(Y.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, X.xx)(t)).ok)
                                                            throw Error(Y.intl.string(B.default.tqKZCi));
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
                      icon: eA.MoreHorizontalIcon,
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
var eM = l(742589),
    eT = l(769979);
function eL(e) {
    let { title: t, actions: l, breadcrumb: n } = e;
    return (0, i.jsx)(eM.A, {
        hideSearch: !0,
        toolbar: l,
        className: eT.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: eT.QF,
            children: [
                (0, i.jsx)(P.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.colors.TEXT_STRONG,
                    className: eT.Kk,
                }),
                null != n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eM.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, i.jsx)(eM.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(eM.A.Title, { className: eT.Qw, wrapperClassName: eT.DD, children: t }),
            ],
        }),
    });
}
var eG = l(321593),
    eF = l(580954),
    eH = l(192308),
    eB = l(189213),
    eY = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function eK(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = "permissions" === t;
    return (0, i.jsx)(eB.Modal, {
        transitionState: l,
        onClose: n,
        title: Y.intl.string(a ? B.default.Rtlv25 : B.default["+UouPe"]),
        subtitle: Y.intl.string(a ? B.default["nDQB/b"] : B.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Y.intl.string(a ? Y.t.BddRzS : B.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function eX(e) {
    (0, eH.openModal)((t) => (0, i.jsx)(eK, { ...t, reason: e }));
}
var eO = l(224640),
    eU = l(815021),
    eq = l(652215),
    eW = l(931587),
    eZ = l(264997);
function e$(e) {
    let { applicationId: t, guildId: l, projectName: n, transitionState: s, onClose: r } = e,
        o = Y.intl.string(B.default.yzxKsU),
        d = Y.intl.formatToPlainString(B.default.CC69wK, { projectName: n }),
        c = a.useCallback(() => {
            let e = (0, U.SH)(l, t);
            (0, M.pX)(null == e ? eq.BVt.CHANNEL(l) : eq.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, i.jsx)(eO.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": o,
        children: (0, i.jsxs)("div", {
            className: eW.zr,
            children: [
                (0, i.jsx)("div", { className: eW.b, children: (0, i.jsx)(eU.J, { onClick: r }) }),
                (0, i.jsxs)("div", {
                    className: eW.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: eW.bm,
                            children: (0, i.jsx)("img", { className: eW.yW, src: eZ, alt: "" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: eW.R_,
                            children: [
                                (0, i.jsx)(A.D, { variant: "heading-xl/semibold", color: "text-strong", children: o }),
                                (0, i.jsx)(f.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: d,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: eW.o1,
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
var eQ = l(584936),
    eJ = l(899154),
    e0 = l(675210),
    e2 = l(165610),
    e1 = l(352978);
function e6(e) {
    return (0, i.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function e8(e) {
    return (0, i.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function e9(e) {
    return (0, i.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function e3(e) {
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
                    (0, j.P0)((0, v.o)(Y.intl.formatToPlainString(B.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    eu(t, l)
                        .catch((e) => {
                            let l;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, j.P0)(
                                    (0, v.o)(
                                        409 === (l = e instanceof Z._v ? e.status : null)
                                            ? Y.intl.string(B.default.uB40Hz)
                                            : 404 === l
                                              ? Y.intl.string(B.default.wCq2jC)
                                              : Y.intl.string(B.default.G2GqyP),
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
                onImport: (r = em(
                    a.useCallback(
                        (e) => {
                            let n = ec(e);
                            null != n
                                ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                                : (0, u.A)({
                                      title: Y.intl.formatToPlainString(B.default.XYZqZK, { name: l }),
                                      subtitle: Y.intl.string(B.default["6syXoH"]),
                                      confirmText: Y.intl.string(B.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, M.pX)(eq.BVt.CHANNEL(c, ez.VV.VIBEGRATIONS, t));
                                          try {
                                              await ed(t, e, Y.intl.string(B.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, v.o)(Y.intl.string(B.default["02GpNr"]), b.Ck.FAILURE));
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
                : Y.intl.formatToPlainString(B.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: e1.OY,
        children: [
            (0, i.jsx)(eG.Ay, { projectId: o.id }),
            (0, i.jsxs)(x.D, {
                className: e1.W6,
                onClick: m,
                children: [
                    (0, i.jsx)("img", {
                        alt: "",
                        src: H.Ay.getApplicationIconURL({ id: h, icon: y?.icon, size: 40 }),
                        className: e1.VJ,
                    }),
                    (0, i.jsxs)("div", {
                        className: e1.MM,
                        children: [
                            (0, i.jsx)(f.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: e1.j1,
                                children: o.name,
                            }),
                            null == C
                                ? null
                                : (0, i.jsx)("div", {
                                      className: e1.h3,
                                      children: (0, i.jsx)(f.E, {
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
                className: e1.M2,
                children: (0, i.jsxs)("div", {
                    className: e1.Pl,
                    children: [
                        (0, i.jsx)(eD, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: c,
                            projectGuildId: o.guild_id,
                            isOwner: (0, $.PV)(o),
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
function e7(e) {
    let { project: t, projectsLoaded: n, onBack: s, guildId: r } = e,
        [o, d] = a.useState(!1),
        [m, p] = a.useState(!0),
        [g, h] = a.useState(!1),
        [x, E] = a.useState(!1),
        I = T.Q_.useSetting(),
        [S, R] = a.useState(null),
        [P, _] = a.useState(null),
        L = t?.id ?? null,
        G = a.useRef(L),
        F = a.useRef(!0),
        H = a.useRef(!1),
        U = a.useRef(null);
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
    let q = (0, c.bG)([$.Ay], () => (null == L ? null : $.Ay.getIntegrationStatus(L)), [L]),
        { data: Q, isLoading: J } = (0, z.YY)(t?.preview_application_id ?? void 0),
        ee = null != L && P !== L,
        et = q?.preview_ready === !0,
        el = q?.has_activity === !0,
        {
            availability: ei,
            activeMode: ea,
            setMode: es,
            widgetApplicationId: er,
        } = (0, eJ.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: el,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: q?.owner_authorization_revoked === !0,
        }),
        eo = (0, e0.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: et,
            integrationInstalled: q?.integration_installed ?? null,
            botPermissionsChanged: q?.bot_permissions_changed === !0,
        }),
        eu = o || ee || J,
        ep = Y.intl.string(B.default["5gU57O"]),
        eg = m && !x && !g,
        eh = Y.intl.string(eg ? B.default.YdgE0j : B.default.aWVf4j),
        ex = a.useCallback(() => {
            if (x || g) {
                E(!1), h(!1), p(!0);
                return;
            }
            p((e) => !e);
        }, [x, g]),
        ef = a.useCallback(() => p(!1), []),
        ej = a.useCallback(() => {
            E((e) => !e && (p(!0), h(!1), !0));
        }, []),
        ev = a.useCallback(() => E(!1), []),
        eb = a.useCallback(
            (e) => {
                if (null == t || H.current) return;
                let l = t.id;
                function n() {
                    return F.current && G.current === l;
                }
                (H.current = !0),
                    h(!1),
                    p(!0),
                    R({ entry: e, status: "restoring" }),
                    (0, Z.oB)(l, e.sha)
                        .then(
                            () => {
                                n() && R({ entry: e, status: "restored" });
                            },
                            (t) => {
                                n() &&
                                    (R({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, j.P0)((0, v.o)(Y.intl.string(B.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (H.current = !1);
                        });
            },
            [t],
        ),
        eC = (0, c.bG)([W.A], () => W.A.isBuilderPreviewMobile()),
        eN = Y.intl.string(eC ? B.default["3uCc8U"] : B.default["+nzCxZ"]),
        ek = a.useCallback(() => (0, X.GG)(!eC), [eC]),
        eA = (0, D.A)(t?.preview_application_id ?? null, e2.sd),
        ew = (0, e2.x1)(eA) && eA.data.proxyTicketRefreshing,
        eE = a.useCallback(() => {
            null == eA || ew || V.A.refreshProxyTicket(eA.id);
        }, [eA, ew]),
        eI = a.useCallback(() => {
            var e, l;
            null != t && ((e = t.id), (l = eA?.id), (0, Z.Bn)(e), (0, eF.A)().leaveFrame(l)), s();
        }, [t, eA?.id, s]),
        eS = a.useCallback(() => {
            null != t && (p(!0), (0, Z.dv)(t.id, Y.intl.string(B.default["2ejwtJ"])));
        }, [t]),
        eP = em(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        n = ec(e);
                    null != n
                        ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: Y.intl.formatToPlainString(B.default.XYZqZK, { name: t.name }),
                              subtitle: Y.intl.string(B.default["6syXoH"]),
                              confirmText: Y.intl.string(B.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  p(!0);
                                  try {
                                      await ed(l, e, Y.intl.string(B.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, v.o)(Y.intl.string(B.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        e_ = a.useCallback(() => {
            null != t && (0, eQ.A)(t, r);
        }, [t, r]),
        eV = a.useCallback(async () => {
            if (null == L || G.current !== L) return;
            U.current?.abort();
            let e = new AbortController();
            (U.current = e), _(null);
            try {
                await (0, X.U1)(L, e.signal);
            } catch {
            } finally {
                e.signal.aborted || U.current !== e || G.current !== L || _(L);
            }
        }, [L]);
    a.useEffect(
        () => (
            eV(),
            () => {
                U.current?.abort(), (U.current = null);
            }
        ),
        [eV],
    );
    let eM = q?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eT = a.useCallback(async () => {
            null == t ||
                (t.guild_id === eM && t.preview_guild_id === eM) ||
                (await (0, X.M7)(t.id, { guild_id: eM, preview_guild_id: eM }));
        }, [eM, t]),
        eG = a.useCallback(async () => {
            try {
                await eT();
            } catch {}
            await eV();
        }, [eV, eT]),
        eB = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                O.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: Q ?? null,
                    guildId: eM,
                    onClose: () => {
                        eG();
                    },
                });
        }, [eG, eM, Q, t]),
        eK = eo
            ? { type: "permissions", onReviewPermissions: eB, loading: J || ee }
            : ee && null == q
              ? { type: "checking" }
              : void 0;
    a.useEffect(() => {
        null == t && n && (0, M.pX)(eq.BVt.CHANNEL(r, ez.VV.VIBEGRATIONS));
    }, [r, t, n]);
    let eO = a.useCallback(async () => {
            if (null != t) {
                if (!et) return void eX(eY.NO_PREVIEW);
                if (eo) return void eX(eY.PERMISSIONS);
                d(!0);
                try {
                    var e;
                    let l = await (0, Z.TV)(t.id);
                    if (!0 !== l.ok) throw Error(Y.intl.string(B.default.fNP6Cd));
                    (0, X.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, eH.openModal)((t) => (0, i.jsx)(e$, { ...t, ...e }));
                } catch (e) {
                    (0, j.P0)((0, v.o)(e instanceof Error ? e.message : Y.intl.string(B.default.fNP6Cd), b.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [r, eo, et, t]),
        eU = (0, i.jsx)(eL, {
            title: t?.name ?? Y.intl.string(B.default.F2dRba),
            breadcrumb: { title: Y.intl.string(B.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: e1.FO,
                          children: [
                              ei.showModeSwitch ? (0, i.jsx)(ey, { modes: ei.modes, mode: ea, onChange: es }) : null,
                              (0, i.jsx)(y.m, {
                                  text: eN,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(C.K, {
                                      icon: eC ? e9 : e8,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eN,
                                      "aria-pressed": eC,
                                      onClick: ek,
                                  }),
                              }),
                              (0, i.jsx)("div", { className: e1.YJ }),
                              I
                                  ? (0, i.jsx)(y.m, {
                                        text: Y.intl.string(B.default["8MLfBT"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: N.BugIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": Y.intl.string(B.default["8MLfBT"]),
                                            "aria-pressed": x,
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
                                            icon: e6,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": eh,
                                            "aria-pressed": eg,
                                            onClick: ex,
                                        }),
                                    }),
                              (0, $.PV)(t)
                                  ? (0, i.jsx)(y.m, {
                                        text: Y.intl.string(B.default["xhcY+n"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: k.SettingsIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": Y.intl.string(B.default["xhcY+n"]),
                                            onClick: () => (0, eR.A)(t.id, t.guild_id ?? r),
                                        }),
                                    })
                                  : null,
                              (0, $.jf)(t)
                                  ? (0, i.jsx)(y.m, {
                                        text: ep,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: e3,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": ep,
                                            loading: o,
                                            disabled: eu,
                                            onClick: eO,
                                        }),
                                    })
                                  : null,
                              (0, i.jsx)(eD, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, $.PV)(t),
                                  isShared: (0, K.tr)(t),
                                  onRefresh: (0, e2.x1)(eA) ? eE : void 0,
                                  isRefreshing: ew,
                                  onClose: eI,
                                  onExport: eS,
                                  onImport: eP.open,
                                  onRemix: e_,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eH.openModalLazy)(async () => {
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
                                      ei.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ei.profileState
                                          ? er
                                          : null,
                                  previewProjectId: t.id,
                              }),
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: e1.nj,
        children: [
            eP.input,
            (0, i.jsx)("main", {
                className: e1.JX,
                children:
                    null == t
                        ? (0, i.jsxs)("div", {
                              className: e1.j5,
                              children: [
                                  eU,
                                  (0, i.jsxs)("div", {
                                      className: e1.sD,
                                      children: [
                                          (0, i.jsx)(A.D, {
                                              variant: "heading-lg/semibold",
                                              children: Y.intl.string(B.default.F2dRba),
                                          }),
                                          (0, i.jsx)(f.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: Y.intl.string(B.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(w.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: Y.intl.string(B.default["42EdIV"]),
                                              onClick: () => (0, X.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              en.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: e2.sd,
                                  header: eU,
                                  chatOpen: m,
                                  onCloseChat: ef,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => h(!1),
                                  debugOpen: I && x,
                                  onCloseDebug: ev,
                                  onRestoreVersion: eb,
                                  restoreState: S,
                                  previewReady: et,
                                  previewGate: eK,
                                  availability: ei,
                                  activeMode: ea,
                                  widgetApplicationId: er,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function e4(e) {
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
                    .filter((e) => (0, U.X0)(e, o))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, o],
        ),
        D = Y.intl.string(B.default.TU9IGR),
        M = [
            Y.intl.string(B.default["E+Q26x"]),
            Y.intl.string(B.default["06/jqP"]),
            Y.intl.string(B.default["3gSfUa"]),
        ],
        T = [
            {
                id: "feature-showcase",
                name: Y.intl.string(B.default.BLDsiz),
                description: Y.intl.string(B.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: Y.intl.string(B.default["+abXa8"]),
                description: Y.intl.string(B.default.OZYPMR),
            },
        ],
        L = Y.intl.string(B.default.FYK2xQ),
        G = Y.intl.string(B.default["/SUK82"]),
        F = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || y());
            },
            [u, y],
        );
    return (0, i.jsxs)("div", {
        className: r()(e1.nj, e1.a0),
        children: [
            (0, i.jsx)(eL, { title: Y.intl.string(B.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: e1.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: e1.ps,
                        children: [
                            (0, i.jsx)(E.Ip, {
                                className: e1.Yy,
                                children: (0, i.jsx)("div", {
                                    className: e1.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(e1.Qs, e1.Ix),
                                        children: [
                                            (0, i.jsx)(A.D, {
                                                variant: "heading-xl/semibold",
                                                children: Y.intl.string(B.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: e1.WI,
                                                "aria-label": L,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e1.G9,
                                                        children: [
                                                            (0, i.jsx)(f.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: L,
                                                            }),
                                                            (0, i.jsx)(f.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: Y.intl.string(B.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: e1.Aw,
                                                        children: T.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: e1.EA,
                                                                    children: (0, i.jsxs)(x.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": Y.intl.formatToPlainString(
                                                                            B.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(e1.nx, e1.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return y(
                                                                                      ((t = e.name),
                                                                                      Y.intl.formatToPlainString(
                                                                                          B.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, i.jsx)(f.E, {
                                                                                className: e1.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, i.jsx)(f.E, {
                                                                                className: e1.BK,
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
                                                className: e1.WI,
                                                "aria-label": G,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e1.G9,
                                                        children: [
                                                            (0, i.jsx)(f.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: G,
                                                            }),
                                                            (0, i.jsx)(f.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: Y.intl.string(B.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: e1.Aw,
                                                        children: M.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: e1.EA,
                                                                    children: (0, i.jsx)(x.D, {
                                                                        "aria-disabled": d,
                                                                        className: e1.nx,
                                                                        onClick: d ? void 0 : () => y(e),
                                                                        children: (0, i.jsx)(f.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: e1.un,
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
                                className: e1.Yl,
                                children: (0, i.jsxs)("div", {
                                    className: r()(e1.Qs, e1.DA),
                                    children: [
                                        (0, i.jsx)(I.f, {
                                            label: D,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: D,
                                            error: c,
                                            onChange: b,
                                            onKeyDown: F,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: e1.VP,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: e1.gH,
                                                    ref: z,
                                                    children: (0, i.jsx)(S.l, {
                                                        selectionMode: "single",
                                                        label: Y.intl.string(B.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: Y.intl.string(B.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: Y.intl.string(B.default.MLg0S8),
                                                                options: eh.map((e) => ({
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
                                                (0, i.jsx)(ef.A, {
                                                    settings: h ?? K.hk,
                                                    choices: (0, q.e)()
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
                        className: e1.pA,
                        "aria-label": Y.intl.string(B.default.Bo5fE3),
                        children: [
                            (0, i.jsxs)("div", {
                                className: e1.IR,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: e1.RM,
                                        children: [
                                            (0, i.jsx)(f.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: Y.intl.string(B.default.Bo5fE3),
                                            }),
                                            (0, i.jsx)(f.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: Y.intl.string(B.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(ex, { importing: N, onImport: C }),
                                ],
                            }),
                            (0, i.jsxs)(E.Ip, {
                                className: e1.xe,
                                children: [
                                    (null == n || "loading" === n.type) && 0 === V.length
                                        ? (0, i.jsx)("div", { className: e1.E8, children: (0, i.jsx)(R.y, {}) })
                                        : n?.type === "error" && 0 === V.length
                                          ? (0, i.jsxs)("div", {
                                                className: e1.E8,
                                                children: [
                                                    (0, i.jsx)(f.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: e1.JS,
                                                        children: Y.intl.string(B.default["IN/HRP"]),
                                                    }),
                                                    (0, i.jsx)(w.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: Y.intl.string(B.default["42EdIV"]),
                                                        onClick: () => (0, X.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === V.length
                                            ? (0, i.jsx)("div", {
                                                  className: e1.D1,
                                                  children: (0, i.jsxs)("div", {
                                                      className: e1.ST,
                                                      children: [
                                                          (0, i.jsx)(P.D, {
                                                              size: "lg",
                                                              color: _.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, i.jsx)(f.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: e1.sI,
                                                              children: Y.intl.string(B.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsx)("div", {
                                                  className: e1.Dq,
                                                  children: V.map((e) =>
                                                      (0, i.jsx)(
                                                          e5,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => v(e.id),
                                                              onRemix: () => (0, eQ.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    k.length > 0
                                        ? (0, i.jsxs)("div", {
                                              className: e1.qx,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: e1.uc,
                                                      children: [
                                                          (0, i.jsx)(f.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: Y.intl.string(B.default.jrCnUc),
                                                          }),
                                                          (0, i.jsx)(f.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: Y.intl.string(B.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: e1.Dq,
                                                      children: k.map((e) =>
                                                          (0, i.jsx)(
                                                              e5,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => v(e.id),
                                                                  onRemix: () => (0, eQ.A)(e, o),
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
function te(e) {
    let t,
        { guildId: l, projectId: n } = e,
        s = (0, c.yK)([$.Ay], () => $.Ay.getOwnedProjects()),
        r = (0, c.bG)([$.Ay], () => $.Ay.getProjectsFetchState()),
        o = (0, c.yK)([$.Ay], () => $.Ay.getSharedProjects(l), [l]),
        d = (0, c.yK)([L.Ay], () => L.Ay.getSelfMember(l)?.roles ?? [], [l]),
        u = (0, c.bG)([G.A, F.A], () => {
            let e = G.A.getGuild(l);
            return null != e && F.A.can(eq.xBc.MANAGE_GUILD, e);
        }, [l]),
        [m, p] = a.useState(""),
        g = n ?? null,
        [h, x] = a.useState(!1),
        [f, y] = a.useState(null),
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
                    n = Q({ idea: t, installScope: C, submitting: h });
                if ("idea" !== n && "submitting" !== n) {
                    if (null == C) return void A(Y.intl.string(B.default.jQ3nQB));
                    null != e && p(e), x(!0), y(null);
                    try {
                        let e = await (0, X.gA)({ guild_id: l, install_scope: C });
                        (0, Z.Hc)(e),
                            null != w && (0, Z.r2)(e, w),
                            (0, Z.dv)(e, t),
                            (0, M.pX)(eq.BVt.CHANNEL(l, ez.VV.VIBEGRATIONS, e)),
                            p(""),
                            E(null);
                    } catch (e) {
                        y(e instanceof Error ? e.message : Y.intl.string(B.default.KKkp5Y));
                    } finally {
                        x(!1);
                    }
                }
            },
            [C, l, m, w, h],
        ),
        [R, P] = a.useState(!1),
        _ = a.useCallback(
            async (e, t) => {
                let n = ec(e);
                if (null != n) return void (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                P(!0);
                let i = null;
                try {
                    (i = await (0, X.gA)({ guild_id: l, install_scope: t })),
                        await ed(i, e, Y.intl.string(B.default.KjEtrZ)),
                        (0, M.pX)(eq.BVt.CHANNEL(l, ez.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, X.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, v.o)(Y.intl.string(B.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    P(!1);
                }
            },
            [l],
        ),
        z = a.useCallback(
            (e) => {
                (0, M.pX)(eq.BVt.CHANNEL(l, ez.VV.VIBEGRATIONS, e));
            },
            [l],
        ),
        V = a.useCallback(() => {
            (0, M.pX)(eq.BVt.CHANNEL(l, ez.VV.VIBEGRATIONS));
        }, [l]),
        D = a.useCallback((e) => {
            p(e), y(null);
        }, []),
        T = (0, c.bG)([$.Ay], () => {
            if (null == g) return null;
            let e = $.Ay.getProject(g);
            return null == e || (0, $.PV)(e) || e.guild_id === l ? e : null;
        }, [g, l]),
        H = (0, c.bG)([$.Ay], () => $.Ay.hasFetchedGuildProjects(l), [l]);
    return null != g
        ? (0, i.jsx)(e7, { project: T, projectsLoaded: H, onBack: V, guildId: l }, g)
        : (0, i.jsx)(e4, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: w,
              onModelSettingsChange: E,
              idea: m,
              guildId: l,
              submitting: h,
              createError: f,
              createDisabled: "idea" === (t = Q({ idea: m, installScope: C, submitting: h })) || "submitting" === t,
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
