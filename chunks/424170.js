n.d(t, { M1: () => d }), n(321073);
var l = n(582128),
    i = n(17928),
    s = n(157559),
    r = n(773669);
n(723702);
var a = n(375708);
let o = ["png", "gif", "jpg", "jpeg", "jfif", "webp", "avif"],
    u = ["mp4", "mov", "qt", "webm"],
    c = ["mp3", "m4a", "wav", "ogg", "opus", "flac"];
function d(e) {
    let t,
        n = l.useMemo(
            () =>
                (function (e) {
                    if (null == e || 0 === e.length) return [];
                    let t = e.filter((e) => e.startsWith(".")).map((e) => e.slice(1));
                    return (
                        e.includes("image") && t.push(...o),
                        e.includes("video") && t.push(...u),
                        e.includes("audio") && t.push(...c),
                        t
                    );
                })(e),
            [e],
        ),
        d =
            ((t = (0, i.bG)([r.default], () => r.default.locale)),
            l.useMemo(
                () =>
                    (function (e, t) {
                        if (null == e || 0 === e.length) return null;
                        let n = new Intl.ListFormat(t, { type: "disjunction" }),
                            l = [];
                        return (e.includes("image") && l.push(a.intl.string(a.t["0r2WwT"])),
                        e.includes("video") && l.push(a.intl.string(a.t["al+5qH"])),
                        e.includes("audio") && l.push(a.intl.string(a.t.Kzll3E)),
                        l.push(...e.filter((e) => e.startsWith(".")).sort()),
                        0 === l.length)
                            ? null
                            : n.format(l);
                    })(e, t),
                [e, t],
            )),
        h = l.useCallback(
            (e) => 0 === n.length || e.every((e) => n.some((t) => e.toLowerCase().endsWith(`.${t}`))),
            [n],
        ),
        m = l.useCallback(() => {
            s.A.show({
                title: a.intl.string(a.t.azO1Pe),
                body: a.intl.formatToPlainString(a.t["5U9LSo"], { types: d }),
            });
        }, [d]),
        f = l.useMemo(() => 0 === n.length || n.some((e) => o.includes(e) || u.includes(e)), [n]);
    return {
        allowedExtensions: n,
        typesFormattedString: d,
        validateFilenames: h,
        showInvalidFileTypeAlert: m,
        mediaFilesAllowed: f,
    };
}
