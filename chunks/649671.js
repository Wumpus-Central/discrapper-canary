"use strict";
n.d(t, { a8: () => T, Yn: () => S, Rg: () => I });
var i = n(392054),
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(17928),
    d = n(573435),
    _ = n(696451),
    u = n(486020),
    c = n(32178),
    E = n(532406);
function h(e) {
    let {
            section: t,
            channel: { guild_id: n },
            isSelected: a,
            width: h,
            height: m,
            className: f,
            selectable: g = !1,
            isSquircle: p,
            onFocus: A,
            onBlur: I,
            onMouseOver: T,
            onMouseLeave: S,
            ...N
        } = e,
        [C, R] = s.useState(!1),
        O = s.useCallback(() => {
            R(!0), A?.();
        }, [A]),
        y = s.useCallback(() => {
            R(!1), I?.();
        }, [I]),
        v = s.useCallback(() => {
            R(!0), T?.();
        }, [T]),
        D = s.useCallback(() => {
            R(!1), S?.();
        }, [S]),
        L = (0, l.bG)([_.Ay], () =>
            t.application?.bot?.id != null ? _.Ay.getMember(n, t.application?.bot?.id) : null,
        ),
        b = s.useMemo(
            () =>
                t.type === i.Hf.APPLICATION
                    ? u.Ay.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.application?.bot,
                          botIconFirst: !0,
                          guildMember: L,
                          size: h,
                      })
                    : E,
            [t, h, L],
        );
    return (0, r.jsx)("div", {
        ...N,
        className: o()(c.iE, f, { [c.rb]: g, [c.wH]: g && a }),
        onFocus: O,
        onBlur: y,
        onMouseOver: v,
        onMouseLeave: D,
        children: (0, r.jsx)(d.Ay, {
            className: c.dK,
            mask: p || (g && (a || C)) ? d.hW.SQUIRCLE : d.hW.AVATAR_DEFAULT,
            width: h,
            height: m,
            children: (0, r.jsx)("img", { alt: "", className: c.Kk, style: { width: h, height: m }, src: b }),
        }),
    });
}
var m = n(633018),
    f = n(406810),
    g = n(73510),
    p = n(824527);
function A(e) {
    let { section: t, className: n, width: i, height: s, padding: a, isSelected: l, selectable: d = !1, ..._ } = e,
        u = ((e) => {
            switch (e.id) {
                case g.Ik.BUILT_IN:
                    return m.k;
                case g.Ik.FRECENCY:
                    return f.O;
                default:
                    return;
            }
        })(t);
    return (0, r.jsx)("div", {
        className: o()(p.iE, n, { [p.rb]: d, [p.wH]: d && l }),
        style: { width: i, height: s, padding: a ?? 0 },
        children:
            null != u
                ? (0, r.jsx)(u, { className: p.Kk, color: "currentColor", size: "custom", width: i, height: s, ..._ })
                : null,
    });
}
let I = (e) => (e.type === i.Hf.BUILT_IN ? A : h);
function T(e) {
    return `${e / 16}rem`;
}
function S(e, t) {
    let n = t,
        i = !1,
        r = t.indexOf(":");
    if (r >= 0) {
        let e = t.lastIndexOf(" ", r);
        e >= 0 ? ((t = t.substring(0, e)), (i = !0)) : (t = t.substring(0, r));
    } else t = t.substring(0, t.length);
    let s = t.split(" ", g.uA + 1);
    return (
        s.length > g.uA && ((i = !0), s.pop()),
        (t = s.join(" ")),
        (n.length > t.length || t.endsWith(" ")) && ((i = !0), (t = t.trimEnd())),
        { text: t, parts: s, hasSpaceTerminator: i }
    );
}
