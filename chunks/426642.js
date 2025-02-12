n.d(t, {
    Z: () => u,
    d: () => d
});
var i,
    r = n(200651);
n(192379);
var l = n(692547),
    s = n(481060),
    a = n(752657),
    o = n(388032),
    c = n(120078),
    d = (((i = {})[(i.TOO_BIG = 0)] = 'TOO_BIG'), (i[(i.RATE_LIMIT = 1)] = 'RATE_LIMIT'), (i[(i.TOO_MANY_EMOJI = 2)] = 'TOO_MANY_EMOJI'), (i[(i.TOO_MANY_ANIMATED_EMOJI = 3)] = 'TOO_MANY_ANIMATED_EMOJI'), (i[(i.WRONG_TYPE = 4)] = 'WRONG_TYPE'), (i[(i.RESIZE_GIF = 5)] = 'RESIZE_GIF'), i);
let u = (e) => {
    let { error: t } = e,
        { type: n, filename: i } = t,
        {
            icon: d,
            description: u,
            color: m,
            tooltip: h
        } = {
            0: {
                icon: s.gm1,
                description: o.intl.string(o.t.YbdEFB),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: o.intl.string(o.t.PanA4O)
            },
            4: {
                icon: s.LB9,
                description: o.intl.string(o.t['01Papq']),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: o.intl.string(o.t.PanA4O)
            },
            5: {
                icon: a.Z,
                description: o.intl.string(o.t.sp16MT),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: o.intl.string(o.t.PanA4O)
            },
            1: {
                icon: s.EmW,
                description: o.intl.string(o.t['4rjikp']),
                color: l.Z.unsafe_rawColors.ORANGE_345.css,
                tooltip: o.intl.string(o.t.dq9aTk)
            },
            2: {
                icon: s.d3s,
                description: o.intl.string(o.t['5VmbbG']),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: o.intl.string(o.t.PanA4O)
            },
            3: {
                icon: s.d3s,
                description: o.intl.string(o.t.rjFOZ2),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: o.intl.string(o.t.PanA4O)
            }
        }[n];
    return (0, r.jsxs)('div', {
        className: c.emojiErrorItem,
        children: [
            (0, r.jsx)(d, {
                className: c.fileIcon,
                color: l.Z.unsafe_rawColors.PRIMARY_300.css
            }),
            (0, r.jsxs)(s.hjN, {
                className: c.fileInfo,
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: c.fileName,
                        children: i
                    }),
                    (0, r.jsx)(s.R94, {
                        type: s.geA.DESCRIPTION,
                        children: u
                    })
                ]
            }),
            (0, r.jsx)(s.DY3, {
                position: 'right',
                text: h,
                children: (0, r.jsx)(s.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: m
                })
            })
        ]
    });
};
