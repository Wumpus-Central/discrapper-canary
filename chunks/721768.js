"use strict";
n.d(t, { Gf: () => E, H2: () => h, WL: () => p, _y: () => I, e0: () => A, yL: () => f });
var i = n(284009),
    r = n.n(i),
    a = n(636537),
    s = n(228366),
    l = n(155718),
    o = n(280450),
    d = n(935208),
    c = n(166862),
    u = n(392054),
    _ = n(652215);
function E(e) {
    let {
        channelId: t,
        command: n,
        section: i,
        location: a,
        initialValues: l,
        triggerSection: o,
        queryLength: d,
        sectionName: c,
        query: _,
        searchResultsPosition: E,
        source: A,
        commandOrigin: h,
    } = e;
    null != n && r()(n.inputType !== u.y$.PLACEHOLDER, "command should not be placeholder"),
        s.h.dispatch({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: n,
            section: i,
            initialValues: l,
            location: a,
            triggerSection: o,
            queryLength: d,
            sectionName: c,
            query: _,
            searchResultsPosition: E,
            source: A,
            commandOrigin: h,
        });
}
function A(e, t) {
    s.h.dispatch({ type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId: e, commandId: t });
}
function h(e, t) {
    s.h.dispatch({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: e, changedOptionStates: t });
}
function I(e, t) {
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
function f(e, t, n, i) {
    return a.Bo.put({
        body: { permissions: i },
        url: _.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
        rejectWithError: !1,
    });
}
function p(e, t, n) {
    r()(null != t.autocomplete, "Missing autocomplete context");
    let { query: i, name: u } = t.autocomplete,
        E = d.default.fromTimestamp(Date.now());
    null == t.channel ||
        (s.h.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: E,
            channelId: t.channel.id,
            query: i,
            name: u,
        }),
        null == c.A.getAutocompleteChoices(t.channel.id, u, i) &&
            a.Bo.post({
                url: _.Rsh.INTERACTIONS,
                body: {
                    type: l.G4.APPLICATION_COMMAND_AUTOCOMPLETE,
                    application_id: e.applicationId,
                    guild_id: t.guild?.id,
                    channel_id: t.channel.id,
                    session_id: o.default.getSessionId(),
                    data: n,
                    nonce: E,
                },
                timeout: 3e3,
                rejectWithError: !0,
            }).catch(() => {
                s.h.dispatch({ type: "INTERACTION_FAILURE", nonce: E });
            }));
}
