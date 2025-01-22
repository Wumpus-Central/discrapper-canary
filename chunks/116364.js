var i = r(200651);
r(192379);
var a = r(392711),
    o = r.n(a),
    s = r(788911),
    l = r(911969),
    u = r(174212),
    c = r(998698),
    d = r(667204),
    f = r(588468),
    p = r(483360),
    h = r(877565),
    _ = r(590921),
    m = r(689079),
    g = r(388032),
    E = r(49508),
    v = r(239840);
let y = { results: { choices: [] } },
    b = {
        results: {
            choices: [],
            isLoading: !0
        }
    },
    I = Array.from({ length: 5 }, () => ({
        name: '',
        displayName: '',
        value: ''
    })),
    T = {
        results: {
            choices: [],
            isError: !0
        }
    },
    S = o().debounce(d.Z, m.Fu, {
        leading: !0,
        trailing: !0
    }),
    A = {
        stores: [c.Z, u.Z],
        showEmpty: !0,
        matches(e, n, r, i, a) {
            let o = c.Z.getActiveOption(e.id);
            return a.commands !== _.L8.DISABLED && null != o && (o.type === l.jw.BOOLEAN || !!(null == o ? void 0 : o.autocomplete) || ((null == o ? void 0 : o.choices) != null && o.choices.length > 0));
        },
        queryResults(e, n, r, i, a) {
            var o;
            let s = c.Z.getActiveOption(e.id);
            if (null == s) return y;
            if (s.autocomplete) {
                if (a) {
                    let a = c.Z.getActiveCommand(e.id);
                    S({
                        command: a,
                        optionValues: i.getCommandOptionValues(),
                        context: {
                            channel: e,
                            guild: n,
                            autocomplete: {
                                name: s.name,
                                query: r
                            }
                        }
                    });
                }
                if (u.Z.getLastErrored(e.id)) return T;
                let o = u.Z.getAutocompleteChoices(e.id, s.name, r);
                return null == o ? b : { results: { choices: o } };
            }
            return {
                results: p.ZP.queryChoiceResults({
                    query: r,
                    choices: s.type === l.jw.BOOLEAN ? m.ak : null !== (o = s.choices) && void 0 !== o ? o : []
                })
            };
        },
        renderResults(e) {
            let {
                results: { choices: n, isLoading: r, isError: a },
                selectedIndex: o,
                query: l,
                onHover: u,
                onClick: c
            } = e;
            return a
                ? (0, i.jsx)(s.Z, {
                      message: g.intl.string(g.t.rTAbPj),
                      noResultsImageURL: v,
                      className: E.noAutocompleteResults
                  })
                : 0 !== n.length || r
                  ? (0, h.HI)({
                        query: l,
                        selectedIndex: o,
                        autocompletes: r ? I : n,
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
                  : (0, i.jsx)(s.Z, {
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
            return i.insertText(C(a)), { type: _.z2.CHOICE };
        }
    };
function C(e) {
    return e.displayName;
}
n.Z = A;
