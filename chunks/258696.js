n.d(t, {
    G: () => P,
    Z: () => M
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    a = n(873546),
    s = n(442837),
    o = n(911969),
    l = n(607070),
    u = n(998698),
    c = n(211242),
    d = n(540059),
    f = n(111810),
    _ = n(276444),
    p = n(599659),
    h = n(963198),
    m = n(286961),
    g = n(913663),
    E = n(117530),
    v = n(594174),
    y = n(74538),
    I = n(94161),
    T = n(9277),
    b = n(58995),
    S = n(655678),
    A = n(897291),
    N = n(466711),
    C = n(764794),
    R = n(319417),
    O = n(728386),
    D = n(474936),
    L = n(446016);
function x(e) {
    let { disabled: t, channel: n } = e,
        { enabled: r } = p.O.useExperiment({ location: 'gift-button' }),
        a = (0, m.Z)();
    return r
        ? (0, i.jsx)(b.Z, {
              disabled: t,
              channel: n
          })
        : null != a
          ? (0, i.jsx)(N.Z, {
                giftingPromotionConfig: a,
                disabled: t,
                channel: n
            })
          : (0, i.jsx)(A.Z, {
                disabled: t,
                channel: n
            });
}
function w(e) {
    var t, n, r, p, m, g, E, b, A;
    let { type: N, disabled: w, channel: M, handleSubmit: k, isEmpty: U, showAllButtons: G, children: B } = e,
        Z = (0, s.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        F = P(M.id, N, U),
        { activeCommand: V, activeCommandOption: j } = (0, s.cj)([u.Z], () => ({
            activeCommand: u.Z.getActiveCommand(M.id),
            activeCommandOption: u.Z.getActiveOption(M.id)
        })),
        { paymentsBlocked: H } = c.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        Y = [],
        { enabled: W } = h.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        K = v.default.getCurrentUser(),
        z = null !== (m = (0, s.e7)([_.Z], () => (W && y.ZP.isPremiumExactly(K, D.p9.TIER_2) ? _.Z.getReferralsRemaining() : 0))) && void 0 !== m ? m : 0,
        q = (0, s.e7)([_.Z], () => {
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || !W) return !1;
            let e = M.recipients[0];
            return _.Z.getSentUserIds().includes(e);
        }),
        Q = (0, s.e7)([v.default], () => (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 ? null : v.default.getUser(M.recipients[0]))),
        [X, J] = (0, s.Wu)([_.Z], () => {
            let e = [!1, !1];
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || null == Q || Q.bot) return e;
            let t = q || z > 0,
                n = _.Z.getRecipientEligibility(Q.id);
            return [W && t && n, n];
        }),
        $ = (0, d.R6)('ChannelTextAreaButtons'),
        ee = (0, f.V1)('ChannelTextAreaButtons') && (null === (t = N.confetti) || void 0 === t ? void 0 : t.button) != null;
    return (a.tq ||
        (M.isDM() &&
            (null === (g = N.gifts) || void 0 === g ? void 0 : g.button) != null &&
            null == V &&
            (y.ZP.isPremiumExactly(K, D.p9.TIER_2) && J && h.Z.trackExposure({ location: 'dc120b_5' }),
            X &&
                Y.push(
                    (0, i.jsx)(
                        C.Z,
                        {
                            disabled: w,
                            referralsRemaining: z,
                            channel: M,
                            isResending: q
                        },
                        'referral'
                    )
                )),
        (null === (E = N.gifts) || void 0 === E ? void 0 : E.button) != null &&
            null == V &&
            !H &&
            (null == Q || y.ZP.isPremiumEligible(Q)) &&
            Y.push(
                (0, i.jsx)(
                    x,
                    {
                        disabled: w,
                        channel: M
                    },
                    'gift'
                )
            ),
        (null === (b = N.gifs) || void 0 === b ? void 0 : b.button) != null &&
            null == V &&
            G &&
            Y.push(
                (0, i.jsx)(
                    T.Z,
                    {
                        disabled: w,
                        type: N
                    },
                    'gif'
                )
            ),
        ee &&
            null == V &&
            Y.push(
                (0, i.jsx)(
                    S.Z,
                    {
                        disabled: w,
                        channel: M
                    },
                    'confetti'
                )
            ),
        !ee &&
            (null === (A = N.stickers) || void 0 === A ? void 0 : A.button) != null &&
            null == V &&
            G &&
            Y.push(
                (0, i.jsx)(
                    O.Z,
                    {
                        disabled: w,
                        type: N
                    },
                    'sticker'
                )
            )),
    (null === (n = N.emojis) || void 0 === n ? void 0 : n.button) != null &&
        (null == V || (null != j && j.type !== o.jw.ATTACHMENT)) &&
        Y.push(
            (0, i.jsx)(
                I.Z,
                {
                    disabled: w,
                    type: N
                },
                'emoji'
            )
        ),
    $ || null == B || Y.push(B),
    (null === (r = N.submit) || void 0 === r ? void 0 : r.button) != null &&
        ((null === (p = N.submit) || void 0 === p ? void 0 : p.ignorePreference) || Z) &&
        !$ &&
        Y.push(
            (0, i.jsx)(
                R.Z,
                {
                    onClick: k,
                    disabled: w || F
                },
                'submit'
            )
        ),
    $ && null != B && Y.push(B),
    0 === Y.length)
        ? null
        : (0, i.jsx)('div', {
              className: L.buttons,
              children: Y
          });
}
function P(e, t, n) {
    return (0, s.e7)([g.Z, E.Z], () => {
        let i = g.Z.getStickerPreview(e, t.drafts.type),
            r = null != i && i.length > 0;
        return 0 === E.Z.getUploads(e, t.drafts.type).length && n && !r;
    });
}
let M = r.memo(w);
