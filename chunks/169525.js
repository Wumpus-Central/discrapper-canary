n.d(t, {
    As: () => E,
    BP: () => h,
    MC: () => y,
    dn: () => p,
    hL: () => b,
    lK: () => m,
}),
    n(997841);
var r = n(95015),
    i = n(399606),
    a = n(991621),
    o = n(936141),
    s = n(629710),
    l = n(368844),
    c = n(695346),
    u = n(496675),
    d = n(255269),
    f = n(981631),
    _ = n(388032);
let p = (e, t) => {
        let { spoiler: n, flags: i = 0 } = e,
            l = (0, s.LD)(
                {
                    type: a.l.Attachment,
                    media: e,
                },
                t,
            ),
            c = (0, s.UJ)(
                {
                    type: a.l.Attachment,
                    media: e,
                },
                t,
            );
        return l.length > 0
            ? l[0]
            : c
              ? o.wk.POTENTIAL_EXPLICIT_CONTENT
              : n || (0, r.yE)(i, f.J0y.IS_SPOILER)
                ? o.wk.SPOILER
                : null;
    },
    h = (e, t, n, r) => {
        let i = (0, s.LD)(
                {
                    type: a.l.Embed,
                    media: e,
                },
                r,
            ),
            l =
                !t.author.bot &&
                (0, s.UJ)(
                    {
                        type: a.l.Embed,
                        media: e,
                    },
                    r,
                );
        return i.length > 0 ? i[0] : l ? o.wk.POTENTIAL_EXPLICIT_CONTENT : n ? o.wk.SPOILER : null;
    },
    m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = (0, s.LD)(
                {
                    type: a.l.GenericMedia,
                    media: e,
                },
                t,
            ),
            l =
                !r &&
                (0, s.UJ)(
                    {
                        type: a.l.GenericMedia,
                        media: e,
                    },
                    t,
                );
        return i.includes(o.wk.EXPLICIT_CONTENT)
            ? o.wk.EXPLICIT_CONTENT
            : i.includes(o.wk.GORE_CONTENT)
              ? o.wk.GORE_CONTENT
              : i.includes(o.wk.SELF_HARM_CONTENT)
                ? o.wk.SELF_HARM_CONTENT
                : l
                  ? o.wk.POTENTIAL_EXPLICIT_CONTENT
                  : n
                    ? o.wk.SPOILER
                    : null;
    };
function g(e) {
    switch (e.type) {
        case l.Ah.EMBED:
            return {
                type: a.l.Embed,
                media: e,
            };
        case l.Ah.ATTACHMENT:
            return {
                type: a.l.Attachment,
                media: e,
            };
        case l.Ah.COMPONENT:
            return {
                type: a.l.GenericMedia,
                media: e.srcUnfurledMediaItem,
            };
        default:
            return null;
    }
}
function E(e, t, n) {
    if (null == e) return [!1, void 0];
    let r = g(e);
    if (null == r) return [!1, void 0];
    let i = (0, s.LD)(r, n),
        a = (0, s.UJ)(r, n);
    return i.length > 0
        ? [!0, i[0]]
        : a
          ? [!0, o.wk.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, o.wk.SPOILER]
            : [!1, void 0];
}
function b(e) {
    let { channel: t, media: n } = e,
        r = (0, i.e7)([u.Z], () => null != t && u.Z.can(f.Plq.MANAGE_MESSAGES, t)),
        o = c.cC.useSetting(),
        l = (0, s.kh)(a.n.GUILD);
    return E(n, !(0, d.Z)(o, r), l);
}
let y = (e) => {
    switch (e) {
        case o.wk.EXPLICIT_CONTENT:
        case o.wk.GORE_CONTENT:
        case o.wk.SELF_HARM_CONTENT:
            return _.intl.string(_.t.SEgHFh);
        case o.wk.SPOILER:
            return _.intl.string(_.t["XpfDH+"]);
        default:
            return;
    }
};
