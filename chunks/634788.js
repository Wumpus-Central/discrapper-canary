"use strict";
n.d(t, { GM: () => l, wZ: () => o });
var r = n(627968),
    i = n(64700),
    a = n(580424);
n(148355);
var s = n(985018);
function o(e) {
    let {
            titleWithQuery: t,
            titleWithoutQuery: n,
            query: i,
            getQuery: o,
            headerClassName: l,
            headerTrailingContent: u,
        } = e,
        c = i.length > 0 ? s.intl.formatToPlainString(t, { prefix: o(i) }) : n;
    return (0, r.jsx)(a.Ay.Title, { className: l, title: c, children: u }, `autocomplete-title-${c}`);
}
function l(e) {
    let {
        query: t,
        selectedIndex: n,
        autocompletes: a,
        onHover: s,
        onClick: l,
        titleWithQuery: u,
        titleWithoutQuery: c,
        Component: d,
        getProps: _,
        getQuery: f,
        key: p,
        indexOffset: h = 0,
        headerClassName: m,
        headerTrailingContent: g,
        footer: E,
    } = e;
    if (null == E && (null == a || 0 === a.length)) return null;
    let A = a?.map((e, t) => {
        let r = t + h,
            a = _(e, r);
        return (0, i.createElement)(d, { onClick: l, onHover: s, selected: n === r, index: r, ...a, key: a.key });
    });
    return (0, r.jsxs)(
        i.Fragment,
        {
            children: [
                null != u && null != c
                    ? o({
                          titleWithQuery: u,
                          titleWithoutQuery: c,
                          query: t,
                          getQuery: f,
                          headerClassName: m,
                          headerTrailingContent: g,
                      })
                    : null,
                A,
                E,
            ],
        },
        p,
    );
}
