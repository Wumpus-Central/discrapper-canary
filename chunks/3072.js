n.d(t, {
    eR: () => m,
    hW: () => b,
    is: () => g
}),
    n(388685);
var i = n(73800),
    r = n(442837),
    s = n(304809),
    l = n(120421),
    a = n(284539),
    o = n(477839);
let c = (0, s.N)();
async function d(e) {
    let t = await fetch(e),
        n = await (null == c ? void 0 : c.decodeAudioData(await t.arrayBuffer()));
    if (null == n) return null;
    let i = null == c ? void 0 : c.createBufferSource();
    return null == i ? null : ((i.buffer = n), i);
}
async function u(e, t) {
    let n = await d(e);
    return null == n || null == c ? null : (n.connect(t).connect(c.destination), n.start(), n);
}
function m(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.volume),
        n = (0, r.e7)([l.Z], () => l.Z.isMuted);
    return (0, i.useCallback)(() => {
        let i = null == c ? void 0 : c.createGain();
        null != i && ((i.gain.value = n ? 0 : t), u(e, i));
    }, [n, e, t]);
}
function p(e) {
    null != e.current && (e.current.stop(), (e.current = null));
}
function g(e, t) {
    let n = (0, i.useRef)(null),
        s = (0, i.useRef)(null == c ? void 0 : c.createGain()),
        a = (0, r.e7)([l.Z], () => l.Z.volume),
        o = (0, r.e7)([l.Z], () => l.Z.isMuted),
        d = (0, i.useRef)(!0);
    (0, i.useEffect)(() => {
        (async () => {
            null != n.current && p(n), !t && null != s.current && ((n.current = await u(e, s.current)), null != n.current && (n.current.loop = !0), d.current || p(n));
        })();
    }, [t, e]),
        (0, i.useEffect)(() => {
            null != s.current && (s.current.gain.value = o ? 0 : a);
        }, [o, a]),
        (0, i.useEffect)(
            () => () => {
                (d.current = !1), p(n);
            },
            []
        );
}
let h = n(956294),
    f = {
        [o.Vx.DEFAULT]: n(635154),
        [o.Vx.CAT]: n(382399),
        [o.Vx.SWORD]: n(730602),
        [o.Vx.PIZZA]: n(84171)
    };
function b() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [n] = (0, a.Z)(o.yN.CURSORS),
        i = null != (e = n.selectedCursor) ? e : o.Vx.DEFAULT;
    return m(t ? h : f[i]);
}
