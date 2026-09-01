l.r(t), l.d(t, { default: () => e9 });
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
    y = l(92446),
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
    T = l(672929),
    D = l(976860),
    L = l(885386),
    V = l(696451),
    M = l(71393),
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
    W = l(18739),
    Z = l(972786);
function Q(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var $ = l(108091),
    J = l(922016),
    ee = l(980707),
    et = l(477782),
    el = l(81369);
async function en(e, t, l) {
    (0, W.Hc)(e);
    let n = await (0, W.vX)(e, t);
    (0, W.dv)(e, l, [n]);
}
function ei(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, U.x5)(e.size, t)
        ? null
        : H.intl.formatToPlainString(F.default.AzziHF, { size: (0, U.ZJ)((0, U.yr)(t)) });
}
async function ea(e, t) {
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
        i = await (0, W.cS)(e, n),
        a = URL.createObjectURL(i);
    try {
        let e = document.createElement("a");
        (e.href = a), (e.download = n), (e.rel = "noopener"), e.click();
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(a), 0);
    }
}
function es(e) {
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
var er = l(950305),
    eo = l(664121);
let ed = [
    { value: "user", icon: er.UserIcon, nameMessage: F.default.iqXIRN },
    { value: "guild", icon: eo.R, nameMessage: F.default.LdgKdI },
];
function ec(e) {
    let { importing: t, onImport: l } = e,
        n = a.useRef(null),
        s = es(a.useCallback((e) => l(e, "user"), [l])),
        r = es(a.useCallback((e) => l(e, "guild"), [l])),
        o = { user: s.open, guild: r.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(J.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: J.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(ee.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": H.intl.string(F.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(et.rX, {
                            label: H.intl.string(F.default.MLg0S8),
                            children: ed
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: H.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        et.Dr,
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
                        icon: el.H,
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
var eu = l(311656),
    ep = l(629584),
    em = l(148853),
    eg = l(491920);
function ex(e) {
    let { modes: t, mode: l, onChange: n, className: s } = e,
        o = a.useMemo(() => t.map((e) => ({ value: e, name: (0, em.kZ)(e), "aria-controls": (0, em.z3)(e) })), [t]),
        d = a.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == l
        ? null
        : (0, i.jsx)(ep.I, {
              role: "tablist",
              look: "pill",
              className: r()(eg.b, s),
              optionClassName: eg.u,
              options: o,
              value: l,
              onChange: d,
          });
}
var ef = l(663417),
    eh = l(70688),
    ej = l(173936),
    ev = l(625903),
    eb = l(365199),
    eC = l(770818),
    eN = l(871237),
    ey = l(957565),
    eA = l(557875),
    eE = l(869369),
    eI = l(123917);
let ek = new Set();
l(321073);
var eS = l(746080);
let ew = [];
function eR(e) {
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
        { pending: I, refresh: k } = (0, eC.A)(y ?? null),
        { pending: S, connect: w } = (function (e) {
            let [t, l] = a.useState(ek),
                n = a.useRef(ek),
                i = a.useCallback((e) => {
                    (n.current = (0, eA.Q6)(n.current, e)), l(n.current);
                }, []);
            return {
                pending: t,
                connect: a.useCallback(
                    (t) => {
                        if (null == e) return;
                        let a = (0, eA.K9)(n.current, t.type);
                        async function s() {
                            let l = await (0, W.JI)(e, t.type);
                            if ((i(t.type), "url" === l.type)) return void (0, eI.h)({ href: l.url, trusted: !1 });
                            let n =
                                "setup" === (0, eA.rq)(l.error)
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
        R = (0, c.bG)([W.Ay], () => (null == A ? ew : W.Ay.getDeclaredConnections(A))),
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
            canRefresh: null != y,
            refreshPending: I,
            offers: a.useMemo(() => (0, eA.Xl)(R), [R]),
            connectPending: S,
        }),
        P = a.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        z = null != m && (r || o),
        T = r && null != p,
        D = z || null != d || T || null != g || null != x,
        L = ey.p5 && null != n;
    return null != f || null != C || D || L || r
        ? (0, i.jsx)(J.Y, {
              targetElementRef: E,
              position: "bottom",
              align: "right",
              animation: J.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsxs)(ee.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": H.intl.string(H.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          null != f || null != C
                              ? (0, i.jsxs)(et.rX, {
                                    children: [
                                        null != f
                                            ? (0, i.jsx)(et.Dr, {
                                                  id: "refresh",
                                                  icon: ef.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: ef.RefreshIcon },
                                                  label: H.intl.string(F.default.xKexN1),
                                                  disabled: h,
                                                  action: f,
                                              })
                                            : null,
                                        null != C
                                            ? (0, i.jsx)(et.Dr, {
                                                  id: "close",
                                                  icon: eh.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eh.DoorExitIcon },
                                                  label: H.intl.string(F.default.Ea0Wrr),
                                                  action: C,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, i.jsx)(et.rX, {
                                    children: _.map((e) =>
                                        (0, i.jsx)(
                                            et.Dr,
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
                              ? (0, i.jsxs)(et.rX, {
                                    children: [
                                        z
                                            ? (0, i.jsx)(et.Dr, {
                                                  id: "remix",
                                                  label: H.intl.string(F.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(et.Dr, {
                                                  id: "export",
                                                  label: H.intl.string(F.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        T
                                            ? (0, i.jsx)(et.Dr, {
                                                  id: "import",
                                                  label: H.intl.string(F.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(et.Dr, {
                                                  id: "connect-tool",
                                                  label: H.intl.string(F.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != x
                                            ? (0, i.jsx)(et.Dr, {
                                                  id: "version-history",
                                                  label: H.intl.string(F.default.jAWwzi),
                                                  action: x,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          L
                              ? (0, i.jsx)(et.rX, {
                                    children: (0, i.jsx)(et.Dr, {
                                        id: "copy-link",
                                        label: H.intl.string(H.t.WqhZss),
                                        icon: ej.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: ej.LinkIcon },
                                        action: () =>
                                            (0, ey.C)((0, eN.n)(n, eS.VV.VIBEGRATIONS, t), () =>
                                                (0, j.P0)((0, v.o)(H.intl.string(H.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, i.jsxs)(et.rX, {
                                    children: [
                                        (0, i.jsx)(et.Dr, {
                                            id: "settings",
                                            label: H.intl.string(F.default["xhcY+n"]),
                                            icon: ev.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: ev.SettingsIcon },
                                            action: () => (0, eE.A)(t, s ?? n),
                                        }),
                                        (0, i.jsx)(et.Dr, {
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
                  return (0, i.jsx)(N.K, {
                      ...e,
                      buttonRef: E,
                      icon: eb.MoreHorizontalIcon,
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
var e_ = l(742589),
    eP = l(769979);
function ez(e) {
    let { title: t, actions: l, breadcrumb: n } = e;
    return (0, i.jsx)(e_.A, {
        hideSearch: !0,
        toolbar: l,
        className: eP.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: eP.QF,
            children: [
                (0, i.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.colors.TEXT_STRONG,
                    className: eP.Kk,
                }),
                null != n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(e_.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, i.jsx)(e_.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(e_.A.Title, { className: eP.Qw, wrapperClassName: eP.DD, children: t }),
            ],
        }),
    });
}
var eT = l(321593),
    eD = l(580954),
    eL = l(192308),
    eV = l(189213),
    eM = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function eG(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = "permissions" === t;
    return (0, i.jsx)(eV.Modal, {
        transitionState: l,
        onClose: n,
        title: H.intl.string(a ? F.default.Rtlv25 : F.default["+UouPe"]),
        subtitle: H.intl.string(a ? F.default["nDQB/b"] : F.default["E0QD++"]),
        size: "sm",
        actions: [{ text: H.intl.string(a ? H.t.BddRzS : F.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function eB(e) {
    (0, eL.openModal)((t) => (0, i.jsx)(eG, { ...t, reason: e }));
}
var eF = l(224640),
    eH = l(815021),
    eU = l(652215),
    eX = l(931587),
    eK = l(264997);
function eO(e) {
    let { applicationId: t, guildId: l, projectName: n, transitionState: s, onClose: r } = e,
        o = H.intl.string(F.default.yzxKsU),
        d = H.intl.formatToPlainString(F.default.CC69wK, { projectName: n }),
        c = a.useCallback(() => {
            let e = (0, O.SH)(l, t);
            (0, D.pX)(null == e ? eU.BVt.CHANNEL(l) : eU.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, i.jsx)(eF.d, {
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
                            children: (0, i.jsx)("img", { className: eX.yW, src: eK, alt: "" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: eX.R_,
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
                    className: eX.o1,
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
var eY = l(584936),
    eq = l(899154),
    eW = l(675210),
    eZ = l(165610),
    eQ = l(352978);
function e$(e) {
    return (0, i.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function eJ(e) {
    return (0, i.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function e0(e) {
    return (0, i.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function e1(e) {
    return (0, i.jsx)(x.b, { ...e, size: "custom", width: 20, height: 20 });
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
                    (0, j.P0)((0, v.o)(H.intl.formatToPlainString(F.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    ea(t, l)
                        .catch((e) => {
                            let l;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, j.P0)(
                                    (0, v.o)(
                                        409 === (l = e instanceof W._v ? e.status : null)
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
                onImport: (r = es(
                    a.useCallback(
                        (e) => {
                            let n = ei(e);
                            null != n
                                ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                                : (0, u.A)({
                                      title: H.intl.formatToPlainString(F.default.XYZqZK, { name: l }),
                                      subtitle: H.intl.string(F.default["6syXoH"]),
                                      confirmText: H.intl.string(F.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, D.pX)(eU.BVt.CHANNEL(c, eS.VV.VIBEGRATIONS, t));
                                          try {
                                              await en(t, e, H.intl.string(F.default.C7GU2r));
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
        { data: C } = (0, P.YY)(x),
        N =
            null == o.updated_at
                ? null
                : H.intl.formatToPlainString(F.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: eQ.OY,
        children: [
            (0, i.jsx)(eT.Ay, { projectId: o.id }),
            (0, i.jsxs)(f.D, {
                className: eQ.W6,
                onClick: p,
                children: [
                    (0, i.jsx)("img", {
                        alt: "",
                        src: B.Ay.getApplicationIconURL({ id: x, icon: C?.icon, size: 40 }),
                        className: eQ.VJ,
                    }),
                    (0, i.jsxs)("div", {
                        className: eQ.MM,
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: eQ.j1,
                                children: o.name,
                            }),
                            null == N
                                ? null
                                : (0, i.jsx)("div", {
                                      className: eQ.h3,
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
                className: eQ.M2,
                children: (0, i.jsxs)("div", {
                    className: eQ.Pl,
                    children: [
                        (0, i.jsx)(eR, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: c,
                            projectGuildId: o.guild_id,
                            isOwner: (0, Z.P)(o),
                            isShared: (0, U.tr)(o),
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
        [o, d] = a.useState(!1),
        [p, m] = a.useState(!0),
        [g, x] = a.useState(!1),
        [f, I] = a.useState(!1),
        k = L.Q_.useSetting(),
        [S, w] = a.useState(null),
        [R, _] = a.useState(null),
        V = t?.id ?? null,
        M = a.useRef(V),
        G = a.useRef(!0),
        B = a.useRef(!1),
        O = a.useRef(null);
    (M.current = V),
        a.useEffect(
            () => (
                (G.current = !0),
                () => {
                    G.current = !1;
                }
            ),
            [],
        );
    let Y = (0, c.bG)([Z.A], () => (null == V ? null : Z.A.getIntegrationStatus(V)), [V]),
        { data: Q, isLoading: J } = (0, P.YY)(t?.preview_application_id ?? void 0),
        ee = null != V && R !== V,
        et = Y?.preview_ready === !0,
        el = Y?.has_activity === !0,
        {
            availability: ea,
            activeMode: er,
            setMode: eo,
            widgetApplicationId: ed,
        } = (0, eq.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: el,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: Y?.owner_authorization_revoked === !0,
        }),
        ec = (0, eW.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: et,
            integrationInstalled: Y?.integration_installed ?? null,
            botPermissionsChanged: Y?.bot_permissions_changed === !0,
        }),
        eu = o || ee || J,
        ep = H.intl.string(F.default["5gU57O"]),
        em = p && !f && !g,
        eg = H.intl.string(em ? F.default.YdgE0j : F.default.aWVf4j),
        ef = a.useCallback(() => {
            if (f || g) {
                I(!1), x(!1), m(!0);
                return;
            }
            m((e) => !e);
        }, [f, g]),
        eh = a.useCallback(() => m(!1), []),
        ej = a.useCallback(() => {
            I((e) => !e && (m(!0), x(!1), !0));
        }, []),
        ev = a.useCallback(() => I(!1), []),
        eb = a.useCallback(
            (e) => {
                if (null == t || B.current) return;
                let l = t.id;
                function n() {
                    return G.current && M.current === l;
                }
                (B.current = !0),
                    x(!1),
                    m(!0),
                    w({ entry: e, status: "restoring" }),
                    (0, W.oB)(l, e.sha)
                        .then(
                            () => {
                                n() && w({ entry: e, status: "restored" });
                            },
                            (t) => {
                                n() &&
                                    (w({ entry: e, status: "failed" }),
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
        eC = (0, c.bG)([q.A], () => q.A.isBuilderPreviewMobile()),
        eN = H.intl.string(eC ? F.default["3uCc8U"] : F.default["+nzCxZ"]),
        ey = a.useCallback(() => (0, X.GG)(!eC), [eC]),
        eA = (0, T.A)(t?.preview_application_id ?? null, eZ.sd),
        eE = (0, eZ.x1)(eA) && eA.data.proxyTicketRefreshing,
        eI = a.useCallback(() => {
            null == eA || eE || z.A.refreshProxyTicket(eA.id);
        }, [eA, eE]),
        ek = a.useCallback(() => {
            var e, l;
            null != t && ((e = t.id), (l = eA?.id), (0, W.Bn)(e), (0, eD.A)().leaveFrame(l)), s();
        }, [t, eA?.id, s]),
        ew = a.useCallback(() => {
            null != t && (m(!0), (0, W.dv)(t.id, H.intl.string(F.default["2ejwtJ"])));
        }, [t]),
        e_ = es(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        n = ei(e);
                    null != n
                        ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: H.intl.formatToPlainString(F.default.XYZqZK, { name: t.name }),
                              subtitle: H.intl.string(F.default["6syXoH"]),
                              confirmText: H.intl.string(F.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await en(l, e, H.intl.string(F.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, v.o)(H.intl.string(F.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eP = a.useCallback(() => {
            null != t && (0, eY.A)(t, r);
        }, [t, r]),
        eT = a.useCallback(async () => {
            if (null == V || M.current !== V) return;
            O.current?.abort();
            let e = new AbortController();
            (O.current = e), _(null);
            try {
                await (0, X.U1)(V, e.signal);
            } catch {
            } finally {
                e.signal.aborted || O.current !== e || M.current !== V || _(V);
            }
        }, [V]);
    a.useEffect(
        () => (
            eT(),
            () => {
                O.current?.abort(), (O.current = null);
            }
        ),
        [eT],
    );
    let eV = Y?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eG = a.useCallback(async () => {
            null == t ||
                (t.guild_id === eV && t.preview_guild_id === eV) ||
                (await (0, X.M7)(t.id, { guild_id: eV, preview_guild_id: eV }));
        }, [eV, t]),
        eF = a.useCallback(async () => {
            try {
                await eG();
            } catch {}
            await eT();
        }, [eT, eG]),
        eH = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                K.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: Q ?? null,
                    guildId: eV,
                    onClose: () => {
                        eF();
                    },
                });
        }, [eF, eV, Q, t]),
        eX = ec
            ? { type: "permissions", onReviewPermissions: eH, loading: J || ee }
            : ee && null == Y
              ? { type: "checking" }
              : void 0;
    a.useEffect(() => {
        null == t && n && (0, D.pX)(eU.BVt.CHANNEL(r, eS.VV.VIBEGRATIONS));
    }, [r, t, n]);
    let eK = a.useCallback(async () => {
            if (null != t) {
                if (!et) return void eB(eM.NO_PREVIEW);
                if (ec) return void eB(eM.PERMISSIONS);
                d(!0);
                try {
                    var e;
                    let l = await (0, W.TV)(t.id);
                    if (!0 !== l.ok) throw Error(H.intl.string(F.default.fNP6Cd));
                    (0, X.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, eL.openModal)((t) => (0, i.jsx)(eO, { ...t, ...e }));
                } catch (e) {
                    (0, j.P0)((0, v.o)(e instanceof Error ? e.message : H.intl.string(F.default.fNP6Cd), b.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [r, ec, et, t]),
        e8 = (0, i.jsx)(ez, {
            title: t?.name ?? H.intl.string(F.default.F2dRba),
            breadcrumb: { title: H.intl.string(F.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: eQ.FO,
                          children: [
                              ea.showModeSwitch ? (0, i.jsx)(ex, { modes: ea.modes, mode: er, onChange: eo }) : null,
                              (0, i.jsx)(eR, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, Z.P)(t),
                                  isShared: (0, U.tr)(t),
                                  onRefresh: (0, eZ.x1)(eA) ? eI : void 0,
                                  isRefreshing: eE,
                                  onClose: ek,
                                  onExport: ew,
                                  onImport: e_.open,
                                  onRemix: eP,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eL.openModalLazy)(async () => {
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
                                                m(!0), I(!1), x(!0);
                                            },
                                  refreshApplicationId:
                                      ea.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ea.profileState
                                          ? ed
                                          : null,
                                  previewProjectId: t.id,
                              }),
                              (0, i.jsx)(C.m, {
                                  text: eN,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(N.K, {
                                      icon: eC ? e0 : eJ,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eN,
                                      "aria-pressed": eC,
                                      onClick: ey,
                                  }),
                              }),
                              k
                                  ? (0, i.jsx)(C.m, {
                                        text: H.intl.string(F.default["8MLfBT"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(N.K, {
                                            icon: y.BugIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": H.intl.string(F.default["8MLfBT"]),
                                            "aria-pressed": f,
                                            onClick: ej,
                                        }),
                                    })
                                  : null,
                              (0, i.jsx)(C.m, {
                                  text: eg,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(N.K, {
                                      icon: e$,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eg,
                                      "aria-pressed": em,
                                      onClick: ef,
                                  }),
                              }),
                              (0, Z.P)(t)
                                  ? (0, i.jsx)(C.m, {
                                        text: ep,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(N.K, {
                                            icon: e1,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": ep,
                                            loading: o,
                                            disabled: eu,
                                            onClick: eK,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: eQ.nj,
        children: [
            e_.input,
            (0, i.jsx)("main", {
                className: eQ.JX,
                children:
                    null == t
                        ? (0, i.jsxs)("div", {
                              className: eQ.j5,
                              children: [
                                  e8,
                                  (0, i.jsxs)("div", {
                                      className: eQ.sD,
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
                              $.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: eZ.sd,
                                  header: e8,
                                  chatOpen: p,
                                  onCloseChat: eh,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => x(!1),
                                  debugOpen: k && f,
                                  onCloseDebug: ev,
                                  onRestoreVersion: eb,
                                  restoreState: S,
                                  previewReady: et,
                                  previewGate: eX,
                                  availability: ea,
                                  activeMode: er,
                                  widgetApplicationId: ed,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function e6(e) {
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
            importing: y,
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
        D = H.intl.string(F.default.TU9IGR),
        L = [
            H.intl.string(F.default["E+Q26x"]),
            H.intl.string(F.default["06/jqP"]),
            H.intl.string(F.default["3gSfUa"]),
        ],
        V = [
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
        M = H.intl.string(F.default.FYK2xQ),
        G = H.intl.string(F.default["/SUK82"]),
        B = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || C());
            },
            [u, C],
        );
    return (0, i.jsxs)("div", {
        className: r()(eQ.nj, eQ.a0),
        children: [
            (0, i.jsx)(ez, { title: H.intl.string(F.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: eQ.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: eQ.ps,
                        children: [
                            (0, i.jsx)(I.Ip, {
                                className: eQ.Yy,
                                children: (0, i.jsx)("div", {
                                    className: eQ.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(eQ.Qs, eQ.Ix),
                                        children: [
                                            (0, i.jsx)(A.D, {
                                                variant: "heading-xl/semibold",
                                                children: H.intl.string(F.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: eQ.WI,
                                                "aria-label": M,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: eQ.G9,
                                                        children: [
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: M,
                                                            }),
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(F.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: eQ.Aw,
                                                        children: V.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: eQ.EA,
                                                                    children: (0, i.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": H.intl.formatToPlainString(
                                                                            F.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(eQ.nx, eQ.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return C(
                                                                                      ((t = e.name),
                                                                                      H.intl.formatToPlainString(
                                                                                          F.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, i.jsx)(h.E, {
                                                                                className: eQ.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, i.jsx)(h.E, {
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
                                                "aria-label": G,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: eQ.G9,
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
                                                        className: eQ.Aw,
                                                        children: L.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: eQ.EA,
                                                                    children: (0, i.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: eQ.nx,
                                                                        onClick: d ? void 0 : () => C(e),
                                                                        children: (0, i.jsx)(h.E, {
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
                                        (0, i.jsx)(k.f, {
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
                                            className: eQ.VP,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: eQ.gH,
                                                    ref: z,
                                                    children: (0, i.jsx)(S.l, {
                                                        selectionMode: "single",
                                                        label: H.intl.string(F.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: H.intl.string(F.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: H.intl.string(F.default.MLg0S8),
                                                                options: ed.map((e) => ({
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
                                                (0, i.jsx)(eu.A, {
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
                        "aria-label": H.intl.string(F.default.Bo5fE3),
                        children: [
                            (0, i.jsxs)("div", {
                                className: eQ.IR,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: eQ.RM,
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
                                    (0, i.jsx)(ec, { importing: y, onImport: N }),
                                ],
                            }),
                            (0, i.jsxs)(I.Ip, {
                                className: eQ.xe,
                                children: [
                                    (null == n || "loading" === n.type) && 0 === T.length
                                        ? (0, i.jsx)("div", { className: eQ.E8, children: (0, i.jsx)(w.y, {}) })
                                        : n?.type === "error" && 0 === T.length
                                          ? (0, i.jsxs)("div", {
                                                className: eQ.E8,
                                                children: [
                                                    (0, i.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: eQ.JS,
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
                                          : 0 === T.length
                                            ? (0, i.jsx)("div", {
                                                  className: eQ.D1,
                                                  children: (0, i.jsxs)("div", {
                                                      className: eQ.ST,
                                                      children: [
                                                          (0, i.jsx)(R.D, {
                                                              size: "lg",
                                                              color: _.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, i.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: eQ.sI,
                                                              children: H.intl.string(F.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsx)("div", {
                                                  className: eQ.Dq,
                                                  children: T.map((e) =>
                                                      (0, i.jsx)(
                                                          e8,
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
                                                      className: eQ.Dq,
                                                      children: P.map((e) =>
                                                          (0, i.jsx)(
                                                              e8,
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
        s = (0, c.yK)([Z.A], () => Z.A.getOwnedProjects()),
        r = (0, c.bG)([Z.A], () => Z.A.getProjectsFetchState()),
        o = (0, c.yK)([Z.A], () => Z.A.getSharedProjects(l), [l]),
        d = (0, c.yK)([V.Ay], () => V.Ay.getSelfMember(l)?.roles ?? [], [l]),
        u = (0, c.bG)([M.A, G.A], () => {
            let e = M.A.getGuild(l);
            return null != e && G.A.can(eU.xBc.MANAGE_GUILD, e);
        }, [l]),
        [p, m] = a.useState(""),
        g = n ?? null,
        [x, f] = a.useState(!1),
        [h, C] = a.useState(null),
        [N, y] = a.useState("guild"),
        [A, E] = a.useState(null),
        [I, k] = a.useState(null);
    a.useEffect(() => {
        (0, X.hF)(l);
    }, [l, d, u]),
        a.useEffect(() => {
            (0, X.dm)(l, g);
        }, [l, g]);
    let S = a.useCallback((e) => {
            y(e), E(null);
        }, []),
        w = a.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    n = Q({ idea: t, installScope: N, submitting: x });
                if ("idea" !== n && "submitting" !== n) {
                    if (null == N) return void E(H.intl.string(F.default.jQ3nQB));
                    null != e && m(e), f(!0), C(null);
                    try {
                        let e = await (0, X.gA)({ guild_id: l, install_scope: N });
                        (0, W.Hc)(e),
                            null != I && (0, W.r2)(e, I),
                            (0, W.dv)(e, t),
                            (0, D.pX)(eU.BVt.CHANNEL(l, eS.VV.VIBEGRATIONS, e)),
                            m(""),
                            k(null);
                    } catch (e) {
                        C(e instanceof Error ? e.message : H.intl.string(F.default.KKkp5Y));
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
                let n = ei(e);
                if (null != n) return void (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                _(!0);
                let i = null;
                try {
                    (i = await (0, X.gA)({ guild_id: l, install_scope: t })),
                        await en(i, e, H.intl.string(F.default.KjEtrZ)),
                        (0, D.pX)(eU.BVt.CHANNEL(l, eS.VV.VIBEGRATIONS, i));
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
                (0, D.pX)(eU.BVt.CHANNEL(l, eS.VV.VIBEGRATIONS, e));
            },
            [l],
        ),
        T = a.useCallback(() => {
            (0, D.pX)(eU.BVt.CHANNEL(l, eS.VV.VIBEGRATIONS));
        }, [l]),
        L = a.useCallback((e) => {
            m(e), C(null);
        }, []),
        B = (0, c.bG)([Z.A], () => {
            if (null == g) return null;
            let e = Z.A.getProject(g);
            return null == e || (0, Z.P)(e) || e.guild_id === l ? e : null;
        }, [g, l]),
        U = (0, c.bG)([Z.A], () => Z.A.hasFetchedGuildProjects(l), [l]);
    return null != g
        ? (0, i.jsx)(e2, { project: B, projectsLoaded: U, onBack: T, guildId: l }, g)
        : (0, i.jsx)(e6, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: I,
              onModelSettingsChange: k,
              idea: p,
              guildId: l,
              submitting: x,
              createError: h,
              createDisabled: "idea" === (t = Q({ idea: p, installScope: N, submitting: x })) || "submitting" === t,
              onSelectProject: z,
              onIdeaChange: L,
              onCreate: w,
              onImportNewProject: P,
              importing: R,
              installScope: N,
              onInstallScopeChange: S,
              installScopeError: A,
          });
}
