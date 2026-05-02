"use strict";
n.d(t, { A: () => g }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(990078),
    l = n(97808),
    u = n(778712),
    c = n(793574),
    d = n(342296),
    _ = n(953727);
function f(e) {
    let { width: t = 24, height: n = 24, color: r = "currentColor", ...s } = e;
    return (0, i.jsxs)("svg", {
        ...(0, _.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: r,
                d: "M12 14C7.289 14 4 16.467 4 20V22H20V20C20 16.467 16.711 14 12 14ZM11 19C10.447 19 10 18.553 10 18C10 17.447 10.447 17 11 17C11.553 17 12 17.447 12 18C12 18.553 11.553 19 11 19ZM14 19C13.447 19 13 18.553 13 18C13 17.447 13.447 17 14 17C14.553 17 15 17.447 15 18C15 18.553 14.553 19 14 19Z",
            }),
            (0, i.jsx)("path", {
                fill: r,
                d: "M18 6H17.91C17.432 3.167 14.967 1 12 1C9.033 1 6.568 3.167 6.09 6H6C4.896 6 4 6.896 4 8V9C4 10.104 4.896 11 6 11C6 12.102 6.897 13 8 13H16C17.104 13 18 12.102 18 11C19.104 11 20 10.104 20 9V8C20 6.896 19.104 6 18 6ZM16 10H8V6H16V10Z",
            }),
        ],
    });
}
var h = n(403362),
    p = n(562153),
    E = n(656318);
let m = (e) => {
        let { member: t, empty: n, guildId: s } = e,
            a = r.useRef(null);
        return n
            ? (0, i.jsx)("div", { className: E._b })
            : null == t
              ? (0, i.jsx)("div", { className: E.j7, children: (0, i.jsx)(f, { className: E.s$ }) })
              : (0, i.jsx)("div", {
                    className: E.sR,
                    children: (0, i.jsx)(d.A, {
                        targetElementRef: a,
                        userId: t.id,
                        guildId: s,
                        newAnalyticsLocations: [c.A.AVATAR],
                        position: "left",
                        clickTrap: !0,
                        children: (e) =>
                            (0, i.jsx)(o.m, {
                                text: p.Ay.getName(s, void 0, t),
                                children: (0, i.jsx)(l.eu, {
                                    ...e,
                                    ref: a,
                                    src: t.getAvatarURL(s, 24),
                                    "aria-label": t.username,
                                    size: u._3.SIZE_24,
                                    className: E.pO,
                                }),
                            }),
                    }),
                });
    },
    g = (e) => {
        let {
                partySize: t,
                members: n,
                minAvatarsShown: r = 1,
                maxAvatarsShown: s = 2,
                guildId: o,
                overflowRef: l,
            } = e,
            { unknownSize: u, totalSize: c, knownSize: d } = t;
        if (c < r) return null;
        let _ = a()(n)
            .filter(h.Vq)
            .take(s)
            .map((e) => (0, i.jsx)(m, { member: e, guildId: o }, e.id))
            .value();
        for (let e = 0; e < u && _.length < s; e++) _.push((0, i.jsx)(m, { guildId: o }, `unknown-member-${e}`));
        let f = c - d - u;
        for (let e = 0; e < f && _.length < s; e++)
            _.push((0, i.jsx)(m, { empty: !0, guildId: o }, `empty-member-${e}`));
        let p = Math.max(Math.min(c - _.length, 99), 0);
        if (1 === p) {
            let e = n[s];
            _.push((0, i.jsx)(m, { member: e, guildId: o }, e.id));
        }
        return (0, i.jsx)("div", {
            className: E.iE,
            children: (0, i.jsxs)("div", {
                className: E.S3,
                children: [_, p > 1 ? (0, i.jsxs)("div", { className: E.Hi, ref: l, children: ["+", p] }) : null],
            }),
        });
    };
