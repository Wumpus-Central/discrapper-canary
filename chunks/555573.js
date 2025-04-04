n.d(t, {
    GV: () => E,
    Po: () => _,
    Sg: () => p,
    VP: () => m,
    dh: () => g,
    g7: () => h
}),
    n(977457),
    n(47120);
var r = n(512722),
    i = n.n(r),
    o = n(544891),
    a = n(570140),
    s = n(911969),
    l = n(314897),
    c = n(709054),
    u = n(174212),
    d = n(895924),
    f = n(981631);
function _(e) {
    let { channelId: t, command: n, section: r, location: o, initialValues: s, triggerSection: l, queryLength: c, sectionName: u, query: f, searchResultsPosition: _, source: p, commandOrigin: h } = e;
    null != n && i()(n.inputType !== d.iw.PLACEHOLDER, 'command should not be placeholder'),
        a.Z.dispatch({
            type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
            channelId: t,
            command: n,
            section: r,
            initialValues: s,
            location: o,
            triggerSection: l,
            queryLength: c,
            sectionName: u,
            query: f,
            searchResultsPosition: _,
            source: p,
            commandOrigin: h
        });
}
function p(e, t) {
    a.Z.dispatch({
        type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
        channelId: e,
        commandId: t
    });
}
function h(e, t) {
    a.Z.dispatch({
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
    return o.tn.put({
        body: { permissions: r },
        url: f.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
        rejectWithError: !1
    });
}
function E(e, t, n) {
    var r;
    i()(null != t.autocomplete, 'Missing autocomplete context');
    let { query: d, name: _ } = t.autocomplete,
        p = c.default.fromTimestamp(Date.now());
    null != t.channel &&
        (a.Z.dispatch({
            type: 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST',
            nonce: p,
            channelId: t.channel.id,
            query: d,
            name: _
        }),
        null == u.Z.getAutocompleteChoices(t.channel.id, _, d) &&
            o.tn
                .post({
                    url: f.ANM.INTERACTIONS,
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
                    a.Z.dispatch({
                        type: 'INTERACTION_FAILURE',
                        nonce: p
                    });
                }));
}
