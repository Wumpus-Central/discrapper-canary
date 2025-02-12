n.d(t, { Z: () => A });
var i = n(200651);
n(192379);
var r = n(392711),
    a = n.n(r),
    s = n(788911),
    o = n(911969),
    l = n(174212),
    u = n(998698),
    c = n(667204),
    d = n(588468),
    f = n(483360),
    _ = n(877565),
    p = n(590921),
    h = n(689079),
    m = n(388032),
    g = n(411103),
    E = n(239840);
let v = { results: { choices: [] } },
    y = {
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
    b = a().debounce(c.Z, h.Fu, {
        leading: !0,
        trailing: !0
    });
function S(e) {
    return e.displayName;
}
let A = {
    stores: [u.Z, l.Z],
    showEmpty: !0,
    matches(e, t, n, i, r) {
        let a = u.Z.getActiveOption(e.id);
        return r.commands !== p.L8.DISABLED && null != a && (a.type === o.jw.BOOLEAN || !!(null == a ? void 0 : a.autocomplete) || ((null == a ? void 0 : a.choices) != null && a.choices.length > 0));
    },
    queryResults(e, t, n, i, r) {
        var a;
        let s = u.Z.getActiveOption(e.id);
        if (null == s) return v;
        if (s.autocomplete) {
            if (
                (r &&
                    b({
                        command: u.Z.getActiveCommand(e.id),
                        optionValues: i.getCommandOptionValues(),
                        context: {
                            channel: e,
                            guild: t,
                            autocomplete: {
                                name: s.name,
                                query: n
                            }
                        }
                    }),
                l.Z.getLastErrored(e.id))
            )
                return T;
            let a = l.Z.getAutocompleteChoices(e.id, s.name, n);
            return null == a ? y : { results: { choices: a } };
        }
        return {
            results: f.ZP.queryChoiceResults({
                query: n,
                choices: s.type === o.jw.BOOLEAN ? h.ak : null !== (a = s.choices) && void 0 !== a ? a : []
            })
        };
    },
    renderResults(e) {
        let {
            results: { choices: t, isLoading: n, isError: r },
            selectedIndex: a,
            query: o,
            onHover: l,
            onClick: u
        } = e;
        return r
            ? (0, i.jsx)(s.Z, {
                  message: m.intl.string(m.t.rTAbPj),
                  noResultsImageURL: E,
                  className: g.noAutocompleteResults
              })
            : 0 !== t.length || n
              ? (0, _.HI)({
                    query: o,
                    selectedIndex: a,
                    autocompletes: n ? I : t,
                    onHover: l,
                    onClick: u,
                    titleWithQuery: m.t.pg0anJ,
                    titleWithoutQuery: m.intl.string(m.t['+1H47u']),
                    Component: n ? d.ZP.Loading : d.ZP.Generic,
                    getProps: (e, t) => ({
                        key: t.toString(),
                        text: e.displayName
                    }),
                    getQuery: (e) => e,
                    key: 'choice'
                })
              : (0, i.jsx)(s.Z, {
                    message: m.intl.string(m.t['41014u']),
                    noResultsImageURL: E,
                    className: g.noAutocompleteResults
                });
    },
    onSelect(e) {
        let {
                results: { choices: t },
                index: n,
                options: i
            } = e,
            r = t[n];
        return i.insertText(S(r)), { type: p.z2.CHOICE };
    }
};
