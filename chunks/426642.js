n.d(t, {
    Z: () => u,
    d: () => c,
}),
    n(953529);
var r = n(951288);
n(647438);
var i = n(692547),
    a = n(481060),
    o = n(752657),
    s = n(388032),
    l = n(749085),
    c = (function (e) {
        return (
            (e[(e.TOO_BIG = 0)] = "TOO_BIG"),
            (e[(e.RATE_LIMIT = 1)] = "RATE_LIMIT"),
            (e[(e.TOO_MANY_EMOJI = 2)] = "TOO_MANY_EMOJI"),
            (e[(e.TOO_MANY_ANIMATED_EMOJI = 3)] = "TOO_MANY_ANIMATED_EMOJI"),
            (e[(e.WRONG_TYPE = 4)] = "WRONG_TYPE"),
            (e[(e.RESIZE_GIF = 5)] = "RESIZE_GIF"),
            e
        );
    })({});
let u = (e) => {
    let { error: t } = e,
        { type: n, filename: c } = t,
        {
            icon: u,
            description: d,
            color: f,
            tooltip: _,
        } = {
            0: {
                icon: a.gm1,
                description: s.intl.string(s.t.YbdEFB),
                color: i.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O),
            },
            4: {
                icon: a.LB9,
                description: s.intl.string(s.t["01Papq"]),
                color: i.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O),
            },
            5: {
                icon: o.Z,
                description: s.intl.string(s.t.sp16MT),
                color: i.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O),
            },
            1: {
                icon: a.EmW,
                description: s.intl.string(s.t["4rjikp"]),
                color: i.Z.unsafe_rawColors.ORANGE_345.css,
                tooltip: s.intl.string(s.t.dq9aTk),
            },
            2: {
                icon: a.d3s,
                description: s.intl.string(s.t["5VmbbG"]),
                color: i.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O),
            },
            3: {
                icon: a.d3s,
                description: s.intl.string(s.t.rjFOZ2),
                color: i.Z.unsafe_rawColors.RED_400.css,
                tooltip: s.intl.string(s.t.PanA4O),
            },
        }[n];
    return (0, r.jsxs)("div", {
        className: l.emojiErrorItem,
        children: [
            (0, r.jsx)(u, {
                className: l.fileIcon,
                color: i.Z.unsafe_rawColors.PRIMARY_300.css,
            }),
            (0, r.jsxs)(a.hjN, {
                className: l.fileInfo,
                children: [
                    (0, r.jsx)(a.vwX, {
                        className: l.fileName,
                        children: c,
                    }),
                    (0, r.jsx)(a.R94, {
                        type: a.geA.DESCRIPTION,
                        children: d,
                    }),
                ],
            }),
            (0, r.jsx)(a.DY3, {
                position: "right",
                text: _,
                children: (0, r.jsx)(a.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: f,
                }),
            }),
        ],
    });
};
