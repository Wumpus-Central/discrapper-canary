n.d(t, { A: () => x });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(561028),
    o = n(559106),
    u = n(939249),
    c = n(88686),
    d = n(214881),
    m = n(996205);
let x = function (e) {
    let {
        ref: t,
        avatar: n,
        name: i,
        nameplate: x,
        children: h,
        subText: j,
        decorators: p,
        onClick: g,
        hovered: f,
        selected: N,
        muted: I,
        to: A,
        avatarClassName: v,
        selectedClassName: b,
        innerClassName: S,
        wrapContent: E,
        highlighted: C,
        focusProps: T,
        ...y
    } = e;
    ((y.className = a()(y.className, m.kL, {
        [m.wH]: N,
        [m.mr]: C,
        [b ?? ""]: N,
        [m.vk]: !N && (null != A || null != g),
    })),
        (y["aria-selected"] = y["aria-selected"] ?? N));
    let O = s.useRef(null),
        k = (0, l.jsxs)("div", {
            className: a()(m.sn, { [m.EY]: null != x }),
            children: [
                (0, l.jsx)(d.A, { nameplate: x, hovered: f, selected: N, content: O, placement: c.u.MEMBER_LIST }),
                (0, l.jsxs)("div", {
                    ref: O,
                    className: a()(S, m.Zp, { [m.SU]: !N && I, [m.Ib]: E }),
                    children: [
                        (0, l.jsx)("div", { className: a()(m.my, v), children: n }),
                        (0, l.jsxs)("div", {
                            className: m.Qs,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: m.BG,
                                    children: [
                                        (0, l.jsx)("div", { className: a()(m.UU, { [m.to]: E }), children: i }),
                                        p,
                                    ],
                                }),
                                null != j ? (0, l.jsx)("div", { className: m.Sv, children: j }) : null,
                            ],
                        }),
                        null != h ? (0, l.jsx)("div", { className: m.Y_, children: h }) : null,
                    ],
                }),
            ],
        });
    return null != A
        ? (0, l.jsx)(o.vN, {
              ...T,
              children: (0, l.jsx)(r.N_, { to: A, onClick: g, ...y, role: "listitem", ref: t, children: k }),
          })
        : null != g
          ? (0, l.jsx)(u.D, { onClick: g, focusProps: T, ...y, role: "listitem", innerRef: t, children: k })
          : (0, l.jsx)(o.vN, { ...T, children: (0, l.jsx)("div", { ...y, role: "listitem", ref: t, children: k }) });
};
