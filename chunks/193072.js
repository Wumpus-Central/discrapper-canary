n.d(t, { A: () => ea, z: () => el });
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
    g = n(663417),
    h = n(70688),
    x = n(92446),
    j = n(173936),
    k = n(473935),
    v = n(625903),
    y = n(265872),
    b = n(866665),
    _ = n(408278),
    w = n(365199),
    S = n(7437),
    A = n(742589),
    C = n(147036),
    N = n(957565),
    I = n(785389),
    E = n(123917),
    P = n(860402),
    T = n(248675),
    D = n(105292);
let M = new Set();
var L = n(893067),
    B = n(442331),
    K = n(616334),
    z = n(260498);
n(321073);
var G = n(189714),
    R = n(733791),
    H = n(314116),
    W = n(371169),
    $ = n(189213),
    F = n(331322),
    O = n(834730),
    X = n(192308),
    q = n(664619),
    J = n(706935);
function V(e) {
    let { project: t, target: n, action: i, ...s } = e,
        [o, u] = a.useState(n.canRemovePreviewBot),
        [d, c] = a.useState(!1),
        [f, m] = a.useState(null),
        p = "delete" === i,
        g = p ? (0, R.fI)(n) : (0, R.Kd)(n),
        h = p ? null : (0, R.L4)(n),
        x = (0, R.Mi)(n),
        j = p
            ? D.intl.formatToPlainString(T.default.CJBhb2, { name: n.projectName })
            : D.intl.formatToPlainString(T.default.x6FvsZ, { app: n.appName });
    async function k() {
        (c(!0), m(null));
        let e = p ? (0, W.xx)(t.id) : (0, q.YI)(t.id, { alsoRemovePreviewBot: o }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(D.intl.string(p ? T.default["0XDHob"] : T.default.PJ2Fkn))
            : (p || (0, r.P0)({ text: (0, R.p_)(n), variant: "success" }), s.onClose());
    }
    return (0, l.jsx)($.a, {
        ...s,
        role: "alertdialog",
        title: p ? j : (0, R.WX)((0, J.tb)(T.default.x6FvsZ, n.appName)),
        subtitle: p ? (0, R.J)(n) : D.intl.string(T.default["8OKM1N"]),
        "aria-label": j,
        notice: null == f ? void 0 : { message: f, type: "critical", role: "alert" },
        actions: [
            { text: D.intl.string(D.t["ETE/oC"]), variant: "secondary", onClick: s.onClose },
            {
                text: D.intl.string(p ? T.default.aC42bN : T.default.BGF8VT),
                variant: "critical-primary",
                loading: d,
                disabled: d,
                onClick: () => {
                    k().catch(() => {});
                },
            },
        ],
        children: (0, l.jsxs)(F.B, {
            gap: 12,
            children: [
                g.length > 0 || null != h
                    ? (0, l.jsx)(J.Ay, {
                          items: g,
                          optionalItem:
                              null == h
                                  ? void 0
                                  : { item: h, checked: o, onChange: u, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != x ? (0, l.jsx)(O.E, { variant: "text-sm/normal", color: "text-muted", children: x }) : null,
            ],
        }),
    });
}
function Z(e) {
    (0, X.openModal)((t) => (0, l.jsx)(V, { ...t, ...e }));
}
var Q = n(587895);
function Y(e) {
    let { project: t, ...n } = e,
        [s, o] = a.useState(!1),
        [u, d] = a.useState(null),
        c = (0, i.bG)([Q.A], () => Q.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = D.intl.formatToPlainString(T.default.m8KWic, { app: c });
    async function m() {
        (o(!0), d(null));
        let e = await (0, q.R_)(t.id);
        (o(!1), e)
            ? ((0, r.P0)({ text: D.intl.formatToPlainString(T.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : d(D.intl.string(T.default["rE/0SD"]));
    }
    return (0, l.jsx)($.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: D.intl.string(T.default.wve4kB),
        "aria-label": f,
        notice: null == u ? void 0 : { message: u, type: "critical", role: "alert" },
        actions: [
            { text: D.intl.string(D.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: D.intl.string(T.default.GqcQyH),
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
var U = n(746080),
    ee = n(552821);
let et = [];
function en(e) {
    (0, r.P0)({ text: e, variant: "critical" });
}
function el(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: y,
            projectGuildId: b,
            isOwner: _,
            canRemix: w,
            hideProjectSettings: A = !1,
            onExport: $,
            onImport: F,
            onRemix: O,
            onConnectTool: q,
            onHistory: J,
            onRefresh: V,
            isRefreshing: Q = !1,
            onTogglePreviewPaused: ee,
            previewPaused: el = !1,
            previewPauseDisabled: ea = !1,
            onTogglePopout: ei,
            poppedOut: er = !1,
            onToggleDebug: es,
            debugOpen: eo = !1,
            onClose: eu,
            refreshApplicationId: ed,
            previewProjectId: ec,
            onCloseMenu: ef,
        } = e,
        em = (0, G.iI)(t),
        ep = a.useContext(L.bI),
        { pending: eg, refresh: eh } = (0, S.A)(ed ?? null),
        { pending: ex, connect: ej } = (function (e, t) {
            let [n, l] = a.useState(M),
                i = a.useRef(M),
                r = a.useCallback((e) => {
                    ((i.current = (0, I.Q6)(i.current, e)), l(i.current));
                }, []);
            return {
                pending: n,
                connect: a.useCallback(
                    (n) => {
                        if (null == e) return;
                        let a = (0, I.K9)(i.current, n.type);
                        async function s() {
                            let l = await (0, P.JI)(e, n.type);
                            (r(n.type), "url" === l.type)
                                ? (0, E.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, I.rq)(l.error)
                                          ? D.intl.string(T.default["jCQ/1B"])
                                          : D.intl.string(T.default.POxkSh),
                                  );
                        }
                        null != a && ((i.current = a), l(a), s().catch(() => r(n.type)));
                    },
                    [t, e, r],
                ),
            };
        })(ec ?? null, en),
        ek = (0, i.bG)([B.A], () => (null == ec ? et : B.A.getDeclaredConnections(ec))),
        ev = a.useMemo(() => (0, I.Xl)(ek), [ek]),
        ey = (0, R.Bs)(t),
        eb = (0, R.CU)(t) && _,
        e_ = (0, i.bG)(
            [z.Ay],
            () => {
                let e = z.Ay.getProject(t);
                return null != e && (0, z.jf)(e);
            },
            [t],
        ),
        ew = !A && (_ || e_),
        eS = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                i = [];
            for (let { connection: e, offer: r } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: D.intl.string(T.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === r
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: D.intl.formatToPlainString(T.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: D.intl.formatToPlainString(T.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != ed, refreshPending: eg, offers: ev, connectPending: ex }),
        eA = a.useMemo(() => new Map(ek.map((e) => [e.type, e])), [ek]),
        eC = null != O && w,
        eN = _ && null != F,
        eI = eC || null != $ || eN || null != q || null != J,
        eE = N.p5 && null != y,
        eP = N.p5,
        eT = em ? s.BellIcon : o.BellSlashIcon,
        eD = el ? u.PlayIcon : d.PauseIcon,
        eM = er ? c._ : f.t;
    return (0, l.jsxs)(m.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": D.intl.string(D.t.ogxXGq),
        onClose: ef,
        onSelect: ef,
        children: [
            null != V || null != ee || null != ei || null != eu
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          null != V
                              ? (0, l.jsx)(p.Dr, {
                                    id: "refresh",
                                    icon: g.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: g.RefreshIcon },
                                    label: D.intl.string(T.default["p4B/7M"]),
                                    disabled: Q,
                                    action: V,
                                })
                              : null,
                          null != ee
                              ? (0, l.jsx)(p.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: eD,
                                    leadingAccessory: { type: "icon", icon: eD },
                                    label: D.intl.string(el ? T.default.ZKd2Cw : T.default.VHxerm),
                                    disabled: ea,
                                    action: ee,
                                })
                              : null,
                          null != ei
                              ? (0, l.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: eM,
                                    leadingAccessory: { type: "icon", icon: eM },
                                    label: D.intl.string(er ? D.t["NKV/MO"] : D.t["3Zypbv"]),
                                    action: ei,
                                })
                              : null,
                          null != eu
                              ? (0, l.jsx)(p.Dr, {
                                    id: "close",
                                    icon: h.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: h.DoorExitIcon },
                                    label: D.intl.string(T.default["/TlGcK"]),
                                    action: eu,
                                })
                              : null,
                      ],
                  })
                : null,
            null != es
                ? (0, l.jsx)(p.rX, {
                      children: (0, l.jsx)(p.sL, {
                          id: "debug",
                          label: D.intl.string(T.default.Mt5k9d),
                          leftIcon: x.BugIcon,
                          leadingAccessory: { type: "icon", icon: x.BugIcon },
                          checked: eo,
                          action: es,
                      }),
                  })
                : null,
            eS.length > 0
                ? (0, l.jsx)(p.rX, {
                      children: eS.map((e) =>
                          (0, l.jsx)(
                              p.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void eh();
                                      let t = null == e.connectionType ? null : eA.get(e.connectionType);
                                      null != t && ej(t);
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
                    label: D.intl.string(em ? T.default.s9rCuH : T.default["a+i/As"]),
                    icon: eT,
                    leadingAccessory: { type: "icon", icon: eT },
                    action: () => (0, G.$L)(t, !em),
                }),
            }),
            eI
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          eC
                              ? (0, l.jsx)(p.Dr, { id: "remix", label: D.intl.string(T.default.XWgAfc), action: O })
                              : null,
                          null != $
                              ? (0, l.jsx)(p.Dr, { id: "export", label: D.intl.string(T.default.WsEEP7), action: $ })
                              : null,
                          eN
                              ? (0, l.jsx)(p.Dr, { id: "import", label: D.intl.string(T.default.rWGY3e), action: F })
                              : null,
                          null != q
                              ? (0, l.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: D.intl.string(T.default.yOIql5),
                                    action: q,
                                })
                              : null,
                          null != J
                              ? (0, l.jsx)(p.Dr, {
                                    id: "history",
                                    label: D.intl.string(T.default["3hIVou"]),
                                    action: J,
                                })
                              : null,
                      ],
                  })
                : null,
            eP
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          eE
                              ? (0, l.jsx)(p.Dr, {
                                    id: "copy-link",
                                    label: D.intl.string(D.t.WqhZss),
                                    icon: j.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: j.LinkIcon },
                                    action: () =>
                                        (0, N.C)((0, C.n)(y, U.VV.CONJURE, t), () =>
                                            (0, r.P0)({ text: D.intl.string(D.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, l.jsx)(p.Dr, {
                              id: "copy-project-id",
                              label: D.intl.string(T.default["nm/zuU"]),
                              icon: k.L,
                              leadingAccessory: { type: "icon", icon: k.L },
                              action: () =>
                                  (0, N.C)(t, () =>
                                      (0, r.P0)({ text: D.intl.string(T.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            _ || ew || ey?.canRemoveBot === !0
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          ew
                              ? (0, l.jsx)(p.Dr, {
                                    id: "settings",
                                    label: D.intl.string(T.default.FzfmQ8),
                                    icon: v.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: v.SettingsIcon },
                                    action: () =>
                                        (0, K.A)(t, {
                                            guildId: b ?? y,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: ep,
                                        }),
                                })
                              : null,
                          ey?.canRemoveBot === !0
                              ? (0, l.jsx)(p.Dr, {
                                    id: "remove-from-server",
                                    label: D.intl.formatToPlainString(T.default["3gKG2j"], { server: ey.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = z.Ay.getProject(t);
                                        null != e && Z({ project: e, target: ey, action: "remove" });
                                    },
                                })
                              : null,
                          eb
                              ? (0, l.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: D.intl.string(T.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = z.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, X.openModal)((t) => (0, l.jsx)(Y, { ...t, ...e })));
                                    },
                                })
                              : null,
                          _
                              ? (0, l.jsx)(p.Dr, {
                                    id: "delete",
                                    label: D.intl.string(D.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = z.Ay.getProject(t);
                                        if (null != e && null != ey) Z({ project: e, target: ey, action: "delete" });
                                        else
                                            (0, H.A)({
                                                title: D.intl.formatToPlainString(T.default.CJBhb2, { name: n }),
                                                subtitle: D.intl.string(T.default["0OmrVn"]),
                                                confirmText: D.intl.string(D.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, W.K)(t, () =>
                                                        (0, r.P0)({
                                                            text: D.intl.string(T.default["0XDHob"]),
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
function ea(e) {
    let { trigger: t = "header", ...n } = e,
        i = a.useRef(null);
    return (0, l.jsx)(y.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: y.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(el, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: a } = e,
                { isShown: r } = n;
            return (0, l.jsx)("div", {
                ref: i,
                className: ee.h,
                children:
                    "iconButton" === t
                        ? (0, l.jsx)(b.m, {
                              text: D.intl.string(D.t["UKOtz+"]),
                              children: (0, l.jsx)(_.K, {
                                  icon: w.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": D.intl.string(D.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": r,
                                  onClick: a,
                              }),
                          })
                        : (0, l.jsx)(A.A.Icon, {
                              icon: w.MoreHorizontalIcon,
                              tooltip: D.intl.string(D.t["UKOtz+"]),
                              "aria-label": D.intl.string(D.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": r,
                              selected: r,
                              onClick: a,
                          }),
            });
        },
    });
}
