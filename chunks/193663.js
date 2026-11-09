var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(561028),
    u = n(559106),
    o = n(939249),
    d = n(88686),
    c = n(214881),
    h = n(996205);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                ref: t,
                avatar: n,
                name: r,
                nameplate: m,
                children: f,
                subText: p,
                decorators: g,
                onClick: A,
                hovered: v,
                selected: j,
                muted: x,
                to: b,
                avatarClassName: E,
                selectedClassName: N,
                innerClassName: S,
                wrapContent: y,
                highlighted: I,
                focusProps: C,
                ...L
            } = e;
            ((L.className = s()(L.className, h.kL, {
                [h.wH]: j,
                [h.mr]: I,
                [N ?? ""]: j,
                [h.vk]: !j && (null != b || null != A),
            })),
                (L["aria-selected"] = L["aria-selected"] ?? j));
            let T = i.useRef(null),
                P = (0, l.jsxs)("div", {
                    className: s()(h.sn, { [h.EY]: null != m }),
                    children: [
                        (0, l.jsx)(c.A, {
                            nameplate: m,
                            hovered: v,
                            selected: j,
                            content: T,
                            placement: d.u.MEMBER_LIST,
                        }),
                        (0, l.jsxs)("div", {
                            ref: T,
                            className: s()(S, h.Zp, { [h.SU]: !j && x, [h.Ib]: y }),
                            children: [
                                (0, l.jsx)("div", { className: s()(h.my, E), children: n }),
                                (0, l.jsxs)("div", {
                                    className: h.Qs,
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: h.BG,
                                            children: [
                                                (0, l.jsx)("div", { className: s()(h.UU, { [h.to]: y }), children: r }),
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
            return null != b
                ? (0, l.jsx)(u.vN, {
                      ...C,
                      children: (0, l.jsx)(a.N_, { to: b, onClick: A, ...L, role: "listitem", ref: t, children: P }),
                  })
                : null != A
                  ? (0, l.jsx)(o.D, { onClick: A, focusProps: C, ...L, role: "listitem", innerRef: t, children: P })
                  : (0, l.jsx)(u.vN, {
                        ...C,
                        children: (0, l.jsx)("div", { ...L, role: "listitem", ref: t, children: P }),
                    });
        },
    },
);
