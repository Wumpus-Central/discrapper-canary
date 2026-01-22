l.d(t, {
    E: () => p,
    k: () => C,
}),
    l(896048);
var n = l(627968),
    r = l(64700),
    s = l(311907),
    i = l(71393),
    a = l(287809),
    o = l(513461),
    c = l(942658),
    d = l(656854),
    u = l(414626),
    f = l(601047),
    m = l(222650),
    x = l(273926),
    b = l(453016),
    h = l(652215);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
function j(e) {
    let { guildId: t, formFields: l, updateFormFields: r } = e,
        a = (0, s.bG)([i.A], () => {
            var e;
            return null == (e = i.A.getGuild(t)) ? void 0 : e.rulesChannelId;
        }),
        c = (e, t) => {
            let n = l[e];
            r([...l.slice(0, e), g(v({}, n), { response: t }), ...l.slice(e + 1)]);
        };
    return (0, n.jsx)(n.Fragment, {
        children: l.map((e, t) =>
            ((e, t) => {
                switch (e.field_type) {
                    case o.rX.TERMS:
                        return (0, n.jsx)(
                            x.Ot,
                            {
                                channelId: a,
                                formField: e,
                                onChange: (e) => {
                                    let n;
                                    return (
                                        (n = l[t]),
                                        void r([...l.slice(0, t), g(v({}, n), { response: e }), ...l.slice(t + 1)])
                                    );
                                },
                            },
                            t,
                        );
                    case o.rX.TEXT_INPUT:
                        return (0, n.jsx)(
                            b.y4,
                            {
                                formField: e,
                                autofocus: 0 === t,
                                onChange: (e) => c(t, e),
                            },
                            t,
                        );
                    case o.rX.PARAGRAPH:
                        return (0, n.jsx)(
                            f.zD,
                            {
                                formField: e,
                                autofocus: 0 === t,
                                onChange: (e) => c(t, e),
                            },
                            t,
                        );
                    case o.rX.MULTIPLE_CHOICE:
                        return (0, n.jsx)(
                            u.MZ,
                            {
                                formField: e,
                                onChange: (e) =>
                                    ((e, t) => {
                                        let { value: n } = t,
                                            s = l[e];
                                        r([...l.slice(0, e), g(v({}, s), { response: n }), ...l.slice(e + 1)]);
                                    })(t, e),
                            },
                            t,
                        );
                }
            })(e, t),
        ),
    });
}
function p(e) {
    let t,
        { guildId: l, formFields: r, updateFormFields: i, disableVerification: o } = e,
        u = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
        f = (0, c.B)({ guildId: l });
    return ((t = f === h.PvD.NONE ? null : f === h.PvD.VERY_HIGH ? m.A : d.G), null == u)
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !o && null != t && (0, n.jsx)(t, {}),
                  (0, n.jsx)(j, {
                      guildId: l,
                      formFields: r,
                      updateFormFields: i,
                  }),
              ],
          });
}
function C(e) {
    let t,
        { guildId: l, formFields: i, updateFormFields: o, disableVerification: u } = e,
        f = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
        x = (0, c.B)({ guildId: l }),
        b = (null == f ? void 0 : f.isPhoneVerified()) || (null == f ? void 0 : f.isStaff()),
        v = (null == f ? void 0 : f.verified) || b,
        g = !1;
    x === h.PvD.NONE
        ? ((g = !0), (t = null))
        : x === h.PvD.VERY_HIGH
          ? ((g = null != b && b), (t = m.e))
          : ((g = null != v && v), (t = d.O));
    let p = r.useRef(g);
    return null == f
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !u && !p.current && null != t && (0, n.jsx)(t, { isUserVerified: g }),
                  (0, n.jsx)(j, {
                      guildId: l,
                      formFields: i,
                      updateFormFields: o,
                  }),
              ],
          });
}
