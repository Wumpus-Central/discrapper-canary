n.d(t, {
    z: () => q,
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    u = n(311907),
    c = n(397927),
    d = n(966327),
    f = n(964486),
    b = n(629357),
    p = n(47167),
    m = n(598104),
    h = n(255266),
    g = n(72563),
    y = n(223863),
    x = n(95701),
    v = n(734057),
    j = n(71393),
    A = n(576705),
    O = n(290863),
    S = n(222823),
    w = n(994500),
    P = n(287809),
    C = n(405269),
    N = n(403362),
    T = n(427262),
    E = n(652215),
    D = n(790782),
    _ = n(985018),
    L = n(116106);

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

function I(e, t) {
    if (null == e) return {};
    var n,
        l,
        r,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                i = Object.getOwnPropertyNames(e);
            for (l = 0; l < i.length; l++)
                (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i;
}

function R(e) {
    let {
            destination: t,
            icon: n,
            label: i,
            subLabel: s,
            selected: o,
            disabled: u,
            onPressDestination: d,
            "aria-setsize": b,
            "aria-posinset": p,
        } = e,
        m = r.useRef(!1),
        h = r.useCallback(() => {
            u || null == d || d(t);
        }, [d, u, t]);
    return (
        (0, f.l0)(() => () => {
            m.current &&
                ((m.current = !1),
                null == d ||
                    d(t, {
                        transitionToDestination: !1,
                        closeAfterSend: !1,
                    }));
        }),
        (0, l.jsxs)(c.DUT, {
            className: a()(L.HP, {
                [L.r9]: u,
            }),
            onClick: h,
            "aria-selected": o,
            "aria-setsize": b,
            "aria-posinset": p,
            children: [
                (0, l.jsxs)("div", {
                    className: L.D_,
                    children: [
                        (0, l.jsx)("div", {
                            className: L.P0,
                            children: n,
                        }),
                        (0, l.jsxs)("div", {
                            className: L.WD,
                            children: [
                                (0, l.jsx)(c.Text, {
                                    tag: "strong",
                                    className: L.Pf,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: i,
                                }),
                                (0, l.jsx)(c.Text, {
                                    className: L.J2,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: L.kv,
                    children: (0, l.jsx)(c.P7L, {
                        checked: o,
                    }),
                }),
            ],
        })
    );
}

function F(e) {
    let { user: t, subLabel: n } = e,
        r = I(e, ["user", "subLabel"]),
        i = T.Ay.useName(t),
        a = T.Ay.useUserTag(t, {
            decoration: "never",
        }),
        s = (0, u.bG)([w.A], () => w.A.getNickname(t.id)),
        o = (0, u.bG)([O.A], () => O.A.getStatus(t.id));
    return (0, l.jsx)(
        R,
        M(k({}, r), {
            icon: (0, l.jsx)(d.A, {
                "aria-hidden": !0,
                size: c._3J.SIZE_32,
                user: t,
                status: o,
            }),
            label: null != s ? s : i,
            subLabel: null != n ? n : a,
        }),
    );
}

function z(e) {
    let { channel: t, subLabel: n } = e,
        r = I(e, ["channel", "subLabel"]),
        i = (0, p.Ay)(t),
        a = (0, g.i)(t);
    return (0, l.jsx)(
        R,
        M(k({}, r), {
            icon: (0, l.jsx)(m.A, {
                "aria-hidden": !0,
                size: c._3J.SIZE_32,
                channel: t,
            }),
            label: i,
            subLabel: null != n ? n : a,
        }),
    );
}

function G(e) {
    let { channel: t, subLabel: n } = e,
        r = I(e, ["channel", "subLabel"]),
        i = (0, u.bG)([j.A], () => j.A.getGuild(null == t ? void 0 : t.guild_id)),
        a = (0, p.Ay)(t),
        s = (0, u.bG)([v.A, P.default, w.A], () => {
            let e = v.A.getChannel(t.parent_id);
            return null == e ? null : (0, p.m1)(e, P.default, w.A, !1);
        }),
        d = (0, u.bG)([S.Ay], () => S.Ay.lastMessageTimestamp(t.id, D.P.CHANNEL)),
        f = null == i ? void 0 : i.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? c.bSJ : c.N$i;
        f = (0, l.jsxs)("div", {
            className: L.vr,
            children: [
                (0, l.jsx)(e, {
                    color: c.LU0.colors.TEXT_SUBTLE,
                    className: L.Q9,
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
                                  className: L.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, l.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, C.Fe)(o()(d)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(
        R,
        M(k({}, r), {
            icon: (0, l.jsx)(h.A, {
                size: h.q.SMALL_32,
                guild: i,
                channel: t,
            }),
            label: a,
            subLabel: null != n ? n : f,
        }),
    );
}

function q(e) {
    let {
            rowData: t,
            selectedDestinations: n,
            handleToggleDestination: i,
            disableSelection: a,
            originDestination: s,
        } = e,
        o = r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.map(y.I)) ? e : [];
        }, [n]);
    return r.useMemo(() => {
        let e = t.filter((e) => e.type !== b.rD.HEADER);
        return e.map((t, n) => {
            let { type: r, record: u } = t,
                c =
                    r === b.rD.USER
                        ? {
                              type: "user",
                              id: u.id,
                          }
                        : {
                              type: "channel",
                              id: u.id,
                          },
                d = (0, y.I)(c),
                f =
                    null != s
                        ? (function (e, t) {
                              if (t instanceof x.YB && (0, x.zy)(t.type)) {
                                  if (
                                      null != t.rateLimitPerUser &&
                                      t.rateLimitPerUser > 0 &&
                                      !(A.A.can(E.xBc.MANAGE_CHANNELS, t) || A.A.can(E.xBc.MANAGE_MESSAGES, t))
                                  )
                                      return {
                                          label: _.intl.string(_.t.Icu3bf),
                                      };
                                  if (t.isThread() || t.isForumPost() || !A.A.can(E.xBc.USE_APPLICATION_COMMANDS, t))
                                      return {
                                          label: _.intl.string(_.t.v8MLqz),
                                      };
                                  let n = (0, y._5)(t.id);
                                  if (e.id === n.id)
                                      return {
                                          label: _.intl.string(_.t.mD4gqe),
                                      };
                              }
                          })(s, u)
                        : null,
                p = o.includes(d),
                m = {
                    destination: c,
                    subLabel: null != f ? f.label : void 0,
                    disabled: (a && !p) || null != f,
                    selected: p,
                    onPressDestination: i,
                    "aria-posinset": n + 1,
                    "aria-setsize": e.length,
                };
            return r === b.rD.USER
                ? (0, l.jsx)(
                      F,
                      k(
                          {
                              user: u,
                          },
                          m,
                      ),
                      d,
                  )
                : r === b.rD.GROUP_DM
                  ? (0, l.jsx)(
                        z,
                        k(
                            {
                                channel: u,
                            },
                            m,
                        ),
                        d,
                    )
                  : r === b.rD.TEXT_CHANNEL || r === b.rD.VOICE_CHANNEL
                    ? (0, l.jsx)(
                          G,
                          k(
                              {
                                  channel: u,
                              },
                              m,
                          ),
                          d,
                      )
                    : void (0, N.xb)(r);
        });
    }, [a, i, s, t, o]);
}
