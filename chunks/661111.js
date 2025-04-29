n.d(t, { Z: () => u });
var r = n(544891),
    i = n(570140),
    o = n(802098),
    a = n(695346),
    s = n(981631),
    l = n(596401);
function c() {
    let e = new Date().getMinutes();
    return 'x='.concat(Math.floor(e / 5));
}
let u = {
    lockChangeLog(e) {
        i.Z.dispatch({
            type: 'CHANGE_LOG_LOCK',
            key: e
        });
    },
    unlockChangeLog(e) {
        i.Z.dispatch({
            type: 'CHANGE_LOG_UNLOCK',
            key: e
        });
    },
    markChangelogAsSeen(e, t) {
        i.Z.dispatch({
            type: 'CHANGE_LOG_MARK_SEEN',
            changelogId: e,
            changelogDate: t
        }),
            a.l4.updateSetting(e);
    },
    setChangelogOverride(e) {
        i.Z.dispatch({
            type: 'CHANGE_LOG_SET_OVERRIDE',
            id: e
        }),
            null != e && this.sendChangelogMessage(e);
    },
    sendChangelogMessage(e) {
        r.tn.post({
            url: s.ANM.CHANGELOG_MESSAGES,
            body: { changelog_id: e },
            rejectWithError: !0
        });
    },
    fetchChangelogConfig() {
        let e = l.Vw.DESKTOP;
        return r.tn.get({
            url: 'https://cdn.discordapp.com/changelogs/config_'.concat(e, '.json?').concat(c()),
            rejectWithError: !0
        });
    },
    async fetchChangelog(e, t) {
        if ((arguments.length > 2 && void 0 !== arguments[2] && arguments[2], null != o.Z.getChangelog(e, t))) return null;
        let n = l.Vw.DESKTOP;
        try {
            let o = await r.tn.get({
                url: 'https://cdn.discordapp.com/changelogs/'.concat(n, '/').concat(e, '/').concat(t, '.json?').concat(c()),
                rejectWithError: !0
            });
            return (
                i.Z.dispatch({
                    type: 'CHANGE_LOG_FETCH_SUCCESS',
                    id: e,
                    changelog: o.body
                }),
                o.body
            );
        } catch (n) {
            if (
                (i.Z.dispatch({
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
