n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(149765),
    a = n(993365),
    o = n(668339),
    s = n(481060),
    l = n(981631),
    c = n(388032),
    u = n(829478);
let d = 5;
function f(e) {
    let { error: t, selectedGuildId: n, onGuildChange: f, guilds: p, disabled: _ = !1 } = e,
        m = p
            .filter((e) => i.e$(e.permissions, l.Plq.MANAGE_GUILD))
            .map((e) => ({
                value: e.id,
                label: e.name,
            }));
    return (0, r.jsxs)("div", {
        className: u.selectorGroup,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: u.sectionLabel,
                children: c.intl.string(c.t["1DXFFd"]),
            }),
            null != t && "" !== t
                ? (0, r.jsx)(a.x, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: t,
                  })
                : null,
            (0, r.jsx)(o.d, {
                wrapperClassName: u.select,
                maxVisibleItems: d,
                placeholder: c.intl.string(c.t.oM4E1A),
                options: m,
                onChange: f,
                isDisabled: _,
                value: n,
            }),
            (0, r.jsx)(a.x, {
                variant: "text-xs/medium",
                color: "text-default",
                className: u.label,
                children: c.intl.format(c.t.t9Jm9o, {}),
            }),
        ],
    });
}
