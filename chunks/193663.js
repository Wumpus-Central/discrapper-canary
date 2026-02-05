"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(758879),
    l = n(397927),
    u = n(226540),
    c = n(227),
    d = n(820659);
let _ = function (e) {
    let {
        ref: t,
        avatar: n,
        name: a,
        nameplate: _,
        children: f,
        subText: p,
        decorators: h,
        onClick: m,
        hovered: g,
        selected: E,
        muted: A,
        to: I,
        avatarClassName: T,
        selectedClassName: y,
        innerClassName: S,
        wrapContent: v,
        highlighted: C,
        focusProps: b,
        ...N
    } = e;
    (N.className = s()(N.className, d.kL, {
        [d.wH]: E,
        [d.mr]: C,
        [y ?? ""]: E,
        [d.vk]: !E && (null != I || null != m),
    })),
        (N["aria-selected"] = N["aria-selected"] ?? E);
    let R = i.useRef(null),
        O = (0, r.jsxs)("div", {
            className: s()(d.sn, { [d.EY]: null != _ }),
            children: [
                (0, r.jsx)(c.A, { nameplate: _, hovered: g, selected: E, content: R, placement: u.u.MEMBER_LIST }),
                (0, r.jsxs)("div", {
                    ref: R,
                    className: s()(S, d.Zp, { [d.SU]: !E && A, [d.Ib]: v }),
                    children: [
                        (0, r.jsx)("div", { className: s()(d.my, T), children: n }),
                        (0, r.jsxs)("div", {
                            className: d.Qs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: d.BG,
                                    children: [
                                        (0, r.jsx)("div", { className: s()(d.UU, { [d.to]: v }), children: a }),
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
              ...b,
              children: (0, r.jsx)(o.N_, { to: I, onClick: m, ...N, role: "listitem", ref: t, children: O }),
          })
        : null != m
          ? (0, r.jsx)(l.DUT, { onClick: m, focusProps: b, ...N, role: "listitem", innerRef: t, children: O })
          : (0, r.jsx)(l.vN3, { ...b, children: (0, r.jsx)("div", { ...N, role: "listitem", ref: t, children: O }) });
};
