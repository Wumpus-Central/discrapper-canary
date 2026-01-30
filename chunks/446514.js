s.d(e, {
    default: () => j,
}),
    s(896048);
var n = s(627968),
    r = s(64700),
    a = s(719442),
    i = s(253018),
    l = s(311907),
    c = s(397927),
    o = s(442433),
    u = s(955572),
    p = s(775602),
    g = s(968011),
    d = s(614203),
    b = s(253932),
    f = s(954571),
    x = s(723702),
    h = s(837921),
    y = s(711371),
    m = s(938746),
    S = s(652215),
    T = s(985018);

function j(t) {
    var e, s, j, O, C, E, v, A, L, k, D, P;
    let { text: w, editor: _, target: G, onHeightUpdate: M, onSelect: N } = t,
        I = (0, g.us)("SlateTextAreaContextMenu", {
            autoTrackExposure: !1,
        }).enabled,
        U = r.useCallback(
            (t) => {
                i.rL.focus(_),
                    setTimeout(() => {
                        null == t || t(), y.VW.focus(_);
                    }, 0);
            },
            [_],
        ),
        V = r.useCallback(() => {
            (0, o.Z_)(U);
        }, [U]),
        R = r.useCallback(() => {
            let t = h.Ay.readClipboard();
            0 !== t.length &&
                U(() => {
                    a.gB.insertText(_, t);
                });
        }, [U, _]),
        [H, X] = (0, d.A)({
            text: w,
            target: G,
            onHeightUpdate: M,
        }),
        K = (0, m.A)(_),
        W = (0, l.bG)([p.A], () => p.A.isSubmitButtonEnabled),
        F = b._3.useSetting(),
        B = b.ng.useSetting();
    if (!x.isPlatformEmbedded) return null;
    let Z = null != (e = null == (E = _.chatInputType) || null == (C = E.commands) ? void 0 : C.enabled) && e,
        Y = null != (s = null == (A = _.chatInputType) || null == (v = A.stickers) ? void 0 : v.autoSuggest) && s,
        q = null != (j = null == (k = _.chatInputType) || null == (L = k.submit) ? void 0 : L.button) && j,
        z =
            null !=
                (O = null == (P = _.chatInputType) || null == (D = P.autocomplete) ? void 0 : D.mentionSuggestions) &&
            O,
        Q = Z || Y,
        J = x.isPlatformEmbedded && h.Ay.clipboardHasMixedContent(),
        $ =
            "" !== w
                ? [
                      (0, n.jsx)(
                          c.Drp,
                          {
                              id: "cut",
                              label: T.intl.string(T.t.pNPVhe),
                              shortcut: (0, x.isMac)() ? "⌘X" : "Ctrl+X",
                              action: () => setTimeout(() => h.Ay.cut(), 0),
                          },
                          "cut",
                      ),
                      (0, n.jsx)(
                          c.Drp,
                          {
                              id: "copy",
                              label: T.intl.string(T.t.OpuAlK),
                              shortcut: (0, x.isMac)() ? "⌘C" : "Ctrl+C",
                              action: () => setTimeout(() => h.Ay.copy(), 0),
                          },
                          "copy",
                      ),
                  ]
                : null,
        tt = (0, n.jsx)(c.sLh, {
            id: "command-suggestions",
            label: T.intl.string(T.t["9rJKF7"]),
            checked: F,
            action: () => {
                let t = !F;
                b._3.updateSetting(t),
                    f.default.track(S.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: {
                            object: S.ZSU.CONTEXT_MENU,
                        },
                    });
            },
        });
    return (0, n.jsxs)(c.W1t, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: V,
        "aria-label": T.intl.string(T.t.NWlDSI),
        onSelect: N,
        children: [
            Q &&
                (0, n.jsxs)(c.Drp, {
                    id: "suggestions",
                    label: T.intl.string(T.t.zgxg7v),
                    children: [
                        Z && tt,
                        I &&
                            z &&
                            (0, n.jsx)(c.sLh, {
                                id: "mention-suggestions",
                                label: T.intl.string(T.t.cpmP4L),
                                checked: B,
                                action: () => {
                                    b.ng.updateSetting(!B);
                                },
                            }),
                    ],
                }),
            q &&
                (0, n.jsx)(c.sLh, {
                    id: "submit-button",
                    label: T.intl.string(T.t.G8XDyj),
                    checked: W,
                    action: () => {
                        (0, u.Xt)();
                    },
                }),
            (0, n.jsx)(c.rXV, {
                children: H,
            }),
            (0, n.jsxs)(c.rXV, {
                children: [X, K],
            }),
            (0, n.jsxs)(c.rXV, {
                children: [
                    $,
                    (0, n.jsx)(c.Drp, {
                        id: "paste",
                        label: T.intl.string(T.t.lMUxVi),
                        shortcut: (0, x.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => setTimeout(() => h.Ay.paste(), 0),
                    }),
                    J &&
                        (0, n.jsx)(c.Drp, {
                            id: "paste-as-plain-text",
                            label: T.intl.string(T.t.X92Qnr),
                            shortcut: (0, x.isMac)() ? "⌘⇧V" : "Ctrl+Shift+V",
                            action: R,
                        }),
                ],
            }),
        ],
    });
}
