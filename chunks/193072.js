n.d(t, { A: () => en, z: () => et });
var l = n(477900),
    a = n(582128),
    r = n(17928),
    i = n(858899),
    s = n(782603),
    o = n(780338),
    u = n(782134),
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
    w = n(957565),
    N = n(785389),
    C = n(123917),
    I = n(860402),
    E = n(809526),
    P = n(105292);
let T = new Set();
var D = n(79733),
    M = n(442331),
    z = n(616334),
    K = n(260498);
n(321073);
var L = n(189714),
    B = n(733791),
    G = n(314116),
    H = n(371169),
    F = n(189213),
    R = n(331322),
    W = n(834730),
    O = n(192308),
    $ = n(664619),
    X = n(706935);
function q(e) {
    let { project: t, target: n, action: r, ...s } = e,
        [o, u] = a.useState(n.canRemovePreviewBot),
        [d, c] = a.useState(!1),
        [f, m] = a.useState(null),
        p = "delete" === r,
        x = p ? (0, B.fI)(n) : (0, B.Kd)(n),
        g = p ? null : (0, B.L4)(n),
        h = (0, B.Mi)(n),
        j = p
            ? P.intl.formatToPlainString(E.default.CJBhb2, { name: n.projectName })
            : P.intl.formatToPlainString(E.default.x6FvsZ, { app: n.appName });
    async function v() {
        (c(!0), m(null));
        let e = p ? (0, H.xx)(t.id) : (0, $.YI)(t.id, { alsoRemovePreviewBot: o }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(P.intl.string(p ? E.default["0XDHob"] : E.default.PJ2Fkn))
            : (p || (0, i.P0)({ text: (0, B.p_)(n), variant: "success" }), s.onClose());
    }
    return (0, l.jsx)(F.a, {
        ...s,
        role: "alertdialog",
        title: p ? j : (0, B.WX)((0, X.tb)(E.default.x6FvsZ, n.appName)),
        subtitle: p ? (0, B.J)(n) : P.intl.string(E.default["8OKM1N"]),
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
        children: (0, l.jsxs)(R.B, {
            gap: 12,
            children: [
                x.length > 0 || null != g
                    ? (0, l.jsx)(X.Ay, {
                          items: x,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: o, onChange: u, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != h ? (0, l.jsx)(W.E, { variant: "text-sm/normal", color: "text-muted", children: h }) : null,
            ],
        }),
    });
}
function Z(e) {
    (0, O.openModal)((t) => (0, l.jsx)(q, { ...t, ...e }));
}
var U = n(587895);
function J(e) {
    let { project: t, ...n } = e,
        [s, o] = a.useState(!1),
        [u, d] = a.useState(null),
        c = (0, r.bG)([U.A], () => U.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = P.intl.formatToPlainString(E.default.m8KWic, { app: c });
    async function m() {
        (o(!0), d(null));
        let e = await (0, $.R_)(t.id);
        (o(!1), e)
            ? ((0, i.P0)({ text: P.intl.formatToPlainString(E.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : d(P.intl.string(E.default["rE/0SD"]));
    }
    return (0, l.jsx)(F.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: P.intl.string(E.default.wve4kB),
        "aria-label": f,
        notice: null == u ? void 0 : { message: u, type: "critical", role: "alert" },
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
var Q = n(746080),
    V = n(552821);
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
            onExport: F,
            onImport: R,
            onRemix: W,
            onConnectTool: $,
            onHistory: X,
            onTogglePreviewPaused: q,
            previewPaused: U = !1,
            previewPauseDisabled: V = !1,
            onTogglePopout: et,
            poppedOut: en = !1,
            onToggleDebug: el,
            debugOpen: ea = !1,
            refreshApplicationId: er,
            previewProjectId: ei,
            onCloseMenu: es,
        } = e,
        eo = (0, L.iI)(t),
        eu = a.useContext(D.bI),
        { pending: ed, refresh: ec } = (0, _.A)(er ?? null),
        { pending: ef, connect: em } = (function (e, t) {
            let [n, l] = a.useState(T),
                r = a.useRef(T),
                i = a.useCallback((e) => {
                    ((r.current = (0, N.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: a.useCallback(
                    (n) => {
                        if (null == e) return;
                        let a = (0, N.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, I.JI)(e, n.type);
                            (i(n.type), "url" === l.type)
                                ? (0, C.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, N.rq)(l.error)
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
        ex = a.useMemo(() => (0, N.Xl)(ep), [ep]),
        eg = (0, B.Bs)(t),
        eh = (0, B.CU)(t) && k,
        ej = (0, r.bG)(
            [K.Ay],
            () => {
                let e = K.Ay.getProject(t);
                return null != e && (0, K.jf)(e);
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
        ey = null != W && y,
        e_ = k && null != R,
        eA = ey || null != F || e_ || null != $ || null != X,
        eS = w.p5 && null != v,
        ew = w.p5,
        eN = eo ? s.BellIcon : o.BellSlashIcon,
        eC = U ? u.PlayIcon : d.PauseIcon,
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
                                    label: P.intl.string(U ? E.default.ZKd2Cw : E.default.VHxerm),
                                    disabled: V,
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
                    label: P.intl.string(eo ? E.default.s9rCuH : E.default["a+i/As"]),
                    icon: eN,
                    leadingAccessory: { type: "icon", icon: eN },
                    action: () => (0, L.$L)(t, !eo),
                }),
            }),
            eA
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          ey
                              ? (0, l.jsx)(p.Dr, { id: "remix", label: P.intl.string(E.default.XWgAfc), action: W })
                              : null,
                          null != F
                              ? (0, l.jsx)(p.Dr, { id: "export", label: P.intl.string(E.default.WsEEP7), action: F })
                              : null,
                          e_
                              ? (0, l.jsx)(p.Dr, { id: "import", label: P.intl.string(E.default.rWGY3e), action: R })
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
            ew
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          eS
                              ? (0, l.jsx)(p.Dr, {
                                    id: "copy-link",
                                    label: P.intl.string(P.t.WqhZss),
                                    icon: g.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: g.LinkIcon },
                                    action: () =>
                                        (0, w.C)((0, S.n)(v, Q.VV.CONJURE, t), () =>
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
                                  (0, w.C)(t, () =>
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
                                                publishOptions: eu,
                                            })),
                                })
                              : null,
                          eg?.canRemoveBot === !0
                              ? (0, l.jsx)(p.Dr, {
                                    id: "remove-from-server",
                                    label: P.intl.formatToPlainString(E.default["3gKG2j"], { server: eg.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = K.Ay.getProject(t);
                                        null != e && Z({ project: e, target: eg, action: "remove" });
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
                                        let n = K.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, O.openModal)((t) => (0, l.jsx)(J, { ...t, ...e })));
                                    },
                                })
                              : null,
                          k
                              ? (0, l.jsx)(p.Dr, {
                                    id: "delete",
                                    label: P.intl.string(P.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = K.Ay.getProject(t);
                                        if (null != e && null != eg) Z({ project: e, target: eg, action: "delete" });
                                        else
                                            (0, G.A)({
                                                title: P.intl.formatToPlainString(E.default.CJBhb2, { name: n }),
                                                subtitle: P.intl.string(E.default["0OmrVn"]),
                                                confirmText: P.intl.string(P.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, H.K)(t, () =>
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
                className: V.h,
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
