i.d(t, { CreateEmojiWithRolesModal: () => I, UpdateEmojiRolesModal: () => M });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(735438),
    o = i.n(r),
    d = i(835245),
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
    R = i(228624);
function k(e) {
    let { className: t, onChange: i, textVariant: l = "text-md/normal", label: a, value: r, isArchived: o = !1 } = e;
    return (0, n.jsx)(u.Kj, {
        size: 24,
        className: s()(R.J_, t),
        value: r,
        onChange: i,
        type: u.Or.INVERTED,
        children: (0, n.jsxs)("div", {
            className: R.lN,
            children: [
                (0, n.jsx)(m.E, { color: "interactive-text-active", variant: l, children: a }),
                o && (0, n.jsx)(h.Lp, { text: N.intl.string(N.t.nhbtEl) }),
            ],
        }),
    });
}
function D(e) {
    let {
            transitionState: t,
            onClose: i,
            initialRoleIds: a = [],
            listingChoices: s,
            emojiUrl: r,
            emojiName: d,
            saving: u,
            onSave: h,
        } = e,
        [x, p] = l.useState(() => new Set(a)),
        v = l.useMemo(
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
    return (0, n.jsx)(c.Modal, {
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
function I(e) {
    let { guildId: t, data: i, file: a, ...s } = e,
        [r, o] = l.useState(!1);
    async function c(e, n) {
        try {
            o(!0);
            let l = (0, d.A)();
            S.default.track(y.HAw.EMOJI_UPLOAD_STARTED, { guild_id: t, upload_id: l });
            let s = await (0, v.W)({ guildId: t, uploadId: l, data: i, file: a, roles: e });
            "object" == typeof s && "id" in s && f.X({ emojiId: s.id, userImage: { data: i, file: a } }), n();
        } catch (e) {
        } finally {
            o(!1);
        }
    }
    let u = (0, w.uP)(t, { includeSoftDeleted: !0, sortDeletedListingsLast: !0 }),
        m = E.Ay.sanitizeEmojiName(a.name.split(".")[0]);
    return (0, n.jsx)(D, { emojiName: m, emojiUrl: i, onSave: c, saving: r, listingChoices: u, ...s });
}
function M(e) {
    let t,
        i,
        { emoji: a, guildId: s, ...r } = e,
        o = b.Ay.getEmojiURL({ id: a.id, animated: a.animated, size: 40 }),
        [d, { loading: c }] = (0, p.A)(x.Cp);
    async function u(e, t) {
        null != (await d({ guildId: s, emojiId: a.id, roles: e })) && t();
    }
    let m = (0, w.uP)(s, { includeSoftDeleted: !0 });
    m.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let h =
            ((t = (0, A.bG)([C.A], () => C.A.getSortedRoles(s))),
            (i = (0, A.bG)([_.A], () => _.A.getSubscriptionRoles(s))),
            l.useMemo(() => t.filter((e) => i.has(e.id)), [t, i])),
        j = l.useMemo(() => {
            let e = new Set(
                h.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return a.roles.filter((t) => e.has(t));
        }, [a.roles, h]);
    return (0, n.jsx)(D, {
        emojiName: a.name,
        emojiUrl: o,
        onSave: u,
        initialRoleIds: j,
        saving: c,
        listingChoices: m,
        ...r,
    });
}
