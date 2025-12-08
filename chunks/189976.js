n.d(t, { Z: () => p }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(544891),
    o = n(481060),
    s = n(570140),
    c = n(39952),
    u = n(706454),
    d = n(981631),
    f = n(388032),
    g = n(418087);
let b = new Map();
function p(e, t) {
    let {
            handleTranslate: p,
            handleRevertTranslation: m,
            isTranslating: O,
            isTranslated: y,
        } = (function (e) {
            let [t, n] = i.useState(!1),
                r = (0, l.e7)([u.default], () => u.default.locale);
            return {
                handleTranslate: i.useCallback(
                    async (i, l) => {
                        var c, u;
                        if (t) return;
                        let g = null != i ? i : r;
                        n(!0);
                        let p =
                            null !=
                            (u =
                                null != l
                                    ? l
                                    : null == (c = (0, f.getAvailableLocales)().find((e) => e.value === g))
                                      ? void 0
                                      : c.name)
                                ? u
                                : g;
                        b.has(e.id) || b.set(e.id, e.content),
                            (0, o.showToast)(
                                (0, o.createToast)(
                                    f.intl.formatToPlainString(f.t.Znl8Z8, { targetLanguage: p }),
                                    o.ToastType.AI,
                                ),
                            );
                        try {
                            let t = await a.tn.post({
                                url: d.ANM.AI_TRANSLATE,
                                body: {
                                    content: e.content,
                                    locale: g,
                                },
                                rejectWithError: !1,
                            });
                            t.ok &&
                                t.body &&
                                (s.Z.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: {
                                        id: e.id,
                                        channel_id: e.channel_id,
                                        content: t.body.content,
                                    },
                                }),
                                (0, o.showToast)(
                                    (0, o.createToast)(
                                        f.intl.formatToPlainString(f.t.FtVUqm, { targetLanguage: p }),
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
                    let t = b.get(e.id);
                    null != t &&
                        (s.Z.dispatch({
                            type: "MESSAGE_UPDATE",
                            message: {
                                id: e.id,
                                channel_id: e.channel_id,
                                content: t,
                            },
                        }),
                        b.delete(e.id));
                }, [e.id, e.channel_id]),
                isTranslating: t,
                isTranslated: b.has(e.id),
            };
        })(e),
        h = (function (e, t) {
            let l = (0, f.getAvailableLocales)();
            return i.useMemo(
                () =>
                    l.map((i) => {
                        let l;
                        try {
                            l = n(621287)("./".concat(i.value, ".png"));
                        } catch (e) {
                            l = n(1474);
                        }
                        return (0, r.jsx)(
                            o.sNh,
                            {
                                id: "translate-".concat(i.value),
                                label: i.name,
                                icon: () =>
                                    (0, r.jsx)("img", {
                                        alt: "",
                                        src: l,
                                        className: g.flagIcon,
                                    }),
                                action: () => e(i.value, i.name),
                                disabled: t,
                            },
                            i.value,
                        );
                    }),
                [e, t, l],
            );
        })(p, O),
        v = (0, c.o)();
    return null != e.content && "" !== e.content.trim() && v
        ? y
            ? (0, r.jsx)(o.sNh, {
                  id: "revert-translation",
                  label: f.intl.string(f.t.JC9BXn),
                  icon: o.os0,
                  action: m,
                  disabled: O,
              })
            : (0, r.jsx)(o.sNh, {
                  id: "translate",
                  label: O ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
                  action: () => p(),
                  disabled: O,
                  children: h,
              })
        : null;
}
