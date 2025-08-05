(n.d(t, { Z: () => g }), n(388685), n(781311));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(544891),
    s = n(481060),
    l = n(570140),
    c = n(466721),
    u = n(706454),
    d = n(981631),
    f = n(388032),
    _ = n(66761);
let p = new Map();
function h(e) {
    let [t, n] = i.useState(!1),
        r = (0, a.e7)([u.default], () => u.default.locale);
    return {
        handleTranslate: i.useCallback(
            async (i, a) => {
                var c, u;
                if (t) return;
                let _ = null != i ? i : r;
                n(!0);
                let h = null != (u = null != a ? a : null == (c = (0, f.getAvailableLocales)().find((e) => e.value === _)) ? void 0 : c.name) ? u : _;
                (p.has(e.id) || p.set(e.id, e.content), (0, s.showToast)((0, s.createToast)(f.intl.formatToPlainString(f.t.Znl8Z2, { targetLanguage: h }), s.ToastType.AI)));
                try {
                    let t = await o.tn.post({
                        url: d.ANM.AI_TRANSLATE,
                        body: {
                            content: e.content,
                            locale: _
                        },
                        rejectWithError: !1
                    });
                    t.ok &&
                        t.body &&
                        (l.Z.dispatch({
                            type: 'MESSAGE_UPDATE',
                            message: {
                                id: e.id,
                                channel_id: e.channel_id,
                                content: t.body.content
                            }
                        }),
                        (0, s.showToast)((0, s.createToast)(f.intl.formatToPlainString(f.t.FtVUqq, { targetLanguage: h }), s.ToastType.SUCCESS)));
                } finally {
                    n(!1);
                }
            },
            [e, t, r]
        ),
        handleRevertTranslation: i.useCallback(() => {
            let t = p.get(e.id);
            null != t &&
                (l.Z.dispatch({
                    type: 'MESSAGE_UPDATE',
                    message: {
                        id: e.id,
                        channel_id: e.channel_id,
                        content: t
                    }
                }),
                p.delete(e.id));
        }, [e.id, e.channel_id]),
        isTranslating: t,
        isTranslated: p.has(e.id)
    };
}
function m(e, t) {
    let a = (0, f.getAvailableLocales)();
    return i.useMemo(
        () =>
            a.map((i) => {
                let a;
                try {
                    a = n(621287)('./'.concat(i.value, '.png'));
                } catch (e) {
                    a = n(1474);
                }
                return (0, r.jsx)(
                    s.sNh,
                    {
                        id: 'translate-'.concat(i.value),
                        label: i.name,
                        icon: () =>
                            (0, r.jsx)('img', {
                                alt: '',
                                src: a,
                                className: _.flagIcon
                            }),
                        action: () => e(i.value, i.name),
                        disabled: t
                    },
                    i.value
                );
            }),
        [e, t, a]
    );
}
function g(e, t) {
    let n = c.C.useExperiment({ location: 'MessageContextMenu' }),
        { handleTranslate: i, handleRevertTranslation: a, isTranslating: o, isTranslated: l } = h(e),
        u = m(i, o);
    return null != e.content && '' !== e.content.trim() && (null == n ? void 0 : n.enableAIFeatures)
        ? l
            ? (0, r.jsx)(s.sNh, {
                  id: 'revert-translation',
                  label: f.intl.string(f.t.JC9BXl),
                  icon: s.os0,
                  action: a,
                  disabled: o
              })
            : (0, r.jsx)(s.sNh, {
                  id: 'translate',
                  label: o ? f.intl.string(f.t.SVKIdX) : f.intl.string(f.t['6epDlZ']),
                  action: () => i(),
                  disabled: o,
                  children: u
              })
        : null;
}
