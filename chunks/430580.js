n.d(t, { A: () => h });
var l = n(627968),
    a = n(64700),
    s = n(310784),
    i = n.n(s),
    r = n(654107),
    o = n(871751),
    c = n(619517),
    d = n(652176),
    u = n(172079);
let _ = (e) => (0, d.$o)({ ...e, className: u.tN, mediaPlayerClassName: u.yf }),
    m = (e) => (0, l.jsx)(c.Ay, { ...e });
function h(e) {
    let { item: t, isMuted: n, className: s } = e,
        c = (function (e) {
            let t = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [n] = (0, r.rh)(t, "#000000");
            return a.useMemo(() => {
                if (null == t || "#000000" === n) return;
                let e = i()(n).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [t, n]);
        })(t);
    if (null == t) return null;
    let h = {
        background: c,
        backgroundImage: null != t.backgroundSrc ? `url(${t.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === t.type
        ? (0, l.jsx)("div", {
              className: s ?? u.kL,
              children: (0, l.jsx)("div", {
                  className: u.h4,
                  style: h,
                  children: (0, l.jsx)(
                      o.rr,
                      {
                          href: null,
                          thumbnail: { url: t.videoThumbnailSrc, width: 747, height: 560 },
                          video: { url: t.src, proxyURL: t.src, width: 747, height: 560 },
                          provider: void 0,
                          allowFullScreen: !0,
                          maxHeight: 560,
                          maxWidth: 747,
                          playable: !0,
                          className: u.Ki,
                          volume: 1,
                          autoMute: n,
                          autoPlay: !0,
                          renderVideoComponent: _,
                          renderImageComponent: m,
                          renderLinkComponent: d.bU,
                      },
                      `${t.src}-${n ? "muted" : "unmuted"}`,
                  ),
              }),
          })
        : (0, l.jsx)("div", {
              className: s ?? u.kL,
              children: (0, l.jsx)("div", {
                  className: u.h4,
                  style: h,
                  children: (0, l.jsx)("img", { src: t.src, alt: "", className: u.Sl }),
              }),
          });
}
