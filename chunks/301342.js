n.d(t, {
    P: () => T,
    Qo: () => w,
    ZP: () => Z,
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
    h = n(239091),
    f = n(146773),
    g = n(82295),
    m = n(111028),
    b = n(680089),
    _ = n(430824),
    O = n(496675),
    y = n(9156),
    v = n(203818),
    j = n(438144),
    x = n(981631),
    C = n(388032),
    E = n(84688);
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
                connectChannelDragSource: f,
                connectChannelDropTarget: v,
                disableManageChannels: j,
                position: N,
                sortingPosition: Z,
                hideIcon: T,
                children: w,
            } = e,
            A = (0, s.e7)([y.ZP], () => y.ZP.isChannelMuted(l.getGuildId(), l.id)),
            R = (0, s.e7)([b.Z], () => b.Z.isCollapsed(l.id)),
            D = (0, s.e7)([O.Z], () => O.Z.can(x.Plq.MANAGE_CHANNELS, l));
        t = null != Z ? (N > Z ? E.containerDragAfter : E.containerDragBefore) : E.containerDefault;
        let L = i.useCallback(() => {
                R ? (0, p.mJ)(l.id) : (0, p.c4)(l.id);
            }, [l.id, R]),
            M = i.useCallback(
                (e) => {
                    if ("null" !== l.id) {
                        let t = _.Z.getGuild(l.getGuildId());
                        null != t &&
                            (0, h.jW)(e, async () => {
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
            k = i.useCallback(() => {
                let e = l.type === x.d4z.GUILD_CATEGORY ? null : l.type,
                    t = l.getGuildId();
                null != t &&
                    (0, d.ZDy)(async () => {
                        let { default: i } = await Promise.all([n.e("29497"), n.e("53781")]).then(n.bind(n, 241865));
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
            G = (0, a.JA)(l.id),
            { role: U, tabIndex: B } = G,
            F = (function (e, t) {
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
            })(G, ["role", "tabIndex"]),
            V = i.useRef(null),
            H = i.useRef(null),
            z = (0, r.jsxs)("li", {
                className: t,
                "data-dnd-name": l.name,
                children: [
                    (0, r.jsx)(d.tEY, {
                        focusTarget: V,
                        ringTarget: H,
                        offset: {
                            left: 4,
                            right: 4,
                        },
                        children: (0, r.jsxs)("div", {
                            ref: H,
                            className: o()(E.iconVisibility, E.wrapper, {
                                [E.collapsed]: R,
                                [E.muted]: A,
                                [E.clickable]: !0,
                            }),
                            onContextMenu: M,
                            children: [
                                (0, r.jsxs)(
                                    d.P3F,
                                    I(
                                        S(
                                            {
                                                innerRef: V,
                                                className: E.mainContent,
                                                tabIndex: B,
                                            },
                                            F,
                                        ),
                                        {
                                            onClick: L,
                                            "aria-label": C.intl.formatToPlainString(C.t.y5l3J2, {
                                                categoryName: l.name,
                                            }),
                                            "aria-expanded": !R,
                                            focusProps: { enabled: !1 },
                                            children: [
                                                (0, r.jsx)(g.Z, {
                                                    className: E.name,
                                                    children: (0, r.jsx)(m.Z, { children: l.name }),
                                                }),
                                                T
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
                                        D && !j
                                            ? (0, r.jsx)(c.u, {
                                                  text: C.intl.string(C.t["fUYU+j"]),
                                                  children: (0, r.jsx)(u.zx, {
                                                      "aria-label": C.intl.string(C.t["fUYU+j"]),
                                                      look: u.zx.Looks.BLANK,
                                                      size: u.zx.Sizes.NONE,
                                                      className: o()(E.addButton, E.forceVisible),
                                                      onClick: k,
                                                      tabIndex: B,
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
        return null != v && null != f ? v(f(z)) : z;
    }),
    Z = (0, f.B)(N),
    T = i.memo(function (e) {
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
                              text: C.intl.string(C.t["5qNmsU"]),
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
    w = i.memo(function (e) {
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
                              children: (0, r.jsx)(m.Z, { children: C.intl.string(C.t["V/u9Dy"]) }),
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
