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
    I = l(364522),
    k = l(103557),
    S = l(691885),
    w = l(289873),
    R = l(152367),
    _ = l(661531),
    P = l(627363),
    z = l(625180),
    V = l(672929),
    D = l(976860),
    M = l(885386),
    T = l(696451),
    L = l(71393),
    G = l(576705),
    F = l(486020),
    B = l(295813),
    H = l(375708),
    X = l(673724),
    K = l(948230),
    Y = l(105810),
    O = l(683180),
    U = l(208137),
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
    let t = H.intl.string(B.default.x07mpp);
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
                        children: H.intl.string(B.default.h5CwHI),
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
var el = l(938522),
    en = l(922016),
    ei = l(980707),
    ea = l(477782),
    es = l(81369),
    er = l(402879);
async function eo(e, t, l) {
    (0, Z.Hc)(e);
    let n = await (0, Z.vX)(e, t);
    (0, Z.dv)(e, l, [n]);
}
function ed(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, X.x5)(e.size, t)
        ? null
        : H.intl.formatToPlainString(B.default.AzziHF, { size: (0, X.ZJ)((0, X.yr)(t)) });
}
async function ec(e, t) {
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
    await (0, er.F)(i, n);
}
function eu(e) {
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
var em = l(950305),
    ep = l(664121);
let eg = [
    { value: "user", icon: em.UserIcon, nameMessage: B.default.iqXIRN },
    { value: "guild", icon: ep.R, nameMessage: B.default.LdgKdI },
];
function ex(e) {
    let { importing: t, onImport: l } = e,
        n = a.useRef(null),
        s = eu(a.useCallback((e) => l(e, "user"), [l])),
        r = eu(a.useCallback((e) => l(e, "guild"), [l])),
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
                        "aria-label": H.intl.string(B.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(ea.rX, {
                            label: H.intl.string(B.default.MLg0S8),
                            children: eg
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
                        text: H.intl.string(B.default["NHP2+t"]),
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
    eh = l(629584),
    ej = l(148853),
    ev = l(491920);
function eb(e) {
    let { modes: t, mode: l, onChange: n, className: s } = e,
        o = a.useMemo(() => t.map((e) => ({ value: e, name: (0, ej.kZ)(e), "aria-controls": (0, ej.z3)(e) })), [t]),
        d = a.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == l
        ? null
        : (0, i.jsx)(eh.I, {
              role: "tablist",
              look: "pill",
              className: r()(ev.b, s),
              optionClassName: ev.u,
              options: o,
              value: l,
              onChange: d,
          });
}
var ey = l(663417),
    eC = l(70688),
    eN = l(173936),
    eA = l(625903),
    eE = l(365199),
    eI = l(770818),
    ek = l(871237),
    eS = l(957565),
    ew = l(557875),
    eR = l(869369),
    e_ = l(123917);
let eP = new Set();
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
            onVersionHistory: x,
            onRefresh: f,
            isRefreshing: h = !1,
            onClose: y,
            refreshApplicationId: N,
            previewProjectId: A,
        } = e,
        E = a.useRef(null),
        { pending: I, refresh: k } = (0, eI.A)(N ?? null),
        { pending: S, connect: w } = (function (e) {
            let [t, l] = a.useState(eP),
                n = a.useRef(eP),
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
                            if ((i(t.type), "url" === l.type)) return void (0, e_.h)({ href: l.url, trusted: !1 });
                            let n =
                                "setup" === (0, ew.rq)(l.error)
                                    ? H.intl.string(B.default.avu1u4)
                                    : H.intl.string(B.default["5fwOcF"]);
                            (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                        }
                        null != a && ((n.current = a), l(a), s().catch(() => i(t.type)));
                    },
                    [e, i],
                ),
            };
        })(A ?? null),
        R = (0, c.bG)([Z.Ay], () => (null == A ? eV : Z.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: i } = e,
                a = [];
            for (let { connection: e, offer: s } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: H.intl.string(B.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                a.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: H.intl.formatToPlainString(B.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: H.intl.formatToPlainString(B.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({
            canRefresh: null != N,
            refreshPending: I,
            offers: a.useMemo(() => (0, ew.Xl)(R), [R]),
            connectPending: S,
        }),
        P = a.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        z = null != p && (r || o),
        V = r && null != m,
        D = z || null != d || V || null != g || null != x,
        M = eS.p5 && null != n;
    return null != f || null != y || D || M || r
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
                                                  icon: ey.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: ey.RefreshIcon },
                                                  label: H.intl.string(B.default.xKexN1),
                                                  disabled: h,
                                                  action: f,
                                              })
                                            : null,
                                        null != y
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "close",
                                                  icon: eC.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eC.DoorExitIcon },
                                                  label: H.intl.string(B.default.Ea0Wrr),
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
                                                    if ("refresh" === e.kind) return void k();
                                                    let t = null == e.connectionType ? null : P.get(e.connectionType);
                                                    null != t && w(t);
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
                                                  label: H.intl.string(B.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "export",
                                                  label: H.intl.string(B.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        V
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "import",
                                                  label: H.intl.string(B.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "connect-tool",
                                                  label: H.intl.string(B.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != x
                                            ? (0, i.jsx)(ea.Dr, {
                                                  id: "version-history",
                                                  label: H.intl.string(B.default.jAWwzi),
                                                  action: x,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          M
                              ? (0, i.jsx)(ea.rX, {
                                    children: (0, i.jsx)(ea.Dr, {
                                        id: "copy-link",
                                        label: H.intl.string(H.t.WqhZss),
                                        icon: eN.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: eN.LinkIcon },
                                        action: () =>
                                            (0, eS.C)((0, ek.n)(n, ez.VV.VIBEGRATIONS, t), () =>
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
                                            label: H.intl.string(B.default["xhcY+n"]),
                                            icon: eA.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: eA.SettingsIcon },
                                            action: () => (0, eR.A)(t, s ?? n),
                                        }),
                                        (0, i.jsx)(ea.Dr, {
                                            id: "delete",
                                            label: H.intl.string(H.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: H.intl.formatToPlainString(B.default.ZokHVz, { name: l }),
                                                    subtitle: H.intl.string(B.default.NmF939),
                                                    confirmText: H.intl.string(H.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, K.xx)(t)).ok)
                                                            throw Error(H.intl.string(B.default.tqKZCi));
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
                      icon: eE.MoreHorizontalIcon,
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
                (0, i.jsx)(R.D, {
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
    eB = l(192308),
    eH = l(189213),
    eX = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function eK(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = "permissions" === t;
    return (0, i.jsx)(eH.Modal, {
        transitionState: l,
        onClose: n,
        title: H.intl.string(a ? B.default.Rtlv25 : B.default["+UouPe"]),
        subtitle: H.intl.string(a ? B.default["nDQB/b"] : B.default["E0QD++"]),
        size: "sm",
        actions: [{ text: H.intl.string(a ? H.t.BddRzS : B.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function eY(e) {
    (0, eB.openModal)((t) => (0, i.jsx)(eK, { ...t, reason: e }));
}
var eO = l(224640),
    eU = l(815021),
    eq = l(652215),
    eZ = l(931587),
    eW = l(264997);
function e$(e) {
    let { applicationId: t, guildId: l, projectName: n, transitionState: s, onClose: r } = e,
        o = H.intl.string(B.default.yzxKsU),
        d = H.intl.formatToPlainString(B.default.CC69wK, { projectName: n }),
        c = a.useCallback(() => {
            let e = (0, O.SH)(l, t);
            (0, D.pX)(null == e ? eq.BVt.CHANNEL(l) : eq.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, i.jsx)(eO.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": o,
        children: (0, i.jsxs)("div", {
            className: eZ.zr,
            children: [
                (0, i.jsx)("div", { className: eZ.b, children: (0, i.jsx)(eU.J, { onClick: r }) }),
                (0, i.jsxs)("div", {
                    className: eZ.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: eZ.bm,
                            children: (0, i.jsx)("img", { className: eZ.yW, src: eW, alt: "" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: eZ.R_,
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
                    className: eZ.o1,
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
var eQ = l(584936),
    eJ = l(899154),
    e0 = l(675210),
    e2 = l(165610),
    e1 = l(352978);
function e8(e) {
    return (0, i.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function e6(e) {
    return (0, i.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function e9(e) {
    return (0, i.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function e3(e) {
    return (0, i.jsx)(x.b, { ...e, size: "custom", width: 20, height: 20 });
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
                    (0, j.P0)((0, v.o)(H.intl.formatToPlainString(B.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    ec(t, l)
                        .catch((e) => {
                            let l;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, j.P0)(
                                    (0, v.o)(
                                        409 === (l = e instanceof Z._v ? e.status : null)
                                            ? H.intl.string(B.default.uB40Hz)
                                            : 404 === l
                                              ? H.intl.string(B.default.wCq2jC)
                                              : H.intl.string(B.default.G2GqyP),
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
                onImport: (r = eu(
                    a.useCallback(
                        (e) => {
                            let n = ed(e);
                            null != n
                                ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                                : (0, u.A)({
                                      title: H.intl.formatToPlainString(B.default.XYZqZK, { name: l }),
                                      subtitle: H.intl.string(B.default["6syXoH"]),
                                      confirmText: H.intl.string(B.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, D.pX)(eq.BVt.CHANNEL(c, ez.VV.VIBEGRATIONS, t));
                                          try {
                                              await eo(t, e, H.intl.string(B.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, v.o)(H.intl.string(B.default["02GpNr"]), b.Ck.FAILURE));
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
                : H.intl.formatToPlainString(B.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: e1.OY,
        children: [
            (0, i.jsx)(eG.Ay, { projectId: o.id }),
            (0, i.jsxs)(f.D, {
                className: e1.W6,
                onClick: m,
                children: [
                    (0, i.jsx)("img", {
                        alt: "",
                        src: F.Ay.getApplicationIconURL({ id: x, icon: y?.icon, size: 40 }),
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
                        (0, i.jsx)(eD, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: c,
                            projectGuildId: o.guild_id,
                            isOwner: (0, W.PV)(o),
                            isShared: (0, X.tr)(o),
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
        [g, x] = a.useState(!1),
        [f, I] = a.useState(!1),
        k = M.Q_.useSetting(),
        [S, w] = a.useState(null),
        [R, _] = a.useState(null),
        T = t?.id ?? null,
        L = a.useRef(T),
        G = a.useRef(!0),
        F = a.useRef(!1),
        O = a.useRef(null);
    (L.current = T),
        a.useEffect(
            () => (
                (G.current = !0),
                () => {
                    G.current = !1;
                }
            ),
            [],
        );
    let U = (0, c.bG)([W.Ay], () => (null == T ? null : W.Ay.getIntegrationStatus(T)), [T]),
        { data: $, isLoading: Q } = (0, P.YY)(t?.preview_application_id ?? void 0),
        J = null != T && R !== T,
        ee = U?.preview_ready === !0,
        et = U?.has_activity === !0,
        {
            availability: en,
            activeMode: ei,
            setMode: ea,
            widgetApplicationId: es,
        } = (0, eJ.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: et,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: U?.owner_authorization_revoked === !0,
        }),
        er = (0, e0.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: ee,
            integrationInstalled: U?.integration_installed ?? null,
            botPermissionsChanged: U?.bot_permissions_changed === !0,
        }),
        ec = o || J || Q,
        em = H.intl.string(B.default["5gU57O"]),
        ep = m && !f && !g,
        eg = H.intl.string(ep ? B.default.YdgE0j : B.default.aWVf4j),
        ex = a.useCallback(() => {
            if (f || g) {
                I(!1), x(!1), p(!0);
                return;
            }
            p((e) => !e);
        }, [f, g]),
        ef = a.useCallback(() => p(!1), []),
        eh = a.useCallback(() => {
            I((e) => !e && (p(!0), x(!1), !0));
        }, []),
        ej = a.useCallback(() => I(!1), []),
        ev = a.useCallback(
            (e) => {
                if (null == t || F.current) return;
                let l = t.id;
                function n() {
                    return G.current && L.current === l;
                }
                (F.current = !0),
                    x(!1),
                    p(!0),
                    w({ entry: e, status: "restoring" }),
                    (0, Z.oB)(l, e.sha)
                        .then(
                            () => {
                                n() && w({ entry: e, status: "restored" });
                            },
                            (t) => {
                                n() &&
                                    (w({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, j.P0)((0, v.o)(H.intl.string(B.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (F.current = !1);
                        });
            },
            [t],
        ),
        ey = (0, c.bG)([q.A], () => q.A.isBuilderPreviewMobile()),
        eC = H.intl.string(ey ? B.default["3uCc8U"] : B.default["+nzCxZ"]),
        eN = a.useCallback(() => (0, K.GG)(!ey), [ey]),
        eA = (0, V.A)(t?.preview_application_id ?? null, e2.sd),
        eE = (0, e2.x1)(eA) && eA.data.proxyTicketRefreshing,
        eI = a.useCallback(() => {
            null == eA || eE || z.A.refreshProxyTicket(eA.id);
        }, [eA, eE]),
        ek = a.useCallback(() => {
            var e, l;
            null != t && ((e = t.id), (l = eA?.id), (0, Z.Bn)(e), (0, eF.A)().leaveFrame(l)), s();
        }, [t, eA?.id, s]),
        eS = a.useCallback(() => {
            null != t && (p(!0), (0, Z.dv)(t.id, H.intl.string(B.default["2ejwtJ"])));
        }, [t]),
        ew = eu(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        n = ed(e);
                    null != n
                        ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: H.intl.formatToPlainString(B.default.XYZqZK, { name: t.name }),
                              subtitle: H.intl.string(B.default["6syXoH"]),
                              confirmText: H.intl.string(B.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  p(!0);
                                  try {
                                      await eo(l, e, H.intl.string(B.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, v.o)(H.intl.string(B.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eR = a.useCallback(() => {
            null != t && (0, eQ.A)(t, r);
        }, [t, r]),
        e_ = a.useCallback(async () => {
            if (null == T || L.current !== T) return;
            O.current?.abort();
            let e = new AbortController();
            (O.current = e), _(null);
            try {
                await (0, K.U1)(T, e.signal);
            } catch {
            } finally {
                e.signal.aborted || O.current !== e || L.current !== T || _(T);
            }
        }, [T]);
    a.useEffect(
        () => (
            e_(),
            () => {
                O.current?.abort(), (O.current = null);
            }
        ),
        [e_],
    );
    let eP = U?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eV = a.useCallback(async () => {
            null == t ||
                (t.guild_id === eP && t.preview_guild_id === eP) ||
                (await (0, K.M7)(t.id, { guild_id: eP, preview_guild_id: eP }));
        }, [eP, t]),
        eM = a.useCallback(async () => {
            try {
                await eV();
            } catch {}
            await e_();
        }, [e_, eV]),
        eT = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                Y.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: $ ?? null,
                    guildId: eP,
                    onClose: () => {
                        eM();
                    },
                });
        }, [eM, eP, $, t]),
        eG = er
            ? { type: "permissions", onReviewPermissions: eT, loading: Q || J }
            : J && null == U
              ? { type: "checking" }
              : void 0;
    a.useEffect(() => {
        null == t && n && (0, D.pX)(eq.BVt.CHANNEL(r, ez.VV.VIBEGRATIONS));
    }, [r, t, n]);
    let eH = a.useCallback(async () => {
            if (null != t) {
                if (!ee) return void eY(eX.NO_PREVIEW);
                if (er) return void eY(eX.PERMISSIONS);
                d(!0);
                try {
                    var e;
                    let l = await (0, Z.TV)(t.id);
                    if (!0 !== l.ok) throw Error(H.intl.string(B.default.fNP6Cd));
                    (0, K.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, eB.openModal)((t) => (0, i.jsx)(e$, { ...t, ...e }));
                } catch (e) {
                    (0, j.P0)((0, v.o)(e instanceof Error ? e.message : H.intl.string(B.default.fNP6Cd), b.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [r, er, ee, t]),
        eK = (0, i.jsx)(eL, {
            title: t?.name ?? H.intl.string(B.default.F2dRba),
            breadcrumb: { title: H.intl.string(B.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: e1.FO,
                          children: [
                              en.showModeSwitch ? (0, i.jsx)(eb, { modes: en.modes, mode: ei, onChange: ea }) : null,
                              (0, i.jsx)(eD, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, W.PV)(t),
                                  isShared: (0, X.tr)(t),
                                  onRefresh: (0, e2.x1)(eA) ? eI : void 0,
                                  isRefreshing: eE,
                                  onClose: ek,
                                  onExport: eS,
                                  onImport: ew.open,
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
                                      S?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                p(!0), I(!1), x(!0);
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
                                      icon: ey ? e9 : e6,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eC,
                                      "aria-pressed": ey,
                                      onClick: eN,
                                  }),
                              }),
                              k
                                  ? (0, i.jsx)(y.m, {
                                        text: H.intl.string(B.default["8MLfBT"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: N.BugIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": H.intl.string(B.default["8MLfBT"]),
                                            "aria-pressed": f,
                                            onClick: eh,
                                        }),
                                    })
                                  : null,
                              (0, i.jsx)(y.m, {
                                  text: eg,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(C.K, {
                                      icon: e8,
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
                                            disabled: ec,
                                            onClick: eH,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: e1.nj,
        children: [
            ew.input,
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
                                              children: H.intl.string(B.default.F2dRba),
                                          }),
                                          (0, i.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: H.intl.string(B.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(E.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: H.intl.string(B.default["42EdIV"]),
                                              onClick: () => (0, K.hF)(r),
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
                                  surface: e2.sd,
                                  header: eK,
                                  chatOpen: m,
                                  onCloseChat: ef,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => x(!1),
                                  debugOpen: k && f,
                                  onCloseDebug: ej,
                                  onRestoreVersion: ev,
                                  restoreState: S,
                                  previewReady: ee,
                                  previewGate: eG,
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
        D = H.intl.string(B.default.TU9IGR),
        M = [
            H.intl.string(B.default["E+Q26x"]),
            H.intl.string(B.default["06/jqP"]),
            H.intl.string(B.default["3gSfUa"]),
        ],
        T = [
            {
                id: "feature-showcase",
                name: H.intl.string(B.default.BLDsiz),
                description: H.intl.string(B.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: H.intl.string(B.default["+abXa8"]),
                description: H.intl.string(B.default.OZYPMR),
            },
        ],
        L = H.intl.string(B.default.FYK2xQ),
        G = H.intl.string(B.default["/SUK82"]),
        F = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || y());
            },
            [u, y],
        );
    return (0, i.jsxs)("div", {
        className: r()(e1.nj, e1.a0),
        children: [
            (0, i.jsx)(eL, { title: H.intl.string(B.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: e1.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: e1.ps,
                        children: [
                            (0, i.jsx)(I.Ip, {
                                className: e1.Yy,
                                children: (0, i.jsx)("div", {
                                    className: e1.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(e1.Qs, e1.Ix),
                                        children: [
                                            (0, i.jsx)(A.D, {
                                                variant: "heading-xl/semibold",
                                                children: H.intl.string(B.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: e1.WI,
                                                "aria-label": L,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e1.G9,
                                                        children: [
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: L,
                                                            }),
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(B.default.BTNdyX),
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
                                                                    children: (0, i.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": H.intl.formatToPlainString(
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
                                                                                      H.intl.formatToPlainString(
                                                                                          B.default["9D9L0S"],
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
                                                                children: H.intl.string(B.default["+aBXyx"]),
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
                                        (0, i.jsx)(k.f, {
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
                                                        label: H.intl.string(B.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: H.intl.string(B.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: H.intl.string(B.default.MLg0S8),
                                                                options: eg.map((e) => ({
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
                                                (0, i.jsx)(ef.A, {
                                                    settings: x ?? X.hk,
                                                    choices: (0, U.e)()
                                                        ? {
                                                              main: [...X.S8.main, ...X.wF.main],
                                                              subagent: [...X.S8.subagent, ...X.wF.subagent],
                                                              thinking: X.S8.thinking,
                                                          }
                                                        : X.S8,
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
                        "aria-label": H.intl.string(B.default.Bo5fE3),
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
                                                children: H.intl.string(B.default.Bo5fE3),
                                            }),
                                            (0, i.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: H.intl.string(B.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(ex, { importing: N, onImport: C }),
                                ],
                            }),
                            (0, i.jsxs)(I.Ip, {
                                className: e1.xe,
                                children: [
                                    (null == n || "loading" === n.type) && 0 === V.length
                                        ? (0, i.jsx)("div", { className: e1.E8, children: (0, i.jsx)(w.y, {}) })
                                        : n?.type === "error" && 0 === V.length
                                          ? (0, i.jsxs)("div", {
                                                className: e1.E8,
                                                children: [
                                                    (0, i.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: e1.JS,
                                                        children: H.intl.string(B.default["IN/HRP"]),
                                                    }),
                                                    (0, i.jsx)(E.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: H.intl.string(B.default["42EdIV"]),
                                                        onClick: () => (0, K.hF)(o),
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
                                                              children: H.intl.string(B.default["vqy+in"]),
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
                                                              children: H.intl.string(B.default.jrCnUc),
                                                          }),
                                                          (0, i.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: H.intl.string(B.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: e1.Dq,
                                                      children: P.map((e) =>
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
        s = (0, c.yK)([W.Ay], () => W.Ay.getOwnedProjects()),
        r = (0, c.bG)([W.Ay], () => W.Ay.getProjectsFetchState()),
        o = (0, c.yK)([W.Ay], () => W.Ay.getSharedProjects(l), [l]),
        d = (0, c.yK)([T.Ay], () => T.Ay.getSelfMember(l)?.roles ?? [], [l]),
        u = (0, c.bG)([L.A, G.A], () => {
            let e = L.A.getGuild(l);
            return null != e && G.A.can(eq.xBc.MANAGE_GUILD, e);
        }, [l]),
        [m, p] = a.useState(""),
        g = n ?? null,
        [x, f] = a.useState(!1),
        [h, y] = a.useState(null),
        [C, N] = a.useState("guild"),
        [A, E] = a.useState(null),
        [I, k] = a.useState(null);
    a.useEffect(() => {
        (0, K.hF)(l);
    }, [l, d, u]),
        a.useEffect(() => {
            (0, K.dm)(l, g);
        }, [l, g]);
    let S = a.useCallback((e) => {
            N(e), E(null);
        }, []),
        w = a.useCallback(
            async (e) => {
                let t = (e ?? m).trim(),
                    n = $({ idea: t, installScope: C, submitting: x });
                if ("idea" !== n && "submitting" !== n) {
                    if (null == C) return void E(H.intl.string(B.default.jQ3nQB));
                    null != e && p(e), f(!0), y(null);
                    try {
                        let e = await (0, K.gA)({ guild_id: l, install_scope: C });
                        (0, Z.Hc)(e),
                            null != I && (0, Z.r2)(e, I),
                            (0, Z.dv)(e, t),
                            (0, D.pX)(eq.BVt.CHANNEL(l, ez.VV.VIBEGRATIONS, e)),
                            p(""),
                            k(null);
                    } catch (e) {
                        y(e instanceof Error ? e.message : H.intl.string(B.default.KKkp5Y));
                    } finally {
                        f(!1);
                    }
                }
            },
            [C, l, m, I, x],
        ),
        [R, _] = a.useState(!1),
        P = a.useCallback(
            async (e, t) => {
                let n = ed(e);
                if (null != n) return void (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                _(!0);
                let i = null;
                try {
                    (i = await (0, K.gA)({ guild_id: l, install_scope: t })),
                        await eo(i, e, H.intl.string(B.default.KjEtrZ)),
                        (0, D.pX)(eq.BVt.CHANNEL(l, ez.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, K.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, v.o)(H.intl.string(B.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    _(!1);
                }
            },
            [l],
        ),
        z = a.useCallback(
            (e) => {
                (0, D.pX)(eq.BVt.CHANNEL(l, ez.VV.VIBEGRATIONS, e));
            },
            [l],
        ),
        V = a.useCallback(() => {
            (0, D.pX)(eq.BVt.CHANNEL(l, ez.VV.VIBEGRATIONS));
        }, [l]),
        M = a.useCallback((e) => {
            p(e), y(null);
        }, []),
        F = (0, c.bG)([W.Ay], () => {
            if (null == g) return null;
            let e = W.Ay.getProject(g);
            return null == e || (0, W.PV)(e) || e.guild_id === l ? e : null;
        }, [g, l]),
        X = (0, c.bG)([W.Ay], () => W.Ay.hasFetchedGuildProjects(l), [l]);
    return null != g
        ? (0, i.jsx)(e7, { project: F, projectsLoaded: X, onBack: V, guildId: l }, g)
        : (0, i.jsx)(e4, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: I,
              onModelSettingsChange: k,
              idea: m,
              guildId: l,
              submitting: x,
              createError: h,
              createDisabled: "idea" === (t = $({ idea: m, installScope: C, submitting: x })) || "submitting" === t,
              onSelectProject: z,
              onIdeaChange: M,
              onCreate: w,
              onImportNewProject: P,
              importing: R,
              installScope: C,
              onInstallScopeChange: S,
              installScopeError: A,
          });
}
