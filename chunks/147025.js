"use strict";
n.d(t, { A: () => O }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(607399),
    s = n(311907),
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
    g = n(287809),
    E = n(927578),
    A = n(838324),
    I = n(184264),
    T = n(743477),
    y = n(336618),
    S = n(437839),
    v = n(559775),
    C = n(111314);
function b(e) {
    let { disabled: t, channel: n } = e;
    return (0, s.bG)([f.A], () => Object.keys(f.A.promotionsByType[p.pt.GIFT_PROMOTION]).length > 0)
        ? (0, r.jsx)(y.A, { disabled: t, channel: n })
        : (0, r.jsx)(T.A, { disabled: t, channel: n });
}
function N(e) {
    let { type: t, disabled: n, channel: i, handleSubmit: f, isEmpty: p, showAllButtons: h } = e,
        m = (0, s.bG)([l.A], () => l.A.isSubmitButtonEnabled),
        T = R(i.id, t, p),
        { activeCommand: y, activeCommandOption: N } = (0, s.cf)([c.A], () => ({
            activeCommand: c.A.getActiveCommand(i.id),
            activeCommandOption: c.A.getActiveOption(i.id),
        })),
        { paymentsBlocked: O } = d.A.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        D = [],
        L = !i.isDM() || void 0 === i.recipients || i.recipients.length > 1,
        w = (0, s.bG)([g.default], () => (L ? null : g.default.getUser(i.recipients[0]))),
        x = (0, u.H)({ channel: i, chatInputType: t }),
        P = t.submit?.button != null && (t.submit?.ignorePreference || m);
    return (!a.Fr &&
        (t.gifts?.button != null &&
            null == y &&
            !O &&
            (null == w || E.Ay.isPremiumEligible(w)) &&
            D.push((0, r.jsx)(b, { disabled: n, channel: i }, "gift")),
        t.gifs?.button != null &&
            null == y &&
            h &&
            D.push((0, r.jsx)(I.A, { disabled: n, type: t, channel: i }, "gif")),
        t.stickers?.button != null &&
            null == y &&
            h &&
            D.push((0, r.jsx)(v.A, { disabled: n, type: t, channel: i }, "sticker"))),
    t.emojis?.button != null &&
        (null == y || (null != N && N.type !== o.n4.ATTACHMENT)) &&
        D.push((0, r.jsx)(A.A, { disabled: n, type: t, channelId: i.id }, "emoji")),
    x && D.push((0, r.jsx)(_.A, { channelId: i.id, type: t }, "appLauncher")),
    P && D.push((0, r.jsx)(S.A, { onClick: f, disabled: n || T }, "submit")),
    0 === D.length)
        ? null
        : (0, r.jsx)("div", { className: C.Uo, children: D });
}
function R(e, t, n) {
    return (0, s.bG)([h.A, m.A], () => {
        let r = h.A.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === m.A.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let O = i.memo(N);
