n.d(t, { Z: () => b });
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(755721),
    o = n(481060),
    c = n(510918),
    d = n(494620),
    u = n(63063),
    g = n(434404),
    m = n(999382),
    p = n(981631),
    f = n(659854),
    h = n(388032),
    x = n(764009);
let b = function (e) {
    let { className: t, guildId: n, tag: i, badge: b, primaryColor: j, secondaryColor: v, isDisabled: _ = !1 } = e,
        C = (0, a.e7)([m.Z], () => m.Z.getProps().originalProfile),
        O = null != C && C.tag !== i;
    function y(e) {
        g.Z.updateGuildProfile(n, { tag: e });
    }
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(o.gNt, {
                label: h.intl.string(f.default["tN+8pK"]),
                children: (e) =>
                    (0, r.jsxs)("div", {
                        className: x.tagContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: x.tagInputContainer,
                                children: (0, r.jsx)(s.Is, {
                                    id: e.controlId,
                                    className: x.tagInputWrapper,
                                    inputClassName: l()(x.tagInput, "heading-sm/semibold"),
                                    maxLength: 4,
                                    autoFocus: !0,
                                    placeholder: "WUMP",
                                    prefixElement: (0, r.jsx)(c.v, {
                                        badge: b,
                                        width: 40,
                                        height: 40,
                                        primaryTintColor: j,
                                        secondaryTintColor: v,
                                    }),
                                    disabled: _,
                                    value: null != i ? i : "",
                                    onChange: y,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: x.tagTooltip,
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: h.intl.string(f.default.CrHXHh),
                                }),
                            }),
                        ],
                    }),
            }),
            O &&
                (0, r.jsx)(d.Z, {
                    className: x.tagChangeInfoBox,
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
