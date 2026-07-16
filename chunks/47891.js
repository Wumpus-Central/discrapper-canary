"use strict";
n.d(t, { A: () => S }), n(667532);
var i = n(627968),
    r = n(64700),
    a = n(462887),
    s = n(38021),
    l = n(844222),
    o = n(552122),
    d = n(676279),
    c = n(607470),
    u = n(652215);
let _ = n.p + "c65e4b474b02f994.mov",
    E = n.p + "7c5b005481eed9fc.mp4",
    A = n.p + "7ba7fcf2c4710bb7.webm",
    h = n.p + "835e7a49b01c6d4c.mov",
    I = n.p + "c52c1a4c0861d954.mp4",
    f = n.p + "46b40a1f870acc70.webm";
function p(e) {
    let {
            movDark: t = _,
            movLight: n = h,
            mp4Dark: r = E,
            mp4Light: a = I,
            pngDark: s = "/assets/209a4acf5023c4c3.png",
            pngLight: l = "/assets/6f7ec9558f0b4ff5.png",
            webmDark: o = A,
            webmLight: c = f,
        } = e,
        p = (0, d.Z5)(),
        T = [(0, i.jsx)("source", { src: r, type: "video/mp4" }, "mp4"), (0, i.jsx)("img", { alt: "", src: s }, "png")],
        m = [(0, i.jsx)("source", { src: a, type: "video/mp4" }, "mp4"), (0, i.jsx)("img", { alt: "", src: l }, "png")];
    return (
        (p > 52 || -1 === p) &&
            (T.unshift((0, i.jsx)("source", { src: o, type: "video/webm" }, "webm")),
            m.unshift((0, i.jsx)("source", { src: c, type: "video/webm" }, "webm"))),
        (0, d.TM)() &&
            (T.unshift((0, i.jsx)("source", { src: t, type: "video/mp4" }, "hevc")),
            m.unshift((0, i.jsx)("source", { src: n, type: "video/mp4" }, "hevc"))),
        { [u.NJ8.DARK]: T, [u.NJ8.LIGHT]: m }
    );
}
let T = o.A.getAppSpinnerSources(),
    m = null != T ? p(T) : null,
    g = p({}),
    S = function (e) {
        let { loop: t = !0, autoPlay: n = !0, setRef: o, className: d, onReady: _ } = e,
            { theme: E } = (0, s.wR)(),
            { reducedMotion: A } = r.useContext(l.C),
            h = g;
        null != m && (h = m);
        let I = h[(0, a.M)(E) ? u.NJ8.DARK : u.NJ8.LIGHT] ?? h[u.NJ8.DARK];
        return (0, i.jsx)(
            c.A,
            {
                ref: o,
                onLoadedData: _,
                className: d,
                loop: !A.enabled && t,
                autoPlay: !A.enabled && n,
                playsInline: !0,
                "data-testid": "app-spinner",
                children: I,
            },
            E,
        );
    };
