i.d(t, { A: () => x });
var l = i(627968);
i(64700);
var n = i(735438),
    s = i(3026),
    a = i(990078),
    d = i(834730),
    r = i(778712),
    o = i(562153),
    c = i(939496),
    u = i(996988),
    A = i(17545);
let h = [
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
function x(e) {
    let { users: t, channel: i } = e,
        { themeType: x } = (0, c.E)(),
        m = x === u.d.MODAL_V2 ? g : h,
        C = t.length > 4,
        _ = t.length - 4 + 1,
        p = _ >= 10 ? 3 : 1;
    return (0, l.jsx)("div", {
        className: A.kL,
        children: m[(0, n.clamp)(t.length - 1, 0, m.length - 1)].map((e, n) => {
            let c = t[n];
            return null == c
                ? null
                : (0, l.jsx)(
                      "div",
                      {
                          className: A.n1,
                          style: e,
                          children:
                              C && n === p
                                  ? (0, l.jsx)("div", {
                                        className: A.mB,
                                        children: (0, l.jsx)(d.E, {
                                            variant: "text-xxs/semibold",
                                            lineClamp: 1,
                                            children: (0, l.jsx)(s.A, { children: _ > 99 ? ">99" : `+${_}` }),
                                        }),
                                    })
                                  : (0, l.jsx)(a.m, {
                                        text: o.Ay.getName(i.guild_id, i.id, c),
                                        children: (0, l.jsx)("img", {
                                            className: A.my,
                                            src: c.getAvatarURL(i.guild_id, (0, r.FT)(r._3.SIZE_80)),
                                            alt: "",
                                        }),
                                    }),
                      },
                      c.id,
                  );
        }),
    });
}
