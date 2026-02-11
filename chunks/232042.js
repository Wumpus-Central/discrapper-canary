"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(936755),
    l = n(985018),
    u = n(13490);
let c = function (e) {
    let { iconType: t, children: n } = e,
        i = null;
    switch (t) {
        case "voice":
            i = (0, r.jsx)(s.HKD, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.BVZqJl),
            });
            break;
        case "voice-locked":
            i = (0, r.jsx)(s.XAi, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.aa0FYn),
            });
            break;
        case "stage":
            i = (0, r.jsx)(s.qux, {
                size: "lg",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.EErMzA),
            });
            break;
        case "stage-locked":
            i = (0, r.jsx)(s.XAi, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.pKZ4I8),
            });
            break;
        case "thread":
            i = (0, r.jsx)(s.ysw, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t["7Xm5QI"]),
            });
            break;
        case "text":
            i = (0, r.jsx)(s.N$i, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.GK18KJ),
            });
            break;
        case "forum":
            i = (0, r.jsx)(s.bSJ, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.GbryDd),
            });
            break;
        case "post":
            i = (0, r.jsx)(s.oyn, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.Y4REmB),
            });
            break;
        case "home":
        case "guide":
            i = (0, r.jsx)(s.Zf8, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.VbpLyU),
            });
            break;
        case "browse":
        case "customize":
            i = (0, r.jsx)(s.kiI, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.et6wav),
            });
            break;
        case "message":
            i = (0, r.jsx)(s.oyn, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.BAB0yK),
            });
            break;
        case "locked":
            i = (0, r.jsx)(s.XAi, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t["/YzI63"]),
            });
            break;
        case "media":
            i = (0, r.jsx)(s.xfq, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.seKITE),
            });
            break;
        case "linked-roles":
            i = (0, r.jsx)(s.qYV, {
                size: "md",
                color: "currentColor",
                className: u.Kk,
                "aria-label": l.intl.string(l.t.ghtnss),
            });
    }
    return (0, r.jsxs)("span", {
        className: a()("channelWithIcon", { [u.bV]: "text" === t }),
        children: [
            (0, r.jsx)(o.A, { children: i }),
            null != n && "" !== n ? (0, r.jsx)("span", { className: u.UU, children: n }) : null,
        ],
    });
};
