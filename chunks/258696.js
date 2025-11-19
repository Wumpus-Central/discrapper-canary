n.d(t, { Z: () => G }), n(539854);
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
    b = n(717401),
    y = n(913663),
    O = n(117530),
    v = n(594174),
    I = n(74538),
    T = n(713913),
    S = n(541716),
    A = n(94161),
    C = n(9277),
    N = n(655678),
    R = n(897291),
    P = n(466711),
    D = n(319417),
    w = n(728386),
    L = n(763679),
    x = n(957825),
    M = n(564355);
function k(e) {
    let { disabled: t, channel: n } = e,
        i = (0, E.Z)(),
        a = (0, b.iE)(),
        o = null != a && a.length > 0;
    return null != i && o
        ? (0, r.jsx)(P.Z, {
              giftingPromotionConfig: i,
              disabled: t,
              channel: n,
          })
        : (0, r.jsx)(R.Z, {
              disabled: t,
              channel: n,
          });
}
function j(e) {
    var t, n, i, a, E, b, y;
    let { type: O, disabled: R, channel: P, handleSubmit: j, isEmpty: G, showAllButtons: B } = e,
        Z = (0, c.e7)([d.Z], () => d.Z.isSubmitButtonEnabled),
        F = U(P.id, O, G),
        { activeCommand: V, activeCommandOption: H } = (0, c.cj)([_.Z], () => ({
            activeCommand: _.Z.getActiveCommand(P.id),
            activeCommandOption: _.Z.getActiveOption(P.id),
        })),
        { paymentsBlocked: Y } = p.Z.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        {
            iconOrder: W,
            expressionsCombinedIntoEmojiButton: K,
            reducedGap: z,
        } = T.n.useConfig({ location: "ChannelTextAreaButtons" }),
        q = (0, m.Iu)((e) => e.lastActiveView),
        X = [],
        Q = !P.isDM() || void 0 === P.recipients || P.recipients.length > 1,
        J = (0, c.e7)([v.default], () => (Q ? null : v.default.getUser(P.recipients[0]))),
        $ = (0, f.R)({
            channel: P,
            chatInputType: O,
        }),
        ee = (0, g.Nt)() && (null == (t = O.confetti) ? void 0 : t.button) != null,
        et =
            (null == (n = O.submit) ? void 0 : n.button) != null &&
            ((null == (i = O.submit) ? void 0 : i.ignorePreference) || Z);
    if (
        (!l.tq &&
            ((null == (E = O.gifts) ? void 0 : E.button) != null &&
                null == V &&
                !Y &&
                (null == J || I.ZP.isPremiumEligible(J)) &&
                X.push({
                    key: "gift",
                    node: (0, r.jsx)(
                        k,
                        {
                            disabled: R,
                            channel: P,
                        },
                        "gift",
                    ),
                }),
            (null == (b = O.gifs) ? void 0 : b.button) != null &&
                null == V &&
                B &&
                X.push({
                    key: "gif",
                    node: (0, r.jsx)(
                        C.Z,
                        {
                            disabled: R,
                            type: O,
                        },
                        "gif",
                    ),
                }),
            ee &&
                null == V &&
                X.push({
                    key: "confetti",
                    node: (0, r.jsx)(
                        N.Z,
                        {
                            disabled: R,
                            channel: P,
                        },
                        "confetti",
                    ),
                }),
            !ee &&
                (null == (y = O.stickers) ? void 0 : y.button) != null &&
                null == V &&
                B &&
                X.push({
                    key: "sticker",
                    node: (0, r.jsx)(
                        w.Z,
                        {
                            disabled: R,
                            type: O,
                        },
                        "sticker",
                    ),
                }),
            X.push({
                key: "upload",
                node: (0, r.jsx)(
                    L.z,
                    {
                        disabled: R,
                        inputType: O,
                        channel: P,
                    },
                    "upload",
                ),
            }),
            O !== S.Ie.NORMAL ||
                et ||
                X.push({
                    key: "spacer",
                    node: (0, r.jsx)("div", { className: M.spacer }, "spacer"),
                })),
        (null == (a = O.emojis) ? void 0 : a.button) != null &&
            (null == V || (null != H && H.type !== u.jw.ATTACHMENT)))
    ) {
        let e = K && null != q ? q : x.X1.EMOJI;
        X.push({
            key: "emoji",
            node: (0, r.jsx)(
                A.Z,
                {
                    disabled: R,
                    type: O,
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
                    channel: P,
                    type: O,
                },
                "appLauncher",
            ),
        }),
        et &&
            X.push({
                key: "submit",
                node: (0, r.jsx)(
                    D.Z,
                    {
                        onClick: j,
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
              className: o()(M.buttons, { [M.reducedGap]: z }),
              children: en,
          });
}
function U(e, t, n) {
    return (0, c.e7)([y.Z, O.Z], () => {
        let r = y.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === O.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let G = i.memo(j);
