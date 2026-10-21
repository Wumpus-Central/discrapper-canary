(t.d(l, { default: () => eC }), t(321073));
var n = t(477900),
    a = t(582128),
    r = t(17928),
    i = t(314116),
    s = t(224640),
    u = t(20742),
    c = t(430993),
    d = t(761508),
    o = t(331322),
    f = t(834730),
    m = t(289873),
    x = t(696208),
    g = t(319481),
    h = t(260498),
    p = t(360047),
    j = t(248675),
    b = t(105292);
let v = [];
var C = t(323384),
    S = t(661531),
    k = t(265872),
    y = t(980707),
    E = t(477782),
    A = t(866665),
    I = t(408278),
    P = t(365199),
    N = t(497183),
    _ = t(843313);
function R(e) {
    let { linkedApps: l } = e,
        { callers: t, projects: a, names: r, failed: s, setBuild: u, remove: c } = l;
    return (0, n.jsx)("div", {
        className: _.Mf,
        children: (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(f.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: b.intl.string(j.default["6c2rjv"]),
                }),
                (0, n.jsx)(o.B, {
                    gap: 8,
                    children: t.map((e) => {
                        let l = r[e.project_id];
                        return (0, n.jsx)(
                            T,
                            {
                                caller: e,
                                project: a[e.project_id],
                                name: l,
                                onBuildChange: (l) => u(e.project_id, l),
                                onRemove: () => {
                                    var t;
                                    return (
                                        (t = e.project_id),
                                        void (0, i.A)({
                                            title: b.intl.formatToPlainString(j.default.zSfIvv, { name: l }),
                                            subtitle: b.intl.formatToPlainString(j.default["7TX+mR"], { name: l }),
                                            confirmText: b.intl.string(j.default.vDZEGQ),
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
                          children: b.intl.string(j.default.dIEOrl),
                      })
                    : null,
            ],
        }),
    });
}
function T(e) {
    let { caller: l, project: t, name: r, onBuildChange: i, onRemove: s } = e,
        u = a.useRef(null),
        c = b.intl.formatToPlainString(j.default.bzMlmh, { name: r });
    return (0, n.jsxs)("div", {
        className: _.nM,
        children: [
            null != t
                ? (0, n.jsx)(N.A, { project: t, size: "card" })
                : (0, n.jsx)("div", {
                      className: _.Pz,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(C.k, { size: "md", color: S.A.colors.INTERACTIVE_ICON_DEFAULT }),
                  }),
            (0, n.jsxs)("div", {
                className: _.rf,
                children: [
                    (0, n.jsx)(f.E, { variant: "text-md/medium", lineClamp: 1, children: r }),
                    (0, n.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, p.hU)(l.build),
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
                                label: b.intl.string(j.default.Odrcmq),
                                children: p.Hi.map((e) =>
                                    (0, n.jsx)(
                                        E.iD,
                                        {
                                            id: `build-${e}`,
                                            group: `conjure-linked-app-build-${l.project_id}`,
                                            label: (0, p.hU)(e),
                                            subtext: (0, p.Vq)(e),
                                            checked: e === l.build,
                                            action: () => {
                                                (i(e), t());
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
                                    label: b.intl.string(j.default.bN1S9T),
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
                        className: _.hZ,
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
var z = t(557744),
    w = t(223347),
    B = t(822313),
    F = t(359589),
    L = t(722701),
    D = t(534223),
    M = t(297264),
    U = t(821609),
    Z = t(44255),
    H = t(303345),
    O = t(416473);
function G(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, r.bG)([g.default], () => "open" === g.default.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, g.ensureConnection)(e);
            }, [e, l]);
            let [n, i] = a.useState(null),
                [s, u] = a.useState(!0),
                [c, d] = a.useState(!1),
                [o, f] = a.useState(!1),
                [m, x] = a.useState(null),
                [h, p] = a.useState(null),
                [v, C] = a.useState(0),
                S = a.useRef(!1),
                k = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = k.current,
                    a = ++n.value;
                return (
                    (0, O.fi)(e)
                        .then((e) => {
                            k.current.value === a && (i(e), d(!0), u(!1));
                        })
                        .catch(() => {
                            k.current.value === a && (x(b.intl.string(j.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, v]);
            let y = a.useCallback(() => {
                    (u(!0), x(null), C((e) => e + 1));
                }, []),
                E = a.useCallback(async () => {
                    if (!l || !c || S.current) return;
                    S.current = !0;
                    let t = ++k.current.value;
                    (f(!0), x(null), p(null));
                    try {
                        let l = await (0, O.MN)(e);
                        if (k.current.value !== t) return;
                        (i(l), p(b.intl.string(j.default.lwN30C)));
                    } catch (e) {
                        k.current.value === t && x(e instanceof H.A ? e.message : b.intl.string(j.default.i5Xp1l));
                    } finally {
                        ((S.current = !1), k.current.value === t && f(!1));
                    }
                }, [l, c, e]);
            return { saved: n, loading: s, loaded: c, deleting: o, error: m, status: h, retry: y, remove: E };
        })(l, t),
        u = a.useId();
    return t
        ? (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(M.D, { id: u, variant: "heading-md/semibold", children: b.intl.string(j.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "text-sm/normal",
                            role: "status",
                            children: b.intl.string(j.default["71yzD9"]),
                        })
                      : null,
                  s.loaded
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                null == s.saved
                                    ? (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: b.intl.string(j.default.sg8WIV),
                                      })
                                    : (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: b.intl.string(j.default.ubcNP7),
                                      }),
                                null != s.saved
                                    ? (0, n.jsxs)(o.B, {
                                          gap: 8,
                                          children: [
                                              (0, Z.Dt)(s.saved).map((e, l) =>
                                                  (0, n.jsx)(f.E, { variant: "text-sm/normal", children: e }, l),
                                              ),
                                              (0, n.jsx)(U.$, {
                                                  type: "button",
                                                  variant: "secondary",
                                                  text: b.intl.string(j.default.J7ZMMf),
                                                  disabled: s.deleting,
                                                  onClick: function () {
                                                      (0, i.A)({
                                                          title: b.intl.string(j.default["Tw/KaB"]),
                                                          subtitle: b.intl.string(j.default.qr1iIe),
                                                          confirmText: b.intl.string(j.default.J7ZMMf),
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
                      : (0, n.jsx)(U.$, {
                            type: "button",
                            variant: "secondary",
                            text: b.intl.string(j.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          })
        : null;
}
var V = t(289970);
t(938796);
var q = t(193249),
    X = t(890497),
    J = t(862026),
    Q = t(904363),
    K = t(709753),
    W = t(540338),
    $ = t(961553),
    Y = t(503698),
    ee = t.n(Y),
    el = t(750943),
    et = t(22231),
    en = t(95477),
    ea = t(103557),
    er = t(946274),
    ei = t(951178),
    es = t(535466),
    eu = t(154600);
function ec(e) {
    let { iconURL: l, disabled: t, onChange: r, onError: i } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: eu.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: ee()(eu.Vs, { [eu.A6]: u }),
                "aria-label": b.intl.string(u ? b.t["MsUY/S"] : b.t["6yrpFR"]),
                disabled: t,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(el.X, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: eu.uP, src: l, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: eu.Jx,
                                  children: (0, n.jsx)(et.PencilIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
            }),
            (0, n.jsx)(er.Ay, {
                ref: s,
                className: eu.Fg,
                multiple: !1,
                filters: [{ name: b.intl.string(b.t["Sp2NF+"]), extensions: es.En }],
                maxFileSizeBytes: es.Q0,
                onChange: (e) => {
                    (i(null), r(e));
                },
                onFileSizeError: () => i(b.intl.string(j.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function ed(e, l, t) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, l) {
            let t = l.offsetHeight;
            for (let n = l; null != n && n !== e; n = n.offsetParent) t += n.offsetTop;
            return t;
        })(l, t)}px`,
    );
}
function eo(e) {
    let l,
        t,
        {
            iconURL: r,
            onIconChange: i,
            name: s,
            nameError: u,
            onNameChange: c,
            description: d,
            onDescriptionChange: m,
            disabled: x = !1,
        } = e,
        [g, h] = a.useState(null),
        { rowRef: p, fieldRef: v } =
            ((l = a.useRef(null)),
            (t = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = l.current,
                    n = t.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                ed(e, n, a);
                let r = new ResizeObserver(() => ed(e, n, a));
                return (r.observe(n), r.observe(a), () => r.disconnect());
            }, []),
            { rowRef: l, fieldRef: t });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.B, {
                gap: 8,
                children: [
                    (0, n.jsxs)("div", {
                        ref: p,
                        className: eu.S7,
                        children: [
                            (0, n.jsx)(ec, { iconURL: r, disabled: x, onChange: i, onError: h }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: eu.yD,
                                children: (0, n.jsx)(en.k, {
                                    label: b.intl.string(j.default.GWBCF9),
                                    value: s,
                                    onChange: c,
                                    error: u,
                                    maxLength: ei.eq,
                                    disabled: x,
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                    null != g
                        ? (0, n.jsx)(f.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              "aria-live": "polite",
                              children: g,
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(ea.f, {
                label: b.intl.string(j.default.ynaGa1),
                placeholder: b.intl.string(j.default["I+3UTL"]),
                value: d,
                onChange: m,
                maxLength: ei.HR,
                disabled: x,
            }),
        ],
    });
}
var ef = t(502707),
    em = t(944142),
    ex = t(788493),
    eg = t(532247),
    eh = t(371169),
    ep = t(246338),
    ej = t(277085),
    eb = t(453430);
let ev = {
    project: j.default.W0eQfN,
    app: j.default.lFaJYF,
    secrets: j.default.vDpCPU,
    model: j.default.Rs3qc9,
    linked: j.default.fBEHdq,
    experimental: j.default["0Pe9uw"],
};
function eC(e) {
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
        N = (0, r.bG)([h.Ay], () => h.Ay.getProject(l), [l]),
        _ = (0, r.bG)([z.A], () => z.A.getModelSettings(l), [l]),
        T = (0, r.bG)([g.default], () => "open" === g.default.getConnState(l), [l]),
        w = null != N && (0, h.PV)(N),
        B = null != N && (0, h.jf)(N),
        F = (function (e, l) {
            var t;
            let i,
                s = (0, r.bG)([h.Ay], () => h.Ay.getProject(e), [e]),
                u = (0, Q.A)(l),
                c = (function (e) {
                    let l = (0, r.bG)([em.A], () => em.A.getLiveReload(e), [e]),
                        t = (0, ef.A)(e),
                        [n, i] = a.useState(null),
                        [s, u] = a.useState(null);
                    null != s && l !== s.before && u(null);
                    let c = null != s && l === s.before ? s.enabled : l?.enabled;
                    null != n && n === c && i(null);
                    let d = null != l && null != n && n !== c,
                        o = a.useCallback(
                            () => !d || null == n || (!!(0, ex.c)(e, n) && (u({ enabled: n, before: l }), i(null), !0)),
                            [d, n, l, e],
                        );
                    return {
                        available: null != l && !t,
                        checked: n ?? c ?? !1,
                        description: null == l ? "" : (0, eg.oV)(l),
                        changed: d,
                        setChecked: i,
                        save: o,
                    };
                })(e),
                d = c.save,
                m = (0, $.A)(e),
                { changes: x, commit: g } = m,
                p = (0, J.Q)(e),
                v = p.save,
                C = (0, K._t)(e),
                S = C.save,
                k = s?.collaborator_role_ids ?? [],
                [y, E] = a.useState(s?.name ?? ""),
                [A, I] = a.useState(null),
                [P, N] = a.useState(y),
                [_, R] = a.useState(s?.flags ?? 0),
                [T, z] = a.useState(() => [...k]),
                [w, B] = a.useState(!1),
                [F, L] = a.useState(null),
                [D, M] = a.useState(null),
                [U, Z] = a.useState(null),
                [H, O] = a.useState(null),
                G = a.useId(),
                V = P.trim(),
                Y = null != s && (0, ei.IU)(s),
                ee = null != s && "user" !== s.install_scope,
                el = ee && null != l && (0, ei.RX)(s),
                { isPublic: et, isGuildCollaboration: en } = (0, ep.n5)(_),
                ea = null != s && V !== y,
                er = Y && _ !== (A?.flags ?? s?.flags ?? 0),
                es =
                    el &&
                    ((t = A?.roleIds ?? k),
                    !((i = T instanceof Set ? T : new Set(T)).size === t.length && t.every((e) => i.has(e)))),
                eu = ea || er || es || m.changed,
                ec = eu || c.changed || p.changed || C.changed,
                ed = a.useCallback((e) => {
                    (N(e), L(null), Z(null));
                }, []),
                eb = a.useCallback((e, l) => {
                    (R((t) => (l ? t | e : t & ~e)), M(null), Z(null));
                }, []),
                ev = a.useCallback((e) => {
                    e.length > ei.sq
                        ? M(b.intl.formatToPlainString(j.default["dH7+/Z"], { max: ei.sq }))
                        : (z(e), M(null), Z(null));
                }, []),
                eC = a.useCallback(async () => {
                    if (null == s || !ec || w) return null;
                    let t = ea ? (0, ej.p)(V) : null;
                    if (null != t) return (L(t), "project");
                    let n = { ...x };
                    (ea && (n.name = V),
                        er && (n.flags = _),
                        es && (n.collaborator_role_ids = [...T].sort()),
                        null == s.guild_id && null != l && (es || (er && en)) && (n.guild_id = l),
                        B(!0),
                        Z(null),
                        O(null));
                    try {
                        if ((eu && (await (0, eh.CW)(e, n), E(V), I({ flags: _, roleIds: [...T] }), g()), !d()))
                            return (Z(b.intl.string(j.default.XzkNBw)), "project");
                        if (!v() || !S()) return (O(b.intl.string(j.default["9JPr8h"])), "experimental");
                        return null;
                    } catch {
                        return (Z(b.intl.string(j.default["9JPr8h"])), "project");
                    } finally {
                        B(!1);
                    }
                }, [_, er, g, x, d, v, S, eu, l, ec, en, ea, s, e, es, w, T, V]);
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(eo, {
                            iconURL: m.iconURL,
                            onIconChange: (e) => {
                                (m.setIcon(e), Z(null));
                            },
                            name: P,
                            nameError: F,
                            onNameChange: ed,
                            description: m.description,
                            onDescriptionChange: (e) => {
                                (m.setDescription(e), Z(null));
                            },
                            disabled: w,
                        }),
                        Y
                            ? (0, n.jsx)(q.d, {
                                  label: b.intl.string(j.default.ujIxRm),
                                  description: b.intl.string(j.default.gT8zk1),
                                  checked: et,
                                  disabled: w,
                                  onChange: (e) => eb(ei.Zh.PUBLIC, e),
                              })
                            : null,
                        Y && ee
                            ? (0, n.jsx)(q.d, {
                                  label: b.intl.string(j.default.lVvR4E),
                                  description: b.intl.string(j.default.SQZGoV),
                                  checked: en,
                                  disabled: w,
                                  onChange: (e) => eb(ei.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        c.available
                            ? (0, n.jsx)(q.d, {
                                  label: b.intl.string(j.default.eEo0ye),
                                  description: c.description,
                                  checked: c.checked,
                                  disabled: w,
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
                                          children: b.intl.string(j.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(X.Z, {
                                          selectionMode: "multiple",
                                          label: b.intl.string(j.default["pO3+p5"]),
                                          placeholder: b.intl.string(j.default.gvL7QS),
                                          value: T,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: w || !en,
                                          "aria-invalid": null != D,
                                          "aria-errormessage": null != D ? G : void 0,
                                          onSelectionChange: ev,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: b.intl.formatToPlainString(j.default.g5I05P, {
                                              count: T.length,
                                              max: ei.sq,
                                          }),
                                      }),
                                      en
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: b.intl.string(j.default.nZw5r9),
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
                        (0, n.jsx)(q.d, {
                            label: b.intl.string(j.default["4liZ45"]),
                            description: b.intl.string(j.default.I5cl7p),
                            checked: p.checked,
                            disabled: w,
                            onChange: (e) => {
                                (p.setChecked(e), O(null));
                            },
                        }),
                        (0, n.jsx)(q.d, {
                            label: b.intl.string(j.default.mpjaVm),
                            description: b.intl.string(j.default["2PxChh"]),
                            checked: C.checked,
                            disabled: w,
                            onChange: (e) => {
                                (C.setChecked(e), O(null));
                            },
                        }),
                        (0, n.jsx)(W.u, { projectId: e }),
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
                saving: w,
                nameChanged: ea,
                submit: eC,
            };
        })(l, N?.guild_id ?? t ?? void 0),
        M = (function (e, l) {
            let [t, n] = a.useState(v),
                [i, s] = a.useState(!1);
            a.useEffect(() => {
                if (!l) return;
                let t = !0;
                return (
                    (async function () {
                        try {
                            let l = await (0, p.vk)(e);
                            t && n(l);
                        } catch {}
                    })(),
                    () => {
                        t = !1;
                    }
                );
            }, [e, l]);
            let u = (0, r.cf)(
                    [h.Ay],
                    () =>
                        Object.fromEntries(
                            t.map((e) => {
                                let { project_id: l } = e;
                                return [l, h.Ay.getProject(l)];
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
                                    u[l]?.name ?? b.intl.formatToPlainString(j.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [t, u],
                );
            return {
                callers: t,
                projects: u,
                names: c,
                failed: i,
                setBuild: a.useCallback(
                    async (l, t) => {
                        s(!1);
                        try {
                            await (0, p.Ol)(e, l, t);
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
                            await (0, p.pc)(e, l);
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
        [U, Z] = a.useState(null);
    return (0, n.jsx)(V.A, {
        projectId: l,
        scopeKeys: S,
        note: k,
        notifyAgent: y,
        isPreview: E,
        children: (e) => {
            let t = [];
            ((w || B) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                _?.tierSettings != null && t.push("model"),
                M.callers.length > 0 && t.push("linked"),
                w && t.push("experimental"));
            let a = [U, C].find((e) => null != e && t.includes(e)) ?? t[0],
                r = e.isScoped,
                g = (w && F.saving) || e.saving,
                p = e.canSave || (!r && w && F.canSave);
            async function v(n) {
                if ((n.preventDefault(), !p || g)) return;
                let s = !r && w && F.nameChanged,
                    [u, c] = await Promise.all([r || !w ? null : F.submit(), e.submit()]);
                if (null == u && c) {
                    let e;
                    (await P(),
                        s &&
                            null != A &&
                            null != (e = h.Ay.getProject(l)) &&
                            (0, D.qF)(e) &&
                            (L.A.getPublishStatus(l)?.state ?? "unpublished") !== "unpublished" &&
                            (0, i.A)({
                                title: b.intl.string(j.default["48pvCR"]),
                                subtitle: b.intl.string(j.default["Xk+JsJ"]),
                                confirmText: b.intl.string(j.default.guoHDk),
                                cancelText: b.intl.string(j.default.HSyPrY),
                                variant: "primary",
                                onConfirm: () => {
                                    (0, D.FZ)(l, "name_prompt", A).catch(() => {});
                                },
                            }));
                    return;
                }
                null != u ? Z(u) : "secrets" !== a && Z(t.includes("app") ? "app" : "secrets");
            }
            let S = b.intl.string(r ? j.default["jZjP+I"] : j.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: v,
                children: (0, n.jsxs)(s.d, {
                    transitionState: I,
                    onClose: P,
                    "aria-label": S,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: S }),
                        (0, n.jsxs)(c.c, {
                            controls:
                                r || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(d.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => Z(e),
                                          "aria-label": b.intl.string(j.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(d.V.Item, { id: e, children: b.intl.string(ev[e]) }, e),
                                          ),
                                      }),
                            children: [
                                r || "app" === a ? e.fields : null,
                                r || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: eb.f,
                                          children: [
                                              w ? F.fields : null,
                                              (0, n.jsx)(G, { projectId: l, canEdit: B }, l),
                                          ],
                                      }),
                                r || "linked" !== a ? null : (0, n.jsx)(R, { linkedApps: M }),
                                r || "experimental" !== a ? null : F.experimentalFields,
                                r || "secrets" !== a ? null : e.secretFields,
                                r || "model" !== a || _?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(eS, { projectId: l, modelSettings: _, tierSettings: _.tierSettings }),
                                r || null != a
                                    ? null
                                    : T
                                      ? (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: b.intl.string(j.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eb.L, children: (0, n.jsx)(m.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(x.H, {
                            actionsFullWidth: !0,
                            actions: [
                                { text: b.intl.string(b.t["ETE/oC"]), variant: "secondary", onClick: P, disabled: g },
                                {
                                    text: b.intl.string(r ? j.default.A7dQd9 : b.t["R3BPH+"]),
                                    variant: "primary",
                                    type: "submit",
                                    loading: g,
                                    disabled: !p,
                                },
                            ],
                        }),
                    ],
                }),
            });
        },
    });
}
function eS(e) {
    let { projectId: l, modelSettings: t, tierSettings: i } = e,
        s = (0, r.bG)([g.default], () => "open" === g.default.getConnState(l), [l]),
        u = a.useCallback((e) => (0, w.X)(l, e), [l]),
        [c, d] = (0, B.A)(i, u);
    return (0, n.jsx)(F.A, { settings: c, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: d });
}
