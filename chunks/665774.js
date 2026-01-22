n.d(t, {
    A: () => d,
}),
    n(321073);
var r = n(627968);
n(64700);
var i = n(861382),
    a = n(580424),
    s = n(634788),
    o = n(374803),
    l = n(985018);
let c = {
    results: {
        commandOptions: [],
    },
};

function u(e) {
    return "".concat(e.displayName, ":");
}
let d = {
    stores: [i.A],
    focusMode: o.e.AUTO_WHEN_FILTERED,
    matches: (e, t, n, r, a) => !(r || null == i.A.getActiveCommand(e.id) || null != i.A.getActiveOption(e.id)),
    queryResults(e, t, n, r, a) {
        let s = i.A.getActiveCommand(e.id);
        if ((null == s ? void 0 : s.options) == null) return c;
        let o = i.A.getOptionStates(e.id),
            l = s.options.filter((e) => {
                var t;
                return e.displayName.startsWith(n) && !(null == (t = o[e.name]) ? void 0 : t.hasValue);
            });
        return 0 === l.length
            ? c
            : {
                  results: {
                      commandOptions: l,
                  },
              };
    },
    renderResults(e) {
        let {
                results: { commandOptions: t },
                selectedIndex: n,
                query: i,
                onHover: o,
                onClick: c,
            } = e,
            u = [],
            d = [];
        t.forEach((e) => {
            (e.required ? u : d).push(e);
        });
        let f =
                u.length > 0
                    ? (0, s.GM)({
                          query: i,
                          selectedIndex: n,
                          autocompletes: u,
                          onHover: o,
                          onClick: c,
                          titleWithQuery: l.t["iO/jnA"],
                          titleWithoutQuery: l.intl.string(l.t["7II2G3"]),
                          Component: a.Ay.Generic,
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
                d.length > 0
                    ? (0, s.GM)({
                          query: i,
                          selectedIndex: n,
                          autocompletes: d,
                          onHover: o,
                          onClick: c,
                          titleWithQuery: l.t.pg0anB,
                          titleWithoutQuery: u.length > 0 ? l.intl.string(l.t.TpDXm4) : l.intl.string(l.t["+1H47t"]),
                          Component: a.Ay.Generic,
                          getProps: (e, t) => ({
                              key: t.toString(),
                              text: e.displayName,
                              description: e.displayDescription,
                          }),
                          getQuery: (e) => e,
                          key: "optional-options",
                          indexOffset: u.length,
                      })
                    : null;
        return (0, r.jsxs)(r.Fragment, {
            children: [f, p],
        });
    },
    onSelect(e) {
        let {
                results: { commandOptions: t },
                index: n,
                options: r,
            } = e,
            i = t[n];
        return (
            r.insertText(u(i)),
            {
                type: o.kc.COMMAND_OPTION,
            }
        );
    },
};
