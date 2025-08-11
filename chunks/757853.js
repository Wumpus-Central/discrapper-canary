n.d(t, {
    F: () => K,
    G: () => G,
}),
    n(388685);
var l,
    r = n(255367),
    a = n(73800),
    i = n(120356),
    s = n.n(i),
    o = n(913527),
    c = n.n(o),
    u = n(91192),
    d = n(442837),
    h = n(755721),
    f = n(481060),
    m = n(700582),
    g = n(493773),
    _ = n(724757),
    p = n(212819),
    b = n(933557),
    y = n(266076),
    v = n(810123),
    x = n(448486),
    E = n(987509),
    C = n(592125),
    S = n(430824),
    O = n(158776),
    P = n(306680),
    w = n(699516),
    Z = n(594174),
    N = n(626135),
    j = n(55935),
    I = n(823379),
    T = n(51144),
    L = n(784384),
    R = n(981631),
    A = n(490897),
    D = n(388032),
    M = n(691176);
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
function U(e, t) {
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
function F(e) {
    let {
            message: t,
            destination: n,
            rowMode: l,
            icon: i,
            label: o,
            subLabel: c,
            selected: d,
            disabled: m,
            onPressDestination: _,
            "aria-setsize": p,
            "aria-posinset": b,
        } = e,
        y = (0, u.JA)(n.id),
        [v, x] = a.useState(!1),
        E = a.useRef(!1),
        C = a.useCallback(() => {
            if ("send" === l) {
                x(!0), (E.current = !0);
                return;
            }
            null == _ || _(n);
        }, [l, _, n]),
        S = a.useCallback(() => {
            N.default.track(R.rMx.FORWARD_ONE_TAP_VIEW, {
                channel_id: t.channel_id,
                message_id: t.id,
            }),
                (E.current = !1),
                null == _ ||
                    _(n, {
                        transitionToDestination: !0,
                        closeAfterSend: !0,
                    });
        }, [t.channel_id, t.id, _, n]),
        O = a.useCallback(() => {
            x(!1),
                (E.current = !1),
                N.default.track(R.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: t.channel_id,
                    message_id: t.id,
                });
        }, [t]);
    return (
        (0, g.ZP)(() => () => {
            E.current &&
                ((E.current = !1),
                null == _ ||
                    _(n, {
                        transitionToDestination: !1,
                        closeAfterSend: !1,
                    }));
        }),
        (0, r.jsxs)(
            f.P3F,
            U(
                k(
                    {
                        className: s()(M.destinationRow, { [M.disabled]: m }),
                        onClick: m || v ? void 0 : C,
                        "aria-selected": d,
                        "aria-setsize": p,
                        "aria-posinset": b,
                    },
                    y,
                ),
                {
                    children: [
                        (0, r.jsxs)("div", {
                            className: M.identity,
                            children: [
                                (0, r.jsx)("div", {
                                    className: M.iconWrapper,
                                    children: i,
                                }),
                                (0, r.jsxs)("div", {
                                    className: M.labels,
                                    children: [
                                        (0, r.jsx)(f.Text, {
                                            tag: "strong",
                                            className: M.label,
                                            variant: "text-md/semibold",
                                            lineClamp: 1,
                                            children: o,
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            className: M.subLabel,
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: c,
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
                                className: M.checkbox,
                            }),
                        "send" === l &&
                            !m &&
                            (0, r.jsxs)("div", {
                                className: M.actions,
                                children: [
                                    v
                                        ? (0, r.jsx)(f.zxk, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: D.intl.string(D.t["HO/oXl"]),
                                              onClick: S,
                                          })
                                        : (0, r.jsx)("div", {
                                              className: s()(
                                                  (0, h.nY)({
                                                      size: h.zx.Sizes.SMALL,
                                                      color: h.zx.Colors.BRAND,
                                                  }),
                                                  M.fauxButton,
                                              ),
                                              children: D.intl.string(D.t.TXNS7e),
                                          }),
                                    v &&
                                        (0, r.jsx)(h.zx, {
                                            size: h.zx.Sizes.SMALL,
                                            color: h.zx.Colors.BRAND,
                                            look: h.zx.Looks.OUTLINED,
                                            onClick: O,
                                            children: D.intl.string(D.t.KyUKhY),
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
        l = W(e, ["user", "subLabel"]);
    let a = T.ZP.useName(t),
        i = T.ZP.useUserTag(t, { decoration: "never" }),
        s = (0, d.e7)([w.Z], () => w.Z.getNickname(t.id)),
        o = (0, d.e7)([O.Z], () => O.Z.getStatus(t.id));
    return (0, r.jsx)(
        F,
        U(k({}, l), {
            icon: (0, r.jsx)(m.Z, {
                "aria-hidden": !0,
                size: f.EFr.SIZE_32,
                user: t,
                status: o,
            }),
            label: null != s ? s : a,
            subLabel: null != n ? n : i,
        }),
    );
}
function V(e) {
    var { channel: t, subLabel: n } = e,
        l = W(e, ["channel", "subLabel"]);
    let a = (0, b.ZP)(t),
        i = (0, x._)(t);
    return (0, r.jsx)(
        F,
        U(k({}, l), {
            icon: (0, r.jsx)(y.Z, {
                "aria-hidden": !0,
                size: f.EFr.SIZE_32,
                channel: t,
                experimentLocation: "forward-modal",
            }),
            label: a,
            subLabel: null != n ? n : i,
        }),
    );
}
function z(e) {
    var { channel: t, subLabel: n } = e,
        l = W(e, ["channel", "subLabel"]);
    let a = (0, d.e7)([S.Z], () => S.Z.getGuild(null == t ? void 0 : t.guild_id)),
        i = (0, b.ZP)(t),
        s = (0, d.e7)([C.Z, Z.default, w.Z], () => {
            let e = C.Z.getChannel(t.parent_id);
            return null == e ? null : (0, b.F6)(e, Z.default, w.Z, !1);
        }),
        o = (0, d.e7)([P.ZP], () => P.ZP.lastMessageTimestamp(t.id, A.W.CHANNEL)),
        u = null == a ? void 0 : a.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? f.Mmi : f.VL1;
        u = (0, r.jsxs)("div", {
            className: M.threadSubLabel,
            children: [
                (0, r.jsx)(e, {
                    color: f.TVs.colors.TEXT_SECONDARY,
                    className: M.subLabelIcon,
                }),
                (0, r.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: s,
                }),
                null != o
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.Text, {
                                  className: M.subLabelSeparator,
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: "\u2022",
                              }),
                              (0, r.jsx)(f.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: (0, j.Xf)(c()(o)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, r.jsx)(
        F,
        U(k({}, l), {
            icon: (0, r.jsx)(v.Z, {
                size: v.E.SMALL_32,
                guild: a,
                channel: t,
            }),
            label: i,
            subLabel: null != n ? n : u,
        }),
    );
}
function K(e) {
    var {
            rowData: t,
            rowMode: n,
            message: l,
            originChannel: i,
            selectedDestinations: s,
            handleToggleDestination: o,
            disableSelection: c,
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
            return null != (e = null == s ? void 0 : s.map(E.hC)) ? e : [];
        }, [s]),
        b = a.useCallback(
            (e) => {
                let { section: a, row: s } = e;
                if (a > 0) return;
                let { type: u, record: d } = t[s];
                if (u === p.h8.HEADER) return;
                let h =
                        u === p.h8.USER
                            ? {
                                  type: "user",
                                  id: d.id,
                              }
                            : {
                                  type: "channel",
                                  id: d.id,
                              },
                    f = (0, E.hC)(h),
                    m = (0, L.HY)(l, i, d),
                    _ = g.includes(f),
                    b = {
                        key: f,
                        message: l,
                        destination: h,
                        rowMode: n,
                        subLabel: null != m ? m.label : void 0,
                        disabled: (c && !_) || null != m,
                        selected: _,
                        onPressDestination: o,
                        "aria-posinset": s + 1,
                        "aria-setsize": t.length,
                    };
                return u === p.h8.USER
                    ? (0, r.jsx)(H, k({ user: d }, b))
                    : u === p.h8.GROUP_DM
                      ? (0, r.jsx)(V, k({ channel: d }, b))
                      : u === p.h8.TEXT_CHANNEL || u === p.h8.VOICE_CHANNEL
                        ? (0, r.jsx)(z, k({ channel: d }, b))
                        : void (0, I.vE)(u);
            },
            [c, o, l, i, t, n, g],
        ),
        y = a.useRef(null),
        v = (0, _.Z)("forward-modal", y);
    return (0, r.jsx)(u.bG, {
        navigator: v,
        children: (0, r.jsx)(u.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = W(e, ["ref"]);
                return (0, r.jsx)(
                    f.YAO,
                    U(
                        k(
                            {
                                scrollerRef: (e) => {
                                    var n;
                                    (y.current = e),
                                        (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                            },
                            n,
                            d,
                        ),
                        {
                            sections: h,
                            sectionHeight: 0,
                            renderRow: b,
                            rowHeight: m,
                        },
                    ),
                );
            },
        }),
    });
}
