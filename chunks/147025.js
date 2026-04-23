"use strict";
n.d(t, { A: () => O }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(607399),
    a = n(311907),
    o = n(155718),
    l = n(775602),
    u = n(33659),
    c = n(861382),
    d = n(86379),
    _ = n(670655),
    f = n(412260),
    p = n(852218),
    h = n(931664),
    E = n(522602),
    m = n(287809),
    g = n(927578),
    A = n(838324),
    I = n(184264),
    T = n(743477),
    S = n(336618),
    y = n(437839),
    N = n(559775),
    v = n(266599);
function C(e) {
    let { disabled: t, channel: n } = e;
    return (0, a.bG)([f.A], () => Object.keys(f.A.promotionsByType[p.pt.GIFT_PROMOTION]).length > 0)
        ? (0, r.jsx)(S.A, { disabled: t, channel: n })
        : (0, r.jsx)(T.A, { disabled: t, channel: n });
}
let O = i.memo(function (e) {
    var t, n, i;
    let { type: f, disabled: p, channel: T, handleSubmit: S, isEmpty: O, showAllButtons: R } = e,
        b = (0, a.bG)([l.A], () => l.A.isSubmitButtonEnabled),
        D =
            ((t = T.id),
            (n = f),
            (i = O),
            (0, a.bG)([h.A, E.A], () => {
                let e = h.A.getStickerPreview(t, n.drafts.type),
                    r = null != e && e.length > 0;
                return 0 === E.A.getUploads(t, n.drafts.type).length && i && !r;
            })),
        { activeCommand: L, activeCommandOption: w } = (0, a.cf)([c.A], () => ({
            activeCommand: c.A.getActiveCommand(T.id),
            activeCommandOption: c.A.getActiveOption(T.id),
        })),
        M = (0, d.dw)(),
        P = [],
        x = !T.isDM() || void 0 === T.recipients || T.recipients.length > 1,
        k = (0, a.bG)([m.default], () => (x ? null : m.default.getUser(T.recipients[0]))),
        U = (0, u.H)({ channel: T, chatInputType: f }),
        G = f.submit?.button != null && (f.submit?.ignorePreference || b);
    return (!s.Fr &&
        (f.gifts?.button != null &&
            null == L &&
            !M &&
            (null == k || g.Ay.isPremiumEligible(k)) &&
            P.push((0, r.jsx)(C, { disabled: p, channel: T }, "gift")),
        f.gifs?.button != null &&
            null == L &&
            R &&
            P.push((0, r.jsx)(I.A, { disabled: p, type: f, channel: T }, "gif")),
        f.stickers?.button != null &&
            null == L &&
            R &&
            P.push((0, r.jsx)(N.A, { disabled: p, type: f, channel: T }, "sticker"))),
    f.emojis?.button != null &&
        (null == L || (null != w && w.type !== o.n4.ATTACHMENT)) &&
        P.push((0, r.jsx)(A.A, { disabled: p, type: f, channelId: T.id }, "emoji")),
    U && P.push((0, r.jsx)(_.A, { channelId: T.id, type: f }, "appLauncher")),
    G && P.push((0, r.jsx)(y.A, { onClick: S, disabled: p || D }, "submit")),
    0 === P.length)
        ? null
        : (0, r.jsx)("div", { className: v.Uo, children: P });
});
