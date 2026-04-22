a.d(l, { Nz: () => c });
var t = a(627968);
a(64700);
var n = a(503698),
    o = a.n(n),
    i = a(359778),
    r = a(235986),
    s = a(244367),
    d = a(742158),
    u = a(743513);
i.Z.Types;
function c(e) {
    let l,
        a,
        {
            type: n = i.Z.Types.DANGER,
            imageData: c,
            button: b,
            className: p,
            iconClassName: m,
            title: h,
            body: x,
            style: g,
            align: f = r.A.Align.START,
        } = e,
        v = r.A.Direction.HORIZONTAL;
    if (null != c) {
        let { position: e, ...a } = c;
        (l = (0, t.jsx)(r.A.Child, {
            grow: 0,
            shrink: 0,
            children: (0, t.jsx)("img", { alt: "", className: o()(u.Kk, m), ...a }),
        })),
            "right" === e && (v = r.A.Direction.HORIZONTAL_REVERSE);
    } else null != b && (a = b);
    let y = !0;
    return (
        n === i.Z.Types.PRIMARY && (y = !1),
        (0, t.jsx)(i.Z, {
            className: o()(u.RJ, p),
            type: n,
            style: g,
            children: (0, t.jsxs)(r.A, {
                direction: v,
                align: f,
                children: [
                    l,
                    (0, t.jsxs)(r.A.Child, {
                        children: [
                            null != h && "" !== h
                                ? (0, t.jsx)(d.z, {
                                      "data-migration-pending": !0,
                                      className: o()(u.$G, { [u.vV]: y }),
                                      children: h,
                                  })
                                : null,
                            (0, t.jsx)(s.a, {
                                "data-migration-pending": !0,
                                className: o()(u.Vz, { [u.vV]: y }),
                                children: x,
                            }),
                            a,
                        ],
                    }),
                ],
            }),
        })
    );
}
c.Types = i.Z.Types;
