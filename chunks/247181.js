l.d(t, { A: () => x });
var n = l(627968),
    a = l(64700),
    i = l(621466),
    s = l(231723),
    r = l(939249),
    c = l(256905),
    o = l(372684),
    u = l(530574),
    d = l(675747),
    m = l(584794),
    h = l(609308),
    f = l(362081),
    p = l(97451);
function x(e) {
    let { transitionState: t } = e,
        { cropStart: l, cropEnd: x, videoPlayerRef: v, videoURL: g, audioTracks: j, clip: b } = (0, f.T)(),
        y = b.type === o.nQ.SCREENSHOT;
    a.useEffect(() => {
        if (!y) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = v.current;
            if (null == t) return;
            let n = v.current?.videoElement;
            if (null == n) return;
            let a = (0, m.A)(n.duration, e.shiftKey),
                s = !1;
            switch (e.key) {
                case " ":
                    (s = !0), n.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (s = !0), t.seek(Math.max(l, n.currentTime - a));
                    break;
                case "ArrowRight":
                    (s = !0), t.seek(Math.min(x, n.currentTime + a));
            }
            s && (e.stopPropagation(), e.preventDefault());
        }
    }, [v, y, b.type, l, x]);
    let C = a.useMemo(() => j.filter((e) => e.trackName.includes(":voice")), [j]),
        E = a.useCallback(() => {
            (0, c.R)(
                {
                    items: [{ type: "IMAGE", url: b.thumbnail, proxyUrl: b.thumbnail, alt: b.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [b.thumbnail, b.name]);
    if (y)
        return (0, n.jsx)("div", {
            className: p.OJ,
            children:
                t !== s.ip.ENTERED
                    ? (0, n.jsx)(u.A, {})
                    : (0, n.jsx)("div", {
                          className: p.zT,
                          children: (0, n.jsx)(r.D, {
                              className: p.xS,
                              onClick: E,
                              children: (0, n.jsx)("img", { className: p.V_, src: b.thumbnail, alt: b.name ?? "" }),
                          }),
                      }),
        });
    let A = null == g || t !== s.ip.ENTERED;
    return (0, n.jsx)("div", {
        className: p.OJ,
        children: (0, n.jsx)("div", {
            className: p.zT,
            children: A
                ? (0, n.jsx)(u.A, {})
                : (0, n.jsxs)("div", {
                      className: p.Xf,
                      children: [
                          (0, n.jsx)(d.A, { ref: v }),
                          (0, n.jsx)(h.A, { transitionState: t, voiceAudioTracks: C }),
                      ],
                  }),
        }),
    });
}
