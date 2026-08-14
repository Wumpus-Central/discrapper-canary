i.d(t, { I: () => r, U: () => n }), i(321073);
var E = i(435558),
    s = i(652215);
function n(e) {
    return (0, E.uniqWith)(
        e.filter((e) => {
            let { type: t } = e;
            return t !== s.$pd.CUSTOM_STATUS && t !== s.$pd.HANG_STATUS;
        }),
        (e, t) =>
            (null != e.application_id && null != t.application_id && e.application_id === t.application_id) ||
            (null != e.name && null != t.name && e.name === t.name),
    );
}
function r(e) {
    let { stream: t, live: i = [], voiceChannel: E, voiceActivity: s, isPrivate: n = !1 } = e,
        r = [];
    for (let e of (null != t && r.push({ type: "stream", stream: t }), i)) r.push({ type: "live", activity: e });
    return n || null != t || null != s || null == E || r.push({ type: "voice", voiceChannel: E }), r;
}
