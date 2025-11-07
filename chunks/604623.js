i.d(t, {
    CreateEmojiWithRolesModal: () => R,
    UpdateEmojiRolesModal: () => I,
}),
    i(388685),
    i(35282),
    i(642613);
var n = i(951288),
    r = i(647438),
    l = i(120356),
    a = i.n(l),
    s = i(392711),
    o = i.n(s),
    c = i(772848),
    d = i(793030),
    u = i(755721),
    m = i(481060),
    h = i(80932),
    b = i(935369),
    f = i(730089),
    p = i(806774),
    j = i(626135),
    g = i(768581),
    x = i(176354),
    v = i(584825),
    y = i(46887),
    S = i(981631),
    w = i(388032),
    _ = i(815976);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function O(e, t) {
    if (null == e) return {};
    var i,
        n,
        r = (function (e, t) {
            if (null == e) return {};
            var i,
                n,
                r = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) (i = l[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++)
            (i = l[n]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
    }
    return r;
}
let C = (e) => {
    let { className: t, onChange: i, textVariant: r = "text-md/normal", label: l, value: s, isArchived: o = !1 } = e;
    return (0, n.jsx)(u.$q, {
        size: 24,
        className: a()(_.checklistRow, t),
        value: s,
        onChange: i,
        type: u.M0.INVERTED,
        children: (0, n.jsxs)("div", {
            className: _.checklistLabel,
            children: [
                (0, n.jsx)(m.Text, {
                    color: "interactive-active",
                    variant: r,
                    children: l,
                }),
                o && (0, n.jsx)(m.IGR, { text: w.intl.string(w.t.nhbtEl) }),
            ],
        }),
    });
};
function E(e) {
    let {
            transitionState: t,
            onClose: i,
            initialRoleIds: l = [],
            listingChoices: a,
            emojiUrl: s,
            emojiName: c,
            saving: u,
            onSave: h,
        } = e,
        [b, f] = r.useState(() => new Set(l)),
        p = r.useMemo(
            () =>
                o().isEqual(
                    b,
                    new Set(
                        a.map((e) => {
                            let { role_id: t } = e;
                            return t;
                        }),
                    ),
                ),
            [a, b],
        ),
        j = b.size > 0;
    return (0, n.jsx)(d.Modal, {
        onClose: i,
        transitionState: t,
        title: w.intl.string(w.t.nP7nDY),
        subtitle: w.intl.string(w.t.I4SYUF),
        preview: !0,
        actions: [
            {
                text: w.intl.string(w.t["ETE/oC"]),
                variant: "secondary",
                onClick: i,
            },
            {
                text: w.intl.string(w.t["R3BPH+"]),
                variant: "primary",
                onClick: () => {
                    h(Array.from(b), i);
                },
                disabled: !j,
                loading: u,
            },
        ],
        children: (0, n.jsxs)(m.Kqy, {
            gap: "xl",
            children: [
                (0, n.jsxs)(m.Kqy, {
                    direction: "horizontal",
                    gap: "md",
                    align: "center",
                    children: [
                        (0, n.jsx)(m.Eep, {
                            src: s,
                            width: 40,
                            height: 40,
                            alt: "",
                        }),
                        (0, n.jsxs)(m.Text, {
                            variant: "text-md/normal",
                            children: [":", c, ":"],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(
                            C,
                            {
                                className: _.selectAllCheckbox,
                                label: w.intl.string(w.t["Ve/y5z"]),
                                textVariant: "text-md/semibold",
                                value: p,
                                onChange: () => {
                                    p
                                        ? f(new Set())
                                        : f(
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
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    0 !== t && (0, n.jsx)("div", { className: _.seperator }),
                                    (0, n.jsx)(
                                        C,
                                        {
                                            onChange: () => {
                                                let t;
                                                return (
                                                    (t = e.role_id),
                                                    f((e) => {
                                                        let i = new Set(e);
                                                        return e.has(t) ? i.delete(t) : i.add(t), i;
                                                    })
                                                );
                                            },
                                            value: b.has(e.role_id),
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
function R(e) {
    var { guildId: t, data: i, file: l } = e,
        a = O(e, ["guildId", "data", "file"]);
    let [s, o] = r.useState(!1),
        d = async (e, n) => {
            try {
                o(!0);
                let r = (0, c.Z)();
                j.default.track(S.rMx.EMOJI_UPLOAD_STARTED, {
                    guild_id: t,
                    upload_id: r,
                });
                let a = await (0, f.G)({
                    guildId: t,
                    uploadId: r,
                    data: i,
                    file: l,
                    roles: e,
                });
                "object" == typeof a &&
                    "id" in a &&
                    p.MK({
                        emojiId: a.id,
                        userImage: {
                            data: i,
                            file: l,
                        },
                    }),
                    n();
            } catch (e) {
            } finally {
                o(!1);
            }
        },
        u = (0, v.qi)(t, {
            includeSoftDeleted: !0,
            sortDeletedListingsLast: !0,
        }),
        m = x.ZP.sanitizeEmojiName(l.name.split(".")[0]);
    return (0, n.jsx)(
        E,
        k(
            {
                emojiName: m,
                emojiUrl: i,
                onSave: d,
                saving: s,
                listingChoices: u,
            },
            a,
        ),
    );
}
function I(e) {
    var { emoji: t, guildId: i } = e,
        l = O(e, ["emoji", "guildId"]);
    let a = g.ZP.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 40,
        }),
        [s, { loading: o }] = (0, b.Z)(h.dv),
        c = async (e, n) => {
            null !=
                (await s({
                    guildId: i,
                    emojiId: t.id,
                    roles: e,
                })) && n();
        },
        d = (0, v.qi)(i, { includeSoftDeleted: !0 });
    d.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let u = (0, y.Z)(i),
        m = r.useMemo(() => {
            let e = new Set(
                u.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return t.roles.filter((t) => e.has(t));
        }, [t.roles, u]);
    return (0, n.jsx)(
        E,
        k(
            {
                emojiName: t.name,
                emojiUrl: a,
                onSave: c,
                initialRoleIds: m,
                saving: o,
                listingChoices: d,
            },
            l,
        ),
    );
}
