n.d(t, {
    j: function () {
        return s;
    }
});
var l = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    r = n(481060),
    o = n(538537);
function s(e) {
    let { pills: t, pillClassName: n } = e;
    return (0, l.jsx)('div', {
        className: o.container,
        children: t.map((e) =>
            (0, l.jsx)(
                r.Tooltip,
                {
                    text: e.tooltipText,
                    shouldShow: null != e.tooltipText,
                    children: (t) =>
                        (0, l.jsx)(r.Clickable, {
                            ...t,
                            className: i()(o.pill, { [o.disabled]: e.disabled }, n),
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
