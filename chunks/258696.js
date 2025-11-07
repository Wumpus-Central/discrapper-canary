n.d(t, { Z: () => P }), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(873546),
    o = n(442837),
    s = n(911969),
    l = n(607070),
    c = n(533379),
    u = n(998698),
    d = n(211242),
    f = n(775685),
    _ = n(576645),
    p = n(347896),
    h = n(913663),
    m = n(117530),
    g = n(594174),
    E = n(74538),
    b = n(94161),
    y = n(9277),
    O = n(655678),
    v = n(897291),
    I = n(466711),
    S = n(319417),
    T = n(728386),
    A = n(564355);
function C(e) {
    let { disabled: t, channel: n } = e,
        i = (0, p.Z)();
    return null != i
        ? (0, r.jsx)(I.Z, {
              giftingPromotionConfig: i,
              disabled: t,
              channel: n,
          })
        : (0, r.jsx)(v.Z, {
              disabled: t,
              channel: n,
          });
}
function N(e) {
    var t, n, i, p, h, m, v;
    let { type: I, disabled: N, channel: P, handleSubmit: w, isEmpty: D, showAllButtons: x } = e,
        L = (0, o.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        M = R(P.id, I, D),
        { activeCommand: j, activeCommandOption: k } = (0, o.cj)([u.Z], () => ({
            activeCommand: u.Z.getActiveCommand(P.id),
            activeCommandOption: u.Z.getActiveOption(P.id),
        })),
        { paymentsBlocked: U } = d.Z.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        G = [],
        B = !P.isDM() || void 0 === P.recipients || P.recipients.length > 1,
        Z = (0, o.e7)([g.default], () => (B ? null : g.default.getUser(P.recipients[0]))),
        F = (0, c.R)({
            channel: P,
            chatInputType: I,
        }),
        V = (0, _.Nt)() && (null == (t = I.confetti) ? void 0 : t.button) != null;
    return (a.tq ||
        ((null == (h = I.gifts) ? void 0 : h.button) != null &&
            null == j &&
            !U &&
            (null == Z || E.ZP.isPremiumEligible(Z)) &&
            G.push(
                (0, r.jsx)(
                    C,
                    {
                        disabled: N,
                        channel: P,
                    },
                    "gift",
                ),
            ),
        (null == (m = I.gifs) ? void 0 : m.button) != null &&
            null == j &&
            x &&
            G.push(
                (0, r.jsx)(
                    y.Z,
                    {
                        disabled: N,
                        type: I,
                    },
                    "gif",
                ),
            ),
        V &&
            null == j &&
            G.push(
                (0, r.jsx)(
                    O.Z,
                    {
                        disabled: N,
                        channel: P,
                    },
                    "confetti",
                ),
            ),
        !V &&
            (null == (v = I.stickers) ? void 0 : v.button) != null &&
            null == j &&
            x &&
            G.push(
                (0, r.jsx)(
                    T.Z,
                    {
                        disabled: N,
                        type: I,
                    },
                    "sticker",
                ),
            )),
    (null == (n = I.emojis) ? void 0 : n.button) != null &&
        (null == j || (null != k && k.type !== s.jw.ATTACHMENT)) &&
        G.push(
            (0, r.jsx)(
                b.Z,
                {
                    disabled: N,
                    type: I,
                },
                "emoji",
            ),
        ),
    F &&
        G.push(
            (0, r.jsx)(
                f.Z,
                {
                    channel: P,
                    type: I,
                },
                "app-launcher",
            ),
        ),
    (null == (i = I.submit) ? void 0 : i.button) != null &&
        ((null == (p = I.submit) ? void 0 : p.ignorePreference) || L) &&
        G.push(
            (0, r.jsx)(
                S.Z,
                {
                    onClick: w,
                    disabled: N || M,
                },
                "submit",
            ),
        ),
    0 === G.length)
        ? null
        : (0, r.jsx)("div", {
              className: A.buttons,
              children: G,
          });
}
function R(e, t, n) {
    return (0, o.e7)([h.Z, m.Z], () => {
        let r = h.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === m.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let P = i.memo(N);
