n.d(t, { A: () => p });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(573435),
    u = n(696451),
    c = n(486020),
    d = n(392054),
    m = n(125805),
    h = n(532406);
function p(e) {
    let {
            section: t,
            channel: { guild_id: n },
            isSelected: s,
            width: p,
            height: f,
            className: g,
            selectable: x = !1,
            isSquircle: A,
            onFocus: C,
            onBlur: E,
            onMouseOver: I,
            onMouseLeave: y,
            ...S
        } = e,
        [v, N] = i.useState(!1),
        _ = i.useCallback(() => {
            (N(!0), C?.());
        }, [C]),
        j = i.useCallback(() => {
            (N(!1), E?.());
        }, [E]),
        b = i.useCallback(() => {
            (N(!0), I?.());
        }, [I]),
        T = i.useCallback(() => {
            (N(!1), y?.());
        }, [y]),
        R = (0, a.bG)([u.Ay], () =>
            t.application?.bot?.id != null ? u.Ay.getMember(n, t.application?.bot?.id) : null,
        ),
        O = i.useMemo(
            () =>
                t.type === d.Hf.APPLICATION
                    ? c.Ay.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.application?.bot,
                          botIconFirst: !0,
                          guildMember: R,
                          size: p,
                      })
                    : h,
            [t, p, R],
        );
    return (0, l.jsx)("div", {
        ...S,
        className: r()(m.iE, g, { [m.rb]: x, [m.wH]: x && s }),
        onFocus: _,
        onBlur: j,
        onMouseOver: b,
        onMouseLeave: T,
        children: (0, l.jsx)(o.Ay, {
            className: m.dK,
            mask: A || (x && (s || v)) ? o.hW.SQUIRCLE : o.hW.AVATAR_DEFAULT,
            width: p,
            height: f,
            children: (0, l.jsx)("img", { alt: "", className: m.Kk, style: { width: p, height: f }, src: O }),
        }),
    });
}
