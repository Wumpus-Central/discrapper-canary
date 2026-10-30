n.d(t, { A: () => el, z: () => en });
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
    g = n(70688),
    x = n(92446),
    h = n(173936),
    j = n(473935),
    v = n(625903),
    b = n(265872),
    k = n(866665),
    y = n(408278),
    _ = n(365199),
    A = n(7437),
    S = n(742589),
    w = n(147036),
    N = n(957565),
    C = n(785389),
    I = n(123917),
    E = n(860402),
    P = n(87501),
    T = n(105292);
let D = new Set();
var M = n(79733),
    z = n(442331),
    K = n(616334),
    B = n(260498);
n(321073);
var L = n(189714),
    G = n(733791),
    H = n(314116),
    W = n(371169),
    R = n(189213),
    F = n(331322),
    O = n(834730),
    $ = n(192308),
    X = n(664619),
    q = n(706935);
function J(e) {
    let { project: t, target: n, action: i, ...s } = e,
        [o, u] = a.useState(n.canRemovePreviewBot),
        [d, c] = a.useState(!1),
        [f, m] = a.useState(null),
        p = "delete" === i,
        g = p ? (0, G.fI)(n) : (0, G.Kd)(n),
        x = p ? null : (0, G.L4)(n),
        h = (0, G.Mi)(n),
        j = p
            ? T.intl.formatToPlainString(P.default.CJBhb2, { name: n.projectName })
            : T.intl.formatToPlainString(P.default.x6FvsZ, { app: n.appName });
    async function v() {
        (c(!0), m(null));
        let e = p ? (0, W.xx)(t.id) : (0, X.YI)(t.id, { alsoRemovePreviewBot: o }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(T.intl.string(p ? P.default["0XDHob"] : P.default.PJ2Fkn))
            : (p || (0, r.P0)({ text: (0, G.p_)(n), variant: "success" }), s.onClose());
    }
    return (0, l.jsx)(R.a, {
        ...s,
        role: "alertdialog",
        title: p ? j : (0, G.WX)((0, q.tb)(P.default.x6FvsZ, n.appName)),
        subtitle: p ? (0, G.J)(n) : T.intl.string(P.default["8OKM1N"]),
        "aria-label": j,
        notice: null == f ? void 0 : { message: f, type: "critical", role: "alert" },
        actions: [
            { text: T.intl.string(T.t["ETE/oC"]), variant: "secondary", onClick: s.onClose },
            {
                text: T.intl.string(p ? P.default.aC42bN : P.default.BGF8VT),
                variant: "critical-primary",
                loading: d,
                disabled: d,
                onClick: () => {
                    v().catch(() => {});
                },
            },
        ],
        children: (0, l.jsxs)(F.B, {
            gap: 12,
            children: [
                g.length > 0 || null != x
                    ? (0, l.jsx)(q.Ay, {
                          items: g,
                          optionalItem:
                              null == x
                                  ? void 0
                                  : { item: x, checked: o, onChange: u, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != h ? (0, l.jsx)(O.E, { variant: "text-sm/normal", color: "text-muted", children: h }) : null,
            ],
        }),
    });
}
function Q(e) {
    (0, $.openModal)((t) => (0, l.jsx)(J, { ...t, ...e }));
}
var U = n(587895);
function V(e) {
    let { project: t, ...n } = e,
        [s, o] = a.useState(!1),
        [u, d] = a.useState(null),
        c = (0, i.bG)([U.A], () => U.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = T.intl.formatToPlainString(P.default.m8KWic, { app: c });
    async function m() {
        (o(!0), d(null));
        let e = await (0, X.R_)(t.id);
        (o(!1), e)
            ? ((0, r.P0)({ text: T.intl.formatToPlainString(P.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : d(T.intl.string(P.default["rE/0SD"]));
    }
    return (0, l.jsx)(R.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: T.intl.string(P.default.wve4kB),
        "aria-label": f,
        notice: null == u ? void 0 : { message: u, type: "critical", role: "alert" },
        actions: [
            { text: T.intl.string(T.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: T.intl.string(P.default.GqcQyH),
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
var Y = n(746080),
    Z = n(552821);
let ee = [];
function et(e) {
    (0, r.P0)({ text: e, variant: "critical" });
}
function en(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: b,
            projectGuildId: k,
            isOwner: y,
            canRemix: _,
            onOpenProjectSettings: S,
            onExport: R,
            onImport: F,
            onRemix: O,
            onConnectTool: X,
            onHistory: q,
            onTogglePreviewPaused: J,
            previewPaused: U = !1,
            previewPauseDisabled: Z = !1,
            onTogglePopout: en,
            poppedOut: el = !1,
            onToggleDebug: ea,
            debugOpen: ei = !1,
            onClose: er,
            refreshApplicationId: es,
            previewProjectId: eo,
            onCloseMenu: eu,
        } = e,
        ed = (0, L.iI)(t),
        ec = a.useContext(M.bI),
        { pending: ef, refresh: em } = (0, A.A)(es ?? null),
        { pending: ep, connect: eg } = (function (e, t) {
            let [n, l] = a.useState(D),
                i = a.useRef(D),
                r = a.useCallback((e) => {
                    ((i.current = (0, C.Q6)(i.current, e)), l(i.current));
                }, []);
            return {
                pending: n,
                connect: a.useCallback(
                    (n) => {
                        if (null == e) return;
                        let a = (0, C.K9)(i.current, n.type);
                        async function s() {
                            let l = await (0, E.JI)(e, n.type);
                            (r(n.type), "url" === l.type)
                                ? (0, I.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, C.rq)(l.error)
                                          ? T.intl.string(P.default["jCQ/1B"])
                                          : T.intl.string(P.default.POxkSh),
                                  );
                        }
                        null != a && ((i.current = a), l(a), s().catch(() => r(n.type)));
                    },
                    [t, e, r],
                ),
            };
        })(eo ?? null, et),
        ex = (0, i.bG)([z.A], () => (null == eo ? ee : z.A.getDeclaredConnections(eo))),
        eh = a.useMemo(() => (0, C.Xl)(ex), [ex]),
        ej = (0, G.Bs)(t),
        ev = (0, G.CU)(t) && y,
        eb = (0, i.bG)(
            [B.Ay],
            () => {
                let e = B.Ay.getProject(t);
                return null != e && (0, B.jf)(e);
            },
            [t],
        ),
        ek = null != S || y || eb,
        ey = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                i = [];
            for (let { connection: e, offer: r } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: T.intl.string(P.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === r
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: T.intl.formatToPlainString(P.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: T.intl.formatToPlainString(P.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != es, refreshPending: ef, offers: eh, connectPending: ep }),
        e_ = a.useMemo(() => new Map(ex.map((e) => [e.type, e])), [ex]),
        eA = null != O && _,
        eS = y && null != F,
        ew = eA || null != R || eS || null != X || null != q,
        eN = N.p5 && null != b,
        eC = N.p5,
        eI = ed ? s.BellIcon : o.BellSlashIcon,
        eE = U ? u.PlayIcon : d.PauseIcon,
        eP = el ? c._ : f.t;
    return (0, l.jsxs)(m.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": T.intl.string(T.t.ogxXGq),
        onClose: eu,
        onSelect: eu,
        children: [
            null != J || null != en || null != er
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          null != J
                              ? (0, l.jsx)(p.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: eE,
                                    leadingAccessory: { type: "icon", icon: eE },
                                    label: T.intl.string(U ? P.default.ZKd2Cw : P.default.VHxerm),
                                    disabled: Z,
                                    action: J,
                                })
                              : null,
                          null != en
                              ? (0, l.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: eP,
                                    leadingAccessory: { type: "icon", icon: eP },
                                    label: T.intl.string(el ? T.t["NKV/MO"] : T.t["3Zypbv"]),
                                    action: en,
                                })
                              : null,
                          null != er
                              ? (0, l.jsx)(p.Dr, {
                                    id: "close",
                                    icon: g.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: g.DoorExitIcon },
                                    label: T.intl.string(P.default["/TlGcK"]),
                                    action: er,
                                })
                              : null,
                      ],
                  })
                : null,
            null != ea
                ? (0, l.jsx)(p.rX, {
                      children: (0, l.jsx)(p.sL, {
                          id: "debug",
                          label: T.intl.string(P.default.Mt5k9d),
                          leftIcon: x.BugIcon,
                          leadingAccessory: { type: "icon", icon: x.BugIcon },
                          checked: ei,
                          action: ea,
                      }),
                  })
                : null,
            ey.length > 0
                ? (0, l.jsx)(p.rX, {
                      children: ey.map((e) =>
                          (0, l.jsx)(
                              p.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void em();
                                      let t = null == e.connectionType ? null : e_.get(e.connectionType);
                                      null != t && eg(t);
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
                    label: T.intl.string(ed ? P.default.s9rCuH : P.default["a+i/As"]),
                    icon: eI,
                    leadingAccessory: { type: "icon", icon: eI },
                    action: () => (0, L.$L)(t, !ed),
                }),
            }),
            ew
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          eA
                              ? (0, l.jsx)(p.Dr, { id: "remix", label: T.intl.string(P.default.XWgAfc), action: O })
                              : null,
                          null != R
                              ? (0, l.jsx)(p.Dr, { id: "export", label: T.intl.string(P.default.WsEEP7), action: R })
                              : null,
                          eS
                              ? (0, l.jsx)(p.Dr, { id: "import", label: T.intl.string(P.default.rWGY3e), action: F })
                              : null,
                          null != X
                              ? (0, l.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: T.intl.string(P.default.yOIql5),
                                    action: X,
                                })
                              : null,
                          null != q
                              ? (0, l.jsx)(p.Dr, {
                                    id: "history",
                                    label: T.intl.string(P.default["3hIVou"]),
                                    action: q,
                                })
                              : null,
                      ],
                  })
                : null,
            eC
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          eN
                              ? (0, l.jsx)(p.Dr, {
                                    id: "copy-link",
                                    label: T.intl.string(T.t.WqhZss),
                                    icon: h.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: h.LinkIcon },
                                    action: () =>
                                        (0, N.C)((0, w.n)(b, Y.VV.CONJURE, t), () =>
                                            (0, r.P0)({ text: T.intl.string(T.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, l.jsx)(p.Dr, {
                              id: "copy-project-id",
                              label: T.intl.string(P.default["nm/zuU"]),
                              icon: j.L,
                              leadingAccessory: { type: "icon", icon: j.L },
                              action: () =>
                                  (0, N.C)(t, () =>
                                      (0, r.P0)({ text: T.intl.string(P.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            y || ek || ej?.canRemoveBot === !0
                ? (0, l.jsxs)(p.rX, {
                      children: [
                          ek
                              ? (0, l.jsx)(p.Dr, {
                                    id: "settings",
                                    label: T.intl.string(P.default.FzfmQ8),
                                    icon: v.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: v.SettingsIcon },
                                    action:
                                        S ??
                                        (() =>
                                            (0, K.A)(t, {
                                                guildId: k ?? b,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: ec,
                                            })),
                                })
                              : null,
                          ej?.canRemoveBot === !0
                              ? (0, l.jsx)(p.Dr, {
                                    id: "remove-from-server",
                                    label: T.intl.formatToPlainString(P.default["3gKG2j"], { server: ej.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        null != e && Q({ project: e, target: ej, action: "remove" });
                                    },
                                })
                              : null,
                          ev
                              ? (0, l.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: T.intl.string(P.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = B.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, $.openModal)((t) => (0, l.jsx)(V, { ...t, ...e })));
                                    },
                                })
                              : null,
                          y
                              ? (0, l.jsx)(p.Dr, {
                                    id: "delete",
                                    label: T.intl.string(T.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        if (null != e && null != ej) Q({ project: e, target: ej, action: "delete" });
                                        else
                                            (0, H.A)({
                                                title: T.intl.formatToPlainString(P.default.CJBhb2, { name: n }),
                                                subtitle: T.intl.string(P.default["0OmrVn"]),
                                                confirmText: T.intl.string(T.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, W.K)(t, () =>
                                                        (0, r.P0)({
                                                            text: T.intl.string(P.default["0XDHob"]),
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
        i = a.useRef(null);
    return (0, l.jsx)(b.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: b.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(en, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: a } = e,
                { isShown: r } = n;
            return (0, l.jsx)("div", {
                ref: i,
                className: Z.h,
                children:
                    "iconButton" === t
                        ? (0, l.jsx)(k.m, {
                              text: T.intl.string(T.t["UKOtz+"]),
                              children: (0, l.jsx)(y.K, {
                                  icon: _.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": T.intl.string(T.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": r,
                                  onClick: a,
                              }),
                          })
                        : (0, l.jsx)(S.A.Icon, {
                              icon: _.MoreHorizontalIcon,
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
