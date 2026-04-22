"use strict";
n.d(t, { g: () => u, w: () => d }), n(142703);
var r = n(64700),
    i = n(238040),
    s = n(935399);
function a(e, t) {
    (0, s.Ay)(() => () => {
        (0, i.JE)(e, t);
    });
}
function o(e) {
    let t = e.getBoundingClientRect(),
        n = e.parentElement?.getBoundingClientRect(),
        r = {
            x: t.x - (n?.x ?? 0),
            y: t.y - (n?.y ?? 0),
            width: t.width,
            height: t.height,
            top: t.top - (n?.top ?? 0),
            right: t.width,
            bottom: t.height,
            left: t.left - (n?.left ?? 0),
            toJSON: () => {
                let { toJSON: e, ...t } = r;
                return t;
            },
        },
        i = getComputedStyle(e),
        s = [{ inlineSize: r.width, blockSize: r.height }],
        a = [
            {
                inlineSize: r.width - (parseFloat(i.paddingLeft) + parseFloat(i.paddingRight)),
                blockSize: r.height - (parseFloat(i.paddingTop) + parseFloat(i.paddingBottom)),
            },
        ],
        o = window.devicePixelRatio ?? 1,
        l = [{ inlineSize: a[0].inlineSize * o, blockSize: a[0].blockSize * o }];
    return { target: e, borderBoxSize: s, contentBoxSize: a, devicePixelContentBoxSize: l, contentRect: r };
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        { enabled: a = !0, fireOnMount: l = !1, fireOnDepsChange: u = !1 } = i,
        d = (0, r.useRef)(!1);
    (0, s.u5)(() => {
        let n = e.current;
        a &&
            l &&
            null != n &&
            (t(o(n)),
            setImmediate(() => {
                d.current = !0;
            }));
    }),
        (0, r.useLayoutEffect)(() => {
            let n = e.current;
            a && u && d.current && null != n && t(o(n));
        }, [t, e, ...n]);
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = (0, r.useId)(),
        { enabled: u = !0 } = s,
        d = (0, r.useRef)(null);
    a(o, e.current),
        l(e, t, n, s),
        (0, r.useEffect)(() => {
            if (!u) return;
            let n = e.current;
            if (null == n) return;
            let r = (0, i.NQ)(o, n, t);
            if (((d.current = r), null != r)) return (0, i.wB)(r, n), () => (0, i.$v)(r, n);
        }, [u, o, t, e, ...n]);
}
function d(e) {
    let t,
        n,
        s,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { enabled: d = !0 } = u,
        [c, _] =
            ((t = (0, r.useId)()),
            (n = (0, r.useRef)(null)),
            (s = (0, r.useRef)(null)),
            (0, r.useEffect)(() => {
                null != n.current && (s.current = (0, i.NQ)(t, n.current, e));
            }, [t, e]),
            a(t, n.current),
            [s, n]);
    return (
        l(_, e, o, u),
        (0, r.useEffect)(() => {
            if (!d) return;
            let e = _.current,
                t = c.current;
            if (null != e && null != t) return (0, i.wB)(t, e), () => (0, i.$v)(t, e);
        }, [d, _, c, ...o]),
        _
    );
}
