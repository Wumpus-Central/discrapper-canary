n.d(t, { Q: () => l });
var i = n(652215),
    r = n(375708);
function l(e) {
    let {
            enabled: t,
            join: n,
            channel: l,
            cameraUnavailable: s,
            hasPermission: a,
            channelLimit: o = -1,
            channelLimitReached: u = !1,
        } = e,
        c = t ? r.intl.string(r.t["4xAQ5w"]) : r.intl.string(r.t.kgIe9a);
    return (
        n && (c = l?.isManaged() || !l?.isPrivate() ? r.intl.string(r.t.clqrYm) : r.intl.string(r.t.W68MhH)),
        s && (c = r.intl.string(r.t["8jSzSe"])),
        a || (c = r.intl.string(r.t.uQn9B8)),
        u &&
            !t &&
            (c = l?.isGuildStageVoice()
                ? o >= i.uaN
                    ? r.intl.string(r.t["j6h0/8"])
                    : r.intl.string(r.t["jlZ+0h"])
                : r.intl.formatToPlainString(r.t.x9mtl4, { limit: o })),
        c
    );
}
