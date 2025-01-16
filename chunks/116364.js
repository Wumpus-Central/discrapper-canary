var i = r(200651);
r(192379);
var a = r(392711),
    s = r.n(a),
    o = r(788911),
    l = r(911969),
    u = r(174212),
    c = r(998698),
    d = r(667204),
    f = r(588468),
    _ = r(483360),
    h = r(877565),
    p = r(590921),
    m = r(689079),
    g = r(388032),
    E = r(49508),
    v = r(239840);
let I = { results: { choices: [] } },
    T = {
        results: {
            choices: [],
            isLoading: !0
        }
    },
    b = Array.from({ length: 5 }, () => ({
        name: '',
        displayName: '',
        value: ''
    })),
    y = {
        results: {
            choices: [],
            isError: !0
        }
    },
    S = s().debounce(d.Z, m.Fu, {
        leading: !0,
        trailing: !0
    }),
    A = {
        stores: [c.Z, u.Z],
        showEmpty: !0,
        matches(e, n, r, i, a) {
            let s = c.Z.getActiveOption(e.id);
            return a.commands !== p.L8.DISABLED && null != s && (s.type === l.jw.BOOLEAN || !!(null == s ? void 0 : s.autocomplete) || ((null == s ? void 0 : s.choices) != null && s.choices.length > 0));
        },
        queryResults(e, n, r, i, a) {
            var s;
            let o = c.Z.getActiveOption(e.id);
            if (null == o) return I;
            if (o.autocomplete) {
                if (a) {
                    let a = c.Z.getActiveCommand(e.id);
                    S({
                        command: a,
                        optionValues: i.getCommandOptionValues(),
                        context: {
                            channel: e,
                            guild: n,
                            autocomplete: {
                                name: o.name,
                                query: r
                            }
                        }
                    });
                }
                if (u.Z.getLastErrored(e.id)) return y;
                let s = u.Z.getAutocompleteChoices(e.id, o.name, r);
                return null == s ? T : { results: { choices: s } };
            }
            return {
                results: _.ZP.queryChoiceResults({
                    query: r,
                    choices: o.type === l.jw.BOOLEAN ? m.ak : null !== (s = o.choices) && void 0 !== s ? s : []
                })
            };
        },
        renderResults(e) {
            let {
                results: { choices: n, isLoading: r, isError: a },
                selectedIndex: s,
                query: l,
                onHover: u,
                onClick: c
            } = e;
            return a
                ? (0, i.jsx)(o.Z, {
                      message: g.intl.string(g.t.rTAbPj),
                      noResultsImageURL: v,
                      className: E.noAutocompleteResults
                  })
                : 0 !== n.length || r
                  ? (0, h.HI)({
                        query: l,
                        selectedIndex: s,
                        autocompletes: r ? b : n,
                        onHover: u,
                        onClick: c,
                        titleWithQuery: g.t.pg0anJ,
                        titleWithoutQuery: g.intl.string(g.t['+1H47u']),
                        Component: r ? f.ZP.Loading : f.ZP.Generic,
                        getProps: (e, n) => ({
                            key: n.toString(),
                            text: e.displayName
                        }),
                        getQuery: (e) => e,
                        key: 'choice'
                    })
                  : (0, i.jsx)(o.Z, {
                        message: g.intl.string(g.t['41014u']),
                        noResultsImageURL: v,
                        className: E.noAutocompleteResults
                    });
        },
        onSelect(e) {
            let {
                    results: { choices: n },
                    index: r,
                    options: i
                } = e,
                a = n[r];
            return i.insertText(N(a)), { type: p.z2.CHOICE };
        }
    };
function N(e) {
    return e.displayName;
}
n.Z = A;
