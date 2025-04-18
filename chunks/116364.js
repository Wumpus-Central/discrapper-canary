n.d(t, { Z: () => T });
var r = n(200651);
n(192379);
var i = n(392711),
    a = n.n(i),
    o = n(788911),
    s = n(911969),
    l = n(174212),
    c = n(998698),
    u = n(667204),
    d = n(588468),
    f = n(483360),
    _ = n(877565),
    p = n(590921),
    h = n(689079),
    m = n(388032),
    g = n(928874),
    E = n(239840);
let b = { results: { choices: [] } },
    y = {
        results: {
            choices: [],
            isLoading: !0
        }
    },
    v = Array.from({ length: 5 }, () => ({
        name: '',
        displayName: '',
        value: ''
    })),
    O = {
        results: {
            choices: [],
            isError: !0
        }
    },
    I = a().debounce(u.Z, h.Fu, {
        leading: !0,
        trailing: !0
    });
function S(e) {
    return e.displayName;
}
let T = {
    stores: [c.Z, l.Z],
    showEmpty: !0,
    matches(e, t, n, r, i) {
        let a = c.Z.getActiveOption(e.id);
        return i.commands !== p.L8.DISABLED && null != a && (a.type === s.jw.BOOLEAN || !!(null == a ? void 0 : a.autocomplete) || ((null == a ? void 0 : a.choices) != null && a.choices.length > 0));
    },
    queryResults(e, t, n, r, i) {
        var a;
        let o = c.Z.getActiveOption(e.id);
        if (null == o) return b;
        if (o.autocomplete) {
            if (
                (i &&
                    I({
                        command: c.Z.getActiveCommand(e.id),
                        optionValues: r.getCommandOptionValues(),
                        context: {
                            channel: e,
                            guild: t,
                            autocomplete: {
                                name: o.name,
                                query: n
                            }
                        }
                    }),
                l.Z.getLastErrored(e.id))
            )
                return O;
            let a = l.Z.getAutocompleteChoices(e.id, o.name, n);
            return null == a ? y : { results: { choices: a } };
        }
        return {
            results: f.ZP.queryChoiceResults({
                query: n,
                choices: o.type === s.jw.BOOLEAN ? h.ak : null != (a = o.choices) ? a : []
            })
        };
    },
    renderResults(e) {
        let {
            results: { choices: t, isLoading: n, isError: i },
            selectedIndex: a,
            query: s,
            onHover: l,
            onClick: c
        } = e;
        return i
            ? (0, r.jsx)(o.Z, {
                  message: m.NW.string(m.t.rTAbPj),
                  noResultsImageURL: E,
                  className: g.noAutocompleteResults
              })
            : 0 !== t.length || n
              ? (0, _.HI)({
                    query: s,
                    selectedIndex: a,
                    autocompletes: n ? v : t,
                    onHover: l,
                    onClick: c,
                    titleWithQuery: m.t.pg0anJ,
                    titleWithoutQuery: m.NW.string(m.t['+1H47u']),
                    Component: n ? d.ZP.Loading : d.ZP.Generic,
                    getProps: (e, t) => ({
                        key: t.toString(),
                        text: e.displayName
                    }),
                    getQuery: (e) => e,
                    key: 'choice'
                })
              : (0, r.jsx)(o.Z, {
                    message: m.NW.string(m.t['41014u']),
                    noResultsImageURL: E,
                    className: g.noAutocompleteResults
                });
    },
    onSelect(e) {
        let {
                results: { choices: t },
                index: n,
                options: r
            } = e,
            i = t[n];
        return r.insertText(S(i)), { type: p.z2.CHOICE };
    }
};
