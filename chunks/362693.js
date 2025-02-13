a.d(t, { Z: () => c });
var n = a(200651),
    l = a(192379),
    i = a(481060),
    r = a(673462),
    o = a(826078),
    s = a(917042),
    u = a(20437),
    d = a(969318);
function c(e) {
    let { isLoading: t, onDoneLoading: a, videoURL: c, audioURL: m, transitionState: p } = e,
        { videoPlayerRef: v, cropData: f, applicationAudioEnabled: h, voiceAudioEnabled: x } = (0, u.S)(),
        g = l.useCallback(() => {
            var e;
            null === (e = v.current) || void 0 === e || e.seek(f.start), a();
        }, [a, f.start, v]);
    return (
        l.useEffect(() => {
            function e(e) {
                var t, a;
                if ((null === (t = document.activeElement) || void 0 === t ? void 0 : t.tagName) === 'INPUT') return;
                let n = v.current;
                if (null == n) return;
                let l = null === (a = v.current) || void 0 === a ? void 0 : a.videoElement;
                if (null == l) return;
                let i = (0, s.Z)(l.duration, e.shiftKey),
                    r = !1;
                switch (e.key) {
                    case ' ':
                        (r = !0), l.paused ? n.play() : n.pause();
                        break;
                    case 'ArrowLeft':
                        (r = !0), n.seek(Math.max(l.currentTime - i, f.start));
                        break;
                    case 'ArrowRight':
                        (r = !0), n.seek(Math.min(l.currentTime + i, f.end));
                }
                r && (e.stopPropagation(), e.preventDefault());
            }
            return document.addEventListener('keydown', e), () => document.removeEventListener('keydown', e);
        }, [f.start, f.end, v]),
        (0, n.jsxs)('div', {
            className: d.editorPane,
            children: [
                (0, n.jsx)('div', {
                    className: d.videoSizer,
                    children: (0, n.jsx)(r.Z, {
                        applicationAudioEnabled: h,
                        voiceAudioEnabled: x,
                        ref: v,
                        audioSrc: m,
                        src: c,
                        isLoading: t,
                        onDoneLoading: g,
                        startTime: f.start,
                        endTime: f.end
                    })
                }),
                !t && p && [i.Dvm.ENTERED, i.Dvm.HIDDEN].includes(p) ? (0, n.jsx)(o.Z, { sourceURL: c }) : null
            ]
        })
    );
}
