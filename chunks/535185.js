"use strict";
n.d(t, { g: () => d, w: () => c }), n(142703);
var i = n(582128),
    r = n(238040),
    a = n(935399);
function s(e, t) {
    (0, a.Ay)(() => () => {
        (0, r.JE)(e, t);
    });
}
function l(e) {
    let t = e.getBoundingClientRect(),
        n = e.parentElement?.getBoundingClientRect(),
        i = {
            x: t.x - (n?.x ?? 0),
            y: t.y - (n?.y ?? 0),
            width: t.width,
            height: t.height,
            top: t.top - (n?.top ?? 0),
            right: t.width,
            bottom: t.height,
            left: t.left - (n?.left ?? 0),
            toJSON: () => {
                let { toJSON: e, ...t } = i;
                return t;
            },
        },
        r = getComputedStyle(e),
        a = [{ inlineSize: i.width, blockSize: i.height }],
        s = [
            {
                inlineSize: i.width - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)),
                blockSize: i.height - (parseFloat(r.paddingTop) + parseFloat(r.paddingBottom)),
            },
        ],
        l = window.devicePixelRatio ?? 1,
        o = [{ inlineSize: s[0].inlineSize * l, blockSize: s[0].blockSize * l }];
    return { target: e, borderBoxSize: a, contentBoxSize: s, devicePixelContentBoxSize: o, contentRect: i };
}
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = arguments.length > 3 ? arguments[3] : void 0,
        { enabled: s = !0, fireOnMount: o = !1, fireOnDepsChange: d = !1 } = r,
        c = (0, i.useRef)(!1);
    (0, a.u5)(() => {
        let n = e.current;
        s &&
            o &&
            null != n &&
            (t(l(n)),
            setImmediate(() => {
                c.current = !0;
            }));
    }),
        (0, i.useLayoutEffect)(() => {
            let n = e.current;
            s && d && c.current && null != n && t(l(n));
        }, [t, e, ...n]);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = (0, i.useId)(),
        { enabled: d = !0 } = a,
        c = (0, i.useRef)(null);
    s(l, e.current),
        o(e, t, n, a),
        (0, i.useEffect)(() => {
            if (!d) return;
            let n = e.current;
            if (null == n) return;
            let i = (0, r.NQ)(l, n, t);
            if (((c.current = i), null != i)) return (0, r.wB)(i, n), () => (0, r.$v)(i, n);
        }, [d, l, t, e, ...n]);
}
function c(e) {
    let t,
        n,
        a,
        l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { enabled: c = !0 } = d,
        [u, _] =
            ((t = (0, i.useId)()),
            (n = (0, i.useRef)(null)),
            (a = (0, i.useRef)(null)),
            (0, i.useEffect)(() => {
                null != n.current && (a.current = (0, r.NQ)(t, n.current, e));
            }, [t, e]),
            s(t, n.current),
            [a, n]);
    return (
        o(_, e, l, d),
        (0, i.useEffect)(() => {
            if (!c) return;
            let e = _.current,
                t = u.current;
            if (null != e && null != t) return (0, r.wB)(t, e), () => (0, r.$v)(t, e);
        }, [c, _, u, ...l]),
        _
    );
}
