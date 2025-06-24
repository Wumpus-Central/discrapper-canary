n.d(t, { Z: () => P }), n(539854);
var r = n(255367),
    i = n(73800),
    a = n(873546),
    o = n(442837),
    s = n(911969),
    l = n(607070),
    c = n(998698),
    u = n(211242),
    d = n(576645),
    f = n(599659),
    _ = n(286961),
    p = n(913663),
    h = n(117530),
    m = n(594174),
    g = n(74538),
    E = n(94161),
    b = n(9277),
    y = n(58995),
    O = n(655678),
    v = n(897291),
    I = n(466711),
    T = n(319417),
    S = n(728386),
    A = n(302195);
function N(e) {
    let { disabled: t, channel: n } = e,
        { enabled: i } = f.O.useExperiment({ location: 'gift-button' }),
        a = (0, _.Z)();
    return i
        ? (0, r.jsx)(y.Z, {
              disabled: t,
              channel: n
          })
        : null != a
          ? (0, r.jsx)(I.Z, {
                giftingPromotionConfig: a,
                disabled: t,
                channel: n
            })
          : (0, r.jsx)(v.Z, {
                disabled: t,
                channel: n
            });
}
function C(e) {
    var t, n, i, f, _, p, h;
    let { type: y, disabled: v, channel: I, handleSubmit: C, isEmpty: P, showAllButtons: w, children: D } = e,
        L = (0, o.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        x = R(I.id, y, P),
        { activeCommand: k, activeCommandOption: M } = (0, o.cj)([c.Z], () => ({
            activeCommand: c.Z.getActiveCommand(I.id),
            activeCommandOption: c.Z.getActiveOption(I.id)
        })),
        { paymentsBlocked: j } = u.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        U = [],
        G = !I.isDM() || void 0 === I.recipients || I.recipients.length > 1,
        B = (0, o.e7)([m.default], () => (G ? null : m.default.getUser(I.recipients[0]))),
        V = (0, d.Nt)() && (null == (t = y.confetti) ? void 0 : t.button) != null;
    return (a.tq ||
        ((null == (_ = y.gifts) ? void 0 : _.button) != null &&
            null == k &&
            !j &&
            (null == B || g.ZP.isPremiumEligible(B)) &&
            U.push(
                (0, r.jsx)(
                    N,
                    {
                        disabled: v,
                        channel: I
                    },
                    'gift'
                )
            ),
        (null == (p = y.gifs) ? void 0 : p.button) != null &&
            null == k &&
            w &&
            U.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        disabled: v,
                        type: y
                    },
                    'gif'
                )
            ),
        V &&
            null == k &&
            U.push(
                (0, r.jsx)(
                    O.Z,
                    {
                        disabled: v,
                        channel: I
                    },
                    'confetti'
                )
            ),
        !V &&
            (null == (h = y.stickers) ? void 0 : h.button) != null &&
            null == k &&
            w &&
            U.push(
                (0, r.jsx)(
                    S.Z,
                    {
                        disabled: v,
                        type: y
                    },
                    'sticker'
                )
            )),
    (null == (n = y.emojis) ? void 0 : n.button) != null &&
        (null == k || (null != M && M.type !== s.jw.ATTACHMENT)) &&
        U.push(
            (0, r.jsx)(
                E.Z,
                {
                    disabled: v,
                    type: y
                },
                'emoji'
            )
        ),
    null != D && U.push(D),
    (null == (i = y.submit) ? void 0 : i.button) != null &&
        ((null == (f = y.submit) ? void 0 : f.ignorePreference) || L) &&
        U.push(
            (0, r.jsx)(
                T.Z,
                {
                    onClick: C,
                    disabled: v || x
                },
                'submit'
            )
        ),
    0 === U.length)
        ? null
        : (0, r.jsx)('div', {
              className: A.buttons,
              children: U
          });
}
function R(e, t, n) {
    return (0, o.e7)([p.Z, h.Z], () => {
        let r = p.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === h.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let P = i.memo(C);
