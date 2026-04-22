"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(64700),
    s = n(663675),
    a = n(621466);
let o = (e) => {
        let {
                alt: t,
                externalRef: n,
                autoPlay: o,
                playOnHover: l,
                onPlayError: u,
                responsive: d,
                mediaLayoutType: c,
                useReducedMotion: _,
                ...f
            } = e,
            E = !_ && !l && o,
            h = i.useRef(null);
        function p() {
            l &&
                h?.current?.play()?.catch((e) => {
                    if (null != u) u(e);
                    else throw e;
                });
        }
        function m() {
            l && h?.current?.pause();
        }
        return (
            i.useLayoutEffect(
                () => () => {
                    let { current: e } = h;
                    null != e &&
                        (function (e) {
                            e.removeAttribute("src"),
                                Array.from(e.children).forEach((e) => {
                                    (0, a.vq)(e, HTMLSourceElement) &&
                                        (e.removeAttribute("src"), e.removeAttribute("type")),
                                        (0, a.vq)(e, HTMLImageElement) && e.removeAttribute("src");
                                });
                            try {
                                e.load();
                            } catch (e) {}
                        })(e);
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
                autoPlay: E,
                onMouseEnter: p,
                onMouseLeave: m,
                onFocus: p,
                onBlur: m,
                style:
                    c === s.d.MOSAIC
                        ? { width: "100%", height: "100%", maxHeight: "inherit", objectFit: "contain" }
                        : d
                          ? { maxWidth: f.width, maxHeight: f.height, width: "100%", height: "100%" }
                          : {},
                ...f,
            })
        );
    },
    l = i.forwardRef((e, t) => (0, r.jsx)(o, { ...e, externalRef: t }));
