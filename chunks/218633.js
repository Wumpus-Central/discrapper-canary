i.d(t, { CreateEmojiWithRolesModal: () => D, UpdateEmojiRolesModal: () => I });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(735438),
    o = i.n(r),
    d = i(132500),
    c = i(189213),
    m = i(27192),
    u = i(834730),
    h = i(777666),
    j = i(331322),
    x = i(144165),
    p = i(554375),
    g = i(608461),
    _ = i(810877),
    b = i(288224),
    v = i(954571),
    S = i(486020),
    f = i(690521),
    w = i(599941),
    A = i(17928),
    C = i(317525),
    E = i(384684),
    y = i(652215),
    N = i(985018),
    R = i(228624);
let k = (e) => {
    let { className: t, onChange: i, textVariant: n = "text-md/normal", label: s, value: r, isArchived: o = !1 } = e;
    return (0, l.jsx)(m.Kj, {
        size: 24,
        className: a()(R.J_, t),
        value: r,
        onChange: i,
        type: m.Or.INVERTED,
        children: (0, l.jsxs)("div", {
            className: R.lN,
            children: [
                (0, l.jsx)(u.E, { color: "interactive-text-active", variant: n, children: s }),
                o && (0, l.jsx)(h.Lp, { text: N.intl.string(N.t.nhbtEl) }),
            ],
        }),
    });
};
function L(e) {
    let {
            transitionState: t,
            onClose: i,
            initialRoleIds: s = [],
            listingChoices: a,
            emojiUrl: r,
            emojiName: d,
            saving: m,
            onSave: h,
        } = e,
        [p, g] = n.useState(() => new Set(s)),
        _ = n.useMemo(
            () =>
                o().isEqual(
                    p,
                    new Set(
                        a.map((e) => {
                            let { role_id: t } = e;
                            return t;
                        }),
                    ),
                ),
            [a, p],
        ),
        b = p.size > 0;
    return (0, l.jsx)(c.Modal, {
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
                onClick: () => {
                    h(Array.from(p), i);
                },
                disabled: !b,
                loading: m,
            },
        ],
        children: (0, l.jsxs)(j.B, {
            gap: "xl",
            children: [
                (0, l.jsxs)(j.B, {
                    direction: "horizontal",
                    gap: "md",
                    align: "center",
                    children: [
                        (0, l.jsx)(x._, { src: r, width: 40, height: 40, alt: "" }),
                        (0, l.jsxs)(u.E, { variant: "text-md/normal", children: [":", d, ":"] }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(
                            k,
                            {
                                className: R.L7,
                                label: N.intl.string(N.t["Ve/y5z"]),
                                textVariant: "text-md/semibold",
                                value: _,
                                onChange: () => {
                                    _
                                        ? g(new Set())
                                        : g(
                                              new Set(
                                                  a.map((e) => {
                                                      let { role_id: t } = e;
                                                      return t;
                                                  }),
                                              ),
                                          );
                                },
                            },
                            "allSubscriptionRoles",
                        ),
                        a.map((e, t) =>
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    0 !== t && (0, l.jsx)("div", { className: R.OO }),
                                    (0, l.jsx)(
                                        k,
                                        {
                                            onChange: () => {
                                                let t;
                                                return (
                                                    (t = e.role_id),
                                                    g((e) => {
                                                        let i = new Set(e);
                                                        return e.has(t) ? i.delete(t) : i.add(t), i;
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
function D(e) {
    let { guildId: t, data: i, file: s, ...a } = e,
        [r, o] = n.useState(!1),
        c = async (e, l) => {
            try {
                o(!0);
                let n = (0, d.A)();
                v.default.track(y.HAw.EMOJI_UPLOAD_STARTED, { guild_id: t, upload_id: n });
                let a = await (0, _.W)({ guildId: t, uploadId: n, data: i, file: s, roles: e });
                "object" == typeof a && "id" in a && b.X({ emojiId: a.id, userImage: { data: i, file: s } }), l();
            } catch (e) {
            } finally {
                o(!1);
            }
        },
        m = (0, w.uP)(t, { includeSoftDeleted: !0, sortDeletedListingsLast: !0 }),
        u = f.Ay.sanitizeEmojiName(s.name.split(".")[0]);
    return (0, l.jsx)(L, { emojiName: u, emojiUrl: i, onSave: c, saving: r, listingChoices: m, ...a });
}
function I(e) {
    let t,
        i,
        { emoji: s, guildId: a, ...r } = e,
        o = S.Ay.getEmojiURL({ id: s.id, animated: s.animated, size: 40 }),
        [d, { loading: c }] = (0, g.A)(p.Cp),
        m = async (e, t) => {
            null != (await d({ guildId: a, emojiId: s.id, roles: e })) && t();
        },
        u = (0, w.uP)(a, { includeSoftDeleted: !0 });
    u.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let h =
            ((t = (0, A.bG)([C.A], () => C.A.getSortedRoles(a))),
            (i = (0, A.bG)([E.A], () => E.A.getSubscriptionRoles(a))),
            n.useMemo(() => t.filter((e) => i.has(e.id)), [t, i])),
        j = n.useMemo(() => {
            let e = new Set(
                h.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return s.roles.filter((t) => e.has(t));
        }, [s.roles, h]);
    return (0, l.jsx)(L, {
        emojiName: s.name,
        emojiUrl: o,
        onSave: m,
        initialRoleIds: j,
        saving: c,
        listingChoices: u,
        ...r,
    });
}
