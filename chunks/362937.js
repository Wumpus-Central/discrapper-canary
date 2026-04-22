n.d(t, { ImportBenefitsFromRoleModal: () => el, ImportBenefitsFromSubscriptionListingModal: () => X });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(189213),
    o = n(311907),
    d = n(52133),
    c = n(319060),
    m = n(187322),
    h = n(933832),
    x = n(534514),
    u = n(194117),
    g = n(834730),
    j = n(939249),
    f = n(179866),
    _ = n(935462),
    p = n(276293),
    v = n(825484),
    N = n(821609),
    b = n(430690),
    C = n(565645),
    A = n(444927),
    E = n(47167),
    I = n(713654),
    S = n(915089),
    k = n(508675),
    w = n(201275),
    y = n(657048),
    M = n(95701),
    T = n(34457),
    B = n(769765),
    D = n(317525),
    L = n(71393),
    z = n(994500),
    O = n(287809),
    R = n(147925),
    F = n(240248),
    G = n(500345),
    K = n(361588),
    q = n(417360),
    J = n(898612),
    P = n(652215),
    Q = n(985018),
    W = n(251148);
let $ = (0, S.Ld)(),
    H = (0, S.Ld)(),
    V = (0, F.xI)(c.A.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function Z(e) {
    let { emojiId: t, emojiName: n, className: l } = e,
        r = (0, o.bG)([k.Ay], () => (null != t ? k.Ay.getCustomEmojiById(t) : void 0));
    return (0, i.jsx)(C.A, { emojiId: t, emojiName: n, animated: r?.animated ?? !1, className: l });
}
function U(e) {
    let { icon: t, children: n, checked: l, disabled: r = !1, onChange: a } = e,
        o = l || r;
    return (0, i.jsxs)("label", {
        className: s()(W.nM, { [W.KD]: o, [W.r9]: r }),
        children: [
            (0, i.jsx)("div", { className: W.N, children: t }),
            (0, i.jsx)("div", { className: W.qg, children: n }),
            (0, i.jsxs)("div", {
                className: W.eF,
                children: [
                    (0, i.jsx)(m.vN, {
                        children: (0, i.jsx)("input", {
                            type: "checkbox",
                            checked: o,
                            disabled: r,
                            className: W.m8,
                            onChange: function (e) {
                                a(e.target.checked);
                            },
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: W.Ew,
                        children: (0, i.jsx)(h.A, {
                            size: "md",
                            color: "currentColor",
                            className: W.pc,
                            "aria-hidden": !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function Y(e) {
    let { title: t, selectAllText: n, benefits: l, dupeBenefits: r, selectedBenefits: s, onToggleBenefit: a } = e,
        o = l.every((e) => s.has(e));
    return l.length > 0
        ? (0, i.jsxs)("div", {
              className: W.uW,
              children: [
                  (0, i.jsx)(x.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                  l.length - r.size > 1 &&
                      (0, i.jsx)("div", {
                          className: W.p_,
                          children: (0, i.jsx)(U, {
                              icon: (0, i.jsx)(u.f, { size: "md", color: "currentColor", className: W.aL }),
                              checked: o,
                              onChange: function (e) {
                                  for (let t of l) r.has(t) || a(t, e);
                              },
                              children: (0, i.jsx)(g.E, {
                                  color: "text-strong",
                                  variant: "text-md/normal",
                                  children: n,
                              }),
                          }),
                      }),
                  (0, i.jsx)("div", {
                      className: W.p_,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              U,
                              {
                                  icon: (0, i.jsx)(Z, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: W.aL,
                                  }),
                                  checked: s.has(e),
                                  disabled: r.has(e),
                                  onChange: (t) => a(e, t),
                                  children: [
                                      (0, i.jsx)(g.E, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          children: (0, J.A)(e),
                                      }),
                                      (0, i.jsx)(g.E, {
                                          color: "interactive-text-default",
                                          variant: "text-sm/normal",
                                          children: e.description,
                                      }),
                                  ],
                              },
                              (0, G.nh)(e),
                          ),
                      ),
                  }),
              ],
          })
        : null;
}
function X(e) {
    let {
            transitionState: t,
            fromSubscriptionListing: n,
            existingChannelBenefits: r,
            existingIntangibleBenefits: s,
            onSubmit: o,
            onClose: c,
        } = e,
        m = n.role_benefits.benefits,
        [h, x] = l.useState(() => new Set(m)),
        u = l.useMemo(() => m.filter(G.B1), [m]),
        j = (0, q.A)(u),
        f = l.useMemo(() => m.filter(G.b1), [m]),
        _ = l.useMemo(() => new Set(j.filter((e) => r.some((t) => t.ref_id === e.ref_id))), [j, r]),
        p = l.useMemo(() => new Set(f.filter((e) => s.some((t) => (0, d.A)(e, t)))), [s, f]);
    function v(e, t) {
        x((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    function N(e) {
        e.preventDefault();
        let t = m.filter((e) => h.has(e));
        o(
            t.filter(G.B1).filter((e) => !_.has(e)),
            t.filter(G.b1).filter((e) => !p.has(e)),
        ),
            c();
    }
    return (0, i.jsx)("form", {
        onSubmit: N,
        children: (0, i.jsxs)(a.Modal, {
            transitionState: t,
            onClose: c,
            title: Q.intl.format(Q.t["7zpiYL"], { tierName: n.name }).toString(),
            actions: [
                { variant: "secondary", text: Q.intl.string(Q.t["ETE/oC"]), onClick: c },
                { variant: "primary", text: Q.intl.string(Q.t["27a21y"]), disabled: 0 === h.size, onClick: N },
            ],
            children: [
                0 === j.length &&
                    0 === f.length &&
                    (0, i.jsx)(g.E, { variant: "text-md/normal", children: Q.intl.string(Q.t["I+16xv"]) }),
                (0, i.jsx)(Y, {
                    title: Q.intl.string(Q.t.S2kKzP),
                    selectAllText: Q.intl.string(Q.t["5Q/fLO"]),
                    benefits: j,
                    dupeBenefits: _,
                    selectedBenefits: h,
                    onToggleBenefit: v,
                }),
                (0, i.jsx)(Y, {
                    title: Q.intl.string(Q.t.RdwKw7),
                    selectAllText: Q.intl.string(Q.t.aJPLVE),
                    benefits: f,
                    dupeBenefits: p,
                    selectedBenefits: h,
                    onToggleBenefit: v,
                }),
            ],
        }),
    });
}
function ee(e) {
    let { guildId: t, role: n, channelCount: l, onSelect: r } = e,
        s = (0, w.$7)({ guildId: t, roleId: n.id, size: V });
    return (0, i.jsxs)(j.D, {
        className: W.xf,
        onClick: r,
        children: [
            (0, i.jsx)("div", {
                className: W.N,
                children:
                    null != s
                        ? (0, i.jsx)(y.A, { ...s })
                        : (0, i.jsx)(f.i, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: n.colorString ?? P.TpD,
                              className: W.bO,
                          }),
            }),
            (0, i.jsxs)("div", {
                className: W.qg,
                children: [
                    (0, i.jsx)(g.E, {
                        color: "text-strong",
                        variant: "text-md/normal",
                        className: W.__invalid_benefitTitle,
                        children: n.name,
                    }),
                    (0, i.jsx)(g.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: Q.intl.format(Q.t["2KzH89"], { num: l }),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: W.eF, children: (0, i.jsx)(R.A, { direction: R.A.Directions.RIGHT }) }),
        ],
    });
}
function et(e) {
    let { guild: t, onSelect: n } = e,
        r = (0, o.bG)([D.A], () => D.A.getSortedRoles(t.id)),
        s = (0, o.bG)([B.A], () => B.A.getCategories(t.id)),
        a = l.useMemo(
            () =>
                s._categories.flatMap((e) =>
                    s[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return M.JT.has(t.type);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t;
                        }),
                ),
            [s],
        ),
        d = l.useMemo(
            () =>
                r.flatMap((e) => {
                    if ((0, T.Oy)(e) || e.tags?.subscription_listing_id != null || (0, T.sx)(e, P.Lti)) return [];
                    let t = (0, K.A)(a, e).length;
                    return t > 0 ? { role: e, channelCount: t } : [];
                }),
            [r, a],
        );
    return d.length > 0
        ? (0, i.jsx)("div", {
              className: W.p_,
              children: d.map((e) =>
                  (0, i.jsx)(
                      ee,
                      { guildId: t.id, role: e.role, channelCount: e.channelCount, onSelect: () => n(e.role) },
                      e.role.id,
                  ),
              ),
          })
        : (0, i.jsx)(g.E, { variant: "text-md/normal", children: Q.intl.string(Q.t.u09gKk) });
}
function en(e) {
    let { onClose: t, guildId: n, onSelect: l } = e,
        r = (0, o.bG)([L.A], () => L.A.getGuild(n));
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(_.rQ, {
                      "data-migration-pending": !0,
                      children: [
                          (0, i.jsx)(x.D, {
                              id: $,
                              variant: "heading-md/semibold",
                              children: Q.intl.string(Q.t["3JrZ/P"]),
                          }),
                          (0, i.jsx)(_.s_, { "data-migration-pending": !0, className: W.iT, onClick: t }),
                      ],
                  }),
                  (0, i.jsx)(_.$m, {
                      "data-migration-pending": !0,
                      className: W.jE,
                      children: (0, i.jsx)(et, { guild: r, onSelect: l }),
                  }),
              ],
          });
}
function ei(e) {
    let { onClose: t, guildId: n, role: r, onCancel: s, onImport: a } = e,
        o = l.useRef(r);
    null != r && (o.current = r);
    let d = r ?? o.current,
        c = (0, A.A)(() => {
            let e = B.A.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return M.JT.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    }),
            );
        }),
        m = l.useMemo(() => (0, K.A)(c, d), [c, d]),
        [h, j] = l.useState(() => new Set(m.map((e) => e.id)));
    function f(e, t) {
        j((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, i.jsxs)("form", {
        onSubmit: function (e) {
            e.preventDefault(), a(m.map((e) => e.id).filter((e) => h.has(e))), t();
        },
        className: W.ID,
        children: [
            (0, i.jsxs)(_.rQ, {
                "data-migration-pending": !0,
                children: [
                    (0, i.jsx)(x.D, {
                        id: H,
                        variant: "heading-md/semibold",
                        children: Q.intl.format(Q.t.iuPodG, { roleName: d.name }),
                    }),
                    (0, i.jsx)(_.s_, { "data-migration-pending": !0, className: W.iT, onClick: t }),
                ],
            }),
            (0, i.jsxs)(_.$m, {
                "data-migration-pending": !0,
                className: W.jE,
                children: [
                    m.length > 1 &&
                        (0, i.jsx)("div", {
                            className: W.p_,
                            children: (0, i.jsx)(U, {
                                icon: (0, i.jsx)(u.f, { size: "md", color: "currentColor" }),
                                checked: h.size === m.length,
                                onChange: function (e) {
                                    for (let t of m) f(t.id, e);
                                },
                                children: (0, i.jsx)(g.E, {
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: Q.intl.string(Q.t["5Q/fLO"]),
                                }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: W.p_,
                        children: m.map((e) => {
                            let t = (0, I._U)(e.type) ?? p.N;
                            return (0, i.jsx)(
                                U,
                                {
                                    icon: (0, i.jsx)("div", {
                                        className: W.aL,
                                        children: (0, i.jsx)(t, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: "100%",
                                            height: "100%",
                                        }),
                                    }),
                                    checked: h.has(e.id),
                                    onChange: (t) => f(e.id, t),
                                    children: (0, i.jsx)(g.E, {
                                        color: "text-strong",
                                        variant: "text-md/normal",
                                        className: W.__invalid_benefitTitle,
                                        children: (0, E.m1)(e, O.default, z.A),
                                    }),
                                },
                                e.id,
                            );
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(_.jl, {
                "data-migration-pending": !0,
                children: (0, i.jsxs)(v.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, i.jsx)(N.$, { variant: "primary", text: Q.intl.string(Q.t["1j8Sow"]), type: "submit" }),
                        (0, i.jsx)(N.$, { variant: "secondary", text: Q.intl.string(Q.t["ETE/oC"]), onClick: s }),
                    ],
                }),
            }),
        ],
    });
}
function el(e) {
    let { transitionState: t, guildId: n, onClose: r, onImport: s } = e,
        [a, o] = l.useState();
    return (0, i.jsx)(_.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        "aria-labelledby": null == a ? $ : H,
        parentComponent: "ImportBenefitsModal",
        children: (0, i.jsxs)(b.t, {
            contentDisplay: "flex",
            activeSlide: +(null != a),
            width: 440,
            children: [
                (0, i.jsx)(b.q, { id: 0, children: (0, i.jsx)(en, { onClose: r, guildId: n, onSelect: o }) }),
                (0, i.jsx)(b.q, {
                    id: 1,
                    children: (0, i.jsx)(ei, {
                        onClose: r,
                        guildId: n,
                        role: a,
                        onCancel: () => o(void 0),
                        onImport: s,
                    }),
                }),
            ],
        }),
    });
}
