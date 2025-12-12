n.d(t, { Z: () => U }), n(539854);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(873546),
    c = n(442837),
    u = n(911969),
    d = n(607070),
    f = n(533379),
    p = n(998698),
    _ = n(211242),
    m = n(775685),
    h = n(28546),
    g = n(576645),
    E = n(347896),
    b = n(913663),
    y = n(117530),
    O = n(594174),
    v = n(74538),
    S = n(713913),
    I = n(541716),
    T = n(94161),
    C = n(9277),
    A = n(655678),
    N = n(897291),
    P = n(466711),
    R = n(319417),
    w = n(728386),
    D = n(763679),
    x = n(957825),
    L = n(564355);
function j(e) {
    let { disabled: t, channel: n } = e,
        i = (0, E.Z)();
    return null != i
        ? (0, r.jsx)(P.Z, {
              giftingPromotionConfig: i,
              disabled: t,
              channel: n,
          })
        : (0, r.jsx)(N.Z, {
              disabled: t,
              channel: n,
          });
}
function M(e) {
    var t, n, i, o, E, b, y, N, P;
    let { type: M, disabled: U, channel: G, handleSubmit: Z, isEmpty: F, showAllButtons: B } = e,
        V = (0, c.e7)([d.Z], () => d.Z.isSubmitButtonEnabled),
        H = k(G.id, M, F),
        { activeCommand: Y, activeCommandOption: W } = (0, c.cj)([p.Z], () => ({
            activeCommand: p.Z.getActiveCommand(G.id),
            activeCommandOption: p.Z.getActiveOption(G.id),
        })),
        { paymentsBlocked: K } = _.Z.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        {
            iconOrder: z,
            expressionsCombinedIntoEmojiButton: q,
            reducedGap: Q,
        } = S.n.useConfig({ location: "ChannelTextAreaButtons" }),
        X = (0, h.Iu)((e) => e.lastActiveView),
        J =
            (null == (t = M.gifs) ? void 0 : t.button) != null &&
            (null == (n = M.stickers) ? void 0 : n.button) != null &&
            null != X
                ? X
                : x.X1.EMOJI,
        $ = [],
        ee = !G.isDM() || void 0 === G.recipients || G.recipients.length > 1,
        et = (0, c.e7)([O.default], () => (ee ? null : O.default.getUser(G.recipients[0]))),
        en = (0, f.R)({
            channel: G,
            chatInputType: M,
        }),
        er = (0, g.Nt)() && (null == (i = M.confetti) ? void 0 : i.button) != null,
        ei =
            (null == (o = M.submit) ? void 0 : o.button) != null &&
            ((null == (E = M.submit) ? void 0 : E.ignorePreference) || V);
    if (
        (!l.tq &&
            ((null == (y = M.gifts) ? void 0 : y.button) != null &&
                null == Y &&
                !K &&
                (null == et || v.ZP.isPremiumEligible(et)) &&
                $.push({
                    key: "gift",
                    node: (0, r.jsx)(
                        j,
                        {
                            disabled: U,
                            channel: G,
                        },
                        "gift",
                    ),
                }),
            (null == (N = M.gifs) ? void 0 : N.button) != null &&
                null == Y &&
                B &&
                $.push({
                    key: "gif",
                    node: (0, r.jsx)(
                        C.Z,
                        {
                            disabled: U,
                            type: M,
                            channel: G,
                        },
                        "gif",
                    ),
                }),
            er &&
                null == Y &&
                $.push({
                    key: "confetti",
                    node: (0, r.jsx)(
                        A.Z,
                        {
                            disabled: U,
                            channel: G,
                        },
                        "confetti",
                    ),
                }),
            !er &&
                (null == (P = M.stickers) ? void 0 : P.button) != null &&
                null == Y &&
                B &&
                $.push({
                    key: "sticker",
                    node: (0, r.jsx)(
                        w.Z,
                        {
                            disabled: U,
                            type: M,
                            channel: G,
                        },
                        "sticker",
                    ),
                }),
            $.push({
                key: "upload",
                node: (0, r.jsx)(
                    D.z,
                    {
                        disabled: U,
                        inputType: M,
                        channel: G,
                    },
                    "upload",
                ),
            }),
            M !== I.Ie.NORMAL ||
                ei ||
                $.push({
                    key: "spacer",
                    node: (0, r.jsx)("div", { className: L.spacer }, "spacer"),
                })),
        (null == (b = M.emojis) ? void 0 : b.button) != null &&
            (null == Y || (null != W && W.type !== u.jw.ATTACHMENT)))
    ) {
        let e = q ? J : x.X1.EMOJI;
        $.push({
            key: "emoji",
            node: (0, r.jsx)(
                T.Z,
                {
                    disabled: U,
                    type: M,
                    pickerView: e,
                    channelId: G.id,
                },
                "emoji",
            ),
        });
    }
    en &&
        $.push({
            key: "appLauncher",
            node: (0, r.jsx)(
                m.Z,
                {
                    channelId: G.id,
                    type: M,
                },
                "appLauncher",
            ),
        }),
        ei &&
            $.push({
                key: "submit",
                node: (0, r.jsx)(
                    R.Z,
                    {
                        onClick: Z,
                        disabled: U || H,
                    },
                    "submit",
                ),
            });
    let eo = (0, s.chain)($)
        .filter((e) => null != z[e.key])
        .sortBy((e) => z[e.key])
        .map((e) => e.node)
        .value();
    return 0 === eo.length
        ? null
        : (0, r.jsx)("div", {
              className: a()(L.buttons, { [L.reducedGap]: Q }),
              children: eo,
          });
}
function k(e, t, n) {
    return (0, c.e7)([b.Z, y.Z], () => {
        let r = b.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === y.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let U = i.memo(M);
