"use strict";
n.d(t, { A: () => f });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(573435),
    u = n(696451),
    c = n(486020),
    d = n(392054),
    h = n(125805),
    m = n(532406);
function f(e) {
    let {
            section: t,
            channel: { guild_id: n },
            isSelected: s,
            width: f,
            height: p,
            className: g,
            selectable: x = !1,
            isSquircle: A,
            onFocus: C,
            onBlur: E,
            onMouseOver: I,
            onMouseLeave: y,
            ...v
        } = e,
        [S, N] = i.useState(!1),
        _ = i.useCallback(() => {
            N(!0), C?.();
        }, [C]),
        T = i.useCallback(() => {
            N(!1), E?.();
        }, [E]),
        j = i.useCallback(() => {
            N(!0), I?.();
        }, [I]),
        b = i.useCallback(() => {
            N(!1), y?.();
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
                          size: f,
                      })
                    : m,
            [t, f, R],
        );
    return (0, l.jsx)("div", {
        ...v,
        className: r()(h.iE, g, { [h.rb]: x, [h.wH]: x && s }),
        onFocus: _,
        onBlur: T,
        onMouseOver: j,
        onMouseLeave: b,
        children: (0, l.jsx)(o.Ay, {
            className: h.dK,
            mask: A || (x && (s || S)) ? o.hW.SQUIRCLE : o.hW.AVATAR_DEFAULT,
            width: f,
            height: p,
            children: (0, l.jsx)("img", { alt: "", className: h.Kk, style: { width: f, height: p }, src: O }),
        }),
    });
}
