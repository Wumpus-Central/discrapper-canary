n.d(e, { Z: () => y }), n(388685), n(781311);
var l = n(951288),
    a = n(647438),
    i = n(755712),
    r = n(442837),
    s = n(544891),
    o = n(481060),
    c = n(466721),
    u = n(706454),
    d = n(53529),
    b = n(925994),
    f = n(887490),
    p = n(981631),
    g = n(388032),
    h = n(35777);
function y(t) {
    let e = c.C.useExperiment({ location: "ChannelTextAreaContextMenu" }),
        { selection: y } = t,
        m =
            null != y
                ? (0, b.sk)(f.bN.richValue(t), {
                      mode: "plain",
                      range: y,
                      preventEmojiSurrogates: !1,
                  })
                : "",
        S = a.useCallback(
            (e) => {
                i.F3.focus(t),
                    d.T.withSingleEntry(t, () => {
                        t.deleteFragment(), t.insertText(e);
                    });
            },
            [t],
        ),
        j = (function (t, e) {
            let [n, i] = a.useState(!1),
                r = a.useCallback(async () => {
                    if (!n) {
                        i(!0), (0, o.showToast)((0, o.createToast)(g.intl.string(g.t.p54KYW), o.ToastType.AI));
                        try {
                            let n = await s.tn.post({
                                url: p.ANM.AI_FIX_GRAMMAR,
                                body: { content: t },
                                rejectWithError: !1,
                            });
                            n.ok &&
                                n.body &&
                                (e(n.body.content),
                                (0, o.showToast)((0, o.createToast)(g.intl.string(g.t.mxQpUV), o.ToastType.SUCCESS)));
                        } finally {
                            i(!1);
                        }
                    }
                }, [n, t, e]);
            return (0, l.jsx)(o.sNh, {
                id: "fix-grammar",
                label: n ? g.intl.string(g.t.p54KYW) : g.intl.string(g.t.fCpOHh),
                icon: o.$2U,
                action: r,
                disabled: n,
            });
        })(m, S),
        T = (function (t, e) {
            let [i, c] = a.useState(!1),
                d = (0, r.e7)([u.default], () => u.default.locale),
                b = a.useCallback(
                    async (n, l) => {
                        if (i) return;
                        let a = null != n ? n : d;
                        c(!0);
                        let r = null != l ? l : a;
                        (0, o.showToast)(
                            (0, o.createToast)(
                                g.intl.formatToPlainString(g.t.Znl8Z2, { targetLanguage: r }),
                                o.ToastType.AI,
                            ),
                        );
                        try {
                            let n = await s.tn.post({
                                url: p.ANM.AI_TRANSLATE,
                                body: {
                                    content: t,
                                    locale: a,
                                },
                                rejectWithError: !1,
                            });
                            n.ok &&
                                n.body &&
                                (e(n.body.content),
                                (0, o.showToast)(
                                    (0, o.createToast)(
                                        g.intl.formatToPlainString(g.t.FtVUqq, { targetLanguage: r }),
                                        o.ToastType.SUCCESS,
                                    ),
                                ));
                        } finally {
                            c(!1);
                        }
                    },
                    [i, d, t, e],
                ),
                f = (0, g.getAvailableLocales)().map((t) => {
                    let e;
                    try {
                        e = n(621287)("./".concat(t.value, ".png"));
                    } catch (t) {
                        e = n(1474);
                    }
                    return (0, l.jsx)(
                        o.sNh,
                        {
                            id: "translate-".concat(t.value),
                            label: t.name,
                            icon: () =>
                                (0, l.jsx)("img", {
                                    alt: "",
                                    src: e,
                                    className: h.flagIcon,
                                }),
                            action: () => b(t.value, t.name),
                            disabled: i,
                        },
                        t.value,
                    );
                });
            return (0, l.jsx)(o.sNh, {
                id: "translate",
                label: i ? g.intl.string(g.t.SVKIdX) : g.intl.string(g.t["6epDlZ"]),
                action: () => b(),
                disabled: i,
                children: f,
            });
        })(m, S);
    return "" !== m.trim() && (null == e ? void 0 : e.enableAIFeatures)
        ? (0, l.jsxs)(l.Fragment, {
              children: [j, T],
          })
        : null;
}
