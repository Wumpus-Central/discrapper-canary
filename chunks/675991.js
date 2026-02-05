"use strict";
n.d(t, { Q: () => a });
var r = n(652215),
    i = n(985018);
function a(e) {
    let {
            enabled: t,
            join: n,
            channel: a,
            cameraUnavailable: s,
            hasPermission: o,
            channelLimit: l = -1,
            channelLimitReached: u = !1,
        } = e,
        c = t ? i.intl.string(i.t["4xAQ5w"]) : i.intl.string(i.t.kgIe9a);
    return (
        n && (c = a?.isManaged() || !a?.isPrivate() ? i.intl.string(i.t.clqrYm) : i.intl.string(i.t.W68MhH)),
        s && (c = i.intl.string(i.t["8jSzSe"])),
        o || (c = i.intl.string(i.t.uQn9B8)),
        u &&
            !t &&
            (c = a?.isGuildStageVoice()
                ? l >= r.uaN
                    ? i.intl.string(i.t["j6h0/8"])
                    : i.intl.string(i.t["jlZ+0h"])
                : i.intl.formatToPlainString(i.t.x9mtl4, { limit: l })),
        c
    );
}
