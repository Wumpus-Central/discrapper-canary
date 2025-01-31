n.d(t, { Z: () => c });
var i = n(544891),
    r = n(570140),
    a = n(802098),
    s = n(695346),
    o = n(981631),
    l = n(596401);
function u() {
    let e = new Date().getMinutes();
    return 'x='.concat(Math.floor(e / 5));
}
let c = {
    lockChangeLog(e) {
        r.Z.dispatch({
            type: 'CHANGE_LOG_LOCK',
            key: e
        });
    },
    unlockChangeLog(e) {
        r.Z.dispatch({
            type: 'CHANGE_LOG_UNLOCK',
            key: e
        });
    },
    markChangelogAsSeen(e, t) {
        r.Z.dispatch({
            type: 'CHANGE_LOG_MARK_SEEN',
            changelogId: e,
            changelogDate: t
        }),
            s.l4.updateSetting(e);
    },
    setChangelogOverride(e) {
        r.Z.dispatch({
            type: 'CHANGE_LOG_SET_OVERRIDE',
            id: e
        }),
            null != e && this.sendChangelogMessage(e);
    },
    sendChangelogMessage(e) {
        i.tn.post({
            url: o.ANM.CHANGELOG_MESSAGES,
            body: { changelog_id: e },
            rejectWithError: !0
        });
    },
    fetchChangelogConfig() {
        let e = l.Vw.DESKTOP;
        return i.tn.get({
            url: 'https://cdn.discordapp.com/changelogs/config_'.concat(e, '.json?').concat(u()),
            rejectWithError: !0
        });
    },
    async fetchChangelog(e, t) {
        if ((arguments.length > 2 && void 0 !== arguments[2] && arguments[2], null != a.Z.getChangelog(e, t))) return null;
        let n = l.Vw.DESKTOP;
        try {
            let a = await i.tn.get({
                url: 'https://cdn.discordapp.com/changelogs/'.concat(n, '/').concat(e, '/').concat(t, '.json?').concat(u()),
                rejectWithError: !0
            });
            return (
                r.Z.dispatch({
                    type: 'CHANGE_LOG_FETCH_SUCCESS',
                    id: e,
                    changelog: a.body
                }),
                a.body
            );
        } catch {
            if (
                (r.Z.dispatch({
                    type: 'CHANGE_LOG_FETCH_FAILED',
                    id: e,
                    locale: t
                }),
                'en-US' !== t)
            )
                return await this.fetchChangelog(e, 'en-US');
            return null;
        }
    }
};
