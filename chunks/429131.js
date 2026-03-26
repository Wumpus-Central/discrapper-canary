i.d(t, { CreateEmojiWithRolesModal: () => E, UpdateEmojiRolesModal: () => N });
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(735438),
    o = i.n(r),
    d = i(835245),
    c = i(158954),
    m = i(421380),
    u = i(397927),
    h = i(554375),
    x = i(608461),
    j = i(810877),
    p = i(288224),
    g = i(954571),
    _ = i(486020),
    b = i(690521),
    v = i(599941),
    S = i(235149),
    f = i(652215),
    A = i(985018),
    w = i(77760);
let C = (e) => {
    let { className: t, onChange: i, textVariant: n = "text-md/normal", label: a, value: r, isArchived: o = !1 } = e;
    return (0, l.jsx)(m.Kj, {
        size: 24,
        className: s()(w.J_, t),
        value: r,
        onChange: i,
        type: m.Xo.INVERTED,
        children: (0, l.jsxs)("div", {
            className: w.lN,
            children: [
                (0, l.jsx)(u.Text, { color: "interactive-text-active", variant: n, children: a }),
                o && (0, l.jsx)(u.LpS, { text: A.intl.string(A.t.nhbtEl) }),
            ],
        }),
    });
};
function y(e) {
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
        [x, j] = n.useState(() => new Set(a)),
        p = n.useMemo(
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
        g = x.size > 0;
    return (0, l.jsx)(c.Modal, {
        onClose: i,
        transitionState: t,
        title: A.intl.string(A.t.nP7nDY),
        subtitle: A.intl.string(A.t.I4SYUF),
        preview: !0,
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: i },
            {
                text: A.intl.string(A.t["R3BPH+"]),
                variant: "primary",
                onClick: () => {
                    h(Array.from(x), i);
                },
                disabled: !g,
                loading: m,
            },
        ],
        children: (0, l.jsxs)(u.BJc, {
            gap: "xl",
            children: [
                (0, l.jsxs)(u.BJc, {
                    direction: "horizontal",
                    gap: "md",
                    align: "center",
                    children: [
                        (0, l.jsx)(u._V3, { src: r, width: 40, height: 40, alt: "" }),
                        (0, l.jsxs)(u.Text, { variant: "text-md/normal", children: [":", d, ":"] }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(
                            C,
                            {
                                className: w.L7,
                                label: A.intl.string(A.t["Ve/y5z"]),
                                textVariant: "text-md/semibold",
                                value: p,
                                onChange: () => {
                                    p
                                        ? j(new Set())
                                        : j(
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
                                    0 !== t && (0, l.jsx)("div", { className: w.OO }),
                                    (0, l.jsx)(
                                        C,
                                        {
                                            onChange: () => {
                                                let t;
                                                return (
                                                    (t = e.role_id),
                                                    j((e) => {
                                                        let i = new Set(e);
                                                        return e.has(t) ? i.delete(t) : i.add(t), i;
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
function E(e) {
    let { guildId: t, data: i, file: a, ...s } = e,
        [r, o] = n.useState(!1),
        c = async (e, l) => {
            try {
                o(!0);
                let n = (0, d.A)();
                g.default.track(f.HAw.EMOJI_UPLOAD_STARTED, { guild_id: t, upload_id: n });
                let s = await (0, j.W)({ guildId: t, uploadId: n, data: i, file: a, roles: e });
                "object" == typeof s && "id" in s && p.X({ emojiId: s.id, userImage: { data: i, file: a } }), l();
            } catch (e) {
            } finally {
                o(!1);
            }
        },
        m = (0, v.uP)(t, { includeSoftDeleted: !0, sortDeletedListingsLast: !0 }),
        u = b.Ay.sanitizeEmojiName(a.name.split(".")[0]);
    return (0, l.jsx)(y, { emojiName: u, emojiUrl: i, onSave: c, saving: r, listingChoices: m, ...s });
}
function N(e) {
    let { emoji: t, guildId: i, ...a } = e,
        s = _.Ay.getEmojiURL({ id: t.id, animated: t.animated, size: 40 }),
        [r, { loading: o }] = (0, x.A)(h.Cp),
        d = async (e, l) => {
            null != (await r({ guildId: i, emojiId: t.id, roles: e })) && l();
        },
        c = (0, v.uP)(i, { includeSoftDeleted: !0 });
    c.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let m = (0, S.A)(i),
        u = n.useMemo(() => {
            let e = new Set(
                m.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return t.roles.filter((t) => e.has(t));
        }, [t.roles, m]);
    return (0, l.jsx)(y, {
        emojiName: t.name,
        emojiUrl: s,
        onSave: d,
        initialRoleIds: u,
        saving: o,
        listingChoices: c,
        ...a,
    });
}
