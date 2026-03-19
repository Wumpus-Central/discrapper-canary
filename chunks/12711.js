"use strict";
n.d(t, { xp: () => o });
var r = n(627968);
n(64700), n(417597);
var i = n(397927);
n(775602);
var s = n(985018);
n(136708);
var a = n(71785);
function o(e) {
    let { heading: t, description: n, label: o, isEnabled: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Heading, { className: a.zQ, variant: "heading-lg/extrabold", children: t }),
            (0, r.jsx)(i.Text, { className: a.LW, variant: "text-sm/normal", children: n }),
            (0, r.jsxs)("div", {
                className: a.XN,
                children: [
                    null != o &&
                        (0, r.jsxs)("div", {
                            className: a.qB,
                            children: [
                                (0, r.jsx)(i._Jp, { size: "sm", color: i.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                (0, r.jsx)(i.Text, { variant: "text-sm/semibold", children: o }),
                            ],
                        }),
                    l &&
                        (0, r.jsxs)("div", {
                            className: a.qB,
                            children: [
                                (0, r.jsx)(i.yr3, { size: "custom", height: 14, width: 14, color: "currentColor" }),
                                (0, r.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: s.intl.string(s.t.pCMkDb),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
n(676611), n(772324), n(696403), n(538510);
