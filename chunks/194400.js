n.d(e, { default: () => N });
var a = n(477900),
    r = n(582128),
    l = n(719442),
    i = n(235599),
    s = n(855986),
    o = n(477782),
    c = n(165862),
    u = n(442433),
    d = n(955572),
    m = n(775602),
    g = n(413756),
    f = n(253932),
    b = n(129230),
    p = n(723702),
    T = n(253400),
    x = n(339200),
    y = n(620632),
    h = n(858899),
    S = n(152367),
    A = n(192308),
    j = n(869388),
    C = n(147087),
    _ = n(773669),
    D = n(186306),
    M = n(323350),
    E = n(652215),
    I = n(792996),
    X = n(946190);
function N(t) {
    let { text: e, editor: N, target: P, onHeightUpdate: k, onSelect: O, clipboardHasMixedContent: R } = t,
        v = r.useCallback(
            (t) => {
                (i.rL.focus(N),
                    setTimeout(() => {
                        (t?.(), x.VW.focus(N));
                    }, 0));
            },
            [N],
        ),
        W = r.useCallback(() => {
            (0, u.Z_)(v);
        }, [v]),
        L = r.useCallback(() => {
            let t = T.Ay.readClipboard();
            0 !== t.length &&
                v(() => {
                    l.gB.insertText(N, t);
                });
        }, [v, N]),
        [U, w] = (0, g.A)({ text: e, target: P, onHeightUpdate: k }),
        F = (function (t) {
            let e = (0, C.b)(),
                l = (0, s.bG)([j.A], () => j.A.getTransforms()),
                { selection: c } = t,
                u =
                    null != c
                        ? (0, M.WO)(x.VW.richValue(t), { mode: "plain", range: c, preventEmojiSurrogates: !1 })
                        : "",
                d = r.useCallback(
                    (e) => {
                        (i.rL.focus(t),
                            D.o.withSingleEntry(t, () => {
                                (t.deleteFragment(), t.insertText(e));
                            }));
                    },
                    [t],
                ),
                m = (function (t, e) {
                    let [n, l] = r.useState(!1),
                        i = r.useCallback(async () => {
                            if (!n) {
                                (l(!0), (0, h.P0)({ text: I.intl.string(I.t.p54KYY), icon: S.MagicWandIcon }));
                                try {
                                    let n = await y.Bo.post({
                                        url: E.Rsh.AI_FIX_GRAMMAR,
                                        body: { content: t },
                                        rejectWithError: (0, y.fT)(),
                                    });
                                    n.body &&
                                        (e(n.body.content),
                                        (0, h.P0)({ text: I.intl.string(I.t.mxQpUY), variant: "success" }));
                                } finally {
                                    l(!1);
                                }
                            }
                        }, [n, t, e]);
                    return (0, a.jsx)(o.Dr, {
                        id: "fix-grammar",
                        label: n ? I.intl.string(I.t.p54KYY) : I.intl.string(I.t.fCpOHj),
                        icon: S.MagicWandIcon,
                        action: i,
                        disabled: n,
                    });
                })(u, d),
                g = (function (t, e) {
                    let [l, i] = r.useState(!1),
                        c = (0, s.bG)([_.default], () => _.default.locale),
                        u = r.useCallback(
                            async (n, a) => {
                                if (l) return;
                                let r = n ?? c;
                                i(!0);
                                let s = a ?? r;
                                (0, h.P0)({
                                    text: I.intl.formatToPlainString(I.t.Znl8Z8, { targetLanguage: s }),
                                    icon: S.MagicWandIcon,
                                });
                                try {
                                    let n = await y.Bo.post({
                                        url: E.Rsh.AI_TRANSLATE,
                                        body: { content: t, locale: r },
                                        rejectWithError: (0, y.fT)(),
                                    });
                                    n.body &&
                                        (e(n.body.content),
                                        (0, h.P0)({
                                            text: I.intl.formatToPlainString(I.t.FtVUqm, { targetLanguage: s }),
                                            variant: "success",
                                        }));
                                } finally {
                                    i(!1);
                                }
                            },
                            [l, c, t, e],
                        ),
                        d = (0, I.getAvailableLocales)().map((t) => {
                            let e;
                            try {
                                e = n(579832)(`./${t.value}.png`);
                            } catch (t) {
                                e = n(432706);
                            }
                            return (0, a.jsx)(
                                o.Dr,
                                {
                                    id: `translate-${t.value}`,
                                    label: t.name,
                                    icon: () => (0, a.jsx)("img", { alt: "", src: e, className: X.M }),
                                    leadingAccessory: { type: "image", src: e },
                                    action: () => u(t.value, t.name),
                                    disabled: l,
                                },
                                t.value,
                            );
                        });
                    return (0, a.jsx)(o.Dr, {
                        id: "translate",
                        label: l ? I.intl.string(I.t.SVKIdU) : I.intl.string(I.t["6epDlR"]),
                        action: () => u(),
                        disabled: l,
                        children: d,
                    });
                })(u, d),
                f = (function (t, e, n) {
                    let [l, i] = r.useState(null),
                        s = r.useCallback(
                            async (t) => {
                                if (null == l) {
                                    (i(t.id),
                                        (0, h.P0)({
                                            text: I.intl.formatToPlainString(I.t.rrf7Kf, { transformName: t.name }),
                                            icon: S.MagicWandIcon,
                                        }));
                                    try {
                                        let a = await y.Bo.post({
                                            url: E.Rsh.AI_TEXT_TRANSFORM,
                                            body: { content: e, prompt: t.prompt },
                                            rejectWithError: (0, y.fT)(),
                                        });
                                        a.body &&
                                            (n(a.body.content),
                                            (0, h.P0)({
                                                text: I.intl.formatToPlainString(I.t.qe4KvQ, { transformName: t.name }),
                                                variant: "success",
                                            }));
                                    } finally {
                                        i(null);
                                    }
                                }
                            },
                            [l, e, n],
                        );
                    return t.map((t) => {
                        let e = l === t.id;
                        return (0, a.jsx)(
                            o.Dr,
                            {
                                id: `text-transform-${t.id}`,
                                label: e ? I.intl.formatToPlainString(I.t.rrf7Kf, { transformName: t.name }) : t.name,
                                icon: S.MagicWandIcon,
                                action: () => s(t),
                                disabled: null != l,
                            },
                            t.id,
                        );
                    });
                })(l, u, d);
            return "" !== u.trim() && e
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          m,
                          g,
                          (0, a.jsxs)(o.Dr, {
                              id: "text-transforms",
                              label: I.intl.string(I.t["6YZezO"]),
                              icon: S.MagicWandIcon,
                              children: [
                                  f,
                                  f.length > 0 ? (0, a.jsx)(o.bX, {}) : null,
                                  (0, a.jsx)(o.Dr, {
                                      id: "manage-text-transforms",
                                      label: I.intl.string(I.t.IcDoaD),
                                      action: () => {
                                          (0, A.mM)(async () => {
                                              let { default: t } = await Promise.all([n.e(378267), n.e(54191)]).then(
                                                  n.bind(n, 665906),
                                              );
                                              return (e) => (0, a.jsx)(t, { ...e });
                                          });
                                      },
                                  }),
                              ],
                          }),
                      ],
                  })
                : null;
        })(N),
        G = (0, s.bG)([m.Ay], () => m.Ay.isSubmitButtonEnabled),
        K = f._3.useSetting();
    if (!p.isPlatformEmbedded) return null;
    let V = N.chatInputType?.commands?.enabled ?? !1,
        Y = N.chatInputType?.stickers?.autoSuggest ?? !1,
        B = N.chatInputType?.submit?.button ?? !1,
        Z = V || Y,
        z =
            "" !== e
                ? [
                      (0, a.jsx)(
                          o.Dr,
                          {
                              id: "cut",
                              label: I.intl.string(I.t.pNPVhe),
                              shortcut: (0, p.cX)() ? "\u2318X" : "Ctrl+X",
                              action: () => T.Ay.cut(),
                          },
                          "cut",
                      ),
                      (0, a.jsx)(
                          o.Dr,
                          {
                              id: "copy",
                              label: I.intl.string(I.t.OpuAlK),
                              shortcut: (0, p.cX)() ? "\u2318C" : "Ctrl+C",
                              action: () => T.Ay.copy(),
                          },
                          "copy",
                      ),
                  ]
                : null,
        H = (0, a.jsx)(o.sL, {
            id: "command-suggestions",
            label: I.intl.string(I.t["9rJKF7"]),
            checked: K,
            action: () => {
                let t = !K;
                (f._3.updateSetting(t),
                    b.default.track(E.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: E.ZSU.CONTEXT_MENU },
                    }));
            },
        });
    return (0, a.jsxs)(c.W, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: W,
        "aria-label": I.intl.string(I.t.NWlDSI),
        onSelect: O,
        children: [
            Z && (0, a.jsx)(o.Dr, { id: "suggestions", label: I.intl.string(I.t.zgxg7v), children: V && H }),
            B &&
                (0, a.jsx)(o.sL, {
                    id: "submit-button",
                    label: I.intl.string(I.t.G8XDyj),
                    checked: G,
                    action: () => {
                        (0, d.Xt)();
                    },
                }),
            (0, a.jsx)(o.rX, { children: U }),
            (0, a.jsxs)(o.rX, { children: [w, F] }),
            (0, a.jsxs)(o.rX, {
                children: [
                    z,
                    (0, a.jsx)(o.Dr, {
                        id: "paste",
                        label: I.intl.string(I.t.lMUxVi),
                        shortcut: (0, p.cX)() ? "\u2318V" : "Ctrl+V",
                        action: () => T.Ay.paste(),
                    }),
                    R && (0, a.jsx)(o.Dr, { id: "paste-as-plain-text", label: I.intl.string(I.t.X92Qnr), action: L }),
                ],
            }),
        ],
    });
}
