"use strict";
n.d(t, { A: () => c });
var i = n(636537),
    r = n(228366),
    a = n(883600),
    s = n(885386),
    l = n(652215),
    o = n(559868);
function d() {
    let e = new Date().getMinutes();
    return `x=${Math.floor(e / 5)}`;
}
let c = {
    lockChangeLog(e) {
        r.h.dispatch({ type: "CHANGE_LOG_LOCK", key: e });
    },
    unlockChangeLog(e) {
        r.h.dispatch({ type: "CHANGE_LOG_UNLOCK", key: e });
    },
    markChangelogAsSeen(e, t) {
        r.h.dispatch({ type: "CHANGE_LOG_MARK_SEEN", changelogId: e, changelogDate: t }), s.pK.updateSetting(e);
    },
    setChangelogOverride(e) {
        r.h.dispatch({ type: "CHANGE_LOG_SET_OVERRIDE", id: e }), null != e && this.sendChangelogMessage(e);
    },
    sendChangelogMessage(e) {
        i.Bo.post({ url: l.Rsh.CHANGELOG_MESSAGES, body: { changelog_id: e }, rejectWithError: !0 });
    },
    fetchChangelogConfig() {
        let e = o.V5.DESKTOP;
        return i.Bo.get({ url: `https://cdn.discordapp.com/changelogs/config_${e}.json?${d()}`, rejectWithError: !0 });
    },
    async fetchChangelog(e, t) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != a.A.getChangelog(e, t)) return null;
        let s = o.V5.DESKTOP,
            l = n ? "" : `?${d()}`;
        try {
            let n = await i.Bo.get({
                url: `https://cdn.discordapp.com/changelogs/${s}/${e}/${t}.json${l}`,
                rejectWithError: !0,
            });
            return r.h.dispatch({ type: "CHANGE_LOG_FETCH_SUCCESS", id: e, changelog: n.body }), n.body;
        } catch {
            if ((r.h.dispatch({ type: "CHANGE_LOG_FETCH_FAILED", id: e, locale: t }), "en-US" !== t))
                return await this.fetchChangelog(e, "en-US");
            return null;
        }
    },
};
