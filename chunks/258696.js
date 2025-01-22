r.d(n, {
    G: function () {
        return U;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(200651),
    s = r(192379),
    l = r(873546),
    u = r(442837),
    c = r(911969),
    d = r(607070),
    f = r(998698),
    p = r(211242),
    h = r(540059),
    _ = r(111810),
    m = r(276444),
    g = r(599659),
    E = r(963198),
    v = r(286961),
    y = r(913663),
    b = r(117530),
    I = r(594174),
    T = r(74538),
    S = r(94161),
    A = r(9277),
    C = r(58995),
    N = r(655678),
    R = r(897291),
    O = r(466711),
    D = r(764794),
    L = r(319417),
    x = r(728386),
    w = r(474936),
    P = r(553796);
function M(e) {
    let { disabled: n, channel: r } = e,
        { enabled: i } = g.O.useExperiment({ location: 'gift-button' }),
        a = (0, v.Z)();
    return i
        ? (0, o.jsx)(C.Z, {
              disabled: n,
              channel: r
          })
        : null != a
          ? (0, o.jsx)(O.Z, {
                giftingPromotionConfig: a,
                disabled: n,
                channel: r
            })
          : (0, o.jsx)(R.Z, {
                disabled: n,
                channel: r
            });
}
function k(e) {
    var n, r, i, a, s, g, v, y, b;
    let { type: C, disabled: R, channel: O, handleSubmit: k, isEmpty: B, showAllButtons: G, children: Z } = e,
        F = (0, u.e7)([d.Z], () => d.Z.isSubmitButtonEnabled),
        V = U(O.id, C, B),
        { activeCommand: j, activeCommandOption: H } = (0, u.cj)([f.Z], () => ({
            activeCommand: f.Z.getActiveCommand(O.id),
            activeCommandOption: f.Z.getActiveOption(O.id)
        })),
        { paymentsBlocked: Y } = p.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        W = [],
        { enabled: K } = E.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        z = I.default.getCurrentUser(),
        q = null !== (s = (0, u.e7)([m.Z], () => (K && T.ZP.isPremiumExactly(z, w.p9.TIER_2) ? m.Z.getReferralsRemaining() : 0))) && void 0 !== s ? s : 0,
        Q = (0, u.e7)([m.Z], () => {
            if (!O.isDM() || void 0 === O.recipients || O.recipients.length > 1 || !K) return !1;
            let e = O.recipients[0];
            return m.Z.getSentUserIds().includes(e);
        }),
        X = (0, u.e7)([I.default], () => (!O.isDM() || void 0 === O.recipients || O.recipients.length > 1 ? null : I.default.getUser(O.recipients[0]))),
        [J, $] = (0, u.Wu)([m.Z], () => {
            let e = [!1, !1];
            if (!O.isDM() || void 0 === O.recipients || O.recipients.length > 1 || null == X || X.bot) return e;
            let n = Q || q > 0,
                r = m.Z.getRecipientEligibility(X.id);
            return [K && n && r, r];
        }),
        ee = (0, h.R6)('ChannelTextAreaButtons'),
        et = (0, _.V1)('ChannelTextAreaButtons') && (null === (n = C.confetti) || void 0 === n ? void 0 : n.button) != null;
    return (!l.tq &&
        (O.isDM() &&
            (null === (g = C.gifts) || void 0 === g ? void 0 : g.button) != null &&
            null == j &&
            (T.ZP.isPremiumExactly(z, w.p9.TIER_2) && $ && E.Z.trackExposure({ location: 'dc120b_5' }),
            J &&
                W.push(
                    (0, o.jsx)(
                        D.Z,
                        {
                            disabled: R,
                            referralsRemaining: q,
                            channel: O,
                            isResending: Q
                        },
                        'referral'
                    )
                )),
        (null === (v = C.gifts) || void 0 === v ? void 0 : v.button) != null &&
            null == j &&
            !Y &&
            (null == X || T.ZP.isPremiumEligible(X)) &&
            W.push(
                (0, o.jsx)(
                    M,
                    {
                        disabled: R,
                        channel: O
                    },
                    'gift'
                )
            ),
        (null === (y = C.gifs) || void 0 === y ? void 0 : y.button) != null &&
            null == j &&
            G &&
            W.push(
                (0, o.jsx)(
                    A.Z,
                    {
                        disabled: R,
                        type: C
                    },
                    'gif'
                )
            ),
        et &&
            null == j &&
            W.push(
                (0, o.jsx)(
                    N.Z,
                    {
                        disabled: R,
                        channelId: O.id
                    },
                    'confetti'
                )
            ),
        !et &&
            (null === (b = C.stickers) || void 0 === b ? void 0 : b.button) != null &&
            null == j &&
            G &&
            W.push(
                (0, o.jsx)(
                    x.Z,
                    {
                        disabled: R,
                        type: C
                    },
                    'sticker'
                )
            )),
    (null === (r = C.emojis) || void 0 === r ? void 0 : r.button) != null &&
        (null == j || (null != H && H.type !== c.jw.ATTACHMENT)) &&
        W.push(
            (0, o.jsx)(
                S.Z,
                {
                    disabled: R,
                    type: C
                },
                'emoji'
            )
        ),
    !ee && null != Z && W.push(Z),
    (null === (i = C.submit) || void 0 === i ? void 0 : i.button) != null &&
        ((null === (a = C.submit) || void 0 === a ? void 0 : a.ignorePreference) || F) &&
        !ee &&
        W.push(
            (0, o.jsx)(
                L.Z,
                {
                    onClick: k,
                    disabled: R || V
                },
                'submit'
            )
        ),
    ee && null != Z && W.push(Z),
    0 === W.length)
        ? null
        : (0, o.jsx)('div', {
              className: P.buttons,
              children: W
          });
}
function U(e, n, r) {
    return (0, u.e7)([y.Z, b.Z], () => {
        let i = y.Z.getStickerPreview(e, n.drafts.type),
            a = null != i && i.length > 0;
        return 0 === b.Z.getUploads(e, n.drafts.type).length && r && !a;
    });
}
n.Z = s.memo(k);
