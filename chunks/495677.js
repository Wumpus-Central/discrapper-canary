l.r(t), l.d(t, { default: () => e4 });
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
    x = l(794083),
    f = l(939249),
    h = l(834730),
    j = l(691540),
    v = l(857250),
    b = l(97483),
    y = l(866665),
    C = l(408278),
    N = l(92446),
    A = l(297264),
    E = l(821609),
    k = l(364522),
    I = l(103557),
    w = l(691885),
    S = l(289873),
    R = l(152367),
    _ = l(661531),
    P = l(627363),
    z = l(625180),
    V = l(672929),
    D = l(976860),
    L = l(885386),
    M = l(696451),
    T = l(71393),
    G = l(576705),
    B = l(486020),
    F = l(295813),
    H = l(375708),
    U = l(673724),
    X = l(948230),
    K = l(105810),
    O = l(683180),
    Y = l(208137),
    q = l(805332),
    Z = l(18739),
    W = l(972786);
function $(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var Q = l(58703);
let J = [
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
var ee = l(413927);
function et() {
    let e = J.slice(0, 3);
    if (0 === e.length) return null;
    let t = H.intl.string(F.default.x07mpp);
    return (0, i.jsxs)("section", {
        className: ee.rN,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: ee.bZ,
                children: [
                    (0, i.jsx)(h.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: H.intl.string(F.default.h5CwHI),
                    }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: ee.V,
                children: e.map((e) =>
                    (0, i.jsxs)(
                        "li",
                        {
                            className: ee.S3,
                            children: [
                                (0, i.jsx)(h.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ee.VO,
                                    children: (0, Q.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                }),
                                (0, i.jsx)(h.E, {
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
var el = l(108091),
    en = l(922016),
    ei = l(980707),
    ea = l(477782),
    es = l(81369);
async function er(e, t, l) {
    (0, Z.Hc)(e);
    let n = await (0, Z.vX)(e, t);
    (0, Z.dv)(e, l, [n]);
}
function eo(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, U.x5)(e.size, t)
        ? null
        : H.intl.formatToPlainString(F.default.AzziHF, { size: (0, U.ZJ)((0, U.yr)(t)) });
}
async function ed(e, t) {
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
        i = await (0, Z.cS)(e, n),
        a = URL.createObjectURL(i);
    try {
        let e = document.createElement("a");
        (e.href = a), (e.download = n), (e.rel = "noopener"), e.click();
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(a), 0);
    }
}
function ec(e) {
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
l(323874), l(14289), l(35956);
var eu = l(950305),
    em = l(664121);
let ep = [
    { value: "user", icon: eu.UserIcon, nameMessage: F.default.iqXIRN },
    { value: "guild", icon: em.R, nameMessage: F.default.LdgKdI },
];
function eg(e) {
    let { importing: t, onImport: l } = e,
        n = a.useRef(null),
        s = ec(a.useCallback((e) => l(e, "user"), [l])),
        r = ec(a.useCallback((e) => l(e, "guild"), [l])),
        o = { user: s.open, guild: r.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(en.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: en.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(ei.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": H.intl.string(F.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(ea.rX, {
                            label: H.intl.string(F.default.MLg0S8),
                            children: ep
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: H.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        ea.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, l) => {
                    let { isShown: a } = l;
                    return (0, i.jsx)(E.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: es.H,
                        text: H.intl.string(F.default["NHP2+t"]),
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
var ex = l(311656),
    ef = l(629584),
    eh = l(148853),
    ej = l(491920);
function ev(e) {
    let { modes: t, mode: l, onChange: n, className: s } = e,
        o = a.useMemo(() => t.map((e) => ({ value: e, name: (0, eh.kZ)(e), "aria-controls": (0, eh.z3)(e) })), [t]),
        d = a.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == l
        ? null
        : (0, i.jsx)(ef.I, {
              role: "tablist",
              look: "pill",
              className: r()(ej.b, s),
              optionClassName: ej.u,
              options: o,
              value: l,
              onChange: d,
          });
}
var eb = l(663417),
    ey = l(70688),
    eC = l(173936),
    eN = l(625903),
    eA = l(365199),
    eE = l(770818),
    ek = l(871237),
    eI = l(957565),
    ew = l(557875),
    eS = l(869369),
    eR = l(123917);
let e_ = new Set();
l(321073);
var eP = l(746080);
let ez = [];
function eV(e) {
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
            onVersionHistory: x,
            onRefresh: f,
            isRefreshing: h = !1,
            onClose: y,
            refreshApplicationId: N,
            previewProjectId: A,
        } = e,
        E = a.useRef(null),
        { pending: k, refresh: I } = (0, eE.A)(N ?? null),
        { pending: w, connect: S } = (function (e) {
            let [t, l] = a.useState(e_),
                n = a.useRef(e_),
                i = a.useCallback((e) => {
                    (n.current = (0, ew.Q6)(n.current, e)), l(n.current);
                }, []);
            return {
                pending: t,
                connect: a.useCallback(
                    (t) => {
                        if (null == e) return;
                        let a = (0, ew.K9)(n.current, t.type);
                        async function s() {
                            let l = await (0, Z.JI)(e, t.type);
                            if ((i(t.type), "url" === l.type)) return void (0, eR.h)({ href: l.url, trusted: !1 });
                            let n =
                                "setup" === (0, ew.rq)(l.error)
                                    ? H.intl.string(F.default.avu1u4)
                                    : H.intl.string(F.default["5fwOcF"]);
                            (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                        }
                        null != a && ((n.current = a), l(a), s().catch(() => i(t.type)));
                    },
                    [e, i],
                ),
            };
        })(A ?? null),
        R = (0, c.bG)([Z.Ay], () => (null == A ? ez : Z.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: i } = e,
                a = [];
            for (let { connection: e, offer: s } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: H.intl.string(F.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                a.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: H.intl.formatToPlainString(F.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: H.intl.formatToPlainString(F.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({
            canRefresh: null != N,
            refreshPending: k,
            offers: a.useMemo(() => (0, ew.Xl)(R), [R]),
            connectPending: w,
        }),
        P = a.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        z = null != p && (r || o),
        V = r && null != m,
        D = z || null != d || V || null != g || null != x,
        L = eI.p5 && null != n;
    return null != f || null != y || D || L || r
        ? (0, i.jsx)(en.Y, {
              targetElementRef: E,
              position: "bottom",
              align: "right",
              animation: en.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsxs)(ei.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": H.intl.string(H.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          null != f || null != y
                              ? (0, i.jsxs)(ea.rX, {
                                    children: [
                                        null != f
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "refresh",
                                                  icon: eb.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eb.RefreshIcon },
                                                  label: H.intl.string(F.default.xKexN1),
                                                  disabled: h,
                                                  action: f,
                                              })
                                            : null,
                                        null != y
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "close",
                                                  icon: ey.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: ey.DoorExitIcon },
                                                  label: H.intl.string(F.default.Ea0Wrr),
                                                  action: y,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, i.jsx)(ea.rX, {
                                    children: _.map((e) =>
                                        (0, i.jsx)(
                                            ea.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void I();
                                                    let t = null == e.connectionType ? null : P.get(e.connectionType);
                                                    null != t && S(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          D
                              ? (0, i.jsxs)(ea.rX, {
                                    children: [
                                        z
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "remix",
                                                  label: H.intl.string(F.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "export",
                                                  label: H.intl.string(F.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        V
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "import",
                                                  label: H.intl.string(F.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "connect-tool",
                                                  label: H.intl.string(F.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != x
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "version-history",
                                                  label: H.intl.string(F.default.jAWwzi),
                                                  action: x,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          L
                              ? (0, i.jsx)(ea.rX, {
                                    children: (0, i.jsx)(ea.Dr, {
                                        id: "copy-link",
                                        label: H.intl.string(H.t.WqhZss),
                                        icon: eC.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: eC.LinkIcon },
                                        action: () =>
                                            (0, eI.C)((0, ek.n)(n, eP.VV.VIBEGRATIONS, t), () =>
                                                (0, j.P0)((0, v.o)(H.intl.string(H.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, i.jsxs)(ea.rX, {
                                    children: [
                                        (0, i.jsx)(ea.Dr, {
                                            id: "settings",
                                            label: H.intl.string(F.default["xhcY+n"]),
                                            icon: eN.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: eN.SettingsIcon },
                                            action: () => (0, eS.A)(t, s ?? n),
                                        }),
                                        (0, i.jsx)(ea.Dr, {
                                            id: "delete",
                                            label: H.intl.string(H.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: H.intl.formatToPlainString(F.default.ZokHVz, { name: l }),
                                                    subtitle: H.intl.string(F.default.NmF939),
                                                    confirmText: H.intl.string(H.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, X.xx)(t)).ok)
                                                            throw Error(H.intl.string(F.default.tqKZCi));
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
                      buttonRef: E,
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
var eD = l(742589),
    eL = l(769979);
function eM(e) {
    let { title: t, actions: l, breadcrumb: n } = e;
    return (0, i.jsx)(eD.A, {
        hideSearch: !0,
        toolbar: l,
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
                null != n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eD.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, i.jsx)(eD.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(eD.A.Title, { className: eL.Qw, wrapperClassName: eL.DD, children: t }),
            ],
        }),
    });
}
var eT = l(321593),
    eG = l(580954),
    eB = l(192308),
    eF = l(189213),
    eH = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function eU(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = "permissions" === t;
    return (0, i.jsx)(eF.Modal, {
        transitionState: l,
        onClose: n,
        title: H.intl.string(a ? F.default.Rtlv25 : F.default["+UouPe"]),
        subtitle: H.intl.string(a ? F.default["nDQB/b"] : F.default["E0QD++"]),
        size: "sm",
        actions: [{ text: H.intl.string(a ? H.t.BddRzS : F.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function eX(e) {
    (0, eB.openModal)((t) => (0, i.jsx)(eU, { ...t, reason: e }));
}
var eK = l(224640),
    eO = l(815021),
    eY = l(652215),
    eq = l(931587),
    eZ = l(264997);
function eW(e) {
    let { applicationId: t, guildId: l, projectName: n, transitionState: s, onClose: r } = e,
        o = H.intl.string(F.default.yzxKsU),
        d = H.intl.formatToPlainString(F.default.CC69wK, { projectName: n }),
        c = a.useCallback(() => {
            let e = (0, O.SH)(l, t);
            (0, D.pX)(null == e ? eY.BVt.CHANNEL(l) : eY.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, i.jsx)(eK.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": o,
        children: (0, i.jsxs)("div", {
            className: eq.zr,
            children: [
                (0, i.jsx)("div", { className: eq.b, children: (0, i.jsx)(eO.J, { onClick: r }) }),
                (0, i.jsxs)("div", {
                    className: eq.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: eq.bm,
                            children: (0, i.jsx)("img", { className: eq.yW, src: eZ, alt: "" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: eq.R_,
                            children: [
                                (0, i.jsx)(A.D, { variant: "heading-xl/semibold", color: "text-strong", children: o }),
                                (0, i.jsx)(h.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: d,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: eq.o1,
                    children: [
                        (0, i.jsx)(E.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: H.intl.string(H.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, i.jsx)(E.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: H.intl.string(H.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var e$ = l(584936),
    eQ = l(899154),
    eJ = l(675210),
    e0 = l(165610),
    e1 = l(352978);
function e2(e) {
    return (0, i.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function e8(e) {
    return (0, i.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function e6(e) {
    return (0, i.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function e3(e) {
    return (0, i.jsx)(x.b, { ...e, size: "custom", width: 20, height: 20 });
}
function e9(e) {
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
                    (0, j.P0)((0, v.o)(H.intl.formatToPlainString(F.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    ed(t, l)
                        .catch((e) => {
                            let l;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, j.P0)(
                                    (0, v.o)(
                                        409 === (l = e instanceof Z._v ? e.status : null)
                                            ? H.intl.string(F.default.uB40Hz)
                                            : 404 === l
                                              ? H.intl.string(F.default.wCq2jC)
                                              : H.intl.string(F.default.G2GqyP),
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
                onImport: (r = ec(
                    a.useCallback(
                        (e) => {
                            let n = eo(e);
                            null != n
                                ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                                : (0, u.A)({
                                      title: H.intl.formatToPlainString(F.default.XYZqZK, { name: l }),
                                      subtitle: H.intl.string(F.default["6syXoH"]),
                                      confirmText: H.intl.string(F.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, D.pX)(eY.BVt.CHANNEL(c, eP.VV.VIBEGRATIONS, t));
                                          try {
                                              await er(t, e, H.intl.string(F.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, v.o)(H.intl.string(F.default["02GpNr"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, l, c],
                    ),
                )).open,
                importInput: r.input,
            }),
        x = o.preview_application_id ?? o.application_id,
        { data: y } = (0, P.YY)(x),
        C =
            null == o.updated_at
                ? null
                : H.intl.formatToPlainString(F.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: e1.OY,
        children: [
            (0, i.jsx)(eT.Ay, { projectId: o.id }),
            (0, i.jsxs)(f.D, {
                className: e1.W6,
                onClick: m,
                children: [
                    (0, i.jsx)("img", {
                        alt: "",
                        src: B.Ay.getApplicationIconURL({ id: x, icon: y?.icon, size: 40 }),
                        className: e1.VJ,
                    }),
                    (0, i.jsxs)("div", {
                        className: e1.MM,
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: e1.j1,
                                children: o.name,
                            }),
                            null == C
                                ? null
                                : (0, i.jsx)("div", {
                                      className: e1.h3,
                                      children: (0, i.jsx)(h.E, {
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
                        (0, i.jsx)(eV, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: c,
                            projectGuildId: o.guild_id,
                            isOwner: (0, W.PV)(o),
                            isShared: (0, U.tr)(o),
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
function e5(e) {
    let { project: t, projectsLoaded: n, onBack: s, guildId: r } = e,
        [o, d] = a.useState(!1),
        [m, p] = a.useState(!0),
        [g, x] = a.useState(!1),
        [f, k] = a.useState(!1),
        I = L.Q_.useSetting(),
        [w, S] = a.useState(null),
        [R, _] = a.useState(null),
        M = t?.id ?? null,
        T = a.useRef(M),
        G = a.useRef(!0),
        B = a.useRef(!1),
        O = a.useRef(null);
    (T.current = M),
        a.useEffect(
            () => (
                (G.current = !0),
                () => {
                    G.current = !1;
                }
            ),
            [],
        );
    let Y = (0, c.bG)([W.Ay], () => (null == M ? null : W.Ay.getIntegrationStatus(M)), [M]),
        { data: $, isLoading: Q } = (0, P.YY)(t?.preview_application_id ?? void 0),
        J = null != M && R !== M,
        ee = Y?.preview_ready === !0,
        et = Y?.has_activity === !0,
        {
            availability: en,
            activeMode: ei,
            setMode: ea,
            widgetApplicationId: es,
        } = (0, eQ.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: et,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: Y?.owner_authorization_revoked === !0,
        }),
        ed = (0, eJ.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: ee,
            integrationInstalled: Y?.integration_installed ?? null,
            botPermissionsChanged: Y?.bot_permissions_changed === !0,
        }),
        eu = o || J || Q,
        em = H.intl.string(F.default["5gU57O"]),
        ep = m && !f && !g,
        eg = H.intl.string(ep ? F.default.YdgE0j : F.default.aWVf4j),
        ex = a.useCallback(() => {
            if (f || g) {
                k(!1), x(!1), p(!0);
                return;
            }
            p((e) => !e);
        }, [f, g]),
        ef = a.useCallback(() => p(!1), []),
        eh = a.useCallback(() => {
            k((e) => !e && (p(!0), x(!1), !0));
        }, []),
        ej = a.useCallback(() => k(!1), []),
        eb = a.useCallback(
            (e) => {
                if (null == t || B.current) return;
                let l = t.id;
                function n() {
                    return G.current && T.current === l;
                }
                (B.current = !0),
                    x(!1),
                    p(!0),
                    S({ entry: e, status: "restoring" }),
                    (0, Z.oB)(l, e.sha)
                        .then(
                            () => {
                                n() && S({ entry: e, status: "restored" });
                            },
                            (t) => {
                                n() &&
                                    (S({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, j.P0)((0, v.o)(H.intl.string(F.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (B.current = !1);
                        });
            },
            [t],
        ),
        ey = (0, c.bG)([q.A], () => q.A.isBuilderPreviewMobile()),
        eC = H.intl.string(ey ? F.default["3uCc8U"] : F.default["+nzCxZ"]),
        eN = a.useCallback(() => (0, X.GG)(!ey), [ey]),
        eA = (0, V.A)(t?.preview_application_id ?? null, e0.sd),
        eE = (0, e0.x1)(eA) && eA.data.proxyTicketRefreshing,
        ek = a.useCallback(() => {
            null == eA || eE || z.A.refreshProxyTicket(eA.id);
        }, [eA, eE]),
        eI = a.useCallback(() => {
            var e, l;
            null != t && ((e = t.id), (l = eA?.id), (0, Z.Bn)(e), (0, eG.A)().leaveFrame(l)), s();
        }, [t, eA?.id, s]),
        ew = a.useCallback(() => {
            null != t && (p(!0), (0, Z.dv)(t.id, H.intl.string(F.default["2ejwtJ"])));
        }, [t]),
        eS = ec(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        n = eo(e);
                    null != n
                        ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: H.intl.formatToPlainString(F.default.XYZqZK, { name: t.name }),
                              subtitle: H.intl.string(F.default["6syXoH"]),
                              confirmText: H.intl.string(F.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  p(!0);
                                  try {
                                      await er(l, e, H.intl.string(F.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, v.o)(H.intl.string(F.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eR = a.useCallback(() => {
            null != t && (0, e$.A)(t, r);
        }, [t, r]),
        e_ = a.useCallback(async () => {
            if (null == M || T.current !== M) return;
            O.current?.abort();
            let e = new AbortController();
            (O.current = e), _(null);
            try {
                await (0, X.U1)(M, e.signal);
            } catch {
            } finally {
                e.signal.aborted || O.current !== e || T.current !== M || _(M);
            }
        }, [M]);
    a.useEffect(
        () => (
            e_(),
            () => {
                O.current?.abort(), (O.current = null);
            }
        ),
        [e_],
    );
    let ez = Y?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eD = a.useCallback(async () => {
            null == t ||
                (t.guild_id === ez && t.preview_guild_id === ez) ||
                (await (0, X.M7)(t.id, { guild_id: ez, preview_guild_id: ez }));
        }, [ez, t]),
        eL = a.useCallback(async () => {
            try {
                await eD();
            } catch {}
            await e_();
        }, [e_, eD]),
        eT = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                K.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: $ ?? null,
                    guildId: ez,
                    onClose: () => {
                        eL();
                    },
                });
        }, [eL, ez, $, t]),
        eF = ed
            ? { type: "permissions", onReviewPermissions: eT, loading: Q || J }
            : J && null == Y
              ? { type: "checking" }
              : void 0;
    a.useEffect(() => {
        null == t && n && (0, D.pX)(eY.BVt.CHANNEL(r, eP.VV.VIBEGRATIONS));
    }, [r, t, n]);
    let eU = a.useCallback(async () => {
            if (null != t) {
                if (!ee) return void eX(eH.NO_PREVIEW);
                if (ed) return void eX(eH.PERMISSIONS);
                d(!0);
                try {
                    var e;
                    let l = await (0, Z.TV)(t.id);
                    if (!0 !== l.ok) throw Error(H.intl.string(F.default.fNP6Cd));
                    (0, X.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, eB.openModal)((t) => (0, i.jsx)(eW, { ...t, ...e }));
                } catch (e) {
                    (0, j.P0)((0, v.o)(e instanceof Error ? e.message : H.intl.string(F.default.fNP6Cd), b.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [r, ed, ee, t]),
        eK = (0, i.jsx)(eM, {
            title: t?.name ?? H.intl.string(F.default.F2dRba),
            breadcrumb: { title: H.intl.string(F.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: e1.FO,
                          children: [
                              en.showModeSwitch ? (0, i.jsx)(ev, { modes: en.modes, mode: ei, onChange: ea }) : null,
                              (0, i.jsx)(eV, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, W.PV)(t),
                                  isShared: (0, U.tr)(t),
                                  onRefresh: (0, e0.x1)(eA) ? ek : void 0,
                                  isRefreshing: eE,
                                  onClose: eI,
                                  onExport: ew,
                                  onImport: eS.open,
                                  onRemix: eR,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eB.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("964476"),
                                                  l.e("461590"),
                                              ]).then(l.bind(l, 84469));
                                              return (l) => (0, i.jsx)(t, { ...l, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      w?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                p(!0), k(!1), x(!0);
                                            },
                                  refreshApplicationId:
                                      en.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== en.profileState
                                          ? es
                                          : null,
                                  previewProjectId: t.id,
                              }),
                              (0, i.jsx)(y.m, {
                                  text: eC,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(C.K, {
                                      icon: ey ? e6 : e8,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eC,
                                      "aria-pressed": ey,
                                      onClick: eN,
                                  }),
                              }),
                              I
                                  ? (0, i.jsx)(y.m, {
                                        text: H.intl.string(F.default["8MLfBT"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: N.BugIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": H.intl.string(F.default["8MLfBT"]),
                                            "aria-pressed": f,
                                            onClick: eh,
                                        }),
                                    })
                                  : null,
                              (0, i.jsx)(y.m, {
                                  text: eg,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(C.K, {
                                      icon: e2,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eg,
                                      "aria-pressed": ep,
                                      onClick: ex,
                                  }),
                              }),
                              (0, W.jf)(t)
                                  ? (0, i.jsx)(y.m, {
                                        text: em,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: e3,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": em,
                                            loading: o,
                                            disabled: eu,
                                            onClick: eU,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: e1.nj,
        children: [
            eS.input,
            (0, i.jsx)("main", {
                className: e1.JX,
                children:
                    null == t
                        ? (0, i.jsxs)("div", {
                              className: e1.j5,
                              children: [
                                  eK,
                                  (0, i.jsxs)("div", {
                                      className: e1.sD,
                                      children: [
                                          (0, i.jsx)(A.D, {
                                              variant: "heading-lg/semibold",
                                              children: H.intl.string(F.default.F2dRba),
                                          }),
                                          (0, i.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: H.intl.string(F.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(E.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: H.intl.string(F.default["42EdIV"]),
                                              onClick: () => (0, X.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              el.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: e0.sd,
                                  header: eK,
                                  chatOpen: m,
                                  onCloseChat: ef,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => x(!1),
                                  debugOpen: I && f,
                                  onCloseDebug: ej,
                                  onRestoreVersion: eb,
                                  restoreState: w,
                                  previewReady: ee,
                                  previewGate: eF,
                                  availability: en,
                                  activeMode: ei,
                                  widgetApplicationId: es,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function e7(e) {
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
            modelSettings: x,
            onModelSettingsChange: j,
            onSelectProject: v,
            onIdeaChange: b,
            onCreate: y,
            onImportNewProject: C,
            importing: N,
        } = e,
        P = a.useMemo(
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
                    .filter((e) => (0, O.X0)(e, o))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, o],
        ),
        D = H.intl.string(F.default.TU9IGR),
        L = [
            H.intl.string(F.default["E+Q26x"]),
            H.intl.string(F.default["06/jqP"]),
            H.intl.string(F.default["3gSfUa"]),
        ],
        M = [
            {
                id: "feature-showcase",
                name: H.intl.string(F.default.BLDsiz),
                description: H.intl.string(F.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: H.intl.string(F.default["+abXa8"]),
                description: H.intl.string(F.default.OZYPMR),
            },
        ],
        T = H.intl.string(F.default.FYK2xQ),
        G = H.intl.string(F.default["/SUK82"]),
        B = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || y());
            },
            [u, y],
        );
    return (0, i.jsxs)("div", {
        className: r()(e1.nj, e1.a0),
        children: [
            (0, i.jsx)(eM, { title: H.intl.string(F.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: e1.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: e1.ps,
                        children: [
                            (0, i.jsx)(k.Ip, {
                                className: e1.Yy,
                                children: (0, i.jsx)("div", {
                                    className: e1.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(e1.Qs, e1.Ix),
                                        children: [
                                            (0, i.jsx)(A.D, {
                                                variant: "heading-xl/semibold",
                                                children: H.intl.string(F.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: e1.WI,
                                                "aria-label": T,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e1.G9,
                                                        children: [
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: T,
                                                            }),
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(F.default.BTNdyX),
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
                                                                    children: (0, i.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": H.intl.formatToPlainString(
                                                                            F.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(e1.nx, e1.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return y(
                                                                                      ((t = e.name),
                                                                                      H.intl.formatToPlainString(
                                                                                          F.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, i.jsx)(h.E, {
                                                                                className: e1.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, i.jsx)(h.E, {
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
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: G,
                                                            }),
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(F.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: e1.Aw,
                                                        children: L.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: e1.EA,
                                                                    children: (0, i.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: e1.nx,
                                                                        onClick: d ? void 0 : () => y(e),
                                                                        children: (0, i.jsx)(h.E, {
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
                                            (0, i.jsx)(et, {}),
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
                                            onKeyDown: B,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: e1.VP,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: e1.gH,
                                                    ref: z,
                                                    children: (0, i.jsx)(w.l, {
                                                        selectionMode: "single",
                                                        label: H.intl.string(F.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: H.intl.string(F.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: H.intl.string(F.default.MLg0S8),
                                                                options: ep.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: H.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: m ?? void 0,
                                                        onSelectionChange: p,
                                                        errorMessage: g,
                                                    }),
                                                }),
                                                (0, i.jsx)(ex.A, {
                                                    settings: x ?? U.hk,
                                                    choices: (0, Y.e)()
                                                        ? {
                                                              main: [...U.S8.main, ...U.wF.main],
                                                              subagent: [...U.S8.subagent, ...U.wF.subagent],
                                                              thinking: U.S8.thinking,
                                                          }
                                                        : U.S8,
                                                    disabled: d,
                                                    onChange: j,
                                                }),
                                                (0, i.jsx)(E.$, {
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
                        className: e1.pA,
                        "aria-label": H.intl.string(F.default.Bo5fE3),
                        children: [
                            (0, i.jsxs)("div", {
                                className: e1.IR,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: e1.RM,
                                        children: [
                                            (0, i.jsx)(h.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: H.intl.string(F.default.Bo5fE3),
                                            }),
                                            (0, i.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: H.intl.string(F.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(eg, { importing: N, onImport: C }),
                                ],
                            }),
                            (0, i.jsxs)(k.Ip, {
                                className: e1.xe,
                                children: [
                                    (null == n || "loading" === n.type) && 0 === V.length
                                        ? (0, i.jsx)("div", { className: e1.E8, children: (0, i.jsx)(S.y, {}) })
                                        : n?.type === "error" && 0 === V.length
                                          ? (0, i.jsxs)("div", {
                                                className: e1.E8,
                                                children: [
                                                    (0, i.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: e1.JS,
                                                        children: H.intl.string(F.default["IN/HRP"]),
                                                    }),
                                                    (0, i.jsx)(E.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: H.intl.string(F.default["42EdIV"]),
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
                                                          (0, i.jsx)(R.D, {
                                                              size: "lg",
                                                              color: _.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, i.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: e1.sI,
                                                              children: H.intl.string(F.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsx)("div", {
                                                  className: e1.Dq,
                                                  children: V.map((e) =>
                                                      (0, i.jsx)(
                                                          e9,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => v(e.id),
                                                              onRemix: () => (0, e$.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    P.length > 0
                                        ? (0, i.jsxs)("div", {
                                              className: e1.qx,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: e1.uc,
                                                      children: [
                                                          (0, i.jsx)(h.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: H.intl.string(F.default.jrCnUc),
                                                          }),
                                                          (0, i.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: H.intl.string(F.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: e1.Dq,
                                                      children: P.map((e) =>
                                                          (0, i.jsx)(
                                                              e9,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => v(e.id),
                                                                  onRemix: () => (0, e$.A)(e, o),
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
function e4(e) {
    let t,
        { guildId: l, projectId: n } = e,
        s = (0, c.yK)([W.Ay], () => W.Ay.getOwnedProjects()),
        r = (0, c.bG)([W.Ay], () => W.Ay.getProjectsFetchState()),
        o = (0, c.yK)([W.Ay], () => W.Ay.getSharedProjects(l), [l]),
        d = (0, c.yK)([M.Ay], () => M.Ay.getSelfMember(l)?.roles ?? [], [l]),
        u = (0, c.bG)([T.A, G.A], () => {
            let e = T.A.getGuild(l);
            return null != e && G.A.can(eY.xBc.MANAGE_GUILD, e);
        }, [l]),
        [m, p] = a.useState(""),
        g = n ?? null,
        [x, f] = a.useState(!1),
        [h, y] = a.useState(null),
        [C, N] = a.useState("guild"),
        [A, E] = a.useState(null),
        [k, I] = a.useState(null);
    a.useEffect(() => {
        (0, X.hF)(l);
    }, [l, d, u]),
        a.useEffect(() => {
            (0, X.dm)(l, g);
        }, [l, g]);
    let w = a.useCallback((e) => {
            N(e), E(null);
        }, []),
        S = a.useCallback(
            async (e) => {
                let t = (e ?? m).trim(),
                    n = $({ idea: t, installScope: C, submitting: x });
                if ("idea" !== n && "submitting" !== n) {
                    if (null == C) return void E(H.intl.string(F.default.jQ3nQB));
                    null != e && p(e), f(!0), y(null);
                    try {
                        let e = await (0, X.gA)({ guild_id: l, install_scope: C });
                        (0, Z.Hc)(e),
                            null != k && (0, Z.r2)(e, k),
                            (0, Z.dv)(e, t),
                            (0, D.pX)(eY.BVt.CHANNEL(l, eP.VV.VIBEGRATIONS, e)),
                            p(""),
                            I(null);
                    } catch (e) {
                        y(e instanceof Error ? e.message : H.intl.string(F.default.KKkp5Y));
                    } finally {
                        f(!1);
                    }
                }
            },
            [C, l, m, k, x],
        ),
        [R, _] = a.useState(!1),
        P = a.useCallback(
            async (e, t) => {
                let n = eo(e);
                if (null != n) return void (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                _(!0);
                let i = null;
                try {
                    (i = await (0, X.gA)({ guild_id: l, install_scope: t })),
                        await er(i, e, H.intl.string(F.default.KjEtrZ)),
                        (0, D.pX)(eY.BVt.CHANNEL(l, eP.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, X.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, v.o)(H.intl.string(F.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    _(!1);
                }
            },
            [l],
        ),
        z = a.useCallback(
            (e) => {
                (0, D.pX)(eY.BVt.CHANNEL(l, eP.VV.VIBEGRATIONS, e));
            },
            [l],
        ),
        V = a.useCallback(() => {
            (0, D.pX)(eY.BVt.CHANNEL(l, eP.VV.VIBEGRATIONS));
        }, [l]),
        L = a.useCallback((e) => {
            p(e), y(null);
        }, []),
        B = (0, c.bG)([W.Ay], () => {
            if (null == g) return null;
            let e = W.Ay.getProject(g);
            return null == e || (0, W.PV)(e) || e.guild_id === l ? e : null;
        }, [g, l]),
        U = (0, c.bG)([W.Ay], () => W.Ay.hasFetchedGuildProjects(l), [l]);
    return null != g
        ? (0, i.jsx)(e5, { project: B, projectsLoaded: U, onBack: V, guildId: l }, g)
        : (0, i.jsx)(e7, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: k,
              onModelSettingsChange: I,
              idea: m,
              guildId: l,
              submitting: x,
              createError: h,
              createDisabled: "idea" === (t = $({ idea: m, installScope: C, submitting: x })) || "submitting" === t,
              onSelectProject: z,
              onIdeaChange: L,
              onCreate: S,
              onImportNewProject: P,
              importing: R,
              installScope: C,
              onInstallScopeChange: w,
              installScopeError: A,
          });
}
