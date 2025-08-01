n.d(t, { z: () => y });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(186325),
    l = n(226690),
    c = n(198168),
    u = n(587272),
    d = n(556591);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function m(e) {
    let { src: t } = e;
    return (0, r.jsx)('img', {
        className: d.image,
        src: t,
        alt: '',
        draggable: !1
    });
}
function g(e) {
    let { lottie: t, props: n } = e,
        { reducedMotion: a } = i.useContext(s.S);
    return (0, r.jsx)(
        l.F,
        f(
            {
                className: d.lottie,
                importData: t,
                autoplay: !0,
                shouldAnimate: !a.enabled
            },
            n
        )
    );
}
function E(e) {
    let { rive: t, props: n } = e;
    return (0, r.jsx)(
        t,
        f(
            {
                className: d.rive,
                withReducedMotion: 'short-loop',
                autoplay: !0,
                fit: 'contain',
                alignment: 'center'
            },
            n
        )
    );
}
function b(e) {
    let { src: t, fallbackImageSrc: n, loop: a, loopAt: o = 0, playbackRate: l } = e,
        { reducedMotion: c } = i.useContext(s.S),
        u = i.useRef(null);
    return (i.useEffect(() => {
        let e = u.current;
        if (null != e)
            return (
                null != l && (e.playbackRate = l),
                null != a && (e.loop = 0 === o && a),
                e.addEventListener('ended', t),
                () => {
                    e.removeEventListener('ended', t);
                }
            );
        function t() {
            null != e && !0 === a && 0 !== o && ((e.currentTime = o), e.play());
        }
    }, [a, o, l]),
    c.enabled && null != n)
        ? (0, r.jsx)(m, {
              type: 'image',
              src: n
          })
        : (0, r.jsx)('video', {
              className: d.video,
              ref: u,
              src: t,
              autoPlay: !c.enabled,
              muted: !0,
              playsInline: !0
          });
}
function y(e) {
    var { aspectRatio: t = '16/9' } = e,
        n = p(e, ['aspectRatio']);
    function i() {
        if ((0, u.Or)(n)) return (0, r.jsx)(m, f({}, n));
        if ((0, u.Am)(n)) return (0, r.jsx)(g, f({}, n));
        if ((0, u.ko)(n)) return (0, r.jsx)(E, f({}, n));
        if ((0, u.Wv)(n)) return (0, r.jsx)(b, f({}, n));
        if ((0, u.Mf)(n)) return (0, r.jsx)(c.gM, { data: n });
        return null;
    }
    return null == n
        ? null
        : (0, r.jsx)('div', {
              className: o()(d.container, d['aspect-ratio-'.concat(t)]),
              children: i()
          });
}
