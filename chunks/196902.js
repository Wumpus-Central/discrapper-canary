n.d(t, { Z: () => x });
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(755721),
    o = n(481060),
    c = n(510918),
    d = n(494620),
    u = n(63063),
    m = n(434404),
    g = n(999382),
    p = n(981631),
    f = n(755032),
    h = n(388032),
    b = n(565744);
let x = function (e) {
    let { className: t, guildId: n, tag: i, badge: x, primaryColor: j, secondaryColor: v, isDisabled: _ = !1 } = e,
        O = (0, s.e7)([g.Z], () => g.Z.getProps().originalProfile),
        y = null != O && O.tag !== i;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(o.vwX, {
                className: b.sectionTitle,
                children: h.intl.string(f.default["tN+8pK"]),
            }),
            (0, r.jsxs)("div", {
                className: b.tagContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: b.tagInputContainer,
                        children: (0, r.jsx)(a.Is, {
                            className: b.tagInputWrapper,
                            inputClassName: l()(b.tagInput, "heading-sm/semibold"),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: "WUMP",
                            prefixElement: (0, r.jsx)(c.v, {
                                badge: x,
                                width: 40,
                                height: 40,
                                primaryTintColor: j,
                                secondaryTintColor: v,
                            }),
                            disabled: _,
                            value: null != i ? i : "",
                            onChange: function (e) {
                                m.Z.updateGuildProfile(n, { tag: e });
                            },
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: b.tagTooltip,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: h.intl.string(f.default.CrHXHh),
                        }),
                    }),
                ],
            }),
            y &&
                (0, r.jsx)(d.Z, {
                    className: b.tagChangeInfoBox,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        children: h.intl.format(f.default["4ZKDXl"], {
                            articleUrl: u.Z.getArticleURL(p.BhN.SERVER_TAGS),
                        }),
                    }),
                }),
        ],
    });
};
