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
    m = n(999382),
    p = n(981631),
    f = n(713328),
    h = n(388032),
    b = n(764009);
let x = function (e) {
    let { className: t, guildId: n, tag: i, badge: x, primaryColor: j, secondaryColor: _, isDisabled: v = !1 } = e,
        O = (0, a.e7)([m.Z], () => m.Z.getProps().originalProfile),
        C = null != O && O.tag !== i;
    function y(e) {
        g.Z.updateGuildProfile(n, { tag: e });
    }
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(o.gNt, {
                label: h.intl.string(f.default["tN+8pD"]),
                children: (e) =>
                    (0, r.jsxs)("div", {
                        className: b.tagContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: b.tagInputContainer,
                                children: (0, r.jsx)(s.Is, {
                                    id: e.controlId,
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
                                        secondaryTintColor: _,
                                    }),
                                    disabled: v,
                                    value: null != i ? i : "",
                                    onChange: y,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: b.tagTooltip,
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: h.intl.string(f.default.CrHXHt),
                                }),
                            }),
                        ],
                    }),
            }),
            C &&
                (0, r.jsx)(d.Z, {
                    className: b.tagChangeInfoBox,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        children: h.intl.format(f.default["4ZKDXq"], {
                            articleUrl: u.Z.getArticleURL(p.BhN.SERVER_TAGS),
                        }),
                    }),
                }),
        ],
    });
};
