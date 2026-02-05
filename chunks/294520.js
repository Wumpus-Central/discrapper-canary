i.d(t, { K6: () => f, eJ: () => T, iW: () => p, rx: () => E, sC: () => g, tt: () => A }), i(938796);
var n = i(665260),
    l = i(417597),
    a = i(930125),
    r = i(338717),
    o = i(282108),
    s = i(256265),
    u = i(253932),
    d = i(576705),
    c = i(863439),
    h = i(652215),
    m = i(985018);
let p = (e, t) => {
        let { spoiler: i, flags: l = 0 } = e,
            s = (0, o.b)({ type: a.D.Attachment, media: e }, t),
            u = (0, o.$V)({ type: a.D.Attachment, media: e }, t);
        return s.length > 0
            ? s[0]
            : u
              ? r.Oc.POTENTIAL_EXPLICIT_CONTENT
              : i || (0, n.Lt)(l, h.sbO.IS_SPOILER)
                ? r.Oc.SPOILER
                : null;
    },
    g = (e, t, i, n) => {
        let l = (0, o.b)({ type: a.D.Embed, media: e }, n),
            s = !t.author.bot && (0, o.$V)({ type: a.D.Embed, media: e }, n);
        return l.length > 0 ? l[0] : s ? r.Oc.POTENTIAL_EXPLICIT_CONTENT : i ? r.Oc.SPOILER : null;
    },
    A = function (e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            l = (0, o.b)({ type: a.D.GenericMedia, media: e }, t),
            s = !n && (0, o.$V)({ type: a.D.GenericMedia, media: e }, t);
        return l.includes(r.Oc.EXPLICIT_CONTENT)
            ? r.Oc.EXPLICIT_CONTENT
            : l.includes(r.Oc.GORE_CONTENT)
              ? r.Oc.GORE_CONTENT
              : l.includes(r.Oc.SELF_HARM_CONTENT)
                ? r.Oc.SELF_HARM_CONTENT
                : s
                  ? r.Oc.POTENTIAL_EXPLICIT_CONTENT
                  : i
                    ? r.Oc.SPOILER
                    : null;
    };
function f(e, t, i) {
    if (null == e) return [!1, void 0];
    let n = (function (e) {
        switch (e.type) {
            case s.vV.EMBED:
                return { type: a.D.Embed, media: e };
            case s.vV.ATTACHMENT:
                return { type: a.D.Attachment, media: e };
            case s.vV.COMPONENT:
                return { type: a.D.GenericMedia, media: e.srcUnfurledMediaItem };
            default:
                return null;
        }
    })(e);
    if (null == n) return [!1, void 0];
    let l = (0, o.b)(n, i),
        u = (0, o.$V)(n, i);
    return l.length > 0
        ? [!0, l[0]]
        : u
          ? [!0, r.Oc.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, r.Oc.SPOILER]
            : [!1, void 0];
}
function T(e) {
    let { channel: t, media: i } = e,
        n = (0, l.bG)([d.A], () => null != t && d.A.can(h.xBc.MANAGE_MESSAGES, t)),
        r = u.gs.useSetting(),
        s = (0, o.O8)(a.v.GUILD);
    return f(i, !(0, c.A)(r, n), s);
}
let E = (e) => {
    switch (e) {
        case r.Oc.EXPLICIT_CONTENT:
        case r.Oc.GORE_CONTENT:
        case r.Oc.SELF_HARM_CONTENT:
            return m.intl.string(m.t.SEgHFh);
        case r.Oc.SPOILER:
            return m.intl.string(m.t["XpfDH+"]);
        default:
            return;
    }
};
