n.d(t, { F: () => U });
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    u = n.n(s),
    o = n(442837),
    c = n(481060),
    d = n(700582),
    f = n(493773),
    b = n(212819),
    p = n(933557),
    h = n(266076),
    m = n(810123),
    g = n(448486),
    y = n(987509),
    v = n(131704),
    x = n(592125),
    j = n(430824),
    S = n(496675),
    _ = n(158776),
    C = n(306680),
    P = n(699516),
    O = n(594174),
    E = n(55935),
    w = n(823379),
    Z = n(51144),
    L = n(981631),
    N = n(490897),
    M = n(388032),
    T = n(963354);
function D(e) {
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
function k(e, t) {
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
            subLabel: s,
            selected: u,
            disabled: o,
            onPressDestination: d,
            "aria-setsize": b,
            "aria-posinset": p,
        } = e,
        h = r.useRef(!1),
        m = r.useCallback(() => {
            o || null == d || d(t);
        }, [d, o, t]);
    return (
        (0, f.zq)(() => () => {
            h.current &&
                ((h.current = !1),
                null == d ||
                    d(t, {
                        transitionToDestination: !1,
                        closeAfterSend: !1,
                    }));
        }),
        (0, l.jsxs)(c.P3F, {
            className: a()(T.destinationRow, { [T.disabled]: o }),
            onClick: m,
            "aria-selected": u,
            "aria-setsize": b,
            "aria-posinset": p,
            children: [
                (0, l.jsxs)("div", {
                    className: T.identity,
                    children: [
                        (0, l.jsx)("div", {
                            className: T.iconWrapper,
                            children: n,
                        }),
                        (0, l.jsxs)("div", {
                            className: T.labels,
                            children: [
                                (0, l.jsx)(c.Text, {
                                    tag: "strong",
                                    className: T.label,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: i,
                                }),
                                (0, l.jsx)(c.Text, {
                                    className: T.subLabel,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: T.checkbox,
                    children: (0, l.jsx)(c.FZ5, { checked: u }),
                }),
            ],
        })
    );
}
function F(e) {
    var { user: t, subLabel: n } = e,
        r = A(e, ["user", "subLabel"]);
    let i = Z.ZP.useName(t),
        a = Z.ZP.useUserTag(t, { decoration: "never" }),
        s = (0, o.e7)([P.Z], () => P.Z.getNickname(t.id)),
        u = (0, o.e7)([_.Z], () => _.Z.getStatus(t.id));
    return (0, l.jsx)(
        I,
        k(D({}, r), {
            icon: (0, l.jsx)(d.Z, {
                "aria-hidden": !0,
                size: c.EFr.SIZE_32,
                user: t,
                status: u,
            }),
            label: null != s ? s : i,
            subLabel: null != n ? n : a,
        }),
    );
}
function R(e) {
    var { channel: t, subLabel: n } = e,
        r = A(e, ["channel", "subLabel"]);
    let i = (0, p.ZP)(t),
        a = (0, g._)(t);
    return (0, l.jsx)(
        I,
        k(D({}, r), {
            icon: (0, l.jsx)(h.Z, {
                "aria-hidden": !0,
                size: c.EFr.SIZE_32,
                channel: t,
            }),
            label: i,
            subLabel: null != n ? n : a,
        }),
    );
}
function q(e) {
    var { channel: t, subLabel: n } = e,
        r = A(e, ["channel", "subLabel"]);
    let i = (0, o.e7)([j.Z], () => j.Z.getGuild(null == t ? void 0 : t.guild_id)),
        a = (0, p.ZP)(t),
        s = (0, o.e7)([x.Z, O.default, P.Z], () => {
            let e = x.Z.getChannel(t.parent_id);
            return null == e ? null : (0, p.F6)(e, O.default, P.Z, !1);
        }),
        d = (0, o.e7)([C.ZP], () => C.ZP.lastMessageTimestamp(t.id, N.W.CHANNEL)),
        f = null == i ? void 0 : i.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? c.Mmi : c.VL1;
        f = (0, l.jsxs)("div", {
            className: T.threadSubLabel,
            children: [
                (0, l.jsx)(e, {
                    color: c.TVs.colors.TEXT_SUBTLE,
                    className: T.subLabelIcon,
                }),
                (0, l.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: s,
                }),
                null != d
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(c.Text, {
                                  className: T.subLabelSeparator,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, l.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, E.Xf)(u()(d)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(
        I,
        k(D({}, r), {
            icon: (0, l.jsx)(m.Z, {
                size: m.E.SMALL_32,
                guild: i,
                channel: t,
            }),
            label: a,
            subLabel: null != n ? n : f,
        }),
    );
}
function U(e) {
    let {
            rowData: t,
            selectedDestinations: n,
            handleToggleDestination: i,
            disableSelection: a,
            originDestination: s,
        } = e,
        u = r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.map(y.hC)) ? e : [];
        }, [n]);
    return r.useMemo(() => {
        let e = t.filter((e) => e.type !== b.h8.HEADER);
        return e.map((t, n) => {
            let { type: r, record: o } = t,
                c =
                    r === b.h8.USER
                        ? {
                              type: "user",
                              id: o.id,
                          }
                        : {
                              type: "channel",
                              id: o.id,
                          },
                d = (0, y.hC)(c),
                f =
                    null != s
                        ? (function (e, t) {
                              if (t instanceof v.Sf && (0, v.Km)(t.type)) {
                                  if (
                                      null != t.rateLimitPerUser &&
                                      t.rateLimitPerUser > 0 &&
                                      !(S.Z.can(L.Plq.MANAGE_CHANNELS, t) || S.Z.can(L.Plq.MANAGE_MESSAGES, t))
                                  )
                                      return { label: M.intl.string(M.t.Icu3bf) };
                                  if (t.isThread() || t.isForumPost() || !S.Z.can(L.Plq.USE_APPLICATION_COMMANDS, t))
                                      return { label: M.intl.string(M.t.v8MLqz) };
                                  let n = (0, y.dL)(t.id);
                                  if (e.id === n.id) return { label: M.intl.string(M.t.mD4gqe) };
                              }
                          })(s, o)
                        : null,
                p = u.includes(d),
                h = {
                    destination: c,
                    subLabel: null != f ? f.label : void 0,
                    disabled: (a && !p) || null != f,
                    selected: p,
                    onPressDestination: i,
                    "aria-posinset": n + 1,
                    "aria-setsize": e.length,
                };
            return r === b.h8.USER
                ? (0, l.jsx)(F, D({ user: o }, h), d)
                : r === b.h8.GROUP_DM
                  ? (0, l.jsx)(R, D({ channel: o }, h), d)
                  : r === b.h8.TEXT_CHANNEL || r === b.h8.VOICE_CHANNEL
                    ? (0, l.jsx)(q, D({ channel: o }, h), d)
                    : void (0, w.vE)(r);
        });
    }, [a, i, s, t, u]);
}
