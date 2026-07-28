"use strict";
n.d(t, { A: () => o });
var i = n(477900),
    r = n(582128),
    a = n(663675),
    s = n(621466);
let l = (e) => {
        let {
                alt: t,
                externalRef: n,
                autoPlay: l,
                playOnHover: o,
                onPlayError: d,
                responsive: c,
                mediaLayoutType: u,
                useReducedMotion: _,
                ...E
            } = e,
            A = !_ && !o && l,
            h = r.useRef(null);
        function I() {
            o &&
                h?.current?.play()?.catch((e) => {
                    if (null != d) d(e);
                    else throw e;
                });
        }
        function f() {
            o && h?.current?.pause();
        }
        r.useLayoutEffect(
            () => () => {
                let { current: e } = h;
                null != e &&
                    (function (e) {
                        e.removeAttribute("src"),
                            Array.from(e.children).forEach((e) => {
                                (0, s.vq)(e, HTMLSourceElement) &&
                                    (e.removeAttribute("src"), e.removeAttribute("type")),
                                    (0, s.vq)(e, HTMLImageElement) && e.removeAttribute("src");
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
                    "function" == typeof n ? (n(null), n(h.current)) : null != n && (n.current = h.current),
                    () => {
                        "function" == typeof n ? n(null) : null != n && (n.current = null);
                    }
                ),
                [n, h],
            );
        let p = E.tabIndex ?? (!0 === E.controls ? 0 : -1);
        return (0, i.jsx)("video", {
            "aria-label": t,
            ref: h,
            autoPlay: A,
            onMouseEnter: I,
            onMouseLeave: f,
            onFocus: I,
            onBlur: f,
            style:
                u === a.d.MOSAIC
                    ? { width: "100%", height: "100%", maxHeight: "inherit", objectFit: "contain" }
                    : c
                      ? { maxWidth: E.width, maxHeight: E.height, width: "100%", height: "100%" }
                      : {},
            tabIndex: p,
            ...E,
        });
    },
    o = r.forwardRef((e, t) => (0, i.jsx)(l, { ...e, externalRef: t }));
