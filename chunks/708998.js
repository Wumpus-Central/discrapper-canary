l.r(t), l.d(t, { default: () => e9 });
var n,
    i = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    o = l(536637),
    c = l.n(o),
    d = l(17928),
    u = l(314116),
    p = l(646270),
    m = l(31300),
    g = l(794083),
    x = l(939249),
    f = l(834730),
    h = l(691540),
    j = l(857250),
    v = l(97483),
    b = l(866665),
    C = l(408278),
    N = l(297264),
    y = l(821609),
    A = l(364522),
    E = l(103557),
    I = l(691885),
    S = l(289873),
    k = l(152367),
    w = l(661531),
    R = l(627363),
    _ = l(625180),
    P = l(672929),
    z = l(976860),
    T = l(885386),
    V = l(696451),
    D = l(71393),
    L = l(576705),
    M = l(486020),
    G = l(295813),
    F = l(375708),
    B = l(673724),
    H = l(948230),
    U = l(899263),
    X = l(105810),
    O = l(683180),
    K = l(208137),
    Y = l(805332),
    q = l(18739),
    Z = l(972786);
function W(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var Q = l(920729),
    $ = l(922016),
    J = l(980707),
    ee = l(477782),
    et = l(81369);
async function el(e, t, l) {
    (0, q.Hc)(e);
    let n = await (0, q.vX)(e, t);
    (0, q.wS)(e, l, [n]);
}
function en(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, B.x5)(e.size, t)
        ? null
        : F.intl.formatToPlainString(G.default.AzziHF, { size: (0, B.ZJ)((0, B.yr)(t)) });
}
async function ei(e, t) {
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
        i = await (0, q.cS)(e, n),
        a = URL.createObjectURL(i);
    try {
        let e = document.createElement("a");
        (e.href = a), (e.download = n), (e.rel = "noopener"), e.click();
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(a), 0);
    }
}
function ea(e) {
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
var es = l(950305),
    er = l(664121);
let eo = [
    { value: "user", icon: es.UserIcon, nameMessage: G.default.iqXIRN },
    { value: "guild", icon: er.R, nameMessage: G.default.LdgKdI },
];
function ec(e) {
    let { importing: t, onImport: l } = e,
        n = a.useRef(null),
        s = ea(a.useCallback((e) => l(e, "user"), [l])),
        r = ea(a.useCallback((e) => l(e, "guild"), [l])),
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
                    return (0, i.jsx)(J.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": F.intl.string(G.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(ee.rX, {
                            label: F.intl.string(G.default.MLg0S8),
                            children: eo
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: F.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        ee.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, l) => {
                    let { isShown: a } = l;
                    return (0, i.jsx)(y.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: et.H,
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
    eu = l(629584),
    ep = l(148853),
    em = l(491920);
function eg(e) {
    let { modes: t, mode: l, onChange: n, className: s } = e,
        o = a.useMemo(() => t.map((e) => ({ value: e, name: (0, ep.kZ)(e), "aria-controls": (0, ep.z3)(e) })), [t]),
        c = a.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == l
        ? null
        : (0, i.jsx)(eu.I, {
              role: "tablist",
              look: "pill",
              className: r()(em.b, s),
              optionClassName: em.u,
              options: o,
              value: l,
              onChange: c,
          });
}
var ex = l(663417),
    ef = l(70688),
    eh = l(173936),
    ej = l(625903),
    ev = l(365199),
    eb = l(770818),
    eC = l(871237),
    eN = l(957565),
    ey = l(557875),
    eA = l(869369),
    eE = l(123917);
let eI = new Set();
l(321073);
var eS = l(746080);
let ek = [];
function ew(e) {
    let {
            projectId: t,
            projectName: l,
            guildId: n,
            projectGuildId: s,
            isOwner: r,
            isShared: o,
            onExport: c,
            onImport: p,
            onRemix: m,
            onConnectTool: g,
            onVersionHistory: x,
            onRefresh: f,
            isRefreshing: b = !1,
            onClose: N,
            refreshApplicationId: y,
            previewProjectId: A,
        } = e,
        E = a.useRef(null),
        { pending: I, refresh: S } = (0, eb.A)(y ?? null),
        { pending: k, connect: w } = (function (e) {
            let [t, l] = a.useState(eI),
                n = a.useRef(eI),
                i = a.useCallback((e) => {
                    (n.current = (0, ey.Q6)(n.current, e)), l(n.current);
                }, []);
            return {
                pending: t,
                connect: a.useCallback(
                    (t) => {
                        if (null == e) return;
                        let a = (0, ey.K9)(n.current, t.type);
                        async function s() {
                            let l = await (0, q.JI)(e, t.type);
                            if ((i(t.type), "url" === l.type)) return void (0, eE.h)({ href: l.url, trusted: !1 });
                            let n =
                                "setup" === (0, ey.rq)(l.error)
                                    ? F.intl.string(G.default.avu1u4)
                                    : F.intl.string(G.default["5fwOcF"]);
                            (0, h.P0)((0, j.o)(n, v.Ck.FAILURE));
                        }
                        null != a && ((n.current = a), l(a), s().catch(() => i(t.type)));
                    },
                    [e, i],
                ),
            };
        })(A ?? null),
        R = (0, d.bG)([q.Ay], () => (null == A ? ek : q.Ay.getDeclaredConnections(A))),
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
            offers: a.useMemo(() => (0, ey.Xl)(R), [R]),
            connectPending: k,
        }),
        P = a.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        z = null != m && (r || o),
        T = r && null != p,
        V = z || null != c || T || null != g || null != x,
        D = eN.p5 && null != n;
    return null != f || null != N || V || D || r
        ? (0, i.jsx)($.Y, {
              targetElementRef: E,
              position: "bottom",
              align: "right",
              animation: $.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsxs)(J.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": F.intl.string(F.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          null != f || null != N
                              ? (0, i.jsxs)(ee.rX, {
                                    children: [
                                        null != f
                                            ? (0, i.jsx)(ee.Dr, {
                                                  id: "refresh",
                                                  icon: ex.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: ex.RefreshIcon },
                                                  label: F.intl.string(G.default.xKexN1),
                                                  disabled: b,
                                                  action: f,
                                              })
                                            : null,
                                        null != N
                                            ? (0, i.jsx)(ee.Dr, {
                                                  id: "close",
                                                  icon: ef.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: ef.DoorExitIcon },
                                                  label: F.intl.string(G.default.Ea0Wrr),
                                                  action: N,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, i.jsx)(ee.rX, {
                                    children: _.map((e) =>
                                        (0, i.jsx)(
                                            ee.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void S();
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
                              ? (0, i.jsxs)(ee.rX, {
                                    children: [
                                        z
                                            ? (0, i.jsx)(ee.Dr, {
                                                  id: "remix",
                                                  label: F.intl.string(G.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != c
                                            ? (0, i.jsx)(ee.Dr, {
                                                  id: "export",
                                                  label: F.intl.string(G.default["7iamDC"]),
                                                  action: c,
                                              })
                                            : null,
                                        T
                                            ? (0, i.jsx)(ee.Dr, {
                                                  id: "import",
                                                  label: F.intl.string(G.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(ee.Dr, {
                                                  id: "connect-tool",
                                                  label: F.intl.string(G.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != x
                                            ? (0, i.jsx)(ee.Dr, {
                                                  id: "version-history",
                                                  label: F.intl.string(G.default.jAWwzi),
                                                  action: x,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          D
                              ? (0, i.jsx)(ee.rX, {
                                    children: (0, i.jsx)(ee.Dr, {
                                        id: "copy-link",
                                        label: F.intl.string(F.t.WqhZss),
                                        icon: eh.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: eh.LinkIcon },
                                        action: () =>
                                            (0, eN.C)((0, eC.n)(n, eS.VV.VIBEGRATIONS, t), () =>
                                                (0, h.P0)((0, j.o)(F.intl.string(F.t["L/PwZf"]), v.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, i.jsxs)(ee.rX, {
                                    children: [
                                        (0, i.jsx)(ee.Dr, {
                                            id: "settings",
                                            label: F.intl.string(G.default["xhcY+n"]),
                                            icon: ej.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: ej.SettingsIcon },
                                            action: () => (0, eA.A)(t, s ?? n),
                                        }),
                                        (0, i.jsx)(ee.Dr, {
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
                  return (0, i.jsx)(C.K, {
                      ...e,
                      buttonRef: E,
                      icon: ev.MoreHorizontalIcon,
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
var eR = l(742589),
    e_ = l(769979);
function eP(e) {
    let { title: t, actions: l, breadcrumb: n } = e;
    return (0, i.jsx)(eR.A, {
        hideSearch: !0,
        toolbar: l,
        className: e_.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: e_.QF,
            children: [
                (0, i.jsx)(k.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: w.A.colors.TEXT_STRONG,
                    className: e_.Kk,
                }),
                null != n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eR.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, i.jsx)(eR.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(eR.A.Title, { className: e_.Qw, wrapperClassName: e_.DD, children: t }),
            ],
        }),
    });
}
var ez = l(321593),
    eT = l(307869),
    eV = l(580954),
    eD = l(192308),
    eL = l(189213),
    eM = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function eG(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = "permissions" === t;
    return (0, i.jsx)(eL.Modal, {
        transitionState: l,
        onClose: n,
        title: F.intl.string(a ? G.default.Rtlv25 : G.default["+UouPe"]),
        subtitle: F.intl.string(a ? G.default["nDQB/b"] : G.default["E0QD++"]),
        size: "sm",
        actions: [{ text: F.intl.string(a ? F.t.BddRzS : G.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function eF(e) {
    (0, eD.openModal)((t) => (0, i.jsx)(eG, { ...t, reason: e }));
}
var eB = l(224640),
    eH = l(815021),
    eU = l(652215),
    eX = l(931587),
    eO = l(264997);
function eK(e) {
    let { applicationId: t, guildId: l, projectName: n, transitionState: s, onClose: r } = e,
        o = F.intl.string(G.default.yzxKsU),
        c = F.intl.formatToPlainString(G.default.CC69wK, { projectName: n }),
        d = a.useCallback(() => {
            let e = (0, O.SH)(l, t);
            (0, z.pX)(null == e ? eU.BVt.CHANNEL(l) : eU.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, i.jsx)(eB.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": o,
        children: (0, i.jsxs)("div", {
            className: eX.zr,
            children: [
                (0, i.jsx)("div", { className: eX.b, children: (0, i.jsx)(eH.J, { onClick: r }) }),
                (0, i.jsxs)("div", {
                    className: eX.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: eX.bm,
                            children: (0, i.jsx)("img", { className: eX.yW, src: eO, alt: "" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: eX.R_,
                            children: [
                                (0, i.jsx)(N.D, { variant: "heading-xl/semibold", color: "text-strong", children: o }),
                                (0, i.jsx)(f.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: c,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: eX.o1,
                    children: [
                        (0, i.jsx)(y.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: F.intl.string(F.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, i.jsx)(y.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: F.intl.string(F.t.jVcuVY),
                            onClick: d,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var eY = l(584936),
    eq = l(899154),
    eZ = l(675210),
    eW = l(165610),
    eQ = l(352978);
function e$(e) {
    return (0, i.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function eJ(e) {
    return (0, i.jsx)(m.k, { ...e, size: "custom", width: 20, height: 20 });
}
function e0(e) {
    return (0, i.jsx)(g.b, { ...e, size: "custom", width: 20, height: 20 });
}
function e1(e) {
    let t,
        l,
        n,
        s,
        r,
        { project: o, guildId: d, onSelect: p, onRemix: m } = e,
        g =
            ((t = o.id),
            (l = o.name),
            (n = a.useRef(!1)),
            (s = a.useCallback(() => {
                n.current ||
                    ((n.current = !0),
                    (0, h.P0)((0, j.o)(F.intl.formatToPlainString(G.default.u9TapG, { name: l }), v.Ck.MESSAGE)),
                    ei(t, l)
                        .catch((e) => {
                            let l;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, h.P0)(
                                    (0, j.o)(
                                        409 === (l = e instanceof q._v ? e.status : null)
                                            ? F.intl.string(G.default.uB40Hz)
                                            : 404 === l
                                              ? F.intl.string(G.default.wCq2jC)
                                              : F.intl.string(G.default.G2GqyP),
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
                onImport: (r = ea(
                    a.useCallback(
                        (e) => {
                            let n = en(e);
                            null != n
                                ? (0, h.P0)((0, j.o)(n, v.Ck.FAILURE))
                                : (0, u.A)({
                                      title: F.intl.formatToPlainString(G.default.XYZqZK, { name: l }),
                                      subtitle: F.intl.string(G.default["6syXoH"]),
                                      confirmText: F.intl.string(G.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, z.pX)(eU.BVt.CHANNEL(d, eS.VV.VIBEGRATIONS, t));
                                          try {
                                              await el(t, e, F.intl.string(G.default.C7GU2r));
                                          } catch {
                                              (0, h.P0)((0, j.o)(F.intl.string(G.default["02GpNr"]), v.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, l, d],
                    ),
                )).open,
                importInput: r.input,
            }),
        b = o.preview_application_id ?? o.application_id,
        { data: C } = (0, R.YY)(b),
        N =
            null == o.updated_at
                ? null
                : F.intl.formatToPlainString(G.default.oMDaqr, { time: c()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: eQ.OY,
        children: [
            (0, i.jsx)(ez.Ay, { projectId: o.id }),
            (0, i.jsxs)(x.D, {
                className: eQ.W6,
                onClick: p,
                children: [
                    (0, i.jsx)("img", {
                        alt: "",
                        src: M.Ay.getApplicationIconURL({ id: b, icon: C?.icon, size: 40 }),
                        className: eQ.VJ,
                    }),
                    (0, i.jsxs)("div", {
                        className: eQ.MM,
                        children: [
                            (0, i.jsx)(f.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: eQ.j1,
                                children: o.name,
                            }),
                            null == N
                                ? null
                                : (0, i.jsx)("div", {
                                      className: eQ.h3,
                                      children: (0, i.jsx)(f.E, {
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
                className: eQ.M2,
                children: (0, i.jsxs)("div", {
                    className: eQ.Pl,
                    children: [
                        (0, i.jsx)(ew, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: d,
                            projectGuildId: o.guild_id,
                            isOwner: (0, Z.P)(o),
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
function e2(e) {
    let { project: t, projectsLoaded: n, onBack: s, guildId: r } = e,
        [o, c] = a.useState(!1),
        [p, m] = a.useState(!0),
        [g, x] = a.useState(!1),
        [A, E] = a.useState(null),
        [I, S] = a.useState("chat"),
        k = T.Q_.useSetting(),
        w = (0, U.Ht)(I, k),
        [V, D] = a.useState(null),
        L = t?.id ?? null,
        M = a.useRef(L),
        O = a.useRef(!0),
        K = a.useRef(!1),
        W = a.useRef(null);
    (M.current = L),
        a.useEffect(
            () => (
                (O.current = !0),
                () => {
                    O.current = !1;
                }
            ),
            [],
        );
    let $ = (0, d.bG)([Z.A], () => (null == L ? null : Z.A.getIntegrationStatus(L)), [L]),
        { data: J, isLoading: ee } = (0, R.YY)(t?.preview_application_id ?? void 0),
        et = null != L && V !== L,
        ei = $?.preview_ready === !0,
        es = $?.has_activity === !0,
        {
            availability: er,
            activeMode: eo,
            setMode: ec,
            widgetApplicationId: ed,
        } = (0, eq.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: es,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: $?.owner_authorization_revoked === !0,
        }),
        eu = (0, eZ.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: ei,
            integrationInstalled: $?.integration_installed ?? null,
            botPermissionsChanged: $?.bot_permissions_changed === !0,
        }),
        ep = o || et || ee,
        em = F.intl.string(G.default["5gU57O"]),
        ex = a.useCallback(() => m((e) => !e), []),
        ef = a.useCallback(
            (e) => {
                if (null == t || K.current) return;
                let l = t.id;
                function n() {
                    return O.current && M.current === l;
                }
                (K.current = !0),
                    x(!1),
                    m(!0),
                    E({ entry: e, status: "restoring" }),
                    (0, q.oB)(l, e.sha)
                        .then(
                            () => {
                                n() && E({ entry: e, status: "restored" });
                            },
                            (t) => {
                                n() &&
                                    (E({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, h.P0)((0, j.o)(F.intl.string(G.default.q6iZ84), v.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (K.current = !1);
                        });
            },
            [t],
        ),
        eh = (0, d.bG)([Y.A], () => Y.A.isBuilderPreviewMobile()),
        ej = F.intl.string(eh ? G.default["3uCc8U"] : G.default["+nzCxZ"]),
        ev = a.useCallback(() => (0, H.GG)(!eh), [eh]),
        eb = (0, P.A)(t?.preview_application_id ?? null, eW.sd),
        eC = (0, eW.x1)(eb) && eb.data.proxyTicketRefreshing,
        eN = a.useCallback(() => {
            null == eb || eC || _.A.refreshProxyTicket(eb.id);
        }, [eb, eC]),
        ey = a.useCallback(() => {
            var e, l;
            null != t && ((e = t.id), (l = eb?.id), (0, q.Bn)(e), (0, eV.A)().leaveFrame(l)), s();
        }, [t, eb?.id, s]);
    a.useEffect(() => {
        k || S("chat");
    }, [k]);
    let eA = a.useCallback((e) => {
            S(e), m(!0);
        }, []),
        eE = a.useCallback(() => {
            null != t && (m(!0), (0, q.wS)(t.id, F.intl.string(G.default["2ejwtJ"])));
        }, [t]),
        eI = ea(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        n = en(e);
                    null != n
                        ? (0, h.P0)((0, j.o)(n, v.Ck.FAILURE))
                        : (0, u.A)({
                              title: F.intl.formatToPlainString(G.default.XYZqZK, { name: t.name }),
                              subtitle: F.intl.string(G.default["6syXoH"]),
                              confirmText: F.intl.string(G.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await el(l, e, F.intl.string(G.default.C7GU2r));
                                  } catch {
                                      (0, h.P0)((0, j.o)(F.intl.string(G.default["02GpNr"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        ek = a.useCallback(() => {
            null != t && (0, eY.A)(t, r);
        }, [t, r]),
        eR = a.useCallback(async () => {
            if (null == L || M.current !== L) return;
            W.current?.abort();
            let e = new AbortController();
            (W.current = e), D(null);
            try {
                await (0, H.U1)(L, e.signal);
            } catch {
            } finally {
                e.signal.aborted || W.current !== e || M.current !== L || D(L);
            }
        }, [L]);
    a.useEffect(
        () => (
            eR(),
            () => {
                W.current?.abort(), (W.current = null);
            }
        ),
        [eR],
    );
    let e_ = $?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        ez = a.useCallback(async () => {
            null == t ||
                (t.guild_id === e_ && t.preview_guild_id === e_) ||
                (await (0, H.M7)(t.id, { guild_id: e_, preview_guild_id: e_ }));
        }, [e_, t]),
        eL = a.useCallback(async () => {
            try {
                await ez();
            } catch {}
            await eR();
        }, [eR, ez]),
        eG = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                X.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: J ?? null,
                    guildId: e_,
                    onClose: () => {
                        eL();
                    },
                });
        }, [eL, e_, J, t]),
        eB = eu
            ? { type: "permissions", onReviewPermissions: eG, loading: ee || et }
            : et && null == $
              ? { type: "checking" }
              : void 0;
    a.useEffect(() => {
        null == t && n && (0, z.pX)(eU.BVt.CHANNEL(r, eS.VV.VIBEGRATIONS));
    }, [r, t, n]);
    let eH = a.useCallback(async () => {
            if (null != t) {
                if (!ei) return void eF(eM.NO_PREVIEW);
                if (eu) return void eF(eM.PERMISSIONS);
                c(!0);
                try {
                    var e;
                    let l = await (0, q.TV)(t.id);
                    if (!0 !== l.ok) throw Error(F.intl.string(G.default.fNP6Cd));
                    (0, H.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, eD.openModal)((t) => (0, i.jsx)(eK, { ...t, ...e }));
                } catch (e) {
                    (0, h.P0)((0, j.o)(e instanceof Error ? e.message : F.intl.string(G.default.fNP6Cd), v.Ck.FAILURE));
                } finally {
                    c(!1);
                }
            }
        }, [r, eu, ei, t]),
        eX = (0, i.jsx)(eP, {
            title: t?.name ?? F.intl.string(G.default.F2dRba),
            breadcrumb: { title: F.intl.string(G.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: eQ.FO,
                          children: [
                              er.showModeSwitch ? (0, i.jsx)(eg, { modes: er.modes, mode: eo, onChange: ec }) : null,
                              (0, i.jsx)(ew, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, Z.P)(t),
                                  isShared: (0, B.tr)(t),
                                  onRefresh: (0, eW.x1)(eb) ? eN : void 0,
                                  isRefreshing: eC,
                                  onClose: ey,
                                  onExport: eE,
                                  onImport: eI.open,
                                  onRemix: ek,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eD.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("964476"),
                                                  l.e("461590"),
                                              ]).then(l.bind(l, 84469));
                                              return (l) => (0, i.jsx)(t, { ...l, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      A?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                m(!0), x(!0);
                                            },
                                  refreshApplicationId:
                                      er.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== er.profileState
                                          ? ed
                                          : null,
                                  previewProjectId: t.id,
                              }),
                              (0, i.jsx)(b.m, {
                                  text: ej,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(C.K, {
                                      icon: eh ? eJ : e$,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": ej,
                                      "aria-pressed": eh,
                                      onClick: ev,
                                  }),
                              }),
                              (0, i.jsx)(eT.Ay, {
                                  projectId: t.id,
                                  view: w,
                                  onViewChange: eA,
                                  panelOpen: p,
                                  onTogglePanel: ex,
                              }),
                              (0, Z.P)(t)
                                  ? (0, i.jsx)(b.m, {
                                        text: em,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: e0,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": em,
                                            loading: o,
                                            disabled: ep,
                                            onClick: eH,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: eQ.nj,
        children: [
            eI.input,
            (0, i.jsx)("main", {
                className: eQ.JX,
                children:
                    null == t
                        ? (0, i.jsxs)("div", {
                              className: eQ.j5,
                              children: [
                                  eX,
                                  (0, i.jsxs)("div", {
                                      className: eQ.sD,
                                      children: [
                                          (0, i.jsx)(N.D, {
                                              variant: "heading-lg/semibold",
                                              children: F.intl.string(G.default.F2dRba),
                                          }),
                                          (0, i.jsx)(f.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: F.intl.string(G.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(y.$, {
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
                              Q.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: eW.sd,
                                  header: eX,
                                  chatOpen: p,
                                  panelView: w,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => x(!1),
                                  onRestoreVersion: ef,
                                  restoreState: A,
                                  previewReady: ei,
                                  previewGate: eB,
                                  availability: er,
                                  activeMode: eo,
                                  widgetApplicationId: ed,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function e8(e) {
    let {
            projects: t,
            sharedProjects: l,
            fetchState: n,
            idea: s,
            guildId: o,
            submitting: c,
            createError: d,
            createDisabled: u,
            installScope: p,
            onInstallScopeChange: m,
            installScopeError: g,
            modelSettings: h,
            onModelSettingsChange: j,
            onSelectProject: v,
            onIdeaChange: b,
            onCreate: C,
            onImportNewProject: R,
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
                    .filter((e) => (0, O.X0)(e, o))
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
        X = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || C());
            },
            [u, C],
        );
    return (0, i.jsxs)("div", {
        className: r()(eQ.nj, eQ.a0),
        children: [
            (0, i.jsx)(eP, { title: F.intl.string(G.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: eQ.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: eQ.ps,
                        children: [
                            (0, i.jsx)(A.Ip, {
                                className: eQ.Yy,
                                children: (0, i.jsx)("div", {
                                    className: eQ.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(eQ.Qs, eQ.Ix),
                                        children: [
                                            (0, i.jsx)(N.D, {
                                                variant: "heading-xl/semibold",
                                                children: F.intl.string(G.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: eQ.WI,
                                                "aria-label": M,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: eQ.G9,
                                                        children: [
                                                            (0, i.jsx)(f.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: M,
                                                            }),
                                                            (0, i.jsx)(f.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: F.intl.string(G.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: eQ.Aw,
                                                        children: L.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: eQ.EA,
                                                                    children: (0, i.jsxs)(x.D, {
                                                                        "aria-disabled": c,
                                                                        "aria-label": F.intl.formatToPlainString(
                                                                            G.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(eQ.nx, eQ.rz),
                                                                        onClick: c
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
                                                                            (0, i.jsx)(f.E, {
                                                                                className: eQ.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, i.jsx)(f.E, {
                                                                                className: eQ.BK,
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
                                                className: eQ.WI,
                                                "aria-label": U,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: eQ.G9,
                                                        children: [
                                                            (0, i.jsx)(f.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: U,
                                                            }),
                                                            (0, i.jsx)(f.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: F.intl.string(G.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: eQ.Aw,
                                                        children: D.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: eQ.EA,
                                                                    children: (0, i.jsx)(x.D, {
                                                                        "aria-disabled": c,
                                                                        className: eQ.nx,
                                                                        onClick: c ? void 0 : () => C(e),
                                                                        children: (0, i.jsx)(f.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: eQ.un,
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
                                className: eQ.Yl,
                                children: (0, i.jsxs)("div", {
                                    className: r()(eQ.Qs, eQ.DA),
                                    children: [
                                        (0, i.jsx)(E.f, {
                                            label: V,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: V,
                                            error: d,
                                            onChange: b,
                                            onKeyDown: X,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: eQ.VP,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: eQ.gH,
                                                    ref: z,
                                                    children: (0, i.jsx)(I.l, {
                                                        selectionMode: "single",
                                                        label: F.intl.string(G.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: F.intl.string(G.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: F.intl.string(G.default.MLg0S8),
                                                                options: eo.map((e) => ({
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
                                                    settings: h ?? B.hk,
                                                    choices: (0, K.e)()
                                                        ? {
                                                              main: [...B.S8.main, ...B.wF.main],
                                                              subagent: [...B.S8.subagent, ...B.wF.subagent],
                                                              thinking: B.S8.thinking,
                                                          }
                                                        : B.S8,
                                                    disabled: c,
                                                    onChange: j,
                                                }),
                                                (0, i.jsx)(y.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: F.intl.string(F.t.CumH4u),
                                                    disabled: u,
                                                    loading: c,
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
                        className: eQ.pA,
                        "aria-label": F.intl.string(G.default.Bo5fE3),
                        children: [
                            (0, i.jsxs)("div", {
                                className: eQ.IR,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: eQ.RM,
                                        children: [
                                            (0, i.jsx)(f.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: F.intl.string(G.default.Bo5fE3),
                                            }),
                                            (0, i.jsx)(f.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: F.intl.string(G.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(ec, { importing: _, onImport: R }),
                                ],
                            }),
                            (0, i.jsxs)(A.Ip, {
                                className: eQ.xe,
                                children: [
                                    (null == n || "loading" === n.type) && 0 === T.length
                                        ? (0, i.jsx)("div", { className: eQ.E8, children: (0, i.jsx)(S.y, {}) })
                                        : n?.type === "error" && 0 === T.length
                                          ? (0, i.jsxs)("div", {
                                                className: eQ.E8,
                                                children: [
                                                    (0, i.jsx)(f.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: eQ.JS,
                                                        children: F.intl.string(G.default["IN/HRP"]),
                                                    }),
                                                    (0, i.jsx)(y.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: F.intl.string(G.default["42EdIV"]),
                                                        onClick: () => (0, H.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === T.length
                                            ? (0, i.jsx)("div", {
                                                  className: eQ.D1,
                                                  children: (0, i.jsxs)("div", {
                                                      className: eQ.ST,
                                                      children: [
                                                          (0, i.jsx)(k.D, {
                                                              size: "lg",
                                                              color: w.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, i.jsx)(f.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: eQ.sI,
                                                              children: F.intl.string(G.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsx)("div", {
                                                  className: eQ.Dq,
                                                  children: T.map((e) =>
                                                      (0, i.jsx)(
                                                          e1,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => v(e.id),
                                                              onRemix: () => (0, eY.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    P.length > 0
                                        ? (0, i.jsxs)("div", {
                                              className: eQ.qx,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: eQ.uc,
                                                      children: [
                                                          (0, i.jsx)(f.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: F.intl.string(G.default.jrCnUc),
                                                          }),
                                                          (0, i.jsx)(f.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: F.intl.string(G.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: eQ.Dq,
                                                      children: P.map((e) =>
                                                          (0, i.jsx)(
                                                              e1,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => v(e.id),
                                                                  onRemix: () => (0, eY.A)(e, o),
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
function e9(e) {
    let t,
        { guildId: l, projectId: n } = e,
        s = (0, d.yK)([Z.A], () => Z.A.getOwnedProjects()),
        r = (0, d.bG)([Z.A], () => Z.A.getProjectsFetchState()),
        o = (0, d.yK)([Z.A], () => Z.A.getSharedProjects(l), [l]),
        c = (0, d.yK)([V.Ay], () => V.Ay.getSelfMember(l)?.roles ?? [], [l]),
        u = (0, d.bG)([D.A, L.A], () => {
            let e = D.A.getGuild(l);
            return null != e && L.A.can(eU.xBc.MANAGE_GUILD, e);
        }, [l]),
        [p, m] = a.useState(""),
        g = n ?? null,
        [x, f] = a.useState(!1),
        [b, C] = a.useState(null),
        [N, y] = a.useState("guild"),
        [A, E] = a.useState(null),
        [I, S] = a.useState(null);
    a.useEffect(() => {
        (0, H.hF)(l);
    }, [l, c, u]),
        a.useEffect(() => {
            (0, H.dm)(l, g);
        }, [l, g]);
    let k = a.useCallback((e) => {
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
                        (0, q.Hc)(e),
                            null != I && (0, q.r2)(e, I),
                            (0, q.wS)(e, t),
                            (0, z.pX)(eU.BVt.CHANNEL(l, eS.VV.VIBEGRATIONS, e)),
                            m(""),
                            S(null);
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
                let n = en(e);
                if (null != n) return void (0, h.P0)((0, j.o)(n, v.Ck.FAILURE));
                _(!0);
                let i = null;
                try {
                    (i = await (0, H.gA)({ guild_id: l, install_scope: t })),
                        await el(i, e, F.intl.string(G.default.KjEtrZ)),
                        (0, z.pX)(eU.BVt.CHANNEL(l, eS.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, H.xx)(i).catch(() => void 0)),
                        (0, h.P0)((0, j.o)(F.intl.string(G.default["02GpNr"]), v.Ck.FAILURE));
                } finally {
                    _(!1);
                }
            },
            [l],
        ),
        T = a.useCallback(
            (e) => {
                (0, z.pX)(eU.BVt.CHANNEL(l, eS.VV.VIBEGRATIONS, e));
            },
            [l],
        ),
        M = a.useCallback(() => {
            (0, z.pX)(eU.BVt.CHANNEL(l, eS.VV.VIBEGRATIONS));
        }, [l]),
        B = a.useCallback((e) => {
            m(e), C(null);
        }, []),
        U = (0, d.bG)([Z.A], () => {
            if (null == g) return null;
            let e = Z.A.getProject(g);
            return null == e || (0, Z.P)(e) || e.guild_id === l ? e : null;
        }, [g, l]),
        X = (0, d.bG)([Z.A], () => Z.A.hasFetchedGuildProjects(l), [l]);
    return null != g
        ? (0, i.jsx)(e2, { project: U, projectsLoaded: X, onBack: M, guildId: l }, g)
        : (0, i.jsx)(e8, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: I,
              onModelSettingsChange: S,
              idea: p,
              guildId: l,
              submitting: x,
              createError: b,
              createDisabled: "idea" === (t = W({ idea: p, installScope: N, submitting: x })) || "submitting" === t,
              onSelectProject: T,
              onIdeaChange: B,
              onCreate: w,
              onImportNewProject: P,
              importing: R,
              installScope: N,
              onInstallScopeChange: k,
              installScopeError: A,
          });
}
