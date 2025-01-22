r.d(n, {
    Dd: function () {
        return f;
    },
    Sw: function () {
        return p;
    },
    To: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(49800),
    l = r(600164),
    u = r(534542),
    c = r(512983),
    d = r(525999);
let f = s.Z.Types,
    p = {
        LEFT: 'left',
        RIGHT: 'right'
    };
function h(e) {
    let n,
        r,
        { type: a = s.Z.Types.DANGER, imageData: f, button: h, className: _, iconClassName: m, title: g, body: E, style: v, align: y = l.Z.Align.START } = e,
        b = l.Z.Direction.HORIZONTAL;
    if (null != f) {
        let { position: e, ...r } = f;
        (n = (0, i.jsx)(l.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, i.jsx)('img', {
                alt: '',
                className: o()(d.icon, m),
                ...r
            })
        })),
            e === p.RIGHT && (b = l.Z.Direction.HORIZONTAL_REVERSE);
    } else null != h && (r = h);
    let I = !0;
    return (
        a === s.Z.Types.PRIMARY && (I = !1),
        (0, i.jsx)(s.Z, {
            className: o()(d.formNotice, _),
            type: a,
            style: v,
            children: (0, i.jsxs)(l.Z, {
                direction: b,
                align: y,
                children: [
                    n,
                    (0, i.jsxs)(l.Z.Child, {
                        children: [
                            null != g && '' !== g
                                ? (0, i.jsx)(c.v, {
                                      tag: c.R.H5,
                                      className: o()(d.formNoticeTitle, { [d.whiteText]: I }),
                                      faded: !0,
                                      children: g
                                  })
                                : null,
                            (0, i.jsx)(u.R, {
                                className: o()(d.formNoticeBody, { [d.whiteText]: I }),
                                children: E
                            }),
                            r
                        ]
                    })
                ]
            })
        })
    );
}
h.Types = s.Z.Types;
