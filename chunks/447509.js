"use strict";
n.d(t, { DN: () => c });
var r = n(825913),
    i = n(803082),
    s = n(59845),
    a = n(178375),
    o = n(784113),
    l = n(216055),
    u = n(290424),
    d = n(64700);
let c = (0, d.createContext)(null);
(0, s.KU)(a.OJ, function (e, t, n) {
    let s = (0, d.useContext)(c),
        { isLoading: a, onLoadMore: _, scrollOffset: f, ...E } = e,
        h = (0, d.useRef)(null),
        p = (0, d.useMemo)(
            () => ({ onLoadMore: _, collection: null == s ? void 0 : s.collection, sentinelRef: h, scrollOffset: f }),
            [_, f, null == s ? void 0 : s.collection],
        );
    (0, o.n)(p, h);
    let m = (0, r.Sl)({
        ...E,
        id: void 0,
        children: n.rendered,
        defaultClassName: "react-aria-ListBoxLoadingIndicator",
        values: null,
    });
    return d.createElement(
        d.Fragment,
        null,
        d.createElement(
            "div",
            { style: { position: "relative", width: 0, height: 0 }, inert: (0, l.Y)(!0) },
            d.createElement("div", {
                "data-testid": "loadMoreSentinel",
                ref: h,
                style: { position: "absolute", height: 1, width: 1 },
            }),
        ),
        a &&
            m.children &&
            d.createElement(
                "div",
                { ...(0, i.v)((0, u.$)(e, { global: !0 }), { tabIndex: -1 }), ...m, role: "option", ref: t },
                m.children,
            ),
    );
});
