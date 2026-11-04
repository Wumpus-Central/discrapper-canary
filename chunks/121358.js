i.d(t, { CreateEmojiWithRolesModal: () => I, UpdateEmojiRolesModal: () => z });
var n = i(477900),
    a = i(582128),
    l = i(503698),
    s = i.n(l),
    r = i(435558),
    o = i.n(r),
    d = i(115560),
    c = i(189213),
    u = i(27192),
    m = i(834730),
    h = i(805251),
    j = i(331322),
    g = i(251843),
    p = i(554375),
    v = i(608461),
    x = i(810877),
    b = i(288224),
    f = i(129230),
    S = i(486020),
    y = i(690521),
    E = i(599941),
    w = i(855986),
    A = i(317525),
    C = i(384684),
    _ = i(652215),
    N = i(792996),
    R = i(748641);
function k(e) {
    let { className: t, onChange: i, textVariant: a = "body-md/normal", label: l, value: r, isArchived: o = !1 } = e;
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
                o && (0, n.jsx)(h.E, { type: { text: N.intl.string(N.t.nhbtEl) }, variant: "secondary" }),
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
        [p, v] = a.useState(() => new Set(l)),
        x = a.useMemo(
            () =>
                o().isEqual(
                    p,
                    new Set(
                        s.map((e) => {
                            let { role_id: t } = e;
                            return t;
                        }),
                    ),
                ),
            [s, p],
        ),
        b = p.size > 0;
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
                    h(Array.from(p), i);
                },
                disabled: !b,
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
                        (0, n.jsxs)(m.E, { variant: "body-md/normal", children: [":", d, ":"] }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(
                            k,
                            {
                                className: R.L7,
                                label: N.intl.string(N.t["Ve/y5z"]),
                                textVariant: "body-md/semibold",
                                value: x,
                                onChange: function () {
                                    x
                                        ? v(new Set())
                                        : v(
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
                                                    v((e) => {
                                                        let i = new Set(e);
                                                        return (e.has(t) ? i.delete(t) : i.add(t), i);
                                                    })
                                                );
                                            },
                                            value: p.has(e.role_id),
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
        [r, o] = a.useState(!1),
        c = (0, E.uP)(t, { includeSoftDeleted: !0, sortDeletedListingsLast: !0 }),
        u = y.Ay.sanitizeEmojiName(l.name.split(".")[0]);
    return (0, n.jsx)(D, {
        emojiName: u,
        emojiUrl: i,
        onSave: async function (e, n) {
            try {
                o(!0);
                let a = (0, d.A)();
                f.default.track(_.HAw.EMOJI_UPLOAD_STARTED, { guild_id: t, upload_id: a });
                let s = await (0, x.W)({ guildId: t, uploadId: a, data: i, file: l, roles: e });
                ("object" == typeof s && "id" in s && b.X({ emojiId: s.id, userImage: { data: i, file: l } }), n());
            } catch (e) {
            } finally {
                o(!1);
            }
        },
        saving: r,
        listingChoices: c,
        ...s,
    });
}
function z(e) {
    let t,
        i,
        { emoji: l, guildId: s, ...r } = e,
        o = S.Ay.getEmojiURL({ id: l.id, animated: l.animated, size: 40 }),
        [d, { loading: c }] = (0, v.A)(p.Cp),
        u = (0, E.uP)(s, { includeSoftDeleted: !0 });
    u.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let m =
            ((t = (0, w.bG)([A.A], () => A.A.getSortedRoles(s))),
            (i = (0, w.bG)([C.A], () => C.A.getSubscriptionRoles(s))),
            a.useMemo(() => t.filter((e) => i.has(e.id)), [t, i])),
        h = a.useMemo(() => {
            let e = new Set(
                m.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return l.roles.filter((t) => e.has(t));
        }, [l.roles, m]);
    return (0, n.jsx)(D, {
        emojiName: l.name,
        emojiUrl: o,
        onSave: async function (e, t) {
            null != (await d({ guildId: s, emojiId: l.id, roles: e })) && t();
        },
        initialRoleIds: h,
        saving: c,
        listingChoices: u,
        ...r,
    });
}
