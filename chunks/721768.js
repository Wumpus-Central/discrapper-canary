n.d(t, {
    Gf: () => p,
    H2: () => h,
    WL: () => E,
    _y: () => m,
    e0: () => _,
    yL: () => g,
}),
    n(446912),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(562465),
    s = n(73153),
    o = n(155718),
    l = n(961350),
    c = n(661191),
    u = n(166862),
    d = n(392054),
    f = n(652215);
function p(e) {
    let {
        channelId: t,
        command: n,
        section: r,
        location: a,
        initialValues: o,
        triggerSection: l,
        queryLength: c,
        sectionName: u,
        query: f,
        searchResultsPosition: p,
        source: _,
        commandOrigin: h,
    } = e;
    null != n && i()(n.inputType !== d.y$.PLACEHOLDER, "command should not be placeholder"),
        s.h.dispatch({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: n,
            section: r,
            initialValues: o,
            location: a,
            triggerSection: l,
            queryLength: c,
            sectionName: u,
            query: f,
            searchResultsPosition: p,
            source: _,
            commandOrigin: h,
        });
}
function _(e, t) {
    s.h.dispatch({
        type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
        channelId: e,
        commandId: t,
    });
}
function h(e, t) {
    s.h.dispatch({
        type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
        channelId: e,
        changedOptionStates: t,
    });
}
function m(e, t) {
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
function g(e, t, n, r) {
    return a.Bo.put({
        body: { permissions: r },
        url: f.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
        rejectWithError: !1,
    });
}
function E(e, t, n) {
    var r;
    i()(null != t.autocomplete, "Missing autocomplete context");
    let { query: d, name: p } = t.autocomplete,
        _ = c.default.fromTimestamp(Date.now());
    null == t.channel ||
        (s.h.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: _,
            channelId: t.channel.id,
            query: d,
            name: p,
        }),
        null == u.A.getAutocompleteChoices(t.channel.id, p, d) &&
            a.Bo.post({
                url: f.Rsh.INTERACTIONS,
                body: {
                    type: o.G4.APPLICATION_COMMAND_AUTOCOMPLETE,
                    application_id: e.applicationId,
                    guild_id: null == (r = t.guild) ? void 0 : r.id,
                    channel_id: t.channel.id,
                    session_id: l.default.getSessionId(),
                    data: n,
                    nonce: _,
                },
                timeout: 3000,
                rejectWithError: !0,
            }).catch(() => {
                s.h.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: _,
                });
            }));
}
