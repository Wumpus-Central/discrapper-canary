n.d(t, { K6: () => C, eJ: () => I, iW: () => d, rx: () => _, sC: () => s, tt: () => A });
var c = n(702841),
    r = n(930125),
    i = n(338717),
    E = n(282108),
    O = n(256265),
    u = n(885386),
    T = n(576705),
    l = n(863439),
    a = n(652215),
    N = n(375708);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = (0, E.b)({ type: r.D.Attachment, media: e }, t),
        O = (0, E.$V)({ type: r.D.Attachment, media: e }, t);
    return c.length > 0 ? c[0] : O ? i.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? i.Oc.SPOILER : null;
}
function s(e, t, n, c) {
    let O = (0, E.b)({ type: r.D.Embed, media: e }, c),
        u = !t.author.bot && (0, E.$V)({ type: r.D.Embed, media: e }, c);
    return O.length > 0 ? O[0] : u ? i.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? i.Oc.SPOILER : null;
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        O = (0, E.b)({ type: r.D.GenericMedia, media: e }, t),
        u = !c && (0, E.$V)({ type: r.D.GenericMedia, media: e }, t);
    return O.includes(i.Oc.EXPLICIT_CONTENT)
        ? i.Oc.EXPLICIT_CONTENT
        : O.includes(i.Oc.GORE_CONTENT)
          ? i.Oc.GORE_CONTENT
          : O.includes(i.Oc.SELF_HARM_CONTENT)
            ? i.Oc.SELF_HARM_CONTENT
            : u
              ? i.Oc.POTENTIAL_EXPLICIT_CONTENT
              : n
                ? i.Oc.SPOILER
                : null;
}
function C(e, t, n) {
    if (null == e) return [!1, void 0];
    let c = (function (e) {
        switch (e.type) {
            case O.vV.EMBED:
                return { type: r.D.Embed, media: e };
            case O.vV.ATTACHMENT:
                return { type: r.D.Attachment, media: e };
            case O.vV.COMPONENT:
                return { type: r.D.GenericMedia, media: e.srcUnfurledMediaItem };
            default:
                return null;
        }
    })(e);
    if (null == c) return [!1, void 0];
    let u = (0, E.b)(c, n),
        T = (0, E.$V)(c, n);
    return u.length > 0
        ? [!0, u[0]]
        : T
          ? [!0, i.Oc.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, i.Oc.SPOILER]
            : [!1, void 0];
}
function I(e) {
    let { channel: t, media: n } = e,
        i = (0, c.bG)([T.A], () => null != t && T.A.can(a.xBc.MANAGE_MESSAGES, t)),
        O = u.gs.useSetting(),
        N = (0, E.O8)(r.v.GUILD);
    return C(n, !(0, l.A)(O, i), N);
}
function _(e) {
    switch (e) {
        case i.Oc.EXPLICIT_CONTENT:
        case i.Oc.GORE_CONTENT:
        case i.Oc.SELF_HARM_CONTENT:
            return N.intl.string(N.t.SEgHFh);
        case i.Oc.SPOILER:
            return N.intl.string(N.t["XpfDH+"]);
        default:
            return;
    }
}
