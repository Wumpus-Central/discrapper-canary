r.d(n, {
    Dd: function () {
        return f;
    },
    Sw: function () {
        return _;
    },
    To: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(49800),
    l = r(600164),
    u = r(534542),
    c = r(512983),
    d = r(525999);
let f = o.Z.Types,
    _ = {
        LEFT: 'left',
        RIGHT: 'right'
    };
function h(e) {
    let n,
        r,
        { type: a = o.Z.Types.DANGER, imageData: f, button: h, className: p, iconClassName: m, title: g, body: E, style: v, align: I = l.Z.Align.START } = e,
        T = l.Z.Direction.HORIZONTAL;
    if (null != f) {
        let { position: e, ...r } = f;
        (n = (0, i.jsx)(l.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, i.jsx)('img', {
                alt: '',
                className: s()(d.icon, m),
                ...r
            })
        })),
            e === _.RIGHT && (T = l.Z.Direction.HORIZONTAL_REVERSE);
    } else null != h && (r = h);
    let b = !0;
    return (
        a === o.Z.Types.PRIMARY && (b = !1),
        (0, i.jsx)(o.Z, {
            className: s()(d.formNotice, p),
            type: a,
            style: v,
            children: (0, i.jsxs)(l.Z, {
                direction: T,
                align: I,
                children: [
                    n,
                    (0, i.jsxs)(l.Z.Child, {
                        children: [
                            null != g && '' !== g
                                ? (0, i.jsx)(c.v, {
                                      tag: c.R.H5,
                                      className: s()(d.formNoticeTitle, { [d.whiteText]: b }),
                                      faded: !0,
                                      children: g
                                  })
                                : null,
                            (0, i.jsx)(u.R, {
                                className: s()(d.formNoticeBody, { [d.whiteText]: b }),
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
h.Types = o.Z.Types;
