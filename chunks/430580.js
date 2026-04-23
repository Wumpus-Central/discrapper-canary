l.d(t, { A: () => b });
var n = l(627968),
    a = l(64700),
    i = l(310784),
    r = l.n(i),
    s = l(311907),
    o = l(775602),
    d = l(654107),
    c = l(871751),
    u = l(619517),
    _ = l(652176),
    m = l(172079);
let h = (e) => (0, _.$o)({ ...e, className: m.tN, mediaPlayerClassName: m.yf }),
    p = (e) => (0, n.jsx)(u.Ay, { ...e });
function b(e) {
    let { item: t, isMuted: l, className: i, alt: u = "" } = e,
        b = (function (e) {
            let t = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [l] = (0, d.rh)(t, "#000000");
            return a.useMemo(() => {
                if (null == t || "#000000" === l) return;
                let e = r()(l).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [t, l]);
        })(t),
        f = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        [x, g] = a.useState(null),
        [C, v] = a.useState(t);
    C !== t && (v(t), C?.type === "image" && t?.type === "image" && C.src !== t.src ? g(C.src) : g(null));
    let A = a.useCallback(() => g(null), []);
    if (null == t) return null;
    let j = {
        background: b,
        backgroundImage: null != t.backgroundSrc ? `url(${t.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === t.type
        ? (0, n.jsx)("div", {
              className: i ?? m.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${m.h4} ${m.nR}`,
                      style: j,
                      children: (0, n.jsx)(
                          c.rr,
                          {
                              href: null,
                              thumbnail: { url: t.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: t.src, proxyURL: t.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: m.Ki,
                              volume: 1,
                              autoMute: l,
                              autoPlay: !0,
                              renderVideoComponent: h,
                              renderImageComponent: p,
                              renderLinkComponent: _.bU,
                          },
                          `${t.src}-${l ? "muted" : "unmuted"}`,
                      ),
                  },
                  t.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: i ?? m.kL,
              children: (0, n.jsxs)("div", {
                  className: m.h4,
                  style: j,
                  children: [
                      (0, n.jsx)("img", { src: t.src, alt: u, className: m.Sl }, t.src),
                      null != x && !f && (0, n.jsx)("img", { src: x, alt: "", className: m.Ve, onAnimationEnd: A }, x),
                  ],
              }),
          });
}
