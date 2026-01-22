n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(782425),
    l = n(201327);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e, t) {
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
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function p(e) {
    let { streamId: t, paused: n = !1, onReady: a, onResize: c, className: f } = e,
        p = d(e, ["streamId", "paused", "onReady", "onResize", "className"]),
        _ = i.useRef(null),
        h = i.useRef({
            width: 0,
            height: 0,
        });
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null != e)
            return (
                (0, o.NM)(t),
                (e.srcObject = (0, l.yL)(t)),
                () => {
                    (0, o.gm)(t), (e.srcObject = null), e.load();
                }
            );
    }, [t]),
        i.useEffect(() => {
            var e, r;
            return (
                n
                    ? (null == (e = _.current) || e.pause(), (0, o.gm)(t))
                    : null == (r = _.current) || r.play().catch(() => {}),
                () => {
                    n && (0, o.NM)(t);
                }
            );
        }, [n]);
    let m = i.useCallback(() => {
        var e, t, n, r;
        let { width: i, height: a } = h.current,
            s = null != (e = null == (n = _.current) ? void 0 : n.videoWidth) ? e : 0,
            o = null != (t = null == (r = _.current) ? void 0 : r.videoHeight) ? t : 0;
        if (i !== s || a !== o) {
            let e = {
                width: s,
                height: o,
            };
            null == c || c(e), (h.current = e);
        }
    }, [c]);
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null != e) return e.addEventListener("resize", m), () => e.removeEventListener("resize", m);
    }, [m]);
    let g = i.useCallback(() => {
            null == a || a();
        }, [a]),
        E = i.useCallback(
            (e) => {
                n || e.currentTarget.play();
            },
            [n],
        );
    return (0, r.jsx)(
        "video",
        u(
            {
                className: s()("media-engine-video", f),
                ref: _,
                autoPlay: !0,
                onPause: E,
                onCanPlayThrough: g,
                muted: !0,
            },
            p,
        ),
    );
}
