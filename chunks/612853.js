n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(388032),
    l = n(796914),
    c = n(149715);
function u(e) {
    let { iconClassName: t, textClassName: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(l.paymentModalLockIcon, c.flex, c.alignCenter),
        children: [
            (0, r.jsx)(a.mBM, {
                size: "sm",
                color: "currentColor",
                className: o()(l.lockIcon, t),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                className: o()(l.lockIconText, null != n ? n : void 0),
                children: s.intl.string(s.t.Kv6Z4O),
            }),
        ],
    });
}
