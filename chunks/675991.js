n.d(t, {
    Q: () => a,
});
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
            channelLimitReached: c = !1,
        } = e,
        u = t ? i.intl.string(i.t["4xAQ5w"]) : i.intl.string(i.t.kgIe9a);
    return (
        n &&
            (u =
                (null == a ? void 0 : a.isManaged()) || !(null == a ? void 0 : a.isPrivate())
                    ? i.intl.string(i.t.clqrYm)
                    : i.intl.string(i.t.W68MhH)),
        s && (u = i.intl.string(i.t["8jSzSe"])),
        o || (u = i.intl.string(i.t.uQn9B8)),
        c &&
            !t &&
            (u = (null == a ? void 0 : a.isGuildStageVoice())
                ? l >= r.uaN
                    ? i.intl.string(i.t["j6h0/8"])
                    : i.intl.string(i.t["jlZ+0h"])
                : i.intl.formatToPlainString(i.t.x9mtl4, {
                      limit: l,
                  })),
        u
    );
}
