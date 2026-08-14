n.d(e, { default: () => O });
var a = n(477900),
    r = n(582128),
    l = n(719442),
    i = n(530795),
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
    y = n(636537),
    x = n(691540),
    C = n(857250),
    h = n(97483),
    A = n(152367),
    j = n(192308),
    D = n(869388),
    E = n(147087),
    _ = n(773669),
    k = n(186306),
    M = n(323350),
    N = n(652215),
    P = n(375708),
    I = n(975853);
function O(t) {
    let { text: e, editor: O, target: R, onHeightUpdate: X, onSelect: U, clipboardHasMixedContent: L } = t,
        v = r.useCallback(
            (t) => {
                i.rL.focus(O),
                    setTimeout(() => {
                        t?.(), T.VW.focus(O);
                    }, 0);
            },
            [O],
        ),
        w = r.useCallback(() => {
            (0, u.Z_)(v);
        }, [v]),
        F = r.useCallback(() => {
            let t = S.Ay.readClipboard();
            0 !== t.length &&
                v(() => {
                    l.gB.insertText(O, t);
                });
        }, [v, O]),
        [G, K] = (0, f.A)({ text: e, target: R, onHeightUpdate: X }),
        V = (function (t) {
            let e = (0, E.b)(),
                l = (0, s.bG)([D.A], () => D.A.getTransforms()),
                { selection: c } = t,
                u =
                    null != c
                        ? (0, M.WO)(T.VW.richValue(t), { mode: "plain", range: c, preventEmojiSurrogates: !1 })
                        : "",
                d = r.useCallback(
                    (e) => {
                        i.rL.focus(t),
                            k.o.withSingleEntry(t, () => {
                                t.deleteFragment(), t.insertText(e);
                            });
                    },
                    [t],
                ),
                m = (function (t, e) {
                    let [n, l] = r.useState(!1),
                        i = r.useCallback(async () => {
                            if (!n) {
                                l(!0), (0, x.P0)((0, C.o)(P.intl.string(P.t.p54KYY), h.Ck.AI));
                                try {
                                    let n = await y.Bo.post({
                                        url: N.Rsh.AI_FIX_GRAMMAR,
                                        body: { content: t },
                                        rejectWithError: (0, y.fT)(),
                                    });
                                    n.body &&
                                        (e(n.body.content),
                                        (0, x.P0)((0, C.o)(P.intl.string(P.t.mxQpUY), h.Ck.SUCCESS)));
                                } finally {
                                    l(!1);
                                }
                            }
                        }, [n, t, e]);
                    return (0, a.jsx)(o.Dr, {
                        id: "fix-grammar",
                        label: n ? P.intl.string(P.t.p54KYY) : P.intl.string(P.t.fCpOHj),
                        icon: A.D,
                        action: i,
                        disabled: n,
                    });
                })(u, d),
                f = (function (t, e) {
                    let [l, i] = r.useState(!1),
                        c = (0, s.bG)([_.default], () => _.default.locale),
                        u = r.useCallback(
                            async (n, a) => {
                                if (l) return;
                                let r = n ?? c;
                                i(!0);
                                let s = a ?? r;
                                (0, x.P0)(
                                    (0, C.o)(P.intl.formatToPlainString(P.t.Znl8Z8, { targetLanguage: s }), h.Ck.AI),
                                );
                                try {
                                    let n = await y.Bo.post({
                                        url: N.Rsh.AI_TRANSLATE,
                                        body: { content: t, locale: r },
                                        rejectWithError: (0, y.fT)(),
                                    });
                                    n.body &&
                                        (e(n.body.content),
                                        (0, x.P0)(
                                            (0, C.o)(
                                                P.intl.formatToPlainString(P.t.FtVUqm, { targetLanguage: s }),
                                                h.Ck.SUCCESS,
                                            ),
                                        ));
                                } finally {
                                    i(!1);
                                }
                            },
                            [l, c, t, e],
                        ),
                        d = (0, P.getAvailableLocales)().map((t) => {
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
                                    icon: () => (0, a.jsx)("img", { alt: "", src: e, className: I.M }),
                                    leadingAccessory: { type: "image", src: e },
                                    action: () => u(t.value, t.name),
                                    disabled: l,
                                },
                                t.value,
                            );
                        });
                    return (0, a.jsx)(o.Dr, {
                        id: "translate",
                        label: l ? P.intl.string(P.t.SVKIdU) : P.intl.string(P.t["6epDlR"]),
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
                                    i(t.id),
                                        (0, x.P0)(
                                            (0, C.o)(
                                                P.intl.formatToPlainString(P.t.rrf7Kf, { transformName: t.name }),
                                                h.Ck.AI,
                                            ),
                                        );
                                    try {
                                        let a = await y.Bo.post({
                                            url: N.Rsh.AI_TEXT_TRANSFORM,
                                            body: { content: e, prompt: t.prompt },
                                            rejectWithError: (0, y.fT)(),
                                        });
                                        a.body &&
                                            (n(a.body.content),
                                            (0, x.P0)(
                                                (0, C.o)(
                                                    P.intl.formatToPlainString(P.t.qe4KvQ, { transformName: t.name }),
                                                    h.Ck.SUCCESS,
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
                                label: e ? P.intl.formatToPlainString(P.t.rrf7Kf, { transformName: t.name }) : t.name,
                                icon: A.D,
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
                              label: P.intl.string(P.t["6YZezO"]),
                              icon: A.D,
                              children: [
                                  g,
                                  g.length > 0 ? (0, a.jsx)(o.bX, {}) : null,
                                  (0, a.jsx)(o.Dr, {
                                      id: "manage-text-transforms",
                                      label: P.intl.string(P.t.IcDoaD),
                                      action: () => {
                                          (0, j.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("194232"),
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
        })(O),
        W = (0, s.bG)([m.Ay], () => m.Ay.isSubmitButtonEnabled),
        Y = g._3.useSetting();
    if (!p.isPlatformEmbedded) return null;
    let B = O.chatInputType?.commands?.enabled ?? !1,
        Z = O.chatInputType?.stickers?.autoSuggest ?? !1,
        z = O.chatInputType?.submit?.button ?? !1,
        H = B || Z,
        Q =
            "" !== e
                ? [
                      (0, a.jsx)(
                          o.Dr,
                          {
                              id: "cut",
                              label: P.intl.string(P.t.pNPVhe),
                              shortcut: (0, p.isMac)() ? "\u2318X" : "Ctrl+X",
                              action: () => S.Ay.cut(),
                          },
                          "cut",
                      ),
                      (0, a.jsx)(
                          o.Dr,
                          {
                              id: "copy",
                              label: P.intl.string(P.t.OpuAlK),
                              shortcut: (0, p.isMac)() ? "\u2318C" : "Ctrl+C",
                              action: () => S.Ay.copy(),
                          },
                          "copy",
                      ),
                  ]
                : null,
        $ = (0, a.jsx)(o.sL, {
            id: "command-suggestions",
            label: P.intl.string(P.t["9rJKF7"]),
            checked: Y,
            action: () => {
                let t = !Y;
                g._3.updateSetting(t),
                    b.default.track(N.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: N.ZSU.CONTEXT_MENU },
                    });
            },
        });
    return (0, a.jsxs)(c.W, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: w,
        "aria-label": P.intl.string(P.t.NWlDSI),
        onSelect: U,
        children: [
            H && (0, a.jsx)(o.Dr, { id: "suggestions", label: P.intl.string(P.t.zgxg7v), children: B && $ }),
            z &&
                (0, a.jsx)(o.sL, {
                    id: "submit-button",
                    label: P.intl.string(P.t.G8XDyj),
                    checked: W,
                    action: () => {
                        (0, d.Xt)();
                    },
                }),
            (0, a.jsx)(o.rX, { children: G }),
            (0, a.jsxs)(o.rX, { children: [K, V] }),
            (0, a.jsxs)(o.rX, {
                children: [
                    Q,
                    (0, a.jsx)(o.Dr, {
                        id: "paste",
                        label: P.intl.string(P.t.lMUxVi),
                        shortcut: (0, p.isMac)() ? "\u2318V" : "Ctrl+V",
                        action: () => S.Ay.paste(),
                    }),
                    L && (0, a.jsx)(o.Dr, { id: "paste-as-plain-text", label: P.intl.string(P.t.X92Qnr), action: F }),
                ],
            }),
        ],
    });
}
