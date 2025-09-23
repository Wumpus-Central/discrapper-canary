n.d(t, {
    P: () => Z,
    Qo: () => T,
    ZP: () => w,
    kw: () => R,
    rj: () => A,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(28664),
    u = n(755721),
    d = n(481060),
    p = n(211739),
    f = n(239091),
    h = n(146773),
    g = n(82295),
    m = n(111028),
    b = n(680089),
    O = n(430824),
    y = n(496675),
    _ = n(9156),
    v = n(203818),
    j = n(438144),
    x = n(981631),
    C = n(388032),
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
                connectChannelDragSource: c,
                connectChannelDropTarget: h,
                disableManageChannels: v,
                position: j,
                sortingPosition: N,
                hideIcon: w,
                children: Z,
            } = e,
            T = (0, s.e7)([_.ZP], () => _.ZP.isChannelMuted(l.getGuildId(), l.id)),
            A = (0, s.e7)([b.Z], () => b.Z.isCollapsed(l.id)),
            R = (0, s.e7)([y.Z], () => y.Z.can(x.Plq.MANAGE_CHANNELS, l));
        t = null != N ? (j > N ? E.containerDragAfter : E.containerDragBefore) : E.containerDefault;
        let D = i.useCallback(() => {
                A ? (0, p.mJ)(l.id) : (0, p.c4)(l.id);
            }, [l.id, A]),
            L = i.useCallback(
                (e) => {
                    if ("null" !== l.id) {
                        let t = O.Z.getGuild(l.getGuildId());
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
                let e = l.type === x.d4z.GUILD_CATEGORY ? null : l.type,
                    t = l.getGuildId();
                null != t &&
                    (0, d.ZDy)(async () => {
                        let { default: i } = await Promise.all([n.e("45094"), n.e("87586")]).then(n.bind(n, 218613));
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
            { role: U, tabIndex: G } = k,
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
                    (0, r.jsx)(d.tEY, {
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
                                    d.P3F,
                                    I(
                                        S(
                                            {
                                                innerRef: F,
                                                className: E.mainContent,
                                                tabIndex: G,
                                            },
                                            B,
                                        ),
                                        {
                                            onClick: D,
                                            "aria-label": C.intl.formatToPlainString(C.t.y5l3Jy, {
                                                categoryName: l.name,
                                            }),
                                            "aria-expanded": !A,
                                            focusProps: { enabled: !1 },
                                            children: [
                                                (0, r.jsx)(g.Z, {
                                                    className: E.name,
                                                    children: (0, r.jsx)(m.Z, { children: l.name }),
                                                }),
                                                w
                                                    ? null
                                                    : (0, r.jsx)(d.CJ0, {
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
                                            ? (0, r.jsx)(d.ua7, {
                                                  text: C.intl.string(C.t["fUYU+v"]),
                                                  children: (e) => {
                                                      let { onMouseEnter: t, onMouseLeave: n } = e;
                                                      return (0, r.jsx)(u.zx, {
                                                          "aria-label": C.intl.string(C.t["fUYU+v"]),
                                                          look: u.zx.Looks.BLANK,
                                                          size: u.zx.Sizes.NONE,
                                                          className: o()(E.addButton, E.forceVisible),
                                                          onClick: M,
                                                          onMouseEnter: t,
                                                          onMouseLeave: n,
                                                          tabIndex: G,
                                                          focusProps: {
                                                              offset: {
                                                                  top: -3,
                                                                  right: -4,
                                                                  bottom: -3,
                                                                  left: -4,
                                                              },
                                                          },
                                                          children: (0, r.jsx)(d.BRu, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: E.addButtonIcon,
                                                          }),
                                                      });
                                                  },
                                              })
                                            : null,
                                }),
                            ],
                        }),
                    }),
                    Z,
                ],
            });
        return null != h && null != c ? h(c(H)) : H;
    }),
    w = (0, h.B)(N),
    Z = i.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, r.jsx)("li", {
            className: o()(i, E.containerDefault),
            children: (0, r.jsxs)("div", {
                className: o()(E.iconVisibility, E.wrapperStatic),
                children: [
                    (0, r.jsx)("div", {
                        className: E.mainContent,
                        children: (0, r.jsx)(g.Z, {
                            className: E.name,
                            children: (0, r.jsx)(m.Z, { children: t }),
                        }),
                    }),
                    null != n
                        ? (0, r.jsx)(c.u, {
                              asContainer: !0,
                              text: C.intl.string(C.t["5qNmsb"]),
                              children: (0, r.jsx)(d.P3F, {
                                  className: E.dismissButton,
                                  onClick: n,
                                  children: (0, r.jsx)(d.k$p, {
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
        return (0, r.jsxs)(u.zx, {
            look: u.zx.Looks.FILLED,
            color: u.zx.Colors.PRIMARY,
            className: E.refreshVoiceChannelsButton,
            innerClassName: E.refreshVoiceChannelsButtonInner,
            onClick: l,
            children: [
                (0, r.jsx)(d.gj8, {
                    size: "xs",
                    color: "currentColor",
                    className: E.voiceChannelsToggleIcon,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: n ? C.intl.string(C.t["/eB9Bg"]) : C.intl.string(C.t.Q2gPWl),
                }),
            ],
        });
    }),
    A = i.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, s.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === x.d4z.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)("li", {
                      className: E.containerDefault,
                      children: (0, r.jsx)("div", {
                          className: o()(E.iconVisibility, E.wrapperStatic),
                          children: (0, r.jsx)(g.Z, {
                              className: E.name,
                              children: (0, r.jsx)(m.Z, { children: C.intl.string(C.t["V/u9Dw"]) }),
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
                children: (0, r.jsx)(g.Z, {
                    className: E.name,
                    children: (0, r.jsx)(m.Z, { children: t.name }),
                }),
            }),
        });
    });
