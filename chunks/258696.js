n.d(t, {
    G: () => L,
    Z: () => M
}),
    n(47120),
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
    f = n(111810),
    p = n(276444),
    _ = n(599659),
    h = n(963198),
    m = n(286961),
    g = n(913663),
    E = n(117530),
    v = n(594174),
    b = n(74538),
    y = n(94161),
    O = n(9277),
    S = n(58995),
    I = n(655678),
    T = n(897291),
    N = n(466711),
    A = n(764794),
    C = n(319417),
    R = n(728386),
    P = n(474936),
    w = n(342203);
function D(e) {
    let { disabled: t, channel: n } = e,
        { enabled: i } = _.O.useExperiment({ location: 'gift-button' }),
        o = (0, m.Z)();
    return i
        ? (0, r.jsx)(S.Z, {
              disabled: t,
              channel: n
          })
        : null != o
          ? (0, r.jsx)(N.Z, {
                giftingPromotionConfig: o,
                disabled: t,
                channel: n
            })
          : (0, r.jsx)(T.Z, {
                disabled: t,
                channel: n
            });
}
function x(e) {
    var t, n, i, _, m, g, E, S, T;
    let { type: N, disabled: x, channel: M, handleSubmit: k, isEmpty: j, showAllButtons: U, children: G } = e,
        B = (0, a.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        Z = L(M.id, N, j),
        { activeCommand: F, activeCommandOption: V } = (0, a.cj)([c.Z], () => ({
            activeCommand: c.Z.getActiveCommand(M.id),
            activeCommandOption: c.Z.getActiveOption(M.id)
        })),
        { paymentsBlocked: H } = u.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        W = [],
        { enabled: Y } = h.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        K = v.default.getCurrentUser(),
        z = null !== (m = (0, a.e7)([p.Z], () => (Y && b.ZP.isPremiumExactly(K, P.p9.TIER_2) ? p.Z.getReferralsRemaining() : 0))) && void 0 !== m ? m : 0,
        q = (0, a.e7)([p.Z], () => {
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || !Y) return !1;
            let e = M.recipients[0];
            return p.Z.getSentUserIds().includes(e);
        }),
        Q = (0, a.e7)([v.default], () => (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 ? null : v.default.getUser(M.recipients[0]))),
        [X, J] = (0, a.Wu)([p.Z], () => {
            let e = [!1, !1];
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || null == Q || Q.bot) return e;
            let t = q || z > 0,
                n = p.Z.getRecipientEligibility(Q.id);
            return [Y && t && n, n];
        }),
        $ = (0, d.R6)('ChannelTextAreaButtons'),
        ee = (0, f.V1)('ChannelTextAreaButtons') && (null === (t = N.confetti) || void 0 === t ? void 0 : t.button) != null;
    return (o.tq ||
        (M.isDM() &&
            (null === (g = N.gifts) || void 0 === g ? void 0 : g.button) != null &&
            null == F &&
            (b.ZP.isPremiumExactly(K, P.p9.TIER_2) && J && h.Z.trackExposure({ location: 'dc120b_5' }),
            X &&
                W.push(
                    (0, r.jsx)(
                        A.Z,
                        {
                            disabled: x,
                            referralsRemaining: z,
                            channel: M,
                            isResending: q
                        },
                        'referral'
                    )
                )),
        (null === (E = N.gifts) || void 0 === E ? void 0 : E.button) != null &&
            null == F &&
            !H &&
            (null == Q || b.ZP.isPremiumEligible(Q)) &&
            W.push(
                (0, r.jsx)(
                    D,
                    {
                        disabled: x,
                        channel: M
                    },
                    'gift'
                )
            ),
        (null === (S = N.gifs) || void 0 === S ? void 0 : S.button) != null &&
            null == F &&
            U &&
            W.push(
                (0, r.jsx)(
                    O.Z,
                    {
                        disabled: x,
                        type: N
                    },
                    'gif'
                )
            ),
        ee &&
            null == F &&
            W.push(
                (0, r.jsx)(
                    I.Z,
                    {
                        disabled: x,
                        channel: M
                    },
                    'confetti'
                )
            ),
        !ee &&
            (null === (T = N.stickers) || void 0 === T ? void 0 : T.button) != null &&
            null == F &&
            U &&
            W.push(
                (0, r.jsx)(
                    R.Z,
                    {
                        disabled: x,
                        type: N
                    },
                    'sticker'
                )
            )),
    (null === (n = N.emojis) || void 0 === n ? void 0 : n.button) != null &&
        (null == F || (null != V && V.type !== s.jw.ATTACHMENT)) &&
        W.push(
            (0, r.jsx)(
                y.Z,
                {
                    disabled: x,
                    type: N
                },
                'emoji'
            )
        ),
    $ || null == G || W.push(G),
    (null === (i = N.submit) || void 0 === i ? void 0 : i.button) != null &&
        ((null === (_ = N.submit) || void 0 === _ ? void 0 : _.ignorePreference) || B) &&
        !$ &&
        W.push(
            (0, r.jsx)(
                C.Z,
                {
                    onClick: k,
                    disabled: x || Z
                },
                'submit'
            )
        ),
    $ && null != G && W.push(G),
    0 === W.length)
        ? null
        : (0, r.jsx)('div', {
              className: w.buttons,
              children: W
          });
}
function L(e, t, n) {
    return (0, a.e7)([g.Z, E.Z], () => {
        let r = g.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === E.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let M = i.memo(x);
