"use strict";
n.d(t, { A: () => E });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(561028),
    o = n(259678),
    d = n(939249),
    c = n(88686),
    u = n(174755),
    _ = n(450016);
let E = function (e) {
    let {
        ref: t,
        avatar: n,
        name: a,
        nameplate: E,
        children: A,
        subText: h,
        decorators: I,
        onClick: f,
        hovered: p,
        selected: T,
        muted: m,
        to: g,
        avatarClassName: S,
        selectedClassName: N,
        innerClassName: C,
        wrapContent: O,
        highlighted: R,
        focusProps: L,
        ...y
    } = e;
    (y.className = s()(y.className, _.kL, {
        [_.wH]: T,
        [_.mr]: R,
        [N ?? ""]: T,
        [_.vk]: !T && (null != g || null != f),
    })),
        (y["aria-selected"] = y["aria-selected"] ?? T);
    let D = r.useRef(null),
        v = (0, i.jsxs)("div", {
            className: s()(_.sn, { [_.EY]: null != E }),
            children: [
                (0, i.jsx)(u.A, { nameplate: E, hovered: p, selected: T, content: D, placement: c.u.MEMBER_LIST }),
                (0, i.jsxs)("div", {
                    ref: D,
                    className: s()(C, _.Zp, { [_.SU]: !T && m, [_.Ib]: O }),
                    children: [
                        (0, i.jsx)("div", { className: s()(_.my, S), children: n }),
                        (0, i.jsxs)("div", {
                            className: _.Qs,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: _.BG,
                                    children: [
                                        (0, i.jsx)("div", { className: s()(_.UU, { [_.to]: O }), children: a }),
                                        I,
                                    ],
                                }),
                                null != h ? (0, i.jsx)("div", { className: _.Sv, children: h }) : null,
                            ],
                        }),
                        null != A ? (0, i.jsx)("div", { className: _.Y_, children: A }) : null,
                    ],
                }),
            ],
        });
    return null != g
        ? (0, i.jsx)(o.vN, {
              ...L,
              children: (0, i.jsx)(l.N_, { to: g, onClick: f, ...y, role: "listitem", ref: t, children: v }),
          })
        : null != f
          ? (0, i.jsx)(d.D, { onClick: f, focusProps: L, ...y, role: "listitem", innerRef: t, children: v })
          : (0, i.jsx)(o.vN, { ...L, children: (0, i.jsx)("div", { ...y, role: "listitem", ref: t, children: v }) });
};
