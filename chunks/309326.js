n.d(t, { a: () => E });
var i = n(503698),
    l = n.n(i),
    s = n(933832),
    r = n(460905),
    a = n(597601),
    o = n(391242),
    d = n(477262),
    c = n(95635),
    u = n(27232),
    m = n(183623),
    g = n(797285),
    h = n(179866),
    x = n(451394),
    _ = n(7807),
    p = n(473145),
    A = n(915143);
function E(e, t) {
    if (t) return { Icon: s.A, className: A.YR };
    switch (e) {
        case p.TP.EMOJI:
            return { Icon: r.n, className: l()(A.Kk, A.Zg) };
        case p.TP.AUDIO:
            return { Icon: a.L, className: l()(A.Kk, A.z7) };
        case p.TP.ANIMATED:
            return { Icon: o.O, className: l()(A.Kk, A.CS) };
        case p.TP.CUSTOMIZATION:
            return { Icon: d.s, className: l()(A.Kk, A.wk) };
        case p.TP.UPLOAD:
            return { Icon: c.J, className: l()(A.Kk, A.Se) };
        case p.TP.VANITY:
            return { Icon: u.G, className: l()(A.Kk, A.w4) };
        case p.TP.STREAM:
            return { Icon: m.F, className: l()(A.Kk, A.Td) };
        case p.TP.STICKER:
            return { Icon: g.t, className: l()(A.Kk, A.yI) };
        case p.TP.CUSTOM_ROLE_ICON:
            return { Icon: h.i, className: l()(A.Kk, A.ru) };
        case p.TP.STAGE_VIDEO:
            return { Icon: x.q, className: l()(A.Kk, A.dw) };
        case p.TP.SOUNDBOARD:
            return { Icon: _.J, className: l()(A.Kk, A.CC) };
    }
    throw Error(`Unexpected perk icon ${e}`);
}
