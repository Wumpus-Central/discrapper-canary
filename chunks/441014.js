i.d(t, { CreateEmojiWithRolesModal: () => I, UpdateEmojiRolesModal: () => z });
var n = i(477900),
    a = i(582128),
    l = i(503698),
    s = i.n(l),
    r = i(435558),
    o = i.n(r),
    d = i(132500),
    c = i(189213),
    u = i(27192),
    m = i(834730),
    h = i(812993),
    j = i(331322),
    g = i(144165),
    x = i(554375),
    p = i(608461),
    v = i(810877),
    f = i(288224),
    S = i(174459),
    b = i(486020),
    E = i(690521),
    w = i(599941),
    A = i(17928),
    C = i(317525),
    _ = i(384684),
    y = i(652215),
    N = i(375708),
    R = i(748641);
function k(e) {
    let { className: t, onChange: i, textVariant: a = "text-md/normal", label: l, value: r, isArchived: o = !1 } = e;
    return (0, n.jsx)(u.Kj, {
        size: 24,
        className: s()(R.J_, t),
        value: r,
        onChange: i,
        type: u.Or.INVERTED,
        children: (0, n.jsxs)("div", {
            className: R.lN,
            children: [
                (0, n.jsx)(m.E, { color: "interactive-text-active", variant: a, children: l }),
                o && (0, n.jsx)(h.Lp, { text: N.intl.string(N.t.nhbtEl) }),
            ],
        }),
    });
}
function D(e) {
    let {
            transitionState: t,
            onClose: i,
            initialRoleIds: l = [],
            listingChoices: s,
            emojiUrl: r,
            emojiName: d,
            saving: u,
            onSave: h,
        } = e,
        [x, p] = a.useState(() => new Set(l)),
        v = a.useMemo(
            () =>
                o().isEqual(
                    x,
                    new Set(
                        s.map((e) => {
                            let { role_id: t } = e;
                            return t;
                        }),
                    ),
                ),
            [s, x],
        ),
        f = x.size > 0;
    return (0, n.jsx)(c.a, {
        onClose: i,
        transitionState: t,
        title: N.intl.string(N.t.nP7nDY),
        subtitle: N.intl.string(N.t.I4SYUF),
        preview: !0,
        actions: [
            { text: N.intl.string(N.t["ETE/oC"]), variant: "secondary", onClick: i },
            {
                text: N.intl.string(N.t["R3BPH+"]),
                variant: "primary",
                onClick: function () {
                    h(Array.from(x), i);
                },
                disabled: !f,
                loading: u,
            },
        ],
        children: (0, n.jsxs)(j.B, {
            gap: "xl",
            children: [
                (0, n.jsxs)(j.B, {
                    direction: "horizontal",
                    gap: "md",
                    align: "center",
                    children: [
                        (0, n.jsx)(g._, { src: r, width: 40, height: 40, alt: "" }),
                        (0, n.jsxs)(m.E, { variant: "text-md/normal", children: [":", d, ":"] }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(
                            k,
                            {
                                className: R.L7,
                                label: N.intl.string(N.t["Ve/y5z"]),
                                textVariant: "text-md/semibold",
                                value: v,
                                onChange: function () {
                                    v
                                        ? p(new Set())
                                        : p(
                                              new Set(
                                                  s.map((e) => {
                                                      let { role_id: t } = e;
                                                      return t;
                                                  }),
                                              ),
                                          );
                                },
                            },
                            "allSubscriptionRoles",
                        ),
                        s.map((e, t) =>
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    0 !== t && (0, n.jsx)("div", { className: R.OO }),
                                    (0, n.jsx)(
                                        k,
                                        {
                                            onChange: () => {
                                                var t;
                                                return (
                                                    (t = e.role_id),
                                                    p((e) => {
                                                        let i = new Set(e);
                                                        return (e.has(t) ? i.delete(t) : i.add(t), i);
                                                    })
                                                );
                                            },
                                            value: x.has(e.role_id),
                                            label: e.name,
                                            isArchived: e.archived,
                                        },
                                        e.role_id,
                                    ),
                                ],
                            }),
                        ),
                    ],
                }),
            ],
        }),
    });
}
function I(e) {
    let { guildId: t, data: i, file: l, ...s } = e,
        [r, o] = a.useState(!1);
    async function c(e, n) {
        try {
            o(!0);
            let a = (0, d.A)();
            S.default.track(y.HAw.EMOJI_UPLOAD_STARTED, { guild_id: t, upload_id: a });
            let s = await (0, v.W)({ guildId: t, uploadId: a, data: i, file: l, roles: e });
            ("object" == typeof s && "id" in s && f.X({ emojiId: s.id, userImage: { data: i, file: l } }), n());
        } catch (e) {
        } finally {
            o(!1);
        }
    }
    let u = (0, w.uP)(t, { includeSoftDeleted: !0, sortDeletedListingsLast: !0 }),
        m = E.Ay.sanitizeEmojiName(l.name.split(".")[0]);
    return (0, n.jsx)(D, { emojiName: m, emojiUrl: i, onSave: c, saving: r, listingChoices: u, ...s });
}
function z(e) {
    let t,
        i,
        { emoji: l, guildId: s, ...r } = e,
        o = b.Ay.getEmojiURL({ id: l.id, animated: l.animated, size: 40 }),
        [d, { loading: c }] = (0, p.A)(x.Cp);
    async function u(e, t) {
        null != (await d({ guildId: s, emojiId: l.id, roles: e })) && t();
    }
    let m = (0, w.uP)(s, { includeSoftDeleted: !0 });
    m.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let h =
            ((t = (0, A.bG)([C.A], () => C.A.getSortedRoles(s))),
            (i = (0, A.bG)([_.A], () => _.A.getSubscriptionRoles(s))),
            a.useMemo(() => t.filter((e) => i.has(e.id)), [t, i])),
        j = a.useMemo(() => {
            let e = new Set(
                h.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return l.roles.filter((t) => e.has(t));
        }, [l.roles, h]);
    return (0, n.jsx)(D, {
        emojiName: l.name,
        emojiUrl: o,
        onSave: u,
        initialRoleIds: j,
        saving: c,
        listingChoices: m,
        ...r,
    });
}
