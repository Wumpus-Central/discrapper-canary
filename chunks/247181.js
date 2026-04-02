a.d(t, { A: () => h });
var l = a(627968),
    n = a(64700),
    i = a(397927),
    s = a(256905),
    r = a(372684),
    o = a(563076),
    u = a(516094),
    d = a(584794),
    c = a(429364),
    m = a(14363);
function h(e) {
    let { transitionState: t, clip: a } = e,
        {
            applicationAudioEnabled: h,
            voiceAudioEnabled: p,
            soundboardAudioEnabled: f,
            cropStart: g,
            cropEnd: v,
            videoPlayerRef: x,
            videoURL: b,
            audioTracks: j,
        } = (0, c.T)(),
        _ = a.type === r.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!_) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if (document.activeElement?.tagName === "INPUT") return;
            let t = x.current;
            if (null == t) return;
            let a = x.current?.videoElement;
            if (null == a) return;
            let l = (0, d.A)(a.duration, e.shiftKey),
                n = !1;
            switch (e.key) {
                case " ":
                    (n = !0), a.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (n = !0), t.seek(Math.max(g, a.currentTime - l));
                    break;
                case "ArrowRight":
                    (n = !0), t.seek(Math.min(v, a.currentTime + l));
            }
            n && (e.stopPropagation(), e.preventDefault());
        }
    }, [x, _, a.type, g, v]);
    let C = n.useMemo(() => j.filter((e) => e.trackName.includes(":voice")), [j]),
        k = n.useCallback(() => {
            (0, s.R)(
                {
                    items: [{ type: "IMAGE", url: a.thumbnail, proxyUrl: a.thumbnail, alt: a.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [a.thumbnail, a.name]);
    if (_)
        return (0, l.jsx)("div", {
            className: m.OJ,
            children:
                t !== i.ip4.ENTERED
                    ? (0, l.jsx)("div", { className: m.dc, children: (0, l.jsx)(i.y$y, {}) })
                    : (0, l.jsx)("div", {
                          className: m.zT,
                          children: (0, l.jsx)(i.DUT, {
                              className: m.xS,
                              onClick: k,
                              children: (0, l.jsx)("img", { className: m.V_, src: a.thumbnail, alt: a.name ?? "" }),
                          }),
                      }),
        });
    let y = null == b || t !== i.ip4.ENTERED;
    return (0, l.jsx)("div", {
        className: m.OJ,
        children: y
            ? (0, l.jsx)("div", { className: m.dc, children: (0, l.jsx)(i.y$y, {}) })
            : (0, l.jsxs)("div", {
                  className: m.zT,
                  children: [
                      (0, l.jsx)(o.A, {
                          applicationAudioEnabled: h,
                          voiceAudioEnabled: p,
                          soundboardAudioEnabled: f,
                          ref: x,
                          clip: a,
                      }),
                      (0, l.jsx)(u.A, { sourceURL: b, clip: a, voiceAudioTracks: C }),
                  ],
              }),
    });
}
