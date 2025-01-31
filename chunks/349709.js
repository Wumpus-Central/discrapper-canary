i.d(l, { Z: () => h });
var t = i(200651),
    n = i(192379),
    s = i(120356),
    a = i.n(s),
    o = i(442837),
    r = i(481060),
    d = i(596454),
    u = i(225433),
    c = i(727637),
    m = i(318766),
    f = i(907040),
    g = i(984933),
    x = i(903749),
    v = i(185923),
    j = i(388032),
    p = i(526194);
function h(e) {
    let { className: l, guildId: i, error: s, emojiId: h, emojiName: I, isRequiredField: N = !0, shouldUpdateBothEmojiFields: k = !1, setEmojiId: E, setEmojiName: C } = e,
        S = (0, x.Z)({
            emojiId: h,
            emojiName: I
        }),
        y = (0, o.e7)([g.ZP], () => (null != i ? g.ZP.getDefaultChannel(i) : null)),
        Z = n.createRef(),
        b = (0, c.Z)(Z),
        z = () => {
            C(void 0), E(void 0);
        },
        R = (e) => (l, i) => {
            let t = (null == l ? void 0 : l.id) == null;
            z(), t ? C(null == l ? void 0 : l.optionallyDiverseSequence) : (k && C(null == l ? void 0 : l.name), E(null == l ? void 0 : l.id)), i && e();
        },
        _ = (e) => {
            e.stopPropagation(), z();
        };
    return (0, t.jsx)(r.xJW, {
        required: N,
        title: j.intl.string(j.t['3BQmiI']),
        className: a()(l, p.section),
        error: s,
        children: (0, t.jsx)(r.yRy, {
            animation: r.yRy.Animation.NONE,
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: l } = e;
                return (0, t.jsx)(f.Z, {
                    closePopout: l,
                    pickerIntention: v.Hz.SOUNDBOARD,
                    onNavigateAway: l,
                    onSelectEmoji: R(l),
                    guildId: i,
                    channel: y
                });
            },
            children: (e, l) => {
                let { isShown: i } = l;
                return (0, t.jsxs)('div', {
                    ...e,
                    className: p.emojiInput,
                    ref: Z,
                    children: [
                        (0, t.jsx)(m.Z, {
                            className: p.emojiButton,
                            active: i,
                            tabIndex: 0,
                            renderButtonContents:
                                null != h || null != I
                                    ? () =>
                                          (0, t.jsx)(d.Z, {
                                              emojiName: I,
                                              emojiId: h
                                          })
                                    : null
                        }),
                        (0, t.jsx)(r.oil, {
                            inputClassName: p.emojiText,
                            placeholder: j.intl.string(j.t.QTK0TE),
                            value: null != S ? ':'.concat(S, ':') : '',
                            readOnly: !0
                        }),
                        b &&
                            null != S &&
                            (0, t.jsx)(u.Z, {
                                ...e,
                                onClick: _,
                                className: p.removeButton
                            })
                    ]
                });
            }
        })
    });
}
