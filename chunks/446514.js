"use strict";
s.d(e, { default: () => C });
var n = s(627968),
    a = s(64700),
    r = s(719442),
    i = s(253018),
    c = s(311907),
    l = s(397927),
    o = s(442433),
    p = s(955572),
    u = s(775602),
    g = s(968011),
    d = s(614203),
    b = s(253932),
    f = s(954571),
    x = s(723702),
    h = s(837921),
    m = s(711371),
    T = s(938746),
    S = s(652215),
    y = s(985018);
function C(t) {
    let { text: e, editor: s, target: C, onHeightUpdate: E, onSelect: A } = t,
        j = (0, g.us)("SlateTextAreaContextMenu", { autoTrackExposure: !1 }).enabled,
        L = a.useCallback(
            (t) => {
                i.rL.focus(s),
                    setTimeout(() => {
                        t?.(), m.VW.focus(s);
                    }, 0);
            },
            [s],
        ),
        k = a.useCallback(() => {
            (0, o.Z_)(L);
        }, [L]),
        v = a.useCallback(() => {
            let t = h.Ay.readClipboard();
            0 !== t.length &&
                L(() => {
                    r.gB.insertText(s, t);
                });
        }, [L, s]),
        [D, _] = (0, d.A)({ text: e, target: C, onHeightUpdate: E }),
        G = (0, T.A)(s),
        M = (0, c.bG)([u.A], () => u.A.isSubmitButtonEnabled),
        N = b._3.useSetting(),
        O = b.ng.useSetting();
    if (!x.isPlatformEmbedded) return null;
    let I = s.chatInputType?.commands?.enabled ?? !1,
        U = s.chatInputType?.stickers?.autoSuggest ?? !1,
        V = s.chatInputType?.submit?.button ?? !1,
        R = s.chatInputType?.autocomplete?.mentionSuggestions ?? !1,
        w = I || U,
        H = x.isPlatformEmbedded && h.Ay.clipboardHasMixedContent(),
        P =
            "" !== e
                ? [
                      (0, n.jsx)(
                          l.Drp,
                          {
                              id: "cut",
                              label: y.intl.string(y.t.pNPVhe),
                              shortcut: (0, x.isMac)() ? "⌘X" : "Ctrl+X",
                              action: () => setTimeout(() => h.Ay.cut(), 0),
                          },
                          "cut",
                      ),
                      (0, n.jsx)(
                          l.Drp,
                          {
                              id: "copy",
                              label: y.intl.string(y.t.OpuAlK),
                              shortcut: (0, x.isMac)() ? "⌘C" : "Ctrl+C",
                              action: () => setTimeout(() => h.Ay.copy(), 0),
                          },
                          "copy",
                      ),
                  ]
                : null,
        X = (0, n.jsx)(l.sLh, {
            id: "command-suggestions",
            label: y.intl.string(y.t["9rJKF7"]),
            checked: N,
            action: () => {
                let t = !N;
                b._3.updateSetting(t),
                    f.default.track(S.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: S.ZSU.CONTEXT_MENU },
                    });
            },
        });
    return (0, n.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: k,
        "aria-label": y.intl.string(y.t.NWlDSI),
        onSelect: A,
        children: [
            w &&
                (0, n.jsxs)(l.Drp, {
                    id: "suggestions",
                    label: y.intl.string(y.t.zgxg7v),
                    children: [
                        I && X,
                        j &&
                            R &&
                            (0, n.jsx)(l.sLh, {
                                id: "mention-suggestions",
                                label: y.intl.string(y.t.cpmP4L),
                                checked: O,
                                action: () => {
                                    b.ng.updateSetting(!O);
                                },
                            }),
                    ],
                }),
            V &&
                (0, n.jsx)(l.sLh, {
                    id: "submit-button",
                    label: y.intl.string(y.t.G8XDyj),
                    checked: M,
                    action: () => {
                        (0, p.Xt)();
                    },
                }),
            (0, n.jsx)(l.rXV, { children: D }),
            (0, n.jsxs)(l.rXV, { children: [_, G] }),
            (0, n.jsxs)(l.rXV, {
                children: [
                    P,
                    (0, n.jsx)(l.Drp, {
                        id: "paste",
                        label: y.intl.string(y.t.lMUxVi),
                        shortcut: (0, x.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => setTimeout(() => h.Ay.paste(), 0),
                    }),
                    H &&
                        (0, n.jsx)(l.Drp, {
                            id: "paste-as-plain-text",
                            label: y.intl.string(y.t.X92Qnr),
                            shortcut: (0, x.isMac)() ? "⌘⇧V" : "Ctrl+Shift+V",
                            action: v,
                        }),
                ],
            }),
        ],
    });
}
