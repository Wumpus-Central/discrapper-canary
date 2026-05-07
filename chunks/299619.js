"use strict";
n.d(t, { A: () => l });
var i = n(627968),
    r = n(64700),
    s = n(663675),
    a = n(621466);
let o = (e) => {
        let {
                alt: t,
                externalRef: n,
                autoPlay: o,
                playOnHover: l,
                onPlayError: u,
                responsive: c,
                mediaLayoutType: d,
                useReducedMotion: _,
                ...f
            } = e,
            h = !_ && !l && o,
            p = r.useRef(null);
        function E() {
            l &&
                p?.current?.play()?.catch((e) => {
                    if (null != u) u(e);
                    else throw e;
                });
        }
        function m() {
            l && p?.current?.pause();
        }
        r.useLayoutEffect(
            () => () => {
                let { current: e } = p;
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
            r.useLayoutEffect(
                () => (
                    "function" == typeof n ? (n(null), n(p.current)) : null != n && (n.current = p.current),
                    () => {
                        "function" == typeof n ? n(null) : null != n && (n.current = null);
                    }
                ),
                [n, p],
            );
        let g = f.tabIndex ?? (!0 === f.controls ? 0 : -1);
        return (0, i.jsx)("video", {
            "aria-label": t,
            ref: p,
            autoPlay: h,
            onMouseEnter: E,
            onMouseLeave: m,
            onFocus: E,
            onBlur: m,
            style:
                d === s.d.MOSAIC
                    ? { width: "100%", height: "100%", maxHeight: "inherit", objectFit: "contain" }
                    : c
                      ? { maxWidth: f.width, maxHeight: f.height, width: "100%", height: "100%" }
                      : {},
            tabIndex: g,
            ...f,
        });
    },
    l = r.forwardRef((e, t) => (0, i.jsx)(o, { ...e, externalRef: t }));
