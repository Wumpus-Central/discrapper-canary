n.d(t, { K6: () => C, eJ: () => _, iW: () => d, rx: () => L, sC: () => I, tt: () => A }), n(938796);
var c = n(665260),
    r = n(702841),
    E = n(930125),
    O = n(338717),
    i = n(282108),
    u = n(256265),
    T = n(885386),
    a = n(576705),
    l = n(863439),
    N = n(652215),
    s = n(375708);
function d(e, t) {
    let { spoiler: n, flags: r = 0 } = e,
        u = (0, i.b)({ type: E.D.Attachment, media: e }, t),
        T = (0, i.$V)({ type: E.D.Attachment, media: e }, t);
    return u.length > 0
        ? u[0]
        : T
          ? O.Oc.POTENTIAL_EXPLICIT_CONTENT
          : n || (0, c.Lt)(r, N.sbO.IS_SPOILER)
            ? O.Oc.SPOILER
            : null;
}
function I(e, t, n, c) {
    let r = (0, i.b)({ type: E.D.Embed, media: e }, c),
        u = !t.author.bot && (0, i.$V)({ type: E.D.Embed, media: e }, c);
    return r.length > 0 ? r[0] : u ? O.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? O.Oc.SPOILER : null;
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = (0, i.b)({ type: E.D.GenericMedia, media: e }, t),
        u = !c && (0, i.$V)({ type: E.D.GenericMedia, media: e }, t);
    return r.includes(O.Oc.EXPLICIT_CONTENT)
        ? O.Oc.EXPLICIT_CONTENT
        : r.includes(O.Oc.GORE_CONTENT)
          ? O.Oc.GORE_CONTENT
          : r.includes(O.Oc.SELF_HARM_CONTENT)
            ? O.Oc.SELF_HARM_CONTENT
            : u
              ? O.Oc.POTENTIAL_EXPLICIT_CONTENT
              : n
                ? O.Oc.SPOILER
                : null;
}
function C(e, t, n) {
    if (null == e) return [!1, void 0];
    let c = (function (e) {
        switch (e.type) {
            case u.vV.EMBED:
                return { type: E.D.Embed, media: e };
            case u.vV.ATTACHMENT:
                return { type: E.D.Attachment, media: e };
            case u.vV.COMPONENT:
                return { type: E.D.GenericMedia, media: e.srcUnfurledMediaItem };
            default:
                return null;
        }
    })(e);
    if (null == c) return [!1, void 0];
    let r = (0, i.b)(c, n),
        T = (0, i.$V)(c, n);
    return r.length > 0
        ? [!0, r[0]]
        : T
          ? [!0, O.Oc.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, O.Oc.SPOILER]
            : [!1, void 0];
}
function _(e) {
    let { channel: t, media: n } = e,
        c = (0, r.bG)([a.A], () => null != t && a.A.can(N.xBc.MANAGE_MESSAGES, t)),
        O = T.gs.useSetting(),
        u = (0, i.O8)(E.v.GUILD);
    return C(n, !(0, l.A)(O, c), u);
}
function L(e) {
    switch (e) {
        case O.Oc.EXPLICIT_CONTENT:
        case O.Oc.GORE_CONTENT:
        case O.Oc.SELF_HARM_CONTENT:
            return s.intl.string(s.t.SEgHFh);
        case O.Oc.SPOILER:
            return s.intl.string(s.t["XpfDH+"]);
        default:
            return;
    }
}
