n.d(t, { A: () => w }), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(989349),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(47167),
    u = n(734057),
    d = n(71393),
    g = n(576705),
    x = n(994500),
    m = n(287809),
    h = n(698441),
    j = n(770666),
    v = n(761836),
    p = n(232246),
    f = n(530209),
    b = n(9448),
    y = n(181961),
    O = n(988794),
    A = n(652215),
    N = n(985018),
    E = n(197905);
let C = (e) => {
        let { guildId: t, channelType: n, channel: r, onSelectChannel: i, disabled: s, entityType: a } = e,
            d = n === A.rbe.GUILD_STAGE_VOICE,
            g = (0, f.D)(r, a),
            h = (0, v.pW)(t, n);
        return (0, l.jsx)(o.ZiE, {
            selectionMode: "single",
            label: d ? N.intl.string(N.t.S7GjDz) : N.intl.string(N.t["7RYWCP"]),
            required: !0,
            helperText: g ? void 0 : N.intl.string(N.t.F3bDaX),
            value: null == r ? void 0 : r.id,
            options: h.map((e) => ({
                id: e.id,
                value: e.id,
                label: (0, c.m1)(e, m.default, x.A, !0),
                leading: ((e, t) => {
                    let n = u.A.getChannel(e);
                    if (null == n) return null;
                    let r = n.type === A.rbe.GUILD_STAGE_VOICE,
                        i = (0, f.D)(n, t),
                        s = i ? o.HKD : o.trU,
                        a = i ? o.qux : o.DC;
                    return (0, l.jsx)(r ? a : s, {
                        color: "currentColor",
                        size: "md",
                        className: E.sr,
                    });
                })(e.id, a),
            })),
            onSelectionChange: (e) => {
                let t = h.find((t) => t.id === e);
                i(null != t ? t : void 0);
            },
            disabled: s,
        });
    },
    P = (e, t) => (n) => {
        let l = {
            entityType: n,
            scheduledEndTime: void 0,
        };
        if (n === O.Ps.EXTERNAL) {
            var r;
            l.scheduledEndTime = (null != (r = s()(t.scheduledStartTime)) ? r : s()()).add(2, "hour").toISOString();
        }
        e(l);
    };
function S(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: s } = e,
        { entityType: c, channelId: d } = n,
        g = (0, a.bG)([u.A], () => u.A.getChannel(d), [d]),
        x = r.useRef(null);
    r.useEffect(() => {
        if (s && c === O.Ps.EXTERNAL) {
            var e;
            null == (e = x.current) || e.focus();
        }
    }, [s, c]);
    let m = (e) => {
            var t;
            i({ channelId: null != (t = null == e ? void 0 : e.id) ? t : null });
        },
        j = (0, b.k5)(n),
        v = (0, b.dy)(c),
        p = (0, h.Fd)(n);
    return null == c || c === O.Ps.NONE
        ? null
        : c === O.Ps.EXTERNAL
          ? (0, l.jsx)(o.ksK, {
                label: N.intl.string(N.t.yx785A),
                required: !0,
                onChange: (e) => {
                    i({ entityMetadata: { location: e } });
                },
                placeholder: N.intl.string(N.t.mkCMia),
                maxLength: O.vj,
                value: null != j ? j : "",
                inputRef: x,
            })
          : null == v
            ? null
            : (0, l.jsx)(C, {
                  guildId: t,
                  channelType: v,
                  onSelectChannel: m,
                  channel: g,
                  entityType: c,
                  disabled: p,
              });
}
function T(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        s = (0, a.bG)([d.A], () => d.A.getGuild(t), [t]),
        c = (0, j.A)(t, void 0),
        u = (0, j.A)(t, A.rbe.GUILD_VOICE),
        g = (0, j.A)(t, A.rbe.GUILD_STAGE_VOICE),
        x = (0, v.pW)(t, A.rbe.GUILD_VOICE),
        m = (0, p.A)(s),
        f = null == s ? void 0 : s.features.has(A.GuildFeatures.COMMUNITY),
        b = (0, h.Fd)(n),
        y = P(i, n),
        E = r.useMemo(() => {
            let e = !u || 0 === x.length,
                t = u ? N.intl.string(N.t["DkY+cO"]) : N.intl.string(N.t.HeF1kV),
                n = [
                    {
                        name: N.intl.string(N.t.BVZqJl),
                        value: O.Ps.VOICE,
                        desc: e ? t : N.intl.string(N.t["EV//4f"]),
                        leadingIcon: o.HKD,
                        disabled: e,
                    },
                    {
                        name: N.intl.string(N.t.w7ipbz),
                        value: O.Ps.EXTERNAL,
                        desc: c ? N.intl.string(N.t.DYxrHm) : N.intl.string(N.t.HeF1kV),
                        leadingIcon: o.BT6,
                        disabled: !c,
                    },
                ];
            if (f) {
                let e = !g || 0 === m.length,
                    t = g ? N.intl.string(N.t["DkY+cO"]) : N.intl.string(N.t.HeF1kV);
                return [
                    {
                        name: N.intl.string(N.t.EErMzA),
                        value: O.Ps.STAGE_INSTANCE,
                        desc: e ? t : N.intl.string(N.t.LgALpp),
                        leadingIcon: o.qux,
                        disabled: e,
                    },
                    ...n,
                ];
            }
            return n;
        }, [c, u, g, f, x.length, m.length]);
    return (0, l.jsx)(o.z6M, {
        value: n.entityType,
        options: E,
        onChange: y,
        disabled: b,
        helperText: b ? N.intl.string(N.t.yutP5U) : void 0,
    });
}
function w(e) {
    let { guildId: t, guildEvent: r, validationErrorMessage: i, onChange: s, isSlideReady: c = !1 } = e,
        { entityType: u } = r,
        x = (0, a.bG)([d.A], () => d.A.getGuild(t), [t]),
        m = (0, p.A)(x),
        h = (0, a.bG)([g.A], () => g.A.can(A.xBc.MANAGE_CHANNELS, x)),
        j = null == x ? void 0 : x.features.has(A.GuildFeatures.COMMUNITY),
        v = P(s, r),
        f = j && u !== O.Ps.EXTERNAL && 0 === m.length && h && null != u;
    return (0, l.jsxs)("div", {
        className: E.kL,
        children: [
            (0, l.jsxs)(o.BJc, {
                gap: 4,
                children: [
                    (0, l.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        children: N.intl.string(N.t["DC+Qm8"]),
                    }),
                    (0, l.jsx)(o.Text, {
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: N.intl.string(N.t.IwmXLP),
                    }),
                ],
            }),
            (0, l.jsx)(T, {
                guildId: t,
                guildEvent: r,
                onChange: s,
            }),
            (0, l.jsx)(S, {
                guildId: t,
                guildEvent: r,
                isFocusReady: c,
                onChange: s,
            }),
            f
                ? (0, l.jsx)(y.A, {
                      onClick: () => {
                          v(O.Ps.STAGE_INSTANCE),
                              (0, o.mMO)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("72271"),
                                      n.e("8018"),
                                      n.e("64233"),
                                      n.e("29592"),
                                  ]).then(n.bind(n, 409200));
                                  return (n) => {
                                      var r, i;
                                      return (0, l.jsx)(
                                          e,
                                          ((r = (function (e) {
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
                                          })({}, n)),
                                          (i = i =
                                              {
                                                  channelType: A.rbe.GUILD_STAGE_VOICE,
                                                  guildId: t,
                                              }),
                                          Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                              : (function (e, t) {
                                                    var n = Object.keys(e);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var l = Object.getOwnPropertySymbols(e);
                                                        n.push.apply(n, l);
                                                    }
                                                    return n;
                                                })(Object(i)).forEach(function (e) {
                                                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                                }),
                                          r),
                                      );
                                  };
                              });
                      },
                  })
                : null,
        ],
    });
}
