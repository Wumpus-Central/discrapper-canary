n.d(t, {
    Dd: () => d,
    Sw: () => f,
    To: () => _
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(49800),
    o = n(600164),
    l = n(534542),
    u = n(512983),
    c = n(715943);
let d = s.Z.Types,
    f = {
        LEFT: 'left',
        RIGHT: 'right'
    };
function _(e) {
    let t,
        n,
        { type: r = s.Z.Types.DANGER, imageData: d, button: _, className: p, iconClassName: h, title: m, body: g, style: E, align: v = o.Z.Align.START } = e,
        y = o.Z.Direction.HORIZONTAL;
    if (null != d) {
        let { position: e, ...n } = d;
        (t = (0, i.jsx)(o.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, i.jsx)('img', {
                alt: '',
                className: a()(c.icon, h),
                ...n
            })
        })),
            e === f.RIGHT && (y = o.Z.Direction.HORIZONTAL_REVERSE);
    } else null != _ && (n = _);
    let I = !0;
    return (
        r === s.Z.Types.PRIMARY && (I = !1),
        (0, i.jsx)(s.Z, {
            className: a()(c.formNotice, p),
            type: r,
            style: E,
            children: (0, i.jsxs)(o.Z, {
                direction: y,
                align: v,
                children: [
                    t,
                    (0, i.jsxs)(o.Z.Child, {
                        children: [
                            null != m && '' !== m
                                ? (0, i.jsx)(u.v, {
                                      tag: u.R.H5,
                                      className: a()(c.formNoticeTitle, { [c.whiteText]: I }),
                                      faded: !0,
                                      children: m
                                  })
                                : null,
                            (0, i.jsx)(l.R, {
                                className: a()(c.formNoticeBody, { [c.whiteText]: I }),
                                children: g
                            }),
                            n
                        ]
                    })
                ]
            })
        })
    );
}
_.Types = s.Z.Types;
