var i = r(200651),
    a = r(192379),
    s = r(392711),
    o = r.n(s),
    l = r(481060),
    u = r(570140),
    c = r(85235),
    d = r(367907),
    f = r(998698),
    _ = r(895924),
    h = r(588468),
    p = r(600164),
    m = r(718745),
    g = r(590921),
    E = r(665692),
    v = r(981631),
    I = r(388032),
    T = r(781010);
let b = {
    results: {
        command: null,
        integrations: [],
        isLoading: !1
    }
};
function y(e, n, r) {
    var i, a;
    let s;
    return (
        r.commands === g.L8.OLD_BUILT_INS ? ((s = n.split(' ')[0].substring(E.GI.length)), (n = n.substring((null !== (i = s.length) && void 0 !== i ? i : 0) + E.GI.length))) : (s = null === (a = f.Z.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.untranslatedName),
        {
            command: s,
            query: n.trim()
        }
    );
}
let S = {
    stores: [f.Z, m.Z],
    matches(e, n, r, i, a) {
        var s;
        return a.commands !== g.L8.DISABLED && (a.commands === g.L8.OLD_BUILT_INS ? r.startsWith(E.GI + 'gif') || r.startsWith(E.GI + 'tenor') : (null === (s = f.Z.getActiveCommand(e.id)) || void 0 === s ? void 0 : s.integrationType) === v.q9n.GIF && f.Z.getOptionStates(e.id).query.hasValue);
    },
    queryResults(e, n, r, i, a) {
        let { command: s, query: l } = y(e, r, i);
        if (null == s) return b;
        let u = o().findKey(v.nkL, (e) => e.command === s);
        a && null != u && l.length > 0 && c.Z.search(u, l);
        let d = m.Z.getResults(u, l);
        return null == d
            ? b
            : {
                  results: {
                      command: s,
                      integrations: d.results,
                      isLoading: d.loading
                  }
              };
    },
    renderResults(e) {
        let {
                results: { integrations: n, isLoading: r },
                selectedIndex: s,
                channel: o,
                query: u,
                options: c,
                onHover: d,
                onClick: _
            } = e,
            { command: m, query: E } = y(o, u, c);
        if (null == m || 0 === E.length) return null;
        if (r)
            return (0, i.jsx)(l.Spinner, {
                className: T.spinner,
                type: l.Spinner.Type.SPINNING_CIRCLE
            });
        if (null != n) {
            var b, S;
            let e = !1,
                r = n.map((n, r) => {
                    if (n.type === v.q9n.GIF) {
                        var a, o, l;
                        return (
                            (e = !0),
                            (0, i.jsx)(
                                h.ZP.GIFIntegration,
                                {
                                    className: T.horizontalAutocomplete,
                                    onClick: _,
                                    onHover: d,
                                    selected: s === r,
                                    index: r,
                                    width: null !== (a = n.meta.width) && void 0 !== a ? a : 0,
                                    height: null !== (o = n.meta.height) && void 0 !== o ? o : 0,
                                    src: null !== (l = n.meta.src) && void 0 !== l ? l : '',
                                    url: n.meta.url
                                },
                                ''.concat(n.meta.url).concat(n.meta.src)
                            )
                        );
                    }
                }),
                l = c.commands === g.L8.OLD_BUILT_INS ? m : null !== (S = null === (b = f.Z.getActiveCommand(o.id)) || void 0 === b ? void 0 : b.integrationTitle) && void 0 !== S ? S : m,
                u =
                    E.length > 0 && null != l
                        ? I.intl.format(I.t['3njXz8'], {
                              query: E,
                              command: l
                          })
                        : null != l
                          ? l
                          : m;
            return (0, i.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, i.jsx)(h.ZP.Title, { title: u }),
                        e
                            ? (0, i.jsx)(p.Z, {
                                  className: T.horizontalAutocompletes,
                                  children: r
                              })
                            : r
                    ]
                },
                'gifs'
            );
        }
    },
    onSelect(e) {
        let {
            results: { command: n, integrations: r },
            index: i,
            type: a,
            options: s,
            channel: o,
            guild: l
        } = e;
        if (null == n) return { type: null };
        let c = r[i];
        if (
            (a === g.QB.INSERT ? s.replaceText(A(c)) : s.sendMessage(A(c)),
            d.ZP.trackWithMetadata(v.rMx.SEARCH_RESULT_SELECTED, {
                search_type: v.aib.GIF,
                index_num: i,
                source_object: '/'.concat(n)
            }),
            s.commands !== g.L8.OLD_BUILT_INS)
        ) {
            let e = f.Z.getActiveCommand(o.id);
            (null == e ? void 0 : e.inputType) === _.iw.BUILT_IN_INTEGRATION &&
                (u.Z.dispatch({
                    type: 'APPLICATION_COMMAND_USED',
                    context: {
                        channel: o,
                        guild: l
                    },
                    command: e,
                    commandOrigin: _.bB.CHAT
                }),
                d.ZP.trackWithMetadata(v.rMx.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: f.Z.getSource(o.id)
                }));
        }
        return { type: g.z2.GIF };
    }
};
function A(e) {
    return e.meta.url;
}
n.Z = S;
