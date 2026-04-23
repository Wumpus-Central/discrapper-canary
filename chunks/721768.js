"use strict";
n.d(t, { Gf: () => f, H2: () => h, WL: () => g, _y: () => E, e0: () => p, yL: () => m });
var r = n(284009),
    i = n.n(r),
    s = n(562465),
    a = n(73153),
    o = n(155718),
    l = n(961350),
    u = n(661191),
    c = n(166862),
    d = n(392054),
    _ = n(652215);
function f(e) {
    let {
        channelId: t,
        command: n,
        section: r,
        location: s,
        initialValues: o,
        triggerSection: l,
        queryLength: u,
        sectionName: c,
        query: _,
        searchResultsPosition: f,
        source: p,
        commandOrigin: h,
    } = e;
    null != n && i()(n.inputType !== d.y$.PLACEHOLDER, "command should not be placeholder"),
        a.h.dispatch({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: n,
            section: r,
            initialValues: o,
            location: s,
            triggerSection: l,
            queryLength: u,
            sectionName: c,
            query: _,
            searchResultsPosition: f,
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
    return s.Bo.put({
        body: { permissions: r },
        url: _.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
        rejectWithError: !1,
    });
}
function g(e, t, n) {
    i()(null != t.autocomplete, "Missing autocomplete context");
    let { query: r, name: d } = t.autocomplete,
        f = u.default.fromTimestamp(Date.now());
    null == t.channel ||
        (a.h.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: f,
            channelId: t.channel.id,
            query: r,
            name: d,
        }),
        null == c.A.getAutocompleteChoices(t.channel.id, d, r) &&
            s.Bo.post({
                url: _.Rsh.INTERACTIONS,
                body: {
                    type: o.G4.APPLICATION_COMMAND_AUTOCOMPLETE,
                    application_id: e.applicationId,
                    guild_id: t.guild?.id,
                    channel_id: t.channel.id,
                    session_id: l.default.getSessionId(),
                    data: n,
                    nonce: f,
                },
                timeout: 3e3,
                rejectWithError: !0,
            }).catch(() => {
                a.h.dispatch({ type: "INTERACTION_FAILURE", nonce: f });
            }));
}
