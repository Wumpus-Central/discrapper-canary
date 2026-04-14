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
    g = s(614203),
    d = s(253932),
    b = s(954571),
    f = s(723702),
    x = s(837921),
    h = s(711371),
    T = s(938746),
    y = s(652215),
    m = s(985018);
function S(t) {
    let { text: e, editor: s, target: S, onHeightUpdate: C, onSelect: A } = t,
        E = n.useCallback(
            (t) => {
                i.rL.focus(s),
                    setTimeout(() => {
                        t?.(), h.VW.focus(s);
                    }, 0);
            },
            [s],
        ),
        j = n.useCallback(() => {
            (0, o.Z_)(E);
        }, [E]),
        L = n.useCallback(() => {
            let t = x.Ay.readClipboard();
            0 !== t.length &&
                E(() => {
                    r.gB.insertText(s, t);
                });
        }, [E, s]),
        [k, v] = (0, g.A)({ text: e, target: S, onHeightUpdate: C }),
        D = (0, T.A)(s),
        _ = (0, c.bG)([u.A], () => u.A.isSubmitButtonEnabled),
        G = d._3.useSetting();
    if (!f.isPlatformEmbedded) return null;
    let N = s.chatInputType?.commands?.enabled ?? !1,
        M = s.chatInputType?.stickers?.autoSuggest ?? !1,
        O = s.chatInputType?.submit?.button ?? !1,
        I = N || M,
        U = x.Ay.clipboardHasMixedContent(),
        V =
            "" !== e
                ? [
                      (0, a.jsx)(
                          l.Drp,
                          {
                              id: "cut",
                              label: m.intl.string(m.t.pNPVhe),
                              shortcut: (0, f.isMac)() ? "⌘X" : "Ctrl+X",
                              action: () => x.Ay.cut(),
                          },
                          "cut",
                      ),
                      (0, a.jsx)(
                          l.Drp,
                          {
                              id: "copy",
                              label: m.intl.string(m.t.OpuAlK),
                              shortcut: (0, f.isMac)() ? "⌘C" : "Ctrl+C",
                              action: () => x.Ay.copy(),
                          },
                          "copy",
                      ),
                  ]
                : null,
        R = (0, a.jsx)(l.sLh, {
            id: "command-suggestions",
            label: m.intl.string(m.t["9rJKF7"]),
            checked: G,
            action: () => {
                let t = !G;
                d._3.updateSetting(t),
                    b.default.track(y.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: y.ZSU.CONTEXT_MENU },
                    });
            },
        });
    return (0, a.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: j,
        "aria-label": m.intl.string(m.t.NWlDSI),
        onSelect: A,
        children: [
            I && (0, a.jsx)(l.Drp, { id: "suggestions", label: m.intl.string(m.t.zgxg7v), children: N && R }),
            O &&
                (0, a.jsx)(l.sLh, {
                    id: "submit-button",
                    label: m.intl.string(m.t.G8XDyj),
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
                        label: m.intl.string(m.t.lMUxVi),
                        shortcut: (0, f.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => x.Ay.paste(),
                    }),
                    U &&
                        (0, a.jsx)(l.Drp, {
                            id: "paste-as-plain-text",
                            label: m.intl.string(m.t.X92Qnr),
                            shortcut: (0, f.isMac)() ? "⌘⇧V" : "Ctrl+Shift+V",
                            action: L,
                        }),
                ],
            }),
        ],
    });
}
