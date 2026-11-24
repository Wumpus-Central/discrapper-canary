var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(561028),
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
                hovered: g,
                selected: v,
                muted: j,
                to: x,
                avatarClassName: _,
                selectedClassName: I,
                innerClassName: b,
                wrapContent: S,
                highlighted: T,
                focusProps: y,
                ...N
            } = e;
            ((N.className = s()(N.className, m.kL, {
                [m.wH]: v,
                [m.mr]: T,
                [I ?? ""]: v,
                [m.vk]: !v && (null != x || null != E),
            })),
                (N["aria-selected"] = N["aria-selected"] ?? v));
            let L = i.useRef(null),
                P = (0, l.jsxs)("div", {
                    className: s()(m.sn, { [m.EY]: null != h }),
                    children: [
                        (0, l.jsx)(c.A, {
                            nameplate: h,
                            hovered: g,
                            selected: v,
                            content: L,
                            placement: d.u.MEMBER_LIST,
                        }),
                        (0, l.jsxs)("div", {
                            ref: L,
                            className: s()(b, m.Zp, { [m.SU]: !v && j, [m.Ib]: S }),
                            children: [
                                (0, l.jsx)("div", { className: s()(m.my, _), children: n }),
                                (0, l.jsxs)("div", {
                                    className: m.Qs,
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: m.BG,
                                            children: [
                                                (0, l.jsx)("div", { className: s()(m.UU, { [m.to]: S }), children: r }),
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
                      ...y,
                      children: (0, l.jsx)(a.N_, { to: x, onClick: E, ...N, role: "listitem", ref: t, children: P }),
                  })
                : null != E
                  ? (0, l.jsx)(u.D, { onClick: E, focusProps: y, ...N, role: "listitem", innerRef: t, children: P })
                  : (0, l.jsx)(o.vN, {
                        ...y,
                        children: (0, l.jsx)("div", { ...N, role: "listitem", ref: t, children: P }),
                    });
        },
    },
);
