n.d(t, { Gf: () => A, H2: () => I, WL: () => T, _y: () => f, e0: () => h, yL: () => p });
var i = n(284009),
    r = n.n(i),
    a = n(636537),
    s = n(228366),
    l = n(155718),
    o = n(280450),
    d = n(935208),
    c = n(166862),
    u = n(392054),
    _ = n(168186),
    E = n(652215);
function A(e) {
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
    (null != n && r()(n.inputType !== u.y$.PLACEHOLDER, "command should not be placeholder"),
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
        }));
}
function h(e, t) {
    s.h.dispatch({ type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId: e, commandId: t });
}
function I(e, t) {
    s.h.dispatch({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: e, changedOptionStates: t });
}
function f(e, t) {
    I(
        e,
        Object.fromEntries(
            Object.entries(t).map((e) => {
                let [t, n] = e;
                return [t, { lastValidationResult: n }];
            }),
        ),
    );
}
function p(e, t, n, i) {
    return a.Bo.put({
        body: { permissions: i },
        url: E.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
        rejectWithError: !1,
    });
}
function T(e, t, n) {
    r()(null != t.autocomplete, "Missing autocomplete context");
    let { query: i, name: u } = t.autocomplete,
        A = "";
    for (let e of (0, _.Ez)(n).interactionOptions ?? [])
        ("focused" in e && e.focused) || (A += `${e.name}=${String(e.value)}\0`);
    let h = d.default.fromTimestamp(Date.now());
    null == t.channel ||
        (s.h.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: h,
            channelId: t.channel.id,
            query: i,
            name: u,
            contextKey: A,
        }),
        null == c.A.getAutocompleteChoices(t.channel.id, u, i) &&
            a.Bo.post({
                url: E.Rsh.INTERACTIONS,
                body: {
                    type: l.G4.APPLICATION_COMMAND_AUTOCOMPLETE,
                    application_id: e.applicationId,
                    guild_id: t.guild?.id,
                    channel_id: t.channel.id,
                    session_id: o.default.getSessionId(),
                    data: n,
                    nonce: h,
                },
                timeout: 3e3,
                rejectWithError: !0,
            }).catch(() => {
                s.h.dispatch({ type: "INTERACTION_FAILURE", nonce: h });
            }));
}
