n.d(t, {
    Ct: () => A,
    Fr: () => y,
    KY: () => O,
    v1: () => b,
}),
    n(896048);
var r,
    i,
    a,
    s,
    o,
    l,
    c,
    u,
    d,
    f,
    p,
    _ = n(214958),
    h = n.n(_);
let m = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
    g = new Set(["Android", "iOS", "Windows Phone"]),
    E =
        (null == (s = window) || null == (a = s.navigator) ? void 0 : a.platform) === "MacIntel" &&
        void 0 !== (null == (l = window) || null == (o = l.navigator) ? void 0 : o.standalone) &&
        (null == (u = window) || null == (c = u.navigator) ? void 0 : c.maxTouchPoints) > 1,
    b = m.has(null != (r = h().product) ? r : "") || E,
    y = !b && g.has(null != (i = null === h() || void 0 === h() || null == (d = h().os) ? void 0 : d.family) ? i : ""),
    O = (null === h() || void 0 === h() || null == (f = h().os) ? void 0 : f.family) === "iOS",
    A = (null === h() || void 0 === h() || null == (p = h().os) ? void 0 : p.family) === "Android";
