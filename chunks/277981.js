n.d(t, { Z: () => S }), n(301563), n(566702);
var r = n(200651),
    i = n(192379),
    o = n(392711),
    a = n.n(o),
    s = n(481060),
    l = n(570140),
    c = n(85235),
    u = n(367907),
    d = n(998698),
    f = n(895924),
    _ = n(588468),
    p = n(600164),
    h = n(718745),
    m = n(590921),
    g = n(665692),
    E = n(981631),
    b = n(388032),
    y = n(600706);
let v = {
    results: {
        command: null,
        integrations: [],
        isLoading: !1
    }
};
function O(e, t, n) {
    var r, i;
    let o;
    return (
        n.commands === m.L8.OLD_BUILT_INS ? ((o = t.split(' ')[0].substring(g.GI.length)), (t = t.substring((null != (r = o.length) ? r : 0) + g.GI.length))) : (o = null == (i = d.Z.getActiveCommand(e.id)) ? void 0 : i.untranslatedName),
        {
            command: o,
            query: t.trim()
        }
    );
}
function I(e) {
    return e.meta.url;
}
let S = {
    stores: [d.Z, h.Z],
    matches(e, t, n, r, i) {
        var o;
        return i.commands !== m.L8.DISABLED && (i.commands === m.L8.OLD_BUILT_INS ? n.startsWith(g.GI + 'gif') || n.startsWith(g.GI + 'tenor') : (null == (o = d.Z.getActiveCommand(e.id)) ? void 0 : o.integrationType) === E.q9n.GIF && d.Z.getOptionStates(e.id).query.hasValue);
    },
    queryResults(e, t, n, r, i) {
        let { command: o, query: s } = O(e, n, r);
        if (null == o) return v;
        let l = a().findKey(E.nkL, (e) => e.command === o);
        i && null != l && s.length > 0 && c.Z.search(l, s);
        let u = h.Z.getResults(l, s);
        return null == u
            ? v
            : {
                  results: {
                      command: o,
                      integrations: u.results,
                      isLoading: u.loading
                  }
              };
    },
    renderResults(e) {
        let {
                results: { integrations: t, isLoading: n },
                selectedIndex: o,
                channel: a,
                query: l,
                options: c,
                onHover: u,
                onClick: f
            } = e,
            { command: h, query: g } = O(a, l, c);
        if (null == h || 0 === g.length) return null;
        if (n)
            return (0, r.jsx)(s.$jN, {
                className: y.spinner,
                type: s.$jN.Type.SPINNING_CIRCLE
            });
        if (null != t) {
            var v, I;
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === E.q9n.GIF) {
                        var i, a, s;
                        return (
                            (e = !0),
                            (0, r.jsx)(
                                _.ZP.GIFIntegration,
                                {
                                    className: y.horizontalAutocomplete,
                                    onClick: f,
                                    onHover: u,
                                    selected: o === n,
                                    index: n,
                                    width: null != (i = t.meta.width) ? i : 0,
                                    height: null != (a = t.meta.height) ? a : 0,
                                    src: null != (s = t.meta.src) ? s : '',
                                    url: t.meta.url
                                },
                                ''.concat(t.meta.url).concat(t.meta.src)
                            )
                        );
                    }
                }),
                s = c.commands === m.L8.OLD_BUILT_INS ? h : null != (I = null == (v = d.Z.getActiveCommand(a.id)) ? void 0 : v.integrationTitle) ? I : h,
                l =
                    g.length > 0 && null != s
                        ? b.NW.format(b.t['3njXz8'], {
                              query: g,
                              command: s
                          })
                        : null != s
                          ? s
                          : h;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(_.ZP.Title, { title: l }),
                        e
                            ? (0, r.jsx)(p.Z, {
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
            index: r,
            type: i,
            options: o,
            channel: a,
            guild: s
        } = e;
        if (null == t) return { type: null };
        let c = n[r];
        if (
            (i === m.QB.INSERT ? o.replaceText(I(c)) : o.sendMessage(I(c)),
            u.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_SELECTED, {
                search_type: E.aib.GIF,
                index_num: r,
                source_object: '/'.concat(t)
            }),
            o.commands !== m.L8.OLD_BUILT_INS)
        ) {
            let e = d.Z.getActiveCommand(a.id);
            (null == e ? void 0 : e.inputType) === f.iw.BUILT_IN_INTEGRATION &&
                (l.Z.dispatch({
                    type: 'APPLICATION_COMMAND_USED',
                    context: {
                        channel: a,
                        guild: s
                    },
                    command: e,
                    commandOrigin: f.bB.CHAT
                }),
                u.ZP.trackWithMetadata(E.rMx.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: d.Z.getSource(a.id)
                }));
        }
        return { type: m.z2.GIF };
    }
};
