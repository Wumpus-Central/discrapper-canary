(n.d(t, {
    As: () => b,
    BP: () => m,
    MC: () => O,
    dn: () => h,
    hL: () => y,
    lK: () => g
}),
    n(997841));
var r = n(399606),
    i = n(991621),
    o = n(936141),
    a = n(629710),
    s = n(368844),
    l = n(695346),
    c = n(375954),
    u = n(496675),
    d = n(630388),
    f = n(255269),
    _ = n(981631),
    p = n(388032);
let h = (e, t) => {
        let { spoiler: n, flags: r = 0 } = e,
            s = (0, a.LD)(
                {
                    type: i.l.Attachment,
                    media: e
                },
                t
            ),
            l = (0, a.UJ)(
                {
                    type: i.l.Attachment,
                    media: e
                },
                t
            );
        return s.length > 0 ? s[0] : l ? o.wk.POTENTIAL_EXPLICIT_CONTENT : n || (0, d.yE)(r, _.J0y.IS_SPOILER) ? o.wk.SPOILER : null;
    },
    m = (e, t, n, r, s) => {
        let l = c.Z.getMessage(t, n);
        if (null == l) return null;
        let u = (0, a.LD)(
                {
                    type: i.l.Embed,
                    media: e
                },
                s
            ),
            d =
                !l.author.bot &&
                (0, a.UJ)(
                    {
                        type: i.l.Embed,
                        media: e
                    },
                    s
                );
        return u.length > 0 ? u[0] : d ? o.wk.POTENTIAL_EXPLICIT_CONTENT : r ? o.wk.SPOILER : null;
    },
    g = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = (0, a.LD)(
                {
                    type: i.l.GenericMedia,
                    media: e
                },
                t
            ),
            l =
                !r &&
                (0, a.UJ)(
                    {
                        type: i.l.GenericMedia,
                        media: e
                    },
                    t
                );
        return s.includes(o.wk.EXPLICIT_CONTENT) ? o.wk.EXPLICIT_CONTENT : s.includes(o.wk.GORE_CONTENT) ? o.wk.GORE_CONTENT : l ? o.wk.POTENTIAL_EXPLICIT_CONTENT : n ? o.wk.SPOILER : null;
    };
function E(e) {
    switch (e.type) {
        case s.Ah.EMBED:
            return {
                type: i.l.Embed,
                media: e
            };
        case s.Ah.ATTACHMENT:
            return {
                type: i.l.Attachment,
                media: e
            };
        case s.Ah.COMPONENT:
            return {
                type: i.l.GenericMedia,
                media: e.srcUnfurledMediaItem
            };
        default:
            return null;
    }
}
function b(e, t, n) {
    if (null == e) return [!1, void 0];
    let r = E(e);
    if (null == r) return [!1, void 0];
    let i = (0, a.LD)(r, n),
        s = (0, a.UJ)(r, n);
    return i.length > 0 ? [!0, i[0]] : s ? [!0, o.wk.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, o.wk.SPOILER] : [!1, void 0];
}
function y(e) {
    let { channel: t, media: n } = e,
        o = (0, r.e7)([u.Z], () => null != t && u.Z.can(_.Plq.MANAGE_MESSAGES, t)),
        s = l.cC.useSetting(),
        c = (0, a.kh)(i.n.GUILD);
    return b(n, !(0, f.Z)(s, o), c);
}
let O = (e) => {
    switch (e) {
        case o.wk.EXPLICIT_CONTENT:
        case o.wk.GORE_CONTENT:
            return p.intl.string(p.t.SEgHFh);
        case o.wk.SPOILER:
            return p.intl.string(p.t.XpfDHx);
        default:
            return;
    }
};
