n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(475179),
    c = n(871499),
    u = n(388032),
    d = n(321575);
function f(e) {
    let { className: t, isVertical: n } = e;
    return (0, r.jsxs)('div', {
        className: d.iconContainer,
        children: [
            (0, r.jsx)(s.CJ0, {
                size: 'md',
                color: 'currentColor',
                className: o()(n ? d.upCaret : d.leftCaret, t)
            }),
            (0, r.jsx)(s.BFJ, {
                size: 'md',
                color: 'currentColor',
                className: o()(d.members, t)
            })
        ]
    });
}
function _(e) {
    let { className: t, isVertical: n } = e;
    return (0, r.jsxs)('div', {
        className: d.iconContainer,
        children: [
            (0, r.jsx)(s.CJ0, {
                size: 'md',
                color: 'currentColor',
                className: o()(n ? d.downCaret : d.rightCaret, t)
            }),
            n &&
                (0, r.jsx)(s.BFJ, {
                    size: 'md',
                    color: 'currentColor',
                    className: o()(d.members, t)
                })
        ]
    });
}
function p(e) {
    let { channelId: t, className: n, isParticipantsOpen: a, isVertical: s = !1, hideTooltip: p = !1 } = e;
    function h() {
        l.Z.toggleParticipants(t, !a);
    }
    let m = i.useCallback(
        (e) => {
            let { className: t } = e;
            return a
                ? (0, r.jsx)(_, {
                      className: t,
                      isVertical: s
                  })
                : (0, r.jsx)(f, {
                      className: t,
                      isVertical: s
                  });
        },
        [a, s]
    );
    return (0, r.jsx)(c.Z, {
        label: a ? u.intl.string(u.t.QJMRUF) : u.intl.string(u.t.vZiwmJ),
        className: o()(d.participantsButton, n),
        onClick: h,
        iconComponent: m,
        shouldShowTooltip: !p
    });
}
