t.d(n, { lv: () => E, lF: () => A, FD: () => f, Ug: () => _, um: () => g, dM: () => m });
var l = t(636537),
    i = t(73153),
    a = t(210470);
let r = Object.freeze({ DISCOVERABLE_CONTENT: (e) => `/guilds/${e}/discoverable-content` });
var u = t(131904),
    s = t(22464);
function c(e) {
    return { channelId: e.channel_id, eligible: e.eligible, included: e.included };
}
function d(e) {
    return { enabled: e.enabled, channels: e.channels.map(c) };
}
function o(e) {
    return { [s.y.CHANNEL_SUMMARIES]: d(e[s.y.CHANNEL_SUMMARIES]), [s.y.CHANNEL_MESSAGES]: d(e[s.y.CHANNEL_MESSAGES]) };
}
let h = new Set();
async function f(e) {
    if (!(null != u.A.getFeatures(e) || u.A.fetchFailed(e)) && !h.has(e)) {
        h.add(e);
        try {
            let n = await l.Bo.get({ url: r.DISCOVERABLE_CONTENT(e), rejectWithError: !0 }),
                t = o(n.body);
            i.h.dispatch({ type: "PINOT_FETCH_SUCCESS", guildId: e, features: t });
        } catch {
            i.h.dispatch({ type: "PINOT_FETCH_FAILURE", guildId: e });
        } finally {
            h.delete(e);
        }
    }
}
async function g(e) {
    let n = u.A.getFeatures(e);
    if (null == n || u.A.isSaving()) return;
    let t = {};
    for (let l of s.P) {
        let i = u.A.getDraft(e, l);
        if (null == i) continue;
        let r = (0, a.Pg)(n[l], i);
        Object.keys(r).length > 0 && (t[l] = r);
    }
    if (0 !== Object.keys(t).length) {
        i.h.dispatch({ type: "PINOT_SAVE_START", guildId: e });
        try {
            let n = await l.Bo.patch({ url: r.DISCOVERABLE_CONTENT(e), body: t, rejectWithError: !0 });
            i.h.dispatch({ type: "PINOT_SAVE_SUCCESS", guildId: e, features: o(n.body) });
        } catch {
            i.h.dispatch({ type: "PINOT_SAVE_FAILURE", guildId: e });
        }
    }
}
function E(e, n, t) {
    i.h.dispatch({ type: "PINOT_DRAFT_UPDATE", guildId: e, featureKey: n, draft: t });
}
function A(e) {
    i.h.dispatch({ type: "PINOT_OPEN_FEATURE", featureKey: e });
}
function m(e) {
    i.h.dispatch({ type: "PINOT_ADMIN_NOTICE_ACK", guildId: e });
}
function _(e) {
    i.h.dispatch({ type: "PINOT_ADMIN_NOTICE_HIDE", guildId: e });
}
