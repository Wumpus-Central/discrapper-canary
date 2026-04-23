r.d(t, { E: () => x, k: () => g });
var n = r(627968),
    i = r(64700),
    l = r(311907),
    a = r(71393),
    s = r(287809),
    o = r(513461),
    d = r(942658),
    c = r(656854),
    u = r(414626),
    _ = r(601047),
    m = r(222650),
    h = r(273926),
    E = r(453016),
    f = r(652215);
function p(e) {
    let { guildId: t, formFields: r, updateFormFields: i } = e,
        s = (0, l.bG)([a.A], () => a.A.getGuild(t)?.rulesChannelId),
        d = (e, t) => {
            let n = r[e];
            i([...r.slice(0, e), { ...n, response: t }, ...r.slice(e + 1)]);
        };
    return (0, n.jsx)(n.Fragment, {
        children: r.map((e, t) =>
            ((e, t) => {
                switch (e.field_type) {
                    case o.rX.TERMS:
                        return (0, n.jsx)(
                            h.Ot,
                            {
                                channelId: s,
                                formField: e,
                                onChange: (e) => {
                                    let n;
                                    return (
                                        (n = r[t]), void i([...r.slice(0, t), { ...n, response: e }, ...r.slice(t + 1)])
                                    );
                                },
                            },
                            t,
                        );
                    case o.rX.TEXT_INPUT:
                        return (0, n.jsx)(E.y4, { formField: e, autofocus: 0 === t, onChange: (e) => d(t, e) }, t);
                    case o.rX.PARAGRAPH:
                        return (0, n.jsx)(_.zD, { formField: e, autofocus: 0 === t, onChange: (e) => d(t, e) }, t);
                    case o.rX.MULTIPLE_CHOICE:
                        return (0, n.jsx)(
                            u.MZ,
                            {
                                formField: e,
                                onChange: (e) =>
                                    ((e, t) => {
                                        let { value: n } = t,
                                            l = r[e];
                                        i([...r.slice(0, e), { ...l, response: n }, ...r.slice(e + 1)]);
                                    })(t, e),
                            },
                            t,
                        );
                }
            })(e, t),
        ),
    });
}
function x(e) {
    let t,
        { guildId: r, formFields: i, updateFormFields: a, disableVerification: o } = e,
        u = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        _ = (0, d.B)({ guildId: r });
    return ((t = _ === f.PvD.NONE ? null : _ === f.PvD.VERY_HIGH ? m.A : c.G), null == u)
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !o && null != t && (0, n.jsx)(t, {}),
                  (0, n.jsx)(p, { guildId: r, formFields: i, updateFormFields: a }),
              ],
          });
}
function g(e) {
    let t,
        { guildId: r, formFields: a, updateFormFields: o, disableVerification: u } = e,
        _ = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        h = (0, d.B)({ guildId: r }),
        E = _?.isPhoneVerified() || _?.isStaff(),
        x = _?.verified || E,
        g = !1;
    h === f.PvD.NONE
        ? ((g = !0), (t = null))
        : h === f.PvD.VERY_HIGH
          ? ((g = E ?? !1), (t = m.e))
          : ((g = x ?? !1), (t = c.O));
    let v = i.useRef(g);
    return null == _
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !u && !v.current && null != t && (0, n.jsx)(t, { isUserVerified: g }),
                  (0, n.jsx)(p, { guildId: r, formFields: a, updateFormFields: o }),
              ],
          });
}
