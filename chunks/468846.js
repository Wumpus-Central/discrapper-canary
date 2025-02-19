l.d(t, {
    ZP: () => g,
    pn: () => p
});
var r,
    n = l(200651),
    i = l(192379),
    s = l(591759),
    o = l(821879);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function d(e, t) {
    if (null == e) return {};
    var l,
        r,
        n = (function (e, t) {
            if (null == e) return {};
            var l,
                r,
                n = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (l = i[r]), t.indexOf(l) >= 0 || (n[l] = e[l]);
            return n;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (l = i[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (n[l] = e[l]);
    }
    return n;
}
function u(e, t) {
    let l = s.Z.toURLSafe(null != e ? e : '');
    if (null === l) return '';
    if (null == t) return l.toString();
    for (let e in t) {
        let r = t[e];
        null != r && l.searchParams.set(e, r);
    }
    return l.toString();
}
function c(e) {
    var { src: t, autoMute: l } = e,
        r = d(e, ['src', 'autoMute']);
    let s = i.useRef(null),
        o = i.useCallback(
            (e) => {
                if (e.data['x-tiktok-player'] && 'https://www.tiktok.com' === e.origin && 'onPlayerReady' === e.data.type) {
                    var t, r, n, i;
                    l &&
                        (null === (i = s.current) ||
                            void 0 === i ||
                            null === (n = i.contentWindow) ||
                            void 0 === n ||
                            n.postMessage(
                                {
                                    type: 'mute',
                                    'x-tiktok-player': !0
                                },
                                e.origin
                            )),
                        null === (r = s.current) ||
                            void 0 === r ||
                            null === (t = r.contentWindow) ||
                            void 0 === t ||
                            t.postMessage(
                                {
                                    type: 'play',
                                    'x-tiktok-player': !0
                                },
                                e.origin
                            );
                }
            },
            [l]
        );
    i.useEffect(() => (window.addEventListener('message', o), () => window.removeEventListener('message', o)), [o]);
    let c = u(t, { utm_source: 'discord.gg' });
    return (0, n.jsx)(
        m,
        a(
            {
                src: c,
                ref: s
            },
            r
        )
    );
}
function h(e) {
    var { src: t, autoMute: l } = e,
        r = d(e, ['src', 'autoMute']);
    let i = u(t, {
        autoplay: '1',
        auto_play: '1',
        mute: l ? '1' : void 0
    });
    return (0, n.jsx)(m, a({ src: i }, r));
}
let m = i.forwardRef(function (e, t) {
    return (0, n.jsx)(
        'iframe',
        a(
            {
                ref: t,
                className: o.embedIframe,
                allow: 'autoplay',
                frameBorder: 0,
                scrolling: 'no',
                sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
            },
            e
        )
    );
});
var p = (((r = {}).YOUTUBE = 'YouTube'), (r.TIKTOK = 'TikTok'), r);
function g(e) {
    switch (e.provider) {
        case 'YouTube':
            return (0, n.jsx)(h, a({}, e));
        case 'TikTok':
            return (0, n.jsx)(c, a({}, e));
        default:
            return (0, n.jsx)(m, a({}, e));
    }
}
