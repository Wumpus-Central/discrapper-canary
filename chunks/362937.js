n.d(t, { ImportBenefitsFromRoleModal: () => q, ImportBenefitsFromSubscriptionListingModal: () => F });
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
    u = n(713654),
    g = n(915089),
    j = n(508675),
    f = n(201275),
    _ = n(657048),
    p = n(95701),
    N = n(34457),
    v = n(769765),
    C = n(317525),
    b = n(71393),
    T = n(147925),
    I = n(240248),
    S = n(500345),
    A = n(361588),
    k = n(417360),
    w = n(898612),
    y = n(652215),
    B = n(985018),
    E = n(669297);
let M = (0, g.Ld)(),
    L = (0, g.Ld)(),
    z = (0, I.xI)(c.A.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function D(e) {
    let { emojiId: t, emojiName: n, className: l } = e,
        r = (0, o.bG)([j.Ay], () => (null != t ? j.Ay.getCustomEmojiById(t) : void 0));
    return (0, i.jsx)(x.A, { emojiId: t, emojiName: n, animated: r?.animated ?? !1, className: l });
}
function O(e) {
    let { icon: t, children: n, checked: l, disabled: r = !1, onChange: a } = e,
        o = l || r;
    return (0, i.jsxs)("label", {
        className: s()(E.nM, { [E.KD]: o, [E.r9]: r }),
        children: [
            (0, i.jsx)("div", { className: E.N, children: t }),
            (0, i.jsx)("div", { className: E.qg, children: n }),
            (0, i.jsxs)("div", {
                className: E.eF,
                children: [
                    (0, i.jsx)(m.vN3, {
                        children: (0, i.jsx)("input", {
                            type: "checkbox",
                            checked: o,
                            disabled: r,
                            className: E.m8,
                            onChange: function (e) {
                                a(e.target.checked);
                            },
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: E.Ew,
                        children: (0, i.jsx)(m.A9s, {
                            size: "md",
                            color: "currentColor",
                            className: E.pc,
                            "aria-hidden": !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function R(e) {
    let { title: t, selectAllText: n, benefits: l, dupeBenefits: r, selectedBenefits: s, onToggleBenefit: a } = e,
        o = l.every((e) => s.has(e));
    return l.length > 0
        ? (0, i.jsxs)("div", {
              className: E.uW,
              children: [
                  (0, i.jsx)(m.Heading, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                  l.length - r.size > 1 &&
                      (0, i.jsx)("div", {
                          className: E.p_,
                          children: (0, i.jsx)(O, {
                              icon: (0, i.jsx)(m.fdC, { size: "md", color: "currentColor", className: E.aL }),
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
                      className: E.p_,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              O,
                              {
                                  icon: (0, i.jsx)(D, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: E.aL,
                                  }),
                                  checked: s.has(e),
                                  disabled: r.has(e),
                                  onChange: (t) => a(e, t),
                                  children: [
                                      (0, i.jsx)(m.Text, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          children: (0, w.A)(e),
                                      }),
                                      (0, i.jsx)(m.Text, {
                                          color: "interactive-text-default",
                                          variant: "text-sm/normal",
                                          children: e.description,
                                      }),
                                  ],
                              },
                              (0, S.nh)(e),
                          ),
                      ),
                  }),
              ],
          })
        : null;
}
function F(e) {
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
        g = l.useMemo(() => x.filter(S.B1), [x]),
        j = (0, k.A)(g),
        f = l.useMemo(() => x.filter(S.b1), [x]),
        _ = l.useMemo(() => new Set(j.filter((e) => r.some((t) => t.ref_id === e.ref_id))), [j, r]),
        p = l.useMemo(() => new Set(f.filter((e) => s.some((t) => (0, d.A)(e, t)))), [s, f]);
    function N(e, t) {
        u((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    function v(e) {
        e.preventDefault();
        let t = x.filter((e) => h.has(e));
        o(
            t.filter(S.B1).filter((e) => !_.has(e)),
            t.filter(S.b1).filter((e) => !p.has(e)),
        ),
            c();
    }
    return (0, i.jsx)("form", {
        onSubmit: v,
        children: (0, i.jsxs)(a.Modal, {
            transitionState: t,
            onClose: c,
            title: B.intl.format(B.t["7zpiYL"], { tierName: n.name }).toString(),
            actions: [
                { variant: "secondary", text: B.intl.string(B.t["ETE/oC"]), onClick: c },
                { variant: "primary", text: B.intl.string(B.t["27a21y"]), disabled: 0 === h.size, onClick: v },
            ],
            children: [
                0 === j.length &&
                    0 === f.length &&
                    (0, i.jsx)(m.Text, { variant: "text-md/normal", children: B.intl.string(B.t["I+16xv"]) }),
                (0, i.jsx)(R, {
                    title: B.intl.string(B.t.S2kKzP),
                    selectAllText: B.intl.string(B.t["5Q/fLO"]),
                    benefits: j,
                    dupeBenefits: _,
                    selectedBenefits: h,
                    onToggleBenefit: N,
                }),
                (0, i.jsx)(R, {
                    title: B.intl.string(B.t.RdwKw7),
                    selectAllText: B.intl.string(B.t.aJPLVE),
                    benefits: f,
                    dupeBenefits: p,
                    selectedBenefits: h,
                    onToggleBenefit: N,
                }),
            ],
        }),
    });
}
function G(e) {
    let { guildId: t, role: n, channelCount: l, onSelect: r } = e,
        s = (0, f.$7)({ guildId: t, roleId: n.id, size: z });
    return (0, i.jsxs)(m.DUT, {
        className: E.xf,
        onClick: r,
        children: [
            (0, i.jsx)("div", {
                className: E.N,
                children:
                    null != s
                        ? (0, i.jsx)(_.A, { ...s })
                        : (0, i.jsx)(m.iTF, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: n.colorString ?? y.TpD,
                              className: E.bO,
                          }),
            }),
            (0, i.jsxs)("div", {
                className: E.qg,
                children: [
                    (0, i.jsx)(m.Text, {
                        color: "text-strong",
                        variant: "text-md/normal",
                        className: E.__invalid_benefitTitle,
                        children: n.name,
                    }),
                    (0, i.jsx)(m.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: B.intl.format(B.t["2KzH89"], { num: l }),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: E.eF, children: (0, i.jsx)(T.A, { direction: T.A.Directions.RIGHT }) }),
        ],
    });
}
function H(e) {
    let { guild: t, onSelect: n } = e,
        r = (0, o.bG)([C.A], () => C.A.getSortedRoles(t.id)),
        s = (0, o.bG)([v.A], () => v.A.getCategories(t.id)),
        a = l.useMemo(
            () =>
                s._categories.flatMap((e) =>
                    s[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return p.JT.has(t.type);
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
                    if ((0, N.Oy)(e) || e.tags?.subscription_listing_id != null || (0, N.sx)(e, y.Lti)) return [];
                    let t = (0, A.A)(a, e).length;
                    return t > 0 ? { role: e, channelCount: t } : [];
                }),
            [r, a],
        );
    return d.length > 0
        ? (0, i.jsx)("div", {
              className: E.p_,
              children: d.map((e) =>
                  (0, i.jsx)(
                      G,
                      { guildId: t.id, role: e.role, channelCount: e.channelCount, onSelect: () => n(e.role) },
                      e.role.id,
                  ),
              ),
          })
        : (0, i.jsx)(m.Text, { variant: "text-md/normal", children: B.intl.string(B.t.u09gKk) });
}
function Q(e) {
    let { onClose: t, guildId: n, onSelect: l } = e,
        r = (0, o.bG)([b.A], () => b.A.getGuild(n));
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(m.rQ0, {
                      "data-migration-pending": !0,
                      children: [
                          (0, i.jsx)(m.Heading, {
                              id: M,
                              variant: "heading-md/semibold",
                              children: B.intl.string(B.t["3JrZ/P"]),
                          }),
                          (0, i.jsx)(m.s_y, { "data-migration-pending": !0, className: E.iT, onClick: t }),
                      ],
                  }),
                  (0, i.jsx)(m.$mQ, {
                      "data-migration-pending": !0,
                      className: E.jE,
                      children: (0, i.jsx)(H, { guild: r, onSelect: l }),
                  }),
              ],
          });
}
function K(e) {
    let { onClose: t, guildId: n, role: r, onCancel: s, onImport: a } = e,
        o = l.useRef(r);
    null != r && (o.current = r);
    let d = r ?? o.current,
        c = (0, h.A)(() => {
            let e = v.A.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return p.JT.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    }),
            );
        }),
        x = l.useMemo(() => (0, A.A)(c, d), [c, d]),
        [g, j] = l.useState(() => new Set(x.map((e) => e.id)));
    function f(e, t) {
        j((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, i.jsxs)("form", {
        onSubmit: function (e) {
            e.preventDefault(), a(x.map((e) => e.id).filter((e) => g.has(e))), t();
        },
        className: E.ID,
        children: [
            (0, i.jsxs)(m.rQ0, {
                "data-migration-pending": !0,
                children: [
                    (0, i.jsx)(m.Heading, {
                        id: L,
                        variant: "heading-md/semibold",
                        children: B.intl.format(B.t.iuPodG, { roleName: d.name }),
                    }),
                    (0, i.jsx)(m.s_y, { "data-migration-pending": !0, className: E.iT, onClick: t }),
                ],
            }),
            (0, i.jsxs)(m.$mQ, {
                "data-migration-pending": !0,
                className: E.jE,
                children: [
                    x.length > 1 &&
                        (0, i.jsx)("div", {
                            className: E.p_,
                            children: (0, i.jsx)(O, {
                                icon: (0, i.jsx)(m.fdC, { size: "md", color: "currentColor" }),
                                checked: g.size === x.length,
                                onChange: function (e) {
                                    for (let t of x) f(t.id, e);
                                },
                                children: (0, i.jsx)(m.Text, {
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: B.intl.string(B.t["5Q/fLO"]),
                                }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: E.p_,
                        children: x.map((e) => {
                            let t = (0, u._U)(e.type) ?? m.N$i;
                            return (0, i.jsx)(
                                O,
                                {
                                    icon: (0, i.jsx)("div", {
                                        className: E.aL,
                                        children: (0, i.jsx)(t, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: "100%",
                                            height: "100%",
                                        }),
                                    }),
                                    checked: g.has(e.id),
                                    onChange: (t) => f(e.id, t),
                                    children: (0, i.jsx)(m.Text, {
                                        color: "text-strong",
                                        variant: "text-md/normal",
                                        className: E.__invalid_benefitTitle,
                                        children: e.name,
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
                            text: B.intl.string(B.t["1j8Sow"]),
                            type: "submit",
                        }),
                        (0, i.jsx)(m.Button, { variant: "secondary", text: B.intl.string(B.t["ETE/oC"]), onClick: s }),
                    ],
                }),
            }),
        ],
    });
}
function q(e) {
    let { transitionState: t, guildId: n, onClose: r, onImport: s } = e,
        [a, o] = l.useState();
    return (0, i.jsx)(m.EOs, {
        "data-migration-pending": !0,
        transitionState: t,
        "aria-labelledby": null == a ? M : L,
        parentComponent: "ImportBenefitsModal",
        children: (0, i.jsxs)(m.tN_, {
            contentDisplay: "flex",
            activeSlide: +(null != a),
            width: 440,
            children: [
                (0, i.jsx)(m.q7S, { id: 0, children: (0, i.jsx)(Q, { onClose: r, guildId: n, onSelect: o }) }),
                (0, i.jsx)(m.q7S, {
                    id: 1,
                    children: (0, i.jsx)(K, {
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
