(n.d(t, {
    As: () => O,
    BP: () => y,
    MC: () => x,
    dn: () => f,
    hL: () => I,
    lK: () => g
}),
    n(997841));
var r = n(399606),
    i = n(991621),
    l = n(936141),
    o = n(629710),
    a = n(368844),
    s = n(695346),
    u = n(375954),
    c = n(496675),
    d = n(630388),
    m = n(255269),
    h = n(981631),
    p = n(388032);
let f = (e, t) => {
        let { spoiler: n, flags: r = 0 } = e,
            a = (0, o.LD)(
                {
                    type: i.l.Attachment,
                    media: e
                },
                t
            ),
            s = (0, o.UJ)(
                {
                    type: i.l.Attachment,
                    media: e
                },
                t
            );
        return a.length > 0 ? a[0] : s ? l.wk.POTENTIAL_EXPLICIT_CONTENT : n || (0, d.yE)(r, h.J0y.IS_SPOILER) ? l.wk.SPOILER : null;
    },
    y = (e, t, n, r, a) => {
        let s = u.Z.getMessage(t, n);
        if (null == s) return null;
        let c = (0, o.LD)(
                {
                    type: i.l.Embed,
                    media: e
                },
                a
            ),
            d =
                !s.author.bot &&
                (0, o.UJ)(
                    {
                        type: i.l.Embed,
                        media: e
                    },
                    a
                );
        return c.length > 0 ? c[0] : d ? l.wk.POTENTIAL_EXPLICIT_CONTENT : r ? l.wk.SPOILER : null;
    },
    g = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = (0, o.LD)(
                {
                    type: i.l.GenericMedia,
                    media: e
                },
                t
            ),
            s =
                !r &&
                (0, o.UJ)(
                    {
                        type: i.l.GenericMedia,
                        media: e
                    },
                    t
                );
        return a.includes(l.wk.EXPLICIT_CONTENT) ? l.wk.EXPLICIT_CONTENT : a.includes(l.wk.GORE_CONTENT) ? l.wk.GORE_CONTENT : s ? l.wk.POTENTIAL_EXPLICIT_CONTENT : n ? l.wk.SPOILER : null;
    };
function O(e, t, n) {
    if (null == e) return [!1, void 0];
    let r = (function (e) {
        switch (e.type) {
            case a.Ah.EMBED:
                return {
                    type: i.l.Embed,
                    media: e
                };
            case a.Ah.ATTACHMENT:
                return {
                    type: i.l.Attachment,
                    media: e
                };
            case a.Ah.COMPONENT:
                return {
                    type: i.l.GenericMedia,
                    media: e.srcUnfurledMediaItem
                };
            default:
                return null;
        }
    })(e);
    if (null == r) return [!1, void 0];
    let s = (0, o.LD)(r, n),
        u = (0, o.UJ)(r, n);
    return s.length > 0 ? [!0, s[0]] : u ? [!0, l.wk.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, l.wk.SPOILER] : [!1, void 0];
}
function I(e) {
    let { channel: t, media: n } = e,
        l = (0, r.e7)([c.Z], () => null != t && c.Z.can(h.Plq.MANAGE_MESSAGES, t)),
        a = s.cC.useSetting(),
        u = (0, o.kh)(i.n.GUILD);
    return O(n, !(0, m.Z)(a, l), u);
}
let x = (e) => {
    switch (e) {
        case l.wk.EXPLICIT_CONTENT:
        case l.wk.GORE_CONTENT:
            return p.intl.string(p.t.SEgHFh);
        case l.wk.SPOILER:
            return p.intl.string(p.t.XpfDHx);
        default:
            return;
    }
};
