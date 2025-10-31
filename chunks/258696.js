n.d(t, { Z: () => N }), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(873546),
    o = n(442837),
    s = n(911969),
    l = n(607070),
    c = n(998698),
    u = n(211242),
    d = n(576645),
    f = n(347896),
    _ = n(913663),
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
    T = n(564355);
function S(e) {
    let { disabled: t, channel: n } = e,
        i = (0, f.Z)();
    return null != i
        ? (0, r.jsx)(O.Z, {
              giftingPromotionConfig: i,
              disabled: t,
              channel: n,
          })
        : (0, r.jsx)(y.Z, {
              disabled: t,
              channel: n,
          });
}
function A(e) {
    var t, n, i, f, _, p, y;
    let { type: O, disabled: A, channel: N, handleSubmit: R, isEmpty: P, showAllButtons: w, children: D } = e,
        x = (0, o.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        L = C(N.id, O, P),
        { activeCommand: M, activeCommandOption: j } = (0, o.cj)([c.Z], () => ({
            activeCommand: c.Z.getActiveCommand(N.id),
            activeCommandOption: c.Z.getActiveOption(N.id),
        })),
        { paymentsBlocked: k } = u.Z.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        U = [],
        G = !N.isDM() || void 0 === N.recipients || N.recipients.length > 1,
        B = (0, o.e7)([h.default], () => (G ? null : h.default.getUser(N.recipients[0]))),
        Z = (0, d.Nt)() && (null == (t = O.confetti) ? void 0 : t.button) != null;
    return (a.tq ||
        ((null == (_ = O.gifts) ? void 0 : _.button) != null &&
            null == M &&
            !k &&
            (null == B || m.ZP.isPremiumEligible(B)) &&
            U.push(
                (0, r.jsx)(
                    S,
                    {
                        disabled: A,
                        channel: N,
                    },
                    "gift",
                ),
            ),
        (null == (p = O.gifs) ? void 0 : p.button) != null &&
            null == M &&
            w &&
            U.push(
                (0, r.jsx)(
                    E.Z,
                    {
                        disabled: A,
                        type: O,
                    },
                    "gif",
                ),
            ),
        Z &&
            null == M &&
            U.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        disabled: A,
                        channel: N,
                    },
                    "confetti",
                ),
            ),
        !Z &&
            (null == (y = O.stickers) ? void 0 : y.button) != null &&
            null == M &&
            w &&
            U.push(
                (0, r.jsx)(
                    I.Z,
                    {
                        disabled: A,
                        type: O,
                    },
                    "sticker",
                ),
            )),
    (null == (n = O.emojis) ? void 0 : n.button) != null &&
        (null == M || (null != j && j.type !== s.jw.ATTACHMENT)) &&
        U.push(
            (0, r.jsx)(
                g.Z,
                {
                    disabled: A,
                    type: O,
                },
                "emoji",
            ),
        ),
    null != D && U.push(D),
    (null == (i = O.submit) ? void 0 : i.button) != null &&
        ((null == (f = O.submit) ? void 0 : f.ignorePreference) || x) &&
        U.push(
            (0, r.jsx)(
                v.Z,
                {
                    onClick: R,
                    disabled: A || L,
                },
                "submit",
            ),
        ),
    0 === U.length)
        ? null
        : (0, r.jsx)("div", {
              className: T.buttons,
              children: U,
          });
}
function C(e, t, n) {
    return (0, o.e7)([_.Z, p.Z], () => {
        let r = _.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === p.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let N = i.memo(A);
