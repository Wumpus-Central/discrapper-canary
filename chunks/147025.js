"use strict";
n.d(t, { A: () => b }), n(321073);
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
    m = n(522602),
    E = n(287809),
    g = n(927578),
    A = n(838324),
    I = n(184264),
    T = n(743477),
    S = n(336618),
    y = n(437839),
    v = n(559775),
    N = n(111314);
function C(e) {
    let { disabled: t, channel: n } = e;
    return (0, a.bG)([f.A], () => Object.keys(f.A.promotionsByType[p.pt.GIFT_PROMOTION]).length > 0)
        ? (0, r.jsx)(S.A, { disabled: t, channel: n })
        : (0, r.jsx)(T.A, { disabled: t, channel: n });
}
function R(e) {
    let { type: t, disabled: n, channel: i, handleSubmit: f, isEmpty: p, showAllButtons: h } = e,
        m = (0, a.bG)([l.A], () => l.A.isSubmitButtonEnabled),
        T = O(i.id, t, p),
        { activeCommand: S, activeCommandOption: R } = (0, a.cf)([c.A], () => ({
            activeCommand: c.A.getActiveCommand(i.id),
            activeCommandOption: c.A.getActiveOption(i.id),
        })),
        b = (0, d.dw)(),
        D = [],
        L = !i.isDM() || void 0 === i.recipients || i.recipients.length > 1,
        w = (0, a.bG)([E.default], () => (L ? null : E.default.getUser(i.recipients[0]))),
        M = (0, u.H)({ channel: i, chatInputType: t }),
        x = t.submit?.button != null && (t.submit?.ignorePreference || m);
    return (!s.Fr &&
        (t.gifts?.button != null &&
            null == S &&
            !b &&
            (null == w || g.Ay.isPremiumEligible(w)) &&
            D.push((0, r.jsx)(C, { disabled: n, channel: i }, "gift")),
        t.gifs?.button != null &&
            null == S &&
            h &&
            D.push((0, r.jsx)(I.A, { disabled: n, type: t, channel: i }, "gif")),
        t.stickers?.button != null &&
            null == S &&
            h &&
            D.push((0, r.jsx)(v.A, { disabled: n, type: t, channel: i }, "sticker"))),
    t.emojis?.button != null &&
        (null == S || (null != R && R.type !== o.n4.ATTACHMENT)) &&
        D.push((0, r.jsx)(A.A, { disabled: n, type: t, channelId: i.id }, "emoji")),
    M && D.push((0, r.jsx)(_.A, { channelId: i.id, type: t }, "appLauncher")),
    x && D.push((0, r.jsx)(y.A, { onClick: f, disabled: n || T }, "submit")),
    0 === D.length)
        ? null
        : (0, r.jsx)("div", { className: N.Uo, children: D });
}
function O(e, t, n) {
    return (0, a.bG)([h.A, m.A], () => {
        let r = h.A.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === m.A.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let b = i.memo(R);
