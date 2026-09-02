n.d(t, { default: () => G, d: () => O });
var l = n(477900),
    i = n(582128),
    s = n(189213),
    a = n(452027),
    r = n(243721),
    o = n(192308),
    c = n(866665),
    d = n(793574),
    u = n(355622),
    m = n(408018),
    h = n(273754),
    x = n(376310),
    g = n(747926),
    f = n(55294),
    j = n(807632),
    v = n(17928),
    p = n(454292),
    A = n(659617),
    C = n(480595),
    N = n(461213),
    b = n(652215),
    E = n(123292),
    S = n(834730),
    y = n(688810),
    T = n(359800),
    I = n(206828),
    _ = n(769015),
    k = n(490094),
    M = n(375708),
    R = n(425256);
function w(e) {
    let t,
        { application: n, size: i = "md", analyticsLocation: s = d.A.GAME_INVITE_CHANNEL_ACCOUNT_LINK_BANNER } = e,
        { analyticsLocations: a } = (0, y.Ay)(s),
        { canStartAuthorization: r, hasAlreadyLinked: o, startAuthorization: c, fetched: u } = (0, I.RD)(n),
        m = (0, T.z)(c, o);
    if (!u || !r || o) return null;
    let h = !1;
    return (
        "sm" === i
            ? (t = M.intl.format(k.default.vznMVa, { onClick: () => m({ analyticsLocations: a }) }))
            : ((t = M.intl.string(k.default.UHF2Zn)), (h = !0)),
        (0, l.jsxs)("div", {
            className: R._,
            children: [
                (0, l.jsx)(_.A, { game: n, size: _.M.MEDIUM }),
                (0, l.jsx)(S.E, { variant: "text-sm/medium", color: "text-default", className: R.d, children: t }),
                h
                    ? (0, l.jsx)(E.Q, {
                          variant: "primary",
                          size: "sm",
                          text: M.intl.string(k.default.EBSaL4),
                          onClick: () => m({ analyticsLocations: a }),
                      })
                    : null,
            ],
        })
    );
}
n(253913);
var L = n(548759);
let P = u.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    D = "create-game-invite-post";
function O(e) {
    (0, o.openModalLazy)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 531729));
            return (n) => (0, l.jsx)(t, { ...n, parentChannel: e });
        },
        { modalKey: D },
    );
}
let F = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function G(e) {
    let { parentChannel: t, transitionState: n, onClose: o } = e,
        u = i.useMemo(() => t.availableTags ?? [], [t.availableTags]),
        [{ textValue: E, richValue: S }, y] = i.useState(() => (0, m.N3)()),
        [T, I] = i.useState(!1),
        [_, R] = i.useState(() => new Set()),
        O = (0, j.t4)(_),
        {
            application: G,
            noMicTag: z,
            voiceChatEnabled: U,
            voiceToggleDisabled: H,
            submitting: B,
            canSubmit: V,
            submit: W,
        } = (function (e) {
            let { parentChannel: t, description: n, appliedTagIds: l, upload: s, onThreadCreated: a } = e,
                { application: r } = (0, j._k)(t.id),
                o = (0, v.bG)([C.A, N.A], () => (0, p.A)(C.A, N.A, r?.id), [r]),
                { noMicTag: c, voiceChatEnabled: d, voiceToggleDisabled: u } = (0, j.Qq)(t.availableTags ?? [], l),
                m = i.useMemo(() => {
                    if (null != o && (0, j.Ij)(o)) return { type: b.xL.JOIN, activity: o };
                }, [o]),
                h = (0, A.w0)({
                    parentChannel: t,
                    name: (0, j.Zu)(n),
                    appliedTags: l,
                    activityAction: m,
                    applicationId: r?.id,
                    voiceChatEnabled: d,
                    upload: s,
                    onThreadCreated: a,
                }),
                [x, g] = i.useState(!1),
                f = !x && n.trim().length > 0 && n.length <= j.YS,
                E = i.useCallback(async () => {
                    if (f) {
                        g(!0);
                        try {
                            await h(n);
                        } catch {
                            g(!1);
                        }
                    }
                }, [f, h, n]);
            return {
                application: r,
                noMicTag: c,
                voiceChatEnabled: d,
                voiceToggleDisabled: u,
                submitting: x,
                canSubmit: f,
                submit: E,
            };
        })({
            parentChannel: t,
            description: E,
            appliedTagIds: _,
            upload: f.Se,
            onThreadCreated: (e) => {
                (0, g.JA)(e), o();
            },
        }),
        $ = i.useCallback((e, t, n) => {
            y({ textValue: t, richValue: n });
        }, []),
        q = i.useCallback((e) => {
            R((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        K = i.useCallback(
            (e) => {
                null != z &&
                    R((t) => {
                        let n = new Set(t);
                        return e ? n.delete(z.id) : n.add(z.id), n;
                    });
            },
            [z],
        );
    return (0, l.jsx)(s.Modal, {
        title: M.intl.string(k.default.tOsHsu),
        transitionState: n,
        onClose: o,
        actions: [
            { variant: "secondary", text: M.intl.string(M.t["ETE/oC"]), onClick: o, disabled: B },
            { variant: "primary", text: M.intl.string(M.t.CumH4u), onClick: W, disabled: !V, loading: B },
        ],
        children: (0, l.jsxs)("div", {
            className: L.rf,
            children: [
                (0, l.jsx)(a.D, {
                    required: !0,
                    label: M.intl.string(k.default["/mEbGf"]),
                    children: (0, l.jsx)(h.Ay, {
                        type: P,
                        channel: t,
                        placeholder: M.intl.string(k.default["SU/IAE"]),
                        textValue: E,
                        richValue: S,
                        focused: T,
                        onChange: $,
                        onFocus: () => I(!0),
                        onBlur: () => I(!1),
                        onSubmit: F,
                        parentModalKey: D,
                        disableThemedBackground: !0,
                        maxCharacterCount: j.YS,
                        showRemainingCharsAfterCount: j.YS,
                        editorClassName: L.s7,
                    }),
                }),
                u.length > 0
                    ? (0, l.jsx)(a.D, {
                          label: M.intl.string(M.t.KM6lRG),
                          description: M.intl.formatToPlainString(k.default["yoIAe/"], { tagsMax: 5 }),
                          children: (0, l.jsx)("div", {
                              className: L.GA,
                              children: u.map((e) =>
                                  (0, l.jsx)(
                                      x.A,
                                      {
                                          tag: e,
                                          size: x.A.Sizes.SMALL,
                                          selected: _.has(e.id),
                                          onClick: !O || _.has(e.id) ? () => q(e.id) : void 0,
                                          disabled: !_.has(e.id) && O,
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(a.D, {
                    layout: "horizontal",
                    label: M.intl.string(k.default.Xd2NFi),
                    description: M.intl.string(k.default.G91SYQ),
                    children: (0, l.jsx)(c.m, {
                        text: M.intl.formatToPlainString(k.default["0s2ICk"], { noMicTagName: j.Dg }),
                        shouldShow: null == z,
                        asContainer: !0,
                        children: (0, l.jsx)(r.d, { checked: U, onChange: K, disabled: H }),
                    }),
                }),
                null != G &&
                    (0, l.jsx)(w, {
                        application: G,
                        size: "md",
                        analyticsLocation: d.A.GAME_INVITE_CHANNEL_POST_CREATION,
                    }),
            ],
        }),
    });
}
