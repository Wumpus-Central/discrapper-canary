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
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(194983),
    u = n(28664),
    d = n(159691),
    p = n(481060),
    h = n(211739),
    f = n(239091),
    g = n(146773),
    m = n(82295),
    b = n(680089),
    _ = n(430824),
    y = n(496675),
    O = n(9156),
    v = n(203818),
    j = n(438144),
    C = n(981631),
    x = n(388032),
    E = n(973780);
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
function P(e) {
    e.stopPropagation();
}
let N = i.memo(function (e) {
        let t,
            {
                channel: l,
                connectChannelDragSource: d,
                connectChannelDropTarget: g,
                disableManageChannels: v,
                position: j,
                sortingPosition: N,
                hideIcon: Z,
                children: w,
            } = e,
            T = (0, s.e7)([O.ZP], () => O.ZP.isChannelMuted(l.getGuildId(), l.id)),
            A = (0, s.e7)([b.Z], () => b.Z.isCollapsed(l.id)),
            R = (0, s.e7)([y.Z], () => y.Z.can(C.Plq.MANAGE_CHANNELS, l));
        t = null != N ? (j > N ? E.containerDragAfter : E.containerDragBefore) : E.containerDefault;
        let D = i.useCallback(() => {
                A ? (0, h.mJ)(l.id) : (0, h.c4)(l.id);
            }, [l.id, A]),
            L = i.useCallback(
                (e) => {
                    if ("null" !== l.id) {
                        let t = _.Z.getGuild(l.getGuildId());
                        null != t &&
                            (0, f.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e("8965"), n.e("14280")]).then(
                                    n.bind(n, 139035),
                                );
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        I(S({}, n), {
                                            channel: l,
                                            guild: t,
                                        }),
                                    );
                            });
                    }
                },
                [l],
            ),
            M = i.useCallback(() => {
                let e = l.type === C.d4z.GUILD_CATEGORY ? null : l.type,
                    t = l.getGuildId();
                null != t &&
                    (0, p.ZDy)(async () => {
                        let { default: i } = await Promise.all([n.e("29497"), n.e("73209")]).then(n.bind(n, 241865));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                I(S({}, n), {
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== l.id ? l.id : null,
                                }),
                            );
                    });
            }, [l]),
            k = (0, a.JA)(l.id),
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
                    (0, r.jsx)(p.tEY, {
                        focusTarget: F,
                        ringTarget: V,
                        offset: {
                            left: 4,
                            right: 4,
                        },
                        children: (0, r.jsxs)("div", {
                            ref: V,
                            className: o()(E.iconVisibility, E.wrapper, {
                                [E.collapsed]: A,
                                [E.muted]: T,
                                [E.clickable]: !0,
                            }),
                            onContextMenu: L,
                            children: [
                                (0, r.jsxs)(
                                    p.P3F,
                                    I(
                                        S(
                                            {
                                                innerRef: F,
                                                className: E.mainContent,
                                                tabIndex: U,
                                            },
                                            B,
                                        ),
                                        {
                                            onClick: D,
                                            "aria-label": x.intl.formatToPlainString(x.t.y5l3J2, {
                                                categoryName: l.name,
                                            }),
                                            "aria-expanded": !A,
                                            focusProps: { enabled: !1 },
                                            children: [
                                                (0, r.jsx)(m.Z, {
                                                    className: E.name,
                                                    children: (0, r.jsx)(c.Z, { children: l.name }),
                                                }),
                                                Z
                                                    ? null
                                                    : (0, r.jsx)(p.CJ0, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: E.icon,
                                                      }),
                                            ],
                                        },
                                    ),
                                ),
                                (0, r.jsx)("div", {
                                    onClick: P,
                                    className: E.children,
                                    children:
                                        R && !v
                                            ? (0, r.jsx)(u.u, {
                                                  text: x.intl.string(x.t["fUYU+j"]),
                                                  children: (0, r.jsx)(p.P3F, {
                                                      className: o()(E.addButton, E.forceVisible),
                                                      onClick: M,
                                                      tabIndex: U,
                                                      role: "button",
                                                      "aria-label": x.intl.string(x.t["fUYU+j"]),
                                                      children: (0, r.jsx)(p.BRu, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: E.addButtonIcon,
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
            className: o()(i, E.containerDefault),
            children: (0, r.jsxs)("div", {
                className: o()(E.iconVisibility, E.wrapperStatic),
                children: [
                    (0, r.jsx)("div", {
                        className: E.mainContent,
                        children: (0, r.jsx)(m.Z, {
                            className: E.name,
                            children: (0, r.jsx)(c.Z, { children: t }),
                        }),
                    }),
                    null != n
                        ? (0, r.jsx)(u.u, {
                              asContainer: !0,
                              text: x.intl.string(x.t["5qNmsU"]),
                              children: (0, r.jsx)(p.P3F, {
                                  className: E.dismissButton,
                                  onClick: n,
                                  children: (0, r.jsx)(p.k$p, {
                                      size: "md",
                                      color: "currentColor",
                                      className: E.dismiss,
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
            n = (0, s.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id)),
            l = i.useCallback(() => {
                n ? (0, j.s)(t.guild.id) : (0, j.M)(t.guild.id);
            }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: E.refreshVoiceChannelsButton,
            children: (0, r.jsx)(d.zxk, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: p.gj8,
                text: n ? x.intl.string(x.t["/eB9Bg"]) : x.intl.string(x.t.Q2gPWl),
            }),
        });
    }),
    A = i.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, s.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === C.d4z.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)("li", {
                      className: E.containerDefault,
                      children: (0, r.jsx)("div", {
                          className: o()(E.iconVisibility, E.wrapperStatic),
                          children: (0, r.jsx)(m.Z, {
                              className: E.name,
                              children: (0, r.jsx)(c.Z, { children: x.intl.string(x.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, r.jsx)("div", { style: { height: 16 } });
    }),
    R = i.memo(function (e) {
        let { channel: t } = e;
        return (0, r.jsx)("li", {
            className: E.containerDefault,
            children: (0, r.jsx)("div", {
                className: o()(E.iconVisibility, E.wrapperStatic),
                children: (0, r.jsx)(m.Z, {
                    className: E.name,
                    children: (0, r.jsx)(c.Z, { children: t.name }),
                }),
            }),
        });
    });
