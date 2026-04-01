"use strict";
n.d(t, { T: () => d, W: () => c });
var r = n(64700),
    i = n(311907),
    s = n(602674),
    a = n(133636);
let o = (0, s.v)();
async function l(e) {
    let t = await fetch(e),
        n = await o?.decodeAudioData(await t.arrayBuffer()),
        r = o?.createBufferSource();
    return null != r && null != n && (r.buffer = n), r;
}
async function u(e, t) {
    let n = await l(e);
    return null == n || null == o ? null : (n.connect(t).connect(o.destination), n.start(), n);
}
function c(e) {
    let t = (0, i.bG)([a.A], () => a.A.soundVolume);
    return (0, r.useCallback)(() => {
        let n = o?.createGain();
        if (null != n) return (n.gain.value = t), u(e, n);
    }, [e, t]);
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, r.useRef)(null),
        s = (0, r.useRef)(o?.createGain()),
        l = (0, i.bG)([a.A], () => a.A.musicVolume);
    (0, r.useEffect)(() => {
        (async () => {
            null != n.current && (n.current.stop(), (n.current = null)),
                null != s.current &&
                    (t || ((n.current = await u(e, s.current)), null != n.current && (n.current.loop = !0)));
        })();
    }, [t, e]),
        (0, r.useEffect)(() => {
            null != s.current && (s.current.gain.value = l);
        }, [l]),
        (0, r.useEffect)(() => () => n.current?.stop(), []);
}
