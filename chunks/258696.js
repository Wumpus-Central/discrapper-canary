r.d(n, {
    G: function () {
        return M;
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
    p = r(276444),
    m = r(599659),
    g = r(963198),
    E = r(286961),
    v = r(913663),
    I = r(117530),
    T = r(594174),
    b = r(74538),
    y = r(94161),
    S = r(9277),
    A = r(58995),
    N = r(897291),
    C = r(466711),
    R = r(764794),
    O = r(319417),
    D = r(728386),
    L = r(474936),
    x = r(553796);
function w(e) {
    let { disabled: n, channel: r } = e,
        { enabled: i } = m.O.useExperiment({ location: 'gift-button' }),
        a = (0, E.Z)();
    return i
        ? (0, s.jsx)(A.Z, {
              disabled: n,
              channel: r
          })
        : null != a
          ? (0, s.jsx)(C.Z, {
                giftingPromotionConfig: a,
                disabled: n,
                channel: r
            })
          : (0, s.jsx)(N.Z, {
                disabled: n,
                channel: r
            });
}
function P(e) {
    var n, r, i, a, o, m, E, v;
    let { type: I, disabled: A, channel: N, handleSubmit: C, isEmpty: P, showAllButtons: k, children: U } = e,
        B = (0, u.e7)([d.Z], () => d.Z.isSubmitButtonEnabled),
        G = M(N.id, I, P),
        { activeCommand: F, activeCommandOption: Z } = (0, u.cj)([f.Z], () => ({
            activeCommand: f.Z.getActiveCommand(N.id),
            activeCommandOption: f.Z.getActiveOption(N.id)
        })),
        { paymentsBlocked: V } = _.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        j = [],
        { enabled: H } = g.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        Y = T.default.getCurrentUser(),
        W = null !== (a = (0, u.e7)([p.Z], () => (H && b.ZP.isPremiumExactly(Y, L.p9.TIER_2) ? p.Z.getReferralsRemaining() : 0))) && void 0 !== a ? a : 0,
        K = (0, u.e7)([p.Z], () => {
            if (!N.isDM() || void 0 === N.recipients || N.recipients.length > 1 || !H) return !1;
            let e = N.recipients[0];
            return p.Z.getSentUserIds().includes(e);
        }),
        z = (0, u.e7)([T.default], () => (!N.isDM() || void 0 === N.recipients || N.recipients.length > 1 ? null : T.default.getUser(N.recipients[0]))),
        [q, Q] = (0, u.Wu)([p.Z], () => {
            let e = [!1, !1];
            if (!N.isDM() || void 0 === N.recipients || N.recipients.length > 1 || null == z || z.bot) return e;
            let n = K || W > 0,
                r = p.Z.getRecipientEligibility(z.id);
            return [H && n && r, r];
        }),
        X = (0, h.Q3)('ChannelTextAreaButtons');
    return (!l.tq &&
        (N.isDM() &&
            (null === (o = I.gifts) || void 0 === o ? void 0 : o.button) != null &&
            null == F &&
            (b.ZP.isPremiumExactly(Y, L.p9.TIER_2) && Q && g.Z.trackExposure({ location: 'dc120b_5' }),
            q &&
                j.push(
                    (0, s.jsx)(
                        R.Z,
                        {
                            disabled: A,
                            referralsRemaining: W,
                            channel: N,
                            isResending: K
                        },
                        'referral'
                    )
                )),
        (null === (m = I.gifts) || void 0 === m ? void 0 : m.button) != null &&
            null == F &&
            !V &&
            (null == z || b.ZP.isPremiumEligible(z)) &&
            j.push(
                (0, s.jsx)(
                    w,
                    {
                        disabled: A,
                        channel: N
                    },
                    'gift'
                )
            ),
        (null === (E = I.gifs) || void 0 === E ? void 0 : E.button) != null &&
            null == F &&
            k &&
            j.push(
                (0, s.jsx)(
                    S.Z,
                    {
                        disabled: A,
                        type: I
                    },
                    'gif'
                )
            ),
        (null === (v = I.stickers) || void 0 === v ? void 0 : v.button) != null &&
            null == F &&
            k &&
            j.push(
                (0, s.jsx)(
                    D.Z,
                    {
                        disabled: A,
                        type: I
                    },
                    'sticker'
                )
            )),
    (null === (n = I.emojis) || void 0 === n ? void 0 : n.button) != null &&
        (null == F || (null != Z && Z.type !== c.jw.ATTACHMENT)) &&
        j.push(
            (0, s.jsx)(
                y.Z,
                {
                    disabled: A,
                    type: I
                },
                'emoji'
            )
        ),
    (null === (r = I.submit) || void 0 === r ? void 0 : r.button) != null &&
        ((null === (i = I.submit) || void 0 === i ? void 0 : i.ignorePreference) || B) &&
        !X &&
        j.push(
            (0, s.jsx)(
                O.Z,
                {
                    onClick: C,
                    disabled: A || G
                },
                'submit'
            )
        ),
    null != U && j.push(U),
    0 === j.length)
        ? null
        : (0, s.jsx)('div', {
              className: x.buttons,
              children: j
          });
}
function M(e, n, r) {
    return (0, u.e7)([v.Z, I.Z], () => {
        let i = v.Z.getStickerPreview(e, n.drafts.type),
            a = null != i && i.length > 0;
        return 0 === I.Z.getUploads(e, n.drafts.type).length && r && !a;
    });
}
n.Z = o.memo(P);
