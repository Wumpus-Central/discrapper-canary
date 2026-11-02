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
    g = n(92446),
    h = n(173936),
    x = n(473935),
    k = n(625903),
    b = n(265872),
    j = n(866665),
    v = n(408278),
    y = n(365199),
    _ = n(7437),
    w = n(742589),
    S = n(147036),
    C = n(957565),
    A = n(785389),
    N = n(123917),
    I = n(860402),
    P = n(809526),
    E = n(105292);
let T = new Set();
var D = n(79733),
    K = n(442331),
    M = n(616334),
    B = n(260498);
n(321073);
var z = n(189714),
    W = n(733791),
    $ = n(314116),
    F = n(371169),
    G = n(189213),
    L = n(331322),
    H = n(834730),
    O = n(192308),
    R = n(664619),
    X = n(706935);
function q(e) {
    let { project: t, target: n, action: r, ...s } = e,
        [o, u] = a.useState(n.canRemovePreviewBot),
        [d, c] = a.useState(!1),
        [f, m] = a.useState(null),
        p = "delete" === r,
        g = p ? (0, W.fI)(n) : (0, W.Kd)(n),
        h = p ? null : (0, W.L4)(n),
        x = (0, W.Mi)(n),
        k = p
            ? E.intl.formatToPlainString(P.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(P.default.x6FvsZ, { app: n.appName });
    async function b() {
        (c(!0), m(null));
        let e = p ? (0, F.xx)(t.id) : (0, R.YI)(t.id, { alsoRemovePreviewBot: o }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(p ? P.default["0XDHob"] : P.default.PJ2Fkn))
            : (p || (0, i.P0)({ text: (0, W.p_)(n), variant: "success" }), s.onClose());
    }
    return (0, l.jsx)(G.a, {
        ...s,
        role: "alertdialog",
        title: p ? k : (0, W.WX)((0, X.tb)(P.default.x6FvsZ, n.appName)),
        subtitle: p ? (0, W.J)(n) : E.intl.string(P.default["8OKM1N"]),
        "aria-label": k,
        notice: null == f ? void 0 : { message: f, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: s.onClose },
            {
                text: E.intl.string(p ? P.default.aC42bN : P.default.BGF8VT),
                variant: "critical-primary",
                loading: d,
                disabled: d,
                onClick: () => {
                    b().catch(() => {});
                },
            },
        ],
        children: (0, l.jsxs)(L.B, {
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
                null != x ? (0, l.jsx)(H.E, { variant: "text-sm/normal", color: "text-muted", children: x }) : null,
            ],
        }),
    });
}
function J(e) {
    (0, O.openModal)((t) => (0, l.jsx)(q, { ...t, ...e }));
}
var Q = n(587895);
function Z(e) {
    let { project: t, ...n } = e,
        [s, o] = a.useState(!1),
        [u, d] = a.useState(null),
        c = (0, r.bG)([Q.A], () => Q.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = E.intl.formatToPlainString(P.default.m8KWic, { app: c });
    async function m() {
        (o(!0), d(null));
        let e = await (0, R.R_)(t.id);
        (o(!1), e)
            ? ((0, i.P0)({ text: E.intl.formatToPlainString(P.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : d(E.intl.string(P.default["rE/0SD"]));
    }
    return (0, l.jsx)(G.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: E.intl.string(P.default.wve4kB),
        "aria-label": f,
        notice: null == u ? void 0 : { message: u, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: E.intl.string(P.default.GqcQyH),
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
let U = [];
function ee(e) {
    (0, i.P0)({ text: e, variant: "critical" });
}
function et(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: b,
            projectGuildId: j,
            isOwner: v,
            canRemix: y,
            onOpenProjectSettings: w,
            onExport: G,
            onImport: L,
            onRemix: H,
            onConnectTool: R,
            onHistory: X,
            onTogglePreviewPaused: q,
            previewPaused: Q = !1,
            previewPauseDisabled: Y = !1,
            onTogglePopout: et,
            poppedOut: en = !1,
            onToggleDebug: el,
            debugOpen: ea = !1,
            refreshApplicationId: er,
            previewProjectId: ei,
            onCloseMenu: es,
        } = e,
        eo = (0, z.iI)(t),
        eu = a.useContext(D.bI),
        { pending: ed, refresh: ec } = (0, _.A)(er ?? null),
        { pending: ef, connect: em } = (function (e, t) {
            let [n, l] = a.useState(T),
                r = a.useRef(T),
                i = a.useCallback((e) => {
                    ((r.current = (0, A.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: a.useCallback(
                    (n) => {
                        if (null == e) return;
                        let a = (0, A.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, I.JI)(e, n.type);
                            (i(n.type), "url" === l.type)
                                ? (0, N.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, A.rq)(l.error)
                                          ? E.intl.string(P.default["jCQ/1B"])
                                          : E.intl.string(P.default.POxkSh),
                                  );
                        }
                        null != a && ((r.current = a), l(a), s().catch(() => i(n.type)));
                    },
                    [t, e, i],
                ),
            };
        })(ei ?? null, ee),
        ep = (0, r.bG)([K.A], () => (null == ei ? U : K.A.getDeclaredConnections(ei))),
        eg = a.useMemo(() => (0, A.Xl)(ep), [ep]),
        eh = (0, W.Bs)(t),
        ex = (0, W.CU)(t) && v,
        ek = (0, r.bG)(
            [B.Ay],
            () => {
                let e = B.Ay.getProject(t);
                return null != e && (0, B.jf)(e);
            },
            [t],
        ),
        eb = null != w || v || ek,
        ej = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                r = [];
            for (let { connection: e, offer: i } of (t &&
                r.push({
                    id: "preview-refresh",
                    label: E.intl.string(P.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                r.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: E.intl.formatToPlainString(P.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: E.intl.formatToPlainString(P.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return r;
        })({ canRefresh: null != er, refreshPending: ed, offers: eg, connectPending: ef }),
        ev = a.useMemo(() => new Map(ep.map((e) => [e.type, e])), [ep]),
        ey = null != H && y,
        e_ = v && null != L,
        ew = ey || null != G || e_ || null != R || null != X,
        eS = C.p5 && null != b,
        eC = C.p5,
        eA = eo ? s.BellIcon : o.BellSlashIcon,
        eN = Q ? u.PlayIcon : d.PauseIcon,
        eI = en ? c._ : f.t;
    return (0, l.jsxs)(m.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: es,
        onSelect: es,
        children: [
            null != q || null != et
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          null != q
                              ? (0, l.jsx)(p.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: eN,
                                    leadingAccessory: { type: "icon", icon: eN },
                                    label: E.intl.string(Q ? P.default.ZKd2Cw : P.default.VHxerm),
                                    disabled: Y,
                                    action: q,
                                })
                              : null,
                          null != et
                              ? (0, l.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: eI,
                                    leadingAccessory: { type: "icon", icon: eI },
                                    label: E.intl.string(en ? E.t["NKV/MO"] : E.t["3Zypbv"]),
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
                          label: E.intl.string(P.default.Mt5k9d),
                          leftIcon: g.BugIcon,
                          leadingAccessory: { type: "icon", icon: g.BugIcon },
                          checked: ea,
                          action: el,
                      }),
                  })
                : null,
            ej.length > 0
                ? (0, l.jsx)(p.rX, {
                      children: ej.map((e) =>
                          (0, l.jsx)(
                              p.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void ec();
                                      let t = null == e.connectionType ? null : ev.get(e.connectionType);
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
                    label: E.intl.string(eo ? P.default.s9rCuH : P.default["a+i/As"]),
                    icon: eA,
                    leadingAccessory: { type: "icon", icon: eA },
                    action: () => (0, z.$L)(t, !eo),
                }),
            }),
            ew
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          ey
                              ? (0, l.jsx)(p.Dr, { id: "remix", label: E.intl.string(P.default["276ll6"]), action: H })
                              : null,
                          null != G
                              ? (0, l.jsx)(p.Dr, { id: "export", label: E.intl.string(P.default.WsEEP7), action: G })
                              : null,
                          e_
                              ? (0, l.jsx)(p.Dr, { id: "import", label: E.intl.string(P.default.rWGY3e), action: L })
                              : null,
                          null != R
                              ? (0, l.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(P.default.yOIql5),
                                    action: R,
                                })
                              : null,
                          null != X
                              ? (0, l.jsx)(p.Dr, {
                                    id: "history",
                                    label: E.intl.string(P.default["3hIVou"]),
                                    action: X,
                                })
                              : null,
                      ],
                  })
                : null,
            eC
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          eS
                              ? (0, l.jsx)(p.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: h.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: h.LinkIcon },
                                    action: () =>
                                        (0, C.C)((0, S.n)(b, V.VV.CONJURE, t), () =>
                                            (0, i.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, l.jsx)(p.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(P.default["nm/zuU"]),
                              icon: x.L,
                              leadingAccessory: { type: "icon", icon: x.L },
                              action: () =>
                                  (0, C.C)(t, () =>
                                      (0, i.P0)({ text: E.intl.string(P.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            v || eb || eh?.canRemoveBot === !0
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          eb
                              ? (0, l.jsx)(p.Dr, {
                                    id: "settings",
                                    label: E.intl.string(P.default.FzfmQ8),
                                    icon: k.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: k.SettingsIcon },
                                    action:
                                        w ??
                                        (() =>
                                            (0, M.A)(t, {
                                                guildId: j ?? b,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: eu,
                                            })),
                                })
                              : null,
                          eh?.canRemoveBot === !0
                              ? (0, l.jsx)(p.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(P.default["3gKG2j"], { server: eh.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        null != e && J({ project: e, target: eh, action: "remove" });
                                    },
                                })
                              : null,
                          ex
                              ? (0, l.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(P.default.jYAR58),
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
                          v
                              ? (0, l.jsx)(p.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        if (null != e && null != eh) J({ project: e, target: eh, action: "delete" });
                                        else
                                            (0, $.A)({
                                                title: E.intl.formatToPlainString(P.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(P.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, F.K)(t, () =>
                                                        (0, i.P0)({
                                                            text: E.intl.string(P.default["0XDHob"]),
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
    return (0, l.jsx)(b.Y, {
        targetElementRef: r,
        position: "bottom",
        align: "right",
        animation: b.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(et, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: a } = e,
                { isShown: i } = n;
            return (0, l.jsx)("div", {
                ref: r,
                className: Y.h,
                children:
                    "iconButton" === t
                        ? (0, l.jsx)(j.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, l.jsx)(v.K, {
                                  icon: y.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, l.jsx)(w.A.Icon, {
                              icon: y.MoreHorizontalIcon,
                              tooltip: E.intl.string(E.t["UKOtz+"]),
                              "aria-label": E.intl.string(E.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
