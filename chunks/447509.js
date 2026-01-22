n.d(t, { DN: () => f });
var r = n(825913),
    i = n(803082),
    a = n(59845),
    s = n(178375),
    o = n(6494),
    l = n(216055),
    c = n(290424),
    u = n(64700);
let d = null,
    f = (0, u.createContext)(null);
function p(e, t, n, r = "react-aria-ListBoxSection") {
    var i;
    let a = $e8Bmu$useContext(f),
        { dragAndDropHooks: s, dropState: o } = $e8Bmu$useContext($612b8eb6cb90e02d$export$d188a835a7bc5783),
        { CollectionBranch: l } = $e8Bmu$useContext($7135fc7d473fd974$export$4feb769f8ddf26c5),
        [c, u] = $64fa3d84918910a7$export$9d4c57ee4c6ffdd8(),
        { headingProps: d, groupProps: _ } = $e8Bmu$useListBoxSection({
            heading: u,
            "aria-label": null != (i = e["aria-label"]) ? i : void 0,
        }),
        h = $64fa3d84918910a7$export$4d86445c2cf5e3({
            defaultClassName: r,
            className: e.className,
            style: e.style,
            values: {},
        }),
        m = $e8Bmu$filterDOMProps(e, { global: !0 });
    return (
        delete m.id,
        $e8Bmu$react.createElement(
            "section",
            {
                ...$e8Bmu$mergeProps(m, h, _),
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
                    renderDropIndicator: $612b8eb6cb90e02d$export$971707d8a129a1f7(s, o),
                }),
            ),
        )
    );
}
function _(e, t) {
    t = $e8Bmu$useObjectRef(t);
    let { dragAndDropHooks: n, dropState: r } = $e8Bmu$useContext($612b8eb6cb90e02d$export$d188a835a7bc5783),
        { dropIndicatorProps: i, isHidden: a, isDropTarget: s } = n.useDropIndicator(e, r, t);
    return a
        ? null
        : $e8Bmu$react.createElement(h, {
              ...e,
              dropIndicatorProps: i,
              isDropTarget: s,
              ref: t,
          });
}
let h = null;
(0, a.KU)(s.OJ, function (e, t, n) {
    let a = (0, u.useContext)(f),
        { isLoading: s, onLoadMore: d, scrollOffset: p, ..._ } = e,
        h = (0, u.useRef)(null),
        m = (0, u.useMemo)(
            () => ({
                onLoadMore: d,
                collection: null == a ? void 0 : a.collection,
                sentinelRef: h,
                scrollOffset: p,
            }),
            [d, p, null == a ? void 0 : a.collection],
        );
    (0, o.n)(m, h);
    let g = (0, r.Sl)({
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
                inert: (0, l.Y)(!0),
            },
            u.createElement("div", {
                "data-testid": "loadMoreSentinel",
                ref: h,
                style: {
                    position: "absolute",
                    height: 1,
                    width: 1,
                },
            }),
        ),
        s &&
            g.children &&
            u.createElement(
                "div",
                {
                    ...(0, i.v)((0, c.$)(e, { global: !0 }), E),
                    ...g,
                    role: "option",
                    ref: t,
                },
                g.children,
            ),
    );
});
