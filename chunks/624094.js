"use strict";
r.d(t, { E: () => b, k: () => x });
var i = r(627968),
    a = r(64700),
    n = r(311907),
    s = r(71393),
    l = r(287809),
    o = r(513461),
    c = r(942658),
    d = r(656854),
    _ = r(414626),
    u = r(601047),
    p = r(222650),
    m = r(273926),
    h = r(453016),
    g = r(652215);
function f(e) {
    let { guildId: t, formFields: r, updateFormFields: a } = e,
        l = (0, n.bG)([s.A], () => s.A.getGuild(t)?.rulesChannelId),
        c = (e, t) => {
            let i = r[e];
            a([...r.slice(0, e), { ...i, response: t }, ...r.slice(e + 1)]);
        };
    return (0, i.jsx)(i.Fragment, {
        children: r.map((e, t) =>
            ((e, t) => {
                switch (e.field_type) {
                    case o.rX.TERMS:
                        return (0, i.jsx)(
                            m.Ot,
                            {
                                channelId: l,
                                formField: e,
                                onChange: (e) => {
                                    let i;
                                    return (
                                        (i = r[t]), void a([...r.slice(0, t), { ...i, response: e }, ...r.slice(t + 1)])
                                    );
                                },
                            },
                            t,
                        );
                    case o.rX.TEXT_INPUT:
                        return (0, i.jsx)(h.y4, { formField: e, autofocus: 0 === t, onChange: (e) => c(t, e) }, t);
                    case o.rX.PARAGRAPH:
                        return (0, i.jsx)(u.zD, { formField: e, autofocus: 0 === t, onChange: (e) => c(t, e) }, t);
                    case o.rX.MULTIPLE_CHOICE:
                        return (0, i.jsx)(
                            _.MZ,
                            {
                                formField: e,
                                onChange: (e) =>
                                    ((e, t) => {
                                        let { value: i } = t,
                                            n = r[e];
                                        a([...r.slice(0, e), { ...n, response: i }, ...r.slice(e + 1)]);
                                    })(t, e),
                            },
                            t,
                        );
                }
            })(e, t),
        ),
    });
}
function b(e) {
    let t,
        { guildId: r, formFields: a, updateFormFields: s, disableVerification: o } = e,
        _ = (0, n.bG)([l.default], () => l.default.getCurrentUser()),
        u = (0, c.B)({ guildId: r });
    return ((t = u === g.PvD.NONE ? null : u === g.PvD.VERY_HIGH ? p.A : d.G), null == _)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !o && null != t && (0, i.jsx)(t, {}),
                  (0, i.jsx)(f, { guildId: r, formFields: a, updateFormFields: s }),
              ],
          });
}
function x(e) {
    let t,
        { guildId: r, formFields: s, updateFormFields: o, disableVerification: _ } = e,
        u = (0, n.bG)([l.default], () => l.default.getCurrentUser()),
        m = (0, c.B)({ guildId: r }),
        h = u?.isPhoneVerified() || u?.isStaff(),
        b = u?.verified || h,
        x = !1;
    m === g.PvD.NONE
        ? ((x = !0), (t = null))
        : m === g.PvD.VERY_HIGH
          ? ((x = h ?? !1), (t = p.e))
          : ((x = b ?? !1), (t = d.O));
    let v = a.useRef(x);
    return null == u
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !_ && !v.current && null != t && (0, i.jsx)(t, { isUserVerified: x }),
                  (0, i.jsx)(f, { guildId: r, formFields: s, updateFormFields: o }),
              ],
          });
}
