l.r(t), l.d(t, { default: () => e8 });
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
    x = l(794083),
    f = l(939249),
    h = l(834730),
    j = l(691540),
    v = l(857250),
    b = l(97483),
    C = l(866665),
    N = l(408278),
    y = l(297264),
    A = l(821609),
    E = l(364522),
    I = l(103557),
    k = l(691885),
    S = l(289873),
    w = l(152367),
    R = l(661531),
    _ = l(627363),
    P = l(625180),
    z = l(672929),
    T = l(976860),
    V = l(696451),
    D = l(71393),
    L = l(576705),
    M = l(486020),
    G = l(295813),
    F = l(375708),
    B = l(673724),
    H = l(948230),
    U = l(105810),
    X = l(683180),
    K = l(208137),
    O = l(805332),
    Y = l(18739),
    q = l(972786);
function W(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var Z = l(155007),
    $ = l(922016),
    Q = l(980707),
    J = l(477782),
    ee = l(81369);
async function et(e, t, l) {
    (0, Y.Hc)(e);
    let n = await (0, Y.vX)(e, t);
    (0, Y.dv)(e, l, [n]);
}
function el(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, B.x5)(e.size, t)
        ? null
        : F.intl.formatToPlainString(G.default.AzziHF, { size: (0, B.ZJ)((0, B.yr)(t)) });
}
async function en(e, t) {
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
        i = await (0, Y.cS)(e, n),
        a = URL.createObjectURL(i);
    try {
        let e = document.createElement("a");
        (e.href = a), (e.download = n), (e.rel = "noopener"), e.click();
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(a), 0);
    }
}
function ei(e) {
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
var ea = l(950305),
    es = l(664121);
let er = [
    { value: "user", icon: ea.UserIcon, nameMessage: G.default.iqXIRN },
    { value: "guild", icon: es.R, nameMessage: G.default.LdgKdI },
];
function eo(e) {
    let { importing: t, onImport: l } = e,
        n = a.useRef(null),
        s = ei(a.useCallback((e) => l(e, "user"), [l])),
        r = ei(a.useCallback((e) => l(e, "guild"), [l])),
        o = { user: s.open, guild: r.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)($.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: $.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(Q.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": F.intl.string(G.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(J.rX, {
                            label: F.intl.string(G.default.MLg0S8),
                            children: er
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: F.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        J.Dr,
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
                        icon: ee.H,
                        text: F.intl.string(G.default["NHP2+t"]),
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
var ed = l(311656),
    ec = l(629584),
    eu = l(148853),
    ep = l(491920);
function em(e) {
    let { modes: t, mode: l, onChange: n, className: s } = e,
        o = a.useMemo(() => t.map((e) => ({ value: e, name: (0, eu.kZ)(e), "aria-controls": (0, eu.z3)(e) })), [t]),
        d = a.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == l
        ? null
        : (0, i.jsx)(ec.I, {
              role: "tablist",
              look: "pill",
              className: r()(ep.b, s),
              optionClassName: ep.u,
              options: o,
              value: l,
              onChange: d,
          });
}
var eg = l(663417),
    ex = l(70688),
    ef = l(173936),
    eh = l(625903),
    ej = l(365199),
    ev = l(770818),
    eb = l(871237),
    eC = l(957565),
    eN = l(557875),
    ey = l(869369),
    eA = l(123917);
let eE = new Set();
l(321073);
var eI = l(746080);
let ek = [];
function eS(e) {
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
            onVersionHistory: x,
            onRefresh: f,
            isRefreshing: h = !1,
            onClose: C,
            refreshApplicationId: y,
            previewProjectId: A,
        } = e,
        E = a.useRef(null),
        { pending: I, refresh: k } = (0, ev.A)(y ?? null),
        { pending: S, connect: w } = (function (e) {
            let [t, l] = a.useState(eE),
                n = a.useRef(eE),
                i = a.useCallback((e) => {
                    (n.current = (0, eN.Q6)(n.current, e)), l(n.current);
                }, []);
            return {
                pending: t,
                connect: a.useCallback(
                    (t) => {
                        if (null == e) return;
                        let a = (0, eN.K9)(n.current, t.type);
                        async function s() {
                            let l = await (0, Y.JI)(e, t.type);
                            if ((i(t.type), "url" === l.type)) return void (0, eA.h)({ href: l.url, trusted: !1 });
                            let n =
                                "setup" === (0, eN.rq)(l.error)
                                    ? F.intl.string(G.default.avu1u4)
                                    : F.intl.string(G.default["5fwOcF"]);
                            (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                        }
                        null != a && ((n.current = a), l(a), s().catch(() => i(t.type)));
                    },
                    [e, i],
                ),
            };
        })(A ?? null),
        R = (0, c.bG)([Y.Ay], () => (null == A ? ek : Y.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: i } = e,
                a = [];
            for (let { connection: e, offer: s } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: F.intl.string(G.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                a.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: F.intl.formatToPlainString(G.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: F.intl.formatToPlainString(G.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({
            canRefresh: null != y,
            refreshPending: I,
            offers: a.useMemo(() => (0, eN.Xl)(R), [R]),
            connectPending: S,
        }),
        P = a.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        z = null != m && (r || o),
        T = r && null != p,
        V = z || null != d || T || null != g || null != x,
        D = eC.p5 && null != n;
    return null != f || null != C || V || D || r
        ? (0, i.jsx)($.Y, {
              targetElementRef: E,
              position: "bottom",
              align: "right",
              animation: $.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsxs)(Q.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": F.intl.string(F.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          null != f || null != C
                              ? (0, i.jsxs)(J.rX, {
                                    children: [
                                        null != f
                                            ? (0, i.jsx)(J.Dr, {
                                                  id: "refresh",
                                                  icon: eg.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eg.RefreshIcon },
                                                  label: F.intl.string(G.default.xKexN1),
                                                  disabled: h,
                                                  action: f,
                                              })
                                            : null,
                                        null != C
                                            ? (0, i.jsx)(J.Dr, {
                                                  id: "close",
                                                  icon: ex.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: ex.DoorExitIcon },
                                                  label: F.intl.string(G.default.Ea0Wrr),
                                                  action: C,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, i.jsx)(J.rX, {
                                    children: _.map((e) =>
                                        (0, i.jsx)(
                                            J.Dr,
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
                          V
                              ? (0, i.jsxs)(J.rX, {
                                    children: [
                                        z
                                            ? (0, i.jsx)(J.Dr, {
                                                  id: "remix",
                                                  label: F.intl.string(G.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(J.Dr, {
                                                  id: "export",
                                                  label: F.intl.string(G.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        T
                                            ? (0, i.jsx)(J.Dr, {
                                                  id: "import",
                                                  label: F.intl.string(G.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(J.Dr, {
                                                  id: "connect-tool",
                                                  label: F.intl.string(G.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != x
                                            ? (0, i.jsx)(J.Dr, {
                                                  id: "version-history",
                                                  label: F.intl.string(G.default.jAWwzi),
                                                  action: x,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          D
                              ? (0, i.jsx)(J.rX, {
                                    children: (0, i.jsx)(J.Dr, {
                                        id: "copy-link",
                                        label: F.intl.string(F.t.WqhZss),
                                        icon: ef.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: ef.LinkIcon },
                                        action: () =>
                                            (0, eC.C)((0, eb.n)(n, eI.VV.VIBEGRATIONS, t), () =>
                                                (0, j.P0)((0, v.o)(F.intl.string(F.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, i.jsxs)(J.rX, {
                                    children: [
                                        (0, i.jsx)(J.Dr, {
                                            id: "settings",
                                            label: F.intl.string(G.default["xhcY+n"]),
                                            icon: eh.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: eh.SettingsIcon },
                                            action: () => (0, ey.A)(t, s ?? n),
                                        }),
                                        (0, i.jsx)(J.Dr, {
                                            id: "delete",
                                            label: F.intl.string(F.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: F.intl.formatToPlainString(G.default.ZokHVz, { name: l }),
                                                    subtitle: F.intl.string(G.default.NmF939),
                                                    confirmText: F.intl.string(F.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, H.xx)(t)).ok)
                                                            throw Error(F.intl.string(G.default.tqKZCi));
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
                  return (0, i.jsx)(N.K, {
                      ...e,
                      buttonRef: E,
                      icon: ej.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": F.intl.string(F.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": l,
                  });
              },
          })
        : null;
}
var ew = l(742589),
    eR = l(769979);
function e_(e) {
    let { title: t, actions: l, breadcrumb: n } = e;
    return (0, i.jsx)(ew.A, {
        hideSearch: !0,
        toolbar: l,
        className: eR.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: eR.QF,
            children: [
                (0, i.jsx)(w.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: R.A.colors.TEXT_STRONG,
                    className: eR.Kk,
                }),
                null != n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(ew.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, i.jsx)(ew.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(ew.A.Title, { className: eR.Qw, wrapperClassName: eR.DD, children: t }),
            ],
        }),
    });
}
var eP = l(321593),
    ez = l(580954),
    eT = l(192308),
    eV = l(189213),
    eD = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function eL(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = "permissions" === t;
    return (0, i.jsx)(eV.Modal, {
        transitionState: l,
        onClose: n,
        title: F.intl.string(a ? G.default.Rtlv25 : G.default["+UouPe"]),
        subtitle: F.intl.string(a ? G.default["nDQB/b"] : G.default["E0QD++"]),
        size: "sm",
        actions: [{ text: F.intl.string(a ? F.t.BddRzS : G.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function eM(e) {
    (0, eT.openModal)((t) => (0, i.jsx)(eL, { ...t, reason: e }));
}
var eG = l(224640),
    eF = l(815021),
    eB = l(652215),
    eH = l(931587),
    eU = l(264997);
function eX(e) {
    let { applicationId: t, guildId: l, projectName: n, transitionState: s, onClose: r } = e,
        o = F.intl.string(G.default.yzxKsU),
        d = F.intl.formatToPlainString(G.default.CC69wK, { projectName: n }),
        c = a.useCallback(() => {
            let e = (0, X.SH)(l, t);
            (0, T.pX)(null == e ? eB.BVt.CHANNEL(l) : eB.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, i.jsx)(eG.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": o,
        children: (0, i.jsxs)("div", {
            className: eH.zr,
            children: [
                (0, i.jsx)("div", { className: eH.b, children: (0, i.jsx)(eF.J, { onClick: r }) }),
                (0, i.jsxs)("div", {
                    className: eH.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: eH.bm,
                            children: (0, i.jsx)("img", { className: eH.yW, src: eU, alt: "" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: eH.R_,
                            children: [
                                (0, i.jsx)(y.D, { variant: "heading-xl/semibold", color: "text-strong", children: o }),
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
                    className: eH.o1,
                    children: [
                        (0, i.jsx)(A.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: F.intl.string(F.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, i.jsx)(A.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: F.intl.string(F.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var eK = l(584936),
    eO = l(899154),
    eY = l(675210),
    eq = l(165610),
    eW = l(352978);
function eZ(e) {
    return (0, i.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function e$(e) {
    return (0, i.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function eQ(e) {
    return (0, i.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function eJ(e) {
    return (0, i.jsx)(x.b, { ...e, size: "custom", width: 20, height: 20 });
}
function e0(e) {
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
                    (0, j.P0)((0, v.o)(F.intl.formatToPlainString(G.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    en(t, l)
                        .catch((e) => {
                            let l;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, j.P0)(
                                    (0, v.o)(
                                        409 === (l = e instanceof Y._v ? e.status : null)
                                            ? F.intl.string(G.default.uB40Hz)
                                            : 404 === l
                                              ? F.intl.string(G.default.wCq2jC)
                                              : F.intl.string(G.default.G2GqyP),
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
                onImport: (r = ei(
                    a.useCallback(
                        (e) => {
                            let n = el(e);
                            null != n
                                ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                                : (0, u.A)({
                                      title: F.intl.formatToPlainString(G.default.XYZqZK, { name: l }),
                                      subtitle: F.intl.string(G.default["6syXoH"]),
                                      confirmText: F.intl.string(G.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, T.pX)(eB.BVt.CHANNEL(c, eI.VV.VIBEGRATIONS, t));
                                          try {
                                              await et(t, e, F.intl.string(G.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, v.o)(F.intl.string(G.default["02GpNr"]), b.Ck.FAILURE));
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
        { data: C } = (0, _.YY)(x),
        N =
            null == o.updated_at
                ? null
                : F.intl.formatToPlainString(G.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: eW.OY,
        children: [
            (0, i.jsx)(eP.Ay, { projectId: o.id }),
            (0, i.jsxs)(f.D, {
                className: eW.W6,
                onClick: p,
                children: [
                    (0, i.jsx)("img", {
                        alt: "",
                        src: M.Ay.getApplicationIconURL({ id: x, icon: C?.icon, size: 40 }),
                        className: eW.VJ,
                    }),
                    (0, i.jsxs)("div", {
                        className: eW.MM,
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: eW.j1,
                                children: o.name,
                            }),
                            null == N
                                ? null
                                : (0, i.jsx)("div", {
                                      className: eW.h3,
                                      children: (0, i.jsx)(h.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: N,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: eW.M2,
                children: (0, i.jsxs)("div", {
                    className: eW.Pl,
                    children: [
                        (0, i.jsx)(eS, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: c,
                            projectGuildId: o.guild_id,
                            isOwner: (0, q.P)(o),
                            isShared: (0, B.tr)(o),
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
function e1(e) {
    let { project: t, projectsLoaded: n, onBack: s, guildId: r } = e,
        [o, d] = a.useState(!1),
        [p, m] = a.useState(!0),
        [g, x] = a.useState(!1),
        [f, E] = a.useState(null),
        [I, k] = a.useState(null),
        S = t?.id ?? null,
        w = a.useRef(S),
        R = a.useRef(!0),
        V = a.useRef(!1),
        D = a.useRef(null);
    (w.current = S),
        a.useEffect(
            () => (
                (R.current = !0),
                () => {
                    R.current = !1;
                }
            ),
            [],
        );
    let L = (0, c.bG)([q.A], () => (null == S ? null : q.A.getIntegrationStatus(S)), [S]),
        { data: M, isLoading: X } = (0, _.YY)(t?.preview_application_id ?? void 0),
        K = null != S && I !== S,
        W = L?.preview_ready === !0,
        $ = L?.has_activity === !0,
        {
            availability: Q,
            activeMode: J,
            setMode: ee,
            widgetApplicationId: en,
        } = (0, eO.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: $,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: L?.owner_authorization_revoked === !0,
        }),
        ea = (0, eY.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: W,
            integrationInstalled: L?.integration_installed ?? null,
            botPermissionsChanged: L?.bot_permissions_changed === !0,
        }),
        es = o || K || X,
        er = F.intl.string(G.default["5gU57O"]),
        eo = F.intl.string(p ? G.default.YdgE0j : G.default.aWVf4j),
        ed = a.useCallback(() => m((e) => !e), []),
        ec = a.useCallback(() => m(!1), []),
        eu = a.useCallback(
            (e) => {
                if (null == t || V.current) return;
                let l = t.id;
                function n() {
                    return R.current && w.current === l;
                }
                (V.current = !0),
                    x(!1),
                    m(!0),
                    E({ entry: e, status: "restoring" }),
                    (0, Y.oB)(l, e.sha)
                        .then(
                            () => {
                                n() && E({ entry: e, status: "restored" });
                            },
                            (t) => {
                                n() &&
                                    (E({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, j.P0)((0, v.o)(F.intl.string(G.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (V.current = !1);
                        });
            },
            [t],
        ),
        ep = (0, c.bG)([O.A], () => O.A.isBuilderPreviewMobile()),
        eg = F.intl.string(ep ? G.default["3uCc8U"] : G.default["+nzCxZ"]),
        ex = a.useCallback(() => (0, H.GG)(!ep), [ep]),
        ef = (0, z.A)(t?.preview_application_id ?? null, eq.sd),
        eh = (0, eq.x1)(ef) && ef.data.proxyTicketRefreshing,
        ej = a.useCallback(() => {
            null == ef || eh || P.A.refreshProxyTicket(ef.id);
        }, [ef, eh]),
        ev = a.useCallback(() => {
            var e, l;
            null != t && ((e = t.id), (l = ef?.id), (0, Y.Bn)(e), (0, ez.A)().leaveFrame(l)), s();
        }, [t, ef?.id, s]),
        eb = a.useCallback(() => {
            null != t && (m(!0), (0, Y.dv)(t.id, F.intl.string(G.default["2ejwtJ"])));
        }, [t]),
        eC = ei(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        n = el(e);
                    null != n
                        ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: F.intl.formatToPlainString(G.default.XYZqZK, { name: t.name }),
                              subtitle: F.intl.string(G.default["6syXoH"]),
                              confirmText: F.intl.string(G.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await et(l, e, F.intl.string(G.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, v.o)(F.intl.string(G.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eN = a.useCallback(() => {
            null != t && (0, eK.A)(t, r);
        }, [t, r]),
        ey = a.useCallback(async () => {
            if (null == S || w.current !== S) return;
            D.current?.abort();
            let e = new AbortController();
            (D.current = e), k(null);
            try {
                await (0, H.U1)(S, e.signal);
            } catch {
            } finally {
                e.signal.aborted || D.current !== e || w.current !== S || k(S);
            }
        }, [S]);
    a.useEffect(
        () => (
            ey(),
            () => {
                D.current?.abort(), (D.current = null);
            }
        ),
        [ey],
    );
    let eA = L?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eE = a.useCallback(async () => {
            null == t ||
                (t.guild_id === eA && t.preview_guild_id === eA) ||
                (await (0, H.M7)(t.id, { guild_id: eA, preview_guild_id: eA }));
        }, [eA, t]),
        ek = a.useCallback(async () => {
            try {
                await eE();
            } catch {}
            await ey();
        }, [ey, eE]),
        ew = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                U.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: M ?? null,
                    guildId: eA,
                    onClose: () => {
                        ek();
                    },
                });
        }, [ek, eA, M, t]),
        eR = ea
            ? { type: "permissions", onReviewPermissions: ew, loading: X || K }
            : K && null == L
              ? { type: "checking" }
              : void 0;
    a.useEffect(() => {
        null == t && n && (0, T.pX)(eB.BVt.CHANNEL(r, eI.VV.VIBEGRATIONS));
    }, [r, t, n]);
    let eP = a.useCallback(async () => {
            if (null != t) {
                if (!W) return void eM(eD.NO_PREVIEW);
                if (ea) return void eM(eD.PERMISSIONS);
                d(!0);
                try {
                    var e;
                    let l = await (0, Y.TV)(t.id);
                    if (!0 !== l.ok) throw Error(F.intl.string(G.default.fNP6Cd));
                    (0, H.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, eT.openModal)((t) => (0, i.jsx)(eX, { ...t, ...e }));
                } catch (e) {
                    (0, j.P0)((0, v.o)(e instanceof Error ? e.message : F.intl.string(G.default.fNP6Cd), b.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [r, ea, W, t]),
        eV = (0, i.jsx)(e_, {
            title: t?.name ?? F.intl.string(G.default.F2dRba),
            breadcrumb: { title: F.intl.string(G.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: eW.FO,
                          children: [
                              Q.showModeSwitch ? (0, i.jsx)(em, { modes: Q.modes, mode: J, onChange: ee }) : null,
                              (0, i.jsx)(eS, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, q.P)(t),
                                  isShared: (0, B.tr)(t),
                                  onRefresh: (0, eq.x1)(ef) ? ej : void 0,
                                  isRefreshing: eh,
                                  onClose: ev,
                                  onExport: eb,
                                  onImport: eC.open,
                                  onRemix: eN,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eT.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("964476"),
                                                  l.e("461590"),
                                              ]).then(l.bind(l, 84469));
                                              return (l) => (0, i.jsx)(t, { ...l, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      f?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                m(!0), x(!0);
                                            },
                                  refreshApplicationId:
                                      Q.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== Q.profileState
                                          ? en
                                          : null,
                                  previewProjectId: t.id,
                              }),
                              (0, i.jsx)(C.m, {
                                  text: eg,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(N.K, {
                                      icon: ep ? eQ : e$,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eg,
                                      "aria-pressed": ep,
                                      onClick: ex,
                                  }),
                              }),
                              (0, i.jsx)(C.m, {
                                  text: eo,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(N.K, {
                                      icon: eZ,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eo,
                                      "aria-pressed": p,
                                      onClick: ed,
                                  }),
                              }),
                              (0, q.P)(t)
                                  ? (0, i.jsx)(C.m, {
                                        text: er,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(N.K, {
                                            icon: eJ,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": er,
                                            loading: o,
                                            disabled: es,
                                            onClick: eP,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: eW.nj,
        children: [
            eC.input,
            (0, i.jsx)("main", {
                className: eW.JX,
                children:
                    null == t
                        ? (0, i.jsxs)("div", {
                              className: eW.j5,
                              children: [
                                  eV,
                                  (0, i.jsxs)("div", {
                                      className: eW.sD,
                                      children: [
                                          (0, i.jsx)(y.D, {
                                              variant: "heading-lg/semibold",
                                              children: F.intl.string(G.default.F2dRba),
                                          }),
                                          (0, i.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: F.intl.string(G.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(A.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: F.intl.string(G.default["42EdIV"]),
                                              onClick: () => (0, H.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              Z.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: eq.sd,
                                  header: eV,
                                  chatOpen: p,
                                  onCloseChat: ec,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => x(!1),
                                  onRestoreVersion: eu,
                                  restoreState: f,
                                  previewReady: W,
                                  previewGate: eR,
                                  availability: Q,
                                  activeMode: J,
                                  widgetApplicationId: en,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function e2(e) {
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
            modelSettings: x,
            onModelSettingsChange: j,
            onSelectProject: v,
            onIdeaChange: b,
            onCreate: C,
            onImportNewProject: N,
            importing: _,
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
    let T = a.useMemo(
            () =>
                t
                    .filter((e) => (0, X.X0)(e, o))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, o],
        ),
        V = F.intl.string(G.default.TU9IGR),
        D = [
            F.intl.string(G.default["E+Q26x"]),
            F.intl.string(G.default["06/jqP"]),
            F.intl.string(G.default["3gSfUa"]),
        ],
        L = [
            {
                id: "feature-showcase",
                name: F.intl.string(G.default.BLDsiz),
                description: F.intl.string(G.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: F.intl.string(G.default["+abXa8"]),
                description: F.intl.string(G.default.OZYPMR),
            },
        ],
        M = F.intl.string(G.default.FYK2xQ),
        U = F.intl.string(G.default["/SUK82"]),
        O = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || C());
            },
            [u, C],
        );
    return (0, i.jsxs)("div", {
        className: r()(eW.nj, eW.a0),
        children: [
            (0, i.jsx)(e_, { title: F.intl.string(G.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: eW.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: eW.ps,
                        children: [
                            (0, i.jsx)(E.Ip, {
                                className: eW.Yy,
                                children: (0, i.jsx)("div", {
                                    className: eW.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(eW.Qs, eW.Ix),
                                        children: [
                                            (0, i.jsx)(y.D, {
                                                variant: "heading-xl/semibold",
                                                children: F.intl.string(G.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: eW.WI,
                                                "aria-label": M,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: eW.G9,
                                                        children: [
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: M,
                                                            }),
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: F.intl.string(G.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: eW.Aw,
                                                        children: L.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: eW.EA,
                                                                    children: (0, i.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": F.intl.formatToPlainString(
                                                                            G.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(eW.nx, eW.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return C(
                                                                                      ((t = e.name),
                                                                                      F.intl.formatToPlainString(
                                                                                          G.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, i.jsx)(h.E, {
                                                                                className: eW.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, i.jsx)(h.E, {
                                                                                className: eW.BK,
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
                                                className: eW.WI,
                                                "aria-label": U,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: eW.G9,
                                                        children: [
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: U,
                                                            }),
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: F.intl.string(G.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: eW.Aw,
                                                        children: D.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: eW.EA,
                                                                    children: (0, i.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: eW.nx,
                                                                        onClick: d ? void 0 : () => C(e),
                                                                        children: (0, i.jsx)(h.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: eW.un,
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
                                        ],
                                    }),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: eW.Yl,
                                children: (0, i.jsxs)("div", {
                                    className: r()(eW.Qs, eW.DA),
                                    children: [
                                        (0, i.jsx)(I.f, {
                                            label: V,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: V,
                                            error: c,
                                            onChange: b,
                                            onKeyDown: O,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: eW.VP,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: eW.gH,
                                                    ref: z,
                                                    children: (0, i.jsx)(k.l, {
                                                        selectionMode: "single",
                                                        label: F.intl.string(G.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: F.intl.string(G.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: F.intl.string(G.default.MLg0S8),
                                                                options: er.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: F.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: g,
                                                    }),
                                                }),
                                                (0, i.jsx)(ed.A, {
                                                    settings: x ?? B.hk,
                                                    choices: (0, K.e)()
                                                        ? {
                                                              main: [...B.S8.main, ...B.wF.main],
                                                              subagent: [...B.S8.subagent, ...B.wF.subagent],
                                                              thinking: B.S8.thinking,
                                                          }
                                                        : B.S8,
                                                    disabled: d,
                                                    onChange: j,
                                                }),
                                                (0, i.jsx)(A.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: F.intl.string(F.t.CumH4u),
                                                    disabled: u,
                                                    loading: d,
                                                    onClick: () => C(),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("aside", {
                        className: eW.pA,
                        "aria-label": F.intl.string(G.default.Bo5fE3),
                        children: [
                            (0, i.jsxs)("div", {
                                className: eW.IR,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: eW.RM,
                                        children: [
                                            (0, i.jsx)(h.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: F.intl.string(G.default.Bo5fE3),
                                            }),
                                            (0, i.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: F.intl.string(G.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(eo, { importing: _, onImport: N }),
                                ],
                            }),
                            (0, i.jsxs)(E.Ip, {
                                className: eW.xe,
                                children: [
                                    (null == n || "loading" === n.type) && 0 === T.length
                                        ? (0, i.jsx)("div", { className: eW.E8, children: (0, i.jsx)(S.y, {}) })
                                        : n?.type === "error" && 0 === T.length
                                          ? (0, i.jsxs)("div", {
                                                className: eW.E8,
                                                children: [
                                                    (0, i.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: eW.JS,
                                                        children: F.intl.string(G.default["IN/HRP"]),
                                                    }),
                                                    (0, i.jsx)(A.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: F.intl.string(G.default["42EdIV"]),
                                                        onClick: () => (0, H.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === T.length
                                            ? (0, i.jsx)("div", {
                                                  className: eW.D1,
                                                  children: (0, i.jsxs)("div", {
                                                      className: eW.ST,
                                                      children: [
                                                          (0, i.jsx)(w.D, {
                                                              size: "lg",
                                                              color: R.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, i.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: eW.sI,
                                                              children: F.intl.string(G.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsx)("div", {
                                                  className: eW.Dq,
                                                  children: T.map((e) =>
                                                      (0, i.jsx)(
                                                          e0,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => v(e.id),
                                                              onRemix: () => (0, eK.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    P.length > 0
                                        ? (0, i.jsxs)("div", {
                                              className: eW.qx,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: eW.uc,
                                                      children: [
                                                          (0, i.jsx)(h.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: F.intl.string(G.default.jrCnUc),
                                                          }),
                                                          (0, i.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: F.intl.string(G.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: eW.Dq,
                                                      children: P.map((e) =>
                                                          (0, i.jsx)(
                                                              e0,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => v(e.id),
                                                                  onRemix: () => (0, eK.A)(e, o),
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
function e8(e) {
    let t,
        { guildId: l, projectId: n } = e,
        s = (0, c.yK)([q.A], () => q.A.getOwnedProjects()),
        r = (0, c.bG)([q.A], () => q.A.getProjectsFetchState()),
        o = (0, c.yK)([q.A], () => q.A.getSharedProjects(l), [l]),
        d = (0, c.yK)([V.Ay], () => V.Ay.getSelfMember(l)?.roles ?? [], [l]),
        u = (0, c.bG)([D.A, L.A], () => {
            let e = D.A.getGuild(l);
            return null != e && L.A.can(eB.xBc.MANAGE_GUILD, e);
        }, [l]),
        [p, m] = a.useState(""),
        g = n ?? null,
        [x, f] = a.useState(!1),
        [h, C] = a.useState(null),
        [N, y] = a.useState("guild"),
        [A, E] = a.useState(null),
        [I, k] = a.useState(null);
    a.useEffect(() => {
        (0, H.hF)(l);
    }, [l, d, u]),
        a.useEffect(() => {
            (0, H.dm)(l, g);
        }, [l, g]);
    let S = a.useCallback((e) => {
            y(e), E(null);
        }, []),
        w = a.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    n = W({ idea: t, installScope: N, submitting: x });
                if ("idea" !== n && "submitting" !== n) {
                    if (null == N) return void E(F.intl.string(G.default.jQ3nQB));
                    null != e && m(e), f(!0), C(null);
                    try {
                        let e = await (0, H.gA)({ guild_id: l, install_scope: N });
                        (0, Y.Hc)(e),
                            null != I && (0, Y.r2)(e, I),
                            (0, Y.dv)(e, t),
                            (0, T.pX)(eB.BVt.CHANNEL(l, eI.VV.VIBEGRATIONS, e)),
                            m(""),
                            k(null);
                    } catch (e) {
                        C(e instanceof Error ? e.message : F.intl.string(G.default.KKkp5Y));
                    } finally {
                        f(!1);
                    }
                }
            },
            [N, l, p, I, x],
        ),
        [R, _] = a.useState(!1),
        P = a.useCallback(
            async (e, t) => {
                let n = el(e);
                if (null != n) return void (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                _(!0);
                let i = null;
                try {
                    (i = await (0, H.gA)({ guild_id: l, install_scope: t })),
                        await et(i, e, F.intl.string(G.default.KjEtrZ)),
                        (0, T.pX)(eB.BVt.CHANNEL(l, eI.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, H.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, v.o)(F.intl.string(G.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    _(!1);
                }
            },
            [l],
        ),
        z = a.useCallback(
            (e) => {
                (0, T.pX)(eB.BVt.CHANNEL(l, eI.VV.VIBEGRATIONS, e));
            },
            [l],
        ),
        M = a.useCallback(() => {
            (0, T.pX)(eB.BVt.CHANNEL(l, eI.VV.VIBEGRATIONS));
        }, [l]),
        B = a.useCallback((e) => {
            m(e), C(null);
        }, []),
        U = (0, c.bG)([q.A], () => {
            if (null == g) return null;
            let e = q.A.getProject(g);
            return null == e || (0, q.P)(e) || e.guild_id === l ? e : null;
        }, [g, l]),
        X = (0, c.bG)([q.A], () => q.A.hasFetchedGuildProjects(l), [l]);
    return null != g
        ? (0, i.jsx)(e1, { project: U, projectsLoaded: X, onBack: M, guildId: l }, g)
        : (0, i.jsx)(e2, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: I,
              onModelSettingsChange: k,
              idea: p,
              guildId: l,
              submitting: x,
              createError: h,
              createDisabled: "idea" === (t = W({ idea: p, installScope: N, submitting: x })) || "submitting" === t,
              onSelectProject: z,
              onIdeaChange: B,
              onCreate: w,
              onImportNewProject: P,
              importing: R,
              installScope: N,
              onInstallScopeChange: S,
              installScopeError: A,
          });
}
