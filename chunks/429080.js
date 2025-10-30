n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(545957),
    u = n(594174),
    d = n(51144),
    p = n(553393),
    f = n(981631),
    m = n(388032),
    h = n(674455),
    g = n(6723);
let _ = function (e) {
    let { quest: t } = e,
        [n, l] = i.useState(!1),
        _ = i.useRef(null),
        b = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        E = d.ZP.useName(b),
        O = (0, c.Z)(null == b ? void 0 : b.id),
        I = i.useCallback(
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
                            memberListItemRef: _,
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
                (0, r.jsx)(o.Heading, {
                    className: g.heading,
                    variant: "heading-md/semibold",
                    children: m.intl.string(m.t.jY7Zxg),
                }),
                (0, r.jsx)("div", {
                    className: g.previewDescription,
                    children: m.intl.string(m.t.q3hbne),
                }),
                (0, r.jsx)("div", {
                    className: g.memberListContainer,
                    children: (0, r.jsx)(o.yRy, {
                        targetElementRef: _,
                        renderPopout: I,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => l(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: o.yRy.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: _,
                                className: a()(g.minimalMemberItem, { [g.selected]: n }),
                                children: (0, r.jsx)(o.P3F, {
                                    onClick: () => l(!n),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: g.memberItemContent,
                                        children: [
                                            (0, r.jsx)(o.qEK, {
                                                size: o.EFr.SIZE_32,
                                                src: null == b ? void 0 : b.getAvatarURL(void 0, 32),
                                                status: f.Skl.ONLINE,
                                                "aria-label": null == b ? void 0 : b.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: g.memberInfo,
                                                children: [
                                                    (0, r.jsx)(o.Text, {
                                                        variant: "text-md/semibold",
                                                        color: "header-primary",
                                                        children: E,
                                                    }),
                                                    (0, r.jsx)(o.Text, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: m.intl.string(m.t.b9w3bO),
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
