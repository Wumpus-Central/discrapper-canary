n.d(t, { z: () => eu, A: () => es });
var r = n(477900),
    l = n(582128),
    i = n(855986),
    a = n(858899),
    o = n(782603),
    c = n(780338),
    u = n(12470),
    s = n(811893),
    d = n(86147),
    f = n(729475),
    h = n(165862),
    p = n(477782),
    g = n(625903),
    m = n(173936),
    y = n(473935),
    x = n(92446),
    b = n(265872),
    w = n(866665),
    v = n(408278),
    j = n(365199),
    k = n(742589),
    S = n(147036),
    C = n(957565),
    I = n(171691),
    M = n(785389),
    _ = n(889558),
    P = n(860402),
    A = n(191850),
    D = n(792996);
let $ = new Set();
var q = n(91242),
    T = n(156548),
    z = n(869146),
    E = n(475815),
    O = n(573083),
    B = n(652215),
    F = n(165610),
    W = n(826058),
    L = n(442331),
    R = n(616334),
    X = n(260498);
n(321073);
var G = n(189714),
    N = n(733791),
    H = n(314116),
    K = n(233470),
    U = n(189213),
    V = n(331322),
    Q = n(834730),
    Y = n(192308),
    Z = n(936508),
    J = n(199267),
    ee = n(706935);
function et(e) {
    let { project: t, target: n, otherTargets: i, ...a } = e,
        [o, c] = l.useState(!1),
        [u, s] = l.useState(null),
        d = (0, N.fI)(n, i),
        f = (0, N.Mi)(n);
    return (0, r.jsx)(U.a, {
        ...a,
        role: "alertdialog",
        title: D.intl.formatToPlainString(A.default.CJBhb2, { name: n.projectName }),
        subtitle: (0, N.J)(n, i),
        notice: null == u ? void 0 : { message: u, type: "critical", role: "alert" },
        actions: [
            { text: D.intl.string(D.t["ETE/oC"]), variant: "secondary", onClick: a.onClose },
            {
                text: D.intl.string(A.default.aC42bN),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (c(!0), s(null));
                        let e = await (0, K.xx)(t.id).catch(() => null);
                        (c(!1), e?.ok !== !0) ? s(D.intl.string(A.default["0XDHob"])) : a.onClose();
                    })().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(V.B, {
            gap: 12,
            children: [
                (0, r.jsx)(ee.Ay, { items: d }),
                null != f ? (0, r.jsx)(Q.E, { variant: "body-sm/normal", color: "text-muted", children: f }) : null,
            ],
        }),
    });
}
var en = n(587895),
    er = n(664619);
function el(e) {
    let { project: t, ...n } = e,
        [o, c] = l.useState(!1),
        [u, s] = l.useState(null),
        d = (0, i.bG)([en.A], () => en.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = D.intl.formatToPlainString(A.default.m8KWic, { app: d });
    return (0, r.jsx)(U.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: D.intl.string(A.default.wve4kB),
        "aria-label": f,
        notice: null == u ? void 0 : { message: u, type: "critical", role: "alert" },
        actions: [
            { text: D.intl.string(D.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: D.intl.string(A.default.GqcQyH),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (c(!0), s(null));
                        let e = await (0, er.R_)(t.id);
                        (c(!1), e)
                            ? ((0, a.P0)({
                                  text: D.intl.formatToPlainString(A.default.b8LN7N, { app: d }),
                                  variant: "success",
                              }),
                              n.onClose())
                            : s(D.intl.string(A.default["rE/0SD"]));
                    })().catch(() => {});
                },
            },
        ],
    });
}
var ei = n(746080),
    ea = n(552821);
let eo = [];
function ec(e) {
    (0, a.P0)({ text: e, variant: "critical" });
}
function eu(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: b,
            projectGuildId: w,
            isOwner: v,
            canRemix: j,
            onPublish: k,
            publishLabel: U,
            publishDisabled: V = !1,
            hideProjectSettings: Q = !1,
            onExport: ee,
            onImport: en,
            onRemix: er,
            onConnectTool: ea,
            onHistory: eu,
            onDismiss: es,
            fullscreenFrame: ed,
            onTogglePopout: ef,
            poppedOut: eh = !1,
            onToggleDebug: ep,
            debugOpen: eg = !1,
            previewProjectId: em,
            onCloseMenu: ey,
        } = e,
        ex = (0, G.iI)(t),
        eb = (0, I.lQ)(t),
        ew = (function (e, t) {
            let n = (0, T.cR)(e?.id ?? null),
                r = (0, O.Zv)(t),
                l = (0, i.bG)(
                    [z.A, q.A],
                    () => null != e && z.A.getWindowOpen(B.MLl.ACTIVITY_POPOUT) && q.A.getMainFrame()?.id === e.id,
                    [e],
                );
            if (!(0, F.x1)(e) || l || r) return null;
            let a = (0, T.fl)(e.id);
            return null != a && (0, E.Ub)(a) ? { active: n, toggle: () => (0, T.U8)(e.id) } : null;
        })(ed, t),
        ev = l.useContext(W.bI),
        { pending: ej, connect: ek } = (function (e, t) {
            let [n, r] = l.useState($),
                i = l.useRef($),
                a = l.useCallback((e) => {
                    ((i.current = (0, M.Q6)(i.current, e)), r(i.current));
                }, []);
            return {
                pending: n,
                connect: l.useCallback(
                    (n) => {
                        if (null == e) return;
                        let l = (0, M.K9)(i.current, n.type);
                        null != l &&
                            ((i.current = l),
                            r(l),
                            (async function () {
                                let r = await (0, P.JI)(e, n.type);
                                (a(n.type), "url" === r.type)
                                    ? (0, _.h)({ href: r.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, M.rq)(r.error)
                                              ? D.intl.string(A.default["jCQ/1B"])
                                              : D.intl.string(A.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(em ?? null, ec),
        eS = (0, i.bG)([L.A], () => (null == em ? eo : L.A.getDeclaredConnections(em))),
        eC = l.useMemo(() => (0, M.Xl)(eS), [eS]),
        eI = (0, N.Bs)(t),
        eM = (0, N.CU)(t) && v,
        e_ = (0, i.bG)(
            [X.Ay],
            () => {
                let e = X.Ay.getProject(t);
                return null != e && (0, X.jf)(e);
            },
            [t],
        ),
        eP = !Q && (v || e_),
        eA = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: r, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: a } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: D.intl.string(A.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            r))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: D.intl.formatToPlainString(A.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: D.intl.formatToPlainString(A.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: !1, refreshPending: !1, offers: eC, connectPending: ej }),
        eD = l.useMemo(() => new Map(eS.map((e) => [e.type, e])), [eS]),
        e$ = null != er && j,
        eq = v && null != en,
        eT = C.p5 && null != b,
        ez = null != ee || eq || null != ea || eA.length > 0 || null != eu,
        eE = ex ? o.BellIcon : c.BellSlashIcon,
        eO = eh ? u.WindowReturnIcon : s.WindowLaunchIcon,
        eB = ew?.active === !0 ? d.FullscreenExitIcon : f.FullscreenEnterIcon;
    return (0, r.jsxs)(h.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": D.intl.string(D.t.ogxXGq),
        onClose: ey,
        onSelect: ey,
        children: [
            null != k
                ? (0, r.jsx)(p.rX, {
                      children: (0, r.jsx)(p.Dr, {
                          id: "publish",
                          label: U ?? D.intl.string(A.default["120EFN"]),
                          disabled: V,
                          action: k,
                      }),
                  })
                : null,
            e$ || eP
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          e$
                              ? (0, r.jsx)(p.Dr, { id: "remix", label: D.intl.string(A.default["276ll6"]), action: er })
                              : null,
                          eP
                              ? (0, r.jsx)(p.Dr, {
                                    id: "settings",
                                    label: D.intl.string(A.default.FzfmQ8),
                                    icon: g.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: g.SettingsIcon },
                                    action: () =>
                                        (0, R.A)(t, {
                                            guildId: w ?? b,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: ev,
                                        }),
                                })
                              : null,
                      ],
                  })
                : null,
            null != ew || null != ef || eT
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          null != ew
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-fullscreen",
                                    icon: eB,
                                    leadingAccessory: { type: "icon", icon: eB },
                                    label: D.intl.string(ew.active ? D.t.Z7MyNB : D.t.OIDkcp),
                                    action: ew.toggle,
                                })
                              : null,
                          null != ef
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: eO,
                                    leadingAccessory: { type: "icon", icon: eO },
                                    label: D.intl.string(eh ? D.t["NKV/MO"] : D.t["3Zypbv"]),
                                    subtext: eb && !eh ? D.intl.string(A.default.WjdaFw) : void 0,
                                    disabled: eb && !eh,
                                    action: ef,
                                })
                              : null,
                          eT
                              ? (0, r.jsx)(p.Dr, {
                                    id: "copy-link",
                                    label: D.intl.string(D.t.WqhZss),
                                    icon: m.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: m.LinkIcon },
                                    action: () =>
                                        (0, C.C)((0, S.n)(b, ei.VV.CONJURE, t), () =>
                                            (0, a.P0)({ text: D.intl.string(D.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, r.jsxs)(p.rX, {
                children: [
                    (0, r.jsx)(p.Dr, {
                        id: "mute",
                        label: D.intl.string(ex ? A.default.s9rCuH : A.default["a+i/As"]),
                        icon: eE,
                        leadingAccessory: { type: "icon", icon: eE },
                        action: () => (0, G.$L)(t, !ex),
                    }),
                    null != es
                        ? (0, r.jsx)(p.Dr, { id: "dismiss", label: D.intl.string(A.default.bWzWw9), action: es })
                        : null,
                ],
            }),
            ez
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          null != ee
                              ? (0, r.jsx)(p.Dr, { id: "export", label: D.intl.string(A.default.WsEEP7), action: ee })
                              : null,
                          eq
                              ? (0, r.jsx)(p.Dr, { id: "import", label: D.intl.string(A.default.rWGY3e), action: en })
                              : null,
                          null != ea
                              ? (0, r.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: D.intl.string(A.default.yOIql5),
                                    action: ea,
                                })
                              : null,
                          eA.map((e) =>
                              (0, r.jsx)(
                                  p.Dr,
                                  {
                                      id: e.id,
                                      label: e.label,
                                      disabled: e.disabled,
                                      dontCloseOnAction: !0,
                                      action: () => {
                                          let t = null == e.connectionType ? null : eD.get(e.connectionType);
                                          null != t && ek(t);
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                          null != eu
                              ? (0, r.jsx)(p.Dr, {
                                    id: "history",
                                    label: D.intl.string(A.default["3hIVou"]),
                                    action: eu,
                                })
                              : null,
                      ],
                  })
                : null,
            eM || v || C.p5 || null != ep
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          eM
                              ? (0, r.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: D.intl.string(A.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = X.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }), (0, Y.qf)((t) => (0, r.jsx)(el, { ...t, ...e })));
                                    },
                                })
                              : null,
                          v
                              ? (0, r.jsx)(p.Dr, {
                                    id: "delete",
                                    label: D.intl.string(D.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = X.Ay.getProject(t);
                                        if (null != e && null != eI)
                                            !(function (e) {
                                                let { project: t, target: n, action: l } = e;
                                                if ("delete" === l) {
                                                    let e = (0, N.zu)(t);
                                                    (0, Y.qf)((l) =>
                                                        (0, r.jsx)(et, {
                                                            ...l,
                                                            project: t,
                                                            target: n,
                                                            otherTargets: e,
                                                        }),
                                                    );
                                                    return;
                                                }
                                                let i = (0, Z.hJ)(t, n);
                                                (0, Y.qf)((e) => (0, r.jsx)(J.A, { ...e, target: i }));
                                            })({ project: e, target: eI, action: "delete" });
                                        else
                                            (0, H.A)({
                                                title: D.intl.formatToPlainString(A.default.CJBhb2, { name: n }),
                                                subtitle: D.intl.string(A.default["0OmrVn"]),
                                                confirmText: D.intl.string(D.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, K.K)(t, () =>
                                                        (0, a.P0)({
                                                            text: D.intl.string(A.default["0XDHob"]),
                                                            variant: "critical",
                                                        }),
                                                    );
                                                },
                                            });
                                    },
                                })
                              : null,
                          C.p5
                              ? (0, r.jsx)(p.Dr, {
                                    id: "copy-project-id",
                                    label: D.intl.string(A.default["nm/zuU"]),
                                    icon: y.IdIcon,
                                    leadingAccessory: { type: "icon", icon: y.IdIcon },
                                    action: () =>
                                        (0, C.C)(t, () =>
                                            (0, a.P0)({ text: D.intl.string(A.default.CmfaZG), variant: "success" }),
                                        ),
                                })
                              : null,
                          null != ep
                              ? (0, r.jsx)(p.sL, {
                                    id: "debug",
                                    label: D.intl.string(A.default.Mt5k9d),
                                    leftIcon: x.BugIcon,
                                    leadingAccessory: { type: "icon", icon: x.BugIcon },
                                    checked: eg,
                                    action: ep,
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
function es(e) {
    let { trigger: t = "header", ...n } = e,
        i = l.useRef(null);
    return (0, r.jsx)(b.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: b.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(eu, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: a } = n;
            return (0, r.jsx)("div", {
                ref: i,
                className: ea.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(w.m, {
                              text: D.intl.string(D.t["UKOtz+"]),
                              children: (0, r.jsx)(v.K, {
                                  icon: j.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": D.intl.string(D.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": a,
                                  onClick: l,
                              }),
                          })
                        : (0, r.jsx)(k.A.Icon, {
                              icon: j.MoreHorizontalIcon,
                              tooltip: D.intl.string(D.t["UKOtz+"]),
                              "aria-label": D.intl.string(D.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": a,
                              selected: a,
                              onClick: l,
                          }),
            });
        },
    });
}
