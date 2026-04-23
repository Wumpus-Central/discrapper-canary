l.d(t, { A: () => x });
var a = l(627968),
    n = l(64700),
    s = l(231723),
    i = l(939249),
    r = l(408278),
    d = l(548411),
    o = l(256905),
    c = l(372684),
    u = l(530574),
    m = l(563076),
    h = l(516094),
    p = l(584794),
    f = l(429364),
    v = l(985018),
    g = l(97451);
function x(e) {
    let { transitionState: t, clip: l, onClose: x } = e,
        {
            applicationAudioEnabled: j,
            voiceAudioEnabled: b,
            soundboardAudioEnabled: C,
            cropStart: y,
            cropEnd: A,
            videoPlayerRef: N,
            videoURL: E,
            audioTracks: w,
        } = (0, f.T)(),
        k = l.type === c.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!k) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if (document.activeElement?.tagName === "INPUT" || document.activeElement?.role === "textbox") return;
            let t = N.current;
            if (null == t) return;
            let l = N.current?.videoElement;
            if (null == l) return;
            let a = (0, p.A)(l.duration, e.shiftKey),
                n = !1;
            switch (e.key) {
                case " ":
                    (n = !0), l.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (n = !0), t.seek(Math.max(y, l.currentTime - a));
                    break;
                case "ArrowRight":
                    (n = !0), t.seek(Math.min(A, l.currentTime + a));
            }
            n && (e.stopPropagation(), e.preventDefault());
        }
    }, [N, k, l.type, y, A]);
    let I = n.useMemo(() => w.filter((e) => e.trackName.includes(":voice")), [w]),
        S = n.useCallback(() => {
            (0, o.R)(
                {
                    items: [{ type: "IMAGE", url: l.thumbnail, proxyUrl: l.thumbnail, alt: l.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [l.thumbnail, l.name]);
    if (k)
        return (0, a.jsx)("div", {
            className: g.OJ,
            children:
                t !== s.ip.ENTERED
                    ? (0, a.jsx)(u.A, {})
                    : (0, a.jsx)("div", {
                          className: g.zT,
                          children: (0, a.jsx)(i.D, {
                              className: g.xS,
                              onClick: S,
                              children: (0, a.jsx)("img", { className: g.V_, src: l.thumbnail, alt: l.name ?? "" }),
                          }),
                      }),
        });
    let L = null == E || t !== s.ip.ENTERED;
    return (0, a.jsx)("div", {
        className: g.OJ,
        children: (0, a.jsxs)("div", {
            className: g.zT,
            children: [
                (0, a.jsx)("div", {
                    className: g.Gv,
                    children: (0, a.jsx)(r.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d.Z,
                        "aria-label": v.intl.string(v.t["13/7kX"]),
                        onClick: x,
                    }),
                }),
                L
                    ? (0, a.jsx)(u.A, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(m.A, {
                                  applicationAudioEnabled: j,
                                  voiceAudioEnabled: b,
                                  soundboardAudioEnabled: C,
                                  ref: N,
                                  clip: l,
                              }),
                              (0, a.jsx)(h.A, { transitionState: t, sourceURL: E, clip: l, voiceAudioTracks: I }),
                          ],
                      }),
            ],
        }),
    });
}
