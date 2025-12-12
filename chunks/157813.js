n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(475179),
    c = n(871499),
    u = n(388032),
    d = n(808602);
function f(e) {
    let { className: t, isVertical: n } = e;
    return (0, r.jsxs)("div", {
        className: d.iconContainer,
        children: [
            (0, r.jsx)(s.CJ0, {
                size: "md",
                color: "currentColor",
                className: a()(n ? d.upCaret : d.leftCaret, t),
            }),
            (0, r.jsx)(s.BFJ, {
                size: "md",
                color: "currentColor",
                className: a()(d.members, t),
            }),
        ],
    });
}
function p(e) {
    let { className: t, isVertical: n } = e;
    return (0, r.jsxs)("div", {
        className: d.iconContainer,
        children: [
            (0, r.jsx)(s.CJ0, {
                size: "md",
                color: "currentColor",
                className: a()(n ? d.downCaret : d.rightCaret, t),
            }),
            n &&
                (0, r.jsx)(s.BFJ, {
                    size: "md",
                    color: "currentColor",
                    className: a()(d.members, t),
                }),
        ],
    });
}
function _(e) {
    let { channelId: t, className: n, isParticipantsOpen: o, isVertical: s = !1, hideTooltip: _ = !1 } = e;
    function m() {
        l.Z.toggleParticipants(t, !o);
    }
    let h = i.useCallback(
        (e) => {
            let { className: t } = e;
            return o
                ? (0, r.jsx)(p, {
                      className: t,
                      isVertical: s,
                  })
                : (0, r.jsx)(f, {
                      className: t,
                      isVertical: s,
                  });
        },
        [o, s],
    );
    return (0, r.jsx)(c.Z, {
        label: o ? u.intl.string(u.t.QJMRUB) : u.intl.string(u.t.vZiwmG),
        className: a()(d.participantsButton, n),
        onClick: m,
        iconComponent: h,
        shouldShowTooltip: !_,
    });
}
