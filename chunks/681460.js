t.d(n, {
    j: function () {
        return s;
    }
});
var l = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(538537);
function s(e) {
    let { pills: n, pillClassName: t } = e;
    return (0, l.jsx)('div', {
        className: o.container,
        children: n.map((e) =>
            (0, l.jsx)(
                r.Tooltip,
                {
                    text: e.tooltipText,
                    shouldShow: null != e.tooltipText,
                    children: (n) =>
                        (0, l.jsx)(r.Clickable, {
                            ...n,
                            className: i()(o.pill, { [o.disabled]: e.disabled }, t),
                            onClick: e.onClick,
                            children: (0, l.jsx)(r.Text, {
                                tag: 'span',
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: e.text
                            })
                        })
                },
                e.text
            )
        )
    });
}
