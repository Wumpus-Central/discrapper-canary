n.d(t, { Z: () => U }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(873546),
    c = n(442837),
    u = n(911969),
    d = n(607070),
    f = n(533379),
    _ = n(998698),
    p = n(211242),
    h = n(775685),
    m = n(28546),
    g = n(576645),
    E = n(347896),
    b = n(913663),
    y = n(117530),
    O = n(594174),
    v = n(74538),
    I = n(713913),
    T = n(541716),
    S = n(94161),
    A = n(9277),
    C = n(655678),
    N = n(897291),
    R = n(466711),
    P = n(319417),
    D = n(728386),
    w = n(763679),
    L = n(957825),
    x = n(564355);
function M(e) {
    let { disabled: t, channel: n } = e,
        i = (0, E.Z)();
    return null != i
        ? (0, r.jsx)(R.Z, {
              giftingPromotionConfig: i,
              disabled: t,
              channel: n,
          })
        : (0, r.jsx)(N.Z, {
              disabled: t,
              channel: n,
          });
}
function k(e) {
    var t, n, i, a, E, b, y, N, R;
    let { type: k, disabled: U, channel: G, handleSubmit: B, isEmpty: Z, showAllButtons: F } = e,
        V = (0, c.e7)([d.Z], () => d.Z.isSubmitButtonEnabled),
        H = j(G.id, k, Z),
        { activeCommand: Y, activeCommandOption: W } = (0, c.cj)([_.Z], () => ({
            activeCommand: _.Z.getActiveCommand(G.id),
            activeCommandOption: _.Z.getActiveOption(G.id),
        })),
        { paymentsBlocked: K } = p.Z.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        {
            iconOrder: z,
            expressionsCombinedIntoEmojiButton: q,
            reducedGap: X,
        } = I.n.useConfig({ location: "ChannelTextAreaButtons" }),
        Q = (0, m.Iu)((e) => e.lastActiveView),
        J =
            (null == (t = k.gifs) ? void 0 : t.button) != null &&
            (null == (n = k.stickers) ? void 0 : n.button) != null &&
            null != Q
                ? Q
                : L.X1.EMOJI,
        $ = [],
        ee = !G.isDM() || void 0 === G.recipients || G.recipients.length > 1,
        et = (0, c.e7)([O.default], () => (ee ? null : O.default.getUser(G.recipients[0]))),
        en = (0, f.R)({
            channel: G,
            chatInputType: k,
        }),
        er = (0, g.Nt)() && (null == (i = k.confetti) ? void 0 : i.button) != null,
        ei =
            (null == (a = k.submit) ? void 0 : a.button) != null &&
            ((null == (E = k.submit) ? void 0 : E.ignorePreference) || V);
    if (
        (!l.tq &&
            ((null == (y = k.gifts) ? void 0 : y.button) != null &&
                null == Y &&
                !K &&
                (null == et || v.ZP.isPremiumEligible(et)) &&
                $.push({
                    key: "gift",
                    node: (0, r.jsx)(
                        M,
                        {
                            disabled: U,
                            channel: G,
                        },
                        "gift",
                    ),
                }),
            (null == (N = k.gifs) ? void 0 : N.button) != null &&
                null == Y &&
                F &&
                $.push({
                    key: "gif",
                    node: (0, r.jsx)(
                        A.Z,
                        {
                            disabled: U,
                            type: k,
                        },
                        "gif",
                    ),
                }),
            er &&
                null == Y &&
                $.push({
                    key: "confetti",
                    node: (0, r.jsx)(
                        C.Z,
                        {
                            disabled: U,
                            channel: G,
                        },
                        "confetti",
                    ),
                }),
            !er &&
                (null == (R = k.stickers) ? void 0 : R.button) != null &&
                null == Y &&
                F &&
                $.push({
                    key: "sticker",
                    node: (0, r.jsx)(
                        D.Z,
                        {
                            disabled: U,
                            type: k,
                        },
                        "sticker",
                    ),
                }),
            $.push({
                key: "upload",
                node: (0, r.jsx)(
                    w.z,
                    {
                        disabled: U,
                        inputType: k,
                        channel: G,
                    },
                    "upload",
                ),
            }),
            k !== T.Ie.NORMAL ||
                ei ||
                $.push({
                    key: "spacer",
                    node: (0, r.jsx)("div", { className: x.spacer }, "spacer"),
                })),
        (null == (b = k.emojis) ? void 0 : b.button) != null &&
            (null == Y || (null != W && W.type !== u.jw.ATTACHMENT)))
    ) {
        let e = q ? J : L.X1.EMOJI;
        $.push({
            key: "emoji",
            node: (0, r.jsx)(
                S.Z,
                {
                    disabled: U,
                    type: k,
                    pickerView: e,
                },
                "emoji",
            ),
        });
    }
    en &&
        $.push({
            key: "appLauncher",
            node: (0, r.jsx)(
                h.Z,
                {
                    channel: G,
                    type: k,
                },
                "appLauncher",
            ),
        }),
        ei &&
            $.push({
                key: "submit",
                node: (0, r.jsx)(
                    P.Z,
                    {
                        onClick: B,
                        disabled: U || H,
                    },
                    "submit",
                ),
            });
    let ea = (0, s.chain)($)
        .filter((e) => null != z[e.key])
        .sortBy((e) => z[e.key])
        .map((e) => e.node)
        .value();
    return 0 === ea.length
        ? null
        : (0, r.jsx)("div", {
              className: o()(x.buttons, { [x.reducedGap]: X }),
              children: ea,
          });
}
function j(e, t, n) {
    return (0, c.e7)([b.Z, y.Z], () => {
        let r = b.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === y.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let U = i.memo(k);
