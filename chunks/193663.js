n.d(l, { A: () => x });
var t = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(561028),
    u = n(559106),
    o = n(939249),
    c = n(88686),
    d = n(214881),
    m = n(996205);
let x = function (e) {
    let {
        ref: l,
        avatar: n,
        name: i,
        nameplate: x,
        children: h,
        subText: f,
        decorators: p,
        onClick: j,
        hovered: A,
        selected: g,
        muted: N,
        to: v,
        avatarClassName: I,
        selectedClassName: S,
        innerClassName: T,
        wrapContent: C,
        highlighted: b,
        focusProps: y,
        ...E
    } = e;
    ((E.className = a()(E.className, m.kL, {
        [m.wH]: g,
        [m.mr]: b,
        [S ?? ""]: g,
        [m.vk]: !g && (null != v || null != j),
    })),
        (E["aria-selected"] = E["aria-selected"] ?? g));
    let M = s.useRef(null),
        R = (0, t.jsxs)("div", {
            className: a()(m.sn, { [m.EY]: null != x }),
            children: [
                (0, t.jsx)(d.A, { nameplate: x, hovered: A, selected: g, content: M, placement: c.u.MEMBER_LIST }),
                (0, t.jsxs)("div", {
                    ref: M,
                    className: a()(T, m.Zp, { [m.SU]: !g && N, [m.Ib]: C }),
                    children: [
                        (0, t.jsx)("div", { className: a()(m.my, I), children: n }),
                        (0, t.jsxs)("div", {
                            className: m.Qs,
                            children: [
                                (0, t.jsxs)("div", {
                                    className: m.BG,
                                    children: [
                                        (0, t.jsx)("div", { className: a()(m.UU, { [m.to]: C }), children: i }),
                                        p,
                                    ],
                                }),
                                null != f ? (0, t.jsx)("div", { className: m.Sv, children: f }) : null,
                            ],
                        }),
                        null != h ? (0, t.jsx)("div", { className: m.Y_, children: h }) : null,
                    ],
                }),
            ],
        });
    return null != v
        ? (0, t.jsx)(u.vN, {
              ...y,
              children: (0, t.jsx)(r.N_, { to: v, onClick: j, ...E, role: "listitem", ref: l, children: R }),
          })
        : null != j
          ? (0, t.jsx)(o.D, { onClick: j, focusProps: y, ...E, role: "listitem", innerRef: l, children: R })
          : (0, t.jsx)(u.vN, { ...y, children: (0, t.jsx)("div", { ...E, role: "listitem", ref: l, children: R }) });
};
