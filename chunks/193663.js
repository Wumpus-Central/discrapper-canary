n.d(t, { A: () => x });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(561028),
    o = n(559106),
    u = n(939249),
    d = n(88686),
    c = n(214881),
    m = n(996205);
let x = function (e) {
    let {
        ref: t,
        avatar: n,
        name: s,
        nameplate: x,
        children: h,
        subText: j,
        decorators: g,
        onClick: p,
        hovered: f,
        selected: A,
        muted: N,
        to: I,
        avatarClassName: v,
        selectedClassName: b,
        innerClassName: E,
        wrapContent: S,
        highlighted: C,
        focusProps: T,
        ...y
    } = e;
    ((y.className = a()(y.className, m.kL, {
        [m.wH]: A,
        [m.mr]: C,
        [b ?? ""]: A,
        [m.vk]: !A && (null != I || null != p),
    })),
        (y["aria-selected"] = y["aria-selected"] ?? A));
    let O = i.useRef(null),
        _ = (0, l.jsxs)("div", {
            className: a()(m.sn, { [m.EY]: null != x }),
            children: [
                (0, l.jsx)(c.A, { nameplate: x, hovered: f, selected: A, content: O, placement: d.u.MEMBER_LIST }),
                (0, l.jsxs)("div", {
                    ref: O,
                    className: a()(E, m.Zp, { [m.SU]: !A && N, [m.Ib]: S }),
                    children: [
                        (0, l.jsx)("div", { className: a()(m.my, v), children: n }),
                        (0, l.jsxs)("div", {
                            className: m.Qs,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: m.BG,
                                    children: [
                                        (0, l.jsx)("div", { className: a()(m.UU, { [m.to]: S }), children: s }),
                                        g,
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
    return null != I
        ? (0, l.jsx)(o.vN, {
              ...T,
              children: (0, l.jsx)(r.N_, { to: I, onClick: p, ...y, role: "listitem", ref: t, children: _ }),
          })
        : null != p
          ? (0, l.jsx)(u.D, { onClick: p, focusProps: T, ...y, role: "listitem", innerRef: t, children: _ })
          : (0, l.jsx)(o.vN, { ...T, children: (0, l.jsx)("div", { ...y, role: "listitem", ref: t, children: _ }) });
};
