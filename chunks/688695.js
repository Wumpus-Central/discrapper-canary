n.d(t, { Z: () => b }), n(388685);
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
    p = n(239899);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = function (e) {
    let { quest: t } = e,
        [n, a] = i.useState(!1),
        h = i.useRef(null),
        g = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        b = d.ZP.useName(g),
        y = (0, c.Z)(null == g ? void 0 : g.id),
        O = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    f.Z,
                    E(
                        m(
                            {
                                name: b,
                                quest: t,
                                memberListItemRef: h,
                                applicationStream: y,
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
            [t, y, b],
        );
    return (0, r.jsxs)(l.Zbd, {
        className: p.previewCard,
        children: [
            (0, r.jsx)(l.X6q, {
                className: p.heading,
                variant: "heading-lg/semibold",
                children: "Members List Popout",
            }),
            (0, r.jsx)("div", {
                className: p.previewDescription,
                children:
                    "This shows how the quest appears when your user has an active quest in the members list. Click your member item below to show the quest popout. Note: In production, the quest popout doesn't show for your own user.",
            }),
            (0, r.jsx)("div", {
                className: p.memberListContainer,
                children: (0, r.jsx)(l.yRy, {
                    targetElementRef: h,
                    renderPopout: O,
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
                            ref: h,
                            className: o()(p.minimalMemberItem, { [p.selected]: n }),
                            children: (0, r.jsx)(l.P3F, {
                                onClick: () => a(!n),
                                tabIndex: 0,
                                children: (0, r.jsxs)("div", {
                                    className: p.memberItemContent,
                                    children: [
                                        (0, r.jsx)(l.qEK, {
                                            size: l.EFr.SIZE_32,
                                            src: null == g ? void 0 : g.getAvatarURL(void 0, 32),
                                            status: _.Skl.ONLINE,
                                            "aria-label": null == g ? void 0 : g.username,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: p.memberInfo,
                                            children: [
                                                (0, r.jsx)(l.Text, {
                                                    variant: "text-md/semibold",
                                                    color: "header-primary",
                                                    children: b,
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
    });
};
