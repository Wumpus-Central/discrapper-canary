"use strict";
n.d(t, { A: () => d });
var i = n(636537),
    r = n(228366),
    s = n(883600),
    a = n(253932),
    o = n(652215),
    l = n(559868);
function _() {
    let e = new Date().getMinutes();
    return `x=${Math.floor(e / 5)}`;
}
let d = {
    lockChangeLog(e) {
        r.h.dispatch({ type: "CHANGE_LOG_LOCK", key: e });
    },
    unlockChangeLog(e) {
        r.h.dispatch({ type: "CHANGE_LOG_UNLOCK", key: e });
    },
    markChangelogAsSeen(e, t) {
        r.h.dispatch({ type: "CHANGE_LOG_MARK_SEEN", changelogId: e, changelogDate: t }), a.pK.updateSetting(e);
    },
    setChangelogOverride(e) {
        r.h.dispatch({ type: "CHANGE_LOG_SET_OVERRIDE", id: e }), null != e && this.sendChangelogMessage(e);
    },
    sendChangelogMessage(e) {
        i.Bo.post({ url: o.Rsh.CHANGELOG_MESSAGES, body: { changelog_id: e }, rejectWithError: !0 });
    },
    fetchChangelogConfig() {
        let e = l.V5.DESKTOP;
        return i.Bo.get({ url: `https://cdn.discordapp.com/changelogs/config_${e}.json?${_()}`, rejectWithError: !0 });
    },
    async fetchChangelog(e, t) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != s.A.getChangelog(e, t)) return null;
        let a = l.V5.DESKTOP,
            o = n ? "" : `?${_()}`;
        try {
            let n = await i.Bo.get({
                url: `https://cdn.discordapp.com/changelogs/${a}/${e}/${t}.json${o}`,
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
