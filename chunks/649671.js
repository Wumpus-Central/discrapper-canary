"use strict";
n.d(t, { a8: () => I, Yn: () => y, Rg: () => C });
var l = n(392054),
    i = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(17928),
    u = n(573435),
    c = n(696451),
    d = n(486020),
    h = n(974154),
    m = n(532406);
function f(e) {
    let {
            section: t,
            channel: { guild_id: n },
            isSelected: r,
            width: f,
            height: p,
            className: g,
            selectable: x = !1,
            isSquircle: A,
            onFocus: E,
            onBlur: C,
            onMouseOver: I,
            onMouseLeave: y,
            ...S
        } = e,
        [v, _] = s.useState(!1),
        N = s.useCallback(() => {
            _(!0), E?.();
        }, [E]),
        T = s.useCallback(() => {
            _(!1), C?.();
        }, [C]),
        j = s.useCallback(() => {
            _(!0), I?.();
        }, [I]),
        b = s.useCallback(() => {
            _(!1), y?.();
        }, [y]),
        R = (0, o.bG)([c.Ay], () =>
            t.application?.bot?.id != null ? c.Ay.getMember(n, t.application?.bot?.id) : null,
        ),
        L = s.useMemo(
            () =>
                t.type === l.Hf.APPLICATION
                    ? d.Ay.getApplicationIconURL({
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
    return (0, i.jsx)("div", {
        ...S,
        className: a()(h.iE, g, { [h.rb]: x, [h.wH]: x && r }),
        onFocus: N,
        onBlur: T,
        onMouseOver: j,
        onMouseLeave: b,
        children: (0, i.jsx)(u.Ay, {
            className: h.dK,
            mask: A || (x && (r || v)) ? u.hW.SQUIRCLE : u.hW.AVATAR_DEFAULT,
            width: f,
            height: p,
            children: (0, i.jsx)("img", { alt: "", className: h.Kk, style: { width: f, height: p }, src: L }),
        }),
    });
}
var p = n(633018),
    g = n(406810),
    x = n(73510),
    A = n(744071);
function E(e) {
    let { section: t, className: n, width: l, height: s, padding: r, isSelected: o, selectable: u = !1, ...c } = e,
        d = (function (e) {
            switch (e.id) {
                case x.Ik.BUILT_IN:
                    return p.k;
                case x.Ik.FRECENCY:
                    return g.ClockIcon;
                default:
                    return;
            }
        })(t);
    return (0, i.jsx)("div", {
        className: a()(A.iE, n, { [A.rb]: u, [A.wH]: u && o }),
        style: { width: l, height: s, padding: r ?? 0 },
        children:
            null != d
                ? (0, i.jsx)(d, { className: A.Kk, color: "currentColor", size: "custom", width: l, height: s, ...c })
                : null,
    });
}
function C(e) {
    return e.type === l.Hf.BUILT_IN ? E : f;
}
function I(e) {
    return `${e / 16}rem`;
}
function y(e, t) {
    let n = t,
        l = !1,
        i = t.indexOf(":");
    if (i >= 0) {
        let e = t.lastIndexOf(" ", i);
        e >= 0 ? ((t = t.substring(0, e)), (l = !0)) : (t = t.substring(0, i));
    } else t = t.substring(0, t.length);
    let s = t.split(" ", x.uA + 1);
    return (
        s.length > x.uA && ((l = !0), s.pop()),
        (t = s.join(" ")),
        (n.length > t.length || t.endsWith(" ")) && ((l = !0), (t = t.trimEnd())),
        { text: t, parts: s, hasSpaceTerminator: l }
    );
}
