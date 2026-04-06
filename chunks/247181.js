l.d(t, { A: () => x });
var a = l(627968),
    n = l(64700),
    i = l(397927),
    s = l(256905),
    r = l(372684),
    o = l(530574),
    d = l(563076),
    c = l(516094),
    u = l(584794),
    m = l(429364),
    h = l(985018),
    p = l(14363);
function x(e) {
    let { transitionState: t, clip: l, onClose: x } = e,
        {
            applicationAudioEnabled: f,
            voiceAudioEnabled: g,
            soundboardAudioEnabled: v,
            cropStart: j,
            cropEnd: b,
            videoPlayerRef: C,
            videoURL: y,
            audioTracks: N,
        } = (0, m.T)(),
        A = l.type === r.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!A) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if (document.activeElement?.tagName === "INPUT" || document.activeElement?.role === "textbox") return;
            let t = C.current;
            if (null == t) return;
            let l = C.current?.videoElement;
            if (null == l) return;
            let a = (0, u.A)(l.duration, e.shiftKey),
                n = !1;
            switch (e.key) {
                case " ":
                    (n = !0), l.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (n = !0), t.seek(Math.max(j, l.currentTime - a));
                    break;
                case "ArrowRight":
                    (n = !0), t.seek(Math.min(b, l.currentTime + a));
            }
            n && (e.stopPropagation(), e.preventDefault());
        }
    }, [C, A, l.type, j, b]);
    let E = n.useMemo(() => N.filter((e) => e.trackName.includes(":voice")), [N]),
        k = n.useCallback(() => {
            (0, s.R)(
                {
                    items: [{ type: "IMAGE", url: l.thumbnail, proxyUrl: l.thumbnail, alt: l.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [l.thumbnail, l.name]);
    if (A)
        return (0, a.jsx)("div", {
            className: p.OJ,
            children:
                t !== i.ip4.ENTERED
                    ? (0, a.jsx)(o.A, {})
                    : (0, a.jsx)("div", {
                          className: p.zT,
                          children: (0, a.jsx)(i.DUT, {
                              className: p.xS,
                              onClick: k,
                              children: (0, a.jsx)("img", { className: p.V_, src: l.thumbnail, alt: l.name ?? "" }),
                          }),
                      }),
        });
    let I = null == y || t !== i.ip4.ENTERED;
    return (0, a.jsx)("div", {
        className: p.OJ,
        children: (0, a.jsxs)("div", {
            className: p.zT,
            children: [
                (0, a.jsx)("div", {
                    className: p.Gv,
                    children: (0, a.jsx)(i.K0, {
                        size: "sm",
                        variant: "icon-only",
                        icon: i.Zge,
                        "aria-label": h.intl.string(h.t["13/7kX"]),
                        onClick: x,
                    }),
                }),
                I
                    ? (0, a.jsx)(o.A, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(d.A, {
                                  applicationAudioEnabled: f,
                                  voiceAudioEnabled: g,
                                  soundboardAudioEnabled: v,
                                  ref: C,
                                  clip: l,
                              }),
                              (0, a.jsx)(c.A, { transitionState: t, sourceURL: y, clip: l, voiceAudioTracks: E }),
                          ],
                      }),
            ],
        }),
    });
}
