n.d(e, { default: () => j }), n(388685);
var l = n(255367),
    i = n(73800),
    r = n(650557),
    c = n(442837),
    s = n(481060),
    o = n(239091),
    a = n(857595),
    u = n(607070),
    d = n(877794),
    b = n(695346),
    p = n(626135),
    f = n(358085),
    h = n(998502),
    g = n(887490),
    y = n(981631),
    O = n(388032);
function j(t) {
    var e, n, j, m, E, S, k, x, C;
    let { text: N, editor: P, target: v, onHeightUpdate: L, onSelect: T } = t,
        Z = i.useCallback(() => {
            (0, o.Zy)(() => {
                r.F3.focus(P), setTimeout(() => g.bN.focus(P), 0);
            });
        }, [P]),
        [D, w] = (0, d.Z)({
            text: N,
            target: v,
            onHeightUpdate: L
        }),
        _ = (0, c.e7)([u.Z], () => u.Z.isSubmitButtonEnabled),
        A = b.Xk.useSetting();
    if (!f.isPlatformEmbedded) return null;
    let G = null != (k = null == (n = P.chatInputType) || null == (e = n.commands) ? void 0 : e.enabled) && k,
        M = null != (x = null == (m = P.chatInputType) || null == (j = m.stickers) ? void 0 : j.autoSuggest) && x,
        H = null != (C = null == (S = P.chatInputType) || null == (E = S.submit) ? void 0 : E.button) && C,
        R = G || M,
        X =
            '' !== N
                ? [
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: 'copy',
                              label: O.intl.string(O.t.OpuAlJ),
                              hint: (0, f.isMac)() ? '\u2318C' : 'Ctrl+C',
                              action: () => setTimeout(() => h.ZP.copy(), 0)
                          },
                          'copy'
                      ),
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: 'cut',
                              label: O.intl.string(O.t.pNPVhY),
                              hint: (0, f.isMac)() ? '\u2318X' : 'Ctrl+X',
                              action: () => setTimeout(() => h.ZP.cut(), 0)
                          },
                          'cut'
                      )
                  ]
                : null,
        I = (0, l.jsx)(s.S89, {
            id: 'command-suggestions',
            label: O.intl.string(O.t['9rJKFx']),
            checked: A,
            action: () => {
                let t = !A;
                b.Xk.updateSetting(t),
                    p.default.track(y.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: y.qAy.CONTEXT_MENU }
                    });
            }
        });
    return (0, l.jsxs)(s.v2r, {
        navId: 'textarea-context',
        onClose: Z,
        'aria-label': O.intl.string(O.t.NWlDSE),
        onSelect: T,
        children: [
            R &&
                (0, l.jsx)(s.sNh, {
                    id: 'suggestions',
                    label: O.intl.string(O.t.zgxg7u),
                    children: G && I
                }),
            H &&
                (0, l.jsx)(s.S89, {
                    id: 'submit-button',
                    label: O.intl.string(O.t.G8XDys),
                    checked: _,
                    action: () => {
                        (0, a.eN)();
                    }
                }),
            (0, l.jsx)(s.kSQ, { children: D }),
            (0, l.jsx)(s.kSQ, { children: w }),
            (0, l.jsxs)(s.kSQ, {
                children: [
                    X,
                    (0, l.jsx)(s.sNh, {
                        id: 'paste',
                        label: O.intl.string(O.t.lMUxVl),
                        hint: (0, f.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => h.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
