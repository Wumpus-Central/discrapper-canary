n.d(t, { Gf: () => E, H2: () => h, WL: () => I, _y: () => c, e0: () => p, yL: () => A });
var o = n(284009),
    r = n.n(o),
    i = n(636537),
    a = n(228366),
    l = n(155718),
    s = n(495544),
    u = n(935208),
    _ = n(166862),
    d = n(392054),
    C = n(652215);
function E(e) {
    let {
        channelId: t,
        command: n,
        section: o,
        location: i,
        initialValues: l,
        triggerSection: s,
        queryLength: u,
        sectionName: _,
        query: C,
        searchResultsPosition: E,
        source: p,
        commandOrigin: h,
    } = e;
    null != n && r()(n.inputType !== d.y$.PLACEHOLDER, "command should not be placeholder"),
        a.h.dispatch({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: n,
            section: o,
            initialValues: l,
            location: i,
            triggerSection: s,
            queryLength: u,
            sectionName: _,
            query: C,
            searchResultsPosition: E,
            source: p,
            commandOrigin: h,
        });
}
function p(e, t) {
    a.h.dispatch({ type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId: e, commandId: t });
}
function h(e, t) {
    a.h.dispatch({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: e, changedOptionStates: t });
}
function c(e, t) {
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
function A(e, t, n, o) {
    return i.Bo.put({
        body: { permissions: o },
        url: C.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
        rejectWithError: !1,
    });
}
function I(e, t, n) {
    r()(null != t.autocomplete, "Missing autocomplete context");
    let { query: o, name: d } = t.autocomplete,
        E = u.default.fromTimestamp(Date.now());
    null == t.channel ||
        (a.h.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: E,
            channelId: t.channel.id,
            query: o,
            name: d,
        }),
        null == _.A.getAutocompleteChoices(t.channel.id, d, o) &&
            i.Bo.post({
                url: C.Rsh.INTERACTIONS,
                body: {
                    type: l.G4.APPLICATION_COMMAND_AUTOCOMPLETE,
                    application_id: e.applicationId,
                    guild_id: t.guild?.id,
                    channel_id: t.channel.id,
                    session_id: s.default.getSessionId(),
                    data: n,
                    nonce: E,
                },
                timeout: 3e3,
                rejectWithError: !0,
            }).catch(() => {
                a.h.dispatch({ type: "INTERACTION_FAILURE", nonce: E });
            }));
}
