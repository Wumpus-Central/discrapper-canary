n.d(e, { default: () => T }), n(388685);
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
    f = n(626135),
    g = n(358085),
    h = n(998502),
    y = n(887490),
    m = n(517440),
    S = n(981631),
    j = n(388032);
function T(t) {
    var e, n, T, x, E, C, k, O, v, N, A, P;
    let { text: I, editor: L, target: w, onHeightUpdate: Z, onSelect: _ } = t,
        M = (0, d.zM)("SlateTextAreaContextMenu", { autoTrackExposure: !1 }).enabled,
        D = a.useCallback(() => {
            (0, o.Zy)(() => {
                i.F3.focus(L), setTimeout(() => y.bN.focus(L), 0);
            });
        }, [L]),
        [F, H] = (0, b.Z)({
            text: I,
            target: w,
            onHeightUpdate: Z,
        }),
        R = (0, m.Z)(L),
        G = (0, r.e7)([u.Z], () => u.Z.isSubmitButtonEnabled),
        K = p.Xk.useSetting(),
        U = p.HV.useSetting();
    if (!g.isPlatformEmbedded) return null;
    let V = null != (v = null == (n = L.chatInputType) || null == (e = n.commands) ? void 0 : e.enabled) && v,
        X = null != (N = null == (x = L.chatInputType) || null == (T = x.stickers) ? void 0 : T.autoSuggest) && N,
        W = null != (A = null == (C = L.chatInputType) || null == (E = C.submit) ? void 0 : E.button) && A,
        Y =
            null !=
                (P = null == (O = L.chatInputType) || null == (k = O.autocomplete) ? void 0 : k.mentionSuggestions) &&
            P,
        Q = V || X,
        q =
            "" !== I
                ? [
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: "cut",
                              label: j.intl.string(j.t.pNPVhe),
                              hint: (0, g.isMac)() ? "\u2318X" : "Ctrl+X",
                              action: () => setTimeout(() => h.ZP.cut(), 0),
                          },
                          "cut",
                      ),
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: "copy",
                              label: j.intl.string(j.t.OpuAlK),
                              hint: (0, g.isMac)() ? "\u2318C" : "Ctrl+C",
                              action: () => setTimeout(() => h.ZP.copy(), 0),
                          },
                          "copy",
                      ),
                  ]
                : null,
        B = (0, l.jsx)(s.S89, {
            id: "command-suggestions",
            label: j.intl.string(j.t["9rJKF7"]),
            checked: K,
            action: () => {
                let t = !K;
                p.Xk.updateSetting(t),
                    f.default.track(S.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: S.qAy.CONTEXT_MENU },
                    });
            },
        });
    return (0, l.jsxs)(s.v2r, {
        navId: "textarea-context",
        onClose: D,
        "aria-label": j.intl.string(j.t.NWlDSI),
        onSelect: _,
        children: [
            Q &&
                (0, l.jsxs)(s.sNh, {
                    id: "suggestions",
                    label: j.intl.string(j.t.zgxg7v),
                    children: [
                        V && B,
                        M &&
                            Y &&
                            (0, l.jsx)(s.S89, {
                                id: "mention-suggestions",
                                label: j.intl.string(j.t.cpmP4L),
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
                    label: j.intl.string(j.t.G8XDyj),
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
                    q,
                    (0, l.jsx)(s.sNh, {
                        id: "paste",
                        label: j.intl.string(j.t.lMUxVi),
                        hint: (0, g.isMac)() ? "\u2318V" : "Ctrl+V",
                        action: () => setTimeout(() => h.ZP.paste(), 0),
                    }),
                ],
            }),
        ],
    });
}
