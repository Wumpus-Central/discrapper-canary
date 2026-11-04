var t = s(477900),
    n = s(582128),
    i = s(503698),
    r = s.n(i),
    a = s(561028),
    c = s(559106),
    d = s(939249),
    u = s(88686),
    o = s(214881),
    m = s(996205);
s.d(
    l,
    {},
    {
        A: function (e) {
            let {
                ref: l,
                avatar: s,
                name: i,
                nameplate: h,
                children: x,
                subText: A,
                decorators: f,
                onClick: j,
                hovered: p,
                selected: v,
                muted: N,
                to: S,
                avatarClassName: E,
                selectedClassName: M,
                innerClassName: _,
                wrapContent: y,
                highlighted: C,
                focusProps: T,
                ...b
            } = e;
            ((b.className = r()(b.className, m.kL, {
                [m.wH]: v,
                [m.mr]: C,
                [M ?? ""]: v,
                [m.vk]: !v && (null != S || null != j),
            })),
                (b["aria-selected"] = b["aria-selected"] ?? v));
            let I = n.useRef(null),
                R = (0, t.jsxs)("div", {
                    className: r()(m.sn, { [m.EY]: null != h }),
                    children: [
                        (0, t.jsx)(o.A, {
                            nameplate: h,
                            hovered: p,
                            selected: v,
                            content: I,
                            placement: u.u.MEMBER_LIST,
                        }),
                        (0, t.jsxs)("div", {
                            ref: I,
                            className: r()(_, m.Zp, { [m.SU]: !v && N, [m.Ib]: y }),
                            children: [
                                (0, t.jsx)("div", { className: r()(m.my, E), children: s }),
                                (0, t.jsxs)("div", {
                                    className: m.Qs,
                                    children: [
                                        (0, t.jsxs)("div", {
                                            className: m.BG,
                                            children: [
                                                (0, t.jsx)("div", { className: r()(m.UU, { [m.to]: y }), children: i }),
                                                f,
                                            ],
                                        }),
                                        null != A ? (0, t.jsx)("div", { className: m.Sv, children: A }) : null,
                                    ],
                                }),
                                null != x ? (0, t.jsx)("div", { className: m.Y_, children: x }) : null,
                            ],
                        }),
                    ],
                });
            return null != S
                ? (0, t.jsx)(c.vN, {
                      ...T,
                      children: (0, t.jsx)(a.N_, { to: S, onClick: j, ...b, role: "listitem", ref: l, children: R }),
                  })
                : null != j
                  ? (0, t.jsx)(d.D, { onClick: j, focusProps: T, ...b, role: "listitem", innerRef: l, children: R })
                  : (0, t.jsx)(c.vN, {
                        ...T,
                        children: (0, t.jsx)("div", { ...b, role: "listitem", ref: l, children: R }),
                    });
        },
    },
);
