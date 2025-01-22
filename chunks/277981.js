var i = r(200651),
    a = r(192379),
    o = r(392711),
    s = r.n(o),
    l = r(481060),
    u = r(570140),
    c = r(85235),
    d = r(367907),
    f = r(998698),
    p = r(895924),
    h = r(588468),
    _ = r(600164),
    m = r(718745),
    g = r(590921),
    E = r(665692),
    v = r(981631),
    y = r(388032),
    b = r(781010);
let I = {
    results: {
        command: null,
        integrations: [],
        isLoading: !1
    }
};
function T(e, n, r) {
    var i, a;
    let o;
    return (
        r.commands === g.L8.OLD_BUILT_INS ? ((o = n.split(' ')[0].substring(E.GI.length)), (n = n.substring((null !== (i = o.length) && void 0 !== i ? i : 0) + E.GI.length))) : (o = null === (a = f.Z.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.untranslatedName),
        {
            command: o,
            query: n.trim()
        }
    );
}
let S = {
    stores: [f.Z, m.Z],
    matches(e, n, r, i, a) {
        var o;
        return a.commands !== g.L8.DISABLED && (a.commands === g.L8.OLD_BUILT_INS ? r.startsWith(E.GI + 'gif') || r.startsWith(E.GI + 'tenor') : (null === (o = f.Z.getActiveCommand(e.id)) || void 0 === o ? void 0 : o.integrationType) === v.q9n.GIF && f.Z.getOptionStates(e.id).query.hasValue);
    },
    queryResults(e, n, r, i, a) {
        let { command: o, query: l } = T(e, r, i);
        if (null == o) return I;
        let u = s().findKey(v.nkL, (e) => e.command === o);
        a && null != u && l.length > 0 && c.Z.search(u, l);
        let d = m.Z.getResults(u, l);
        return null == d
            ? I
            : {
                  results: {
                      command: o,
                      integrations: d.results,
                      isLoading: d.loading
                  }
              };
    },
    renderResults(e) {
        let {
                results: { integrations: n, isLoading: r },
                selectedIndex: o,
                channel: s,
                query: u,
                options: c,
                onHover: d,
                onClick: p
            } = e,
            { command: m, query: E } = T(s, u, c);
        if (null == m || 0 === E.length) return null;
        if (r)
            return (0, i.jsx)(l.Spinner, {
                className: b.spinner,
                type: l.Spinner.Type.SPINNING_CIRCLE
            });
        if (null != n) {
            var I, S;
            let e = !1,
                r = n.map((n, r) => {
                    if (n.type === v.q9n.GIF) {
                        var a, s, l;
                        return (
                            (e = !0),
                            (0, i.jsx)(
                                h.ZP.GIFIntegration,
                                {
                                    className: b.horizontalAutocomplete,
                                    onClick: p,
                                    onHover: d,
                                    selected: o === r,
                                    index: r,
                                    width: null !== (a = n.meta.width) && void 0 !== a ? a : 0,
                                    height: null !== (s = n.meta.height) && void 0 !== s ? s : 0,
                                    src: null !== (l = n.meta.src) && void 0 !== l ? l : '',
                                    url: n.meta.url
                                },
                                ''.concat(n.meta.url).concat(n.meta.src)
                            )
                        );
                    }
                }),
                l = c.commands === g.L8.OLD_BUILT_INS ? m : null !== (S = null === (I = f.Z.getActiveCommand(s.id)) || void 0 === I ? void 0 : I.integrationTitle) && void 0 !== S ? S : m,
                u =
                    E.length > 0 && null != l
                        ? y.intl.format(y.t['3njXz8'], {
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
                            ? (0, i.jsx)(_.Z, {
                                  className: b.horizontalAutocompletes,
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
            options: o,
            channel: s,
            guild: l
        } = e;
        if (null == n) return { type: null };
        let c = r[i];
        if (
            (a === g.QB.INSERT ? o.replaceText(A(c)) : o.sendMessage(A(c)),
            d.ZP.trackWithMetadata(v.rMx.SEARCH_RESULT_SELECTED, {
                search_type: v.aib.GIF,
                index_num: i,
                source_object: '/'.concat(n)
            }),
            o.commands !== g.L8.OLD_BUILT_INS)
        ) {
            let e = f.Z.getActiveCommand(s.id);
            (null == e ? void 0 : e.inputType) === p.iw.BUILT_IN_INTEGRATION &&
                (u.Z.dispatch({
                    type: 'APPLICATION_COMMAND_USED',
                    context: {
                        channel: s,
                        guild: l
                    },
                    command: e,
                    commandOrigin: p.bB.CHAT
                }),
                d.ZP.trackWithMetadata(v.rMx.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: f.Z.getSource(s.id)
                }));
        }
        return { type: g.z2.GIF };
    }
};
function A(e) {
    return e.meta.url;
}
n.Z = S;
