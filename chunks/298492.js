s.d(t, { q: () => o });
var a = s(627968);
s(64700);
var r = s(503698),
    i = s.n(r),
    n = s(397927),
    l = s(308528),
    c = s(854627),
    _ = s(779733),
    d = s(427262),
    u = s(518582),
    E = s(985018),
    m = s(177192);
let o = (e) => {
    let { recipient: t, isSuccess: s, onClose: r } = e,
        { avatarSrc: o, eventHandlers: h } = (0, c.A)({ userId: t?.id, size: n._3J.SIZE_56 }),
        R = d.Ay.getName(t),
        M = !s;
    return (0, a.jsxs)("div", {
        className: i()(m.nM, { [m.z3]: M }),
        children: [
            (0, a.jsx)(n.euF, { src: o, "aria-label": R, size: n._3J.SIZE_32, ...h }),
            (0, a.jsxs)("div", {
                className: m.Qs,
                children: [
                    (0, a.jsx)(n.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: m.QC,
                        children: R,
                    }),
                    M &&
                        (0, a.jsx)(n.Text, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            className: m.kc,
                            children: E.intl.format(u.default["Y/oMwY"], { userName: R }),
                        }),
                ],
            }),
            s &&
                (0, a.jsx)(n.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: E.intl.string(E.t["g33r/P"]),
                    icon: n.oyn,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, _.default)(), l.A.openPrivateChannel({ recipientIds: e }), r());
                    },
                }),
        ],
    });
};
