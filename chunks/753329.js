n.d(e, { z: () => tr, A: () => tl });
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
    g = n(625903),
    m = n(173936),
    y = n(473935),
    x = n(92446),
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
function Q(t) {
    let { project: e, target: n, otherTargets: i, ...a } = t,
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
                        let t = await (0, X.xx)(e.id).catch(() => null);
                        (u(!1), t?.ok !== !0) ? s(A.intl.string(D.default["0XDHob"])) : a.onClose();
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
function Y(t) {
    let { project: e, ...n } = t,
        [o, u] = l.useState(!1),
        [c, s] = l.useState(null),
        d = (0, i.bG)([U.A], () => U.A.getApplication(e.application_id)?.name ?? e.name, [e.application_id, e.name]),
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
                        let t = await (0, J.R_)(e.id);
                        (u(!1), t)
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
    tt = n(552821);
let te = [];
function tn(t) {
    (0, a.P0)({ text: t, variant: "critical" });
}
function tr(t) {
    let {
            projectId: e,
            projectName: n,
            guildId: b,
            projectGuildId: w,
            isOwner: v,
            canRemix: j,
            onPublish: S,
            publishLabel: H,
            publishDisabled: L = !1,
            hideProjectSettings: R = !1,
            onExport: V,
            onImport: U,
            onRemix: J,
            onConnectTool: tt,
            onHistory: tr,
            onDismiss: tl,
            onTogglePreviewPaused: ti,
            previewPaused: ta = !1,
            previewPauseDisabled: to = !1,
            onTogglePopout: tu,
            poppedOut: tc = !1,
            onToggleDebug: ts,
            debugOpen: td = !1,
            refreshApplicationId: tf,
            previewProjectId: th,
            onCloseMenu: tp,
        } = t,
        tg = (0, W.iI)(e),
        tm = (0, _.lQ)(e) && !ta,
        ty = l.useContext(z.bI),
        { pending: tx, refresh: tb } = (0, k.A)(tf ?? null),
        { pending: tw, connect: tv } = (function (t, e) {
            let [n, r] = l.useState(q),
                i = l.useRef(q),
                a = l.useCallback((t) => {
                    ((i.current = (0, M.Q6)(i.current, t)), r(i.current));
                }, []);
            return {
                pending: n,
                connect: l.useCallback(
                    (n) => {
                        if (null == t) return;
                        let l = (0, M.K9)(i.current, n.type);
                        null != l &&
                            ((i.current = l),
                            r(l),
                            (async function () {
                                let r = await (0, $.JI)(t, n.type);
                                (a(n.type), "url" === r.type)
                                    ? (0, P.h)({ href: r.url, trusted: !1 })
                                    : e(
                                          "setup" === (0, M.rq)(r.error)
                                              ? A.intl.string(D.default["jCQ/1B"])
                                              : A.intl.string(D.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [e, t, a],
                ),
            };
        })(th ?? null, tn),
        tj = (0, i.bG)([E.A], () => (null == th ? te : E.A.getDeclaredConnections(th))),
        tk = l.useMemo(() => (0, M.Xl)(tj), [tj]),
        tS = (0, B.Bs)(e),
        tC = (0, B.CU)(e) && v,
        tI = (0, i.bG)(
            [O.Ay],
            () => {
                let t = O.Ay.getProject(e);
                return null != t && (0, O.jf)(t);
            },
            [e],
        ),
        t_ = !R && (v || tI),
        tM = (function (t) {
            let { canRefresh: e, refreshPending: n, offers: r, connectPending: l } = t,
                i = [];
            for (let { connection: t, offer: a } of (e &&
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
                              id: `preview-connect-${t.type}`,
                              label: A.intl.formatToPlainString(D.default.DEwmI5, { label: t.label }),
                              kind: "connect",
                              connectionType: t.type,
                              disabled: l.has(t.type),
                          }
                        : {
                              id: `preview-connect-${t.type}`,
                              label: A.intl.formatToPlainString(D.default.GnHcWc, { label: t.label }),
                              kind: "connect",
                              connectionType: t.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != tf, refreshPending: tx, offers: tk, connectPending: tw }),
        tP = l.useMemo(() => new Map(tj.map((t) => [t.type, t])), [tj]),
        t$ = null != J && j,
        tD = v && null != U,
        tA = I.p5 && null != b,
        tq = null != V || tD || null != tt || tM.length > 0 || null != tr,
        tz = tg ? o.BellIcon : u.BellSlashIcon,
        tE = ta ? c.PlayIcon : s.PauseIcon,
        tT = tc ? d.WindowReturnIcon : f.WindowLaunchIcon;
    return (0, r.jsxs)(h.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${e}`,
        "aria-label": A.intl.string(A.t.ogxXGq),
        onClose: tp,
        onSelect: tp,
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
            t$ || t_
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          t$
                              ? (0, r.jsx)(p.Dr, { id: "remix", label: A.intl.string(D.default["276ll6"]), action: J })
                              : null,
                          t_
                              ? (0, r.jsx)(p.Dr, {
                                    id: "settings",
                                    label: A.intl.string(D.default.FzfmQ8),
                                    icon: g.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: g.SettingsIcon },
                                    action: () =>
                                        (0, T.A)(e, {
                                            guildId: w ?? b,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: ty,
                                        }),
                                })
                              : null,
                      ],
                  })
                : null,
            null != ti || null != tu || tA
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          null != ti
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: tE,
                                    leadingAccessory: { type: "icon", icon: tE },
                                    label: A.intl.string(ta ? D.default.ZKd2Cw : D.default.VHxerm),
                                    subtext: tm ? A.intl.string(D.default.WjdaFw) : void 0,
                                    disabled: to || tm,
                                    action: ti,
                                })
                              : null,
                          null != tu
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: tT,
                                    leadingAccessory: { type: "icon", icon: tT },
                                    label: A.intl.string(tc ? A.t["NKV/MO"] : A.t["3Zypbv"]),
                                    subtext: tm && !tc ? A.intl.string(D.default.WjdaFw) : void 0,
                                    disabled: tm && !tc,
                                    action: tu,
                                })
                              : null,
                          tA
                              ? (0, r.jsx)(p.Dr, {
                                    id: "copy-link",
                                    label: A.intl.string(A.t.WqhZss),
                                    icon: m.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: m.LinkIcon },
                                    action: () =>
                                        (0, I.C)((0, C.n)(b, Z.VV.CONJURE, e), () =>
                                            (0, a.P0)({ text: A.intl.string(A.t["L/PwZf"]), variant: "success" }),
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
                        label: A.intl.string(tg ? D.default.s9rCuH : D.default["a+i/As"]),
                        icon: tz,
                        leadingAccessory: { type: "icon", icon: tz },
                        action: () => (0, W.$L)(e, !tg),
                    }),
                    null != tl
                        ? (0, r.jsx)(p.Dr, { id: "dismiss", label: A.intl.string(D.default.bWzWw9), action: tl })
                        : null,
                ],
            }),
            tq
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          null != V
                              ? (0, r.jsx)(p.Dr, { id: "export", label: A.intl.string(D.default.WsEEP7), action: V })
                              : null,
                          tD
                              ? (0, r.jsx)(p.Dr, { id: "import", label: A.intl.string(D.default.rWGY3e), action: U })
                              : null,
                          null != tt
                              ? (0, r.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: A.intl.string(D.default.yOIql5),
                                    action: tt,
                                })
                              : null,
                          tM.map((t) =>
                              (0, r.jsx)(
                                  p.Dr,
                                  {
                                      id: t.id,
                                      label: t.label,
                                      disabled: t.disabled,
                                      dontCloseOnAction: !0,
                                      action: () => {
                                          if ("refresh" === t.kind) return void tb();
                                          let e = null == t.connectionType ? null : tP.get(t.connectionType);
                                          null != e && tv(e);
                                      },
                                  },
                                  t.id,
                              ),
                          ),
                          null != tr
                              ? (0, r.jsx)(p.Dr, {
                                    id: "history",
                                    label: A.intl.string(D.default["3hIVou"]),
                                    action: tr,
                                })
                              : null,
                      ],
                  })
                : null,
            tC || v || I.p5 || null != ts
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          tC
                              ? (0, r.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: A.intl.string(D.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var t;
                                        let n = O.Ay.getProject(e);
                                        null != n &&
                                            ((t = { project: n }), (0, G.qf)((e) => (0, r.jsx)(Y, { ...e, ...t })));
                                    },
                                })
                              : null,
                          v
                              ? (0, r.jsx)(p.Dr, {
                                    id: "delete",
                                    label: A.intl.string(A.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let t = O.Ay.getProject(e);
                                        if (null != t && null != tS)
                                            !(function (t) {
                                                let { project: e, target: n, action: l } = t;
                                                if ("delete" === l) {
                                                    let t = (0, B.zu)(e);
                                                    (0, G.qf)((l) =>
                                                        (0, r.jsx)(Q, { ...l, project: e, target: n, otherTargets: t }),
                                                    );
                                                    return;
                                                }
                                                let i = (0, K.hJ)(e, n);
                                                (0, G.qf)((t) => (0, r.jsx)(N.A, { ...t, target: i }));
                                            })({ project: t, target: tS, action: "delete" });
                                        else
                                            (0, F.A)({
                                                title: A.intl.formatToPlainString(D.default.CJBhb2, { name: n }),
                                                subtitle: A.intl.string(D.default["0OmrVn"]),
                                                confirmText: A.intl.string(A.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, X.K)(e, () =>
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
                          I.p5
                              ? (0, r.jsx)(p.Dr, {
                                    id: "copy-project-id",
                                    label: A.intl.string(D.default["nm/zuU"]),
                                    icon: y.IdIcon,
                                    leadingAccessory: { type: "icon", icon: y.IdIcon },
                                    action: () =>
                                        (0, I.C)(e, () =>
                                            (0, a.P0)({ text: A.intl.string(D.default.CmfaZG), variant: "success" }),
                                        ),
                                })
                              : null,
                          null != ts
                              ? (0, r.jsx)(p.sL, {
                                    id: "debug",
                                    label: A.intl.string(D.default.Mt5k9d),
                                    leftIcon: x.BugIcon,
                                    leadingAccessory: { type: "icon", icon: x.BugIcon },
                                    checked: td,
                                    action: ts,
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
function tl(t) {
    let { trigger: e = "header", ...n } = t,
        i = l.useRef(null);
    return (0, r.jsx)(b.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: b.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return (0, r.jsx)(tr, { ...n, onCloseMenu: e });
        },
        children: (t, n) => {
            let { onClick: l } = t,
                { isShown: a } = n;
            return (0, r.jsx)("div", {
                ref: i,
                className: tt.h,
                children:
                    "iconButton" === e
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
