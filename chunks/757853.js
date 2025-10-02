n.d(t, { F: () => F });
var l = n(951288),
    r = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(913527),
    u = n.n(a),
    c = n(91192),
    o = n(442837),
    d = n(755721),
    f = n(481060),
    h = n(700582),
    m = n(724757),
    g = n(212819),
    b = n(933557),
    p = n(266076),
    y = n(810123),
    E = n(448486),
    S = n(987509),
    v = n(592125),
    Z = n(430824),
    j = n(158776),
    x = n(306680),
    P = n(699516),
    O = n(594174),
    L = n(55935),
    N = n(823379),
    _ = n(51144),
    C = n(784384),
    M = n(490897),
    A = n(132358);
function w(e) {
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
function T(e, t) {
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
function D(e, t) {
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
function I(e) {
    let {
            destination: t,
            icon: n,
            label: i,
            subLabel: a,
            selected: u,
            disabled: o,
            onPressDestination: h,
            "aria-setsize": m,
            "aria-posinset": g,
            className: b,
        } = e,
        p = (0, c.JA)(t.id),
        y = r.useCallback(() => {
            null == h || h(t);
        }, [h, t]);
    return (0, l.jsxs)(
        f.P3F,
        T(
            w(
                {
                    className: s()(A.destinationRow, b, { [A.disabled]: o }),
                    onClick: o ? void 0 : y,
                    "aria-selected": u,
                    "aria-setsize": m,
                    "aria-posinset": g,
                },
                p,
            ),
            {
                children: [
                    (0, l.jsxs)("div", {
                        className: A.identity,
                        children: [
                            (0, l.jsx)("div", {
                                className: A.iconWrapper,
                                children: n,
                            }),
                            (0, l.jsxs)("div", {
                                className: A.labels,
                                children: [
                                    (0, l.jsx)(f.Text, {
                                        tag: "strong",
                                        className: A.label,
                                        variant: "text-md/semibold",
                                        lineClamp: 1,
                                        children: i,
                                    }),
                                    (0, l.jsx)(f.Text, {
                                        className: A.subLabel,
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: a,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(d.VL, {
                        checked: !!u,
                        disabled: o,
                        className: A.checkbox,
                        isIndicator: !0,
                    }),
                ],
            },
        ),
    );
}
function R(e) {
    var { user: t, subLabel: n } = e,
        r = D(e, ["user", "subLabel"]);
    let i = _.ZP.useName(t),
        s = _.ZP.useUserTag(t, { decoration: "never" }),
        a = (0, o.e7)([P.Z], () => P.Z.getNickname(t.id)),
        u = (0, o.e7)([j.Z], () => j.Z.getStatus(t.id));
    return (0, l.jsx)(
        I,
        T(w({}, r), {
            icon: (0, l.jsx)(h.Z, {
                "aria-hidden": !0,
                size: f.EFr.SIZE_32,
                user: t,
                status: u,
            }),
            label: null != a ? a : i,
            subLabel: null != n ? n : s,
        }),
    );
}
function k(e) {
    var { channel: t, subLabel: n } = e,
        r = D(e, ["channel", "subLabel"]);
    let i = (0, b.ZP)(t),
        s = (0, E._)(t);
    return (0, l.jsx)(
        I,
        T(w({}, r), {
            icon: (0, l.jsx)(p.Z, {
                "aria-hidden": !0,
                size: f.EFr.SIZE_32,
                channel: t,
                experimentLocation: "forward-modal",
            }),
            label: i,
            subLabel: null != n ? n : s,
        }),
    );
}
function U(e) {
    var { channel: t, subLabel: n } = e,
        r = D(e, ["channel", "subLabel"]);
    let i = (0, o.e7)([Z.Z], () => Z.Z.getGuild(null == t ? void 0 : t.guild_id)),
        s = (0, b.ZP)(t),
        a = (0, o.e7)([v.Z, O.default, P.Z], () => {
            let e = v.Z.getChannel(t.parent_id);
            return null == e ? null : (0, b.F6)(e, O.default, P.Z, !1);
        }),
        c = (0, o.e7)([x.ZP], () => x.ZP.lastMessageTimestamp(t.id, M.W.CHANNEL)),
        d = null == i ? void 0 : i.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? f.Mmi : f.VL1;
        d = (0, l.jsxs)("div", {
            className: A.threadSubLabel,
            children: [
                (0, l.jsx)(e, {
                    color: f.TVs.colors.TEXT_SECONDARY,
                    className: A.subLabelIcon,
                }),
                (0, l.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: a,
                }),
                null != c
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(f.Text, {
                                  className: A.subLabelSeparator,
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: "\u2022",
                              }),
                              (0, l.jsx)(f.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: (0, L.Xf)(u()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(
        I,
        T(w({}, r), {
            icon: (0, l.jsx)(y.Z, {
                size: y.E.SMALL_32,
                guild: i,
                channel: t,
            }),
            label: s,
            subLabel: null != n ? n : d,
        }),
    );
}
function F(e) {
    var {
            rowData: t,
            message: n,
            originChannel: i,
            selectedDestinations: s,
            handleToggleDestination: a,
            disableSelection: u,
            rowClassName: o,
        } = e,
        d = D(e, [
            "rowData",
            "message",
            "originChannel",
            "selectedDestinations",
            "handleToggleDestination",
            "disableSelection",
            "rowClassName",
        ]);
    let h = r.useMemo(() => [t.length], [t.length]),
        b = r.useCallback(() => 48, []),
        p = r.useMemo(() => {
            var e;
            return null != (e = null == s ? void 0 : s.map(S.hC)) ? e : [];
        }, [s]),
        y = r.useCallback(
            (e) => {
                let { section: r, row: s } = e;
                if (r > 0) return;
                let { type: c, record: d } = t[s];
                if (c === g.h8.HEADER) return;
                let f =
                        c === g.h8.USER
                            ? {
                                  type: "user",
                                  id: d.id,
                              }
                            : {
                                  type: "channel",
                                  id: d.id,
                              },
                    h = (0, S.hC)(f),
                    m = (0, C.HY)(n, i, d),
                    b = p.includes(h),
                    y = {
                        key: h,
                        message: n,
                        destination: f,
                        subLabel: null != m ? m.label : void 0,
                        disabled: (u && !b) || null != m,
                        selected: b,
                        onPressDestination: a,
                        "aria-posinset": s + 1,
                        "aria-setsize": t.length,
                        className: o,
                    };
                return c === g.h8.USER
                    ? (0, l.jsx)(R, w({ user: d }, y))
                    : c === g.h8.GROUP_DM
                      ? (0, l.jsx)(k, w({ channel: d }, y))
                      : c === g.h8.TEXT_CHANNEL || c === g.h8.VOICE_CHANNEL
                        ? (0, l.jsx)(U, w({ channel: d }, y))
                        : void (0, N.vE)(c);
            },
            [u, a, n, i, t, p, o],
        ),
        E = r.useRef(null),
        v = (0, m.Z)("forward-modal", E);
    return (0, l.jsx)(c.bG, {
        navigator: v,
        children: (0, l.jsx)(c.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = D(e, ["ref"]);
                return (0, l.jsx)(
                    f.Tvr,
                    T(
                        w(
                            {
                                ref: (e) => {
                                    var n;
                                    (E.current = e),
                                        (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                            },
                            n,
                            d,
                        ),
                        {
                            sections: h,
                            sectionHeight: 0,
                            renderRow: y,
                            rowHeight: b,
                        },
                    ),
                );
            },
        }),
    });
}
