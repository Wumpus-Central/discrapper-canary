n.d(t, { z: () => en, A: () => er });
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
    m = n(92446),
    g = n(173936),
    y = n(473935),
    x = n(625903),
    b = n(265872),
    v = n(866665),
    w = n(408278),
    j = n(365199),
    k = n(164163),
    S = n(742589),
    C = n(147036),
    P = n(957565),
    _ = n(171691),
    M = n(785389),
    I = n(889558),
    D = n(860402),
    $ = n(191850),
    A = n(792996);
let q = new Set();
var T = n(826058),
    z = n(442331),
    B = n(616334),
    E = n(260498);
n(321073);
var F = n(189714),
    O = n(733791),
    W = n(314116),
    X = n(233470),
    N = n(189213),
    R = n(331322),
    K = n(834730),
    L = n(192308),
    G = n(664619),
    H = n(706935);
function V(e) {
    let { project: t, target: n, action: i, ...o } = e,
        [u, c] = l.useState(n.canRemovePreviewBot),
        [s, d] = l.useState(!1),
        [f, h] = l.useState(null),
        p = "delete" === i,
        m = p ? (0, O.fI)(n) : (0, O.Kd)(n),
        g = p ? null : (0, O.L4)(n),
        y = (0, O.Mi)(n),
        x = p
            ? A.intl.formatToPlainString($.default.CJBhb2, { name: n.projectName })
            : A.intl.formatToPlainString($.default.x6FvsZ, { app: n.appName });
    return (0, r.jsx)(N.a, {
        ...o,
        role: "alertdialog",
        title: p ? x : (0, O.WX)((0, H.tb)($.default.x6FvsZ, n.appName)),
        subtitle: p ? (0, O.J)(n) : A.intl.string($.default["8OKM1N"]),
        "aria-label": x,
        notice: null == f ? void 0 : { message: f, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: o.onClose },
            {
                text: A.intl.string(p ? $.default.aC42bN : $.default.BGF8VT),
                variant: "critical-primary",
                loading: s,
                disabled: s,
                onClick: () => {
                    (async function () {
                        (d(!0), h(null));
                        let e = p ? (0, X.xx)(t.id) : (0, G.YI)(t.id, { alsoRemovePreviewBot: u }),
                            r = await e.catch(() => null);
                        (d(!1), r?.ok !== !0)
                            ? h(A.intl.string(p ? $.default["0XDHob"] : $.default.PJ2Fkn))
                            : (p || (0, a.P0)({ text: (0, O.p_)(n), variant: "success" }), o.onClose());
                    })().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(R.B, {
            gap: 12,
            children: [
                m.length > 0 || null != g
                    ? (0, r.jsx)(H.Ay, {
                          items: m,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: u, onChange: c, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != y ? (0, r.jsx)(K.E, { variant: "body-sm/normal", color: "text-muted", children: y }) : null,
            ],
        }),
    });
}
function Q(e) {
    (0, L.qf)((t) => (0, r.jsx)(V, { ...t, ...e }));
}
var U = n(587895);
function Z(e) {
    let { project: t, ...n } = e,
        [o, u] = l.useState(!1),
        [c, s] = l.useState(null),
        d = (0, i.bG)([U.A], () => U.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = A.intl.formatToPlainString($.default.m8KWic, { app: d });
    return (0, r.jsx)(N.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: A.intl.string($.default.wve4kB),
        "aria-label": f,
        notice: null == c ? void 0 : { message: c, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: A.intl.string($.default.GqcQyH),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (u(!0), s(null));
                        let e = await (0, G.R_)(t.id);
                        (u(!1), e)
                            ? ((0, a.P0)({
                                  text: A.intl.formatToPlainString($.default.b8LN7N, { app: d }),
                                  variant: "success",
                              }),
                              n.onClose())
                            : s(A.intl.string($.default["rE/0SD"]));
                    })().catch(() => {});
                },
            },
        ],
    });
}
var Y = n(746080),
    J = n(552821);
let ee = [];
function et(e) {
    (0, a.P0)({ text: e, variant: "critical" });
}
function en(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: b,
            projectGuildId: v,
            isOwner: w,
            canRemix: j,
            onPublish: S,
            publishLabel: N,
            publishDisabled: R = !1,
            onOpenProjectSettings: K,
            onExport: G,
            onImport: H,
            onRemix: V,
            onConnectTool: U,
            onHistory: J,
            onDismiss: en,
            onTogglePreviewPaused: er,
            previewPaused: el = !1,
            previewPauseDisabled: ei = !1,
            onTogglePopout: ea,
            poppedOut: eo = !1,
            onToggleDebug: eu,
            debugOpen: ec = !1,
            refreshApplicationId: es,
            previewProjectId: ed,
            onCloseMenu: ef,
        } = e,
        eh = (0, F.iI)(t),
        ep = (0, _.lQ)(t) && !el,
        em = l.useContext(T.bI),
        { pending: eg, refresh: ey } = (0, k.A)(es ?? null),
        { pending: ex, connect: eb } = (function (e, t) {
            let [n, r] = l.useState(q),
                i = l.useRef(q),
                a = l.useCallback((e) => {
                    ((i.current = (0, M.Q6)(i.current, e)), r(i.current));
                }, []);
            return {
                pending: n,
                connect: l.useCallback(
                    (n) => {
                        if (null == e) return;
                        let l = (0, M.K9)(i.current, n.type);
                        null != l &&
                            ((i.current = l),
                            r(l),
                            (async function () {
                                let r = await (0, D.JI)(e, n.type);
                                (a(n.type), "url" === r.type)
                                    ? (0, I.h)({ href: r.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, M.rq)(r.error)
                                              ? A.intl.string($.default["jCQ/1B"])
                                              : A.intl.string($.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(ed ?? null, et),
        ev = (0, i.bG)([z.A], () => (null == ed ? ee : z.A.getDeclaredConnections(ed))),
        ew = l.useMemo(() => (0, M.Xl)(ev), [ev]),
        ej = (0, O.Bs)(t),
        ek = (0, O.CU)(t) && w,
        eS = (0, i.bG)(
            [E.Ay],
            () => {
                let e = E.Ay.getProject(t);
                return null != e && (0, E.jf)(e);
            },
            [t],
        ),
        eC = null != K || w || eS,
        eP = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: r, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: a } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: A.intl.string($.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            r))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString($.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString($.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != es, refreshPending: eg, offers: ew, connectPending: ex }),
        e_ = l.useMemo(() => new Map(ev.map((e) => [e.type, e])), [ev]),
        eM = null != V && j,
        eI = w && null != H,
        eD = eM || null != G || eI || null != U || null != J,
        e$ = P.p5 && null != b,
        eA = P.p5,
        eq = eh ? o.BellIcon : u.BellSlashIcon,
        eT = el ? c.PlayIcon : s.PauseIcon,
        ez = eo ? d._ : f.t;
    return (0, r.jsxs)(h.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": A.intl.string(A.t.ogxXGq),
        onClose: ef,
        onSelect: ef,
        children: [
            null != S
                ? (0, r.jsx)(p.rX, {
                      children: (0, r.jsx)(p.Dr, {
                          id: "publish",
                          label: N ?? A.intl.string($.default["120EFN"]),
                          disabled: R,
                          action: S,
                      }),
                  })
                : null,
            null != er || null != ea
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          null != er
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: eT,
                                    leadingAccessory: { type: "icon", icon: eT },
                                    label: A.intl.string(el ? $.default.ZKd2Cw : $.default.VHxerm),
                                    subtext: ep ? A.intl.string($.default.WjdaFw) : void 0,
                                    disabled: ei || ep,
                                    action: er,
                                })
                              : null,
                          null != ea
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: ez,
                                    leadingAccessory: { type: "icon", icon: ez },
                                    label: A.intl.string(eo ? A.t["NKV/MO"] : A.t["3Zypbv"]),
                                    subtext: ep && !eo ? A.intl.string($.default.WjdaFw) : void 0,
                                    disabled: ep && !eo,
                                    action: ea,
                                })
                              : null,
                      ],
                  })
                : null,
            null != eu
                ? (0, r.jsx)(p.rX, {
                      children: (0, r.jsx)(p.sL, {
                          id: "debug",
                          label: A.intl.string($.default.Mt5k9d),
                          leftIcon: m.BugIcon,
                          leadingAccessory: { type: "icon", icon: m.BugIcon },
                          checked: ec,
                          action: eu,
                      }),
                  })
                : null,
            eP.length > 0
                ? (0, r.jsx)(p.rX, {
                      children: eP.map((e) =>
                          (0, r.jsx)(
                              p.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void ey();
                                      let t = null == e.connectionType ? null : e_.get(e.connectionType);
                                      null != t && eb(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, r.jsxs)(p.rX, {
                children: [
                    (0, r.jsx)(p.Dr, {
                        id: "mute",
                        label: A.intl.string(eh ? $.default.s9rCuH : $.default["a+i/As"]),
                        icon: eq,
                        leadingAccessory: { type: "icon", icon: eq },
                        action: () => (0, F.$L)(t, !eh),
                    }),
                    null != en
                        ? (0, r.jsx)(p.Dr, { id: "dismiss", label: A.intl.string($.default.bWzWw9), action: en })
                        : null,
                ],
            }),
            eD
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          eM
                              ? (0, r.jsx)(p.Dr, { id: "remix", label: A.intl.string($.default["276ll6"]), action: V })
                              : null,
                          null != G
                              ? (0, r.jsx)(p.Dr, { id: "export", label: A.intl.string($.default.WsEEP7), action: G })
                              : null,
                          eI
                              ? (0, r.jsx)(p.Dr, { id: "import", label: A.intl.string($.default.rWGY3e), action: H })
                              : null,
                          null != U
                              ? (0, r.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: A.intl.string($.default.yOIql5),
                                    action: U,
                                })
                              : null,
                          null != J
                              ? (0, r.jsx)(p.Dr, {
                                    id: "history",
                                    label: A.intl.string($.default["3hIVou"]),
                                    action: J,
                                })
                              : null,
                      ],
                  })
                : null,
            eA
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          e$
                              ? (0, r.jsx)(p.Dr, {
                                    id: "copy-link",
                                    label: A.intl.string(A.t.WqhZss),
                                    icon: g.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: g.LinkIcon },
                                    action: () =>
                                        (0, P.C)((0, C.n)(b, Y.VV.CONJURE, t), () =>
                                            (0, a.P0)({ text: A.intl.string(A.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(p.Dr, {
                              id: "copy-project-id",
                              label: A.intl.string($.default["nm/zuU"]),
                              icon: y.L,
                              leadingAccessory: { type: "icon", icon: y.L },
                              action: () =>
                                  (0, P.C)(t, () =>
                                      (0, a.P0)({ text: A.intl.string($.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            w || eC || ej?.canRemoveBot === !0
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          eC
                              ? (0, r.jsx)(p.Dr, {
                                    id: "settings",
                                    label: A.intl.string($.default.FzfmQ8),
                                    icon: x.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: x.SettingsIcon },
                                    action:
                                        K ??
                                        (() =>
                                            (0, B.A)(t, {
                                                guildId: v ?? b,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: em,
                                            })),
                                })
                              : null,
                          ej?.canRemoveBot === !0
                              ? (0, r.jsx)(p.Dr, {
                                    id: "remove-from-server",
                                    label: A.intl.formatToPlainString($.default["3gKG2j"], { server: ej.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = E.Ay.getProject(t);
                                        null != e && Q({ project: e, target: ej, action: "remove" });
                                    },
                                })
                              : null,
                          ek
                              ? (0, r.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: A.intl.string($.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = E.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }), (0, L.qf)((t) => (0, r.jsx)(Z, { ...t, ...e })));
                                    },
                                })
                              : null,
                          w
                              ? (0, r.jsx)(p.Dr, {
                                    id: "delete",
                                    label: A.intl.string(A.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = E.Ay.getProject(t);
                                        if (null != e && null != ej) Q({ project: e, target: ej, action: "delete" });
                                        else
                                            (0, W.A)({
                                                title: A.intl.formatToPlainString($.default.CJBhb2, { name: n }),
                                                subtitle: A.intl.string($.default["0OmrVn"]),
                                                confirmText: A.intl.string(A.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, X.K)(t, () =>
                                                        (0, a.P0)({
                                                            text: A.intl.string($.default["0XDHob"]),
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
function er(e) {
    let { trigger: t = "header", ...n } = e,
        i = l.useRef(null);
    return (0, r.jsx)(b.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: b.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(en, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: a } = n;
            return (0, r.jsx)("div", {
                ref: i,
                className: J.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(v.m, {
                              text: A.intl.string(A.t["UKOtz+"]),
                              children: (0, r.jsx)(w.K, {
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
