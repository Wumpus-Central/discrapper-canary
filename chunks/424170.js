"use strict";
n.d(t, { M1: () => d }), n(321073);
var i = n(64700),
    r = n(17928),
    s = n(157559),
    a = n(773669);
n(723702);
var o = n(375708);
let l = ["png", "gif", "jpg", "jpeg", "jfif", "webp", "avif"],
    u = ["mp4", "mov", "qt", "webm"],
    c = ["mp3", "m4a", "wav", "ogg", "opus", "flac"];
function d(e) {
    let t,
        n = i.useMemo(
            () =>
                (function (e) {
                    if (null == e || 0 === e.length) return [];
                    let t = e.filter((e) => e.startsWith(".")).map((e) => e.slice(1));
                    return (
                        e.includes("image") && t.push(...l),
                        e.includes("video") && t.push(...u),
                        e.includes("audio") && t.push(...c),
                        t
                    );
                })(e),
            [e],
        ),
        d =
            ((t = (0, r.bG)([a.default], () => a.default.locale)),
            i.useMemo(
                () =>
                    (function (e, t) {
                        if (null == e || 0 === e.length) return null;
                        let n = new Intl.ListFormat(t, { type: "disjunction" }),
                            i = [];
                        return (e.includes("image") && i.push(o.intl.string(o.t["0r2WwT"])),
                        e.includes("video") && i.push(o.intl.string(o.t["al+5qH"])),
                        e.includes("audio") && i.push(o.intl.string(o.t.Kzll3E)),
                        i.push(...e.filter((e) => e.startsWith(".")).sort()),
                        0 === i.length)
                            ? null
                            : n.format(i);
                    })(e, t),
                [e, t],
            )),
        _ = i.useCallback(
            (e) => 0 === n.length || e.every((e) => n.some((t) => e.toLowerCase().endsWith(`.${t}`))),
            [n],
        ),
        h = i.useCallback(() => {
            s.A.show({
                title: o.intl.string(o.t.azO1Pe),
                body: o.intl.formatToPlainString(o.t["5U9LSo"], { types: d }),
            });
        }, [d]),
        f = i.useMemo(() => 0 === n.length || n.some((e) => l.includes(e) || u.includes(e)), [n]);
    return {
        allowedExtensions: n,
        typesFormattedString: d,
        validateFilenames: _,
        showInvalidFileTypeAlert: h,
        mediaFilesAllowed: f,
    };
}
