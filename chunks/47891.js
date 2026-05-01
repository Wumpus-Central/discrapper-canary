"use strict";
n.d(t, { A: () => S }), n(667532);
var i = n(627968),
    r = n(64700),
    s = n(462887),
    a = n(38021),
    o = n(844222),
    l = n(552122),
    u = n(676279),
    c = n(607470),
    d = n(652215);
let _ = n.p + "c65e4b474b02f994.mov",
    f = n.p + "7c5b005481eed9fc.mp4",
    h = n.p + "7ba7fcf2c4710bb7.webm",
    p = n.p + "835e7a49b01c6d4c.mov",
    E = n.p + "c52c1a4c0861d954.mp4",
    m = n.p + "46b40a1f870acc70.webm";
function g(e) {
    let {
            movDark: t = _,
            movLight: n = p,
            mp4Dark: r = f,
            mp4Light: s = E,
            pngDark: a = "/assets/209a4acf5023c4c3.png",
            pngLight: o = "/assets/6f7ec9558f0b4ff5.png",
            webmDark: l = h,
            webmLight: c = m,
        } = e,
        g = (0, u.Z5)(),
        A = [(0, i.jsx)("source", { src: r, type: "video/mp4" }, "mp4"), (0, i.jsx)("img", { alt: "", src: a }, "png")],
        I = [(0, i.jsx)("source", { src: s, type: "video/mp4" }, "mp4"), (0, i.jsx)("img", { alt: "", src: o }, "png")];
    return (
        (g > 52 || -1 === g) &&
            (A.unshift((0, i.jsx)("source", { src: l, type: "video/webm" }, "webm")),
            I.unshift((0, i.jsx)("source", { src: c, type: "video/webm" }, "webm"))),
        (0, u.TM)() &&
            (A.unshift((0, i.jsx)("source", { src: t, type: "video/mp4" }, "hevc")),
            I.unshift((0, i.jsx)("source", { src: n, type: "video/mp4" }, "hevc"))),
        { [d.NJ8.DARK]: A, [d.NJ8.LIGHT]: I }
    );
}
let A = l.A.getAppSpinnerSources(),
    I = null != A ? g(A) : null,
    T = g({}),
    S = (e) => {
        let { loop: t = !0, autoPlay: n = !0, setRef: l, className: u, onReady: _ } = e,
            { theme: f } = (0, a.wR)(),
            { reducedMotion: h } = r.useContext(o.C),
            p = T;
        null != I && (p = I);
        let E = p[(0, s.M)(f) ? d.NJ8.DARK : d.NJ8.LIGHT] ?? p[d.NJ8.DARK];
        return (0, i.jsx)(
            c.A,
            {
                ref: l,
                onLoadedData: _,
                className: u,
                loop: !h.enabled && t,
                autoPlay: !h.enabled && n,
                playsInline: !0,
                "data-testid": "app-spinner",
                children: E,
            },
            f,
        );
    };
