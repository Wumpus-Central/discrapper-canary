t.d(l, { O: () => d });
var n = t(627968);
t(64700);
var i = t(397927),
    s = t(793574),
    a = t(407217),
    r = t(985018),
    o = t(383341);
function d() {
    let e = () => {
        (0, a.K)({ analyticsSource: s.A.USER_PROFILE_MODAL_V2, stackingBehavior: "stack" });
    };
    return (0, n.jsxs)(i.hLv, {
        color: "nitro-pink",
        className: o.k,
        children: [
            (0, n.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: r.intl.format(r.t.TmfgI2, { onClick: e }),
            }),
            (0, n.jsx)(i.Button, {
                variant: "expressive",
                size: "md",
                icon: i.tvc,
                text: r.intl.string(r.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
