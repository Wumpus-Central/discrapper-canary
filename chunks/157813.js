r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(475179),
    c = r(871499),
    d = r(388032),
    f = r(89554);
function _(e) {
    let { className: n, isVertical: r } = e;
    return (0, i.jsxs)('div', {
        className: f.iconContainer,
        children: [
            (0, i.jsx)(l.ChevronSmallDownIcon, {
                size: 'md',
                color: 'currentColor',
                className: o()(r ? f.upCaret : f.leftCaret, n)
            }),
            (0, i.jsx)(l.GroupIcon, {
                size: 'md',
                color: 'currentColor',
                className: o()(f.members, n)
            })
        ]
    });
}
function h(e) {
    let { className: n, isVertical: r } = e;
    return (0, i.jsxs)('div', {
        className: f.iconContainer,
        children: [
            (0, i.jsx)(l.ChevronSmallDownIcon, {
                size: 'md',
                color: 'currentColor',
                className: o()(r ? f.downCaret : f.rightCaret, n)
            }),
            r &&
                (0, i.jsx)(l.GroupIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: o()(f.members, n)
                })
        ]
    });
}
function p(e) {
    let { channelId: n, className: r, isParticipantsOpen: s, isVertical: l = !1, hideTooltip: p = !1 } = e;
    function m() {
        u.Z.toggleParticipants(n, !s);
    }
    let g = a.useCallback(
        (e) => {
            let { className: n } = e;
            return s
                ? (0, i.jsx)(h, {
                      className: n,
                      isVertical: l
                  })
                : (0, i.jsx)(_, {
                      className: n,
                      isVertical: l
                  });
        },
        [s, l]
    );
    return (0, i.jsx)(c.Z, {
        label: s ? d.intl.string(d.t.QJMRUF) : d.intl.string(d.t.vZiwmJ),
        className: o()(f.participantsButton, r),
        onClick: m,
        iconComponent: g,
        shouldShowTooltip: !p
    });
}
