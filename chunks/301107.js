n.d(t, { W: () => i }), n(413496), n(433524), n(35282), n(415506);
var r = n(73800),
    o = n(250683),
    c = n(825448);
function i(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: i } = e,
        l = r.useMemo(() => {
            if (null == t || '' === t) return null;
            let e = o.toByteArray(t),
                r = (0, c.Dq)(e, i, n);
            if (null == r) return null;
            let l = RegExp('.{1,'.concat(n, '}'), 'g'),
                s = r.match(l);
            return null == s ? null : Array.from(s);
        }, [n, t, i]);
    if (null != t && '' !== t && null == l) throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
    return l;
}
