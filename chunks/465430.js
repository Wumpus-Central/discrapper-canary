"use strict";
n.d(t, { Nz: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(359778),
    o = n(235986),
    l = n(244367),
    u = n(742158),
    c = n(512240);
s.Z.Types;
let d = "right";
function _(e) {
    let t,
        n,
        {
            type: i = s.Z.Types.DANGER,
            imageData: _,
            button: f,
            className: p,
            iconClassName: h,
            title: m,
            body: g,
            style: E,
            align: A = o.A.Align.START,
        } = e,
        I = o.A.Direction.HORIZONTAL;
    if (null != _) {
        let { position: e, ...n } = _;
        (t = (0, r.jsx)(o.A.Child, {
            grow: 0,
            shrink: 0,
            children: (0, r.jsx)("img", { alt: "", className: a()(c.Kk, h), ...n }),
        })),
            e === d && (I = o.A.Direction.HORIZONTAL_REVERSE);
    } else null != f && (n = f);
    let T = !0;
    return (
        i === s.Z.Types.PRIMARY && (T = !1),
        (0, r.jsx)(s.Z, {
            className: a()(c.RJ, p),
            type: i,
            style: E,
            children: (0, r.jsxs)(o.A, {
                direction: I,
                align: A,
                children: [
                    t,
                    (0, r.jsxs)(o.A.Child, {
                        children: [
                            null != m && "" !== m
                                ? (0, r.jsx)(u.z, {
                                      "data-migration-pending": !0,
                                      className: a()(c.$G, { [c.vV]: T }),
                                      children: m,
                                  })
                                : null,
                            (0, r.jsx)(l.a, {
                                "data-migration-pending": !0,
                                className: a()(c.Vz, { [c.vV]: T }),
                                children: g,
                            }),
                            n,
                        ],
                    }),
                ],
            }),
        })
    );
}
_.Types = s.Z.Types;
