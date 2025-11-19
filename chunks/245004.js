n.d(t, { xm: () => d }), n(953529);
var r = n(54381);
n(473749), n(399606);
var i = n(481060);
n(607070);
var a = n(388032);
n(130231);
var o = n(630564);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e) {
    let { heading: t, description: n, label: s, isEnabled: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Heading, {
                className: o.topPerksCardHeading,
                variant: "heading-lg/extrabold",
                children: t,
            }),
            (0, r.jsx)(i.Text, {
                className: o.topPerksCardDescription,
                variant: "text-sm/normal",
                children: n,
            }),
            (0, r.jsxs)("div", {
                className: o.labelsContainer,
                children: [
                    null != s &&
                        (0, r.jsxs)("div", {
                            className: o.topPerksCardLabelContainer,
                            children: [
                                (0, r.jsx)(i.Ucv, {
                                    size: "sm",
                                    color: i.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    children: s,
                                }),
                            ],
                        }),
                    l &&
                        (0, r.jsxs)("div", {
                            className: o.topPerksCardLabelContainer,
                            children: [
                                (0, r.jsx)(i.owK, {
                                    size: "custom",
                                    height: 14,
                                    width: 14,
                                    color: "currentColor",
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: a.intl.string(a.t.pCMkDb),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
n(567949), n(552781), n(952567), n(807159);
