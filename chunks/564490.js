l.d(t, { A: () => b });
var n = l(627968),
    a = l(64700),
    i = l(621466),
    s = l(231723),
    r = l(939249),
    c = l(256905),
    o = l(372684),
    u = l(858174),
    d = l(530574),
    m = l(675747),
    h = l(362081),
    f = l(159369);
let p = { [o.yz.ORIGINAL]: null, [o.yz.PORTRAIT_9_16]: 9 / 16, [o.yz.LANDSCAPE_16_9]: 16 / 9 };
function x() {
    let { cropPreset: e, videoPlayerRef: t } = (0, h.T)(),
        l = a.useRef(null),
        i = a.useRef(null);
    return (
        a.useEffect(() => {
            let n = l.current;
            if (null == n) return;
            let a = () => {
                let l = n.parentElement,
                    a = i.current;
                if (null == l || null == a) return;
                let s = l.getBoundingClientRect(),
                    r = (t.current?.videoElement ?? l).getBoundingClientRect(),
                    c = r.left - s.left,
                    o = r.top - s.top,
                    u = p[e],
                    d = c,
                    m = o,
                    h = r.width,
                    f = r.height;
                null != u &&
                    ((f = (h = Math.min(r.width, r.height * u)) / u),
                    (d = c + (r.width - h) / 2),
                    (m = o + (r.height - f) / 2)),
                    (a.style.left = `${d}px`),
                    (a.style.top = `${m}px`),
                    (a.style.width = `${h}px`),
                    (a.style.height = `${f}px`);
            };
            a();
            let s = new ResizeObserver(a);
            s.observe(n.parentElement ?? n);
            let r = t.current?.videoElement;
            return (
                null != r && s.observe(r),
                window.addEventListener("resize", a),
                () => {
                    s.disconnect(), window.removeEventListener("resize", a);
                }
            );
        }, [e, t]),
        (0, n.jsx)("div", { ref: l, className: f.pC, children: (0, n.jsx)("div", { ref: i, className: f.E$ }) })
    );
}
var v = l(584794),
    g = l(609308),
    j = l(594731);
function b(e) {
    let { transitionState: t } = e,
        {
            cropStart: l,
            cropEnd: p,
            videoPlayerRef: b,
            videoURL: y,
            audioTracks: C,
            clip: E,
            activeTool: A,
            cropPreset: N,
            videoDimensions: k,
        } = (0, h.T)(),
        w = E.type === o.nQ.SCREENSHOT;
    a.useEffect(() => {
        if (!w) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = b.current;
            if (null == t) return;
            let n = b.current?.videoElement;
            if (null == n) return;
            let a = (0, v.A)(n.duration, e.shiftKey),
                s = !1;
            switch (e.key) {
                case " ":
                    (s = !0), n.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (s = !0), t.seek(Math.max(l, n.currentTime - a));
                    break;
                case "ArrowRight":
                    (s = !0), t.seek(Math.min(p, n.currentTime + a));
            }
            s && (e.stopPropagation(), e.preventDefault());
        }
    }, [b, w, E.type, l, p]);
    let R = a.useMemo(() => C.filter((e) => e.trackName.includes(":voice")), [C]),
        T = a.useCallback(() => {
            (0, c.R)(
                {
                    items: [{ type: "IMAGE", url: E.thumbnail, proxyUrl: E.thumbnail, alt: E.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [E.thumbnail, E.name]),
        L =
            "" !== E.thumbnail
                ? (0, n.jsx)("img", { className: f.Tp, src: E.thumbnail, alt: "", "aria-hidden": !0 })
                : null;
    if (w)
        return (0, n.jsxs)("div", {
            className: f.OJ,
            children: [
                L,
                t !== s.ip.ENTERED
                    ? (0, n.jsx)(d.A, {})
                    : (0, n.jsx)("div", {
                          className: j.zT,
                          children: (0, n.jsx)(r.D, {
                              className: j.xS,
                              onClick: T,
                              children: (0, n.jsx)("img", { className: j.V_, src: E.thumbnail, alt: E.name ?? "" }),
                          }),
                      }),
            ],
        });
    let I = null == y || t !== s.ip.ENTERED,
        O = E.type === o.nQ.VOICE_CLIP,
        D = A === u.Y.CROP,
        M = null != k ? k.width / k.height : null,
        _ = D
            ? M
            : (function (e, t) {
                  switch (e) {
                      case o.yz.PORTRAIT_9_16:
                          return 9 / 16;
                      case o.yz.LANDSCAPE_16_9:
                          return 16 / 9;
                      case o.yz.ORIGINAL:
                      default:
                          return t;
                  }
              })(N, M);
    return (0, n.jsxs)("div", {
        className: f.OJ,
        children: [
            L,
            (0, n.jsx)("div", {
                className: f.zT,
                children: I
                    ? (0, n.jsx)(d.A, {})
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: f.x3,
                                  children: (0, n.jsx)(m.A, {
                                      ref: b,
                                      cropFraming: !O,
                                      frameAspectRatio: _,
                                      overlay: D && !O ? (0, n.jsx)(x, {}) : null,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: f.fL,
                                  children: (0, n.jsx)(g.A, { transitionState: t, voiceAudioTracks: R }),
                              }),
                          ],
                      }),
            }),
        ],
    });
}
