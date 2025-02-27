n.d(t, {
    G: () => P,
    Z: () => D
}),
    n(653041);
var r = n(200651),
    i = n(192379),
    o = n(873546),
    a = n(442837),
    s = n(911969),
    l = n(607070),
    c = n(998698),
    u = n(211242),
    d = n(540059),
    f = n(576645),
    _ = n(599659),
    p = n(286961),
    h = n(913663),
    g = n(117530),
    m = n(594174),
    E = n(74538),
    v = n(94161),
    b = n(9277),
    y = n(58995),
    O = n(655678),
    S = n(897291),
    I = n(466711),
    T = n(319417),
    N = n(728386),
    A = n(342203);
function C(e) {
    let { disabled: t, channel: n } = e,
        { enabled: i } = _.O.useExperiment({ location: 'gift-button' }),
        o = (0, p.Z)();
    return i
        ? (0, r.jsx)(y.Z, {
              disabled: t,
              channel: n
          })
        : null != o
          ? (0, r.jsx)(I.Z, {
                giftingPromotionConfig: o,
                disabled: t,
                channel: n
            })
          : (0, r.jsx)(S.Z, {
                disabled: t,
                channel: n
            });
}
function R(e) {
    var t, n, i, _, p, h, g;
    let { type: y, disabled: S, channel: I, handleSubmit: R, isEmpty: D, showAllButtons: w, children: L } = e,
        x = (0, a.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        M = P(I.id, y, D),
        { activeCommand: k, activeCommandOption: j } = (0, a.cj)([c.Z], () => ({
            activeCommand: c.Z.getActiveCommand(I.id),
            activeCommandOption: c.Z.getActiveOption(I.id)
        })),
        { paymentsBlocked: U } = u.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        G = [],
        B = !I.isDM() || void 0 === I.recipients || I.recipients.length > 1,
        V = (0, a.e7)([m.default], () => (B ? null : m.default.getUser(I.recipients[0]))),
        F = (0, d.R6)('ChannelTextAreaButtons'),
        Z = (0, f.Nt)() && (null === (t = y.confetti) || void 0 === t ? void 0 : t.button) != null;
    return (o.tq ||
        ((null === (p = y.gifts) || void 0 === p ? void 0 : p.button) != null &&
            null == k &&
            !U &&
            (null == V || E.ZP.isPremiumEligible(V)) &&
            G.push(
                (0, r.jsx)(
                    C,
                    {
                        disabled: S,
                        channel: I
                    },
                    'gift'
                )
            ),
        (null === (h = y.gifs) || void 0 === h ? void 0 : h.button) != null &&
            null == k &&
            w &&
            G.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        disabled: S,
                        type: y
                    },
                    'gif'
                )
            ),
        Z &&
            null == k &&
            G.push(
                (0, r.jsx)(
                    O.Z,
                    {
                        disabled: S,
                        channel: I
                    },
                    'confetti'
                )
            ),
        !Z &&
            (null === (g = y.stickers) || void 0 === g ? void 0 : g.button) != null &&
            null == k &&
            w &&
            G.push(
                (0, r.jsx)(
                    N.Z,
                    {
                        disabled: S,
                        type: y
                    },
                    'sticker'
                )
            )),
    (null === (n = y.emojis) || void 0 === n ? void 0 : n.button) != null &&
        (null == k || (null != j && j.type !== s.jw.ATTACHMENT)) &&
        G.push(
            (0, r.jsx)(
                v.Z,
                {
                    disabled: S,
                    type: y
                },
                'emoji'
            )
        ),
    F || null == L || G.push(L),
    (null === (i = y.submit) || void 0 === i ? void 0 : i.button) != null &&
        ((null === (_ = y.submit) || void 0 === _ ? void 0 : _.ignorePreference) || x) &&
        !F &&
        G.push(
            (0, r.jsx)(
                T.Z,
                {
                    onClick: R,
                    disabled: S || M
                },
                'submit'
            )
        ),
    F && null != L && G.push(L),
    0 === G.length)
        ? null
        : (0, r.jsx)('div', {
              className: A.buttons,
              children: G
          });
}
function P(e, t, n) {
    return (0, a.e7)([h.Z, g.Z], () => {
        let r = h.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === g.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let D = i.memo(R);
