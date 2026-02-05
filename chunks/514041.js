i.d(n, { A: () => a });
var l = i(502075),
    e = i(985018);
function a(t) {
    let { isEndStream: n } = t;
    return [
        {
            id: "black-screen",
            value: l.pj.BLACK_SCREEN,
            label: n ? e.intl.string(e.t["0X5Zbq"]) : e.intl.string(e.t.fxiRNr),
        },
        { id: "blurry", value: l.pj.BLURRY, label: n ? e.intl.string(e.t.VVPQyy) : e.intl.string(e.t.E8jTMN) },
        { id: "lagging", value: l.pj.LAGGING, label: n ? e.intl.string(e.t.ObEHd4) : e.intl.string(e.t.VoSJEQ) },
        {
            id: "out-of-sync",
            value: l.pj.OUT_OF_SYNC,
            label: n ? e.intl.string(e.t.mYmwD3) : e.intl.string(e.t["+NluQm"]),
        },
        {
            id: "audio-missing",
            value: l.pj.AUDIO_MISSING,
            label: n ? e.intl.string(e.t["Xwv41+"]) : e.intl.string(e.t.G2egzT),
        },
        {
            id: "audio-poor",
            value: l.pj.AUDIO_POOR,
            label: n ? e.intl.string(e.t["fHey+d"]) : e.intl.string(e.t.aHOfIo),
        },
        { id: "stream-stopped", value: l.pj.STREAM_STOPPED, label: e.intl.string(e.t.uEoqQp) },
        { id: "vibes-off", value: l.pj.VIBES_OFF, label: e.intl.string(e.t["++JLL0"]) },
        { id: "other", value: l.pj.OTHER, label: e.intl.string(e.t.emlT91) },
    ];
}
