"use strict";
n.d(t, { a8: () => E, Yn: () => I, Rg: () => A });
var l = n(392054),
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    c = n(573435),
    u = n(696451),
    d = n(486020),
    h = n(32178),
    m = n(532406);
function p(e) {
    let {
            section: t,
            channel: { guild_id: n },
            isSelected: a,
            width: p,
            height: f,
            className: g,
            selectable: _ = !1,
            isSquircle: x,
            onFocus: C,
            onBlur: A,
            onMouseOver: E,
            onMouseLeave: I,
            ...v
        } = e,
        [y, b] = s.useState(!1),
        S = s.useCallback(() => {
            b(!0), C?.();
        }, [C]),
        N = s.useCallback(() => {
            b(!1), A?.();
        }, [A]),
        j = s.useCallback(() => {
            b(!0), E?.();
        }, [E]),
        T = s.useCallback(() => {
            b(!1), I?.();
        }, [I]),
        w = (0, o.bG)([u.Ay], () =>
            t.application?.bot?.id != null ? u.Ay.getMember(n, t.application?.bot?.id) : null,
        ),
        R = s.useMemo(
            () =>
                t.type === l.Hf.APPLICATION
                    ? d.Ay.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.application?.bot,
                          botIconFirst: !0,
                          guildMember: w,
                          size: p,
                      })
                    : m,
            [t, p, w],
        );
    return (0, i.jsx)("div", {
        ...v,
        className: r()(h.iE, g, { [h.rb]: _, [h.wH]: _ && a }),
        onFocus: S,
        onBlur: N,
        onMouseOver: j,
        onMouseLeave: T,
        children: (0, i.jsx)(c.Ay, {
            className: h.dK,
            mask: x || (_ && (a || y)) ? c.hW.SQUIRCLE : c.hW.AVATAR_DEFAULT,
            width: p,
            height: f,
            children: (0, i.jsx)("img", { alt: "", className: h.Kk, style: { width: p, height: f }, src: R }),
        }),
    });
}
var f = n(633018),
    g = n(406810),
    _ = n(73510),
    x = n(824527);
function C(e) {
    let { section: t, className: n, width: l, height: s, padding: a, isSelected: o, selectable: c = !1, ...u } = e,
        d = ((e) => {
            switch (e.id) {
                case _.Ik.BUILT_IN:
                    return f.k;
                case _.Ik.FRECENCY:
                    return g.O;
                default:
                    return;
            }
        })(t);
    return (0, i.jsx)("div", {
        className: r()(x.iE, n, { [x.rb]: c, [x.wH]: c && o }),
        style: { width: l, height: s, padding: a ?? 0 },
        children:
            null != d
                ? (0, i.jsx)(d, { className: x.Kk, color: "currentColor", size: "custom", width: l, height: s, ...u })
                : null,
    });
}
let A = (e) => (e.type === l.Hf.BUILT_IN ? C : p);
function E(e) {
    return `${e / 16}rem`;
}
function I(e, t) {
    let n = t,
        l = !1,
        i = t.indexOf(":");
    if (i >= 0) {
        let e = t.lastIndexOf(" ", i);
        e >= 0 ? ((t = t.substring(0, e)), (l = !0)) : (t = t.substring(0, i));
    } else t = t.substring(0, t.length);
    let s = t.split(" ", _.uA + 1);
    return (
        s.length > _.uA && ((l = !0), s.pop()),
        (t = s.join(" ")),
        (n.length > t.length || t.endsWith(" ")) && ((l = !0), (t = t.trimEnd())),
        { text: t, parts: s, hasSpaceTerminator: l }
    );
}
