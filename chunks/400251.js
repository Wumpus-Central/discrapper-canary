n.d(t, {
    Z: () => N,
    m: () => T,
}),
    n(388685),
    n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(749210),
    u = n(686546),
    p = n(951394),
    h = n(565138),
    f = n(372769),
    g = n(134432),
    m = n(769654),
    b = n(430824),
    y = n(768581),
    _ = n(411198),
    O = n(683818),
    j = n(16853),
    v = n(981631),
    x = n(388032),
    C = n(777261),
    I = n(883760);
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
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let T = (e) => {
    let { onClick: t } = e;
    return (0, r.jsxs)(o.P3F, {
        onClick: t,
        className: C.addEntryCard,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: I,
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/semibold",
                color: "header-primary",
                className: C.addServerText,
                children: x.intl.string(x.t.H9jxS0),
            }),
        ],
    });
};
function P(e) {
    let { entry: t } = e,
        [l, s] = i.useState(!1),
        c = i.useRef(null),
        { canEdit: d } = (0, O.Z)(t);
    return (0, r.jsx)("div", {
        className: a()(C.actionButtonsContainer, { [C.forceButtonsShow]: l }),
        children: (0, r.jsxs)(p.ZP, {
            children: [
                d
                    ? (0, r.jsx)(o.ua7, {
                          text: x.intl.string(x.t.XnuOvL),
                          hideOnClick: !0,
                          children: (e) => {
                              var { onClick: i } = e,
                                  l = Z(e, ["onClick"]);
                              return (0, r.jsx)(
                                  p.zx,
                                  S(E({}, l), {
                                      onClick: () => {
                                          null == i || i(),
                                              (0, o.ZDy)(async () => {
                                                  let { default: e } = await n.e("34191").then(n.bind(n, 303647));
                                                  return (n) => (0, r.jsx)(e, S(E({}, n), { entry: t }));
                                              });
                                      },
                                      "aria-label": x.intl.string(x.t.XnuOvL),
                                      children: (0, r.jsx)(o.vdY, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: C.overflowIcon,
                                      }),
                                  }),
                              );
                          },
                      })
                    : null,
                (0, r.jsx)(j.Z, {
                    targetElementRef: c,
                    onRequestOpen: () => s(!0),
                    onRequestClose: () => s(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        var { onClick: t } = e,
                            n = Z(e, ["onClick"]);
                        return (0, r.jsx)(o.ua7, {
                            text: x.intl.string(x.t.UKOtz8),
                            hideOnClick: !0,
                            children: (e) => {
                                var { onClick: i } = e,
                                    l = Z(e, ["onClick"]);
                                return (0, r.jsx)(
                                    p.zx,
                                    S(E({}, n, l), {
                                        ref: c,
                                        onClick: (e) => {
                                            null == i || i(), t(e);
                                        },
                                        "aria-label": x.intl.string(x.t.UKOtz8),
                                        children: (0, r.jsx)(o.xhG, {
                                            size: "md",
                                            color: "currentColor",
                                            className: C.overflowIcon,
                                        }),
                                    }),
                                );
                            },
                        });
                    },
                }),
            ],
        }),
    });
}
let N = (e) => {
    var t;
    let { entry: l } = e,
        [a, p] = i.useState(!1),
        O = null != (0, s.e7)([b.Z], () => b.Z.getGuild(l.guildId)),
        j = async () => {
            p(!0);
            try {
                O ? (0, m.X)(l.guildId) : await d.Z.joinGuild(l.guildId, { source: v.vtS.DIRECTORY_ENTRY });
            } finally {
                p(!1);
            }
        },
        I = y.ZP.getGuildSplashURL({
            id: l.guildId,
            splash: l.splash,
            size: 300 * (0, g.x_)(),
        }),
        Z =
            null !=
            (t = y.ZP.getGuildIconURL({
                id: l.guildId,
                icon: l.icon,
                size: 40,
            }))
                ? t
                : void 0,
        T = x.intl.string(x.t.VJlc0d);
    return (
        O && (T = x.intl.string(x.t.cqWE2d)),
        (0, r.jsxs)("div", {
            className: C.card,
            onContextMenu: (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 643560));
                    return (t) => (0, r.jsx)(e, S(E({}, t), { entry: l }));
                });
            },
            children: [
                (0, r.jsxs)("div", {
                    className: C.cardHeader,
                    children: [
                        (0, r.jsx)("div", {
                            className: C.splash,
                            children:
                                null != I &&
                                (0, r.jsx)("img", {
                                    src: I,
                                    alt: "",
                                    className: C.splashImage,
                                }),
                        }),
                        (0, r.jsx)("div", {
                            className: C.guildIcon,
                            children: (0, r.jsx)(u.ZP, {
                                mask: u.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, r.jsx)("div", {
                                    className: C.iconMask,
                                    children: (0, r.jsx)(h.Z, {
                                        className: C.icon,
                                        iconSrc: Z,
                                        guild: (0, _.e)(l),
                                        size: h.Z.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: C.guildInfo,
                    children: [
                        (0, r.jsxs)("div", {
                            className: C.title,
                            children: [
                                (0, r.jsx)(f.Z, {
                                    className: C.guildBadge,
                                    guild: l,
                                    tooltipColor: o.ua7.Colors.PRIMARY,
                                }),
                                (0, r.jsx)(o.Text, {
                                    className: C.guildName,
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: l.name,
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Text, {
                            className: C.description,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: l.description,
                        }),
                        (0, r.jsxs)("div", {
                            className: C.memberInfo,
                            children: [
                                null != l.approximatePresenceCount &&
                                    (0, r.jsxs)("div", {
                                        className: C.memberCount,
                                        children: [
                                            (0, r.jsx)("div", { className: C.dotOnline }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-xs/normal",
                                                color: "header-secondary",
                                                children: x.intl.format(x.t["LC+S+v"], {
                                                    membersOnline: l.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != l.approximateMemberCount &&
                                    (0, r.jsxs)("div", {
                                        className: C.memberCount,
                                        children: [
                                            (0, r.jsx)("div", { className: C.dotOffline }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-xs/normal",
                                                color: "header-secondary",
                                                children: x.intl.format(x.t.zRl6XV, {
                                                    count: l.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: C.joinButton,
                            children: (0, r.jsx)(o.zxk, {
                                loading: a,
                                variant: O ? "secondary" : "active",
                                onClick: j,
                                text: T,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(P, { entry: l }),
            ],
        })
    );
};
