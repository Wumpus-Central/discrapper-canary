n.d(t, {
    P: () => w,
    Qo: () => T,
    ZP: () => Z,
    kw: () => R,
    rj: () => A,
});
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(194983),
    u = n(28664),
    d = n(159691),
    f = n(481060),
    h = n(211739),
    p = n(239091),
    g = n(146773),
    b = n(82295),
    m = n(680089),
    y = n(430824),
    O = n(496675),
    v = n(9156),
    j = n(203818),
    C = n(438144),
    x = n(981631),
    E = n(388032),
    S = n(577022);
function I(e) {
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
function _(e, t) {
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
function P(e) {
    e.stopPropagation();
}
let N = i.memo(function (e) {
        let t,
            {
                channel: l,
                connectChannelDragSource: d,
                connectChannelDropTarget: g,
                disableManageChannels: j,
                position: C,
                sortingPosition: N,
                hideIcon: Z,
                children: w,
            } = e,
            T = (0, s.e7)([v.ZP], () => v.ZP.isChannelMuted(l.getGuildId(), l.id)),
            A = (0, s.e7)([m.Z], () => m.Z.isCollapsed(l.id)),
            R = (0, s.e7)([O.Z], () => O.Z.can(x.Plq.MANAGE_CHANNELS, l));
        t = null != N ? (C > N ? S.containerDragAfter : S.containerDragBefore) : S.containerDefault;
        let D = i.useCallback(() => {
                A ? (0, h.mJ)(l.id) : (0, h.c4)(l.id);
            }, [l.id, A]),
            M = i.useCallback(
                (e) => {
                    if ("null" !== l.id) {
                        let t = y.Z.getGuild(l.getGuildId());
                        null != t &&
                            (0, p.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e("8965"), n.e("14280")]).then(
                                    n.bind(n, 139035),
                                );
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        _(I({}, n), {
                                            channel: l,
                                            guild: t,
                                        }),
                                    );
                            });
                    }
                },
                [l],
            ),
            L = i.useCallback(() => {
                let e = l.type === x.d4z.GUILD_CATEGORY ? null : l.type,
                    t = l.getGuildId();
                null != t &&
                    (0, f.ZDy)(async () => {
                        let { default: i } = await Promise.all([n.e("29497"), n.e("59679")]).then(n.bind(n, 241865));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                _(I({}, n), {
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== l.id ? l.id : null,
                                }),
                            );
                    });
            }, [l]),
            k = (0, o.JA)(l.id),
            { role: G, tabIndex: U } = k,
            B = (function (e, t) {
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
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(k, ["role", "tabIndex"]),
            F = i.useRef(null),
            V = i.useRef(null),
            H = (0, r.jsxs)("li", {
                className: t,
                "data-dnd-name": l.name,
                children: [
                    (0, r.jsx)(f.tEY, {
                        focusTarget: F,
                        ringTarget: V,
                        offset: {
                            left: 4,
                            right: 4,
                        },
                        children: (0, r.jsxs)("div", {
                            ref: V,
                            className: a()(S.iconVisibility, S.wrapper, {
                                [S.collapsed]: A,
                                [S.muted]: T,
                                [S.clickable]: !0,
                            }),
                            onContextMenu: M,
                            children: [
                                (0, r.jsxs)(
                                    f.P3F,
                                    _(
                                        I(
                                            {
                                                innerRef: F,
                                                className: S.mainContent,
                                                tabIndex: U,
                                            },
                                            B,
                                        ),
                                        {
                                            onClick: D,
                                            "aria-label": E.intl.formatToPlainString(E.t.y5l3J2, {
                                                categoryName: l.name,
                                            }),
                                            "aria-expanded": !A,
                                            focusProps: { enabled: !1 },
                                            children: [
                                                (0, r.jsx)(b.Z, {
                                                    className: S.name,
                                                    children: (0, r.jsx)(c.Z, { children: l.name }),
                                                }),
                                                Z
                                                    ? null
                                                    : (0, r.jsx)(f.CJ0, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: S.icon,
                                                      }),
                                            ],
                                        },
                                    ),
                                ),
                                (0, r.jsx)("div", {
                                    onClick: P,
                                    className: S.children,
                                    children:
                                        R && !j
                                            ? (0, r.jsx)(u.u, {
                                                  text: E.intl.string(E.t["fUYU+j"]),
                                                  children: (0, r.jsx)(f.P3F, {
                                                      className: a()(S.addButton, S.forceVisible),
                                                      onClick: L,
                                                      tabIndex: U,
                                                      role: "button",
                                                      "aria-label": E.intl.string(E.t["fUYU+j"]),
                                                      children: (0, r.jsx)(f.BRu, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: S.addButtonIcon,
                                                      }),
                                                  }),
                                              })
                                            : null,
                                }),
                            ],
                        }),
                    }),
                    w,
                ],
            });
        return null != g && null != d ? g(d(H)) : H;
    }),
    Z = (0, g.B)(N),
    w = i.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, r.jsx)("li", {
            className: a()(i, S.containerDefault),
            children: (0, r.jsxs)("div", {
                className: a()(S.iconVisibility, S.wrapperStatic),
                children: [
                    (0, r.jsx)("div", {
                        className: S.mainContent,
                        children: (0, r.jsx)(b.Z, {
                            className: S.name,
                            children: (0, r.jsx)(c.Z, { children: t }),
                        }),
                    }),
                    null != n
                        ? (0, r.jsx)(u.u, {
                              asContainer: !0,
                              text: E.intl.string(E.t["5qNmsU"]),
                              children: (0, r.jsx)(f.P3F, {
                                  className: S.dismissButton,
                                  onClick: n,
                                  children: (0, r.jsx)(f.k$p, {
                                      size: "md",
                                      color: "currentColor",
                                      className: S.dismiss,
                                  }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    T = i.memo(function (e) {
        let { category: t } = e,
            n = (0, s.e7)([j.Z], () => j.Z.isVoiceCategoryCollapsed(t.guild.id)),
            l = i.useCallback(() => {
                n ? (0, C.s)(t.guild.id) : (0, C.M)(t.guild.id);
            }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: S.refreshVoiceChannelsButton,
            children: (0, r.jsx)(d.zxk, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: f.gj8,
                text: n ? E.intl.string(E.t["/eB9Bg"]) : E.intl.string(E.t.Q2gPWl),
            }),
        });
    }),
    A = i.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, s.e7)([j.Z], () => j.Z.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === x.d4z.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)("li", {
                      className: S.containerDefault,
                      children: (0, r.jsx)("div", {
                          className: a()(S.iconVisibility, S.wrapperStatic),
                          children: (0, r.jsx)(b.Z, {
                              className: S.name,
                              children: (0, r.jsx)(c.Z, { children: E.intl.string(E.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, r.jsx)("div", { style: { height: 16 } });
    }),
    R = i.memo(function (e) {
        let { channel: t } = e;
        return (0, r.jsx)("li", {
            className: S.containerDefault,
            children: (0, r.jsx)("div", {
                className: a()(S.iconVisibility, S.wrapperStatic),
                children: (0, r.jsx)(b.Z, {
                    className: S.name,
                    children: (0, r.jsx)(c.Z, { children: t.name }),
                }),
            }),
        });
    });
