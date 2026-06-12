"use strict";
n.d(t, { Q: () => s });
var i = n(652215),
    r = n(375708);
function s(e) {
    let {
            enabled: t,
            join: n,
            channel: s,
            cameraUnavailable: a,
            hasPermission: o,
            channelLimit: l = -1,
            channelLimitReached: u = !1,
        } = e,
        c = t ? r.intl.string(r.t["4xAQ5w"]) : r.intl.string(r.t.kgIe9a);
    return (
        n && (c = s?.isManaged() || !s?.isPrivate() ? r.intl.string(r.t.clqrYm) : r.intl.string(r.t.W68MhH)),
        a && (c = r.intl.string(r.t["8jSzSe"])),
        o || (c = r.intl.string(r.t.uQn9B8)),
        u &&
            !t &&
            (c = s?.isGuildStageVoice()
                ? l >= i.uaN
                    ? r.intl.string(r.t["j6h0/8"])
                    : r.intl.string(r.t["jlZ+0h"])
                : r.intl.formatToPlainString(r.t.x9mtl4, { limit: l })),
        c
    );
}
