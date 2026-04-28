n.d(t, { K6: () => _, eJ: () => L, iW: () => s, rx: () => p, sC: () => I, tt: () => C }), n(938796);
var c = n(665260),
    O = n(702841),
    E = n(930125),
    T = n(338717),
    i = n(282108),
    r = n(256265),
    u = n(253932),
    l = n(576705),
    N = n(863439),
    a = n(652215),
    d = n(985018);
let s = (e, t) => {
        let { spoiler: n, flags: O = 0 } = e,
            r = (0, i.b)({ type: E.D.Attachment, media: e }, t),
            u = (0, i.$V)({ type: E.D.Attachment, media: e }, t);
        return r.length > 0
            ? r[0]
            : u
              ? T.Oc.POTENTIAL_EXPLICIT_CONTENT
              : n || (0, c.Lt)(O, a.sbO.IS_SPOILER)
                ? T.Oc.SPOILER
                : null;
    },
    I = (e, t, n, c) => {
        let O = (0, i.b)({ type: E.D.Embed, media: e }, c),
            r = !t.author.bot && (0, i.$V)({ type: E.D.Embed, media: e }, c);
        return O.length > 0 ? O[0] : r ? T.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? T.Oc.SPOILER : null;
    },
    C = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            O = (0, i.b)({ type: E.D.GenericMedia, media: e }, t),
            r = !c && (0, i.$V)({ type: E.D.GenericMedia, media: e }, t);
        return O.includes(T.Oc.EXPLICIT_CONTENT)
            ? T.Oc.EXPLICIT_CONTENT
            : O.includes(T.Oc.GORE_CONTENT)
              ? T.Oc.GORE_CONTENT
              : O.includes(T.Oc.SELF_HARM_CONTENT)
                ? T.Oc.SELF_HARM_CONTENT
                : r
                  ? T.Oc.POTENTIAL_EXPLICIT_CONTENT
                  : n
                    ? T.Oc.SPOILER
                    : null;
    };
function _(e, t, n) {
    if (null == e) return [!1, void 0];
    let c = (function (e) {
        switch (e.type) {
            case r.vV.EMBED:
                return { type: E.D.Embed, media: e };
            case r.vV.ATTACHMENT:
                return { type: E.D.Attachment, media: e };
            case r.vV.COMPONENT:
                return { type: E.D.GenericMedia, media: e.srcUnfurledMediaItem };
            default:
                return null;
        }
    })(e);
    if (null == c) return [!1, void 0];
    let O = (0, i.b)(c, n),
        u = (0, i.$V)(c, n);
    return O.length > 0
        ? [!0, O[0]]
        : u
          ? [!0, T.Oc.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, T.Oc.SPOILER]
            : [!1, void 0];
}
function L(e) {
    let { channel: t, media: n } = e,
        c = (0, O.bG)([l.A], () => null != t && l.A.can(a.xBc.MANAGE_MESSAGES, t)),
        T = u.gs.useSetting(),
        r = (0, i.O8)(E.v.GUILD);
    return _(n, !(0, N.A)(T, c), r);
}
let p = (e) => {
    switch (e) {
        case T.Oc.EXPLICIT_CONTENT:
        case T.Oc.GORE_CONTENT:
        case T.Oc.SELF_HARM_CONTENT:
            return d.intl.string(d.t.SEgHFh);
        case T.Oc.SPOILER:
            return d.intl.string(d.t["XpfDH+"]);
        default:
            return;
    }
};
