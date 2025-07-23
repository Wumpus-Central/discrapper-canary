(n.d(t, {
    As: () => h,
    BP: () => g,
    MC: () => T,
    dn: () => f,
    hL: () => y,
    lK: () => b
}),
    n(997841));
var a = n(399606),
    i = n(991621),
    o = n(936141),
    r = n(629710),
    c = n(368844),
    l = n(695346),
    s = n(375954),
    u = n(496675),
    d = n(630388),
    m = n(255269),
    p = n(981631),
    _ = n(388032);
let f = (e, t) => {
        let { spoiler: n, flags: a = 0 } = e,
            c = (0, r.LD)(
                {
                    type: i.l.Attachment,
                    media: e
                },
                t
            ),
            l = (0, r.UJ)(
                {
                    type: i.l.Attachment,
                    media: e
                },
                t
            );
        return c.length > 0 ? c[0] : l ? o.wk.POTENTIAL_EXPLICIT_CONTENT : n || (0, d.yE)(a, p.J0y.IS_SPOILER) ? o.wk.SPOILER : null;
    },
    g = (e, t, n, a, c) => {
        let l = s.Z.getMessage(t, n);
        if (null == l) return null;
        let u = (0, r.LD)(
                {
                    type: i.l.Embed,
                    media: e
                },
                c
            ),
            d =
                !l.author.bot &&
                (0, r.UJ)(
                    {
                        type: i.l.Embed,
                        media: e
                    },
                    c
                );
        return u.length > 0 ? u[0] : d ? o.wk.POTENTIAL_EXPLICIT_CONTENT : a ? o.wk.SPOILER : null;
    },
    b = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            c = (0, r.LD)(
                {
                    type: i.l.GenericMedia,
                    media: e
                },
                t
            ),
            l =
                !a &&
                (0, r.UJ)(
                    {
                        type: i.l.GenericMedia,
                        media: e
                    },
                    t
                );
        return c.includes(o.wk.EXPLICIT_CONTENT) ? o.wk.EXPLICIT_CONTENT : c.includes(o.wk.GORE_CONTENT) ? o.wk.GORE_CONTENT : l ? o.wk.POTENTIAL_EXPLICIT_CONTENT : n ? o.wk.SPOILER : null;
    };
function h(e, t, n) {
    if (null == e) return [!1, void 0];
    let a = (function (e) {
        switch (e.type) {
            case c.Ah.EMBED:
                return {
                    type: i.l.Embed,
                    media: e
                };
            case c.Ah.ATTACHMENT:
                return {
                    type: i.l.Attachment,
                    media: e
                };
            case c.Ah.COMPONENT:
                return {
                    type: i.l.GenericMedia,
                    media: e.srcUnfurledMediaItem
                };
            default:
                return null;
        }
    })(e);
    if (null == a) return [!1, void 0];
    let l = (0, r.LD)(a, n),
        s = (0, r.UJ)(a, n);
    return l.length > 0 ? [!0, l[0]] : s ? [!0, o.wk.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, o.wk.SPOILER] : [!1, void 0];
}
function y(e) {
    let { channel: t, media: n } = e,
        o = (0, a.e7)([u.Z], () => null != t && u.Z.can(p.Plq.MANAGE_MESSAGES, t)),
        c = l.cC.useSetting(),
        s = (0, r.kh)(i.n.GUILD);
    return h(n, !(0, m.Z)(c, o), s);
}
let T = (e) => {
    switch (e) {
        case o.wk.EXPLICIT_CONTENT:
        case o.wk.GORE_CONTENT:
            return _.intl.string(_.t.SEgHFh);
        case o.wk.SPOILER:
            return _.intl.string(_.t.XpfDHx);
        default:
            return;
    }
};
