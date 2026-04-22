n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(562465),
    s = n(691540),
    o = n(857250),
    d = n(97483),
    c = n(477782),
    u = n(37646),
    g = n(73153),
    A = n(147087),
    h = n(773669),
    m = n(652215),
    f = n(985018),
    p = n(535456);
let E = new Map();
function y(e, t) {
    let y,
        {
            handleTranslate: v,
            handleRevertTranslation: _,
            isTranslating: S,
            isTranslated: I,
        } = (function (e) {
            let [t, n] = l.useState(!1),
                i = (0, a.bG)([h.default], () => h.default.locale);
            return {
                handleTranslate: l.useCallback(
                    async (l, a) => {
                        if (t) return;
                        let c = l ?? i;
                        n(!0);
                        let u = a ?? (0, f.getAvailableLocales)().find((e) => e.value === c)?.name ?? c;
                        E.has(e.id) || E.set(e.id, e.content),
                            (0, s.P0)((0, o.o)(f.intl.formatToPlainString(f.t.Znl8Z8, { targetLanguage: u }), d.Ck.AI));
                        try {
                            let t = await r.Bo.post({
                                url: m.Rsh.AI_TRANSLATE,
                                body: { content: e.content, locale: c },
                                rejectWithError: !1,
                            });
                            t.ok &&
                                t.body &&
                                (g.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: t.body.content },
                                }),
                                (0, s.P0)(
                                    (0, o.o)(
                                        f.intl.formatToPlainString(f.t.FtVUqm, { targetLanguage: u }),
                                        d.Ck.SUCCESS,
                                    ),
                                ));
                        } finally {
                            n(!1);
                        }
                    },
                    [e, t, i],
                ),
                handleRevertTranslation: l.useCallback(() => {
                    let t = E.get(e.id);
                    null != t &&
                        (g.h.dispatch({
                            type: "MESSAGE_UPDATE",
                            message: { id: e.id, channel_id: e.channel_id, content: t },
                        }),
                        E.delete(e.id));
                }, [e.id, e.channel_id]),
                isTranslating: t,
                isTranslated: E.has(e.id),
            };
        })(e),
        x =
            ((y = (0, f.getAvailableLocales)()),
            l.useMemo(
                () =>
                    y.map((e) => {
                        let t;
                        try {
                            t = n(579832)(`./${e.value}.png`);
                        } catch (e) {
                            t = n(432706);
                        }
                        return (0, i.jsx)(
                            c.Dr,
                            {
                                id: `translate-${e.value}`,
                                label: e.name,
                                icon: () => (0, i.jsx)("img", { alt: "", src: t, className: p.M }),
                                leadingAccessory: { type: "image", src: t },
                                action: () => v(e.value, e.name),
                                disabled: S,
                            },
                            e.value,
                        );
                    }),
                [v, S, y],
            )),
        b = (0, A.b)();
    return null != e.content && "" !== e.content.trim() && b
        ? I
            ? (0, i.jsx)(c.Dr, {
                  id: "revert-translation",
                  label: f.intl.string(f.t.JC9BXn),
                  leadingAccessory: { type: "icon", icon: u.U },
                  icon: u.U,
                  action: _,
                  disabled: S,
              })
            : (0, i.jsx)(c.Dr, {
                  id: "translate",
                  label: S ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
                  action: () => v(),
                  leadingAccessory: { type: "icon", icon: u.U },
                  disabled: S,
                  children: x,
              })
        : null;
}
