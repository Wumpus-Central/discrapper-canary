(t.d(l, { default: () => ek }), t(321073));
var n = t(477900),
    a = t(582128),
    i = t(17928),
    r = t(314116),
    s = t(224640),
    u = t(20742),
    c = t(430993),
    d = t(761508),
    o = t(331322),
    f = t(834730),
    p = t(289873),
    m = t(696208),
    x = t(319481),
    g = t(260498),
    h = t(360047),
    j = t(248675),
    v = t(105292);
let b = [];
var C = t(323384),
    S = t(661531),
    k = t(265872),
    y = t(980707),
    E = t(477782),
    A = t(866665),
    I = t(408278),
    P = t(365199),
    T = t(497183),
    N = t(843313);
function _(e) {
    let { linkedApps: l } = e,
        { callers: t, projects: a, names: i, failed: s, setBuild: u, remove: c } = l;
    return (0, n.jsx)("div", {
        className: N.Mf,
        children: (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(f.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: v.intl.string(j.default["6c2rjv"]),
                }),
                (0, n.jsx)(o.B, {
                    gap: 8,
                    children: t.map((e) => {
                        let l = i[e.project_id];
                        return (0, n.jsx)(
                            R,
                            {
                                caller: e,
                                project: a[e.project_id],
                                name: l,
                                onBuildChange: (l) => u(e.project_id, l),
                                onRemove: () => {
                                    var t;
                                    return (
                                        (t = e.project_id),
                                        void (0, r.A)({
                                            title: v.intl.formatToPlainString(j.default.zSfIvv, { name: l }),
                                            subtitle: v.intl.formatToPlainString(j.default["7TX+mR"], { name: l }),
                                            confirmText: v.intl.string(j.default.vDZEGQ),
                                            variant: "critical",
                                            onConfirm: () => c(t),
                                        })
                                    );
                                },
                            },
                            e.project_id,
                        );
                    }),
                }),
                s
                    ? (0, n.jsx)(f.E, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: v.intl.string(j.default.dIEOrl),
                      })
                    : null,
            ],
        }),
    });
}
function R(e) {
    let { caller: l, project: t, name: i, onBuildChange: r, onRemove: s } = e,
        u = a.useRef(null),
        c = v.intl.formatToPlainString(j.default.bzMlmh, { name: i });
    return (0, n.jsxs)("div", {
        className: N.nM,
        children: [
            null != t
                ? (0, n.jsx)(T.A, { project: t, size: "card" })
                : (0, n.jsx)("div", {
                      className: N.Pz,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(C.k, { size: "md", color: S.A.colors.INTERACTIVE_ICON_DEFAULT }),
                  }),
            (0, n.jsxs)("div", {
                className: N.rf,
                children: [
                    (0, n.jsx)(f.E, { variant: "text-md/medium", lineClamp: 1, children: i }),
                    (0, n.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, h.hU)(l.build),
                    }),
                ],
            }),
            (0, n.jsx)(k.Y, {
                targetElementRef: u,
                position: "bottom",
                align: "right",
                animation: k.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsxs)(y.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-linked-app-${l.project_id}`,
                        "aria-label": c,
                        onClose: t,
                        onSelect: t,
                        children: [
                            (0, n.jsx)(E.rX, {
                                label: v.intl.string(j.default.Odrcmq),
                                children: h.Hi.map((e) =>
                                    (0, n.jsx)(
                                        E.iD,
                                        {
                                            id: `build-${e}`,
                                            group: `conjure-linked-app-build-${l.project_id}`,
                                            label: (0, h.hU)(e),
                                            subtext: (0, h.Vq)(e),
                                            checked: e === l.build,
                                            action: () => {
                                                (r(e), t());
                                            },
                                        },
                                        e,
                                    ),
                                ),
                            }),
                            (0, n.jsx)(E.bX, {}),
                            (0, n.jsx)(E.rX, {
                                children: (0, n.jsx)(E.Dr, {
                                    id: "remove",
                                    color: "danger",
                                    label: v.intl.string(j.default.bN1S9T),
                                    action: s,
                                }),
                            }),
                        ],
                    });
                },
                children: (e, l) => {
                    let { onClick: t } = e,
                        { isShown: a } = l;
                    return (0, n.jsx)("div", {
                        ref: u,
                        className: N.hZ,
                        children: (0, n.jsx)(A.m, {
                            text: c,
                            children: (0, n.jsx)(I.K, {
                                icon: P.MoreHorizontalIcon,
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
    });
}
var w = t(557744),
    z = t(223347),
    B = t(822313),
    F = t(359589),
    L = t(722701),
    D = t(811587),
    M = t(893067),
    U = t(297264),
    Z = t(821609),
    H = t(44255),
    O = t(303345),
    G = t(416473);
function V(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, i.bG)([x.default], () => "open" === x.default.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, x.ensureConnection)(e);
            }, [e, l]);
            let [n, r] = a.useState(null),
                [s, u] = a.useState(!0),
                [c, d] = a.useState(!1),
                [o, f] = a.useState(!1),
                [p, m] = a.useState(null),
                [g, h] = a.useState(null),
                [b, C] = a.useState(0),
                S = a.useRef(!1),
                k = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = k.current,
                    a = ++n.value;
                return (
                    (0, G.fi)(e)
                        .then((e) => {
                            k.current.value === a && (r(e), d(!0), u(!1));
                        })
                        .catch(() => {
                            k.current.value === a && (m(v.intl.string(j.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, b]);
            let y = a.useCallback(() => {
                    (u(!0), m(null), C((e) => e + 1));
                }, []),
                E = a.useCallback(async () => {
                    if (!l || !c || S.current) return;
                    S.current = !0;
                    let t = ++k.current.value;
                    (f(!0), m(null), h(null));
                    try {
                        let l = await (0, G.MN)(e);
                        if (k.current.value !== t) return;
                        (r(l), h(v.intl.string(j.default.lwN30C)));
                    } catch (e) {
                        k.current.value === t && m(e instanceof O.A ? e.message : v.intl.string(j.default.i5Xp1l));
                    } finally {
                        ((S.current = !1), k.current.value === t && f(!1));
                    }
                }, [l, c, e]);
            return { saved: n, loading: s, loaded: c, deleting: o, error: p, status: g, retry: y, remove: E };
        })(l, t),
        u = a.useId();
    return t
        ? (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(U.D, { id: u, variant: "heading-md/semibold", children: v.intl.string(j.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "text-sm/normal",
                            role: "status",
                            children: v.intl.string(j.default["71yzD9"]),
                        })
                      : null,
                  s.loaded
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                null == s.saved
                                    ? (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: v.intl.string(j.default.sg8WIV),
                                      })
                                    : (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: v.intl.string(j.default.ubcNP7),
                                      }),
                                null != s.saved
                                    ? (0, n.jsxs)(o.B, {
                                          gap: 8,
                                          children: [
                                              (0, H.Dt)(s.saved).map((e, l) =>
                                                  (0, n.jsx)(f.E, { variant: "text-sm/normal", children: e }, l),
                                              ),
                                              (0, n.jsx)(Z.$, {
                                                  type: "button",
                                                  variant: "secondary",
                                                  text: v.intl.string(j.default.J7ZMMf),
                                                  disabled: s.deleting,
                                                  onClick: function () {
                                                      (0, r.A)({
                                                          title: v.intl.string(j.default["Tw/KaB"]),
                                                          subtitle: v.intl.string(j.default.qr1iIe),
                                                          confirmText: v.intl.string(j.default.J7ZMMf),
                                                          variant: "critical",
                                                          onConfirm: s.remove,
                                                      });
                                                  },
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  null != s.error
                      ? (0, n.jsx)(f.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: s.error,
                        })
                      : null,
                  null != s.status
                      ? (0, n.jsx)(f.E, { variant: "text-sm/normal", role: "status", children: s.status })
                      : null,
                  s.loading || null == s.error
                      ? null
                      : (0, n.jsx)(Z.$, {
                            type: "button",
                            variant: "secondary",
                            text: v.intl.string(j.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          })
        : null;
}
var q = t(11120);
async function X(e) {
    let { appInvalid: l, submitApp: t, submitProject: n } = e;
    if (l) return { saved: !1, failedTab: "app" };
    let [a, i] = await Promise.all([n?.() ?? null, t()]);
    return null == a && i ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
}
t(938796);
var J = t(193249),
    Q = t(890497),
    K = t(862026),
    W = t(904363),
    $ = t(709753),
    Y = t(540338),
    ee = t(961553),
    el = t(503698),
    et = t.n(el),
    en = t(750943),
    ea = t(22231),
    ei = t(95477),
    er = t(103557),
    es = t(946274),
    eu = t(951178),
    ec = t(535466),
    ed = t(154600);
function eo(e) {
    let { iconURL: l, disabled: t, onChange: i, onError: r } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: ed.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: et()(ed.Vs, { [ed.A6]: u }),
                "aria-label": v.intl.string(u ? v.t["MsUY/S"] : v.t["6yrpFR"]),
                disabled: t,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(en.X, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: ed.uP, src: l, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: ed.Jx,
                                  children: (0, n.jsx)(ea.PencilIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
            }),
            (0, n.jsx)(es.Ay, {
                ref: s,
                className: ed.Fg,
                multiple: !1,
                filters: [{ name: v.intl.string(v.t["Sp2NF+"]), extensions: ec.En }],
                maxFileSizeBytes: ec.Q0,
                onChange: (e) => {
                    (r(null), i(e));
                },
                onFileSizeError: () => r(v.intl.string(j.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function ef(e, l, t) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, l) {
            let t = l.offsetHeight;
            for (let n = l; null != n && n !== e; n = n.offsetParent) t += n.offsetTop;
            return t;
        })(l, t)}px`,
    );
}
function ep(e) {
    let l,
        t,
        {
            iconURL: i,
            onIconChange: r,
            name: s,
            nameError: u,
            onNameChange: c,
            description: d,
            onDescriptionChange: p,
            disabled: m = !1,
        } = e,
        [x, g] = a.useState(null),
        { rowRef: h, fieldRef: b } =
            ((l = a.useRef(null)),
            (t = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = l.current,
                    n = t.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                ef(e, n, a);
                let i = new ResizeObserver(() => ef(e, n, a));
                return (i.observe(n), i.observe(a), () => i.disconnect());
            }, []),
            { rowRef: l, fieldRef: t });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.B, {
                gap: 8,
                children: [
                    (0, n.jsxs)("div", {
                        ref: h,
                        className: ed.S7,
                        children: [
                            (0, n.jsx)(eo, { iconURL: i, disabled: m, onChange: r, onError: g }),
                            (0, n.jsx)("div", {
                                ref: b,
                                className: ed.yD,
                                children: (0, n.jsx)(ei.k, {
                                    label: v.intl.string(j.default.GWBCF9),
                                    value: s,
                                    onChange: c,
                                    error: u,
                                    maxLength: eu.eq,
                                    disabled: m,
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                    null != x
                        ? (0, n.jsx)(f.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              "aria-live": "polite",
                              children: x,
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(er.f, {
                label: v.intl.string(j.default.ynaGa1),
                placeholder: v.intl.string(j.default["I+3UTL"]),
                value: d,
                onChange: p,
                maxLength: eu.HR,
                disabled: m,
            }),
        ],
    });
}
var em = t(502707),
    ex = t(944142),
    eg = t(788493),
    eh = t(532247),
    ej = t(371169),
    ev = t(246338),
    eb = t(277085),
    eC = t(453430);
let eS = {
    project: j.default.W0eQfN,
    app: j.default.lFaJYF,
    secrets: j.default.vDpCPU,
    model: j.default.Rs3qc9,
    linked: j.default.fBEHdq,
    experimental: j.default["0Pe9uw"],
};
function ek(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: C,
            scopeKeys: S,
            note: k,
            notifyAgent: y,
            isPreview: E,
            publishOptions: A,
            transitionState: I,
            onClose: P,
        } = e,
        T = (0, i.bG)([g.Ay], () => g.Ay.getProject(l), [l]),
        N = (0, i.bG)([w.A], () => w.A.getModelSettings(l), [l]),
        R = (0, i.bG)([x.default], () => "open" === x.default.getConnState(l), [l]),
        z = null != T && (0, g.PV)(T),
        B = null != T && (0, g.jf)(T),
        F = (function (e, l) {
            var t;
            let r,
                s = (0, i.bG)([g.Ay], () => g.Ay.getProject(e), [e]),
                u = (0, W.A)(l),
                c = (function (e) {
                    let l = (0, i.bG)([ex.A], () => ex.A.getLiveReload(e), [e]),
                        t = (0, em.A)(e),
                        [n, r] = a.useState(null),
                        [s, u] = a.useState(null);
                    null != s && l !== s.before && u(null);
                    let c = null != s && l === s.before ? s.enabled : l?.enabled;
                    null != n && n === c && r(null);
                    let d = null != l && null != n && n !== c,
                        o = a.useCallback(
                            () => !d || null == n || (!!(0, eg.c)(e, n) && (u({ enabled: n, before: l }), r(null), !0)),
                            [d, n, l, e],
                        );
                    return {
                        available: null != l && !t,
                        checked: n ?? c ?? !1,
                        description: null == l ? "" : (0, eh.oV)(l),
                        changed: d,
                        setChecked: r,
                        save: o,
                    };
                })(e),
                d = c.save,
                p = (0, ee.A)(e),
                { changes: m, commit: x } = p,
                h = (0, K.Q)(e),
                b = h.save,
                C = (0, $._t)(e),
                S = C.save,
                k = s?.collaborator_role_ids ?? [],
                [y, E] = a.useState(s?.name ?? ""),
                [A, I] = a.useState(null),
                [P, T] = a.useState(y),
                [N, _] = a.useState(s?.flags ?? 0),
                [R, w] = a.useState(() => [...k]),
                [z, B] = a.useState(!1),
                [F, L] = a.useState(null),
                [D, M] = a.useState(null),
                [U, Z] = a.useState(null),
                [H, O] = a.useState(null),
                G = a.useId(),
                V = P.trim(),
                q = null != s && (0, eu.IU)(s),
                X = null != s && "user" !== s.install_scope,
                el = X && null != l && (0, eu.RX)(s),
                { isPublic: et, isGuildCollaboration: en } = (0, ev.n5)(N),
                ea = null != s && V !== y,
                ei = q && N !== (A?.flags ?? s?.flags ?? 0),
                er =
                    el &&
                    ((t = A?.roleIds ?? k),
                    !((r = R instanceof Set ? R : new Set(R)).size === t.length && t.every((e) => r.has(e)))),
                es = ea || ei || er || p.changed,
                ec = es || c.changed || h.changed || C.changed,
                ed = a.useCallback((e) => {
                    (T(e), L(null), Z(null));
                }, []),
                eo = a.useCallback((e, l) => {
                    (_((t) => (l ? t | e : t & ~e)), M(null), Z(null));
                }, []),
                ef = a.useCallback((e) => {
                    e.length > eu.sq
                        ? M(v.intl.formatToPlainString(j.default["dH7+/Z"], { max: eu.sq }))
                        : (w(e), M(null), Z(null));
                }, []),
                eC = a.useCallback(async () => {
                    if (null == s || !ec || z) return null;
                    let t = ea ? (0, eb.p)(V) : null;
                    if (null != t) return (L(t), "project");
                    let n = { ...m };
                    (ea && (n.name = V),
                        ei && (n.flags = N),
                        er && (n.collaborator_role_ids = [...R].sort()),
                        null == s.guild_id && null != l && (er || (ei && en)) && (n.guild_id = l),
                        B(!0),
                        Z(null),
                        O(null));
                    try {
                        if ((es && (await (0, ej.CW)(e, n), E(V), I({ flags: N, roleIds: [...R] }), x()), !d()))
                            return (Z(v.intl.string(j.default.XzkNBw)), "project");
                        if (!b() || !S()) return (O(v.intl.string(j.default["9JPr8h"])), "experimental");
                        return null;
                    } catch {
                        return (Z(v.intl.string(j.default["9JPr8h"])), "project");
                    } finally {
                        B(!1);
                    }
                }, [N, ei, x, m, d, b, S, es, l, ec, en, ea, s, e, er, z, R, V]);
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(ep, {
                            iconURL: p.iconURL,
                            onIconChange: (e) => {
                                (p.setIcon(e), Z(null));
                            },
                            name: P,
                            nameError: F,
                            onNameChange: ed,
                            description: p.description,
                            onDescriptionChange: (e) => {
                                (p.setDescription(e), Z(null));
                            },
                            disabled: z,
                        }),
                        q
                            ? (0, n.jsx)(J.d, {
                                  label: v.intl.string(j.default.ujIxRm),
                                  description: v.intl.string(j.default.gT8zk1),
                                  checked: et,
                                  disabled: z,
                                  onChange: (e) => eo(eu.Zh.PUBLIC, e),
                              })
                            : null,
                        q && X
                            ? (0, n.jsx)(J.d, {
                                  label: v.intl.string(j.default.lVvR4E),
                                  description: v.intl.string(j.default.SQZGoV),
                                  checked: en,
                                  disabled: z,
                                  onChange: (e) => eo(eu.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        c.available
                            ? (0, n.jsx)(J.d, {
                                  label: v.intl.string(j.default.eEo0ye),
                                  description: c.description,
                                  checked: c.checked,
                                  disabled: z,
                                  onChange: (e) => {
                                      (c.setChecked(e), Z(null));
                                  },
                              })
                            : null,
                        el
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: v.intl.string(j.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(Q.Z, {
                                          selectionMode: "multiple",
                                          label: v.intl.string(j.default["pO3+p5"]),
                                          placeholder: v.intl.string(j.default.gvL7QS),
                                          value: R,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: z || !en,
                                          "aria-invalid": null != D,
                                          "aria-errormessage": null != D ? G : void 0,
                                          onSelectionChange: ef,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: v.intl.formatToPlainString(j.default.g5I05P, {
                                              count: R.length,
                                              max: eu.sq,
                                          }),
                                      }),
                                      en
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: v.intl.string(j.default.nZw5r9),
                                            }),
                                      null != D
                                          ? (0, n.jsx)(f.E, {
                                                id: G,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: D,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != U
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: U,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(J.d, {
                            label: v.intl.string(j.default["4liZ45"]),
                            description: v.intl.string(j.default.I5cl7p),
                            checked: h.checked,
                            disabled: z,
                            onChange: (e) => {
                                (h.setChecked(e), O(null));
                            },
                        }),
                        (0, n.jsx)(J.d, {
                            label: v.intl.string(j.default.mpjaVm),
                            description: v.intl.string(j.default["2PxChh"]),
                            checked: C.checked,
                            disabled: z,
                            onChange: (e) => {
                                (C.setChecked(e), O(null));
                            },
                        }),
                        (0, n.jsx)(Y.u, { projectId: e }),
                        null != H
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: H,
                              })
                            : null,
                    ],
                }),
                canSave: ec && "" !== V,
                saving: z,
                nameChanged: ea,
                submit: eC,
            };
        })(l, T?.guild_id ?? t ?? void 0),
        U = (function (e, l) {
            let [t, n] = a.useState(b),
                [r, s] = a.useState(!1);
            a.useEffect(() => {
                if (!l) return;
                let t = !0;
                return (
                    (async function () {
                        try {
                            let l = await (0, h.vk)(e);
                            t && n(l);
                        } catch {}
                    })(),
                    () => {
                        t = !1;
                    }
                );
            }, [e, l]);
            let u = (0, i.cf)(
                    [g.Ay],
                    () =>
                        Object.fromEntries(
                            t.map((e) => {
                                let { project_id: l } = e;
                                return [l, g.Ay.getProject(l)];
                            }),
                        ),
                    [t],
                ),
                c = a.useMemo(
                    () =>
                        Object.fromEntries(
                            t.map((e) => {
                                let { project_id: l } = e;
                                return [
                                    l,
                                    u[l]?.name ?? v.intl.formatToPlainString(j.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [t, u],
                );
            return {
                callers: t,
                projects: u,
                names: c,
                failed: r,
                setBuild: a.useCallback(
                    async (l, t) => {
                        s(!1);
                        try {
                            await (0, h.Ol)(e, l, t);
                        } catch {
                            s(!0);
                            return;
                        }
                        n((e) => e.map((e) => (e.project_id === l ? { ...e, build: t } : e)));
                    },
                    [e],
                ),
                remove: a.useCallback(
                    async (l) => {
                        s(!1);
                        try {
                            await (0, h.pc)(e, l);
                        } catch {
                            s(!0);
                            return;
                        }
                        n((e) => e.filter((e) => e.project_id !== l));
                    },
                    [e],
                ),
            };
        })(l, B),
        [Z, H] = a.useState(null);
    return (0, n.jsx)(q.A, {
        projectId: l,
        scopeKeys: S,
        note: k,
        notifyAgent: y,
        isPreview: E,
        children: (e) => {
            let t = [];
            ((z || B) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                N?.tierSettings != null && t.push("model"),
                U.callers.length > 0 && t.push("linked"),
                z && t.push("experimental"));
            let a = [Z, C].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                x = (z && F.saving) || e.saving,
                h = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !i && z && F.canSave });
            async function b(n) {
                if ((n.preventDefault(), !h || x)) {
                    e.invalid && t.includes("app") && H("app");
                    return;
                }
                let s = !i && z && F.nameChanged,
                    u = await X({
                        appInvalid: e.invalid,
                        submitApp: e.submit,
                        submitProject: i || !z ? null : F.submit,
                    });
                if (u.saved) {
                    (await P(),
                        s &&
                            null != A &&
                            (function (e, l) {
                                let t = g.Ay.getProject(e);
                                if (null == t || !(0, M.qF)(t)) return;
                                let n = L.A.getPublishStatus(e);
                                null != n &&
                                    (0, D.lE)(n.publishState) &&
                                    (0, r.A)({
                                        title: v.intl.string(j.default["48pvCR"]),
                                        subtitle: v.intl.string(j.default["Xk+JsJ"]),
                                        confirmText: v.intl.string(j.default.guoHDk),
                                        cancelText: v.intl.string(j.default.HSyPrY),
                                        variant: "primary",
                                        onConfirm: () => {
                                            (0, M.FZ)(e, "name_prompt", l).catch(() => {});
                                        },
                                    });
                            })(l, A));
                    return;
                }
                "app" !== u.failedTab ? H(u.failedTab) : "secrets" !== a && H(t.includes("app") ? "app" : "secrets");
            }
            let S = v.intl.string(i ? j.default["jZjP+I"] : j.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: b,
                children: (0, n.jsxs)(s.d, {
                    transitionState: I,
                    onClose: P,
                    "aria-label": S,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: S }),
                        (0, n.jsxs)(c.c, {
                            controls:
                                i || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(d.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => H(e),
                                          "aria-label": v.intl.string(j.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(d.V.Item, { id: e, children: v.intl.string(eS[e]) }, e),
                                          ),
                                      }),
                            children: [
                                i || "app" === a ? e.fields : null,
                                i || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: eC.f,
                                          children: [
                                              z ? F.fields : null,
                                              (0, n.jsx)(V, { projectId: l, canEdit: B }, l),
                                          ],
                                      }),
                                i || "linked" !== a ? null : (0, n.jsx)(_, { linkedApps: U }),
                                i || "experimental" !== a ? null : F.experimentalFields,
                                i || "secrets" !== a ? null : e.secretFields,
                                i || "model" !== a || N?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(ey, { projectId: l, modelSettings: N, tierSettings: N.tierSettings }),
                                i || null != a
                                    ? null
                                    : R
                                      ? (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: v.intl.string(j.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eC.L, children: (0, n.jsx)(p.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(m.H, {
                            actionsFullWidth: !0,
                            actions: [
                                { text: v.intl.string(v.t["ETE/oC"]), variant: "secondary", onClick: P, disabled: x },
                                {
                                    text: v.intl.string(i ? j.default.A7dQd9 : v.t["R3BPH+"]),
                                    variant: "primary",
                                    type: "submit",
                                    loading: x,
                                    disabled: !h,
                                },
                            ],
                        }),
                    ],
                }),
            });
        },
    });
}
function ey(e) {
    let { projectId: l, modelSettings: t, tierSettings: r } = e,
        s = (0, i.bG)([x.default], () => "open" === x.default.getConnState(l), [l]),
        u = a.useCallback((e) => (0, z.X)(l, e), [l]),
        [c, d] = (0, B.A)(r, u);
    return (0, n.jsx)(F.A, { settings: c, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: d });
}
