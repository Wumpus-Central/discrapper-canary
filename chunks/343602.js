(n.d(e, { default: () => S }), n(388685));
var s = n(255367),
    a = n(73800),
    r = n(650557),
    i = n(442837),
    c = n(481060),
    o = n(239091),
    l = n(857595),
    u = n(607070),
    p = n(877794),
    f = n(695346),
    g = n(626135),
    d = n(358085),
    b = n(998502),
    x = n(887490),
    h = n(517440),
    y = n(981631),
    m = n(388032);
function S(t) {
    var e, n, S, j, E, T, O, k, C;
    let { text: N, editor: v, target: A, onHeightUpdate: P, onSelect: L } = t,
        w = a.useCallback(() => {
            (0, o.Zy)(() => {
                (r.F3.focus(v), setTimeout(() => x.bN.focus(v), 0));
            });
        }, [v]),
        [I, Z] = (0, p.Z)({
            text: N,
            target: A,
            onHeightUpdate: P
        }),
        _ = (0, h.Z)(v),
        D = (0, i.e7)([u.Z], () => u.Z.isSubmitButtonEnabled),
        M = f.Xk.useSetting();
    if (!d.isPlatformEmbedded) return null;
    let F = null != (O = null == (n = v.chatInputType) || null == (e = n.commands) ? void 0 : e.enabled) && O,
        R = null != (k = null == (j = v.chatInputType) || null == (S = j.stickers) ? void 0 : S.autoSuggest) && k,
        U = null != (C = null == (T = v.chatInputType) || null == (E = T.submit) ? void 0 : E.button) && C,
        G = F || R,
        H =
            '' !== N
                ? [
                      (0, s.jsx)(
                          c.sNh,
                          {
                              id: 'copy',
                              label: m.intl.string(m.t.OpuAlJ),
                              hint: (0, d.isMac)() ? '\u2318C' : 'Ctrl+C',
                              action: () => setTimeout(() => b.ZP.copy(), 0)
                          },
                          'copy'
                      ),
                      (0, s.jsx)(
                          c.sNh,
                          {
                              id: 'cut',
                              label: m.intl.string(m.t.pNPVhY),
                              hint: (0, d.isMac)() ? '\u2318X' : 'Ctrl+X',
                              action: () => setTimeout(() => b.ZP.cut(), 0)
                          },
                          'cut'
                      )
                  ]
                : null,
        W = (0, s.jsx)(c.S89, {
            id: 'command-suggestions',
            label: m.intl.string(m.t['9rJKFx']),
            checked: M,
            action: () => {
                let t = !M;
                (f.Xk.updateSetting(t),
                    g.default.track(y.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: y.qAy.CONTEXT_MENU }
                    }));
            }
        });
    return (0, s.jsxs)(c.v2r, {
        navId: 'textarea-context',
        onClose: w,
        'aria-label': m.intl.string(m.t.NWlDSE),
        onSelect: L,
        children: [
            G &&
                (0, s.jsx)(c.sNh, {
                    id: 'suggestions',
                    label: m.intl.string(m.t.zgxg7u),
                    children: F && W
                }),
            U &&
                (0, s.jsx)(c.S89, {
                    id: 'submit-button',
                    label: m.intl.string(m.t.G8XDys),
                    checked: D,
                    action: () => {
                        (0, l.eN)();
                    }
                }),
            (0, s.jsx)(c.kSQ, { children: I }),
            (0, s.jsxs)(c.kSQ, {
                children: [Z, _]
            }),
            (0, s.jsxs)(c.kSQ, {
                children: [
                    H,
                    (0, s.jsx)(c.sNh, {
                        id: 'paste',
                        label: m.intl.string(m.t.lMUxVl),
                        hint: (0, d.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => b.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
