n.d(t, {
    ZP: () => E,
    pn: () => g,
});
var r = n(54381),
    i = n(473749),
    a = n(591759),
    o = n(781452);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let d = "https://www.tiktok.com",
    f = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
function p(e, t) {
    let n = a.Z.toURLSafe(null != e ? e : "");
    if (null === n) return "";
    if (null == t) return n.toString();
    for (let e in t) {
        let r = t[e];
        null != r && n.searchParams.set(e, r);
    }
    return n.toString();
}
function _(e) {
    var { src: t, autoMute: n } = e,
        a = c(e, ["src", "autoMute"]);
    let o = i.useRef(null),
        s = i.useCallback(
            (e) => {
                if (e.data["x-tiktok-player"] && e.origin === d && "onPlayerReady" === e.data.type) {
                    var t, r, i, a;
                    n &&
                        (null == (a = o.current) ||
                            null == (i = a.contentWindow) ||
                            i.postMessage(
                                {
                                    type: "mute",
                                    "x-tiktok-player": !0,
                                },
                                e.origin,
                            )),
                        null == (r = o.current) ||
                            null == (t = r.contentWindow) ||
                            t.postMessage(
                                {
                                    type: "play",
                                    "x-tiktok-player": !0,
                                },
                                e.origin,
                            );
                }
            },
            [n],
        );
    i.useEffect(() => (window.addEventListener("message", s), () => window.removeEventListener("message", s)), [s]);
    let u = p(t, { utm_source: "discord.gg" });
    return (0, r.jsx)(
        h,
        l(
            {
                src: u,
                ref: o,
            },
            a,
        ),
    );
}
function m(e) {
    var { src: t, autoMute: n } = e,
        i = c(e, ["src", "autoMute"]);
    let a = p(t, {
        autoplay: "1",
        auto_play: "1",
        mute: n ? "1" : void 0,
    });
    return (0, r.jsx)(h, l({ src: a }, i));
}
let h = i.forwardRef(function (e, t) {
    var { allowFullScreen: n } = e,
        i = c(e, ["allowFullScreen"]);
    let a = n ? "".concat(f, " allow-fullscreen") : f,
        s = n ? "autoplay; fullscreen" : "autoplay";
    return (0, r.jsx)(
        "iframe",
        l(
            {
                ref: t,
                className: o.embedIframe,
                allow: s,
                frameBorder: 0,
                scrolling: "no",
                sandbox: a,
                allowFullScreen: n,
            },
            i,
        ),
    );
});
var g = (function (e) {
    return (e.YOUTUBE = "YouTube"), (e.TIKTOK = "TikTok"), e;
})({});
function E(e) {
    switch (e.provider) {
        case "YouTube":
            return (0, r.jsx)(m, l({}, e));
        case "TikTok":
            return (0, r.jsx)(_, l({}, e));
        default:
            return (0, r.jsx)(h, l({}, e));
    }
}
