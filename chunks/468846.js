t.d(l, {
    ZP: () => g,
    pn: () => p
});
var n,
    r = t(200651),
    i = t(192379),
    s = t(591759),
    a = t(94488);
function o(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (l) {
                var n;
                (n = t[l]),
                    l in e
                        ? Object.defineProperty(e, l, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[l] = n);
            });
    }
    return e;
}
function u(e, l) {
    if (null == e) return {};
    var t,
        n,
        r = (function (e, l) {
            if (null == e) return {};
            var t,
                n,
                r = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) (t = i[n]), l.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
        })(e, l);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) (t = i[n]), !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
    }
    return r;
}
function d(e, l) {
    let t = s.Z.toURLSafe(null != e ? e : '');
    if (null === t) return '';
    if (null == l) return t.toString();
    for (let e in l) {
        let n = l[e];
        null != n && t.searchParams.set(e, n);
    }
    return t.toString();
}
function c(e) {
    var { src: l, autoMute: t } = e,
        n = u(e, ['src', 'autoMute']);
    let s = i.useRef(null),
        a = i.useCallback(
            (e) => {
                if (e.data['x-tiktok-player'] && 'https://www.tiktok.com' === e.origin && 'onPlayerReady' === e.data.type) {
                    var l, n, r, i;
                    t &&
                        (null == (i = s.current) ||
                            null == (r = i.contentWindow) ||
                            r.postMessage(
                                {
                                    type: 'mute',
                                    'x-tiktok-player': !0
                                },
                                e.origin
                            )),
                        null == (n = s.current) ||
                            null == (l = n.contentWindow) ||
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
    i.useEffect(() => (window.addEventListener('message', a), () => window.removeEventListener('message', a)), [a]);
    let c = d(l, { utm_source: 'discord.gg' });
    return (0, r.jsx)(
        m,
        o(
            {
                src: c,
                ref: s
            },
            n
        )
    );
}
function h(e) {
    var { src: l, autoMute: t } = e,
        n = u(e, ['src', 'autoMute']);
    let i = d(l, {
        autoplay: '1',
        auto_play: '1',
        mute: t ? '1' : void 0
    });
    return (0, r.jsx)(m, o({ src: i }, n));
}
let m = i.forwardRef(function (e, l) {
    return (0, r.jsx)(
        'iframe',
        o(
            {
                ref: l,
                className: a.embedIframe,
                allow: 'autoplay',
                frameBorder: 0,
                scrolling: 'no',
                sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
            },
            e
        )
    );
});
var p = (((n = {}).YOUTUBE = 'YouTube'), (n.TIKTOK = 'TikTok'), n);
function g(e) {
    switch (e.provider) {
        case 'YouTube':
            return (0, r.jsx)(h, o({}, e));
        case 'TikTok':
            return (0, r.jsx)(c, o({}, e));
        default:
            return (0, r.jsx)(m, o({}, e));
    }
}
