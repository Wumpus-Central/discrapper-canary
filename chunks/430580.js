l.d(t, { A: () => f });
var n = l(627968),
    a = l(64700),
    s = l(310784),
    i = l.n(s),
    r = l(311907),
    o = l(775602),
    c = l(654107),
    d = l(871751),
    u = l(619517),
    _ = l(652176),
    m = l(172079);
let h = (e) => (0, _.$o)({ ...e, className: m.tN, mediaPlayerClassName: m.yf }),
    x = (e) => (0, n.jsx)(u.Ay, { ...e });
function f(e) {
    let { item: t, isMuted: l, className: s, alt: u = "" } = e,
        f = (function (e) {
            let t = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [l] = (0, c.rh)(t, "#000000");
            return a.useMemo(() => {
                if (null == t || "#000000" === l) return;
                let e = i()(l).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [t, l]);
        })(t),
        p = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        [g, b] = a.useState(null),
        [C, j] = a.useState(t);
    C !== t && (j(t), C?.type === "image" && t?.type === "image" && C.src !== t.src ? b(C.src) : b(null));
    let v = a.useCallback(() => b(null), []);
    if (null == t) return null;
    let A = {
        background: f,
        backgroundImage: null != t.backgroundSrc ? `url(${t.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === t.type
        ? (0, n.jsx)("div", {
              className: s ?? m.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${m.h4} ${m.nR}`,
                      style: A,
                      children: (0, n.jsx)(
                          d.rr,
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
                              renderImageComponent: x,
                              renderLinkComponent: _.bU,
                          },
                          `${t.src}-${l ? "muted" : "unmuted"}`,
                      ),
                  },
                  t.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: s ?? m.kL,
              children: (0, n.jsxs)("div", {
                  className: m.h4,
                  style: A,
                  children: [
                      (0, n.jsx)("img", { src: t.src, alt: u, className: m.Sl }, t.src),
                      null != g && !p && (0, n.jsx)("img", { src: g, alt: "", className: m.Ve, onAnimationEnd: v }, g),
                  ],
              }),
          });
}
