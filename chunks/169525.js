n.d(t, {
    As: () => v,
    BP: () => E,
    MC: () => I,
    dn: () => g,
    hL: () => O,
    lK: () => b,
    wk: () => m
}),
    n(789020);
var r = n(399606),
    i = n(432877),
    o = n(247206),
    a = n(25610),
    s = n(368844),
    l = n(768494),
    c = n(695346),
    u = n(375954),
    d = n(496675),
    f = n(630388),
    _ = n(255269),
    p = n(981631),
    h = n(388032),
    m = (function (e) {
        return (e.SPOILER = 'spoiler'), (e.EXPLICIT_CONTENT = 'explicit_content'), (e.POTENTIAL_EXPLICIT_CONTENT = 'potential_explicit_content'), e;
    })({});
let g = (e, t) => {
        let { spoiler: n, flags: r = 0, content_scan_version: a } = e;
        if (t) {
            if ((0, o.Sv)(a)) return 'potential_explicit_content';
            if ((0, f.yE)(r, p.J0y.CONTAINS_EXPLICIT_MEDIA) || i.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n || (0, f.yE)(r, p.J0y.IS_SPOILER) ? 'spoiler' : null;
    },
    E = (e, t, n, r, a) => {
        let { flags: s = 0, contentScanVersion: l } = e,
            c = u.Z.getMessage(t, n);
        if (null == c) return null;
        if (a) {
            if (!c.author.bot && (0, o.Sv)(l)) return 'potential_explicit_content';
            if ((0, f.yE)(s, p.xPJ.CONTAINS_EXPLICIT_MEDIA) || i.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return r ? 'spoiler' : null;
    },
    b = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            { contentScanMetadata: a } = e;
        if (t) {
            if (!r && (0, o.oh)(a)) return 'potential_explicit_content';
            let e = null == a ? void 0 : a.flags;
            if ((null != e && (0, f.yE)(e, l.Cb.EXPLICIT)) || i.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n ? 'spoiler' : null;
    };
function y(e) {
    switch (e) {
        case s.Ah.EMBED:
            return o.lJ.Embed;
        case s.Ah.ATTACHMENT:
            return o.lJ.Attachment;
        default:
            return;
    }
}
function v(e, t, n) {
    if (null == e) return [!1, void 0];
    if (n && (0, o.Sv)(e.contentScanVersion)) return [!0, 'potential_explicit_content'];
    let r = y(e.type);
    return null != r &&
        (0, o.KP)(
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
function O(e) {
    let { channel: t, media: n } = e,
        i = (0, r.e7)([d.Z], () => null != t && d.Z.can(p.Plq.MANAGE_MESSAGES, t)),
        o = c.cC.useSetting(),
        s = (0, a.m)();
    return v(n, !(0, _.Z)(o, i), s);
}
let I = (e) => {
    switch (e) {
        case 'explicit_content':
            return h.NW.string(h.t.SEgHFh);
        case 'spoiler':
            return h.NW.string(h.t.XpfDHx);
        default:
            return;
    }
};
