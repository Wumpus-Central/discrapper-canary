n.d(e, { default: () => j }), n(388685);
var l = n(200651),
    i = n(192379),
    r = n(270445),
    c = n(442837),
    s = n(481060),
    a = n(239091),
    o = n(857595),
    u = n(607070),
    d = n(886036),
    b = n(877794),
    p = n(695346),
    f = n(626135),
    h = n(358085),
    g = n(998502),
    E = n(887490),
    O = n(981631),
    y = n(388032);
function j(t) {
    var e, n, j, S, k, m, x, N, C;
    let { text: P, editor: T, target: v, onHeightUpdate: L, onSelect: Z } = t,
        D = i.useCallback(() => {
            (0, a.Zy)(() => {
                r.F3.focus(T), setTimeout(() => E.bN.focus(T), 0);
            });
        }, [T]),
        [_, G] = (0, b.Z)({
            text: P,
            target: v,
            onHeightUpdate: L
        }),
        w = (0, c.e7)([u.Z], () => u.Z.isSubmitButtonEnabled),
        A = (0, d.Z)(),
        M = p.Xk.useSetting();
    if (!h.isPlatformEmbedded) return null;
    let R = null != (x = null == (n = T.chatInputType) || null == (e = n.commands) ? void 0 : e.enabled) && x,
        I = null != (N = null == (S = T.chatInputType) || null == (j = S.stickers) ? void 0 : j.autoSuggest) && N,
        H = null != (C = null == (m = T.chatInputType) || null == (k = m.submit) ? void 0 : k.button) && C,
        X = R || I,
        K =
            '' !== P
                ? [
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: 'copy',
                              label: y.intl.string(y.t.OpuAlJ),
                              hint: (0, h.isMac)() ? '\u2318C' : 'Ctrl+C',
                              action: () => setTimeout(() => g.ZP.copy(), 0)
                          },
                          'copy'
                      ),
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: 'cut',
                              label: y.intl.string(y.t.pNPVhY),
                              hint: (0, h.isMac)() ? '\u2318X' : 'Ctrl+X',
                              action: () => setTimeout(() => g.ZP.cut(), 0)
                          },
                          'cut'
                      )
                  ]
                : null,
        U = (0, l.jsx)(s.S89, {
            id: 'command-suggestions',
            label: y.intl.string(y.t['9rJKFx']),
            checked: M,
            action: () => {
                let t = !M;
                p.Xk.updateSetting(t),
                    f.default.track(O.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: O.qAy.CONTEXT_MENU }
                    });
            }
        });
    return (0, l.jsxs)(s.v2r, {
        navId: 'textarea-context',
        onClose: D,
        'aria-label': y.intl.string(y.t.NWlDSE),
        onSelect: Z,
        children: [
            X &&
                (0, l.jsxs)(s.sNh, {
                    id: 'suggestions',
                    label: y.intl.string(y.t.zgxg7u),
                    children: [I && A, R && U]
                }),
            H &&
                (0, l.jsx)(s.S89, {
                    id: 'submit-button',
                    label: y.intl.string(y.t.G8XDys),
                    checked: w,
                    action: () => {
                        (0, o.eN)();
                    }
                }),
            (0, l.jsx)(s.kSQ, { children: _ }),
            (0, l.jsx)(s.kSQ, { children: G }),
            (0, l.jsxs)(s.kSQ, {
                children: [
                    K,
                    (0, l.jsx)(s.sNh, {
                        id: 'paste',
                        label: y.intl.string(y.t.lMUxVl),
                        hint: (0, h.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => g.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
