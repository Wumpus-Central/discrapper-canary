n.d(t, {
    Z: () => N,
    m: () => P,
}),
    n(388685),
    n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(28664),
    c = n(481060),
    d = n(239091),
    u = n(749210),
    p = n(686546),
    h = n(951394),
    f = n(565138),
    g = n(372769),
    m = n(134432),
    b = n(769654),
    _ = n(430824),
    y = n(768581),
    x = n(411198),
    O = n(683818),
    j = n(16853),
    v = n(981631),
    C = n(388032),
    I = n(706800),
    S = n(883760);
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
function Z(e, t) {
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
let P = (e) => {
    let { onClick: t } = e;
    return (0, r.jsxs)(c.P3F, {
        onClick: t,
        className: I.addEntryCard,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: S,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "header-primary",
                className: I.addServerText,
                children: C.intl.string(C.t.H9jxS1),
            }),
        ],
    });
};
function T(e) {
    let { entry: t } = e,
        [l, s] = i.useState(!1),
        d = i.useRef(null),
        { canEdit: u } = (0, O.Z)(t);
    return (0, r.jsx)("div", {
        className: a()(I.actionButtonsContainer, { [I.forceButtonsShow]: l }),
        children: (0, r.jsxs)(h.ZP, {
            children: [
                u
                    ? (0, r.jsx)(o.u, {
                          text: C.intl.string(C.t.XnuOvN),
                          children: (0, r.jsx)(h.zx, {
                              onClick: () => {
                                  (0, c.ZDy)(async () => {
                                      let { default: e } = await n.e("34191").then(n.bind(n, 303647));
                                      return (n) => (0, r.jsx)(e, Z(E({}, n), { entry: t }));
                                  });
                              },
                              "aria-label": C.intl.string(C.t.XnuOvN),
                              children: (0, r.jsx)(c.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: I.overflowIcon,
                              }),
                          }),
                      })
                    : null,
                (0, r.jsx)(j.Z, {
                    targetElementRef: d,
                    onRequestOpen: () => s(!0),
                    onRequestClose: () => s(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        var { onClick: t } = e,
                            n = (function (e, t) {
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
                                        (n = l[r]),
                                            !(t.indexOf(n) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                (i[n] = e[n]);
                                }
                                return i;
                            })(e, ["onClick"]);
                        return (0, r.jsx)(o.u, {
                            text: C.intl.string(C.t["UKOtz+"]),
                            children: (0, r.jsx)(
                                h.zx,
                                Z(E({}, n), {
                                    onClick: (e) => {
                                        t(e);
                                    },
                                    ref: d,
                                    "aria-label": C.intl.string(C.t["UKOtz+"]),
                                    children: (0, r.jsx)(c.xhG, {
                                        size: "md",
                                        color: "currentColor",
                                        className: I.overflowIcon,
                                    }),
                                }),
                            ),
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
        [a, o] = i.useState(!1),
        h = null != (0, s.e7)([_.Z], () => _.Z.getGuild(l.guildId)),
        O = async () => {
            o(!0);
            try {
                h ? (0, b.X)(l.guildId) : await u.Z.joinGuild(l.guildId, { source: v.vtS.DIRECTORY_ENTRY });
            } finally {
                o(!1);
            }
        },
        j = y.ZP.getGuildSplashURL({
            id: l.guildId,
            splash: l.splash,
            size: 300 * (0, m.x_)(),
        }),
        S =
            null !=
            (t = y.ZP.getGuildIconURL({
                id: l.guildId,
                icon: l.icon,
                size: 40,
            }))
                ? t
                : void 0,
        P = C.intl.string(C.t.VJlc0S);
    return (
        h && (P = C.intl.string(C.t.cqWE2Z)),
        (0, r.jsxs)("div", {
            className: I.card,
            onContextMenu: (e) => {
                (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 643560));
                    return (t) => (0, r.jsx)(e, Z(E({}, t), { entry: l }));
                });
            },
            children: [
                (0, r.jsxs)("div", {
                    className: I.cardHeader,
                    children: [
                        (0, r.jsx)("div", {
                            className: I.splash,
                            children:
                                null != j &&
                                (0, r.jsx)("img", {
                                    src: j,
                                    alt: "",
                                    className: I.splashImage,
                                }),
                        }),
                        (0, r.jsx)("div", {
                            className: I.guildIcon,
                            children: (0, r.jsx)(p.ZP, {
                                mask: p.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, r.jsx)("div", {
                                    className: I.iconMask,
                                    children: (0, r.jsx)(f.Z, {
                                        className: I.icon,
                                        iconSrc: S,
                                        guild: (0, x.e)(l),
                                        size: f.Z.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: I.guildInfo,
                    children: [
                        (0, r.jsxs)("div", {
                            className: I.title,
                            children: [
                                (0, r.jsx)(g.Z, {
                                    className: I.guildBadge,
                                    guild: l,
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: I.guildName,
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: l.name,
                                }),
                            ],
                        }),
                        (0, r.jsx)(c.Text, {
                            className: I.description,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: l.description,
                        }),
                        (0, r.jsxs)("div", {
                            className: I.memberInfo,
                            children: [
                                null != l.approximatePresenceCount &&
                                    (0, r.jsxs)("div", {
                                        className: I.memberCount,
                                        children: [
                                            (0, r.jsx)("div", { className: I.dotOnline }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-xs/normal",
                                                color: "header-secondary",
                                                children: C.intl.format(C.t["LC+S+m"], {
                                                    membersOnline: l.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != l.approximateMemberCount &&
                                    (0, r.jsxs)("div", {
                                        className: I.memberCount,
                                        children: [
                                            (0, r.jsx)("div", { className: I.dotOffline }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-xs/normal",
                                                color: "header-secondary",
                                                children: C.intl.format(C.t.zRl6XR, {
                                                    count: l.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: I.joinButton,
                            children: (0, r.jsx)(c.Button, {
                                loading: a,
                                variant: h ? "secondary" : "active",
                                onClick: O,
                                text: P,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(T, { entry: l }),
            ],
        })
    );
};
