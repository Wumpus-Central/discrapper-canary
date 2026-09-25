(l.d(t, { default: () => P }), l(321073));
var n = l(477900),
    i = l(582128),
    a = l(17928),
    s = l(189213),
    r = l(761508),
    u = l(834730),
    d = l(289873),
    o = l(277977),
    c = l(972786),
    g = l(98115),
    f = l(349735);
l(938796);
var p = l(545442),
    x = l(331322),
    h = l(95477),
    m = l(193249),
    b = l(890497),
    S = l(317525),
    v = l(673724),
    j = l(948230),
    y = l(683180),
    C = l(652215),
    A = l(50617),
    k = l(375708),
    E = l(249154);
let w = { project: A.default.wo1EUp, app: A.default["8drwHu"], secrets: A.default.iD7xfZ, model: A.default.aMTBSX };
function P(e) {
    let {
            projectId: t,
            guildId: l,
            initialTab: g,
            scopeKeys: P,
            note: T,
            notifyAgent: _,
            isPreview: B,
            transitionState: V,
            onClose: U,
        } = e,
        H = (0, a.bG)([c.Ay], () => c.Ay.getProject(t), [t]),
        L = (0, a.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
        R = (0, a.bG)([o.Ay], () => "open" === o.Ay.getConnState(t), [t]),
        Z = null != H && (0, c.PV)(H),
        q = (function (e, t) {
            let l,
                s = (0, a.bG)([c.Ay], () => c.Ay.getProject(e), [e]),
                r = (0, a.yK)([S.A], () => (null != t ? S.A.getSortedRoles(t) : []), [t]),
                d = i.useMemo(
                    () =>
                        r.map((e) => ({
                            key: e.id,
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: () => (0, n.jsx)(p.R, { color: e.colorString ?? C.TpD, colors: e.colorStrings }),
                        })),
                    [r],
                ),
                o = s?.collaborator_role_ids ?? [],
                [g] = i.useState(s?.name ?? ""),
                [f, E] = i.useState(g),
                [w, P] = i.useState(s?.flags ?? 0),
                [I, T] = i.useState(() => [...o]),
                [_, B] = i.useState(!1),
                [V, U] = i.useState(null),
                [H, L] = i.useState(null),
                [R, Z] = i.useState(null),
                q = i.useId(),
                z = f.trim(),
                G = null != s && (0, v.IU)(s),
                M = null != s && null != t && (0, v.RX)(s),
                { isPublic: D, isShared: Q } = (0, y.oA)(w),
                W = null != s && z !== g,
                F = G && w !== (s?.flags ?? 0),
                K = M && !((l = I instanceof Set ? I : new Set(I)).size === o.length && o.every((e) => l.has(e))),
                X = W || F || K,
                N = i.useCallback((e) => {
                    (E(e), U(null), Z(null));
                }, []),
                J = i.useCallback((e, t) => {
                    (P((l) => (t ? l | e : l & ~e)), L(null), Z(null));
                }, []),
                O = i.useCallback((e) => {
                    e.length > v.sq
                        ? L(k.intl.formatToPlainString(A.default.VPUL05, { max: v.sq }))
                        : (T(e), L(null), Z(null));
                }, []),
                Y = i.useCallback(async () => {
                    if (null == s || !X || _) return !0;
                    if ("" === z) return (U(k.intl.string(A.default.I2hgEB)), !1);
                    let l = {};
                    (W && (l.name = z),
                        F && (l.flags = w),
                        K && (l.collaborator_role_ids = [...I].sort()),
                        null == s.guild_id && null != t && (K || (F && D)) && (l.guild_id = t),
                        B(!0),
                        Z(null));
                    try {
                        if (!(await (0, j.CW)(e, l)).ok) return (Z(k.intl.string(A.default.dxH2ZV)), !1);
                        return !0;
                    } catch {
                        return (Z(k.intl.string(A.default.dxH2ZV)), !1);
                    } finally {
                        B(!1);
                    }
                }, [w, F, t, X, D, W, s, e, K, _, I, z]);
            return {
                fields: (0, n.jsxs)(x.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(h.k, {
                            label: k.intl.string(A.default.u9UpIx),
                            value: f,
                            onChange: N,
                            error: V,
                            maxLength: 128,
                            disabled: _,
                            fullWidth: !0,
                        }),
                        G
                            ? (0, n.jsx)(m.d, {
                                  label: k.intl.string(A.default.EHMPvA),
                                  description: k.intl.string(A.default.bQQ4uT),
                                  checked: Q,
                                  disabled: _,
                                  onChange: (e) => J(v.A2.SHAREABLE, e),
                              })
                            : null,
                        G
                            ? (0, n.jsx)(m.d, {
                                  label: k.intl.string(A.default.fvxLKl),
                                  description: k.intl.string(A.default.Eb3Pe3),
                                  checked: D,
                                  disabled: _,
                                  onChange: (e) => J(v.A2.PUBLIC, e),
                              })
                            : null,
                        M
                            ? (0, n.jsxs)(x.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(u.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: k.intl.string(A.default.gWSQVl),
                                      }),
                                      (0, n.jsx)(b.Z, {
                                          selectionMode: "multiple",
                                          label: k.intl.string(A.default.fqvhf0),
                                          placeholder: k.intl.string(A.default.xEhUCx),
                                          value: I,
                                          options: d,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: _ || !D,
                                          "aria-invalid": null != H,
                                          "aria-errormessage": null != H ? q : void 0,
                                          onSelectionChange: O,
                                      }),
                                      (0, n.jsx)(u.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: k.intl.formatToPlainString(A.default.eaqbJt, {
                                              count: I.length,
                                              max: v.sq,
                                          }),
                                      }),
                                      D
                                          ? null
                                          : (0, n.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: k.intl.string(A.default.FTvt33),
                                            }),
                                      null != H
                                          ? (0, n.jsx)(u.E, {
                                                id: q,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: H,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != R
                            ? (0, n.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: R,
                              })
                            : null,
                    ],
                }),
                canSave: X && "" !== z,
                saving: _,
                submit: Y,
            };
        })(t, H?.guild_id ?? l ?? void 0),
        [z, G] = i.useState(null);
    return (0, n.jsx)(f.A, {
        projectId: t,
        scopeKeys: P,
        note: T,
        notifyAgent: _,
        isPreview: B,
        children: (e) => {
            let l = [];
            (Z && l.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && l.push("app"),
                e.secretCount > 0 && l.push("secrets"),
                L?.tierSettings != null && l.push("model"));
            let i = [z, g].find((e) => null != e && l.includes(e)) ?? l[0],
                a = e.isScoped,
                o = q.saving || e.saving,
                c = e.canSave || (!a && q.canSave);
            async function f(t) {
                if ((t.preventDefault(), !c || o)) return;
                let [n, s] = await Promise.all([!!a || q.submit(), e.submit()]);
                n && s ? await U() : n ? "secrets" !== i && G(l.includes("app") ? "app" : "secrets") : G("project");
            }
            return (0, n.jsx)("form", {
                onSubmit: f,
                children: (0, n.jsxs)(s.a, {
                    transitionState: V,
                    onClose: U,
                    title: k.intl.string(a ? A.default.wgDhiQ : A.default.cWmjzs),
                    size: "md",
                    input:
                        a || l.length < 2
                            ? void 0
                            : (0, n.jsx)(r.V, {
                                  selectedItem: i,
                                  type: "top",
                                  onItemSelect: (e) => G(e),
                                  "aria-label": k.intl.string(A.default.FAz9Zy),
                                  children: l.map((e) =>
                                      (0, n.jsx)(r.V.Item, { id: e, children: k.intl.string(w[e]) }, e),
                                  ),
                              }),
                    actions: [
                        { text: k.intl.string(k.t["ETE/oC"]), variant: "secondary", onClick: U, disabled: o },
                        {
                            text: k.intl.string(a ? A.default.Tuz9vw : k.t["R3BPH+"]),
                            variant: "primary",
                            type: "submit",
                            loading: o,
                            disabled: !c,
                        },
                    ],
                    children: [
                        a || "app" === i ? e.fields : null,
                        a || "project" !== i ? null : q.fields,
                        a || "secrets" !== i ? null : e.secretFields,
                        a || "model" !== i || L?.tierSettings == null
                            ? null
                            : (0, n.jsx)(I, { projectId: t, modelSettings: L, tierSettings: L.tierSettings }),
                        a || null != i
                            ? null
                            : R
                              ? (0, n.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: k.intl.string(A.default.URnN4B),
                                })
                              : (0, n.jsx)("div", { className: E.L, children: (0, n.jsx)(d.y, {}) }),
                    ],
                }),
            });
        },
    });
}
function I(e) {
    let { projectId: t, modelSettings: l, tierSettings: s } = e,
        r = (0, a.bG)([o.Ay], () => "open" === o.Ay.getConnState(t), [t]),
        u = i.useCallback((e) => (0, o.XZ)(t, e), [t]),
        [d, c] = (0, g.kn)(s, u);
    return (0, n.jsx)(g.Ay, { settings: d, tiers: l.tiers, choices: l.choices, disabled: !r, onChange: c });
}
