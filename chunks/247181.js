l.d(t, { A: () => h });
var a = l(627968),
    n = l(64700),
    s = l(397927),
    i = l(256905),
    r = l(372684),
    o = l(563076),
    u = l(516094),
    c = l(584794),
    d = l(429364),
    m = l(889904);
function h(e) {
    let { transitionState: t, clip: l } = e,
        {
            applicationAudioEnabled: h,
            voiceAudioEnabled: p,
            soundboardAudioEnabled: f,
            cropStart: g,
            cropEnd: v,
            videoPlayerRef: x,
            videoURL: b,
            audioTracks: j,
        } = (0, d.T)(),
        C = l.type === r.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!C) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if (document.activeElement?.tagName === "INPUT") return;
            let t = x.current;
            if (null == t) return;
            let l = x.current?.videoElement;
            if (null == l) return;
            let a = (0, c.A)(l.duration, e.shiftKey),
                n = !1;
            switch (e.key) {
                case " ":
                    (n = !0), l.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (n = !0), t.seek(Math.max(g, l.currentTime - a));
                    break;
                case "ArrowRight":
                    (n = !0), t.seek(Math.min(v, l.currentTime + a));
            }
            n && (e.stopPropagation(), e.preventDefault());
        }
    }, [x, C, l.type, g, v]);
    let N = n.useMemo(() => j.filter((e) => e.trackName.includes(":voice")), [j]),
        k = n.useCallback(() => {
            (0, i.R)(
                {
                    items: [{ type: "IMAGE", url: l.thumbnail, proxyUrl: l.thumbnail, alt: l.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [l.thumbnail, l.name]);
    if (C)
        return (0, a.jsx)("div", {
            className: m.OJ,
            children:
                t !== s.ip4.ENTERED
                    ? (0, a.jsx)("div", { className: m.dc, children: (0, a.jsx)(s.y$y, {}) })
                    : (0, a.jsx)("div", {
                          className: m.zT,
                          children: (0, a.jsx)(s.DUT, {
                              className: m.xS,
                              onClick: k,
                              children: (0, a.jsx)("img", { className: m.V_, src: l.thumbnail, alt: l.name ?? "" }),
                          }),
                      }),
        });
    let y = null == b || 0 === j.length || t !== s.ip4.ENTERED;
    return (0, a.jsx)("div", {
        className: m.OJ,
        children: y
            ? (0, a.jsx)("div", { className: m.dc, children: (0, a.jsx)(s.y$y, {}) })
            : (0, a.jsxs)("div", {
                  className: m.zT,
                  children: [
                      (0, a.jsx)(o.A, {
                          applicationAudioEnabled: h,
                          voiceAudioEnabled: p,
                          soundboardAudioEnabled: f,
                          ref: x,
                          clip: l,
                      }),
                      (0, a.jsx)(u.A, { sourceURL: b, clip: l, voiceAudioTracks: N }),
                  ],
              }),
    });
}
