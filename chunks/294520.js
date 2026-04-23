"use strict";
a.d(t, { K6: () => m, eJ: () => b, iW: () => h, rx: () => A, sC: () => f, tt: () => g }), a(938796);
var i = a(665260),
    r = a(417597),
    n = a(930125),
    l = a(338717),
    s = a(282108),
    o = a(256265),
    c = a(253932),
    d = a(576705),
    u = a(863439),
    _ = a(652215),
    p = a(985018);
let h = (e, t) => {
        let { spoiler: a, flags: r = 0 } = e,
            o = (0, s.b)({ type: n.D.Attachment, media: e }, t),
            c = (0, s.$V)({ type: n.D.Attachment, media: e }, t);
        return o.length > 0
            ? o[0]
            : c
              ? l.Oc.POTENTIAL_EXPLICIT_CONTENT
              : a || (0, i.Lt)(r, _.sbO.IS_SPOILER)
                ? l.Oc.SPOILER
                : null;
    },
    f = (e, t, a, i) => {
        let r = (0, s.b)({ type: n.D.Embed, media: e }, i),
            o = !t.author.bot && (0, s.$V)({ type: n.D.Embed, media: e }, i);
        return r.length > 0 ? r[0] : o ? l.Oc.POTENTIAL_EXPLICIT_CONTENT : a ? l.Oc.SPOILER : null;
    },
    g = function (e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = (0, s.b)({ type: n.D.GenericMedia, media: e }, t),
            o = !i && (0, s.$V)({ type: n.D.GenericMedia, media: e }, t);
        return r.includes(l.Oc.EXPLICIT_CONTENT)
            ? l.Oc.EXPLICIT_CONTENT
            : r.includes(l.Oc.GORE_CONTENT)
              ? l.Oc.GORE_CONTENT
              : r.includes(l.Oc.SELF_HARM_CONTENT)
                ? l.Oc.SELF_HARM_CONTENT
                : o
                  ? l.Oc.POTENTIAL_EXPLICIT_CONTENT
                  : a
                    ? l.Oc.SPOILER
                    : null;
    };
function m(e, t, a) {
    if (null == e) return [!1, void 0];
    let i = (function (e) {
        switch (e.type) {
            case o.vV.EMBED:
                return { type: n.D.Embed, media: e };
            case o.vV.ATTACHMENT:
                return { type: n.D.Attachment, media: e };
            case o.vV.COMPONENT:
                return { type: n.D.GenericMedia, media: e.srcUnfurledMediaItem };
            default:
                return null;
        }
    })(e);
    if (null == i) return [!1, void 0];
    let r = (0, s.b)(i, a),
        c = (0, s.$V)(i, a);
    return r.length > 0
        ? [!0, r[0]]
        : c
          ? [!0, l.Oc.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, l.Oc.SPOILER]
            : [!1, void 0];
}
function b(e) {
    let { channel: t, media: a } = e,
        i = (0, r.bG)([d.A], () => null != t && d.A.can(_.xBc.MANAGE_MESSAGES, t)),
        l = c.gs.useSetting(),
        o = (0, s.O8)(n.v.GUILD);
    return m(a, !(0, u.A)(l, i), o);
}
let A = (e) => {
    switch (e) {
        case l.Oc.EXPLICIT_CONTENT:
        case l.Oc.GORE_CONTENT:
        case l.Oc.SELF_HARM_CONTENT:
            return p.intl.string(p.t.SEgHFh);
        case l.Oc.SPOILER:
            return p.intl.string(p.t["XpfDH+"]);
        default:
            return;
    }
};
