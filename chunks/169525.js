r.d(n, {
    As: function () {
        return A;
    },
    BP: function () {
        return I;
    },
    MC: function () {
        return N;
    },
    dn: function () {
        return b;
    },
    hL: function () {
        return C;
    },
    lK: function () {
        return T;
    },
    wk: function () {
        return i;
    }
});
var i,
    a = r(789020);
var o = r(627341);
var s = r(278074),
    l = r(399606),
    u = r(432877),
    c = r(247206),
    d = r(25610),
    f = r(368844),
    p = r(768494),
    h = r(695346),
    _ = r(375954),
    m = r(496675),
    g = r(630388),
    E = r(255269),
    v = r(981631),
    y = r(388032);
!(function (e) {
    (e.SPOILER = 'spoiler'), (e.EXPLICIT_CONTENT = 'explicit_content'), (e.POTENTIAL_EXPLICIT_CONTENT = 'potential_explicit_content');
})(i || (i = {}));
let b = (e, n) => {
        let { spoiler: r, flags: i = 0, content_scan_version: a } = e;
        if (n) {
            if ((0, c.Sv)(a)) return 'potential_explicit_content';
            if ((0, g.yE)(i, v.J0y.CONTAINS_EXPLICIT_MEDIA) || u.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return r || (0, g.yE)(i, v.J0y.IS_SPOILER) ? 'spoiler' : null;
    },
    I = (e, n, r, i, a) => {
        let { flags: o = 0, contentScanVersion: s } = e,
            l = _.Z.getMessage(n, r);
        if (null == l) return null;
        if (a) {
            if (!l.author.bot && (0, c.Sv)(s)) return 'potential_explicit_content';
            if ((0, g.yE)(o, v.xPJ.CONTAINS_EXPLICIT_MEDIA) || u.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return i ? 'spoiler' : null;
    },
    T = function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { contentScanMetadata: i } = e;
        if (n) {
            if ((0, c.oh)(i)) return 'potential_explicit_content';
            let { flags: e } = i;
            if ((0, g.yE)(e, p.Cb.EXPLICIT) || u.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return r ? 'spoiler' : null;
    };
function S(e) {
    switch (e) {
        case f.Ah.EMBED:
            return c.lJ.Embed;
        case f.Ah.ATTACHMENT:
            return c.lJ.Attachment;
        default:
            return;
    }
}
function A(e, n, r) {
    if (null == e) return [!1, void 0];
    if (r && (0, c.Sv)(e.contentScanVersion)) return [!0, 'potential_explicit_content'];
    let i = S(e.type);
    return null != i &&
        (0, c.KP)(
            {
                type: i,
                media: e
            },
            r
        )
        ? [!0, 'explicit_content']
        : e.spoiler
          ? [n, 'spoiler']
          : [!1, void 0];
}
function C(e) {
    let { channel: n, media: r } = e,
        i = (0, l.e7)([m.Z], () => null != n && m.Z.can(v.Plq.MANAGE_MESSAGES, n)),
        a = h.cC.useSetting(),
        o = (0, d.m)();
    return A(r, !(0, E.Z)(a, i), o);
}
let N = (e) =>
    (0, s.EQ)(e)
        .with('explicit_content', () => y.intl.string(y.t.SEgHFh))
        .with('spoiler', () => y.intl.string(y.t.XpfDHx))
        .otherwise(() => void 0);
