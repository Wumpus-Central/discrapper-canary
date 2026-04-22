n.d(t, { GM: () => u, wZ: () => o });
var l = n(627968),
    r = n(64700),
    i = n(580424);
n(148355);
var s = n(985018);
function o(e) {
    let {
            titleWithQuery: t,
            titleWithoutQuery: n,
            query: r,
            getQuery: o,
            headerClassName: u,
            headerTrailingContent: a,
        } = e,
        m = r.length > 0 ? s.intl.formatToPlainString(t, { prefix: o(r) }) : n;
    return (0, l.jsx)(i.Ay.Title, { className: u, title: m, children: a }, `autocomplete-title-${m}`);
}
function u(e) {
    let {
        query: t,
        selectedIndex: n,
        autocompletes: i,
        onHover: s,
        onClick: u,
        titleWithQuery: a,
        titleWithoutQuery: m,
        Component: c,
        getProps: d,
        getQuery: p,
        key: y,
        indexOffset: A = 0,
        headerClassName: h,
        headerTrailingContent: g,
        footer: M,
    } = e;
    if (null == M && (null == i || 0 === i.length)) return null;
    let I = i?.map((e, t) => {
        let l = t + A,
            i = d(e, l);
        return (0, r.createElement)(c, { onClick: u, onHover: s, selected: n === l, index: l, ...i, key: i.key });
    });
    return (0, l.jsxs)(
        r.Fragment,
        {
            children: [
                null != a && null != m
                    ? o({
                          titleWithQuery: a,
                          titleWithoutQuery: m,
                          query: t,
                          getQuery: p,
                          headerClassName: h,
                          headerTrailingContent: g,
                      })
                    : null,
                I,
                M,
            ],
        },
        y,
    );
}
