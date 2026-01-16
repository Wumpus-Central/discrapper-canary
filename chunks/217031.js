n.d(t, { Y: () => D });
var r = n(54381),
    l = n(473749),
    s = n(120356),
    i = n.n(s),
    a = n(913527),
    u = n.n(a),
    c = n(91192),
    o = n(442837),
    d = n(481060),
    f = n(700582),
    b = n(212819),
    h = n(933557),
    m = n(266076),
    p = n(810123),
    g = n(448486),
    j = n(987509),
    x = n(592125),
    y = n(430824),
    v = n(158776),
    O = n(306680),
    P = n(699516),
    L = n(594174),
    Z = n(55935),
    S = n(823379),
    E = n(51144),
    N = n(784384),
    w = n(490897),
    T = n(614934);
function _(e) {
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
function C(e, t) {
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
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++)
            (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
function M(e) {
    let {
            destination: t,
            icon: n,
            label: s,
            subLabel: a,
            selected: u,
            disabled: o,
            onPressDestination: f,
            "aria-setsize": b,
            "aria-posinset": h,
            className: m,
        } = e,
        p = (0, c.JA)(t.id),
        g = l.useCallback(() => {
            null == f || f(t);
        }, [f, t]);
    return (0, r.jsxs)(
        d.P3F,
        C(
            _(
                {
                    className: i()(T.destinationRow, m, { [T.disabled]: o }),
                    onClick: o ? void 0 : g,
                    "aria-selected": u,
                    "aria-setsize": b,
                    "aria-posinset": h,
                },
                p,
            ),
            {
                children: [
                    (0, r.jsxs)("div", {
                        className: T.identity,
                        children: [
                            (0, r.jsx)("div", {
                                className: T.iconWrapper,
                                children: n,
                            }),
                            (0, r.jsxs)("div", {
                                className: T.labels,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        tag: "strong",
                                        color: o ? "text-muted" : void 0,
                                        variant: "text-md/semibold",
                                        lineClamp: 1,
                                        children: s,
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: a,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: T.checkbox,
                        children: (0, r.jsx)(d.FZ5, {
                            checked: !!u,
                            disabled: o,
                        }),
                    }),
                ],
            },
        ),
    );
}
function F(e) {
    var { user: t, subLabel: n } = e,
        l = k(e, ["user", "subLabel"]);
    let s = E.ZP.useName(t),
        i = E.ZP.useUserTag(t, { decoration: "never" }),
        a = (0, o.e7)([P.Z], () => P.Z.getNickname(t.id)),
        u = (0, o.e7)([v.Z], () => v.Z.getStatus(t.id));
    return (0, r.jsx)(
        M,
        C(_({}, l), {
            icon: (0, r.jsx)(f.Z, {
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
function I(e) {
    var { channel: t, subLabel: n } = e,
        l = k(e, ["channel", "subLabel"]);
    let s = (0, h.ZP)(t),
        i = (0, g._)(t);
    return (0, r.jsx)(
        M,
        C(_({}, l), {
            icon: (0, r.jsx)(m.Z, {
                "aria-hidden": !0,
                size: d.EFr.SIZE_32,
                channel: t,
            }),
            label: s,
            subLabel: null != n ? n : i,
        }),
    );
}
function A(e) {
    var { channel: t, subLabel: n } = e,
        l = k(e, ["channel", "subLabel"]);
    let s = (0, o.e7)([y.Z], () => y.Z.getGuild(null == t ? void 0 : t.guild_id)),
        i = (0, h.ZP)(t),
        a = (0, o.e7)([x.Z, L.default, P.Z], () => {
            let e = x.Z.getChannel(t.parent_id);
            return null == e ? null : (0, h.F6)(e, L.default, P.Z, !1);
        }),
        c = (0, o.e7)([O.ZP], () => O.ZP.lastMessageTimestamp(t.id, w.W.CHANNEL)),
        f = null == s ? void 0 : s.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.Mmi : d.VL1;
        f = (0, r.jsxs)("div", {
            className: T.threadSubLabel,
            children: [
                (0, r.jsx)(e, {
                    color: d.TVs.colors.TEXT_SUBTLE,
                    className: T.subLabelIcon,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: a,
                }),
                null != c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.Text, {
                                  className: T.subLabelSeparator,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, r.jsx)(d.Text, {
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
    return (0, r.jsx)(
        M,
        C(_({}, l), {
            icon: (0, r.jsx)(p.Z, {
                size: p.E.SMALL_32,
                guild: s,
                channel: t,
            }),
            label: i,
            subLabel: null != n ? n : f,
        }),
    );
}
function D(e) {
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
        d = l.useMemo(() => {
            var e;
            return null != (e = null == i ? void 0 : i.map(j.hC)) ? e : [];
        }, [i]),
        f = l.useCallback(
            (e) => {
                let { section: l, row: i } = e;
                if (l > 0) return;
                let { type: f, record: h } = t[i];
                if (f === b.h8.HEADER) return;
                let m =
                        f === b.h8.USER
                            ? {
                                  type: "user",
                                  id: h.id,
                              }
                            : {
                                  type: "channel",
                                  id: h.id,
                              },
                    p = (0, j.hC)(m),
                    g = (0, N.HY)(n, s, h, o),
                    x = d.includes(p),
                    y = {
                        key: p,
                        message: n,
                        destination: m,
                        subLabel: null != g ? g.label : void 0,
                        disabled: (u && !x) || null != g,
                        selected: x,
                        onPressDestination: a,
                        "aria-posinset": i + 1,
                        "aria-setsize": t.length,
                        className: c,
                    };
                return f === b.h8.USER
                    ? (0, r.jsx)(F, _({ user: h }, y))
                    : f === b.h8.GROUP_DM
                      ? (0, r.jsx)(I, _({ channel: h }, y))
                      : f === b.h8.TEXT_CHANNEL || f === b.h8.VOICE_CHANNEL
                        ? (0, r.jsx)(A, _({ channel: h }, y))
                        : void (0, S.vE)(f);
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
