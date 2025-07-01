(r.d(e, {
    Z: () => f,
    d: () => u
}),
    r(953529));
var n,
    i = r(255367);
r(73800);
var l = r(692547),
    o = r(481060),
    a = r(752657),
    s = r(388032),
    c = r(135340),
    u = (((n = {})[(n.TOO_BIG = 0)] = 'TOO_BIG'), (n[(n.RATE_LIMIT = 1)] = 'RATE_LIMIT'), (n[(n.TOO_MANY_EMOJI = 2)] = 'TOO_MANY_EMOJI'), (n[(n.TOO_MANY_ANIMATED_EMOJI = 3)] = 'TOO_MANY_ANIMATED_EMOJI'), (n[(n.WRONG_TYPE = 4)] = 'WRONG_TYPE'), (n[(n.RESIZE_GIF = 5)] = 'RESIZE_GIF'), n);
let f = (t) => {
    let { error: e } = t,
        { type: r, filename: n } = e,
        {
            icon: u,
            description: f,
            color: d,
            tooltip: h
        } = {
            0: {
                icon: o.gm1,
                description: s.intl.string(s.t.YbdEFB),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O)
            },
            4: {
                icon: o.LB9,
                description: s.intl.string(s.t['01Papq']),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O)
            },
            5: {
                icon: a.Z,
                description: s.intl.string(s.t.sp16MT),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O)
            },
            1: {
                icon: o.EmW,
                description: s.intl.string(s.t['4rjikp']),
                color: l.Z.unsafe_rawColors.ORANGE_345.css,
                tooltip: s.intl.string(s.t.dq9aTk)
            },
            2: {
                icon: o.d3s,
                description: s.intl.string(s.t['5VmbbG']),
                color: l.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O)
            },
            3: {
                icon: o.d3s,
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
            (0, i.jsxs)(o.hjN, {
                className: c.fileInfo,
                children: [
                    (0, i.jsx)(o.vwX, {
                        className: c.fileName,
                        children: n
                    }),
                    (0, i.jsx)(o.R94, {
                        type: o.geA.DESCRIPTION,
                        children: f
                    })
                ]
            }),
            (0, i.jsx)(o.DY3, {
                position: 'right',
                text: h,
                children: (0, i.jsx)(o.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: d
                })
            })
        ]
    });
};
