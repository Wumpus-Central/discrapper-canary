(t.d(l, { default: () => e8 }), t(321073));
var n = t(477900),
    a = t(582128),
    i = t(855986),
    r = t(314116),
    s = t(224640),
    u = t(20742),
    o = t(430993),
    c = t(761508),
    d = t(331322),
    f = t(834730),
    p = t(289873),
    g = t(696208),
    h = t(540665),
    m = t(260498),
    x = t(360047),
    b = t(191850),
    j = t(792996);
let v = [],
    y = [],
    k = { live: !1, hasPreview: !0 };
var S = t(265872),
    C = t(165862),
    P = t(477782),
    E = t(866665),
    _ = t(408278),
    A = t(365199),
    w = t(691885),
    I = t(821609),
    T = t(762026),
    N = t(700915),
    B = t(985965),
    L = t(843313);
function M(e) {
    let { linkedApps: l, onOpenSettings: t } = e,
        { callers: a, targets: i, projects: s, names: u, failed: o, saved: c, setBuild: p, remove: g } = l;
    return (0, n.jsx)("div", {
        className: L.Mf,
        children: (0, n.jsxs)(d.B, {
            gap: 24,
            children: [
                a.length > 0
                    ? (0, n.jsxs)(d.B, {
                          gap: 8,
                          children: [
                              (0, n.jsx)("h3", {
                                  className: L.Gf,
                                  children: (0, n.jsx)(f.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: j.intl.formatToPlainString(b.default.uLPdNT, { name: l.name }),
                                  }),
                              }),
                              a.map((e) =>
                                  (0, n.jsx)(
                                      G,
                                      {
                                          caller: e,
                                          sides: (0, T.cL)(l, e),
                                          project: s[e.project_id],
                                          targetProject: l.project,
                                          onBuildChange: (l) => p(e.project_id, l),
                                          onRemove: () => {
                                              var l, t;
                                              return (
                                                  (l = e.project_id),
                                                  (t = u[e.project_id]),
                                                  void (0, r.A)({
                                                      title: j.intl.formatToPlainString(b.default.zSfIvv, { name: t }),
                                                      subtitle: j.intl.formatToPlainString(b.default["7TX+mR"], {
                                                          name: t,
                                                      }),
                                                      confirmText: j.intl.string(b.default.vDZEGQ),
                                                      variant: "critical",
                                                      onConfirm: () => g(l),
                                                  })
                                              );
                                          },
                                      },
                                      e.project_id,
                                  ),
                              ),
                          ],
                      })
                    : null,
                i.length > 0
                    ? (0, n.jsxs)(d.B, {
                          gap: 8,
                          children: [
                              (0, n.jsx)("h3", {
                                  className: L.Gf,
                                  children: (0, n.jsx)(f.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: j.intl.formatToPlainString(b.default.L3Bf1s, { name: l.name }),
                                  }),
                              }),
                              i.map((e) =>
                                  (0, n.jsx)(
                                      z,
                                      {
                                          target: e,
                                          sides: (0, T.cs)(l, e),
                                          project: s[e.project_id],
                                          callerProject: l.project,
                                          onOpen: () => t(e.project_id),
                                      },
                                      e.project_id,
                                  ),
                              ),
                          ],
                      })
                    : null,
                (0, n.jsx)("div", {
                    role: "status",
                    children: o
                        ? (0, n.jsx)(f.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              children: j.intl.string(b.default.dIEOrl),
                          })
                        : c
                          ? (0, n.jsx)(f.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: j.intl.string(b.default["/d6saK"]),
                            })
                          : null,
                }),
            ],
        }),
    });
}
function G(e) {
    let { caller: l, sides: t, project: i, targetProject: r, onBuildChange: s, onRemove: u } = e,
        o = a.useRef(null),
        c = j.intl.formatToPlainString(b.default.bzMlmh, { name: t.caller }),
        d = (0, T.Sj)(t, l.build),
        p = (0, T.xP)(l.purpose);
    return (0, n.jsxs)("div", {
        className: L.nf,
        children: [
            (0, n.jsxs)("div", {
                className: L.nM,
                children: [
                    (0, n.jsx)("div", {
                        className: L.UU,
                        children: (0, n.jsx)(N.A, {
                            caller: t.caller,
                            target: t.target,
                            callerProject: i,
                            targetProject: r,
                            flow: l.flow ?? null,
                        }),
                    }),
                    (0, n.jsx)(S.Y, {
                        targetElementRef: o,
                        position: "bottom",
                        align: "right",
                        animation: S.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, n.jsx)(C.W, {
                                "data-menu-migrated": !0,
                                navId: `conjure-linked-app-${l.project_id}`,
                                "aria-label": c,
                                onClose: t,
                                onSelect: t,
                                children: (0, n.jsx)(P.rX, {
                                    children: (0, n.jsx)(P.Dr, {
                                        id: "remove",
                                        color: "danger",
                                        label: j.intl.string(b.default.bN1S9T),
                                        action: u,
                                    }),
                                }),
                            });
                        },
                        children: (e, l) => {
                            let { onClick: t } = e,
                                { isShown: a } = l;
                            return (0, n.jsx)("div", {
                                ref: o,
                                className: L.hZ,
                                children: (0, n.jsx)(E.m, {
                                    text: c,
                                    children: (0, n.jsx)(_.K, {
                                        icon: A.MoreHorizontalIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": c,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": a,
                                        onClick: t,
                                    }),
                                }),
                            });
                        },
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: L.zH,
                children: [
                    null != p ? (0, n.jsx)(B.A, { purpose: p }) : null,
                    null != d
                        ? (0, n.jsxs)("div", {
                              className: L.W0,
                              children: [
                                  null != d.preview ? (0, n.jsx)(R, { setting: d.preview, onBuildChange: s }) : null,
                                  (0, n.jsx)(R, { setting: d.live, onBuildChange: s }),
                              ],
                          })
                        : null,
                    d?.note != null
                        ? (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-muted", children: d.note })
                        : null,
                ],
            }),
        ],
    });
}
function R(e) {
    let { setting: l, onBuildChange: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-default", className: L.px, children: l.label }),
            (0, n.jsx)("div", {
                className: L.Lt,
                children: (0, n.jsx)(w.l, {
                    label: l.label,
                    hideLabel: !0,
                    options: l.options.map((e) => ({
                        id: e.data,
                        value: e.data,
                        label: e.label,
                        description: e.description,
                        disabled: e.disabled,
                    })),
                    value: l.value,
                    selectionMode: "single",
                    fullWidth: !0,
                    disabled: l.locked,
                    onSelectionChange: (e) => {
                        e !== l.value && t(l.buildFor(e));
                    },
                }),
            }),
        ],
    });
}
function z(e) {
    let { target: l, sides: t, project: a, callerProject: i, onOpen: r } = e,
        s = (0, T.xP)(l.purpose),
        u = (0, T.ft)(t, l.build),
        o = null != a && (0, m.jf)(a);
    return (0, n.jsxs)("div", {
        className: L.nf,
        children: [
            (0, n.jsxs)("div", {
                className: L.nM,
                children: [
                    (0, n.jsx)("div", {
                        className: L.UU,
                        children: (0, n.jsx)(N.A, {
                            caller: t.caller,
                            target: t.target,
                            callerProject: i,
                            targetProject: a,
                            flow: l.flow ?? null,
                        }),
                    }),
                    o
                        ? (0, n.jsx)(I.$, {
                              size: "sm",
                              variant: "secondary",
                              text: j.intl.formatToPlainString(b.default.DfBXSF, { target: t.target }),
                              onClick: r,
                          })
                        : null,
                ],
            }),
            (0, n.jsxs)("div", {
                className: L.zH,
                children: [
                    null != s ? (0, n.jsx)(B.A, { purpose: s }) : null,
                    null != u
                        ? (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-subtle", children: u })
                        : null,
                ],
            }),
        ],
    });
}
var F = t(557744),
    U = t(223347),
    O = t(822313),
    D = t(359589),
    H = t(722701),
    Z = t(811587),
    V = t(826058),
    W = t(534514),
    q = t(44255),
    X = t(303345),
    K = t(416473);
function J(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, i.bG)([h.Ay], () => "open" === h.Ay.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, h.ensureConnection)(e);
            }, [e, l]);
            let [n, r] = a.useState(null),
                [s, u] = a.useState(!0),
                [o, c] = a.useState(!1),
                [d, f] = a.useState(!1),
                [p, g] = a.useState(null),
                [m, x] = a.useState(null),
                [v, y] = a.useState(0),
                k = a.useRef(!1),
                S = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = S.current,
                    a = ++n.value;
                return (
                    (0, K.fi)(e)
                        .then((e) => {
                            S.current.value === a && (r(e), c(!0), u(!1));
                        })
                        .catch(() => {
                            S.current.value === a && (g(j.intl.string(b.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, v]);
            let C = a.useCallback(() => {
                    (u(!0), g(null), y((e) => e + 1));
                }, []),
                P = a.useCallback(async () => {
                    if (!l || !o || k.current) return;
                    k.current = !0;
                    let t = ++S.current.value;
                    (f(!0), g(null), x(null));
                    try {
                        let l = await (0, K.MN)(e);
                        if (S.current.value !== t) return;
                        (r(l), x(j.intl.string(b.default.lwN30C)));
                    } catch (e) {
                        S.current.value === t && g(e instanceof X.A ? e.message : j.intl.string(b.default.i5Xp1l));
                    } finally {
                        ((k.current = !1), S.current.value === t && f(!1));
                    }
                }, [l, o, e]);
            return { saved: n, loading: s, loaded: o, deleting: d, error: p, status: m, retry: C, remove: P };
        })(l, t),
        u = a.useId();
    return !t || (s.loaded && null == s.saved && null == s.error && null == s.status)
        ? null
        : (0, n.jsxs)(d.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(W.D, { id: u, variant: "heading-sm/semibold", children: j.intl.string(b.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            role: "status",
                            children: j.intl.string(b.default["71yzD9"]),
                        })
                      : null,
                  s.loaded && null != s.saved
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(f.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: j.intl.string(b.default.ubcNP7),
                                }),
                                (0, n.jsxs)(d.B, {
                                    gap: 8,
                                    children: [
                                        (0, q.Dt)(s.saved).map((e, l) =>
                                            (0, n.jsx)(f.E, { variant: "body-sm/normal", children: e }, l),
                                        ),
                                        (0, n.jsx)(I.$, {
                                            type: "button",
                                            variant: "secondary",
                                            text: j.intl.string(b.default.J7ZMMf),
                                            disabled: s.deleting,
                                            onClick: function () {
                                                (0, r.A)({
                                                    title: j.intl.string(b.default["Tw/KaB"]),
                                                    subtitle: j.intl.string(b.default.qr1iIe),
                                                    confirmText: j.intl.string(b.default.J7ZMMf),
                                                    variant: "critical",
                                                    onConfirm: s.remove,
                                                });
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : null,
                  null != s.error
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: s.error,
                        })
                      : null,
                  null != s.status
                      ? (0, n.jsx)(f.E, { variant: "body-sm/normal", role: "status", children: s.status })
                      : null,
                  s.loading || null == s.error
                      ? null
                      : (0, n.jsx)(I.$, {
                            type: "button",
                            variant: "secondary",
                            text: j.intl.string(b.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          });
}
var Q = t(290713),
    Y = t(616334),
    $ = t(143129),
    ee = t(890497),
    el = t(904363),
    et = t(540338),
    en = t(503698),
    ea = t.n(en),
    ei = t(750943),
    er = t(22231),
    es = t(95477),
    eu = t(103557),
    eo = t(946274),
    ec = t(951178),
    ed = t(535466),
    ef = t(154600);
function ep(e) {
    let { iconURL: l, disabled: t, onChange: i, onError: r } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: ef.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: ea()(ef.Vs, { [ef.A6]: u }),
                "aria-label": j.intl.string(u ? j.t["MsUY/S"] : j.t["6yrpFR"]),
                disabled: t,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(ei.ImagePlusIcon, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: ef.uP, src: l, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: ef.Jx,
                                  children: (0, n.jsx)(er.PencilIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
            }),
            (0, n.jsx)(eo.Ay, {
                ref: s,
                className: ef.Fg,
                multiple: !1,
                filters: [{ name: j.intl.string(j.t["Sp2NF+"]), extensions: ed.En }],
                maxFileSizeBytes: ed.Q0,
                onChange: (e) => {
                    (r(null), i(e));
                },
                onFileSizeError: () => r(j.intl.string(b.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function eg(e, l, t) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, l) {
            let t = l.offsetHeight;
            for (let n = l; null != n && n !== e; n = n.offsetParent) t += n.offsetTop;
            return t;
        })(l, t)}px`,
    );
}
function eh(e) {
    let l,
        t,
        {
            iconURL: i,
            onIconChange: r,
            name: s,
            nameError: u,
            onNameChange: o,
            description: c,
            onDescriptionChange: p,
            disabled: g = !1,
        } = e,
        [h, m] = a.useState(null),
        { rowRef: x, fieldRef: v } =
            ((l = a.useRef(null)),
            (t = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = l.current,
                    n = t.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                eg(e, n, a);
                let i = new ResizeObserver(() => eg(e, n, a));
                return (i.observe(n), i.observe(a), () => i.disconnect());
            }, []),
            { rowRef: l, fieldRef: t });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(d.B, {
                gap: 8,
                children: [
                    (0, n.jsxs)("div", {
                        ref: x,
                        className: ef.S7,
                        children: [
                            (0, n.jsx)(ep, { iconURL: i, disabled: g, onChange: r, onError: m }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: ef.yD,
                                children: (0, n.jsx)(es.k, {
                                    label: j.intl.string(b.default.GWBCF9),
                                    value: s,
                                    onChange: o,
                                    error: u,
                                    maxLength: 128,
                                    disabled: g,
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                    null != h
                        ? (0, n.jsx)(f.E, {
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              "aria-live": "polite",
                              children: h,
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(eu.f, {
                label: j.intl.string(b.default.ynaGa1),
                placeholder: j.intl.string(b.default["I+3UTL"]),
                value: c,
                onChange: p,
                maxLength: 400,
                disabled: g,
            }),
        ],
    });
}
var em = t(60498),
    ex = t(821759);
function eb(e) {
    let { projectId: l } = e,
        t = (0, em.GB)(l),
        [i, r] = a.useState(!1),
        s = a.useCallback((e) => r(!(0, ex.t)(l, e)), [l]);
    return null == t
        ? null
        : (0, n.jsxs)(d.B, {
              gap: 8,
              children: [
                  (0, n.jsx)($.d, {
                      label: j.intl.string(b.default["Nf+zrD"]),
                      description: j.intl.string(b.default.heoCNf),
                      checked: t.enabled,
                      disabled: t.pending,
                      onChange: s,
                  }),
                  i || null != t.error
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: j.intl.string(b.default["UU+oef"]),
                        })
                      : null,
              ],
          });
}
var ej = t(407431),
    ev = t(71393),
    ey = t(313537),
    ek = t(233470),
    eS = t(733791),
    eC = t(16619);
function eP(e) {
    if (null == e) return [];
    let l = [
        {
            key: "bots",
            text: j.intl.formatToPlainString(e.canRemoveBot ? b.default["cU/7df"] : b.default.PDLHwR, {
                server: e.guildName,
            }),
        },
    ];
    if (e.channelNames.length > 0) {
        let t = new Intl.ListFormat(j.intl.currentLocale, { type: "conjunction" }).format(
            e.channelNames.map((e) => `#${e}`),
        );
        l.push({ key: "channels", text: j.intl.formatToPlainString(b.default.DbZ8af, { channels: t }) });
    }
    return l;
}
function eE(e) {
    let l = (0, eC.z9)("ConjureProjectServerChange"),
        t = (0, i.bG)([m.Ay], () => (0, ey.fL)(m.Ay.getProject(e)), [e]);
    return a.useMemo(() => l.filter((e) => e.id !== t), [l, t]);
}
var e_ = t(189213),
    eA = t(858899),
    ew = t(192308),
    eI = t(430392),
    eT = t(323384),
    eN = t(127062),
    eB = t(280645),
    eL = t(687966),
    eM = t(231483),
    eG = t(177953),
    eR = t(950305),
    ez = t(152367),
    eF = t(664121),
    eU = t(625903),
    eO = t(32924);
let eD = {
    bots: eI.RobotIcon,
    channels: eT.AppsIcon,
    test_app: eN.BeakerIcon,
    profile_widget: eB.IdCardIcon,
    overlay: eL.GameControllerIcon,
    automod: eM.ShieldIcon,
    collaboration: eG.GroupIcon,
    only_you: eR.UserIcon,
    location: ez.MagicWandIcon,
    server: eF.ServerIcon,
    settings: eU.SettingsIcon,
};
function eH(e) {
    let { rows: l } = e;
    return (0, n.jsxs)(d.B, {
        gap: 8,
        children: [
            (0, n.jsx)(f.E, {
                variant: "body-md/semibold",
                color: "text-strong",
                children: j.intl.string(b.default["kG/2e8"]),
            }),
            (0, n.jsx)("div", {
                className: eO.aP,
                children: l.map((e) => {
                    let l = eD[e.key];
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: eO.nM,
                            children: [
                                (0, n.jsx)(l, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: eO.Kk,
                                    "aria-hidden": !0,
                                }),
                                (0, n.jsx)(f.E, { variant: "body-sm/medium", color: "text-subtle", children: e.text }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
function eZ(e) {
    let { project: l, transitionState: t, onClose: i } = e,
        r = (function (e) {
            let [l, t] = a.useState(!1),
                [n, i] = a.useState(null);
            a.useEffect(() => (0, ek.GO)(e.id), [e.id]);
            let r = (0, eS.Bs)(e.id),
                [s, u] = a.useState(null),
                o = null == s ? r : s.target,
                c = o?.appName ?? e.name,
                d = a.useMemo(() => {
                    let l;
                    return (
                        (l = eP(o)),
                        (0, ec._7)(e) &&
                            !0 !== e.preview_app_chosen &&
                            l.push({ key: "test_app", text: j.intl.string(b.default.jKXaUH) }),
                        e.supported_surfaces?.includes(ec.q7.PROFILE_WIDGET) === !0 &&
                            l.push({ key: "profile_widget", text: j.intl.string(b.default.HHZxrL) }),
                        e.supported_surfaces?.includes(ec.q7.OVERLAY) === !0 &&
                            l.push({ key: "overlay", text: j.intl.string(b.default.rVTFDs) }),
                        (0, ec.pL)(e) && l.push({ key: "collaboration", text: j.intl.string(b.default["+a1lOS"]) }),
                        l.push({ key: "only_you", text: j.intl.string(b.default.TrTx1Z) }),
                        l.push({ key: "location", text: j.intl.string(b.default["GC/COK"]) }),
                        l
                    );
                }, [e, o]),
                f = a.useCallback(async () => {
                    (t(!0), i(null), u({ target: r }));
                    try {
                        await (0, ek.kY)(e.id);
                    } catch {
                        return (i(j.intl.string(b.default["d+wTRF"])), u(null), t(!1), null);
                    }
                    t(!1);
                    let l = m.Ay.getIntegrationStatus(e.id)?.owner_authorization_revoked === !0;
                    return j.intl.formatToPlainString(l ? b.default.tOu7uv : b.default.TWYUzf, { app: c });
                }, [c, r, e.id]);
            return {
                appName: c,
                rows: d,
                keptChannels: null == o ? null : (0, eS.Mi)(o),
                pending: l,
                error: n,
                submit: f,
            };
        })(l),
        { appName: s, rows: u, keptChannels: o, pending: c, error: p } = r;
    return (0, n.jsx)(e_.a, {
        transitionState: t,
        onClose: i,
        role: "alertdialog",
        title: j.intl.formatToPlainString(b.default.cAxBIL, { app: s }),
        notice: null == p ? void 0 : { type: "critical", message: p, role: "alert" },
        actions: [
            { text: j.intl.string(j.t["ETE/oC"]), variant: "secondary", onClick: i, disabled: c },
            {
                text: j.intl.string(b.default.j1NMdG),
                variant: "critical-primary",
                onClick: async function () {
                    let e = await r.submit();
                    null != e && ((0, eA.P0)({ text: e, variant: "success" }), (0, ew.s7)());
                },
                loading: c,
                disabled: c,
            },
        ],
        children: (0, n.jsxs)(d.B, {
            gap: 12,
            children: [
                (0, n.jsx)(eH, { rows: u }),
                null != o ? (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-muted", children: o }) : null,
            ],
        }),
    });
}
var eV = t(682163);
function eW(e) {
    let { projectId: l, transitionState: t, onClose: r } = e,
        s = (function (e) {
            let l = (0, i.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                t = eE(e),
                [n] = a.useState(() => l?.install_scope === "guild"),
                [r] = a.useState(t);
            a.useEffect(() => {
                n && (0, ek.GO)(e);
            }, [n, e]);
            let s = (0, eS.Bs)(n ? e : null),
                [u, o] = a.useState(null),
                c = null == u ? s : u.target,
                [d, f] = a.useState(null),
                p = r.find((e) => e.id === d) ?? r[0] ?? null,
                [g, h] = a.useState(!1),
                [x, v] = a.useState(null),
                y = l?.name ?? "",
                k = a.useMemo(() => {
                    var e, t;
                    let a, i, r;
                    return null == l || null == p
                        ? []
                        : n
                          ? ((e = p.name),
                            (a = [
                                { key: "server", text: j.intl.formatToPlainString(b.default.YFZDXO, { server: e }) },
                                ...eP(c),
                                { key: "settings", text: j.intl.string(b.default.F058cu) },
                            ]),
                            (l.collaborator_role_ids?.length ?? 0) > 0 &&
                                a.push({ key: "collaboration", text: j.intl.string(b.default.SDpkkt) }),
                            a)
                          : ((t = p.name),
                            (i = [
                                { key: "bots", text: j.intl.string(b.default.eSpjGV) },
                                { key: "location", text: j.intl.formatToPlainString(b.default.c3xGbr, { server: t }) },
                            ]),
                            (l?.preview_application_id != null && (0, ec._7)(l)) ||
                                l?.preview_app_chosen === !0 ||
                                i.push({ key: "test_app", text: j.intl.string(b.default["+5f47F"]) }),
                            (r = [...(l?.supported_surfaces ?? []), ...(l?.preview_supported_surfaces ?? [])]).includes(
                                ec.q7.PROFILE_WIDGET,
                            ) && i.push({ key: "profile_widget", text: j.intl.string(b.default.u6ckHo) }),
                            r.includes(ec.q7.OVERLAY) &&
                                i.push({ key: "overlay", text: j.intl.string(b.default.UZHlmt) }),
                            r.includes(ec.q7.AUTOMOD) &&
                                i.push({ key: "automod", text: j.intl.string(b.default.IPtiUf) }),
                            i.push({ key: "collaboration", text: j.intl.string(b.default["s3/5nF"]) }),
                            i);
                }, [l, p, n, c]),
                S = a.useCallback((e) => {
                    (f(e), v(null));
                }, []),
                C = a.useCallback(async () => {
                    if (null == p) return null;
                    (h(!0), v(null), o({ target: s }));
                    try {
                        await (0, ek.xo)(e, p.id);
                    } catch (l) {
                        let e = l?.body?.message;
                        return (
                            v("string" == typeof e ? e : j.intl.string(n ? b.default.mdrXGt : b.default.qDjkvv)),
                            o(null),
                            h(!1),
                            null
                        );
                    }
                    return (
                        h(!1),
                        j.intl.formatToPlainString(n ? b.default["B+Xtjy"] : b.default.yHhjsi, {
                            app: y,
                            server: p.name,
                        })
                    );
                }, [y, p, s, n, e]);
            return {
                appName: y,
                moving: n,
                guilds: r,
                guild: p,
                pickGuild: S,
                rows: k,
                pending: g,
                error: x,
                submit: C,
            };
        })(l),
        { appName: u, moving: o, guilds: c, guild: f, rows: p, pending: g, error: h } = s,
        x = a.useMemo(
            () =>
                c.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: (0, n.jsx)(eV.Ay, { guild: e, size: eV.Ay.Sizes.MINI, active: !0 }),
                })),
            [c],
        );
    return (0, n.jsx)(e_.a, {
        transitionState: t,
        onClose: r,
        title: j.intl.formatToPlainString(o ? b.default.M4jq44 : b.default.PE4egI, { app: u }),
        notice: null != h ? { type: "critical", message: h, role: "alert" } : void 0,
        actions: [
            { text: j.intl.string(j.t["ETE/oC"]), variant: "secondary", onClick: r, disabled: g },
            {
                text: j.intl.string(o ? b.default.MHSKBb : b.default["+uQwxA"]),
                variant: "primary",
                onClick: async function () {
                    let e = await s.submit();
                    null != e && ((0, eA.P0)({ text: e, variant: "success" }), (0, ew.s7)());
                },
                loading: g,
                disabled: null == f || g,
            },
        ],
        children: (0, n.jsxs)(d.B, {
            gap: 16,
            children: [
                null != f
                    ? (0, n.jsx)(w.l, {
                          label: j.intl.string(b.default.Uq5hU9),
                          options: x,
                          value: f.id,
                          onSelectionChange: s.pickGuild,
                          selectionMode: "single",
                          disabled: g,
                          fullWidth: !0,
                      })
                    : null,
                p.length > 0 ? (0, n.jsx)(eH, { rows: p }) : null,
            ],
        }),
    });
}
function eq(e) {
    let { projectId: l } = e,
        t = (0, i.bG)([m.Ay], () => m.Ay.getProject(l), [l]),
        a = (0, ey.fL)(t),
        r = (0, i.bG)([ev.A], () => ev.A.getGuild(a)?.name, [a]),
        s = eE(l).length > 0;
    if (null == t || !(0, m.PV)(t)) return null;
    let u = "guild" === t.install_scope,
        o = j.intl.string(b.default.n431L5),
        c = () => {
            var e;
            return ((e = { projectId: l }), void (0, ew.qf)((l) => (0, n.jsx)(eW, { ...l, ...e })));
        };
    return (0, n.jsxs)(d.B, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        gap: 16,
        role: "group",
        "aria-label": o,
        children: [
            (0, n.jsxs)(d.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(f.E, { variant: "body-md/medium", color: "text-strong", children: o }),
                    (0, n.jsx)(f.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: u
                            ? j.intl.formatToPlainString(b.default["KWBh/Q"], {
                                  server: r ?? j.intl.string(b.default["6bhivN"]),
                              })
                            : j.intl.string(b.default["JQ/7HT"]),
                    }),
                    s
                        ? null
                        : (0, n.jsx)(f.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              children: j.intl.string(b.default.NXvmoQ),
                          }),
                ],
            }),
            u
                ? (0, n.jsxs)(d.B, {
                      direction: "horizontal",
                      gap: 8,
                      justify: "end",
                      children: [
                          (0, n.jsx)(I.$, {
                              variant: "secondary",
                              size: "sm",
                              text: j.intl.string(b.default["1E5/ay"]),
                              disabled: !s,
                              onClick: c,
                          }),
                          (0, n.jsx)(I.$, {
                              variant: "critical-secondary",
                              size: "sm",
                              text: j.intl.string(b.default.j1NMdG),
                              onClick: () => {
                                  var e;
                                  return ((e = { project: t }), void (0, ew.qf)((l) => (0, n.jsx)(eZ, { ...l, ...e })));
                              },
                          }),
                      ],
                  })
                : (0, n.jsx)(I.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(b.default["7SD3ul"]),
                      disabled: !s,
                      onClick: c,
                  }),
        ],
    });
}
t(938796);
var eX = t(862026),
    eK = t(709753),
    eJ = t(961553),
    eQ = t(944142),
    eY = t(788493),
    e$ = t(532247),
    e0 = t(426035),
    e1 = t(685033),
    e3 = t(641655),
    e2 = t(246338),
    e7 = t(277085),
    e5 = t(453430);
let e9 = {
    project: b.default.W0eQfN,
    app: b.default.lFaJYF,
    secrets: b.default.vDpCPU,
    model: b.default.Rs3qc9,
    linked: b.default.fBEHdq,
    experimental: b.default["0Pe9uw"],
};
function e8(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: S,
            scopeKeys: C,
            note: P,
            notifyAgent: E,
            isPreview: _,
            publishOptions: A,
            transitionState: I,
            onClose: T,
        } = e,
        N = (0, i.bG)([m.Ay], () => m.Ay.getProject(l), [l]),
        B = (0, i.bG)([F.A], () => F.A.getModelSettings(l), [l]),
        L = (0, i.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        G = null != N && (0, m.PV)(N),
        R = null != N && (0, m.jf)(N),
        z = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = (0, el.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: o,
                    liveReload: c,
                    smartContext: p,
                    hostApproval: g,
                    name: h,
                    nameError: x,
                    nameChanged: v,
                    sharingMode: y,
                    sharingOptions: k,
                    canChangeSharing: S,
                    isGuildCollaboration: C,
                    usesPreviewApp: P,
                    canChangePreviewApp: E,
                    selectedRoleIds: _,
                    supportsVisibility: A,
                    supportsCollaboration: I,
                    supportsCollaboratorRoles: T,
                    checkingAppInGuild: N,
                    saving: B,
                    selectionError: L,
                    saveError: M,
                    experimentalError: G,
                    canSave: R,
                    handleIconChange: z,
                    handleNameChange: F,
                    handleDescriptionChange: U,
                    handleFlagChange: O,
                    handleSharingModeChange: D,
                    handleUsesPreviewAppChange: H,
                    handleLiveReloadChange: Z,
                    handleRoleSelectionChange: W,
                    handleSmartContextChange: q,
                    handleRequireHostApprovalChange: X,
                    submit: K,
                } = (function (e, l) {
                    var t;
                    let n,
                        r = (0, i.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, i.bG)([eQ.A], () => eQ.A.getLiveReload(e), [e]),
                                [t, n] = a.useState(null),
                                [r, s] = a.useState(null);
                            null != r && l !== r.before && s(null);
                            let u = null != r && l === r.before ? r.enabled : l?.enabled;
                            null != t && t === u && n(null);
                            let o = null != l && null != t && t !== u,
                                c = a.useCallback(
                                    () =>
                                        !o ||
                                        null == t ||
                                        (!!(0, eY.c)(e, t) && (s({ enabled: t, before: l }), n(null), !0)),
                                    [o, t, l, e],
                                );
                            return {
                                available: null != l,
                                checked: t ?? u ?? !1,
                                description: null == l ? "" : (0, e$.oV)(l),
                                changed: o,
                                setChecked: n,
                                save: c,
                            };
                        })(e),
                        u = s.save,
                        o = (0, eJ.A)(e),
                        { changes: c, commit: d } = o,
                        f = (0, eX.Q)(e),
                        p = f.save,
                        g = (0, eK._t)(e),
                        h = g.save,
                        x = r?.collaborator_role_ids ?? [],
                        [v, y] = a.useState(r?.name ?? ""),
                        [k, S] = a.useState(null),
                        [C, P] = a.useState(v),
                        [E, _] = a.useState(r?.flags ?? 0),
                        [A, w] = a.useState(() => [...x]),
                        I = (0, e1.A)(e),
                        T = a.useMemo(() => (0, e3.R)(), []),
                        [N, B] = a.useState(null),
                        L = r?.install_scope === "guild" ? (r.guild_id ?? null) : null,
                        [M, G] = a.useState(L);
                    L !== M && (G(L), _(r?.flags ?? 0), w([...x]), B(null), S(null));
                    let R = r?.uses_preview_app,
                        [z, F] = a.useState(null);
                    null != z && z === R && F(null);
                    let [U, O] = a.useState(!1),
                        [D, H] = a.useState(null),
                        [Z, W] = a.useState(null),
                        [q, X] = a.useState(null),
                        [K, J] = a.useState(null),
                        [Q, Y] = a.useState(!1),
                        $ = a.useRef(null),
                        ee = a.useRef(!1),
                        el = C.trim(),
                        et = null != r && (0, ec.IU)(r),
                        en = null != r && "guild" === r.install_scope,
                        ea = en && null != l && (0, ec.RX)(r),
                        { isPublic: ei, isGuildCollaboration: er } = (0, e2.n5)(E),
                        es = N ?? I.shareLinksEnabled,
                        eu = et && null != N && N !== I.shareLinksEnabled,
                        eo = null != r && el !== v,
                        ed = et && E !== (k?.flags ?? r?.flags ?? 0),
                        ef =
                            ea &&
                            ((t = k?.roleIds ?? x), !((n = new Set(A)).size === t.length && t.every((e) => n.has(e)))),
                        ep = null != R,
                        eg = z ?? R ?? !1,
                        eh = ep && null != z,
                        em = eo || ed || eu || ef || eh || o.changed,
                        ex = em || s.changed || f.changed || g.changed,
                        { setIcon: eb, setDescription: ej } = o,
                        ev = s.setChecked,
                        ey = f.setChecked,
                        eS = g.setChecked,
                        eC = a.useCallback(
                            (e) => {
                                (eb(e), X(null));
                            },
                            [eb],
                        ),
                        eP = a.useCallback(
                            (e) => {
                                (ej(e), X(null));
                            },
                            [ej],
                        ),
                        eE = a.useCallback((e) => {
                            (P(e), H(null), X(null));
                        }, []),
                        e_ = a.useCallback((e, l) => {
                            (_((t) => (l ? t | e : t & ~e)), W(null), X(null));
                        }, []),
                        eA = a.useCallback((e) => {
                            (_((l) => ("public" === e ? l | ec.Zh.PUBLIC : l & ~ec.Zh.PUBLIC)),
                                B("public" === e ? null : "link" === e),
                                X(null));
                        }, []),
                        ew = a.useCallback((e) => {
                            (F(e), X(null));
                        }, []),
                        eI = a.useCallback(
                            (e) => {
                                (ev(e), X(null));
                            },
                            [ev],
                        ),
                        eT = a.useCallback(async () => {
                            if (null == r || null == l || null == r.preview_application_id || $.current === l)
                                return !0;
                            if (ee.current) return !1;
                            ((ee.current = !0), Y(!0));
                            try {
                                let e = await (0, e0.cC)(r, l);
                                if (!1 !== e) return (!0 === e && ($.current = l), !0);
                                await (0, V.vL)(r.id, l);
                                let t = (await (0, e0.cC)(r, l)) === !0;
                                return (t && ($.current = l), t);
                            } finally {
                                ((ee.current = !1), Y(!1));
                            }
                        }, [l, r]),
                        eN = a.useCallback(
                            async (e) => {
                                if (e.length > 25)
                                    return void W(j.intl.formatToPlainString(b.default["dH7+/Z"], { max: 25 }));
                                let l = () => {
                                    (w(e), W(null), X(null));
                                };
                                if (!e.some((e) => !A.includes(e))) return void l();
                                try {
                                    (await eT()) && l();
                                } catch {}
                            },
                            [eT, A],
                        ),
                        eB = a.useCallback(
                            (e) => {
                                (ey(e), J(null));
                            },
                            [ey],
                        ),
                        eL = a.useCallback(
                            (e) => {
                                (eS(e), J(null));
                            },
                            [eS],
                        ),
                        eM = a.useCallback(async () => {
                            if (null == r || !ex || U) return null;
                            let t = eo ? (0, e7.p)(el) : null;
                            if (null != t) return (H(t), "project");
                            let n = { ...c };
                            (eo && (n.name = el),
                                ed && (n.flags = E),
                                eu && (n.share_links_enabled = N),
                                ef && (n.collaborator_role_ids = [...A].sort()),
                                eh && (n.uses_preview_app = eg),
                                null == r.guild_id && null != l && (ef || (ed && er)) && (n.guild_id = l),
                                O(!0),
                                X(null),
                                J(null));
                            try {
                                if (
                                    (em &&
                                        (await (0, ek.CW)(e, n),
                                        y(el),
                                        S({ flags: E, roleIds: [...A] }),
                                        null != N && I.setShareLinksEnabled(N),
                                        B(null),
                                        d()),
                                    !u())
                                )
                                    return (X(j.intl.string(b.default.XzkNBw)), "project");
                                if (!p() || !h()) return (J(j.intl.string(b.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (X(j.intl.string(b.default["9JPr8h"])), "project");
                            } finally {
                                O(!1);
                            }
                        }, [d, E, ed, l, ex, c, er, eo, eh, eg, r, e, em, ef, h, u, p, U, A, I, eu, N, el]);
                    return {
                        iconURL: o.iconURL,
                        description: o.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: g,
                        name: C,
                        nameError: D,
                        nameChanged: eo,
                        sharingMode: ei ? "public" : null == es ? null : es ? "link" : "collaborators",
                        sharingOptions: T,
                        canChangeSharing: et && (null != I.shareLinksEnabled || I.loadFailed),
                        isGuildCollaboration: er,
                        usesPreviewApp: eg,
                        canChangePreviewApp: ep,
                        selectedRoleIds: A,
                        supportsVisibility: et,
                        supportsCollaboration: en,
                        supportsCollaboratorRoles: ea,
                        checkingAppInGuild: Q,
                        saving: U,
                        selectionError: Z,
                        saveError: q,
                        experimentalError: K,
                        canSave: ex && "" !== el,
                        handleIconChange: eC,
                        handleNameChange: eE,
                        handleDescriptionChange: eP,
                        handleFlagChange: e_,
                        handleSharingModeChange: eA,
                        handleUsesPreviewAppChange: ew,
                        handleLiveReloadChange: eI,
                        handleRoleSelectionChange: eN,
                        ensureAppInGuild: eT,
                        handleSmartContextChange: eB,
                        handleRequireHostApprovalChange: eL,
                        submit: eM,
                    };
                })(e, l),
                J = B || t,
                Q = (0, em.AJ)(e),
                Y = a.useMemo(
                    () =>
                        k.map((e) => {
                            let { value: l, label: t } = e;
                            return { id: l, value: l, label: t };
                        }),
                    [k],
                );
            return {
                fields: (0, n.jsxs)(d.B, {
                    gap: 20,
                    children: [
                        t
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: j.intl.string(b.default.s7VnVF),
                              })
                            : null,
                        Q
                            ? (0, n.jsx)(ej.A, { projectId: e })
                            : (0, n.jsx)(eh, {
                                  iconURL: u,
                                  onIconChange: z,
                                  name: h,
                                  nameError: x,
                                  onNameChange: F,
                                  description: o,
                                  onDescriptionChange: U,
                                  disabled: J,
                              }),
                        A && !Q
                            ? (0, n.jsx)(w.l, {
                                  selectionMode: "single",
                                  label: j.intl.string(b.default.jDBYrs),
                                  options: Y,
                                  value: y ?? void 0,
                                  disabled: J || !S,
                                  onSelectionChange: D,
                                  layout: "horizontal-responsive",
                                  fullWidth: !0,
                                  fitContent: !0,
                              })
                            : null,
                        t ? null : (0, n.jsx)(eb, { projectId: e }),
                        A && I
                            ? (0, n.jsx)($.d, {
                                  label: j.intl.string(b.default.lVvR4E),
                                  description: j.intl.string(b.default.SQZGoV),
                                  checked: C,
                                  disabled: J,
                                  onChange: (e) => O(ec.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        E
                            ? (0, n.jsx)($.d, {
                                  label: j.intl.string(b.default.DV2hcV),
                                  description: j.intl.string(b.default.yjWIzb),
                                  checked: P,
                                  disabled: J,
                                  onChange: H,
                              })
                            : null,
                        c.available
                            ? (0, n.jsx)($.d, {
                                  label: j.intl.string(b.default.eEo0ye),
                                  description: c.description,
                                  checked: c.checked,
                                  disabled: J,
                                  onChange: Z,
                              })
                            : null,
                        T
                            ? (0, n.jsxs)(d.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: j.intl.string(b.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(ee.Z, {
                                          selectionMode: "multiple",
                                          label: j.intl.string(b.default["pO3+p5"]),
                                          placeholder: j.intl.string(b.default.gvL7QS),
                                          value: _,
                                          options: r,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: J || !C || N,
                                          "aria-invalid": null != L,
                                          "aria-errormessage": null != L ? s : void 0,
                                          onSelectionChange: W,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          children: j.intl.formatToPlainString(b.default.g5I05P, {
                                              count: _.length,
                                              max: 25,
                                          }),
                                      }),
                                      C
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                children: j.intl.string(b.default.nZw5r9),
                                            }),
                                      null != L
                                          ? (0, n.jsx)(f.E, {
                                                id: s,
                                                variant: "body-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: L,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        t ? null : (0, n.jsx)(eq, { projectId: e }),
                        null != M
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: M,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(d.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)($.d, {
                            label: j.intl.string(b.default["4liZ45"]),
                            description: j.intl.string(b.default.I5cl7p),
                            checked: p.checked,
                            disabled: B,
                            onChange: q,
                        }),
                        (0, n.jsx)($.d, {
                            label: j.intl.string(b.default.mpjaVm),
                            description: j.intl.string(b.default["2PxChh"]),
                            checked: g.checked,
                            disabled: B,
                            onChange: X,
                        }),
                        (0, n.jsx)(et.u, { projectId: e }),
                        null != G
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: G,
                              })
                            : null,
                    ],
                }),
                canSave: R,
                saving: B,
                nameChanged: v,
                submit: K,
            };
        })(l, N?.guild_id ?? t ?? void 0, { readOnly: !G }),
        U = (function (e, l) {
            let [t, n] = a.useState(e),
                [r, s] = a.useState(v),
                [u, o] = a.useState(y),
                [c, d] = a.useState(k),
                [f, p] = a.useState(!1),
                [g, h] = a.useState(!1);
            t !== e && (n(e), s(v), o(y), d(k), p(!1), h(!1));
            let S = a.useRef(e);
            a.useEffect(() => {
                S.current = e;
            }, [e]);
            let C = (0, i.yK)(
                [m.Ay],
                () =>
                    [
                        ...new Set(
                            [
                                ...m.Ay.getOwnedProjects(),
                                ...m.Ay.getSharedWithMeProjects(),
                                ...m.Ay.getRailProjects(),
                            ].map((e) => e.id),
                        ),
                    ]
                        .filter((l) => l !== e)
                        .sort(),
                [e],
            );
            (a.useEffect(() => {
                if (!l) return;
                let t = !0;
                return (
                    !(async function () {
                        try {
                            let l = await (0, x.k_)(e);
                            if (!t) return;
                            (s(l.callers), d({ live: !0 === l.live, hasPreview: !1 !== l.has_preview }));
                        } catch {}
                    })(),
                    () => {
                        t = !1;
                    }
                );
            }, [e, l]),
                a.useEffect(() => {
                    if (!l || 0 === C.length) return;
                    let t = !0;
                    return (
                        !(async function () {
                            try {
                                let l = await (0, x.n9)(e, C);
                                t && o(l.targets);
                            } catch {}
                        })(),
                        () => {
                            t = !1;
                        }
                    );
                }, [e, l, C]));
            let P = (0, i.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                E = (0, i.cf)(
                    [m.Ay],
                    () =>
                        Object.fromEntries(
                            [...r, ...u].map((e) => {
                                let { project_id: l } = e;
                                return [l, m.Ay.getProject(l)];
                            }),
                        ),
                    [r, u],
                ),
                _ = a.useMemo(
                    () =>
                        Object.fromEntries(
                            [...r, ...u].map((e) => {
                                let { project_id: l } = e;
                                return [
                                    l,
                                    E[l]?.name ?? j.intl.formatToPlainString(b.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [r, E, u],
                ),
                A = a.useCallback(
                    async (l, t) => {
                        (p(!1), h(!1));
                        try {
                            await (0, x.Ol)(e, l, { build: t });
                        } catch {
                            S.current === e && p(!0);
                            return;
                        }
                        S.current === e &&
                            (h(!0), s((e) => e.map((e) => (e.project_id === l ? { ...e, build: t } : e))));
                    },
                    [e],
                ),
                w = a.useCallback(
                    async (l) => {
                        (p(!1), h(!1));
                        try {
                            await (0, x.pc)(e, l);
                        } catch {
                            S.current === e && p(!0);
                            return;
                        }
                        S.current === e && (h(!0), s((e) => e.filter((e) => e.project_id !== l)));
                    },
                    [e],
                );
            return {
                name: P?.name ?? j.intl.formatToPlainString(b.default.HHCa93, { projectId: e }),
                project: P ?? null,
                live: c.live,
                hasPreview: c.hasPreview,
                callers: r,
                targets: u,
                projects: E,
                names: _,
                failed: f,
                saved: g,
                setBuild: A,
                remove: w,
            };
        })(l, R),
        [O, D] = a.useState(null);
    return (0, n.jsx)(Q.A, {
        projectId: l,
        scopeKeys: C,
        note: P,
        notifyAgent: E,
        isPreview: _,
        children: (e) => {
            let t = [];
            ((G || R) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                B?.tierSettings != null && t.push("model"),
                (U.callers.length > 0 || U.targets.length > 0) && t.push("linked"),
                G && t.push("experimental"));
            let a = [O, S].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                h = !G && !i && !t.includes("app") && !t.includes("secrets"),
                x = (G && z.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !i && G && z.canSave }),
                y = j.intl.string(i ? b.default["jZjP+I"] : b.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: async function (n) {
                    if ((n.preventDefault(), !v || x)) {
                        e.invalid && t.includes("app") && D("app");
                        return;
                    }
                    let s = !i && G && z.nameChanged,
                        u = await (async function (e) {
                            let { appInvalid: l, submitApp: t, submitProject: n } = e;
                            if (l) return { saved: !1, failedTab: "app" };
                            let [a, i] = await Promise.all([n?.() ?? null, t()]);
                            return null == a && i ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
                        })({ appInvalid: e.invalid, submitApp: e.submit, submitProject: i || !G ? null : z.submit });
                    if (u.saved) {
                        (await T(),
                            s &&
                                null != A &&
                                (function (e, l) {
                                    let t = m.Ay.getProject(e);
                                    if (null == t || !(0, V.qF)(t)) return;
                                    let n = H.A.getPublishStatus(e);
                                    null != n &&
                                        (0, Z.lE)(n.publishState) &&
                                        (0, r.A)({
                                            title: j.intl.string(b.default["48pvCR"]),
                                            subtitle: j.intl.string(b.default["Xk+JsJ"]),
                                            confirmText: j.intl.string(b.default.guoHDk),
                                            cancelText: j.intl.string(b.default.HSyPrY),
                                            variant: "primary",
                                            onConfirm: () => {
                                                (0, V.FZ)(e, "name_prompt", l).catch(() => {});
                                            },
                                        });
                                })(l, A));
                        return;
                    }
                    "app" !== u.failedTab
                        ? D(u.failedTab)
                        : "secrets" !== a && D(t.includes("app") ? "app" : "secrets");
                },
                children: (0, n.jsxs)(s.d, {
                    transitionState: I,
                    onClose: T,
                    "aria-label": y,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: y }),
                        (0, n.jsxs)(o.c, {
                            controls:
                                i || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(c.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => D(e),
                                          "aria-label": j.intl.string(b.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(c.V.Item, { id: e, children: j.intl.string(e9[e]) }, e),
                                          ),
                                      }),
                            children: [
                                i || "app" === a ? e.fields : null,
                                i || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(d.B, {
                                          gap: 24,
                                          className: e5.f,
                                          children: [z.fields, (0, n.jsx)(J, { projectId: l, canEdit: R }, l)],
                                      }),
                                i || "linked" !== a
                                    ? null
                                    : (0, n.jsx)(M, {
                                          linkedApps: U,
                                          onOpenSettings: (e) => {
                                              (T(), (0, Y.A)(e, { initialTab: "linked" }));
                                          },
                                      }),
                                i || "experimental" !== a ? null : z.experimentalFields,
                                i || "secrets" !== a ? null : e.secretFields,
                                i || "model" !== a || B?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(e4, { projectId: l, modelSettings: B, tierSettings: B.tierSettings }),
                                i || null != a
                                    ? null
                                    : L
                                      ? (0, n.jsx)(f.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: j.intl.string(b.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: e5.L, children: (0, n.jsx)(p.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(g.H, {
                            actionsFullWidth: !0,
                            actions:
                                h || ("linked" === a && !v)
                                    ? [{ text: j.intl.string(j.t.cpT0Cq), variant: "secondary", onClick: T }]
                                    : [
                                          {
                                              text: j.intl.string(j.t["ETE/oC"]),
                                              variant: "secondary",
                                              onClick: T,
                                              disabled: x,
                                          },
                                          {
                                              text: j.intl.string(i ? b.default.A7dQd9 : j.t["R3BPH+"]),
                                              variant: "primary",
                                              type: "submit",
                                              loading: x,
                                              disabled: !v,
                                          },
                                      ],
                        }),
                    ],
                }),
            });
        },
    });
}
function e4(e) {
    let { projectId: l, modelSettings: t, tierSettings: r } = e,
        s = (0, i.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, U.X)(l, e), [l]),
        [o, c] = (0, O.A)(r, u);
    return (0, n.jsx)(D.A, { settings: o, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: c });
}
