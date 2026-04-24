"use strict";
n.d(t, { A: () => m });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(936504),
    o = n(187322),
    c = n(939249),
    u = n(88686),
    d = n(174755),
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
        selected: C,
        muted: A,
        to: E,
        avatarClassName: I,
        selectedClassName: v,
        innerClassName: y,
        wrapContent: b,
        highlighted: S,
        focusProps: N,
        ...j
    } = e;
    (j.className = a()(j.className, h.kL, {
        [h.wH]: C,
        [h.mr]: S,
        [v ?? ""]: C,
        [h.vk]: !C && (null != E || null != _),
    })),
        (j["aria-selected"] = j["aria-selected"] ?? C);
    let T = i.useRef(null),
        w = (0, l.jsxs)("div", {
            className: a()(h.sn, { [h.EY]: null != m }),
            children: [
                (0, l.jsx)(d.A, { nameplate: m, hovered: x, selected: C, content: T, placement: u.u.MEMBER_LIST }),
                (0, l.jsxs)("div", {
                    ref: T,
                    className: a()(y, h.Zp, { [h.SU]: !C && A, [h.Ib]: b }),
                    children: [
                        (0, l.jsx)("div", { className: a()(h.my, I), children: n }),
                        (0, l.jsxs)("div", {
                            className: h.Qs,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: h.BG,
                                    children: [
                                        (0, l.jsx)("div", { className: a()(h.UU, { [h.to]: b }), children: s }),
                                        g,
                                    ],
                                }),
                                null != f ? (0, l.jsx)("div", { className: h.Sv, children: f }) : null,
                            ],
                        }),
                        null != p ? (0, l.jsx)("div", { className: h.Y_, children: p }) : null,
                    ],
                }),
            ],
        });
    return null != E
        ? (0, l.jsx)(o.vN, {
              ...N,
              children: (0, l.jsx)(r.N_, { to: E, onClick: _, ...j, role: "listitem", ref: t, children: w }),
          })
        : null != _
          ? (0, l.jsx)(c.D, { onClick: _, focusProps: N, ...j, role: "listitem", innerRef: t, children: w })
          : (0, l.jsx)(o.vN, { ...N, children: (0, l.jsx)("div", { ...j, role: "listitem", ref: t, children: w }) });
};
