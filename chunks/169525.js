n.d(t, {
    As: () => v,
    BP: () => E,
    MC: () => I,
    dn: () => g,
    hL: () => O,
    lK: () => b,
    wk: () => m
}),
    n(997841);
var r = n(399606),
    i = n(432877),
    a = n(247206),
    o = n(25610),
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
        let { spoiler: n, flags: r = 0, content_scan_version: o } = e;
        if (t) {
            if ((0, a.Sv)(o)) return 'potential_explicit_content';
            if ((0, f.yE)(r, p.J0y.CONTAINS_EXPLICIT_MEDIA) || i.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n || (0, f.yE)(r, p.J0y.IS_SPOILER) ? 'spoiler' : null;
    },
    E = (e, t, n, r, o) => {
        let { flags: s = 0, contentScanVersion: l } = e,
            c = u.Z.getMessage(t, n);
        if (null == c) return null;
        if (o) {
            if (!c.author.bot && (0, a.Sv)(l)) return 'potential_explicit_content';
            if ((0, f.yE)(s, p.xPJ.CONTAINS_EXPLICIT_MEDIA) || i.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return r ? 'spoiler' : null;
    },
    b = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            { contentScanMetadata: o } = e;
        if (t) {
            if (!r && (0, a.oh)(o)) return 'potential_explicit_content';
            let e = null == o ? void 0 : o.flags;
            if ((null != e && (0, f.yE)(e, l.Cb.EXPLICIT)) || i.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n ? 'spoiler' : null;
    };
function y(e) {
    switch (e) {
        case s.Ah.EMBED:
            return a.lJ.Embed;
        case s.Ah.ATTACHMENT:
            return a.lJ.Attachment;
        default:
            return;
    }
}
function v(e, t, n) {
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
function O(e) {
    let { channel: t, media: n } = e,
        i = (0, r.e7)([d.Z], () => null != t && d.Z.can(p.Plq.MANAGE_MESSAGES, t)),
        a = c.cC.useSetting(),
        s = (0, o.m)();
    return v(n, !(0, _.Z)(a, i), s);
}
let I = (e) => {
    switch (e) {
        case 'explicit_content':
            return h.intl.string(h.t.SEgHFh);
        case 'spoiler':
            return h.intl.string(h.t.XpfDHx);
        default:
            return;
    }
};
