n.d(t, { Q: () => q });
var l = n(54381),
    r = n(473749),
    a = n(120356),
    s = n.n(a),
    i = n(913527),
    u = n.n(i),
    o = n(91192),
    c = n(442837),
    d = n(481060),
    f = n(700582),
    b = n(724757),
    h = n(212819),
    p = n(933557),
    m = n(266076),
    g = n(810123),
    y = n(448486),
    x = n(987509),
    v = n(131704),
    S = n(592125),
    E = n(430824),
    j = n(496675),
    Z = n(158776),
    P = n(306680),
    _ = n(699516),
    O = n(594174),
    C = n(55935),
    L = n(823379),
    T = n(51144),
    N = n(981631),
    w = n(490897),
    R = n(388032),
    k = n(834505);
function M(e) {
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
function D(e, t) {
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
function A(e, t) {
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
function U(e) {
    let {
            destination: t,
            icon: n,
            label: a,
            subLabel: i,
            selected: u,
            disabled: c,
            onPressDestination: f,
            "aria-setsize": b,
            "aria-posinset": h,
        } = e,
        p = (0, o.JA)(t.id),
        m = r.useCallback(() => {
            c || null == f || f(t);
        }, [f, c, t]);
    return (0, l.jsxs)(
        d.P3F,
        D(
            M(
                {
                    className: s()(k.destinationRow, { [k.disabled]: c }),
                    onClick: m,
                    "aria-selected": u,
                    "aria-setsize": b,
                    "aria-posinset": h,
                },
                p,
            ),
            {
                children: [
                    (0, l.jsxs)("div", {
                        className: k.identity,
                        children: [
                            (0, l.jsx)("div", {
                                className: k.iconWrapper,
                                children: n,
                            }),
                            (0, l.jsxs)("div", {
                                className: k.labels,
                                children: [
                                    (0, l.jsx)(d.Text, {
                                        tag: "strong",
                                        className: k.label,
                                        variant: "text-md/semibold",
                                        lineClamp: 1,
                                        children: a,
                                    }),
                                    (0, l.jsx)(d.Text, {
                                        className: k.subLabel,
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: i,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: k.checkbox,
                        children: (0, l.jsx)(d.FZ5, { checked: u }),
                    }),
                ],
            },
        ),
    );
}
function I(e) {
    var { user: t, subLabel: n } = e,
        r = A(e, ["user", "subLabel"]);
    let a = T.ZP.useName(t),
        s = T.ZP.useUserTag(t, { decoration: "never" }),
        i = (0, c.e7)([_.Z], () => _.Z.getNickname(t.id)),
        u = (0, c.e7)([Z.Z], () => Z.Z.getStatus(t.id));
    return (0, l.jsx)(
        U,
        D(M({}, r), {
            icon: (0, l.jsx)(f.Z, {
                "aria-hidden": !0,
                size: d.EFr.SIZE_32,
                user: t,
                status: u,
            }),
            label: null != i ? i : a,
            subLabel: null != n ? n : s,
        }),
    );
}
function F(e) {
    var { channel: t, subLabel: n } = e,
        r = A(e, ["channel", "subLabel"]);
    let a = (0, p.ZP)(t),
        s = (0, y._)(t);
    return (0, l.jsx)(
        U,
        D(M({}, r), {
            icon: (0, l.jsx)(m.Z, {
                "aria-hidden": !0,
                size: d.EFr.SIZE_32,
                channel: t,
            }),
            label: a,
            subLabel: null != n ? n : s,
        }),
    );
}
function H(e) {
    var { channel: t, subLabel: n } = e,
        r = A(e, ["channel", "subLabel"]);
    let a = (0, c.e7)([E.Z], () => E.Z.getGuild(null == t ? void 0 : t.guild_id)),
        s = (0, p.ZP)(t),
        i = (0, c.e7)([S.Z, O.default, _.Z], () => {
            let e = S.Z.getChannel(t.parent_id);
            return null == e ? null : (0, p.F6)(e, O.default, _.Z, !1);
        }),
        o = (0, c.e7)([P.ZP], () => P.ZP.lastMessageTimestamp(t.id, w.W.CHANNEL)),
        f = null == a ? void 0 : a.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.Mmi : d.VL1;
        f = (0, l.jsxs)("div", {
            className: k.threadSubLabel,
            children: [
                (0, l.jsx)(e, {
                    color: d.TVs.colors.TEXT_SUBTLE,
                    className: k.subLabelIcon,
                }),
                (0, l.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: i,
                }),
                null != o
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.Text, {
                                  className: k.subLabelSeparator,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, l.jsx)(d.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, C.Xf)(u()(o)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(
        U,
        D(M({}, r), {
            icon: (0, l.jsx)(g.Z, {
                size: g.E.SMALL_32,
                guild: a,
                channel: t,
            }),
            label: s,
            subLabel: null != n ? n : f,
        }),
    );
}
function q(e) {
    var { rowData: t, selectedDestinations: n, handleToggleDestination: a, disableSelection: s } = e,
        i = A(e, ["rowData", "selectedDestinations", "handleToggleDestination", "disableSelection"]);
    let u = r.useMemo(() => [t.length], [t.length]),
        c = r.useCallback(() => 48, []),
        f = r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.map(x.hC)) ? e : [];
        }, [n]),
        p = r.useCallback(
            (e) => {
                let { section: n, row: r } = e;
                if (n > 0) return;
                let { type: i, record: u } = t[r];
                if (i === h.h8.HEADER) return;
                let o =
                        i === h.h8.USER
                            ? {
                                  type: "user",
                                  id: u.id,
                              }
                            : {
                                  type: "channel",
                                  id: u.id,
                              },
                    c = (0, x.hC)(o),
                    d = (function (e) {
                        if (
                            e instanceof v.Sf &&
                            (0, v.Km)(e.type) &&
                            null != e.rateLimitPerUser &&
                            e.rateLimitPerUser > 0 &&
                            !(j.Z.can(N.Plq.MANAGE_CHANNELS, e) || j.Z.can(N.Plq.MANAGE_MESSAGES, e))
                        )
                            return { label: R.intl.string(R.t.Icu3bf) };
                    })(u),
                    b = f.includes(c),
                    p = {
                        key: c,
                        destination: o,
                        subLabel: null != d ? d.label : void 0,
                        disabled: (s && !b) || null != d,
                        selected: b,
                        onPressDestination: a,
                        "aria-posinset": r + 1,
                        "aria-setsize": t.length,
                    };
                return i === h.h8.USER
                    ? (0, l.jsx)(I, M({ user: u }, p))
                    : i === h.h8.GROUP_DM
                      ? (0, l.jsx)(F, M({ channel: u }, p))
                      : i === h.h8.TEXT_CHANNEL || i === h.h8.VOICE_CHANNEL
                        ? (0, l.jsx)(H, M({ channel: u }, p))
                        : void (0, L.vE)(i);
            },
            [s, a, t, f],
        ),
        m = r.useRef(null),
        g = (0, b.Z)("share-command-modal", m);
    return (0, l.jsx)(o.bG, {
        navigator: g,
        children: (0, l.jsx)(o.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = A(e, ["ref"]);
                return (0, l.jsx)(
                    d.Tvr,
                    D(
                        M(
                            {
                                ref: (e) => {
                                    var n;
                                    (m.current = e),
                                        (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                            },
                            n,
                            i,
                        ),
                        {
                            sections: u,
                            sectionHeight: 0,
                            renderRow: p,
                            rowHeight: c,
                        },
                    ),
                );
            },
        }),
    });
}
