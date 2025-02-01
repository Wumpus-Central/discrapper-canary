n.d(t, {
    As: () => T,
    BP: () => v,
    MC: () => S,
    dn: () => E,
    hL: () => b,
    lK: () => y,
    wk: () => g
}),
    n(789020),
    n(627341);
var i = n(278074),
    r = n(399606),
    a = n(432877),
    s = n(247206),
    o = n(25610),
    l = n(368844),
    u = n(768494),
    c = n(695346),
    d = n(375954),
    f = n(496675),
    _ = n(630388),
    p = n(255269),
    h = n(981631),
    m = n(388032),
    g = (function (e) {
        return (e.SPOILER = 'spoiler'), (e.EXPLICIT_CONTENT = 'explicit_content'), (e.POTENTIAL_EXPLICIT_CONTENT = 'potential_explicit_content'), e;
    })({});
let E = (e, t) => {
        let { spoiler: n, flags: i = 0, content_scan_version: r } = e;
        if (t) {
            if ((0, s.Sv)(r)) return 'potential_explicit_content';
            if ((0, _.yE)(i, h.J0y.CONTAINS_EXPLICIT_MEDIA) || a.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n || (0, _.yE)(i, h.J0y.IS_SPOILER) ? 'spoiler' : null;
    },
    v = (e, t, n, i, r) => {
        let { flags: o = 0, contentScanVersion: l } = e,
            u = d.Z.getMessage(t, n);
        if (null == u) return null;
        if (r) {
            if (!u.author.bot && (0, s.Sv)(l)) return 'potential_explicit_content';
            if ((0, _.yE)(o, h.xPJ.CONTAINS_EXPLICIT_MEDIA) || a.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return i ? 'spoiler' : null;
    },
    y = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { contentScanMetadata: i } = e;
        if (t) {
            if ((0, s.oh)(i)) return 'potential_explicit_content';
            let { flags: e } = i;
            if ((0, _.yE)(e, u.Cb.EXPLICIT) || a.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n ? 'spoiler' : null;
    };
function I(e) {
    switch (e) {
        case l.Ah.EMBED:
            return s.lJ.Embed;
        case l.Ah.ATTACHMENT:
            return s.lJ.Attachment;
        default:
            return;
    }
}
function T(e, t, n) {
    if (null == e) return [!1, void 0];
    if (n && (0, s.Sv)(e.contentScanVersion)) return [!0, 'potential_explicit_content'];
    let i = I(e.type);
    return null != i &&
        (0, s.KP)(
            {
                type: i,
                media: e
            },
            n
        )
        ? [!0, 'explicit_content']
        : e.spoiler
          ? [t, 'spoiler']
          : [!1, void 0];
}
function b(e) {
    let { channel: t, media: n } = e,
        i = (0, r.e7)([f.Z], () => null != t && f.Z.can(h.Plq.MANAGE_MESSAGES, t)),
        a = c.cC.useSetting(),
        s = (0, o.m)();
    return T(n, !(0, p.Z)(a, i), s);
}
let S = (e) =>
    (0, i.EQ)(e)
        .with('explicit_content', () => m.intl.string(m.t.SEgHFh))
        .with('spoiler', () => m.intl.string(m.t.XpfDHx))
        .otherwise(() => void 0);
