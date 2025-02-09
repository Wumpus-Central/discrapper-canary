n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(829820);
function r(e) {
    let { activity: t, user: n, source: r, ...s } = e,
        { label: o, tooltip: c, loading: d, disabled: u, onClick: m } = (0, a.Lz)(t, n, r);
    return (0, i.jsx)(l.ua7, {
        text: c,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, i.jsx)(l.zxk, {
                ...s,
                color: u ? l.zxk.Colors.PRIMARY : l.zxk.Colors.GREEN,
                onClick: m,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: !d && u,
                submitting: d,
                children: o
            });
        }
    });
}
