e.d(a, { a: () => p });
var s = e(503698),
    r = e.n(s),
    n = e(933832),
    I = e(460905),
    o = e(597601),
    t = e(391242),
    T = e(477262),
    k = e(95635),
    u = e(27232),
    N = e(183623),
    l = e(797285),
    m = e(957485),
    K = e(451394),
    O = e(7807),
    P = e(473145),
    i = e(339578);
function p(c, a) {
    if (a) return { Icon: n.CheckmarkLargeIcon, className: i.YR };
    switch (c) {
        case P.TP.EMOJI:
            return { Icon: I.n, className: r()(i.Kk, i.Zg) };
        case P.TP.AUDIO:
            return { Icon: o.L, className: r()(i.Kk, i.z7) };
        case P.TP.ANIMATED:
            return { Icon: t.O, className: r()(i.Kk, i.CS) };
        case P.TP.CUSTOMIZATION:
            return { Icon: T.s, className: r()(i.Kk, i.wk) };
        case P.TP.UPLOAD:
            return { Icon: k.UploadIcon, className: r()(i.Kk, i.Se) };
        case P.TP.VANITY:
            return { Icon: u.StarIcon, className: r()(i.Kk, i.w4) };
        case P.TP.STREAM:
            return { Icon: N.F, className: r()(i.Kk, i.Td) };
        case P.TP.STICKER:
            return { Icon: l.t, className: r()(i.Kk, i.yI) };
        case P.TP.CUSTOM_ROLE_ICON:
            return { Icon: m.i, className: r()(i.Kk, i.ru) };
        case P.TP.STAGE_VIDEO:
            return { Icon: K.q, className: r()(i.Kk, i.dw) };
        case P.TP.SOUNDBOARD:
            return { Icon: O.J, className: r()(i.Kk, i.CC) };
    }
    throw Error(`Unexpected perk icon ${c}`);
}
