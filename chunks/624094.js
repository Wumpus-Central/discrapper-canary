n.d(t, { E: () => j, k: () => p });
var r = n(627968),
    s = n(64700),
    l = n(311907),
    i = n(71393),
    a = n(287809),
    o = n(513461),
    d = n(942658),
    c = n(656854),
    u = n(414626),
    m = n(601047),
    h = n(222650),
    x = n(273926),
    f = n(453016),
    g = n(652215);
function _(e) {
    let { guildId: t, formFields: n, updateFormFields: s } = e,
        a = (0, l.bG)([i.A], () => i.A.getGuild(t)?.rulesChannelId),
        d = (e, t) => {
            let r = n[e];
            s([...n.slice(0, e), { ...r, response: t }, ...n.slice(e + 1)]);
        };
    return (0, r.jsx)(r.Fragment, {
        children: n.map((e, t) =>
            ((e, t) => {
                switch (e.field_type) {
                    case o.rX.TERMS:
                        return (0, r.jsx)(
                            x.Ot,
                            {
                                channelId: a,
                                formField: e,
                                onChange: (e) => {
                                    let r;
                                    return (
                                        (r = n[t]), void s([...n.slice(0, t), { ...r, response: e }, ...n.slice(t + 1)])
                                    );
                                },
                            },
                            t,
                        );
                    case o.rX.TEXT_INPUT:
                        return (0, r.jsx)(f.y4, { formField: e, autofocus: 0 === t, onChange: (e) => d(t, e) }, t);
                    case o.rX.PARAGRAPH:
                        return (0, r.jsx)(m.zD, { formField: e, autofocus: 0 === t, onChange: (e) => d(t, e) }, t);
                    case o.rX.MULTIPLE_CHOICE:
                        return (0, r.jsx)(
                            u.MZ,
                            {
                                formField: e,
                                onChange: (e) =>
                                    ((e, t) => {
                                        let { value: r } = t,
                                            l = n[e];
                                        s([...n.slice(0, e), { ...l, response: r }, ...n.slice(e + 1)]);
                                    })(t, e),
                            },
                            t,
                        );
                }
            })(e, t),
        ),
    });
}
function j(e) {
    let t,
        { guildId: n, formFields: s, updateFormFields: i, disableVerification: o } = e,
        u = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
        m = (0, d.B)({ guildId: n });
    return ((t = m === g.PvD.NONE ? null : m === g.PvD.VERY_HIGH ? h.A : c.G), null == u)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !o && null != t && (0, r.jsx)(t, {}),
                  (0, r.jsx)(_, { guildId: n, formFields: s, updateFormFields: i }),
              ],
          });
}
function p(e) {
    let t,
        { guildId: n, formFields: i, updateFormFields: o, disableVerification: u } = e,
        m = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
        x = (0, d.B)({ guildId: n }),
        f = m?.isPhoneVerified() || m?.isStaff(),
        j = m?.verified || f,
        p = !1;
    x === g.PvD.NONE
        ? ((p = !0), (t = null))
        : x === g.PvD.VERY_HIGH
          ? ((p = f ?? !1), (t = h.e))
          : ((p = j ?? !1), (t = c.O));
    let v = s.useRef(p);
    return null == m
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !u && !v.current && null != t && (0, r.jsx)(t, { isUserVerified: p }),
                  (0, r.jsx)(_, { guildId: n, formFields: i, updateFormFields: o }),
              ],
          });
}
