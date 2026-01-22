r.d(t, { s: () => G });
var n = r(627968),
    l = r(64700),
    s = r(503698),
    i = r.n(s),
    u = r(989349),
    a = r.n(u),
    c = r(837381),
    o = r(311907),
    d = r(397927),
    b = r(966327),
    f = r(629357),
    h = r(47167),
    m = r(598104),
    p = r(255266),
    y = r(72563),
    g = r(223863),
    j = r(734057),
    x = r(71393),
    O = r(290863),
    v = r(222823),
    A = r(994500),
    L = r(287809),
    P = r(405269),
    S = r(403362),
    N = r(427262),
    w = r(513480),
    E = r(790782),
    T = r(967789);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function k(e, t) {
    if (null == e) return {};
    var r,
        n,
        l,
        s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
            (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        return s;
    }
    if (
        ((s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                s = Object.getOwnPropertyNames(e);
            for (n = 0; n < s.length; n++)
                (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
            (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    return s;
}
function C(e) {
    let {
            destination: t,
            icon: r,
            label: s,
            subLabel: u,
            selected: a,
            disabled: o,
            onPressDestination: b,
            "aria-setsize": f,
            "aria-posinset": h,
            className: m,
        } = e,
        p = (0, c.rm)(t.id),
        y = l.useCallback(() => {
            null == b || b(t);
        }, [b, t]);
    return (0, n.jsxs)(
        d.DUT,
        D(
            _(
                {
                    className: i()(T.HP, m, { [T.r9]: o }),
                    onClick: o ? void 0 : y,
                    "aria-selected": a,
                    "aria-setsize": f,
                    "aria-posinset": h,
                },
                p,
            ),
            {
                children: [
                    (0, n.jsxs)("div", {
                        className: T.D_,
                        children: [
                            (0, n.jsx)("div", {
                                className: T.P0,
                                children: r,
                            }),
                            (0, n.jsxs)("div", {
                                className: T.WD,
                                children: [
                                    (0, n.jsx)(d.Text, {
                                        tag: "strong",
                                        color: o ? "text-muted" : void 0,
                                        variant: "text-md/semibold",
                                        lineClamp: 1,
                                        children: s,
                                    }),
                                    (0, n.jsx)(d.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: u,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: T.kv,
                        children: (0, n.jsx)(d.P7L, {
                            checked: !!a,
                            disabled: o,
                        }),
                    }),
                ],
            },
        ),
    );
}
function I(e) {
    let { user: t, subLabel: r } = e,
        l = k(e, ["user", "subLabel"]),
        s = N.Ay.useName(t),
        i = N.Ay.useUserTag(t, { decoration: "never" }),
        u = (0, o.bG)([A.A], () => A.A.getNickname(t.id)),
        a = (0, o.bG)([O.A], () => O.A.getStatus(t.id));
    return (0, n.jsx)(
        C,
        D(_({}, l), {
            icon: (0, n.jsx)(b.A, {
                "aria-hidden": !0,
                size: d._3J.SIZE_32,
                user: t,
                status: a,
            }),
            label: null != u ? u : s,
            subLabel: null != r ? r : i,
        }),
    );
}
function R(e) {
    let { channel: t, subLabel: r } = e,
        l = k(e, ["channel", "subLabel"]),
        s = (0, h.Ay)(t),
        i = (0, y.i)(t);
    return (0, n.jsx)(
        C,
        D(_({}, l), {
            icon: (0, n.jsx)(m.A, {
                "aria-hidden": !0,
                size: d._3J.SIZE_32,
                channel: t,
            }),
            label: s,
            subLabel: null != r ? r : i,
        }),
    );
}
function M(e) {
    let { channel: t, subLabel: r } = e,
        l = k(e, ["channel", "subLabel"]),
        s = (0, o.bG)([x.A], () => x.A.getGuild(null == t ? void 0 : t.guild_id)),
        i = (0, h.Ay)(t),
        u = (0, o.bG)([j.A, L.default, A.A], () => {
            let e = j.A.getChannel(t.parent_id);
            return null == e ? null : (0, h.m1)(e, L.default, A.A, !1);
        }),
        c = (0, o.bG)([v.Ay], () => v.Ay.lastMessageTimestamp(t.id, E.P.CHANNEL)),
        b = null == s ? void 0 : s.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.bSJ : d.N$i;
        b = (0, n.jsxs)("div", {
            className: T.vr,
            children: [
                (0, n.jsx)(e, {
                    color: d.LU0.colors.TEXT_SUBTLE,
                    className: T.Q9,
                }),
                (0, n.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: u,
                }),
                null != c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(d.Text, {
                                  className: T.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, n.jsx)(d.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, P.Fe)(a()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, n.jsx)(
        C,
        D(_({}, l), {
            icon: (0, n.jsx)(p.A, {
                size: p.q.SMALL_32,
                guild: s,
                channel: t,
            }),
            label: i,
            subLabel: null != r ? r : b,
        }),
    );
}
function G(e) {
    let {
            rowData: t,
            message: r,
            originChannel: s,
            selectedDestinations: i,
            handleToggleDestination: u,
            disableSelection: a,
            rowClassName: c,
            validateDestination: o,
        } = e,
        d = l.useMemo(() => {
            var e;
            return null != (e = null == i ? void 0 : i.map(g.I)) ? e : [];
        }, [i]),
        b = l.useCallback(
            (e) => {
                let { section: l, row: i } = e;
                if (l > 0) return;
                let { type: b, record: h } = t[i];
                if (b === f.rD.HEADER) return;
                let m =
                        b === f.rD.USER
                            ? {
                                  type: "user",
                                  id: h.id,
                              }
                            : {
                                  type: "channel",
                                  id: h.id,
                              },
                    p = (0, g.I)(m),
                    y = (0, w.pE)(r, s, h, o),
                    j = d.includes(p),
                    x = {
                        key: p,
                        message: r,
                        destination: m,
                        subLabel: null != y ? y.label : void 0,
                        disabled: (a && !j) || null != y,
                        selected: j,
                        onPressDestination: u,
                        "aria-posinset": i + 1,
                        "aria-setsize": t.length,
                        className: c,
                    };
                return b === f.rD.USER
                    ? (0, n.jsx)(I, _({ user: h }, x))
                    : b === f.rD.GROUP_DM
                      ? (0, n.jsx)(R, _({ channel: h }, x))
                      : b === f.rD.TEXT_CHANNEL || b === f.rD.VOICE_CHANNEL
                        ? (0, n.jsx)(M, _({ channel: h }, x))
                        : void (0, S.xb)(b);
            },
            [a, u, r, s, t, d, c, o],
        );
    return {
        sections: [t.length],
        sectionHeight: 0,
        rowHeight: 48,
        renderRow: b,
    };
}
