n.d(t, {
    A: () => P,
    s: () => N,
}),
    n(896048),
    n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(442433),
    d = n(686956),
    f = n(573435),
    p = n(101555),
    h = n(263063),
    b = n(714991),
    g = n(776231),
    m = n(345942),
    A = n(71393),
    y = n(486020),
    O = n(860689),
    j = n(352123),
    v = n(682557),
    x = n(652215),
    E = n(985018),
    _ = n(856528),
    C = n(166382);
function S(e) {
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
function I(e, t) {
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
let N = l.memo(function (e) {
    let { onClick: t } = e;
    return (0, r.jsxs)(c.DUT, {
        onClick: t,
        className: _.Eo,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: C,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: _.Kk,
                children: E.intl.string(E.t.H9jxS1),
            }),
        ],
    });
});
function T(e) {
    let { entry: t } = e,
        [i, s] = l.useState(!1),
        u = l.useRef(null),
        { canEdit: d } = (0, j.A)(t);
    return (0, r.jsx)("div", {
        className: a()(_.fc, { [_.QX]: i }),
        children: (0, r.jsxs)(p.Ay, {
            children: [
                d
                    ? (0, r.jsx)(o.m, {
                          text: E.intl.string(E.t.XnuOvN),
                          children: (0, r.jsx)(p.$n, {
                              onClick: () => {
                                  (0, c.mMO)(async () => {
                                      let { default: e } = await n.e("88869").then(n.bind(n, 201700));
                                      return (n) => (0, r.jsx)(e, I(S({}, n), { entry: t }));
                                  });
                              },
                              "aria-label": E.intl.string(E.t.XnuOvN),
                              children: (0, r.jsx)(c.R2l, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: _.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, r.jsx)(v.A, {
                    targetElementRef: u,
                    onRequestOpen: () => s(!0),
                    onRequestClose: () => s(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t } = e,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    l,
                                    i = {};
                                if ("u" > typeof Reflect && Reflect.ownKeys) {
                                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                                        (r = n[l]),
                                            !(t.indexOf(r) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                (i[r] = e[r]);
                                    return i;
                                }
                                if (
                                    ((i = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            l = {},
                                            i = Object.getOwnPropertyNames(e);
                                        for (r = 0; r < i.length; r++)
                                            (n = i[r]),
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                    (l[n] = e[n]);
                                        return l;
                                    })(e, t)),
                                    Object.getOwnPropertySymbols)
                                )
                                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                                        (r = n[l]),
                                            !(t.indexOf(r) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                (i[r] = e[r]);
                                return i;
                            })(e, ["onClick"]);
                        return (0, r.jsx)(o.m, {
                            text: E.intl.string(E.t["UKOtz+"]),
                            children: (0, r.jsx)(
                                p.$n,
                                I(S({}, n), {
                                    onClick: (e) => {
                                        t(e);
                                    },
                                    ref: u,
                                    "aria-label": E.intl.string(E.t["UKOtz+"]),
                                    children: (0, r.jsx)(c.jNK, {
                                        size: "md",
                                        color: "currentColor",
                                        className: _.IQ,
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
let P = l.memo(function (e) {
    var t;
    let { entry: i } = e,
        [a, o] = l.useState(!1),
        p = null != (0, s.bG)([A.A], () => A.A.getGuild(i.guildId)),
        j = async () => {
            o(!0);
            try {
                p ? (0, m.u)(i.guildId) : await d.A.joinGuild(i.guildId, { source: x.Q4z.DIRECTORY_ENTRY });
            } finally {
                o(!1);
            }
        },
        v = y.Ay.getGuildSplashURL({
            id: i.guildId,
            splash: i.splash,
            size: 300 * (0, g.mZ)(),
        }),
        C =
            null !=
            (t = y.Ay.getGuildIconURL({
                id: i.guildId,
                icon: i.icon,
                size: 40,
            }))
                ? t
                : void 0,
        N = E.intl.string(E.t.VJlc0S);
    return (
        p && (N = E.intl.string(E.t.cqWE2Z)),
        (0, r.jsxs)("div", {
            className: _.Nr,
            onContextMenu: (e) => {
                (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 283354));
                    return (t) => (0, r.jsx)(e, I(S({}, t), { entry: i }));
                });
            },
            children: [
                (0, r.jsxs)("div", {
                    className: _.MY,
                    children: [
                        (0, r.jsx)("div", {
                            className: _.Yi,
                            children:
                                null != v &&
                                (0, r.jsx)("img", {
                                    src: v,
                                    alt: "",
                                    className: _.j0,
                                }),
                        }),
                        (0, r.jsx)("div", {
                            className: _.$f,
                            children: (0, r.jsx)(f.Ay, {
                                mask: f.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, r.jsx)("div", {
                                    className: _.SA,
                                    children: (0, r.jsx)(h.A, {
                                        className: _.rZ,
                                        iconSrc: C,
                                        guild: (0, O.xi)(i),
                                        size: h.A.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: _.OA,
                    children: [
                        (0, r.jsxs)("div", {
                            className: _.DD,
                            children: [
                                (0, r.jsx)(b.A, {
                                    className: _.n2,
                                    guild: i,
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: _.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: i.name,
                                }),
                            ],
                        }),
                        (0, r.jsx)(c.Text, {
                            className: _.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: i.description,
                        }),
                        (0, r.jsxs)("div", {
                            className: _.Fj,
                            children: [
                                null != i.approximatePresenceCount &&
                                    (0, r.jsxs)("div", {
                                        className: _.Kl,
                                        children: [
                                            (0, r.jsx)("div", { className: _.JX }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: E.intl.format(E.t["LC+S+m"], {
                                                    membersOnline: i.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != i.approximateMemberCount &&
                                    (0, r.jsxs)("div", {
                                        className: _.Kl,
                                        children: [
                                            (0, r.jsx)("div", { className: _.Li }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: E.intl.format(E.t.zRl6XR, {
                                                    count: i.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: _.PD,
                            children: (0, r.jsx)(c.Button, {
                                loading: a,
                                variant: p ? "secondary" : "active",
                                onClick: j,
                                text: N,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(T, { entry: i }),
            ],
        })
    );
});
