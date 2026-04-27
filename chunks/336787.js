n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(735438),
    l = n.n(s),
    a = n(990078),
    d = n(97808),
    o = n(778712),
    _ = n(793574),
    u = n(342296),
    c = n(953727);
function E(e) {
    let { width: t = 24, height: n = 24, color: r = "currentColor", ...s } = e;
    return (0, i.jsxs)("svg", {
        ...(0, c.A)(s),
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
var C = n(403362),
    h = n(562153),
    T = n(656318);
let A = (e) => {
        let { member: t, empty: n, guildId: s } = e,
            l = r.useRef(null);
        return n
            ? (0, i.jsx)("div", { className: T._b })
            : null == t
              ? (0, i.jsx)("div", { className: T.j7, children: (0, i.jsx)(E, { className: T.s$ }) })
              : (0, i.jsx)("div", {
                    className: T.sR,
                    children: (0, i.jsx)(u.A, {
                        targetElementRef: l,
                        userId: t.id,
                        guildId: s,
                        newAnalyticsLocations: [_.A.AVATAR],
                        position: "left",
                        clickTrap: !0,
                        children: (e) =>
                            (0, i.jsx)(a.m, {
                                text: h.Ay.getName(s, void 0, t),
                                children: (0, i.jsx)(d.eu, {
                                    ...e,
                                    ref: l,
                                    src: t.getAvatarURL(s, 24),
                                    "aria-label": t.username,
                                    size: o._3.SIZE_24,
                                    className: T.pO,
                                }),
                            }),
                    }),
                });
    },
    I = (e) => {
        let {
                partySize: t,
                members: n,
                minAvatarsShown: r = 1,
                maxAvatarsShown: s = 2,
                guildId: a,
                overflowRef: d,
            } = e,
            { unknownSize: o, totalSize: _, knownSize: u } = t;
        if (_ < r) return null;
        let c = l()(n)
            .filter(C.Vq)
            .take(s)
            .map((e) => (0, i.jsx)(A, { member: e, guildId: a }, e.id))
            .value();
        for (let e = 0; e < o && c.length < s; e++) c.push((0, i.jsx)(A, { guildId: a }, `unknown-member-${e}`));
        let E = _ - u - o;
        for (let e = 0; e < E && c.length < s; e++)
            c.push((0, i.jsx)(A, { empty: !0, guildId: a }, `empty-member-${e}`));
        let h = Math.max(Math.min(_ - c.length, 99), 0);
        if (1 === h) {
            let e = n[s];
            c.push((0, i.jsx)(A, { member: e, guildId: a }, e.id));
        }
        return (0, i.jsx)("div", {
            className: T.iE,
            children: (0, i.jsxs)("div", {
                className: T.S3,
                children: [c, h > 1 ? (0, i.jsxs)("div", { className: T.Hi, ref: d, children: ["+", h] }) : null],
            }),
        });
    };
