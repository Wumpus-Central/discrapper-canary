n.d(t, { W: () => u }), n(413496), n(433524), n(35282), n(415506);
var r = n(192379),
    l = n(250683),
    i = n(253135);
function u(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: u } = e,
        s = r.useMemo(() => {
            if (null == t || '' === t) return null;
            let e = l.toByteArray(t),
                r = (0, i.Dq)(e, u, n);
            if (null == r) return null;
            let s = RegExp('.{1,'.concat(n, '}'), 'g'),
                a = r.match(s);
            return null == a ? null : Array.from(a);
        }, [n, t, u]);
    if (null != t && '' !== t && null == s) throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
    return s;
}
