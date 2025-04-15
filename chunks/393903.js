n.d(t, {
    s: () => f,
    y: () => _
}),
    n(368063),
    n(358797),
    n(388685);
var r = n(192379),
    i = n(889711),
    o = n(493773);
function a(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = s(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function l(e, t) {
    (0, o.ZP)(() => {
        let n = t;
        return () => {
            (0, i.fO)(e, n);
        };
    });
}
function c(e) {
    var t, n, r, i, o, s;
    let l = e,
        c = e.getBoundingClientRect(),
        u = null == (t = l.parentElement) ? void 0 : t.getBoundingClientRect(),
        d = {
            x: c.x - (null != (n = null == u ? void 0 : u.x) ? n : 0),
            y: c.y - (null != (r = null == u ? void 0 : u.y) ? r : 0),
            width: c.width,
            height: c.height,
            top: c.top - (null != (i = null == u ? void 0 : u.top) ? i : 0),
            right: c.width,
            bottom: c.height,
            left: c.left - (null != (o = null == u ? void 0 : u.left) ? o : 0),
            toJSON: () => {
                let { toJSON: e } = d;
                return a(d, ['toJSON']);
            }
        },
        f = getComputedStyle(l),
        _ = [
            {
                inlineSize: d.width,
                blockSize: d.height
            }
        ],
        p = [
            {
                inlineSize: d.width - (parseFloat(f.paddingLeft) + parseFloat(f.paddingRight)),
                blockSize: d.height - (parseFloat(f.paddingTop) + parseFloat(f.paddingBottom))
            }
        ],
        h = null != (s = window.devicePixelRatio) ? s : 1,
        m = [
            {
                inlineSize: p[0].inlineSize * h,
                blockSize: p[0].blockSize * h
            }
        ];
    return {
        target: l,
        borderBoxSize: _,
        contentBoxSize: p,
        devicePixelContentBoxSize: m,
        contentRect: d
    };
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        { enabled: a = !0, fireOnMount: s = !0, fireOnDepsChange: l = !1 } = i,
        u = (0, r.useRef)(!1);
    (0, o.Ng)(() => {
        let n = e.current;
        a &&
            s &&
            null != n &&
            (t(c(n)),
            setImmediate(() => {
                u.current = !0;
            }));
    }),
        (0, r.useLayoutEffect)(() => {
            let n = e.current;
            a && l && u.current && null != n && t(c(n));
        }, [t, e, ...n]);
}
function d(e) {
    let t = (0, r.useId)(),
        n = (0, r.useRef)(null),
        o = (0, r.useRef)(null);
    return (
        (0, r.useLayoutEffect)(() => {
            null != n.current && (o.current = (0, i.pP)(t, n.current, e));
        }, [t, e]),
        l(t, n.current),
        [o, n]
    );
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = (0, r.useId)(),
        { enabled: s = !0 } = o,
        c = (0, r.useRef)(null);
    l(a, e.current),
        u(e, t, n, o),
        (0, r.useLayoutEffect)(() => {
            s && null != e.current && ((c.current = (0, i.pP)(a, e.current, t)), null != c.current && (0, i.YP)(c.current, e.current));
        }, [s, a, t, e, ...n]),
        (0, r.useEffect)(() => {
            if (!s || null == e.current || null == c.current) return;
            let t = e.current,
                n = c.current;
            return () => {
                (0, i.UC)(n, t);
            };
        }, [s, e, ...n]);
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { enabled: o = !0 } = n,
        [a, s] = d(e);
    return (
        u(s, e, t, n),
        (0, r.useLayoutEffect)(() => {
            o && null != s.current && null != a.current && (0, i.YP)(a.current, s.current);
        }, [o, s, a, ...t]),
        (0, r.useEffect)(() => {
            if (!o || null == s.current || null == a.current) return;
            let e = s.current,
                t = a.current;
            return () => {
                (0, i.UC)(t, e);
            };
        }, [o, a, s, ...t]),
        s
    );
}
