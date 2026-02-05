"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(663675),
    s = n(621466);
function o(e) {
    e.removeAttribute("src"),
        Array.from(e.children).forEach((e) => {
            (0, s.vq)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")),
                (0, s.vq)(e, HTMLImageElement) && e.removeAttribute("src");
        });
    try {
        e.load();
    } catch (e) {}
}
let l = (e) => {
        let {
                alt: t,
                externalRef: n,
                autoPlay: s,
                playOnHover: l,
                onPlayError: u,
                responsive: c,
                mediaLayoutType: d,
                useReducedMotion: _,
                ...f
            } = e,
            p = !_ && !l && s,
            h = i.useRef(null);
        function m() {
            l &&
                h?.current?.play()?.catch((e) => {
                    if (null != u) u(e);
                    else throw e;
                });
        }
        function g() {
            l && h?.current?.pause();
        }
        function E() {
            return d === a.d.MOSAIC
                ? { width: "100%", height: "100%", maxHeight: "inherit", objectFit: "contain" }
                : c
                  ? A()
                  : {};
        }
        function A() {
            return { maxWidth: f.width, maxHeight: f.height, width: "100%", height: "100%" };
        }
        return (
            i.useLayoutEffect(
                () => () => {
                    let { current: e } = h;
                    null != e && o(e);
                },
                [],
            ),
            i.useLayoutEffect(
                () => (
                    "function" == typeof n ? (n(null), n(h.current)) : null != n && (n.current = h.current),
                    () => {
                        "function" == typeof n ? n(null) : null != n && (n.current = null);
                    }
                ),
                [n, h],
            ),
            (0, r.jsx)("video", {
                "aria-label": t,
                ref: h,
                autoPlay: p,
                onMouseEnter: m,
                onMouseLeave: g,
                onFocus: m,
                onBlur: g,
                style: E(),
                ...f,
            })
        );
    },
    u = i.forwardRef((e, t) => (0, r.jsx)(l, { ...e, externalRef: t }));
