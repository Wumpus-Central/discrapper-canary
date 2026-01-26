n.d(t, {
    A: () => y,
}),
    n(896048),
    n(733351);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(562465),
    o = n(397927),
    c = n(73153),
    s = n(147087),
    d = n(773669),
    u = n(652215),
    g = n(985018),
    p = n(923545);
let f = new Map();

function y(e, t) {
    let y,
        {
            handleTranslate: b,
            handleRevertTranslation: A,
            isTranslating: m,
            isTranslated: O,
        } = (function (e) {
            let [t, n] = i.useState(!1),
                r = (0, l.bG)([d.default], () => d.default.locale);
            return {
                handleTranslate: i.useCallback(
                    async (i, l) => {
                        var s, d;
                        if (t) return;
                        let p = null != i ? i : r;
                        n(!0);
                        let y =
                            null !=
                            (s =
                                null != l
                                    ? l
                                    : null == (d = (0, g.getAvailableLocales)().find((e) => e.value === p))
                                      ? void 0
                                      : d.name)
                                ? s
                                : p;
                        f.has(e.id) || f.set(e.id, e.content),
                            (0, o.showToast)(
                                (0, o.createToast)(
                                    g.intl.formatToPlainString(g.t.Znl8Z8, {
                                        targetLanguage: y,
                                    }),
                                    o.ToastType.AI,
                                ),
                            );
                        try {
                            let t = await a.Bo.post({
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
                                (0, o.showToast)(
                                    (0, o.createToast)(
                                        g.intl.formatToPlainString(g.t.FtVUqm, {
                                            targetLanguage: y,
                                        }),
                                        o.ToastType.SUCCESS,
                                    ),
                                ));
                        } finally {
                            n(!1);
                        }
                    },
                    [e, t, r],
                ),
                handleRevertTranslation: i.useCallback(() => {
                    let t = f.get(e.id);
                    null != t &&
                        (c.h.dispatch({
                            type: "MESSAGE_UPDATE",
                            message: {
                                id: e.id,
                                channel_id: e.channel_id,
                                content: t,
                            },
                        }),
                        f.delete(e.id));
                }, [e.id, e.channel_id]),
                isTranslating: t,
                isTranslated: f.has(e.id),
            };
        })(e),
        v =
            ((y = (0, g.getAvailableLocales)()),
            i.useMemo(
                () =>
                    y.map((e) => {
                        let t;
                        try {
                            t = n(579832)("./".concat(e.value, ".png"));
                        } catch (e) {
                            t = n(432706);
                        }
                        return (0, r.jsx)(
                            o.Drp,
                            {
                                id: "translate-".concat(e.value),
                                label: e.name,
                                icon: () =>
                                    (0, r.jsx)("img", {
                                        alt: "",
                                        src: t,
                                        className: p.M,
                                    }),
                                leadingAccessory: {
                                    type: "image",
                                    src: t,
                                },
                                action: () => b(e.value, e.name),
                                disabled: m,
                            },
                            e.value,
                        );
                    }),
                [b, m, y],
            )),
        j = (0, s.b)();
    return null != e.content && "" !== e.content.trim() && j
        ? O
            ? (0, r.jsx)(o.Drp, {
                  id: "revert-translation",
                  label: g.intl.string(g.t.JC9BXn),
                  leadingAccessory: {
                      type: "icon",
                      icon: o.UaP,
                  },
                  icon: o.UaP,
                  action: A,
                  disabled: m,
              })
            : (0, r.jsx)(o.Drp, {
                  id: "translate",
                  label: m ? g.intl.string(g.t.SVKIdU) : g.intl.string(g.t["6epDlR"]),
                  action: () => b(),
                  leadingAccessory: {
                      type: "icon",
                      icon: o.UaP,
                  },
                  disabled: m,
                  children: v,
              })
        : null;
}
