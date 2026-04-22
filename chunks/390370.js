l.d(t, { A: () => h });
var n = l(627968);
l(64700);
var i = l(97808),
    s = l(778712),
    a = l(834730),
    r = l(854627),
    d = l(837921),
    c = l(834981),
    u = l(475833),
    o = l(486241);
let x = d.Ay.getEnableHardwareAcceleration() ? i.Js : i.eu;
function h(e) {
    let { otherUser: t, status: l } = e,
        i = (0, c.XC)(t.id, l),
        {
            avatarSrc: d,
            avatarDecorationSrc: h,
            eventHandlers: m,
        } = (0, r.A)({ userId: t.id, size: s._3.SIZE_40, animateOnHover: !0 });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ...m,
                children: (0, n.jsx)(x, {
                    className: o.my,
                    src: d,
                    avatarDecoration: h,
                    size: s._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, n.jsxs)("div", {
                className: o.yt,
                children: [
                    (0, n.jsx)("div", { className: o.Vx, children: (0, n.jsx)(u.A, { user: t }) }),
                    (0, n.jsx)(a.E, { color: "text-muted", variant: "text-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
