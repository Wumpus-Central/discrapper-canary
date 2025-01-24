r.d(n, {
    GV: function () {
        return y;
    },
    Po: function () {
        return _;
    },
    Sg: function () {
        return m;
    },
    VP: function () {
        return E;
    },
    dh: function () {
        return v;
    },
    g7: function () {
        return g;
    }
});
var i = r(47120);
var a = r(512722),
    o = r.n(a),
    s = r(544891),
    l = r(570140),
    u = r(911969),
    c = r(314897),
    d = r(709054),
    f = r(174212),
    p = r(895924),
    h = r(981631);
function _(e) {
    let { channelId: n, command: r, section: i, location: a, initialValues: s, triggerSection: u, queryLength: c, sectionName: d, query: f, searchResultsPosition: h, source: _, commandOrigin: m } = e;
    null != r && o()(r.inputType !== p.iw.PLACEHOLDER, 'command should not be placeholder'),
        l.Z.dispatch({
            type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
            channelId: n,
            command: r,
            section: i,
            initialValues: s,
            location: a,
            triggerSection: u,
            queryLength: c,
            sectionName: d,
            query: f,
            searchResultsPosition: h,
            source: _,
            commandOrigin: m
        });
}
function m(e, n) {
    l.Z.dispatch({
        type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
        channelId: e,
        commandId: n
    });
}
function g(e, n) {
    l.Z.dispatch({
        type: 'APPLICATION_COMMAND_UPDATE_OPTIONS',
        channelId: e,
        changedOptionStates: n
    });
}
function E(e, n) {
    g(
        e,
        Object.fromEntries(
            Object.entries(n).map((e) => {
                let [n, r] = e;
                return [n, { lastValidationResult: r }];
            })
        )
    );
}
function v(e, n, r, i) {
    return s.tn.put({
        body: { permissions: i },
        url: h.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, n, r),
        rejectWithError: !1
    });
}
function y(e, n, r) {
    var i;
    o()(null != n.autocomplete, 'Missing autocomplete context');
    let { query: a, name: p } = n.autocomplete,
        _ = d.default.fromTimestamp(Date.now());
    if (null == n.channel) return;
    if (
        (l.Z.dispatch({
            type: 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST',
            nonce: _,
            channelId: n.channel.id,
            query: a,
            name: p
        }),
        null == f.Z.getAutocompleteChoices(n.channel.id, p, a))
    )
        s.tn
            .post({
                url: h.ANM.INTERACTIONS,
                body: {
                    type: u.B8.APPLICATION_COMMAND_AUTOCOMPLETE,
                    application_id: e.applicationId,
                    guild_id: null === (i = n.guild) || void 0 === i ? void 0 : i.id,
                    channel_id: n.channel.id,
                    session_id: c.default.getSessionId(),
                    data: r,
                    nonce: _
                },
                timeout: 3000,
                rejectWithError: !0
            })
            .catch(() => {
                l.Z.dispatch({
                    type: 'INTERACTION_FAILURE',
                    nonce: _
                });
            });
}
