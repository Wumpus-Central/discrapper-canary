n.d(t, {
    G: () => L,
    Z: () => x
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
    _ = n(276444),
    p = n(599659),
    h = n(286961),
    g = n(913663),
    m = n(117530),
    E = n(594174),
    v = n(74538),
    b = n(94161),
    y = n(9277),
    O = n(58995),
    S = n(655678),
    I = n(897291),
    T = n(466711),
    N = n(764794),
    A = n(319417),
    C = n(728386),
    R = n(474936),
    P = n(342203);
function D(e) {
    let { disabled: t, channel: n } = e,
        { enabled: i } = p.O.useExperiment({ location: 'gift-button' }),
        o = (0, h.Z)();
    return i
        ? (0, r.jsx)(O.Z, {
              disabled: t,
              channel: n
          })
        : null != o
          ? (0, r.jsx)(T.Z, {
                giftingPromotionConfig: o,
                disabled: t,
                channel: n
            })
          : (0, r.jsx)(I.Z, {
                disabled: t,
                channel: n
            });
}
function w(e) {
    var t, n, i, p, h, g, m, O, I;
    let { type: T, disabled: w, channel: x, handleSubmit: M, isEmpty: k, showAllButtons: j, children: U } = e,
        G = (0, a.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        B = L(x.id, T, k),
        { activeCommand: V, activeCommandOption: F } = (0, a.cj)([c.Z], () => ({
            activeCommand: c.Z.getActiveCommand(x.id),
            activeCommandOption: c.Z.getActiveOption(x.id)
        })),
        { paymentsBlocked: Z } = u.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        H = [],
        W = E.default.getCurrentUser(),
        Y = null !== (h = (0, a.e7)([_.Z], () => (v.ZP.isPremiumExactly(W, R.p9.TIER_2) ? _.Z.getReferralsRemaining() : 0))) && void 0 !== h ? h : 0,
        K = !x.isDM() || void 0 === x.recipients || x.recipients.length > 1,
        z = (0, a.e7)([_.Z], () => {
            if (K) return !1;
            let e = x.recipients[0];
            return _.Z.getSentUserIds().includes(e);
        }),
        q = (0, a.e7)([E.default], () => (K ? null : E.default.getUser(x.recipients[0]))),
        Q = (0, a.e7)([_.Z], () => {
            if (K || null == q || q.bot) return !1;
            let e = z || Y > 0,
                t = _.Z.getRecipientEligibility(q.id);
            return e && t;
        }),
        X = (0, d.R6)('ChannelTextAreaButtons'),
        J = (0, f.Nt)() && (null === (t = T.confetti) || void 0 === t ? void 0 : t.button) != null;
    return (o.tq ||
        (x.isDM() &&
            (null === (g = T.gifts) || void 0 === g ? void 0 : g.button) != null &&
            null == V &&
            Q &&
            H.push(
                (0, r.jsx)(
                    N.Z,
                    {
                        disabled: w,
                        referralsRemaining: Y,
                        channel: x,
                        isResending: z
                    },
                    'referral'
                )
            ),
        (null === (m = T.gifts) || void 0 === m ? void 0 : m.button) != null &&
            null == V &&
            !Z &&
            (null == q || v.ZP.isPremiumEligible(q)) &&
            H.push(
                (0, r.jsx)(
                    D,
                    {
                        disabled: w,
                        channel: x
                    },
                    'gift'
                )
            ),
        (null === (O = T.gifs) || void 0 === O ? void 0 : O.button) != null &&
            null == V &&
            j &&
            H.push(
                (0, r.jsx)(
                    y.Z,
                    {
                        disabled: w,
                        type: T
                    },
                    'gif'
                )
            ),
        J &&
            null == V &&
            H.push(
                (0, r.jsx)(
                    S.Z,
                    {
                        disabled: w,
                        channel: x
                    },
                    'confetti'
                )
            ),
        !J &&
            (null === (I = T.stickers) || void 0 === I ? void 0 : I.button) != null &&
            null == V &&
            j &&
            H.push(
                (0, r.jsx)(
                    C.Z,
                    {
                        disabled: w,
                        type: T
                    },
                    'sticker'
                )
            )),
    (null === (n = T.emojis) || void 0 === n ? void 0 : n.button) != null &&
        (null == V || (null != F && F.type !== s.jw.ATTACHMENT)) &&
        H.push(
            (0, r.jsx)(
                b.Z,
                {
                    disabled: w,
                    type: T
                },
                'emoji'
            )
        ),
    X || null == U || H.push(U),
    (null === (i = T.submit) || void 0 === i ? void 0 : i.button) != null &&
        ((null === (p = T.submit) || void 0 === p ? void 0 : p.ignorePreference) || G) &&
        !X &&
        H.push(
            (0, r.jsx)(
                A.Z,
                {
                    onClick: M,
                    disabled: w || B
                },
                'submit'
            )
        ),
    X && null != U && H.push(U),
    0 === H.length)
        ? null
        : (0, r.jsx)('div', {
              className: P.buttons,
              children: H
          });
}
function L(e, t, n) {
    return (0, a.e7)([g.Z, m.Z], () => {
        let r = g.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === m.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let x = i.memo(w);
