i.d(t, { CreateEmojiWithRolesModal: () => k, UpdateEmojiRolesModal: () => L });
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(735438),
    o = i.n(r),
    d = i(835245),
    c = i(189213),
    m = i(27192),
    u = i(834730),
    h = i(777666),
    j = i(331322),
    x = i(673698),
    p = i(554375),
    g = i(608461),
    _ = i(810877),
    b = i(288224),
    v = i(954571),
    f = i(486020),
    S = i(690521),
    A = i(599941),
    w = i(235149),
    C = i(652215),
    E = i(985018),
    y = i(64848);
let N = (e) => {
    let { className: t, onChange: i, textVariant: n = "text-md/normal", label: a, value: r, isArchived: o = !1 } = e;
    return (0, l.jsx)(m.Kj, {
        size: 24,
        className: s()(y.J_, t),
        value: r,
        onChange: i,
        type: m.Or.INVERTED,
        children: (0, l.jsxs)("div", {
            className: y.lN,
            children: [
                (0, l.jsx)(u.E, { color: "interactive-text-active", variant: n, children: a }),
                o && (0, l.jsx)(h.Lp, { text: E.intl.string(E.t.nhbtEl) }),
            ],
        }),
    });
};
function R(e) {
    let {
            transitionState: t,
            onClose: i,
            initialRoleIds: a = [],
            listingChoices: s,
            emojiUrl: r,
            emojiName: d,
            saving: m,
            onSave: h,
        } = e,
        [p, g] = n.useState(() => new Set(a)),
        _ = n.useMemo(
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
    return (0, l.jsx)(c.Modal, {
        onClose: i,
        transitionState: t,
        title: E.intl.string(E.t.nP7nDY),
        subtitle: E.intl.string(E.t.I4SYUF),
        preview: !0,
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: i },
            {
                text: E.intl.string(E.t["R3BPH+"]),
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
                            N,
                            {
                                className: y.L7,
                                label: E.intl.string(E.t["Ve/y5z"]),
                                textVariant: "text-md/semibold",
                                value: _,
                                onChange: () => {
                                    _
                                        ? g(new Set())
                                        : g(
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
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    0 !== t && (0, l.jsx)("div", { className: y.OO }),
                                    (0, l.jsx)(
                                        N,
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
function k(e) {
    let { guildId: t, data: i, file: a, ...s } = e,
        [r, o] = n.useState(!1),
        c = async (e, l) => {
            try {
                o(!0);
                let n = (0, d.A)();
                v.default.track(C.HAw.EMOJI_UPLOAD_STARTED, { guild_id: t, upload_id: n });
                let s = await (0, _.W)({ guildId: t, uploadId: n, data: i, file: a, roles: e });
                "object" == typeof s && "id" in s && b.X({ emojiId: s.id, userImage: { data: i, file: a } }), l();
            } catch (e) {
            } finally {
                o(!1);
            }
        },
        m = (0, A.uP)(t, { includeSoftDeleted: !0, sortDeletedListingsLast: !0 }),
        u = S.Ay.sanitizeEmojiName(a.name.split(".")[0]);
    return (0, l.jsx)(R, { emojiName: u, emojiUrl: i, onSave: c, saving: r, listingChoices: m, ...s });
}
function L(e) {
    let { emoji: t, guildId: i, ...a } = e,
        s = f.Ay.getEmojiURL({ id: t.id, animated: t.animated, size: 40 }),
        [r, { loading: o }] = (0, g.A)(p.Cp),
        d = async (e, l) => {
            null != (await r({ guildId: i, emojiId: t.id, roles: e })) && l();
        },
        c = (0, A.uP)(i, { includeSoftDeleted: !0 });
    c.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let m = (0, w.A)(i),
        u = n.useMemo(() => {
            let e = new Set(
                m.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return t.roles.filter((t) => e.has(t));
        }, [t.roles, m]);
    return (0, l.jsx)(R, {
        emojiName: t.name,
        emojiUrl: s,
        onSave: d,
        initialRoleIds: u,
        saving: o,
        listingChoices: c,
        ...a,
    });
}
