n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(931120);
let s = 4,
    o = 2,
    l = 1,
    u = [
        [
            {
                translateY: 0,
                translateX: 0,
                scale: 1.2
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            }
        ],
        [
            {
                translateY: -14,
                translateX: -14,
                scale: 0.7058823529411765
            },
            {
                translateY: 12,
                translateX: 12,
                scale: 0.8235294117647058
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            }
        ],
        [
            {
                translateY: -4,
                translateX: 16,
                scale: 0.7058823529411765
            },
            {
                translateY: 14,
                translateX: -14,
                scale: 0.8235294117647058
            },
            {
                translateY: -18,
                translateX: -12,
                scale: 0.5882352941176471
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            }
        ],
        [
            {
                translateY: -13,
                translateX: -13,
                scale: 0.8235294117647058
            },
            {
                translateY: 13,
                translateX: 13,
                scale: 0.8235294117647058
            },
            {
                translateY: -18,
                translateX: 18,
                scale: 0.5882352941176471
            },
            {
                translateY: 18,
                translateX: -18,
                scale: 0.5882352941176471
            }
        ]
    ];
function c(e) {
    let { users: t, guildId: n } = e,
        c = Math.min(u.length - 1, t.length - 1),
        d = u[Math.max(0, c)],
        f = t.length > s,
        _ = t.length - s - 1,
        p = _ >= 10 ? l : o;
    return (0, i.jsx)('div', {
        className: a.container,
        children: (0, i.jsx)('div', {
            className: a.frame,
            children: d.map((e, s) => {
                let { translateX: o, translateY: l, scale: u } = e,
                    c = t[s];
                return null == c
                    ? null
                    : (0, i.jsx)(
                          'div',
                          {
                              className: a.slot,
                              style: { transform: 'translateX('.concat(o, 'px) translateY(').concat(l, 'px) scale(').concat(u, ')') },
                              children: (0, i.jsx)('div', {
                                  className: a.wrapper,
                                  children:
                                      f && s === p
                                          ? (0, i.jsx)('div', {
                                                className: a.overflowCount,
                                                children: (0, i.jsxs)(r.Text, {
                                                    variant: 'text-sm/semibold',
                                                    children: ['+', _]
                                                })
                                            })
                                          : (0, i.jsx)('img', {
                                                className: a.avatar,
                                                src: c.getAvatarURL(n, (0, r.pxk)(r.EFr.SIZE_80)),
                                                alt: ''
                                            })
                              })
                          },
                          c.id
                      );
            })
        })
    });
}
