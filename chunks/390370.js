n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(854627),
    a = n(837921),
    l = n(834981),
    o = n(475833),
    c = n(694164);
let d = a.Ay.getEnableHardwareAcceleration() ? s.JsQ : s.euF;
function u(e) {
    let { otherUser: t, status: n } = e,
        a = (0, l.XC)(t.id, n),
        {
            avatarSrc: u,
            avatarDecorationSrc: _,
            eventHandlers: m,
        } = (0, r.A)({ userId: t.id, size: s._3J.SIZE_40, animateOnHover: !0 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                ...m,
                children: (0, i.jsx)(d, {
                    className: c.my,
                    src: u,
                    avatarDecoration: _,
                    size: s._3J.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, i.jsxs)("div", {
                className: c.yt,
                children: [
                    (0, i.jsx)("div", { className: c.Vx, children: (0, i.jsx)(o.A, { user: t }) }),
                    (0, i.jsx)(s.Text, { color: "text-muted", variant: "text-xs/normal", children: a }),
                ],
            }),
        ],
    });
}
