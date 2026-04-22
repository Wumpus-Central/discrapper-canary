"use strict";
n.d(t, { A: () => N }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(607399),
    r = n(311907),
    a = n(155718),
    o = n(775602),
    c = n(33659),
    u = n(861382),
    d = n(86379),
    h = n(670655),
    m = n(412260),
    p = n(852218),
    f = n(931664),
    g = n(522602),
    _ = n(287809),
    x = n(927578),
    A = n(838324),
    C = n(184264),
    E = n(743477),
    I = n(336618),
    v = n(437839),
    y = n(559775),
    S = n(266599);
function b(e) {
    let { disabled: t, channel: n } = e;
    return (0, r.bG)([m.A], () => Object.keys(m.A.promotionsByType[p.pt.GIFT_PROMOTION]).length > 0)
        ? (0, i.jsx)(I.A, { disabled: t, channel: n })
        : (0, i.jsx)(E.A, { disabled: t, channel: n });
}
let N = l.memo(function (e) {
    var t, n, l;
    let { type: m, disabled: p, channel: E, handleSubmit: I, isEmpty: N, showAllButtons: T } = e,
        j = (0, r.bG)([o.A], () => o.A.isSubmitButtonEnabled),
        R =
            ((t = E.id),
            (n = m),
            (l = N),
            (0, r.bG)([f.A, g.A], () => {
                let e = f.A.getStickerPreview(t, n.drafts.type),
                    i = null != e && e.length > 0;
                return 0 === g.A.getUploads(t, n.drafts.type).length && l && !i;
            })),
        { activeCommand: w, activeCommandOption: L } = (0, r.cf)([u.A], () => ({
            activeCommand: u.A.getActiveCommand(E.id),
            activeCommandOption: u.A.getActiveOption(E.id),
        })),
        M = (0, d.dw)(),
        k = [],
        O = !E.isDM() || void 0 === E.recipients || E.recipients.length > 1,
        P = (0, r.bG)([_.default], () => (O ? null : _.default.getUser(E.recipients[0]))),
        D = (0, c.H)({ channel: E, chatInputType: m }),
        U = m.submit?.button != null && (m.submit?.ignorePreference || j);
    return (!s.Fr &&
        (m.gifts?.button != null &&
            null == w &&
            !M &&
            (null == P || x.Ay.isPremiumEligible(P)) &&
            k.push((0, i.jsx)(b, { disabled: p, channel: E }, "gift")),
        m.gifs?.button != null &&
            null == w &&
            T &&
            k.push((0, i.jsx)(C.A, { disabled: p, type: m, channel: E }, "gif")),
        m.stickers?.button != null &&
            null == w &&
            T &&
            k.push((0, i.jsx)(y.A, { disabled: p, type: m, channel: E }, "sticker"))),
    m.emojis?.button != null &&
        (null == w || (null != L && L.type !== a.n4.ATTACHMENT)) &&
        k.push((0, i.jsx)(A.A, { disabled: p, type: m, channelId: E.id }, "emoji")),
    D && k.push((0, i.jsx)(h.A, { channelId: E.id, type: m }, "appLauncher")),
    U && k.push((0, i.jsx)(v.A, { onClick: I, disabled: p || R }, "submit")),
    0 === k.length)
        ? null
        : (0, i.jsx)("div", { className: S.Uo, children: k });
});
