(n.d(e, { default: () => j }), n(388685));
var l = n(255367),
    a = n(73800),
    i = n(650557),
    r = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(857595),
    u = n(607070),
    d = n(877794),
    b = n(695346),
    p = n(626135),
    g = n(358085),
    f = n(998502),
    h = n(887490),
    y = n(517440),
    m = n(981631),
    S = n(388032);
function j(t) {
    var e, n, j, T, x, E, O, C, k;
    let { text: N, editor: v, target: A, onHeightUpdate: P, onSelect: L } = t,
        Z = a.useCallback(() => {
            (0, o.Zy)(() => {
                (i.F3.focus(v), setTimeout(() => h.bN.focus(v), 0));
            });
        }, [v]),
        [w, I] = (0, d.Z)({
            text: N,
            target: A,
            onHeightUpdate: P
        }),
        D = (0, y.Z)(v),
        M = (0, r.e7)([u.Z], () => u.Z.isSubmitButtonEnabled),
        _ = b.Xk.useSetting();
    if (!g.isPlatformEmbedded) return null;
    let R = null != (O = null == (n = v.chatInputType) || null == (e = n.commands) ? void 0 : e.enabled) && O,
        G = null != (C = null == (T = v.chatInputType) || null == (j = T.stickers) ? void 0 : j.autoSuggest) && C,
        H = null != (k = null == (E = v.chatInputType) || null == (x = E.submit) ? void 0 : x.button) && k,
        U = R || G,
        X =
            '' !== N
                ? [
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: 'copy',
                              label: S.intl.string(S.t.OpuAlJ),
                              hint: (0, g.isMac)() ? '\u2318C' : 'Ctrl+C',
                              action: () => setTimeout(() => f.ZP.copy(), 0)
                          },
                          'copy'
                      ),
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: 'cut',
                              label: S.intl.string(S.t.pNPVhY),
                              hint: (0, g.isMac)() ? '\u2318X' : 'Ctrl+X',
                              action: () => setTimeout(() => f.ZP.cut(), 0)
                          },
                          'cut'
                      )
                  ]
                : null,
        F = (0, l.jsx)(s.S89, {
            id: 'command-suggestions',
            label: S.intl.string(S.t['9rJKFx']),
            checked: _,
            action: () => {
                let t = !_;
                (b.Xk.updateSetting(t),
                    p.default.track(m.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: m.qAy.CONTEXT_MENU }
                    }));
            }
        });
    return (0, l.jsxs)(s.v2r, {
        navId: 'textarea-context',
        onClose: Z,
        'aria-label': S.intl.string(S.t.NWlDSE),
        onSelect: L,
        children: [
            U &&
                (0, l.jsx)(s.sNh, {
                    id: 'suggestions',
                    label: S.intl.string(S.t.zgxg7u),
                    children: R && F
                }),
            H &&
                (0, l.jsx)(s.S89, {
                    id: 'submit-button',
                    label: S.intl.string(S.t.G8XDys),
                    checked: M,
                    action: () => {
                        (0, c.eN)();
                    }
                }),
            (0, l.jsx)(s.kSQ, { children: w }),
            (0, l.jsxs)(s.kSQ, {
                children: [I, D]
            }),
            (0, l.jsxs)(s.kSQ, {
                children: [
                    X,
                    (0, l.jsx)(s.sNh, {
                        id: 'paste',
                        label: S.intl.string(S.t.lMUxVl),
                        hint: (0, g.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => f.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
