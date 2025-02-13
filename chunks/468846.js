t.d(l, {
    ZP: () => c,
    pn: () => m
});
var n,
    i = t(200651),
    r = t(192379),
    s = t(591759),
    a = t(280511);
function o(e, l) {
    let t = s.Z.toURLSafe(null != e ? e : '');
    if (null === t) return '';
    if (null == l) return t.toString();
    for (let e in l) {
        let n = l[e];
        null != n && t.searchParams.set(e, n);
    }
    return t.toString();
}
function d(e) {
    let { src: l, autoMute: t, ...n } = e,
        s = r.useRef(null),
        a = r.useCallback(
            (e) => {
                if (e.data['x-tiktok-player'] && 'https://www.tiktok.com' === e.origin && 'onPlayerReady' === e.data.type) {
                    var l, n, i, r;
                    t &&
                        (null === (r = s.current) ||
                            void 0 === r ||
                            null === (i = r.contentWindow) ||
                            void 0 === i ||
                            i.postMessage(
                                {
                                    type: 'mute',
                                    'x-tiktok-player': !0
                                },
                                e.origin
                            )),
                        null === (n = s.current) ||
                            void 0 === n ||
                            null === (l = n.contentWindow) ||
                            void 0 === l ||
                            l.postMessage(
                                {
                                    type: 'play',
                                    'x-tiktok-player': !0
                                },
                                e.origin
                            );
                }
            },
            [t]
        );
    r.useEffect(() => (window.addEventListener('message', a), () => window.removeEventListener('message', a)), [a]);
    let d = o(l, { utm_source: 'discord.gg' });
    return (0, i.jsx)(h, {
        src: d,
        ref: s,
        ...n
    });
}
function u(e) {
    let { src: l, autoMute: t, ...n } = e,
        r = o(l, {
            autoplay: '1',
            auto_play: '1',
            mute: t ? '1' : void 0
        });
    return (0, i.jsx)(h, {
        src: r,
        ...n
    });
}
let h = r.forwardRef(function (e, l) {
    return (0, i.jsx)('iframe', {
        ref: l,
        className: a.embedIframe,
        allow: 'autoplay',
        frameBorder: 0,
        scrolling: 'no',
        sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts',
        ...e
    });
});
var m = (((n = {}).YOUTUBE = 'YouTube'), (n.TIKTOK = 'TikTok'), n);
function c(e) {
    switch (e.provider) {
        case 'YouTube':
            return (0, i.jsx)(u, { ...e });
        case 'TikTok':
            return (0, i.jsx)(d, { ...e });
        default:
            return (0, i.jsx)(h, { ...e });
    }
}
