n(652215);
var i = n(792996);
n.d(
    t,
    {},
    {
        Q: function (e) {
            let {
                    enabled: t,
                    join: n,
                    channel: r,
                    cameraUnavailable: l,
                    hasPermission: s,
                    channelLimit: a = -1,
                    channelLimitReached: o = !1,
                } = e,
                u = t ? i.intl.string(i.t["4xAQ5w"]) : i.intl.string(i.t.kgIe9a);
            return (
                n && (u = r?.isManaged() || !r?.isPrivate() ? i.intl.string(i.t.clqrYm) : i.intl.string(i.t.W68MhH)),
                l && (u = i.intl.string(i.t["8jSzSe"])),
                s || (u = i.intl.string(i.t.uQn9B8)),
                o &&
                    !t &&
                    (u = r?.isGuildStageVoice()
                        ? a >= 300
                            ? i.intl.string(i.t["j6h0/8"])
                            : i.intl.string(i.t["jlZ+0h"])
                        : i.intl.formatToPlainString(i.t.x9mtl4, { limit: a })),
                u
            );
        },
    },
);
