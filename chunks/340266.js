n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(392711),
    a = n(481060),
    s = n(111028),
    o = n(5192),
    l = n(340933);
let u = 4,
    c = 1,
    d = 3,
    f = [
        [
            {
                top: 15,
                left: 15,
                width: 28,
                height: 28
            }
        ],
        [
            {
                top: 7,
                left: 7,
                width: 20,
                height: 20
            },
            {
                top: 25,
                left: 25,
                width: 26,
                height: 26
            }
        ],
        [
            {
                top: 5,
                left: 10,
                width: 18,
                height: 18
            },
            {
                top: 15,
                left: 31,
                width: 22,
                height: 22
            },
            {
                top: 29,
                left: 5,
                width: 24,
                height: 24
            }
        ],
        [
            {
                top: 5,
                left: 5,
                width: 22,
                height: 22
            },
            {
                top: 7,
                left: 33,
                width: 18,
                height: 18
            },
            {
                top: 33,
                left: 7,
                width: 18,
                height: 18
            },
            {
                top: 31,
                left: 31,
                width: 22,
                height: 22
            }
        ]
    ];
function _(e) {
    let { users: t, channel: n } = e,
        _ = t.length > u,
        p = t.length - u + 1,
        h = p >= 10 ? d : c;
    return (0, i.jsx)('div', {
        className: l.container,
        children: f[(0, r.clamp)(t.length - 1, 0, f.length - 1)].map((e, r) => {
            let u = t[r];
            return null == u
                ? null
                : (0, i.jsx)(
                      'div',
                      {
                          className: l.circle,
                          style: e,
                          children:
                              _ && r === h
                                  ? (0, i.jsx)('div', {
                                        className: l.overflowCount,
                                        children: (0, i.jsx)(a.Text, {
                                            variant: 'text-xxs/semibold',
                                            lineClamp: 1,
                                            children: (0, i.jsx)(s.Z, { children: p > 99 ? '>99' : '+'.concat(p) })
                                        })
                                    })
                                  : (0, i.jsx)(a.ua7, {
                                        text: o.ZP.getName(n.guild_id, n.id, u),
                                        children: (e) =>
                                            (0, i.jsx)('img', {
                                                ...e,
                                                className: l.avatar,
                                                src: u.getAvatarURL(n.guild_id, (0, a.pxk)(a.EFr.SIZE_80)),
                                                alt: ''
                                            })
                                    })
                      },
                      u.id
                  );
        })
    });
}
