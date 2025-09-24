n.d(t, { Z: () => y }), n(388685);
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
    p = n(818923),
    h = n(746882);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = function (e) {
    let { quest: t } = e,
        [n, a] = i.useState(!1),
        m = i.useRef(null),
        E = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        y = d.ZP.useName(E),
        O = (0, c.Z)(null == E ? void 0 : E.id),
        v = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    f.Z,
                    b(
                        g(
                            {
                                name: y,
                                quest: t,
                                memberListItemRef: m,
                                applicationStream: O,
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
            [t, O, y],
        );
    return (0, r.jsx)("div", {
        className: p.previewBackground,
        children: (0, r.jsxs)("div", {
            className: p.previewCard,
            children: [
                (0, r.jsx)(l.X6q, {
                    className: h.heading,
                    variant: "heading-md/semibold",
                    children: "Members List Popout",
                }),
                (0, r.jsx)("div", {
                    className: h.previewDescription,
                    children:
                        "This shows how the quest appears when your user has an active quest in the members list. Click your member item below to show the quest popout. Note: In production, the quest popout doesn't show for your own user.",
                }),
                (0, r.jsx)("div", {
                    className: h.memberListContainer,
                    children: (0, r.jsx)(l.yRy, {
                        targetElementRef: m,
                        renderPopout: v,
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
                                ref: m,
                                className: o()(h.minimalMemberItem, { [h.selected]: n }),
                                children: (0, r.jsx)(l.P3F, {
                                    onClick: () => a(!n),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: h.memberItemContent,
                                        children: [
                                            (0, r.jsx)(l.qEK, {
                                                size: l.EFr.SIZE_32,
                                                src: null == E ? void 0 : E.getAvatarURL(void 0, 32),
                                                status: _.Skl.ONLINE,
                                                "aria-label": null == E ? void 0 : E.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: h.memberInfo,
                                                children: [
                                                    (0, r.jsx)(l.Text, {
                                                        variant: "text-md/semibold",
                                                        color: "header-primary",
                                                        children: y,
                                                    }),
                                                    (0, r.jsx)(l.Text, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: "Online",
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
