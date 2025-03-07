n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(904245),
    o = n(13245),
    a = n(45114),
    s = n(493773),
    u = n(655687),
    c = n(541716),
    d = n(752305),
    p = n(893718),
    h = n(957730),
    f = n(849522),
    m = n(145597),
    g = n(981631),
    O = n(880679);
function v(e) {
    let { id: t, replyToMessageId: n, channel: v, onSend: y } = e,
        E = (0, f.Z)(),
        { placeholder: b, accessibilityLabel: j } = (0, u.Z)({ channel: v }),
        [x, I] = r.useState(() => (0, d.H2)()),
        { textValue: S, richValue: C } = x,
        [N, Z] = r.useState(!1),
        w = r.useCallback(() => Z(!0), []),
        P = r.useCallback(() => Z(!1), []);
    (0, s.ZP)(() => {
        (0, a.In)(v.id, !0, !0, n, { section: g.jXE.OVERLAY });
    });
    let _ = r.useCallback((e, t, n) => {
            I({
                textValue: t,
                richValue: n
            });
        }, []),
        T = r.useCallback(
            (e) => {
                'Escape' === e.key && o.Z.updateNotificationStatus(t, g._1z.ACTIVE);
            },
            [t]
        ),
        D = r.useCallback(
            () => (
                S.length > E || (l.Z.sendMessage(v.id, h.ZP.parse(v, S), !1), o.Z.setInputLocked(!0, (0, m.getPID)()), o.Z.updateNotificationStatus(t, g._1z.DISMISSED), null == y || y(S)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [S, E, v, t, y]
        );
    return (0, i.jsx)('div', {
        children: (0, i.jsx)(p.Z, {
            innerClassName: O.textArea,
            onChange: _,
            placeholder: b,
            accessibilityLabel: j,
            channel: v,
            textValue: S,
            richValue: C,
            type: c.Ie.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: P,
            onFocus: w,
            focused: N,
            onSubmit: D,
            onKeyDown: T,
            autoCompletePosition: 'bottom',
            disableThemedBackground: !0
        })
    });
}
