n.d(t, { ImportBenefitsFromRoleModal: () => W, ImportBenefitsFromSubscriptionListingModal: () => K });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(158954),
    o = n(311907),
    d = n(52133),
    c = n(319060),
    m = n(397927),
    x = n(565645),
    h = n(444927),
    u = n(47167),
    g = n(713654),
    j = n(915089),
    f = n(508675),
    _ = n(201275),
    p = n(657048),
    v = n(95701),
    N = n(34457),
    C = n(769765),
    b = n(317525),
    A = n(71393),
    T = n(994500),
    I = n(287809),
    S = n(147925),
    k = n(240248),
    w = n(500345),
    y = n(361588),
    B = n(417360),
    E = n(898612),
    M = n(652215),
    L = n(985018),
    z = n(605559);
let D = (0, j.Ld)(),
    O = (0, j.Ld)(),
    R = (0, k.xI)(c.A.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function F(e) {
    let { emojiId: t, emojiName: n, className: l } = e,
        r = (0, o.bG)([f.Ay], () => (null != t ? f.Ay.getCustomEmojiById(t) : void 0));
    return (0, i.jsx)(x.A, { emojiId: t, emojiName: n, animated: r?.animated ?? !1, className: l });
}
function G(e) {
    let { icon: t, children: n, checked: l, disabled: r = !1, onChange: a } = e,
        o = l || r;
    return (0, i.jsxs)("label", {
        className: s()(z.nM, { [z.KD]: o, [z.r9]: r }),
        children: [
            (0, i.jsx)("div", { className: z.N, children: t }),
            (0, i.jsx)("div", { className: z.qg, children: n }),
            (0, i.jsxs)("div", {
                className: z.eF,
                children: [
                    (0, i.jsx)(m.vN3, {
                        children: (0, i.jsx)("input", {
                            type: "checkbox",
                            checked: o,
                            disabled: r,
                            className: z.m8,
                            onChange: function (e) {
                                a(e.target.checked);
                            },
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: z.Ew,
                        children: (0, i.jsx)(m.A9s, {
                            size: "md",
                            color: "currentColor",
                            className: z.pc,
                            "aria-hidden": !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function H(e) {
    let { title: t, selectAllText: n, benefits: l, dupeBenefits: r, selectedBenefits: s, onToggleBenefit: a } = e,
        o = l.every((e) => s.has(e));
    return l.length > 0
        ? (0, i.jsxs)("div", {
              className: z.uW,
              children: [
                  (0, i.jsx)(m.Heading, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                  l.length - r.size > 1 &&
                      (0, i.jsx)("div", {
                          className: z.p_,
                          children: (0, i.jsx)(G, {
                              icon: (0, i.jsx)(m.fdC, { size: "md", color: "currentColor", className: z.aL }),
                              checked: o,
                              onChange: function (e) {
                                  for (let t of l) r.has(t) || a(t, e);
                              },
                              children: (0, i.jsx)(m.Text, {
                                  color: "text-strong",
                                  variant: "text-md/normal",
                                  children: n,
                              }),
                          }),
                      }),
                  (0, i.jsx)("div", {
                      className: z.p_,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              G,
                              {
                                  icon: (0, i.jsx)(F, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: z.aL,
                                  }),
                                  checked: s.has(e),
                                  disabled: r.has(e),
                                  onChange: (t) => a(e, t),
                                  children: [
                                      (0, i.jsx)(m.Text, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          children: (0, E.A)(e),
                                      }),
                                      (0, i.jsx)(m.Text, {
                                          color: "interactive-text-default",
                                          variant: "text-sm/normal",
                                          children: e.description,
                                      }),
                                  ],
                              },
                              (0, w.nh)(e),
                          ),
                      ),
                  }),
              ],
          })
        : null;
}
function K(e) {
    let {
            transitionState: t,
            fromSubscriptionListing: n,
            existingChannelBenefits: r,
            existingIntangibleBenefits: s,
            onSubmit: o,
            onClose: c,
        } = e,
        x = n.role_benefits.benefits,
        [h, u] = l.useState(() => new Set(x)),
        g = l.useMemo(() => x.filter(w.B1), [x]),
        j = (0, B.A)(g),
        f = l.useMemo(() => x.filter(w.b1), [x]),
        _ = l.useMemo(() => new Set(j.filter((e) => r.some((t) => t.ref_id === e.ref_id))), [j, r]),
        p = l.useMemo(() => new Set(f.filter((e) => s.some((t) => (0, d.A)(e, t)))), [s, f]);
    function v(e, t) {
        u((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    function N(e) {
        e.preventDefault();
        let t = x.filter((e) => h.has(e));
        o(
            t.filter(w.B1).filter((e) => !_.has(e)),
            t.filter(w.b1).filter((e) => !p.has(e)),
        ),
            c();
    }
    return (0, i.jsx)("form", {
        onSubmit: N,
        children: (0, i.jsxs)(a.Modal, {
            transitionState: t,
            onClose: c,
            title: L.intl.format(L.t["7zpiYL"], { tierName: n.name }).toString(),
            actions: [
                { variant: "secondary", text: L.intl.string(L.t["ETE/oC"]), onClick: c },
                { variant: "primary", text: L.intl.string(L.t["27a21y"]), disabled: 0 === h.size, onClick: N },
            ],
            children: [
                0 === j.length &&
                    0 === f.length &&
                    (0, i.jsx)(m.Text, { variant: "text-md/normal", children: L.intl.string(L.t["I+16xv"]) }),
                (0, i.jsx)(H, {
                    title: L.intl.string(L.t.S2kKzP),
                    selectAllText: L.intl.string(L.t["5Q/fLO"]),
                    benefits: j,
                    dupeBenefits: _,
                    selectedBenefits: h,
                    onToggleBenefit: v,
                }),
                (0, i.jsx)(H, {
                    title: L.intl.string(L.t.RdwKw7),
                    selectAllText: L.intl.string(L.t.aJPLVE),
                    benefits: f,
                    dupeBenefits: p,
                    selectedBenefits: h,
                    onToggleBenefit: v,
                }),
            ],
        }),
    });
}
function Q(e) {
    let { guildId: t, role: n, channelCount: l, onSelect: r } = e,
        s = (0, _.$7)({ guildId: t, roleId: n.id, size: R });
    return (0, i.jsxs)(m.DUT, {
        className: z.xf,
        onClick: r,
        children: [
            (0, i.jsx)("div", {
                className: z.N,
                children:
                    null != s
                        ? (0, i.jsx)(p.A, { ...s })
                        : (0, i.jsx)(m.iTF, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: n.colorString ?? M.TpD,
                              className: z.bO,
                          }),
            }),
            (0, i.jsxs)("div", {
                className: z.qg,
                children: [
                    (0, i.jsx)(m.Text, {
                        color: "text-strong",
                        variant: "text-md/normal",
                        className: z.__invalid_benefitTitle,
                        children: n.name,
                    }),
                    (0, i.jsx)(m.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: L.intl.format(L.t["2KzH89"], { num: l }),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: z.eF, children: (0, i.jsx)(S.A, { direction: S.A.Directions.RIGHT }) }),
        ],
    });
}
function q(e) {
    let { guild: t, onSelect: n } = e,
        r = (0, o.bG)([b.A], () => b.A.getSortedRoles(t.id)),
        s = (0, o.bG)([C.A], () => C.A.getCategories(t.id)),
        a = l.useMemo(
            () =>
                s._categories.flatMap((e) =>
                    s[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return v.JT.has(t.type);
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
                    if ((0, N.Oy)(e) || e.tags?.subscription_listing_id != null || (0, N.sx)(e, M.Lti)) return [];
                    let t = (0, y.A)(a, e).length;
                    return t > 0 ? { role: e, channelCount: t } : [];
                }),
            [r, a],
        );
    return d.length > 0
        ? (0, i.jsx)("div", {
              className: z.p_,
              children: d.map((e) =>
                  (0, i.jsx)(
                      Q,
                      { guildId: t.id, role: e.role, channelCount: e.channelCount, onSelect: () => n(e.role) },
                      e.role.id,
                  ),
              ),
          })
        : (0, i.jsx)(m.Text, { variant: "text-md/normal", children: L.intl.string(L.t.u09gKk) });
}
function J(e) {
    let { onClose: t, guildId: n, onSelect: l } = e,
        r = (0, o.bG)([A.A], () => A.A.getGuild(n));
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(m.rQ0, {
                      "data-migration-pending": !0,
                      children: [
                          (0, i.jsx)(m.Heading, {
                              id: D,
                              variant: "heading-md/semibold",
                              children: L.intl.string(L.t["3JrZ/P"]),
                          }),
                          (0, i.jsx)(m.s_y, { "data-migration-pending": !0, className: z.iT, onClick: t }),
                      ],
                  }),
                  (0, i.jsx)(m.$mQ, {
                      "data-migration-pending": !0,
                      className: z.jE,
                      children: (0, i.jsx)(q, { guild: r, onSelect: l }),
                  }),
              ],
          });
}
function P(e) {
    let { onClose: t, guildId: n, role: r, onCancel: s, onImport: a } = e,
        o = l.useRef(r);
    null != r && (o.current = r);
    let d = r ?? o.current,
        c = (0, h.A)(() => {
            let e = C.A.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return v.JT.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    }),
            );
        }),
        x = l.useMemo(() => (0, y.A)(c, d), [c, d]),
        [j, f] = l.useState(() => new Set(x.map((e) => e.id)));
    function _(e, t) {
        f((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, i.jsxs)("form", {
        onSubmit: function (e) {
            e.preventDefault(), a(x.map((e) => e.id).filter((e) => j.has(e))), t();
        },
        className: z.ID,
        children: [
            (0, i.jsxs)(m.rQ0, {
                "data-migration-pending": !0,
                children: [
                    (0, i.jsx)(m.Heading, {
                        id: O,
                        variant: "heading-md/semibold",
                        children: L.intl.format(L.t.iuPodG, { roleName: d.name }),
                    }),
                    (0, i.jsx)(m.s_y, { "data-migration-pending": !0, className: z.iT, onClick: t }),
                ],
            }),
            (0, i.jsxs)(m.$mQ, {
                "data-migration-pending": !0,
                className: z.jE,
                children: [
                    x.length > 1 &&
                        (0, i.jsx)("div", {
                            className: z.p_,
                            children: (0, i.jsx)(G, {
                                icon: (0, i.jsx)(m.fdC, { size: "md", color: "currentColor" }),
                                checked: j.size === x.length,
                                onChange: function (e) {
                                    for (let t of x) _(t.id, e);
                                },
                                children: (0, i.jsx)(m.Text, {
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: L.intl.string(L.t["5Q/fLO"]),
                                }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: z.p_,
                        children: x.map((e) => {
                            let t = (0, g._U)(e.type) ?? m.N$i;
                            return (0, i.jsx)(
                                G,
                                {
                                    icon: (0, i.jsx)("div", {
                                        className: z.aL,
                                        children: (0, i.jsx)(t, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: "100%",
                                            height: "100%",
                                        }),
                                    }),
                                    checked: j.has(e.id),
                                    onChange: (t) => _(e.id, t),
                                    children: (0, i.jsx)(m.Text, {
                                        color: "text-strong",
                                        variant: "text-md/normal",
                                        className: z.__invalid_benefitTitle,
                                        children: (0, u.m1)(e, I.default, T.A),
                                    }),
                                },
                                e.id,
                            );
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(m.jlY, {
                "data-migration-pending": !0,
                children: (0, i.jsxs)(m.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, i.jsx)(m.Button, {
                            variant: "primary",
                            text: L.intl.string(L.t["1j8Sow"]),
                            type: "submit",
                        }),
                        (0, i.jsx)(m.Button, { variant: "secondary", text: L.intl.string(L.t["ETE/oC"]), onClick: s }),
                    ],
                }),
            }),
        ],
    });
}
function W(e) {
    let { transitionState: t, guildId: n, onClose: r, onImport: s } = e,
        [a, o] = l.useState();
    return (0, i.jsx)(m.EOs, {
        "data-migration-pending": !0,
        transitionState: t,
        "aria-labelledby": null == a ? D : O,
        parentComponent: "ImportBenefitsModal",
        children: (0, i.jsxs)(m.tN_, {
            contentDisplay: "flex",
            activeSlide: +(null != a),
            width: 440,
            children: [
                (0, i.jsx)(m.q7S, { id: 0, children: (0, i.jsx)(J, { onClose: r, guildId: n, onSelect: o }) }),
                (0, i.jsx)(m.q7S, {
                    id: 1,
                    children: (0, i.jsx)(P, {
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
