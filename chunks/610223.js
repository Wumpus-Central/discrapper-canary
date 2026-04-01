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
function c(e, t, n) {
    return e.connect(n).connect(t.destination), e.start(), e;
}
function d(e) {
    let t = (0, i.bG)([a.A], () => a.A.soundVolume);
    return (0, r.useCallback)(async () => {
        let n = l?.createGain();
        if (null == n) return;
        n.gain.value = t;
        let r = await u(e);
        return null == r || null == l ? null : c(r, l, n);
    }, [e, t]);
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, r.useRef)(null),
        s = (0, r.useRef)(l?.createGain()),
        o = (0, i.bG)([a.A], () => a.A.musicVolume),
        d = (0, r.useRef)(!0);
    (0, r.useEffect)(() => {
        (async () => {
            null != n.current && (n.current.stop(), (n.current = null)),
                null != s.current &&
                    !t &&
                    ((n.current = await u(e)),
                    null != n.current &&
                        null != l &&
                        d.current &&
                        (c(n.current, l, s.current), null != n.current && (n.current.loop = !0)));
        })();
    }, [t, e]),
        (0, r.useEffect)(() => {
            null != s.current && (s.current.gain.value = o);
        }, [o]),
        (0, r.useEffect)(
            () => () => {
                (d.current = !1), n.current?.stop();
            },
            [],
        );
}
