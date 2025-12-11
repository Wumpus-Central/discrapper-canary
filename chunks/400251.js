n.d(t, {
    Z: () => N,
    m: () => P,
}),
    n(388685),
    n(953529);
var r = n(54381),
    i = n(473749),
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
    y = n(430824),
    O = n(768581),
    x = n(411198),
    j = n(683818),
    v = n(16853),
    C = n(981631),
    I = n(388032),
    _ = n(183594),
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
let P = i.memo(function (e) {
    let { onClick: t } = e;
    return (0, r.jsxs)(c.P3F, {
        onClick: t,
        className: _.addEntryCard,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: S,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: _.addServerText,
                children: I.intl.string(I.t.H9jxS1),
            }),
        ],
    });
});
function T(e) {
    let { entry: t } = e,
        [l, s] = i.useState(!1),
        d = i.useRef(null),
        { canEdit: u } = (0, j.Z)(t);
    return (0, r.jsx)("div", {
        className: a()(_.actionButtonsContainer, { [_.forceButtonsShow]: l }),
        children: (0, r.jsxs)(h.ZP, {
            children: [
                u
                    ? (0, r.jsx)(o.u, {
                          text: I.intl.string(I.t.XnuOvN),
                          children: (0, r.jsx)(h.zx, {
                              onClick: () => {
                                  (0, c.ZDy)(async () => {
                                      let { default: e } = await n.e("34191").then(n.bind(n, 303647));
                                      return (n) => (0, r.jsx)(e, Z(E({}, n), { entry: t }));
                                  });
                              },
                              "aria-label": I.intl.string(I.t.XnuOvN),
                              children: (0, r.jsx)(c.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: _.overflowIcon,
                              }),
                          }),
                      })
                    : null,
                (0, r.jsx)(v.Z, {
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
                            text: I.intl.string(I.t["UKOtz+"]),
                            children: (0, r.jsx)(
                                h.zx,
                                Z(E({}, n), {
                                    onClick: (e) => {
                                        t(e);
                                    },
                                    ref: d,
                                    "aria-label": I.intl.string(I.t["UKOtz+"]),
                                    children: (0, r.jsx)(c.xhG, {
                                        size: "md",
                                        color: "currentColor",
                                        className: _.overflowIcon,
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
let N = i.memo(function (e) {
    var t;
    let { entry: l } = e,
        [a, o] = i.useState(!1),
        h = null != (0, s.e7)([y.Z], () => y.Z.getGuild(l.guildId)),
        j = async () => {
            o(!0);
            try {
                h ? (0, b.X)(l.guildId) : await u.Z.joinGuild(l.guildId, { source: C.vtS.DIRECTORY_ENTRY });
            } finally {
                o(!1);
            }
        },
        v = O.ZP.getGuildSplashURL({
            id: l.guildId,
            splash: l.splash,
            size: 300 * (0, m.x_)(),
        }),
        S =
            null !=
            (t = O.ZP.getGuildIconURL({
                id: l.guildId,
                icon: l.icon,
                size: 40,
            }))
                ? t
                : void 0,
        P = I.intl.string(I.t.VJlc0S);
    return (
        h && (P = I.intl.string(I.t.cqWE2Z)),
        (0, r.jsxs)("div", {
            className: _.card,
            onContextMenu: (e) => {
                (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 643560));
                    return (t) => (0, r.jsx)(e, Z(E({}, t), { entry: l }));
                });
            },
            children: [
                (0, r.jsxs)("div", {
                    className: _.cardHeader,
                    children: [
                        (0, r.jsx)("div", {
                            className: _.splash,
                            children:
                                null != v &&
                                (0, r.jsx)("img", {
                                    src: v,
                                    alt: "",
                                    className: _.splashImage,
                                }),
                        }),
                        (0, r.jsx)("div", {
                            className: _.guildIcon,
                            children: (0, r.jsx)(p.ZP, {
                                mask: p.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, r.jsx)("div", {
                                    className: _.iconMask,
                                    children: (0, r.jsx)(f.Z, {
                                        className: _.icon,
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
                    className: _.guildInfo,
                    children: [
                        (0, r.jsxs)("div", {
                            className: _.title,
                            children: [
                                (0, r.jsx)(g.Z, {
                                    className: _.guildBadge,
                                    guild: l,
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: _.guildName,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: l.name,
                                }),
                            ],
                        }),
                        (0, r.jsx)(c.Text, {
                            className: _.description,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: l.description,
                        }),
                        (0, r.jsxs)("div", {
                            className: _.memberInfo,
                            children: [
                                null != l.approximatePresenceCount &&
                                    (0, r.jsxs)("div", {
                                        className: _.memberCount,
                                        children: [
                                            (0, r.jsx)("div", { className: _.dotOnline }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: I.intl.format(I.t["LC+S+m"], {
                                                    membersOnline: l.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != l.approximateMemberCount &&
                                    (0, r.jsxs)("div", {
                                        className: _.memberCount,
                                        children: [
                                            (0, r.jsx)("div", { className: _.dotOffline }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: I.intl.format(I.t.zRl6XR, {
                                                    count: l.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: _.joinButton,
                            children: (0, r.jsx)(c.Button, {
                                loading: a,
                                variant: h ? "secondary" : "active",
                                onClick: j,
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
});
