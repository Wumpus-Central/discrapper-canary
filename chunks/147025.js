n.d(t, {
    A: () => k,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(607399),
    c = n(311907),
    u = n(155718),
    d = n(775602),
    f = n(33659),
    p = n(861382),
    _ = n(86379),
    h = n(670655),
    m = n(151271),
    g = n(412260),
    E = n(852218),
    b = n(931664),
    y = n(522602),
    O = n(287809),
    A = n(927578),
    v = n(184761),
    S = n(355622),
    I = n(838324),
    T = n(184264),
    C = n(743477),
    N = n(336618),
    R = n(437839),
    w = n(559775),
    P = n(584905),
    D = n(698279),
    x = n(111314);

function L(e) {
    let { disabled: t, channel: n } = e;
    return (0, c.bG)([g.A], () => Object.keys(g.A.promotionsByType[E.pt.GIFT_PROMOTION]).length > 0)
        ? (0, r.jsx)(N.A, {
              disabled: t,
              channel: n,
          })
        : (0, r.jsx)(C.A, {
              disabled: t,
              channel: n,
          });
}

function j(e) {
    var t, n, i, a, g, E, b, y;
    let { type: C, disabled: N, channel: j, handleSubmit: k, isEmpty: U, showAllButtons: G } = e,
        V = (0, c.bG)([d.A], () => d.A.isSubmitButtonEnabled),
        F = M(j.id, C, U),
        { activeCommand: B, activeCommandOption: H } = (0, c.cf)([p.A], () => ({
            activeCommand: p.A.getActiveCommand(j.id),
            activeCommandOption: p.A.getActiveOption(j.id),
        })),
        { paymentsBlocked: Y } = _.A.useExperiment(
            {
                location: "dc120b_3",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        {
            iconOrder: W,
            expressionsCombinedIntoEmojiButton: K,
            reducedGap: z,
        } = v.C.useConfig({
            location: "ChannelTextAreaButtons",
        }),
        q = (0, m.RQ)((e) => e.lastActiveView),
        X =
            (null == (t = C.gifs) ? void 0 : t.button) != null &&
            (null == (n = C.stickers) ? void 0 : n.button) != null &&
            null != q
                ? q
                : D.kx.EMOJI,
        Z = [],
        Q = !j.isDM() || void 0 === j.recipients || j.recipients.length > 1,
        $ = (0, c.bG)([O.default], () => (Q ? null : O.default.getUser(j.recipients[0]))),
        J = (0, f.H)({
            channel: j,
            chatInputType: C,
        }),
        ee =
            (null == (i = C.submit) ? void 0 : i.button) != null &&
            ((null == (a = C.submit) ? void 0 : a.ignorePreference) || V);
    if (
        (!l.Fr &&
            ((null == (E = C.gifts) ? void 0 : E.button) != null &&
                null == B &&
                !Y &&
                (null == $ || A.Ay.isPremiumEligible($)) &&
                Z.push({
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
            (null == (b = C.gifs) ? void 0 : b.button) != null &&
                null == B &&
                G &&
                Z.push({
                    key: "gif",
                    node: (0, r.jsx)(
                        T.A,
                        {
                            disabled: N,
                            type: C,
                            channel: j,
                        },
                        "gif",
                    ),
                }),
            (null == (y = C.stickers) ? void 0 : y.button) != null &&
                null == B &&
                G &&
                Z.push({
                    key: "sticker",
                    node: (0, r.jsx)(
                        w.A,
                        {
                            disabled: N,
                            type: C,
                            channel: j,
                        },
                        "sticker",
                    ),
                }),
            Z.push({
                key: "upload",
                node: (0, r.jsx)(
                    P.n,
                    {
                        disabled: N,
                        inputType: C,
                        channel: j,
                    },
                    "upload",
                ),
            }),
            C !== S.oU.NORMAL ||
                ee ||
                Z.push({
                    key: "spacer",
                    node: (0, r.jsx)(
                        "div",
                        {
                            className: x.jH,
                        },
                        "spacer",
                    ),
                })),
        (null == (g = C.emojis) ? void 0 : g.button) != null &&
            (null == B || (null != H && H.type !== u.n4.ATTACHMENT)))
    ) {
        let e = K ? X : D.kx.EMOJI;
        Z.push({
            key: "emoji",
            node: (0, r.jsx)(
                I.A,
                {
                    disabled: N,
                    type: C,
                    pickerView: e,
                    channelId: j.id,
                },
                "emoji",
            ),
        });
    }
    J &&
        Z.push({
            key: "appLauncher",
            node: (0, r.jsx)(
                h.A,
                {
                    channelId: j.id,
                    type: C,
                },
                "appLauncher",
            ),
        }),
        ee &&
            Z.push({
                key: "submit",
                node: (0, r.jsx)(
                    R.A,
                    {
                        onClick: k,
                        disabled: N || F,
                    },
                    "submit",
                ),
            });
    let et = (0, o.chain)(Z)
        .filter((e) => null != W[e.key])
        .sortBy((e) => W[e.key])
        .map((e) => e.node)
        .value();
    return 0 === et.length
        ? null
        : (0, r.jsx)("div", {
              className: s()(x.Uo, {
                  [x.d5]: z,
              }),
              children: et,
          });
}

function M(e, t, n) {
    return (0, c.bG)([b.A, y.A], () => {
        let r = b.A.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === y.A.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let k = i.memo(j);
