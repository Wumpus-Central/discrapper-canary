(t.d(i, { I: () => l, U: () => r }), t(321073));
var s = t(435558),
    n = t(652215);
function r(e) {
    return (0, s.uniqWith)(
        e.filter((e) => {
            let { type: i } = e;
            return i !== n.$pd.CUSTOM_STATUS && i !== n.$pd.HANG_STATUS;
        }),
        (e, i) =>
            (null != e.application_id && null != i.application_id && e.application_id === i.application_id) ||
            (null != e.name && null != i.name && e.name === i.name),
    );
}
function l(e) {
    let { stream: i, live: t = [], voiceChannel: s, voiceActivity: n, isPrivate: r = !1 } = e,
        l = [];
    for (let e of (null != i && l.push({ type: "stream", stream: i }), t)) l.push({ type: "live", activity: e });
    return (r || null != i || null != n || null == s || l.push({ type: "voice", voiceChannel: s }), l);
}
