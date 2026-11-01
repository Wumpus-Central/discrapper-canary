n.d(t, { A: () => en, z: () => et });
var l = n(477900),
    a = n(582128),
    r = n(17928),
    i = n(858899),
    s = n(782603),
    u = n(780338),
    o = n(782134),
    d = n(113494),
    c = n(12470),
    f = n(811893),
    m = n(980707),
    p = n(477782),
    x = n(92446),
    g = n(173936),
    h = n(473935),
    j = n(625903),
    v = n(265872),
    b = n(866665),
    k = n(408278),
    y = n(365199),
    _ = n(7437),
    A = n(742589),
    S = n(147036),
    N = n(957565),
    w = n(785389),
    C = n(123917),
    I = n(860402),
    E = n(809526),
    P = n(105292);
let T = new Set();
var D = n(79733),
    M = n(442331),
    z = n(616334),
    B = n(260498);
n(321073);
var K = n(189714),
    L = n(733791),
    F = n(314116),
    G = n(371169),
    W = n(189213),
    H = n(331322),
    R = n(834730),
    O = n(192308),
    $ = n(664619),
    X = n(706935);
function q(e) {
    let { project: t, target: n, action: r, ...s } = e,
        [u, o] = a.useState(n.canRemovePreviewBot),
        [d, c] = a.useState(!1),
        [f, m] = a.useState(null),
        p = "delete" === r,
        x = p ? (0, L.fI)(n) : (0, L.Kd)(n),
        g = p ? null : (0, L.L4)(n),
        h = (0, L.Mi)(n),
        j = p
            ? P.intl.formatToPlainString(E.default.CJBhb2, { name: n.projectName })
            : P.intl.formatToPlainString(E.default.x6FvsZ, { app: n.appName });
    async function v() {
        (c(!0), m(null));
        let e = p ? (0, G.xx)(t.id) : (0, $.YI)(t.id, { alsoRemovePreviewBot: u }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(P.intl.string(p ? E.default["0XDHob"] : E.default.PJ2Fkn))
            : (p || (0, i.P0)({ text: (0, L.p_)(n), variant: "success" }), s.onClose());
    }
    return (0, l.jsx)(W.a, {
        ...s,
        role: "alertdialog",
        title: p ? j : (0, L.WX)((0, X.tb)(E.default.x6FvsZ, n.appName)),
        subtitle: p ? (0, L.J)(n) : P.intl.string(E.default["8OKM1N"]),
        "aria-label": j,
        notice: null == f ? void 0 : { message: f, type: "critical", role: "alert" },
        actions: [
            { text: P.intl.string(P.t["ETE/oC"]), variant: "secondary", onClick: s.onClose },
            {
                text: P.intl.string(p ? E.default.aC42bN : E.default.BGF8VT),
                variant: "critical-primary",
                loading: d,
                disabled: d,
                onClick: () => {
                    v().catch(() => {});
                },
            },
        ],
        children: (0, l.jsxs)(H.B, {
            gap: 12,
            children: [
                x.length > 0 || null != g
                    ? (0, l.jsx)(X.Ay, {
                          items: x,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: u, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != h ? (0, l.jsx)(R.E, { variant: "text-sm/normal", color: "text-muted", children: h }) : null,
            ],
        }),
    });
}
function U(e) {
    (0, O.openModal)((t) => (0, l.jsx)(q, { ...t, ...e }));
}
var V = n(587895);
function Z(e) {
    let { project: t, ...n } = e,
        [s, u] = a.useState(!1),
        [o, d] = a.useState(null),
        c = (0, r.bG)([V.A], () => V.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = P.intl.formatToPlainString(E.default.m8KWic, { app: c });
    async function m() {
        (u(!0), d(null));
        let e = await (0, $.R_)(t.id);
        (u(!1), e)
            ? ((0, i.P0)({ text: P.intl.formatToPlainString(E.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : d(P.intl.string(E.default["rE/0SD"]));
    }
    return (0, l.jsx)(W.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: P.intl.string(E.default.wve4kB),
        "aria-label": f,
        notice: null == o ? void 0 : { message: o, type: "critical", role: "alert" },
        actions: [
            { text: P.intl.string(P.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: P.intl.string(E.default.GqcQyH),
                variant: "critical-primary",
                loading: s,
                disabled: s,
                onClick: () => {
                    m().catch(() => {});
                },
            },
        ],
    });
}
var J = n(746080),
    Q = n(552821);
let Y = [];
function ee(e) {
    (0, i.P0)({ text: e, variant: "critical" });
}
function et(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: v,
            projectGuildId: b,
            isOwner: k,
            canRemix: y,
            onOpenProjectSettings: A,
            onExport: W,
            onImport: H,
            onRemix: R,
            onConnectTool: $,
            onHistory: X,
            onTogglePreviewPaused: q,
            previewPaused: V = !1,
            previewPauseDisabled: Q = !1,
            onTogglePopout: et,
            poppedOut: en = !1,
            onToggleDebug: el,
            debugOpen: ea = !1,
            refreshApplicationId: er,
            previewProjectId: ei,
            onCloseMenu: es,
        } = e,
        eu = (0, K.iI)(t),
        eo = a.useContext(D.bI),
        { pending: ed, refresh: ec } = (0, _.A)(er ?? null),
        { pending: ef, connect: em } = (function (e, t) {
            let [n, l] = a.useState(T),
                r = a.useRef(T),
                i = a.useCallback((e) => {
                    ((r.current = (0, w.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: a.useCallback(
                    (n) => {
                        if (null == e) return;
                        let a = (0, w.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, I.JI)(e, n.type);
                            (i(n.type), "url" === l.type)
                                ? (0, C.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, w.rq)(l.error)
                                          ? P.intl.string(E.default["jCQ/1B"])
                                          : P.intl.string(E.default.POxkSh),
                                  );
                        }
                        null != a && ((r.current = a), l(a), s().catch(() => i(n.type)));
                    },
                    [t, e, i],
                ),
            };
        })(ei ?? null, ee),
        ep = (0, r.bG)([M.A], () => (null == ei ? Y : M.A.getDeclaredConnections(ei))),
        ex = a.useMemo(() => (0, w.Xl)(ep), [ep]),
        eg = (0, L.Bs)(t),
        eh = (0, L.CU)(t) && k,
        ej = (0, r.bG)(
            [B.Ay],
            () => {
                let e = B.Ay.getProject(t);
                return null != e && (0, B.jf)(e);
            },
            [t],
        ),
        ev = null != A || k || ej,
        eb = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                r = [];
            for (let { connection: e, offer: i } of (t &&
                r.push({
                    id: "preview-refresh",
                    label: P.intl.string(E.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                r.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: P.intl.formatToPlainString(E.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: P.intl.formatToPlainString(E.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return r;
        })({ canRefresh: null != er, refreshPending: ed, offers: ex, connectPending: ef }),
        ek = a.useMemo(() => new Map(ep.map((e) => [e.type, e])), [ep]),
        ey = null != R && y,
        e_ = k && null != H,
        eA = ey || null != W || e_ || null != $ || null != X,
        eS = N.p5 && null != v,
        eN = N.p5,
        ew = eu ? s.BellIcon : u.BellSlashIcon,
        eC = V ? o.PlayIcon : d.PauseIcon,
        eI = en ? c._ : f.t;
    return (0, l.jsxs)(m.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": P.intl.string(P.t.ogxXGq),
        onClose: es,
        onSelect: es,
        children: [
            null != q || null != et
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          null != q
                              ? (0, l.jsx)(p.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: eC,
                                    leadingAccessory: { type: "icon", icon: eC },
                                    label: P.intl.string(V ? E.default.ZKd2Cw : E.default.VHxerm),
                                    disabled: Q,
                                    action: q,
                                })
                              : null,
                          null != et
                              ? (0, l.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: eI,
                                    leadingAccessory: { type: "icon", icon: eI },
                                    label: P.intl.string(en ? P.t["NKV/MO"] : P.t["3Zypbv"]),
                                    action: et,
                                })
                              : null,
                      ],
                  })
                : null,
            null != el
                ? (0, l.jsx)(p.rX, {
                      children: (0, l.jsx)(p.sL, {
                          id: "debug",
                          label: P.intl.string(E.default.Mt5k9d),
                          leftIcon: x.BugIcon,
                          leadingAccessory: { type: "icon", icon: x.BugIcon },
                          checked: ea,
                          action: el,
                      }),
                  })
                : null,
            eb.length > 0
                ? (0, l.jsx)(p.rX, {
                      children: eb.map((e) =>
                          (0, l.jsx)(
                              p.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void ec();
                                      let t = null == e.connectionType ? null : ek.get(e.connectionType);
                                      null != t && em(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, l.jsx)(p.rX, {
                children: (0, l.jsx)(p.Dr, {
                    id: "mute",
                    label: P.intl.string(eu ? E.default.s9rCuH : E.default["a+i/As"]),
                    icon: ew,
                    leadingAccessory: { type: "icon", icon: ew },
                    action: () => (0, K.$L)(t, !eu),
                }),
            }),
            eA
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          ey
                              ? (0, l.jsx)(p.Dr, { id: "remix", label: P.intl.string(E.default.XWgAfc), action: R })
                              : null,
                          null != W
                              ? (0, l.jsx)(p.Dr, { id: "export", label: P.intl.string(E.default.WsEEP7), action: W })
                              : null,
                          e_
                              ? (0, l.jsx)(p.Dr, { id: "import", label: P.intl.string(E.default.rWGY3e), action: H })
                              : null,
                          null != $
                              ? (0, l.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: P.intl.string(E.default.yOIql5),
                                    action: $,
                                })
                              : null,
                          null != X
                              ? (0, l.jsx)(p.Dr, {
                                    id: "history",
                                    label: P.intl.string(E.default["3hIVou"]),
                                    action: X,
                                })
                              : null,
                      ],
                  })
                : null,
            eN
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          eS
                              ? (0, l.jsx)(p.Dr, {
                                    id: "copy-link",
                                    label: P.intl.string(P.t.WqhZss),
                                    icon: g.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: g.LinkIcon },
                                    action: () =>
                                        (0, N.C)((0, S.n)(v, J.VV.CONJURE, t), () =>
                                            (0, i.P0)({ text: P.intl.string(P.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, l.jsx)(p.Dr, {
                              id: "copy-project-id",
                              label: P.intl.string(E.default["nm/zuU"]),
                              icon: h.L,
                              leadingAccessory: { type: "icon", icon: h.L },
                              action: () =>
                                  (0, N.C)(t, () =>
                                      (0, i.P0)({ text: P.intl.string(E.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            k || ev || eg?.canRemoveBot === !0
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          ev
                              ? (0, l.jsx)(p.Dr, {
                                    id: "settings",
                                    label: P.intl.string(E.default.FzfmQ8),
                                    icon: j.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: j.SettingsIcon },
                                    action:
                                        A ??
                                        (() =>
                                            (0, z.A)(t, {
                                                guildId: b ?? v,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: eo,
                                            })),
                                })
                              : null,
                          eg?.canRemoveBot === !0
                              ? (0, l.jsx)(p.Dr, {
                                    id: "remove-from-server",
                                    label: P.intl.formatToPlainString(E.default["3gKG2j"], { server: eg.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        null != e && U({ project: e, target: eg, action: "remove" });
                                    },
                                })
                              : null,
                          eh
                              ? (0, l.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: P.intl.string(E.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = B.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, O.openModal)((t) => (0, l.jsx)(Z, { ...t, ...e })));
                                    },
                                })
                              : null,
                          k
                              ? (0, l.jsx)(p.Dr, {
                                    id: "delete",
                                    label: P.intl.string(P.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        if (null != e && null != eg) U({ project: e, target: eg, action: "delete" });
                                        else
                                            (0, F.A)({
                                                title: P.intl.formatToPlainString(E.default.CJBhb2, { name: n }),
                                                subtitle: P.intl.string(E.default["0OmrVn"]),
                                                confirmText: P.intl.string(P.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, G.K)(t, () =>
                                                        (0, i.P0)({
                                                            text: P.intl.string(E.default["0XDHob"]),
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
function en(e) {
    let { trigger: t = "header", ...n } = e,
        r = a.useRef(null);
    return (0, l.jsx)(v.Y, {
        targetElementRef: r,
        position: "bottom",
        align: "right",
        animation: v.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(et, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: a } = e,
                { isShown: i } = n;
            return (0, l.jsx)("div", {
                ref: r,
                className: Q.h,
                children:
                    "iconButton" === t
                        ? (0, l.jsx)(b.m, {
                              text: P.intl.string(P.t["UKOtz+"]),
                              children: (0, l.jsx)(k.K, {
                                  icon: y.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": P.intl.string(P.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, l.jsx)(A.A.Icon, {
                              icon: y.MoreHorizontalIcon,
                              tooltip: P.intl.string(P.t["UKOtz+"]),
                              "aria-label": P.intl.string(P.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
