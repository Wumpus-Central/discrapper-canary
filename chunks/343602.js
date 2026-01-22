n.d(e, { default: () => x }), n(388685);
var l = n(54381),
    a = n(473749),
    i = n(327432),
    r = n(685578),
    s = n(442837),
    o = n(481060),
    c = n(239091),
    u = n(857595),
    d = n(607070),
    b = n(657871),
    p = n(877794),
    g = n(695346),
    f = n(626135),
    h = n(358085),
    y = n(998502),
    m = n(887490),
    S = n(517440),
    j = n(981631),
    T = n(388032);
function x(t) {
    var e, n, x, C, E, k, O, v, N, P, L, Z;
    let { text: A, editor: w, target: I, onHeightUpdate: M, onSelect: D } = t,
        H = (0, b.zM)("SlateTextAreaContextMenu", { autoTrackExposure: !1 }).enabled,
        R = a.useCallback(
            (t) => {
                r.F3.focus(w),
                    setTimeout(() => {
                        null == t || t(), m.bN.focus(w);
                    }, 0);
            },
            [w],
        ),
        _ = a.useCallback(() => {
            (0, c.Zy)(R);
        }, [R]),
        G = a.useCallback(() => {
            let t = y.ZP.readClipboard();
            0 !== t.length &&
                R(() => {
                    i.YR.insertText(w, t);
                });
        }, [R, w]),
        [K, U] = (0, p.Z)({
            text: A,
            target: I,
            onHeightUpdate: M,
        }),
        V = (0, S.Z)(w),
        X = (0, s.e7)([d.Z], () => d.Z.isSubmitButtonEnabled),
        F = g.Xk.useSetting(),
        Y = g.HV.useSetting();
    if (!h.isPlatformEmbedded) return null;
    let W = null != (N = null == (n = w.chatInputType) || null == (e = n.commands) ? void 0 : e.enabled) && N,
        Q = null != (P = null == (C = w.chatInputType) || null == (x = C.stickers) ? void 0 : x.autoSuggest) && P,
        q = null != (L = null == (k = w.chatInputType) || null == (E = k.submit) ? void 0 : E.button) && L,
        z =
            null !=
                (Z = null == (v = w.chatInputType) || null == (O = v.autocomplete) ? void 0 : O.mentionSuggestions) &&
            Z,
        B = W || Q,
        J = h.isPlatformEmbedded && y.ZP.clipboardHasMixedContent(),
        $ =
            "" !== A
                ? [
                      (0, l.jsx)(
                          o.sNh,
                          {
                              id: "cut",
                              label: T.intl.string(T.t.pNPVhe),
                              hint: (0, h.isMac)() ? "\u2318X" : "Ctrl+X",
                              action: () => setTimeout(() => y.ZP.cut(), 0),
                          },
                          "cut",
                      ),
                      (0, l.jsx)(
                          o.sNh,
                          {
                              id: "copy",
                              label: T.intl.string(T.t.OpuAlK),
                              hint: (0, h.isMac)() ? "\u2318C" : "Ctrl+C",
                              action: () => setTimeout(() => y.ZP.copy(), 0),
                          },
                          "copy",
                      ),
                  ]
                : null,
        tt = (0, l.jsx)(o.S89, {
            id: "command-suggestions",
            label: T.intl.string(T.t["9rJKF7"]),
            checked: F,
            action: () => {
                let t = !F;
                g.Xk.updateSetting(t),
                    f.default.track(j.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: j.qAy.CONTEXT_MENU },
                    });
            },
        });
    return (0, l.jsxs)(o.v2r, {
        navId: "textarea-context",
        onClose: _,
        "aria-label": T.intl.string(T.t.NWlDSI),
        onSelect: D,
        children: [
            B &&
                (0, l.jsxs)(o.sNh, {
                    id: "suggestions",
                    label: T.intl.string(T.t.zgxg7v),
                    children: [
                        W && tt,
                        H &&
                            z &&
                            (0, l.jsx)(o.S89, {
                                id: "mention-suggestions",
                                label: T.intl.string(T.t.cpmP4L),
                                checked: Y,
                                action: () => {
                                    g.HV.updateSetting(!Y);
                                },
                            }),
                    ],
                }),
            q &&
                (0, l.jsx)(o.S89, {
                    id: "submit-button",
                    label: T.intl.string(T.t.G8XDyj),
                    checked: X,
                    action: () => {
                        (0, u.eN)();
                    },
                }),
            (0, l.jsx)(o.kSQ, { children: K }),
            (0, l.jsxs)(o.kSQ, {
                children: [U, V],
            }),
            (0, l.jsxs)(o.kSQ, {
                children: [
                    $,
                    (0, l.jsx)(o.sNh, {
                        id: "paste",
                        label: T.intl.string(T.t.lMUxVi),
                        hint: (0, h.isMac)() ? "\u2318V" : "Ctrl+V",
                        action: () => setTimeout(() => y.ZP.paste(), 0),
                    }),
                    J &&
                        (0, l.jsx)(o.sNh, {
                            id: "paste-as-plain-text",
                            label: T.intl.string(T.t.X92Qnr),
                            hint: (0, h.isMac)() ? "\u2318\u21E7V" : "Ctrl+Shift+V",
                            action: G,
                        }),
                ],
            }),
        ],
    });
}
