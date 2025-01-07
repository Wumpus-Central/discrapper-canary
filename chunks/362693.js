n.d(t, {
    Z: function () {
        return c;
    }
});
var a = n(200651),
    l = n(192379),
    i = n(481060),
    r = n(673462),
    o = n(826078),
    s = n(917042),
    u = n(20437),
    d = n(927932);
function c(e) {
    let { isLoading: t, onDoneLoading: n, videoURL: c, audioURL: m, transitionState: p } = e,
        { videoPlayerRef: v, cropData: f, applicationAudioEnabled: b, voiceAudioEnabled: h } = (0, u.S)(),
        x = l.useCallback(() => {
            var e;
            null === (e = v.current) || void 0 === e || e.seek(f.start), n();
        }, [n, f.start, v]);
    return (
        l.useEffect(() => {
            function e(e) {
                var t, n;
                if ((null === (t = document.activeElement) || void 0 === t ? void 0 : t.tagName) === 'INPUT') return;
                let a = v.current;
                if (null == a) return;
                let l = null === (n = v.current) || void 0 === n ? void 0 : n.videoElement;
                if (null == l) return;
                let i = (0, s.Z)(l.duration, e.shiftKey),
                    r = !1;
                switch (e.key) {
                    case ' ':
                        (r = !0), l.paused ? a.play() : a.pause();
                        break;
                    case 'ArrowLeft':
                        (r = !0), a.seek(Math.max(l.currentTime - i, f.start));
                        break;
                    case 'ArrowRight':
                        (r = !0), a.seek(Math.min(l.currentTime + i, f.end));
                }
                r && (e.stopPropagation(), e.preventDefault());
            }
            return document.addEventListener('keydown', e), () => document.removeEventListener('keydown', e);
        }, [f.start, f.end, v]),
        (0, a.jsxs)('div', {
            className: d.editorPane,
            children: [
                (0, a.jsx)('div', {
                    className: d.videoSizer,
                    children: (0, a.jsx)(r.Z, {
                        applicationAudioEnabled: b,
                        voiceAudioEnabled: h,
                        ref: v,
                        audioSrc: m,
                        src: c,
                        isLoading: t,
                        onDoneLoading: x,
                        startTime: f.start,
                        endTime: f.end
                    })
                }),
                !t && p && [i.ModalTransitionState.ENTERED, i.ModalTransitionState.HIDDEN].includes(p) ? (0, a.jsx)(o.Z, { sourceURL: c }) : null
            ]
        })
    );
}
