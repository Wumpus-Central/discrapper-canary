n.d(t, {
    ImportBenefitsFromRoleModal: () => K,
    ImportBenefitsFromSubscriptionListingModal: () => P,
}),
    n(896048),
    n(228524),
    n(114821),
    n(339614);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(158954),
    o = n(311907),
    d = n(52133),
    c = n(319060),
    m = n(397927),
    u = n(565645),
    x = n(444927),
    h = n(713654),
    f = n(915089),
    g = n(508675),
    j = n(201275),
    p = n(657048),
    b = n(95701),
    v = n(34457),
    N = n(769765),
    _ = n(317525),
    C = n(71393),
    S = n(147925),
    T = n(240248),
    y = n(500345),
    A = n(361588),
    I = n(417360),
    k = n(898612),
    w = n(652215),
    E = n(985018),
    M = n(669297);
let O = (0, f.Ld)(),
    B = (0, f.Ld)(),
    L = (0, T.xI)(c.A.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function z(e) {
    var t;
    let { emojiId: n, emojiName: l, className: r } = e,
        a = (0, o.bG)([g.Ay], () => (null != n ? g.Ay.getCustomEmojiById(n) : void 0));
    return (0, i.jsx)(u.A, {
        emojiId: n,
        emojiName: l,
        animated: null != (t = null == a ? void 0 : a.animated) && t,
        className: r,
    });
}
function D(e) {
    let { icon: t, children: n, checked: l, disabled: r = !1, onChange: s } = e,
        o = l || r;
    return (0, i.jsxs)("label", {
        className: a()(M.nM, {
            [M.KD]: o,
            [M.r9]: r,
        }),
        children: [
            (0, i.jsx)("div", {
                className: M.N,
                children: t,
            }),
            (0, i.jsx)("div", {
                className: M.qg,
                children: n,
            }),
            (0, i.jsxs)("div", {
                className: M.eF,
                children: [
                    (0, i.jsx)(m.vN3, {
                        children: (0, i.jsx)("input", {
                            type: "checkbox",
                            checked: o,
                            disabled: r,
                            className: M.m8,
                            onChange: function (e) {
                                s(e.target.checked);
                            },
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: M.Ew,
                        children: (0, i.jsx)(m.A9s, {
                            size: "md",
                            color: "currentColor",
                            className: M.pc,
                            "aria-hidden": !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function G(e) {
    let { title: t, selectAllText: n, benefits: l, dupeBenefits: r, selectedBenefits: a, onToggleBenefit: s } = e,
        o = l.every((e) => a.has(e));
    return l.length > 0
        ? (0, i.jsxs)("div", {
              className: M.uW,
              children: [
                  (0, i.jsx)(m.Heading, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: t,
                  }),
                  l.length - r.size > 1 &&
                      (0, i.jsx)("div", {
                          className: M.p_,
                          children: (0, i.jsx)(D, {
                              icon: (0, i.jsx)(m.fdC, {
                                  size: "md",
                                  color: "currentColor",
                                  className: M.aL,
                              }),
                              checked: o,
                              onChange: function (e) {
                                  for (let t of l) r.has(t) || s(t, e);
                              },
                              children: (0, i.jsx)(m.Text, {
                                  color: "text-strong",
                                  variant: "text-md/normal",
                                  children: n,
                              }),
                          }),
                      }),
                  (0, i.jsx)("div", {
                      className: M.p_,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              D,
                              {
                                  icon: (0, i.jsx)(z, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: M.aL,
                                  }),
                                  checked: a.has(e),
                                  disabled: r.has(e),
                                  onChange: (t) => s(e, t),
                                  children: [
                                      (0, i.jsx)(m.Text, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          children: (0, k.A)(e),
                                      }),
                                      (0, i.jsx)(m.Text, {
                                          color: "interactive-text-default",
                                          variant: "text-sm/normal",
                                          children: e.description,
                                      }),
                                  ],
                              },
                              (0, y.nh)(e),
                          ),
                      ),
                  }),
              ],
          })
        : null;
}
function P(e) {
    let {
            transitionState: t,
            fromSubscriptionListing: n,
            existingChannelBenefits: r,
            existingIntangibleBenefits: a,
            onSubmit: o,
            onClose: c,
        } = e,
        u = n.role_benefits.benefits,
        [x, h] = l.useState(() => new Set(u)),
        f = l.useMemo(() => u.filter(y.B1), [u]),
        g = (0, I.A)(f),
        j = l.useMemo(() => u.filter(y.b1), [u]),
        p = l.useMemo(() => new Set(g.filter((e) => r.some((t) => t.ref_id === e.ref_id))), [g, r]),
        b = l.useMemo(() => new Set(j.filter((e) => a.some((t) => (0, d.A)(e, t)))), [a, j]);
    function v(e, t) {
        h((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    function N(e) {
        e.preventDefault();
        let t = u.filter((e) => x.has(e));
        o(
            t.filter(y.B1).filter((e) => !p.has(e)),
            t.filter(y.b1).filter((e) => !b.has(e)),
        ),
            c();
    }
    return (0, i.jsx)("form", {
        onSubmit: N,
        children: (0, i.jsxs)(s.Modal, {
            transitionState: t,
            onClose: c,
            title: E.intl.format(E.t["7zpiYL"], { tierName: n.name }).toString(),
            actions: [
                {
                    variant: "secondary",
                    text: E.intl.string(E.t["ETE/oC"]),
                    onClick: c,
                },
                {
                    variant: "primary",
                    text: E.intl.string(E.t["27a21y"]),
                    disabled: 0 === x.size,
                    onClick: N,
                },
            ],
            children: [
                0 === g.length &&
                    0 === j.length &&
                    (0, i.jsx)(m.Text, {
                        variant: "text-md/normal",
                        children: E.intl.string(E.t["I+16xv"]),
                    }),
                (0, i.jsx)(G, {
                    title: E.intl.string(E.t.S2kKzP),
                    selectAllText: E.intl.string(E.t["5Q/fLO"]),
                    benefits: g,
                    dupeBenefits: p,
                    selectedBenefits: x,
                    onToggleBenefit: v,
                }),
                (0, i.jsx)(G, {
                    title: E.intl.string(E.t.RdwKw7),
                    selectAllText: E.intl.string(E.t.aJPLVE),
                    benefits: j,
                    dupeBenefits: b,
                    selectedBenefits: x,
                    onToggleBenefit: v,
                }),
            ],
        }),
    });
}
function F(e) {
    var t;
    let { guildId: n, role: l, channelCount: r, onSelect: a } = e,
        s = (0, j.$7)({
            guildId: n,
            roleId: l.id,
            size: L,
        });
    return (0, i.jsxs)(m.DUT, {
        className: M.xf,
        onClick: a,
        children: [
            (0, i.jsx)("div", {
                className: M.N,
                children:
                    null != s
                        ? (0, i.jsx)(
                              p.A,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({}, s),
                          )
                        : (0, i.jsx)(m.iTF, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: null != (t = l.colorString) ? t : w.TpD,
                              className: M.bO,
                          }),
            }),
            (0, i.jsxs)("div", {
                className: M.qg,
                children: [
                    (0, i.jsx)(m.Text, {
                        color: "text-strong",
                        variant: "text-md/normal",
                        className: M.__invalid_benefitTitle,
                        children: l.name,
                    }),
                    (0, i.jsx)(m.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: E.intl.format(E.t["2KzH89"], { num: r }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: M.eF,
                children: (0, i.jsx)(S.A, { direction: S.A.Directions.RIGHT }),
            }),
        ],
    });
}
function R(e) {
    let { guild: t, onSelect: n } = e,
        r = (0, o.bG)([_.A], () => _.A.getSortedRoles(t.id)),
        a = (0, o.bG)([N.A], () => N.A.getCategories(t.id)),
        s = l.useMemo(
            () =>
                a._categories.flatMap((e) =>
                    a[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return b.JT.has(t.type);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t;
                        }),
                ),
            [a],
        ),
        d = l.useMemo(
            () =>
                r.flatMap((e) => {
                    var t;
                    if (
                        (0, v.Oy)(e) ||
                        (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null ||
                        (0, v.sx)(e, w.Lti)
                    )
                        return [];
                    let n = (0, A.A)(s, e).length;
                    return n > 0
                        ? {
                              role: e,
                              channelCount: n,
                          }
                        : [];
                }),
            [r, s],
        );
    return d.length > 0
        ? (0, i.jsx)("div", {
              className: M.p_,
              children: d.map((e) =>
                  (0, i.jsx)(
                      F,
                      {
                          guildId: t.id,
                          role: e.role,
                          channelCount: e.channelCount,
                          onSelect: () => n(e.role),
                      },
                      e.role.id,
                  ),
              ),
          })
        : (0, i.jsx)(m.Text, {
              variant: "text-md/normal",
              children: E.intl.string(E.t.u09gKk),
          });
}
function H(e) {
    let { onClose: t, guildId: n, onSelect: l } = e,
        r = (0, o.bG)([C.A], () => C.A.getGuild(n));
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(m.rQ0, {
                      "data-migration-pending": !0,
                      children: [
                          (0, i.jsx)(m.Heading, {
                              id: O,
                              variant: "heading-md/semibold",
                              children: E.intl.string(E.t["3JrZ/P"]),
                          }),
                          (0, i.jsx)(m.s_y, {
                              "data-migration-pending": !0,
                              className: M.iT,
                              onClick: t,
                          }),
                      ],
                  }),
                  (0, i.jsx)(m.$mQ, {
                      "data-migration-pending": !0,
                      className: M.jE,
                      children: (0, i.jsx)(R, {
                          guild: r,
                          onSelect: l,
                      }),
                  }),
              ],
          });
}
function Q(e) {
    let { onClose: t, guildId: n, role: r, onCancel: a, onImport: s } = e,
        o = l.useRef(r);
    null != r && (o.current = r);
    let d = null != r ? r : o.current,
        c = (0, x.A)(() => {
            let e = N.A.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return b.JT.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    }),
            );
        }),
        u = l.useMemo(() => (0, A.A)(c, d), [c, d]),
        [f, g] = l.useState(() => new Set(u.map((e) => e.id)));
    function j(e, t) {
        g((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, i.jsxs)("form", {
        onSubmit: function (e) {
            e.preventDefault(), s(u.map((e) => e.id).filter((e) => f.has(e))), t();
        },
        className: M.ID,
        children: [
            (0, i.jsxs)(m.rQ0, {
                "data-migration-pending": !0,
                children: [
                    (0, i.jsx)(m.Heading, {
                        id: B,
                        variant: "heading-md/semibold",
                        children: E.intl.format(E.t.iuPodG, { roleName: d.name }),
                    }),
                    (0, i.jsx)(m.s_y, {
                        "data-migration-pending": !0,
                        className: M.iT,
                        onClick: t,
                    }),
                ],
            }),
            (0, i.jsxs)(m.$mQ, {
                "data-migration-pending": !0,
                className: M.jE,
                children: [
                    u.length > 1 &&
                        (0, i.jsx)("div", {
                            className: M.p_,
                            children: (0, i.jsx)(D, {
                                icon: (0, i.jsx)(m.fdC, {
                                    size: "md",
                                    color: "currentColor",
                                }),
                                checked: f.size === u.length,
                                onChange: function (e) {
                                    for (let t of u) j(t.id, e);
                                },
                                children: (0, i.jsx)(m.Text, {
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: E.intl.string(E.t["5Q/fLO"]),
                                }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: M.p_,
                        children: u.map((e) => {
                            var t;
                            let n = null != (t = (0, h._U)(e.type)) ? t : m.N$i;
                            return (0, i.jsx)(
                                D,
                                {
                                    icon: (0, i.jsx)("div", {
                                        className: M.aL,
                                        children: (0, i.jsx)(n, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: "100%",
                                            height: "100%",
                                        }),
                                    }),
                                    checked: f.has(e.id),
                                    onChange: (t) => j(e.id, t),
                                    children: (0, i.jsx)(m.Text, {
                                        color: "text-strong",
                                        variant: "text-md/normal",
                                        className: M.__invalid_benefitTitle,
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
                            text: E.intl.string(E.t["1j8Sow"]),
                            type: "submit",
                        }),
                        (0, i.jsx)(m.Button, {
                            variant: "secondary",
                            text: E.intl.string(E.t["ETE/oC"]),
                            onClick: a,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function K(e) {
    let { transitionState: t, guildId: n, onClose: r, onImport: a } = e,
        [s, o] = l.useState();
    return (0, i.jsx)(m.EOs, {
        "data-migration-pending": !0,
        transitionState: t,
        "aria-labelledby": null == s ? O : B,
        parentComponent: "ImportBenefitsModal",
        children: (0, i.jsxs)(m.tN_, {
            contentDisplay: "flex",
            activeSlide: +(null != s),
            width: 440,
            children: [
                (0, i.jsx)(m.q7S, {
                    id: 0,
                    children: (0, i.jsx)(H, {
                        onClose: r,
                        guildId: n,
                        onSelect: o,
                    }),
                }),
                (0, i.jsx)(m.q7S, {
                    id: 1,
                    children: (0, i.jsx)(Q, {
                        onClose: r,
                        guildId: n,
                        role: s,
                        onCancel: () => o(void 0),
                        onImport: a,
                    }),
                }),
            ],
        }),
    });
}
