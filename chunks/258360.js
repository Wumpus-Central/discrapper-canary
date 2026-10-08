n.d(e, { default: () => P });
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
    S = n(19575),
    T = n(820066),
    x = n(636537),
    y = n(376357),
    C = n(152367),
    h = n(192308),
    A = n(869388),
    j = n(147087),
    D = n(773669),
    E = n(186306),
    _ = n(323350),
    k = n(652215),
    M = n(660183),
    N = n(946190);
function P(t) {
    let { text: e, editor: P, target: I, onHeightUpdate: O, onSelect: R, clipboardHasMixedContent: X } = t,
        U = r.useCallback(
            (t) => {
                (i.rL.focus(P),
                    setTimeout(() => {
                        (t?.(), T.VW.focus(P));
                    }, 0));
            },
            [P],
        ),
        L = r.useCallback(() => {
            (0, u.Z_)(U);
        }, [U]),
        v = r.useCallback(() => {
            let t = S.Ay.readClipboard();
            0 !== t.length &&
                U(() => {
                    l.gB.insertText(P, t);
                });
        }, [U, P]),
        [w, F] = (0, f.A)({ text: e, target: I, onHeightUpdate: O }),
        G = (function (t) {
            let e = (0, j.b)(),
                l = (0, s.bG)([A.A], () => A.A.getTransforms()),
                { selection: c } = t,
                u =
                    null != c
                        ? (0, _.WO)(T.VW.richValue(t), { mode: "plain", range: c, preventEmojiSurrogates: !1 })
                        : "",
                d = r.useCallback(
                    (e) => {
                        (i.rL.focus(t),
                            E.o.withSingleEntry(t, () => {
                                (t.deleteFragment(), t.insertText(e));
                            }));
                    },
                    [t],
                ),
                m = (function (t, e) {
                    let [n, l] = r.useState(!1),
                        i = r.useCallback(async () => {
                            if (!n) {
                                (l(!0), (0, y.P0)((0, y.ox)(M.intl.string(M.t.p54KYY), y.Ck.AI)));
                                try {
                                    let n = await x.Bo.post({
                                        url: k.Rsh.AI_FIX_GRAMMAR,
                                        body: { content: t },
                                        rejectWithError: (0, x.fT)(),
                                    });
                                    n.body &&
                                        (e(n.body.content),
                                        (0, y.P0)((0, y.ox)(M.intl.string(M.t.mxQpUY), y.Ck.SUCCESS)));
                                } finally {
                                    l(!1);
                                }
                            }
                        }, [n, t, e]);
                    return (0, a.jsx)(o.Dr, {
                        id: "fix-grammar",
                        label: n ? M.intl.string(M.t.p54KYY) : M.intl.string(M.t.fCpOHj),
                        icon: C.D,
                        action: i,
                        disabled: n,
                    });
                })(u, d),
                f = (function (t, e) {
                    let [l, i] = r.useState(!1),
                        c = (0, s.bG)([D.default], () => D.default.locale),
                        u = r.useCallback(
                            async (n, a) => {
                                if (l) return;
                                let r = n ?? c;
                                i(!0);
                                let s = a ?? r;
                                (0, y.P0)(
                                    (0, y.ox)(M.intl.formatToPlainString(M.t.Znl8Z8, { targetLanguage: s }), y.Ck.AI),
                                );
                                try {
                                    let n = await x.Bo.post({
                                        url: k.Rsh.AI_TRANSLATE,
                                        body: { content: t, locale: r },
                                        rejectWithError: (0, x.fT)(),
                                    });
                                    n.body &&
                                        (e(n.body.content),
                                        (0, y.P0)(
                                            (0, y.ox)(
                                                M.intl.formatToPlainString(M.t.FtVUqm, { targetLanguage: s }),
                                                y.Ck.SUCCESS,
                                            ),
                                        ));
                                } finally {
                                    i(!1);
                                }
                            },
                            [l, c, t, e],
                        ),
                        d = (0, M.getAvailableLocales)().map((t) => {
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
                                    icon: () => (0, a.jsx)("img", { alt: "", src: e, className: N.M }),
                                    leadingAccessory: { type: "image", src: e },
                                    action: () => u(t.value, t.name),
                                    disabled: l,
                                },
                                t.value,
                            );
                        });
                    return (0, a.jsx)(o.Dr, {
                        id: "translate",
                        label: l ? M.intl.string(M.t.SVKIdU) : M.intl.string(M.t["6epDlR"]),
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
                                        (0, y.P0)(
                                            (0, y.ox)(
                                                M.intl.formatToPlainString(M.t.rrf7Kf, { transformName: t.name }),
                                                y.Ck.AI,
                                            ),
                                        ));
                                    try {
                                        let a = await x.Bo.post({
                                            url: k.Rsh.AI_TEXT_TRANSFORM,
                                            body: { content: e, prompt: t.prompt },
                                            rejectWithError: (0, x.fT)(),
                                        });
                                        a.body &&
                                            (n(a.body.content),
                                            (0, y.P0)(
                                                (0, y.ox)(
                                                    M.intl.formatToPlainString(M.t.qe4KvQ, { transformName: t.name }),
                                                    y.Ck.SUCCESS,
                                                ),
                                            ));
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
                                label: e ? M.intl.formatToPlainString(M.t.rrf7Kf, { transformName: t.name }) : t.name,
                                icon: C.D,
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
                              label: M.intl.string(M.t["6YZezO"]),
                              icon: C.D,
                              children: [
                                  g,
                                  g.length > 0 ? (0, a.jsx)(o.bX, {}) : null,
                                  (0, a.jsx)(o.Dr, {
                                      id: "manage-text-transforms",
                                      label: M.intl.string(M.t.IcDoaD),
                                      action: () => {
                                          (0, h.openModalLazy)(async () => {
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
        })(P),
        K = (0, s.bG)([m.Ay], () => m.Ay.isSubmitButtonEnabled),
        V = g._3.useSetting();
    if (!p.isPlatformEmbedded) return null;
    let W = P.chatInputType?.commands?.enabled ?? !1,
        Y = P.chatInputType?.stickers?.autoSuggest ?? !1,
        B = P.chatInputType?.submit?.button ?? !1,
        Z = W || Y,
        z =
            "" !== e
                ? [
                      (0, a.jsx)(
                          o.Dr,
                          {
                              id: "cut",
                              label: M.intl.string(M.t.pNPVhe),
                              shortcut: (0, p.isMac)() ? "\u2318X" : "Ctrl+X",
                              action: () => S.Ay.cut(),
                          },
                          "cut",
                      ),
                      (0, a.jsx)(
                          o.Dr,
                          {
                              id: "copy",
                              label: M.intl.string(M.t.OpuAlK),
                              shortcut: (0, p.isMac)() ? "\u2318C" : "Ctrl+C",
                              action: () => S.Ay.copy(),
                          },
                          "copy",
                      ),
                  ]
                : null,
        H = (0, a.jsx)(o.sL, {
            id: "command-suggestions",
            label: M.intl.string(M.t["9rJKF7"]),
            checked: V,
            action: () => {
                let t = !V;
                (g._3.updateSetting(t),
                    b.default.track(k.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: k.ZSU.CONTEXT_MENU },
                    }));
            },
        });
    return (0, a.jsxs)(c.W, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: L,
        "aria-label": M.intl.string(M.t.NWlDSI),
        onSelect: R,
        children: [
            Z && (0, a.jsx)(o.Dr, { id: "suggestions", label: M.intl.string(M.t.zgxg7v), children: W && H }),
            B &&
                (0, a.jsx)(o.sL, {
                    id: "submit-button",
                    label: M.intl.string(M.t.G8XDyj),
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
                        label: M.intl.string(M.t.lMUxVi),
                        shortcut: (0, p.isMac)() ? "\u2318V" : "Ctrl+V",
                        action: () => S.Ay.paste(),
                    }),
                    X && (0, a.jsx)(o.Dr, { id: "paste-as-plain-text", label: M.intl.string(M.t.X92Qnr), action: v }),
                ],
            }),
        ],
    });
}
