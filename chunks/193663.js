"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(936504),
    l = n(397927),
    u = n(88686),
    c = n(214881),
    d = n(820659);
let _ = function (e) {
    let {
        ref: t,
        avatar: n,
        name: s,
        nameplate: _,
        children: f,
        subText: p,
        decorators: h,
        onClick: m,
        hovered: E,
        selected: g,
        muted: A,
        to: I,
        avatarClassName: T,
        selectedClassName: S,
        innerClassName: y,
        wrapContent: v,
        highlighted: N,
        focusProps: C,
        ...R
    } = e;
    (R.className = a()(R.className, d.kL, {
        [d.wH]: g,
        [d.mr]: N,
        [S ?? ""]: g,
        [d.vk]: !g && (null != I || null != m),
    })),
        (R["aria-selected"] = R["aria-selected"] ?? g);
    let O = i.useRef(null),
        b = (0, r.jsxs)("div", {
            className: a()(d.sn, { [d.EY]: null != _ }),
            children: [
                (0, r.jsx)(c.A, { nameplate: _, hovered: E, selected: g, content: O, placement: u.u.MEMBER_LIST }),
                (0, r.jsxs)("div", {
                    ref: O,
                    className: a()(y, d.Zp, { [d.SU]: !g && A, [d.Ib]: v }),
                    children: [
                        (0, r.jsx)("div", { className: a()(d.my, T), children: n }),
                        (0, r.jsxs)("div", {
                            className: d.Qs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: d.BG,
                                    children: [
                                        (0, r.jsx)("div", { className: a()(d.UU, { [d.to]: v }), children: s }),
                                        h,
                                    ],
                                }),
                                null != p ? (0, r.jsx)("div", { className: d.Sv, children: p }) : null,
                            ],
                        }),
                        null != f ? (0, r.jsx)("div", { className: d.Y_, children: f }) : null,
                    ],
                }),
            ],
        });
    return null != I
        ? (0, r.jsx)(l.vN3, {
              ...C,
              children: (0, r.jsx)(o.N_, { to: I, onClick: m, ...R, role: "listitem", ref: t, children: b }),
          })
        : null != m
          ? (0, r.jsx)(l.DUT, { onClick: m, focusProps: C, ...R, role: "listitem", innerRef: t, children: b })
          : (0, r.jsx)(l.vN3, { ...C, children: (0, r.jsx)("div", { ...R, role: "listitem", ref: t, children: b }) });
};
