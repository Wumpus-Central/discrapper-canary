let i, r;
var a = n(582128);
let s = null,
    l = !1,
    o = new Set();
function d(e) {
    for (let t of ((s = e), o)) t();
}
function c(e) {
    null != s && d({ ...s, ...e });
}
function u(e) {
    return (o.add(e), () => o.delete(e));
}
n.d(
    t,
    {},
    {
        Ie: function (e) {
            let t = e.getBoundingClientRect(),
                n = e.offsetWidth > 0 ? t.width / e.offsetWidth : 1;
            return {
                left: t.left + e.clientLeft * n,
                top: t.top + e.clientTop * n,
                width: e.clientWidth * n,
                height: e.clientHeight * n,
                scale: n,
            };
        },
        NL: function (e, t) {
            let { x: n, y: i, type: a } = t;
            if (s?.projectId === e) {
                if ("mousePressed" !== a) return void c({ x: n, y: i, shown: !0, dipping: !1 });
                (c({ x: n, y: i, pressX: n, pressY: i, shown: !0, pressed: !0, presses: s.presses + 1, dipping: !0 }),
                    clearTimeout(r),
                    (r = setTimeout(() => c({ pressed: !1 }), 140)));
            }
        },
        W8: function (e, t) {
            if (((l = !0), clearTimeout(i), s?.projectId === e && s.iframe === t)) return void c({ shown: !0 });
            let n = Math.round(t.clientWidth / 2),
                r = Math.round(t.clientHeight / 2);
            d({
                projectId: e,
                iframe: t,
                x: n,
                y: r,
                pressX: n,
                pressY: r,
                shown: !0,
                pressed: !1,
                presses: 0,
                dipping: !1,
            });
        },
        X2: function (e) {
            let t = a.useSyncExternalStore(u, () => s);
            return t?.projectId === e ? t : null;
        },
        bq: function (e) {
            s?.projectId === e &&
                ((l = !1),
                clearTimeout(i),
                (i = setTimeout(() => {
                    l || c({ shown: !1 });
                }, 8e3)));
        },
        nI: function (e) {
            (null == s || s.projectId === e) && ((l = !1), clearTimeout(i), clearTimeout(r), d(null));
        },
        t$: "data-conjure-agent-cursor",
    },
);
