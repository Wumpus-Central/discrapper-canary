"use strict";
s.d(e, { default: () => y });
var n = s(627968),
    r = s(64700),
    a = s(719442),
    i = s(253018),
    l = s(311907),
    c = s(477782),
    o = s(861672),
    u = s(442433),
    p = s(955572),
    d = s(775602),
    g = s(614203),
    f = s(253932),
    b = s(954571),
    x = s(723702),
    m = s(837921),
    S = s(711371),
    h = s(938746),
    C = s(652215),
    T = s(985018);
function y(t) {
    let { text: e, editor: s, target: y, onHeightUpdate: A, onSelect: E } = t,
        j = r.useCallback(
            (t) => {
                i.rL.focus(s),
                    setTimeout(() => {
                        t?.(), S.VW.focus(s);
                    }, 0);
            },
            [s],
        ),
        D = r.useCallback(() => {
            (0, u.Z_)(j);
        }, [j]),
        k = r.useCallback(() => {
            let t = m.Ay.readClipboard();
            0 !== t.length &&
                j(() => {
                    a.gB.insertText(s, t);
                });
        }, [j, s]),
        [_, L] = (0, g.A)({ text: e, target: y, onHeightUpdate: A }),
        N = (0, h.A)(s),
        v = (0, l.bG)([d.A], () => d.A.isSubmitButtonEnabled),
        M = f._3.useSetting();
    if (!x.isPlatformEmbedded) return null;
    let O = s.chatInputType?.commands?.enabled ?? !1,
        R = s.chatInputType?.stickers?.autoSuggest ?? !1,
        P = s.chatInputType?.submit?.button ?? !1,
        U = O || R,
        G = m.Ay.clipboardHasMixedContent(),
        I =
            "" !== e
                ? [
                      (0, n.jsx)(
                          c.Dr,
                          {
                              id: "cut",
                              label: T.intl.string(T.t.pNPVhe),
                              shortcut: (0, x.isMac)() ? "⌘X" : "Ctrl+X",
                              action: () => m.Ay.cut(),
                          },
                          "cut",
                      ),
                      (0, n.jsx)(
                          c.Dr,
                          {
                              id: "copy",
                              label: T.intl.string(T.t.OpuAlK),
                              shortcut: (0, x.isMac)() ? "⌘C" : "Ctrl+C",
                              action: () => m.Ay.copy(),
                          },
                          "copy",
                      ),
                  ]
                : null,
        X = (0, n.jsx)(c.sL, {
            id: "command-suggestions",
            label: T.intl.string(T.t["9rJKF7"]),
            checked: M,
            action: () => {
                let t = !M;
                f._3.updateSetting(t),
                    b.default.track(C.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: C.ZSU.CONTEXT_MENU },
                    });
            },
        });
    return (0, n.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: D,
        "aria-label": T.intl.string(T.t.NWlDSI),
        onSelect: E,
        children: [
            U && (0, n.jsx)(c.Dr, { id: "suggestions", label: T.intl.string(T.t.zgxg7v), children: O && X }),
            P &&
                (0, n.jsx)(c.sL, {
                    id: "submit-button",
                    label: T.intl.string(T.t.G8XDyj),
                    checked: v,
                    action: () => {
                        (0, p.Xt)();
                    },
                }),
            (0, n.jsx)(c.rX, { children: _ }),
            (0, n.jsxs)(c.rX, { children: [L, N] }),
            (0, n.jsxs)(c.rX, {
                children: [
                    I,
                    (0, n.jsx)(c.Dr, {
                        id: "paste",
                        label: T.intl.string(T.t.lMUxVi),
                        shortcut: (0, x.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => m.Ay.paste(),
                    }),
                    G &&
                        (0, n.jsx)(c.Dr, {
                            id: "paste-as-plain-text",
                            label: T.intl.string(T.t.X92Qnr),
                            shortcut: (0, x.isMac)() ? "⌘⇧V" : "Ctrl+Shift+V",
                            action: k,
                        }),
                ],
            }),
        ],
    });
}
