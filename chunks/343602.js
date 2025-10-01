n.d(e, { default: () => j }), n(388685);
var l = n(951288),
    a = n(647438),
    i = n(755712),
    r = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(857595),
    u = n(607070),
    d = n(657871),
    b = n(877794),
    p = n(695346),
    g = n(626135),
    f = n(358085),
    h = n(998502),
    y = n(887490),
    m = n(517440),
    S = n(981631),
    T = n(388032);
function j(t) {
    var e, n, j, x, E, C, k, O, N, A, v, P;
    let { text: I, editor: L, target: Z, onHeightUpdate: w, onSelect: _ } = t,
        M = (0, d.zM)("SlateTextAreaContextMenu", { autoTrackExposure: !1 }).enabled,
        D = a.useCallback(() => {
            (0, o.Zy)(() => {
                i.F3.focus(L), setTimeout(() => y.bN.focus(L), 0);
            });
        }, [L]),
        [F, H] = (0, b.Z)({
            text: I,
            target: Z,
            onHeightUpdate: w,
        }),
        R = (0, m.Z)(L),
        G = (0, r.e7)([u.Z], () => u.Z.isSubmitButtonEnabled),
        K = p.Xk.useSetting(),
        U = p.HV.useSetting();
    if (!f.isPlatformEmbedded) return null;
    let V = null != (N = null == (n = L.chatInputType) || null == (e = n.commands) ? void 0 : e.enabled) && N,
        X = null != (A = null == (x = L.chatInputType) || null == (j = x.stickers) ? void 0 : j.autoSuggest) && A,
        W = null != (v = null == (C = L.chatInputType) || null == (E = C.submit) ? void 0 : E.button) && v,
        Y =
            null !=
                (P = null == (O = L.chatInputType) || null == (k = O.autocomplete) ? void 0 : k.mentionSuggestions) &&
            P,
        q = V || X,
        Q =
            "" !== I
                ? [
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: "cut",
                              label: T.intl.string(T.t.pNPVhY),
                              hint: (0, f.isMac)() ? "\u2318X" : "Ctrl+X",
                              action: () => setTimeout(() => h.ZP.cut(), 0),
                          },
                          "cut",
                      ),
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: "copy",
                              label: T.intl.string(T.t.OpuAlJ),
                              hint: (0, f.isMac)() ? "\u2318C" : "Ctrl+C",
                              action: () => setTimeout(() => h.ZP.copy(), 0),
                          },
                          "copy",
                      ),
                  ]
                : null,
        B = (0, l.jsx)(s.S89, {
            id: "command-suggestions",
            label: T.intl.string(T.t["9rJKFx"]),
            checked: K,
            action: () => {
                let t = !K;
                p.Xk.updateSetting(t),
                    g.default.track(S.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: S.qAy.CONTEXT_MENU },
                    });
            },
        });
    return (0, l.jsxs)(s.v2r, {
        navId: "textarea-context",
        onClose: D,
        "aria-label": T.intl.string(T.t.NWlDSE),
        onSelect: _,
        children: [
            q &&
                (0, l.jsxs)(s.sNh, {
                    id: "suggestions",
                    label: T.intl.string(T.t.zgxg7u),
                    children: [
                        V && B,
                        M &&
                            Y &&
                            (0, l.jsx)(s.S89, {
                                id: "mention-suggestions",
                                label: T.intl.string(T.t.cpmP4O),
                                checked: U,
                                action: () => {
                                    p.HV.updateSetting(!U);
                                },
                            }),
                    ],
                }),
            W &&
                (0, l.jsx)(s.S89, {
                    id: "submit-button",
                    label: T.intl.string(T.t.G8XDys),
                    checked: G,
                    action: () => {
                        (0, c.eN)();
                    },
                }),
            (0, l.jsx)(s.kSQ, { children: F }),
            (0, l.jsxs)(s.kSQ, {
                children: [H, R],
            }),
            (0, l.jsxs)(s.kSQ, {
                children: [
                    Q,
                    (0, l.jsx)(s.sNh, {
                        id: "paste",
                        label: T.intl.string(T.t.lMUxVl),
                        hint: (0, f.isMac)() ? "\u2318V" : "Ctrl+V",
                        action: () => setTimeout(() => h.ZP.paste(), 0),
                    }),
                ],
            }),
        ],
    });
}
