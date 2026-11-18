n.d(t, { z: () => er, A: () => el });
var r = n(477900),
    l = n(582128),
    i = n(855986),
    a = n(858899),
    o = n(782603),
    u = n(780338),
    c = n(782134),
    s = n(113494),
    d = n(12470),
    f = n(811893),
    h = n(165862),
    p = n(477782),
    g = n(92446),
    m = n(173936),
    y = n(473935),
    x = n(625903),
    b = n(265872),
    w = n(866665),
    v = n(408278),
    j = n(365199),
    k = n(872344),
    S = n(742589),
    C = n(147036),
    I = n(957565),
    _ = n(171691),
    M = n(785389),
    P = n(889558),
    $ = n(860402),
    D = n(191850),
    A = n(792996);
let q = new Set();
var z = n(826058),
    E = n(442331),
    T = n(616334),
    O = n(260498);
n(321073);
var W = n(189714),
    B = n(733791),
    F = n(314116),
    X = n(233470),
    H = n(189213),
    L = n(331322),
    R = n(834730),
    G = n(192308),
    K = n(936508),
    N = n(199267),
    V = n(706935);
function Q(e) {
    let { project: t, target: n, otherTargets: i, ...a } = e,
        [o, u] = l.useState(!1),
        [c, s] = l.useState(null),
        d = (0, B.fI)(n, i),
        f = (0, B.Mi)(n);
    return (0, r.jsx)(H.a, {
        ...a,
        role: "alertdialog",
        title: A.intl.formatToPlainString(D.default.CJBhb2, { name: n.projectName }),
        subtitle: (0, B.J)(n, i),
        notice: null == c ? void 0 : { message: c, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: a.onClose },
            {
                text: A.intl.string(D.default.aC42bN),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (u(!0), s(null));
                        let e = await (0, X.xx)(t.id).catch(() => null);
                        (u(!1), e?.ok !== !0) ? s(A.intl.string(D.default["0XDHob"])) : a.onClose();
                    })().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(L.B, {
            gap: 12,
            children: [
                (0, r.jsx)(V.Ay, { items: d }),
                null != f ? (0, r.jsx)(R.E, { variant: "body-sm/normal", color: "text-muted", children: f }) : null,
            ],
        }),
    });
}
var U = n(587895),
    J = n(664619);
function Y(e) {
    let { project: t, ...n } = e,
        [o, u] = l.useState(!1),
        [c, s] = l.useState(null),
        d = (0, i.bG)([U.A], () => U.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = A.intl.formatToPlainString(D.default.m8KWic, { app: d });
    return (0, r.jsx)(H.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: A.intl.string(D.default.wve4kB),
        "aria-label": f,
        notice: null == c ? void 0 : { message: c, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: A.intl.string(D.default.GqcQyH),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (u(!0), s(null));
                        let e = await (0, J.R_)(t.id);
                        (u(!1), e)
                            ? ((0, a.P0)({
                                  text: A.intl.formatToPlainString(D.default.b8LN7N, { app: d }),
                                  variant: "success",
                              }),
                              n.onClose())
                            : s(A.intl.string(D.default["rE/0SD"]));
                    })().catch(() => {});
                },
            },
        ],
    });
}
var Z = n(746080),
    ee = n(552821);
let et = [];
function en(e) {
    (0, a.P0)({ text: e, variant: "critical" });
}
function er(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: b,
            projectGuildId: w,
            isOwner: v,
            canRemix: j,
            onPublish: S,
            publishLabel: H,
            publishDisabled: L = !1,
            onOpenProjectSettings: R,
            onExport: V,
            onImport: U,
            onRemix: J,
            onConnectTool: ee,
            onHistory: er,
            onDismiss: el,
            onTogglePreviewPaused: ei,
            previewPaused: ea = !1,
            previewPauseDisabled: eo = !1,
            onTogglePopout: eu,
            poppedOut: ec = !1,
            onToggleDebug: es,
            debugOpen: ed = !1,
            refreshApplicationId: ef,
            previewProjectId: eh,
            onCloseMenu: ep,
        } = e,
        eg = (0, W.iI)(t),
        em = (0, _.lQ)(t) && !ea,
        ey = l.useContext(z.bI),
        { pending: ex, refresh: eb } = (0, k.A)(ef ?? null),
        { pending: ew, connect: ev } = (function (e, t) {
            let [n, r] = l.useState(q),
                i = l.useRef(q),
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
                                let r = await (0, $.JI)(e, n.type);
                                (a(n.type), "url" === r.type)
                                    ? (0, P.h)({ href: r.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, M.rq)(r.error)
                                              ? A.intl.string(D.default["jCQ/1B"])
                                              : A.intl.string(D.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(eh ?? null, en),
        ej = (0, i.bG)([E.A], () => (null == eh ? et : E.A.getDeclaredConnections(eh))),
        ek = l.useMemo(() => (0, M.Xl)(ej), [ej]),
        eS = (0, B.Bs)(t),
        eC = (0, B.CU)(t) && v,
        eI = (0, i.bG)(
            [O.Ay],
            () => {
                let e = O.Ay.getProject(t);
                return null != e && (0, O.jf)(e);
            },
            [t],
        ),
        e_ = null != R || v || eI,
        eM = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: r, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: a } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: A.intl.string(D.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            r))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(D.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(D.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != ef, refreshPending: ex, offers: ek, connectPending: ew }),
        eP = l.useMemo(() => new Map(ej.map((e) => [e.type, e])), [ej]),
        e$ = null != J && j,
        eD = v && null != U,
        eA = e$ || null != V || eD || null != ee || null != er,
        eq = I.p5 && null != b,
        ez = I.p5,
        eE = eg ? o.BellIcon : u.BellSlashIcon,
        eT = ea ? c.PlayIcon : s.PauseIcon,
        eO = ec ? d.WindowReturnIcon : f.WindowLaunchIcon;
    return (0, r.jsxs)(h.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": A.intl.string(A.t.ogxXGq),
        onClose: ep,
        onSelect: ep,
        children: [
            null != S
                ? (0, r.jsx)(p.rX, {
                      children: (0, r.jsx)(p.Dr, {
                          id: "publish",
                          label: H ?? A.intl.string(D.default["120EFN"]),
                          disabled: L,
                          action: S,
                      }),
                  })
                : null,
            null != ei || null != eu
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          null != ei
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: eT,
                                    leadingAccessory: { type: "icon", icon: eT },
                                    label: A.intl.string(ea ? D.default.ZKd2Cw : D.default.VHxerm),
                                    subtext: em ? A.intl.string(D.default.WjdaFw) : void 0,
                                    disabled: eo || em,
                                    action: ei,
                                })
                              : null,
                          null != eu
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: eO,
                                    leadingAccessory: { type: "icon", icon: eO },
                                    label: A.intl.string(ec ? A.t["NKV/MO"] : A.t["3Zypbv"]),
                                    subtext: em && !ec ? A.intl.string(D.default.WjdaFw) : void 0,
                                    disabled: em && !ec,
                                    action: eu,
                                })
                              : null,
                      ],
                  })
                : null,
            null != es
                ? (0, r.jsx)(p.rX, {
                      children: (0, r.jsx)(p.sL, {
                          id: "debug",
                          label: A.intl.string(D.default.Mt5k9d),
                          leftIcon: g.BugIcon,
                          leadingAccessory: { type: "icon", icon: g.BugIcon },
                          checked: ed,
                          action: es,
                      }),
                  })
                : null,
            eM.length > 0
                ? (0, r.jsx)(p.rX, {
                      children: eM.map((e) =>
                          (0, r.jsx)(
                              p.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void eb();
                                      let t = null == e.connectionType ? null : eP.get(e.connectionType);
                                      null != t && ev(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, r.jsxs)(p.rX, {
                children: [
                    (0, r.jsx)(p.Dr, {
                        id: "mute",
                        label: A.intl.string(eg ? D.default.s9rCuH : D.default["a+i/As"]),
                        icon: eE,
                        leadingAccessory: { type: "icon", icon: eE },
                        action: () => (0, W.$L)(t, !eg),
                    }),
                    null != el
                        ? (0, r.jsx)(p.Dr, { id: "dismiss", label: A.intl.string(D.default.bWzWw9), action: el })
                        : null,
                ],
            }),
            eA
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          e$
                              ? (0, r.jsx)(p.Dr, { id: "remix", label: A.intl.string(D.default["276ll6"]), action: J })
                              : null,
                          null != V
                              ? (0, r.jsx)(p.Dr, { id: "export", label: A.intl.string(D.default.WsEEP7), action: V })
                              : null,
                          eD
                              ? (0, r.jsx)(p.Dr, { id: "import", label: A.intl.string(D.default.rWGY3e), action: U })
                              : null,
                          null != ee
                              ? (0, r.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: A.intl.string(D.default.yOIql5),
                                    action: ee,
                                })
                              : null,
                          null != er
                              ? (0, r.jsx)(p.Dr, {
                                    id: "history",
                                    label: A.intl.string(D.default["3hIVou"]),
                                    action: er,
                                })
                              : null,
                      ],
                  })
                : null,
            ez
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          eq
                              ? (0, r.jsx)(p.Dr, {
                                    id: "copy-link",
                                    label: A.intl.string(A.t.WqhZss),
                                    icon: m.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: m.LinkIcon },
                                    action: () =>
                                        (0, I.C)((0, C.n)(b, Z.VV.CONJURE, t), () =>
                                            (0, a.P0)({ text: A.intl.string(A.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(p.Dr, {
                              id: "copy-project-id",
                              label: A.intl.string(D.default["nm/zuU"]),
                              icon: y.IdIcon,
                              leadingAccessory: { type: "icon", icon: y.IdIcon },
                              action: () =>
                                  (0, I.C)(t, () =>
                                      (0, a.P0)({ text: A.intl.string(D.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            v || e_
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          e_
                              ? (0, r.jsx)(p.Dr, {
                                    id: "settings",
                                    label: A.intl.string(D.default.FzfmQ8),
                                    icon: x.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: x.SettingsIcon },
                                    action:
                                        R ??
                                        (() =>
                                            (0, T.A)(t, {
                                                guildId: w ?? b,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: ey,
                                            })),
                                })
                              : null,
                          eC
                              ? (0, r.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: A.intl.string(D.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = O.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }), (0, G.qf)((t) => (0, r.jsx)(Y, { ...t, ...e })));
                                    },
                                })
                              : null,
                          v
                              ? (0, r.jsx)(p.Dr, {
                                    id: "delete",
                                    label: A.intl.string(A.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = O.Ay.getProject(t);
                                        if (null != e && null != eS)
                                            !(function (e) {
                                                let { project: t, target: n, action: l } = e;
                                                if ("delete" === l) {
                                                    let e = (0, B.zu)(t);
                                                    (0, G.qf)((l) =>
                                                        (0, r.jsx)(Q, { ...l, project: t, target: n, otherTargets: e }),
                                                    );
                                                    return;
                                                }
                                                let i = (0, K.hJ)(t, n);
                                                (0, G.qf)((e) => (0, r.jsx)(N.A, { ...e, target: i }));
                                            })({ project: e, target: eS, action: "delete" });
                                        else
                                            (0, F.A)({
                                                title: A.intl.formatToPlainString(D.default.CJBhb2, { name: n }),
                                                subtitle: A.intl.string(D.default["0OmrVn"]),
                                                confirmText: A.intl.string(A.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, X.K)(t, () =>
                                                        (0, a.P0)({
                                                            text: A.intl.string(D.default["0XDHob"]),
                                                            variant: "critical",
                                                        }),
                                                    );
                                                },
                                            });
                                    },
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
function el(e) {
    let { trigger: t = "header", ...n } = e,
        i = l.useRef(null);
    return (0, r.jsx)(b.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: b.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(er, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: a } = n;
            return (0, r.jsx)("div", {
                ref: i,
                className: ee.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(w.m, {
                              text: A.intl.string(A.t["UKOtz+"]),
                              children: (0, r.jsx)(v.K, {
                                  icon: j.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": A.intl.string(A.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": a,
                                  onClick: l,
                              }),
                          })
                        : (0, r.jsx)(S.A.Icon, {
                              icon: j.MoreHorizontalIcon,
                              tooltip: A.intl.string(A.t["UKOtz+"]),
                              "aria-label": A.intl.string(A.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": a,
                              selected: a,
                              onClick: l,
                          }),
            });
        },
    });
}
