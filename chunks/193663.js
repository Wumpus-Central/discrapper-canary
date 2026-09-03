n.d(t, { A: () => m });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(561028),
    o = n(259678),
    u = n(939249),
    c = n(88686),
    d = n(174755),
    h = n(996205);
let m = function (e) {
    let {
        ref: t,
        avatar: n,
        name: s,
        nameplate: m,
        children: f,
        subText: p,
        decorators: g,
        onClick: x,
        hovered: A,
        selected: C,
        muted: E,
        to: I,
        avatarClassName: y,
        selectedClassName: S,
        innerClassName: v,
        wrapContent: N,
        highlighted: _,
        focusProps: j,
        ...T
    } = e;
    (T.className = r()(T.className, h.kL, {
        [h.wH]: C,
        [h.mr]: _,
        [S ?? ""]: C,
        [h.vk]: !C && (null != I || null != x),
    })),
        (T["aria-selected"] = T["aria-selected"] ?? C);
    let b = i.useRef(null),
        R = (0, l.jsxs)("div", {
            className: r()(h.sn, { [h.EY]: null != m }),
            children: [
                (0, l.jsx)(d.A, { nameplate: m, hovered: A, selected: C, content: b, placement: c.u.MEMBER_LIST }),
                (0, l.jsxs)("div", {
                    ref: b,
                    className: r()(v, h.Zp, { [h.SU]: !C && E, [h.Ib]: N }),
                    children: [
                        (0, l.jsx)("div", { className: r()(h.my, y), children: n }),
                        (0, l.jsxs)("div", {
                            className: h.Qs,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: h.BG,
                                    children: [
                                        (0, l.jsx)("div", { className: r()(h.UU, { [h.to]: N }), children: s }),
                                        g,
                                    ],
                                }),
                                null != p ? (0, l.jsx)("div", { className: h.Sv, children: p }) : null,
                            ],
                        }),
                        null != f ? (0, l.jsx)("div", { className: h.Y_, children: f }) : null,
                    ],
                }),
            ],
        });
    return null != I
        ? (0, l.jsx)(o.vN, {
              ...j,
              children: (0, l.jsx)(a.N_, { to: I, onClick: x, ...T, role: "listitem", ref: t, children: R }),
          })
        : null != x
          ? (0, l.jsx)(u.D, { onClick: x, focusProps: j, ...T, role: "listitem", innerRef: t, children: R })
          : (0, l.jsx)(o.vN, { ...j, children: (0, l.jsx)("div", { ...T, role: "listitem", ref: t, children: R }) });
};
