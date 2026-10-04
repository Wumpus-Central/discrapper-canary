n.d(t, { BZ: () => d, Kn: () => s, sq: () => c, we: () => o });
var i = n(652215);
let r = "vibegrations_application_id=",
    a = /^\d{17,20}$/;
function s(e) {
    if (null == e || !e.startsWith(r)) return null;
    let t = e.slice(r.length);
    return a.test(t) ? t : null;
}
function l(e, t) {
    return (e ?? i.rbe.GUILD_TEXT) === i.rbe.GUILD_TEXT ? s(t) : null;
}
function o(e) {
    let t = l(e.type, e.topic);
    return null == t ? e : { ...e, type: i.rbe.GUILD_APP, application_id: t };
}
function d(e) {
    let t = l(e.type, e.topic_);
    return null == t ? e : { ...e, type: i.rbe.GUILD_APP, application_id: t };
}
function c(e, t) {
    return e === i.rbe.GUILD_APP && null != s(t);
}
