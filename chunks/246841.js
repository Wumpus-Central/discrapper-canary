n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    a = n(395361),
    o = n(829820),
    s = n(191242);
function c(e) {
    let { activity: t, user: n, source: c, className: u, size: d, look: p, color: f, fullWidth: m, onAction: g } = e,
        { label: v, tooltip: _, loading: b, disabled: h, onClick: y } = (0, o.Ih)(t, n, c),
        O = () => {
            null == g || g(), y();
        };
    return (0, r.jsx)(l.ua7, {
        text: _,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsxs)(i.zx, {
                className: u,
                innerClassName: s.playButtonInner,
                size: d,
                look: p,
                color: f,
                fullWidth: m,
                onClick: O,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: h,
                submitting: b,
                children: [
                    (0, r.jsx)(a.Z, {
                        width: 16,
                        height: 16,
                    }),
                    v,
                ],
            });
        },
    });
}
