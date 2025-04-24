n.d(t, { W: () => a }), n(413496), n(433524), n(35282), n(415506);
var l = n(192379),
    r = n(250683),
    i = n(253135);
function a(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: a } = e,
        o = l.useMemo(() => {
            if (null == t || '' === t) return null;
            let e = r.toByteArray(t),
                l = (0, i.Dq)(e, a, n);
            if (null == l) return null;
            let o = RegExp('.{1,'.concat(n, '}'), 'g'),
                s = l.match(o);
            return null == s ? null : Array.from(s);
        }, [n, t, a]);
    if (null != t && '' !== t && null == o) throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
    return o;
}
