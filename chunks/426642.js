n.d(t, {
    Z: () => u,
    d: () => d
}),
    n(266796);
var r,
    i = n(200651);
n(192379);
var s = n(692547),
    a = n(481060),
    l = n(752657),
    o = n(388032),
    c = n(135340),
    d = (((r = {})[(r.TOO_BIG = 0)] = 'TOO_BIG'), (r[(r.RATE_LIMIT = 1)] = 'RATE_LIMIT'), (r[(r.TOO_MANY_EMOJI = 2)] = 'TOO_MANY_EMOJI'), (r[(r.TOO_MANY_ANIMATED_EMOJI = 3)] = 'TOO_MANY_ANIMATED_EMOJI'), (r[(r.WRONG_TYPE = 4)] = 'WRONG_TYPE'), (r[(r.RESIZE_GIF = 5)] = 'RESIZE_GIF'), r);
let u = (e) => {
    let { error: t } = e,
        { type: n, filename: r } = t,
        {
            icon: d,
            description: u,
            color: m,
            tooltip: g
        } = {
            0: {
                icon: a.gm1,
                description: o.NW.string(o.t.YbdEFB),
                color: s.Z.unsafe_rawColors.RED_400.css,
                tooltip: o.NW.string(o.t.PanA4O)
            },
            4: {
                icon: a.LB9,
                description: o.NW.string(o.t['01Papq']),
                color: s.Z.unsafe_rawColors.RED_400.css,
                tooltip: o.NW.string(o.t.PanA4O)
            },
            5: {
                icon: l.Z,
                description: o.NW.string(o.t.sp16MT),
                color: s.Z.unsafe_rawColors.RED_400.css,
                tooltip: o.NW.string(o.t.PanA4O)
            },
            1: {
                icon: a.EmW,
                description: o.NW.string(o.t['4rjikp']),
                color: s.Z.unsafe_rawColors.ORANGE_345.css,
                tooltip: o.NW.string(o.t.dq9aTk)
            },
            2: {
                icon: a.d3s,
                description: o.NW.string(o.t['5VmbbG']),
                color: s.Z.unsafe_rawColors.RED_400.css,
                tooltip: o.NW.string(o.t.PanA4O)
            },
            3: {
                icon: a.d3s,
                description: o.NW.string(o.t.rjFOZ2),
                color: s.Z.unsafe_rawColors.RED_400.css,
                tooltip: o.NW.string(o.t.PanA4O)
            }
        }[n];
    return (0, i.jsxs)('div', {
        className: c.emojiErrorItem,
        children: [
            (0, i.jsx)(d, {
                className: c.fileIcon,
                color: s.Z.unsafe_rawColors.PRIMARY_300.css
            }),
            (0, i.jsxs)(a.hjN, {
                className: c.fileInfo,
                children: [
                    (0, i.jsx)(a.vwX, {
                        className: c.fileName,
                        children: r
                    }),
                    (0, i.jsx)(a.R94, {
                        type: a.geA.DESCRIPTION,
                        children: u
                    })
                ]
            }),
            (0, i.jsx)(a.DY3, {
                position: 'right',
                text: g,
                children: (0, i.jsx)(a.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: m
                })
            })
        ]
    });
};
