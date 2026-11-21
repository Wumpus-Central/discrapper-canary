(n.d(t, { A: () => R }), n(667532));
var i = n(477900),
    r = n(582128),
    a = n(462887),
    s = n(38021),
    l = n(844222),
    o = n(552122);
let d = n.p + "85107ed86878e061.webm",
    c = n.p + "f1e8543e59963a87.mov",
    u = n.p + "6451a3d0dbc5185e.webm",
    _ = { movDark: c, movLight: n.p + "244b40e9d92b4b63.mov", webmDark: d, webmLight: u };
var E = n(676279),
    A = n(607470),
    f = n(652215);
let h = n.p + "c65e4b474b02f994.mov",
    I = n.p + "7c5b005481eed9fc.mp4",
    p = n.p + "7ba7fcf2c4710bb7.webm",
    m = n.p + "835e7a49b01c6d4c.mov",
    g = n.p + "c52c1a4c0861d954.mp4",
    T = n.p + "46b40a1f870acc70.webm";
function S(e) {
    let {
            movDark: t = h,
            movLight: n = m,
            mp4Dark: r = I,
            mp4Light: a = g,
            pngDark: s = "/assets/209a4acf5023c4c3.png",
            pngLight: l = "/assets/6f7ec9558f0b4ff5.png",
            webmDark: o = p,
            webmLight: d = T,
        } = e,
        c = (0, E.Z5)(),
        u = [(0, i.jsx)("source", { src: r, type: "video/mp4" }, "mp4"), (0, i.jsx)("img", { alt: "", src: s }, "png")],
        _ = [(0, i.jsx)("source", { src: a, type: "video/mp4" }, "mp4"), (0, i.jsx)("img", { alt: "", src: l }, "png")];
    return (
        (c > 52 || -1 === c) &&
            (u.unshift((0, i.jsx)("source", { src: o, type: "video/webm" }, "webm")),
            _.unshift((0, i.jsx)("source", { src: d, type: "video/webm" }, "webm"))),
        (0, E.TM)() &&
            (u.unshift((0, i.jsx)("source", { src: t, type: "video/mp4" }, "hevc")),
            _.unshift((0, i.jsx)("source", { src: n, type: "video/mp4" }, "hevc"))),
        { [f.NJ8.DARK]: u, [f.NJ8.LIGHT]: _ }
    );
}
let N = o.A.isHolidayHappening() ? _ : null,
    C = null != N ? S(N) : null,
    O = S({}),
    R = function (e) {
        let { loop: t = !0, autoPlay: n = !0, setRef: o, className: d, onReady: c } = e,
            { theme: u } = (0, s.wR)(),
            { reducedMotion: _ } = r.useContext(l.C),
            E = O;
        null != C && (E = C);
        let h = E[(0, a.M)(u) ? f.NJ8.DARK : f.NJ8.LIGHT] ?? E[f.NJ8.DARK];
        return (0, i.jsx)(
            A.A,
            {
                ref: o,
                onLoadedData: c,
                className: d,
                loop: !_.enabled && t,
                autoPlay: !_.enabled && n,
                playsInline: !0,
                "data-testid": "app-spinner",
                children: h,
            },
            u,
        );
    };
