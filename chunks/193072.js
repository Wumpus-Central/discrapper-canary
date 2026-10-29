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
    b = n(265872),
    y = n(866665),
    _ = n(408278),
    A = n(365199),
    w = n(7437),
    S = n(742589),
    N = n(147036),
    C = n(957565),
    I = n(785389),
    E = n(123917),
    P = n(860402),
    D = n(248675),
    T = n(105292);
let M = new Set();
var L = n(893067),
    K = n(442331),
    z = n(616334),
    B = n(260498);
n(321073);
var G = n(189714),
    R = n(733791),
    H = n(314116),
    W = n(371169),
    O = n(189213),
    $ = n(331322),
    F = n(834730),
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
            ? T.intl.formatToPlainString(D.default.CJBhb2, { name: n.projectName })
            : T.intl.formatToPlainString(D.default.x6FvsZ, { app: n.appName });
    async function k() {
        (c(!0), m(null));
        let e = p ? (0, W.xx)(t.id) : (0, q.YI)(t.id, { alsoRemovePreviewBot: o }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(T.intl.string(p ? D.default["0XDHob"] : D.default.PJ2Fkn))
            : (p || (0, r.P0)({ text: (0, R.p_)(n), variant: "success" }), s.onClose());
    }
    return (0, l.jsx)(O.a, {
        ...s,
        role: "alertdialog",
        title: p ? j : (0, R.WX)((0, J.tb)(D.default.x6FvsZ, n.appName)),
        subtitle: p ? (0, R.J)(n) : T.intl.string(D.default["8OKM1N"]),
        "aria-label": j,
        notice: null == f ? void 0 : { message: f, type: "critical", role: "alert" },
        actions: [
            { text: T.intl.string(T.t["ETE/oC"]), variant: "secondary", onClick: s.onClose },
            {
                text: T.intl.string(p ? D.default.aC42bN : D.default.BGF8VT),
                variant: "critical-primary",
                loading: d,
                disabled: d,
                onClick: () => {
                    k().catch(() => {});
                },
            },
        ],
        children: (0, l.jsxs)($.B, {
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
                null != x ? (0, l.jsx)(F.E, { variant: "text-sm/normal", color: "text-muted", children: x }) : null,
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
        f = T.intl.formatToPlainString(D.default.m8KWic, { app: c });
    async function m() {
        (o(!0), d(null));
        let e = await (0, q.R_)(t.id);
        (o(!1), e)
            ? ((0, r.P0)({ text: T.intl.formatToPlainString(D.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : d(T.intl.string(D.default["rE/0SD"]));
    }
    return (0, l.jsx)(O.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: T.intl.string(D.default.wve4kB),
        "aria-label": f,
        notice: null == u ? void 0 : { message: u, type: "critical", role: "alert" },
        actions: [
            { text: T.intl.string(T.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: T.intl.string(D.default.GqcQyH),
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
            guildId: b,
            projectGuildId: y,
            isOwner: _,
            canRemix: A,
            hideProjectSettings: S = !1,
            onExport: O,
            onImport: $,
            onRemix: F,
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
        { pending: eg, refresh: eh } = (0, w.A)(ed ?? null),
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
                                          ? T.intl.string(D.default["jCQ/1B"])
                                          : T.intl.string(D.default.POxkSh),
                                  );
                        }
                        null != a && ((i.current = a), l(a), s().catch(() => r(n.type)));
                    },
                    [t, e, r],
                ),
            };
        })(ec ?? null, en),
        ek = (0, i.bG)([K.A], () => (null == ec ? et : K.A.getDeclaredConnections(ec))),
        ev = a.useMemo(() => (0, I.Xl)(ek), [ek]),
        eb = (0, R.Bs)(t),
        ey = (0, R.CU)(t) && _,
        e_ = (0, i.bG)(
            [B.Ay],
            () => {
                let e = B.Ay.getProject(t);
                return null != e && (0, B.jf)(e);
            },
            [t],
        ),
        eA = !S && (_ || e_),
        ew = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                i = [];
            for (let { connection: e, offer: r } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: T.intl.string(D.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === r
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: T.intl.formatToPlainString(D.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: T.intl.formatToPlainString(D.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != ed, refreshPending: eg, offers: ev, connectPending: ex }),
        eS = a.useMemo(() => new Map(ek.map((e) => [e.type, e])), [ek]),
        eN = null != F && A,
        eC = _ && null != $,
        eI = eN || null != O || eC || null != q || null != J,
        eE = C.p5 && null != b,
        eP = C.p5,
        eD = em ? s.BellIcon : o.BellSlashIcon,
        eT = el ? u.PlayIcon : d.PauseIcon,
        eM = er ? c._ : f.t;
    return (0, l.jsxs)(m.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": T.intl.string(T.t.ogxXGq),
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
                                    label: T.intl.string(D.default["p4B/7M"]),
                                    disabled: Q,
                                    action: V,
                                })
                              : null,
                          null != ee
                              ? (0, l.jsx)(p.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: eT,
                                    leadingAccessory: { type: "icon", icon: eT },
                                    label: T.intl.string(el ? D.default.ZKd2Cw : D.default.VHxerm),
                                    disabled: ea,
                                    action: ee,
                                })
                              : null,
                          null != ei
                              ? (0, l.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: eM,
                                    leadingAccessory: { type: "icon", icon: eM },
                                    label: T.intl.string(er ? T.t["NKV/MO"] : T.t["3Zypbv"]),
                                    action: ei,
                                })
                              : null,
                          null != eu
                              ? (0, l.jsx)(p.Dr, {
                                    id: "close",
                                    icon: h.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: h.DoorExitIcon },
                                    label: T.intl.string(D.default["/TlGcK"]),
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
                          label: T.intl.string(D.default.Mt5k9d),
                          leftIcon: x.BugIcon,
                          leadingAccessory: { type: "icon", icon: x.BugIcon },
                          checked: eo,
                          action: es,
                      }),
                  })
                : null,
            ew.length > 0
                ? (0, l.jsx)(p.rX, {
                      children: ew.map((e) =>
                          (0, l.jsx)(
                              p.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void eh();
                                      let t = null == e.connectionType ? null : eS.get(e.connectionType);
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
                    label: T.intl.string(em ? D.default.s9rCuH : D.default["a+i/As"]),
                    icon: eD,
                    leadingAccessory: { type: "icon", icon: eD },
                    action: () => (0, G.$L)(t, !em),
                }),
            }),
            eI
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          eN
                              ? (0, l.jsx)(p.Dr, { id: "remix", label: T.intl.string(D.default.XWgAfc), action: F })
                              : null,
                          null != O
                              ? (0, l.jsx)(p.Dr, { id: "export", label: T.intl.string(D.default.WsEEP7), action: O })
                              : null,
                          eC
                              ? (0, l.jsx)(p.Dr, { id: "import", label: T.intl.string(D.default.rWGY3e), action: $ })
                              : null,
                          null != q
                              ? (0, l.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: T.intl.string(D.default.yOIql5),
                                    action: q,
                                })
                              : null,
                          null != J
                              ? (0, l.jsx)(p.Dr, {
                                    id: "history",
                                    label: T.intl.string(D.default["3hIVou"]),
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
                                    label: T.intl.string(T.t.WqhZss),
                                    icon: j.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: j.LinkIcon },
                                    action: () =>
                                        (0, C.C)((0, N.n)(b, U.VV.CONJURE, t), () =>
                                            (0, r.P0)({ text: T.intl.string(T.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, l.jsx)(p.Dr, {
                              id: "copy-project-id",
                              label: T.intl.string(D.default["nm/zuU"]),
                              icon: k.L,
                              leadingAccessory: { type: "icon", icon: k.L },
                              action: () =>
                                  (0, C.C)(t, () =>
                                      (0, r.P0)({ text: T.intl.string(D.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            _ || eA || eb?.canRemoveBot === !0
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          eA
                              ? (0, l.jsx)(p.Dr, {
                                    id: "settings",
                                    label: T.intl.string(D.default.FzfmQ8),
                                    icon: v.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: v.SettingsIcon },
                                    action: () =>
                                        (0, z.A)(t, {
                                            guildId: y ?? b,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: ep,
                                        }),
                                })
                              : null,
                          eb?.canRemoveBot === !0
                              ? (0, l.jsx)(p.Dr, {
                                    id: "remove-from-server",
                                    label: T.intl.formatToPlainString(D.default["3gKG2j"], { server: eb.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        null != e && Z({ project: e, target: eb, action: "remove" });
                                    },
                                })
                              : null,
                          ey
                              ? (0, l.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: T.intl.string(D.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = B.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, X.openModal)((t) => (0, l.jsx)(Y, { ...t, ...e })));
                                    },
                                })
                              : null,
                          _
                              ? (0, l.jsx)(p.Dr, {
                                    id: "delete",
                                    label: T.intl.string(T.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        if (null != e && null != eb) Z({ project: e, target: eb, action: "delete" });
                                        else
                                            (0, H.A)({
                                                title: T.intl.formatToPlainString(D.default.CJBhb2, { name: n }),
                                                subtitle: T.intl.string(D.default["0OmrVn"]),
                                                confirmText: T.intl.string(T.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, W.K)(t, () =>
                                                        (0, r.P0)({
                                                            text: T.intl.string(D.default["0XDHob"]),
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
    return (0, l.jsx)(b.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: b.Y.Animation.NONE,
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
                        ? (0, l.jsx)(y.m, {
                              text: T.intl.string(T.t["UKOtz+"]),
                              children: (0, l.jsx)(_.K, {
                                  icon: A.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": T.intl.string(T.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": r,
                                  onClick: a,
                              }),
                          })
                        : (0, l.jsx)(S.A.Icon, {
                              icon: A.MoreHorizontalIcon,
                              tooltip: T.intl.string(T.t["UKOtz+"]),
                              "aria-label": T.intl.string(T.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": r,
                              selected: r,
                              onClick: a,
                          }),
            });
        },
    });
}
