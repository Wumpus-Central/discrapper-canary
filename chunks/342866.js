var t = l(477900);
l(582128);
var i = l(778712),
    a = l(97808),
    r = l(101058),
    s = l(854627),
    u = l(930349),
    d = l(792996);
let o = i._3.SIZE_72;
function c(e) {
    let { userId: n, guildId: l, avatarChange: i, shouldAnimate: u, imageInteractingClassName: d } = e,
        { avatarSrc: c } = (0, s.A)({
            userId: n,
            guildId: l,
            avatarOverride: (0, r.V7)({ userId: n, image: i, canAnimate: u }),
            size: o,
            animateOnHover: !u,
        });
    return (0, t.jsx)(a.eu, { src: c, size: o, className: u ? d : void 0, "aria-hidden": !0 });
}
l.d(
    n,
    {},
    {
        A: function (e) {
            let {
                userId: n,
                guildId: l,
                avatarChange: i,
                fieldA11yLabel: a = d.intl.string(d.t.lqaIxI),
                imageInteractingClassName: r,
                ...s
            } = e;
            return (0, t.jsx)(u.A, {
                ...s,
                fieldA11yLabel: a,
                editButtonA11yLabel: d.intl.string(d.t["4OynCD"]),
                renderPreview: (e) =>
                    (0, t.jsx)(c, {
                        userId: n,
                        guildId: l,
                        avatarChange: i,
                        shouldAnimate: e,
                        imageInteractingClassName: r,
                    }),
            });
        },
    },
);
