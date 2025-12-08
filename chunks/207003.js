n.d(t, { Q: () => G });
var l = n(54381),
    r = n(473749),
    s = n(120356),
    a = n.n(s),
    i = n(913527),
    u = n.n(i),
    o = n(91192),
    c = n(442837),
    d = n(481060),
    b = n(700582),
    f = n(724757),
    h = n(212819),
    m = n(933557),
    p = n(266076),
    g = n(810123),
    x = n(448486),
    y = n(987509),
    j = n(131704),
    v = n(592125),
    S = n(430824),
    P = n(496675),
    O = n(158776),
    _ = n(306680),
    Z = n(699516),
    E = n(594174),
    L = n(55935),
    T = n(823379),
    C = n(51144),
    w = n(981631),
    k = n(490897),
    N = n(388032),
    R = n(834505);
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
function I(e) {
    let {
            destination: t,
            icon: n,
            label: s,
            subLabel: i,
            selected: u,
            disabled: c,
            onPressDestination: b,
            "aria-setsize": f,
            "aria-posinset": h,
        } = e,
        m = (0, o.JA)(t.id),
        p = r.useCallback(() => {
            c || null == b || b(t);
        }, [b, c, t]);
    return (0, l.jsxs)(
        d.P3F,
        D(
            M(
                {
                    className: a()(R.destinationRow, { [R.disabled]: c }),
                    onClick: p,
                    "aria-selected": u,
                    "aria-setsize": f,
                    "aria-posinset": h,
                },
                m,
            ),
            {
                children: [
                    (0, l.jsxs)("div", {
                        className: R.identity,
                        children: [
                            (0, l.jsx)("div", {
                                className: R.iconWrapper,
                                children: n,
                            }),
                            (0, l.jsxs)("div", {
                                className: R.labels,
                                children: [
                                    (0, l.jsx)(d.Text, {
                                        tag: "strong",
                                        className: R.label,
                                        variant: "text-md/semibold",
                                        lineClamp: 1,
                                        children: s,
                                    }),
                                    (0, l.jsx)(d.Text, {
                                        className: R.subLabel,
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: i,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: R.checkbox,
                        children: (0, l.jsx)(d.FZ5, { checked: u }),
                    }),
                ],
            },
        ),
    );
}
function F(e) {
    var { user: t, subLabel: n } = e,
        r = A(e, ["user", "subLabel"]);
    let s = C.ZP.useName(t),
        a = C.ZP.useUserTag(t, { decoration: "never" }),
        i = (0, c.e7)([Z.Z], () => Z.Z.getNickname(t.id)),
        u = (0, c.e7)([O.Z], () => O.Z.getStatus(t.id));
    return (0, l.jsx)(
        I,
        D(M({}, r), {
            icon: (0, l.jsx)(b.Z, {
                "aria-hidden": !0,
                size: d.EFr.SIZE_32,
                user: t,
                status: u,
            }),
            label: null != i ? i : s,
            subLabel: null != n ? n : a,
        }),
    );
}
function U(e) {
    var { channel: t, subLabel: n } = e,
        r = A(e, ["channel", "subLabel"]);
    let s = (0, m.ZP)(t),
        a = (0, x._)(t);
    return (0, l.jsx)(
        I,
        D(M({}, r), {
            icon: (0, l.jsx)(p.Z, {
                "aria-hidden": !0,
                size: d.EFr.SIZE_32,
                channel: t,
            }),
            label: s,
            subLabel: null != n ? n : a,
        }),
    );
}
function q(e) {
    var { channel: t, subLabel: n } = e,
        r = A(e, ["channel", "subLabel"]);
    let s = (0, c.e7)([S.Z], () => S.Z.getGuild(null == t ? void 0 : t.guild_id)),
        a = (0, m.ZP)(t),
        i = (0, c.e7)([v.Z, E.default, Z.Z], () => {
            let e = v.Z.getChannel(t.parent_id);
            return null == e ? null : (0, m.F6)(e, E.default, Z.Z, !1);
        }),
        o = (0, c.e7)([_.ZP], () => _.ZP.lastMessageTimestamp(t.id, k.W.CHANNEL)),
        b = null == s ? void 0 : s.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.Mmi : d.VL1;
        b = (0, l.jsxs)("div", {
            className: R.threadSubLabel,
            children: [
                (0, l.jsx)(e, {
                    color: d.TVs.colors.TEXT_SUBTLE,
                    className: R.subLabelIcon,
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
                                  className: R.subLabelSeparator,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, l.jsx)(d.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, L.Xf)(u()(o)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(
        I,
        D(M({}, r), {
            icon: (0, l.jsx)(g.Z, {
                size: g.E.SMALL_32,
                guild: s,
                channel: t,
            }),
            label: a,
            subLabel: null != n ? n : b,
        }),
    );
}
function G(e) {
    var { rowData: t, selectedDestinations: n, handleToggleDestination: s, disableSelection: a } = e,
        i = A(e, ["rowData", "selectedDestinations", "handleToggleDestination", "disableSelection"]);
    let u = r.useMemo(() => [t.length], [t.length]),
        c = r.useCallback(() => 48, []),
        b = r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.map(y.hC)) ? e : [];
        }, [n]),
        m = r.useCallback(
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
                    c = (0, y.hC)(o),
                    d = (function (e) {
                        if (
                            e instanceof j.Sf &&
                            (0, j.Km)(e.type) &&
                            null != e.rateLimitPerUser &&
                            e.rateLimitPerUser > 0 &&
                            !(P.Z.can(w.Plq.MANAGE_CHANNELS, e) || P.Z.can(w.Plq.MANAGE_MESSAGES, e))
                        )
                            return { label: N.intl.string(N.t.Icu3bf) };
                    })(u),
                    f = b.includes(c),
                    m = {
                        key: c,
                        destination: o,
                        subLabel: null != d ? d.label : void 0,
                        disabled: (a && !f) || null != d,
                        selected: f,
                        onPressDestination: s,
                        "aria-posinset": r + 1,
                        "aria-setsize": t.length,
                    };
                return i === h.h8.USER
                    ? (0, l.jsx)(F, M({ user: u }, m))
                    : i === h.h8.GROUP_DM
                      ? (0, l.jsx)(U, M({ channel: u }, m))
                      : i === h.h8.TEXT_CHANNEL || i === h.h8.VOICE_CHANNEL
                        ? (0, l.jsx)(q, M({ channel: u }, m))
                        : void (0, T.vE)(i);
            },
            [a, s, t, b],
        ),
        p = r.useRef(null),
        g = (0, f.Z)("share-command-modal", p);
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
                                    (p.current = e),
                                        (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                            },
                            n,
                            i,
                        ),
                        {
                            sections: u,
                            sectionHeight: 0,
                            renderRow: m,
                            rowHeight: c,
                        },
                    ),
                );
            },
        }),
    });
}
