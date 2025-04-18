n.d(t, {
    s: () => f,
    y: () => _
}),
    n(368063),
    n(358797),
    n(388685);
var r = n(192379),
    i = n(889711),
    a = n(493773);
function o(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = s(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function l(e, t) {
    (0, a.ZP)(() => {
        let n = t;
        return () => {
            (0, i.fO)(e, n);
        };
    });
}
function c(e) {
    var t, n, r, i, a, s;
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
            left: c.left - (null != (a = null == u ? void 0 : u.left) ? a : 0),
            toJSON: () => {
                let { toJSON: e } = d;
                return o(d, ['toJSON']);
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
        { enabled: o = !0, fireOnMount: s = !0, fireOnDepsChange: l = !1 } = i,
        u = (0, r.useRef)(!1);
    (0, a.Ng)(() => {
        let n = e.current;
        o &&
            s &&
            null != n &&
            (t(c(n)),
            setImmediate(() => {
                u.current = !0;
            }));
    }),
        (0, r.useLayoutEffect)(() => {
            let n = e.current;
            o && l && u.current && null != n && t(c(n));
        }, [t, e, ...n]);
}
function d(e) {
    let t = (0, r.useId)(),
        n = (0, r.useRef)(null),
        a = (0, r.useRef)(null);
    return (
        (0, r.useLayoutEffect)(() => {
            null != n.current && (a.current = (0, i.pP)(t, n.current, e));
        }, [t, e]),
        l(t, n.current),
        [a, n]
    );
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = (0, r.useId)(),
        { enabled: s = !0 } = a,
        c = (0, r.useRef)(null);
    l(o, e.current),
        u(e, t, n, a),
        (0, r.useLayoutEffect)(() => {
            s && null != e.current && ((c.current = (0, i.pP)(o, e.current, t)), null != c.current && (0, i.YP)(c.current, e.current));
        }, [s, o, t, e, ...n]),
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
        { enabled: a = !0 } = n,
        [o, s] = d(e);
    return (
        u(s, e, t, n),
        (0, r.useLayoutEffect)(() => {
            a && null != s.current && null != o.current && (0, i.YP)(o.current, s.current);
        }, [a, s, o, ...t]),
        (0, r.useEffect)(() => {
            if (!a || null == s.current || null == o.current) return;
            let e = s.current,
                t = o.current;
            return () => {
                (0, i.UC)(t, e);
            };
        }, [a, o, s, ...t]),
        s
    );
}
