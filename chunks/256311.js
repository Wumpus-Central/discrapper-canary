n.d(t, {
    A: () => u,
});
var r = n(562465),
    i = n(73153),
    a = n(883600),
    s = n(253932),
    o = n(652215),
    l = n(559868);

function c() {
    let e = new Date().getMinutes();
    return "x=".concat(Math.floor(e / 5));
}
let u = {
    lockChangeLog(e) {
        i.h.dispatch({
            type: "CHANGE_LOG_LOCK",
            key: e,
        });
    },
    unlockChangeLog(e) {
        i.h.dispatch({
            type: "CHANGE_LOG_UNLOCK",
            key: e,
        });
    },
    markChangelogAsSeen(e, t) {
        i.h.dispatch({
            type: "CHANGE_LOG_MARK_SEEN",
            changelogId: e,
            changelogDate: t,
        }),
            s.pK.updateSetting(e);
    },
    setChangelogOverride(e) {
        i.h.dispatch({
            type: "CHANGE_LOG_SET_OVERRIDE",
            id: e,
        }),
            null != e && this.sendChangelogMessage(e);
    },
    sendChangelogMessage(e) {
        r.Bo.post({
            url: o.Rsh.CHANGELOG_MESSAGES,
            body: {
                changelog_id: e,
            },
            rejectWithError: !0,
        });
    },
    fetchChangelogConfig() {
        let e = l.V5.DESKTOP;
        return r.Bo.get({
            url: "https://cdn.discordapp.com/changelogs/config_".concat(e, ".json?").concat(c()),
            rejectWithError: !0,
        });
    },
    async fetchChangelog(e, t) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != a.A.getChangelog(e, t)) return null;
        let s = l.V5.DESKTOP,
            o = n ? "" : "?".concat(c());
        try {
            let n = await r.Bo.get({
                url: "https://cdn.discordapp.com/changelogs/"
                    .concat(s, "/")
                    .concat(e, "/")
                    .concat(t, ".json")
                    .concat(o),
                rejectWithError: !0,
            });
            return (
                i.h.dispatch({
                    type: "CHANGE_LOG_FETCH_SUCCESS",
                    id: e,
                    changelog: n.body,
                }),
                n.body
            );
        } catch (n) {
            if (
                (i.h.dispatch({
                    type: "CHANGE_LOG_FETCH_FAILED",
                    id: e,
                    locale: t,
                }),
                "en-US" !== t)
            )
                return await this.fetchChangelog(e, "en-US");
            return null;
        }
    },
};
