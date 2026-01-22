n.d(t, {
    A: () => p,
}),
    n(896048),
    n(733351);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    o = n(562465),
    a = n(397927),
    c = n(73153),
    s = n(147087),
    d = n(773669),
    u = n(652215),
    f = n(985018);
let g = new Map();

function p(e, t) {
    let p,
        {
            handleTranslate: b,
            handleRevertTranslation: m,
            isTranslating: y,
            isTranslated: O,
        } = (function (e) {
            let [t, n] = l.useState(!1),
                r = (0, i.bG)([d.default], () => d.default.locale);
            return {
                handleTranslate: l.useCallback(
                    async (l, i) => {
                        var s, d;
                        if (t) return;
                        let p = null != l ? l : r;
                        n(!0);
                        let b =
                            null !=
                            (s =
                                null != i
                                    ? i
                                    : null == (d = (0, f.getAvailableLocales)().find((e) => e.value === p))
                                      ? void 0
                                      : d.name)
                                ? s
                                : p;
                        g.has(e.id) || g.set(e.id, e.content),
                            (0, a.showToast)(
                                (0, a.createToast)(
                                    f.intl.formatToPlainString(f.t.Znl8Z8, {
                                        targetLanguage: b,
                                    }),
                                    a.ToastType.AI,
                                ),
                            );
                        try {
                            let t = await o.Bo.post({
                                url: u.Rsh.AI_TRANSLATE,
                                body: {
                                    content: e.content,
                                    locale: p,
                                },
                                rejectWithError: !1,
                            });
                            t.ok &&
                                t.body &&
                                (c.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: {
                                        id: e.id,
                                        channel_id: e.channel_id,
                                        content: t.body.content,
                                    },
                                }),
                                (0, a.showToast)(
                                    (0, a.createToast)(
                                        f.intl.formatToPlainString(f.t.FtVUqm, {
                                            targetLanguage: b,
                                        }),
                                        a.ToastType.SUCCESS,
                                    ),
                                ));
                        } finally {
                            n(!1);
                        }
                    },
                    [e, t, r],
                ),
                handleRevertTranslation: l.useCallback(() => {
                    let t = g.get(e.id);
                    null != t &&
                        (c.h.dispatch({
                            type: "MESSAGE_UPDATE",
                            message: {
                                id: e.id,
                                channel_id: e.channel_id,
                                content: t,
                            },
                        }),
                        g.delete(e.id));
                }, [e.id, e.channel_id]),
                isTranslating: t,
                isTranslated: g.has(e.id),
            };
        })(e),
        A =
            ((p = (0, f.getAvailableLocales)()),
            l.useMemo(
                () =>
                    p.map((e) => {
                        let t;
                        try {
                            t = n(579832)("./".concat(e.value, ".png"));
                        } catch (e) {
                            t = n(432706);
                        }
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: "translate-".concat(e.value),
                                label: e.name,
                                leadingAccessory: {
                                    type: "image",
                                    src: t,
                                },
                                action: () => b(e.value, e.name),
                                disabled: y,
                            },
                            e.value,
                        );
                    }),
                [b, y, p],
            )),
        v = (0, s.b)();
    return null != e.content && "" !== e.content.trim() && v
        ? O
            ? (0, r.jsx)(a.Drp, {
                  id: "revert-translation",
                  label: f.intl.string(f.t.JC9BXn),
                  icon: a.UaP,
                  action: m,
                  disabled: y,
              })
            : (0, r.jsx)(a.Drp, {
                  id: "translate",
                  label: y ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
                  action: () => b(),
                  disabled: y,
                  children: A,
              })
        : null;
}
