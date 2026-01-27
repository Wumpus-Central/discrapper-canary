n.d(t, {
    K6: () => b,
    eJ: () => y,
    iW: () => m,
    rx: () => O,
    sC: () => f,
    tt: () => g,
}),
    n(938796);
var i = n(665260),
    l = n(417597),
    r = n(930125),
    o = n(338717),
    a = n(282108),
    s = n(256265),
    u = n(253932),
    c = n(576705),
    d = n(863439),
    p = n(652215),
    h = n(985018);
let m = (e, t) => {
        let { spoiler: n, flags: l = 0 } = e,
            s = (0, a.b)(
                {
                    type: r.D.Attachment,
                    media: e,
                },
                t,
            ),
            u = (0, a.$V)(
                {
                    type: r.D.Attachment,
                    media: e,
                },
                t,
            );
        return s.length > 0
            ? s[0]
            : u
              ? o.Oc.POTENTIAL_EXPLICIT_CONTENT
              : n || (0, i.Lt)(l, p.sbO.IS_SPOILER)
                ? o.Oc.SPOILER
                : null;
    },
    f = (e, t, n, i) => {
        let l = (0, a.b)(
                {
                    type: r.D.Embed,
                    media: e,
                },
                i,
            ),
            s =
                !t.author.bot &&
                (0, a.$V)(
                    {
                        type: r.D.Embed,
                        media: e,
                    },
                    i,
                );
        return l.length > 0 ? l[0] : s ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? o.Oc.SPOILER : null;
    },
    g = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            l = (0, a.b)(
                {
                    type: r.D.GenericMedia,
                    media: e,
                },
                t,
            ),
            s =
                !i &&
                (0, a.$V)(
                    {
                        type: r.D.GenericMedia,
                        media: e,
                    },
                    t,
                );
        return l.includes(o.Oc.EXPLICIT_CONTENT)
            ? o.Oc.EXPLICIT_CONTENT
            : l.includes(o.Oc.GORE_CONTENT)
              ? o.Oc.GORE_CONTENT
              : l.includes(o.Oc.SELF_HARM_CONTENT)
                ? o.Oc.SELF_HARM_CONTENT
                : s
                  ? o.Oc.POTENTIAL_EXPLICIT_CONTENT
                  : n
                    ? o.Oc.SPOILER
                    : null;
    };

function b(e, t, n) {
    if (null == e) return [!1, void 0];
    let i = (function (e) {
        switch (e.type) {
            case s.vV.EMBED:
                return {
                    type: r.D.Embed,
                    media: e,
                };
            case s.vV.ATTACHMENT:
                return {
                    type: r.D.Attachment,
                    media: e,
                };
            case s.vV.COMPONENT:
                return {
                    type: r.D.GenericMedia,
                    media: e.srcUnfurledMediaItem,
                };
            default:
                return null;
        }
    })(e);
    if (null == i) return [!1, void 0];
    let l = (0, a.b)(i, n),
        u = (0, a.$V)(i, n);
    return l.length > 0
        ? [!0, l[0]]
        : u
          ? [!0, o.Oc.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, o.Oc.SPOILER]
            : [!1, void 0];
}

function y(e) {
    let { channel: t, media: n } = e,
        i = (0, l.bG)([c.A], () => null != t && c.A.can(p.xBc.MANAGE_MESSAGES, t)),
        o = u.gs.useSetting(),
        s = (0, a.O8)(r.v.GUILD);
    return b(n, !(0, d.A)(o, i), s);
}
let O = (e) => {
    switch (e) {
        case o.Oc.EXPLICIT_CONTENT:
        case o.Oc.GORE_CONTENT:
        case o.Oc.SELF_HARM_CONTENT:
            return h.intl.string(h.t.SEgHFh);
        case o.Oc.SPOILER:
            return h.intl.string(h.t["XpfDH+"]);
        default:
            return;
    }
};
