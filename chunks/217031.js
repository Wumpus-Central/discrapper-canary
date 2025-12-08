n.d(t, { Y: () => F });
var l = n(54381),
    r = n(473749),
    s = n(120356),
    i = n.n(s),
    a = n(913527),
    u = n.n(a),
    c = n(91192),
    o = n(442837),
    d = n(481060),
    f = n(700582),
    h = n(212819),
    m = n(933557),
    b = n(266076),
    g = n(810123),
    p = n(448486),
    y = n(987509),
    S = n(592125),
    j = n(430824),
    E = n(158776),
    x = n(306680),
    v = n(699516),
    P = n(594174),
    Z = n(55935),
    O = n(823379),
    L = n(51144),
    _ = n(784384),
    C = n(490897),
    N = n(773921);
function T(e) {
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
function M(e, t) {
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
function w(e, t) {
    if (null == e) return {};
    var n,
        l,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                s = Object.keys(e);
            for (l = 0; l < s.length; l++) (n = s[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (l = 0; l < s.length; l++)
            (n = s[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function A(e) {
    let {
            destination: t,
            icon: n,
            label: s,
            subLabel: a,
            selected: u,
            disabled: o,
            onPressDestination: f,
            "aria-setsize": h,
            "aria-posinset": m,
            className: b,
        } = e,
        g = (0, c.JA)(t.id),
        p = r.useCallback(() => {
            null == f || f(t);
        }, [f, t]);
    return (0, l.jsxs)(
        d.P3F,
        M(
            T(
                {
                    className: i()(N.destinationRow, b, { [N.disabled]: o }),
                    onClick: o ? void 0 : p,
                    "aria-selected": u,
                    "aria-setsize": h,
                    "aria-posinset": m,
                },
                g,
            ),
            {
                children: [
                    (0, l.jsxs)("div", {
                        className: N.identity,
                        children: [
                            (0, l.jsx)("div", {
                                className: N.iconWrapper,
                                children: n,
                            }),
                            (0, l.jsxs)("div", {
                                className: N.labels,
                                children: [
                                    (0, l.jsx)(d.Text, {
                                        tag: "strong",
                                        className: N.label,
                                        variant: "text-md/semibold",
                                        lineClamp: 1,
                                        children: s,
                                    }),
                                    (0, l.jsx)(d.Text, {
                                        className: N.subLabel,
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: a,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: N.checkbox,
                        children: (0, l.jsx)(d.FZ5, {
                            checked: !!u,
                            disabled: o,
                        }),
                    }),
                ],
            },
        ),
    );
}
function I(e) {
    var { user: t, subLabel: n } = e,
        r = w(e, ["user", "subLabel"]);
    let s = L.ZP.useName(t),
        i = L.ZP.useUserTag(t, { decoration: "never" }),
        a = (0, o.e7)([v.Z], () => v.Z.getNickname(t.id)),
        u = (0, o.e7)([E.Z], () => E.Z.getStatus(t.id));
    return (0, l.jsx)(
        A,
        M(T({}, r), {
            icon: (0, l.jsx)(f.Z, {
                "aria-hidden": !0,
                size: d.EFr.SIZE_32,
                user: t,
                status: u,
            }),
            label: null != a ? a : s,
            subLabel: null != n ? n : i,
        }),
    );
}
function k(e) {
    var { channel: t, subLabel: n } = e,
        r = w(e, ["channel", "subLabel"]);
    let s = (0, m.ZP)(t),
        i = (0, p._)(t);
    return (0, l.jsx)(
        A,
        M(T({}, r), {
            icon: (0, l.jsx)(b.Z, {
                "aria-hidden": !0,
                size: d.EFr.SIZE_32,
                channel: t,
            }),
            label: s,
            subLabel: null != n ? n : i,
        }),
    );
}
function D(e) {
    var { channel: t, subLabel: n } = e,
        r = w(e, ["channel", "subLabel"]);
    let s = (0, o.e7)([j.Z], () => j.Z.getGuild(null == t ? void 0 : t.guild_id)),
        i = (0, m.ZP)(t),
        a = (0, o.e7)([S.Z, P.default, v.Z], () => {
            let e = S.Z.getChannel(t.parent_id);
            return null == e ? null : (0, m.F6)(e, P.default, v.Z, !1);
        }),
        c = (0, o.e7)([x.ZP], () => x.ZP.lastMessageTimestamp(t.id, C.W.CHANNEL)),
        f = null == s ? void 0 : s.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.Mmi : d.VL1;
        f = (0, l.jsxs)("div", {
            className: N.threadSubLabel,
            children: [
                (0, l.jsx)(e, {
                    color: d.TVs.colors.TEXT_SUBTLE,
                    className: N.subLabelIcon,
                }),
                (0, l.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: a,
                }),
                null != c
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.Text, {
                                  className: N.subLabelSeparator,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, l.jsx)(d.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, Z.Xf)(u()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(
        A,
        M(T({}, r), {
            icon: (0, l.jsx)(g.Z, {
                size: g.E.SMALL_32,
                guild: s,
                channel: t,
            }),
            label: i,
            subLabel: null != n ? n : f,
        }),
    );
}
function F(e) {
    let {
            rowData: t,
            message: n,
            originChannel: s,
            selectedDestinations: i,
            handleToggleDestination: a,
            disableSelection: u,
            rowClassName: c,
            validateDestination: o,
        } = e,
        d = r.useMemo(() => {
            var e;
            return null != (e = null == i ? void 0 : i.map(y.hC)) ? e : [];
        }, [i]),
        f = r.useCallback(
            (e) => {
                let { section: r, row: i } = e;
                if (r > 0) return;
                let { type: f, record: m } = t[i];
                if (f === h.h8.HEADER) return;
                let b =
                        f === h.h8.USER
                            ? {
                                  type: "user",
                                  id: m.id,
                              }
                            : {
                                  type: "channel",
                                  id: m.id,
                              },
                    g = (0, y.hC)(b),
                    p = (0, _.HY)(n, s, m, o),
                    S = d.includes(g),
                    j = {
                        key: g,
                        message: n,
                        destination: b,
                        subLabel: null != p ? p.label : void 0,
                        disabled: (u && !S) || null != p,
                        selected: S,
                        onPressDestination: a,
                        "aria-posinset": i + 1,
                        "aria-setsize": t.length,
                        className: c,
                    };
                return f === h.h8.USER
                    ? (0, l.jsx)(I, T({ user: m }, j))
                    : f === h.h8.GROUP_DM
                      ? (0, l.jsx)(k, T({ channel: m }, j))
                      : f === h.h8.TEXT_CHANNEL || f === h.h8.VOICE_CHANNEL
                        ? (0, l.jsx)(D, T({ channel: m }, j))
                        : void (0, O.vE)(f);
            },
            [u, a, n, s, t, d, c, o],
        );
    return {
        sections: [t.length],
        sectionHeight: 0,
        rowHeight: 48,
        renderRow: f,
    };
}
