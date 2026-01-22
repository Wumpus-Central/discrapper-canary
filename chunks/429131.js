n.d(t, {
    CreateEmojiWithRolesModal: () => N,
    UpdateEmojiRolesModal: () => R,
}),
    n(896048),
    n(747238),
    n(638769);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(735438),
    s = n.n(o),
    d = n(835245),
    c = n(158954),
    u = n(421380),
    m = n(397927),
    p = n(554375),
    f = n(608461),
    j = n(810877),
    b = n(288224),
    g = n(954571),
    h = n(486020),
    y = n(690521),
    x = n(599941),
    v = n(235149),
    O = n(652215),
    S = n(985018),
    w = n(898515);

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++)
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}
let A = (e) => {
    let { className: t, onChange: n, textVariant: i = "text-md/normal", label: l, value: o, isArchived: s = !1 } = e;
    return (0, r.jsx)(u.Kj, {
        size: 24,
        className: a()(w.J_, t),
        value: o,
        onChange: n,
        type: u.Xo.INVERTED,
        children: (0, r.jsxs)("div", {
            className: w.lN,
            children: [
                (0, r.jsx)(m.Text, {
                    color: "interactive-text-active",
                    variant: i,
                    children: l,
                }),
                s &&
                    (0, r.jsx)(m.LpS, {
                        text: S.intl.string(S.t.nhbtEl),
                    }),
            ],
        }),
    });
};

function C(e) {
    let {
            transitionState: t,
            onClose: n,
            initialRoleIds: l = [],
            listingChoices: a,
            emojiUrl: o,
            emojiName: d,
            saving: u,
            onSave: p,
        } = e,
        [f, j] = i.useState(() => new Set(l)),
        b = i.useMemo(
            () =>
                s().isEqual(
                    f,
                    new Set(
                        a.map((e) => {
                            let { role_id: t } = e;
                            return t;
                        }),
                    ),
                ),
            [a, f],
        ),
        g = f.size > 0;
    return (0, r.jsx)(c.Modal, {
        onClose: n,
        transitionState: t,
        title: S.intl.string(S.t.nP7nDY),
        subtitle: S.intl.string(S.t.I4SYUF),
        preview: !0,
        actions: [
            {
                text: S.intl.string(S.t["ETE/oC"]),
                variant: "secondary",
                onClick: n,
            },
            {
                text: S.intl.string(S.t["R3BPH+"]),
                variant: "primary",
                onClick: () => {
                    p(Array.from(f), n);
                },
                disabled: !g,
                loading: u,
            },
        ],
        children: (0, r.jsxs)(m.BJc, {
            gap: "xl",
            children: [
                (0, r.jsxs)(m.BJc, {
                    direction: "horizontal",
                    gap: "md",
                    align: "center",
                    children: [
                        (0, r.jsx)(m._V3, {
                            src: o,
                            width: 40,
                            height: 40,
                            alt: "",
                        }),
                        (0, r.jsxs)(m.Text, {
                            variant: "text-md/normal",
                            children: [":", d, ":"],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(
                            A,
                            {
                                className: w.L7,
                                label: S.intl.string(S.t["Ve/y5z"]),
                                textVariant: "text-md/semibold",
                                value: b,
                                onChange: () => {
                                    b
                                        ? j(new Set())
                                        : j(
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
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    0 !== t &&
                                        (0, r.jsx)("div", {
                                            className: w.OO,
                                        }),
                                    (0, r.jsx)(
                                        A,
                                        {
                                            onChange: () => {
                                                let t;
                                                return (
                                                    (t = e.role_id),
                                                    j((e) => {
                                                        let n = new Set(e);
                                                        return e.has(t) ? n.delete(t) : n.add(t), n;
                                                    })
                                                );
                                            },
                                            value: f.has(e.role_id),
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

function N(e) {
    let { guildId: t, data: n, file: l } = e,
        a = E(e, ["guildId", "data", "file"]),
        [o, s] = i.useState(!1),
        c = async (e, r) => {
            try {
                s(!0);
                let i = (0, d.A)();
                g.default.track(O.HAw.EMOJI_UPLOAD_STARTED, {
                    guild_id: t,
                    upload_id: i,
                });
                let a = await (0, j.W)({
                    guildId: t,
                    uploadId: i,
                    data: n,
                    file: l,
                    roles: e,
                });
                "object" == typeof a &&
                    "id" in a &&
                    b.X({
                        emojiId: a.id,
                        userImage: {
                            data: n,
                            file: l,
                        },
                    }),
                    r();
            } catch (e) {
            } finally {
                s(!1);
            }
        },
        u = (0, x.uP)(t, {
            includeSoftDeleted: !0,
            sortDeletedListingsLast: !0,
        }),
        m = y.Ay.sanitizeEmojiName(l.name.split(".")[0]);
    return (0, r.jsx)(
        C,
        _(
            {
                emojiName: m,
                emojiUrl: n,
                onSave: c,
                saving: o,
                listingChoices: u,
            },
            a,
        ),
    );
}

function R(e) {
    let { emoji: t, guildId: n } = e,
        l = E(e, ["emoji", "guildId"]),
        a = h.Ay.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 40,
        }),
        [o, { loading: s }] = (0, f.A)(p.Cp),
        d = async (e, r) => {
            null !=
                (await o({
                    guildId: n,
                    emojiId: t.id,
                    roles: e,
                })) && r();
        },
        c = (0, x.uP)(n, {
            includeSoftDeleted: !0,
        });
    c.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let u = (0, v.A)(n),
        m = i.useMemo(() => {
            let e = new Set(
                u.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return t.roles.filter((t) => e.has(t));
        }, [t.roles, u]);
    return (0, r.jsx)(
        C,
        _(
            {
                emojiName: t.name,
                emojiUrl: a,
                onSave: d,
                initialRoleIds: m,
                saving: s,
                listingChoices: c,
            },
            l,
        ),
    );
}
