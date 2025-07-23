(n.d(t, {
    GV: () => E,
    Po: () => f,
    Sg: () => p,
    VP: () => m,
    dh: () => g,
    g7: () => h
}),
    n(467055),
    n(388685));
var r = n(512722),
    i = n.n(r),
    a = n(544891),
    o = n(570140),
    s = n(911969),
    l = n(314897),
    c = n(709054),
    u = n(174212),
    d = n(895924),
    _ = n(981631);
function f(e) {
    let { channelId: t, command: n, section: r, location: a, initialValues: s, triggerSection: l, queryLength: c, sectionName: u, query: _, searchResultsPosition: f, source: p, commandOrigin: h } = e;
    (null != n && i()(n.inputType !== d.iw.PLACEHOLDER, 'command should not be placeholder'),
        o.Z.dispatch({
            type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
            channelId: t,
            command: n,
            section: r,
            initialValues: s,
            location: a,
            triggerSection: l,
            queryLength: c,
            sectionName: u,
            query: _,
            searchResultsPosition: f,
            source: p,
            commandOrigin: h
        }));
}
function p(e, t) {
    o.Z.dispatch({
        type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
        channelId: e,
        commandId: t
    });
}
function h(e, t) {
    o.Z.dispatch({
        type: 'APPLICATION_COMMAND_UPDATE_OPTIONS',
        channelId: e,
        changedOptionStates: t
    });
}
function m(e, t) {
    h(
        e,
        Object.fromEntries(
            Object.entries(t).map((e) => {
                let [t, n] = e;
                return [t, { lastValidationResult: n }];
            })
        )
    );
}
function g(e, t, n, r) {
    return a.tn.put({
        body: { permissions: r },
        url: _.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
        rejectWithError: !1
    });
}
function E(e, t, n) {
    var r;
    i()(null != t.autocomplete, 'Missing autocomplete context');
    let { query: d, name: f } = t.autocomplete,
        p = c.default.fromTimestamp(Date.now());
    null != t.channel &&
        (o.Z.dispatch({
            type: 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST',
            nonce: p,
            channelId: t.channel.id,
            query: d,
            name: f
        }),
        null == u.Z.getAutocompleteChoices(t.channel.id, f, d) &&
            a.tn
                .post({
                    url: _.ANM.INTERACTIONS,
                    body: {
                        type: s.B8.APPLICATION_COMMAND_AUTOCOMPLETE,
                        application_id: e.applicationId,
                        guild_id: null == (r = t.guild) ? void 0 : r.id,
                        channel_id: t.channel.id,
                        session_id: l.default.getSessionId(),
                        data: n,
                        nonce: p
                    },
                    timeout: 3000,
                    rejectWithError: !0
                })
                .catch(() => {
                    o.Z.dispatch({
                        type: 'INTERACTION_FAILURE',
                        nonce: p
                    });
                }));
}
