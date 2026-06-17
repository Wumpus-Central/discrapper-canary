"use strict";
n.d(t, { I: () => a, U: () => s }), n(321073);
var i = n(735438),
    r = n(652215);
function s(e) {
    return (0, i.uniqWith)(
        e.filter((e) => {
            let { type: t } = e;
            return t !== r.$pd.CUSTOM_STATUS && t !== r.$pd.HANG_STATUS;
        }),
        (e, t) =>
            (null != e.application_id && null != t.application_id && e.application_id === t.application_id) ||
            (null != e.name && null != t.name && e.name === t.name),
    );
}
function a(e) {
    let { stream: t, live: n = [], voiceChannel: i, voiceActivity: r, isPrivate: s = !1 } = e,
        a = [];
    for (let e of (null != t && a.push({ type: "stream", stream: t }), n)) a.push({ type: "live", activity: e });
    return s || null != t || null != r || null == i || a.push({ type: "voice", voiceChannel: i }), a;
}
