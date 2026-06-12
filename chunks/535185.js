"use strict";
n.d(t, { g: () => u, w: () => c }), n(142703);
var i = n(64700),
    r = n(238040),
    s = n(935399);
function a(e, t) {
    (0, s.Ay)(() => () => {
        (0, r.JE)(e, t);
    });
}
function o(e) {
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
        s = [{ inlineSize: i.width, blockSize: i.height }],
        a = [
            {
                inlineSize: i.width - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)),
                blockSize: i.height - (parseFloat(r.paddingTop) + parseFloat(r.paddingBottom)),
            },
        ],
        o = window.devicePixelRatio ?? 1,
        l = [{ inlineSize: a[0].inlineSize * o, blockSize: a[0].blockSize * o }];
    return { target: e, borderBoxSize: s, contentBoxSize: a, devicePixelContentBoxSize: l, contentRect: i };
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = arguments.length > 3 ? arguments[3] : void 0,
        { enabled: a = !0, fireOnMount: l = !1, fireOnDepsChange: u = !1 } = r,
        c = (0, i.useRef)(!1);
    (0, s.u5)(() => {
        let n = e.current;
        a &&
            l &&
            null != n &&
            (t(o(n)),
            setImmediate(() => {
                c.current = !0;
            }));
    }),
        (0, i.useLayoutEffect)(() => {
            let n = e.current;
            a && u && c.current && null != n && t(o(n));
        }, [t, e, ...n]);
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = (0, i.useId)(),
        { enabled: u = !0 } = s,
        c = (0, i.useRef)(null);
    a(o, e.current),
        l(e, t, n, s),
        (0, i.useEffect)(() => {
            if (!u) return;
            let n = e.current;
            if (null == n) return;
            let i = (0, r.NQ)(o, n, t);
            if (((c.current = i), null != i)) return (0, r.wB)(i, n), () => (0, r.$v)(i, n);
        }, [u, o, t, e, ...n]);
}
function c(e) {
    let t,
        n,
        s,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { enabled: c = !0 } = u,
        [d, _] =
            ((t = (0, i.useId)()),
            (n = (0, i.useRef)(null)),
            (s = (0, i.useRef)(null)),
            (0, i.useEffect)(() => {
                null != n.current && (s.current = (0, r.NQ)(t, n.current, e));
            }, [t, e]),
            a(t, n.current),
            [s, n]);
    return (
        l(_, e, o, u),
        (0, i.useEffect)(() => {
            if (!c) return;
            let e = _.current,
                t = d.current;
            if (null != e && null != t) return (0, r.wB)(t, e), () => (0, r.$v)(t, e);
        }, [c, _, d, ...o]),
        _
    );
}
