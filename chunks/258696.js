n.d(t, { Z: () => k }), n(539854);
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
    h = n(775685),
    m = n(28546),
    g = n(1844),
    E = n(397047),
    b = n(913663),
    y = n(117530),
    O = n(594174),
    v = n(74538),
    S = n(713913),
    I = n(541716),
    T = n(94161),
    C = n(9277),
    A = n(897291),
    N = n(466711),
    P = n(319417),
    w = n(728386),
    R = n(763679),
    D = n(957825),
    x = n(72775);
function L(e) {
    let { disabled: t, channel: n } = e;
    return (0, c.e7)([g.Z], () => Object.keys(g.Z.promotionsByType[E.$k.GIFT_PROMOTION]).length > 0)
        ? (0, r.jsx)(N.Z, {
              disabled: t,
              channel: n,
          })
        : (0, r.jsx)(A.Z, {
              disabled: t,
              channel: n,
          });
}
function j(e) {
    var t, n, i, a, g, E, b, y;
    let { type: A, disabled: N, channel: j, handleSubmit: k, isEmpty: U, showAllButtons: G } = e,
        Z = (0, c.e7)([d.Z], () => d.Z.isSubmitButtonEnabled),
        F = M(j.id, A, U),
        { activeCommand: B, activeCommandOption: V } = (0, c.cj)([p.Z], () => ({
            activeCommand: p.Z.getActiveCommand(j.id),
            activeCommandOption: p.Z.getActiveOption(j.id),
        })),
        { paymentsBlocked: H } = _.Z.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        {
            iconOrder: Y,
            expressionsCombinedIntoEmojiButton: W,
            reducedGap: K,
        } = S.n.useConfig({ location: "ChannelTextAreaButtons" }),
        z = (0, m.Iu)((e) => e.lastActiveView),
        q =
            (null == (t = A.gifs) ? void 0 : t.button) != null &&
            (null == (n = A.stickers) ? void 0 : n.button) != null &&
            null != z
                ? z
                : D.X1.EMOJI,
        Q = [],
        X = !j.isDM() || void 0 === j.recipients || j.recipients.length > 1,
        J = (0, c.e7)([O.default], () => (X ? null : O.default.getUser(j.recipients[0]))),
        $ = (0, f.R)({
            channel: j,
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
                (null == J || v.ZP.isPremiumEligible(J)) &&
                Q.push({
                    key: "gift",
                    node: (0, r.jsx)(
                        L,
                        {
                            disabled: N,
                            channel: j,
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
                        C.Z,
                        {
                            disabled: N,
                            type: A,
                            channel: j,
                        },
                        "gif",
                    ),
                }),
            (null == (y = A.stickers) ? void 0 : y.button) != null &&
                null == B &&
                G &&
                Q.push({
                    key: "sticker",
                    node: (0, r.jsx)(
                        w.Z,
                        {
                            disabled: N,
                            type: A,
                            channel: j,
                        },
                        "sticker",
                    ),
                }),
            Q.push({
                key: "upload",
                node: (0, r.jsx)(
                    R.z,
                    {
                        disabled: N,
                        inputType: A,
                        channel: j,
                    },
                    "upload",
                ),
            }),
            A !== I.Ie.NORMAL ||
                ee ||
                Q.push({
                    key: "spacer",
                    node: (0, r.jsx)("div", { className: x.spacer }, "spacer"),
                })),
        (null == (g = A.emojis) ? void 0 : g.button) != null &&
            (null == B || (null != V && V.type !== u.jw.ATTACHMENT)))
    ) {
        let e = W ? q : D.X1.EMOJI;
        Q.push({
            key: "emoji",
            node: (0, r.jsx)(
                T.Z,
                {
                    disabled: N,
                    type: A,
                    pickerView: e,
                    channelId: j.id,
                },
                "emoji",
            ),
        });
    }
    $ &&
        Q.push({
            key: "appLauncher",
            node: (0, r.jsx)(
                h.Z,
                {
                    channelId: j.id,
                    type: A,
                },
                "appLauncher",
            ),
        }),
        ee &&
            Q.push({
                key: "submit",
                node: (0, r.jsx)(
                    P.Z,
                    {
                        onClick: k,
                        disabled: N || F,
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
              className: o()(x.buttons, { [x.reducedGap]: K }),
              children: et,
          });
}
function M(e, t, n) {
    return (0, c.e7)([b.Z, y.Z], () => {
        let r = b.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === y.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let k = i.memo(j);
