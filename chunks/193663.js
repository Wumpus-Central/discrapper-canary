var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(561028),
    o = n(559106),
    u = n(939249),
    d = n(88686),
    c = n(214881),
    m = n(996205);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                ref: t,
                avatar: n,
                name: r,
                nameplate: h,
                children: f,
                subText: p,
                decorators: A,
                onClick: E,
                hovered: v,
                selected: g,
                muted: j,
                to: x,
                avatarClassName: _,
                selectedClassName: I,
                innerClassName: b,
                wrapContent: S,
                highlighted: N,
                focusProps: L,
                ...T
            } = e;
            ((T.className = a()(T.className, m.kL, {
                [m.wH]: g,
                [m.mr]: N,
                [I ?? ""]: g,
                [m.vk]: !g && (null != x || null != E),
            })),
                (T["aria-selected"] = T["aria-selected"] ?? g));
            let P = i.useRef(null),
                y = (0, l.jsxs)("div", {
                    className: a()(m.sn, { [m.EY]: null != h }),
                    children: [
                        (0, l.jsx)(c.A, {
                            nameplate: h,
                            hovered: v,
                            selected: g,
                            content: P,
                            placement: d.u.MEMBER_LIST,
                        }),
                        (0, l.jsxs)("div", {
                            ref: P,
                            className: a()(b, m.Zp, { [m.SU]: !g && j, [m.Ib]: S }),
                            children: [
                                (0, l.jsx)("div", { className: a()(m.my, _), children: n }),
                                (0, l.jsxs)("div", {
                                    className: m.Qs,
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: m.BG,
                                            children: [
                                                (0, l.jsx)("div", { className: a()(m.UU, { [m.to]: S }), children: r }),
                                                A,
                                            ],
                                        }),
                                        null != p ? (0, l.jsx)("div", { className: m.Sv, children: p }) : null,
                                    ],
                                }),
                                null != f ? (0, l.jsx)("div", { className: m.Y_, children: f }) : null,
                            ],
                        }),
                    ],
                });
            return null != x
                ? (0, l.jsx)(o.vN, {
                      ...L,
                      children: (0, l.jsx)(s.N_, { to: x, onClick: E, ...T, role: "listitem", ref: t, children: y }),
                  })
                : null != E
                  ? (0, l.jsx)(u.D, { onClick: E, focusProps: L, ...T, role: "listitem", innerRef: t, children: y })
                  : (0, l.jsx)(o.vN, {
                        ...L,
                        children: (0, l.jsx)("div", { ...T, role: "listitem", ref: t, children: y }),
                    });
        },
    },
);
