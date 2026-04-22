"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(936504),
    o = n(187322),
    c = n(939249),
    u = n(88686),
    d = n(214881),
    h = n(574520);
let m = function (e) {
    let {
        ref: t,
        avatar: n,
        name: s,
        nameplate: m,
        children: p,
        subText: f,
        decorators: g,
        onClick: _,
        hovered: x,
        selected: A,
        muted: C,
        to: E,
        avatarClassName: I,
        selectedClassName: v,
        innerClassName: y,
        wrapContent: S,
        highlighted: b,
        focusProps: N,
        ...T
    } = e;
    (T.className = r()(T.className, h.kL, {
        [h.wH]: A,
        [h.mr]: b,
        [v ?? ""]: A,
        [h.vk]: !A && (null != E || null != _),
    })),
        (T["aria-selected"] = T["aria-selected"] ?? A);
    let j = l.useRef(null),
        R = (0, i.jsxs)("div", {
            className: r()(h.sn, { [h.EY]: null != m }),
            children: [
                (0, i.jsx)(d.A, { nameplate: m, hovered: x, selected: A, content: j, placement: u.u.MEMBER_LIST }),
                (0, i.jsxs)("div", {
                    ref: j,
                    className: r()(y, h.Zp, { [h.SU]: !A && C, [h.Ib]: S }),
                    children: [
                        (0, i.jsx)("div", { className: r()(h.my, I), children: n }),
                        (0, i.jsxs)("div", {
                            className: h.Qs,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: h.BG,
                                    children: [
                                        (0, i.jsx)("div", { className: r()(h.UU, { [h.to]: S }), children: s }),
                                        g,
                                    ],
                                }),
                                null != f ? (0, i.jsx)("div", { className: h.Sv, children: f }) : null,
                            ],
                        }),
                        null != p ? (0, i.jsx)("div", { className: h.Y_, children: p }) : null,
                    ],
                }),
            ],
        });
    return null != E
        ? (0, i.jsx)(o.vN, {
              ...N,
              children: (0, i.jsx)(a.N_, { to: E, onClick: _, ...T, role: "listitem", ref: t, children: R }),
          })
        : null != _
          ? (0, i.jsx)(c.D, { onClick: _, focusProps: N, ...T, role: "listitem", innerRef: t, children: R })
          : (0, i.jsx)(o.vN, { ...N, children: (0, i.jsx)("div", { ...T, role: "listitem", ref: t, children: R }) });
};
