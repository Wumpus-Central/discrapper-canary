n.d(t, {
    j: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(481060),
    a = n(538537);
function o(e) {
    let { pills: t, pillClassName: n } = e;
    return (0, i.jsx)('div', {
        className: a.container,
        children: t.map((e) =>
            (0, i.jsx)(
                s.Tooltip,
                {
                    text: e.tooltipText,
                    shouldShow: null != e.tooltipText,
                    children: (t) =>
                        (0, i.jsx)(s.Clickable, {
                            ...t,
                            className: l()(a.pill, { [a.disabled]: e.disabled }, n),
                            onClick: e.onClick,
                            children: (0, i.jsx)(s.Text, {
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
