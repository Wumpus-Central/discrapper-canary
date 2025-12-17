n.d(t, { Z: () => x });
var r = n(54381),
    i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(755721),
    o = n(481060),
    c = n(510918),
    d = n(494620),
    u = n(63063),
    g = n(434404),
    f = n(999382),
    m = n(981631),
    b = n(551199),
    p = n(388032),
    h = n(331867);
let x = function (e) {
    let { className: t, guildId: n, tag: i, badge: x, primaryColor: j, secondaryColor: v, isDisabled: O = !1 } = e,
        C = (0, a.e7)([f.Z], () => f.Z.getProps().originalProfile),
        y = null != C && C.tag !== i;
    function N(e) {
        g.Z.updateGuildProfile(n, { tag: e });
    }
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(o.gNt, {
                label: p.intl.string(b.default["tN+8pD"]),
                children: (e) =>
                    (0, r.jsxs)("div", {
                        className: h.tagContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: h.tagInputContainer,
                                children: (0, r.jsx)(s.Is, {
                                    id: e.controlId,
                                    className: h.tagInputWrapper,
                                    inputClassName: l()(h.tagInput, "heading-sm/semibold"),
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
                                    disabled: O,
                                    value: null != i ? i : "",
                                    onChange: N,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: h.tagTooltip,
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: p.intl.string(b.default.CrHXHt),
                                }),
                            }),
                        ],
                    }),
            }),
            y &&
                (0, r.jsx)(d.Z, {
                    className: h.tagChangeInfoBox,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        children: p.intl.format(b.default["4ZKDXq"], {
                            articleUrl: u.Z.getArticleURL(m.BhN.SERVER_TAGS),
                        }),
                    }),
                }),
        ],
    });
};
