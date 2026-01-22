n.d(t, {
    Ay: () => E,
    mt: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(998218),
    s = n(802571);
function o(e, t, n) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = u(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let d = "https://www.tiktok.com",
    f = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
function p(e, t) {
    let n = a.A.toURLSafe(null != e ? e : "");
    if (null === n) return "";
    if (null == t) return n.toString();
    for (let e in t) {
        let r = t[e];
        null != r && n.searchParams.set(e, r);
    }
    return n.toString();
}
function _(e) {
    let { src: t, autoMute: n } = e,
        a = c(e, ["src", "autoMute"]),
        s = i.useRef(null),
        o = i.useCallback(
            (e) => {
                if (e.data["x-tiktok-player"] && e.origin === d && "onPlayerReady" === e.data.type) {
                    var t, r, i, a;
                    n &&
                        (null == (a = s.current) ||
                            null == (i = a.contentWindow) ||
                            i.postMessage(
                                {
                                    type: "mute",
                                    "x-tiktok-player": !0,
                                },
                                e.origin,
                            )),
                        null == (r = s.current) ||
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
    i.useEffect(() => (window.addEventListener("message", o), () => window.removeEventListener("message", o)), [o]);
    let u = p(t, { utm_source: "discord.gg" });
    return (0, r.jsx)(
        m,
        l(
            {
                src: u,
                ref: s,
            },
            a,
        ),
    );
}
function h(e) {
    let { src: t, autoMute: n } = e,
        i = c(e, ["src", "autoMute"]),
        a = p(t, {
            autoplay: "1",
            auto_play: "1",
            mute: n ? "1" : void 0,
        });
    return (0, r.jsx)(m, l({ src: a }, i));
}
let m = i.forwardRef(function (e, t) {
    let [n, ...i] = [e, t],
        { allowFullScreen: a } = n,
        o = c(n, ["allowFullScreen"]),
        [u] = i,
        d = a ? "".concat(f, " allow-fullscreen") : f,
        p = a ? "autoplay; fullscreen" : "autoplay";
    return (0, r.jsx)(
        "iframe",
        l(
            {
                ref: u,
                className: s.Qu,
                allow: p,
                frameBorder: 0,
                scrolling: "no",
                sandbox: d,
                allowFullScreen: a,
            },
            o,
        ),
    );
});
var g = (function (e) {
    return (e.YOUTUBE = "YouTube"), (e.TIKTOK = "TikTok"), e;
})({});
function E(e) {
    switch (e.provider) {
        case "YouTube":
            return (0, r.jsx)(h, l({}, e));
        case "TikTok":
            return (0, r.jsx)(_, l({}, e));
        default:
            return (0, r.jsx)(m, l({}, e));
    }
}
