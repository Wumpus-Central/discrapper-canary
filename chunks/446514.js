n.d(e, {
    default: () => x,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(719442),
    i = n(253018),
    s = n(311907),
    o = n(397927),
    c = n(442433),
    u = n(955572),
    d = n(775602),
    p = n(968011),
    b = n(614203),
    g = n(253932),
    f = n(954571),
    h = n(723702),
    y = n(837921),
    m = n(711371),
    T = n(938746),
    S = n(652215),
    j = n(985018);

function x(t) {
    var e, n, x, C, O, A, E, v, L, k, D, P;
    let { text: w, editor: _, target: G, onHeightUpdate: M, onSelect: I } = t,
        N = (0, p.us)("SlateTextAreaContextMenu", {
            autoTrackExposure: !1,
        }).enabled,
        V = r.useCallback(
            (t) => {
                i.rL.focus(_),
                    setTimeout(() => {
                        null == t || t(), m.VW.focus(_);
                    }, 0);
            },
            [_],
        ),
        H = r.useCallback(() => {
            (0, c.Z_)(V);
        }, [V]),
        R = r.useCallback(() => {
            let t = y.Ay.readClipboard();
            0 !== t.length &&
                V(() => {
                    a.gB.insertText(_, t);
                });
        }, [V, _]),
        [U, X] = (0, b.A)({
            text: w,
            target: G,
            onHeightUpdate: M,
        }),
        K = (0, T.A)(_),
        W = (0, s.bG)([d.A], () => d.A.isSubmitButtonEnabled),
        F = g._3.useSetting(),
        Z = g.ng.useSetting();
    if (!h.isPlatformEmbedded) return null;
    let Y = null != (e = null == (A = _.chatInputType) || null == (O = A.commands) ? void 0 : O.enabled) && e,
        q = null != (n = null == (v = _.chatInputType) || null == (E = v.stickers) ? void 0 : E.autoSuggest) && n,
        B = null != (x = null == (k = _.chatInputType) || null == (L = k.submit) ? void 0 : L.button) && x,
        Q =
            null !=
                (C = null == (P = _.chatInputType) || null == (D = P.autocomplete) ? void 0 : D.mentionSuggestions) &&
            C,
        z = Y || q,
        J = h.isPlatformEmbedded && y.Ay.clipboardHasMixedContent(),
        $ =
            "" !== w
                ? [
                      (0, l.jsx)(
                          o.Drp,
                          {
                              id: "cut",
                              label: j.intl.string(j.t.pNPVhe),
                              hint: (0, h.isMac)() ? "⌘X" : "Ctrl+X",
                              action: () => setTimeout(() => y.Ay.cut(), 0),
                          },
                          "cut",
                      ),
                      (0, l.jsx)(
                          o.Drp,
                          {
                              id: "copy",
                              label: j.intl.string(j.t.OpuAlK),
                              hint: (0, h.isMac)() ? "⌘C" : "Ctrl+C",
                              action: () => setTimeout(() => y.Ay.copy(), 0),
                          },
                          "copy",
                      ),
                  ]
                : null,
        tt = (0, l.jsx)(o.sLh, {
            id: "command-suggestions",
            label: j.intl.string(j.t["9rJKF7"]),
            checked: F,
            action: () => {
                let t = !F;
                g._3.updateSetting(t),
                    f.default.track(S.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: {
                            object: S.ZSU.CONTEXT_MENU,
                        },
                    });
            },
        });
    return (0, l.jsxs)(o.W1t, {
        "data-menu-migration-ready": !0,
        navId: "textarea-context",
        onClose: H,
        "aria-label": j.intl.string(j.t.NWlDSI),
        onSelect: I,
        children: [
            z &&
                (0, l.jsxs)(o.Drp, {
                    id: "suggestions",
                    label: j.intl.string(j.t.zgxg7v),
                    children: [
                        Y && tt,
                        N &&
                            Q &&
                            (0, l.jsx)(o.sLh, {
                                id: "mention-suggestions",
                                label: j.intl.string(j.t.cpmP4L),
                                checked: Z,
                                action: () => {
                                    g.ng.updateSetting(!Z);
                                },
                            }),
                    ],
                }),
            B &&
                (0, l.jsx)(o.sLh, {
                    id: "submit-button",
                    label: j.intl.string(j.t.G8XDyj),
                    checked: W,
                    action: () => {
                        (0, u.Xt)();
                    },
                }),
            (0, l.jsx)(o.rXV, {
                children: U,
            }),
            (0, l.jsxs)(o.rXV, {
                children: [X, K],
            }),
            (0, l.jsxs)(o.rXV, {
                children: [
                    $,
                    (0, l.jsx)(o.Drp, {
                        id: "paste",
                        label: j.intl.string(j.t.lMUxVi),
                        hint: (0, h.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => setTimeout(() => y.Ay.paste(), 0),
                    }),
                    J &&
                        (0, l.jsx)(o.Drp, {
                            id: "paste-as-plain-text",
                            label: j.intl.string(j.t.X92Qnr),
                            hint: (0, h.isMac)() ? "⌘⇧V" : "Ctrl+Shift+V",
                            action: R,
                        }),
                ],
            }),
        ],
    });
}
