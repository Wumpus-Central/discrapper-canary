(n.d(e, { Z: () => h }), n(388685), n(781311));
var s = n(255367),
    a = n(73800),
    r = n(650557),
    i = n(442837),
    c = n(544891),
    o = n(481060),
    l = n(466721),
    u = n(706454),
    p = n(53529),
    f = n(925994),
    g = n(887490),
    d = n(981631),
    b = n(388032),
    x = n(826390);
function h(t) {
    let e = l.C.useExperiment({ location: 'ChannelTextAreaContextMenu' }),
        { selection: h } = t,
        y =
            null != h
                ? (0, f.sk)(g.bN.richValue(t), {
                      mode: 'plain',
                      range: h,
                      preventEmojiSurrogates: !1
                  })
                : '',
        m = a.useCallback(
            (e) => {
                (r.F3.focus(t),
                    p.T.withSingleEntry(t, () => {
                        (t.deleteFragment(), t.insertText(e));
                    }));
            },
            [t]
        ),
        S = (function (t, e) {
            let [n, r] = a.useState(!1),
                i = a.useCallback(async () => {
                    if (!n) {
                        (r(!0), (0, o.showToast)((0, o.createToast)(b.intl.string(b.t.p54KYW), o.ToastType.AI)));
                        try {
                            let n = await c.tn.post({
                                url: d.ANM.AI_FIX_GRAMMAR,
                                body: { content: t },
                                rejectWithError: !1
                            });
                            n.ok && n.body && (e(n.body.content), (0, o.showToast)((0, o.createToast)(b.intl.string(b.t.mxQpUV), o.ToastType.SUCCESS)));
                        } finally {
                            r(!1);
                        }
                    }
                }, [n, t, e]);
            return (0, s.jsx)(o.sNh, {
                id: 'fix-grammar',
                label: n ? b.intl.string(b.t.p54KYW) : b.intl.string(b.t.fCpOHh),
                icon: o.$2U,
                action: i,
                disabled: n
            });
        })(y, m),
        j = (function (t, e) {
            let [r, l] = a.useState(!1),
                p = (0, i.e7)([u.default], () => u.default.locale),
                f = a.useCallback(
                    async (n, s) => {
                        if (r) return;
                        let a = null != n ? n : p;
                        l(!0);
                        let i = null != s ? s : a;
                        (0, o.showToast)((0, o.createToast)(b.intl.formatToPlainString(b.t.Znl8Z2, { targetLanguage: i }), o.ToastType.AI));
                        try {
                            let n = await c.tn.post({
                                url: d.ANM.AI_TRANSLATE,
                                body: {
                                    content: t,
                                    locale: a
                                },
                                rejectWithError: !1
                            });
                            n.ok && n.body && (e(n.body.content), (0, o.showToast)((0, o.createToast)(b.intl.formatToPlainString(b.t.FtVUqq, { targetLanguage: i }), o.ToastType.SUCCESS)));
                        } finally {
                            l(!1);
                        }
                    },
                    [r, p, t, e]
                ),
                g = (0, b.getAvailableLocales)().map((t) => {
                    let e;
                    try {
                        e = n(621287)('./'.concat(t.value, '.png'));
                    } catch (t) {
                        e = n(1474);
                    }
                    return (0, s.jsx)(
                        o.sNh,
                        {
                            id: 'translate-'.concat(t.value),
                            label: t.name,
                            icon: () =>
                                (0, s.jsx)('img', {
                                    alt: '',
                                    src: e,
                                    className: x.flagIcon
                                }),
                            action: () => f(t.value, t.name),
                            disabled: r
                        },
                        t.value
                    );
                });
            return (0, s.jsx)(o.sNh, {
                id: 'translate',
                label: r ? b.intl.string(b.t.SVKIdX) : b.intl.string(b.t['6epDlZ']),
                action: () => f(),
                disabled: r,
                children: g
            });
        })(y, m);
    return '' !== y.trim() && (null == e ? void 0 : e.enableAIFeatures)
        ? (0, s.jsxs)(s.Fragment, {
              children: [S, j]
          })
        : null;
}
