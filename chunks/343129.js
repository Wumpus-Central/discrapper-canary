n.d(t, { I: () => l, U: () => a }), n(321073);
var i = n(435558),
    s = n(652215);
function a(e) {
    return (0, i.uniqWith)(
        e.filter((e) => {
            let { type: t } = e;
            return t !== s.$pd.CUSTOM_STATUS && t !== s.$pd.HANG_STATUS;
        }),
        (e, t) =>
            (null != e.application_id && null != t.application_id && e.application_id === t.application_id) ||
            (null != e.name && null != t.name && e.name === t.name),
    );
}
function l(e) {
    let { stream: t, live: n = [], voiceChannel: i, voiceActivity: s, isPrivate: a = !1 } = e,
        l = [];
    for (let e of (null != t && l.push({ type: "stream", stream: t }), n)) l.push({ type: "live", activity: e });
    return a || null != t || null != s || null == i || l.push({ type: "voice", voiceChannel: i }), l;
}
