n.d(t, { a$: () => f });
var r = n(595707),
    i = n(158821),
    a = n(406581),
    o = n(557635),
    s = n(575065),
    l = n(69663),
    c = n(880016),
    u = n(473749);
let d = null,
    f = (0, u.createContext)(null);
function p(e, t, n, r = "react-aria-ListBoxSection") {
    var i;
    let a = $e8Bmu$useContext(f),
        { dragAndDropHooks: o, dropState: s } = $e8Bmu$useContext($612b8eb6cb90e02d$export$d188a835a7bc5783),
        { CollectionBranch: l } = $e8Bmu$useContext($7135fc7d473fd974$export$4feb769f8ddf26c5),
        [c, u] = $64fa3d84918910a7$export$9d4c57ee4c6ffdd8(),
        { headingProps: d, groupProps: _ } = $e8Bmu$useListBoxSection({
            heading: u,
            "aria-label": null != (i = e["aria-label"]) ? i : void 0,
        }),
        m = $64fa3d84918910a7$export$4d86445c2cf5e3({
            defaultClassName: r,
            className: e.className,
            style: e.style,
            values: {},
        }),
        h = $e8Bmu$filterDOMProps(e, { global: !0 });
    return (
        delete h.id,
        $e8Bmu$react.createElement(
            "section",
            {
                ...$e8Bmu$mergeProps(h, m, _),
                ref: t,
            },
            $e8Bmu$react.createElement(
                $72a5793c14baf454$export$e0e4026c12a8bdbb.Provider,
                {
                    value: {
                        ...d,
                        ref: c,
                    },
                },
                $e8Bmu$react.createElement(l, {
                    collection: a.collection,
                    parent: n,
                    renderDropIndicator: $612b8eb6cb90e02d$export$971707d8a129a1f7(o, s),
                }),
            ),
        )
    );
}
function _(e, t) {
    t = $e8Bmu$useObjectRef(t);
    let { dragAndDropHooks: n, dropState: r } = $e8Bmu$useContext($612b8eb6cb90e02d$export$d188a835a7bc5783),
        { dropIndicatorProps: i, isHidden: a, isDropTarget: o } = n.useDropIndicator(e, r, t);
    return a
        ? null
        : $e8Bmu$react.createElement(m, {
              ...e,
              dropIndicatorProps: i,
              isDropTarget: o,
              ref: t,
          });
}
let m = null;
(0, a.G5)(o.Rb, function (e, t, n) {
    let a = (0, u.useContext)(f),
        { isLoading: o, onLoadMore: d, scrollOffset: p, ..._ } = e,
        m = (0, u.useRef)(null),
        h = (0, u.useMemo)(
            () => ({
                onLoadMore: d,
                collection: null == a ? void 0 : a.collection,
                sentinelRef: m,
                scrollOffset: p,
            }),
            [d, p, null == a ? void 0 : a.collection],
        );
    (0, s.B)(h, m);
    let g = (0, r.aX)({
            ..._,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-ListBoxLoadingIndicator",
            values: null,
        }),
        E = { tabIndex: -1 };
    return u.createElement(
        u.Fragment,
        null,
        u.createElement(
            "div",
            {
                style: {
                    position: "relative",
                    width: 0,
                    height: 0,
                },
                inert: (0, l.P)(!0),
            },
            u.createElement("div", {
                "data-testid": "loadMoreSentinel",
                ref: m,
                style: {
                    position: "absolute",
                    height: 1,
                    width: 1,
                },
            }),
        ),
        o &&
            g.children &&
            u.createElement(
                "div",
                {
                    ...(0, i.d)((0, c.z)(e, { global: !0 }), E),
                    ...g,
                    role: "option",
                    ref: t,
                },
                g.children,
            ),
    );
});
