"use strict";
n.d(t, { g: () => c, w: () => d }), n(142703);
var r = n(64700),
    i = n(238040),
    a = n(935399);
function s(e, t) {
    (0, a.Ay)(() => {
        let n = t;
        return () => {
            (0, i.JE)(e, n);
        };
    });
}
function o(e) {
    let t = e,
        n = e.getBoundingClientRect(),
        r = t.parentElement?.getBoundingClientRect(),
        i = {
            x: n.x - (r?.x ?? 0),
            y: n.y - (r?.y ?? 0),
            width: n.width,
            height: n.height,
            top: n.top - (r?.top ?? 0),
            right: n.width,
            bottom: n.height,
            left: n.left - (r?.left ?? 0),
            toJSON: () => {
                let { toJSON: e, ...t } = i;
                return t;
            },
        },
        a = getComputedStyle(t),
        s = [{ inlineSize: i.width, blockSize: i.height }],
        o = [
            {
                inlineSize: i.width - (parseFloat(a.paddingLeft) + parseFloat(a.paddingRight)),
                blockSize: i.height - (parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)),
            },
        ],
        l = window.devicePixelRatio ?? 1,
        u = [{ inlineSize: o[0].inlineSize * l, blockSize: o[0].blockSize * l }];
    return { target: t, borderBoxSize: s, contentBoxSize: o, devicePixelContentBoxSize: u, contentRect: i };
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        { enabled: s = !0, fireOnMount: l = !1, fireOnDepsChange: u = !1 } = i,
        c = (0, r.useRef)(!1);
    (0, a.u5)(() => {
        let n = e.current;
        s &&
            l &&
            null != n &&
            (t(o(n)),
            setImmediate(() => {
                c.current = !0;
            }));
    }),
        (0, r.useLayoutEffect)(() => {
            let n = e.current;
            s && u && c.current && null != n && t(o(n));
        }, [t, e, ...n]);
}
function u(e) {
    let t = (0, r.useId)(),
        n = (0, r.useRef)(null),
        a = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(() => {
            null != n.current && (a.current = (0, i.NQ)(t, n.current, e));
        }, [t, e]),
        s(t, n.current),
        [a, n]
    );
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = (0, r.useId)(),
        { enabled: u = !0 } = a,
        c = (0, r.useRef)(null);
    s(o, e.current),
        l(e, t, n, a),
        (0, r.useEffect)(() => {
            if (!u) return;
            let n = e.current;
            if (null == n) return;
            let r = (0, i.NQ)(o, n, t);
            if (((c.current = r), null != r)) return (0, i.wB)(r, n), () => (0, i.$v)(r, n);
        }, [u, o, t, e, ...n]);
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { enabled: a = !0 } = n,
        [s, o] = u(e);
    return (
        l(o, e, t, n),
        (0, r.useEffect)(() => {
            if (!a) return;
            let e = o.current,
                t = s.current;
            if (null != e && null != t) return (0, i.wB)(t, e), () => (0, i.$v)(t, e);
        }, [a, o, s, ...t]),
        o
    );
}
