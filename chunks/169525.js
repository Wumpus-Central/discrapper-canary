(n.d(t, {
    As: () => h,
    BP: () => g,
    MC: () => y,
    dn: () => f,
    hL: () => T,
    lK: () => b
}),
    n(997841));
var a = n(399606),
    o = n(991621),
    i = n(936141),
    c = n(629710),
    r = n(368844),
    l = n(695346),
    s = n(375954),
    u = n(496675),
    d = n(630388),
    m = n(255269),
    p = n(981631),
    _ = n(388032);
let f = (e, t) => {
        let { spoiler: n, flags: a = 0 } = e,
            r = (0, c.LD)(
                {
                    type: o.l.Attachment,
                    media: e
                },
                t
            ),
            l = (0, c.UJ)(
                {
                    type: o.l.Attachment,
                    media: e
                },
                t
            );
        return r.length > 0 ? r[0] : l ? i.wk.POTENTIAL_EXPLICIT_CONTENT : n || (0, d.yE)(a, p.J0y.IS_SPOILER) ? i.wk.SPOILER : null;
    },
    g = (e, t, n, a, r) => {
        let l = s.Z.getMessage(t, n);
        if (null == l) return null;
        let u = (0, c.LD)(
                {
                    type: o.l.Embed,
                    media: e
                },
                r
            ),
            d =
                !l.author.bot &&
                (0, c.UJ)(
                    {
                        type: o.l.Embed,
                        media: e
                    },
                    r
                );
        return u.length > 0 ? u[0] : d ? i.wk.POTENTIAL_EXPLICIT_CONTENT : a ? i.wk.SPOILER : null;
    },
    b = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = (0, c.LD)(
                {
                    type: o.l.GenericMedia,
                    media: e
                },
                t
            ),
            l =
                !a &&
                (0, c.UJ)(
                    {
                        type: o.l.GenericMedia,
                        media: e
                    },
                    t
                );
        return r.includes(i.wk.EXPLICIT_CONTENT) ? i.wk.EXPLICIT_CONTENT : r.includes(i.wk.GORE_CONTENT) ? i.wk.GORE_CONTENT : l ? i.wk.POTENTIAL_EXPLICIT_CONTENT : n ? i.wk.SPOILER : null;
    };
function h(e, t, n) {
    if (null == e) return [!1, void 0];
    let a = (function (e) {
        switch (e.type) {
            case r.Ah.EMBED:
                return {
                    type: o.l.Embed,
                    media: e
                };
            case r.Ah.ATTACHMENT:
                return {
                    type: o.l.Attachment,
                    media: e
                };
            case r.Ah.COMPONENT:
                return {
                    type: o.l.GenericMedia,
                    media: e.srcUnfurledMediaItem
                };
            default:
                return null;
        }
    })(e);
    if (null == a) return [!1, void 0];
    let l = (0, c.LD)(a, n),
        s = (0, c.UJ)(a, n);
    return l.length > 0 ? [!0, l[0]] : s ? [!0, i.wk.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, i.wk.SPOILER] : [!1, void 0];
}
function T(e) {
    let { channel: t, media: n } = e,
        i = (0, a.e7)([u.Z], () => null != t && u.Z.can(p.Plq.MANAGE_MESSAGES, t)),
        r = l.cC.useSetting(),
        s = (0, c.kh)(o.n.GUILD);
    return h(n, !(0, m.Z)(r, i), s);
}
let y = (e) => {
    switch (e) {
        case i.wk.EXPLICIT_CONTENT:
        case i.wk.GORE_CONTENT:
            return _.intl.string(_.t.SEgHFh);
        case i.wk.SPOILER:
            return _.intl.string(_.t.XpfDHx);
        default:
            return;
    }
};
