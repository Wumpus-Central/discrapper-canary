"use strict";
n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(983851),
    o = n(194261),
    l = n(451394),
    u = n(163328),
    c = n(276293),
    d = n(56059),
    _ = n(534890),
    h = n(855473),
    f = n(740426),
    p = n(191023),
    E = n(173936),
    m = n(936755),
    g = n(375708),
    A = n(995257);
let I = function (e) {
    let { iconType: t, children: n } = e,
        r = null;
    switch (t) {
        case "voice":
            r = (0, i.jsx)(a.H, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.BVZqJl),
            });
            break;
        case "voice-locked":
            r = (0, i.jsx)(o.X, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.aa0FYn),
            });
            break;
        case "stage":
            r = (0, i.jsx)(l.q, {
                size: "lg",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.EErMzA),
            });
            break;
        case "stage-locked":
            r = (0, i.jsx)(o.X, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.pKZ4I8),
            });
            break;
        case "thread":
            r = (0, i.jsx)(u.y, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t["7Xm5QI"]),
            });
            break;
        case "text":
            r = (0, i.jsx)(c.N, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.GK18KJ),
            });
            break;
        case "forum":
            r = (0, i.jsx)(d.b, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.GbryDd),
            });
            break;
        case "post":
            r = (0, i.jsx)(_.o, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.Y4REmB),
            });
            break;
        case "home":
        case "guide":
            r = (0, i.jsx)(h.Z, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.VbpLyU),
            });
            break;
        case "browse":
        case "customize":
            r = (0, i.jsx)(f.k, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.et6wav),
            });
            break;
        case "message":
            r = (0, i.jsx)(_.o, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.BAB0yK),
            });
            break;
        case "locked":
            r = (0, i.jsx)(o.X, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t["/YzI63"]),
            });
            break;
        case "media":
            r = (0, i.jsx)(p.x, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.seKITE),
            });
            break;
        case "linked-roles":
            r = (0, i.jsx)(E.q, {
                size: "md",
                color: "currentColor",
                className: A.Kk,
                "aria-label": g.intl.string(g.t.ghtnss),
            });
    }
    return (0, i.jsxs)("span", {
        className: s()("channelWithIcon", { [A.bV]: "text" === t }),
        children: [
            (0, i.jsx)(m.A, { children: r }),
            null != n && "" !== n ? (0, i.jsx)("span", { className: A.UU, children: n }) : null,
        ],
    });
};
