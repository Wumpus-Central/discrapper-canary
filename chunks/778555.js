n.d(t, { a$: () => a });
var r = n(647438);
let i = null,
    a = (0, r.createContext)(null);
function o(e, t, n, r = "react-aria-ListBoxSection") {
    var i;
    let s = $e8Bmu$useContext(a),
        { dragAndDropHooks: l, dropState: c } = $e8Bmu$useContext($612b8eb6cb90e02d$export$d188a835a7bc5783),
        { CollectionBranch: u } = $e8Bmu$useContext($7135fc7d473fd974$export$4feb769f8ddf26c5),
        [d, f] = $64fa3d84918910a7$export$9d4c57ee4c6ffdd8(),
        { headingProps: _, groupProps: p } = $e8Bmu$useListBoxSection({
            heading: f,
            "aria-label": null != (i = e["aria-label"]) ? i : void 0,
        }),
        h = $64fa3d84918910a7$export$4d86445c2cf5e3({
            defaultClassName: r,
            className: e.className,
            style: e.style,
            values: {},
        });
    return $e8Bmu$react.createElement(
        "section",
        {
            ...$e8Bmu$filterDOMProps(e),
            ...p,
            ...h,
            ref: t,
        },
        $e8Bmu$react.createElement(
            $72a5793c14baf454$export$e0e4026c12a8bdbb.Provider,
            {
                value: {
                    ..._,
                    ref: d,
                },
            },
            $e8Bmu$react.createElement(u, {
                collection: s.collection,
                parent: n,
                renderDropIndicator: $612b8eb6cb90e02d$export$971707d8a129a1f7(l, c),
            }),
        ),
    );
}
function s(e, t) {
    t = $e8Bmu$useObjectRef(t);
    let { dragAndDropHooks: n, dropState: r } = $e8Bmu$useContext($612b8eb6cb90e02d$export$d188a835a7bc5783),
        { dropIndicatorProps: i, isHidden: a, isDropTarget: o } = n.useDropIndicator(e, r, t);
    return a
        ? null
        : $e8Bmu$react.createElement(l, {
              ...e,
              dropIndicatorProps: i,
              isDropTarget: o,
              ref: t,
          });
}
let l = null;
