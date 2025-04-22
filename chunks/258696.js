n.d(t, {
    G: () => P,
    Z: () => w
}),
    n(539854);
var r = n(200651),
    i = n(192379),
    a = n(873546),
    o = n(442837),
    s = n(911969),
    l = n(607070),
    c = n(998698),
    u = n(211242),
    d = n(540059),
    f = n(576645),
    _ = n(599659),
    p = n(286961),
    h = n(913663),
    m = n(117530),
    g = n(594174),
    E = n(74538),
    b = n(94161),
    y = n(9277),
    v = n(58995),
    O = n(655678),
    I = n(897291),
    S = n(466711),
    T = n(319417),
    A = n(728386),
    N = n(302195);
function C(e) {
    let { disabled: t, channel: n } = e,
        { enabled: i } = _.O.useExperiment({ location: 'gift-button' }),
        a = (0, p.Z)();
    return i
        ? (0, r.jsx)(v.Z, {
              disabled: t,
              channel: n
          })
        : null != a
          ? (0, r.jsx)(S.Z, {
                giftingPromotionConfig: a,
                disabled: t,
                channel: n
            })
          : (0, r.jsx)(I.Z, {
                disabled: t,
                channel: n
            });
}
function R(e) {
    var t, n, i, _, p, h, m;
    let { type: v, disabled: I, channel: S, handleSubmit: R, isEmpty: w, showAllButtons: D, children: L } = e,
        x = (0, o.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        M = P(S.id, v, w),
        { activeCommand: k, activeCommandOption: j } = (0, o.cj)([c.Z], () => ({
            activeCommand: c.Z.getActiveCommand(S.id),
            activeCommandOption: c.Z.getActiveOption(S.id)
        })),
        { paymentsBlocked: U } = u.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        G = [],
        B = !S.isDM() || void 0 === S.recipients || S.recipients.length > 1,
        V = (0, o.e7)([g.default], () => (B ? null : g.default.getUser(S.recipients[0]))),
        F = (0, d.R6)('ChannelTextAreaButtons'),
        Z = (0, f.Nt)() && (null == (t = v.confetti) ? void 0 : t.button) != null;
    return (a.tq ||
        ((null == (p = v.gifts) ? void 0 : p.button) != null &&
            null == k &&
            !U &&
            (null == V || E.ZP.isPremiumEligible(V)) &&
            G.push(
                (0, r.jsx)(
                    C,
                    {
                        disabled: I,
                        channel: S
                    },
                    'gift'
                )
            ),
        (null == (h = v.gifs) ? void 0 : h.button) != null &&
            null == k &&
            D &&
            G.push(
                (0, r.jsx)(
                    y.Z,
                    {
                        disabled: I,
                        type: v
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
                        disabled: I,
                        channel: S
                    },
                    'confetti'
                )
            ),
        !Z &&
            (null == (m = v.stickers) ? void 0 : m.button) != null &&
            null == k &&
            D &&
            G.push(
                (0, r.jsx)(
                    A.Z,
                    {
                        disabled: I,
                        type: v
                    },
                    'sticker'
                )
            )),
    (null == (n = v.emojis) ? void 0 : n.button) != null &&
        (null == k || (null != j && j.type !== s.jw.ATTACHMENT)) &&
        G.push(
            (0, r.jsx)(
                b.Z,
                {
                    disabled: I,
                    type: v
                },
                'emoji'
            )
        ),
    F || null == L || G.push(L),
    (null == (i = v.submit) ? void 0 : i.button) != null &&
        ((null == (_ = v.submit) ? void 0 : _.ignorePreference) || x) &&
        !F &&
        G.push(
            (0, r.jsx)(
                T.Z,
                {
                    onClick: R,
                    disabled: I || M
                },
                'submit'
            )
        ),
    F && null != L && G.push(L),
    0 === G.length)
        ? null
        : (0, r.jsx)('div', {
              className: N.buttons,
              children: G
          });
}
function P(e, t, n) {
    return (0, o.e7)([h.Z, m.Z], () => {
        let r = h.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === m.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let w = i.memo(R);
