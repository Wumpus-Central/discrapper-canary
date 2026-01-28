n.d(t, {
    A: () => w,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(607399),
    o = n(311907),
    s = n(155718),
    l = n(775602),
    c = n(33659),
    u = n(861382),
    d = n(86379),
    f = n(670655),
    p = n(412260),
    _ = n(852218),
    h = n(931664),
    m = n(522602),
    g = n(287809),
    E = n(927578),
    y = n(838324),
    b = n(184264),
    O = n(743477),
    v = n(336618),
    A = n(437839),
    I = n(559775),
    S = n(111314);

function T(e) {
    let { disabled: t, channel: n } = e;
    return (0, o.bG)([p.A], () => Object.keys(p.A.promotionsByType[_.pt.GIFT_PROMOTION]).length > 0)
        ? (0, r.jsx)(v.A, {
              disabled: t,
              channel: n,
          })
        : (0, r.jsx)(O.A, {
              disabled: t,
              channel: n,
          });
}

function C(e) {
    var t, n, i, p, _, h;
    let { type: m, disabled: O, channel: v, handleSubmit: C, isEmpty: w, showAllButtons: R } = e,
        P = (0, o.bG)([l.A], () => l.A.isSubmitButtonEnabled),
        D = N(v.id, m, w),
        { activeCommand: L, activeCommandOption: x } = (0, o.cf)([u.A], () => ({
            activeCommand: u.A.getActiveCommand(v.id),
            activeCommandOption: u.A.getActiveOption(v.id),
        })),
        { paymentsBlocked: M } = d.A.useExperiment(
            {
                location: "dc120b_3",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        j = [],
        k = !v.isDM() || void 0 === v.recipients || v.recipients.length > 1,
        U = (0, o.bG)([g.default], () => (k ? null : g.default.getUser(v.recipients[0]))),
        G = (0, c.H)({
            channel: v,
            chatInputType: m,
        }),
        F =
            (null == (t = m.submit) ? void 0 : t.button) != null &&
            ((null == (n = m.submit) ? void 0 : n.ignorePreference) || P);
    return (!a.Fr &&
        ((null == (p = m.gifts) ? void 0 : p.button) != null &&
            null == L &&
            !M &&
            (null == U || E.Ay.isPremiumEligible(U)) &&
            j.push(
                (0, r.jsx)(
                    T,
                    {
                        disabled: O,
                        channel: v,
                    },
                    "gift",
                ),
            ),
        (null == (_ = m.gifs) ? void 0 : _.button) != null &&
            null == L &&
            R &&
            j.push(
                (0, r.jsx)(
                    b.A,
                    {
                        disabled: O,
                        type: m,
                        channel: v,
                    },
                    "gif",
                ),
            ),
        (null == (h = m.stickers) ? void 0 : h.button) != null &&
            null == L &&
            R &&
            j.push(
                (0, r.jsx)(
                    I.A,
                    {
                        disabled: O,
                        type: m,
                        channel: v,
                    },
                    "sticker",
                ),
            )),
    (null == (i = m.emojis) ? void 0 : i.button) != null &&
        (null == L || (null != x && x.type !== s.n4.ATTACHMENT)) &&
        j.push(
            (0, r.jsx)(
                y.A,
                {
                    disabled: O,
                    type: m,
                    channelId: v.id,
                },
                "emoji",
            ),
        ),
    G &&
        j.push(
            (0, r.jsx)(
                f.A,
                {
                    channelId: v.id,
                    type: m,
                },
                "appLauncher",
            ),
        ),
    F &&
        j.push(
            (0, r.jsx)(
                A.A,
                {
                    onClick: C,
                    disabled: O || D,
                },
                "submit",
            ),
        ),
    0 === j.length)
        ? null
        : (0, r.jsx)("div", {
              className: S.Uo,
              children: j,
          });
}

function N(e, t, n) {
    return (0, o.bG)([h.A, m.A], () => {
        let r = h.A.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === m.A.getUploads(e, t.drafts.type).length && n && !i;
    });
}
let w = i.memo(C);
