l.d(i, { A: () => A });
var e = l(627968);
l(64700);
var n = l(735438),
    s = l(3026),
    a = l(990078),
    d = l(834730),
    o = l(778712),
    r = l(562153),
    c = l(939496),
    h = l(996988),
    x = l(242697);
let u = [
        [{ top: 15, left: 15, width: 28, height: 28 }],
        [
            { top: 7, left: 7, width: 20, height: 20 },
            { top: 25, left: 25, width: 26, height: 26 },
        ],
        [
            { top: 5, left: 10, width: 18, height: 18 },
            { top: 15, left: 31, width: 22, height: 22 },
            { top: 29, left: 5, width: 24, height: 24 },
        ],
        [
            { top: 5, left: 5, width: 22, height: 22 },
            { top: 7, left: 33, width: 18, height: 18 },
            { top: 33, left: 7, width: 18, height: 18 },
            { top: 31, left: 31, width: 22, height: 22 },
        ],
    ],
    g = [
        [{ top: 23, left: 23, width: 52, height: 52 }],
        [
            { top: 13, left: 13, width: 32, height: 32 },
            { top: 41, left: 41, width: 44, height: 44 },
        ],
        [
            { top: 9, left: 14, width: 31, height: 31 },
            { top: 27, left: 53, width: 34, height: 34 },
            { top: 52, left: 11, width: 36, height: 36 },
        ],
        [
            { top: 10, left: 10, width: 36, height: 36 },
            { top: 10, left: 57, width: 31, height: 31 },
            { top: 57, left: 10, width: 31, height: 31 },
            { top: 52, left: 52, width: 36, height: 36 },
        ],
    ];
function A(t) {
    let { users: i, channel: l } = t,
        { themeType: A } = (0, c.E)(),
        p = A === h.d.MODAL_V2 ? g : u,
        m = i.length > 4,
        _ = i.length - 4 + 1,
        N = _ >= 10 ? 3 : 1;
    return (0, e.jsx)("div", {
        className: x.kL,
        children: p[(0, n.clamp)(i.length - 1, 0, p.length - 1)].map((t, n) => {
            let c = i[n];
            return null == c
                ? null
                : (0, e.jsx)(
                      "div",
                      {
                          className: x.n1,
                          style: t,
                          children:
                              m && n === N
                                  ? (0, e.jsx)("div", {
                                        className: x.mB,
                                        children: (0, e.jsx)(d.E, {
                                            variant: "text-xxs/semibold",
                                            lineClamp: 1,
                                            children: (0, e.jsx)(s.A, { children: _ > 99 ? ">99" : `+${_}` }),
                                        }),
                                    })
                                  : (0, e.jsx)(a.m, {
                                        text: r.Ay.getName(l.guild_id, l.id, c),
                                        children: (0, e.jsx)("img", {
                                            className: x.my,
                                            src: c.getAvatarURL(l.guild_id, (0, o.FT)(o._3.SIZE_80)),
                                            alt: "",
                                        }),
                                    }),
                      },
                      c.id,
                  );
        }),
    });
}
