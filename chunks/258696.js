(n.d(t, { Z: () => C }), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(873546),
    o = n(442837),
    s = n(911969),
    l = n(607070),
    c = n(998698),
    u = n(211242),
    d = n(576645),
    _ = n(286961),
    f = n(913663),
    p = n(117530),
    h = n(594174),
    m = n(74538),
    g = n(94161),
    E = n(9277),
    b = n(655678),
    y = n(897291),
    O = n(466711),
    v = n(319417),
    I = n(728386),
    T = n(302195);
function S(e) {
    let { disabled: t, channel: n } = e,
        i = (0, _.Z)();
    return null != i
        ? (0, r.jsx)(O.Z, {
              giftingPromotionConfig: i,
              disabled: t,
              channel: n
          })
        : (0, r.jsx)(y.Z, {
              disabled: t,
              channel: n
          });
}
function A(e) {
    var t, n, i, _, f, p, y;
    let { type: O, disabled: A, channel: C, handleSubmit: R, isEmpty: P, showAllButtons: w, children: D } = e,
        L = (0, o.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        x = N(C.id, O, P),
        { activeCommand: M, activeCommandOption: k } = (0, o.cj)([c.Z], () => ({
            activeCommand: c.Z.getActiveCommand(C.id),
            activeCommandOption: c.Z.getActiveOption(C.id)
        })),
        { paymentsBlocked: j } = u.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        U = [],
        G = !C.isDM() || void 0 === C.recipients || C.recipients.length > 1,
        B = (0, o.e7)([h.default], () => (G ? null : h.default.getUser(C.recipients[0]))),
        V = (0, d.Nt)() && (null == (t = O.confetti) ? void 0 : t.button) != null;
    return (a.tq ||
        ((null == (f = O.gifts) ? void 0 : f.button) != null &&
            null == M &&
            !j &&
            (null == B || m.ZP.isPremiumEligible(B)) &&
            U.push(
                (0, r.jsx)(
                    S,
                    {
                        disabled: A,
                        channel: C
                    },
                    'gift'
                )
            ),
        (null == (p = O.gifs) ? void 0 : p.button) != null &&
            null == M &&
            w &&
            U.push(
                (0, r.jsx)(
                    E.Z,
                    {
                        disabled: A,
                        type: O
                    },
                    'gif'
                )
            ),
        V &&
            null == M &&
            U.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        disabled: A,
                        channel: C
                    },
                    'confetti'
                )
            ),
        !V &&
            (null == (y = O.stickers) ? void 0 : y.button) != null &&
            null == M &&
            w &&
            U.push(
                (0, r.jsx)(
                    I.Z,
                    {
                        disabled: A,
                        type: O
                    },
                    'sticker'
                )
            )),
    (null == (n = O.emojis) ? void 0 : n.button) != null &&
        (null == M || (null != k && k.type !== s.jw.ATTACHMENT)) &&
        U.push(
            (0, r.jsx)(
                g.Z,
                {
                    disabled: A,
                    type: O
                },
                'emoji'
            )
        ),
    null != D && U.push(D),
    (null == (i = O.submit) ? void 0 : i.button) != null &&
        ((null == (_ = O.submit) ? void 0 : _.ignorePreference) || L) &&
        U.push(
            (0, r.jsx)(
                v.Z,
                {
                    onClick: R,
                    disabled: A || x
                },
                'submit'
            )
        ),
    0 === U.length)
        ? null
        : (0, r.jsx)('div', {
              className: T.buttons,
              children: U
          });
}
function N(e, t, n) {
    return (0, o.e7)([f.Z, p.Z], () => {
        let r = f.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === p.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let C = i.memo(A);
