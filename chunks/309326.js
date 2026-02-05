"use strict";
n.d(t, { a: () => o });
var i = n(503698),
    s = n.n(i),
    l = n(397927),
    r = n(473145),
    a = n(946084);
function o(e, t) {
    if (t) return { Icon: l.A9s, className: a.YR };
    switch (e) {
        case r.TP.EMOJI:
            return { Icon: l.nm2, className: s()(a.Kk, a.Zg) };
        case r.TP.AUDIO:
            return { Icon: l.LoC, className: s()(a.Kk, a.z7) };
        case r.TP.ANIMATED:
            return { Icon: l.Osp, className: s()(a.Kk, a.CS) };
        case r.TP.CUSTOMIZATION:
            return { Icon: l.sYc, className: s()(a.Kk, a.wk) };
        case r.TP.UPLOAD:
            return { Icon: l.JMY, className: s()(a.Kk, a.Se) };
        case r.TP.VANITY:
            return { Icon: l.Gg5, className: s()(a.Kk, a.w4) };
        case r.TP.STREAM:
            return { Icon: l.Fzq, className: s()(a.Kk, a.Td) };
        case r.TP.STICKER:
            return { Icon: l.tEP, className: s()(a.Kk, a.yI) };
        case r.TP.CUSTOM_ROLE_ICON:
            return { Icon: l.iTF, className: s()(a.Kk, a.ru) };
        case r.TP.STAGE_VIDEO:
            return { Icon: l.qux, className: s()(a.Kk, a.dw) };
        case r.TP.SOUNDBOARD:
            return { Icon: l.JMI, className: s()(a.Kk, a.CC) };
    }
    throw Error(`Unexpected perk icon ${e}`);
}
