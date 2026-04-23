n.d(t, { Gf: () => p, H2: () => h, WL: () => A, _y: () => E, e0: () => C, yL: () => m });
var r = n(284009),
    a = n.n(r),
    i = n(636537),
    o = n(228366),
    l = n(155718),
    s = n(495544),
    d = n(935208),
    u = n(166862),
    c = n(392054),
    _ = n(652215);
function p(e) {
    let {
        channelId: t,
        command: n,
        section: r,
        location: i,
        initialValues: l,
        triggerSection: s,
        queryLength: d,
        sectionName: u,
        query: _,
        searchResultsPosition: p,
        source: C,
        commandOrigin: h,
    } = e;
    null != n && a()(n.inputType !== c.y$.PLACEHOLDER, "command should not be placeholder"),
        o.h.dispatch({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: n,
            section: r,
            initialValues: l,
            location: i,
            triggerSection: s,
            queryLength: d,
            sectionName: u,
            query: _,
            searchResultsPosition: p,
            source: C,
            commandOrigin: h,
        });
}
function C(e, t) {
    o.h.dispatch({ type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId: e, commandId: t });
}
function h(e, t) {
    o.h.dispatch({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: e, changedOptionStates: t });
}
function E(e, t) {
    h(
        e,
        Object.fromEntries(
            Object.entries(t).map((e) => {
                let [t, n] = e;
                return [t, { lastValidationResult: n }];
            }),
        ),
    );
}
function m(e, t, n, r) {
    return i.Bo.put({
        body: { permissions: r },
        url: _.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
        rejectWithError: !1,
    });
}
function A(e, t, n) {
    a()(null != t.autocomplete, "Missing autocomplete context");
    let { query: r, name: c } = t.autocomplete,
        p = d.default.fromTimestamp(Date.now());
    null == t.channel ||
        (o.h.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: p,
            channelId: t.channel.id,
            query: r,
            name: c,
        }),
        null == u.A.getAutocompleteChoices(t.channel.id, c, r) &&
            i.Bo.post({
                url: _.Rsh.INTERACTIONS,
                body: {
                    type: l.G4.APPLICATION_COMMAND_AUTOCOMPLETE,
                    application_id: e.applicationId,
                    guild_id: t.guild?.id,
                    channel_id: t.channel.id,
                    session_id: s.default.getSessionId(),
                    data: n,
                    nonce: p,
                },
                timeout: 3e3,
                rejectWithError: !0,
            }).catch(() => {
                o.h.dispatch({ type: "INTERACTION_FAILURE", nonce: p });
            }));
}
