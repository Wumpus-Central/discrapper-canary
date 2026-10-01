i.d(s, { A: () => A });
var t = i(477900),
    l = i(582128),
    a = i(503698),
    n = i.n(a),
    c = i(17928),
    o = i(573435),
    r = i(696451),
    d = i(486020),
    u = i(392054),
    h = i(125805),
    p = i(532406);
function A(e) {
    let {
            section: s,
            channel: { guild_id: i },
            isSelected: a,
            width: A,
            height: b,
            className: g,
            selectable: k = !1,
            isSquircle: w,
            onFocus: C,
            onBlur: I,
            onMouseOver: m,
            onMouseLeave: v,
            ...N
        } = e,
        [f, x] = l.useState(!1),
        E = l.useCallback(() => {
            (x(!0), C?.());
        }, [C]),
        L = l.useCallback(() => {
            (x(!1), I?.());
        }, [I]),
        y = l.useCallback(() => {
            (x(!0), m?.());
        }, [m]),
        j = l.useCallback(() => {
            (x(!1), v?.());
        }, [v]),
        T = (0, c.bG)([r.Ay], () =>
            s.application?.bot?.id != null ? r.Ay.getMember(i, s.application?.bot?.id) : null,
        ),
        _ = l.useMemo(
            () =>
                s.type === u.Hf.APPLICATION
                    ? d.Ay.getApplicationIconURL({
                          id: s.id,
                          icon: s.icon,
                          bot: s.application?.bot,
                          botIconFirst: !0,
                          guildMember: T,
                          size: A,
                      })
                    : p,
            [s, A, T],
        );
    return (0, t.jsx)("div", {
        ...N,
        className: n()(h.iE, g, { [h.rb]: k, [h.wH]: k && a }),
        onFocus: E,
        onBlur: L,
        onMouseOver: y,
        onMouseLeave: j,
        children: (0, t.jsx)(o.Ay, {
            className: h.dK,
            mask: w || (k && (a || f)) ? o.hW.SQUIRCLE : o.hW.AVATAR_DEFAULT,
            width: A,
            height: b,
            children: (0, t.jsx)("img", { alt: "", className: h.Kk, style: { width: A, height: b }, src: _ }),
        }),
    });
}
