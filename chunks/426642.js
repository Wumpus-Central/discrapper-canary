r.d(e, {
    Z: () => d,
    d: () => u
}),
    r(953529);
var n,
    i = r(255367);
r(73800);
var l = r(692547),
    a = r(481060),
    o = r(752657),
    s = r(388032),
    c = r(135340),
    u = (((n = {})[(n.TOO_BIG = 0)] = 'TOO_BIG'), (n[(n.RATE_LIMIT = 1)] = 'RATE_LIMIT'), (n[(n.TOO_MANY_EMOJI = 2)] = 'TOO_MANY_EMOJI'), (n[(n.TOO_MANY_ANIMATED_EMOJI = 3)] = 'TOO_MANY_ANIMATED_EMOJI'), (n[(n.WRONG_TYPE = 4)] = 'WRONG_TYPE'), (n[(n.RESIZE_GIF = 5)] = 'RESIZE_GIF'), n);
let d = (t) => {
    let { error: e } = t,
        { type: r, filename: n } = e,
        {
            icon: u,
            description: d,
            color: f,
            tooltip: g
        } = {
            0: {
                icon: a.gm1,
                description: s.intl.string(s.t.YbdEFB),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O)
            },
            4: {
                icon: a.LB9,
                description: s.intl.string(s.t['01Papq']),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O)
            },
            5: {
                icon: o.Z,
                description: s.intl.string(s.t.sp16MT),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O)
            },
            1: {
                icon: a.EmW,
                description: s.intl.string(s.t['4rjikp']),
                color: l.Z.unsafe_rawColors.ORANGE_345.css,
                tooltip: s.intl.string(s.t.dq9aTk)
            },
            2: {
                icon: a.d3s,
                description: s.intl.string(s.t['5VmbbG']),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O)
            },
            3: {
                icon: a.d3s,
                description: s.intl.string(s.t.rjFOZ2),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O)
            }
        }[r];
    return (0, i.jsxs)('div', {
        className: c.emojiErrorItem,
        children: [
            (0, i.jsx)(u, {
                className: c.fileIcon,
                color: l.Z.unsafe_rawColors.PRIMARY_300.css
            }),
            (0, i.jsxs)(a.hjN, {
                className: c.fileInfo,
                children: [
                    (0, i.jsx)(a.vwX, {
                        className: c.fileName,
                        children: n
                    }),
                    (0, i.jsx)(a.R94, {
                        type: a.geA.DESCRIPTION,
                        children: d
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
                    color: f
                })
            })
        ]
    });
};
