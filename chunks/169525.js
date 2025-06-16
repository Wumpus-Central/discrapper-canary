n.d(t, {
    As: () => b,
    BP: () => h,
    MC: () => O,
    dn: () => f,
    hL: () => y,
    lK: () => _
}),
    n(997841);
var a = n(399606),
    i = n(991621),
    r = n(936141),
    l = n(629710),
    o = n(368844),
    c = n(695346),
    s = n(375954),
    d = n(496675),
    u = n(630388),
    m = n(255269),
    p = n(981631),
    g = n(388032);
let f = (e, t) => {
        let { spoiler: n, flags: a = 0 } = e,
            o = (0, l.LD)(
                {
                    type: i.l.Attachment,
                    media: e
                },
                t
            ),
            c = (0, l.UJ)(
                {
                    type: i.l.Attachment,
                    media: e
                },
                t
            );
        return o.length > 0 ? o[0] : c ? r.wk.POTENTIAL_EXPLICIT_CONTENT : n || (0, u.yE)(a, p.J0y.IS_SPOILER) ? r.wk.SPOILER : null;
    },
    h = (e, t, n, a, o) => {
        let c = s.Z.getMessage(t, n);
        if (null == c) return null;
        let d = (0, l.LD)(
                {
                    type: i.l.Embed,
                    media: e
                },
                o
            ),
            u =
                !c.author.bot &&
                (0, l.UJ)(
                    {
                        type: i.l.Embed,
                        media: e
                    },
                    o
                );
        return d.length > 0 ? d[0] : u ? r.wk.POTENTIAL_EXPLICIT_CONTENT : a ? r.wk.SPOILER : null;
    },
    _ = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = (0, l.LD)(
                {
                    type: i.l.GenericMedia,
                    media: e
                },
                t
            ),
            c =
                !a &&
                (0, l.UJ)(
                    {
                        type: i.l.GenericMedia,
                        media: e
                    },
                    t
                );
        return o.includes(r.wk.EXPLICIT_CONTENT) ? r.wk.EXPLICIT_CONTENT : o.includes(r.wk.GORE_CONTENT) ? r.wk.GORE_CONTENT : c ? r.wk.POTENTIAL_EXPLICIT_CONTENT : n ? r.wk.SPOILER : null;
    };
function b(e, t, n) {
    if (null == e) return [!1, void 0];
    let a = (function (e) {
        switch (e.type) {
            case o.Ah.EMBED:
                return {
                    type: i.l.Embed,
                    media: e
                };
            case o.Ah.ATTACHMENT:
                return {
                    type: i.l.Attachment,
                    media: e
                };
            case o.Ah.COMPONENT:
                return {
                    type: i.l.GenericMedia,
                    media: e.srcUnfurledMediaItem
                };
            default:
                return null;
        }
    })(e);
    if (null == a) return [!1, void 0];
    let c = (0, l.LD)(a, n),
        s = (0, l.UJ)(a, n);
    return c.length > 0 ? [!0, c[0]] : s ? [!0, r.wk.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, r.wk.SPOILER] : [!1, void 0];
}
function y(e) {
    let { channel: t, media: n } = e,
        r = (0, a.e7)([d.Z], () => null != t && d.Z.can(p.Plq.MANAGE_MESSAGES, t)),
        o = c.cC.useSetting(),
        s = (0, l.kh)(i.n.GUILD);
    return b(n, !(0, m.Z)(o, r), s);
}
let O = (e) => {
    switch (e) {
        case r.wk.EXPLICIT_CONTENT:
        case r.wk.GORE_CONTENT:
            return g.intl.string(g.t.SEgHFh);
        case r.wk.SPOILER:
            return g.intl.string(g.t.XpfDHx);
        default:
            return;
    }
};
