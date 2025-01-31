n.d(e, { default: () => v }), n(47120);
var i = n(200651),
    l = n(192379),
    s = n(270445),
    c = n(442837),
    a = n(481060),
    o = n(239091),
    u = n(857595),
    r = n(607070),
    d = n(886036),
    h = n(877794),
    b = n(695346),
    p = n(626135),
    E = n(358085),
    S = n(998502),
    g = n(887490),
    f = n(981631),
    k = n(388032);
function v(t) {
    var e, n, v, x, N, C, m, T, j;
    let { text: L, editor: Z, target: y, onHeightUpdate: _, onSelect: G } = t,
        A = l.useCallback(() => {
            (0, o.Zy)(() => {
                s.F3.focus(Z), setTimeout(() => g.bN.focus(Z), 0);
            });
        }, [Z]),
        [O, D] = (0, h.Z)({
            text: L,
            target: y,
            onHeightUpdate: _
        }),
        M = (0, c.e7)([r.Z], () => r.Z.isSubmitButtonEnabled),
        P = (0, d.Z)(),
        R = b.Xk.useSetting();
    if (!E.isPlatformEmbedded) return null;
    let I = null !== (m = null === (n = Z.chatInputType) || void 0 === n ? void 0 : null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) && void 0 !== m && m,
        H = null !== (T = null === (x = Z.chatInputType) || void 0 === x ? void 0 : null === (v = x.stickers) || void 0 === v ? void 0 : v.autoSuggest) && void 0 !== T && T,
        X = null !== (j = null === (C = Z.chatInputType) || void 0 === C ? void 0 : null === (N = C.submit) || void 0 === N ? void 0 : N.button) && void 0 !== j && j,
        K = I || H,
        U =
            '' !== L
                ? [
                      (0, i.jsx)(
                          a.sNh,
                          {
                              id: 'copy',
                              label: k.intl.string(k.t.OpuAlJ),
                              hint: (0, E.isMac)() ? '\u2318C' : 'Ctrl+C',
                              action: () => setTimeout(() => S.ZP.copy(), 0)
                          },
                          'copy'
                      ),
                      (0, i.jsx)(
                          a.sNh,
                          {
                              id: 'cut',
                              label: k.intl.string(k.t.pNPVhY),
                              hint: (0, E.isMac)() ? '\u2318X' : 'Ctrl+X',
                              action: () => setTimeout(() => S.ZP.cut(), 0)
                          },
                          'cut'
                      )
                  ]
                : null,
        W = (0, i.jsx)(a.S89, {
            id: 'command-suggestions',
            label: k.intl.string(k.t['9rJKFx']),
            checked: R,
            action: () => {
                let t = !R;
                b.Xk.updateSetting(t),
                    p.default.track(f.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: f.qAy.CONTEXT_MENU }
                    });
            }
        });
    return (0, i.jsxs)(a.v2r, {
        navId: 'textarea-context',
        onClose: A,
        'aria-label': k.intl.string(k.t.NWlDSE),
        onSelect: G,
        children: [
            K &&
                (0, i.jsxs)(a.sNh, {
                    id: 'suggestions',
                    label: k.intl.string(k.t.zgxg7u),
                    children: [H && P, I && W]
                }),
            X &&
                (0, i.jsx)(a.S89, {
                    id: 'submit-button',
                    label: k.intl.string(k.t.G8XDys),
                    checked: M,
                    action: () => {
                        (0, u.eN)();
                    }
                }),
            (0, i.jsx)(a.kSQ, { children: O }),
            (0, i.jsx)(a.kSQ, { children: D }),
            (0, i.jsxs)(a.kSQ, {
                children: [
                    U,
                    (0, i.jsx)(a.sNh, {
                        id: 'paste',
                        label: k.intl.string(k.t.lMUxVl),
                        hint: (0, E.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => S.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
