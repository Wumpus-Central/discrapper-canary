n.d(t, { v: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(941861),
    l = n(844222),
    c = n(604121),
    u = n(460890),
    d = n(849889),
    f = n(978495),
    p = n(818348),
    _ = n(506540);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
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
    if (((a = y(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function O(e) {
    let { src: t } = e;
    return (0, r.jsx)("img", {
        className: _.image,
        src: t,
        alt: "",
        draggable: !1,
    });
}
function A(e) {
    let { lottie: t, props: n } = e,
        { reducedMotion: a } = i.useContext(l.C);
    return (0, r.jsx)(
        c.a,
        m(
            {
                className: _.lottie,
                importData: t,
                autoplay: !0,
                shouldAnimate: !a.enabled,
            },
            n,
        ),
    );
}
function v(e) {
    let { rive: t, props: n } = e;
    return (0, r.jsx)(
        t,
        m(
            {
                className: _.rive,
                withReducedMotion: "short-loop",
                autoplay: !0,
                fit: "contain",
                alignment: "center",
            },
            n,
        ),
    );
}
function S(e) {
    let { ref: t, src: n, fallbackImageSrc: a, loop: s, loopAt: o = 0, playbackRate: c, isWindowFocused: u } = e,
        { reducedMotion: d } = i.useContext(l.C),
        f = i.useRef(null);
    return (i.useImperativeHandle(t, () => f.current),
    i.useEffect(() => {
        let e = f.current;
        if (null != e)
            return (
                null != c && (e.playbackRate = c),
                null != s && (e.loop = 0 === o && s),
                e.addEventListener("ended", t),
                () => {
                    e.removeEventListener("ended", t);
                }
            );
        function t() {
            null != e && !0 === s && 0 !== o && ((e.currentTime = o), e.play());
        }
    }, [s, o, c]),
    i.useEffect(() => {
        var e, t;
        null != f.current &&
            (!d.enabled && u ? null == (e = f.current) || e.play().catch(p.tE) : null == (t = f.current) || t.pause());
    }, [u, d.enabled]),
    d.enabled && null != a)
        ? (0, r.jsx)(O, {
              type: "image",
              src: a,
          })
        : (0, r.jsx)("video", {
              className: _.video,
              ref: f,
              src: n,
              autoPlay: !d.enabled && u,
              muted: !0,
              playsInline: !0,
              controls: !1,
              preload: "metadata",
          });
}
function I(e) {
    var t, n;
    let { aspectRatio: i = "16/9" } = e,
        a = b(e, ["aspectRatio"]),
        l = (0, u.G9)(),
        c = (0, o.R)(),
        p = null != (t = null == (n = l.isWindowFocused) ? void 0 : n.call(l)) ? t : c;
    function h() {
        if ((0, f.wu)(a)) return (0, r.jsx)(O, m({}, a));
        if ((0, f.al)(a)) return (0, r.jsx)(A, m({}, a));
        if ((0, f.$P)(a)) return (0, r.jsx)(v, m({}, a));
        if ((0, f.cZ)(a)) return (0, r.jsx)(S, E(m({}, a), { isWindowFocused: p }));
        if ((0, f.Kh)(a))
            return null == l.dynamicGraphicComponents
                ? (console.warn("Dynamic graphic used but no dynamicGraphicComponents provided in ManaContext"), null)
                : (0, d.o)({
                      component: a.component,
                      props: a.props,
                      componentMap: l.dynamicGraphicComponents,
                  });
        return null;
    }
    return null == a
        ? null
        : (0, r.jsx)("div", {
              className: s()(_.container, _["aspect-ratio-".concat(i)]),
              children: h(),
          });
}
