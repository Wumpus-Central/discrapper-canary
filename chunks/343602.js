n.d(e, { default: () => j }), n(388685);
var l = n(951288),
    a = n(647438),
    i = n(755712),
    r = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(857595),
    u = n(607070),
    d = n(877794),
    b = n(695346),
    f = n(626135),
    p = n(358085),
    g = n(998502),
    h = n(887490),
    y = n(517440),
    m = n(981631),
    S = n(388032);
function j(t) {
    var e, n, j, T, E, x, C, O, k;
    let { text: N, editor: A, target: v, onHeightUpdate: P, onSelect: I } = t,
        L = a.useCallback(() => {
            (0, o.Zy)(() => {
                i.F3.focus(A), setTimeout(() => h.bN.focus(A), 0);
            });
        }, [A]),
        [Z, w] = (0, d.Z)({
            text: N,
            target: v,
            onHeightUpdate: P,
        }),
        _ = (0, y.Z)(A),
        D = (0, r.e7)([u.Z], () => u.Z.isSubmitButtonEnabled),
        M = b.Xk.useSetting();
    if (!p.isPlatformEmbedded) return null;
    let F = null != (C = null == (n = A.chatInputType) || null == (e = n.commands) ? void 0 : e.enabled) && C,
        R = null != (O = null == (T = A.chatInputType) || null == (j = T.stickers) ? void 0 : j.autoSuggest) && O,
        G = null != (k = null == (x = A.chatInputType) || null == (E = x.submit) ? void 0 : E.button) && k,
        H = F || R,
        U =
            "" !== N
                ? [
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: "cut",
                              label: S.intl.string(S.t.pNPVhY),
                              hint: (0, p.isMac)() ? "\u2318X" : "Ctrl+X",
                              action: () => setTimeout(() => g.ZP.cut(), 0),
                          },
                          "cut",
                      ),
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: "copy",
                              label: S.intl.string(S.t.OpuAlJ),
                              hint: (0, p.isMac)() ? "\u2318C" : "Ctrl+C",
                              action: () => setTimeout(() => g.ZP.copy(), 0),
                          },
                          "copy",
                      ),
                  ]
                : null,
        X = (0, l.jsx)(s.S89, {
            id: "command-suggestions",
            label: S.intl.string(S.t["9rJKFx"]),
            checked: M,
            action: () => {
                let t = !M;
                b.Xk.updateSetting(t),
                    f.default.track(m.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: m.qAy.CONTEXT_MENU },
                    });
            },
        });
    return (0, l.jsxs)(s.v2r, {
        navId: "textarea-context",
        onClose: L,
        "aria-label": S.intl.string(S.t.NWlDSE),
        onSelect: I,
        children: [
            H &&
                (0, l.jsx)(s.sNh, {
                    id: "suggestions",
                    label: S.intl.string(S.t.zgxg7u),
                    children: F && X,
                }),
            G &&
                (0, l.jsx)(s.S89, {
                    id: "submit-button",
                    label: S.intl.string(S.t.G8XDys),
                    checked: D,
                    action: () => {
                        (0, c.eN)();
                    },
                }),
            (0, l.jsx)(s.kSQ, { children: Z }),
            (0, l.jsxs)(s.kSQ, {
                children: [w, _],
            }),
            (0, l.jsxs)(s.kSQ, {
                children: [
                    U,
                    (0, l.jsx)(s.sNh, {
                        id: "paste",
                        label: S.intl.string(S.t.lMUxVl),
                        hint: (0, p.isMac)() ? "\u2318V" : "Ctrl+V",
                        action: () => setTimeout(() => g.ZP.paste(), 0),
                    }),
                ],
            }),
        ],
    });
}
