n.d(t, { Q: () => G });
var r = n(951288),
    l = n(647438),
    a = n(120356),
    i = n.n(a),
    s = n(913527),
    u = n.n(s),
    o = n(91192),
    c = n(442837),
    d = n(742746),
    f = n(755721),
    b = n(481060),
    p = n(700582),
    h = n(724757),
    m = n(212819),
    g = n(933557),
    y = n(266076),
    x = n(810123),
    v = n(448486),
    S = n(987509),
    E = n(131704),
    j = n(592125),
    Z = n(430824),
    O = n(496675),
    _ = n(158776),
    P = n(306680),
    C = n(699516),
    L = n(594174),
    T = n(55935),
    N = n(823379),
    w = n(51144),
    D = n(981631),
    R = n(490897),
    M = n(388032),
    k = n(834505);
function A(e) {
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
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
function H(e) {
    let {
            destination: t,
            icon: n,
            label: a,
            subLabel: s,
            selected: u,
            disabled: c,
            onPressDestination: d,
            "aria-setsize": p,
            "aria-posinset": h,
        } = e,
        m = (0, o.JA)(t.id),
        g = l.useCallback(() => {
            c || null == d || d(t);
        }, [d, c, t]);
    return (0, r.jsxs)(
        b.P3F,
        I(
            A(
                {
                    className: i()(k.destinationRow, { [k.disabled]: c }),
                    onClick: g,
                    "aria-selected": u,
                    "aria-setsize": p,
                    "aria-posinset": h,
                },
                m,
            ),
            {
                children: [
                    (0, r.jsxs)("div", {
                        className: k.identity,
                        children: [
                            (0, r.jsx)("div", {
                                className: k.iconWrapper,
                                children: n,
                            }),
                            (0, r.jsxs)("div", {
                                className: k.labels,
                                children: [
                                    (0, r.jsx)(b.Text, {
                                        tag: "strong",
                                        className: k.label,
                                        variant: "text-md/semibold",
                                        lineClamp: 1,
                                        children: a,
                                    }),
                                    (0, r.jsx)(b.Text, {
                                        className: k.subLabel,
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: s,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.$q, {
                        type: f.M0.INVERTED,
                        displayOnly: !0,
                        size: 24,
                        value: u,
                        className: k.checkbox,
                    }),
                ],
            },
        ),
    );
}
function q(e) {
    var { user: t, subLabel: n } = e,
        l = U(e, ["user", "subLabel"]);
    let a = w.ZP.useName(t),
        i = w.ZP.useUserTag(t, { decoration: "never" }),
        s = (0, c.e7)([C.Z], () => C.Z.getNickname(t.id)),
        u = (0, c.e7)([_.Z], () => _.Z.getStatus(t.id));
    return (0, r.jsx)(
        H,
        I(A({}, l), {
            icon: (0, r.jsx)(p.Z, {
                "aria-hidden": !0,
                size: b.EFr.SIZE_32,
                user: t,
                status: u,
            }),
            label: null != s ? s : a,
            subLabel: null != n ? n : i,
        }),
    );
}
function F(e) {
    var { channel: t, subLabel: n } = e,
        l = U(e, ["channel", "subLabel"]);
    let a = (0, g.ZP)(t),
        i = (0, v._)(t);
    return (0, r.jsx)(
        H,
        I(A({}, l), {
            icon: (0, r.jsx)(y.Z, {
                "aria-hidden": !0,
                size: b.EFr.SIZE_32,
                channel: t,
                experimentLocation: "application-command-modal",
            }),
            label: a,
            subLabel: null != n ? n : i,
        }),
    );
}
function z(e) {
    var { channel: t, subLabel: n } = e,
        l = U(e, ["channel", "subLabel"]);
    let a = (0, c.e7)([Z.Z], () => Z.Z.getGuild(null == t ? void 0 : t.guild_id)),
        i = (0, g.ZP)(t),
        s = (0, c.e7)([j.Z, L.default, C.Z], () => {
            let e = j.Z.getChannel(t.parent_id);
            return null == e ? null : (0, g.F6)(e, L.default, C.Z, !1);
        }),
        o = (0, c.e7)([P.ZP], () => P.ZP.lastMessageTimestamp(t.id, R.W.CHANNEL)),
        d = null == a ? void 0 : a.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? b.Mmi : b.VL1;
        d = (0, r.jsxs)("div", {
            className: k.threadSubLabel,
            children: [
                (0, r.jsx)(e, {
                    color: b.TVs.colors.TEXT_SECONDARY,
                    className: k.subLabelIcon,
                }),
                (0, r.jsx)(b.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: s,
                }),
                null != o
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(b.Text, {
                                  className: k.subLabelSeparator,
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: "\u2022",
                              }),
                              (0, r.jsx)(b.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: (0, T.Xf)(u()(o)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, r.jsx)(
        H,
        I(A({}, l), {
            icon: (0, r.jsx)(x.Z, {
                size: x.E.SMALL_32,
                guild: a,
                channel: t,
            }),
            label: i,
            subLabel: null != n ? n : d,
        }),
    );
}
function G(e) {
    var { rowData: t, selectedDestinations: n, handleToggleDestination: a, disableSelection: i } = e,
        s = U(e, ["rowData", "selectedDestinations", "handleToggleDestination", "disableSelection"]);
    let u = l.useMemo(() => [t.length], [t.length]),
        c = l.useCallback(() => 48, []),
        f = l.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.map(S.hC)) ? e : [];
        }, [n]),
        b = l.useCallback(
            (e) => {
                let { section: n, row: l } = e;
                if (n > 0) return;
                let { type: s, record: u } = t[l];
                if (s === m.h8.HEADER) return;
                let o =
                        s === m.h8.USER
                            ? {
                                  type: "user",
                                  id: u.id,
                              }
                            : {
                                  type: "channel",
                                  id: u.id,
                              },
                    c = (0, S.hC)(o),
                    d = (function (e) {
                        if (
                            e instanceof E.Sf &&
                            (0, E.Km)(e.type) &&
                            null != e.rateLimitPerUser &&
                            e.rateLimitPerUser > 0 &&
                            !(O.Z.can(D.Plq.MANAGE_CHANNELS, e) || O.Z.can(D.Plq.MANAGE_MESSAGES, e))
                        )
                            return { label: M.intl.string(M.t.Icu3bW) };
                    })(u),
                    b = f.includes(c),
                    p = {
                        key: c,
                        destination: o,
                        subLabel: null != d ? d.label : void 0,
                        disabled: (i && !b) || null != d,
                        selected: b,
                        onPressDestination: a,
                        "aria-posinset": l + 1,
                        "aria-setsize": t.length,
                    };
                return s === m.h8.USER
                    ? (0, r.jsx)(q, A({ user: u }, p))
                    : s === m.h8.GROUP_DM
                      ? (0, r.jsx)(F, A({ channel: u }, p))
                      : s === m.h8.TEXT_CHANNEL || s === m.h8.VOICE_CHANNEL
                        ? (0, r.jsx)(z, A({ channel: u }, p))
                        : void (0, N.vE)(s);
            },
            [i, a, t, f],
        ),
        p = l.useRef(null),
        g = (0, h.Z)("share-command-modal", p);
    return (0, r.jsx)(o.bG, {
        navigator: g,
        children: (0, r.jsx)(o.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = U(e, ["ref"]);
                return (0, r.jsx)(
                    d.Tv,
                    I(
                        A(
                            {
                                ref: (e) => {
                                    var n;
                                    (p.current = e),
                                        (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                            },
                            n,
                            s,
                        ),
                        {
                            sections: u,
                            sectionHeight: 0,
                            renderRow: b,
                            rowHeight: c,
                        },
                    ),
                );
            },
        }),
    });
}
