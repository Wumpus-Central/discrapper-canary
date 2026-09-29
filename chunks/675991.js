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
            channelLimitReached: c = !1,
        } = e,
        u = t ? r.intl.string(r.t["4xAQ5w"]) : r.intl.string(r.t.kgIe9a);
    return (
        n && (u = l?.isManaged() || !l?.isPrivate() ? r.intl.string(r.t.clqrYm) : r.intl.string(r.t.W68MhH)),
        s && (u = r.intl.string(r.t["8jSzSe"])),
        a || (u = r.intl.string(r.t.uQn9B8)),
        c &&
            !t &&
            (u = l?.isGuildStageVoice()
                ? o >= i.uaN
                    ? r.intl.string(r.t["j6h0/8"])
                    : r.intl.string(r.t["jlZ+0h"])
                : r.intl.formatToPlainString(r.t.x9mtl4, { limit: o })),
        u
    );
}
