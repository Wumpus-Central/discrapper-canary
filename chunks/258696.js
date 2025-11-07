n.d(t, { Z: () => R }), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(873546),
    o = n(442837),
    s = n(911969),
    l = n(607070),
    c = n(998698),
    u = n(211242),
    d = n(775685),
    f = n(576645),
    _ = n(347896),
    p = n(913663),
    h = n(117530),
    m = n(594174),
    g = n(74538),
    E = n(94161),
    b = n(9277),
    y = n(655678),
    O = n(897291),
    v = n(466711),
    I = n(319417),
    S = n(728386),
    T = n(564355);
function A(e) {
    let { disabled: t, channel: n } = e,
        i = (0, _.Z)();
    return null != i
        ? (0, r.jsx)(v.Z, {
              giftingPromotionConfig: i,
              disabled: t,
              channel: n,
          })
        : (0, r.jsx)(O.Z, {
              disabled: t,
              channel: n,
          });
}
function C(e) {
    var t, n, i, _, p, h, O;
    let { type: v, disabled: C, channel: R, handleSubmit: P, isEmpty: w, showAllButtons: D } = e,
        x = (0, o.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        L = N(R.id, v, w),
        { activeCommand: M, activeCommandOption: j } = (0, o.cj)([c.Z], () => ({
            activeCommand: c.Z.getActiveCommand(R.id),
            activeCommandOption: c.Z.getActiveOption(R.id),
        })),
        { paymentsBlocked: k } = u.Z.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        U = [],
        G = !R.isDM() || void 0 === R.recipients || R.recipients.length > 1,
        B = (0, o.e7)([m.default], () => (G ? null : m.default.getUser(R.recipients[0]))),
        Z = (0, f.Nt)() && (null == (t = v.confetti) ? void 0 : t.button) != null;
    return (a.tq ||
        ((null == (p = v.gifts) ? void 0 : p.button) != null &&
            null == M &&
            !k &&
            (null == B || g.ZP.isPremiumEligible(B)) &&
            U.push(
                (0, r.jsx)(
                    A,
                    {
                        disabled: C,
                        channel: R,
                    },
                    "gift",
                ),
            ),
        (null == (h = v.gifs) ? void 0 : h.button) != null &&
            null == M &&
            D &&
            U.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        disabled: C,
                        type: v,
                    },
                    "gif",
                ),
            ),
        Z &&
            null == M &&
            U.push(
                (0, r.jsx)(
                    y.Z,
                    {
                        disabled: C,
                        channel: R,
                    },
                    "confetti",
                ),
            ),
        !Z &&
            (null == (O = v.stickers) ? void 0 : O.button) != null &&
            null == M &&
            D &&
            U.push(
                (0, r.jsx)(
                    S.Z,
                    {
                        disabled: C,
                        type: v,
                    },
                    "sticker",
                ),
            )),
    (null == (n = v.emojis) ? void 0 : n.button) != null &&
        (null == M || (null != j && j.type !== s.jw.ATTACHMENT)) &&
        U.push(
            (0, r.jsx)(
                E.Z,
                {
                    disabled: C,
                    type: v,
                },
                "emoji",
            ),
        ),
    U.push(
        (0, r.jsx)(
            d.Z,
            {
                channel: R,
                type: v,
            },
            "app-launcher",
        ),
    ),
    (null == (i = v.submit) ? void 0 : i.button) != null &&
        ((null == (_ = v.submit) ? void 0 : _.ignorePreference) || x) &&
        U.push(
            (0, r.jsx)(
                I.Z,
                {
                    onClick: P,
                    disabled: C || L,
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
function N(e, t, n) {
    return (0, o.e7)([p.Z, h.Z], () => {
        let r = p.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === h.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let R = i.memo(C);
