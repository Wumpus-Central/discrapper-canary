n.d(e, { z: () => td, A: () => tf });
var l = n(477900),
    r = n(582128),
    i = n(855986),
    a = n(858899),
    o = n(782603),
    u = n(780338),
    s = n(782134),
    c = n(113494),
    d = n(12470),
    f = n(811893),
    p = n(165862),
    h = n(477782),
    g = n(92446),
    m = n(173936),
    y = n(473935),
    x = n(625903),
    b = n(664121),
    v = n(265872),
    w = n(866665),
    j = n(408278),
    k = n(365199),
    S = n(872344),
    _ = n(945810),
    A = n(742589),
    P = n(71393),
    I = n(576705),
    C = n(287809),
    D = n(147036),
    M = n(957565),
    T = n(171691),
    E = n(785389),
    q = n(889558),
    $ = n(860402),
    G = n(191850),
    O = n(792996);
let z = new Set();
var B = n(826058),
    L = n(233470),
    F = n(260498),
    W = n(733791),
    R = n(680032),
    N = n(551233),
    U = n(189213),
    V = n(331322),
    H = n(834730),
    X = n(192308),
    K = n(653036);
function Z(t) {
    let { project: e, transitionState: n, onClose: i } = t,
        o = (function (t) {
            let [e, n] = r.useState(!1),
                [l, i] = r.useState(null);
            r.useEffect(() => (0, L.GO)(t.id), [t.id]);
            let a = (0, W.Bs)(t.id),
                [o, u] = r.useState(null),
                s = null == o ? a : o.target,
                c = s?.appName ?? t.name,
                d = r.useMemo(() => (0, R.wJ)(t, s), [t, s]),
                f = r.useCallback(async () => {
                    (n(!0), i(null), u({ target: a }));
                    try {
                        await (0, L.kY)(t.id);
                    } catch {
                        return (i(O.intl.string(G.default["d+wTRF"])), u(null), n(!1), null);
                    }
                    n(!1);
                    let e = F.Ay.getIntegrationStatus(t.id)?.owner_authorization_revoked === !0;
                    return O.intl.formatToPlainString(e ? G.default.tOu7uv : G.default.TWYUzf, { app: c });
                }, [c, a, t.id]);
            return {
                appName: c,
                rows: d,
                keptChannels: null == s ? null : (0, W.Mi)(s),
                pending: e,
                error: l,
                submit: f,
            };
        })(e),
        { appName: u, rows: s, keptChannels: c, pending: d, error: f } = o;
    return (0, l.jsx)(U.a, {
        transitionState: n,
        onClose: i,
        role: "alertdialog",
        title: O.intl.formatToPlainString(G.default.cAxBIL, { app: u }),
        size: "sm",
        notice: null == f ? void 0 : { type: "critical", message: f, role: "alert" },
        actions: [
            { text: O.intl.string(O.t["ETE/oC"]), variant: "secondary", onClick: i, disabled: d },
            {
                text: O.intl.string(G.default.VAb6aE),
                variant: "critical-primary",
                onClick: async function () {
                    let t = await o.submit();
                    null != t && ((0, a.P0)({ text: t, variant: "success" }), i());
                },
                loading: d,
                disabled: d,
            },
        ],
        children: (0, l.jsxs)(V.B, {
            gap: 12,
            children: [
                (0, l.jsx)(K.A, { rows: s }),
                null != c ? (0, l.jsx)(H.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            ],
        }),
    });
}
var Q = n(691885);
function Y(t) {
    let { projectId: e, guildId: n, transitionState: o, onClose: u } = t,
        s = (0, i.bG)([F.Ay], () => F.Ay.getProject(e), [e]),
        c = s?.name ?? "",
        d = (0, N.A)(e, n, null, !0),
        { guilds: f, guild: p, sharing: h, error: g } = d,
        m = r.useMemo(() => f.map((t) => ({ id: t.id, value: t.id, label: t.name })), [f]);
    return (0, l.jsx)(U.a, {
        transitionState: o,
        onClose: u,
        title: O.intl.formatToPlainString(G.default["Aet9+Z"], { app: c }),
        size: "sm",
        notice: null != g ? { type: "critical", message: g, role: "alert" } : void 0,
        actions: [
            { text: O.intl.string(O.t["ETE/oC"]), variant: "secondary", onClick: u, disabled: h },
            {
                text: O.intl.string(G.default["+uQwxA"]),
                variant: "primary",
                onClick: async function () {
                    (await d.share()).shared &&
                        (u(),
                        (0, a.P0)({
                            text: O.intl.formatToPlainString(G.default["4WtS+v"], { app: c, server: p?.name ?? "" }),
                            variant: "success",
                        }));
                },
                loading: h,
                disabled: null == p || h,
            },
        ],
        children: (0, l.jsxs)(V.B, {
            gap: 16,
            children: [
                null != p
                    ? (0, l.jsx)(Q.l, {
                          label: O.intl.string(G.default.Uq5hU9),
                          options: m,
                          value: p.id,
                          onSelectionChange: d.pickGuild,
                          selectionMode: "single",
                          disabled: h,
                          fullWidth: !0,
                      })
                    : null,
                (0, l.jsx)(K.A, { rows: (0, R._i)(s ?? null) }),
                (0, l.jsx)(H.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: O.intl.string(G.default.Ewprwt),
                }),
            ],
        }),
    });
}
var J = n(442331),
    tt = n(616334);
n(321073);
var te = n(189714),
    tn = n(314116),
    tl = n(167483),
    tr = n(587895),
    ti = n(664619);
function ta(t) {
    let { project: e, ...n } = t,
        [o, u] = r.useState(!1),
        [s, c] = r.useState(null),
        d = (0, i.bG)([tr.A], () => tr.A.getApplication(e.application_id)?.name ?? e.name, [e.application_id, e.name]),
        f = O.intl.formatToPlainString(G.default.m8KWic, { app: d });
    return (0, l.jsx)(U.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: O.intl.string(G.default.wve4kB),
        "aria-label": f,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: O.intl.string(O.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: O.intl.string(G.default.GqcQyH),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (u(!0), c(null));
                        let t = await (0, ti.R_)(e.id);
                        (u(!1), t)
                            ? ((0, a.P0)({
                                  text: O.intl.formatToPlainString(G.default.b8LN7N, { app: d }),
                                  variant: "success",
                              }),
                              n.onClose())
                            : c(O.intl.string(G.default["rE/0SD"]));
                    })().catch(() => {});
                },
            },
        ],
    });
}
var to = n(746080),
    tu = n(552821);
let ts = [];
function tc(t) {
    (0, a.P0)({ text: t, variant: "critical" });
}
function td(t) {
    let {
            projectId: e,
            projectName: n,
            guildId: v,
            projectGuildId: w,
            isOwner: j,
            canRemix: k,
            onPublish: A,
            publishLabel: R,
            publishDisabled: U = !1,
            onOpenProjectSettings: V,
            onExport: H,
            onImport: K,
            onRemix: Q,
            onConnectTool: tr,
            onHistory: ti,
            onDismiss: tu,
            onTogglePreviewPaused: td,
            previewPaused: tf = !1,
            previewPauseDisabled: tp = !1,
            onTogglePopout: th,
            poppedOut: tg = !1,
            onToggleDebug: tm,
            debugOpen: ty = !1,
            refreshApplicationId: tx,
            previewProjectId: tb,
            onCloseMenu: tv,
        } = t,
        tw = (0, te.iI)(e),
        tj = (0, T.lQ)(e) && !tf,
        tk = r.useContext(B.bI),
        { pending: tS, refresh: t_ } = (0, S.A)(tx ?? null),
        { pending: tA, connect: tP } = (function (t, e) {
            let [n, l] = r.useState(z),
                i = r.useRef(z),
                a = r.useCallback((t) => {
                    ((i.current = (0, E.Q6)(i.current, t)), l(i.current));
                }, []);
            return {
                pending: n,
                connect: r.useCallback(
                    (n) => {
                        if (null == t) return;
                        let r = (0, E.K9)(i.current, n.type);
                        null != r &&
                            ((i.current = r),
                            l(r),
                            (async function () {
                                let l = await (0, $.JI)(t, n.type);
                                (a(n.type), "url" === l.type)
                                    ? (0, q.h)({ href: l.url, trusted: !1 })
                                    : e(
                                          "setup" === (0, E.rq)(l.error)
                                              ? O.intl.string(G.default["jCQ/1B"])
                                              : O.intl.string(G.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [e, t, a],
                ),
            };
        })(tb ?? null, tc),
        tI = (0, i.bG)([J.A], () => (null == tb ? ts : J.A.getDeclaredConnections(tb))),
        tC = r.useMemo(() => (0, E.Xl)(tI), [tI]),
        tD = (0, W.Bs)(e),
        tM = (0, W.dw)(e, v),
        tT = null != tM && (0, W.dy)(tM, j),
        tE = (0, W.CU)(e) && j,
        tq = (0, i.bG)(
            [F.Ay],
            () => {
                let t = F.Ay.getProject(e);
                return null != t && (0, F.jf)(t);
            },
            [e],
        ),
        t$ = (0, i.bG)(
            [F.Ay],
            () => {
                var t;
                let n = F.Ay.getProject(e);
                return null != n && "guild" === (t = n).install_scope && (0, F.PV)(t);
            },
            [e],
        ),
        tG = (0, i.bG)(
            [F.Ay, C.default, P.A, I.A, _.Bt],
            () => {
                let t = F.Ay.getProject(e);
                return null != t && (0, N.i)(t, tD, "ConjureProjectActionMenu");
            },
            [e, tD],
        ),
        tO = null != V || j || tq,
        tz = (function (t) {
            let { canRefresh: e, refreshPending: n, offers: l, connectPending: r } = t,
                i = [];
            for (let { connection: t, offer: a } of (e &&
                i.push({
                    id: "preview-refresh",
                    label: O.intl.string(G.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${t.type}`,
                              label: O.intl.formatToPlainString(G.default.DEwmI5, { label: t.label }),
                              kind: "connect",
                              connectionType: t.type,
                              disabled: r.has(t.type),
                          }
                        : {
                              id: `preview-connect-${t.type}`,
                              label: O.intl.formatToPlainString(G.default.GnHcWc, { label: t.label }),
                              kind: "connect",
                              connectionType: t.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != tx, refreshPending: tS, offers: tC, connectPending: tA }),
        tB = r.useMemo(() => new Map(tI.map((t) => [t.type, t])), [tI]),
        tL = null != Q && k,
        tF = j && null != K,
        tW = tL || null != H || tF || null != tr || null != ti,
        tR = M.p5 && null != v,
        tN = M.p5,
        tU = tw ? o.BellIcon : u.BellSlashIcon,
        tV = tf ? s.PlayIcon : c.PauseIcon,
        tH = tg ? d.WindowReturnIcon : f.WindowLaunchIcon;
    return (0, l.jsxs)(p.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${e}`,
        "aria-label": O.intl.string(O.t.ogxXGq),
        onClose: tv,
        onSelect: tv,
        children: [
            null != A
                ? (0, l.jsx)(h.rX, {
                      children: (0, l.jsx)(h.Dr, {
                          id: "publish",
                          label: R ?? O.intl.string(G.default["120EFN"]),
                          disabled: U,
                          action: A,
                      }),
                  })
                : null,
            null != td || null != th
                ? (0, l.jsxs)(h.rX, {
                      children: [
                          null != td
                              ? (0, l.jsx)(h.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: tV,
                                    leadingAccessory: { type: "icon", icon: tV },
                                    label: O.intl.string(tf ? G.default.ZKd2Cw : G.default.VHxerm),
                                    subtext: tj ? O.intl.string(G.default.WjdaFw) : void 0,
                                    disabled: tp || tj,
                                    action: td,
                                })
                              : null,
                          null != th
                              ? (0, l.jsx)(h.Dr, {
                                    id: "toggle-popout",
                                    icon: tH,
                                    leadingAccessory: { type: "icon", icon: tH },
                                    label: O.intl.string(tg ? O.t["NKV/MO"] : O.t["3Zypbv"]),
                                    subtext: tj && !tg ? O.intl.string(G.default.WjdaFw) : void 0,
                                    disabled: tj && !tg,
                                    action: th,
                                })
                              : null,
                      ],
                  })
                : null,
            null != tm
                ? (0, l.jsx)(h.rX, {
                      children: (0, l.jsx)(h.sL, {
                          id: "debug",
                          label: O.intl.string(G.default.Mt5k9d),
                          leftIcon: g.BugIcon,
                          leadingAccessory: { type: "icon", icon: g.BugIcon },
                          checked: ty,
                          action: tm,
                      }),
                  })
                : null,
            tz.length > 0
                ? (0, l.jsx)(h.rX, {
                      children: tz.map((t) =>
                          (0, l.jsx)(
                              h.Dr,
                              {
                                  id: t.id,
                                  label: t.label,
                                  disabled: t.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === t.kind) return void t_();
                                      let e = null == t.connectionType ? null : tB.get(t.connectionType);
                                      null != e && tP(e);
                                  },
                              },
                              t.id,
                          ),
                      ),
                  })
                : null,
            (0, l.jsxs)(h.rX, {
                children: [
                    (0, l.jsx)(h.Dr, {
                        id: "mute",
                        label: O.intl.string(tw ? G.default.s9rCuH : G.default["a+i/As"]),
                        icon: tU,
                        leadingAccessory: { type: "icon", icon: tU },
                        action: () => (0, te.$L)(e, !tw),
                    }),
                    null != tu
                        ? (0, l.jsx)(h.Dr, { id: "dismiss", label: O.intl.string(G.default.bWzWw9), action: tu })
                        : null,
                ],
            }),
            tW
                ? (0, l.jsxs)(h.rX, {
                      children: [
                          tL
                              ? (0, l.jsx)(h.Dr, { id: "remix", label: O.intl.string(G.default["276ll6"]), action: Q })
                              : null,
                          null != H
                              ? (0, l.jsx)(h.Dr, { id: "export", label: O.intl.string(G.default.WsEEP7), action: H })
                              : null,
                          tF
                              ? (0, l.jsx)(h.Dr, { id: "import", label: O.intl.string(G.default.rWGY3e), action: K })
                              : null,
                          null != tr
                              ? (0, l.jsx)(h.Dr, {
                                    id: "connect-tool",
                                    label: O.intl.string(G.default.yOIql5),
                                    action: tr,
                                })
                              : null,
                          null != ti
                              ? (0, l.jsx)(h.Dr, {
                                    id: "history",
                                    label: O.intl.string(G.default["3hIVou"]),
                                    action: ti,
                                })
                              : null,
                      ],
                  })
                : null,
            tN
                ? (0, l.jsxs)(h.rX, {
                      children: [
                          tR
                              ? (0, l.jsx)(h.Dr, {
                                    id: "copy-link",
                                    label: O.intl.string(O.t.WqhZss),
                                    icon: m.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: m.LinkIcon },
                                    action: () =>
                                        (0, M.C)((0, D.n)(v, to.VV.CONJURE, e), () =>
                                            (0, a.P0)({ text: O.intl.string(O.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, l.jsx)(h.Dr, {
                              id: "copy-project-id",
                              label: O.intl.string(G.default["nm/zuU"]),
                              icon: y.IdIcon,
                              leadingAccessory: { type: "icon", icon: y.IdIcon },
                              action: () =>
                                  (0, M.C)(e, () =>
                                      (0, a.P0)({ text: O.intl.string(G.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            j || tO || tT
                ? (0, l.jsxs)(h.rX, {
                      children: [
                          tO
                              ? (0, l.jsx)(h.Dr, {
                                    id: "settings",
                                    label: O.intl.string(G.default.FzfmQ8),
                                    icon: x.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: x.SettingsIcon },
                                    action:
                                        V ??
                                        (() =>
                                            (0, tt.A)(e, {
                                                guildId: w ?? v,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: tk,
                                            })),
                                })
                              : null,
                          tG
                              ? (0, l.jsx)(h.Dr, {
                                    id: "add-to-another-server",
                                    label: O.intl.string(G.default.RBPj0b),
                                    icon: b.ServerIcon,
                                    leadingAccessory: { type: "icon", icon: b.ServerIcon },
                                    action: () => {
                                        var t;
                                        return (
                                            (t = { projectId: e, guildId: v }),
                                            void (0, X.qf)((e) => (0, l.jsx)(Y, { ...e, ...t }))
                                        );
                                    },
                                })
                              : null,
                          tT
                              ? (0, l.jsx)(h.Dr, {
                                    id: "remove-from-server",
                                    label: O.intl.formatToPlainString(G.default["3gKG2j"], { server: tM.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let t = F.Ay.getProject(e);
                                        null != t && (0, tl.A)({ project: t, target: tM, action: "remove" });
                                    },
                                })
                              : null,
                          t$ && !tT
                              ? (0, l.jsx)(h.Dr, {
                                    id: "make-personal",
                                    label: O.intl.string(G.default.jNGawP),
                                    color: "danger",
                                    action: () => {
                                        var t;
                                        let n = F.Ay.getProject(e);
                                        null != n &&
                                            ((t = { project: n }), (0, X.qf)((e) => (0, l.jsx)(Z, { ...e, ...t })));
                                    },
                                })
                              : null,
                          tE
                              ? (0, l.jsx)(h.Dr, {
                                    id: "unpublish",
                                    label: O.intl.string(G.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var t;
                                        let n = F.Ay.getProject(e);
                                        null != n &&
                                            ((t = { project: n }), (0, X.qf)((e) => (0, l.jsx)(ta, { ...e, ...t })));
                                    },
                                })
                              : null,
                          j
                              ? (0, l.jsx)(h.Dr, {
                                    id: "delete",
                                    label: O.intl.string(O.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let t = F.Ay.getProject(e);
                                        if (null != t && null != tD)
                                            (0, tl.A)({ project: t, target: tD, action: "delete" });
                                        else
                                            (0, tn.A)({
                                                title: O.intl.formatToPlainString(G.default.CJBhb2, { name: n }),
                                                subtitle: O.intl.string(G.default["0OmrVn"]),
                                                confirmText: O.intl.string(O.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, L.K)(e, () =>
                                                        (0, a.P0)({
                                                            text: O.intl.string(G.default["0XDHob"]),
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
function tf(t) {
    let { trigger: e = "header", ...n } = t,
        i = r.useRef(null);
    return (0, l.jsx)(v.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: v.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return (0, l.jsx)(td, { ...n, onCloseMenu: e });
        },
        children: (t, n) => {
            let { onClick: r } = t,
                { isShown: a } = n;
            return (0, l.jsx)("div", {
                ref: i,
                className: tu.h,
                children:
                    "iconButton" === e
                        ? (0, l.jsx)(w.m, {
                              text: O.intl.string(O.t["UKOtz+"]),
                              children: (0, l.jsx)(j.K, {
                                  icon: k.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": O.intl.string(O.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": a,
                                  onClick: r,
                              }),
                          })
                        : (0, l.jsx)(A.A.Icon, {
                              icon: k.MoreHorizontalIcon,
                              tooltip: O.intl.string(O.t["UKOtz+"]),
                              "aria-label": O.intl.string(O.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": a,
                              selected: a,
                              onClick: r,
                          }),
            });
        },
    });
}
