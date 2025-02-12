n.d(t, { Z: () => S });
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n.n(a),
    o = n(481060),
    l = n(570140),
    u = n(85235),
    c = n(367907),
    d = n(998698),
    f = n(895924),
    _ = n(588468),
    p = n(600164),
    h = n(718745),
    m = n(590921),
    g = n(665692),
    E = n(981631),
    v = n(388032),
    y = n(949575);
let I = {
    results: {
        command: null,
        integrations: [],
        isLoading: !1
    }
};
function T(e, t, n) {
    var i, r;
    let a;
    return (
        n.commands === m.L8.OLD_BUILT_INS ? ((a = t.split(' ')[0].substring(g.GI.length)), (t = t.substring((null !== (i = a.length) && void 0 !== i ? i : 0) + g.GI.length))) : (a = null === (r = d.Z.getActiveCommand(e.id)) || void 0 === r ? void 0 : r.untranslatedName),
        {
            command: a,
            query: t.trim()
        }
    );
}
function b(e) {
    return e.meta.url;
}
let S = {
    stores: [d.Z, h.Z],
    matches(e, t, n, i, r) {
        var a;
        return r.commands !== m.L8.DISABLED && (r.commands === m.L8.OLD_BUILT_INS ? n.startsWith(g.GI + 'gif') || n.startsWith(g.GI + 'tenor') : (null === (a = d.Z.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.integrationType) === E.q9n.GIF && d.Z.getOptionStates(e.id).query.hasValue);
    },
    queryResults(e, t, n, i, r) {
        let { command: a, query: o } = T(e, n, i);
        if (null == a) return I;
        let l = s().findKey(E.nkL, (e) => e.command === a);
        r && null != l && o.length > 0 && u.Z.search(l, o);
        let c = h.Z.getResults(l, o);
        return null == c
            ? I
            : {
                  results: {
                      command: a,
                      integrations: c.results,
                      isLoading: c.loading
                  }
              };
    },
    renderResults(e) {
        let {
                results: { integrations: t, isLoading: n },
                selectedIndex: a,
                channel: s,
                query: l,
                options: u,
                onHover: c,
                onClick: f
            } = e,
            { command: h, query: g } = T(s, l, u);
        if (null == h || 0 === g.length) return null;
        if (n)
            return (0, i.jsx)(o.$jN, {
                className: y.spinner,
                type: o.$jN.Type.SPINNING_CIRCLE
            });
        if (null != t) {
            var I, b;
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === E.q9n.GIF) {
                        var r, s, o;
                        return (
                            (e = !0),
                            (0, i.jsx)(
                                _.ZP.GIFIntegration,
                                {
                                    className: y.horizontalAutocomplete,
                                    onClick: f,
                                    onHover: c,
                                    selected: a === n,
                                    index: n,
                                    width: null !== (r = t.meta.width) && void 0 !== r ? r : 0,
                                    height: null !== (s = t.meta.height) && void 0 !== s ? s : 0,
                                    src: null !== (o = t.meta.src) && void 0 !== o ? o : '',
                                    url: t.meta.url
                                },
                                ''.concat(t.meta.url).concat(t.meta.src)
                            )
                        );
                    }
                }),
                o = u.commands === m.L8.OLD_BUILT_INS ? h : null !== (b = null === (I = d.Z.getActiveCommand(s.id)) || void 0 === I ? void 0 : I.integrationTitle) && void 0 !== b ? b : h,
                l =
                    g.length > 0 && null != o
                        ? v.intl.format(v.t['3njXz8'], {
                              query: g,
                              command: o
                          })
                        : null != o
                          ? o
                          : h;
            return (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)(_.ZP.Title, { title: l }),
                        e
                            ? (0, i.jsx)(p.Z, {
                                  className: y.horizontalAutocompletes,
                                  children: n
                              })
                            : n
                    ]
                },
                'gifs'
            );
        }
    },
    onSelect(e) {
        let {
            results: { command: t, integrations: n },
            index: i,
            type: r,
            options: a,
            channel: s,
            guild: o
        } = e;
        if (null == t) return { type: null };
        let u = n[i];
        if (
            (r === m.QB.INSERT ? a.replaceText(b(u)) : a.sendMessage(b(u)),
            c.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_SELECTED, {
                search_type: E.aib.GIF,
                index_num: i,
                source_object: '/'.concat(t)
            }),
            a.commands !== m.L8.OLD_BUILT_INS)
        ) {
            let e = d.Z.getActiveCommand(s.id);
            (null == e ? void 0 : e.inputType) === f.iw.BUILT_IN_INTEGRATION &&
                (l.Z.dispatch({
                    type: 'APPLICATION_COMMAND_USED',
                    context: {
                        channel: s,
                        guild: o
                    },
                    command: e,
                    commandOrigin: f.bB.CHAT
                }),
                c.ZP.trackWithMetadata(E.rMx.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: d.Z.getSource(s.id)
                }));
        }
        return { type: m.z2.GIF };
    }
};
