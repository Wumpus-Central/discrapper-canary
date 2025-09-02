n.d(t, {
    F: () => V,
    G: () => F,
}),
    n(388685);
var l,
    r = n(951288),
    i = n(647438),
    s = n(120356),
    a = n.n(s),
    u = n(913527),
    o = n.n(u),
    c = n(91192),
    d = n(442837),
    f = n(755721),
    h = n(481060),
    m = n(700582),
    g = n(493773),
    b = n(724757),
    p = n(212819),
    y = n(933557),
    E = n(266076),
    S = n(810123),
    x = n(448486),
    v = n(987509),
    O = n(592125),
    Z = n(430824),
    j = n(158776),
    P = n(306680),
    _ = n(699516),
    L = n(594174),
    N = n(626135),
    C = n(55935),
    A = n(823379),
    M = n(51144),
    D = n(784384),
    T = n(981631),
    w = n(490897),
    R = n(388032),
    I = n(773921);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e, t) {
    if (null == e) return {};
    var n,
        l,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                i = Object.keys(e);
            for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++)
            (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
var F = (((l = {}).TOGGLE = "toggle"), (l.SEND = "send"), l);
function G(e) {
    let {
            message: t,
            destination: n,
            rowMode: l,
            icon: s,
            label: u,
            subLabel: o,
            selected: d,
            disabled: m,
            onPressDestination: b,
            "aria-setsize": p,
            "aria-posinset": y,
            className: E,
        } = e,
        S = (0, c.JA)(n.id),
        [x, v] = i.useState(!1),
        O = i.useRef(!1),
        Z = i.useCallback(() => {
            if ("send" === l) {
                v(!0), (O.current = !0);
                return;
            }
            null == b || b(n);
        }, [l, b, n]),
        j = i.useCallback(() => {
            N.default.track(T.rMx.FORWARD_ONE_TAP_VIEW, {
                channel_id: t.channel_id,
                message_id: t.id,
            }),
                (O.current = !1),
                null == b ||
                    b(n, {
                        transitionToDestination: !0,
                        closeAfterSend: !0,
                    });
        }, [t.channel_id, t.id, b, n]),
        P = i.useCallback(() => {
            v(!1),
                (O.current = !1),
                N.default.track(T.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: t.channel_id,
                    message_id: t.id,
                });
        }, [t]);
    return (
        (0, g.ZP)(() => () => {
            O.current &&
                ((O.current = !1),
                null == b ||
                    b(n, {
                        transitionToDestination: !1,
                        closeAfterSend: !1,
                    }));
        }),
        (0, r.jsxs)(
            h.P3F,
            z(
                k(
                    {
                        className: a()(I.destinationRow, E, { [I.disabled]: m }),
                        onClick: m || x ? void 0 : Z,
                        "aria-selected": d,
                        "aria-setsize": p,
                        "aria-posinset": y,
                    },
                    S,
                ),
                {
                    children: [
                        (0, r.jsxs)("div", {
                            className: I.identity,
                            children: [
                                (0, r.jsx)("div", {
                                    className: I.iconWrapper,
                                    children: s,
                                }),
                                (0, r.jsxs)("div", {
                                    className: I.labels,
                                    children: [
                                        (0, r.jsx)(h.Text, {
                                            tag: "strong",
                                            className: I.label,
                                            variant: "text-md/semibold",
                                            lineClamp: 1,
                                            children: u,
                                        }),
                                        (0, r.jsx)(h.Text, {
                                            className: I.subLabel,
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        "toggle" === l &&
                            (0, r.jsx)(f.$q, {
                                type: f.M0.INVERTED,
                                displayOnly: !0,
                                size: 24,
                                value: d,
                                disabled: m,
                                className: I.checkbox,
                            }),
                        "send" === l &&
                            !m &&
                            (0, r.jsxs)("div", {
                                className: I.actions,
                                children: [
                                    x
                                        ? (0, r.jsx)(h.zxk, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: R.intl.string(R.t["HO/oXl"]),
                                              onClick: j,
                                          })
                                        : (0, r.jsx)("div", {
                                              className: a()(
                                                  (0, f.nY)({
                                                      size: f.zx.Sizes.SMALL,
                                                      color: f.zx.Colors.BRAND,
                                                  }),
                                                  I.fauxButton,
                                              ),
                                              children: R.intl.string(R.t.TXNS7e),
                                          }),
                                    x &&
                                        (0, r.jsx)(f.zx, {
                                            size: f.zx.Sizes.SMALL,
                                            color: f.zx.Colors.BRAND,
                                            look: f.zx.Looks.OUTLINED,
                                            onClick: P,
                                            children: R.intl.string(R.t.KyUKhY),
                                        }),
                                ],
                            }),
                    ],
                },
            ),
        )
    );
}
function H(e) {
    var { user: t, subLabel: n } = e,
        l = U(e, ["user", "subLabel"]);
    let i = M.ZP.useName(t),
        s = M.ZP.useUserTag(t, { decoration: "never" }),
        a = (0, d.e7)([_.Z], () => _.Z.getNickname(t.id)),
        u = (0, d.e7)([j.Z], () => j.Z.getStatus(t.id));
    return (0, r.jsx)(
        G,
        z(k({}, l), {
            icon: (0, r.jsx)(m.Z, {
                "aria-hidden": !0,
                size: h.EFr.SIZE_32,
                user: t,
                status: u,
            }),
            label: null != a ? a : i,
            subLabel: null != n ? n : s,
        }),
    );
}
function q(e) {
    var { channel: t, subLabel: n } = e,
        l = U(e, ["channel", "subLabel"]);
    let i = (0, y.ZP)(t),
        s = (0, x._)(t);
    return (0, r.jsx)(
        G,
        z(k({}, l), {
            icon: (0, r.jsx)(E.Z, {
                "aria-hidden": !0,
                size: h.EFr.SIZE_32,
                channel: t,
                experimentLocation: "forward-modal",
            }),
            label: i,
            subLabel: null != n ? n : s,
        }),
    );
}
function W(e) {
    var { channel: t, subLabel: n } = e,
        l = U(e, ["channel", "subLabel"]);
    let i = (0, d.e7)([Z.Z], () => Z.Z.getGuild(null == t ? void 0 : t.guild_id)),
        s = (0, y.ZP)(t),
        a = (0, d.e7)([O.Z, L.default, _.Z], () => {
            let e = O.Z.getChannel(t.parent_id);
            return null == e ? null : (0, y.F6)(e, L.default, _.Z, !1);
        }),
        u = (0, d.e7)([P.ZP], () => P.ZP.lastMessageTimestamp(t.id, w.W.CHANNEL)),
        c = null == i ? void 0 : i.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? h.Mmi : h.VL1;
        c = (0, r.jsxs)("div", {
            className: I.threadSubLabel,
            children: [
                (0, r.jsx)(e, {
                    color: h.TVs.colors.TEXT_SECONDARY,
                    className: I.subLabelIcon,
                }),
                (0, r.jsx)(h.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: a,
                }),
                null != u
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.Text, {
                                  className: I.subLabelSeparator,
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: "\u2022",
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: (0, C.Xf)(o()(u)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, r.jsx)(
        G,
        z(k({}, l), {
            icon: (0, r.jsx)(S.Z, {
                size: S.E.SMALL_32,
                guild: i,
                channel: t,
            }),
            label: s,
            subLabel: null != n ? n : c,
        }),
    );
}
function V(e) {
    var {
            rowData: t,
            rowMode: n,
            message: l,
            originChannel: s,
            selectedDestinations: a,
            handleToggleDestination: u,
            disableSelection: o,
            rowClassName: d,
        } = e,
        f = U(e, [
            "rowData",
            "rowMode",
            "message",
            "originChannel",
            "selectedDestinations",
            "handleToggleDestination",
            "disableSelection",
            "rowClassName",
        ]);
    let m = i.useMemo(() => [t.length], [t.length]),
        g = i.useCallback(() => 48, []),
        y = i.useMemo(() => {
            var e;
            return null != (e = null == a ? void 0 : a.map(v.hC)) ? e : [];
        }, [a]),
        E = i.useCallback(
            (e) => {
                let { section: i, row: a } = e;
                if (i > 0) return;
                let { type: c, record: f } = t[a];
                if (c === p.h8.HEADER) return;
                let h =
                        c === p.h8.USER
                            ? {
                                  type: "user",
                                  id: f.id,
                              }
                            : {
                                  type: "channel",
                                  id: f.id,
                              },
                    m = (0, v.hC)(h),
                    g = (0, D.HY)(l, s, f),
                    b = y.includes(m),
                    E = {
                        key: m,
                        message: l,
                        destination: h,
                        rowMode: n,
                        subLabel: null != g ? g.label : void 0,
                        disabled: (o && !b) || null != g,
                        selected: b,
                        onPressDestination: u,
                        "aria-posinset": a + 1,
                        "aria-setsize": t.length,
                        className: d,
                    };
                return c === p.h8.USER
                    ? (0, r.jsx)(H, k({ user: f }, E))
                    : c === p.h8.GROUP_DM
                      ? (0, r.jsx)(q, k({ channel: f }, E))
                      : c === p.h8.TEXT_CHANNEL || c === p.h8.VOICE_CHANNEL
                        ? (0, r.jsx)(W, k({ channel: f }, E))
                        : void (0, A.vE)(c);
            },
            [o, u, l, s, t, n, y, d],
        ),
        S = i.useRef(null),
        x = (0, b.Z)("forward-modal", S);
    return (0, r.jsx)(c.bG, {
        navigator: x,
        children: (0, r.jsx)(c.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = U(e, ["ref"]);
                return (0, r.jsx)(
                    h.YAO,
                    z(
                        k(
                            {
                                scrollerRef: (e) => {
                                    var n;
                                    (S.current = e),
                                        (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                            },
                            n,
                            f,
                        ),
                        {
                            sections: m,
                            sectionHeight: 0,
                            renderRow: E,
                            rowHeight: g,
                        },
                    ),
                );
            },
        }),
    });
}
