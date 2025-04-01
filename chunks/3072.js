n.d(t, {
    eR: () => m,
    hW: () => f,
    is: () => g
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    s = n(304809),
    a = n(120421),
    o = n(284539),
    l = n(477839);
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
function g(e, t) {
    let n = (0, r.useRef)(null),
        s = (0, r.useRef)(c.createGain()),
        o = (0, i.e7)([a.Z], () => a.Z.volume),
        l = (0, i.e7)([a.Z], () => a.Z.isMuted);
    (0, r.useEffect)(() => {
        (async () => {
            null != n.current && (n.current.stop(), (n.current = null)), t || ((n.current = await u(e, s.current)), (n.current.loop = !0));
        })();
    }, [t, e]),
        (0, r.useEffect)(() => {
            s.current.gain.value = l ? 0 : o;
        }, [l, o]),
        (0, r.useEffect)(
            () => () => {
                var e;
                return null === (e = n.current) || void 0 === e ? void 0 : e.stop();
            },
            []
        );
}
let p = n(956294),
    h = {
        [l.Vx.DEFAULT]: n(635154),
        [l.Vx.CAT]: n(382399),
        [l.Vx.SWORD]: n(730602),
        [l.Vx.PIZZA]: n(84171)
    };
function f() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [n] = (0, o.Z)(l.yN.CURSORS),
        r = null !== (e = n.selectedCursor) && void 0 !== e ? e : l.Vx.DEFAULT;
    return m(t ? p : h[r]);
}
