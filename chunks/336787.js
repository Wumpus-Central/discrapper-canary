n.d(e, { A: () => f }), n(321073);
var s = n(627968),
    i = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(990078),
    o = n(97808),
    c = n(778712),
    u = n(793574),
    d = n(342296),
    C = n(953727);
function h(t) {
    let { width: e = 24, height: n = 24, color: i = "currentColor", ...l } = t;
    return (0, s.jsxs)("svg", {
        ...(0, C.A)(l),
        width: e,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, s.jsx)("path", {
                fill: i,
                d: "M12 14C7.289 14 4 16.467 4 20V22H20V20C20 16.467 16.711 14 12 14ZM11 19C10.447 19 10 18.553 10 18C10 17.447 10.447 17 11 17C11.553 17 12 17.447 12 18C12 18.553 11.553 19 11 19ZM14 19C13.447 19 13 18.553 13 18C13 17.447 13.447 17 14 17C14.553 17 15 17.447 15 18C15 18.553 14.553 19 14 19Z",
            }),
            (0, s.jsx)("path", {
                fill: i,
                d: "M18 6H17.91C17.432 3.167 14.967 1 12 1C9.033 1 6.568 3.167 6.09 6H6C4.896 6 4 6.896 4 8V9C4 10.104 4.896 11 6 11C6 12.102 6.897 13 8 13H16C17.104 13 18 12.102 18 11C19.104 11 20 10.104 20 9V8C20 6.896 19.104 6 18 6ZM16 10H8V6H16V10Z",
            }),
        ],
    });
}
var A = n(403362),
    T = n(562153),
    E = n(656318);
let g = (t) => {
        let { member: e, empty: n, guildId: l } = t,
            a = i.useRef(null);
        return n
            ? (0, s.jsx)("div", { className: E._b })
            : null == e
              ? (0, s.jsx)("div", { className: E.j7, children: (0, s.jsx)(h, { className: E.s$ }) })
              : (0, s.jsx)("div", {
                    className: E.sR,
                    children: (0, s.jsx)(d.A, {
                        targetElementRef: a,
                        userId: e.id,
                        guildId: l,
                        newAnalyticsLocations: [u.A.AVATAR],
                        position: "left",
                        clickTrap: !0,
                        children: (t) =>
                            (0, s.jsx)(r.m, {
                                text: T.Ay.getName(l, void 0, e),
                                children: (0, s.jsx)(o.eu, {
                                    ...t,
                                    ref: a,
                                    src: e.getAvatarURL(l, 24),
                                    "aria-label": e.username,
                                    size: c._3.SIZE_24,
                                    className: E.pO,
                                }),
                            }),
                    }),
                });
    },
    f = (t) => {
        let {
                partySize: e,
                members: n,
                minAvatarsShown: i = 1,
                maxAvatarsShown: l = 2,
                guildId: r,
                overflowRef: o,
            } = t,
            { unknownSize: c, totalSize: u, knownSize: d } = e;
        if (u < i) return null;
        let C = a()(n)
            .filter(A.Vq)
            .take(l)
            .map((t) => (0, s.jsx)(g, { member: t, guildId: r }, t.id))
            .value();
        for (let t = 0; t < c && C.length < l; t++) C.push((0, s.jsx)(g, { guildId: r }, `unknown-member-${t}`));
        let h = u - d - c;
        for (let t = 0; t < h && C.length < l; t++)
            C.push((0, s.jsx)(g, { empty: !0, guildId: r }, `empty-member-${t}`));
        let T = Math.max(Math.min(u - C.length, 99), 0);
        if (1 === T) {
            let t = n[l];
            C.push((0, s.jsx)(g, { member: t, guildId: r }, t.id));
        }
        return (0, s.jsx)("div", {
            className: E.iE,
            children: (0, s.jsxs)("div", {
                className: E.S3,
                children: [C, T > 1 ? (0, s.jsxs)("div", { className: E.Hi, ref: o, children: ["+", T] }) : null],
            }),
        });
    };
