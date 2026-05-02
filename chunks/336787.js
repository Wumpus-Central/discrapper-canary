n.d(e, { A: () => g }), n(321073);
var s = n(627968),
    i = n(64700),
    a = n(735438),
    l = n.n(a),
    o = n(990078),
    r = n(97808),
    u = n(778712),
    c = n(793574),
    C = n(342296),
    d = n(953727);
function E(t) {
    let { width: e = 24, height: n = 24, color: i = "currentColor", ...a } = t;
    return (0, s.jsxs)("svg", {
        ...(0, d.A)(a),
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
    x = n(656318);
let I = (t) => {
        let { member: e, empty: n, guildId: a } = t,
            l = i.useRef(null);
        return n
            ? (0, s.jsx)("div", { className: x._b })
            : null == e
              ? (0, s.jsx)("div", { className: x.j7, children: (0, s.jsx)(E, { className: x.s$ }) })
              : (0, s.jsx)("div", {
                    className: x.sR,
                    children: (0, s.jsx)(C.A, {
                        targetElementRef: l,
                        userId: e.id,
                        guildId: a,
                        newAnalyticsLocations: [c.A.AVATAR],
                        position: "left",
                        clickTrap: !0,
                        children: (t) =>
                            (0, s.jsx)(o.m, {
                                text: T.Ay.getName(a, void 0, e),
                                children: (0, s.jsx)(r.eu, {
                                    ...t,
                                    ref: l,
                                    src: e.getAvatarURL(a, 24),
                                    "aria-label": e.username,
                                    size: u._3.SIZE_24,
                                    className: x.pO,
                                }),
                            }),
                    }),
                });
    },
    g = (t) => {
        let {
                partySize: e,
                members: n,
                minAvatarsShown: i = 1,
                maxAvatarsShown: a = 2,
                guildId: o,
                overflowRef: r,
            } = t,
            { unknownSize: u, totalSize: c, knownSize: C } = e;
        if (c < i) return null;
        let d = l()(n)
            .filter(A.Vq)
            .take(a)
            .map((t) => (0, s.jsx)(I, { member: t, guildId: o }, t.id))
            .value();
        for (let t = 0; t < u && d.length < a; t++) d.push((0, s.jsx)(I, { guildId: o }, `unknown-member-${t}`));
        let E = c - C - u;
        for (let t = 0; t < E && d.length < a; t++)
            d.push((0, s.jsx)(I, { empty: !0, guildId: o }, `empty-member-${t}`));
        let T = Math.max(Math.min(c - d.length, 99), 0);
        if (1 === T) {
            let t = n[a];
            d.push((0, s.jsx)(I, { member: t, guildId: o }, t.id));
        }
        return (0, s.jsx)("div", {
            className: x.iE,
            children: (0, s.jsxs)("div", {
                className: x.S3,
                children: [d, T > 1 ? (0, s.jsxs)("div", { className: x.Hi, ref: r, children: ["+", T] }) : null],
            }),
        });
    };
