n.d(t, {
    eR: () => m,
    hW: () => b,
    is: () => p
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    s = n(304809),
    a = n(120421),
    l = n(284539),
    o = n(477839);
let c = (0, s.N)();
async function d(e) {
    let t = await fetch(e),
        n = await c.decodeAudioData(await t.arrayBuffer()),
        r = c.createBufferSource();
    return (r.buffer = n), r;
}
async function u(e, t) {
    let n = await d(e);
    return n.connect(t).connect(c.destination), n.start(), n;
}
function m(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.volume),
        n = (0, i.e7)([a.Z], () => a.Z.isMuted);
    return (0, r.useCallback)(() => {
        let r = c.createGain();
        (r.gain.value = n ? 0 : t), u(e, r);
    }, [n, e, t]);
}
function g(e) {
    null != e.current && (e.current.stop(), (e.current = null));
}
function p(e, t) {
    let n = (0, r.useRef)(null),
        s = (0, r.useRef)(c.createGain()),
        l = (0, i.e7)([a.Z], () => a.Z.volume),
        o = (0, i.e7)([a.Z], () => a.Z.isMuted),
        d = (0, r.useRef)(!0);
    (0, r.useEffect)(() => {
        (async () => {
            null != n.current && g(n), !t && ((n.current = await u(e, s.current)), (n.current.loop = !0), d.current || g(n));
        })();
    }, [t, e]),
        (0, r.useEffect)(() => {
            s.current.gain.value = o ? 0 : l;
        }, [o, l]),
        (0, r.useEffect)(
            () => () => {
                (d.current = !1), g(n);
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
        [n] = (0, l.Z)(o.yN.CURSORS),
        r = null != (e = n.selectedCursor) ? e : o.Vx.DEFAULT;
    return m(t ? h : f[r]);
}
