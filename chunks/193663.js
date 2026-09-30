n.d(t, { A: () => h });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(561028),
    o = n(559106),
    u = n(939249),
    c = n(88686),
    d = n(214881),
    m = n(996205);
let h = function (e) {
    let {
        ref: t,
        avatar: n,
        name: s,
        nameplate: h,
        children: p,
        subText: f,
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
        ...b
    } = e;
    ((b.className = r()(b.className, m.kL, {
        [m.wH]: C,
        [m.mr]: _,
        [S ?? ""]: C,
        [m.vk]: !C && (null != I || null != x),
    })),
        (b["aria-selected"] = b["aria-selected"] ?? C));
    let T = i.useRef(null),
        R = (0, l.jsxs)("div", {
            className: r()(m.sn, { [m.EY]: null != h }),
            children: [
                (0, l.jsx)(d.A, { nameplate: h, hovered: A, selected: C, content: T, placement: c.u.MEMBER_LIST }),
                (0, l.jsxs)("div", {
                    ref: T,
                    className: r()(v, m.Zp, { [m.SU]: !C && E, [m.Ib]: N }),
                    children: [
                        (0, l.jsx)("div", { className: r()(m.my, y), children: n }),
                        (0, l.jsxs)("div", {
                            className: m.Qs,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: m.BG,
                                    children: [
                                        (0, l.jsx)("div", { className: r()(m.UU, { [m.to]: N }), children: s }),
                                        g,
                                    ],
                                }),
                                null != f ? (0, l.jsx)("div", { className: m.Sv, children: f }) : null,
                            ],
                        }),
                        null != p ? (0, l.jsx)("div", { className: m.Y_, children: p }) : null,
                    ],
                }),
            ],
        });
    return null != I
        ? (0, l.jsx)(o.vN, {
              ...j,
              children: (0, l.jsx)(a.N_, { to: I, onClick: x, ...b, role: "listitem", ref: t, children: R }),
          })
        : null != x
          ? (0, l.jsx)(u.D, { onClick: x, focusProps: j, ...b, role: "listitem", innerRef: t, children: R })
          : (0, l.jsx)(o.vN, { ...j, children: (0, l.jsx)("div", { ...b, role: "listitem", ref: t, children: R }) });
};
