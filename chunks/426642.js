n.d(t, {
    d: function () {
        return r;
    }
});
var i,
    r,
    l = n(200651);
n(192379);
var a = n(692547),
    s = n(481060),
    o = n(752657),
    c = n(388032),
    d = n(668398);
((i = r || (r = {}))[(i.TOO_BIG = 0)] = 'TOO_BIG'), (i[(i.RATE_LIMIT = 1)] = 'RATE_LIMIT'), (i[(i.TOO_MANY_EMOJI = 2)] = 'TOO_MANY_EMOJI'), (i[(i.TOO_MANY_ANIMATED_EMOJI = 3)] = 'TOO_MANY_ANIMATED_EMOJI'), (i[(i.WRONG_TYPE = 4)] = 'WRONG_TYPE'), (i[(i.RESIZE_GIF = 5)] = 'RESIZE_GIF');
t.Z = (e) => {
    let { error: t } = e,
        { type: n, filename: i } = t,
        {
            icon: r,
            description: u,
            color: m,
            tooltip: h
        } = {
            0: {
                icon: s.FileWarningIcon,
                description: c.intl.string(c.t.YbdEFB),
                color: a.Z.unsafe_rawColors.RED_400.css,
                tooltip: c.intl.string(c.t.PanA4O)
            },
            4: {
                icon: s.FileDenyIcon,
                description: c.intl.string(c.t['01Papq']),
                color: a.Z.unsafe_rawColors.RED_400.css,
                tooltip: c.intl.string(c.t.PanA4O)
            },
            5: {
                icon: o.Z,
                description: c.intl.string(c.t.sp16MT),
                color: a.Z.unsafe_rawColors.RED_400.css,
                tooltip: c.intl.string(c.t.PanA4O)
            },
            1: {
                icon: s.SpeedometerIcon,
                description: c.intl.string(c.t['4rjikp']),
                color: a.Z.unsafe_rawColors.ORANGE_345.css,
                tooltip: c.intl.string(c.t.dq9aTk)
            },
            2: {
                icon: s.CircleInformationIcon,
                description: c.intl.string(c.t['5VmbbG']),
                color: a.Z.unsafe_rawColors.RED_400.css,
                tooltip: c.intl.string(c.t.PanA4O)
            },
            3: {
                icon: s.CircleInformationIcon,
                description: c.intl.string(c.t.rjFOZ2),
                color: a.Z.unsafe_rawColors.RED_400.css,
                tooltip: c.intl.string(c.t.PanA4O)
            }
        }[n];
    return (0, l.jsxs)('div', {
        className: d.emojiErrorItem,
        children: [
            (0, l.jsx)(r, {
                className: d.fileIcon,
                color: a.Z.unsafe_rawColors.PRIMARY_300.css
            }),
            (0, l.jsxs)(s.FormSection, {
                className: d.fileInfo,
                children: [
                    (0, l.jsx)(s.FormTitle, {
                        className: d.fileName,
                        children: i
                    }),
                    (0, l.jsx)(s.FormText, {
                        type: s.FormTextTypes.DESCRIPTION,
                        children: u
                    })
                ]
            }),
            (0, l.jsx)(s.TooltipContainer, {
                position: 'right',
                text: h,
                children: (0, l.jsx)(s.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: m
                })
            })
        ]
    });
};
