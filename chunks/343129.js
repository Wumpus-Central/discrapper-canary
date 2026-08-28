i.d(t, { I: () => l, U: () => r }), i(321073);
var s = i(435558),
    n = i(652215);
function r(e) {
    return (0, s.uniqWith)(
        e.filter((e) => {
            let { type: t } = e;
            return t !== n.$pd.CUSTOM_STATUS && t !== n.$pd.HANG_STATUS;
        }),
        (e, t) =>
            (null != e.application_id && null != t.application_id && e.application_id === t.application_id) ||
            (null != e.name && null != t.name && e.name === t.name),
    );
}
function l(e) {
    let { stream: t, live: i = [], voiceChannel: s, voiceActivity: n, isPrivate: r = !1 } = e,
        l = [];
    for (let e of (null != t && l.push({ type: "stream", stream: t }), i)) l.push({ type: "live", activity: e });
    return r || null != t || null != n || null == s || l.push({ type: "voice", voiceChannel: s }), l;
}
