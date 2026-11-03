n.d(t, { A: () => er, z: () => en });
var r = n(477900),
    l = n(582128),
    i = n(17928),
    a = n(858899),
    o = n(782603),
    u = n(780338),
    c = n(782134),
    s = n(113494),
    d = n(12470),
    f = n(811893),
    h = n(980707),
    p = n(477782),
    m = n(92446),
    g = n(173936),
    y = n(473935),
    x = n(625903),
    b = n(265872),
    v = n(866665),
    w = n(408278),
    j = n(365199),
    k = n(7437),
    S = n(742589),
    C = n(147036),
    P = n(957565),
    _ = n(171691),
    M = n(785389),
    I = n(123917),
    $ = n(860402),
    D = n(809526),
    A = n(105292);
let T = new Set();
var q = n(79733),
    z = n(442331),
    B = n(616334),
    E = n(260498);
n(321073);
var O = n(189714),
    F = n(733791),
    N = n(314116),
    X = n(371169),
    R = n(189213),
    K = n(331322),
    L = n(834730),
    G = n(192308),
    W = n(664619),
    H = n(706935);
function V(e) {
    let { project: t, target: n, action: i, ...o } = e,
        [u, c] = l.useState(n.canRemovePreviewBot),
        [s, d] = l.useState(!1),
        [f, h] = l.useState(null),
        p = "delete" === i,
        m = p ? (0, F.fI)(n) : (0, F.Kd)(n),
        g = p ? null : (0, F.L4)(n),
        y = (0, F.Mi)(n),
        x = p
            ? A.intl.formatToPlainString(D.default.CJBhb2, { name: n.projectName })
            : A.intl.formatToPlainString(D.default.x6FvsZ, { app: n.appName });
    async function b() {
        (d(!0), h(null));
        let e = p ? (0, X.xx)(t.id) : (0, W.YI)(t.id, { alsoRemovePreviewBot: u }),
            r = await e.catch(() => null);
        (d(!1), r?.ok !== !0)
            ? h(A.intl.string(p ? D.default["0XDHob"] : D.default.PJ2Fkn))
            : (p || (0, a.P0)({ text: (0, F.p_)(n), variant: "success" }), o.onClose());
    }
    return (0, r.jsx)(R.a, {
        ...o,
        role: "alertdialog",
        title: p ? x : (0, F.WX)((0, H.tb)(D.default.x6FvsZ, n.appName)),
        subtitle: p ? (0, F.J)(n) : A.intl.string(D.default["8OKM1N"]),
        "aria-label": x,
        notice: null == f ? void 0 : { message: f, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: o.onClose },
            {
                text: A.intl.string(p ? D.default.aC42bN : D.default.BGF8VT),
                variant: "critical-primary",
                loading: s,
                disabled: s,
                onClick: () => {
                    b().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(K.B, {
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
                null != y ? (0, r.jsx)(L.E, { variant: "text-sm/normal", color: "text-muted", children: y }) : null,
            ],
        }),
    });
}
function Q(e) {
    (0, G.openModal)((t) => (0, r.jsx)(V, { ...t, ...e }));
}
var U = n(587895);
function Z(e) {
    let { project: t, ...n } = e,
        [o, u] = l.useState(!1),
        [c, s] = l.useState(null),
        d = (0, i.bG)([U.A], () => U.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = A.intl.formatToPlainString(D.default.m8KWic, { app: d });
    async function h() {
        (u(!0), s(null));
        let e = await (0, W.R_)(t.id);
        (u(!1), e)
            ? ((0, a.P0)({ text: A.intl.formatToPlainString(D.default.b8LN7N, { app: d }), variant: "success" }),
              n.onClose())
            : s(A.intl.string(D.default["rE/0SD"]));
    }
    return (0, r.jsx)(R.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: A.intl.string(D.default.wve4kB),
        "aria-label": f,
        notice: null == c ? void 0 : { message: c, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: A.intl.string(D.default.GqcQyH),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    h().catch(() => {});
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
            publishLabel: R,
            publishDisabled: K = !1,
            onOpenProjectSettings: L,
            onExport: W,
            onImport: H,
            onRemix: V,
            onConnectTool: U,
            onHistory: J,
            onTogglePreviewPaused: en,
            previewPaused: er = !1,
            previewPauseDisabled: el = !1,
            onTogglePopout: ei,
            poppedOut: ea = !1,
            onToggleDebug: eo,
            debugOpen: eu = !1,
            refreshApplicationId: ec,
            previewProjectId: es,
            onCloseMenu: ed,
        } = e,
        ef = (0, O.iI)(t),
        eh = (0, _.lQ)(t) && !er,
        ep = l.useContext(q.bI),
        { pending: em, refresh: eg } = (0, k.A)(ec ?? null),
        { pending: ey, connect: ex } = (function (e, t) {
            let [n, r] = l.useState(T),
                i = l.useRef(T),
                a = l.useCallback((e) => {
                    ((i.current = (0, M.Q6)(i.current, e)), r(i.current));
                }, []);
            return {
                pending: n,
                connect: l.useCallback(
                    (n) => {
                        if (null == e) return;
                        let l = (0, M.K9)(i.current, n.type);
                        async function o() {
                            let r = await (0, $.JI)(e, n.type);
                            (a(n.type), "url" === r.type)
                                ? (0, I.h)({ href: r.url, trusted: !1 })
                                : t(
                                      "setup" === (0, M.rq)(r.error)
                                          ? A.intl.string(D.default["jCQ/1B"])
                                          : A.intl.string(D.default.POxkSh),
                                  );
                        }
                        null != l && ((i.current = l), r(l), o().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(es ?? null, et),
        eb = (0, i.bG)([z.A], () => (null == es ? ee : z.A.getDeclaredConnections(es))),
        ev = l.useMemo(() => (0, M.Xl)(eb), [eb]),
        ew = (0, F.Bs)(t),
        ej = (0, F.CU)(t) && w,
        ek = (0, i.bG)(
            [E.Ay],
            () => {
                let e = E.Ay.getProject(t);
                return null != e && (0, E.jf)(e);
            },
            [t],
        ),
        eS = null != L || w || ek,
        eC = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: r, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: a } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: A.intl.string(D.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            r))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(D.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(D.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != ec, refreshPending: em, offers: ev, connectPending: ey }),
        eP = l.useMemo(() => new Map(eb.map((e) => [e.type, e])), [eb]),
        e_ = null != V && j,
        eM = w && null != H,
        eI = e_ || null != W || eM || null != U || null != J,
        e$ = P.p5 && null != b,
        eD = P.p5,
        eA = ef ? o.BellIcon : u.BellSlashIcon,
        eT = er ? c.PlayIcon : s.PauseIcon,
        eq = ea ? d._ : f.t;
    return (0, r.jsxs)(h.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": A.intl.string(A.t.ogxXGq),
        onClose: ed,
        onSelect: ed,
        children: [
            null != S
                ? (0, r.jsx)(p.rX, {
                      children: (0, r.jsx)(p.Dr, {
                          id: "publish",
                          label: R ?? A.intl.string(D.default["120EFN"]),
                          disabled: K,
                          action: S,
                      }),
                  })
                : null,
            null != en || null != ei
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          null != en
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: eT,
                                    leadingAccessory: { type: "icon", icon: eT },
                                    label: A.intl.string(er ? D.default.ZKd2Cw : D.default.VHxerm),
                                    subtext: eh ? A.intl.string(D.default.WjdaFw) : void 0,
                                    disabled: el || eh,
                                    action: en,
                                })
                              : null,
                          null != ei
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: eq,
                                    leadingAccessory: { type: "icon", icon: eq },
                                    label: A.intl.string(ea ? A.t["NKV/MO"] : A.t["3Zypbv"]),
                                    action: ei,
                                })
                              : null,
                      ],
                  })
                : null,
            null != eo
                ? (0, r.jsx)(p.rX, {
                      children: (0, r.jsx)(p.sL, {
                          id: "debug",
                          label: A.intl.string(D.default.Mt5k9d),
                          leftIcon: m.BugIcon,
                          leadingAccessory: { type: "icon", icon: m.BugIcon },
                          checked: eu,
                          action: eo,
                      }),
                  })
                : null,
            eC.length > 0
                ? (0, r.jsx)(p.rX, {
                      children: eC.map((e) =>
                          (0, r.jsx)(
                              p.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void eg();
                                      let t = null == e.connectionType ? null : eP.get(e.connectionType);
                                      null != t && ex(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, r.jsx)(p.rX, {
                children: (0, r.jsx)(p.Dr, {
                    id: "mute",
                    label: A.intl.string(ef ? D.default.s9rCuH : D.default["a+i/As"]),
                    icon: eA,
                    leadingAccessory: { type: "icon", icon: eA },
                    action: () => (0, O.$L)(t, !ef),
                }),
            }),
            eI
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          e_
                              ? (0, r.jsx)(p.Dr, { id: "remix", label: A.intl.string(D.default["276ll6"]), action: V })
                              : null,
                          null != W
                              ? (0, r.jsx)(p.Dr, { id: "export", label: A.intl.string(D.default.WsEEP7), action: W })
                              : null,
                          eM
                              ? (0, r.jsx)(p.Dr, { id: "import", label: A.intl.string(D.default.rWGY3e), action: H })
                              : null,
                          null != U
                              ? (0, r.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: A.intl.string(D.default.yOIql5),
                                    action: U,
                                })
                              : null,
                          null != J
                              ? (0, r.jsx)(p.Dr, {
                                    id: "history",
                                    label: A.intl.string(D.default["3hIVou"]),
                                    action: J,
                                })
                              : null,
                      ],
                  })
                : null,
            eD
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
                              label: A.intl.string(D.default["nm/zuU"]),
                              icon: y.L,
                              leadingAccessory: { type: "icon", icon: y.L },
                              action: () =>
                                  (0, P.C)(t, () =>
                                      (0, a.P0)({ text: A.intl.string(D.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            w || eS || ew?.canRemoveBot === !0
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          eS
                              ? (0, r.jsx)(p.Dr, {
                                    id: "settings",
                                    label: A.intl.string(D.default.FzfmQ8),
                                    icon: x.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: x.SettingsIcon },
                                    action:
                                        L ??
                                        (() =>
                                            (0, B.A)(t, {
                                                guildId: v ?? b,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: ep,
                                            })),
                                })
                              : null,
                          ew?.canRemoveBot === !0
                              ? (0, r.jsx)(p.Dr, {
                                    id: "remove-from-server",
                                    label: A.intl.formatToPlainString(D.default["3gKG2j"], { server: ew.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = E.Ay.getProject(t);
                                        null != e && Q({ project: e, target: ew, action: "remove" });
                                    },
                                })
                              : null,
                          ej
                              ? (0, r.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: A.intl.string(D.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = E.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, G.openModal)((t) => (0, r.jsx)(Z, { ...t, ...e })));
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
                                        if (null != e && null != ew) Q({ project: e, target: ew, action: "delete" });
                                        else
                                            (0, N.A)({
                                                title: A.intl.formatToPlainString(D.default.CJBhb2, { name: n }),
                                                subtitle: A.intl.string(D.default["0OmrVn"]),
                                                confirmText: A.intl.string(A.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, X.K)(t, () =>
                                                        (0, a.P0)({
                                                            text: A.intl.string(D.default["0XDHob"]),
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
