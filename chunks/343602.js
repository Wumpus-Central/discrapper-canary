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
    g = n(626135),
    f = n(358085),
    h = n(998502),
    y = n(887490),
    m = n(517440),
    S = n(981631),
    j = n(388032);
function T(t) {
    var e, n, T, x, E, k, O, C, v, N, P, L;
    let { text: A, editor: w, target: Z, onHeightUpdate: I, onSelect: M } = t,
        D = (0, d.zM)("SlateTextAreaContextMenu", { autoTrackExposure: !1 }).enabled,
        _ = a.useCallback(() => {
            (0, o.Zy)(() => {
                i.F3.focus(w), setTimeout(() => y.bN.focus(w), 0);
            });
        }, [w]),
        [H, R] = (0, b.Z)({
            text: A,
            target: Z,
            onHeightUpdate: I,
        }),
        G = (0, m.Z)(w),
        K = (0, r.e7)([u.Z], () => u.Z.isSubmitButtonEnabled),
        U = p.Xk.useSetting(),
        V = p.HV.useSetting();
    if (!f.isPlatformEmbedded) return null;
    let X = null != (v = null == (n = w.chatInputType) || null == (e = n.commands) ? void 0 : e.enabled) && v,
        F = null != (N = null == (x = w.chatInputType) || null == (T = x.stickers) ? void 0 : T.autoSuggest) && N,
        W = null != (P = null == (k = w.chatInputType) || null == (E = k.submit) ? void 0 : E.button) && P,
        Y =
            null !=
                (L = null == (C = w.chatInputType) || null == (O = C.autocomplete) ? void 0 : O.mentionSuggestions) &&
            L,
        Q = X || F,
        q =
            "" !== A
                ? [
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: "cut",
                              label: j.intl.string(j.t.pNPVhe),
                              hint: (0, f.isMac)() ? "\u2318X" : "Ctrl+X",
                              action: () => setTimeout(() => h.ZP.cut(), 0),
                          },
                          "cut",
                      ),
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: "copy",
                              label: j.intl.string(j.t.OpuAlK),
                              hint: (0, f.isMac)() ? "\u2318C" : "Ctrl+C",
                              action: () => setTimeout(() => h.ZP.copy(), 0),
                          },
                          "copy",
                      ),
                  ]
                : null,
        z = (0, l.jsx)(s.S89, {
            id: "command-suggestions",
            label: j.intl.string(j.t["9rJKF7"]),
            checked: U,
            action: () => {
                let t = !U;
                p.Xk.updateSetting(t),
                    g.default.track(S.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: S.qAy.CONTEXT_MENU },
                    });
            },
        });
    return (0, l.jsxs)(s.v2r, {
        navId: "textarea-context",
        onClose: _,
        "aria-label": j.intl.string(j.t.NWlDSI),
        onSelect: M,
        children: [
            Q &&
                (0, l.jsxs)(s.sNh, {
                    id: "suggestions",
                    label: j.intl.string(j.t.zgxg7v),
                    children: [
                        X && z,
                        D &&
                            Y &&
                            (0, l.jsx)(s.S89, {
                                id: "mention-suggestions",
                                label: j.intl.string(j.t.cpmP4L),
                                checked: V,
                                action: () => {
                                    p.HV.updateSetting(!V);
                                },
                            }),
                    ],
                }),
            W &&
                (0, l.jsx)(s.S89, {
                    id: "submit-button",
                    label: j.intl.string(j.t.G8XDyj),
                    checked: K,
                    action: () => {
                        (0, c.eN)();
                    },
                }),
            (0, l.jsx)(s.kSQ, { children: H }),
            (0, l.jsxs)(s.kSQ, {
                children: [R, G],
            }),
            (0, l.jsxs)(s.kSQ, {
                children: [
                    q,
                    (0, l.jsx)(s.sNh, {
                        id: "paste",
                        label: j.intl.string(j.t.lMUxVi),
                        hint: (0, f.isMac)() ? "\u2318V" : "Ctrl+V",
                        action: () => setTimeout(() => h.ZP.paste(), 0),
                    }),
                ],
            }),
        ],
    });
}
