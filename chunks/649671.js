"use strict";
n.d(t, { a8: () => T, Yn: () => S, Rg: () => I });
var i = n(392054),
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(17928),
    u = n(573435),
    c = n(696451),
    d = n(486020),
    _ = n(32178),
    f = n(532406);
function h(e) {
    let {
            section: t,
            channel: { guild_id: n },
            isSelected: a,
            width: h,
            height: p,
            className: E,
            selectable: m = !1,
            isSquircle: g,
            onFocus: A,
            onBlur: I,
            onMouseOver: T,
            onMouseLeave: S,
            ...N
        } = e,
        [y, C] = s.useState(!1),
        v = s.useCallback(() => {
            C(!0), A?.();
        }, [A]),
        O = s.useCallback(() => {
            C(!1), I?.();
        }, [I]),
        R = s.useCallback(() => {
            C(!0), T?.();
        }, [T]),
        b = s.useCallback(() => {
            C(!1), S?.();
        }, [S]),
        D = (0, l.bG)([c.Ay], () =>
            t.application?.bot?.id != null ? c.Ay.getMember(n, t.application?.bot?.id) : null,
        ),
        L = s.useMemo(
            () =>
                t.type === i.Hf.APPLICATION
                    ? d.Ay.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.application?.bot,
                          botIconFirst: !0,
                          guildMember: D,
                          size: h,
                      })
                    : f,
            [t, h, D],
        );
    return (0, r.jsx)("div", {
        ...N,
        className: o()(_.iE, E, { [_.rb]: m, [_.wH]: m && a }),
        onFocus: v,
        onBlur: O,
        onMouseOver: R,
        onMouseLeave: b,
        children: (0, r.jsx)(u.Ay, {
            className: _.dK,
            mask: g || (m && (a || y)) ? u.hW.SQUIRCLE : u.hW.AVATAR_DEFAULT,
            width: h,
            height: p,
            children: (0, r.jsx)("img", { alt: "", className: _.Kk, style: { width: h, height: p }, src: L }),
        }),
    });
}
var p = n(633018),
    E = n(406810),
    m = n(73510),
    g = n(824527);
function A(e) {
    let { section: t, className: n, width: i, height: s, padding: a, isSelected: l, selectable: u = !1, ...c } = e,
        d = ((e) => {
            switch (e.id) {
                case m.Ik.BUILT_IN:
                    return p.k;
                case m.Ik.FRECENCY:
                    return E.O;
                default:
                    return;
            }
        })(t);
    return (0, r.jsx)("div", {
        className: o()(g.iE, n, { [g.rb]: u, [g.wH]: u && l }),
        style: { width: i, height: s, padding: a ?? 0 },
        children:
            null != d
                ? (0, r.jsx)(d, { className: g.Kk, color: "currentColor", size: "custom", width: i, height: s, ...c })
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
    let s = t.split(" ", m.uA + 1);
    return (
        s.length > m.uA && ((i = !0), s.pop()),
        (t = s.join(" ")),
        (n.length > t.length || t.endsWith(" ")) && ((i = !0), (t = t.trimEnd())),
        { text: t, parts: s, hasSpaceTerminator: i }
    );
}
