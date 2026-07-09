"use strict";
n.d(t, { a8: () => g, Yn: () => S, Rg: () => m });
var i = n(392054),
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(17928),
    d = n(573435),
    c = n(696451),
    u = n(486020),
    _ = n(678322),
    E = n(532406);
function A(e) {
    let {
            section: t,
            channel: { guild_id: n },
            isSelected: s,
            width: A,
            height: h,
            className: I,
            selectable: f = !1,
            isSquircle: p,
            onFocus: T,
            onBlur: m,
            onMouseOver: g,
            onMouseLeave: S,
            ...N
        } = e,
        [C, R] = a.useState(!1),
        O = a.useCallback(() => {
            R(!0), T?.();
        }, [T]),
        L = a.useCallback(() => {
            R(!1), m?.();
        }, [m]),
        D = a.useCallback(() => {
            R(!0), g?.();
        }, [g]),
        y = a.useCallback(() => {
            R(!1), S?.();
        }, [S]),
        v = (0, o.bG)([c.Ay], () =>
            t.application?.bot?.id != null ? c.Ay.getMember(n, t.application?.bot?.id) : null,
        ),
        b = a.useMemo(
            () =>
                t.type === i.Hf.APPLICATION
                    ? u.Ay.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.application?.bot,
                          botIconFirst: !0,
                          guildMember: v,
                          size: A,
                      })
                    : E,
            [t, A, v],
        );
    return (0, r.jsx)("div", {
        ...N,
        className: l()(_.iE, I, { [_.rb]: f, [_.wH]: f && s }),
        onFocus: O,
        onBlur: L,
        onMouseOver: D,
        onMouseLeave: y,
        children: (0, r.jsx)(d.Ay, {
            className: _.dK,
            mask: p || (f && (s || C)) ? d.hW.SQUIRCLE : d.hW.AVATAR_DEFAULT,
            width: A,
            height: h,
            children: (0, r.jsx)("img", { alt: "", className: _.Kk, style: { width: A, height: h }, src: b }),
        }),
    });
}
var h = n(633018),
    I = n(406810),
    f = n(73510),
    p = n(958351);
function T(e) {
    let { section: t, className: n, width: i, height: a, padding: s, isSelected: o, selectable: d = !1, ...c } = e,
        u = (function (e) {
            switch (e.id) {
                case f.Ik.BUILT_IN:
                    return h.k;
                case f.Ik.FRECENCY:
                    return I.O;
                default:
                    return;
            }
        })(t);
    return (0, r.jsx)("div", {
        className: l()(p.iE, n, { [p.rb]: d, [p.wH]: d && o }),
        style: { width: i, height: a, padding: s ?? 0 },
        children:
            null != u
                ? (0, r.jsx)(u, { className: p.Kk, color: "currentColor", size: "custom", width: i, height: a, ...c })
                : null,
    });
}
function m(e) {
    return e.type === i.Hf.BUILT_IN ? T : A;
}
function g(e) {
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
    let a = t.split(" ", f.uA + 1);
    return (
        a.length > f.uA && ((i = !0), a.pop()),
        (t = a.join(" ")),
        (n.length > t.length || t.endsWith(" ")) && ((i = !0), (t = t.trimEnd())),
        { text: t, parts: a, hasSpaceTerminator: i }
    );
}
