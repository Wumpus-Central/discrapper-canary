"use strict";
n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(983851),
    a = n(194261),
    o = n(451394),
    c = n(163328),
    u = n(276293),
    d = n(56059),
    h = n(534890),
    m = n(855473),
    p = n(740426),
    f = n(191023),
    g = n(173936),
    _ = n(936755),
    x = n(985018),
    A = n(995257);
let C = function (e) {
    let { iconType: t, children: n } = e,
        l = null;
    switch (t) {
        case "voice":
            l = (0, i.jsx)(r.H, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.BVZqJl),
            });
            break;
        case "voice-locked":
            l = (0, i.jsx)(a.X, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.aa0FYn),
            });
            break;
        case "stage":
            l = (0, i.jsx)(o.q, {
                size: "lg",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.EErMzA),
            });
            break;
        case "stage-locked":
            l = (0, i.jsx)(a.X, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.pKZ4I8),
            });
            break;
        case "thread":
            l = (0, i.jsx)(c.y, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t["7Xm5QI"]),
            });
            break;
        case "text":
            l = (0, i.jsx)(u.N, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.GK18KJ),
            });
            break;
        case "forum":
            l = (0, i.jsx)(d.b, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.GbryDd),
            });
            break;
        case "post":
            l = (0, i.jsx)(h.o, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.Y4REmB),
            });
            break;
        case "home":
        case "guide":
            l = (0, i.jsx)(m.Z, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.VbpLyU),
            });
            break;
        case "browse":
        case "customize":
            l = (0, i.jsx)(p.k, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.et6wav),
            });
            break;
        case "message":
            l = (0, i.jsx)(h.o, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.BAB0yK),
            });
            break;
        case "locked":
            l = (0, i.jsx)(a.X, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t["/YzI63"]),
            });
            break;
        case "media":
            l = (0, i.jsx)(f.x, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.seKITE),
            });
            break;
        case "linked-roles":
            l = (0, i.jsx)(g.q, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": x.intl.string(x.t.ghtnss),
            });
    }
    return (0, i.jsxs)("span", {
        className: s()("channelWithIcon", { [A.bV]: "text" === t }),
        children: [
            (0, i.jsx)(_.A, { children: l }),
            null != n && "" !== n ? (0, i.jsx)("span", { className: A.UU, children: n }) : null,
        ],
    });
};
