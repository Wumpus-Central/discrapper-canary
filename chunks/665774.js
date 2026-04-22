n.d(t, { A: () => m }), n(321073);
var l = n(627968);
n(64700);
var r = n(861382),
    i = n(580424),
    s = n(634788),
    o = n(374803),
    u = n(985018);
let a = { results: { commandOptions: [] } },
    m = {
        stores: [r.A],
        focusMode: o.e.AUTO_WHEN_FILTERED,
        matches: (e, t, n, l, i) => !(l || null == r.A.getActiveCommand(e.id) || null != r.A.getActiveOption(e.id)),
        queryResults(e, t, n, l, i) {
            let s = r.A.getActiveCommand(e.id);
            if (s?.options == null) return a;
            let o = r.A.getOptionStates(e.id),
                u = s.options.filter((e) => e.displayName.startsWith(n) && !o[e.name]?.hasValue);
            return 0 === u.length ? a : { results: { commandOptions: u } };
        },
        renderResults(e) {
            let {
                    results: { commandOptions: t },
                    selectedIndex: n,
                    query: r,
                    onHover: o,
                    onClick: a,
                } = e,
                m = [],
                c = [];
            t.forEach((e) => {
                (e.required ? m : c).push(e);
            });
            let d =
                    m.length > 0
                        ? (0, s.GM)({
                              query: r,
                              selectedIndex: n,
                              autocompletes: m,
                              onHover: o,
                              onClick: a,
                              titleWithQuery: u.t["iO/jnA"],
                              titleWithoutQuery: u.intl.string(u.t["7II2G3"]),
                              Component: i.Ay.Generic,
                              getProps: (e, t) => ({
                                  key: t.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription,
                              }),
                              getQuery: (e) => e,
                              key: "required-options",
                          })
                        : null,
                p =
                    c.length > 0
                        ? (0, s.GM)({
                              query: r,
                              selectedIndex: n,
                              autocompletes: c,
                              onHover: o,
                              onClick: a,
                              titleWithQuery: u.t.pg0anB,
                              titleWithoutQuery:
                                  m.length > 0 ? u.intl.string(u.t.TpDXm4) : u.intl.string(u.t["+1H47t"]),
                              Component: i.Ay.Generic,
                              getProps: (e, t) => ({
                                  key: t.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription,
                              }),
                              getQuery: (e) => e,
                              key: "optional-options",
                              indexOffset: m.length,
                          })
                        : null;
            return (0, l.jsxs)(l.Fragment, { children: [d, p] });
        },
        onSelect(e) {
            var t;
            let {
                    results: { commandOptions: n },
                    index: l,
                    options: r,
                } = e,
                i = n[l];
            return r.insertText(((t = i), `${t.displayName}:`)), { type: o.kc.COMMAND_OPTION };
        },
    };
