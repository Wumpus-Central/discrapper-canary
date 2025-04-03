r.d(t, { W: () => i }), r(474991), r(398202), r(301563), r(411104);
var n = r(192379),
    o = r(250683),
    c = r(253135);
function i(e) {
    let { fingerprintBase64: t, chunkSize: r, desiredLength: i } = e,
        s = n.useMemo(() => {
            if (null == t || '' === t) return null;
            let e = o.toByteArray(t),
                n = (0, c.Dq)(e, i, r);
            if (null == n) return null;
            let s = RegExp('.{1,'.concat(r, '}'), 'g'),
                l = n.match(s);
            return null == l ? null : Array.from(l);
        }, [r, t, i]);
    if (null != t && '' !== t && null == s) throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
    return s;
}
