n.d(t, {
    As: () => b,
    BP: () => f,
    MC: () => T,
    dn: () => _,
    hL: () => h,
    lK: () => g,
}),
    n(997841);
var a = n(399606),
    o = n(991621),
    i = n(936141),
    r = n(629710),
    c = n(368844),
    l = n(695346),
    s = n(496675),
    u = n(630388),
    d = n(255269),
    m = n(981631),
    p = n(388032);
let _ = (e, t) => {
        let { spoiler: n, flags: a = 0 } = e,
            c = (0, r.LD)(
                {
                    type: o.l.Attachment,
                    media: e,
                },
                t,
            ),
            l = (0, r.UJ)(
                {
                    type: o.l.Attachment,
                    media: e,
                },
                t,
            );
        return c.length > 0
            ? c[0]
            : l
              ? i.wk.POTENTIAL_EXPLICIT_CONTENT
              : n || (0, u.yE)(a, m.J0y.IS_SPOILER)
                ? i.wk.SPOILER
                : null;
    },
    f = (e, t, n, a) => {
        let c = (0, r.LD)(
                {
                    type: o.l.Embed,
                    media: e,
                },
                a,
            ),
            l =
                !t.author.bot &&
                (0, r.UJ)(
                    {
                        type: o.l.Embed,
                        media: e,
                    },
                    a,
                );
        return c.length > 0 ? c[0] : l ? i.wk.POTENTIAL_EXPLICIT_CONTENT : n ? i.wk.SPOILER : null;
    },
    g = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            c = (0, r.LD)(
                {
                    type: o.l.GenericMedia,
                    media: e,
                },
                t,
            ),
            l =
                !a &&
                (0, r.UJ)(
                    {
                        type: o.l.GenericMedia,
                        media: e,
                    },
                    t,
                );
        return c.includes(i.wk.EXPLICIT_CONTENT)
            ? i.wk.EXPLICIT_CONTENT
            : c.includes(i.wk.GORE_CONTENT)
              ? i.wk.GORE_CONTENT
              : l
                ? i.wk.POTENTIAL_EXPLICIT_CONTENT
                : n
                  ? i.wk.SPOILER
                  : null;
    };
function b(e, t, n) {
    if (null == e) return [!1, void 0];
    let a = (function (e) {
        switch (e.type) {
            case c.Ah.EMBED:
                return {
                    type: o.l.Embed,
                    media: e,
                };
            case c.Ah.ATTACHMENT:
                return {
                    type: o.l.Attachment,
                    media: e,
                };
            case c.Ah.COMPONENT:
                return {
                    type: o.l.GenericMedia,
                    media: e.srcUnfurledMediaItem,
                };
            default:
                return null;
        }
    })(e);
    if (null == a) return [!1, void 0];
    let l = (0, r.LD)(a, n),
        s = (0, r.UJ)(a, n);
    return l.length > 0
        ? [!0, l[0]]
        : s
          ? [!0, i.wk.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, i.wk.SPOILER]
            : [!1, void 0];
}
function h(e) {
    let { channel: t, media: n } = e,
        i = (0, a.e7)([s.Z], () => null != t && s.Z.can(m.Plq.MANAGE_MESSAGES, t)),
        c = l.cC.useSetting(),
        u = (0, r.kh)(o.n.GUILD);
    return b(n, !(0, d.Z)(c, i), u);
}
let T = (e) => {
    switch (e) {
        case i.wk.EXPLICIT_CONTENT:
        case i.wk.GORE_CONTENT:
            return p.intl.string(p.t.SEgHFh);
        case i.wk.SPOILER:
            return p.intl.string(p.t.XpfDHx);
        default:
            return;
    }
};
