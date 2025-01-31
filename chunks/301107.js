n.d(t, { W: () => s }), n(411104);
var i = n(192379),
    r = n(250683),
    l = n(253135);
function s(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: s } = e,
        o = i.useMemo(() => {
            if (null == t || '' === t) return null;
            let e = r.toByteArray(t),
                i = (0, l.Dq)(e, s, n);
            if (null == i) return null;
            let o = RegExp('.{1,'.concat(n, '}'), 'g'),
                c = i.match(o);
            return null == c ? null : Array.from(c);
        }, [n, t, s]);
    if (null != t && '' !== t && null == o) throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
    return o;
}
