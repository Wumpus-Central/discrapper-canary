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
    x = n(744114);
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
    var t, n, i, a, E, b, y;
    let { type: N, disabled: R, channel: k, handleSubmit: U, isEmpty: G, showAllButtons: B } = e,
        Z = (0, c.e7)([d.Z], () => d.Z.isSubmitButtonEnabled),
        F = j(k.id, N, G),
        { activeCommand: V, activeCommandOption: H } = (0, c.cj)([_.Z], () => ({
            activeCommand: _.Z.getActiveCommand(k.id),
            activeCommandOption: _.Z.getActiveOption(k.id),
        })),
        { paymentsBlocked: Y } = p.Z.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        {
            iconOrder: W,
            expressionsCombinedIntoEmojiButton: K,
            reducedGap: z,
        } = I.n.useConfig({ location: "ChannelTextAreaButtons" }),
        q = (0, m.Iu)((e) => e.lastActiveView),
        X = [],
        Q = !k.isDM() || void 0 === k.recipients || k.recipients.length > 1,
        J = (0, c.e7)([O.default], () => (Q ? null : O.default.getUser(k.recipients[0]))),
        $ = (0, f.R)({
            channel: k,
            chatInputType: N,
        }),
        ee = (0, g.Nt)() && (null == (t = N.confetti) ? void 0 : t.button) != null,
        et =
            (null == (n = N.submit) ? void 0 : n.button) != null &&
            ((null == (i = N.submit) ? void 0 : i.ignorePreference) || Z);
    if (
        (!l.tq &&
            ((null == (E = N.gifts) ? void 0 : E.button) != null &&
                null == V &&
                !Y &&
                (null == J || v.ZP.isPremiumEligible(J)) &&
                X.push({
                    key: "gift",
                    node: (0, r.jsx)(
                        M,
                        {
                            disabled: R,
                            channel: k,
                        },
                        "gift",
                    ),
                }),
            (null == (b = N.gifs) ? void 0 : b.button) != null &&
                null == V &&
                B &&
                X.push({
                    key: "gif",
                    node: (0, r.jsx)(
                        A.Z,
                        {
                            disabled: R,
                            type: N,
                        },
                        "gif",
                    ),
                }),
            ee &&
                null == V &&
                X.push({
                    key: "confetti",
                    node: (0, r.jsx)(
                        C.Z,
                        {
                            disabled: R,
                            channel: k,
                        },
                        "confetti",
                    ),
                }),
            !ee &&
                (null == (y = N.stickers) ? void 0 : y.button) != null &&
                null == V &&
                B &&
                X.push({
                    key: "sticker",
                    node: (0, r.jsx)(
                        D.Z,
                        {
                            disabled: R,
                            type: N,
                        },
                        "sticker",
                    ),
                }),
            X.push({
                key: "upload",
                node: (0, r.jsx)(
                    w.z,
                    {
                        disabled: R,
                        inputType: N,
                        channel: k,
                    },
                    "upload",
                ),
            }),
            N !== T.Ie.NORMAL ||
                et ||
                X.push({
                    key: "spacer",
                    node: (0, r.jsx)("div", { className: x.spacer }, "spacer"),
                })),
        (null == (a = N.emojis) ? void 0 : a.button) != null &&
            (null == V || (null != H && H.type !== u.jw.ATTACHMENT)))
    ) {
        let e = K && null != q ? q : L.X1.EMOJI;
        X.push({
            key: "emoji",
            node: (0, r.jsx)(
                S.Z,
                {
                    disabled: R,
                    type: N,
                    pickerView: e,
                },
                "emoji",
            ),
        });
    }
    $ &&
        X.push({
            key: "appLauncher",
            node: (0, r.jsx)(
                h.Z,
                {
                    channel: k,
                    type: N,
                },
                "appLauncher",
            ),
        }),
        et &&
            X.push({
                key: "submit",
                node: (0, r.jsx)(
                    P.Z,
                    {
                        onClick: U,
                        disabled: R || F,
                    },
                    "submit",
                ),
            });
    let en = (0, s.chain)(X)
        .filter((e) => null != W[e.key])
        .sortBy((e) => W[e.key])
        .map((e) => e.node)
        .value();
    return 0 === en.length
        ? null
        : (0, r.jsx)("div", {
              className: o()(x.buttons, { [x.reducedGap]: z }),
              children: en,
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
