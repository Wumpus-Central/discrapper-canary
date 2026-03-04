"use strict";
s.d(e, { default: () => S });
var a = s(627968),
    n = s(64700),
    r = s(719442),
    i = s(253018),
    c = s(311907),
    l = s(397927),
    o = s(442433),
    p = s(955572),
    u = s(775602),
    d = s(614203),
    g = s(253932),
    b = s(954571),
    f = s(723702),
    x = s(837921),
    h = s(711371),
    m = s(938746),
    T = s(652215),
    y = s(985018);
function S(t) {
    let { text: e, editor: s, target: S, onHeightUpdate: C, onSelect: E } = t,
        A = n.useCallback(
            (t) => {
                i.rL.focus(s),
                    setTimeout(() => {
                        t?.(), h.VW.focus(s);
                    }, 0);
            },
            [s],
        ),
        j = n.useCallback(() => {
            (0, o.Z_)(A);
        }, [A]),
        L = n.useCallback(() => {
            let t = x.Ay.readClipboard();
            0 !== t.length &&
                A(() => {
                    r.gB.insertText(s, t);
                });
        }, [A, s]),
        [k, v] = (0, d.A)({ text: e, target: S, onHeightUpdate: C }),
        D = (0, m.A)(s),
        _ = (0, c.bG)([u.A], () => u.A.isSubmitButtonEnabled),
        G = g._3.useSetting();
    if (!f.isPlatformEmbedded) return null;
    let N = s.chatInputType?.commands?.enabled ?? !1,
        M = s.chatInputType?.stickers?.autoSuggest ?? !1,
        O = s.chatInputType?.submit?.button ?? !1,
        I = N || M,
        U = f.isPlatformEmbedded && x.Ay.clipboardHasMixedContent(),
        V =
            "" !== e
                ? [
                      (0, a.jsx)(
                          l.Drp,
                          {
                              id: "cut",
                              label: y.intl.string(y.t.pNPVhe),
                              shortcut: (0, f.isMac)() ? "⌘X" : "Ctrl+X",
                              action: () => setTimeout(() => x.Ay.cut(), 0),
                          },
                          "cut",
                      ),
                      (0, a.jsx)(
                          l.Drp,
                          {
                              id: "copy",
                              label: y.intl.string(y.t.OpuAlK),
                              shortcut: (0, f.isMac)() ? "⌘C" : "Ctrl+C",
                              action: () => setTimeout(() => x.Ay.copy(), 0),
                          },
                          "copy",
                      ),
                  ]
                : null,
        R = (0, a.jsx)(l.sLh, {
            id: "command-suggestions",
            label: y.intl.string(y.t["9rJKF7"]),
            checked: G,
            action: () => {
                let t = !G;
                g._3.updateSetting(t),
                    b.default.track(T.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: T.ZSU.CONTEXT_MENU },
                    });
            },
        });
    return (0, a.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: j,
        "aria-label": y.intl.string(y.t.NWlDSI),
        onSelect: E,
        children: [
            I && (0, a.jsx)(l.Drp, { id: "suggestions", label: y.intl.string(y.t.zgxg7v), children: N && R }),
            O &&
                (0, a.jsx)(l.sLh, {
                    id: "submit-button",
                    label: y.intl.string(y.t.G8XDyj),
                    checked: _,
                    action: () => {
                        (0, p.Xt)();
                    },
                }),
            (0, a.jsx)(l.rXV, { children: k }),
            (0, a.jsxs)(l.rXV, { children: [v, D] }),
            (0, a.jsxs)(l.rXV, {
                children: [
                    V,
                    (0, a.jsx)(l.Drp, {
                        id: "paste",
                        label: y.intl.string(y.t.lMUxVi),
                        shortcut: (0, f.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => setTimeout(() => x.Ay.paste(), 0),
                    }),
                    U &&
                        (0, a.jsx)(l.Drp, {
                            id: "paste-as-plain-text",
                            label: y.intl.string(y.t.X92Qnr),
                            shortcut: (0, f.isMac)() ? "⌘⇧V" : "Ctrl+Shift+V",
                            action: L,
                        }),
                ],
            }),
        ],
    });
}
