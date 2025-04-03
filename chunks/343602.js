n.d(e, { default: () => y }), n(47120);
var l = n(200651),
    r = n(192379),
    c = n(270445),
    i = n(442837),
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
    N = n(887490),
    E = n(981631),
    O = n(388032);
function y(t) {
    var e, n, y, j, S, k, m, x, C;
    let { text: P, editor: T, target: v, onHeightUpdate: L, onSelect: Z } = t,
        W = r.useCallback(() => {
            (0, a.Zy)(() => {
                c.F3.focus(T), setTimeout(() => N.bN.focus(T), 0);
            });
        }, [T]),
        [D, _] = (0, b.Z)({
            text: P,
            target: v,
            onHeightUpdate: L
        }),
        G = (0, i.e7)([u.Z], () => u.Z.isSubmitButtonEnabled),
        w = (0, d.Z)(),
        A = p.Xk.useSetting();
    if (!h.isPlatformEmbedded) return null;
    let M = null != (m = null == (n = T.chatInputType) || null == (e = n.commands) ? void 0 : e.enabled) && m,
        R = null != (x = null == (j = T.chatInputType) || null == (y = j.stickers) ? void 0 : y.autoSuggest) && x,
        I = null != (C = null == (k = T.chatInputType) || null == (S = k.submit) ? void 0 : S.button) && C,
        H = M || R,
        X =
            '' !== P
                ? [
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: 'copy',
                              label: O.NW.string(O.t.OpuAlJ),
                              hint: (0, h.isMac)() ? '\u2318C' : 'Ctrl+C',
                              action: () => setTimeout(() => g.ZP.copy(), 0)
                          },
                          'copy'
                      ),
                      (0, l.jsx)(
                          s.sNh,
                          {
                              id: 'cut',
                              label: O.NW.string(O.t.pNPVhY),
                              hint: (0, h.isMac)() ? '\u2318X' : 'Ctrl+X',
                              action: () => setTimeout(() => g.ZP.cut(), 0)
                          },
                          'cut'
                      )
                  ]
                : null,
        K = (0, l.jsx)(s.S89, {
            id: 'command-suggestions',
            label: O.NW.string(O.t['9rJKFx']),
            checked: A,
            action: () => {
                let t = !A;
                p.Xk.updateSetting(t),
                    f.default.track(E.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: E.qAy.CONTEXT_MENU }
                    });
            }
        });
    return (0, l.jsxs)(s.v2r, {
        navId: 'textarea-context',
        onClose: W,
        'aria-label': O.NW.string(O.t.NWlDSE),
        onSelect: Z,
        children: [
            H &&
                (0, l.jsxs)(s.sNh, {
                    id: 'suggestions',
                    label: O.NW.string(O.t.zgxg7u),
                    children: [R && w, M && K]
                }),
            I &&
                (0, l.jsx)(s.S89, {
                    id: 'submit-button',
                    label: O.NW.string(O.t.G8XDys),
                    checked: G,
                    action: () => {
                        (0, o.eN)();
                    }
                }),
            (0, l.jsx)(s.kSQ, { children: D }),
            (0, l.jsx)(s.kSQ, { children: _ }),
            (0, l.jsxs)(s.kSQ, {
                children: [
                    X,
                    (0, l.jsx)(s.sNh, {
                        id: 'paste',
                        label: O.NW.string(O.t.lMUxVl),
                        hint: (0, h.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => g.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
