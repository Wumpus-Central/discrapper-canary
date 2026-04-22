"use strict";
r.d(t, { K6: () => g, eJ: () => b, iW: () => h, rx: () => A, sC: () => f, tt: () => m }), r(938796);
var i = r(665260),
    a = r(417597),
    n = r(930125),
    l = r(338717),
    s = r(282108),
    o = r(256265),
    c = r(253932),
    d = r(576705),
    u = r(863439),
    _ = r(652215),
    p = r(985018);
let h = (e, t) => {
        let { spoiler: r, flags: a = 0 } = e,
            o = (0, s.b)({ type: n.D.Attachment, media: e }, t),
            c = (0, s.$V)({ type: n.D.Attachment, media: e }, t);
        return o.length > 0
            ? o[0]
            : c
              ? l.Oc.POTENTIAL_EXPLICIT_CONTENT
              : r || (0, i.Lt)(a, _.sbO.IS_SPOILER)
                ? l.Oc.SPOILER
                : null;
    },
    f = (e, t, r, i) => {
        let a = (0, s.b)({ type: n.D.Embed, media: e }, i),
            o = !t.author.bot && (0, s.$V)({ type: n.D.Embed, media: e }, i);
        return a.length > 0 ? a[0] : o ? l.Oc.POTENTIAL_EXPLICIT_CONTENT : r ? l.Oc.SPOILER : null;
    },
    m = function (e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = (0, s.b)({ type: n.D.GenericMedia, media: e }, t),
            o = !i && (0, s.$V)({ type: n.D.GenericMedia, media: e }, t);
        return a.includes(l.Oc.EXPLICIT_CONTENT)
            ? l.Oc.EXPLICIT_CONTENT
            : a.includes(l.Oc.GORE_CONTENT)
              ? l.Oc.GORE_CONTENT
              : a.includes(l.Oc.SELF_HARM_CONTENT)
                ? l.Oc.SELF_HARM_CONTENT
                : o
                  ? l.Oc.POTENTIAL_EXPLICIT_CONTENT
                  : r
                    ? l.Oc.SPOILER
                    : null;
    };
function g(e, t, r) {
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
    let a = (0, s.b)(i, r),
        c = (0, s.$V)(i, r);
    return a.length > 0
        ? [!0, a[0]]
        : c
          ? [!0, l.Oc.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, l.Oc.SPOILER]
            : [!1, void 0];
}
function b(e) {
    let { channel: t, media: r } = e,
        i = (0, a.bG)([d.A], () => null != t && d.A.can(_.xBc.MANAGE_MESSAGES, t)),
        l = c.gs.useSetting(),
        o = (0, s.O8)(n.v.GUILD);
    return g(r, !(0, u.A)(l, i), o);
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
