"use strict";
n.d(t, { DN: () => d });
var r = n(825913),
    i = n(803082),
    s = n(59845),
    a = n(178375),
    o = n(784113),
    l = n(216055),
    u = n(290424),
    c = n(64700);
let d = (0, c.createContext)(null);
(0, s.KU)(a.OJ, function (e, t, n) {
    let s = (0, c.useContext)(d),
        { isLoading: a, onLoadMore: _, scrollOffset: f, ...p } = e,
        h = (0, c.useRef)(null),
        E = (0, c.useMemo)(
            () => ({ onLoadMore: _, collection: null == s ? void 0 : s.collection, sentinelRef: h, scrollOffset: f }),
            [_, f, null == s ? void 0 : s.collection],
        );
    (0, o.n)(E, h);
    let m = (0, r.Sl)({
        ...p,
        id: void 0,
        children: n.rendered,
        defaultClassName: "react-aria-ListBoxLoadingIndicator",
        values: null,
    });
    return c.createElement(
        c.Fragment,
        null,
        c.createElement(
            "div",
            { style: { position: "relative", width: 0, height: 0 }, inert: (0, l.Y)(!0) },
            c.createElement("div", {
                "data-testid": "loadMoreSentinel",
                ref: h,
                style: { position: "absolute", height: 1, width: 1 },
            }),
        ),
        a &&
            m.children &&
            c.createElement(
                "div",
                { ...(0, i.v)((0, u.$)(e, { global: !0 }), { tabIndex: -1 }), ...m, role: "option", ref: t },
                m.children,
            ),
    );
});
