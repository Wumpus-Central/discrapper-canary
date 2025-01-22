r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(475179),
    c = r(871499),
    d = r(388032),
    f = r(89554);
function p(e) {
    let { className: n, isVertical: r } = e;
    return (0, i.jsxs)('div', {
        className: f.iconContainer,
        children: [
            (0, i.jsx)(l.ChevronSmallDownIcon, {
                size: 'md',
                color: 'currentColor',
                className: s()(r ? f.upCaret : f.leftCaret, n)
            }),
            (0, i.jsx)(l.GroupIcon, {
                size: 'md',
                color: 'currentColor',
                className: s()(f.members, n)
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
                className: s()(r ? f.downCaret : f.rightCaret, n)
            }),
            r &&
                (0, i.jsx)(l.GroupIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: s()(f.members, n)
                })
        ]
    });
}
function _(e) {
    let { channelId: n, className: r, isParticipantsOpen: o, isVertical: l = !1, hideTooltip: _ = !1 } = e;
    function m() {
        u.Z.toggleParticipants(n, !o);
    }
    let g = a.useCallback(
        (e) => {
            let { className: n } = e;
            return o
                ? (0, i.jsx)(h, {
                      className: n,
                      isVertical: l
                  })
                : (0, i.jsx)(p, {
                      className: n,
                      isVertical: l
                  });
        },
        [o, l]
    );
    return (0, i.jsx)(c.Z, {
        label: o ? d.intl.string(d.t.QJMRUF) : d.intl.string(d.t.vZiwmJ),
        className: s()(f.participantsButton, r),
        onClick: m,
        iconComponent: g,
        shouldShowTooltip: !_
    });
}
