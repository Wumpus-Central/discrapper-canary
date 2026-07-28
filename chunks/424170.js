"use strict";
n.d(t, { M1: () => u }), n(321073);
var i = n(582128),
    r = n(17928),
    a = n(157559),
    s = n(773669);
n(723702);
var l = n(375708);
let o = ["png", "gif", "jpg", "jpeg", "jfif", "webp", "avif"],
    d = ["mp4", "mov", "qt", "webm"],
    c = ["mp3", "m4a", "wav", "ogg", "opus", "flac"];
function u(e) {
    let t,
        n = i.useMemo(
            () =>
                (function (e) {
                    if (null == e || 0 === e.length) return [];
                    let t = e.filter((e) => e.startsWith(".")).map((e) => e.slice(1));
                    return (
                        e.includes("image") && t.push(...o),
                        e.includes("video") && t.push(...d),
                        e.includes("audio") && t.push(...c),
                        t
                    );
                })(e),
            [e],
        ),
        u =
            ((t = (0, r.bG)([s.default], () => s.default.locale)),
            i.useMemo(
                () =>
                    (function (e, t) {
                        if (null == e || 0 === e.length) return null;
                        let n = new Intl.ListFormat(t, { type: "disjunction" }),
                            i = [];
                        return (e.includes("image") && i.push(l.intl.string(l.t["0r2WwT"])),
                        e.includes("video") && i.push(l.intl.string(l.t["al+5qH"])),
                        e.includes("audio") && i.push(l.intl.string(l.t.Kzll3E)),
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
        E = i.useCallback(() => {
            a.A.show({
                title: l.intl.string(l.t.azO1Pe),
                body: l.intl.formatToPlainString(l.t["5U9LSo"], { types: u }),
            });
        }, [u]),
        A = i.useMemo(() => 0 === n.length || n.some((e) => o.includes(e) || d.includes(e)), [n]);
    return {
        allowedExtensions: n,
        typesFormattedString: u,
        validateFilenames: _,
        showInvalidFileTypeAlert: E,
        mediaFilesAllowed: A,
    };
}
