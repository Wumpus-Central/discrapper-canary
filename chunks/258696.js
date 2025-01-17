r.d(n, {
    G: function () {
        return U;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(873546),
    u = r(442837),
    c = r(911969),
    d = r(607070),
    f = r(998698),
    _ = r(211242),
    h = r(540059),
    p = r(111810),
    m = r(276444),
    g = r(599659),
    E = r(963198),
    v = r(286961),
    I = r(913663),
    T = r(117530),
    b = r(594174),
    y = r(74538),
    S = r(94161),
    A = r(9277),
    N = r(58995),
    C = r(655678),
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
        ? (0, s.jsx)(N.Z, {
              disabled: n,
              channel: r
          })
        : null != a
          ? (0, s.jsx)(O.Z, {
                giftingPromotionConfig: a,
                disabled: n,
                channel: r
            })
          : (0, s.jsx)(R.Z, {
                disabled: n,
                channel: r
            });
}
function k(e) {
    var n, r, i, a, o, g, v, I, T;
    let { type: N, disabled: R, channel: O, handleSubmit: k, isEmpty: B, showAllButtons: G, children: Z } = e,
        F = (0, u.e7)([d.Z], () => d.Z.isSubmitButtonEnabled),
        V = U(O.id, N, B),
        { activeCommand: j, activeCommandOption: H } = (0, u.cj)([f.Z], () => ({
            activeCommand: f.Z.getActiveCommand(O.id),
            activeCommandOption: f.Z.getActiveOption(O.id)
        })),
        { paymentsBlocked: Y } = _.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        W = [],
        { enabled: K } = E.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        z = b.default.getCurrentUser(),
        q = null !== (o = (0, u.e7)([m.Z], () => (K && y.ZP.isPremiumExactly(z, w.p9.TIER_2) ? m.Z.getReferralsRemaining() : 0))) && void 0 !== o ? o : 0,
        Q = (0, u.e7)([m.Z], () => {
            if (!O.isDM() || void 0 === O.recipients || O.recipients.length > 1 || !K) return !1;
            let e = O.recipients[0];
            return m.Z.getSentUserIds().includes(e);
        }),
        X = (0, u.e7)([b.default], () => (!O.isDM() || void 0 === O.recipients || O.recipients.length > 1 ? null : b.default.getUser(O.recipients[0]))),
        [J, $] = (0, u.Wu)([m.Z], () => {
            let e = [!1, !1];
            if (!O.isDM() || void 0 === O.recipients || O.recipients.length > 1 || null == X || X.bot) return e;
            let n = Q || q > 0,
                r = m.Z.getRecipientEligibility(X.id);
            return [K && n && r, r];
        }),
        ee = (0, h.Q3)('ChannelTextAreaButtons'),
        et = (0, p.V1)('ChannelTextAreaButtons') && (null === (n = N.confetti) || void 0 === n ? void 0 : n.button) != null;
    return (!l.tq &&
        (O.isDM() &&
            (null === (g = N.gifts) || void 0 === g ? void 0 : g.button) != null &&
            null == j &&
            (y.ZP.isPremiumExactly(z, w.p9.TIER_2) && $ && E.Z.trackExposure({ location: 'dc120b_5' }),
            J &&
                W.push(
                    (0, s.jsx)(
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
        (null === (v = N.gifts) || void 0 === v ? void 0 : v.button) != null &&
            null == j &&
            !Y &&
            (null == X || y.ZP.isPremiumEligible(X)) &&
            W.push(
                (0, s.jsx)(
                    M,
                    {
                        disabled: R,
                        channel: O
                    },
                    'gift'
                )
            ),
        (null === (I = N.gifs) || void 0 === I ? void 0 : I.button) != null &&
            null == j &&
            G &&
            W.push(
                (0, s.jsx)(
                    A.Z,
                    {
                        disabled: R,
                        type: N
                    },
                    'gif'
                )
            ),
        et && null == j && W.push((0, s.jsx)(C.Z, { disabled: R }, 'confetti')),
        !et &&
            (null === (T = N.stickers) || void 0 === T ? void 0 : T.button) != null &&
            null == j &&
            G &&
            W.push(
                (0, s.jsx)(
                    x.Z,
                    {
                        disabled: R,
                        type: N
                    },
                    'sticker'
                )
            )),
    (null === (r = N.emojis) || void 0 === r ? void 0 : r.button) != null &&
        (null == j || (null != H && H.type !== c.jw.ATTACHMENT)) &&
        W.push(
            (0, s.jsx)(
                S.Z,
                {
                    disabled: R,
                    type: N
                },
                'emoji'
            )
        ),
    (null === (i = N.submit) || void 0 === i ? void 0 : i.button) != null &&
        ((null === (a = N.submit) || void 0 === a ? void 0 : a.ignorePreference) || F) &&
        !ee &&
        W.push(
            (0, s.jsx)(
                L.Z,
                {
                    onClick: k,
                    disabled: R || V
                },
                'submit'
            )
        ),
    null != Z && W.push(Z),
    0 === W.length)
        ? null
        : (0, s.jsx)('div', {
              className: P.buttons,
              children: W
          });
}
function U(e, n, r) {
    return (0, u.e7)([I.Z, T.Z], () => {
        let i = I.Z.getStickerPreview(e, n.drafts.type),
            a = null != i && i.length > 0;
        return 0 === T.Z.getUploads(e, n.drafts.type).length && r && !a;
    });
}
n.Z = o.memo(k);
