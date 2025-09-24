n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(545957),
    u = n(594174),
    d = n(51144),
    f = n(553393),
    _ = n(981631),
    p = n(388032),
    h = n(818923),
    m = n(746882);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = function (e) {
    let { quest: t } = e,
        [n, a] = i.useState(!1),
        g = i.useRef(null),
        b = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        O = d.ZP.useName(b),
        v = (0, c.Z)(null == b ? void 0 : b.id),
        I = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    f.Z,
                    y(
                        E(
                            {
                                name: O,
                                quest: t,
                                memberListItemRef: g,
                                applicationStream: v,
                            },
                            e,
                        ),
                        {
                            closePopout: () => {
                                a(!1);
                            },
                        },
                    ),
                ),
            [t, v, O],
        );
    return (0, r.jsx)("div", {
        className: h.previewBackground,
        children: (0, r.jsxs)("div", {
            className: h.previewCard,
            children: [
                (0, r.jsx)(l.X6q, {
                    className: m.heading,
                    variant: "heading-md/semibold",
                    children: p.intl.string(p.t.U8vTzs),
                }),
                (0, r.jsx)("div", {
                    className: m.previewDescription,
                    children: p.intl.string(p.t["0TZ85+"]),
                }),
                (0, r.jsx)("div", {
                    className: m.memberListContainer,
                    children: (0, r.jsx)(l.yRy, {
                        targetElementRef: g,
                        renderPopout: I,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => a(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: l.yRy.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: g,
                                className: o()(m.minimalMemberItem, { [m.selected]: n }),
                                children: (0, r.jsx)(l.P3F, {
                                    onClick: () => a(!n),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: m.memberItemContent,
                                        children: [
                                            (0, r.jsx)(l.qEK, {
                                                size: l.EFr.SIZE_32,
                                                src: null == b ? void 0 : b.getAvatarURL(void 0, 32),
                                                status: _.Skl.ONLINE,
                                                "aria-label": null == b ? void 0 : b.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: m.memberInfo,
                                                children: [
                                                    (0, r.jsx)(l.Text, {
                                                        variant: "text-md/semibold",
                                                        color: "header-primary",
                                                        children: O,
                                                    }),
                                                    (0, r.jsx)(l.Text, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: p.intl.string(p.t.b9w3bG),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                    }),
                }),
            ],
        }),
    });
};
