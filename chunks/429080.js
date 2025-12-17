n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(545957),
    u = n(594174),
    d = n(51144),
    p = n(898444),
    f = n(981631),
    g = n(388032),
    h = n(683103),
    m = n(647053);
let b = function (e) {
    let { quest: t } = e,
        [n, l] = i.useState(!1),
        b = i.useRef(null),
        _ = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        E = d.ZP.useName(_),
        O = (0, c.Z)(null == _ ? void 0 : _.id),
        v = i.useCallback(
            (e) => {
                var n, i;
                return (0, r.jsx)(
                    p.Z,
                    ((n = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            name: E,
                            quest: t,
                            memberListItemRef: b,
                            applicationStream: O,
                        },
                        e,
                    )),
                    (i = i =
                        {
                            closePopout: () => {
                                l(!1);
                            },
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n),
                );
            },
            [t, O, E],
        );
    return (0, r.jsx)("div", {
        className: h.previewBackground,
        children: (0, r.jsxs)("div", {
            className: h.previewCard,
            children: [
                (0, r.jsx)(s.Heading, {
                    className: m.heading,
                    variant: "heading-md/semibold",
                    children: g.intl.string(g.t.jY7Zxg),
                }),
                (0, r.jsx)("div", {
                    className: m.previewDescription,
                    children: g.intl.string(g.t.q3hbne),
                }),
                (0, r.jsx)("div", {
                    className: m.memberListContainer,
                    children: (0, r.jsx)(s.yRy, {
                        targetElementRef: b,
                        renderPopout: v,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => l(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: s.yRy.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: b,
                                className: a()(m.minimalMemberItem, { [m.selected]: n }),
                                children: (0, r.jsx)(s.P3F, {
                                    onClick: () => l(!n),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: m.memberItemContent,
                                        children: [
                                            (0, r.jsx)(s.qEK, {
                                                size: s.EFr.SIZE_32,
                                                src: null == _ ? void 0 : _.getAvatarURL(void 0, 32),
                                                status: f.Skl.ONLINE,
                                                "aria-label": null == _ ? void 0 : _.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: m.memberInfo,
                                                children: [
                                                    (0, r.jsx)(s.Text, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: E,
                                                    }),
                                                    (0, r.jsx)(s.Text, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: g.intl.string(g.t.b9w3bO),
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
