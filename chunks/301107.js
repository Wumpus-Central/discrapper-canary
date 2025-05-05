n.d(t, { W: () => o }), n(413496), n(433524), n(35282), n(415506);
var r = n(73800),
    l = n(250683),
    i = n(253135);
function o(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: o } = e,
        a = r.useMemo(() => {
            if (null == t || '' === t) return null;
            let e = l.toByteArray(t),
                r = (0, i.Dq)(e, o, n);
            if (null == r) return null;
            let a = RegExp('.{1,'.concat(n, '}'), 'g'),
                s = r.match(a);
            return null == s ? null : Array.from(s);
        }, [n, t, o]);
    if (null != t && '' !== t && null == a) throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
    return a;
}
