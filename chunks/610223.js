"use strict";
n.d(t, { T: () => _, W: () => d });
var r = n(64700),
    i = n(311907),
    s = n(602674),
    a = n(133636);
let o = new Map(),
    l = (0, s.v)();
async function u(e) {
    let t = o.get(e);
    if (null != t) {
        let e = l?.createBufferSource();
        return null != e && (e.buffer = t), e;
    }
    let n = await fetch(e),
        r = await l?.decodeAudioData(await n.arrayBuffer());
    null != r && o.set(e, r);
    let i = l?.createBufferSource();
    return null != i && null != r && (i.buffer = r), i;
}
async function c(e, t) {
    let n = await u(e);
    return null == n || null == l ? null : (n.connect(t).connect(l.destination), n.start(), n);
}
function d(e) {
    let t = (0, i.bG)([a.A], () => a.A.soundVolume);
    return (0, r.useCallback)(() => {
        let n = l?.createGain();
        if (null != n) return (n.gain.value = t), c(e, n);
    }, [e, t]);
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, r.useRef)(null),
        s = (0, r.useRef)(l?.createGain()),
        o = (0, i.bG)([a.A], () => a.A.musicVolume);
    (0, r.useEffect)(() => {
        (async () => {
            null != n.current && (n.current.stop(), (n.current = null)),
                null != s.current &&
                    (t || ((n.current = await c(e, s.current)), null != n.current && (n.current.loop = !0)));
        })();
    }, [t, e]),
        (0, r.useEffect)(() => {
            null != s.current && (s.current.gain.value = o);
        }, [o]),
        (0, r.useEffect)(() => () => n.current?.stop(), []);
}
