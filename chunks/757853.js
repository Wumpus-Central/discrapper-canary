n.d(t, {
    F: () => V,
    G: () => G,
}),
    n(388685);
var l,
    r = n(951288),
    a = n(647438),
    s = n(120356),
    i = n.n(s),
    o = n(913527),
    u = n.n(o),
    c = n(91192),
    d = n(442837),
    h = n(755721),
    f = n(481060),
    m = n(700582),
    g = n(493773),
    p = n(724757),
    b = n(212819),
    _ = n(933557),
    v = n(266076),
    x = n(810123),
    y = n(448486),
    w = n(987509),
    j = n(592125),
    O = n(430824),
    P = n(158776),
    S = n(306680),
    E = n(699516),
    C = n(594174),
    Z = n(626135),
    N = n(55935),
    L = n(823379),
    M = n(51144),
    T = n(784384),
    R = n(981631),
    D = n(490897),
    I = n(388032),
    A = n(773921);
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
function F(e, t) {
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
function W(e, t) {
    if (null == e) return {};
    var n,
        l,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                a = Object.keys(e);
            for (l = 0; l < a.length; l++) (n = a[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (l = 0; l < a.length; l++)
            (n = a[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
var G = (((l = {}).TOGGLE = "toggle"), (l.SEND = "send"), l);
function U(e) {
    let {
            message: t,
            destination: n,
            rowMode: l,
            icon: s,
            label: o,
            subLabel: u,
            selected: d,
            disabled: m,
            onPressDestination: p,
            "aria-setsize": b,
            "aria-posinset": _,
        } = e,
        v = (0, c.JA)(n.id),
        [x, y] = a.useState(!1),
        w = a.useRef(!1),
        j = a.useCallback(() => {
            if ("send" === l) {
                y(!0), (w.current = !0);
                return;
            }
            null == p || p(n);
        }, [l, p, n]),
        O = a.useCallback(() => {
            Z.default.track(R.rMx.FORWARD_ONE_TAP_VIEW, {
                channel_id: t.channel_id,
                message_id: t.id,
            }),
                (w.current = !1),
                null == p ||
                    p(n, {
                        transitionToDestination: !0,
                        closeAfterSend: !0,
                    });
        }, [t.channel_id, t.id, p, n]),
        P = a.useCallback(() => {
            y(!1),
                (w.current = !1),
                Z.default.track(R.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: t.channel_id,
                    message_id: t.id,
                });
        }, [t]);
    return (
        (0, g.ZP)(() => () => {
            w.current &&
                ((w.current = !1),
                null == p ||
                    p(n, {
                        transitionToDestination: !1,
                        closeAfterSend: !1,
                    }));
        }),
        (0, r.jsxs)(
            f.P3F,
            F(
                k(
                    {
                        className: i()(A.destinationRow, { [A.disabled]: m }),
                        onClick: m || x ? void 0 : j,
                        "aria-selected": d,
                        "aria-setsize": b,
                        "aria-posinset": _,
                    },
                    v,
                ),
                {
                    children: [
                        (0, r.jsxs)("div", {
                            className: A.identity,
                            children: [
                                (0, r.jsx)("div", {
                                    className: A.iconWrapper,
                                    children: s,
                                }),
                                (0, r.jsxs)("div", {
                                    className: A.labels,
                                    children: [
                                        (0, r.jsx)(f.Text, {
                                            tag: "strong",
                                            className: A.label,
                                            variant: "text-md/semibold",
                                            lineClamp: 1,
                                            children: o,
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            className: A.subLabel,
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: u,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        "toggle" === l &&
                            (0, r.jsx)(f.XZJ, {
                                type: f.XZJ.Types.INVERTED,
                                displayOnly: !0,
                                size: 24,
                                value: d,
                                disabled: m,
                                className: A.checkbox,
                            }),
                        "send" === l &&
                            !m &&
                            (0, r.jsxs)("div", {
                                className: A.actions,
                                children: [
                                    x
                                        ? (0, r.jsx)(f.zxk, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: I.intl.string(I.t["HO/oXl"]),
                                              onClick: O,
                                          })
                                        : (0, r.jsx)("div", {
                                              className: i()(
                                                  (0, h.nY)({
                                                      size: h.zx.Sizes.SMALL,
                                                      color: h.zx.Colors.BRAND,
                                                  }),
                                                  A.fauxButton,
                                              ),
                                              children: I.intl.string(I.t.TXNS7e),
                                          }),
                                    x &&
                                        (0, r.jsx)(h.zx, {
                                            size: h.zx.Sizes.SMALL,
                                            color: h.zx.Colors.BRAND,
                                            look: h.zx.Looks.OUTLINED,
                                            onClick: P,
                                            children: I.intl.string(I.t.KyUKhY),
                                        }),
                                ],
                            }),
                    ],
                },
            ),
        )
    );
}
function z(e) {
    var { user: t, subLabel: n } = e,
        l = W(e, ["user", "subLabel"]);
    let a = M.ZP.useName(t),
        s = M.ZP.useUserTag(t, { decoration: "never" }),
        i = (0, d.e7)([E.Z], () => E.Z.getNickname(t.id)),
        o = (0, d.e7)([P.Z], () => P.Z.getStatus(t.id));
    return (0, r.jsx)(
        U,
        F(k({}, l), {
            icon: (0, r.jsx)(m.Z, {
                "aria-hidden": !0,
                size: f.EFr.SIZE_32,
                user: t,
                status: o,
            }),
            label: null != i ? i : a,
            subLabel: null != n ? n : s,
        }),
    );
}
function H(e) {
    var { channel: t, subLabel: n } = e,
        l = W(e, ["channel", "subLabel"]);
    let a = (0, _.ZP)(t),
        s = (0, y._)(t);
    return (0, r.jsx)(
        U,
        F(k({}, l), {
            icon: (0, r.jsx)(v.Z, {
                "aria-hidden": !0,
                size: f.EFr.SIZE_32,
                channel: t,
                experimentLocation: "forward-modal",
            }),
            label: a,
            subLabel: null != n ? n : s,
        }),
    );
}
function B(e) {
    var { channel: t, subLabel: n } = e,
        l = W(e, ["channel", "subLabel"]);
    let a = (0, d.e7)([O.Z], () => O.Z.getGuild(null == t ? void 0 : t.guild_id)),
        s = (0, _.ZP)(t),
        i = (0, d.e7)([j.Z, C.default, E.Z], () => {
            let e = j.Z.getChannel(t.parent_id);
            return null == e ? null : (0, _.F6)(e, C.default, E.Z, !1);
        }),
        o = (0, d.e7)([S.ZP], () => S.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
        c = null == a ? void 0 : a.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? f.Mmi : f.VL1;
        c = (0, r.jsxs)("div", {
            className: A.threadSubLabel,
            children: [
                (0, r.jsx)(e, {
                    color: f.TVs.colors.TEXT_SECONDARY,
                    className: A.subLabelIcon,
                }),
                (0, r.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: i,
                }),
                null != o
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.Text, {
                                  className: A.subLabelSeparator,
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: "\u2022",
                              }),
                              (0, r.jsx)(f.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: (0, N.Xf)(u()(o)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, r.jsx)(
        U,
        F(k({}, l), {
            icon: (0, r.jsx)(x.Z, {
                size: x.E.SMALL_32,
                guild: a,
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
            selectedDestinations: i,
            handleToggleDestination: o,
            disableSelection: u,
        } = e,
        d = W(e, [
            "rowData",
            "rowMode",
            "message",
            "originChannel",
            "selectedDestinations",
            "handleToggleDestination",
            "disableSelection",
        ]);
    let h = a.useMemo(() => [t.length], [t.length]),
        m = a.useCallback(() => 48, []),
        g = a.useMemo(() => {
            var e;
            return null != (e = null == i ? void 0 : i.map(w.hC)) ? e : [];
        }, [i]),
        _ = a.useCallback(
            (e) => {
                let { section: a, row: i } = e;
                if (a > 0) return;
                let { type: c, record: d } = t[i];
                if (c === b.h8.HEADER) return;
                let h =
                        c === b.h8.USER
                            ? {
                                  type: "user",
                                  id: d.id,
                              }
                            : {
                                  type: "channel",
                                  id: d.id,
                              },
                    f = (0, w.hC)(h),
                    m = (0, T.HY)(l, s, d),
                    p = g.includes(f),
                    _ = {
                        key: f,
                        message: l,
                        destination: h,
                        rowMode: n,
                        subLabel: null != m ? m.label : void 0,
                        disabled: (u && !p) || null != m,
                        selected: p,
                        onPressDestination: o,
                        "aria-posinset": i + 1,
                        "aria-setsize": t.length,
                    };
                return c === b.h8.USER
                    ? (0, r.jsx)(z, k({ user: d }, _))
                    : c === b.h8.GROUP_DM
                      ? (0, r.jsx)(H, k({ channel: d }, _))
                      : c === b.h8.TEXT_CHANNEL || c === b.h8.VOICE_CHANNEL
                        ? (0, r.jsx)(B, k({ channel: d }, _))
                        : void (0, L.vE)(c);
            },
            [u, o, l, s, t, n, g],
        ),
        v = a.useRef(null),
        x = (0, p.Z)("forward-modal", v);
    return (0, r.jsx)(c.bG, {
        navigator: x,
        children: (0, r.jsx)(c.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = W(e, ["ref"]);
                return (0, r.jsx)(
                    f.YAO,
                    F(
                        k(
                            {
                                scrollerRef: (e) => {
                                    var n;
                                    (v.current = e),
                                        (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                            },
                            n,
                            d,
                        ),
                        {
                            sections: h,
                            sectionHeight: 0,
                            renderRow: _,
                            rowHeight: m,
                        },
                    ),
                );
            },
        }),
    });
}
