t.d(l, {
    Z: function () {
        return h;
    }
});
var n = t(200651),
    i = t(192379),
    s = t(120356),
    a = t.n(s),
    o = t(442837),
    r = t(481060),
    u = t(596454),
    d = t(225433),
    c = t(727637),
    m = t(318766),
    f = t(907040),
    g = t(984933),
    v = t(903749),
    x = t(185923),
    p = t(388032),
    j = t(526194);
function h(e) {
    let { className: l, guildId: t, error: s, emojiId: h, emojiName: I, isRequiredField: N = !0, shouldUpdateBothEmojiFields: C = !1, setEmojiId: E, setEmojiName: S } = e,
        T = (0, v.Z)({
            emojiId: h,
            emojiName: I
        }),
        Z = (0, o.e7)([g.ZP], () => (null != t ? g.ZP.getDefaultChannel(t) : null)),
        k = i.createRef(),
        b = (0, c.Z)(k),
        y = () => {
            S(void 0), E(void 0);
        },
        B = (e) => (l, t) => {
            let n = (null == l ? void 0 : l.id) == null;
            y(), n ? S(null == l ? void 0 : l.optionallyDiverseSequence) : (C && S(null == l ? void 0 : l.name), E(null == l ? void 0 : l.id)), t && e();
        },
        R = (e) => {
            e.stopPropagation(), y();
        };
    return (0, n.jsx)(r.FormItem, {
        required: N,
        title: p.intl.string(p.t['3BQmiI']),
        className: a()(l, j.section),
        error: s,
        children: (0, n.jsx)(r.Popout, {
            animation: r.Popout.Animation.NONE,
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: l } = e;
                return (0, n.jsx)(f.Z, {
                    closePopout: l,
                    pickerIntention: x.Hz.SOUNDBOARD,
                    onNavigateAway: l,
                    onSelectEmoji: B(l),
                    guildId: t,
                    channel: Z
                });
            },
            children: (e, l) => {
                let { isShown: t } = l;
                return (0, n.jsxs)('div', {
                    ...e,
                    className: j.emojiInput,
                    ref: k,
                    children: [
                        (0, n.jsx)(m.Z, {
                            className: j.emojiButton,
                            active: t,
                            tabIndex: 0,
                            renderButtonContents:
                                null != h || null != I
                                    ? () =>
                                          (0, n.jsx)(u.Z, {
                                              emojiName: I,
                                              emojiId: h
                                          })
                                    : null
                        }),
                        (0, n.jsx)(r.TextInput, {
                            inputClassName: j.emojiText,
                            placeholder: p.intl.string(p.t.QTK0TE),
                            value: null != T ? ':'.concat(T, ':') : '',
                            readOnly: !0
                        }),
                        b &&
                            null != T &&
                            (0, n.jsx)(d.Z, {
                                ...e,
                                onClick: R,
                                className: j.removeButton
                            })
                    ]
                });
            }
        })
    });
}
