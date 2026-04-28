"use strict";
n.d(t, { A: () => A });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(983851),
    r = n(194261),
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
    C = n(995257);
let A = function (e) {
    let { iconType: t, children: n } = e,
        i = null;
    switch (t) {
        case "voice":
            i = (0, l.jsx)(a.H, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.BVZqJl),
            });
            break;
        case "voice-locked":
            i = (0, l.jsx)(r.X, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.aa0FYn),
            });
            break;
        case "stage":
            i = (0, l.jsx)(o.q, {
                size: "lg",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.EErMzA),
            });
            break;
        case "stage-locked":
            i = (0, l.jsx)(r.X, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.pKZ4I8),
            });
            break;
        case "thread":
            i = (0, l.jsx)(c.y, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t["7Xm5QI"]),
            });
            break;
        case "text":
            i = (0, l.jsx)(u.N, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.GK18KJ),
            });
            break;
        case "forum":
            i = (0, l.jsx)(d.b, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.GbryDd),
            });
            break;
        case "post":
            i = (0, l.jsx)(h.o, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.Y4REmB),
            });
            break;
        case "home":
        case "guide":
            i = (0, l.jsx)(m.Z, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.VbpLyU),
            });
            break;
        case "browse":
        case "customize":
            i = (0, l.jsx)(p.k, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.et6wav),
            });
            break;
        case "message":
            i = (0, l.jsx)(h.o, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.BAB0yK),
            });
            break;
        case "locked":
            i = (0, l.jsx)(r.X, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t["/YzI63"]),
            });
            break;
        case "media":
            i = (0, l.jsx)(f.x, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.seKITE),
            });
            break;
        case "linked-roles":
            i = (0, l.jsx)(g.q, {
                size: "md",
                color: "currentColor",
                className: C.Kk,
                "aria-label": x.intl.string(x.t.ghtnss),
            });
    }
    return (0, l.jsxs)("span", {
        className: s()("channelWithIcon", { [C.bV]: "text" === t }),
        children: [
            (0, l.jsx)(_.A, { children: i }),
            null != n && "" !== n ? (0, l.jsx)("span", { className: C.UU, children: n }) : null,
        ],
    });
};
