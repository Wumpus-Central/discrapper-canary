n.d(t, { Z: () => M }), n(539854);
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
    p = n(998698),
    _ = n(211242),
    m = n(775685),
    h = n(28546),
    g = n(347896),
    E = n(913663),
    b = n(117530),
    y = n(594174),
    O = n(74538),
    v = n(713913),
    S = n(541716),
    I = n(94161),
    T = n(9277),
    C = n(897291),
    A = n(466711),
    N = n(319417),
    P = n(728386),
    R = n(763679),
    w = n(957825),
    D = n(72775);
function x(e) {
    let { disabled: t, channel: n } = e,
        i = (0, g.Z)();
    return null != i
        ? (0, r.jsx)(A.Z, {
              giftingPromotionConfig: i,
              disabled: t,
              channel: n,
          })
        : (0, r.jsx)(C.Z, {
              disabled: t,
              channel: n,
          });
}
function L(e) {
    var t, n, i, a, g, E, b, C;
    let { type: A, disabled: L, channel: M, handleSubmit: k, isEmpty: U, showAllButtons: G } = e,
        Z = (0, c.e7)([d.Z], () => d.Z.isSubmitButtonEnabled),
        F = j(M.id, A, U),
        { activeCommand: B, activeCommandOption: V } = (0, c.cj)([p.Z], () => ({
            activeCommand: p.Z.getActiveCommand(M.id),
            activeCommandOption: p.Z.getActiveOption(M.id),
        })),
        { paymentsBlocked: H } = _.Z.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        {
            iconOrder: Y,
            expressionsCombinedIntoEmojiButton: W,
            reducedGap: K,
        } = v.n.useConfig({ location: "ChannelTextAreaButtons" }),
        z = (0, h.Iu)((e) => e.lastActiveView),
        q =
            (null == (t = A.gifs) ? void 0 : t.button) != null &&
            (null == (n = A.stickers) ? void 0 : n.button) != null &&
            null != z
                ? z
                : w.X1.EMOJI,
        Q = [],
        X = !M.isDM() || void 0 === M.recipients || M.recipients.length > 1,
        J = (0, c.e7)([y.default], () => (X ? null : y.default.getUser(M.recipients[0]))),
        $ = (0, f.R)({
            channel: M,
            chatInputType: A,
        }),
        ee =
            (null == (i = A.submit) ? void 0 : i.button) != null &&
            ((null == (a = A.submit) ? void 0 : a.ignorePreference) || Z);
    if (
        (!l.tq &&
            ((null == (E = A.gifts) ? void 0 : E.button) != null &&
                null == B &&
                !H &&
                (null == J || O.ZP.isPremiumEligible(J)) &&
                Q.push({
                    key: "gift",
                    node: (0, r.jsx)(
                        x,
                        {
                            disabled: L,
                            channel: M,
                        },
                        "gift",
                    ),
                }),
            (null == (b = A.gifs) ? void 0 : b.button) != null &&
                null == B &&
                G &&
                Q.push({
                    key: "gif",
                    node: (0, r.jsx)(
                        T.Z,
                        {
                            disabled: L,
                            type: A,
                            channel: M,
                        },
                        "gif",
                    ),
                }),
            (null == (C = A.stickers) ? void 0 : C.button) != null &&
                null == B &&
                G &&
                Q.push({
                    key: "sticker",
                    node: (0, r.jsx)(
                        P.Z,
                        {
                            disabled: L,
                            type: A,
                            channel: M,
                        },
                        "sticker",
                    ),
                }),
            Q.push({
                key: "upload",
                node: (0, r.jsx)(
                    R.z,
                    {
                        disabled: L,
                        inputType: A,
                        channel: M,
                    },
                    "upload",
                ),
            }),
            A !== S.Ie.NORMAL ||
                ee ||
                Q.push({
                    key: "spacer",
                    node: (0, r.jsx)("div", { className: D.spacer }, "spacer"),
                })),
        (null == (g = A.emojis) ? void 0 : g.button) != null &&
            (null == B || (null != V && V.type !== u.jw.ATTACHMENT)))
    ) {
        let e = W ? q : w.X1.EMOJI;
        Q.push({
            key: "emoji",
            node: (0, r.jsx)(
                I.Z,
                {
                    disabled: L,
                    type: A,
                    pickerView: e,
                    channelId: M.id,
                },
                "emoji",
            ),
        });
    }
    $ &&
        Q.push({
            key: "appLauncher",
            node: (0, r.jsx)(
                m.Z,
                {
                    channelId: M.id,
                    type: A,
                },
                "appLauncher",
            ),
        }),
        ee &&
            Q.push({
                key: "submit",
                node: (0, r.jsx)(
                    N.Z,
                    {
                        onClick: k,
                        disabled: L || F,
                    },
                    "submit",
                ),
            });
    let et = (0, s.chain)(Q)
        .filter((e) => null != Y[e.key])
        .sortBy((e) => Y[e.key])
        .map((e) => e.node)
        .value();
    return 0 === et.length
        ? null
        : (0, r.jsx)("div", {
              className: o()(D.buttons, { [D.reducedGap]: K }),
              children: et,
          });
}
function j(e, t, n) {
    return (0, c.e7)([E.Z, b.Z], () => {
        let r = E.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === b.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let M = i.memo(L);
