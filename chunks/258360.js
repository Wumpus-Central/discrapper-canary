n.d(e, { default: () => k });
var a = n(477900),
    r = n(582128),
    l = n(719442),
    i = n(235599),
    s = n(17928),
    o = n(477782),
    c = n(980707),
    u = n(442433),
    d = n(955572),
    m = n(775602),
    f = n(316254),
    g = n(885386),
    b = n(174459),
    p = n(723702),
    T = n(19575),
    x = n(820066),
    y = n(636537),
    h = n(858899),
    S = n(152367),
    A = n(192308),
    j = n(869388),
    D = n(147087),
    C = n(773669),
    _ = n(186306),
    E = n(323350),
    M = n(652215),
    N = n(660183),
    P = n(946190);
function k(t) {
    let { text: e, editor: k, target: O, onHeightUpdate: R, onSelect: X, clipboardHasMixedContent: v } = t,
        I = r.useCallback(
            (t) => {
                (i.rL.focus(k),
                    setTimeout(() => {
                        (t?.(), x.VW.focus(k));
                    }, 0));
            },
            [k],
        ),
        L = r.useCallback(() => {
            (0, u.Z_)(I);
        }, [I]),
        U = r.useCallback(() => {
            let t = T.Ay.readClipboard();
            0 !== t.length &&
                I(() => {
                    l.gB.insertText(k, t);
                });
        }, [I, k]),
        [w, F] = (0, f.A)({ text: e, target: O, onHeightUpdate: R }),
        G = (function (t) {
            let e = (0, D.b)(),
                l = (0, s.bG)([j.A], () => j.A.getTransforms()),
                { selection: c } = t,
                u =
                    null != c
                        ? (0, E.WO)(x.VW.richValue(t), { mode: "plain", range: c, preventEmojiSurrogates: !1 })
                        : "",
                d = r.useCallback(
                    (e) => {
                        (i.rL.focus(t),
                            _.o.withSingleEntry(t, () => {
                                (t.deleteFragment(), t.insertText(e));
                            }));
                    },
                    [t],
                ),
                m = (function (t, e) {
                    let [n, l] = r.useState(!1),
                        i = r.useCallback(async () => {
                            if (!n) {
                                (l(!0), (0, h.P0)({ text: N.intl.string(N.t.p54KYY), icon: S.D }));
                                try {
                                    let n = await y.Bo.post({
                                        url: M.Rsh.AI_FIX_GRAMMAR,
                                        body: { content: t },
                                        rejectWithError: (0, y.fT)(),
                                    });
                                    n.body &&
                                        (e(n.body.content),
                                        (0, h.P0)({ text: N.intl.string(N.t.mxQpUY), variant: "success" }));
                                } finally {
                                    l(!1);
                                }
                            }
                        }, [n, t, e]);
                    return (0, a.jsx)(o.Dr, {
                        id: "fix-grammar",
                        label: n ? N.intl.string(N.t.p54KYY) : N.intl.string(N.t.fCpOHj),
                        icon: S.D,
                        action: i,
                        disabled: n,
                    });
                })(u, d),
                f = (function (t, e) {
                    let [l, i] = r.useState(!1),
                        c = (0, s.bG)([C.default], () => C.default.locale),
                        u = r.useCallback(
                            async (n, a) => {
                                if (l) return;
                                let r = n ?? c;
                                i(!0);
                                let s = a ?? r;
                                (0, h.P0)({
                                    text: N.intl.formatToPlainString(N.t.Znl8Z8, { targetLanguage: s }),
                                    icon: S.D,
                                });
                                try {
                                    let n = await y.Bo.post({
                                        url: M.Rsh.AI_TRANSLATE,
                                        body: { content: t, locale: r },
                                        rejectWithError: (0, y.fT)(),
                                    });
                                    n.body &&
                                        (e(n.body.content),
                                        (0, h.P0)({
                                            text: N.intl.formatToPlainString(N.t.FtVUqm, { targetLanguage: s }),
                                            variant: "success",
                                        }));
                                } finally {
                                    i(!1);
                                }
                            },
                            [l, c, t, e],
                        ),
                        d = (0, N.getAvailableLocales)().map((t) => {
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
                                    icon: () => (0, a.jsx)("img", { alt: "", src: e, className: P.M }),
                                    leadingAccessory: { type: "image", src: e },
                                    action: () => u(t.value, t.name),
                                    disabled: l,
                                },
                                t.value,
                            );
                        });
                    return (0, a.jsx)(o.Dr, {
                        id: "translate",
                        label: l ? N.intl.string(N.t.SVKIdU) : N.intl.string(N.t["6epDlR"]),
                        action: () => u(),
                        disabled: l,
                        children: d,
                    });
                })(u, d),
                g = (function (t, e, n) {
                    let [l, i] = r.useState(null),
                        s = r.useCallback(
                            async (t) => {
                                if (null == l) {
                                    (i(t.id),
                                        (0, h.P0)({
                                            text: N.intl.formatToPlainString(N.t.rrf7Kf, { transformName: t.name }),
                                            icon: S.D,
                                        }));
                                    try {
                                        let a = await y.Bo.post({
                                            url: M.Rsh.AI_TEXT_TRANSFORM,
                                            body: { content: e, prompt: t.prompt },
                                            rejectWithError: (0, y.fT)(),
                                        });
                                        a.body &&
                                            (n(a.body.content),
                                            (0, h.P0)({
                                                text: N.intl.formatToPlainString(N.t.qe4KvQ, { transformName: t.name }),
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
                                label: e ? N.intl.formatToPlainString(N.t.rrf7Kf, { transformName: t.name }) : t.name,
                                icon: S.D,
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
                          f,
                          (0, a.jsxs)(o.Dr, {
                              id: "text-transforms",
                              label: N.intl.string(N.t["6YZezO"]),
                              icon: S.D,
                              children: [
                                  g,
                                  g.length > 0 ? (0, a.jsx)(o.bX, {}) : null,
                                  (0, a.jsx)(o.Dr, {
                                      id: "manage-text-transforms",
                                      label: N.intl.string(N.t.IcDoaD),
                                      action: () => {
                                          (0, A.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("378267"),
                                                  n.e("54191"),
                                              ]).then(n.bind(n, 665906));
                                              return (e) => (0, a.jsx)(t, { ...e });
                                          });
                                      },
                                  }),
                              ],
                          }),
                      ],
                  })
                : null;
        })(k),
        K = (0, s.bG)([m.Ay], () => m.Ay.isSubmitButtonEnabled),
        V = g._3.useSetting();
    if (!p.isPlatformEmbedded) return null;
    let W = k.chatInputType?.commands?.enabled ?? !1,
        Y = k.chatInputType?.stickers?.autoSuggest ?? !1,
        B = k.chatInputType?.submit?.button ?? !1,
        Z = W || Y,
        z =
            "" !== e
                ? [
                      (0, a.jsx)(
                          o.Dr,
                          {
                              id: "cut",
                              label: N.intl.string(N.t.pNPVhe),
                              shortcut: (0, p.isMac)() ? "\u2318X" : "Ctrl+X",
                              action: () => T.Ay.cut(),
                          },
                          "cut",
                      ),
                      (0, a.jsx)(
                          o.Dr,
                          {
                              id: "copy",
                              label: N.intl.string(N.t.OpuAlK),
                              shortcut: (0, p.isMac)() ? "\u2318C" : "Ctrl+C",
                              action: () => T.Ay.copy(),
                          },
                          "copy",
                      ),
                  ]
                : null,
        H = (0, a.jsx)(o.sL, {
            id: "command-suggestions",
            label: N.intl.string(N.t["9rJKF7"]),
            checked: V,
            action: () => {
                let t = !V;
                (g._3.updateSetting(t),
                    b.default.track(M.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: M.ZSU.CONTEXT_MENU },
                    }));
            },
        });
    return (0, a.jsxs)(c.W, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: L,
        "aria-label": N.intl.string(N.t.NWlDSI),
        onSelect: X,
        children: [
            Z && (0, a.jsx)(o.Dr, { id: "suggestions", label: N.intl.string(N.t.zgxg7v), children: W && H }),
            B &&
                (0, a.jsx)(o.sL, {
                    id: "submit-button",
                    label: N.intl.string(N.t.G8XDyj),
                    checked: K,
                    action: () => {
                        (0, d.Xt)();
                    },
                }),
            (0, a.jsx)(o.rX, { children: w }),
            (0, a.jsxs)(o.rX, { children: [F, G] }),
            (0, a.jsxs)(o.rX, {
                children: [
                    z,
                    (0, a.jsx)(o.Dr, {
                        id: "paste",
                        label: N.intl.string(N.t.lMUxVi),
                        shortcut: (0, p.isMac)() ? "\u2318V" : "Ctrl+V",
                        action: () => T.Ay.paste(),
                    }),
                    v && (0, a.jsx)(o.Dr, { id: "paste-as-plain-text", label: N.intl.string(N.t.X92Qnr), action: U }),
                ],
            }),
        ],
    });
}
