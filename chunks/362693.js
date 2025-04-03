n.d(t, { Z: () => d });
var r = n(200651),
    a = n(192379),
    l = n(481060),
    i = n(673462),
    o = n(826078),
    s = n(917042),
    u = n(20437),
    c = n(138339);
function d(e) {
    let { isLoading: t, onDoneLoading: n, videoURL: d, audioURL: m, transitionState: p } = e,
        { videoPlayerRef: f, cropData: v, applicationAudioEnabled: h, voiceAudioEnabled: g } = (0, u.S)(),
        x = a.useCallback(() => {
            var e;
            null == (e = f.current) || e.seek(v.start), n();
        }, [n, v.start, f]);
    return (
        a.useEffect(() => {
            function e(e) {
                var t, n;
                if ((null == (t = document.activeElement) ? void 0 : t.tagName) === 'INPUT') return;
                let r = f.current;
                if (null == r) return;
                let a = null == (n = f.current) ? void 0 : n.videoElement;
                if (null == a) return;
                let l = (0, s.Z)(a.duration, e.shiftKey),
                    i = !1;
                switch (e.key) {
                    case ' ':
                        (i = !0), a.paused ? r.play() : r.pause();
                        break;
                    case 'ArrowLeft':
                        (i = !0), r.seek(Math.max(a.currentTime - l, v.start));
                        break;
                    case 'ArrowRight':
                        (i = !0), r.seek(Math.min(a.currentTime + l, v.end));
                }
                i && (e.stopPropagation(), e.preventDefault());
            }
            return document.addEventListener('keydown', e), () => document.removeEventListener('keydown', e);
        }, [v.start, v.end, f]),
        (0, r.jsxs)('div', {
            className: c.editorPane,
            children: [
                (0, r.jsx)('div', {
                    className: c.videoSizer,
                    children: (0, r.jsx)(i.Z, {
                        applicationAudioEnabled: h,
                        voiceAudioEnabled: g,
                        ref: f,
                        audioSrc: m,
                        src: d,
                        isLoading: t,
                        onDoneLoading: x,
                        startTime: v.start,
                        endTime: v.end
                    })
                }),
                !t && p && [l.Dvm.ENTERED, l.Dvm.HIDDEN].includes(p) ? (0, r.jsx)(o.Z, { sourceURL: d }) : null
            ]
        })
    );
}
