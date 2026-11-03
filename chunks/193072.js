n.d(t, { A: () => el, z: () => en });
var l = n(477900),
    r = n(582128),
    a = n(17928),
    i = n(858899),
    s = n(782603),
    u = n(780338),
    o = n(782134),
    c = n(113494),
    d = n(12470),
    f = n(811893),
    h = n(980707),
    m = n(477782),
    p = n(92446),
    g = n(173936),
    x = n(473935),
    y = n(625903),
    k = n(265872),
    b = n(866665),
    v = n(408278),
    j = n(365199),
    w = n(7437),
    _ = n(742589),
    S = n(147036),
    C = n(957565),
    A = n(171691),
    P = n(785389),
    M = n(123917),
    I = n(860402),
    N = n(809526),
    E = n(105292);
let $ = new Set();
var D = n(79733),
    T = n(442331),
    z = n(616334),
    B = n(260498);
n(321073);
var F = n(189714),
    K = n(733791),
    q = n(314116),
    W = n(371169),
    L = n(189213),
    O = n(331322),
    G = n(834730),
    H = n(192308),
    R = n(664619),
    X = n(706935);
function Q(e) {
    let { project: t, target: n, action: a, ...s } = e,
        [u, o] = r.useState(n.canRemovePreviewBot),
        [c, d] = r.useState(!1),
        [f, h] = r.useState(null),
        m = "delete" === a,
        p = m ? (0, K.fI)(n) : (0, K.Kd)(n),
        g = m ? null : (0, K.L4)(n),
        x = (0, K.Mi)(n),
        y = m
            ? E.intl.formatToPlainString(N.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(N.default.x6FvsZ, { app: n.appName });
    async function k() {
        (d(!0), h(null));
        let e = m ? (0, W.xx)(t.id) : (0, R.YI)(t.id, { alsoRemovePreviewBot: u }),
            l = await e.catch(() => null);
        (d(!1), l?.ok !== !0)
            ? h(E.intl.string(m ? N.default["0XDHob"] : N.default.PJ2Fkn))
            : (m || (0, i.P0)({ text: (0, K.p_)(n), variant: "success" }), s.onClose());
    }
    return (0, l.jsx)(L.a, {
        ...s,
        role: "alertdialog",
        title: m ? y : (0, K.WX)((0, X.tb)(N.default.x6FvsZ, n.appName)),
        subtitle: m ? (0, K.J)(n) : E.intl.string(N.default["8OKM1N"]),
        "aria-label": y,
        notice: null == f ? void 0 : { message: f, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: s.onClose },
            {
                text: E.intl.string(m ? N.default.aC42bN : N.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    k().catch(() => {});
                },
            },
        ],
        children: (0, l.jsxs)(O.B, {
            gap: 12,
            children: [
                p.length > 0 || null != g
                    ? (0, l.jsx)(X.Ay, {
                          items: p,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: u, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != x ? (0, l.jsx)(G.E, { variant: "text-sm/normal", color: "text-muted", children: x }) : null,
            ],
        }),
    });
}
function V(e) {
    (0, H.openModal)((t) => (0, l.jsx)(Q, { ...t, ...e }));
}
var Z = n(587895);
function J(e) {
    let { project: t, ...n } = e,
        [s, u] = r.useState(!1),
        [o, c] = r.useState(null),
        d = (0, a.bG)([Z.A], () => Z.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = E.intl.formatToPlainString(N.default.m8KWic, { app: d });
    async function h() {
        (u(!0), c(null));
        let e = await (0, R.R_)(t.id);
        (u(!1), e)
            ? ((0, i.P0)({ text: E.intl.formatToPlainString(N.default.b8LN7N, { app: d }), variant: "success" }),
              n.onClose())
            : c(E.intl.string(N.default["rE/0SD"]));
    }
    return (0, l.jsx)(L.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: E.intl.string(N.default.wve4kB),
        "aria-label": f,
        notice: null == o ? void 0 : { message: o, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: E.intl.string(N.default.GqcQyH),
                variant: "critical-primary",
                loading: s,
                disabled: s,
                onClick: () => {
                    h().catch(() => {});
                },
            },
        ],
    });
}
var U = n(746080),
    Y = n(552821);
let ee = [];
function et(e) {
    (0, i.P0)({ text: e, variant: "critical" });
}
function en(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: k,
            projectGuildId: b,
            isOwner: v,
            canRemix: j,
            onOpenProjectSettings: _,
            onExport: L,
            onImport: O,
            onRemix: G,
            onConnectTool: R,
            onHistory: X,
            onTogglePreviewPaused: Q,
            previewPaused: Z = !1,
            previewPauseDisabled: Y = !1,
            onTogglePopout: en,
            poppedOut: el = !1,
            onToggleDebug: er,
            debugOpen: ea = !1,
            refreshApplicationId: ei,
            previewProjectId: es,
            onCloseMenu: eu,
        } = e,
        eo = (0, F.iI)(t),
        ec = (0, A.lQ)(t) && !Z,
        ed = r.useContext(D.bI),
        { pending: ef, refresh: eh } = (0, w.A)(ei ?? null),
        { pending: em, connect: ep } = (function (e, t) {
            let [n, l] = r.useState($),
                a = r.useRef($),
                i = r.useCallback((e) => {
                    ((a.current = (0, P.Q6)(a.current, e)), l(a.current));
                }, []);
            return {
                pending: n,
                connect: r.useCallback(
                    (n) => {
                        if (null == e) return;
                        let r = (0, P.K9)(a.current, n.type);
                        async function s() {
                            let l = await (0, I.JI)(e, n.type);
                            (i(n.type), "url" === l.type)
                                ? (0, M.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, P.rq)(l.error)
                                          ? E.intl.string(N.default["jCQ/1B"])
                                          : E.intl.string(N.default.POxkSh),
                                  );
                        }
                        null != r && ((a.current = r), l(r), s().catch(() => i(n.type)));
                    },
                    [t, e, i],
                ),
            };
        })(es ?? null, et),
        eg = (0, a.bG)([T.A], () => (null == es ? ee : T.A.getDeclaredConnections(es))),
        ex = r.useMemo(() => (0, P.Xl)(eg), [eg]),
        ey = (0, K.Bs)(t),
        ek = (0, K.CU)(t) && v,
        eb = (0, a.bG)(
            [B.Ay],
            () => {
                let e = B.Ay.getProject(t);
                return null != e && (0, B.jf)(e);
            },
            [t],
        ),
        ev = null != _ || v || eb,
        ej = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: E.intl.string(N.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: E.intl.formatToPlainString(N.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: E.intl.formatToPlainString(N.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != ei, refreshPending: ef, offers: ex, connectPending: em }),
        ew = r.useMemo(() => new Map(eg.map((e) => [e.type, e])), [eg]),
        e_ = null != G && j,
        eS = v && null != O,
        eC = e_ || null != L || eS || null != R || null != X,
        eA = C.p5 && null != k,
        eP = C.p5,
        eM = eo ? s.BellIcon : u.BellSlashIcon,
        eI = Z ? o.PlayIcon : c.PauseIcon,
        eN = el ? d._ : f.t;
    return (0, l.jsxs)(h.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: eu,
        onSelect: eu,
        children: [
            null != Q || null != en
                ? (0, l.jsxs)(m.rX, {
                      children: [
                          null != Q
                              ? (0, l.jsx)(m.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: eI,
                                    leadingAccessory: { type: "icon", icon: eI },
                                    label: E.intl.string(Z ? N.default.ZKd2Cw : N.default.VHxerm),
                                    subtext: ec ? E.intl.string(N.default.WjdaFw) : void 0,
                                    disabled: Y || ec,
                                    action: Q,
                                })
                              : null,
                          null != en
                              ? (0, l.jsx)(m.Dr, {
                                    id: "toggle-popout",
                                    icon: eN,
                                    leadingAccessory: { type: "icon", icon: eN },
                                    label: E.intl.string(el ? E.t["NKV/MO"] : E.t["3Zypbv"]),
                                    action: en,
                                })
                              : null,
                      ],
                  })
                : null,
            null != er
                ? (0, l.jsx)(m.rX, {
                      children: (0, l.jsx)(m.sL, {
                          id: "debug",
                          label: E.intl.string(N.default.Mt5k9d),
                          leftIcon: p.BugIcon,
                          leadingAccessory: { type: "icon", icon: p.BugIcon },
                          checked: ea,
                          action: er,
                      }),
                  })
                : null,
            ej.length > 0
                ? (0, l.jsx)(m.rX, {
                      children: ej.map((e) =>
                          (0, l.jsx)(
                              m.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void eh();
                                      let t = null == e.connectionType ? null : ew.get(e.connectionType);
                                      null != t && ep(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, l.jsx)(m.rX, {
                children: (0, l.jsx)(m.Dr, {
                    id: "mute",
                    label: E.intl.string(eo ? N.default.s9rCuH : N.default["a+i/As"]),
                    icon: eM,
                    leadingAccessory: { type: "icon", icon: eM },
                    action: () => (0, F.$L)(t, !eo),
                }),
            }),
            eC
                ? (0, l.jsxs)(m.rX, {
                      children: [
                          e_
                              ? (0, l.jsx)(m.Dr, { id: "remix", label: E.intl.string(N.default["276ll6"]), action: G })
                              : null,
                          null != L
                              ? (0, l.jsx)(m.Dr, { id: "export", label: E.intl.string(N.default.WsEEP7), action: L })
                              : null,
                          eS
                              ? (0, l.jsx)(m.Dr, { id: "import", label: E.intl.string(N.default.rWGY3e), action: O })
                              : null,
                          null != R
                              ? (0, l.jsx)(m.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(N.default.yOIql5),
                                    action: R,
                                })
                              : null,
                          null != X
                              ? (0, l.jsx)(m.Dr, {
                                    id: "history",
                                    label: E.intl.string(N.default["3hIVou"]),
                                    action: X,
                                })
                              : null,
                      ],
                  })
                : null,
            eP
                ? (0, l.jsxs)(m.rX, {
                      children: [
                          eA
                              ? (0, l.jsx)(m.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: g.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: g.LinkIcon },
                                    action: () =>
                                        (0, C.C)((0, S.n)(k, U.VV.CONJURE, t), () =>
                                            (0, i.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, l.jsx)(m.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(N.default["nm/zuU"]),
                              icon: x.L,
                              leadingAccessory: { type: "icon", icon: x.L },
                              action: () =>
                                  (0, C.C)(t, () =>
                                      (0, i.P0)({ text: E.intl.string(N.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            v || ev || ey?.canRemoveBot === !0
                ? (0, l.jsxs)(m.rX, {
                      children: [
                          ev
                              ? (0, l.jsx)(m.Dr, {
                                    id: "settings",
                                    label: E.intl.string(N.default.FzfmQ8),
                                    icon: y.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: y.SettingsIcon },
                                    action:
                                        _ ??
                                        (() =>
                                            (0, z.A)(t, {
                                                guildId: b ?? k,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: ed,
                                            })),
                                })
                              : null,
                          ey?.canRemoveBot === !0
                              ? (0, l.jsx)(m.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(N.default["3gKG2j"], { server: ey.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        null != e && V({ project: e, target: ey, action: "remove" });
                                    },
                                })
                              : null,
                          ek
                              ? (0, l.jsx)(m.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(N.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = B.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, H.openModal)((t) => (0, l.jsx)(J, { ...t, ...e })));
                                    },
                                })
                              : null,
                          v
                              ? (0, l.jsx)(m.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        if (null != e && null != ey) V({ project: e, target: ey, action: "delete" });
                                        else
                                            (0, q.A)({
                                                title: E.intl.formatToPlainString(N.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(N.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, W.K)(t, () =>
                                                        (0, i.P0)({
                                                            text: E.intl.string(N.default["0XDHob"]),
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
        a = r.useRef(null);
    return (0, l.jsx)(k.Y, {
        targetElementRef: a,
        position: "bottom",
        align: "right",
        animation: k.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(en, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, l.jsx)("div", {
                ref: a,
                className: Y.h,
                children:
                    "iconButton" === t
                        ? (0, l.jsx)(b.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, l.jsx)(v.K, {
                                  icon: j.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, l.jsx)(_.A.Icon, {
                              icon: j.MoreHorizontalIcon,
                              tooltip: E.intl.string(E.t["UKOtz+"]),
                              "aria-label": E.intl.string(E.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: r,
                          }),
            });
        },
    });
}
