"use strict";
n.d(t, { K6: () => g, eJ: () => b, iW: () => f, rx: () => A, sC: () => h, tt: () => m }), n(938796);
var i = n(665260),
    r = n(702841),
    a = n(930125),
    s = n(338717),
    l = n(282108),
    o = n(256265),
    c = n(253932),
    d = n(576705),
    u = n(863439),
    _ = n(652215),
    p = n(985018);
let f = (e, t) => {
        let { spoiler: n, flags: r = 0 } = e,
            o = (0, l.b)({ type: a.D.Attachment, media: e }, t),
            c = (0, l.$V)({ type: a.D.Attachment, media: e }, t);
        return o.length > 0
            ? o[0]
            : c
              ? s.Oc.POTENTIAL_EXPLICIT_CONTENT
              : n || (0, i.Lt)(r, _.sbO.IS_SPOILER)
                ? s.Oc.SPOILER
                : null;
    },
    h = (e, t, n, i) => {
        let r = (0, l.b)({ type: a.D.Embed, media: e }, i),
            o = !t.author.bot && (0, l.$V)({ type: a.D.Embed, media: e }, i);
        return r.length > 0 ? r[0] : o ? s.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? s.Oc.SPOILER : null;
    },
    m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = (0, l.b)({ type: a.D.GenericMedia, media: e }, t),
            o = !i && (0, l.$V)({ type: a.D.GenericMedia, media: e }, t);
        return r.includes(s.Oc.EXPLICIT_CONTENT)
            ? s.Oc.EXPLICIT_CONTENT
            : r.includes(s.Oc.GORE_CONTENT)
              ? s.Oc.GORE_CONTENT
              : r.includes(s.Oc.SELF_HARM_CONTENT)
                ? s.Oc.SELF_HARM_CONTENT
                : o
                  ? s.Oc.POTENTIAL_EXPLICIT_CONTENT
                  : n
                    ? s.Oc.SPOILER
                    : null;
    };
function g(e, t, n) {
    if (null == e) return [!1, void 0];
    let i = (function (e) {
        switch (e.type) {
            case o.vV.EMBED:
                return { type: a.D.Embed, media: e };
            case o.vV.ATTACHMENT:
                return { type: a.D.Attachment, media: e };
            case o.vV.COMPONENT:
                return { type: a.D.GenericMedia, media: e.srcUnfurledMediaItem };
            default:
                return null;
        }
    })(e);
    if (null == i) return [!1, void 0];
    let r = (0, l.b)(i, n),
        c = (0, l.$V)(i, n);
    return r.length > 0
        ? [!0, r[0]]
        : c
          ? [!0, s.Oc.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, s.Oc.SPOILER]
            : [!1, void 0];
}
function b(e) {
    let { channel: t, media: n } = e,
        i = (0, r.bG)([d.A], () => null != t && d.A.can(_.xBc.MANAGE_MESSAGES, t)),
        s = c.gs.useSetting(),
        o = (0, l.O8)(a.v.GUILD);
    return g(n, !(0, u.A)(s, i), o);
}
let A = (e) => {
    switch (e) {
        case s.Oc.EXPLICIT_CONTENT:
        case s.Oc.GORE_CONTENT:
        case s.Oc.SELF_HARM_CONTENT:
            return p.intl.string(p.t.SEgHFh);
        case s.Oc.SPOILER:
            return p.intl.string(p.t["XpfDH+"]);
        default:
            return;
    }
};
