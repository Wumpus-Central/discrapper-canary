n.d(t, {
    As: () => E,
    BP: () => h,
    MC: () => y,
    dn: () => p,
    hL: () => b,
    lK: () => m,
}),
    n(997841);
var r = n(399606),
    i = n(991621),
    a = n(936141),
    o = n(629710),
    s = n(368844),
    l = n(695346),
    c = n(496675),
    u = n(630388),
    d = n(255269),
    f = n(981631),
    _ = n(388032);
let p = (e, t) => {
        let { spoiler: n, flags: r = 0 } = e,
            s = (0, o.LD)(
                {
                    type: i.l.Attachment,
                    media: e,
                },
                t,
            ),
            l = (0, o.UJ)(
                {
                    type: i.l.Attachment,
                    media: e,
                },
                t,
            );
        return s.length > 0
            ? s[0]
            : l
              ? a.wk.POTENTIAL_EXPLICIT_CONTENT
              : n || (0, u.yE)(r, f.J0y.IS_SPOILER)
                ? a.wk.SPOILER
                : null;
    },
    h = (e, t, n, r) => {
        let s = (0, o.LD)(
                {
                    type: i.l.Embed,
                    media: e,
                },
                r,
            ),
            l =
                !t.author.bot &&
                (0, o.UJ)(
                    {
                        type: i.l.Embed,
                        media: e,
                    },
                    r,
                );
        return s.length > 0 ? s[0] : l ? a.wk.POTENTIAL_EXPLICIT_CONTENT : n ? a.wk.SPOILER : null;
    },
    m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = (0, o.LD)(
                {
                    type: i.l.GenericMedia,
                    media: e,
                },
                t,
            ),
            l =
                !r &&
                (0, o.UJ)(
                    {
                        type: i.l.GenericMedia,
                        media: e,
                    },
                    t,
                );
        return s.includes(a.wk.EXPLICIT_CONTENT)
            ? a.wk.EXPLICIT_CONTENT
            : s.includes(a.wk.GORE_CONTENT)
              ? a.wk.GORE_CONTENT
              : l
                ? a.wk.POTENTIAL_EXPLICIT_CONTENT
                : n
                  ? a.wk.SPOILER
                  : null;
    };
function g(e) {
    switch (e.type) {
        case s.Ah.EMBED:
            return {
                type: i.l.Embed,
                media: e,
            };
        case s.Ah.ATTACHMENT:
            return {
                type: i.l.Attachment,
                media: e,
            };
        case s.Ah.COMPONENT:
            return {
                type: i.l.GenericMedia,
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
    let i = (0, o.LD)(r, n),
        s = (0, o.UJ)(r, n);
    return i.length > 0
        ? [!0, i[0]]
        : s
          ? [!0, a.wk.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, a.wk.SPOILER]
            : [!1, void 0];
}
function b(e) {
    let { channel: t, media: n } = e,
        a = (0, r.e7)([c.Z], () => null != t && c.Z.can(f.Plq.MANAGE_MESSAGES, t)),
        s = l.cC.useSetting(),
        u = (0, o.kh)(i.n.GUILD);
    return E(n, !(0, d.Z)(s, a), u);
}
let y = (e) => {
    switch (e) {
        case a.wk.EXPLICIT_CONTENT:
        case a.wk.GORE_CONTENT:
            return _.intl.string(_.t.SEgHFh);
        case a.wk.SPOILER:
            return _.intl.string(_.t["XpfDH+"]);
        default:
            return;
    }
};
