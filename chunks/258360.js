"use strict";
s.d(e, { default: () => R });
var n = s(627968),
    r = s(64700),
    a = s(154283),
    i = s(670482),
    l = s(17928),
    o = s(477782),
    c = s(550079),
    u = s(442433),
    p = s(955572),
    d = s(775602),
    g = s(316254),
    f = s(253932),
    b = s(954571),
    x = s(723702),
    m = s(19575),
    S = s(820066),
    h = s(636537),
    C = s(691540),
    T = s(857250),
    y = s(97483),
    A = s(152367),
    E = s(192308),
    j = s(869388),
    D = s(147087),
    k = s(773669),
    _ = s(186306),
    L = s(323350),
    M = s(652215),
    O = s(985018),
    v = s(27013);
function R(t) {
    let { text: e, editor: R, target: N, onHeightUpdate: P, onSelect: U } = t,
        I = r.useCallback(
            (t) => {
                i.rL.focus(R),
                    setTimeout(() => {
                        t?.(), S.VW.focus(R);
                    }, 0);
            },
            [R],
        ),
        G = r.useCallback(() => {
            (0, u.Z_)(I);
        }, [I]),
        X = r.useCallback(() => {
            let t = m.Ay.readClipboard();
            0 !== t.length &&
                I(() => {
                    a.gB.insertText(R, t);
                });
        }, [I, R]),
        [K, w] = (0, g.A)({ text: e, target: N, onHeightUpdate: P }),
        H = (function (t) {
            let e = (0, D.b)(),
                a = (0, l.bG)([j.A], () => j.A.getTransforms()),
                { selection: c } = t,
                u =
                    null != c
                        ? (0, L.WO)(S.VW.richValue(t), { mode: "plain", range: c, preventEmojiSurrogates: !1 })
                        : "",
                p = r.useCallback(
                    (e) => {
                        i.rL.focus(t),
                            _.o.withSingleEntry(t, () => {
                                t.deleteFragment(), t.insertText(e);
                            });
                    },
                    [t],
                ),
                d = (function (t, e) {
                    let [s, a] = r.useState(!1),
                        i = r.useCallback(async () => {
                            if (!s) {
                                a(!0), (0, C.P0)((0, T.o)(O.intl.string(O.t.p54KYY), y.Ck.AI));
                                try {
                                    let s = await h.Bo.post({
                                        url: M.Rsh.AI_FIX_GRAMMAR,
                                        body: { content: t },
                                        rejectWithError: !1,
                                    });
                                    s.ok &&
                                        s.body &&
                                        (e(s.body.content),
                                        (0, C.P0)((0, T.o)(O.intl.string(O.t.mxQpUY), y.Ck.SUCCESS)));
                                } finally {
                                    a(!1);
                                }
                            }
                        }, [s, t, e]);
                    return (0, n.jsx)(o.Dr, {
                        id: "fix-grammar",
                        label: s ? O.intl.string(O.t.p54KYY) : O.intl.string(O.t.fCpOHj),
                        icon: A.D,
                        action: i,
                        disabled: s,
                    });
                })(u, p),
                g = (function (t, e) {
                    let [a, i] = r.useState(!1),
                        c = (0, l.bG)([k.default], () => k.default.locale),
                        u = r.useCallback(
                            async (s, n) => {
                                if (a) return;
                                let r = s ?? c;
                                i(!0);
                                let l = n ?? r;
                                (0, C.P0)(
                                    (0, T.o)(O.intl.formatToPlainString(O.t.Znl8Z8, { targetLanguage: l }), y.Ck.AI),
                                );
                                try {
                                    let s = await h.Bo.post({
                                        url: M.Rsh.AI_TRANSLATE,
                                        body: { content: t, locale: r },
                                        rejectWithError: !1,
                                    });
                                    s.ok &&
                                        s.body &&
                                        (e(s.body.content),
                                        (0, C.P0)(
                                            (0, T.o)(
                                                O.intl.formatToPlainString(O.t.FtVUqm, { targetLanguage: l }),
                                                y.Ck.SUCCESS,
                                            ),
                                        ));
                                } finally {
                                    i(!1);
                                }
                            },
                            [a, c, t, e],
                        ),
                        p = (0, O.getAvailableLocales)().map((t) => {
                            let e;
                            try {
                                e = s(579832)(`./${t.value}.png`);
                            } catch (t) {
                                e = s(432706);
                            }
                            return (0, n.jsx)(
                                o.Dr,
                                {
                                    id: `translate-${t.value}`,
                                    label: t.name,
                                    icon: () => (0, n.jsx)("img", { alt: "", src: e, className: v.M }),
                                    leadingAccessory: { type: "image", src: e },
                                    action: () => u(t.value, t.name),
                                    disabled: a,
                                },
                                t.value,
                            );
                        });
                    return (0, n.jsx)(o.Dr, {
                        id: "translate",
                        label: a ? O.intl.string(O.t.SVKIdU) : O.intl.string(O.t["6epDlR"]),
                        action: () => u(),
                        disabled: a,
                        children: p,
                    });
                })(u, p),
                f = (function (t, e, s) {
                    let [a, i] = r.useState(null),
                        l = r.useCallback(
                            async (t) => {
                                if (null == a) {
                                    i(t.id),
                                        (0, C.P0)(
                                            (0, T.o)(
                                                O.intl.formatToPlainString(O.t.rrf7Kf, { transformName: t.name }),
                                                y.Ck.AI,
                                            ),
                                        );
                                    try {
                                        let n = await h.Bo.post({
                                            url: M.Rsh.AI_TEXT_TRANSFORM,
                                            body: { content: e, prompt: t.prompt },
                                            rejectWithError: !1,
                                        });
                                        n.ok &&
                                            n.body &&
                                            (s(n.body.content),
                                            (0, C.P0)(
                                                (0, T.o)(
                                                    O.intl.formatToPlainString(O.t.qe4KvQ, { transformName: t.name }),
                                                    y.Ck.SUCCESS,
                                                ),
                                            ));
                                    } finally {
                                        i(null);
                                    }
                                }
                            },
                            [a, e, s],
                        );
                    return t.map((t) => {
                        let e = a === t.id;
                        return (0, n.jsx)(
                            o.Dr,
                            {
                                id: `text-transform-${t.id}`,
                                label: e ? O.intl.formatToPlainString(O.t.rrf7Kf, { transformName: t.name }) : t.name,
                                icon: A.D,
                                action: () => l(t),
                                disabled: null != a,
                            },
                            t.id,
                        );
                    });
                })(a, u, p);
            return "" !== u.trim() && e
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          d,
                          g,
                          (0, n.jsxs)(o.Dr, {
                              id: "text-transforms",
                              label: O.intl.string(O.t["6YZezO"]),
                              icon: A.D,
                              children: [
                                  f,
                                  f.length > 0 ? (0, n.jsx)(o.bX, {}) : null,
                                  (0, n.jsx)(o.Dr, {
                                      id: "manage-text-transforms",
                                      label: O.intl.string(O.t.IcDoaD),
                                      action: () => {
                                          (0, E.openModalLazy)(async () => {
                                              let { default: t } = await s.e("54191").then(s.bind(s, 665906));
                                              return (e) => (0, n.jsx)(t, { ...e });
                                          });
                                      },
                                  }),
                              ],
                          }),
                      ],
                  })
                : null;
        })(R),
        V = (0, l.bG)([d.A], () => d.A.isSubmitButtonEnabled),
        W = f._3.useSetting();
    if (!x.isPlatformEmbedded) return null;
    let F = R.chatInputType?.commands?.enabled ?? !1,
        z = R.chatInputType?.stickers?.autoSuggest ?? !1,
        B = R.chatInputType?.submit?.button ?? !1,
        Y = F || z,
        q = m.Ay.clipboardHasMixedContent(),
        Z =
            "" !== e
                ? [
                      (0, n.jsx)(
                          o.Dr,
                          {
                              id: "cut",
                              label: O.intl.string(O.t.pNPVhe),
                              shortcut: (0, x.isMac)() ? "⌘X" : "Ctrl+X",
                              action: () => m.Ay.cut(),
                          },
                          "cut",
                      ),
                      (0, n.jsx)(
                          o.Dr,
                          {
                              id: "copy",
                              label: O.intl.string(O.t.OpuAlK),
                              shortcut: (0, x.isMac)() ? "⌘C" : "Ctrl+C",
                              action: () => m.Ay.copy(),
                          },
                          "copy",
                      ),
                  ]
                : null,
        $ = (0, n.jsx)(o.sL, {
            id: "command-suggestions",
            label: O.intl.string(O.t["9rJKF7"]),
            checked: W,
            action: () => {
                let t = !W;
                f._3.updateSetting(t),
                    b.default.track(M.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: M.ZSU.CONTEXT_MENU },
                    });
            },
        });
    return (0, n.jsxs)(c.W, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: G,
        "aria-label": O.intl.string(O.t.NWlDSI),
        onSelect: U,
        children: [
            Y && (0, n.jsx)(o.Dr, { id: "suggestions", label: O.intl.string(O.t.zgxg7v), children: F && $ }),
            B &&
                (0, n.jsx)(o.sL, {
                    id: "submit-button",
                    label: O.intl.string(O.t.G8XDyj),
                    checked: V,
                    action: () => {
                        (0, p.Xt)();
                    },
                }),
            (0, n.jsx)(o.rX, { children: K }),
            (0, n.jsxs)(o.rX, { children: [w, H] }),
            (0, n.jsxs)(o.rX, {
                children: [
                    Z,
                    (0, n.jsx)(o.Dr, {
                        id: "paste",
                        label: O.intl.string(O.t.lMUxVi),
                        shortcut: (0, x.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => m.Ay.paste(),
                    }),
                    q &&
                        (0, n.jsx)(o.Dr, {
                            id: "paste-as-plain-text",
                            label: O.intl.string(O.t.X92Qnr),
                            shortcut: (0, x.isMac)() ? "⌘⇧V" : "Ctrl+Shift+V",
                            action: X,
                        }),
                ],
            }),
        ],
    });
}
