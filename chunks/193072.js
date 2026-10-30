n.d(t, { A: () => en, z: () => et });
var l = n(477900),
    a = n(582128),
    i = n(17928),
    r = n(858899),
    s = n(782603),
    o = n(780338),
    u = n(782134),
    d = n(113494),
    c = n(12470),
    f = n(811893),
    m = n(980707),
    p = n(477782),
    g = n(92446),
    h = n(173936),
    x = n(473935),
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
    E = n(87501),
    P = n(105292);
let T = new Set();
var D = n(79733),
    M = n(442331),
    z = n(616334),
    K = n(260498);
n(321073);
var B = n(189714),
    L = n(733791),
    G = n(314116),
    H = n(371169),
    W = n(189213),
    R = n(331322),
    F = n(834730),
    O = n(192308),
    $ = n(664619),
    X = n(706935);
function q(e) {
    let { project: t, target: n, action: i, ...s } = e,
        [o, u] = a.useState(n.canRemovePreviewBot),
        [d, c] = a.useState(!1),
        [f, m] = a.useState(null),
        p = "delete" === i,
        g = p ? (0, L.fI)(n) : (0, L.Kd)(n),
        h = p ? null : (0, L.L4)(n),
        x = (0, L.Mi)(n),
        j = p
            ? P.intl.formatToPlainString(E.default.CJBhb2, { name: n.projectName })
            : P.intl.formatToPlainString(E.default.x6FvsZ, { app: n.appName });
    async function v() {
        (c(!0), m(null));
        let e = p ? (0, H.xx)(t.id) : (0, $.YI)(t.id, { alsoRemovePreviewBot: o }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(P.intl.string(p ? E.default["0XDHob"] : E.default.PJ2Fkn))
            : (p || (0, r.P0)({ text: (0, L.p_)(n), variant: "success" }), s.onClose());
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
        children: (0, l.jsxs)(R.B, {
            gap: 12,
            children: [
                g.length > 0 || null != h
                    ? (0, l.jsx)(X.Ay, {
                          items: g,
                          optionalItem:
                              null == h
                                  ? void 0
                                  : { item: h, checked: o, onChange: u, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != x ? (0, l.jsx)(F.E, { variant: "text-sm/normal", color: "text-muted", children: x }) : null,
            ],
        }),
    });
}
function J(e) {
    (0, O.openModal)((t) => (0, l.jsx)(q, { ...t, ...e }));
}
var Q = n(587895);
function U(e) {
    let { project: t, ...n } = e,
        [s, o] = a.useState(!1),
        [u, d] = a.useState(null),
        c = (0, i.bG)([Q.A], () => Q.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = P.intl.formatToPlainString(E.default.m8KWic, { app: c });
    async function m() {
        (o(!0), d(null));
        let e = await (0, $.R_)(t.id);
        (o(!1), e)
            ? ((0, r.P0)({ text: P.intl.formatToPlainString(E.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : d(P.intl.string(E.default["rE/0SD"]));
    }
    return (0, l.jsx)(W.a, {
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
var V = n(746080),
    Y = n(552821);
let Z = [];
function ee(e) {
    (0, r.P0)({ text: e, variant: "critical" });
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
            onImport: R,
            onRemix: F,
            onConnectTool: $,
            onHistory: X,
            onTogglePreviewPaused: q,
            previewPaused: Q = !1,
            previewPauseDisabled: Y = !1,
            onTogglePopout: et,
            poppedOut: en = !1,
            onToggleDebug: el,
            debugOpen: ea = !1,
            refreshApplicationId: ei,
            previewProjectId: er,
            onCloseMenu: es,
        } = e,
        eo = (0, B.iI)(t),
        eu = a.useContext(D.bI),
        { pending: ed, refresh: ec } = (0, _.A)(ei ?? null),
        { pending: ef, connect: em } = (function (e, t) {
            let [n, l] = a.useState(T),
                i = a.useRef(T),
                r = a.useCallback((e) => {
                    ((i.current = (0, N.Q6)(i.current, e)), l(i.current));
                }, []);
            return {
                pending: n,
                connect: a.useCallback(
                    (n) => {
                        if (null == e) return;
                        let a = (0, N.K9)(i.current, n.type);
                        async function s() {
                            let l = await (0, I.JI)(e, n.type);
                            (r(n.type), "url" === l.type)
                                ? (0, C.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, N.rq)(l.error)
                                          ? P.intl.string(E.default["jCQ/1B"])
                                          : P.intl.string(E.default.POxkSh),
                                  );
                        }
                        null != a && ((i.current = a), l(a), s().catch(() => r(n.type)));
                    },
                    [t, e, r],
                ),
            };
        })(er ?? null, ee),
        ep = (0, i.bG)([M.A], () => (null == er ? Z : M.A.getDeclaredConnections(er))),
        eg = a.useMemo(() => (0, N.Xl)(ep), [ep]),
        eh = (0, L.Bs)(t),
        ex = (0, L.CU)(t) && k,
        ej = (0, i.bG)(
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
                i = [];
            for (let { connection: e, offer: r } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: P.intl.string(E.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === r
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
            return i;
        })({ canRefresh: null != ei, refreshPending: ed, offers: eg, connectPending: ef }),
        ek = a.useMemo(() => new Map(ep.map((e) => [e.type, e])), [ep]),
        ey = null != F && y,
        e_ = k && null != R,
        eA = ey || null != W || e_ || null != $ || null != X,
        eS = w.p5 && null != v,
        ew = w.p5,
        eN = eo ? s.BellIcon : o.BellSlashIcon,
        eC = Q ? u.PlayIcon : d.PauseIcon,
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
                                    label: P.intl.string(Q ? E.default.ZKd2Cw : E.default.VHxerm),
                                    disabled: Y,
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
                          leftIcon: g.BugIcon,
                          leadingAccessory: { type: "icon", icon: g.BugIcon },
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
                    action: () => (0, B.$L)(t, !eo),
                }),
            }),
            eA
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          ey
                              ? (0, l.jsx)(p.Dr, { id: "remix", label: P.intl.string(E.default.XWgAfc), action: F })
                              : null,
                          null != W
                              ? (0, l.jsx)(p.Dr, { id: "export", label: P.intl.string(E.default.WsEEP7), action: W })
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
                                    icon: h.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: h.LinkIcon },
                                    action: () =>
                                        (0, w.C)((0, S.n)(v, V.VV.CONJURE, t), () =>
                                            (0, r.P0)({ text: P.intl.string(P.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, l.jsx)(p.Dr, {
                              id: "copy-project-id",
                              label: P.intl.string(E.default["nm/zuU"]),
                              icon: x.L,
                              leadingAccessory: { type: "icon", icon: x.L },
                              action: () =>
                                  (0, w.C)(t, () =>
                                      (0, r.P0)({ text: P.intl.string(E.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            k || ev || eh?.canRemoveBot === !0
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
                          eh?.canRemoveBot === !0
                              ? (0, l.jsx)(p.Dr, {
                                    id: "remove-from-server",
                                    label: P.intl.formatToPlainString(E.default["3gKG2j"], { server: eh.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = K.Ay.getProject(t);
                                        null != e && J({ project: e, target: eh, action: "remove" });
                                    },
                                })
                              : null,
                          ex
                              ? (0, l.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: P.intl.string(E.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = K.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, O.openModal)((t) => (0, l.jsx)(U, { ...t, ...e })));
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
                                        if (null != e && null != eh) J({ project: e, target: eh, action: "delete" });
                                        else
                                            (0, G.A)({
                                                title: P.intl.formatToPlainString(E.default.CJBhb2, { name: n }),
                                                subtitle: P.intl.string(E.default["0OmrVn"]),
                                                confirmText: P.intl.string(P.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, H.K)(t, () =>
                                                        (0, r.P0)({
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
        i = a.useRef(null);
    return (0, l.jsx)(v.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: v.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(et, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: a } = e,
                { isShown: r } = n;
            return (0, l.jsx)("div", {
                ref: i,
                className: Y.h,
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
                                  "aria-expanded": r,
                                  onClick: a,
                              }),
                          })
                        : (0, l.jsx)(A.A.Icon, {
                              icon: y.MoreHorizontalIcon,
                              tooltip: P.intl.string(P.t["UKOtz+"]),
                              "aria-label": P.intl.string(P.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": r,
                              selected: r,
                              onClick: a,
                          }),
            });
        },
    });
}
