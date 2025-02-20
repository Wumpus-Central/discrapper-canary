n.d(t, {
    As: () => O,
    BP: () => v,
    MC: () => I,
    dn: () => E,
    hL: () => S,
    lK: () => b,
    wk: () => g
}),
    n(789020),
    n(627341);
var r = n(278074),
    i = n(399606),
    o = n(432877),
    a = n(247206),
    s = n(25610),
    l = n(368844),
    c = n(768494),
    u = n(695346),
    d = n(375954),
    f = n(496675),
    p = n(630388),
    _ = n(255269),
    h = n(981631),
    m = n(388032),
    g = (function (e) {
        return (e.SPOILER = 'spoiler'), (e.EXPLICIT_CONTENT = 'explicit_content'), (e.POTENTIAL_EXPLICIT_CONTENT = 'potential_explicit_content'), e;
    })({});
let E = (e, t) => {
        let { spoiler: n, flags: r = 0, content_scan_version: i } = e;
        if (t) {
            if ((0, a.Sv)(i)) return 'potential_explicit_content';
            if ((0, p.yE)(r, h.J0y.CONTAINS_EXPLICIT_MEDIA) || o.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n || (0, p.yE)(r, h.J0y.IS_SPOILER) ? 'spoiler' : null;
    },
    v = (e, t, n, r, i) => {
        let { flags: s = 0, contentScanVersion: l } = e,
            c = d.Z.getMessage(t, n);
        if (null == c) return null;
        if (i) {
            if (!c.author.bot && (0, a.Sv)(l)) return 'potential_explicit_content';
            if ((0, p.yE)(s, h.xPJ.CONTAINS_EXPLICIT_MEDIA) || o.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return r ? 'spoiler' : null;
    },
    b = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            { contentScanMetadata: i } = e;
        if (t) {
            if (!r && (0, a.oh)(i)) return 'potential_explicit_content';
            let e = null == i ? void 0 : i.flags;
            if ((null != e && (0, p.yE)(e, c.Cb.EXPLICIT)) || o.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n ? 'spoiler' : null;
    };
function y(e) {
    switch (e) {
        case l.Ah.EMBED:
            return a.lJ.Embed;
        case l.Ah.ATTACHMENT:
            return a.lJ.Attachment;
        default:
            return;
    }
}
function O(e, t, n) {
    if (null == e) return [!1, void 0];
    if (n && (0, a.Sv)(e.contentScanVersion)) return [!0, 'potential_explicit_content'];
    let r = y(e.type);
    return null != r &&
        (0, a.KP)(
            {
                type: r,
                media: e
            },
            n
        )
        ? [!0, 'explicit_content']
        : e.spoiler
          ? [t, 'spoiler']
          : [!1, void 0];
}
function S(e) {
    let { channel: t, media: n } = e,
        r = (0, i.e7)([f.Z], () => null != t && f.Z.can(h.Plq.MANAGE_MESSAGES, t)),
        o = u.cC.useSetting(),
        a = (0, s.m)();
    return O(n, !(0, _.Z)(o, r), a);
}
let I = (e) =>
    (0, r.EQ)(e)
        .with('explicit_content', () => m.NW.string(m.t.SEgHFh))
        .with('spoiler', () => m.NW.string(m.t.XpfDHx))
        .otherwise(() => void 0);
