e.d(s, { a: () => A });
var a = e(503698),
    r = e.n(a),
    n = e(933832),
    I = e(460905),
    t = e(597601),
    T = e(391242),
    o = e(477262),
    u = e(95635),
    k = e(27232),
    N = e(183623),
    l = e(797285),
    m = e(957485),
    K = e(451394),
    O = e(7807),
    P = e(473145),
    i = e(915143);
function A(c, s) {
    if (s) return { Icon: n.A, className: i.YR };
    switch (c) {
        case P.TP.EMOJI:
            return { Icon: I.n, className: r()(i.Kk, i.Zg) };
        case P.TP.AUDIO:
            return { Icon: t.L, className: r()(i.Kk, i.z7) };
        case P.TP.ANIMATED:
            return { Icon: T.O, className: r()(i.Kk, i.CS) };
        case P.TP.CUSTOMIZATION:
            return { Icon: o.s, className: r()(i.Kk, i.wk) };
        case P.TP.UPLOAD:
            return { Icon: u.J, className: r()(i.Kk, i.Se) };
        case P.TP.VANITY:
            return { Icon: k.G, className: r()(i.Kk, i.w4) };
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
