n.d(e, { default: () => y }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(270445),
    c = n(442837),
    o = n(481060),
    s = n(239091),
    a = n(857595),
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
    var e, n, y, j, S, v, k, m, x;
    let { text: C, editor: P, target: T, onHeightUpdate: L, onSelect: Z } = t,
        W = l.useCallback(() => {
            (0, s.Zy)(() => {
                r.F3.focus(P), setTimeout(() => N.bN.focus(P), 0);
            });
        }, [P]),
        [D, _] = (0, b.Z)({
            text: C,
            target: T,
            onHeightUpdate: L
        }),
        G = (0, c.e7)([u.Z], () => u.Z.isSubmitButtonEnabled),
        w = (0, d.Z)(),
        A = p.Xk.useSetting();
    if (!h.isPlatformEmbedded) return null;
    let M = null !== (k = null === (n = P.chatInputType) || void 0 === n ? void 0 : null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) && void 0 !== k && k,
        R = null !== (m = null === (j = P.chatInputType) || void 0 === j ? void 0 : null === (y = j.stickers) || void 0 === y ? void 0 : y.autoSuggest) && void 0 !== m && m,
        I = null !== (x = null === (v = P.chatInputType) || void 0 === v ? void 0 : null === (S = v.submit) || void 0 === S ? void 0 : S.button) && void 0 !== x && x,
        H = M || R,
        X =
            '' !== C
                ? [
                      (0, i.jsx)(
                          o.sNh,
                          {
                              id: 'copy',
                              label: O.NW.string(O.t.OpuAlJ),
                              hint: (0, h.isMac)() ? '\u2318C' : 'Ctrl+C',
                              action: () => setTimeout(() => g.ZP.copy(), 0)
                          },
                          'copy'
                      ),
                      (0, i.jsx)(
                          o.sNh,
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
        K = (0, i.jsx)(o.S89, {
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
    return (0, i.jsxs)(o.v2r, {
        navId: 'textarea-context',
        onClose: W,
        'aria-label': O.NW.string(O.t.NWlDSE),
        onSelect: Z,
        children: [
            H &&
                (0, i.jsxs)(o.sNh, {
                    id: 'suggestions',
                    label: O.NW.string(O.t.zgxg7u),
                    children: [R && w, M && K]
                }),
            I &&
                (0, i.jsx)(o.S89, {
                    id: 'submit-button',
                    label: O.NW.string(O.t.G8XDys),
                    checked: G,
                    action: () => {
                        (0, a.eN)();
                    }
                }),
            (0, i.jsx)(o.kSQ, { children: D }),
            (0, i.jsx)(o.kSQ, { children: _ }),
            (0, i.jsxs)(o.kSQ, {
                children: [
                    X,
                    (0, i.jsx)(o.sNh, {
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
