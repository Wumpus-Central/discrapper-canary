n.d(t, { Gf: () => A, H2: () => f, WL: () => T, _y: () => I, e0: () => h, yL: () => p });
var i = n(284009),
    r = n.n(i),
    a = n(127258),
    s = n(636537),
    l = n(73153),
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
        initialValues: s,
        triggerSection: o,
        queryLength: d,
        sectionName: c,
        query: _,
        searchResultsPosition: E,
        source: A,
        commandOrigin: h,
    } = e;
    (null != n && r()(n.inputType !== u.y$.PLACEHOLDER, "command should not be placeholder"),
        l.h.dispatch({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: n,
            section: i,
            initialValues: s,
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
    l.h.dispatch({ type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId: e, commandId: t });
}
function f(e, t) {
    l.h.dispatch({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: e, changedOptionStates: t });
}
function I(e, t) {
    f(
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
    return s.Bo.put({
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
        (l.h.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: h,
            channelId: t.channel.id,
            query: i,
            name: u,
            contextKey: A,
        }),
        null == c.A.getAutocompleteChoices(t.channel.id, u, i) &&
            s.Bo.post({
                url: E.Rsh.INTERACTIONS,
                body: {
                    type: a.G.APPLICATION_COMMAND_AUTOCOMPLETE,
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
                l.h.dispatch({ type: "INTERACTION_FAILURE", nonce: h });
            }));
}
