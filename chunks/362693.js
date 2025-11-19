n.d(t, { Z: () => h });
var l = n(54381),
    a = n(473749),
    i = n(481060),
    r = n(312097),
    s = n(894694),
    o = n(673462),
    u = n(826078),
    c = n(917042),
    d = n(115559),
    m = n(121937);
function h(e) {
    let { transitionState: t, clip: n } = e,
        {
            applicationAudioEnabled: h,
            voiceAudioEnabled: p,
            soundboardAudioEnabled: f,
            cropStart: v,
            cropEnd: g,
            videoPlayerRef: b,
            videoURL: j,
            audioTracks: x,
        } = (0, d.D)(),
        y = n.type === s.NJ.SCREENSHOT;
    a.useEffect(() => {
        if (!y) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            var t, n;
            if ((null == (t = document.activeElement) ? void 0 : t.tagName) === "INPUT") return;
            let l = b.current;
            if (null == l) return;
            let a = null == (n = b.current) ? void 0 : n.videoElement;
            if (null == a) return;
            let i = (0, c.Z)(a.duration, e.shiftKey),
                r = !1;
            switch (e.key) {
                case " ":
                    (r = !0), a.paused ? l.play() : l.pause();
                    break;
                case "ArrowLeft":
                    (r = !0), l.seek(Math.max(v, a.currentTime - i));
                    break;
                case "ArrowRight":
                    (r = !0), l.seek(Math.min(g, a.currentTime + i));
            }
            r && (e.stopPropagation(), e.preventDefault());
        }
    }, [b, y, n.type, v, g]);
    let C = a.useMemo(() => x.filter((e) => e.trackName.includes(":voice")), [x]),
        k = a.useCallback(() => {
            var e;
            (0, r.K)(
                {
                    items: [
                        {
                            type: "IMAGE",
                            url: n.thumbnail,
                            proxyUrl: n.thumbnail,
                            alt: null != (e = n.name) ? e : "",
                        },
                    ],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [n.thumbnail, n.name]);
    if (y) {
        var N;
        return (0, l.jsx)("div", {
            className: m.editorPane,
            children:
                t !== i.Dvm.ENTERED
                    ? (0, l.jsx)("div", {
                          className: m.spinnerContainer,
                          children: (0, l.jsx)(i.$jN, {}),
                      })
                    : (0, l.jsx)("div", {
                          className: m.editorContent,
                          children: (0, l.jsx)(i.P3F, {
                              className: m.videoSizer,
                              onClick: k,
                              children: (0, l.jsx)("img", {
                                  className: m.displayScreenshot,
                                  src: n.thumbnail,
                                  alt: null != (N = n.name) ? N : "",
                              }),
                          }),
                      }),
        });
    }
    let E = null == j || 0 === x.length || t !== i.Dvm.ENTERED;
    return (0, l.jsx)("div", {
        className: m.editorPane,
        children: E
            ? (0, l.jsx)("div", {
                  className: m.spinnerContainer,
                  children: (0, l.jsx)(i.$jN, {}),
              })
            : (0, l.jsxs)("div", {
                  className: m.editorContent,
                  children: [
                      (0, l.jsx)(o.Z, {
                          applicationAudioEnabled: h,
                          voiceAudioEnabled: p,
                          soundboardAudioEnabled: f,
                          ref: b,
                          clip: n,
                      }),
                      (0, l.jsx)(u.Z, {
                          sourceURL: j,
                          clip: n,
                          voiceAudioTracks: C,
                      }),
                  ],
              }),
    });
}
